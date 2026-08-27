import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';

import {
  EN_BRAND_HOSTS,
  FLOATING_CTA_DISMISS_KEY,
  isEnglishBrand,
  isExcludedPath,
  shouldEmphasiseNow,
  shouldRenderFloatingCta,
  shouldShowFloatingCta,
  topicForPath,
} from '../lib/floatingCta';

// The component's visibility is driven by IntersectionObserver, which cannot be
// exercised headlessly. The RULES therefore live in lib/floatingCta.ts, pure and
// DOM-free, so the logic deciding whether a paid-intent CTA appears is actually
// verified rather than assumed.

test('paid landers never show it (they own their sticky bar)', () => {
  assert.equal(isExcludedPath('/lp/consultation-10-minutes-offertes'), true);
  assert.equal(isExcludedPath('/lp/voyant-direct'), true);
});

test('conversion + legal routes excluded', () => {
  for (const p of ['/consulter', '/appel', '/go/x', '/admin',
                   '/mentions-legales', '/confidentialite', '/contact']) {
    assert.equal(isExcludedPath(p), true, `${p} should be excluded`);
  }
});

test('home excluded (hub with its own hero CTA, not a long read)', () => {
  assert.equal(isExcludedPath('/'), true);
});

test('content pages included', () => {
  for (const p of ['/rupture/amour-non-partage/', '/reconquete/revoir-son-ex',
                   '/astrologie-amour/scorpion', '/reves-amour/rever-de-tromperie',
                   '/sentiments/pense-t-il-elle-a-moi']) {
    assert.equal(isExcludedPath(p), false, `${p} should be included`);
  }
});


test('route prefix maps to its cluster topic', () => {
  assert.equal(topicForPath('/reconquete/revoir-son-ex'), 'reconquete');
  assert.equal(topicForPath('/rupture/amour-non-partage/'), 'rupture');
  assert.equal(topicForPath('/nouvelle-rencontre/flamme-jumelle'), 'nouvelle-rencontre');
  assert.equal(topicForPath('/sentiments/maime-t-il-elle'), 'sentiments');
  assert.equal(topicForPath('/crise-couple/jalousie-excessive'), 'crise-couple');
  assert.equal(topicForPath('/voyance-gratuite-amour/tarot-amour-gratuit'), 'voyance-gratuite');
});

test('unknown routes fall back to the generic guidance bucket', () => {
  assert.equal(topicForPath('/astrologie-amour/scorpion'), 'methodes-voyance');
  assert.equal(topicForPath('/reves-amour/rever-de-mariage'), 'methodes-voyance');
});


test('hidden until the reader passes the H1', () => {
  assert.equal(shouldShowFloatingCta({ pastIntro: false, atEnd: false, ccOpen: false }), false);
});

test('shown while genuinely reading', () => {
  assert.equal(shouldShowFloatingCta({ pastIntro: true, atEnd: false, ccOpen: false }), true);
});

test('stands down at the footer (final CTA already on screen)', () => {
  assert.equal(shouldShowFloatingCta({ pastIntro: true, atEnd: true, ccOpen: false }), false);
});

test('never competes with the cookie bar (it out-stacks everything)', () => {
  assert.equal(shouldShowFloatingCta({ pastIntro: true, atEnd: false, ccOpen: true }), false);
});


const base = { pathname: '/rupture/amour-non-partage/', dismissed: false, loading: false, voyantCount: 3 };

test('renders on a content page with live voyants', () => {
  assert.equal(shouldRenderFloatingCta(base), true);
});

test('does not render while voyants are loading', () => {
  assert.equal(shouldRenderFloatingCta({ ...base, loading: true }), false);
});

test('does not render with no live voyants (same gate as the other CTAs)', () => {
  assert.equal(shouldRenderFloatingCta({ ...base, voyantCount: 0 }), false);
});

test('respects a dismissal for the session', () => {
  assert.equal(shouldRenderFloatingCta({ ...base, dismissed: true }), false);
  assert.equal(FLOATING_CTA_DISMISS_KEY, 'vl_floating_cta_dismissed');
});

test('never renders on an excluded route even with voyants live', () => {
  assert.equal(shouldRenderFloatingCta({ ...base, pathname: '/lp/voyant-direct' }), false);
});


test('entrance emphasis fires on first appearance', () => {
  assert.equal(shouldEmphasiseNow(false, true), true);
});

test('entrance emphasis does not fire before the bar appears', () => {
  assert.equal(shouldEmphasiseNow(false, false), false);
});

test('entrance emphasis never re-fires — scrolling back up must not re-pulse', () => {
  // hasFired stays true for the page view, so every later `visible` is a no-op.
  assert.equal(shouldEmphasiseNow(true, true), false);
  assert.equal(shouldEmphasiseNow(true, false), false);
});


// --- English brand (lovepsychicguide.com) -----------------------------------
//
// The bar's copy is French. It renders from the ROOT layout, which app/en/*
// inherits, so without an explicit brand check the French affiliate bar shows
// on the English review site.

test('EN brand is detected by host, not by path (the /en prefix is a rewrite)', () => {
  // middleware.ts rewrites lovepsychicguide.com/foo -> /en/foo SERVER-side, so
  // the client pathname carries no /en prefix at all. This is the exact case a
  // path-list exclusion cannot catch.
  for (const p of ['/', '/will-he-come-back/', '/love-psychic-services/keen-review/']) {
    assert.equal(isEnglishBrand({ hostname: 'www.lovepsychicguide.com', pathname: p }), true, p);
    assert.equal(isEnglishBrand({ hostname: 'lovepsychicguide.com', pathname: p }), true, p);
  }
});

test('EN host detection ignores case and port', () => {
  assert.equal(isEnglishBrand({ hostname: 'LovePsychicGuide.com', pathname: '/' }), true);
  assert.equal(isEnglishBrand({ hostname: 'www.lovepsychicguide.com:3000', pathname: '/' }), true);
});

test('a hand-typed /en/ path is caught too (middleware passes it through unrewritten)', () => {
  assert.equal(isEnglishBrand({ hostname: 'www.lovepsychicguide.com', pathname: '/en/twin-flame-signs/' }), true);
  assert.equal(isEnglishBrand({ hostname: 'localhost', pathname: '/en/twin-flame-signs/' }), true);
});

test('the French site is never mistaken for the EN brand', () => {
  for (const h of ['www.voyantlove.fr', 'voyantlove.fr', 'localhost', 'voyantlove-git-seo.vercel.app']) {
    assert.equal(isEnglishBrand({ hostname: h, pathname: '/rupture/amour-non-partage/' }), false, h);
    // '/english-something' must not trip the '/en' prefix test.
    assert.equal(isEnglishBrand({ hostname: h, pathname: '/enfants-et-rupture/' }), false, h);
  }
});

test('EN_BRAND_HOSTS stays in sync with middleware.ts EN_HOSTS', () => {
  // Two lists, one fact. If middleware gains a domain and this does not, the
  // French bar quietly returns to the English site.
  const middleware = readFileSync(new URL('../middleware.ts', import.meta.url), 'utf8');
  const block = middleware.match(/const EN_HOSTS = new Set\(\[([\s\S]*?)\]\)/);
  assert.ok(block, 'EN_HOSTS not found in middleware.ts');
  const hosts = [...block[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);
  assert.deepEqual([...EN_BRAND_HOSTS].sort(), hosts.sort());
});

test('the bar never renders on the EN brand, whatever the path looks like', () => {
  assert.equal(shouldRenderFloatingCta({ ...base, enBrand: true }), false);
  // A path that would otherwise qualify: this is what the EN site actually
  // reports to usePathname().
  assert.equal(
    shouldRenderFloatingCta({ ...base, pathname: '/will-he-come-back/', enBrand: true }),
    false,
  );
  assert.equal(
    shouldRenderFloatingCta({ ...base, pathname: '/will-he-come-back/', enBrand: false }),
    true,
  );
});


// --- client-side navigation --------------------------------------------------
//
// The component sits in the root layout, so a route change does NOT remount it.
// Everything scoped to "a page view" has to be re-armed explicitly.

test('entrance emphasis re-arms on the next page view', () => {
  let hasFired = false; // emphasisedRef.current

  // Article 1: fires once, then never again however often `visible` flips.
  assert.equal(shouldEmphasiseNow(hasFired, true), true);
  hasFired = true;
  assert.equal(shouldEmphasiseNow(hasFired, false), false);
  assert.equal(shouldEmphasiseNow(hasFired, true), false);

  // Client-side navigation to article 2: the component re-arms the ref, so the
  // bar's arrival is marked again. Without the reset this stayed false for the
  // whole session — "once per page view" silently became "once per session".
  hasFired = false;
  assert.equal(shouldEmphasiseNow(hasFired, true), true);
});

test('the component re-attaches its observers and resets per-page state on navigation', () => {
  // Guarded at source level: the IntersectionObserver deps and the per-page
  // reset are DOM plumbing, not pure logic, and the whole bug was that they
  // silently kept observing an <h1> that no longer exists in the document.
  const src = readFileSync(new URL('../components/FloatingConsultCTA.tsx', import.meta.url), 'utf8');

  assert.match(src, /\}, \[pathname, inactive, dismissed\]\);/,
    'the IntersectionObserver effect must list pathname in its deps');
  assert.match(src, /if \(renderedPath !== pathname\) \{/,
    'per-page state must be reset when the route changes');
  assert.match(src, /emphasisedRef\.current = false;\s*\}, \[pathname\]\);/,
    'the one-shot emphasis must be re-armed on route change');
});

test('the cookie bar is observed through CookieConsent, not a site-wide MutationObserver', () => {
  const src = readFileSync(new URL('../components/FloatingConsultCTA.tsx', import.meta.url), 'utf8');
  assert.ok(!/new MutationObserver/.test(src),
    'the MutationObserver on document.documentElement must stay deleted');
  assert.match(src, /subscribeCookieBar/);

  const consent = readFileSync(new URL('../components/CookieConsent.tsx', import.meta.url), 'utf8');
  assert.match(consent, /onModalShow/);
  assert.match(consent, /onModalHide/);
  assert.match(consent, /setCookieBarOpen/);
});

test('the feed is not fetched on pages that can never show the bar', () => {
  const src = readFileSync(new URL('../components/FloatingConsultCTA.tsx', import.meta.url), 'utf8');
  assert.match(src, /useVoyants\(!inactive\)/,
    'useVoyants must be gated on the exclusion result');
});

test('the hidden bar is inert, so no invisible control can be tabbed into', () => {
  const src = readFileSync(new URL('../components/FloatingConsultCTA.tsx', import.meta.url), 'utf8');
  assert.match(src, /inert=\{!visible\}/,
    'hidden state must remove the affiliate link and dismiss button from the tab order');
});
