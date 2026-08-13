import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

// Regression coverage for Saiico's approved GSC priorities 1-3 (2026-08-11):
// (1) strengthen contextual hub -> /voyance-amour-immediate/ linking with
//     differentiated anchors and make the target page's opening answer
//     explicitly cover immediacy/direct access/online availability; (2)
//     strengthen contextual linking into /tarot-oui-non-amour/ from the hub
//     and the most relevant sibling tool page; (3) leave every
//     compatibility page untouched while these two clusters mature.

const root = join(__dirname, '..');
const read = (relPath: string) => readFileSync(join(root, relPath), 'utf-8');

test('priority 1: hub links to voyance-amour-immediate with differentiated contextual anchors', () => {
  const hub = read('app/voyance-gratuite-amour/page.tsx');

  assert.match(
    hub,
    /href="\/voyance-gratuite-amour\/voyance-amour-immediate"[^>]*>voyance amour immédiate<\/Link>/,
    'hub prose must link to the immediate page with the "voyance amour immédiate" anchor'
  );
  assert.match(
    hub,
    /href="\/voyance-gratuite-amour\/voyance-amour-immediate"[^>]*>voyance amour direct<\/Link>/,
    'hub prose must link to the immediate page with the differentiated "voyance amour direct" anchor'
  );

  // Existing card-grid link into the page must still be present (not replaced).
  assert.match(hub, /href="\/voyance-gratuite-amour\/voyance-amour-immediate"/, 'card grid link must be preserved');

  // Commercial plumbing / routing this task must not touch.
  assert.match(hub, /alternates: \{ canonical: 'https:\/\/www\.voyantlove\.fr\/voyance-gratuite-amour\/' \}/, 'hub canonical must be unchanged');
  assert.match(hub, /tel:0175754582/, 'phone CTA number must be preserved');
});

test('priority 1: voyance-amour-immediate opening answer covers immediacy, direct access and online availability without a new canonical or a separate "direct" page', () => {
  const page = read('app/voyance-gratuite-amour/voyance-amour-immediate/page.tsx');

  assert.match(page, /accéder rapidement/, 'opening answer must cover immediacy without promising a response time');
  assert.match(page, /voyance amour direct<\/strong> accessible en ligne/, 'opening answer must naturally cover direct access + online availability');
  assert.match(page, /disponibles 24h\/24/, 'opening answer must scope the 24\/7 claim to the automated draws only (not the live consultations)');
  assert.match(page, /Lorsqu&?apos;un praticien est disponible/, 'live access must remain explicitly availability-dependent');

  // After the ContentPage refactor the canonical is single-sourced from
  // config.url (contentMeta wraps it into alternates.canonical). Assert the
  // config URL rather than the old inline `alternates` literal — the rendered
  // canonical is unchanged.
  assert.match(
    page,
    /url: 'https:\/\/www\.voyantlove\.fr\/voyance-gratuite-amour\/voyance-amour-immediate\/',/,
    'canonical (via config.url) must remain exactly the existing immediate-page URL'
  );
});

test('priority 1: no separate "voyance amour direct" page was created', () => {
  assert.throws(() => read('app/voyance-gratuite-amour/voyance-amour-direct/page.tsx'), /ENOENT/);
});

test('priority 2: tarot-oui-non-amour gains contextual links from the hub and the oracle sibling page', () => {
  const hub = read('app/voyance-gratuite-amour/page.tsx');
  const oracle = read('app/voyance-gratuite-amour/oracle-gratuit-amour/page.tsx');

  assert.match(
    hub,
    /href="\/voyance-gratuite-amour\/tarot-oui-non-amour"[^>]*>tarot oui\/non<\/Link>/,
    'hub method-list sentence must link "tarot oui/non" to the tarot-oui-non-amour page'
  );

  assert.match(
    oracle,
    /href="\/voyance-gratuite-amour\/tarot-oui-non-amour"[^>]*>tarot oui\/non amour<\/Link>/,
    'oracle page must gain a contextual link to tarot-oui-non-amour where it discusses direct answers'
  );

  // Pre-existing links from other tarot pages must not have been removed.
  for (const relPath of [
    'app/voyance-gratuite-amour/tarot-amour-gratuit/page.tsx',
    'app/voyance-gratuite-amour/tarot-du-jour-amour/page.tsx',
    'app/voyance-gratuite-amour/tarot-futur-proche-amour/page.tsx',
  ]) {
    assert.match(read(relPath), /tarot-oui-non-amour/, `${relPath} must keep its existing link to tarot-oui-non-amour`);
  }

  // Commercial plumbing / routing this task must not touch.
  assert.match(oracle, /alternates: \{\s*canonical: 'https:\/\/www\.voyantlove\.fr\/voyance-gratuite-amour\/oracle-gratuit-amour\/',\s*\}/, 'oracle canonical must be unchanged');
});

test('priority 3: compatibility pages are untouched by this pass', () => {
  // These files carry the maturing compatibility content that must be left
  // alone; a diff against HEAD (run separately) is the source of truth, but
  // this pins the routes/canonicals so a future accidental edit here is at
  // least caught if it changes the canonical contract.
  const pairPage = read('app/compatibilite-amoureuse/[pair]/page.tsx');
  assert.doesNotMatch(pairPage, /voyance-amour-immediate|tarot-oui-non-amour/, 'compatibility pair template must not reference the two GSC-priority pages');

  const sentimentsCompat = read('app/sentiments/compatibilite-amoureuse/page.tsx');
  assert.doesNotMatch(sentimentsCompat, /voyance-amour-immediate|tarot-oui-non-amour/, 'sentiments compatibility hub must not reference the two GSC-priority pages');
});
