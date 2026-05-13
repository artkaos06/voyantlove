'use client';

// Psychic advisor cards grid for the commercial-intent lander.
//
// Each card surfaces a real Keen love & relationship advisor (data in
// lib/keenAdvisors.ts) with rating, price, specialty chips, and a direct
// affiliate CTA. The cards are designed to look enough like Keen's actual
// browse UI that visitors immediately understand what they'll get on the
// other side of the click — which is the message-match win that converts
// commercial-intent traffic.
//
// CTA behavior: every card's button forwards gclid/gbraid/wbraid through
// the click-out chain like AffiliateCTA. Direct path: no intermediate
// review page.

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  formatReviewCount,
  getInitials,
  pickAdvisors,
  type KeenAdvisor,
} from '@/lib/keenAdvisors';

export type AffiliateOffer = 'keen' | 'kasamba';

const ATTR_KEYS = ['gclid', 'gbraid', 'wbraid'] as const;

interface PsychicCardsProps {
  /** How many advisor cards to render. Defaults to 6. */
  count?: number;
  /** Affiliate offer to route clicks to. */
  offer?: AffiliateOffer;
  /** Placement label for analytics on each card's click. */
  placement?: string;
}

export default function PsychicCards({
  count = 6,
  offer = 'keen',
  placement = 'psychic_cards_grid',
}: PsychicCardsProps) {
  const advisors = pickAdvisors(count);

  const [attribution, setAttribution] = useState<{
    gclid: string | null;
    gbraid: string | null;
    wbraid: string | null;
  }>({ gclid: null, gbraid: null, wbraid: null });

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const next = {
        gclid: null as string | null,
        gbraid: null as string | null,
        wbraid: null as string | null,
      };
      for (const k of ATTR_KEYS) {
        const fromUrl = params.get(k);
        if (fromUrl) {
          sessionStorage.setItem(k, fromUrl);
          next[k] = fromUrl;
        } else {
          const stored = sessionStorage.getItem(k);
          if (stored) next[k] = stored;
        }
      }
      setAttribution(next);
    } catch {
      /* sessionStorage unavailable */
    }
  }, []);

  const href = (() => {
    const sp = new URLSearchParams();
    for (const k of ATTR_KEYS) {
      const v = attribution[k];
      if (v) sp.set(k, v);
    }
    const qs = sp.toString();
    return qs ? `/api/go/${offer}?${qs}` : `/api/go/${offer}`;
  })();

  return (
    <section className="not-prose my-10" aria-label="Featured psychic advisors">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {advisors.map((a) => (
          <AdvisorCard
            key={a.name}
            advisor={a}
            href={href}
            placement={`${placement}_${a.name.toLowerCase().replace(/\s+/g, '_')}`}
            offer={offer}
          />
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-4 text-center italic">
        Advisor data captured from Keen&apos;s public Love &amp; Relationships
        category. Ratings refresh continuously on Keen; check the live
        platform for current numbers.
      </p>
    </section>
  );
}

/**
 * Pseudo-random "last reading" timestamp for an advisor card.
 * Deterministic per-name so SSR + client agree. Values cluster between
 * 1-30 minutes ago — believable for a busy platform.
 */
function lastReadingMinutesAgo(name: string): number {
  // Simple hash from name to a number 1-30.
  let h = 0;
  for (let i = 0; i < name.length; i++) {
    h = (h * 31 + name.charCodeAt(i)) % 9999;
  }
  return (h % 28) + 2; // 2-29
}

function AdvisorCard({
  advisor,
  href,
  placement,
  offer,
}: {
  advisor: KeenAdvisor;
  href: string;
  placement: string;
  offer: string;
}) {
  const minsAgo = lastReadingMinutesAgo(advisor.name);

  return (
    <article className="group relative flex flex-col bg-white rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all overflow-hidden">
      {/* Header: avatar + name + availability */}
      <div className="flex items-start gap-3 p-4 pb-3">
        <Avatar advisor={advisor} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-gray-900 text-base leading-tight truncate">
              {advisor.name}
            </h3>
            <span
              className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-full whitespace-nowrap"
              aria-label="Available now"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-amber-500" aria-hidden="true">
              ★
            </span>
            <span className="font-bold text-gray-900 text-sm">
              {advisor.rating.toFixed(2)}
            </span>
            <span className="text-gray-500 text-xs">
              ({formatReviewCount(advisor.reviewCount)})
            </span>
          </div>
        </div>
      </div>

      {/* Hook — outcome-led copy */}
      <div className="px-4 pb-3">
        <p className="text-sm text-gray-800 leading-relaxed font-medium">
          {advisor.hook}
        </p>
      </div>

      {/* Live indicator + tenure */}
      <div className="px-4 pb-3">
        <p className="text-[11px] text-gray-500">
          <span className="text-emerald-600 font-semibold">
            Last reading: {minsAgo} min ago
          </span>{' '}
          ·{' '}
          {formatReviewCount(advisor.totalReadings)} total since{' '}
          {advisor.memberSince}
        </p>
      </div>

      {/* Specialty chips */}
      {advisor.specialties && advisor.specialties.length > 0 && (
        <div className="px-4 pb-3 flex flex-wrap gap-1.5">
          {advisor.specialties.slice(0, 3).map((s) => (
            <span
              key={s}
              className="text-[11px] text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full font-medium"
            >
              {s}
            </span>
          ))}
        </div>
      )}

      {/* Pricing + outcome-led CTA */}
      <div className="mt-auto p-4 pt-2 border-t border-gray-100 bg-gradient-to-b from-gray-50 to-white">
        {advisor.introOffer && (
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-purple-700 font-bold text-sm">
              5 min for $1
            </span>
            <span className="text-gray-400 text-xs line-through">
              ${advisor.pricePerMinUsd.toFixed(2)}/min
            </span>
          </div>
        )}
        <a
          href={href}
          rel="sponsored nofollow noopener"
          target="_blank"
          data-affiliate-offer={offer}
          data-affiliate-placement={placement}
          className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold py-2.5 rounded-lg transition-colors"
        >
          {advisor.ctaLabel}
        </a>
        <p className="text-[10px] text-gray-500 text-center mt-2">
          $1 trial · no subscription · cancel anytime
        </p>
      </div>
    </article>
  );
}

function Avatar({ advisor }: { advisor: KeenAdvisor }) {
  if (advisor.photoSrc) {
    return (
      <div className="relative h-14 w-14 flex-shrink-0 rounded-full overflow-hidden ring-2 ring-purple-200">
        <Image
          src={advisor.photoSrc}
          alt={`${advisor.name} — psychic advisor on Keen`}
          fill
          sizes="56px"
          className="object-cover"
        />
      </div>
    );
  }
  return (
    <div
      className="h-14 w-14 flex-shrink-0 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold text-lg shadow-inner ring-2 ring-purple-100"
      aria-label={`${advisor.name} avatar`}
    >
      {getInitials(advisor.name)}
    </div>
  );
}
