import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://voyantlove.fr'),
  title: {
    default: 'VoyantLove - Voyance Amoureuse Spécialisée | Tarot de l\'Amour',
    template: '%s | VoyantLove'
  },
  description: 'Voyance amoureuse spécialisée : reconquérir son ex, rencontrer l\'amour, compatibilité de couple. Consultations tarot et guidance pour toutes vos questions sentimentales.',
  keywords: ['voyance amoureuse', 'tarot amour', 'reconquérir son ex', 'retour de l\'ex', 'rencontre amoureuse', 'compatibilité couple', 'voyant spécialisé amour'],
  authors: [{ name: 'VoyantLove' }],
  creator: 'VoyantLove',
  publisher: 'VoyantLove',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://voyantlove.fr',
    siteName: 'VoyantLove',
    title: 'VoyantLove - Voyance Amoureuse Spécialisée',
    description: 'Voyance amoureuse : reconquérir son ex, rencontrer l\'amour, compatibilité. Tarot et guidance sentimentale.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VoyantLove - Voyance Amoureuse',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VoyantLove - Voyance Amoureuse Spécialisée',
    description: 'Voyance amoureuse : reconquérir son ex, rencontrer l\'amour, compatibilité. Tarot et guidance sentimentale.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://voyantlove.fr',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <script
          defer
          data-site-id="b2906866-3097-4875-b470-7b8e7c49b01f"
          src="https://glyphex.io/tracker.js"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
