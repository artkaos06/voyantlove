/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  trailingSlash: true, // Better for SEO

  // Metadata for the site
  env: {
    SITE_NAME: 'VoyantLove',
    SITE_URL: 'https://voyantlove.fr',
    SITE_DESCRIPTION: 'Voyance amoureuse spécialisée : reconquérir son ex, rencontrer l\'amour, compatibilité de couple. Tarot et guidance pour vos questions sentimentales.',
  },

  // Proxy voyant API to avoid CORS
  async rewrites() {
    return [
      {
        source: '/api/voyants',
        destination: 'https://www.webangelis.fr/api_msvaff.php?key=NTc1V3V6OWJhNE5ySFJKektjTTNHNVhDbmlpdlVWZUd3Y2tIeXA3WHhXY3RXQk9JekxleEJMVlcwQVBhd01NOQ==&tpe=1&nbr=8',
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
    ]
  },
}

export default nextConfig
