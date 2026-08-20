'use client';

import React from 'react';
import Image from 'next/image';
import { Voyant, formatPrice, getAffiliateLink } from '@/lib/voyants';
import { trackAffiliateClick } from '@/lib/glyphex';

interface VoyantCardCompactProps {
  voyant: Voyant;
  source?: string;
  /**
   * Load this portrait eagerly instead of lazily. Set on the handful of cards
   * that are actually above the fold: next/image lazy-loads by default, and an
   * above-fold image that waits for an intersection callback is the LCP
   * mistake we criticised on the competitor's site (every image lazy, header
   * portrait included). Off for everything further down the rail.
   */
  priority?: boolean;
}

/**
 * Compact voyant card — the unit that makes a rail possible.
 *
 * The full VoyantCard is 1 131px tall on a 390px viewport, so three of them
 * fill three screens. This one targets ~281px, which is what lets several
 * voyants share a single screen instead of each owning one.
 *
 * What was dropped from the full card, and why it is safe to drop HERE:
 *   - the 3-up trust grid, the services tags, the trust-score bar and the
 *     last-review quote. They are reassurance copy, and reassurance is what
 *     the DESTINATION page is for. On a rail the job is choosing, not
 *     evaluating: face, name, availability, rating, price.
 *   - the "Paiement sécurisé / Confidentialité" reassurance line, which is
 *     already carried once by the section, not once per card.
 *
 * What is deliberately KEPT:
 *   - the price. Removing it would be the single change that most erodes our
 *     advantage over the chat platforms, which quote in "crédits" with no euro
 *     value anywhere on the page. Ours stays in €/min, on the card.
 *   - the availability dot, driven by the real ETAT flag, not decoration.
 */
export default function VoyantCardCompact({ voyant, source = 'rail', priority = false }: VoyantCardCompactProps) {
  const isOnline = voyant.ETAT === '1';
  const affiliateLink = getAffiliateLink(voyant.ID, source);

  // Cheapest per-minute tariff across the phone and chat rates.
  //
  // Note this reads T_TEL/T_CHAT directly and does NOT gate on the TEL/CHAT
  // flags. Those flags are "is this channel live right now", not "does this
  // voyant have a rate" — in the live feed several voyants show ETAT=1 with
  // TEL=0 and CHAT=0 while still carrying a real tariff. Gating on the flags
  // left those cards with no price at all, which is the one thing this card
  // must never do.
  const rates = [voyant.T_TEL, voyant.T_CHAT]
    .map((r) => parseFloat(r))
    .filter((r) => Number.isFinite(r) && r > 0);
  const cheapest = rates.length ? Math.min(...rates) : null;

  // Ratings in this feed are all 5 or 5.5 on an undocumented scale, so they
  // separate nobody and "5,5 ⭐" next to a review count reads as 5.5 out of 5.
  // The review count is the honest, genuinely discriminating number here
  // (120 vs 2 697), so that is what the card shows.
  const reviewCount = parseInt(voyant.EVAL, 10);

  const handleClick = () => {
    trackAffiliateClick(voyant.ID, source, voyant.VOYANT);
    window.dataLayer?.push({ event: 'cta_click', cta_label: `voyant-${voyant.VOYANT}` });
  };

  return (
    <a
      href={affiliateLink}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={handleClick}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-colors hover:border-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
    >
      {/* Portrait, 1:1.
          The partner serves these at exactly 180x180. Cropping a square source
          to 4:5 sliced the tops of heads and framed every voyant differently;
          matching the source aspect means no crop and no stretch. Combined with
          a narrower card this takes the upscale from ~2.6x on a 3x phone down
          to ~1.3x, which is the difference between a soft face and a sharp one.
          Fix the source and this can grow again — see sizes below. */}
      <div className="relative aspect-square w-full bg-gray-100">
        <Image
          src={`https://www.monsitevoyance.com/vignaff/${voyant.ID}.jpg`}
          alt={`Portrait de ${voyant.VOYANT}`}
          fill
          // 180px is the intrinsic size of the source file, so asking for more
          // buys nothing — the optimiser will not invent detail. If the partner
          // ever ships larger portraits, raise this first.
          sizes="180px"
          priority={priority}
          className="object-cover"
        />
        {isOnline && (
          <span className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            En ligne
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-2.5">
        <h3 className="truncate text-sm font-bold capitalize text-gray-900">{voyant.VOYANT}</h3>

        {Number.isFinite(reviewCount) && (
          <div className="mt-0.5 truncate text-[11px] text-gray-600">
            {reviewCount.toLocaleString('fr-FR')} avis
          </div>
        )}

        {cheapest !== null && (
          <p className="mt-1 text-[11px] font-semibold text-purple-700">
            dès {formatPrice(String(cheapest))}/min
          </p>
        )}

        {/* mt-auto so every CTA in the rail sits on one baseline even when a
            voyant has no live price channel — the same slack-collecting trick
            that fixed the full card's row alignment. */}
        <span className="mt-auto block w-full rounded-md bg-purple-700 px-2 py-2 text-center text-xs font-semibold text-white transition-colors group-hover:bg-purple-800">
          {isOnline ? 'Consulter' : 'Rendez-vous'}
        </span>
      </div>
    </a>
  );
}
