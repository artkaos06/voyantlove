import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

// The /voyance-gratuite-amour/ hub is the domain's strongest SEO asset
// (2026-08-27 DataForSEO: #26 on "voyance gratuite amour", 1 900/mo, 30 ranking
// keywords — more than any other URL), and it is the one hub that was NOT
// migrated to the shared ContentPage shell. ContentPage single-sources its FAQ:
// `config.faq` feeds both getFAQSchema() and the visible <h3>/<p> render, so
// the two cannot drift. This page predates that and authors its FAQ TWICE — an
// array passed to getFAQSchema(), and a hand-written block of <h3>/<p> JSX.
//
// It is authored twice on purpose: the visible answers carry <strong> entity
// bolding and two contextual <Link>s into /reconquete/ that a plain-text
// `config.faq` string cannot hold. That is a defensible trade, but it means
// nothing stops an editor from changing one copy and forgetting the other —
// and Google's FAQPage guidelines require the schema answer to be the answer
// the reader actually sees. This test is the missing guard.
//
// Reads raw source rather than importing the component: it is a server
// component wired into analytics/consent/CTA plumbing not worth booting for a
// text comparison, matching the approach in phaseASeoGscAlignment.test.ts.

const root = join(__dirname, '..');
const HUB = 'app/voyance-gratuite-amour/page.tsx';
const FAQ_HEADING = 'Questions fréquentes sur la voyance gratuite amour';

// The JSX side spells accents and French spacing as HTML entities
// (&eacute;, &nbsp;, &agrave;…) while the schema strings use real characters,
// so both sides are decoded to the same plain text before comparison.
const ENTITIES: Record<string, string> = {
  nbsp: ' ', apos: "'", amp: '&', lt: '<', gt: '>', quot: '"',
  eacute: 'é', egrave: 'è', ecirc: 'ê', euml: 'ë', Eacute: 'É',
  agrave: 'à', acirc: 'â', ccedil: 'ç', icirc: 'î', iuml: 'ï',
  ocirc: 'ô', oelig: 'œ', ugrave: 'ù', ucirc: 'û',
  laquo: '«', raquo: '»', mdash: '—', ndash: '–', euro: '€',
};

function decodeEntities(s: string): string {
  return s.replace(/&([a-zA-Z]+);/g, (m, name: string) => ENTITIES[name] ?? m);
}

/** Strip JSX tags, decode entities, collapse whitespace (incl. &nbsp;). */
function normalize(s: string): string {
  return decodeEntities(s.replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim();
}

/** Undo the single-quoted TS string literal escaping. */
function unquote(s: string): string {
  return s.replace(/\\'/g, "'").replace(/\\\\/g, '\\');
}

/** Word sequence, ignoring punctuation and case. */
function words(s: string): string[] {
  return s.toLowerCase().match(/[\p{L}\p{N}]+/gu) ?? [];
}

interface FAQPair {
  q: string;
  a: string;
}

function readHub(): string {
  return readFileSync(join(root, HUB), 'utf-8');
}

/** The `getFAQSchema([...])` argument — what ships as FAQPage JSON-LD. */
function schemaFaqs(source: string): FAQPair[] {
  const start = source.indexOf('const faqSchema = getFAQSchema([');
  assert.notEqual(start, -1, 'hub must still build its FAQPage schema via getFAQSchema([...])');
  const end = source.indexOf(']);', start);
  assert.notEqual(end, -1, 'getFAQSchema([...]) call must be terminated');
  const block = source.slice(start, end);

  return [...block.matchAll(/question: '((?:\\.|[^'\\])*)',\s*answer: '((?:\\.|[^'\\])*)',/g)].map((m) => ({
    q: normalize(unquote(m[1])),
    a: normalize(unquote(m[2])),
  }));
}

/**
 * The visible FAQ block. Scoped to the FAQ <section> so the page's other <h3>s
 * (method cards, the three consultation channels, the related-topic grids)
 * cannot leak in, and paired h3->next-p so the section's intro <p> — which
 * precedes every <h3> — is naturally excluded.
 */
function renderedFaqs(source: string): FAQPair[] {
  const headingAt = source.indexOf(FAQ_HEADING);
  assert.notEqual(headingAt, -1, `visible FAQ section must still be headed "${FAQ_HEADING}"`);
  const end = source.indexOf('</section>', headingAt);
  assert.notEqual(end, -1, 'FAQ section must be closed');
  const section = source.slice(headingAt, end);

  return [...section.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/g)].map((m) => ({
    q: normalize(m[1]),
    a: normalize(m[2]),
  }));
}

test('hub FAQ: every schema question is rendered, and every rendered question is in the schema', () => {
  const source = readHub();
  const schema = schemaFaqs(source);
  const rendered = renderedFaqs(source);

  assert.ok(schema.length >= 4, `expected at least 4 FAQs in the schema, got ${schema.length}`);
  assert.equal(
    rendered.length,
    schema.length,
    `FAQ count drift: ${schema.length} in the JSON-LD array vs ${rendered.length} rendered <h3>/<p> pairs`
  );

  const schemaQs = schema.map((f) => f.q);
  const renderedQs = rendered.map((f) => f.q);

  // Both directions, stated explicitly so a failure names the offending side.
  for (const q of schemaQs) {
    assert.ok(renderedQs.includes(q), `schema question is not rendered anywhere on the page: "${q}"`);
  }
  for (const q of renderedQs) {
    assert.ok(schemaQs.includes(q), `rendered question is missing from the FAQPage schema: "${q}"`);
  }

  // Order too: the JSON-LD mainEntity sequence should read like the page.
  assert.deepEqual(renderedQs, schemaQs, 'schema and rendered FAQ questions must be in the same order');
});

// Answers are compared word-for-word rather than character-for-character. The
// visible copy is deliberately typeset (« … » guillemets, em-dashes, &nbsp;
// before French double punctuation) while the schema strings stay plain, and
// that polish is not drift. A changed, added or removed WORD is.
//
// Zero-tolerance: there is no allowlist. This test shipped with one entry —
// the schema said "Préparez votre question à l'avance" where the page said
// "votre question sentimentale à l'avance" — and that one-word divergence was
// then fixed in the schema string rather than tolerated, so the exemption
// mechanism went with it. Any future divergence is a bug to fix in the page,
// not an entry to add back here.
test('hub FAQ: schema answers match the rendered answers word-for-word (markup and typography aside)', () => {
  const source = readHub();
  const schema = schemaFaqs(source);
  const renderedByQ = new Map(renderedFaqs(source).map((f) => [f.q, f.a]));

  const drifted: string[] = [];
  for (const { q, a } of schema) {
    const renderedAnswer = renderedByQ.get(q);
    assert.ok(renderedAnswer !== undefined, `no rendered answer for schema question "${q}"`);
    if (JSON.stringify(words(a)) !== JSON.stringify(words(renderedAnswer!))) drifted.push(q);
  }

  assert.deepEqual(
    drifted,
    [],
    `FAQ answer drift between the JSON-LD and the visible copy for: ${drifted.map((q) => `"${q}"`).join(', ')}`
  );
});
