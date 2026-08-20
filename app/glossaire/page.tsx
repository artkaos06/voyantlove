import type { Metadata } from 'next';
import Link from 'next/link';
import { getWebPageSchema, getBreadcrumbSchema, getOrganizationSchema, getFAQSchema, getAuthorSchema } from '@/lib/schema';
import { CATEGORY_LABELS, type GlossaryCategory, getGlossaryHubCards } from '@/lib/glossaire';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';

const HUB_CARDS = getGlossaryHubCards();

const CATEGORY_ORDER: GlossaryCategory[] = [
  'spiritualite',
  'astrologie',
  'numerologie',
  'pratiques-divinatoires',
  'psychologie-amoureuse',
];

export const metadata: Metadata = {
  title: 'Glossaire de la voyance amoureuse : tous les termes expliqués',
  description: `Plus de ${HUB_CARDS.length} termes de voyance et d'amour définis simplement : spiritualité, astrologie, numérologie, pratiques divinatoires et psychologie amoureuse. Le dictionnaire complet de VoyantLove.`,
  alternates: { canonical: 'https://www.voyantlove.fr/glossaire/' },
};

export default function GlossaireHubPage() {
  const webPageSchema = getWebPageSchema({
    title: 'Glossaire de la voyance amoureuse : tous les termes expliqués',
    description: `Le dictionnaire de la voyance amoureuse : ${HUB_CARDS.length} définitions claires sur la spiritualité, l'astrologie, la numérologie, les pratiques divinatoires et la psychologie amoureuse.`,
    url: 'https://www.voyantlove.fr/glossaire/',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Glossaire', url: 'https://www.voyantlove.fr/glossaire/' },
  ]);
  const organizationSchema = getOrganizationSchema();
  const authorSchema = getAuthorSchema();
  const faqSchema = getFAQSchema([
    {
      question: 'À quoi sert ce glossaire de la voyance amoureuse ?',
      answer: 'Ce glossaire définit, de façon claire et sourcée, les termes de spiritualité, d\'astrologie, de numérologie, de pratiques divinatoires et de psychologie amoureuse que vous croisez dans nos guides et en consultation. Chaque fiche répond à une question précise, « qu\'est-ce que X ? », et explique le terme dans son contexte général avant de préciser ce qu\'il signifie concrètement pour votre vie amoureuse.',
    },
    {
      question: 'Comment les termes du glossaire sont-ils choisis ?',
      answer: 'Nous documentons le vocabulaire qui revient dans nos guides de voyance amoureuse, méthodes, astrologie, numérologie, sans jamais dupliquer une page déjà dédiée au sujet : l\'âme sœur, la synastrie ou le tarot ont leurs propres guides complets ailleurs sur le site. Le glossaire complète ces guides avec les notions plus précises qu\'ils utilisent sans toujours les définir en détail.',
    },
    {
      question: 'Le glossaire remplace-t-il une consultation de voyance ?',
      answer: 'Non. Le glossaire vous donne les clés de vocabulaire pour mieux comprendre les concepts de voyance et de psychologie amoureuse, mais il ne remplace pas l\'éclairage personnalisé d\'un voyant sur votre situation précise. Chaque fiche renvoie vers nos guides pratiques et vers une consultation pour approfondir votre cas particulier.',
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />

      <header className="bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Accueil</Link>
          <h1 className="text-5xl font-bold mb-6">Glossaire de la voyance amoureuse</h1>
          <p className="text-2xl opacity-95 mb-4">{HUB_CARDS.length} termes de voyance et d&apos;amour expliqués simplement</p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Spiritualité, astrologie, numérologie, pratiques divinatoires et psychologie amoureuse : chaque terme est défini, mis en contexte et relié à votre vie sentimentale.</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">

        <section className="bg-purple-50 border-l-4 border-purple-500 rounded-r-xl p-6 md:p-8 mb-10 max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Un dictionnaire au service de vos guidances</h2>
          <p className="text-lg leading-relaxed text-gray-800">
            Nos guides de <strong>voyance amoureuse</strong>, d&apos;<strong>astrologie</strong> ou de <strong>numérologie</strong> emploient un vocabulaire précis, <strong>corde karmique</strong>, <strong>thème composite</strong>, <strong>arcane majeur</strong>, <strong>attachement anxieux</strong>, que ce glossaire définit un par un, sans jamais refaire ce que nos guides complets font déjà mieux. Chaque fiche explique un terme dans son contexte général, puis précise ce qu&apos;il signifie concrètement pour votre vie amoureuse, avec des liens vers les guides qui l&apos;appliquent en profondeur.
          </p>
        </section>

        <VoyantQuickCTA topic="methodes-voyance" source="glossaire-hub-early" />

        {CATEGORY_ORDER.map((cat) => {
          const cards = HUB_CARDS.filter((c) => c.categorie === cat);
          if (cards.length === 0) return null;
          return (
            <section key={cat} className="mb-14">
              <h2 className="text-3xl font-bold mb-2 text-gray-900">{CATEGORY_LABELS[cat]}</h2>
              <p className="text-gray-600 mb-6">{cards.length} terme{cards.length > 1 ? 's' : ''}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {cards.map((c) => (
                  <Link
                    key={c.slug}
                    href={c.href}
                    className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition border-t-4 border-violet-500"
                  >
                    <h3 className="text-lg font-bold mb-1 text-gray-900">{c.terme}</h3>
                    <p className="text-gray-600 text-sm line-clamp-3">{c.definitionCourte}</p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        {/* Related networks */}
        <div className="bg-gray-100 rounded-xl p-6 mb-8 max-w-4xl mx-auto">
          <h2 className="font-bold text-lg mb-4 text-gray-900">Aller plus loin</h2>
          <div className="grid sm:grid-cols-2 gap-2">
            <Link href="/methodes-voyance/" className="block text-indigo-600 hover:text-indigo-800 font-medium">&rarr; Les méthodes de voyance amoureuse</Link>
            <Link href="/tarot-amour/" className="block text-indigo-600 hover:text-indigo-800 font-medium">&rarr; Tarot amour : signification des cartes</Link>
            <Link href="/astrologie-amour/" className="block text-indigo-600 hover:text-indigo-800 font-medium">&rarr; Signes astrologiques en amour</Link>
            <Link href="/reves-amour/" className="block text-indigo-600 hover:text-indigo-800 font-medium">&rarr; Interprétation des rêves amoureux</Link>
            <Link href="/compatibilite-amoureuse/" className="block text-indigo-600 hover:text-indigo-800 font-medium">&rarr; Compatibilité amoureuse par signes</Link>
            <Link href="/voyance-amour/" className="block text-indigo-600 hover:text-indigo-800 font-medium">&rarr; Voyance amour : tout savoir</Link>
          </div>
        </div>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions fréquentes sur ce glossaire</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">À quoi sert ce glossaire de la voyance amoureuse ?</h3>
              <p className="text-gray-700 leading-relaxed">Ce glossaire définit, de façon claire et sourcée, les termes de spiritualité, d&apos;astrologie, de numérologie, de pratiques divinatoires et de psychologie amoureuse que vous croisez dans nos guides et en consultation. Chaque fiche répond à une question précise, « qu&apos;est-ce que X ? », et explique le terme dans son contexte général avant de préciser ce qu&apos;il signifie concrètement pour votre vie amoureuse.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Comment les termes du glossaire sont-ils choisis ?</h3>
              <p className="text-gray-700 leading-relaxed">Nous documentons le vocabulaire qui revient dans nos guides de voyance amoureuse, méthodes, astrologie, numérologie, sans jamais dupliquer une page déjà dédiée au sujet : l&apos;âme sœur, la synastrie ou le tarot ont leurs propres guides complets ailleurs sur le site. Le glossaire complète ces guides avec les notions plus précises qu&apos;ils utilisent sans toujours les définir en détail.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Le glossaire remplace-t-il une consultation de voyance ?</h3>
              <p className="text-gray-700 leading-relaxed">Non. Le glossaire vous donne les clés de vocabulaire pour mieux comprendre les concepts de voyance et de psychologie amoureuse, mais il ne remplace pas l&apos;éclairage personnalisé d&apos;un voyant sur votre situation précise. Chaque fiche renvoie vers nos guides pratiques et vers une consultation pour approfondir votre cas particulier.</p>
            </div>
          </div>
        </section>

        <VoyantFinalCTA topic="methodes-voyance" source="glossaire-hub-final" />
      </div>
    </main>
  );
}
