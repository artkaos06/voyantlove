// Filesystem discovery + static-source auditing of app/**/page.tsx files.
//
// This is a *source-text* audit, not a rendered-DOM audit: there is no
// running Next.js server in `npm run validate`. It greps the compiled
// intent out of each page's source (metadata export, <h1>, JSON-LD script
// or schema helper call, alternates.canonical, internal <Link href>s) which
// is enough to catch the class of regression this validator exists to
// catch (a new page shipped without metadata/H1/schema/canonical), even
// though it can't verify actual rendered output the way a browser-based
// crawl would.

import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

export interface PageIssue {
  severity: 'error' | 'warning';
  message: string;
}

export interface DiscoveredPage {
  /** repo-relative path, e.g. 'app/methodes-voyance/runes-amour/page.tsx' */
  relPath: string;
  /** derived route, e.g. '/methodes-voyance/runes-amour/'. Dynamic segments keep their `[param]` literal. */
  route: string;
  source: string;
}

// Paths intentionally out of scope for the indexable-page audit:
//  - app/api/**   route handlers, not pages
//  - app/admin/** internal tool, robots.txt-disallowed
//  - app/lp/**    paid ad landers: noindex meta + robots.txt-disallowed by design
//  - app/en/**    a distinct site (lovepsychicguide.com) served off another
//                 domain via middleware rewrite; out of scope for this audit
//  - app/go, app/appel  client-side redirect/click-bridge utilities, no content
const EXCLUDED_PREFIXES = ['app/api/', 'app/admin/', 'app/lp/', 'app/en/'];
const EXCLUDED_EXACT = new Set(['app/go/page.tsx', 'app/appel/page.tsx']);

export function isExcludedPath(relPath: string): boolean {
  const p = relPath.replace(/\\/g, '/');
  if (EXCLUDED_EXACT.has(p)) return true;
  return EXCLUDED_PREFIXES.some((prefix) => p.startsWith(prefix));
}

export function filePathToRoute(relPath: string): string {
  const norm = relPath.replace(/\\/g, '/');
  const withoutApp = norm.replace(/^app\//, '');
  const withoutFile = withoutApp.replace(/\/?page\.tsx?$/, '');
  const cleaned = withoutFile.replace(/^\/+|\/+$/g, '');
  return cleaned === '' ? '/' : `/${cleaned}/`;
}

export function isDynamicRoute(route: string): boolean {
  return route.includes('[');
}

/** Recursively find every app/**\/page.{tsx,ts} under `appDir`, returning repo-relative paths. */
export function findPageFiles(appDir: string, repoRoot: string): string[] {
  const results: string[] = [];
  function walk(dir: string) {
    for (const entry of readdirSync(dir)) {
      const full = path.join(dir, entry);
      const st = statSync(full);
      if (st.isDirectory()) {
        walk(full);
      } else if (entry === 'page.tsx' || entry === 'page.ts') {
        results.push(path.relative(repoRoot, full).replace(/\\/g, '/'));
      }
    }
  }
  walk(appDir);
  return results;
}

export function loadPages(appDir: string, repoRoot: string): DiscoveredPage[] {
  return findPageFiles(appDir, repoRoot)
    .filter((relPath) => !isExcludedPath(relPath))
    .map((relPath) => ({
      relPath,
      route: filePathToRoute(relPath),
      source: readFileSync(path.join(repoRoot, relPath), 'utf-8'),
    }));
}

/**
 * Pages built on the shared ContentPage shell (components/ContentPage.tsx —
 * used by ~85 hand-authored pages under crise-couple/, reconquete/,
 * rupture/, sentiments/, nouvelle-rencontre/, methodes-voyance/, and
 * voyance-gratuite-amour/) pass their metadata/H1/schema through a typed
 * `ContentPageConfig` object instead of writing `canonical: '...'`, a
 * literal `<h1>`, or a JSON-LD block directly in the page source — the
 * shell renders all of that unconditionally from `config` (see
 * `contentMeta()` and the `<ContentPage>` body in ContentPage.tsx).
 * `ContentPageConfig` requires `url`, `header.h1`, `faq`, and `cta` as
 * non-optional fields, so `tsc` (via `npm run build`) already guarantees
 * those invariants hold for any page that compiles; detecting shell usage
 * here is the source-level equivalent of the dynamic-route reasoning above
 * (structurally guaranteed, not grep-able per literal).
 */
export function usesContentPageShell(source: string): boolean {
  return /from ['"]@\/components\/ContentPage['"]/.test(source) && /\bcontentMeta\(/.test(source);
}

/**
 * Best-effort static-source audit of a single page file. Everything here is
 * a WARNING, never a blocking error: this scans pre-existing hand-authored
 * pages too, and this validator's job is to surface regressions for review,
 * not to fail the build over legacy pages nobody asked it to fix.
 */
export function auditPageSource(page: Pick<DiscoveredPage, 'route' | 'source'>): PageIssue[] {
  const { route, source } = page;
  const issues: PageIssue[] = [];

  const isNoindex = /index:\s*false/.test(source);
  if (isNoindex) return issues; // deliberately non-indexable — nothing to check

  const shellManaged = usesContentPageShell(source);

  const hasStaticMetadata = /export\s+const\s+metadata\s*[:=]/.test(source);
  const hasGenerateMetadata = /export\s+(async\s+)?function\s+generateMetadata/.test(source);
  if (!hasStaticMetadata && !hasGenerateMetadata) {
    issues.push({ severity: 'warning', message: `${route}: no metadata export (\`metadata\` or \`generateMetadata\`) found` });
  }

  const hasCanonical = /canonical:\s*[`'"]/.test(source) || shellManaged;
  if (!hasCanonical) {
    issues.push({ severity: 'warning', message: `${route}: no alternates.canonical found in source` });
  }

  if (/title\s*:\s*\{[^}]*absolute\s*:/s.test(source)) {
    issues.push({ severity: 'warning', message: `${route}: title uses an \`absolute\` override, bypassing the site's " | VoyantLove" title-suffix template` });
  }

  const h1Count = (source.match(/<h1[\s>]/g) || []).length;
  if (shellManaged) {
    // The shell always renders exactly one <h1> from config.header.h1; a
    // page body adding its own would produce two.
    if (h1Count > 0) {
      issues.push({ severity: 'warning', message: `${route}: page body renders its own <h1> in addition to the ContentPage shell's config.header.h1 (would produce multiple <h1>)` });
    }
  } else if (h1Count === 0) {
    issues.push({ severity: 'warning', message: `${route}: no <h1> found in source` });
  } else if (h1Count > 1) {
    issues.push({ severity: 'warning', message: `${route}: multiple <h1> occurrences found (${h1Count})` });
  }

  const hasSchema =
    shellManaged ||
    /application\/ld\+json/.test(source) ||
    /get(Article|FAQ|Breadcrumb|WebPage|Organization)Schema/.test(source);
  if (!hasSchema) {
    issues.push({ severity: 'warning', message: `${route}: no structured data detected (no JSON-LD script / schema helper call)` });
  }

  return issues;
}

/** Every static `href="/...")` found in a page's source — used for the orphan-page check. */
export function extractInternalHrefs(source: string): string[] {
  const hrefs: string[] = [];
  const re = /href=["'](\/[^"'{}]*)["']/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(source)) !== null) {
    hrefs.push(m[1]);
  }
  return hrefs;
}

/** Normalize a route/href for comparison: ensure a single trailing slash, drop query/hash. */
export function normalizeRoute(href: string): string {
  const clean = href.split('#')[0].split('?')[0];
  if (clean === '') return '/';
  return clean.endsWith('/') ? clean : `${clean}/`;
}

/**
 * Walk one or more directories collecting every .tsx/.ts source file's text.
 * Used for internal-link (orphan) discovery, which must see links declared
 * in shared components (nav/footer/related-links widgets), not just pages.
 */
export function loadAllSources(dirs: string[], repoRoot: string): { relPath: string; source: string }[] {
  const results: { relPath: string; source: string }[] = [];
  function walk(dir: string) {
    for (const entry of readdirSync(dir)) {
      if (entry === 'node_modules' || entry === '.next') continue;
      const full = path.join(dir, entry);
      const st = statSync(full);
      if (st.isDirectory()) {
        walk(full);
      } else if (/\.tsx?$/.test(entry)) {
        results.push({
          relPath: path.relative(repoRoot, full).replace(/\\/g, '/'),
          source: readFileSync(full, 'utf-8'),
        });
      }
    }
  }
  for (const dir of dirs) walk(dir);
  return results;
}
