// Pure decision logic for the content-page floating CTA
// (components/FloatingConsultCTA.tsx).
//
// Extracted from the component on purpose: the component's visibility is driven
// by IntersectionObserver, which cannot be exercised in a headless/unit context.
// Keeping the RULES here — separate from the DOM plumbing that feeds them —
// means the part that decides whether a paid-intent CTA appears is testable and
// cannot silently regress. See scripts/test-floating-cta.mjs.

export type CtaTopic =
  | 'reconquete' | 'rupture' | 'nouvelle-rencontre' | 'sentiments'
  | 'crise-couple' | 'methodes-voyance' | 'voyance-gratuite';

/** Routes that must never show it: paid landers, conversion + legal pages. */
export const FLOATING_CTA_EXCLUDED = [
  '/lp/', '/consulter', '/appel', '/go', '/admin',
  '/mentions-legales', '/confidentialite', '/contact',
] as const;

export const FLOATING_CTA_DISMISS_KEY = 'vl_floating_cta_dismissed';

/**
 * Route prefix -> CTA topic, so affiliate attribution matches the page cluster.
 * Unknown routes fall back to 'methodes-voyance' (the generic guidance bucket).
 */
export function topicForPath(pathname: string): CtaTopic {
  if (pathname.startsWith('/reconquete')) return 'reconquete';
  if (pathname.startsWith('/rupture')) return 'rupture';
  if (pathname.startsWith('/nouvelle-rencontre')) return 'nouvelle-rencontre';
  if (pathname.startsWith('/sentiments')) return 'sentiments';
  if (pathname.startsWith('/crise-couple')) return 'crise-couple';
  if (pathname.startsWith('/voyance-gratuite-amour')) return 'voyance-gratuite';
  return 'methodes-voyance';
}

/**
 * The home page is excluded too: it is a hub with its own hero CTA, not a long
 * read, so a floating bar there is pure noise.
 */
export function isExcludedPath(pathname: string): boolean {
  return pathname === '/' || FLOATING_CTA_EXCLUDED.some((p) => pathname.startsWith(p));
}

export interface FloatingCtaState {
  /** the <h1> has scrolled out of view => the visitor is actually reading */
  pastIntro: boolean;
  /** the <footer> is in view => the final CTA is already on screen */
  atEnd: boolean;
  /** the cookie bar is on screen; it out-stacks everything, so stand down */
  ccOpen: boolean;
}

/** Should the bar be in its visible (slid-up) state? */
export function shouldShowFloatingCta(s: FloatingCtaState): boolean {
  return s.pastIntro && !s.atEnd && !s.ccOpen;
}

/** Should the component render at all (before visibility is considered)? */
export function shouldRenderFloatingCta(o: {
  pathname: string;
  dismissed: boolean;
  loading: boolean;
  voyantCount: number;
}): boolean {
  if (isExcludedPath(o.pathname)) return false;
  if (o.dismissed) return false;
  if (o.loading) return false;
  return o.voyantCount > 0;
}
