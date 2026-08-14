/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Narrow allowlist: only the voyant-portrait JPGs used by
    // VoyantTrustGrid/ConsulterVoyantGrid/VoyantCard (components/*.tsx) go
    // through next/image and Next's Image Optimization API. Everything
    // else on the site is either a local /public asset (no remotePatterns
    // needed) or the deliberately-raw <img> in VoyantStrip.tsx (zero-JS
    // landers — see that file's own comment for why it stays unoptimized).
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.monsitevoyance.com',
        pathname: '/vignaff/*.jpg',
      },
    ],
  },
  trailingSlash: true, // Better for SEO
  // Disable Next's automatic 308 slash-redirect: it also fired on /api/*
  // route handlers, adding a pointless hop on the click-out money path in
  // prod and 404-ing API routes entirely in dev (dev/prod mismatch). The
  // page-only canonicalization redirect now lives in middleware.ts, where
  // /api/* is explicitly excluded.
  skipTrailingSlashRedirect: true,

  // Metadata for the site
  env: {
    SITE_NAME: 'VoyantLove',
    SITE_URL: 'https://www.voyantlove.fr',
    SITE_DESCRIPTION: 'Voyance amoureuse spécialisée : reconquérir son ex, rencontrer l\'amour, compatibilité de couple. Tarot et guidance pour vos questions sentimentales.',
  },

  // Proxy voyant API to avoid CORS
  async rewrites() {
    return [
      {
        source: '/api/voyants',
        destination: 'https://www.webangelis.fr/api_msvaff.php?key=NTc1V3V6OWJhNE5ySFJKektjTTNHNVhDbmlpdlVWZUd3Y2tIeXA3WHhXY3RXQk9JekxleEJMVlcwQVBhd01NOQ==&tpe=1&nbr=8',
      },
      {
        source: '/api/voyants-gratuit',
        destination: 'https://www.webangelis.fr/api_msvaff.php?key=NTc1V3V6OWJhNE5ySFJKektjTTNHNVhDbmlpdlVWZUd3Y2tIeXA3WHhXY3RXQk9JekxleEJMVlcwQVBhd01NOQ==&tpe=2&nbr=8',
      },
    ]
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      {
        source: '/methodes-voyance/tarot-oui-non-amour/',
        destination: '/voyance-gratuite-amour/tarot-oui-non-amour/',
        permanent: true,
      },
      {
        source: '/methodes-voyance/tarot-oui-non-amour',
        destination: '/voyance-gratuite-amour/tarot-oui-non-amour/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
