import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

// Pins the pSEO → priority-page internal-link funnels so a future template
// edit can't silently drop them. Goal: the 81 compatibility pages and 55
// glossary pages pass authority to the low-KD ranking targets (astro cluster,
// flamme-jumelle, tarot-amour, sentiments, numérologie) instead of dead-ending.

const root = join(__dirname, '..');
const read = (p: string) => readFileSync(join(root, p), 'utf-8');

test('compatibility pairs funnel to both signs\' astrologie-amour profiles', () => {
  const tpl = read('app/compatibilite-amoureuse/[pair]/page.tsx');
  assert.match(tpl, /const LIVE_SIGN_SLUG/, 'builds a live sign -> astro slug map');
  assert.ok(
    tpl.includes('`/astrologie-amour/${LIVE_SIGN_SLUG[rec.signA]}/`'),
    'links signA to its /astrologie-amour profile'
  );
  assert.ok(
    tpl.includes('`/astrologie-amour/${LIVE_SIGN_SLUG[rec.signB]}/`'),
    'links signB to its /astrologie-amour profile'
  );
  assert.match(tpl, /en amour<\/Link>/, 'uses a keyword anchor ("<sign> en amour")');
  // pre-existing links must survive
  assert.match(tpl, /\/methodes-voyance\/synastrie-amoureuse/, 'synastrie link preserved');
  assert.match(tpl, /\/compatibilite-amoureuse\/\$\{p\.slug\}/, 'sibling links preserved');
});

test('glossary terms funnel to a category-specific priority page', () => {
  const tpl = read('app/glossaire/[terme]/page.tsx');
  // varied targets by category (not one sitewide anchor)
  for (const href of [
    '/astrologie-amour/',
    '/methodes-voyance/numerologie-amoureuse/',
    '/tarot-amour/',
    '/sentiments/',
    '/nouvelle-rencontre/flamme-jumelle/',
  ]) {
    assert.ok(tpl.includes(`href: '${href}'`), `category funnel must target ${href}`);
  }
  assert.ok(tpl.includes('href={funnel.href}'), 'renders the per-category funnel link');
  assert.match(tpl, /href="\/glossaire\/"/, 'glossaire hub link preserved');
});

test('dream pages funnel to a theme-relevant priority page (keyed on slug)', () => {
  const tpl = read('app/reves-amour/[reve]/page.tsx');
  assert.match(tpl, /function dreamFunnel/, 'has a slug-keyed theme funnel');
  for (const href of [
    '/reconquete/va-t-il-elle-revenir/',
    '/sentiments/voyance-mariage/',
    '/crise-couple/infidelite-couple/',
    '/nouvelle-rencontre/flamme-jumelle/',
    '/sentiments/maime-t-il-elle/',
  ]) {
    assert.ok(tpl.includes(`href: '${href}'`), `dream funnel must target ${href}`);
  }
  assert.ok(tpl.includes('href={funnel.href}'), 'renders the funnel link');
  assert.match(tpl, /href="\/reves-amour\/"/, 'reves hub link preserved');
});

test('tarot cards keep their existing links to the tarot KD-giant + tools (already well-linked)', () => {
  const tpl = read('app/tarot-amour/[carte]/page.tsx');
  assert.match(tpl, /href="\/tarot-amour\/"/, 'links to the /tarot-amour hub (KD giant)');
  assert.match(tpl, /\/methodes-voyance\/tirage-tarot-amour/, 'links to the tirage page');
  assert.match(tpl, /\/voyance-gratuite-amour\/tarot-amour-gratuit/, 'links to the free tarot tool');
});

// 2026-08-27, DataForSEO (Google FR): /voyance-gratuite-amour/ is the domain's
// strongest asset — #26 on "voyance gratuite amour" (1 900/mo) and 30 ranking
// keywords, more than any other URL. On a 2-month-old zero-authority domain the
// lever is to concentrate internal equity there, so every pSEO network now
// funnels into it contextually (in prose, not in a sitewide boilerplate block).
// Anchors are deliberately varied across networks: one repeated exact-match
// anchor on ~200 templated pages reads as a footprint, four closely related
// French variants read as editorial.
test('every pSEO network funnels contextually into the /voyance-gratuite-amour/ hub', () => {
  const templates: Record<string, RegExp> = {
    // sign profiles (12 pages)
    'app/astrologie-amour/[signe]/page.tsx': /voyance gratuite amour<\/Link>/,
    // compatibility pairs (81 pages)
    'app/compatibilite-amoureuse/[pair]/page.tsx': /voyance amoureuse gratuite<\/Link>/,
    // dream interpretations
    'app/reves-amour/[reve]/page.tsx': /voyance gratuite amour<\/Link>/,
    // glossary terms (55 pages)
    'app/glossaire/[terme]/page.tsx': /voyance amoureuse gratuite en ligne<\/Link>/,
  };

  for (const [relPath, anchor] of Object.entries(templates)) {
    const tpl = read(relPath);
    assert.match(tpl, /href="\/voyance-gratuite-amour\/"/, `${relPath} must link to the hub`);
    assert.match(tpl, anchor, `${relPath} must use its differentiated descriptive French anchor`);
  }

  // The cluster hubs themselves, which carry the most equity per page.
  for (const relPath of [
    'app/astrologie-amour/page.tsx',
    'app/compatibilite-amoureuse/page.tsx',
    'app/reves-amour/page.tsx',
    'app/glossaire/page.tsx',
    'app/crise-couple/page.tsx',
  ]) {
    assert.match(read(relPath), /href="\/voyance-gratuite-amour\/"/, `${relPath} must link to the hub`);
  }
});

test('the hub funnel does not disturb the pre-existing per-network funnels', () => {
  // Regression guard: the hub link was ADDED alongside the category/theme
  // funnels pinned by the tests above, never in place of one.
  assert.match(read('app/glossaire/[terme]/page.tsx'), /href=\{funnel\.href\}/, 'glossary category funnel preserved');
  assert.match(read('app/reves-amour/[reve]/page.tsx'), /href=\{funnel\.href\}/, 'dream theme funnel preserved');
  assert.ok(
    read('app/compatibilite-amoureuse/[pair]/page.tsx').includes('`/astrologie-amour/${LIVE_SIGN_SLUG[rec.signA]}/`'),
    'compatibility -> astro funnel preserved'
  );
});
