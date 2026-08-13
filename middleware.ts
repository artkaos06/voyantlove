// Multi-domain routing for the voyantlove project.
//
// We host two distinct sites from a single Next.js codebase / Vercel project:
//
//   voyantlove.fr        → French pSEO content (root + /reconquete/*, /sentiments/*, etc.)
//   lovepsychicguide.com → English love-psychic affiliate review site (lives under app/en/*)
//
// Why this exists: avoid a separate Vercel project / repo for the EN site,
// which would require duplicating the OCI bridge, env vars, and BargesTech
// postback URL. Instead, both domains share /api/postback, /api/go/[offer],
// and lib/googleAds.ts — the tech layer is domain-agnostic.
//
// URL behavior:
//
//   lovepsychicguide.com/love-psychic-services/keen-review
//     → internally rewrites to /en/love-psychic-services/keen-review
//     → user-visible URL stays clean (no /en/ prefix)
//
//   voyantlove.fr/en/anything
//     → 404 (prevents EN content from being indexed under the .fr TLD,
//       which would dilute SEO and confuse Google's geo-targeting)
//
//   /api/*, /_next/*, /_vercel/* → pass through unchanged on both domains
//     (postback receiver, click-out, Next.js internals must work everywhere)

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const EN_HOSTS = new Set([
  'lovepsychicguide.com',
  'www.lovepsychicguide.com',
]);

// lovepsychicguide.com is served from app/en/* on its own domain, so it needs
// its own robots + sitemap. public/robots.txt and app/sitemap.ts are
// host-agnostic (they'd advertise the FR site on the EN domain), so the EN
// versions are synthesized here and served host-aware from middleware().
const EN_SITE_URL = 'https://www.lovepsychicguide.com';

const EN_ROBOTS_TXT = `# Robots.txt for LovePsychicGuide.com
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: ${EN_SITE_URL}/sitemap.xml
Host: ${EN_SITE_URL}
`;

// Hand-authored EN routes (app/en/*). Keep in sync when EN pages are added.
const EN_SITEMAP_PATHS = [
  '/',
  '/will-he-come-back/',
  '/twin-flame-signs/',
  '/is-my-ex-thinking-of-me/',
  '/dream-about-ex-meaning/',
  '/online-psychic-reading/',
  '/love-psychic-services/',
  '/love-psychic-services/keen-review/',
];

function enSitemapXml(): string {
  const urls = EN_SITEMAP_PATHS.map(
    (p) => `  <url><loc>${EN_SITE_URL}${p}</loc></url>`,
  ).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

// Paths that must NEVER be rewritten regardless of domain: server
// infrastructure (API, Next internals) and the favicon. robots.txt and
// sitemap.xml are handled separately (host-aware) at the top of middleware().
function isPassThroughPath(pathname: string): boolean {
  return (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/_vercel/') ||
    pathname === '/favicon.ico'
  );
}

export function middleware(request: NextRequest) {
  const hostname = (request.headers.get('host') || '').toLowerCase();
  const url = request.nextUrl.clone();
  const { pathname } = url;

  // Host-aware metadata files. These have a file extension, so they're added
  // explicitly to the matcher below. Handle them before the trailing-slash
  // redirect, which would otherwise 308 `/robots.txt` → `/robots.txt/`.
  if (pathname === '/robots.txt') {
    if (EN_HOSTS.has(hostname)) {
      return new NextResponse(EN_ROBOTS_TXT, {
        headers: { 'content-type': 'text/plain; charset=utf-8' },
      });
    }
    return NextResponse.next(); // FR → static public/robots.txt
  }
  if (pathname === '/sitemap.xml') {
    if (EN_HOSTS.has(hostname)) {
      return new NextResponse(enSitemapXml(), {
        headers: { 'content-type': 'application/xml; charset=utf-8' },
      });
    }
    return NextResponse.next(); // FR → app/sitemap.ts
  }

  if (isPassThroughPath(pathname)) {
    return NextResponse.next();
  }

  // Trailing-slash canonicalization — PAGE paths only.
  // next.config sets skipTrailingSlashRedirect: true because Next's blanket
  // 308 also hit /api/* route handlers (extra hop on every click-out and
  // beacon in prod; total 404 in dev). Pages still need the canonical
  // slashed form for SEO, so the redirect lives here, after the /api/
  // pass-through above. The matcher already excludes file-extension paths.
  if (!pathname.endsWith('/')) {
    // Plain URL, not request.nextUrl.clone(): NextURL re-normalizes the
    // pathname on serialization and strips the trailing slash we just
    // added, turning this redirect into an infinite loop.
    const canonical = new URL(request.url);
    canonical.pathname = `${pathname}/`;
    return NextResponse.redirect(canonical, 308);
  }

  const isEnDomain = EN_HOSTS.has(hostname);

  if (isEnDomain) {
    // Already-prefixed paths (hand-typed /en/...) pass through unchanged.
    // Defensive — most users will hit clean URLs without /en/.
    if (pathname === '/en' || pathname.startsWith('/en/')) {
      return NextResponse.next();
    }
    // Rewrite cleanly: '/' → '/en', '/foo' → '/en/foo'
    url.pathname = pathname === '/' ? '/en' : `/en${pathname}`;
    return NextResponse.rewrite(url);
  }

  // Non-EN domain (voyantlove.fr, vercel preview URLs, localhost, etc.):
  // block external access to /en/* so EN content isn't indexed under .fr.
  // This is a hard 404 — don't redirect, since redirects from /en under .fr
  // would canonicalize the wrong way for Google.
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.next();
}

// Skip middleware for static asset requests entirely. Next.js handles those
// before middleware anyway, but explicit matcher saves edge-runtime cycles.
export const config = {
  matcher: [
    // Match all paths EXCEPT:
    //   _next/static (build artifacts)
    //   _next/image (image optimization endpoint)
    //   any path with a file extension (.png, .css, .js, .ico, .txt, etc.)
    '/((?!_next/static|_next/image|.*\\..*).*)',
    // Explicitly include the metadata files (excluded above by the dot rule)
    // so middleware can serve host-specific robots.txt / sitemap.xml.
    '/robots.txt',
    '/sitemap.xml',
  ],
};
