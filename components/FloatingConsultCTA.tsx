'use client';

// Persistent "Consulter" CTA for CONTENT pages — the organic-traffic analogue
// of the sticky call bar the paid landers use (.cpa68-sticky on
// /lp/consultation-10-minutes-offertes).
//
// Why: content pages are long reads that only converted at three fixed points
// (early QuickCTA, mid Recommendations, final CTA). Intent that peaks in the
// middle of a 2000-word page had nowhere to go without scrolling to a block.
//
// It reuses the EXISTING conversion path — useVoyants() + getAffiliateLink() +
// trackAffiliateClick() — rather than inventing a second one, so clicks land in
// the same affiliate attribution and the same glyphex/dataLayer events as every
// other content CTA. `source` is distinct (floating-cta-*) so its contribution
// is measurable separately.
//
// Four things it deliberately avoids, each a real trap in this codebase:
//   1. The cookie bar (#cc-main) renders at z-index 2147483647 — vanilla-
//      cookieconsent's max, nothing can out-stack it. A bottom-fixed CTA shown
//      while it is open would sit UNDER it. That is exactly what buried the
//      quiz lander's CTA for 4 days (commit 38adde3). So: stay hidden while
//      #cc-main is on screen.
//   2. Doubling up with VoyantFinalCTA. Near the page bottom the final CTA and
//      footer are already on screen, so the bar hides instead of stacking two
//      competing CTAs (and covering the footer links).
//   3. Paid landers own their own sticky bar — never render there.
//   4. Appearing instantly. It waits for real reading depth, so it reads as a
//      helpful follow-up rather than an interstitial.

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { getAffiliateLink } from '@/lib/voyants';
import { trackAffiliateClick } from '@/lib/glyphex';
import { useVoyants } from '@/lib/useVoyants';
import {
  topicForPath, isExcludedPath, shouldShowFloatingCta, shouldRenderFloatingCta,
  shouldEmphasiseNow,
  FLOATING_CTA_DISMISS_KEY as DISMISS_KEY,
} from '@/lib/floatingCta';

export default function FloatingConsultCTA() {
  const pathname = usePathname() || '/';
  const { voyants, loading } = useVoyants();
  const [pastIntro, setPastIntro] = useState(false);
  const [atEnd, setAtEnd] = useState(false);
  const [ccOpen, setCcOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const excluded = isExcludedPath(pathname);

  useEffect(() => {
    if (excluded) return;
    try {
      if (sessionStorage.getItem(DISMISS_KEY) === '1') setDismissed(true);
    } catch { /* private mode */ }
  }, [excluded]);

  // Visibility is driven by IntersectionObserver rather than a scroll handler:
  // IO reports element positions directly, so it works no matter which element
  // actually scrolls, needs no magic pixel thresholds, and costs nothing per
  // frame. The two triggers are semantic rather than numeric:
  //   - past the <h1>  => the visitor is genuinely reading, not bouncing
  //   - <footer> in view => the final CTA is already on screen, so stand down
  useEffect(() => {
    if (excluded || dismissed) return;

    const h1 = document.querySelector('h1');
    const footer = document.querySelector('footer');
    const observers: IntersectionObserver[] = [];

    if (h1) {
      const io = new IntersectionObserver(
        ([e]) => setPastIntro(!e.isIntersecting),
        { threshold: 0 },
      );
      io.observe(h1);
      observers.push(io);
    } else {
      setPastIntro(true); // no h1 to gate on, don't suppress the CTA entirely
    }

    if (footer) {
      const io = new IntersectionObserver(
        ([e]) => setAtEnd(e.isIntersecting),
        { threshold: 0 },
      );
      io.observe(footer);
      observers.push(io);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, [excluded, dismissed]);

  // The cookie bar renders at z-index 2147483647 (vanilla-cookieconsent's max,
  // nothing can out-stack it), so anything bottom-fixed shown underneath it is
  // invisible and unclickable. Watch it and stay down until it is gone.
  useEffect(() => {
    if (excluded || dismissed) return;
    const check = () => {
      const cc = document.querySelector('#cc-main') as HTMLElement | null;
      setCcOpen(!!cc && cc.offsetHeight > 0);
    };
    check();
    const mo = new MutationObserver(check);
    mo.observe(document.documentElement, {
      subtree: true, attributes: true, childList: true,
      attributeFilter: ['class', 'style'],
    });
    return () => mo.disconnect();
  }, [excluded, dismissed]);

  const visible = shouldShowFloatingCta({ pastIntro, atEnd, ccOpen });

  // One-shot entrance emphasis: a single subtle scale+glow the moment the bar
  // first slides in, then it settles for good. Deliberately NOT a looping pulse
  // — the money event here is a paid consultation, not a click, so permanent
  // motion would buy extra low-intent clicks while a reader is part-way through
  // an article about a breakup or a divorce. Every other animation in this
  // codebase is a status dot or a loading state, never a CTA; this keeps that
  // line intact while still marking the arrival.
  //
  // emphasisedRef makes it fire ONCE per page view. Keying off `visible` alone
  // would re-fire every time the reader scrolls back up past the footer, which
  // is a repeating pulse wearing a disguise.
  const [emphasise, setEmphasise] = useState(false);
  const emphasisedRef = useRef(false);

  useEffect(() => {
    if (!shouldEmphasiseNow(emphasisedRef.current, visible)) return;
    emphasisedRef.current = true;
    setEmphasise(true);
    const t = setTimeout(() => setEmphasise(false), 950);
    return () => clearTimeout(t);
  }, [visible]);

  if (!shouldRenderFloatingCta({ pathname, dismissed, loading, voyantCount: voyants.length })) return null;

  const topic = topicForPath(pathname);
  const source = `floating-cta-${topic}`;
  const voyant = voyants[0];
  const affiliateLink = getAffiliateLink(voyant.ID, source);

  const onClick = () => {
    trackAffiliateClick(voyant.ID, source, voyant.VOYANT);
    window.dataLayer?.push({ event: 'cta_click', cta_label: `floating-cta-${topic}` });
  };

  const dismiss = () => {
    setDismissed(true);
    try { sessionStorage.setItem(DISMISS_KEY, '1'); } catch { /* private mode */ }
  };

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transition-all duration-300 motion-reduce:transition-none ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
      aria-hidden={!visible}
    >
      <style dangerouslySetInnerHTML={{ __html: `
@keyframes vlCtaEnter{
  0%{transform:scale(1);box-shadow:0 4px 6px -1px rgba(0,0,0,.1)}
  35%{transform:scale(1.045);box-shadow:0 0 0 7px rgba(147,51,234,.16)}
  100%{transform:scale(1);box-shadow:0 4px 6px -1px rgba(0,0,0,.1)}
}
.vl-cta-enter{animation:vlCtaEnter 900ms ease-out 1}
@media(prefers-reduced-motion:reduce){.vl-cta-enter{animation:none}}
` }} />
      <div className="mx-auto max-w-4xl px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <div className="flex items-center gap-3 rounded-2xl border border-purple-200 bg-white/95 p-3 shadow-2xl backdrop-blur">
          <div className="hidden sm:block flex-1 min-w-0">
            <p className="text-sm font-bold text-gray-900 truncate">
              Une question sur votre situation&nbsp;?
            </p>
            <p className="text-xs text-gray-600 truncate">
              Parlez-en avec un voyant, en toute confidentialité.
            </p>
          </div>
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            onClick={onClick}
            className={`flex-1 sm:flex-none flex min-h-[48px] items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 text-sm font-bold text-white shadow-md transition hover:from-purple-700 hover:to-indigo-700 motion-reduce:transition-none ${emphasise ? 'vl-cta-enter' : ''}`}
          >
            🔮 Consulter un voyant
          </a>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Masquer cette proposition"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 motion-reduce:transition-none"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
