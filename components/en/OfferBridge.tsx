'use client';

// Mid-article "emotional bridge" offer box. Used to break the wall between
// editorial content and the affiliate offer in a way that doesn't feel like
// banner-ad noise.
//
// Pattern: editorial paragraph above sets up a curiosity gap or emotional
// pain point, this component delivers the offer at the moment of peak need.
//
// Captures gclid/gbraid/wbraid the same way AffiliateCTA does — so direct
// CTA inside this box works as a primary conversion path, not just a link
// to the review page.

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

export type AffiliateOffer = 'keen' | 'kasamba';

interface OfferBridgeProps {
  offer?: AffiliateOffer;
  /** Optional eyebrow (small label above the headline). */
  eyebrow?: string;
  /** Main headline of the offer card. */
  headline: ReactNode;
  /** Sub-text below the headline (1-2 sentences). */
  subtext?: ReactNode;
  /** Visible label on the CTA button. */
  ctaLabel?: string;
  /** Footnote below the CTA button (small print, e.g. price clarification). */
  footnote?: ReactNode;
  /** Visual variant. */
  variant?: 'gradient' | 'soft';
  /** Analytics placement label. */
  placement?: string;
}

const STORAGE_KEYS = ['gclid', 'gbraid', 'wbraid'] as const;

export default function OfferBridge({
  offer = 'keen',
  eyebrow = 'Personalized for your situation',
  headline,
  subtext,
  ctaLabel = 'Talk to a love psychic — 5 min for $1',
  footnote = '5 minutes for $1 with a new advisor · over by tomorrow if not for you · 18+',
  variant = 'gradient',
  placement,
}: OfferBridgeProps) {
  const [attribution, setAttribution] = useState<{
    gclid: string | null;
    gbraid: string | null;
    wbraid: string | null;
  }>({ gclid: null, gbraid: null, wbraid: null });

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const next = { gclid: null as string | null, gbraid: null as string | null, wbraid: null as string | null };
      for (const key of STORAGE_KEYS) {
        const fromUrl = params.get(key);
        if (fromUrl) {
          sessionStorage.setItem(key, fromUrl);
          next[key] = fromUrl;
        } else {
          const stored = sessionStorage.getItem(key);
          if (stored) next[key] = stored;
        }
      }
      setAttribution(next);
    } catch {
      /* sessionStorage unavailable */
    }
  }, []);

  const href = (() => {
    const sp = new URLSearchParams();
    for (const key of STORAGE_KEYS) {
      const v = attribution[key];
      if (v) sp.set(key, v);
    }
    const qs = sp.toString();
    return qs ? `/api/go/${offer}?${qs}` : `/api/go/${offer}`;
  })();

  const containerClass =
    variant === 'gradient'
      ? 'bg-gradient-to-br from-purple-600 via-purple-600 to-pink-500 text-white'
      : 'bg-purple-50 border border-purple-200 text-gray-900';

  const buttonClass =
    variant === 'gradient'
      ? 'bg-white text-purple-700 hover:bg-gray-50'
      : 'bg-purple-600 text-white hover:bg-purple-700';

  const eyebrowClass =
    variant === 'gradient' ? 'text-purple-100' : 'text-purple-600';

  const subtextClass = variant === 'gradient' ? 'text-purple-50' : 'text-gray-700';

  const footnoteClass = variant === 'gradient' ? 'text-purple-100' : 'text-gray-500';

  return (
    <aside
      className={`not-prose my-10 p-6 md:p-8 rounded-2xl shadow-md ${containerClass}`}
    >
      <p
        className={`text-xs uppercase tracking-wide font-bold mb-2 ${eyebrowClass}`}
      >
        {eyebrow}
      </p>
      <p className="text-xl md:text-2xl font-extrabold leading-snug mb-3">
        {headline}
      </p>
      {subtext && (
        <p className={`text-base leading-relaxed mb-5 ${subtextClass}`}>
          {subtext}
        </p>
      )}
      <a
        href={href}
        rel="sponsored nofollow noopener"
        target="_blank"
        data-affiliate-offer={offer}
        data-affiliate-placement={placement}
        className={`inline-flex items-center gap-2 font-bold px-5 py-3 rounded-lg transition-colors ${buttonClass}`}
      >
        {ctaLabel}
        <span aria-hidden="true">→</span>
      </a>
      {footnote && (
        <p className={`text-xs mt-3 ${footnoteClass}`}>{footnote}</p>
      )}
    </aside>
  );
}
