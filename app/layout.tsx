import type { Metadata } from "next";
import Script from "next/script";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.voyantlove.fr'),
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
    url: 'https://www.voyantlove.fr',
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
    canonical: 'https://www.voyantlove.fr',
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
        <Script id="consent-default" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
          window.gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            wait_for_update: 500
          });
        `}</Script>
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MTSWKGGQ');
        `}</Script>
        <script
          defer
          data-site-id="b2906866-3097-4875-b470-7b8e7c49b01f"
          src="https://glyphex.io/tracker.js"
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MTSWKGGQ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <CookieConsent />
        {children}
      </body>
    </html>
  );
}
