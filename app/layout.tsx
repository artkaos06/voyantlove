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
        <Script id="phone-click-tracker" strategy="afterInteractive">{`
          document.addEventListener('click', function(e) {
            var link = e.target && e.target.closest && e.target.closest('a[href^="tel:"]');
            if (!link) return;

            var phone = (link.getAttribute('href') || '').replace('tel:', '');
            var page = window.location.pathname;

            // 1) Existing GTM dataLayer push (kept as-is for analytics)
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: 'phone_click',
              phone_number: phone,
              page_path: page
            });

            // 2) Beacon to our /api/track/tel-click endpoint so we get
            //    real-time Discord visibility on call-intent (tel: clicks
            //    otherwise bypass our server completely).
            try {
              var attribution = { gclid: null, gbraid: null, wbraid: null };
              try {
                var params = new URLSearchParams(window.location.search);
                ['gclid', 'gbraid', 'wbraid'].forEach(function (k) {
                  var v = params.get(k) ||
                          (window.sessionStorage && sessionStorage.getItem(k));
                  if (v) attribution[k] = v;
                });
              } catch (_) {}

              var payload = JSON.stringify({
                phone: phone,
                page: page,
                ua: navigator.userAgent || '',
                referrer: document.referrer || '',
                gclid: attribution.gclid,
                gbraid: attribution.gbraid,
                wbraid: attribution.wbraid
              });

              // sendBeacon survives the navigation to the dialer.
              // Regular fetch() would be killed mid-flight by the iOS
              // dialer hand-off; sendBeacon is queued by the browser to
              // be delivered in the background.
              if (navigator.sendBeacon) {
                var blob = new Blob([payload], { type: 'application/json' });
                navigator.sendBeacon('/api/track/tel-click', blob);
              } else {
                // Fallback for very old browsers (negligible % of FR/EN traffic).
                fetch('/api/track/tel-click', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: payload,
                  keepalive: true
                }).catch(function () {});
              }
            } catch (_) {
              // Tracking is best-effort; never break the actual phone tap.
            }
          }, true);
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
