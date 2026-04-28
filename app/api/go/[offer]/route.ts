// Server-side click-out handler.
//
// Flow:
//   user clicks ad → lands on /en/lp/<lp> with ?gclid=ABC
//   client captures gclid into sessionStorage
//   user clicks CTA → /api/go/keen?gclid=ABC (or kasamba)
//   we 302 to BargesTech tracking URL with aff_sub2=ABC
//   TUNE records click, redirects user to advertiser lander
//   if user converts, BargesTech postback hits /api/postback with aff_sub2=ABC
//
// 302 (not 307) so the click registers as a fresh GET in TUNE.

import { NextRequest, NextResponse } from 'next/server';
import { buildClickUrl, isValidOfferKey } from '@/lib/affiliates';

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

  const gclid = request.nextUrl.searchParams.get('gclid') || undefined;
  const target = buildClickUrl(offer, gclid);

  if (!target) {
    // Offer base URL not configured — fail loud rather than redirect to a
    // broken target. Logging in Vercel surfaces the misconfig fast.
    console.error('[go] offer_not_configured', { offer });
    return NextResponse.json(
      { ok: false, error: 'offer_not_configured' },
      { status: 503 }
    );
  }

  return NextResponse.redirect(target, 302);
}
