import type { Metadata } from 'next';
import Link from 'next/link';
import { getWebPageSchema, getBreadcrumbSchema, getOrganizationSchema, getFAQSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';

export const metadata: Metadata = {
  title: 'Sentiments Amoureux : Décrypter Émotions et Avenir | Voyance',
  description: 'Analyse des sentiments amoureux : M\'aime-t-il/elle ? Décrypter émotions et prédire votre avenir amoureux selon le tarot.',
  alternates: { canonical: 'https://voyantlove.fr/sentiments' },
};

export default function SentimentsHubPage() {
  const webPageSchema = getWebPageSchema({
    title: 'Sentiments Amoureux : Décrypter Émotions et Avenir | Voyance',
    description: 'Analyse des sentiments amoureux : M\'aime-t-il/elle ? Décrypter émotions et prédire votre avenir amoureux selon le tarot.',
    url: 'https://voyantlove.fr/sentiments',
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Sentiments Amoureux', url: 'https://voyantlove.fr/sentiments' },
  ]);

  const organizationSchema = getOrganizationSchema();

  const faqSchema = getFAQSchema([
    {
      question: 'Comment savoir si quelqu\'un m\'aime vraiment grâce au tarot ?',
      answer: 'Le tarot des sentiments utilise des arcanes spécifiques comme L\'Amoureux, le Deux de Coupe et Le Soleil pour révéler les émotions authentiques. Un voyant expérimenté en clairvoyance émotionnelle analyse la disposition des cartes pour distinguer l\'amour véritable de la simple attirance passagère. Le tirage sentimental explore plusieurs dimensions : l\'attraction physique, l\'attachement émotionnel profond, la compatibilité spirituelle et les intentions réelles de l\'autre personne. Les cartes reflètent l\'inconscient et dévoilent ce que les mots et les comportements quotidiens peuvent masquer, offrant ainsi une lecture précise des sentiments cachés.',
    },
    {
      question: 'Quelle est la différence entre amour véritable et simple attachement ?',
      answer: 'L\'amour véritable se caractérise par le respect, la bienveillance et le désir sincère du bonheur de l\'autre, même sans réciprocité immédiate. Le simple attachement, en revanche, repose sur la dépendance émotionnelle, la peur de la solitude et un besoin de contrôle souvent inconscient. En voyance, le tarot distingue ces deux dynamiques grâce à des cartes révélatrices : Le Diable signale un lien toxique fondé sur la possession, tandis que le Deux de Coupe symbolise une union harmonieuse et équilibrée. Comprendre cette différence est essentiel pour prendre des décisions éclairées concernant votre relation amoureuse et votre épanouissement personnel.',
    },
    {
      question: 'La voyance peut-elle prédire mon avenir amoureux avec précision ?',
      answer: 'La voyance sentimentale offre des indications précieuses sur les tendances et les évolutions probables de votre vie amoureuse. Un voyant qualifié utilise le tarot, la clairvoyance et la lecture énergétique pour identifier les opportunités de rencontre, les périodes favorables à l\'amour et les obstacles potentiels. Toutefois, l\'avenir amoureux n\'est jamais figé : vos choix et vos actions influencent constamment votre destinée sentimentale. Le tirage révèle les énergies en présence et les chemins possibles, vous permettant d\'agir en conscience. La prédiction amoureuse constitue donc un outil de guidance plutôt qu\'une fatalité inévitable.',
    },
    {
      question: 'Comment le tarot révèle-t-il les sentiments cachés de l\'autre ?',
      answer: 'Le tarot accède aux sentiments cachés grâce à sa connexion avec l\'inconscient collectif et les énergies émotionnelles. Lors d\'un tirage sentimental, chaque carte tirée reflète un aspect précis des émotions de la personne concernée : La Lune dévoile les secrets et les peurs inavouées, le Cavalier de Coupe indique des pensées romantiques fréquentes, et L\'Hermite suggère une réflexion intérieure profonde sur la relation. Le voyant interprète ces symboles en combinaison pour dresser un portrait émotionnel complet. Cette lecture permet de comprendre pourquoi certaines personnes dissimulent leurs sentiments par peur du rejet, fierté ou blessures passées non guéries.',
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <header className="bg-gradient-to-r from-red-500 via-pink-500 to-rose-500 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Accueil</Link>
          <h1 className="text-5xl font-bold mb-6">💖 Sentiments Amoureux</h1>
          <p className="text-2xl opacity-95 mb-8">Décrypter les Émotions et Prédire l'Avenir</p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Le tarot révèle les vrais sentiments et prédit votre futur sentimental avec précision.</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <EEATSignal colorScheme="rose" method="Tarot des sentiments et clairvoyance émotionnelle" />

        <VoyantQuickCTA topic="sentiments" source="sentiments-hub-early" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🗺️ Comprendre vos Sentiments</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/sentiments/maime-t-il-elle" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-red-500">
              <div className="text-4xl mb-4">💖</div>
              <h3 className="text-2xl font-bold mb-3">M'aime-t-il/elle ?</h3>
              <p className="text-gray-600 mb-4">Décryptez ses vrais sentiments grâce au tarot et à la voyance.</p>
              <span className="text-red-600 font-semibold">Découvrir →</span>
            </Link>

            <Link href="/sentiments/signes-il-elle-maime" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-pink-500">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-2xl font-bold mb-3">Signes d'Amour</h3>
              <p className="text-gray-600 mb-4">Reconnaître les signes qu'il/elle vous aime vraiment.</p>
              <span className="text-pink-600 font-semibold">Découvrir →</span>
            </Link>

            <Link href="/sentiments/avenir-amoureux" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-purple-500">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-2xl font-bold mb-3">Avenir Amoureux</h3>
              <p className="text-gray-600 mb-4">Prédictions sur votre futur sentimental et votre destinée.</p>
              <span className="text-purple-600 font-semibold">Découvrir →</span>
            </Link>

            <Link href="/sentiments/compatibilite-amoureuse" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-rose-500">
              <div className="text-4xl mb-4">💕</div>
              <h3 className="text-2xl font-bold mb-3">Compatibilité Amoureuse</h3>
              <p className="text-gray-600 mb-4">Évaluez la compatibilité de votre couple selon le tarot.</p>
              <span className="text-rose-600 font-semibold">Découvrir →</span>
            </Link>

            <Link href="/sentiments/pense-t-il-elle-a-moi" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-violet-500">
              <div className="text-4xl mb-4">💭</div>
              <h3 className="text-2xl font-bold mb-3">Pense-t-il/elle à Moi ?</h3>
              <p className="text-gray-600 mb-4">Savoir si l'autre pense à vous grâce à la voyance.</p>
              <span className="text-violet-600 font-semibold">Découvrir →</span>
            </Link>

            <Link href="/sentiments/relation-toxique" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-orange-500">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-2xl font-bold mb-3">Relation Toxique</h3>
              <p className="text-gray-600 mb-4">Reconnaître les signes d'une relation toxique et se libérer.</p>
              <span className="text-orange-600 font-semibold">Découvrir →</span>
            </Link>
          </div>
        </section>

        <VoyantRecommendations topic="sentiments" limit={3} showOnlineFirst={true} source="sentiments-hub-mid" />

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions Fréquentes sur les Sentiments Amoureux</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment savoir si quelqu'un m'aime vraiment grâce au tarot ?</h3>
              <p className="text-gray-700 leading-relaxed">Le <strong>tarot des sentiments</strong> utilise des arcanes spécifiques comme <strong>L'Amoureux</strong>, le <strong>Deux de Coupe</strong> et <strong>Le Soleil</strong> pour révéler les émotions authentiques. Un <strong>voyant expérimenté</strong> en <strong>clairvoyance émotionnelle</strong> analyse la disposition des cartes pour distinguer l'<strong>amour véritable</strong> de la simple attirance passagère. Le <strong>tirage sentimental</strong> explore plusieurs dimensions : l'attraction physique, l'attachement émotionnel profond, la <strong>compatibilité spirituelle</strong> et les intentions réelles de l'autre personne. Les cartes reflètent l'inconscient et dévoilent ce que les mots et les comportements quotidiens peuvent masquer, offrant ainsi une lecture précise des <strong>sentiments cachés</strong>.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quelle est la différence entre amour véritable et simple attachement ?</h3>
              <p className="text-gray-700 leading-relaxed">L'<strong>amour véritable</strong> se caractérise par le respect, la bienveillance et le désir sincère du bonheur de l'autre, même sans réciprocité immédiate. Le <strong>simple attachement</strong>, en revanche, repose sur la <strong>dépendance émotionnelle</strong>, la peur de la solitude et un besoin de contrôle souvent inconscient. En <strong>voyance</strong>, le tarot distingue ces deux dynamiques grâce à des cartes révélatrices : <strong>Le Diable</strong> signale un lien toxique fondé sur la possession, tandis que le <strong>Deux de Coupe</strong> symbolise une union harmonieuse et équilibrée. Comprendre cette différence est essentiel pour prendre des décisions éclairées concernant votre <strong>relation amoureuse</strong> et votre épanouissement personnel.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">La voyance peut-elle prédire mon avenir amoureux avec précision ?</h3>
              <p className="text-gray-700 leading-relaxed">La <strong>voyance sentimentale</strong> offre des indications précieuses sur les tendances et les évolutions probables de votre <strong>vie amoureuse</strong>. Un <strong>voyant qualifié</strong> utilise le <strong>tarot</strong>, la <strong>clairvoyance</strong> et la <strong>lecture énergétique</strong> pour identifier les opportunités de rencontre, les périodes favorables à l'amour et les obstacles potentiels. Toutefois, l'<strong>avenir amoureux</strong> n'est jamais figé : vos choix et vos actions influencent constamment votre <strong>destinée sentimentale</strong>. Le tirage révèle les énergies en présence et les chemins possibles, vous permettant d'agir en conscience. La <strong>prédiction amoureuse</strong> constitue donc un outil de guidance plutôt qu'une fatalité inévitable.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment le tarot révèle-t-il les sentiments cachés de l'autre ?</h3>
              <p className="text-gray-700 leading-relaxed">Le <strong>tarot</strong> accède aux <strong>sentiments cachés</strong> grâce à sa connexion avec l'<strong>inconscient collectif</strong> et les énergies émotionnelles. Lors d'un <strong>tirage sentimental</strong>, chaque carte tirée reflète un aspect précis des émotions de la personne concernée : <strong>La Lune</strong> dévoile les secrets et les peurs inavouées, le <strong>Cavalier de Coupe</strong> indique des pensées romantiques fréquentes, et <strong>L'Hermite</strong> suggère une réflexion intérieure profonde sur la relation. Le voyant interprète ces symboles en combinaison pour dresser un portrait émotionnel complet. Cette lecture permet de comprendre pourquoi certaines personnes dissimulent leurs sentiments par <strong>peur du rejet</strong>, fierté ou <strong>blessures passées</strong> non guéries.</p>
            </div>
          </div>
        </section>

        <VoyantFinalCTA topic="sentiments" source="sentiments-hub-final" />
      </div>
    </main>
  );
}
