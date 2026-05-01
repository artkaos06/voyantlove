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
  const target = buildClickUrl(offer, {
    gclid: sp.get('gclid'),
    gbraid: sp.get('gbraid'),
    wbraid: sp.get('wbraid'),
  });

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
