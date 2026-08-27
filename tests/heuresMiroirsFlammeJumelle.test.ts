import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';

import sitemap from '../app/sitemap';
import { auditPageSource } from '../scripts/pseo-validate/page-audit';
import { contentSimilarity } from '../scripts/pseo-validate/text-similarity';
import {
  HEURES_MIROIRS_FLAMME_JUMELLE,
  findHeureMiroir,
  getHeureMiroirHubCards,
  getLiveHeuresMiroirs,
  reductionNumerologique,
  validateHeureMiroirRecord,
  type HeureMiroirEntry,
} from '../lib/heuresMiroirsFlammeJumelle';
import { generateStaticParams, generateMetadata } from '../app/nouvelle-rencontre/flamme-jumelle/[heure]/page';

// Bounded pilot, same contract as tests/phaseBBoundedBatch.test.ts: six mirror
// hours, no more, each targeting "<heure> signification flamme jumelle"
// (1 300-1 600/mo, KD 0 on Google FR as of 2026-08-27) under the existing
// flamme-jumelle hub. These tests lock the batch size, the exact-phrase
// contract, the funnel links, and — the reason this cluster is not a doorway
// set — the pairwise distinctness of the six pages' prose.

const REPO_ROOT = path.resolve(__dirname, '..');
const SITE_URL = 'https://www.voyantlove.fr';
const HUB_ROUTE = '/nouvelle-rencontre/flamme-jumelle/';
const TEMPLATE = 'app/nouvelle-rencontre/flamme-jumelle/[heure]/page.tsx';
const HUB_FILE = 'app/nouvelle-rencontre/flamme-jumelle/page.tsx';

// Highest volume first — this is also the hub's display order.
const PILOT_HOURS = ['12h12', '17h17', '20h20', '10h10', '23h23', '21h21'] as const;

// One phrase per hour that must appear in that hour's prose and in no other's.
// These are the tarot arcana each hour's reading is built on, which is the
// spine of its distinctness (a shared spine would mean a shared page).
const HOUR_SIGNATURES: Record<string, string> = {
  '12h12': 'Les Amoureux',
  '17h17': 'L’Étoile',
  '20h20': 'Le Jugement',
  '10h10': 'La Roue de Fortune',
  '23h23': 'Le Mat',
  '21h21': 'Le Monde',
};

function readSource(relFile: string): string {
  return readFileSync(path.join(REPO_ROOT, relFile), 'utf-8');
}

/** Every authored prose field of a record, concatenated — the page's real body. */
function bodyOf(h: HeureMiroirEntry): string {
  return [
    h.answerCapsule,
    h.signification,
    h.queFaire,
    ...h.actions,
    h.enSeparation,
    h.enRetrouvailles,
    h.neProuvePas,
    h.numerologie,
    h.arcane.lecture,
    ...h.faq.flatMap((f) => [f.q, f.a]),
  ].join(' ');
}

test('the pilot batch is exactly 6 mirror hours, in volume order, all live', () => {
  assert.equal(HEURES_MIROIRS_FLAMME_JUMELLE.length, 6);
  assert.deepEqual(
    HEURES_MIROIRS_FLAMME_JUMELLE.map((h) => h.slug),
    [...PILOT_HOURS]
  );
  for (const h of HEURES_MIROIRS_FLAMME_JUMELLE) {
    assert.deepEqual(validateHeureMiroirRecord(h), [], `${h.slug} fails its own publication gate`);
  }
  assert.equal(getLiveHeuresMiroirs().length, 6);
  // Phase 2 (the ~14 remaining mirror hours) must be a deliberate decision,
  // not something that leaks in: nothing outside the pilot exists yet.
  for (const notYet of ['11h11', '13h13', '22h22', '00h00', '14h14', '19h19']) {
    assert.equal(findHeureMiroir(notYet), undefined, `${notYet} is out of the bounded pilot`);
  }
});

test('generateStaticParams emits exactly the 6 pilot slugs', () => {
  assert.deepEqual(
    generateStaticParams().map((p) => p.heure),
    [...PILOT_HOURS]
  );
});

test('every title and H1 carries the exact "<heure> signification flamme jumelle" phrase', async () => {
  const template = readSource(TEMPLATE);
  // The shell renders exactly one <h1>, from config.header.h1, and both the
  // title and the H1 are built from the same `primaryQuery` + `titleSuffix`.
  assert.ok(
    template.includes('h1: `${h.primaryQuery} : ${h.titleSuffix}`'),
    'H1 must be built from the exact primaryQuery'
  );
  assert.ok(
    template.includes('title: `${h.primaryQuery} : ${h.titleSuffix}`'),
    'title must be built from the exact primaryQuery'
  );

  for (const h of HEURES_MIROIRS_FLAMME_JUMELLE) {
    assert.equal(h.primaryQuery, `${h.slug} signification flamme jumelle`);
    const meta = await generateMetadata({ params: Promise.resolve({ heure: h.slug }) });
    assert.equal(typeof meta.title, 'string');
    assert.ok(
      (meta.title as string).startsWith(`${h.slug} signification flamme jumelle`),
      `${h.slug} title must open on the exact phrase, got "${meta.title}"`
    );
    // French sentence case (commit 1896a6e): lowercase after the colon.
    assert.match(h.titleSuffix, /^[a-zà-ÿ’]/u, `${h.slug} titleSuffix must stay lowercase after the colon`);
    assert.equal(meta.description, h.description);
    assert.ok(
      meta.description!.length >= 110 && meta.description!.length <= 165,
      `${h.slug} description length ${meta.description!.length} is out of range`
    );
    assert.equal(meta.alternates?.canonical, `${SITE_URL}${HUB_ROUTE}${h.slug}/`);
    assert.ok((meta.keywords as string[]).includes(h.primaryQuery), `${h.slug} keywords must carry the target query`);
  }
});

test('the 6 routes are in the sitemap, under the hub, in canonical slashed form', () => {
  const urls = new Set(sitemap().map((e) => e.url));
  for (const slug of PILOT_HOURS) {
    assert.ok(urls.has(`${SITE_URL}${HUB_ROUTE}${slug}/`), `${slug} missing from app/sitemap.ts`);
  }
  // the hub itself stays listed, and the cluster does not replace it
  assert.ok(urls.has(`${SITE_URL}${HUB_ROUTE}`), 'hub URL must remain in the sitemap');
  const clusterUrls = [...urls].filter((u) => u.startsWith(`${SITE_URL}${HUB_ROUTE}`) && u !== `${SITE_URL}${HUB_ROUTE}`);
  assert.equal(clusterUrls.length, 6, 'no stale or extra mirror-hour URLs in the sitemap');
});

test('the template satisfies the page-audit publication contract', () => {
  const issues = auditPageSource({ route: `${HUB_ROUTE}[heure]/`, source: readSource(TEMPLATE) });
  assert.deepEqual(issues, [], `page-audit issues: ${JSON.stringify(issues)}`);
});

test('content is genuinely distinct hour by hour, not one template with the hour swapped', () => {
  // Pairwise word-trigram similarity. The validator warns above 0.55 for
  // within-network near-duplicates; this batch is held an order of magnitude
  // stricter, because six pages on one keyword pattern is exactly the shape a
  // doorway set takes.
  for (let i = 0; i < HEURES_MIROIRS_FLAMME_JUMELLE.length; i++) {
    for (let j = i + 1; j < HEURES_MIROIRS_FLAMME_JUMELLE.length; j++) {
      const a = HEURES_MIROIRS_FLAMME_JUMELLE[i];
      const b = HEURES_MIROIRS_FLAMME_JUMELLE[j];
      const capsule = contentSimilarity(a.answerCapsule, b.answerCapsule);
      const body = contentSimilarity(bodyOf(a), bodyOf(b));
      assert.ok(capsule < 0.15, `${a.slug}/${b.slug} answer capsules are ${Math.round(capsule * 100)}% similar`);
      assert.ok(body < 0.15, `${a.slug}/${b.slug} page bodies are ${Math.round(body * 100)}% similar`);
    }
  }

  // Every differentiating field is unique across the batch.
  for (const field of ['theme', 'motCle', 'titleSuffix', 'description'] as const) {
    const values = HEURES_MIROIRS_FLAMME_JUMELLE.map((h) => h[field]);
    assert.equal(new Set(values).size, 6, `${field} must be unique per hour`);
  }
  const arcanes = HEURES_MIROIRS_FLAMME_JUMELLE.map((h) => h.arcane.slug);
  assert.equal(new Set(arcanes).size, 6, 'each hour must map to a different tarot arcana');
  const anchors = HEURES_MIROIRS_FLAMME_JUMELLE.map((h) => h.funnel.anchor);
  assert.equal(new Set(anchors).size, 6, 'funnel anchors must be varied, not one repeated exact-match anchor');
  const questions = HEURES_MIROIRS_FLAMME_JUMELLE.flatMap((h) => h.faq.map((f) => f.q));
  assert.equal(new Set(questions).size, questions.length, 'no FAQ question may be reused across hours');
});

test('each hour owns its signature reading and no other hour uses it', () => {
  for (const h of HEURES_MIROIRS_FLAMME_JUMELLE) {
    const signature = HOUR_SIGNATURES[h.slug];
    const own = `${bodyOf(h)} ${h.arcane.nom}`;
    assert.ok(own.includes(signature), `${h.slug} must develop its own reading around "${signature}"`);
    for (const other of HEURES_MIROIRS_FLAMME_JUMELLE) {
      if (other.slug === h.slug) continue;
      const foreign = `${bodyOf(other)} ${other.arcane.nom}`;
      assert.ok(!foreign.includes(signature), `${other.slug} reuses ${h.slug}'s signature "${signature}"`);
    }
  }
});

test('the numerology shown in the stats band matches the numerology written in the prose', () => {
  assert.deepEqual(PILOT_HOURS.map((s) => reductionNumerologique(s)), [6, 7, 4, 2, 1, 6]);
  for (const h of HEURES_MIROIRS_FLAMME_JUMELLE) {
    const n = String(reductionNumerologique(h.slug));
    assert.ok(h.numerologie.includes(n), `${h.slug}: prose must explain the reduction to ${n}`);
  }
});

test('every hour page funnels to the hub and to /voyance-gratuite-amour/', () => {
  const template = readSource(TEMPLATE);
  assert.match(template, /const HUB = '\/nouvelle-rencontre\/flamme-jumelle\/'/, 'links back up to the cluster parent');
  assert.match(template, /href="\/voyance-gratuite-amour\/"/, 'must link to the priority hub');
  assert.ok(template.includes('{h.funnel.anchor}'), 'renders the per-hour funnel anchor');
  assert.ok(template.includes('href={`/tarot-amour/${h.arcane.slug}/`}'), 'links each hour to its tarot arcana page');
  assert.ok(template.includes('href={`${HUB}${x.slug}/`}'), 'cross-links the sibling mirror hours');
  // CTA contract, as in tests/phaseBBoundedBatch.test.ts
  assert.match(template, /VoyantQuickCTA/);
  assert.match(template, /cta:\s*\{\s*topic:/, 'config must declare cta.topic (shell renders VoyantFinalCTA)');
  assert.match(template, /faq:\s*h\.faq/, 'config must feed the shell the record FAQ (visible + FAQPage schema)');

  for (const h of HEURES_MIROIRS_FLAMME_JUMELLE) {
    assert.match(h.funnel.anchor, /voyance/i, `${h.slug} funnel anchor must be a voyance anchor`);
    assert.ok(h.arcane.slug.length > 0);
  }
});

test('the flamme-jumelle hub is the cluster parent and carries the funnel', () => {
  const hub = readSource(HUB_FILE);
  assert.match(hub, /getHeureMiroirHubCards/, 'hub must render the cluster from the data layer');
  assert.match(hub, /Signification des heures miroirs pour les flammes jumelles/, 'hub must carry the cluster H2');
  assert.match(hub, /id="heures-miroirs"/, 'hub section must be anchorable');
  assert.match(hub, /href="\/voyance-gratuite-amour\/"/, 'hub must funnel into the priority page');

  const cards = getHeureMiroirHubCards();
  assert.deepEqual(cards.map((c) => c.slug), [...PILOT_HOURS]);
  for (const c of cards) {
    assert.equal(c.href, `${HUB_ROUTE}${c.slug}/`);
    assert.equal(c.primaryQuery, `${c.slug} signification flamme jumelle`);
  }
});

test('no emoji anywhere in the cluster (redesign contract)', () => {
  const emoji = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/u;
  for (const relFile of [TEMPLATE, 'lib/heuresMiroirsFlammeJumelle.ts']) {
    const source = readSource(relFile);
    assert.ok(!emoji.test(source), `${relFile} must not contain emoji`);
  }
});
