// CPL click-out interstitial (ra11.me persona offers) — the cid spine for
// the native lead-gen funnel.
//
// Funnel position:
//   native ad → THIS ROUTE → ra11.me hosted persona landing (form) → lead
//
// The CPL network (ra11.me) supports a `request_id` round-trip: we append
// our click ID to the offer link, they store it at click time, and fire it
// back to our postback (/api/postback/cpl) on each billable lead. That makes
// per-click attribution fully automated — request_id IS our cid.
//
//   out:  https://www.ra11.me/track/lce?data=<persona hash>&request_id=<cid>
//   in :  /api/postback/cpl?secret=...&cid=[request_id]&campaign=[campaign_id]
//
// Inputs (querystring):
//   persona : noya | rosy | jade   (which offer/landing)  — required
//   source  : campaign/ad-set label echoed into the cid log (default "native")
//   v       : creative/advertorial variant label (optional)
//   click_id / gclid / gbraid / wbraid : upstream click IDs, logged for
//             manual reconciliation (native platforms pass click_id; gclid
//             only if ever run on Google, which the economics advise against)
//
// 302 so the network registers a fresh GET.

import { NextRequest, NextResponse } from 'next/server';
import { recordClickOut } from '@/lib/digestState';
import { storeClickContext, recordClickSpend } from '@/lib/cplStats';

export const dynamic = 'force-dynamic';

// Persona → ra11.me offer hash (from the tracking links the network issued).
// These are public tracking links, not secrets. Overridable via env if the
// network reissues them (CPL_PERSONA_NOYA, etc.).
const PERSONAS: Record<string, string> = {
  noya:
    process.env.CPL_PERSONA_NOYA ||
    'c0fe4fda5bef54bfff81c299a66042d11dc0e6b2-8d5926fe546-5072f6a6b5c-120fc443d53',
  rosy:
    process.env.CPL_PERSONA_ROSY ||
    'd7d55e2fbde101fc8028838f2d07c68bda315292-36af980f523-2d588f92967-11a55b943fd',
  jade:
    process.env.CPL_PERSONA_JADE ||
    'ed89b668c36ea5bcb5105f2f7ac5300f08147e19-447c3412363-e69c8ffb698-03407feb1c2',
  // New AM-recommended offer — lower friction, better conversion (replaces
  // noya as the primary after noya direct-linked at 0% on 705 clicks).
  // Same network/postback mechanism, so no other change is needed.
  v2:
    process.env.CPL_PERSONA_V2 ||
    '777dc568ac92d69713419ff4bb545dd8fba4aa87-04ed4ad90b5-bf11a8ed709-128c5d90bf0',
};

const CPL_BASE = 'https://www.ra11.me/track/lce';

function mintCid(): string {
  const ts = Date.now().toString(36);
  const rand = Math.random().toString(36).slice(2, 6);
  return `${ts}-${rand}`;
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const sp = request.nextUrl.searchParams;

  const persona = (sp.get('persona') || '').toLowerCase();
  const data = PERSONAS[persona];
  if (!data) {
    console.warn('[go/cpl] unknown_persona', { persona: persona.slice(0, 20) });
    return NextResponse.json(
      { ok: false, error: 'unknown_persona', valid: Object.keys(PERSONAS) },
      { status: 400 }
    );
  }

  const source = (sp.get('source') || 'native').slice(0, 60);
  const variant = sp.get('v')?.slice(0, 20) || null;
  // MGID placement: `widget` = {widget_id}, `wname` = {widget_name} (if the
  // account exposes it). Stored under the cid so the lead postback can
  // attribute the conversion back to the exact source for blacklisting.
  const widget = sp.get('widget')?.slice(0, 60) || null;
  const wname = sp.get('wname')?.slice(0, 120) || null;
  // Upstream click IDs — logged for reconciliation. Native platforms (MGID,
  // Taboola, Outbrain) pass their own click_id macro; capture it generically.
  const nativeClickId = sp.get('click_id')?.slice(0, 200) || null;
  const gclid = sp.get('gclid')?.slice(0, 200) || null;
  const gbraid = sp.get('gbraid')?.slice(0, 200) || null;
  const wbraid = sp.get('wbraid')?.slice(0, 200) || null;

  const cid = mintCid();

  // Build the offer URL: their data hash + our cid as request_id.
  const target = `${CPL_BASE}?data=${encodeURIComponent(data)}&request_id=${encodeURIComponent(cid)}`;

  const referer = request.headers.get('referer') || null;
  const userAgent = (request.headers.get('user-agent') || '').slice(0, 200);
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    null;

  // Display label for Discord (richer — includes native click IDs).
  const attributionType = nativeClickId
    ? 'native_click_id'
    : gclid
      ? 'gclid'
      : gbraid
        ? 'gbraid'
        : wbraid
          ? 'wbraid'
          : 'none';
  // Digest counter only tracks Google attribution buckets; native clicks
  // count as 'none' for the Google-attribution-rate metric.
  const digestAttr: 'gclid' | 'gbraid' | 'wbraid' | 'none' = gclid
    ? 'gclid'
    : gbraid
      ? 'gbraid'
      : wbraid
        ? 'wbraid'
        : 'none';

  console.log('[go/cpl] click_out', {
    cid,
    persona,
    source,
    variant,
    attribution_type: attributionType,
    native_click_id: nativeClickId,
    has_gclid: !!gclid,
    referer,
    user_agent: userAgent.slice(0, 120),
    received_at: new Date().toISOString(),
  });

  recordClickOut({ attributionType: digestAttr, ip });

  // Persist cid → MGID widget so the lead postback can attribute the
  // conversion to the exact source (for precise per-placement blacklisting).
  // Best-effort; a KV hiccup never blocks the redirect.
  await storeClickContext(cid, {
    widget: widget || undefined,
    wname: wname || undefined,
    teaser: variant || undefined,
  });

  // Accumulate this click's price per source + creative → cost-per-lead in
  // the readout without touching the MGID CSV. Label matches the lead
  // attribution (wname preferred, else widget id).
  const clickPrice = Number(sp.get('click_price'));
  await recordClickSpend(wname || widget, variant, clickPrice);

  // /api/go/cpl is fully Discord-SILENT by design. At native volume the
  // redirect is hit hundreds of times a day (plus bot/scraper traffic), so
  // ANY per-click Discord call — click-out OR anomaly alert — floods the
  // channel (serverless can't reliably throttle the anomaly cooldown across
  // instances). Click-outs are still captured in the structured log above
  // and aggregated into the daily digest via recordClickOut. Discord is
  // reserved for genuinely rare, valuable events: billable LEADS, which
  // ping from /api/postback/cpl. Debug a single click via Vercel logs (cid).

  return NextResponse.redirect(target, 302);
}
