import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

import { generateStaticParams } from '../app/reves-amour/[reve]/page';
import sitemap from '../app/sitemap';
import { REVES_AMOUR, findDream, getDreamHubCards, validateDreamRecord } from '../lib/revesAmour';

const NEW_SLUGS = [
  'rever-de-tomber-amoureux',
  'rever-de-dispute-avec-son-partenaire',
  'rever-de-recevoir-une-declaration-damour',
  'rever-detre-jaloux',
] as const;

function capsuleWithWords(count: number): string {
  return Array.from({ length: count }, (_, i) => `mot${i}`).join(' ');
}

test('exactly four differentiated records make up this expansion', () => {
  for (const slug of NEW_SLUGS) assert.ok(findDream(slug), `expected record ${slug}`);
  assert.equal(NEW_SLUGS.length, 4);
  assert.equal(new Set(NEW_SLUGS).size, 4);
});

test('every record passes the publication gate, including the four new records', () => {
  for (const dream of REVES_AMOUR) {
    assert.deepEqual(validateDreamRecord(dream), [], `${dream.slug} must pass validateDreamRecord`);
  }
});

test('validateDreamRecord enforces the documented 150-170-word answer capsule contract', () => {
  const base = REVES_AMOUR[0];
  for (const count of [150, 170]) {
    const issues = validateDreamRecord({ ...base, answerCapsule: capsuleWithWords(count) });
    assert.ok(!issues.some((issue) => issue.includes('answerCapsule')), `${count} words should pass`);
  }
  for (const count of [149, 171]) {
    const issues = validateDreamRecord({ ...base, answerCapsule: capsuleWithWords(count) });
    assert.ok(issues.some((issue) => issue.includes(`found ${count}`)), `${count} words should fail`);
  }
});

test('slugs, titles, and primary queries are unique and slugs are ASCII kebab-case', () => {
  assert.equal(new Set(REVES_AMOUR.map((d) => d.slug)).size, REVES_AMOUR.length);
  assert.equal(new Set(REVES_AMOUR.map((d) => d.titre)).size, REVES_AMOUR.length);
  assert.equal(new Set(REVES_AMOUR.map((d) => d.primaryQuery)).size, REVES_AMOUR.length);
  for (const dream of REVES_AMOUR) assert.match(dream.slug, /^[a-z0-9]+(-[a-z0-9]+)*$/);
});

test('the dedicated ex guide remains a bridge rather than a generic or first-love record', () => {
  assert.equal(findDream('rever-de-son-ex'), undefined);
  assert.equal(findDream('rever-de-son-premier-amour'), undefined);
});

test('the "rêver de son ex" head term stays owned by one URL, and that URL is live', () => {
  // The dictionary carries the ex VARIANTS only; the head query ("rêver de
  // son ex", plus its "signification" / "qui revient" long tails) is owned by
  // the richer guidance page at /rupture/rever-de-son-ex/. Adding a head
  // record here would put two of our own URLs on the same query, so the
  // bridge target is asserted to exist rather than the record being added.
  const urls = new Set(sitemap().map((entry) => entry.url));
  assert.ok(urls.has('https://www.voyantlove.fr/rupture/rever-de-son-ex/'), 'the bridge target must be indexable');

  const exVariants = REVES_AMOUR.filter((d) => /-ex(-|$)/.test(d.slug)).map((d) => d.slug);
  assert.ok(exVariants.length >= 5, `expected the ex variants to remain, found ${exVariants.length}`);
  for (const slug of exVariants) {
    assert.notEqual(slug, 'rever-de-son-ex', 'no variant may collide with the head term');
  }
});

test('the bridge page covers "qui veut revenir" as its own sub-intent, distinct from "qui revient"', () => {
  // Because the head term is owned by ONE page, that page has to carry the
  // whole cluster. "qui revient" (the ex returns) and "qui veut revenir" (the
  // ex asks to return) are separate queries with separate answers, so both
  // must exist and neither may be a reworded copy of the other.
  // Reads raw source rather than importing the page: it is a server component
  // wired into CTA/recommendation plumbing not worth booting for a text check,
  // matching the approach in voyanceGratuiteAmourFaqSync.test.ts.
  const source = readFileSync(join(__dirname, '..', 'app/rupture/rever-de-son-ex/page.tsx'), 'utf8');

  assert.ok(source.includes('Rêver de son ex qui veut revenir'), 'missing the "qui veut revenir" phrasing');
  // config.faq single-sources the rendered <h3> AND getFAQSchema() in ContentPage,
  // so an entry here is also a FAQPage schema entry.
  assert.ok(
    source.includes("q: 'Rêver de son ex qui veut revenir : quelle signification ?'"),
    'the sub-intent must be a config.faq question so it reaches the FAQPage schema'
  );
  assert.ok(source.includes("'rêver de son ex qui veut revenir'"), 'missing from config.keywords');
  // The pre-existing "qui revient" treatment must survive alongside it.
  assert.ok(source.includes('Rêver de son ex qui revient'));
  assert.ok(source.includes("q: 'Rêver que son ex revient veut-il dire qu\\'il va revenir ?'"));
});

test('the four records state focused, differentiated interpretation contracts', () => {
  assert.match(findDream('rever-de-tomber-amoureux')!.answerCapsule, /ouverture intérieure|capacité à aimer/);
  const disputeCapsule = findDream('rever-de-dispute-avec-son-partenaire')!.answerCapsule;
  assert.match(disputeCapsule, /émotion intérieure/);
  assert.match(disputeCapsule, /tension relationnelle/);
  assert.match(disputeCapsule, /conflit factuel/);
  assert.match(
    findDream('rever-de-recevoir-une-declaration-damour')!.answerCapsule,
    /mots, la reconnaissance et la confirmation/
  );
  assert.match(findDream('rever-detre-jaloux')!.answerCapsule, /comparaison.*peur de perdre sa place/s);
});

test('new valid records feed route params, hub cards, and sitemap URLs directly', () => {
  const routeSlugs = new Set(generateStaticParams().map(({ reve }) => reve));
  const hubCards = new Map(getDreamHubCards().map((card) => [card.slug, card]));
  const urls = new Set(sitemap().map((entry) => entry.url));

  for (const slug of NEW_SLUGS) {
    assert.ok(routeSlugs.has(slug), `${slug} missing from generateStaticParams`);
    assert.equal(hubCards.get(slug)?.href, `/reves-amour/${slug}/`);
    assert.ok(urls.has(`https://www.voyantlove.fr/reves-amour/${slug}/`), `${slug} missing from sitemap`);
  }
});
