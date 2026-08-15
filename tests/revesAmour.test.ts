import assert from 'node:assert/strict';
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
