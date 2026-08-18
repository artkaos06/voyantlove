import assert from 'node:assert/strict';
import test from 'node:test';

import {
  FLOATING_CTA_DISMISS_KEY,
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
