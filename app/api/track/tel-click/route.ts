// Tel-click tracking endpoint.
//
// Why this exists: when a visitor taps a `<a href="tel:...">` link on the
// lander, the click never reaches our server — the browser hands the URL
// directly to the dialer. That means our funnel observability has a blind
// spot exactly at the most important conversion moment for FR (Goracash
// call funnel) and EN (any future call-based offer).
//
// The fix: a tiny client-side beacon fires on tel: tap and POSTs to this
// endpoint with the relevant context. The endpoint logs, increments digest
// counters, and pings Discord so the operator can see real-time call-
// intent signal — the same way `/api/go/keen` does for affiliate redirects.
//
// Reliability: the client uses navigator.sendBeacon() which queues the
// request to survive the navigation to the dialer. This is critical
// because regular fetch() gets killed mid-flight when the user leaves the
// page.
//
// Note: this captures TEL CLICKS on our lander, not call-asset taps from
// the Google Ads search result itself (those bypass our domain entirely
// and are only visible in Google Ads call-conversion reports).

import { NextRequest, NextResponse } from 'next/server';
import { Color, notifyDiscord } from '@/lib/discord';
import { recordClickOut } from '@/lib/digestState';
import { LANDERS, normaliseSource, recordLpEvent } from '@/lib/lpTrack';

export const dynamic = 'force-dynamic';

interface TelClickPayload {
  phone?: string;
  page?: string;
  ua?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  referrer?: string;
  // MGID attribution, forwarded by the sitewide beacon in app/layout.tsx.
  source?: string;
  sid?: string;
  click_id?: string;
  creative_id?: string;
}

/** '/lp/histoire-sophie/' → 'histoire-sophie', else '' (not an angle lander). */
function landerFromPath(page: string): string {
  const slug = page.replace(/^\/lp\//, '').replace(/\/$/, '');
  return LANDERS.has(slug) ? slug : '';
}

async function handle(request: NextRequest): Promise<NextResponse> {
  let body: TelClickPayload = {};
  try {
    body = (await request.json()) as TelClickPayload;
  } catch {
    // sendBeacon sends as Blob — try parsing as text
    try {
      const text = await request.text();
      if (text) body = JSON.parse(text) as TelClickPayload;
    } catch {
      /* malformed body — fall through with empty payload */
    }
  }

  const phone = (body.phone || '').slice(0, 40);
  const page = (body.page || '').slice(0, 200);
  const ua = (body.ua || '').slice(0, 300);
  const gclid = body.gclid ? body.gclid.slice(0, 200) : null;
  const gbraid = body.gbraid ? body.gbraid.slice(0, 200) : null;
  const wbraid = body.wbraid ? body.wbraid.slice(0, 200) : null;
  const referrer = body.referrer ? body.referrer.slice(0, 200) : null;

  // MGID attribution. `lander` is derived from the path rather than trusted
  // from the payload, so a stray beacon can't attribute a tap to the wrong
  // angle. Empty for non-lander pages (site-wide tel: links still ping).
  const lander = landerFromPath(page);
  const source = normaliseSource(body.source || '');
  const sid = (body.sid || '').slice(0, 32);
  const clickId = (body.click_id || '').slice(0, 64);
  const creativeId = (body.creative_id || '').slice(0, 32);

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    null;

  const attributionType = gclid
    ? 'gclid'
    : gbraid
      ? 'gbraid'
      : wbraid
        ? 'wbraid'
        : 'none';

  console.log('[track] tel_click', {
    phone,
    page,
    lander,
    source,
    creative_id: creativeId,
    attribution_type: attributionType,
    has_gclid: !!gclid,
    has_gbraid: !!gbraid,
    has_wbraid: !!wbraid,
    ip,
    ua: ua.slice(0, 120),
    received_at: new Date().toISOString(),
  });

  // Count toward the daily digest under the click-out category. Tel taps
  // and affiliate redirects are both "user-initiated conversion intent"
  // actions, even though one goes through /api/go and the other goes
  // straight to the dialer.
  recordClickOut({ attributionType, ip });

  // Per-source counters for the angle landers, so /api/admin/lp-funnel can
  // report tap rate by MGID source. No-ops for non-lander pages.
  if (lander) {
    await recordLpEvent('tel', lander, {
      source,
      sid,
      clickId,
      creativeId,
    });
  }

  // category:'lead' is REQUIRED, not decoration. notifyDiscord runs in
  // leads-only mode by default (DISCORD_LEADS_ONLY unset → on), which drops
  // anything not tagged 'lead' or 'digest'. This call previously passed no
  // category, so it defaulted to 'other' and every phone tap was silently
  // discarded before reaching the webhook — the tap is the money signal on a
  // call offer, so it belongs in the leads feed.
  await notifyDiscord({
    category: 'lead',
    title: '📞 Appel lancé depuis un lander',
    description: `Numéro composé : **${phone || '—'}**`,
    color: Color.GREEN,
    fields: [
      { name: 'Angle', value: lander || page || '(hors lander)', inline: true },
      { name: 'Source MGID', value: source || '—', inline: true },
      ...(creativeId ? [{ name: 'Créa', value: creativeId, inline: true }] : []),
      ...(sid ? [{ name: 'source_id', value: sid, inline: true }] : []),
      ...(clickId ? [{ name: 'click_id', value: clickId, inline: false }] : []),
      ...(attributionType !== 'none'
        ? [{ name: 'Attribution', value: attributionType, inline: true }]
        : []),
      ...(gclid ? [{ name: 'gclid', value: gclid, inline: false }] : []),
      ...(gbraid ? [{ name: 'gbraid', value: gbraid, inline: false }] : []),
      ...(wbraid ? [{ name: 'wbraid', value: wbraid, inline: false }] : []),
      ...(referrer
        ? [{ name: 'Referrer', value: referrer, inline: false }]
        : []),
      { name: 'User Agent', value: ua || '(empty)' },
    ],
  });

  // 204 No Content is the canonical sendBeacon response — minimal payload
  // so the beacon completes fast even on slow networks.
  return new NextResponse(null, { status: 204 });
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  return handle(request);
}

// sendBeacon defaults to POST but some browsers / privacy extensions
// might do a preflight. Accept GET as a fallback for resilience.
export async function GET(request: NextRequest): Promise<NextResponse> {
  return handle(request);
}
