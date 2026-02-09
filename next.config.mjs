/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for better SEO
  images: {
    unoptimized: true // For static export
  },
  trailingSlash: true, // Better for SEO
  
  // Metadata for the site
  env: {
    SITE_NAME: 'VoyantLove',
    SITE_URL: 'https://voyantlove.fr',
    SITE_DESCRIPTION: 'Voyance amoureuse spécialisée : reconquérir son ex, rencontrer l\'amour, compatibilité de couple. Tarot et guidance pour vos questions sentimentales.',
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
