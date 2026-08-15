// Repository-native pSEO validator for voyantlove.fr.
//
// Replaces the missing scripts/validate-semantic-quality.js referenced by
// `npm run validate`. The old script predates the site's current
// architecture (see README's "Semantic Quality Check" section, written for
// a data/love-situations/ + lib/semantic/ pipeline — data/entities/,
// data/intents/, and lib/semantic/types.ts — that was superseded by the
// per-network data layer under lib/*.ts and removed as dead weight once
// confirmed unimported). This script re-implements the same *intent* —
// intent-fulfillment/entity-coverage/semantic-uniqueness/LLM-readiness style
// gating — against the architecture that actually ships today: typed record
// arrays, each with its own `validate<X>Record` gate, rendered through
// `[param]/page.tsx` dynamic routes and filtered into app/sitemap.ts.
//
// What it checks:
//  1. Re-runs every typed network's own `validate<X>Record` gate as a CI
//     failure, not just a silent sitemap filter.
//  2. Slug uniqueness within each network (a collision is a routing bug).
//  3. generateStaticParams()/sitemap.ts drift against each network's data.
//  4. Best-effort static-source audit of every indexable app/**/page.tsx
//     for metadata/title-suffix/H1/canonical/schema presence (warnings —
//     see scripts/pseo-validate/page-audit.ts for why these don't block).
//  5. Orphan-page detection for statically-routed pages (dynamic `[param]`
//     pages are structurally linked via their hub's `.map()`, not a
//     grep-able literal href, so they're out of scope for this check), plus
//     a broken-internal-link check across every literal href in the repo.
//  6. Duplicate-intent / content-similarity warnings: cross-page title
//     (keyword-cannibalization) overlap, and within-network answer-capsule
//     near-duplicate detection for dense record clusters — this is also
//     the glossary's "duplicate intent against every existing VoyantLove
//     URL" filter: same mechanism, no special-casing needed.
//  7. Glossary-specific referential integrity: every `termesLies` slug
//     must resolve to another real, live glossary entry.
//
// Severity: `errors` block `npm run validate` (exit 1). `warnings` print
// but never block — this script audits ~250 pages built across many
// sessions, most of which nobody asked this validator to fix. New content
// added alongside this validator is held to a stricter bar (0 warnings) by
// hand, not by making the whole site's legacy pages a hard gate.
//
// Run: npm run validate  (equivalent to: node --import tsx scripts/validate-pseo.ts)

import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { REVES_AMOUR, validateDreamRecord, type DreamEntry } from '../lib/revesAmour';
import { TAROT_LOVE_CARDS, validateCardRecord, type TarotLoveCard } from '../lib/tarotLoveCards';
import { SIGNES_AMOUR, validateSignRecord, type SignLoveProfile } from '../lib/signesAmour';
import { COMPATIBILITY_PAIRS, validatePairRecord, type PairRecord } from '../lib/compatibilitePairs';
import { GLOSSARY_TERMS, validateTermRecord, validateGlossaryIntegrity, type GlossaryTerm } from '../lib/glossaire';

import { generateStaticParams as dreamParams, generateMetadata as dreamMeta } from '../app/reves-amour/[reve]/page';
import { generateStaticParams as cardParams, generateMetadata as cardMeta } from '../app/tarot-amour/[carte]/page';
import { generateStaticParams as signParams, generateMetadata as signMeta } from '../app/astrologie-amour/[signe]/page';
import { generateStaticParams as pairParams, generateMetadata as pairMeta } from '../app/compatibilite-amoureuse/[pair]/page';
import { generateStaticParams as termParams, generateMetadata as termMeta } from '../app/glossaire/[terme]/page';

import sitemap from '../app/sitemap';
import {
  auditPageSource,
  extractHrefLikeLiterals,
  extractInternalHrefs,
  filePathToRoute,
  findPageFiles,
  isDynamicRoute,
  isUnslashedInternalHref,
  loadAllSources,
  loadPages,
  normalizeRoute,
  type DiscoveredPage,
} from './pseo-validate/page-audit';
import { contentSimilarity, isKebabSlug, titleOverlap } from './pseo-validate/text-similarity';

export interface Issue {
  severity: 'error' | 'warning';
  scope: string;
  message: string;
}

/**
 * One entry per typed data-layer network. Adding a new network (e.g. the
 * glossary) means adding one entry here — everything else (slug
 * uniqueness, route/sitemap drift, metadata audit, within-network
 * near-duplicate detection) runs generically off this config.
 */
interface NetworkConfig<T> {
  name: string;
  /** URL prefix as it appears in app/sitemap.ts, e.g. '/reves-amour/' */
  basePath: string;
  records: T[];
  validate: (r: T) => string[];
  slugOf: (r: T) => string;
  /** human title used for cross-page cannibalization + within-network similarity */
  titleOf: (r: T) => string;
  /** primary body text used for within-network near-duplicate detection */
  bodyOf: (r: T) => string;
  /** the dynamic segment's param key, e.g. 'reve' for /reves-amour/[reve]/ */
  paramKey: string;
  staticParams: Record<string, string>[];
  // Typed loosely on purpose: each network's real generateMetadata expects a
  // specific `{ params: Promise<{ <paramKey>: string }> }` shape (see each
  // [param]/page.tsx), which is narrower than what a shared field across
  // heterogeneous networks can express. Runtime guards below (typeof
  // meta.title === 'string') do the actual safety check.
  generateMetadata: (args: { params: Promise<any> }) => Promise<any>;
}

const NETWORKS: NetworkConfig<any>[] = [
  {
    name: 'reves-amour',
    basePath: '/reves-amour/',
    records: REVES_AMOUR,
    validate: (r: DreamEntry) => validateDreamRecord(r),
    slugOf: (r: DreamEntry) => r.slug,
    titleOf: (r: DreamEntry) => r.titre,
    bodyOf: (r: DreamEntry) => r.answerCapsule,
    paramKey: 'reve',
    staticParams: dreamParams(),
    generateMetadata: dreamMeta,
  },
  {
    name: 'tarot-amour',
    basePath: '/tarot-amour/',
    records: TAROT_LOVE_CARDS,
    validate: (r: TarotLoveCard) => validateCardRecord(r),
    slugOf: (r: TarotLoveCard) => r.slug,
    titleOf: (r: TarotLoveCard) => r.name,
    bodyOf: (r: TarotLoveCard) => r.answerCapsule,
    paramKey: 'carte',
    staticParams: cardParams(),
    generateMetadata: cardMeta,
  },
  {
    name: 'astrologie-amour',
    basePath: '/astrologie-amour/',
    records: SIGNES_AMOUR,
    validate: (r: SignLoveProfile) => validateSignRecord(r),
    slugOf: (r: SignLoveProfile) => r.slug,
    titleOf: (r: SignLoveProfile) => r.name,
    bodyOf: (r: SignLoveProfile) => r.answerCapsule,
    paramKey: 'signe',
    staticParams: signParams(),
    generateMetadata: signMeta,
  },
  {
    name: 'compatibilite-amoureuse',
    basePath: '/compatibilite-amoureuse/',
    records: COMPATIBILITY_PAIRS,
    validate: (r: PairRecord) => validatePairRecord(r),
    slugOf: (r: PairRecord) => r.slug,
    titleOf: (r: PairRecord) => r.titre,
    bodyOf: (r: PairRecord) => r.answerCapsule || r.dynamique,
    paramKey: 'pair',
    staticParams: pairParams(),
    generateMetadata: pairMeta,
  },
  {
    name: 'glossaire',
    basePath: '/glossaire/',
    records: GLOSSARY_TERMS,
    validate: (r: GlossaryTerm) => validateTermRecord(r),
    slugOf: (r: GlossaryTerm) => r.slug,
    titleOf: (r: GlossaryTerm) => r.terme,
    bodyOf: (r: GlossaryTerm) => r.answerCapsule,
    paramKey: 'terme',
    staticParams: termParams(),
    generateMetadata: termMeta,
  },
];

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE_URL = 'https://www.voyantlove.fr';
const CONTENT_SIMILARITY_WARN = 0.55;
const TITLE_OVERLAP_WARN = 0.7;

// ---------------------------------------------------------------------------
// 1 + 2 + 3: typed-record gates, slug uniqueness, route/sitemap integrity
// ---------------------------------------------------------------------------

async function checkNetworks(): Promise<{
  issues: Issue[];
  metaSamples: { route: string; title: string; description: string; scope: string }[];
  validRoutes: Set<string>;
}> {
  const issues: Issue[] = [];
  const metaSamples: { route: string; title: string; description: string; scope: string }[] = [];
  const sitemapUrls = new Set(sitemap().map((e) => e.url));
  const globalSlugsBySlug = new Map<string, string[]>(); // slug -> network names using it
  const validRoutes = new Set<string>();

  for (const net of NETWORKS) {
    // (1) publication-gate re-run
    for (const record of net.records) {
      const gateIssues = net.validate(record);
      for (const msg of gateIssues) {
        issues.push({ severity: 'error', scope: net.name, message: `validate${net.name}Record: ${msg}` });
      }
    }

    // (2) slug format + uniqueness within the network
    const seen = new Set<string>();
    for (const record of net.records) {
      const slug = net.slugOf(record);
      if (!isKebabSlug(slug)) {
        issues.push({ severity: 'error', scope: net.name, message: `slug "${slug}" is not ASCII kebab-case` });
      }
      if (seen.has(slug)) {
        issues.push({ severity: 'error', scope: net.name, message: `duplicate slug "${slug}" within ${net.name}` });
      }
      seen.add(slug);
      const owners = globalSlugsBySlug.get(slug) || [];
      owners.push(net.name);
      globalSlugsBySlug.set(slug, owners);
    }

    // (3) generateStaticParams() / sitemap.ts drift against the data array
    const validSlugs = new Set(net.records.filter((r) => net.validate(r).length === 0).map((r) => net.slugOf(r)));
    const paramSlugs = new Set(net.staticParams.map((p) => p[net.paramKey]));

    for (const slug of validSlugs) {
      if (!paramSlugs.has(slug)) {
        issues.push({ severity: 'error', scope: net.name, message: `"${slug}" passes validation but is missing from generateStaticParams()` });
      }
      // Trailing slash to match the canonical form (trailingSlash: true) that
      // app/sitemap.ts now emits — consistent with validRoutes/line-238 below.
      const url = `${SITE_URL}${net.basePath}${slug}/`;
      if (!sitemapUrls.has(url)) {
        issues.push({ severity: 'error', scope: net.name, message: `"${slug}" passes validation but is missing from app/sitemap.ts (expected ${url})` });
      }
      validRoutes.add(`${net.basePath}${slug}/`);
    }
    for (const slug of paramSlugs) {
      if (!validSlugs.has(slug)) {
        issues.push({ severity: 'error', scope: net.name, message: `"${slug}" is in generateStaticParams() but does not pass validate${net.name}Record` });
      }
    }
    // stale sitemap entries: URLs under this network's prefix with no matching valid record
    for (const url of sitemapUrls) {
      if (!url.startsWith(`${SITE_URL}${net.basePath}`)) continue;
      if (url === `${SITE_URL}${net.basePath}`) continue; // the hub URL itself
      const slug = url.slice(`${SITE_URL}${net.basePath}`.length).replace(/\/$/, '');
      if (!validSlugs.has(slug)) {
        issues.push({ severity: 'error', scope: net.name, message: `sitemap.ts references "${url}" which has no matching valid record in ${net.name}` });
      }
    }

    // (4) real generateMetadata() sample per valid record, for the global metadata audit below
    for (const record of net.records) {
      if (net.validate(record).length > 0) continue;
      const slug = net.slugOf(record);
      const meta = await net.generateMetadata({ params: Promise.resolve({ [net.paramKey]: slug }) });
      const title = typeof meta.title === 'string' ? meta.title : '';
      if (!title) {
        issues.push({ severity: 'error', scope: net.name, message: `generateMetadata() returned no title for "${slug}"` });
      }
      metaSamples.push({
        route: `${net.basePath}${slug}/`,
        title,
        description: meta.description || '',
        scope: net.name,
      });
    }
  }

  // cross-network slug reuse is not a routing conflict (different URL
  // prefixes) but is worth a human glance — same wording, two networks.
  for (const [slug, owners] of globalSlugsBySlug) {
    if (owners.length > 1) {
      issues.push({ severity: 'warning', scope: 'cross-network', message: `slug "${slug}" is reused across networks: ${owners.join(', ')}` });
    }
  }

  return { issues, metaSamples, validRoutes };
}

// Referential integrity of the glossary's own cross-links (termesLies must
// resolve to real, live entries) — distinct from the generic slug/route
// checks above because it's specific to one network's internal graph.
function checkGlossaryIntegrity(): Issue[] {
  return validateGlossaryIntegrity(GLOSSARY_TERMS).map((msg) => ({
    severity: 'error' as const,
    scope: 'glossaire',
    message: `validateGlossaryIntegrity: ${msg}`,
  }));
}

// ---------------------------------------------------------------------------
// (5) generic indexable-page audit + orphan-page detection
// ---------------------------------------------------------------------------

function checkPages(networkRoutes: Set<string>): { issues: Issue[]; pages: DiscoveredPage[] } {
  const issues: Issue[] = [];
  const appDir = path.join(REPO_ROOT, 'app');
  const pages = loadPages(appDir, REPO_ROOT);

  for (const page of pages) {
    for (const pi of auditPageSource(page)) {
      issues.push({ severity: pi.severity, scope: 'page-audit', message: pi.message });
    }
  }

  // Orphan check, scoped to statically-routed pages (see page-audit.ts).
  // Inbound links can live in ANY source file (nav/footer/related-links
  // widgets), not just other page.tsx files, so scan app/ + components/.
  const allSources = loadAllSources([appDir, path.join(REPO_ROOT, 'components')], REPO_ROOT);
  const allHrefs = new Set<string>();
  for (const { source } of allSources) {
    for (const href of extractInternalHrefs(source)) allHrefs.add(normalizeRoute(href));
  }

  for (const page of pages) {
    if (isDynamicRoute(page.route)) continue;
    if (page.route === '/') continue;
    if (!allHrefs.has(normalizeRoute(page.route))) {
      issues.push({ severity: 'warning', scope: 'orphan-check', message: `${page.route}: no static internal <Link href> to this route found anywhere in app/ or components/` });
    }
  }

  // Broken-link check: every literal internal href found anywhere must
  // resolve to a real destination — a statically-routed page (audited or
  // not; app/en, app/lp, app/api etc. still count as real destinations),
  // a dynamic page's known-valid slug, or a small allowlist of
  // non-page infrastructure paths.
  const allPageFiles = findPageFiles(appDir, REPO_ROOT);
  const knownStaticRoutes = new Set(allPageFiles.map((f) => filePathToRoute(f)));
  // middleware.ts rewrites the EN domain (lovepsychicguide.com) so
  // app/en/foo/page.tsx is requested as clean /foo/ on THAT domain, with no
  // /en/ prefix — EN pages correctly link to each other that way. Register
  // both forms so those legitimate same-domain links don't read as broken.
  for (const route of [...knownStaticRoutes]) {
    if (route.startsWith('/en/')) knownStaticRoutes.add(route.slice(3));
    else if (route === '/en/') knownStaticRoutes.add('/');
  }
  const ALLOWLIST_PREFIXES = ['/api/', '/_next/'];
  const ALLOWLIST_EXACT = new Set(['/favicon.ico/', '/sitemap.xml/', '/robots.txt/', '/go/', '/appel/']);
  const STATIC_ASSET_RE = /\.[a-z0-9]{2,4}\/$/i; // e.g. /favicon.png/ after normalizeRoute — a public/ asset, not a route

  for (const href of allHrefs) {
    if (href.includes('[')) continue; // template-ish leftovers, not a real target
    if (STATIC_ASSET_RE.test(href)) continue;
    if (knownStaticRoutes.has(href)) continue;
    if (networkRoutes.has(href)) continue;
    if (ALLOWLIST_EXACT.has(href)) continue;
    if (ALLOWLIST_PREFIXES.some((p) => href.startsWith(p))) continue;
    issues.push({ severity: 'warning', scope: 'broken-link', message: `internal link to "${href}" does not resolve to any known page or valid record` });
  }

  return { issues, pages };
}

// Trailing-slash literal audit: trailingSlash: true (next.config.mjs) makes
// every page route's canonical form end in `/`; middleware.ts 308-redirects
// requests that don't, but that redirect is a safety net for stray/external
// links, not something our own source should rely on for every click. This
// walks every href-like string literal — JSX `href=` attrs AND object
// `href: '...'` properties (nav/footer arrays, ContentPageConfig
// related/backLink, funnel-link maps) — across app/, components/, and lib/
// (where several of those link arrays are defined), and blocks on any
// internal page link that's missing its trailing slash. See
// isUnslashedInternalHref() for the exact exclusion rules (api/_next,
// external, mailto/tel, fragments, static assets).
function checkTrailingSlashLinks(): Issue[] {
  const issues: Issue[] = [];
  const sources = loadAllSources(
    [path.join(REPO_ROOT, 'app'), path.join(REPO_ROOT, 'components'), path.join(REPO_ROOT, 'lib')],
    REPO_ROOT
  );

  for (const { relPath, source } of sources) {
    const seen = new Set<string>();
    for (const raw of extractHrefLikeLiterals(source)) {
      if (!isUnslashedInternalHref(raw)) continue;
      if (seen.has(raw)) continue; // one issue per distinct literal per file, not per occurrence
      seen.add(raw);
      issues.push({
        severity: 'error',
        scope: 'trailing-slash',
        message: `${relPath}: internal link "${raw}" is missing its canonical trailing slash`,
      });
    }
  }

  return issues;
}

// ---------------------------------------------------------------------------
// (6) duplicate-intent / content-similarity warnings
// ---------------------------------------------------------------------------

function checkDuplicateIntent(
  metaSamples: { route: string; title: string; scope: string }[],
  pages: DiscoveredPage[]
): Issue[] {
  const issues: Issue[] = [];

  // Extract a rough title for each statically-audited page (best-effort:
  // first `title:` string literal in a static metadata export). Pages using
  // generateMetadata are already represented via metaSamples.
  const pageTitles: { route: string; title: string }[] = [];
  for (const page of pages) {
    const block = page.source.match(/export\s+const\s+metadata[^;]*?title:\s*(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"|`((?:[^`\\]|\\.)*)`)/s);
    const raw = block && (block[1] ?? block[2] ?? block[3]);
    if (raw) pageTitles.push({ route: page.route, title: raw.replace(/\\(['"`])/g, '$1') });
  }

  const allTitled = [
    ...pageTitles.map((p) => ({ route: p.route, title: p.title })),
    ...metaSamples.map((m) => ({ route: m.route, title: m.title })),
  ].filter((t) => t.title);

  // Cross-page keyword-cannibalization scan (also serves as the glossary's
  // "duplicate intent against every existing Voyantlove URL" check once the
  // glossary network is registered above — same mechanism, no special-casing).
  for (let i = 0; i < allTitled.length; i++) {
    for (let j = i + 1; j < allTitled.length; j++) {
      const a = allTitled[i];
      const b = allTitled[j];
      if (a.route === b.route) continue;
      const overlap = titleOverlap(a.title, b.title);
      if (overlap > TITLE_OVERLAP_WARN) {
        issues.push({
          severity: 'warning',
          scope: 'duplicate-intent',
          message: `possible keyword cannibalization (${Math.round(overlap * 100)}% title-word overlap): ${a.route} ("${a.title}") vs ${b.route} ("${b.title}")`,
        });
      }
    }
  }

  // Within-network near-duplicate body content ("dense clusters").
  for (const net of NETWORKS) {
    const valid = net.records.filter((r: any) => net.validate(r).length === 0);
    for (let i = 0; i < valid.length; i++) {
      for (let j = i + 1; j < valid.length; j++) {
        const sim = contentSimilarity(net.bodyOf(valid[i]), net.bodyOf(valid[j]));
        if (sim > CONTENT_SIMILARITY_WARN) {
          issues.push({
            severity: 'warning',
            scope: 'duplicate-intent',
            message: `${net.name}: near-duplicate content between "${net.slugOf(valid[i])}" and "${net.slugOf(valid[j])}" (${Math.round(sim * 100)}% trigram similarity)`,
          });
        }
      }
    }
  }

  return issues;
}

// ---------------------------------------------------------------------------
// orchestration
// ---------------------------------------------------------------------------

export async function runValidation(): Promise<{ errors: Issue[]; warnings: Issue[] }> {
  const { issues: networkIssues, metaSamples, validRoutes } = await checkNetworks();
  const integrityIssues = checkGlossaryIntegrity();
  const { issues: pageIssues, pages } = checkPages(validRoutes);
  const trailingSlashIssues = checkTrailingSlashLinks();
  const duplicateIssues = checkDuplicateIntent(metaSamples, pages);

  const all = [...networkIssues, ...integrityIssues, ...pageIssues, ...trailingSlashIssues, ...duplicateIssues];
  return {
    errors: all.filter((i) => i.severity === 'error'),
    warnings: all.filter((i) => i.severity === 'warning'),
  };
}

function printReport(errors: Issue[], warnings: Issue[]) {
  console.log('\n=== pSEO Validation Report ===\n');
  if (errors.length === 0 && warnings.length === 0) {
    console.log('All checks passed with zero errors and zero warnings.\n');
    return;
  }
  if (errors.length > 0) {
    console.log(`ERRORS (blocking) — ${errors.length}\n`);
    for (const e of errors) console.log(`  [${e.scope}] ${e.message}`);
    console.log('');
  }
  if (warnings.length > 0) {
    console.log(`WARNINGS (review, non-blocking) — ${warnings.length}\n`);
    for (const w of warnings) console.log(`  [${w.scope}] ${w.message}`);
    console.log('');
  }
  console.log(`Summary: ${errors.length} error(s), ${warnings.length} warning(s).\n`);
}

const isMain = (() => {
  try {
    return import.meta.url === `file://${process.argv[1]}`;
  } catch {
    return false;
  }
})();

if (isMain) {
  runValidation().then(({ errors, warnings }) => {
    printReport(errors, warnings);
    process.exit(errors.length > 0 ? 1 : 0);
  });
}
