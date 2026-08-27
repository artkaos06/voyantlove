import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';

import { TAROT_LOVE_CARDS } from '../lib/tarotLoveCards';

// The 22 major arcana exist twice: as records in lib/tarotLoveCards.ts (which
// generate /tarot-amour/[carte]/) and as a hardcoded deck inside
// components/TarotOuiNon.tsx (the widget on /voyance-gratuite-amour/
// tarot-oui-non-amour/). The widget links straight to the card page, so a
// verdict that drifts between the two makes the site contradict itself one
// click apart: "Le Diable — Non" in the tool, "Réponse oui/non : Oui" on the
// page it just sent the visitor to.
//
// The duplication is deliberate (the widget must not pull 22 full EAV records
// into a client bundle). This test is what makes it safe.

const WIDGET = readFileSync(new URL('../components/TarotOuiNon.tsx', import.meta.url), 'utf8');

/** widget verdict -> card-record verdict */
const VERDICT: Record<string, string> = {
  oui: 'Oui',
  non: 'Non',
  'peut-etre': 'Nuancé',
};

function widgetDeck(): { slug: string; verdict: string }[] {
  return [...WIDGET.matchAll(/slug: '([^']+)', result: '([^']+)'/g)].map((m) => {
    const verdict = VERDICT[m[2]];
    assert.ok(verdict, `unknown widget verdict "${m[2]}" for ${m[1]}`);
    return { slug: m[1], verdict };
  });
}

test('the widget deck is parseable and complete (22 major arcana)', () => {
  const deck = widgetDeck();
  assert.equal(deck.length, 22, 'the regex must keep matching the deck literal');
  assert.equal(new Set(deck.map((c) => c.slug)).size, 22, 'no duplicate slugs');
});

test('every widget card links to a real card page', () => {
  const known = new Set(TAROT_LOVE_CARDS.map((c) => c.slug));
  for (const { slug } of widgetDeck()) {
    assert.ok(known.has(slug), `widget links to /tarot-amour/${slug}/ which has no record`);
  }
});

test('every card page is reachable from the widget', () => {
  const inWidget = new Set(widgetDeck().map((c) => c.slug));
  for (const c of TAROT_LOVE_CARDS) {
    assert.ok(inWidget.has(c.slug), `${c.slug} has a page but the widget can never draw it`);
  }
});

test('oui/non verdicts agree between the widget and the card pages', () => {
  const byCard = new Map(TAROT_LOVE_CARDS.map((c) => [c.slug, c.ouiNon]));
  for (const { slug, verdict } of widgetDeck()) {
    assert.equal(
      verdict,
      byCard.get(slug),
      `${slug}: widget says "${verdict}", /tarot-amour/${slug}/ says "${byCard.get(slug)}"`,
    );
  }
});
