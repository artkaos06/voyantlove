import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema, getAuthorSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';

export const metadata: Metadata = {
  title: 'Comment Savoir si C\'est le Vrai Amour | Voyance',
  description: 'Découvrez les signes du vrai amour grâce à la voyance et au tarot. Apprenez à distinguer l\'amour authentique de l\'attachement ou de la passion éphémère.',
  keywords: ['savoir si c\'est l\'amour', 'vrai amour signes', 'est-ce de l\'amour', 'reconnaître le vrai amour', 'voyance amour'],
  alternates: { canonical: 'https://www.voyantlove.fr/sentiments/savoir-si-cest-lamour/' },
};

export default function SavoirSiCestLamourPage() {
  const articleSchema = getArticleSchema({
    title: 'Comment Savoir si C\'est le Vrai Amour',
    description: 'Découvrez les signes du vrai amour grâce à la voyance et au tarot. Apprenez à distinguer l\'amour authentique de l\'attachement ou de la passion éphémère.',
    url: 'https://www.voyantlove.fr/sentiments/savoir-si-cest-lamour/',
    datePublished: '2026-03-22',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['savoir si c\'est l\'amour', 'vrai amour signes', 'est-ce de l\'amour', 'reconnaître le vrai amour', 'voyance amour'],
  });

  const faqSchema = getFAQSchema([
    {
      question: 'Comment le tarot peut-il révéler si c\'est le vrai amour ?',
      answer: 'Le tarot amoureux analyse les énergies profondes de votre relation à travers des arcanes spécifiques. L\'Amoureux, la carte par excellence du choix du coeur, révèle la sincérité des sentiments. L\'Impératrice indique un amour nourricier et fertile, tandis que le Soleil confirme un bonheur authentique et durable. Un tirage relationnel en croix examine les sentiments de chaque partenaire, les dynamiques inconscientes et le potentiel à long terme. La voyance complète cette lecture en captant les énergies subtiles que les cartes seules ne suffisent pas toujours à exprimer. C\'est la combinaison des deux qui offre la vision la plus juste.',
    },
    {
      question: 'Quelle est la différence entre le vrai amour et la dépendance affective ?',
      answer: 'Le vrai amour se caractérise par la liberté : vous aimez l\'autre sans chercher à le posséder ni à combler un vide intérieur. La dépendance affective, en revanche, crée une angoisse constante de perdre l\'autre, une jalousie excessive et un besoin permanent de réassurance. En voyance, ces deux énergies apparaissent très différemment dans le tarot. L\'amour authentique se manifeste par des cartes lumineuses comme l\'Étoile ou le Monde, tandis que la dépendance se traduit par le Diable ou la Lune inversée. Un voyant expérimenté distingue immédiatement ces signatures énergétiques lors d\'une consultation.',
    },
    {
      question: 'Peut-on tomber amoureux plusieurs fois dans sa vie ?',
      answer: 'Absolument. L\'astrologie et la voyance confirment que chaque être humain traverse plusieurs cycles amoureux au cours de sa vie, chacun correspondant à une étape de son évolution spirituelle. Les transits de Vénus et de Jupiter marquent ces périodes de renouveau sentimental. Le vrai amour n\'est pas limité à une seule personne : il se manifeste sous différentes formes selon votre maturité émotionnelle. Certaines âmes se retrouvent d\'une vie à l\'autre, créant des connexions karmiques particulièrement intenses que la voyance permet d\'identifier et de comprendre.',
    },
    {
      question: 'Quels sont les signes astrologiques les plus compatibles pour le vrai amour ?',
      answer: 'La compatibilité amoureuse ne se limite pas au signe solaire. La synastrie complète examine la position de Vénus, Mars, la Lune et l\'ascendant dans les deux thèmes natals. Les aspects harmonieux entre Vénus et Mars créent une attraction puissante, tandis que les connexions Lune-Lune assurent la compréhension émotionnelle profonde. Les signes d\'eau avec les signes de terre forment souvent des unions stables et nourrissantes. Les signes de feu et d\'air partagent une énergie dynamique et stimulante. Un voyant astrologue analyse l\'ensemble de ces configurations pour évaluer le potentiel réel d\'une relation.',
    },
  ]);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Sentiments', url: 'https://www.voyantlove.fr/sentiments/' },
    { name: 'Savoir si C\'est l\'Amour', url: 'https://www.voyantlove.fr/sentiments/savoir-si-cest-lamour/' },
  ]);

  const authorSchema = getAuthorSchema();

  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      <header className="bg-gradient-to-r from-pink-500 via-pink-600 to-rose-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/sentiments" className="text-white/80 hover:text-white mb-4 inline-block">&larr; Sentiments</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">💗 Comment Savoir si C&apos;est le Vrai Amour</h1>
          <p className="text-xl opacity-95 mb-6">Les signes qui ne trompent pas, éclairés par la voyance et le tarot</p>
          <a href="#consultation" className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition inline-block">Consultation Sentiments</a>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">⭐</div><div className="text-2xl font-bold text-pink-600">4.9/5</div><div className="text-sm text-gray-600">312 avis</div></div>
          <div><div className="text-3xl mb-1">💕</div><div className="text-2xl font-bold text-pink-600">89%</div><div className="text-sm text-gray-600">Clarté obtenue</div></div>
          <div><div className="text-3xl mb-1">🔮</div><div className="text-2xl font-bold text-pink-600">20 min</div><div className="text-sm text-gray-600">Consultation</div></div>
          <div><div className="text-3xl mb-1">✨</div><div className="text-2xl font-bold text-pink-600">15 ans</div><div className="text-sm text-gray-600">Expérience</div></div>
        </div>

        <EEATSignal
          colorScheme="pink"
          method="Tarot des sentiments amoureux"
        />

        <article className="bg-pink-50 border-l-4 border-pink-500 rounded-xl shadow-md p-8 mb-8">
          <p className="text-lg leading-relaxed mb-4">
            <strong>Savoir si c&apos;est le vrai amour</strong> est l&apos;une des questions les plus profondes que l&apos;on puisse se poser. Entre la <strong>passion dévorante</strong> des premiers instants et l&apos;<strong>attachement émotionnel</strong> qui se construit avec le temps, il n&apos;est pas toujours facile de distinguer un <strong>amour authentique</strong> d&apos;une simple attirance ou d&apos;une <strong>dépendance affective</strong> déguisée en sentiments.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            La <strong>voyance amoureuse</strong> et le <strong>tarot des sentiments</strong> offrent un éclairage unique sur la nature réelle de vos émotions. Les cartes révèlent ce que votre coeur sait déjà mais que votre esprit refuse parfois d&apos;entendre. Un <strong>tirage amoureux</strong> bien interprété distingue clairement l&apos;<strong>amour véritable</strong> de l&apos;illusion.
          </p>
          <p className="text-lg leading-relaxed">
            Ce que vous ressentez a une signature énergétique distincte. La <strong>voyance</strong> capte cette énergie et vous aide à y voir clair, pour que vous puissiez avancer en confiance dans votre <strong>vie sentimentale</strong>. Explorez nos guidances sur <Link href="/" className="text-pink-600 hover:text-pink-800 underline font-medium">VoyantLove</Link> pour une vision complète.
          </p>
        </article>

        <VoyantQuickCTA topic="sentiments" source="savoir-si-cest-lamour-early" />

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">💖 Les 7 Signes du Vrai Amour selon la Voyance</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Le vrai amour se reconnaît à des signes précis que la voyance et le tarot identifient avec une grande clarté : la paix intérieure, la liberté de l&apos;autre, la croissance mutuelle et la résonance énergétique profonde.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Quand un consultant vient me voir en se demandant si ce qu&apos;il ressent est du <strong>vrai amour</strong>, les cartes ne mentent jamais. Voici les sept signes que la <strong>voyance</strong> identifie systématiquement dans les relations authentiques, des marqueurs qui transcendent les apparences et touchent à l&apos;essence même du lien.
          </p>
          <div className="space-y-4">
            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-pink-700">1. La Paix Intérieure Profonde</h3>
              <p className="text-gray-700">Le <strong>vrai amour</strong> ne génère pas d&apos;anxiété permanente. Contrairement à la <strong>passion obsessionnelle</strong>, il apporte un sentiment de sécurité émotionnelle et de sérénité. Dans le <strong>tarot</strong>, cette qualité se manifeste par l&apos;Étoile ou le Monde &mdash; des cartes de plénitude et d&apos;accomplissement. Vous ne passez pas vos journées à douter ou à guetter chaque message. L&apos;amour authentique est un ancrage, pas une tempête. Si vous ressentez cette paix en pensant à l&apos;autre, c&apos;est un signe fort que vos <strong>sentiments amoureux</strong> sont véritables et durables.</p>
            </div>
            <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-rose-700">2. La Liberté d&apos;Être Soi-Même</h3>
              <p className="text-gray-700">Dans un <strong>amour véritable</strong>, vous n&apos;avez pas besoin de porter un masque. Vous pouvez montrer vos vulnérabilités sans crainte du jugement. La <strong>voyance amoureuse</strong> révèle souvent que les couples les plus solides sont ceux où chaque partenaire se sent libre d&apos;être authentique. L&apos;arcane de la Tempérance symbolise cet équilibre parfait entre deux êtres qui se complètent sans se contraindre. C&apos;est l&apos;inverse de la <Link href="/sentiments/relation-toxique" className="text-pink-600 hover:text-pink-800 underline font-medium">relation toxique</Link> où l&apos;on s&apos;efface pour plaire.</p>
            </div>
            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-pink-700">3. L&apos;Envie de Grandir Ensemble</h3>
              <p className="text-gray-700">Le <strong>vrai amour</strong> vous pousse à devenir la meilleure version de vous-même, non pas par peur de perdre l&apos;autre, mais par inspiration. La carte du Soleil dans un <strong>tirage amoureux</strong> révèle cette dynamique de <strong>croissance mutuelle</strong>. Votre partenaire devient votre allié dans l&apos;évolution personnelle. Vous célébrez ses réussites sans jalousie et vous vous soutenez mutuellement dans les épreuves. C&apos;est un <strong>amour</strong> qui élève, qui transforme positivement chaque aspect de votre existence.</p>
            </div>
            <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-rose-700">4. La Résonance Énergétique</h3>
              <p className="text-gray-700">En <strong>voyance</strong>, on perçoit une vibration particulière entre deux personnes unies par un <strong>amour authentique</strong>. Cette <strong>connexion karmique</strong> se manifeste par des synchronicités, une compréhension intuitive mutuelle, et un sentiment de reconnaissance profonde &mdash; comme si vous vous étiez toujours connus. Le <strong>tarot</strong> capte cette résonance à travers la carte des Amoureux, qui ne parle pas seulement d&apos;attirance mais d&apos;une union sacrée entre deux âmes. Consultez notre guide sur la <Link href="/sentiments/compatibilite-amoureuse" className="text-pink-600 hover:text-pink-800 underline font-medium">compatibilité amoureuse</Link> pour approfondir ce sujet.</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-8 mb-8 border-2 border-pink-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🔮 Ce que le Tarot Révèle sur Vos Sentiments</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Chaque arcane du tarot porte un message spécifique sur la nature de vos sentiments. Les cartes majeures distinguent clairement l&apos;amour vrai de l&apos;illusion, de la passion passagère ou de la dépendance émotionnelle.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Le <strong>tarot des sentiments</strong> fonctionne comme un miroir de votre âme. Il ne vous dit pas ce que vous voulez entendre, mais ce que vous avez besoin de savoir. Chaque carte porte un message spécifique sur la nature de ce que vous ressentez, et un <strong>voyant expérimenté</strong> sait décoder ces messages avec précision et bienveillance.
          </p>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-l-4 border-pink-500">
              <h3 className="font-bold mb-2 text-pink-700">L&apos;Amoureux : Le Choix du Coeur</h3>
              <p className="text-gray-700">Cette carte confirme que vos <strong>sentiments amoureux</strong> sont sincères et que vous vous trouvez face à un choix déterminant. Elle indique un <strong>amour vrai</strong> qui demande un engagement conscient. L&apos;Amoureux rappelle que le véritable amour est aussi un acte de volonté, pas seulement un élan du coeur. Quand cette carte apparaît dans un tirage, elle invite à écouter sa voix intérieure plutôt que les avis extérieurs pour prendre la bonne décision.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-rose-500">
              <h3 className="font-bold mb-2 text-rose-700">Le Soleil : Bonheur Lumineux</h3>
              <p className="text-gray-700">Le Soleil dans un <strong>tirage amoureux</strong> est le signe le plus positif qui soit. Il révèle un <strong>amour</strong> épanouissant, joyeux, transparent. Pas de zones d&apos;ombre ni de non-dits. Si cette carte apparaît en position de sentiments, vous tenez quelque chose de rare et précieux. C&apos;est la confirmation que votre relation porte en elle les graines d&apos;un bonheur durable et authentique.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-pink-500">
              <h3 className="font-bold mb-2 text-pink-700">La Lune : Attention aux Illusions</h3>
              <p className="text-gray-700">La Lune met en garde contre les <strong>illusions amoureuses</strong>. Ce que vous prenez pour de l&apos;<strong>amour</strong> pourrait être de la projection, du fantasme ou de la <strong>dépendance affective</strong>. Cette carte invite à regarder la réalité en face avant de s&apos;engager plus profondément. Elle ne signifie pas l&apos;absence de sentiments, mais la nécessité de clarifier ce que vous ressentez vraiment, au-delà des apparences et des désirs inconscients.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-rose-500">
              <h3 className="font-bold mb-2 text-rose-700">L&apos;Étoile : Espoir et Renouveau</h3>
              <p className="text-gray-700">L&apos;Étoile signale un <strong>amour</strong> porteur d&apos;espoir, souvent après une période difficile. Si vous sortez d&apos;une <Link href="/rupture/chagrin-damour" className="text-pink-600 hover:text-pink-800 underline font-medium">peine de coeur</Link>, cette carte indique que ce nouvel <strong>amour</strong> est une chance de renouveau authentique. Elle symbolise la guérison émotionnelle et l&apos;ouverture du coeur à une connexion plus profonde et plus mature que les précédentes.</p>
            </div>
          </div>
        </section>

        <VoyantRecommendations topic="sentiments" limit={3} showOnlineFirst={true} source="savoir-si-cest-lamour-mid" />

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">⚡ Amour ou Dépendance : Comment Faire la Différence</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Distinguer l&apos;amour authentique de la dépendance affective est essentiel pour construire une relation saine. La voyance identifie des marqueurs énergétiques très différents entre ces deux dynamiques relationnelles.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            L&apos;une des confusions les plus fréquentes en <strong>voyance amoureuse</strong> concerne la distinction entre <strong>amour véritable</strong> et <strong>dépendance affective</strong>. Beaucoup de consultants viennent avec une intensité émotionnelle qu&apos;ils confondent avec la profondeur des sentiments. Or, l&apos;intensité n&apos;est pas synonyme d&apos;authenticité.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-lg mb-3 text-green-700">Signes du Vrai Amour</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Vous respectez l&apos;espace et la liberté de l&apos;autre</li>
                <li>Vous vous sentez en <strong>sécurité émotionnelle</strong></li>
                <li>Votre bonheur ne dépend pas uniquement de l&apos;autre</li>
                <li>Vous acceptez ses imperfections avec tendresse</li>
                <li>La communication est ouverte et honnête</li>
                <li>Vous envisagez l&apos;avenir avec sérénité</li>
              </ul>
            </div>
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-lg mb-3 text-red-700">Signes de Dépendance Affective</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Angoisse permanente de perdre l&apos;autre</li>
                <li><strong>Jalousie excessive</strong> et besoin de contrôle</li>
                <li>Vous vous oubliez pour plaire à votre partenaire</li>
                <li>Montagnes russes émotionnelles constantes</li>
                <li>Peur de la solitude plus que véritable <strong>amour</strong></li>
                <li>Tendance à idéaliser l&apos;autre personne</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Si vous reconnaissez des signes de <strong>dépendance affective</strong>, la <strong>voyance</strong> peut vous aider à comprendre l&apos;origine de ces schémas et à vous en libérer. Consultez notre article dédié sur la <Link href="/crise-couple/dependance-affective" className="text-pink-600 hover:text-pink-800 underline font-medium">dépendance affective en couple</Link> pour aller plus loin dans cette compréhension.
          </p>
        </section>

        <section className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-8 mb-8 border-2 border-rose-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🌟 Les Étapes pour Confirmer Vos Sentiments</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Confirmer la nature de vos sentiments passe par un processus en cinq étapes : l&apos;introspection honnête, la consultation du tarot, l&apos;analyse de la compatibilité, l&apos;écoute du corps et la projection dans l&apos;avenir.</p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-pink-600">1</div>
              <div>
                <h3 className="font-bold text-lg mb-2">L&apos;Introspection Honnête</h3>
                <p className="text-gray-700">Avant toute <strong>consultation de voyance</strong>, prenez le temps de vous interroger sincèrement. Aimez-vous cette personne pour ce qu&apos;elle est réellement, ou pour ce qu&apos;elle vous apporte ? Le <strong>vrai amour</strong> existe indépendamment de ce que l&apos;autre fait pour vous. Posez-vous la question : si cette personne ne pouvait plus rien vous offrir matériellement ou socialement, l&apos;aimeriez-vous toujours ? La réponse honnête à cette question est un premier indicateur puissant.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-pink-600">2</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Le Tirage de Clarification Sentimentale</h3>
                <p className="text-gray-700">Un <strong>tirage tarot</strong> spécifique permet de révéler la nature exacte de vos <strong>sentiments</strong>. Le voyant dispose les cartes selon un schéma qui distingue les émotions conscientes des courants inconscients. Cette lecture multi-niveaux dépasse ce que l&apos;analyse rationnelle peut offrir seule, en accédant à des vérités émotionnelles enfouies sous les conditionnements et les peurs.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-pink-600">3</div>
              <div>
                <h3 className="font-bold text-lg mb-2">L&apos;Analyse de Compatibilité Profonde</h3>
                <p className="text-gray-700">La <Link href="/sentiments/compatibilite-amoureuse" className="text-pink-600 hover:text-pink-800 underline font-medium">compatibilité amoureuse</Link> va bien au-delà des signes du zodiaque. Une <strong>synastrie</strong> complète analyse les interactions entre vos deux thèmes natals pour révéler si votre connexion a des fondations solides. Les aspects entre vos Lunes respectives indiquent la <strong>compatibilité émotionnelle</strong>, tandis que Vénus et Mars révèlent l&apos;alchimie physique et le désir mutuel.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-pink-600">4</div>
              <div>
                <h3 className="font-bold text-lg mb-2">L&apos;Écoute du Corps et de l&apos;Intuition</h3>
                <p className="text-gray-700">Votre corps ne ment jamais. Le <strong>vrai amour</strong> se manifeste par une sensation de chaleur, de détente, d&apos;expansion dans la poitrine. La <strong>dépendance</strong>, elle, se traduit par une boule au ventre, une tension permanente, un noeud dans la gorge. Les <strong>voyants</strong> expérimentés savent que l&apos;intelligence du corps précède celle de l&apos;esprit. Apprenez à écouter ces signaux physiques, ils sont un guide fiable vers la vérité de vos <strong>sentiments</strong>.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-pink-600">5</div>
              <div>
                <h3 className="font-bold text-lg mb-2">La Projection dans l&apos;Avenir</h3>
                <p className="text-gray-700">Pouvez-vous imaginer votre vie avec cette personne dans cinq, dix, vingt ans ? Non pas dans un fantasme idéalisé, mais dans la réalité du quotidien, avec ses hauts et ses bas ? Le <strong>tarot</strong> explore cette dimension temporelle en révélant les potentiels à long terme de votre relation. Un <strong>voyant</strong> peut percevoir les défis futurs et les ressources dont vous disposez ensemble pour les traverser. Découvrez aussi notre guide sur l&apos;<Link href="/sentiments/avenir-amoureux" className="text-pink-600 hover:text-pink-800 underline font-medium">avenir amoureux</Link> pour explorer votre destinée sentimentale.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🌙 Quand le Doute Persiste : Que Faire ?</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Le doute amoureux est normal et même sain. Il devient problématique quand il vous paralyse. La voyance offre un espace de clarification pour transformer l&apos;incertitude en compréhension.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Douter de ses <strong>sentiments</strong> ne signifie pas que l&apos;<strong>amour</strong> est absent. Parfois, le doute est le signe d&apos;un esprit qui cherche à protéger un coeur déjà blessé par le passé. Les <strong>expériences amoureuses</strong> précédentes laissent des traces qui peuvent brouiller votre perception du présent. La question essentielle n&apos;est pas &laquo; est-ce que j&apos;aime ? &raquo; mais &laquo; est-ce que je me permets d&apos;aimer ? &raquo;.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Un <strong>voyant</strong> perçoit ces blessures anciennes qui interfèrent avec vos émotions actuelles. Le <strong>tarot</strong> peut révéler des <strong>schémas inconscients</strong> hérités de l&apos;enfance ou de relations passées : peur de l&apos;abandon, peur de l&apos;engagement, tendance à fuir le bonheur par auto-sabotage. Comprendre ces mécanismes est la première étape pour s&apos;en libérer et accueillir enfin le <strong>vrai amour</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Si la question &laquo; <Link href="/sentiments/maime-t-il-elle" className="text-pink-600 hover:text-pink-800 underline font-medium">m&apos;aime-t-il ou m&apos;aime-t-elle</Link> &raquo; vous hante, c&apos;est peut-être parce que vous n&apos;osez pas encore croire que vous méritez d&apos;être aimé(e) pleinement. La <strong>voyance amoureuse</strong> vous aide à lever ce voile et à accueillir les <strong>sentiments</strong> que la vie vous offre. Chaque consultation est une invitation à regarder plus loin que la surface, vers la vérité lumineuse de votre coeur.
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">❓ Questions Fréquentes</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Retrouvez les réponses aux questions les plus posées sur le vrai amour, le tarot des sentiments et la voyance amoureuse.</p>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment le tarot peut-il révéler si c&apos;est le vrai amour ?</h3>
              <p className="text-gray-700 leading-relaxed">Le <strong>tarot amoureux</strong> analyse les énergies profondes de votre relation à travers des arcanes spécifiques. L&apos;Amoureux, la carte par excellence du choix du coeur, révèle la sincérité des <strong>sentiments</strong>. L&apos;Impératrice indique un <strong>amour</strong> nourricier et fertile, tandis que le Soleil confirme un bonheur authentique et durable. Un tirage relationnel en croix examine les sentiments de chaque partenaire, les dynamiques inconscientes et le potentiel à long terme. La <strong>voyance</strong> complète cette lecture en captant les énergies subtiles que les cartes seules ne suffisent pas toujours à exprimer.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quelle est la différence entre le vrai amour et la dépendance affective ?</h3>
              <p className="text-gray-700 leading-relaxed">Le <strong>vrai amour</strong> se caractérise par la liberté : vous aimez l&apos;autre sans chercher à le posséder ni à combler un vide intérieur. La <strong>dépendance affective</strong>, en revanche, crée une angoisse constante de perdre l&apos;autre, une <strong>jalousie excessive</strong> et un besoin permanent de réassurance. En <strong>voyance</strong>, ces deux énergies apparaissent très différemment dans le <strong>tarot</strong>. L&apos;<strong>amour</strong> authentique se manifeste par des cartes lumineuses comme l&apos;Étoile ou le Monde, tandis que la dépendance se traduit par le Diable ou la Lune inversée.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Peut-on tomber amoureux plusieurs fois dans sa vie ?</h3>
              <p className="text-gray-700 leading-relaxed">Absolument. L&apos;<strong>astrologie</strong> et la <strong>voyance</strong> confirment que chaque être humain traverse plusieurs cycles amoureux au cours de sa vie, chacun correspondant à une étape de son <strong>évolution spirituelle</strong>. Les transits de Vénus et de Jupiter marquent ces périodes de renouveau sentimental. Le <strong>vrai amour</strong> n&apos;est pas limité à une seule personne : il se manifeste sous différentes formes selon votre maturité émotionnelle et votre chemin de vie.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quels sont les signes astrologiques les plus compatibles pour le vrai amour ?</h3>
              <p className="text-gray-700 leading-relaxed">La <strong>compatibilité amoureuse</strong> ne se limite pas au signe solaire. La <strong>synastrie</strong> complète examine la position de Vénus, Mars, la Lune et l&apos;ascendant dans les deux thèmes natals. Les aspects harmonieux entre Vénus et Mars créent une attraction puissante, tandis que les connexions Lune-Lune assurent la compréhension émotionnelle profonde. Un <Link href="/methodes-voyance/astrologie-amoureuse" className="text-pink-600 hover:text-pink-800 underline font-medium">voyant astrologue</Link> analyse l&apos;ensemble de ces configurations pour évaluer le potentiel réel d&apos;une relation.</p>
            </div>
          </div>
        </section>

        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900">📚 Articles Connexes</h3>
          <div className="space-y-2">
            <Link href="/sentiments/maime-t-il-elle" className="block text-pink-600 hover:text-pink-800 font-medium">&rarr; M&apos;aime-t-il / M&apos;aime-t-elle Encore ?</Link>
            <Link href="/sentiments/compatibilite-amoureuse" className="block text-pink-600 hover:text-pink-800 font-medium">&rarr; Compatibilité Amoureuse</Link>
            <Link href="/sentiments/signes-il-elle-maime" className="block text-pink-600 hover:text-pink-800 font-medium">&rarr; Les Signes qu&apos;Il/Elle M&apos;Aime</Link>
          </div>
        </div>

        <VoyantFinalCTA topic="sentiments" source="savoir-si-cest-lamour-final" />
      </div>
    </main>
  );
}
