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
            // Slim bottom bar, not a big box — the 'box' layout covered the
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
                title: '🍪 Cookies',
                description:
                  "Nous utilisons des cookies pour mesurer l'audience et personnaliser les publicités.",
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
      #cc-main .cm--bar { padding: .55rem .8rem; }
      #cc-main .cm__title { font-size: .85rem; margin-bottom: .1rem; }
      #cc-main .cm__desc { font-size: .74rem; line-height: 1.3; }
      /* Flatten the two button groups into one flex row: accept + refuse sit
         side-by-side; "Personnaliser" drops to its own line as a small link.
         !important because the library's CSS loads after this style at equal
         specificity and otherwise forces flex-direction: column. */
      #cc-main .cm__btns { display: flex !important; flex-flow: row wrap !important; align-items: center; gap: .4rem; margin-top: .5rem; }
      #cc-main .cm__btn-group { display: contents !important; }
      #cc-main .cm__btn { flex: 1 1 auto !important; width: auto !important; padding: .5rem .7rem; font-size: .8rem; margin: 0; }
      #cc-main .cm__btn--secondary {
        flex: 0 0 100% !important; background: transparent !important; border: 0 !important;
        text-decoration: underline; padding: .2rem; font-size: .72rem; opacity: .8;
      }
      @media (max-width: 640px) {
        #cc-main .cm--bar { padding: .5rem .7rem; }
        #cc-main .cm__desc { font-size: .7rem; }
        #cc-main .cm__btn { padding: .45rem .5rem; font-size: .77rem; }
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
