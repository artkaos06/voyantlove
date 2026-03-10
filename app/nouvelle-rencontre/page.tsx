import type { Metadata } from 'next';
import Link from 'next/link';
import { getWebPageSchema, getBreadcrumbSchema, getOrganizationSchema, getFAQSchema, getAuthorSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';

export const metadata: Metadata = {
  title: 'Nouvelle Rencontre Amoureuse : Trouver l\'Amour | Voyance',
  description: 'Quand et comment rencontrer l\'amour ? Trouver votre âme sœur selon le tarot et la voyance. Prédictions et guidance.',
  alternates: { canonical: 'https://voyantlove.fr/nouvelle-rencontre/' },
};

export default function NouvelleRencontreHubPage() {
  const webPageSchema = getWebPageSchema({
    title: 'Nouvelle Rencontre Amoureuse : Trouver l\'Amour | Voyance',
    description: 'Quand et comment rencontrer l\'amour ? Trouver votre âme sœur selon le tarot et la voyance. Prédictions et guidance.',
    url: 'https://voyantlove.fr/nouvelle-rencontre/',
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Nouvelle Rencontre Amoureuse', url: 'https://voyantlove.fr/nouvelle-rencontre/' },
  ]);

  const organizationSchema = getOrganizationSchema();
  const authorSchema = getAuthorSchema();

  const faqSchema = getFAQSchema([
    {
      question: 'Quand vais-je rencontrer l\'amour ?',
      answer: 'Le tarot et la voyance analysent vos énergies actuelles pour déterminer le timing de votre prochaine rencontre amoureuse. Les cartes révèlent les périodes favorables en étudiant les transits planétaires et les cycles karmiques qui influencent votre vie sentimentale. Un voyant expérimenté identifie les blocages énergétiques qui retardent la rencontre et propose des rituels de purification. La prédiction tient compte de votre thème astral, de votre numérologie personnelle et des synchronicités qui annoncent l\'arrivée de l\'amour dans votre destinée.',
    },
    {
      question: 'Comment reconnaître son âme sœur ?',
      answer: 'Reconnaître son âme sœur passe par des signes spirituels et émotionnels précis que le tarot aide à identifier. Vous ressentirez une connexion immédiate et profonde, un sentiment de familiarité inexplicable et une complémentarité naturelle. Le tirage des cartes révèle les caractéristiques physiques et psychologiques de votre âme sœur, ainsi que les circonstances de la rencontre. Les synchronicités se multiplient : chiffres récurrents, rêves prémonitoires et intuitions fortes. La voyance affine ces signes pour que vous soyez prêt à accueillir cette rencontre karmique avec ouverture et confiance.',
    },
    {
      question: 'Où vais-je rencontrer l\'amour ?',
      answer: 'La voyance et le tarot des nouvelles rencontres peuvent révéler le contexte et le lieu probable de votre future rencontre amoureuse. Les cartes indiquent si la rencontre surviendra dans un cadre professionnel, lors d\'un voyage, par des amis communs ou via une plateforme de rencontre en ligne. Le voyant analyse les énergies de votre environnement quotidien et identifie les lieux chargés positivement pour vous. La cartomancie précise également l\'ambiance et la saison propices, vous permettant de multiplier les occasions dans les contextes les plus favorables à une connexion authentique.',
    },
    {
      question: 'Comment se préparer à une nouvelle rencontre ?',
      answer: 'La préparation spirituelle est essentielle pour attirer une rencontre amoureuse alignée avec votre destinée. Le tarot recommande d\'abord un travail de guérison émotionnelle pour libérer les blessures des relations passées et les schémas répétitifs. La méditation quotidienne et les rituels d\'ouverture du chakra du cœur élèvent votre vibration amoureuse. Un voyant peut prescrire des exercices de visualisation créative et des affirmations positives ciblées. Le nettoyage énergétique de votre espace de vie et l\'utilisation de cristaux comme le quartz rose favorisent l\'accueil de l\'amour nouveau dans votre existence.',
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />
      <header className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Accueil</Link>
          <h1 className="text-5xl font-bold mb-6">✨ Nouvelle Rencontre Amoureuse</h1>
          <p className="text-2xl opacity-95 mb-8">Trouver l'Amour et votre Âme Sœur</p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Le tarot prédit quand, où et comment vous allez rencontrer votre prochaine relation.</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <EEATSignal colorScheme="cyan" method="Tarot des nouvelles rencontres et prédictions" />

        <VoyantQuickCTA topic="nouvelle-rencontre" source="nouvelle-rencontre-hub-early" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🗺️ Votre Chemin vers l'Amour</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Le tarot et la <Link href="/" className="text-cyan-600 hover:text-cyan-800 underline font-medium">voyance amoureuse</Link> guident chaque etape de votre quete sentimentale, du timing de la rencontre a la reconnaissance de votre ame soeur, en passant par la preparation interieure et spirituelle.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/nouvelle-rencontre/quand-rencontre-amour" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-cyan-500">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-2xl font-bold mb-3">Quand Rencontrer ?</h3>
              <p className="text-gray-600 mb-4">Timing, lieu et profil de votre prochaine rencontre amoureuse.</p>
              <span className="text-cyan-600 font-semibold">Découvrir →</span>
            </Link>

            <Link href="/nouvelle-rencontre/trouver-ame-soeur" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-purple-500">
              <div className="text-4xl mb-4">💫</div>
              <h3 className="text-2xl font-bold mb-3">Trouver l'Âme Sœur</h3>
              <p className="text-gray-600 mb-4">Comment et où trouver votre âme sœur selon la destinée.</p>
              <span className="text-purple-600 font-semibold">Découvrir →</span>
            </Link>

            <Link href="/nouvelle-rencontre/signes-ame-soeur" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-pink-500">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3">Signes Âme Sœur</h3>
              <p className="text-gray-600 mb-4">Reconnaître votre âme sœur quand vous la rencontrez.</p>
              <span className="text-pink-600 font-semibold">Découvrir →</span>
            </Link>

            <Link href="/nouvelle-rencontre/nouvelle-relation-amoureuse" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-green-500">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold mb-3">Nouvelle Relation</h3>
              <p className="text-gray-600 mb-4">Débuter une nouvelle relation après rupture avec sagesse.</p>
              <span className="text-green-600 font-semibold">Découvrir →</span>
            </Link>

            <Link href="/nouvelle-rencontre/flamme-jumelle" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-indigo-500">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-2xl font-bold mb-3">Flamme Jumelle</h3>
              <p className="text-gray-600 mb-4">Reconnaître et vivre la connexion avec votre flamme jumelle.</p>
              <span className="text-indigo-600 font-semibold">Découvrir →</span>
            </Link>

            <Link href="/nouvelle-rencontre/amour-apres-40-ans" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-amber-500">
              <div className="text-4xl mb-4">💛</div>
              <h3 className="text-2xl font-bold mb-3">Amour après 40 ans</h3>
              <p className="text-gray-600 mb-4">Trouver l'amour après 40 ans : guidance et prédictions sentimentales.</p>
              <span className="text-amber-600 font-semibold">Découvrir →</span>
            </Link>
          </div>
        </section>

        <VoyantRecommendations topic="nouvelle-rencontre" limit={3} showOnlineFirst={true} source="nouvelle-rencontre-hub-mid" />

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions Fréquentes sur les Nouvelles Rencontres</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">La voyance amoureuse repond aux interrogations les plus courantes sur le <Link href="/nouvelle-rencontre/quand-rencontre-amour" className="text-cyan-600 hover:text-cyan-800 underline font-medium">timing de la rencontre</Link>, le lieu et la preparation necessaire pour attirer une nouvelle rencontre sentimentale alignee avec votre destinee.</p>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quand vais-je rencontrer l'amour ?</h3>
              <p className="text-gray-700 leading-relaxed">Le <strong>tarot</strong> et la <strong>voyance</strong> analysent vos énergies actuelles pour déterminer le <strong>timing de votre prochaine rencontre amoureuse</strong>. Les cartes révèlent les périodes favorables en étudiant les <strong>transits planétaires</strong> et les <strong>cycles karmiques</strong> qui influencent votre vie sentimentale. Un voyant expérimenté identifie les <strong>blocages énergétiques</strong> qui retardent la rencontre et propose des <strong>rituels de purification</strong>. La prédiction tient compte de votre <strong>thème astral</strong>, de votre <strong>numérologie personnelle</strong> et des synchronicités qui annoncent l'arrivée de l'amour dans votre destinée.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment reconnaître son âme sœur ?</h3>
              <p className="text-gray-700 leading-relaxed">Reconnaître son <strong>âme sœur</strong> passe par des <strong>signes spirituels et émotionnels</strong> précis que le tarot aide à identifier. Vous ressentirez une <strong>connexion immédiate et profonde</strong>, un sentiment de familiarité inexplicable et une <strong>complémentarité naturelle</strong>. Le <strong>tirage des cartes</strong> révèle les caractéristiques physiques et psychologiques de votre âme sœur, ainsi que les circonstances de la rencontre. Les <strong>synchronicités</strong> se multiplient : chiffres récurrents, <strong>rêves prémonitoires</strong> et intuitions fortes. La voyance affine ces signes pour que vous soyez prêt à accueillir cette <strong>rencontre karmique</strong> avec ouverture et confiance.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Où vais-je rencontrer l'amour ?</h3>
              <p className="text-gray-700 leading-relaxed">La <strong>voyance</strong> et le <strong>tarot des nouvelles rencontres</strong> peuvent révéler le contexte et le <strong>lieu probable de votre future rencontre amoureuse</strong>. Les cartes indiquent si la rencontre surviendra dans un <strong>cadre professionnel</strong>, lors d'un voyage, par des <strong>amis communs</strong> ou via une plateforme de rencontre en ligne. Le voyant analyse les énergies de votre environnement quotidien et identifie les <strong>lieux chargés positivement</strong> pour vous. La <strong>cartomancie</strong> précise également l'ambiance et la saison propices, vous permettant de multiplier les occasions dans les contextes les plus favorables à une <strong>connexion authentique</strong>.</p>
            </div>
            <div className="pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment se préparer à une nouvelle rencontre ?</h3>
              <p className="text-gray-700 leading-relaxed">La <strong>préparation spirituelle</strong> est essentielle pour attirer une <strong>rencontre amoureuse</strong> alignée avec votre destinée. Le tarot recommande d'abord un <strong>travail de guérison émotionnelle</strong> pour libérer les blessures des relations passées et les <strong>schémas répétitifs</strong>. La <strong>méditation quotidienne</strong> et les rituels d'ouverture du <strong>chakra du cœur</strong> élèvent votre vibration amoureuse. Un voyant peut prescrire des exercices de <strong>visualisation créative</strong> et des <strong>affirmations positives</strong> ciblées. Le <strong>nettoyage énergétique</strong> de votre espace de vie et l'utilisation de cristaux comme le <strong>quartz rose</strong> favorisent l'accueil de l'amour nouveau dans votre existence.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Thèmes Connexes</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">La quete amoureuse touche aussi les sentiments actuels, la reconquete d'un ex et le choix de la bonne methode de voyance pour eclairer chaque situation.</p>
          <p className="text-gray-700 mb-4">La recherche de l'amour s'inscrit dans un parcours sentimental plus large. Découvrez nos guidances complémentaires.</p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/sentiments" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-900 mb-1">Sentiments Amoureux</h3>
              <p className="text-sm text-gray-600">Décrypter les émotions et savoir si l'autre vous aime vraiment.</p>
            </Link>
            <Link href="/reconquete" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-900 mb-1">Reconquête Amoureuse</h3>
              <p className="text-sm text-gray-600">Stratégies pour reconquérir un amour perdu et obtenir une seconde chance.</p>
            </Link>
            <Link href="/methodes-voyance" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-900 mb-1">Méthodes de Voyance</h3>
              <p className="text-sm text-gray-600">Tarot, oracle et astrologie pour guider votre quête amoureuse.</p>
            </Link>
            <Link href="/voyance-gratuite-amour" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-900 mb-1">Voyance Gratuite Amour</h3>
              <p className="text-sm text-gray-600">Essayez un tirage amour gratuit pour éclairer votre nouvelle rencontre.</p>
            </Link>
          </div>
        </section>

        <VoyantFinalCTA topic="nouvelle-rencontre" source="nouvelle-rencontre-hub-final" />
      </div>
    </main>
  );
}
