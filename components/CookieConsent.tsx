'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export default function CookieConsent() {
  useEffect(() => {
    let cancelled = false;

    (async () => {
      const CC = await import('vanilla-cookieconsent');
      // @ts-expect-error - CSS side-effect import has no type declarations
      await import('vanilla-cookieconsent/dist/cookieconsent.css');
      if (cancelled) return;

      CC.run({
        guiOptions: {
          consentModal: {
            // Slim bottom bar, not a big box, the 'box' layout covered the
            // quiz answers on mobile and tanked engagement.
            layout: 'bar inline',
            position: 'bottom',
            equalWeightButtons: true,
          },
          preferencesModal: {
            layout: 'box',
            position: 'right',
            equalWeightButtons: true,
          },
        },

        categories: {
          necessary: { enabled: true, readOnly: true },
          analytics: { enabled: false, readOnly: false },
          marketing: { enabled: false, readOnly: false },
        },

        language: {
          default: 'fr',
          translations: {
            fr: {
              consentModal: {
                // No title: it read "🍪 Cookies" directly above a sentence
                // that already says "cookies". On a 390px screen that line
                // plus its margin cost ~34px to repeat a word.
                title: '',
                description:
                  "Cookies pour mesurer l'audience et personnaliser les publicités.",
                acceptAllBtn: 'Tout accepter',
                acceptNecessaryBtn: 'Tout refuser',
                showPreferencesBtn: 'Personnaliser',
                footer:
                  '<a href="/confidentialite/">Politique de confidentialité</a> · <a href="/mentions-legales/">Mentions légales</a>',
              },
              preferencesModal: {
                title: 'Préférences de cookies',
                acceptAllBtn: 'Tout accepter',
                acceptNecessaryBtn: 'Tout refuser',
                savePreferencesBtn: 'Enregistrer mes choix',
                closeIconLabel: 'Fermer',
                sections: [
                  {
                    title: 'Utilisation des cookies',
                    description:
                      "Nous utilisons des cookies pour le bon fonctionnement du site, des cookies d'analyse pour mesurer l'audience et des cookies marketing pour personnaliser les publicités.",
                  },
                  {
                    title: 'Cookies strictement nécessaires',
                    description:
                      'Indispensables au bon fonctionnement du site. Ils ne peuvent pas être désactivés.',
                    linkedCategory: 'necessary',
                  },
                  {
                    title: "Cookies d'analyse",
                    description:
                      "Ces cookies nous permettent de mesurer l'audience et de comprendre comment vous utilisez le site (Google Analytics).",
                    linkedCategory: 'analytics',
                  },
                  {
                    title: 'Cookies marketing',
                    description:
                      "Ces cookies mesurent l'efficacité de nos publicités et personnalisent les annonces que vous voyez (Google Ads).",
                    linkedCategory: 'marketing',
                  },
                  {
                    title: "Plus d'informations",
                    description:
                      'Pour toute question, consultez notre <a href="/confidentialite/">politique de confidentialité</a>.',
                  },
                ],
              },
            },
          },
        },

        onFirstConsent: ({ cookie }) => applyConsent(cookie.categories || []),
        onConsent: ({ cookie }) => applyConsent(cookie.categories || []),
        onChange: ({ cookie }) => applyConsent(cookie.categories || []),
      });
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  // Compact overrides so the consent bar stays slim on mobile and never buries
  // the quiz answers. vanilla-cookieconsent v3 class names (.cm*).
  return (
    <style>{`
      /* vanilla-cookieconsent v3 ships generous padding on every internal
         block (.cm__texts 16px top, .cm__desc 11px bottom + 17.6px sides,
         .cm__btns 16px/17.6px). Stacked, that padding — not the text — was
         most of the bar's height. The bar supplies its own gutter instead. */
      #cc-main .cm--bar { padding: .55rem .8rem; }
      #cc-main .cm__title { display: none; }
      #cc-main .cm__texts { padding: 0 !important; }
      #cc-main .cm__desc { padding: 0 !important; font-size: .78rem; line-height: 1.35; }
      #cc-main .cm__footer { padding: 0 !important; margin-top: .35rem; }
      #cc-main .cm__links { padding: 0 !important; }

      /* Flatten the two button groups into one flex row: accept + refuse sit
         side-by-side; "Personnaliser" drops to its own line as a small link.
         !important because the library's CSS loads after this style at equal
         specificity and otherwise forces flex-direction: column. */
      #cc-main .cm__btns {
        display: flex !important; flex-flow: row wrap !important; align-items: center;
        gap: .4rem; padding: 0 !important; margin: .5rem 0 0 !important; border: 0 !important;
      }
      #cc-main .cm__btn-group { display: contents !important; }
      #cc-main .cm__btn {
        flex: 1 1 8rem !important; width: auto !important; min-height: 40px;
        padding: .5rem .7rem; font-size: .8rem; margin: 0;
      }
      #cc-main .cm__btn--secondary {
        flex: 0 0 100% !important; min-height: 0; background: transparent !important;
        border: 0 !important; text-decoration: underline; padding: .15rem;
        font-size: .72rem; opacity: .8;
      }

      /* Mobile: the bar was ~231px, about 27% of a 390x844 screen, across four
         stacked blocks each carrying its own padding. Hard-cap the scrollable
         body so no translation or future copy change can push it past a
         quarter of the viewport. */
      @media (max-width: 640px) {
        #cc-main .cm--bar { padding: .5rem .7rem; }
        #cc-main .cm__desc { font-size: .74rem; }
        #cc-main .cm__btn { padding: .45rem .4rem; font-size: .77rem; }
        #cc-main .cm__btn--secondary { font-size: .68rem; }
        #cc-main .cm__footer { font-size: .65rem; line-height: 1.2; opacity: .75; }
        #cc-main .cm__body { max-height: 22vh; overflow-y: auto; }
      }
    `}</style>
  );
}

function applyConsent(categories: string[]) {
  const analyticsGranted = categories.includes('analytics');
  const analytics = analyticsGranted ? 'granted' : 'denied';
  const marketing = categories.includes('marketing') ? 'granted' : 'denied';

  window.gtag?.('consent', 'update', {
    ad_storage: marketing,
    ad_user_data: marketing,
    ad_personalization: marketing,
    analytics_storage: analytics,
  });

  if (analyticsGranted) loadClarity();
  if (marketing === 'granted') loadMgidSensor();
}

/**
 * MGID Sensor (base conversion pixel, cid 982296).
 *
 * Gated on MARKETING consent, not loaded eagerly: it is an advertising
 * tracker on a French site, and CNIL does not exempt ad trackers from prior
 * consent. Same treatment as the Google ad_storage signals above.
 *
 * TRADE-OFF, worth knowing before reading the numbers: visitors who ignore
 * or refuse the banner never fire this pixel, so MGID's reported conversion
 * count will be LOWER than the true tap count in /api/admin/lp-funnel. Those
 * two numbers are supposed to disagree, lp-funnel counts every tap
 * server-side, MGID only counts consented ones. Do not treat the gap as a
 * tracking bug.
 */
function loadMgidSensor() {
  if (typeof window === 'undefined') return;
  const w = window as Window & { MgSensorData?: unknown[]; __mgidSensorLoaded?: boolean };
  if (w.__mgidSensorLoaded) return; // onConsent + onChange can both fire
  w.__mgidSensorLoaded = true;

  w.MgSensorData = w.MgSensorData || [];
  w.MgSensorData.push({ cid: 982296, project: 'a.mgid.com' });

  const d = document;
  const n = d.getElementsByTagName('script')[0];
  const s = d.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = 'https://a.mgid.com/mgsensor.js?d=' + Date.now();
  n.parentNode?.insertBefore(s, n);
}

function loadClarity() {
  const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
  if (!projectId) return;
  if (typeof window === 'undefined') return;
  if (window.clarity) return;

  (function (c: Window, l: Document, a: string, r: string, i: string) {
    // @ts-expect-error - Clarity bootstrap shim writes to window.clarity
    c[a] = c[a] || function (...args: unknown[]) { (c[a].q = c[a].q || []).push(args); };
    const t = l.createElement(r) as HTMLScriptElement;
    t.async = true;
    t.src = 'https://www.clarity.ms/tag/' + i;
    const y = l.getElementsByTagName(r)[0];
    y.parentNode?.insertBefore(t, y);
  })(window, document, 'clarity', 'script', projectId);
}
