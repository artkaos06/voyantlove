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
 * Hosts serving the English brand. Mirrors EN_HOSTS in middleware.ts — the two
 * lists must stay in sync, tests/floatingCta.test.ts asserts they do.
 */
export const EN_BRAND_HOSTS = ['lovepsychicguide.com', 'www.lovepsychicguide.com'] as const;

/**
 * Is the current page the English brand (lovepsychicguide.com, served from
 * app/en/*)? The bar's copy is French only, so it must never render there.
 *
 * A path exclusion CANNOT do this job. middleware.ts REWRITES
 * lovepsychicguide.com/foo → /en/foo, and a rewrite is invisible to the
 * client: usePathname() on the EN site returns '/will-he-come-back/', with no
 * '/en' prefix — indistinguishable from a French content route by shape.
 *
 * The host is the real signal, and middleware makes it authoritative: it hard
 * 404s /en/* on every non-EN host, so EN content can only ever be rendered on
 * an EN host. The '/en' path test is a second line of defence, covering a
 * hand-typed /en/... URL on the EN domain, which middleware passes through
 * without rewriting.
 *
 * document.documentElement.lang is deliberately NOT used: Next.js only lets
 * the ROOT layout own <html>, so app/en/layout.tsx cannot override lang and
 * both brands serve lang="fr" (that file documents the trade-off).
 */
export function isEnglishBrand(o: { hostname: string; pathname: string }): boolean {
  const host = o.hostname.toLowerCase().replace(/:\d+$/, '');
  if ((EN_BRAND_HOSTS as readonly string[]).includes(host)) return true;
  return o.pathname === '/en' || o.pathname.startsWith('/en/');
}

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
  /**
   * The page belongs to the English brand. Optional so existing FR callers
   * read unchanged; see isEnglishBrand above for why this cannot be a path.
   */
  enBrand?: boolean;
}): boolean {
  if (o.enBrand) return false;
  if (isExcludedPath(o.pathname)) return false;
  if (o.dismissed) return false;
  if (o.loading) return false;
  return o.voyantCount > 0;
}

/**
 * One-shot entrance emphasis gate.
 *
 * The bar's CTA gets a single scale+glow when it first appears. The failure
 * mode worth guarding is re-firing: `visible` flips back to true every time the
 * reader scrolls up past the footer, so keying the animation off `visible`
 * alone would produce a repeating pulse — precisely the looping behaviour this
 * was designed not to be. `hasFired` makes it once per page view.
 */
export function shouldEmphasiseNow(hasFired: boolean, visible: boolean): boolean {
  return visible && !hasFired;
}
