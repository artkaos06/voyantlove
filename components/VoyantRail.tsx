'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import VoyantCardCompact from './VoyantCardCompact';
import { useVoyants } from '@/lib/useVoyants';

interface VoyantRailProps {
  title: string;
  subtitle?: string;
  /** How many voyants to put in this rail. */
  limit?: number;
  /** Skip the first N of the feed, so stacked rails don't show the same faces. */
  offset?: number;
  source: string;
  /** Link rendered at the end of the rail and next to the title. */
  href?: string;
  /**
   * Defer mounting the cards until the rail is near the viewport. Leave this
   * OFF for the first rail — it is above the fold and lazy-mounting it would
   * cost us the one thing we are trying to buy: a voyant visible on screen 1.
   */
  lazy?: boolean;
}

const SKELETON_COUNT = 6;

export default function VoyantRail({
  title,
  subtitle,
  limit = 12,
  offset = 0,
  source,
  href = '/consulter/',
  lazy = false,
}: VoyantRailProps) {
  const { voyants, loading } = useVoyants();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldMount, setShouldMount] = useState(!lazy);

  // Every hook runs before any early return. A layout-level component in this
  // repo once shipped with hooks below a `return null` and took the whole site
  // down with "Rendered more hooks than during the previous render" — the guard
  // is cheap, the outage was not.
  useEffect(() => {
    if (!lazy || shouldMount) return;
    const el = containerRef.current;
    if (!el) return;

    // No IntersectionObserver (old browser, or a headless/hidden document that
    // never fires callbacks) means we show the content rather than hide it.
    if (typeof IntersectionObserver === 'undefined') {
      setShouldMount(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldMount(true);
          observer.disconnect();
        }
      },
      // 600px of runway: the cards are mounted and their images requested
      // before the rail is actually looked at, so nothing pops in.
      { rootMargin: '600px 0px' }
    );
    observer.observe(el);

    // Deadline fallback. IntersectionObserver exists but never fires callbacks
    // in a hidden document — verified in this repo's preview pane, where
    // document.hidden is true and a fresh observer delivers zero callbacks,
    // not even the initial one. Same shape as a background tab or a headless
    // crawler. Without this, the rail would stay a skeleton permanently.
    //
    // 2.5s is chosen to sit well past the fold's critical window, so the
    // deferral still does its job (below-fold portraits don't compete with
    // the first rail's images) while guaranteeing the content always arrives.
    const deadline = setTimeout(() => {
      setShouldMount(true);
      observer.disconnect();
    }, 2500);

    return () => {
      observer.disconnect();
      clearTimeout(deadline);
    };
  }, [lazy, shouldMount]);

  const selection = voyants.slice(offset, offset + limit);

  // Reserve the row's height while loading so the rail never displaces the
  // content under it. Their site grows 1 350px mid-scroll; we are not doing
  // that.
  const showSkeleton = loading || !shouldMount || selection.length === 0;

  return (
    <div ref={containerRef}>
      <div className="mb-3 flex items-end justify-between gap-4">
        <div className="min-w-0">
          <h2 className="text-lg font-bold text-gray-900 sm:text-xl">{title}</h2>
          {subtitle && <p className="mt-0.5 text-sm text-gray-600">{subtitle}</p>}
        </div>
        <Link
          href={href}
          className="shrink-0 whitespace-nowrap text-sm font-semibold text-purple-700 hover:text-purple-900 hover:underline"
        >
          Tout voir →
        </Link>
      </div>

      <div className="vl-rail" tabIndex={0} role="group" aria-label={title}>
        {showSkeleton
          ? Array.from({ length: SKELETON_COUNT }).map((_, i) => (
              <div key={i} aria-hidden>
                <div className="aspect-[4/5] w-full animate-pulse rounded-xl bg-gray-200" />
                <div className="mt-2 h-3 w-2/3 animate-pulse rounded bg-gray-200" />
                <div className="mt-1.5 h-3 w-1/2 animate-pulse rounded bg-gray-200" />
              </div>
            ))
          : selection.map((voyant, i) => (
              <VoyantCardCompact
                key={voyant.ID}
                voyant={voyant}
                source={source}
                // Only an eager rail has cards above the fold, and only the
                // first ~3 of those are on screen at --spv 2.2.
                priority={!lazy && i < 3}
              />
            ))}
      </div>
    </div>
  );
}
