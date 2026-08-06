import assert from 'node:assert/strict';
import test from 'node:test';

import { generateStaticParams } from '../app/glossaire/[terme]/page';
import sitemap from '../app/sitemap';
import {
  CATEGORY_LABELS,
  GLOSSARY_TERMS,
  findTerm,
  getGlossaryHubCards,
  getRelatedTerms,
  validateGlossaryIntegrity,
  validateTermRecord,
} from '../lib/glossaire';

test('the glossary contains at least 50 entries', () => {
  assert.ok(GLOSSARY_TERMS.length >= 50, `expected >= 50 entries, found ${GLOSSARY_TERMS.length}`);
});

test('every glossary record passes the publication gate', () => {
  for (const term of GLOSSARY_TERMS) {
    assert.deepEqual(validateTermRecord(term), [], `${term.slug} must pass validateTermRecord`);
  }
});

test('validateTermRecord enforces the documented 150-170-word answer capsule contract', () => {
  const base = GLOSSARY_TERMS[0];
  const capsuleWithWords = (count: number) => Array.from({ length: count }, (_, i) => `mot${i}`).join(' ');
  for (const count of [150, 170]) {
    const issues = validateTermRecord({ ...base, answerCapsule: capsuleWithWords(count) });
    assert.ok(!issues.some((issue) => issue.includes('answerCapsule')), `${count} words should pass`);
  }
  for (const count of [149, 171]) {
    const issues = validateTermRecord({ ...base, answerCapsule: capsuleWithWords(count) });
    assert.ok(issues.some((issue) => issue.includes(`found ${count}`)), `${count} words should fail`);
  }
});

test('validateTermRecord requires at least one internal site link and two related terms', () => {
  const base = GLOSSARY_TERMS[0];
  assert.deepEqual(validateTermRecord({ ...base, liensSite: [] }), [`${base.slug}: no liensSite (internal link to existing site content)`]);
  assert.deepEqual(validateTermRecord({ ...base, termesLies: ['x'] }), [`${base.slug}: fewer than 2 termesLies`]);
});

test('slugs, terms, and short definitions are unique and slugs are ASCII kebab-case', () => {
  assert.equal(new Set(GLOSSARY_TERMS.map((t) => t.slug)).size, GLOSSARY_TERMS.length);
  assert.equal(new Set(GLOSSARY_TERMS.map((t) => t.terme)).size, GLOSSARY_TERMS.length);
  assert.equal(new Set(GLOSSARY_TERMS.map((t) => t.definitionCourte)).size, GLOSSARY_TERMS.length);
  for (const term of GLOSSARY_TERMS) assert.match(term.slug, /^[a-z0-9]+(-[a-z0-9]+)*$/);
});

test('every category in CATEGORY_LABELS is used by at least one term, and vice versa', () => {
  const usedCategories = new Set(GLOSSARY_TERMS.map((t) => t.categorie));
  for (const cat of Object.keys(CATEGORY_LABELS)) {
    assert.ok(usedCategories.has(cat as keyof typeof CATEGORY_LABELS), `category "${cat}" has zero entries`);
  }
  for (const cat of usedCategories) {
    assert.ok(cat in CATEGORY_LABELS, `entry uses unknown category "${cat}"`);
  }
});

test('validateGlossaryIntegrity: every termesLies slug resolves to a real, distinct entry', () => {
  assert.deepEqual(validateGlossaryIntegrity(GLOSSARY_TERMS), []);
});

test('validateGlossaryIntegrity catches a dangling reference and a self-reference', () => {
  const [first, second, ...rest] = GLOSSARY_TERMS;
  const broken = { ...first, termesLies: ['this-slug-does-not-exist', first.slug] };
  const issues = validateGlossaryIntegrity([broken, second, ...rest]);
  assert.ok(issues.some((i) => i.includes('unknown slug "this-slug-does-not-exist"')));
  assert.ok(issues.some((i) => i.includes('references itself')));
});

test('getRelatedTerms resolves termesLies to live records and respects the limit', () => {
  const term = findTerm('amour-karmique')!;
  const related = getRelatedTerms(term, 2);
  assert.equal(related.length, 2);
  for (const r of related) {
    assert.ok(term.termesLies.includes(r.slug));
    assert.notEqual(r.slug, term.slug);
  }
});

test('getGlossaryHubCards exposes exactly the live records, each with a working href', () => {
  const cards = getGlossaryHubCards();
  assert.equal(cards.length, GLOSSARY_TERMS.filter((t) => validateTermRecord(t).length === 0).length);
  for (const card of cards) {
    assert.equal(card.href, `/glossaire/${card.slug}`);
  }
});

test('every valid term feeds route params and sitemap URLs directly', () => {
  const routeSlugs = new Set(generateStaticParams().map(({ terme }) => terme));
  const urls = new Set(sitemap().map((entry) => entry.url));

  for (const term of GLOSSARY_TERMS) {
    assert.ok(routeSlugs.has(term.slug), `${term.slug} missing from generateStaticParams`);
    assert.ok(urls.has(`https://www.voyantlove.fr/glossaire/${term.slug}`), `${term.slug} missing from sitemap`);
  }
  assert.ok(urls.has('https://www.voyantlove.fr/glossaire'), 'glossary hub missing from sitemap');
});

test('glossary terms do not re-cover the exact headword of an existing dedicated route (duplicate-intent guard)', () => {
  // Terms that already own a full dedicated page elsewhere on the site and
  // must never be re-defined as a thin glossary entry alongside it.
  const reserved = ['ame-soeur', 'flamme-jumelle', 'synastrie', 'chemin-de-vie', 'nombre-expression', 'nombre-intime', 'dependance-affective', 'emprise-amoureuse'];
  const slugs = new Set(GLOSSARY_TERMS.map((t) => t.slug));
  for (const r of reserved) assert.ok(!slugs.has(r), `"${r}" duplicates an existing dedicated page and must not be a glossary entry`);
});
