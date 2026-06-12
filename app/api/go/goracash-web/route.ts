// Goracash WEB offer click-out interstitial (v0 of the click-ID spine).
//
// Funnel position:
//   ad click → our lander/advertorial → THIS ROUTE → news-voyance.com signup
//
// The Goracash web landing accepts an affiliate tracker via the `datas`
// query param (confirmed in the backoffice landing configurator:
//   https://www.news-voyance.com/fr_FR/?datas=TEST123&thematic=338&idw=6348 ).
// Every conversion in the Goracash dashboard displays that tracker, so the
// value we send here is our ONLY join key between "a conversion happened"
// and "which click caused it".
//
// v0 design — Discord as the click ledger (no KV dependency yet):
//   1. Mint a short first-party click ID (cid).
//   2. Send cid as `datas` to Goracash (short value — unknown length limit
//      on their side, so we do NOT send the raw gclid which can exceed
//      100 chars).
//   3. Log the full click context (cid + gclid/gbraid/wbraid + source +
//      variant + referer + UA) to Vercel logs AND a Discord embed.
//   4. When a conversion shows up in the Goracash dashboard with
//      datas=<cid>, search Discord for the cid → recover the gclid →
//      upload to Google Ads OCI (manual or scripted).
//
// v1 (when volume justifies / postback capability confirmed): replace the
// Discord-search step with a KV click store + automated conversion poller.
//
// Querystring inputs:
//   source : lander slug that sent the click (default "direct")
//   v      : lander A/B variant label (optional)
//   gclid / gbraid / wbraid : Google attribution IDs (optional)

import { NextRequest, NextResponse } from 'next/server';
import { checkClickAnomaly } from '@/lib/clickAnomaly';
import { Color, notifyDiscord } from '@/lib/discord';
import { recordClickOut } from '@/lib/digestState';

export const dynamic = 'force-dynamic';

// Landing URL from the Goracash backoffice (Landings → News-voyance France
// "10 premières minutes offertes"). thematic/idw identify the landing +
// affiliate account. Overridable via env without a redeploy.
const DEFAULT_LANDING_URL =
  'https://www.news-voyance.com/fr_FR/?thematic=338&idw=6348';

/**
 * Mint a compact, URL-safe, human-searchable click ID.
 * Format: base36 timestamp + 4 random chars, e.g. "swl3kx9q-7f3a".
 * Short enough to survive any reasonable tracker length limit, unique
 * enough at our volume (collisions need two clicks in the same millisecond
 * hitting the same 4-char suffix).
 */
function mintCid(): string {
  const ts = Date.now().toString(36);
  const rand = Math.random().toString(36).slice(2, 6);
  return `${ts}-${rand}`;
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const sp = request.nextUrl.searchParams;

  const source = (sp.get('source') || 'direct').slice(0, 60);
  const variant = sp.get('v')?.slice(0, 20) || null;
  const gclid = sp.get('gclid')?.slice(0, 200) || null;
  const gbraid = sp.get('gbraid')?.slice(0, 200) || null;
  const wbraid = sp.get('wbraid')?.slice(0, 200) || null;

  const cid = mintCid();

  const base = process.env.GORACASH_WEB_URL || DEFAULT_LANDING_URL;
  let target: string;
  try {
    const url = new URL(base);
    url.searchParams.set('datas', cid);
    target = url.toString();
  } catch {
    console.error('[go/goracash-web] invalid_landing_url', { base });
    return NextResponse.json(
      { ok: false, error: 'landing_url_misconfigured' },
      { status: 503 }
    );
  }

  const attributionType = gclid
    ? 'gclid'
    : gbraid
      ? 'gbraid'
      : wbraid
        ? 'wbraid'
        : 'none';

  const referer = request.headers.get('referer') || null;
  const userAgent = (request.headers.get('user-agent') || '').slice(0, 200);
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    null;

  // Structured log — the cid makes this row joinable with the Goracash
  // dashboard. Vercel free-tier retention is short; Discord (below) is the
  // durable ledger.
  console.log('[go/goracash-web] click_out', {
    cid,
    source,
    variant,
    attribution_type: attributionType,
    has_gclid: !!gclid,
    has_gbraid: !!gbraid,
    has_wbraid: !!wbraid,
    referer,
    user_agent: userAgent.slice(0, 120),
    received_at: new Date().toISOString(),
  });

  recordClickOut({ attributionType, ip });

  const anomaly = checkClickAnomaly(ip);
  if (anomaly.shouldAlert) {
    await notifyDiscord({
      title: '🚨 Click anomaly · possible bot activity (goracash-web)',
      description: `Single IP fired ${anomaly.count} click-outs in the last 60 seconds. Threshold = 10/min. Cooldown 5 min before re-alerting.`,
      color: Color.RED,
      fields: [
        { name: 'IP', value: ip || '(unknown)', inline: true },
        { name: 'cid', value: cid, inline: true },
        { name: 'Clicks/min', value: String(anomaly.count), inline: true },
        { name: 'User Agent', value: userAgent || '(empty)' },
        { name: 'Referer', value: referer || '(none)' },
      ],
    });
  }

  // The Discord embed IS the v0 click store. When a conversion appears in
  // the Goracash dashboard with tracker `datas=<cid>`, searching Discord
  // for that cid recovers the full click context (gclid for OCI upload,
  // source/variant for the experiment readout).
  await notifyDiscord({
    title: '🌐 Click-out · Goracash WEB (news-voyance)',
    description:
      'Visitor sent to the Goracash web signup landing. Conversion will appear in the Goracash dashboard with this cid as tracker.',
    color:
      attributionType === 'gclid' ||
      attributionType === 'gbraid' ||
      attributionType === 'wbraid'
        ? Color.PURPLE
        : Color.YELLOW,
    fields: [
      { name: 'cid (tracker)', value: cid, inline: true },
      { name: 'Source', value: source, inline: true },
      ...(variant ? [{ name: 'Variant', value: variant, inline: true }] : []),
      { name: 'Attribution', value: attributionType, inline: true },
      ...(gclid ? [{ name: 'gclid', value: gclid, inline: false }] : []),
      ...(gbraid ? [{ name: 'gbraid', value: gbraid, inline: false }] : []),
      ...(wbraid ? [{ name: 'wbraid', value: wbraid, inline: false }] : []),
      {
        name: 'Referer',
        value: referer || '(none — direct hit or test)',
      },
      { name: 'User Agent', value: userAgent || '(empty)' },
    ],
  });

  return NextResponse.redirect(target, 302);
}
