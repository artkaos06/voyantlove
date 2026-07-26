import type { Metadata } from "next";
import Script from "next/script";
import CookieConsent from "@/components/CookieConsent";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
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
        {/* Warm up the TCP+TLS handshake for third-party origins so it happens
            in parallel with HTML parsing instead of after it. monsitevoyance
            serves the voyant portraits on the MGID angle landers — those are
            the trust signal next to the phone CTA, so they matter most on the
            slow mobile connections that traffic arrives on. */}
        <link rel="preconnect" href="https://www.monsitevoyance.com" />
        <link rel="dns-prefetch" href="https://www.monsitevoyance.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://glyphex.io" />
        <link rel="dns-prefetch" href="https://glyphex.io" />
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
        {/* NOTE: Microsoft Clarity is NOT loaded here. components/CookieConsent
            .tsx already has loadClarity(), gated on ANALYTICS consent and
            keyed on NEXT_PUBLIC_CLARITY_PROJECT_ID. A second copy here would
            double-load it and bypass the consent gate. Set that env var to
            switch Clarity on — see loadClarity() for the canonical path. */}
        {/* Client-error beacon. The 91.6% Q1->Q2 collapse was invisible for
            weeks because nothing reported it. Errors now reach Discord via
            /api/track/error. sendBeacon so a crash during unload still
            reports; wrapped so the reporter can never itself throw. */}
        <Script id="client-error-beacon" strategy="afterInteractive">{`
          (function () {
            var sent = 0;
            function report(payload) {
              if (sent >= 5) return; // cap per pageview
              sent++;
              try {
                var body = JSON.stringify(payload);
                if (navigator.sendBeacon) {
                  navigator.sendBeacon('/api/track/error',
                    new Blob([body], { type: 'application/json' }));
                } else {
                  fetch('/api/track/error', {
                    method: 'POST', body: body, keepalive: true
                  }).catch(function () {});
                }
              } catch (_) {}
            }
            window.addEventListener('error', function (e) {
              report({
                message: (e && e.message) || 'unknown error',
                source: e && e.filename, line: e && e.lineno, col: e && e.colno,
                stack: e && e.error && e.error.stack,
                page: window.location.pathname,
                ua: navigator.userAgent || ''
              });
            });
            window.addEventListener('unhandledrejection', function (e) {
              var r = e && e.reason;
              report({
                message: 'Unhandled promise: ' + (r && r.message ? r.message : String(r)),
                stack: r && r.stack,
                page: window.location.pathname,
                ua: navigator.userAgent || ''
              });
            });
          })();
        `}</Script>
        {/* MGID conversion goal "email_lead".
            This is a URL-based (page load) conversion, not a click one: the
            lander email form is a native POST that 303-redirects back to
            /lp/<lander>?merci=1, so by the time the visitor sees the
            confirmation the submit event is long gone. The redirect target IS
            the conversion signal — which is exactly MGID's "page load snippet
            captures URL-based conversions" case.
            Deduped in sessionStorage because ?merci=1 is a plain GET: a
            refresh or a back/forward would otherwise re-fire the goal and
            inflate the count. */}
        <Script id="mgid-email-lead" strategy="afterInteractive">{`
          (function () {
            try {
              var page = window.location.pathname;
              if (!/^\\/lp\\/(voyant-direct|il-elle-vous-aime|histoire-sophie)\\/?$/.test(page)) return;
              var p = new URLSearchParams(window.location.search);
              if (p.get('merci') !== '1') return;
              var k = 'mg_email_lead:' + page;
              try { if (sessionStorage.getItem(k)) return; sessionStorage.setItem(k, '1'); } catch (_) {}
              window._mgq = window._mgq || [];
              window._mgq.push(['MgSensorInvoke', 'email_lead']);
            } catch (_) {}
          })();
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

            // 1b) MGID conversion goal "cta_call".
            //
            // Fired from this delegated listener rather than the inline
            // onclick MGID suggests: the landers are server components, and
            // an onclick attribute would force them client-side and bring
            // back the hydration that broke Xiaomi/Huawei in-app browsers.
            // Delegation catches the same clicks with no page-level JS.
            //
            // Restricted to the three paid landers so MGID's conversion
            // definition matches lp-funnel's tap definition. Firing on
            // organic pages would let an old MGID cookie attribute an
            // unrelated organic call to a paid campaign, inflating MGID's
            // numbers and skewing its bidding toward itself.
            //
            // _mgq is a queue, so pushing before mgsensor.js loads is safe:
            // it drains on load, which only happens after marketing consent.
            // If consent is refused the event simply never sends — the gate
            // stays intact without extra logic here.
            try {
              if (/^\\/lp\\/(voyant-direct|il-elle-vous-aime|histoire-sophie)\\/?$/.test(page)) {
                window._mgq = window._mgq || [];
                window._mgq.push(['MgSensorInvoke', 'cta_call']);
              }
            } catch (_) {}

            // 2) Beacon to our /api/track/tel-click endpoint so we get
            //    real-time Discord visibility on call-intent (tel: clicks
            //    otherwise bypass our server completely).
            try {
              var attribution = { gclid: null, gbraid: null, wbraid: null };
              // MGID attribution for the angle landers — without these the
              // tap is recorded but we can't tell which source/creative
              // produced it, which is the whole point of the angle test.
              var mgid = { source: '', sid: '', click_id: '', creative_id: '' };
              try {
                var params = new URLSearchParams(window.location.search);
                ['gclid', 'gbraid', 'wbraid'].forEach(function (k) {
                  var v = params.get(k) ||
                          (window.sessionStorage && sessionStorage.getItem(k));
                  if (v) attribution[k] = v;
                });
                ['source', 'sid', 'click_id', 'creative_id'].forEach(function (k) {
                  var v = params.get(k);
                  if (v) mgid[k] = v;
                });
                // MGID's link builder emits adclid={click_id}: the param on
                // the wire is 'adclid' even though the macro is {click_id}.
                if (!mgid.click_id) {
                  mgid.click_id = params.get('adclid') || '';
                }
              } catch (_) {}

              var payload = JSON.stringify({
                phone: phone,
                page: page,
                ua: navigator.userAgent || '',
                referrer: document.referrer || '',
                gclid: attribution.gclid,
                gbraid: attribution.gbraid,
                wbraid: attribution.wbraid,
                source: mgid.source,
                sid: mgid.sid,
                click_id: mgid.click_id,
                creative_id: mgid.creative_id
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
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
