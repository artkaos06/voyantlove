import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

// Regression coverage for the Phase A GSC-alignment pass (2026-08-07) on the
// four existing URLs carrying the meaningful sc-domain:voyantlove.fr query
// evidence: /voyance-gratuite-amour/, /, /nouvelle-rencontre/ and
// /crise-couple/problemes-communication-couple/. Reads raw source instead of
// importing the React components: these are server components wired into
// analytics/consent/CTA plumbing that isn't worth booting for a metadata
// check, and string assertions pin the exact invariants this pass changed.

const root = join(__dirname, '..');
const read = (relPath: string) => readFileSync(join(root, relPath), 'utf-8');

// Google truncates <title> around ~60 characters; the brand suffix from the
// root layout's `template: '%s | VoyantLove'` counts toward that budget.
const BRAND_SUFFIX = ' | VoyantLove';
const MAX_TITLE_LENGTH = 60;
const MAX_DESCRIPTION_LENGTH = 160;

function extractQuoted(source: string, label: string): string {
  const re = new RegExp(`${label}:\\s*'((?:\\\\.|[^'\\\\])*)'`);
  const match = source.match(re);
  assert.ok(match, `expected to find ${label}: '...' in source`);
  return match![1].replace(/\\'/g, "'").replace(/\\\\/g, '\\');
}

test('voyance-gratuite-amour: primary page targets the voyance amour / voyance amoureuse / voyance gratuite amour cluster without duplicating the /voyance-amour/ pillar', () => {
  const source = read('app/voyance-gratuite-amour/page.tsx');

  const title = extractQuoted(source, 'title');
  assert.match(title, /voyance gratuite amour/i, 'title must keep the exact primary query phrase');
  assert.ok((title + BRAND_SUFFIX).length <= MAX_TITLE_LENGTH, `title+suffix must fit the SERP budget, got ${(title + BRAND_SUFFIX).length} chars`);

  const description = extractQuoted(source, 'description');
  assert.match(description, /voyance amoureuse/i, 'description should pick up the "voyance amoureuse" supporting variant');
  assert.ok(description.length <= MAX_DESCRIPTION_LENGTH, `description must fit the SERP budget, got ${description.length} chars`);

  // The opening on-page paragraph must front-load the primary query phrase
  // while still linking out to /voyance-amour with the differentiating
  // "voyance amoureuse" anchor — that link is the query-routing signal that
  // keeps this page from cannibalizing the pillar page's intent.
  assert.match(source, /voyance gratuite amour<\/strong>/i, 'opening paragraph must lead with the exact primary phrase');
  assert.match(source, /href="\/voyance-amour"[^>]*>voyance amoureuse<\/Link>/, 'must keep the differentiating internal link to the voyance-amour pillar page');

  // Commercial plumbing this task must not touch.
  assert.match(source, /tel:0175754582/, 'phone CTA number must be preserved');
  assert.match(source, /<VoyantQuickCTA topic="voyance-gratuite"/, 'CTA component wiring must be preserved');
});

test('homepage: adds gender-inclusive "voyante" coverage without copying /voyance-amour/\'s title', () => {
  const source = read('app/page.tsx');

  const title = extractQuoted(source, 'absolute');
  assert.match(title, /voyante/i, 'title must cover the "voyante amour" query alongside "voyant amour"');
  assert.ok(title.length <= MAX_TITLE_LENGTH, `absolute title must fit the SERP budget, got ${title.length} chars`);

  const voyanceAmourSource = read('app/voyance-amour/page.tsx');
  const pillarTitle = extractQuoted(voyanceAmourSource, 'title');
  assert.notEqual(title, pillarTitle, 'homepage title must stay differentiated from the /voyance-amour/ pillar title');

  const description = extractQuoted(source, 'description');
  assert.match(description, /voyante/i, 'description must mention "voyante" for query coverage');
  assert.ok(description.length <= MAX_DESCRIPTION_LENGTH, `description must fit the SERP budget, got ${description.length} chars`);

  assert.match(source, /Vos Voyants et Voyantes Sp[ée]cialis[ée]s en Amour/, 'hero subheading must be gender-inclusive');

  // Commercial plumbing this task must not touch.
  assert.match(source, /<DynamicCTAButton\s+[\s\S]*?source="homepage-hero-primary"/, 'primary hero CTA wiring must be preserved');
});

test('nouvelle-rencontre: title fits the SERP budget so the "voyance rencontre" #2-position snippet stops truncating', () => {
  const source = read('app/nouvelle-rencontre/page.tsx');

  const title = extractQuoted(source, 'title');
  const rendered = title + BRAND_SUFFIX;
  assert.ok(rendered.length <= MAX_TITLE_LENGTH, `title+suffix must fit the SERP budget, got ${rendered.length} chars: "${rendered}"`);
  assert.match(title, /^Voyance Rencontre/, 'title must still lead with the exact ranking query');

  const description = extractQuoted(source, 'description');
  assert.ok(description.length <= MAX_DESCRIPTION_LENGTH, `description must fit the SERP budget, got ${description.length} chars`);
  assert.match(description, /^Voyance rencontre/, 'description must still lead with the exact ranking query');
});

test('problemes-communication-couple: H1 matches the title\'s exact "communication couple difficile" phrasing', () => {
  const source = read('app/crise-couple/problemes-communication-couple/page.tsx');

  // This page renders through the shared ContentPage shell (see
  // components/ContentPage.tsx): the <h1> is rendered by the shell from
  // `config.header.h1`, not written literally in this file's source.
  assert.match(source, /h1:\s*'Communication Couple Difficile/, 'H1 must lead with the exact low-confidence query phrase');

  // dateModified for this Article page must stay pinned (not today's date)
  // unless the primary content actually changed — c84d7d9 fixed the bug
  // where this drifted to `new Date()` on every build.
  assert.match(source, /dateModified:\s*'2026-02-09'/, 'dateModified must stay a fixed date, not a rebuild-time date');

  // Commercial plumbing this task must not touch.
  assert.match(source, /<VoyantQuickCTA topic="crise-couple"/, 'CTA component wiring must be preserved');
});

test('voyance-gratuite-amour subpages with low-confidence evidence keep coherent internal linking back to the hub (no rewrite)', () => {
  for (const relPath of [
    'app/voyance-gratuite-amour/horoscope-amour-2026/page.tsx',
    'app/voyance-gratuite-amour/tarot-oui-non-amour/page.tsx',
  ]) {
    const source = read(relPath);
    assert.match(source, /href="\/voyance-gratuite-amour"/, `${relPath} must link back to the hub`);
  }
});
