import assert from 'node:assert/strict';
import test from 'node:test';

import {
  contentSimilarity,
  foldAscii,
  isKebabSlug,
  titleOverlap,
  wordCount,
} from '../scripts/pseo-validate/text-similarity';
import {
  auditPageSource,
  extractInternalHrefs,
  filePathToRoute,
  isDynamicRoute,
  isExcludedPath,
  normalizeRoute,
} from '../scripts/pseo-validate/page-audit';
import { runValidation } from '../scripts/validate-pseo';

// ---------------------------------------------------------------------------
// text-similarity.ts
// ---------------------------------------------------------------------------

test('wordCount counts whitespace-separated words', () => {
  assert.equal(wordCount('un deux trois'), 3);
  assert.equal(wordCount('  espaces   multiples  '), 2);
  assert.equal(wordCount(''), 0);
});

test('foldAscii strips accents and lowercases', () => {
  assert.equal(foldAscii('Âme Sœur RÉTROGRADE'), 'ame sœur retrograde');
  assert.equal(foldAscii('Été'), 'ete');
});

test('isKebabSlug accepts ASCII kebab-case only', () => {
  assert.ok(isKebabSlug('lune-noire'));
  assert.ok(isKebabSlug('a1-b2'));
  assert.ok(!isKebabSlug('Lune-Noire'));
  assert.ok(!isKebabSlug('lune_noire'));
  assert.ok(!isKebabSlug('lune noire'));
  assert.ok(!isKebabSlug('âme-sœur'));
});

test('contentSimilarity: identical text is 1, unrelated text is near 0', () => {
  const a = 'Le tarot amoureux révèle vos sentiments cachés et votre avenir sentimental avec précision.';
  assert.equal(contentSimilarity(a, a), 1);
  const b = 'La météo de demain annonce du soleil sur toute la région parisienne cet après-midi.';
  assert.ok(contentSimilarity(a, b) < 0.1, `expected near-zero similarity, got ${contentSimilarity(a, b)}`);
});

test('contentSimilarity is symmetric', () => {
  const a = 'Rêver de tromperie révèle une peur de abandon dans le couple actuel.';
  const b = 'Rêver de rupture révèle une peur de perdre son partenaire actuel.';
  assert.equal(contentSimilarity(a, b), contentSimilarity(b, a));
});

test('titleOverlap ignores site-wide boilerplate words like "amour"', () => {
  // Two genuinely distinct topics that both happen to say "amour" and "voyance"
  // should not read as near-duplicates just because of that shared vocabulary.
  const a = 'Pendule Amour : Questions Sentimentales et Voyance';
  const b = 'Runes Amour : Tirage et Voyance Nordique';
  assert.ok(titleOverlap(a, b) < 0.5, `expected low overlap, got ${titleOverlap(a, b)}`);
});

test('titleOverlap is 1 for identical titles and handles escaped apostrophes correctly upstream', () => {
  assert.equal(titleOverlap('Signes de l\'Âme Sœur', 'Signes de l\'Âme Sœur'), 1);
});

// ---------------------------------------------------------------------------
// page-audit.ts
// ---------------------------------------------------------------------------

test('filePathToRoute derives clean routes from page.tsx paths', () => {
  assert.equal(filePathToRoute('app/page.tsx'), '/');
  assert.equal(filePathToRoute('app/methodes-voyance/page.tsx'), '/methodes-voyance/');
  assert.equal(filePathToRoute('app/methodes-voyance/runes-amour/page.tsx'), '/methodes-voyance/runes-amour/');
  assert.equal(filePathToRoute('app/tarot-amour/[carte]/page.tsx'), '/tarot-amour/[carte]/');
});

test('isDynamicRoute flags bracketed segments only', () => {
  assert.ok(isDynamicRoute('/tarot-amour/[carte]/'));
  assert.ok(!isDynamicRoute('/tarot-amour/'));
});

test('isExcludedPath excludes api/admin/lp/en and the redirect utilities, nothing else', () => {
  assert.ok(isExcludedPath('app/api/lead/route.ts'));
  assert.ok(isExcludedPath('app/admin/page.tsx'));
  assert.ok(isExcludedPath('app/lp/voyant-direct/page.tsx'));
  assert.ok(isExcludedPath('app/en/will-he-come-back/page.tsx'));
  assert.ok(isExcludedPath('app/go/page.tsx'));
  assert.ok(isExcludedPath('app/appel/page.tsx'));
  assert.ok(!isExcludedPath('app/methodes-voyance/page.tsx'));
  assert.ok(!isExcludedPath('app/glossaire/[terme]/page.tsx'));
});

test('auditPageSource: a fully-equipped page produces zero issues', () => {
  const source = `
    export const metadata: Metadata = {
      title: 'Exemple',
      alternates: { canonical: 'https://www.voyantlove.fr/exemple/' },
    };
    export default function Page() {
      return (<main><h1>Titre</h1><script type="application/ld+json" /></main>);
    }
  `;
  assert.deepEqual(auditPageSource({ route: '/exemple/', source }), []);
});

test('auditPageSource: noindex pages are skipped entirely', () => {
  const source = `export const metadata = { robots: { index: false, follow: false } };`;
  assert.deepEqual(auditPageSource({ route: '/lp/foo/', source }), []);
});

test('auditPageSource: flags missing metadata, canonical, h1 and schema', () => {
  const source = `export default function Page() { return (<main>no h1 here</main>); }`;
  const issues = auditPageSource({ route: '/broken/', source });
  const messages = issues.map((i) => i.message).join('\n');
  assert.match(messages, /no metadata export/);
  assert.match(messages, /no alternates\.canonical/);
  assert.match(messages, /no <h1>/);
  assert.match(messages, /no structured data/);
  assert.ok(issues.every((i) => i.severity === 'warning'));
});

test('auditPageSource: flags multiple h1 and absolute title override', () => {
  const source = `
    export const metadata = {
      title: { absolute: 'X | VoyantLove' },
      alternates: { canonical: 'https://www.voyantlove.fr/x/' },
    };
    export default function Page() {
      return (<main><h1>A</h1><h1>B</h1><script type="application/ld+json" /></main>);
    }
  `;
  const issues = auditPageSource({ route: '/x/', source });
  const messages = issues.map((i) => i.message).join('\n');
  assert.match(messages, /multiple <h1> occurrences/);
  assert.match(messages, /absolute.*override/);
});

test('extractInternalHrefs finds literal internal hrefs and ignores external/dynamic ones', () => {
  const source = `<Link href="/methodes-voyance/runes-amour">x</Link><a href="https://example.com">e</a><Link href={dynamic}>d</Link>`;
  assert.deepEqual(extractInternalHrefs(source), ['/methodes-voyance/runes-amour']);
});

test('normalizeRoute always yields a single trailing slash and drops query/hash', () => {
  assert.equal(normalizeRoute('/foo'), '/foo/');
  assert.equal(normalizeRoute('/foo/'), '/foo/');
  assert.equal(normalizeRoute('/foo?ref=x'), '/foo/');
  assert.equal(normalizeRoute('/foo#bar'), '/foo/');
  assert.equal(normalizeRoute(''), '/');
});

// ---------------------------------------------------------------------------
// validate-pseo.ts — integration smoke test against the real repository
// ---------------------------------------------------------------------------

test('runValidation reports zero blocking errors against the live repository', async () => {
  const { errors } = await runValidation();
  if (errors.length > 0) {
    console.error(errors.map((e) => `[${e.scope}] ${e.message}`).join('\n'));
  }
  assert.equal(errors.length, 0);
});

test('runValidation is deterministic across two runs', async () => {
  const first = await runValidation();
  const second = await runValidation();
  assert.equal(first.errors.length, second.errors.length);
  assert.equal(first.warnings.length, second.warnings.length);
});
