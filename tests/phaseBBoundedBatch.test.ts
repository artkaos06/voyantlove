import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';

import sitemap from '../app/sitemap';
import { auditPageSource, extractInternalHrefs, loadAllSources } from '../scripts/pseo-validate/page-audit';
import { composeCompatibilityReading, findCompatibility, findLifePathMeaning, lifePathNumber } from '../lib/numerology';

// Phase B: 4 new canonical pages plus 4 improved canonical outputs,
// covering the 10 approved competitor-derived intents.
const REPO_ROOT = path.resolve(__dirname, '..');
const SITE_URL = 'https://www.voyantlove.fr';

const NEW_PAGES = [
  { route: '/voyance-gratuite-amour/tarot-du-jour-amour/', file: 'app/voyance-gratuite-amour/tarot-du-jour-amour/page.tsx' },
  { route: '/voyance-gratuite-amour/tarot-futur-proche-amour/', file: 'app/voyance-gratuite-amour/tarot-futur-proche-amour/page.tsx' },
  { route: '/methodes-voyance/suis-je-medium-comment-savoir/', file: 'app/methodes-voyance/suis-je-medium-comment-savoir/page.tsx' },
  { route: '/methodes-voyance/ascendant-amour/', file: 'app/methodes-voyance/ascendant-amour/page.tsx' },
] as const;

const IMPROVED_OUTPUTS = [
  { route: '/voyance-gratuite-amour/tarot-oui-non-amour/', file: 'app/voyance-gratuite-amour/tarot-oui-non-amour/page.tsx' },
  { route: '/methodes-voyance/voyance-par-mail-amour/', file: 'app/methodes-voyance/voyance-par-mail-amour/page.tsx' },
  { route: '/methodes-voyance/numerologie-amoureuse/', file: 'app/methodes-voyance/numerologie-amoureuse/page.tsx' },
  { route: '/methodes-voyance/medium-amour/', file: 'app/methodes-voyance/medium-amour/page.tsx' },
] as const;

const IMPROVED_HUB = {
  route: '/voyance-gratuite-amour/',
  file: 'app/voyance-gratuite-amour/page.tsx',
} as const;

const INTENT_TO_CANONICAL = [
  ['tarot-du-jour-amour', NEW_PAGES[0].route],
  ['tarot-futur-proche-amour', NEW_PAGES[1].route],
  ['voyance-gratuite-en-ligne', IMPROVED_HUB.route],
  ['suis-je-medium', NEW_PAGES[2].route],
  ['medium-sans-support', '/methodes-voyance/medium-amour/'],
  ['ascendant-amour', NEW_PAGES[3].route],
  ['tarot-oui-non-amour', '/voyance-gratuite-amour/tarot-oui-non-amour/'],
  ['voyance-par-mail-amour', '/methodes-voyance/voyance-par-mail-amour/'],
  ['compatibilite-numerologique', '/methodes-voyance/numerologie-amoureuse/'],
  ['compatibilite-date-naissance', '/methodes-voyance/numerologie-amoureuse/'],
] as const;

function readSource(relFile: string): string {
  return readFileSync(path.join(REPO_ROOT, relFile), 'utf-8');
}

test('all 4 new Phase B pages satisfy the publication contract', () => {
  for (const { route, file } of NEW_PAGES) {
    const issues = auditPageSource({ route, source: readSource(file) });
    assert.deepEqual(issues, [], `${route} page-audit issues: ${JSON.stringify(issues)}`);
  }
});

test('each new page canonical matches its route exactly', () => {
  for (const { route, file } of NEW_PAGES) {
    assert.ok(readSource(file).includes(`canonical: '${SITE_URL}${route}'`));
  }
});

test('all 4 new pages are registered in app/sitemap.ts', () => {
  const urls = new Set(sitemap().map((entry) => entry.url));
  for (const { route } of NEW_PAGES) {
    assert.ok(urls.has(`${SITE_URL}${route.replace(/\/$/, '')}`), `${route} missing from sitemap`);
  }
});

test('all 4 new pages have an internal Link and preserve the CTA contract', () => {
  const allSources = loadAllSources([path.join(REPO_ROOT, 'app'), path.join(REPO_ROOT, 'components')], REPO_ROOT);
  const allHrefs = new Set<string>();
  for (const { source } of allSources) {
    for (const href of extractInternalHrefs(source)) allHrefs.add(href.endsWith('/') ? href : `${href}/`);
  }
  for (const { route, file } of NEW_PAGES) {
    assert.ok(allHrefs.has(route), `${route} is orphaned`);
    const source = readSource(file);
    assert.match(source, /VoyantQuickCTA/);
    assert.match(source, /VoyantFinalCTA/);
    assert.match(source, /getFAQSchema|getArticleSchema/);
  }
});

test('10 approved intents map to 9 canonical outputs and only 4 are new routes', () => {
  assert.equal(INTENT_TO_CANONICAL.length, 10);
  assert.equal(new Set(INTENT_TO_CANONICAL.map(([, canonical]) => canonical)).size, 9);
  assert.equal(NEW_PAGES.length, 4);
  assert.equal(INTENT_TO_CANONICAL.find(([intent]) => intent === 'medium-sans-support')?.[1], '/methodes-voyance/medium-amour/');
  assert.doesNotMatch(readSource('app/sitemap.ts'), /medium-sans-support-amour/);
  assert.match(readSource('app/methodes-voyance/medium-amour/page.tsx'), /id="sans-support"/);
});

test('voyance gratuite en ligne reuses the existing hub canonical and CTA contract', () => {
  const source = readSource(IMPROVED_HUB.file);
  assert.ok(source.includes(`canonical: '${SITE_URL}${IMPROVED_HUB.route}'`));
  assert.match(source, /VoyantQuickCTA/);
  assert.match(source, /VoyantFinalCTA/);
});

test('improved outputs preserve canonical and CTA contracts', () => {
  for (const { route, file } of IMPROVED_OUTPUTS) {
    const source = readSource(file);
    assert.ok(source.includes(`canonical: '${SITE_URL}${route}'`));
    assert.match(source, /VoyantQuickCTA/);
    assert.match(source, /VoyantFinalCTA/);
    assert.match(source, /dateModified: '2026-08-07'/);
    assert.match(source, /lastUpdated="7 août 2026"/);
  }
});

test('compatibility intents share one canonical and calculator is present', () => {
  const source = readSource('app/methodes-voyance/numerologie-amoureuse/page.tsx');
  assert.match(source, /NumerologyCompatibilityCalculator/);
  assert.match(source, /Compatibilité par Date de Naissance/);
  assert.match(source, /compatibilité numérique|Compatibilité Numérologique/i);
});

test('illustrative compatibility pair lookup remains order-independent', () => {
  const forward = findCompatibility(2, 6);
  assert.ok(forward);
  assert.deepEqual(forward, findCompatibility(6, 2));
  assert.equal(findCompatibility(3, 3), undefined);
});

test('lifePathNumber is pure and every valid pair has a substantive reading', () => {
  assert.equal(lifePathNumber('1988-07-15'), 3);
  const validPaths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33];
  for (const a of validPaths) {
    assert.ok(findLifePathMeaning(a), `missing meaning for ${a}`);
    for (const b of validPaths) {
      const reading = composeCompatibilityReading(a, b);
      assert.ok(reading, `missing reading for ${a} + ${b}`);
      assert.ok(reading.description.length > 150, `${a} + ${b} description is sparse`);
      assert.ok(reading.guidance.length > 80, `${a} + ${b} guidance is sparse`);
    }
  }
});

test('oui/non tool contains all 22 major arcana and page describes its one-card model', () => {
  const component = readSource('components/TarotOuiNon.tsx');
  const page = readSource('app/voyance-gratuite-amour/tarot-oui-non-amour/page.tsx');
  assert.equal((component.match(/result: '(?:oui|non|peut-etre)'/g) || []).length, 22);
  assert.match(page, /une carte parmi les 22 arcanes majeurs/);
  assert.doesNotMatch(page, /Deux cartes positives sur trois|Trois cartes sont tir|carte centrale|majorit&eacute; d&eacute;termine/);
});

test('future tarot positions are sequential and non-overlapping', () => {
  const source = readSource('app/voyance-gratuite-amour/tarot-futur-proche-amour/page.tsx');
  assert.match(source, /positions=\{\['Dans les 7 jours', 'Entre 8 et 30 jours', 'Du 2e au 3e mois'\]\}/);
});

test('mail page is informational and offers the live alternative', () => {
  const source = readSource('app/methodes-voyance/voyance-par-mail-amour/page.tsx');
  assert.match(source, /ne propose pas actuellement de commande ni de livraison de consultation par email/);
  assert.match(source, /consultation en direct avec un voyant/);
});
