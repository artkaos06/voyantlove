// BargesTech (TUNE/HasOffers) postback receiver.
//
// Configure in BargesTech backoffice (Pixels & Postbacks → URL Postback):
//
//   https://www.voyantlove.fr/api/postback
//     ?secret=<BARGESTECH_POSTBACK_SECRET>
//     &txid={transaction_id}
//     &event={event_id}
//     &offer={offer_id}
//     &goal={goal_id}
//     &goal_name={goal_name}
//     &payout={payout}
//     &gclid={aff_sub2}
//     &country={country_code}
//     &status={status}
//     &dt={datetime}
//
// The receiver is tolerant of missing fields — only `transaction_id` and
// `secret` are required. Status changes (pending → approved → rejected) fire
// repeated postbacks; we currently log them all and rely on the Google Ads
// OCI bridge (TODO) to dedupe via {transaction_id, goal_id, status}.
//
// Security: shared-secret query param is the v1 auth model. v2: also pin the
// inbound IP to BargesTech's outbound range once we have it from the AM.

import { NextRequest, NextResponse } from 'next/server';
import { parsePostback, validatePostbackSecret } from '@/lib/affiliates';

export const dynamic = 'force-dynamic';

async function handle(request: NextRequest) {
  const url = new URL(request.url);
  const secret = url.searchParams.get('secret');

  if (!validatePostbackSecret(secret)) {
    // Don't leak the configured secret in logs even on auth failure.
    console.warn('[postback] unauthorized', {
      ip:
        request.headers.get('x-forwarded-for') ||
        request.headers.get('x-real-ip'),
      ua: request.headers.get('user-agent'),
      path: url.pathname,
    });
    return NextResponse.json(
      { ok: false, error: 'unauthorized' },
      { status: 401 }
    );
  }

  const event = parsePostback(url.searchParams);
  if (!event) {
    return NextResponse.json(
      { ok: false, error: 'missing_transaction_id' },
      { status: 400 }
    );
  }

  // Structured log — searchable in Vercel logs by transaction_id.
  console.log('[postback] conversion', {
    transaction_id: event.transaction_id,
    event_id: event.event_id,
    offer_id: event.offer_id,
    goal_id: event.goal_id,
    goal_name: event.goal_name,
    payout: event.payout,
    revenue: event.revenue,
    status: event.status,
    gclid: event.gclid,
    country: event.country_code,
    datetime: event.datetime,
    received_at: new Date().toISOString(),
  });

  // TODO(google-ads-oci): once the Google Ads conversion action is created,
  // forward {gclid, payout, datetime, transaction_id} via the Offline
  // Conversion Import API. Dedupe key: transaction_id + goal_id + status.

  return NextResponse.json({ ok: true });
}

export async function GET(request: NextRequest) {
  return handle(request);
}

// Some networks send postbacks as POST; accept both. TUNE/HasOffers default
// is GET, but the AM may flip it.
export async function POST(request: NextRequest) {
  return handle(request);
}
