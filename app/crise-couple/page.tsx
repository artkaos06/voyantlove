import type { Metadata } from 'next';
import Link from 'next/link';
import { getWebPageSchema, getBreadcrumbSchema, getOrganizationSchema, getFAQSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';

export const metadata: Metadata = {
  title: 'Crise de Couple : Solutions et Guidance | Voyance',
  description: 'Surmonter les crises de couple : infidélité, jalousie, communication. Solutions selon le tarot et la voyance.',
  alternates: { canonical: 'https://voyantlove.fr/crise-couple' },
};

export default function CriseCoupleHubPage() {
  const webPageSchema = getWebPageSchema({
    title: 'Crise de Couple : Solutions et Guidance | Voyance',
    description: 'Surmonter les crises de couple : infidélité, jalousie, communication. Solutions selon le tarot et la voyance.',
    url: 'https://voyantlove.fr/crise-couple',
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Crise de Couple', url: 'https://voyantlove.fr/crise-couple' },
  ]);

  const organizationSchema = getOrganizationSchema();

  const faqItems = [
    {
      question: 'Comment savoir si mon couple traverse une crise passagère ou définitive ?',
      answer: 'Une crise passagère se caractérise par des **tensions temporaires** liées à un événement précis : déménagement, naissance, stress professionnel. Les deux partenaires conservent une **volonté de dialogue** et un attachement sincère. En revanche, une **rupture définitive** s\'installe quand l\'indifférence remplace le conflit, quand les **projets communs** disparaissent et que le **désir de reconstruction** s\'éteint. Le tarot relationnel permet d\'identifier les **énergies dominantes** du couple et de distinguer une phase de transformation d\'un point de non-retour. Un tirage ciblé révèle si les **blocages émotionnels** sont surmontables ou profondément enracinés.',
    },
    {
      question: 'La voyance peut-elle aider à résoudre les problèmes de couple ?',
      answer: 'La **voyance relationnelle** offre un éclairage unique sur les **dynamiques invisibles** qui régissent le couple. Grâce au **tirage de tarot**, le voyant identifie les **schémas répétitifs**, les blessures non exprimées et les **attentes insatisfaites** de chaque partenaire. Cette guidance ne remplace pas une **thérapie de couple**, mais elle la complète en révélant les **causes profondes** des conflits. La consultation aide à comprendre le **timing émotionnel** de la relation : certaines périodes favorisent la réconciliation tandis que d\'autres appellent à la patience. Les arcanes du tarot éclairent le chemin vers une **communication restaurée** et un équilibre affectif durable.',
    },
    {
      question: 'Quels sont les signes qu\'un couple peut surmonter une crise ?',
      answer: 'Plusieurs **indicateurs positifs** montrent qu\'un couple possède les ressources pour traverser une crise. Le premier signe est la **volonté mutuelle** de comprendre l\'autre et de remettre en question ses propres comportements. Le maintien d\'un **respect fondamental**, même pendant les disputes, témoigne d\'un lien solide. Les couples résilients conservent des **souvenirs heureux** qu\'ils valorisent et expriment une **vision commune** de l\'avenir. En tarot, les cartes comme **Le Soleil** ou **L\'Étoile** dans un tirage relationnel confirment un potentiel de renouveau. La présence de **tendresse résiduelle** et la capacité à exprimer sa vulnérabilité sont des fondations essentielles pour la reconstruction.',
    },
    {
      question: 'Comment le tarot aide-t-il à comprendre les blocages dans un couple ?',
      answer: 'Le **tarot relationnel** utilise des tirages spécifiques comme le **tirage en croix** ou le **tirage des partenaires** pour cartographier les **blocages émotionnels** du couple. Chaque carte représente une **énergie psychique** : la **Lune** révèle les peurs cachées, la **Tour** signale un bouleversement nécessaire, tandis que le **Pendu** indique un besoin de lâcher-prise. Le tarologue analyse la position des **arcanes majeurs** et mineurs pour identifier qui porte le poids du conflit et quelles **blessures passées** alimentent les tensions actuelles. Cette lecture symbolique offre un **miroir objectif** de la relation, permettant aux partenaires de prendre conscience de leurs **mécanismes défensifs** inconscients.',
    },
  ];

  const faqSchema = getFAQSchema(faqItems);

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <header className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Accueil</Link>
          <h1 className="text-5xl font-bold mb-6">⚠️ Crise de Couple</h1>
          <p className="text-2xl opacity-95 mb-8">Solutions et Guidance pour Surmonter les Problèmes</p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Le tarot aide à résoudre infidélité, jalousie et problèmes de communication.</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <EEATSignal colorScheme="orange" method="Tarot relationnel et guidance de couple" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🗺️ Résoudre les Crises</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/crise-couple/infidelite-couple" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-red-500">
              <div className="text-4xl mb-4">💔</div>
              <h3 className="text-2xl font-bold mb-3">Infidélité Couple</h3>
              <p className="text-gray-600 mb-4">Découvrir et surmonter une infidélité selon le tarot.</p>
              <span className="text-red-600 font-semibold">Lire →</span>
            </Link>

            <Link href="/crise-couple/jalousie-excessive" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-yellow-500">
              <div className="text-4xl mb-4">😠</div>
              <h3 className="text-2xl font-bold mb-3">Jalousie Excessive</h3>
              <p className="text-gray-600 mb-4">Gérer et guérir la jalousie maladive dans le couple.</p>
              <span className="text-yellow-600 font-semibold">Lire →</span>
            </Link>

            <Link href="/crise-couple/problemes-communication-couple" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-blue-500">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-3">Problèmes Communication</h3>
              <p className="text-gray-600 mb-4">Rétablir le dialogue et la compréhension mutuelle.</p>
              <span className="text-blue-600 font-semibold">Lire →</span>
            </Link>

            <Link href="/crise-couple/sauver-son-couple" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-green-500">
              <div className="text-4xl mb-4">🛟</div>
              <h3 className="text-2xl font-bold mb-3">Sauver son Couple</h3>
              <p className="text-gray-600 mb-4">Stratégies pour sauver votre relation avant la rupture.</p>
              <span className="text-green-600 font-semibold">Lire →</span>
            </Link>

            <Link href="/crise-couple/dependance-affective" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-purple-500">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-2xl font-bold mb-3">Dépendance Affective</h3>
              <p className="text-gray-600 mb-4">Se libérer de la dépendance affective selon le tarot.</p>
              <span className="text-purple-600 font-semibold">Lire →</span>
            </Link>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions Fréquentes sur les Crises de Couple</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment savoir si mon couple traverse une crise passagère ou définitive ?</h3>
              <p className="text-gray-700 leading-relaxed">Une crise passagère se caractérise par des <strong>tensions temporaires</strong> liées à un événement précis : déménagement, naissance, stress professionnel. Les deux partenaires conservent une <strong>volonté de dialogue</strong> et un attachement sincère. En revanche, une <strong>rupture définitive</strong> s&apos;installe quand l&apos;indifférence remplace le conflit, quand les <strong>projets communs</strong> disparaissent et que le <strong>désir de reconstruction</strong> s&apos;éteint. Le tarot relationnel permet d&apos;identifier les <strong>énergies dominantes</strong> du couple et de distinguer une phase de transformation d&apos;un point de non-retour. Un tirage ciblé révèle si les <strong>blocages émotionnels</strong> sont surmontables ou profondément enracinés.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">La voyance peut-elle aider à résoudre les problèmes de couple ?</h3>
              <p className="text-gray-700 leading-relaxed">La <strong>voyance relationnelle</strong> offre un éclairage unique sur les <strong>dynamiques invisibles</strong> qui régissent le couple. Grâce au <strong>tirage de tarot</strong>, le voyant identifie les <strong>schémas répétitifs</strong>, les blessures non exprimées et les <strong>attentes insatisfaites</strong> de chaque partenaire. Cette guidance ne remplace pas une <strong>thérapie de couple</strong>, mais elle la complète en révélant les <strong>causes profondes</strong> des conflits. La consultation aide à comprendre le <strong>timing émotionnel</strong> de la relation : certaines périodes favorisent la réconciliation tandis que d&apos;autres appellent à la patience. Les arcanes du tarot éclairent le chemin vers une <strong>communication restaurée</strong> et un équilibre affectif durable.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quels sont les signes qu&apos;un couple peut surmonter une crise ?</h3>
              <p className="text-gray-700 leading-relaxed">Plusieurs <strong>indicateurs positifs</strong> montrent qu&apos;un couple possède les ressources pour traverser une crise. Le premier signe est la <strong>volonté mutuelle</strong> de comprendre l&apos;autre et de remettre en question ses propres comportements. Le maintien d&apos;un <strong>respect fondamental</strong>, même pendant les disputes, témoigne d&apos;un lien solide. Les couples résilients conservent des <strong>souvenirs heureux</strong> qu&apos;ils valorisent et expriment une <strong>vision commune</strong> de l&apos;avenir. En tarot, les cartes comme <strong>Le Soleil</strong> ou <strong>L&apos;Étoile</strong> dans un tirage relationnel confirment un potentiel de renouveau. La présence de <strong>tendresse résiduelle</strong> et la capacité à exprimer sa vulnérabilité sont des fondations essentielles pour la reconstruction.</p>
            </div>
            <div className="pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment le tarot aide-t-il à comprendre les blocages dans un couple ?</h3>
              <p className="text-gray-700 leading-relaxed">Le <strong>tarot relationnel</strong> utilise des tirages spécifiques comme le <strong>tirage en croix</strong> ou le <strong>tirage des partenaires</strong> pour cartographier les <strong>blocages émotionnels</strong> du couple. Chaque carte représente une <strong>énergie psychique</strong> : la <strong>Lune</strong> révèle les peurs cachées, la <strong>Tour</strong> signale un bouleversement nécessaire, tandis que le <strong>Pendu</strong> indique un besoin de lâcher-prise. Le tarologue analyse la position des <strong>arcanes majeurs</strong> et mineurs pour identifier qui porte le poids du conflit et quelles <strong>blessures passées</strong> alimentent les tensions actuelles. Cette lecture symbolique offre un <strong>miroir objectif</strong> de la relation, permettant aux partenaires de prendre conscience de leurs <strong>mécanismes défensifs</strong> inconscients.</p>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">⚠️ Consultation Crise</h2>
          <p className="text-lg mb-6">Guidance pour surmonter votre crise de couple</p>
          <a href="#consultation" className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition inline-block">Consultation</a>
        </div>
      </div>
    </main>
  );
}
