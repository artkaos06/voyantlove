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
// repeated postbacks; Google Ads dedupes via orderId = transaction_id, so
// duplicate uploads are silently rejected by Google rather than counted twice.
//
// Security: shared-secret query param is the v1 auth model. v2: also pin the
// inbound IP to BargesTech's outbound range once we have it from the AM.

import { NextRequest, NextResponse } from 'next/server';
import { parsePostback, validatePostbackSecret } from '@/lib/affiliates';
import {
  formatGoogleAdsDateTime,
  isGoogleAdsConfigured,
  uploadClickConversions,
} from '@/lib/googleAds';

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

  // Forward to Google Ads OCI when:
  //   - Google Ads creds are configured (graceful no-op if not)
  //   - We have a gclid to attribute against
  //   - Status is not "rejected" (avoid uploading conversions we know are bad)
  //
  // Dedup is enforced by Google Ads on `orderId = transaction_id`. If a later
  // status-change postback fires for the same transaction, Google Ads rejects
  // the duplicate as a partial failure, which we log but don't surface as an
  // error to BargesTech.
  const statusLower = event.status?.toLowerCase();
  const skipOci = statusLower === 'rejected' || !event.gclid;

  if (!skipOci && isGoogleAdsConfigured()) {
    try {
      const value = event.payout ? Number(event.payout) : undefined;
      const result = await uploadClickConversions([
        {
          gclid: event.gclid!,
          conversionDateTime: formatGoogleAdsDateTime(
            event.datetime || new Date()
          ),
          conversionValue: Number.isFinite(value) ? value : undefined,
          currencyCode: 'USD',
          orderId: event.transaction_id,
        },
      ]);
      if (result.success) {
        console.log('[postback] google_ads_oci ok', {
          txid: event.transaction_id,
          gclid: event.gclid,
          partial_failures: result.partialFailures || null,
        });
      } else {
        console.error('[postback] google_ads_oci failed', {
          txid: event.transaction_id,
          message: result.message,
        });
      }
    } catch (err) {
      // Never let an OCI failure 5xx the postback — BargesTech would retry,
      // and a flapping Google Ads endpoint shouldn't block our affiliate
      // tracking. The log is the source of truth for missed uploads.
      console.error('[postback] google_ads_oci threw', {
        txid: event.transaction_id,
        error: err instanceof Error ? err.message : String(err),
      });
    }
  } else if (skipOci) {
    console.log('[postback] google_ads_oci skipped', {
      txid: event.transaction_id,
      reason: statusLower === 'rejected' ? 'rejected_status' : 'no_gclid',
    });
  } else {
    // Google Ads not configured yet — expected during initial rollout, not
    // an error.
    console.log('[postback] google_ads_oci unconfigured', {
      txid: event.transaction_id,
    });
  }

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
