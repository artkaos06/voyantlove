// Voyant click-out interstitial.
//
// Why this exists: until now, "🎁 Essayer Gratuitement" / "Consulter maintenant"
// buttons rendered as plain <a href="https://www.monsitevoyance.com/...">
// links. The browser navigated the user straight off-domain, so our server
// had zero visibility into affiliate clicks — no Discord ping, no digest
// counter, no log of which gclid/gbraid/wbraid was attached to which click.
// Clarity recordings hinted at funnel drop-off on /consulter (one visitor
// tapped "Essayer Gratuitement" three times without converting) but we
// couldn't correlate Clarity sessions to attribution chains.
//
// This route is the affiliate equivalent of /api/go/[offer] for the Keen
// (EN) funnel, but pointed at MonSiteVoyance (FR) which has no TUNE/postback
// integration. We can't round-trip the gclid back via postback the way the
// Keen flow does — MonSiteVoyance just reports conversions in their own
// dashboard — but we can at least log it on the click so any conversion
// that *does* surface can be manually reconciled against Google Ads OCI.
//
// Inputs (querystring):
//   id      : voyant ID, digits only (validated). Required.
//   source  : ref tag echoed to MonSiteVoyance as &ref=<source>. Optional;
//             defaults to "consulter". Capped at 60 chars.
//   gclid   : Google click ID. Optional; logged + Discord-pinged.
//   gbraid  : iOS-restricted click ID. Optional.
//   wbraid  : Web-restricted click ID. Optional.
//
// 302 (not 307) so the affiliate destination registers a fresh GET.
//
// Note on routing precedence: Next.js App Router resolves static segments
// before dynamic ones, so /api/go/voyant routes here, NOT to /api/go/[offer].

import { NextRequest, NextResponse } from 'next/server';
import { checkClickAnomaly } from '@/lib/clickAnomaly';
import { Color, notifyDiscord } from '@/lib/discord';
import { recordClickOut } from '@/lib/digestState';

export const dynamic = 'force-dynamic';

const MONSITEVOYANCE_PARTNER_ID = '936';

function buildMonSiteVoyanceUrl(id: string, source: string): string {
  return `https://www.monsitevoyance.com/zoom_voyant.php?id=${encodeURIComponent(id)}&partner=${MONSITEVOYANCE_PARTNER_ID}&ref=${encodeURIComponent(source)}`;
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const sp = request.nextUrl.searchParams;

  // Validate voyant ID — digits only, length-capped. MonSiteVoyance IDs in
  // our dataset are 4-5 digit integers; rejecting anything else stops people
  // (or bots) from using the redirect as an open-redirect probe.
  const idRaw = sp.get('id') || '';
  const id = idRaw.slice(0, 12);
  if (!id || !/^\d+$/.test(id)) {
    console.warn('[go/voyant] invalid_id', { id: idRaw.slice(0, 40) });
    return NextResponse.json(
      { ok: false, error: 'invalid_id' },
      { status: 400 }
    );
  }

  const source = (sp.get('source') || 'consulter').slice(0, 60);
  const gclid = sp.get('gclid')?.slice(0, 200) || null;
  const gbraid = sp.get('gbraid')?.slice(0, 200) || null;
  const wbraid = sp.get('wbraid')?.slice(0, 200) || null;

  const target = buildMonSiteVoyanceUrl(id, source);

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

  console.log('[go/voyant] click_out', {
    voyant_id: id,
    source,
    attribution_type: attributionType,
    has_gclid: !!gclid,
    has_gbraid: !!gbraid,
    has_wbraid: !!wbraid,
    referer,
    user_agent: userAgent.slice(0, 120),
    received_at: new Date().toISOString(),
  });

  // Daily-digest counter — same bucket as Keen click-outs and tel-clicks
  // since all three are "user-initiated affiliate conversion intent".
  recordClickOut({ attributionType, ip });

  // Click-rate anomaly detection — alerts on bursts from the same IP that
  // may indicate bot probing of the redirect endpoint.
  // Discord notifications are awaited so Vercel doesn't terminate the
  // serverless function before the webhook fires (same pattern as
  // /api/go/[offer] and /api/postback).
  const anomaly = checkClickAnomaly(ip);
  if (anomaly.shouldAlert) {
    await notifyDiscord({
      title: '🚨 Click anomaly · possible bot activity (voyant)',
      description: `Single IP fired ${anomaly.count} click-outs in the last 60 seconds. Threshold = 10/min. Cooldown 5 min before re-alerting.`,
      color: Color.RED,
      fields: [
        { name: 'IP', value: ip || '(unknown)', inline: true },
        { name: 'Voyant ID', value: id, inline: true },
        { name: 'Clicks/min', value: String(anomaly.count), inline: true },
        { name: 'User Agent', value: userAgent || '(empty)' },
        { name: 'Referer', value: referer || '(none)' },
      ],
    });
  }

  await notifyDiscord({
    title: '🔮 Click-out · voyant (MonSiteVoyance)',
    description:
      'Visitor tapped a voyant CTA on /consulter (or a pSEO page). Browser is now opening MonSiteVoyance in a new tab.',
    color:
      attributionType === 'gclid' ||
      attributionType === 'gbraid' ||
      attributionType === 'wbraid'
        ? Color.PURPLE
        : Color.YELLOW,
    fields: [
      { name: 'Voyant ID', value: id, inline: true },
      { name: 'Source', value: source, inline: true },
      { name: 'Attribution', value: attributionType, inline: true },
      ...(gclid ? [{ name: 'gclid', value: gclid, inline: false }] : []),
      ...(gbraid ? [{ name: 'gbraid', value: gbraid, inline: false }] : []),
      ...(wbraid ? [{ name: 'wbraid', value: wbraid, inline: false }] : []),
      {
        name: 'Referer',
        value: referer || '(none — likely bot or direct URL hit)',
      },
      { name: 'User Agent', value: userAgent || '(empty)' },
    ],
  });

  return NextResponse.redirect(target, 302);
}
