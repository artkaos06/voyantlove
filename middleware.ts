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

// Paths that must NEVER be rewritten regardless of domain. These are either
// server infrastructure (API, Next internals) or top-level metadata files
// that need to be served as-is from the root.
function isPassThroughPath(pathname: string): boolean {
  return (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/_vercel/') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml'
  );
}

export function middleware(request: NextRequest) {
  const hostname = (request.headers.get('host') || '').toLowerCase();
  const url = request.nextUrl.clone();
  const { pathname } = url;

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
  ],
};
