import type { Metadata } from 'next';
import Link from 'next/link';
import { getWebPageSchema, getBreadcrumbSchema, getOrganizationSchema, getFAQSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';

export const metadata: Metadata = {
  title: 'Méthodes de Voyance Amoureuse : Tarot, Oracle et Astrologie | VoyantLove',
  description: 'Découvrez les méthodes de voyance amoureuse : tarot, oracle et astrologie pour éclairer votre vie sentimentale et prédire votre avenir amoureux.',
  alternates: { canonical: 'https://voyantlove.fr/methodes-voyance' },
};

export default function MethodesVoyanceHubPage() {
  const webPageSchema = getWebPageSchema({
    title: 'Méthodes de Voyance Amoureuse : Tarot, Oracle et Astrologie | VoyantLove',
    description: 'Découvrez les méthodes de voyance amoureuse : tarot, oracle et astrologie pour éclairer votre vie sentimentale et prédire votre avenir amoureux.',
    url: 'https://voyantlove.fr/methodes-voyance',
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Méthodes de Voyance', url: 'https://voyantlove.fr/methodes-voyance' },
  ]);

  const organizationSchema = getOrganizationSchema();

  const faqSchema = getFAQSchema([
    {
      question: 'Quelle est la différence entre le tarot et l\'oracle en voyance amoureuse ?',
      answer: 'Le tarot amoureux utilise un jeu structuré de 78 arcanes avec une symbolique précise, idéal pour analyser les dynamiques relationnelles complexes et les sentiments cachés. L\'oracle de l\'amour, en revanche, est un jeu plus libre et intuitif qui délivre des messages directs sur votre situation sentimentale. Le tarot excelle dans les tirages détaillés sur la compatibilité amoureuse, tandis que l\'oracle offre des réponses plus spontanées et accessibles. Un voyant expérimenté peut combiner les deux méthodes pour une consultation de voyance amoureuse complète et nuancée.',
    },
    {
      question: 'L\'astrologie peut-elle prédire la compatibilité amoureuse ?',
      answer: 'L\'astrologie amoureuse analyse la compatibilité entre deux personnes en étudiant leurs thèmes astraux respectifs. La synastrie compare les positions planétaires pour révéler les affinités naturelles et les zones de tension dans le couple. Vénus indique la manière d\'aimer, Mars révèle l\'attraction physique, et la Lune dévoile les besoins émotionnels profonds. Cette méthode de voyance identifie les périodes favorables aux rencontres et les transits planétaires qui influencent votre vie sentimentale, offrant une vision complète de votre destinée amoureuse.',
    },
    {
      question: 'Quel tirage de tarot est le plus efficace pour les questions d\'amour ?',
      answer: 'Le tirage en croix est le plus populaire pour les questions d\'amour : il révèle la situation actuelle, les obstacles, les influences et l\'évolution probable de la relation. Le tirage des sentiments, spécifique à la voyance amoureuse, utilise sept cartes pour explorer ce que ressent chaque partenaire. Le tirage de la relation amoureuse en cinq cartes analyse le passé du couple, le présent, les défis, les conseils et l\'avenir sentimental. Chaque tirage apporte un éclairage unique selon la question posée au voyant.',
    },
    {
      question: 'Comment fonctionne une consultation de voyance amoureuse ?',
      answer: 'Une consultation de voyance amoureuse commence par l\'écoute attentive de votre situation sentimentale. Le voyant choisit ensuite la méthode la plus adaptée : tarot pour une analyse approfondie, oracle pour des messages clairs, ou astrologie pour une vision à long terme. Le praticien interprète les symboles en lien avec votre question amoureuse et vous transmet les messages reçus par clairvoyance. La séance se conclut par des conseils personnalisés et un éclairage sur les évolutions possibles de votre vie amoureuse.',
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Accueil</Link>
          <h1 className="text-5xl font-bold mb-6">🔮 Méthodes de Voyance Amoureuse</h1>
          <p className="text-2xl opacity-95 mb-8">Tarot, Oracle et Astrologie au Service de l&apos;Amour</p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Explorez les différentes méthodes de voyance pour éclairer votre vie sentimentale et découvrir votre avenir amoureux.</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <EEATSignal colorScheme="purple" method="Tarot, oracle et astrologie amoureuse" />

        <VoyantQuickCTA topic="methodes-voyance" source="methodes-voyance-hub-early" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🗺️ Nos Méthodes de Voyance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/methodes-voyance/tirage-tarot-amour" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-indigo-500">
              <div className="text-4xl mb-4">🃏</div>
              <h3 className="text-2xl font-bold mb-3">Tirage Tarot Amour</h3>
              <p className="text-gray-600 mb-4">Découvrez ce que les arcanes révèlent sur votre vie sentimentale et vos relations.</p>
              <span className="text-indigo-600 font-semibold">Découvrir →</span>
            </Link>

            <Link href="/methodes-voyance/oracle-amour" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-purple-500">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3">Oracle de l&apos;Amour</h3>
              <p className="text-gray-600 mb-4">Recevez des messages intuitifs et des guidances claires sur votre destinée amoureuse.</p>
              <span className="text-purple-600 font-semibold">Découvrir →</span>
            </Link>

            <Link href="/methodes-voyance/astrologie-amoureuse" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-violet-500">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold mb-3">Astrologie Amoureuse</h3>
              <p className="text-gray-600 mb-4">Analysez votre compatibilité astrale et les transits favorables à l&apos;amour.</p>
              <span className="text-violet-600 font-semibold">Découvrir →</span>
            </Link>

            <Link href="/methodes-voyance/voyance-telephone-amour" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-blue-500">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-2xl font-bold mb-3">Voyance par Téléphone</h3>
              <p className="text-gray-600 mb-4">Consultez un voyant spécialisé amour par téléphone, 24h/24 en toute confidentialité.</p>
              <span className="text-blue-600 font-semibold">Découvrir →</span>
            </Link>

            <Link href="/methodes-voyance/pendule-amour" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-rose-500">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-2xl font-bold mb-3">Pendule Amour</h3>
              <p className="text-gray-600 mb-4">Réponses oui/non instantanées à vos questions sentimentales par le pendule.</p>
              <span className="text-rose-600 font-semibold">Découvrir →</span>
            </Link>
          </div>
        </section>

        <VoyantRecommendations topic="methodes-voyance" limit={3} showOnlineFirst={true} source="methodes-voyance-hub-mid" />

        <section className="bg-white rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">🔮 Choisir la Bonne Méthode de Voyance</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">Chaque <strong>méthode de voyance amoureuse</strong> possède ses propres forces et sa sensibilité unique. Le choix de l&apos;outil divinatoire dépend de votre question sentimentale, de la profondeur d&apos;analyse souhaitée et de votre affinité personnelle avec chaque <strong>pratique de voyance</strong>.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">🃏 Tarot vs Oracle</h3>
              <p className="text-gray-700">Le <strong>tarot amoureux</strong> offre une analyse structurée grâce à ses <strong>78 arcanes</strong> aux significations précises, idéal pour explorer les <strong>dynamiques relationnelles</strong> complexes. L&apos;<strong>oracle de l&apos;amour</strong> privilégie l&apos;intuition et délivre des <strong>messages directs</strong> sur votre <strong>situation sentimentale</strong>, parfait pour obtenir des réponses claires et immédiates.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">⭐ L&apos;Astrologie en Amour</h3>
              <p className="text-gray-700">L&apos;<strong>astrologie amoureuse</strong> étudie les <strong>thèmes astraux</strong> et la <strong>synastrie</strong> pour révéler la <strong>compatibilité amoureuse</strong> entre deux personnes. Elle identifie les <strong>transits planétaires</strong> favorables aux <strong>rencontres</strong> et les périodes propices à l&apos;épanouissement de votre <strong>relation amoureuse</strong>, offrant une vision cosmique de votre <strong>destinée sentimentale</strong>.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions Fréquentes sur les Méthodes de Voyance</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quelle est la différence entre le tarot et l&apos;oracle en voyance amoureuse ?</h3>
              <p className="text-gray-700 leading-relaxed">Le <strong>tarot amoureux</strong> utilise un jeu structuré de <strong>78 arcanes</strong> avec une symbolique précise, idéal pour analyser les <strong>dynamiques relationnelles</strong> complexes et les <strong>sentiments cachés</strong>. L&apos;<strong>oracle de l&apos;amour</strong>, en revanche, est un jeu plus libre et intuitif qui délivre des messages directs sur votre <strong>situation sentimentale</strong>. Le <strong>tarot</strong> excelle dans les <strong>tirages</strong> détaillés sur la <strong>compatibilité amoureuse</strong>, tandis que l&apos;<strong>oracle</strong> offre des réponses plus spontanées et accessibles. Un <strong>voyant expérimenté</strong> peut combiner les deux méthodes pour une <strong>consultation de voyance amoureuse</strong> complète et nuancée.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">L&apos;astrologie peut-elle prédire la compatibilité amoureuse ?</h3>
              <p className="text-gray-700 leading-relaxed">L&apos;<strong>astrologie amoureuse</strong> analyse la <strong>compatibilité</strong> entre deux personnes en étudiant leurs <strong>thèmes astraux</strong> respectifs. La <strong>synastrie</strong> compare les positions planétaires pour révéler les affinités naturelles et les zones de tension dans le couple. <strong>Vénus</strong> indique la manière d&apos;aimer, <strong>Mars</strong> révèle l&apos;attraction physique, et la <strong>Lune</strong> dévoile les besoins émotionnels profonds. Cette <strong>méthode de voyance</strong> identifie les périodes favorables aux <strong>rencontres</strong> et les <strong>transits planétaires</strong> qui influencent votre <strong>vie sentimentale</strong>.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quel tirage de tarot est le plus efficace pour les questions d&apos;amour ?</h3>
              <p className="text-gray-700 leading-relaxed">Le <strong>tirage en croix</strong> est le plus populaire pour les questions d&apos;amour : il révèle la situation actuelle, les obstacles, les influences et l&apos;évolution probable de la <strong>relation</strong>. Le <strong>tirage des sentiments</strong>, spécifique à la <strong>voyance amoureuse</strong>, utilise sept cartes pour explorer ce que ressent chaque partenaire. Le <strong>tirage de la relation amoureuse</strong> en cinq cartes analyse le passé du couple, le présent, les défis, les conseils et l&apos;<strong>avenir sentimental</strong>.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment fonctionne une consultation de voyance amoureuse ?</h3>
              <p className="text-gray-700 leading-relaxed">Une <strong>consultation de voyance amoureuse</strong> commence par l&apos;écoute attentive de votre <strong>situation sentimentale</strong>. Le <strong>voyant</strong> choisit ensuite la méthode la plus adaptée : <strong>tarot</strong> pour une analyse approfondie, <strong>oracle</strong> pour des messages clairs, ou <strong>astrologie</strong> pour une vision à long terme. Le praticien interprète les symboles en lien avec votre question amoureuse et vous transmet les messages reçus par <strong>clairvoyance</strong>. La séance se conclut par des conseils personnalisés et un éclairage sur les évolutions possibles de votre <strong>vie amoureuse</strong>.</p>
            </div>
          </div>
        </section>

        <VoyantFinalCTA topic="methodes-voyance" source="methodes-voyance-hub-final" />
      </div>
    </main>
  );
}
