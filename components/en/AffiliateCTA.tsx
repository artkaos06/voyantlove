'use client';

// Reusable affiliate CTA component for the EN site.
//
// Captures Google's attribution identifier on first paint and stamps it onto
// the click-out URL so it round-trips through BargesTech and lands back at
// /api/postback. Google sets exactly one of three identifiers per click:
//
//   gclid  : standard web clicks (most users)
//   gbraid : iOS users with restricted ad tracking (Apple ATT denied)
//   wbraid : web clicks where gclid couldn't be set due to browser privacy
//
// We capture whichever is present from the URL on landing, persist it to
// sessionStorage so it survives in-tab navigation across topic / review
// pages, then forward it with the matching name on click-out.
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

interface Attribution {
  gclid: string | null;
  gbraid: string | null;
  wbraid: string | null;
}

const STORAGE_KEYS: ReadonlyArray<keyof Attribution> = [
  'gclid',
  'gbraid',
  'wbraid',
];

export default function AffiliateCTA({
  offer,
  className,
  children,
  placement,
}: AffiliateCTAProps) {
  const [attribution, setAttribution] = useState<Attribution>({
    gclid: null,
    gbraid: null,
    wbraid: null,
  });

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const next: Attribution = { gclid: null, gbraid: null, wbraid: null };

      for (const key of STORAGE_KEYS) {
        const fromUrl = params.get(key);
        if (fromUrl) {
          // URL wins — this is a fresh landing with the latest attribution.
          sessionStorage.setItem(key, fromUrl);
          next[key] = fromUrl;
        } else {
          // No URL value — fall back to whatever the prior landing stored.
          const stored = sessionStorage.getItem(key);
          if (stored) next[key] = stored;
        }
      }
      setAttribution(next);
    } catch {
      // sessionStorage unavailable (privacy mode / SSR mismatch) — fine,
      // click-out still works without attribution; we just lose Google Ads
      // attribution on this session.
    }
  }, []);

  const href = (() => {
    const params = new URLSearchParams();
    for (const key of STORAGE_KEYS) {
      const value = attribution[key];
      if (value) params.set(key, value);
    }
    const qs = params.toString();
    return qs ? `/api/go/${offer}?${qs}` : `/api/go/${offer}`;
  })();

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
