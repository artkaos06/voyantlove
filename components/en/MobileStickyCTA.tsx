'use client';

// Floating bottom CTA bar that appears on mobile only after the user scrolls
// past the hero. Always-visible CTAs at the top of long articles get banner-
// blindness'd; a sticky bottom bar that appears mid-scroll catches readers
// who've engaged with the content but haven't yet seen an inline CTA.
//
// Two CTA modes:
//   - Internal (default): Next.js Link to a relative URL (e.g. the Keen review)
//   - Direct affiliate (when `affiliateOffer` is set): captures gclid /
//     gbraid / wbraid and links to /api/go/<offer>, going straight to the
//     advertiser. Use direct mode for cold paid traffic where the lander +
//     review intermediate funnel is too long.
//
// Mobile-only by design (md:hidden). Dismissable, persistence via
// sessionStorage so it doesn't reappear on every navigation.

import { useEffect, useState } from 'react';
import Link from 'next/link';

export type AffiliateOffer = 'keen' | 'kasamba';

interface MobileStickyCTAProps {
  /**
   * Internal link target. Used when `affiliateOffer` is NOT provided.
   * Defaults to the Keen review page.
   */
  href?: string;
  /**
   * If set, renders a direct affiliate CTA that captures gclid/gbraid/wbraid
   * and links to /api/go/<offer> instead of an internal page. Highest-
   * conversion path for cold paid traffic.
   */
  affiliateOffer?: AffiliateOffer;
  /** Visible label. */
  label?: string;
  /** Sub-label below the main link, smaller. */
  subLabel?: string;
  /** Pixel scroll threshold before the bar reveals. */
  showAfterScroll?: number;
  /** Storage key for dismissal persistence. */
  storageKey?: string;
  /** Analytics placement label (only used in affiliate mode). */
  placement?: string;
}

const ATTR_KEYS = ['gclid', 'gbraid', 'wbraid'] as const;

export default function MobileStickyCTA({
  href = '/love-psychic-services/keen-review',
  affiliateOffer,
  label = 'Talk to a love psychic',
  subLabel = '5 min for $1 · honest reviews · 18+',
  showAfterScroll = 600,
  storageKey = 'lpg_sticky_dismissed',
  placement,
}: MobileStickyCTAProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true);
  const [attribution, setAttribution] = useState<{
    gclid: string | null;
    gbraid: string | null;
    wbraid: string | null;
  }>({ gclid: null, gbraid: null, wbraid: null });

  useEffect(() => {
    let isDismissed = false;
    try {
      isDismissed = sessionStorage.getItem(storageKey) === '1';
    } catch {
      /* noop */
    }
    setDismissed(isDismissed);

    // Read attribution from URL or sessionStorage so direct-affiliate mode
    // can forward gclid through the click-out chain.
    if (affiliateOffer) {
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
        /* noop */
      }
    }

    if (isDismissed) return;

    function onScroll() {
      setVisible(window.scrollY > showAfterScroll);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [showAfterScroll, storageKey, affiliateOffer]);

  function dismiss() {
    setDismissed(true);
    setVisible(false);
    try {
      sessionStorage.setItem(storageKey, '1');
    } catch {
      /* noop */
    }
  }

  if (dismissed || !visible) return null;

  // Build affiliate href if in affiliate mode.
  const affiliateHref = (() => {
    if (!affiliateOffer) return null;
    const sp = new URLSearchParams();
    for (const k of ATTR_KEYS) {
      const v = attribution[k];
      if (v) sp.set(k, v);
    }
    const qs = sp.toString();
    return qs ? `/api/go/${affiliateOffer}?${qs}` : `/api/go/${affiliateOffer}`;
  })();

  const ctaInner = (
    <span className="flex flex-1 items-center justify-between gap-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-3 rounded-xl font-semibold shadow-md active:scale-[0.99] transition-transform">
      <span className="flex flex-col items-start leading-tight">
        <span className="text-sm">{label}</span>
        {subLabel && (
          <span className="text-[11px] font-normal opacity-90">{subLabel}</span>
        )}
      </span>
      <span aria-hidden="true" className="text-lg">
        →
      </span>
    </span>
  );

  return (
    <div
      className="fixed bottom-0 left-0 right-0 md:hidden z-50 border-t border-purple-200 bg-white/95 backdrop-blur shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.15)]"
      role="region"
      aria-label="Recommended"
    >
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
        {affiliateHref ? (
          <a
            href={affiliateHref}
            rel="sponsored nofollow noopener"
            target="_blank"
            data-affiliate-offer={affiliateOffer}
            data-affiliate-placement={placement || 'mobile_sticky'}
            className="flex flex-1"
          >
            {ctaInner}
          </a>
        ) : (
          <Link href={href} className="flex flex-1">
            {ctaInner}
          </Link>
        )}
        <button
          type="button"
          onClick={dismiss}
          className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
          aria-label="Dismiss recommendation bar"
        >
          <span aria-hidden="true" className="text-xl leading-none">
            ×
          </span>
        </button>
      </div>
    </div>
  );
}
