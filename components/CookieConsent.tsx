'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
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
            layout: 'box inline',
            position: 'bottom left',
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
                title: 'Nous utilisons des cookies',
                description:
                  "Nous utilisons des cookies pour améliorer votre expérience, mesurer l'audience et personnaliser les publicités.",
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

  return null;
}

function applyConsent(categories: string[]) {
  const analytics = categories.includes('analytics') ? 'granted' : 'denied';
  const marketing = categories.includes('marketing') ? 'granted' : 'denied';

  window.gtag?.('consent', 'update', {
    ad_storage: marketing,
    ad_user_data: marketing,
    ad_personalization: marketing,
    analytics_storage: analytics,
  });
}
