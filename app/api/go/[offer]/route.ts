// Server-side click-out handler.
//
// Flow:
//   user clicks ad → lands on /en/<topic-page> with ?gclid=ABC
//                    (or ?gbraid=XYZ for iOS-restricted tracking,
//                     or ?wbraid=DEF for web-restricted tracking)
//   client captures the attribution param into sessionStorage
//   user clicks CTA → /api/go/keen?gclid=ABC (or gbraid=XYZ / wbraid=DEF)
//   we 302 to BargesTech tracking URL with the param stamped onto a TUNE
//   sub-ID slot (aff_sub2 / aff_sub3 / aff_sub4 respectively)
//   TUNE records click, redirects user to advertiser lander
//   if user converts, BargesTech postback hits /api/postback carrying the
//   sub-IDs back to us, and we forward the conversion to Google Ads OCI.
//
// 302 (not 307) so the click registers as a fresh GET in TUNE.

import { NextRequest, NextResponse } from 'next/server';
import { buildClickUrl, isValidOfferKey } from '@/lib/affiliates';
import { checkClickAnomaly } from '@/lib/clickAnomaly';
import { Color, notifyDiscord } from '@/lib/discord';
import { recordClickOut } from '@/lib/digestState';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ offer: string }> }
) {
  const { offer } = await params;

  if (!isValidOfferKey(offer)) {
    return NextResponse.json(
      { ok: false, error: 'unknown_offer' },
      { status: 404 }
    );
  }

  const sp = request.nextUrl.searchParams;
  const gclid = sp.get('gclid');
  const gbraid = sp.get('gbraid');
  const wbraid = sp.get('wbraid');
  const target = buildClickUrl(offer, { gclid, gbraid, wbraid });

  if (!target) {
    // Offer base URL not configured — fail loud rather than redirect to a
    // broken target. Logging in Vercel surfaces the misconfig fast.
    console.error('[go] offer_not_configured', { offer });
    return NextResponse.json(
      { ok: false, error: 'offer_not_configured' },
      { status: 503 }
    );
  }

  // Diagnostic log — searchable in Vercel logs by offer or attribution_type.
  // Lets us trace each click-out and confirm gclid/gbraid/wbraid are arriving
  // at our handler from the lander as expected.
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

  console.log('[go] click_out', {
    offer,
    attribution_type: attributionType,
    has_gclid: !!gclid,
    has_gbraid: !!gbraid,
    has_wbraid: !!wbraid,
    referer,
    user_agent: userAgent.slice(0, 120),
    received_at: new Date().toISOString(),
  });

  // Daily-digest counter.
  recordClickOut({ attributionType, ip });

  // Click-rate anomaly detection — alerts on bursts of clicks from the
  // same IP that may indicate bot activity or click-fraud against our
  // /api/go endpoint.
  // Discord notifications — MUST be awaited. Vercel serverless terminates
  // the function instance once the response is returned; fire-and-forget
  // async work after the return is killed before it completes. We accept
  // the small latency cost (Discord fetch has a 2s timeout cap) to get
  // reliable delivery. The user only sees this latency on the new-tab
  // affiliate redirect, which is acceptable.
  const anomaly = checkClickAnomaly(ip);
  if (anomaly.shouldAlert) {
    await notifyDiscord({
      title: '🚨 Click anomaly · possible bot activity',
      description: `Single IP fired ${anomaly.count} click-outs in the last 60 seconds. Threshold = 10/min. Cooldown 5 min before re-alerting.`,
      color: Color.RED,
      fields: [
        { name: 'IP', value: ip || '(unknown)', inline: true },
        { name: 'Offer', value: offer, inline: true },
        { name: 'Clicks/min', value: String(anomaly.count), inline: true },
        { name: 'User Agent', value: userAgent || '(empty)' },
        { name: 'Referer', value: referer || '(none)' },
      ],
    });
  }

  await notifyDiscord({
    title: `🔗 Click-out · ${offer}`,
    color:
      attributionType === 'gclid' || attributionType === 'gbraid' ||
      attributionType === 'wbraid'
        ? Color.PURPLE
        : Color.YELLOW,
    fields: [
      {
        name: 'Attribution',
        value: attributionType,
        inline: true,
      },
      ...(gclid ? [{ name: 'gclid', value: gclid, inline: true }] : []),
      ...(gbraid ? [{ name: 'gbraid', value: gbraid, inline: true }] : []),
      ...(wbraid ? [{ name: 'wbraid', value: wbraid, inline: true }] : []),
      {
        name: 'Referer',
        value: referer || '(none — likely bot or direct URL hit)',
      },
      {
        name: 'User Agent',
        value: userAgent || '(empty)',
      },
    ],
  });

  return NextResponse.redirect(target, 302);
}
