import type { MetadataRoute } from 'next'
import { COMPATIBILITY_PAIRS, validatePairRecord } from '@/lib/compatibilitePairs'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.voyantlove.fr'
  const now = new Date().toISOString()

  // Hub pages (high priority)
  const hubs = [
    { slug: '', priority: 1.0 },
    { slug: '/voyance-amour', priority: 0.95 },
    { slug: '/reconquete', priority: 0.9 },
    { slug: '/rupture', priority: 0.9 },
    { slug: '/nouvelle-rencontre', priority: 0.9 },
    { slug: '/sentiments', priority: 0.9 },
    { slug: '/crise-couple', priority: 0.9 },
    { slug: '/methodes-voyance', priority: 0.9 },
    { slug: '/voyance-gratuite-amour', priority: 0.9 },
  ]

  // Content pages grouped by cluster
  const contentPages = [
    // Reconquête
    '/reconquete/reconquerir-son-ex',
    '/reconquete/va-t-il-elle-revenir',
    '/reconquete/ex-qui-revient',
    '/reconquete/retour-de-lex',
    '/reconquete/seconde-chance-amour',
    '/reconquete/se-remettre-ensemble',
    '/reconquete/ex-revient-silence-radio',
    '/reconquete/lettre-a-son-ex',
    '/reconquete/silence-radio-reconquete',
    '/reconquete/pendule-retour-amour',
    '/reconquete/dois-je-attendre-son-retour',
    // Rupture
    '/rupture/oublier-son-ex',
    '/rupture/chagrin-damour',
    '/rupture/rupture-amoureuse',
    '/rupture/guerir-rupture',
    '/rupture/amour-non-partage',
    '/rupture/deuil-amoureux',
    '/rupture/comment-tourner-la-page',
    '/rupture/surmonter-trahison',
    '/rupture/voyance-divorce-separation',
    // Nouvelle rencontre
    '/nouvelle-rencontre/quand-rencontre-amour',
    '/nouvelle-rencontre/trouver-ame-soeur',
    '/nouvelle-rencontre/signes-ame-soeur',
    '/nouvelle-rencontre/nouvelle-relation-amoureuse',
    '/nouvelle-rencontre/flamme-jumelle',
    '/nouvelle-rencontre/amour-apres-40-ans',
    '/nouvelle-rencontre/rencontre-amoureuse-en-ligne',
    '/nouvelle-rencontre/peur-de-aimer-a-nouveau',
    '/nouvelle-rencontre/voyance-celibat-trouver-lamour',
    // Sentiments
    '/sentiments/maime-t-il-elle',
    '/sentiments/avenir-amoureux',
    '/sentiments/signes-il-elle-maime',
    '/sentiments/compatibilite-amoureuse',
    '/sentiments/pense-t-il-elle-a-moi',
    '/sentiments/relation-toxique',
    '/sentiments/savoir-si-cest-lamour',
    '/sentiments/sentiments-non-partages',
    '/sentiments/voyance-grossesse-bebe',
    '/sentiments/voyance-mariage',
    '/sentiments/que-ressent-il-elle-pour-moi',
    // Crise de couple
    '/crise-couple/infidelite-couple',
    '/crise-couple/jalousie-excessive',
    '/crise-couple/problemes-communication-couple',
    '/crise-couple/sauver-son-couple',
    '/crise-couple/dependance-affective',
    '/crise-couple/reconnecter-son-couple',
    '/crise-couple/pardonner-en-amour',
    '/crise-couple/emprise-amoureuse-voyance',
    '/crise-couple/couple-a-distance-voyance',
    '/crise-couple/opposition-familiale-couple',
    '/crise-couple/difference-age-couple',
    // Méthodes voyance
    '/methodes-voyance/tirage-tarot-amour',
    '/methodes-voyance/oracle-amour',
    '/methodes-voyance/astrologie-amoureuse',
    '/methodes-voyance/voyance-telephone-amour',
    '/methodes-voyance/pendule-amour',
    '/methodes-voyance/voyance-sentimentale',
    '/methodes-voyance/tarologie-amoureuse',
    '/methodes-voyance/voyance-par-chat-amour',
    '/methodes-voyance/numerologie-amoureuse',
    '/methodes-voyance/synastrie-amoureuse',
    '/methodes-voyance/voyance-par-mail-amour',
    '/methodes-voyance/runes-amour',
    // Voyance gratuite amour
    '/voyance-gratuite-amour/tarot-amour-gratuit',
    '/voyance-gratuite-amour/tarot-oui-non-amour',
    '/voyance-gratuite-amour/oracle-gratuit-amour',
    '/voyance-gratuite-amour/horoscope-amour-2026',
    '/voyance-gratuite-amour/voyance-tchat-gratuit-amour',
    '/voyance-gratuite-amour/tirage-gratuit-celibataire',
    '/voyance-gratuite-amour/voyance-amour-immediate',
  ]

  // Legal pages (low priority)
  const legalPages = [
    '/a-propos',
    '/mentions-legales',
    '/confidentialite',
    '/contact',
  ]

  return [
    ...hubs.map(({ slug, priority }) => ({
      url: `${baseUrl}${slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority,
    })),
    ...contentPages.map((slug) => ({
      url: `${baseUrl}${slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...legalPages.map((slug) => ({
      url: `${baseUrl}${slug}`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
    // Programmatic pages — generated from the data layer, gated on validation,
    // so the sitemap can never drift from what actually builds.
    {
      url: `${baseUrl}/compatibilite-amoureuse`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...COMPATIBILITY_PAIRS.filter((p) => validatePairRecord(p).length === 0).map((p) => ({
      url: `${baseUrl}/compatibilite-amoureuse/${p.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]
}
