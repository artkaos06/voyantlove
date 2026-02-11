import type { Metadata } from 'next';
import Link from 'next/link';
import { getWebPageSchema, getBreadcrumbSchema, getOrganizationSchema, getFAQSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';

export const metadata: Metadata = {
  title: 'Rupture Amoureuse : Comprendre, Surmonter et Guérir | Voyance',
  description: 'Guide complet sur la rupture amoureuse : comprendre les causes, surmonter le chagrin et guérir selon le tarot et la voyance.',
  alternates: { canonical: 'https://voyantlove.fr/rupture' },
};

export default function RuptureHubPage() {
  const webPageSchema = getWebPageSchema({
    title: 'Rupture Amoureuse : Comprendre, Surmonter et Guérir | Voyance',
    description: 'Guide complet sur la rupture amoureuse : comprendre les causes, surmonter le chagrin et guérir selon le tarot et la voyance.',
    url: 'https://voyantlove.fr/rupture',
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Rupture Amoureuse', url: 'https://voyantlove.fr/rupture' },
  ]);

  const organizationSchema = getOrganizationSchema();

  const faqSchema = getFAQSchema([
    {
      question: 'Comment surmonter une rupture amoureuse selon la voyance ?',
      answer: 'La voyance accompagne votre guérison en éclairant les raisons profondes de la rupture, le sens spirituel de cette épreuve, et les étapes de votre reconstruction. Le tarot identifie dans quelle phase du deuil amoureux vous êtes et combien de temps durera chaque étape. Comprendre le « pourquoi » de la rupture grâce aux cartes accélère l\'acceptation et transforme la souffrance en sagesse. Les voyants vous guident avec bienveillance vers la lumière après la tempête.',
    },
    {
      question: 'Combien de temps dure un chagrin d\'amour en moyenne ?',
      answer: 'La règle empirique est d\'environ un mois de guérison par année de relation, mais le tarot personnalise ce timing. Une relation d\'un an nécessite 2-4 mois de guérison, tandis qu\'une relation de 5 ans peut demander 8-12 mois. Le travail intérieur, l\'accompagnement spirituel et le soutien de l\'entourage accélèrent considérablement le processus. Le voyant vous donne un calendrier réaliste basé sur votre énergie actuelle.',
    },
    {
      question: 'Le tarot peut-il expliquer pourquoi mon couple s\'est séparé ?',
      answer: 'Absolument. Le tarot révèle les causes profondes souvent invisibles : incompatibilité karmique, leçons de vie à intégrer, schémas relationnels répétitifs, interférences extérieures, ou timing de vie différent. Comprendre ces raisons spirituelles aide à ne pas répéter les mêmes erreurs dans vos futures relations. Le voyant vous aide à identifier vos patterns amoureux pour les transformer et construire des relations plus saines.',
    },
    {
      question: 'Quand serai-je prêt(e) à aimer à nouveau après une rupture ?',
      answer: 'Le tarot identifie le moment précis où votre cœur sera à nouveau ouvert. Les signes révélés par les cartes incluent : pensées neutres envers votre ex, retrouvailles avec votre joie de vivre, curiosité pour de nouvelles rencontres, et cessation des comparaisons. L\'astrologie complète cette analyse en identifiant les transits favorables aux nouveaux départs amoureux, souvent 6-12 mois après la rupture pour les relations durables.',
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <header className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Accueil</Link>
          <h1 className="text-5xl font-bold mb-6">💔 Rupture Amoureuse</h1>
          <p className="text-2xl opacity-95 mb-8">Comprendre, Surmonter et Guérir selon la Voyance</p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Guidance tarot pour traverser votre rupture, comprendre les raisons profondes et entamer votre reconstruction.</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <EEATSignal colorScheme="red" method="Tarot de guérison et accompagnement post-rupture" />
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🗺️ Votre Parcours de Guérison</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/rupture/rupture-amoureuse" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-red-500">
              <div className="text-4xl mb-4">💔</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Rupture Amoureuse</h3>
              <p className="text-gray-600 mb-4">Comprendre les vraies raisons de la séparation et le sens profond de cette épreuve.</p>
              <span className="text-red-600 font-semibold">Lire →</span>
            </Link>

            <Link href="/rupture/chagrin-damour" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-blue-500">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Chagrin d'Amour</h3>
              <p className="text-gray-600 mb-4">Traverser la douleur étape par étape avec compassion et retrouver l'espoir.</p>
              <span className="text-blue-600 font-semibold">Lire →</span>
            </Link>

            <Link href="/rupture/oublier-son-ex" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-pink-500">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Oublier son Ex</h3>
              <p className="text-gray-600 mb-4">Tourner la page complètement et se préparer à rencontrer un nouvel amour.</p>
              <span className="text-pink-600 font-semibold">Lire →</span>
            </Link>
          </div>
        </section>

        <section className="bg-white rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">🔮 Ce que la Voyance Révèle sur la Rupture</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">Le <strong>tarot</strong> aide à comprendre pourquoi votre relation devait se terminer, quelles leçons en tirer, et comment transformer cette épreuve en évolution personnelle. Chaque <strong>rupture amoureuse</strong> porte un sens spirituel profond.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">✨ Les Leçons Karmiques</h3>
              <p className="text-gray-700">Chaque relation enseigne quelque chose. Le tarot révèle ce que vous deviez apprendre de cette expérience.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">⏰ Le Timing de Guérison</h3>
              <p className="text-gray-700">Combien de temps pour guérir ? Le tarot donne un timing personnalisé selon votre évolution.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8">Questions Fréquentes sur la Rupture Amoureuse</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment surmonter une rupture amoureuse selon la voyance ?</h3>
              <p className="text-gray-700 leading-relaxed">La voyance accompagne votre guérison en éclairant les raisons profondes de la rupture, le sens spirituel de cette épreuve, et les étapes de votre reconstruction. Le tarot identifie dans quelle phase du deuil amoureux vous êtes et combien de temps durera chaque étape. Comprendre le &laquo; pourquoi &raquo; de la rupture grâce aux cartes accélère l&apos;acceptation et transforme la souffrance en sagesse. Les voyants vous guident avec bienveillance vers la lumière après la tempête.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Combien de temps dure un chagrin d&apos;amour en moyenne ?</h3>
              <p className="text-gray-700 leading-relaxed">La règle empirique est d&apos;environ un mois de guérison par année de relation, mais le tarot personnalise ce timing. Une relation d&apos;un an nécessite 2-4 mois de guérison, tandis qu&apos;une relation de 5 ans peut demander 8-12 mois. Le travail intérieur, l&apos;accompagnement spirituel et le soutien de l&apos;entourage accélèrent considérablement le processus. Le voyant vous donne un calendrier réaliste basé sur votre énergie actuelle.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Le tarot peut-il expliquer pourquoi mon couple s&apos;est séparé ?</h3>
              <p className="text-gray-700 leading-relaxed">Absolument. Le tarot révèle les causes profondes souvent invisibles : incompatibilité karmique, leçons de vie à intégrer, schémas relationnels répétitifs, interférences extérieures, ou timing de vie différent. Comprendre ces raisons spirituelles aide à ne pas répéter les mêmes erreurs dans vos futures relations. Le voyant vous aide à identifier vos patterns amoureux pour les transformer et construire des relations plus saines.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quand serai-je prêt(e) à aimer à nouveau après une rupture ?</h3>
              <p className="text-gray-700 leading-relaxed">Le tarot identifie le moment précis où votre cœur sera à nouveau ouvert. Les signes révélés par les cartes incluent : pensées neutres envers votre ex, retrouvailles avec votre joie de vivre, curiosité pour de nouvelles rencontres, et cessation des comparaisons. L&apos;astrologie complète cette analyse en identifiant les transits favorables aux nouveaux départs amoureux, souvent 6-12 mois après la rupture pour les relations durables.</p>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">💬 Besoin de Guidance ?</h2>
          <p className="text-lg mb-6 opacity-90">Consultez un voyant pour comprendre votre rupture et entamer votre guérison</p>
          <a href="#consultation" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition inline-block">Consultation Rupture</a>
        </div>
      </div>
    </main>
  );
}
