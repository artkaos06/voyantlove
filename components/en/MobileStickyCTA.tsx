'use client';

// Floating bottom CTA bar that appears on mobile only after the user scrolls
// past the hero. Always-visible CTAs at the top of long articles get banner-
// blindness'd; a sticky bottom bar that appears mid-scroll catches readers
// who've engaged with the content but haven't yet seen an inline CTA.
//
// Mobile-only by design (md:hidden). Desktop has enough screen real estate
// for inline CTAs to be visible without floating UI.
//
// Dismissable. Dismissal persists across the session via sessionStorage so
// it doesn't reappear on every page navigation within the same visit.

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface MobileStickyCTAProps {
  /** Link target. Defaults to the Keen review. */
  href?: string;
  /** Visible label. */
  label?: string;
  /** Sub-label below the main link, smaller. */
  subLabel?: string;
  /**
   * Pixel scroll threshold before the bar reveals. Hides until the user
   * has shown engagement. Default 600px (~one mobile viewport).
   */
  showAfterScroll?: number;
  /** Storage key for dismissal persistence. */
  storageKey?: string;
}

export default function MobileStickyCTA({
  href = '/love-psychic-services/keen-review',
  label = 'Read our Keen review',
  subLabel = '4.4/5 · honest, no-fluff editorial',
  showAfterScroll = 600,
  storageKey = 'lpg_sticky_dismissed',
}: MobileStickyCTAProps) {
  // visible = should the bar render right now?
  // We start false so SSR + first paint doesn't flash the bar before the
  // useEffect runs.
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true); // assume dismissed until checked

  useEffect(() => {
    let isDismissed = false;
    try {
      isDismissed = sessionStorage.getItem(storageKey) === '1';
    } catch {
      // sessionStorage unavailable — treat as not-dismissed
    }
    setDismissed(isDismissed);

    if (isDismissed) return;

    function onScroll() {
      setVisible(window.scrollY > showAfterScroll);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [showAfterScroll, storageKey]);

  function dismiss() {
    setDismissed(true);
    setVisible(false);
    try {
      sessionStorage.setItem(storageKey, '1');
    } catch {
      // Best-effort persistence; if it fails the user dismisses again next nav.
    }
  }

  if (dismissed || !visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 md:hidden z-50 border-t border-purple-200 bg-white/95 backdrop-blur shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.15)] animate-slide-up"
      role="region"
      aria-label="Recommended reading"
    >
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
        <Link
          href={href}
          className="flex-1 flex items-center justify-between gap-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-3 rounded-xl font-semibold shadow-md active:scale-[0.99] transition-transform"
        >
          <span className="flex flex-col items-start leading-tight">
            <span className="text-sm">{label}</span>
            {subLabel && (
              <span className="text-[11px] font-normal opacity-90">
                {subLabel}
              </span>
            )}
          </span>
          <span aria-hidden="true" className="text-lg">
            →
          </span>
        </Link>
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
