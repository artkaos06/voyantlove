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

export const dynamic = 'force-dynamic';

interface TelClickPayload {
  phone?: string;
  page?: string;
  ua?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  referrer?: string;
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

  // Discord notification — awaited so Vercel doesn't kill the call before
  // it completes (same pattern as /api/go/keen and /api/postback).
  await notifyDiscord({
    title: '📞 Tel button tapped on lander',
    description:
      'A visitor tapped a tel: link on the lander. Call is being placed to Goracash.',
    color:
      attributionType === 'gclid' ||
      attributionType === 'gbraid' ||
      attributionType === 'wbraid'
        ? Color.PURPLE
        : Color.YELLOW,
    fields: [
      { name: 'Page', value: page || '(unknown)', inline: false },
      { name: 'Phone', value: phone || '(unknown)', inline: true },
      { name: 'Attribution', value: attributionType, inline: true },
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
