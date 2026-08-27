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
    assert.equal(card.href, `/glossaire/${card.slug}/`);
  }
});

test('every valid term feeds route params and sitemap URLs directly', () => {
  const routeSlugs = new Set(generateStaticParams().map(({ terme }) => terme));
  const urls = new Set(sitemap().map((entry) => entry.url));

  for (const term of GLOSSARY_TERMS) {
    assert.ok(routeSlugs.has(term.slug), `${term.slug} missing from generateStaticParams`);
    assert.ok(urls.has(`https://www.voyantlove.fr/glossaire/${term.slug}/`), `${term.slug} missing from sitemap`);
  }
  assert.ok(urls.has('https://www.voyantlove.fr/glossaire/'), 'glossary hub missing from sitemap');
});

test('glossary terms do not re-cover the exact headword of an existing dedicated route (duplicate-intent guard)', () => {
  // Terms that already own a full dedicated page elsewhere on the site and
  // must never be re-defined as a thin glossary entry alongside it.
  const reserved = ['ame-soeur', 'flamme-jumelle', 'synastrie', 'chemin-de-vie', 'nombre-expression', 'nombre-intime', 'dependance-affective', 'emprise-amoureuse'];
  const slugs = new Set(GLOSSARY_TERMS.map((t) => t.slug));
  for (const r of reserved) assert.ok(!slugs.has(r), `"${r}" duplicates an existing dedicated page and must not be a glossary entry`);
});

// ---------------------------------------------------------------------------
// Keyword-alignment locks. Each of these entries was realigned to the query
// users actually type (verified against live Google FR data), not to the
// phrasing the entry happened to be drafted with. The assertions below pin
// the exact strings that carry the ranking intent — headword, capsule
// opening, and the FAQ questions that render as <h3> and feed FAQPage schema
// — so a future copy edit can't silently drop them.
// ---------------------------------------------------------------------------

const faqQuestions = (slug: string) => findTerm(slug)!.faq.map((f) => f.q);

test('amour-karmique keeps its indexed slug while leading on the "relation karmique" head term', () => {
  const t = findTerm('amour-karmique');
  assert.ok(t, 'the historical /glossaire/amour-karmique/ URL must not be renamed or redirected');
  assert.equal(t!.terme, 'Relation Karmique', 'terme drives the H1 and the <title>');
  // definitionCourte is the meta-description base, so the head term belongs in it too.
  assert.match(t!.definitionCourte, /relation karmique/i);
  // The capsule renders under the "Que signifie ... ?" H2 and is the définition answer.
  assert.match(t!.answerCapsule, /^Une relation karmique est/);
});

test('the relation-karmique cluster answers each sub-intent as its own question heading', () => {
  const questions = faqQuestions('amour-karmique');
  for (const expected of [
    'Quels sont les signes d’une relation karmique ?',
    'Une relation karmique peut-elle durer ?',
    'Test : comment savoir si je vis une relation karmique ?',
  ]) {
    assert.ok(questions.includes(expected), `missing FAQ heading for sub-intent: "${expected}"`);
  }
});

test('the relation-karmique signs checklist is substantive enough to back the self-assessment', () => {
  const points = findTerm('amour-karmique')!.points;
  const signs = points.filter((p) => /^Signe \d/.test(p));
  assert.ok(signs.length >= 6, `expected >= 6 numbered signs, found ${signs.length}`);
  // The "test" FAQ tells the reader to count these, so the two must stay in sync.
  const testFaq = findTerm('amour-karmique')!.faq.find((f) => f.q.startsWith('Test :'))!;
  assert.match(testFaq.a, /six signes/);
});

test('aura answers the "un aura ou une aura" grammar query, plainly, in the first sentence', () => {
  assert.ok(faqQuestions('aura').includes('Un aura ou une aura ?'));
  const answer = findTerm('aura')!.faq.find((f) => f.q === 'Un aura ou une aura ?')!.a;
  const firstSentence = answer.split(/(?<=\.)\s/)[0];
  assert.match(firstSentence, /On écrit une aura/, 'the verdict must come first, not after the etymology');
  assert.match(firstSentence, /féminin/);
  // Also surfaced above the FAQ, in the bullet list.
  assert.ok(findTerm('aura')!.points.some((p) => /une aura/.test(p) && /féminin/.test(p)));
});

test('troisieme-oeil answers "qu’est-ce que le troisième œil" up front', () => {
  const t = findTerm('troisieme-oeil')!;
  assert.match(t.answerCapsule, /^Le troisième œil est un centre énergétique/);
  assert.match(t.definitionCourte, /^Le troisième œil est/);
  assert.ok(faqQuestions('troisieme-oeil').includes('Qu’est-ce que le troisième œil ?'));
});

test('ombre-shadow-work leads with the "shadow work" anglicism in its title-level fields', () => {
  const t = findTerm('ombre-shadow-work')!;
  // `terme` is interpolated into both the <h1> and generateMetadata()'s title,
  // so the anglicism (which carries the search volume) must come FIRST rather
  // than trail the French term in parentheses.
  assert.equal(t.terme, 'Shadow Work (Travail de l’Ombre)');
  assert.match(t.definitionCourte, /shadow work/i);
  assert.match(t.answerCapsule, /shadow work/i);
  assert.ok(faqQuestions('ombre-shadow-work').includes('Qu’est-ce que le shadow work ?'));
});
