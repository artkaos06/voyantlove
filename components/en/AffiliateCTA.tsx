'use client';

// Reusable affiliate CTA component for the EN site.
//
// Captures the Google Ads gclid on first paint (URL params or sessionStorage)
// and stamps it onto the click-out URL so the gclid round-trips through
// BargesTech and lands back at /api/postback as aff_sub2.
//
// rel="sponsored noopener" is required by Google for affiliate / paid links —
// signals "this is a commercial relationship, do not pass PageRank".
// target="_blank" so reading the review and clicking through doesn't lose
// the user's place on our site if they want to come back to keep reading.

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

export type AffiliateOffer = 'keen' | 'kasamba';

interface AffiliateCTAProps {
  offer: AffiliateOffer;
  className?: string;
  children: ReactNode;
  /** Optional analytics label for differentiating CTA placements (top, mid, end). */
  placement?: string;
}

export default function AffiliateCTA({
  offer,
  className,
  children,
  placement,
}: AffiliateCTAProps) {
  const [gclid, setGclid] = useState<string | null>(null);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlGclid = params.get('gclid');
      if (urlGclid) {
        sessionStorage.setItem('gclid', urlGclid);
        setGclid(urlGclid);
      } else {
        const stored = sessionStorage.getItem('gclid');
        if (stored) setGclid(stored);
      }
    } catch {
      // sessionStorage unavailable (privacy mode / SSR mismatch) — fine,
      // click-out still works without gclid; we just lose Google Ads
      // attribution on this session.
    }
  }, []);

  const href = gclid
    ? `/api/go/${offer}?gclid=${encodeURIComponent(gclid)}`
    : `/api/go/${offer}`;

  return (
    <a
      href={href}
      className={className}
      rel="sponsored nofollow noopener"
      target="_blank"
      data-affiliate-offer={offer}
      data-affiliate-placement={placement}
    >
      {children}
    </a>
  );
}
