import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const pageSource = readFileSync(
  path.resolve(__dirname, '../app/lp/consultation-10-minutes-offertes/page.tsx'),
  'utf8',
);

test('the hero top-right glow is deliberately subdued', () => {
  assert.match(
    pageSource,
    /circle at 85% 12%,rgba\(239,176,199,\.14\),transparent 28%/,
  );
});

test('the hero includes display-only partner psychic cards with real portraits', () => {
  assert.match(pageSource, /className="cpa68-advisors"/);
  assert.match(pageSource, /aria-label="Voyants partenaires"/);
  assert.match(pageSource, /https:\/\/www\.monsitevoyance\.com\/vignaff\/\$\{advisor\.id\}\.jpg/);
  assert.match(pageSource, /Nos voyants partenaires/);

  const advisorSection = pageSource.match(
    /<aside className="cpa68-advisors"[\s\S]*?<\/aside>/,
  );
  assert.ok(advisorSection);
  assert.doesNotMatch(advisorSection[0], /<a(?:\s|>)/);
  assert.match(advisorSection[0], /<article className="cpa68-advisor-card"/);
});
