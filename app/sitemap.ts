import type { MetadataRoute } from 'next'
import { COMPATIBILITY_PAIRS, validatePairRecord } from '@/lib/compatibilitePairs'
import { TAROT_LOVE_CARDS, validateCardRecord } from '@/lib/tarotLoveCards'
import { REVES_AMOUR, validateDreamRecord } from '@/lib/revesAmour'
import { SIGNES_AMOUR, validateSignRecord } from '@/lib/signesAmour'
import { GLOSSARY_TERMS, validateTermRecord } from '@/lib/glossaire'
import { HEURES_MIROIRS_FLAMME_JUMELLE, validateHeureMiroirRecord } from '@/lib/heuresMiroirsFlammeJumelle'
import { CHEMIN_DE_VIE_ENTRIES, validateCheminDeVieRecord } from '@/lib/cheminDeVie'

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
    { slug: '/chemin-de-vie', priority: 0.9 },
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
    '/reconquete/veut-se-remettre-ensemble-mais-ne-fait-rien',
    '/reconquete/ex-chaud-et-froid-apres-separation',
    '/reconquete/quitte-pour-quelquun-dautre-va-t-il-revenir',
    '/reconquete/repondre-a-son-ex',
    '/reconquete/revoir-son-ex',
    '/reconquete/separation-temporaire-ou-definitive',
    '/reconquete/sentiments-peuvent-ils-revenir-couple',
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
    '/rupture/confiance-en-soi-apres-divorce',
    '/rupture/signes-reseaux-sociaux-apres-rupture',
    '/rupture/rever-de-son-ex',
    '/rupture/ex-refait-sa-vie',
    '/rupture/rupture-soudaine-sans-explication',
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
    '/crise-couple/vivre-meme-toit-apres-separation',
    '/crise-couple/signes-il-ne-sengagera-pas',
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
    '/methodes-voyance/cartomancie-amour',
    '/methodes-voyance/lignes-de-la-main-amour',
    '/methodes-voyance/boule-de-cristal-amour',
    '/methodes-voyance/medium-amour',
    '/methodes-voyance/marc-de-cafe-amour',
    '/methodes-voyance/suis-je-medium-comment-savoir',

    '/methodes-voyance/ascendant-amour',
    // Voyance gratuite amour
    '/voyance-gratuite-amour/tarot-amour-gratuit',
    '/voyance-gratuite-amour/tarot-oui-non-amour',
    '/voyance-gratuite-amour/oracle-gratuit-amour',
    '/voyance-gratuite-amour/horoscope-amour-2026',
    '/voyance-gratuite-amour/voyance-tchat-gratuit-amour',
    '/voyance-gratuite-amour/tirage-gratuit-celibataire',
    '/voyance-gratuite-amour/voyance-amour-immediate',
    '/voyance-gratuite-amour/tarot-du-jour-amour',
    '/voyance-gratuite-amour/tarot-futur-proche-amour',
    // Voyance amour
    '/voyance-amour/retour-affectif',
  ]

  // Legal pages (low priority)
  const legalPages = [
    '/a-propos',
    '/mentions-legales',
    '/confidentialite',
    '/contact',
  ]

  const entries: MetadataRoute.Sitemap = [
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
    // Programmatic pages, generated from the data layer, gated on validation,
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
    {
      url: `${baseUrl}/tarot-amour`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...TAROT_LOVE_CARDS.filter((c) => validateCardRecord(c).length === 0).map((c) => ({
      url: `${baseUrl}/tarot-amour/${c.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    {
      url: `${baseUrl}/reves-amour`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...REVES_AMOUR.filter((d) => validateDreamRecord(d).length === 0).map((d) => ({
      url: `${baseUrl}/reves-amour/${d.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    {
      url: `${baseUrl}/astrologie-amour`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...SIGNES_AMOUR.filter((s) => validateSignRecord(s).length === 0).map((s) => ({
      url: `${baseUrl}/astrologie-amour/${s.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/glossaire`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...GLOSSARY_TERMS.filter((t) => validateTermRecord(t).length === 0).map((t) => ({
      url: `${baseUrl}/glossaire/${t.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
    // Mirror-hour cluster nested under the flamme-jumelle hub (that hub's own
    // URL is already listed in contentPages above).
    ...HEURES_MIROIRS_FLAMME_JUMELLE.filter((h) => validateHeureMiroirRecord(h).length === 0).map((h) => ({
      url: `${baseUrl}/nouvelle-rencontre/flamme-jumelle/${h.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...CHEMIN_DE_VIE_ENTRIES.filter((e) => validateCheminDeVieRecord(e).length === 0).map((e) => ({
      url: `${baseUrl}/chemin-de-vie/${e.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]

  // trailingSlash: true → the canonical form of every URL has a trailing slash,
  // and middleware 308-redirects the non-slash form. Emit the final
  // (non-redirecting) URLs so Google indexes the canonical directly.
  return entries.map((entry) => ({
    ...entry,
    url: entry.url.endsWith('/') ? entry.url : `${entry.url}/`,
  }))
}
