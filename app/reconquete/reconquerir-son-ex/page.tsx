import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema, getAuthorSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';

export const metadata: Metadata = {
  title: 'Reconquérir son Ex : Voyance et Tarot | Guidance Retour',
  description: 'Comment reconquérir votre ex selon la voyance et le tarot ? Découvrez le timing idéal, les étapes de reconquête et ce que votre ex ressent vraiment.',
  keywords: ['reconquérir son ex', 'reconquête amoureuse', 'retour ex', 'tarot ex', 'voyance retour'],
  alternates: { canonical: 'https://www.voyantlove.fr/reconquete/reconquerir-son-ex/' },
};

export default function ReconquerirSonExPage() {
  const articleSchema = getArticleSchema({
    title: 'Reconquérir son Ex : Voyance et Tarot | Guidance Retour',
    description: 'Comment reconquérir votre ex selon la voyance et le tarot ? Découvrez le timing idéal, les étapes de reconquête et ce que votre ex ressent vraiment.',
    url: 'https://www.voyantlove.fr/reconquete/reconquerir-son-ex/',
    datePublished: '2026-01-15',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['reconquérir son ex', 'reconquête amoureuse', 'retour ex', 'tarot ex', 'voyance retour'],
  });

  const faqSchema = getFAQSchema([
    {
      question: 'Le tarot peut-il prédire le retour de mon ex ?',
      answer: 'Le tarot révèle les énergies actuelles et les potentiels selon la trajectoire présente. Il indique si un retour est probable, les conditions nécessaires, et le timing favorable. Le libre arbitre reste déterminant : ni vous ni votre ex n\'êtes figés dans un destin immuable. Le tarot vous dit si vous devez garder espoir et agir, ou tourner la page. Un tirage de reconquête précise également les blocages émotionnels à lever et les gestes concrets à poser pour maximiser vos chances de retrouvailles.',
    },
    {
      question: 'Combien de temps de silence radio avant la reconquête ?',
      answer: 'Le silence radio idéal dure 3-4 semaines pour les ruptures courtes et 6-8 semaines pour les relations longues. Le tarot affine ce timing selon votre situation et l\'évolution émotionnelle de votre ex. Ce temps permet au manque de s\'installer et à chacun de prendre du recul. Si la rupture amoureuse a été particulièrement douloureuse, un délai plus long peut s\'avérer nécessaire. La voyance vous aide à identifier le moment précis où votre ex sera le plus réceptif à une reprise de contact, en tenant compte des transits planétaires et de l\'énergie relationnelle en cours.',
    },
    {
      question: 'Quels signes astrologiques favorisent le retour d\'un ex ?',
      answer: 'Vénus rétrograde ramène souvent d\'anciens amours dans notre vie, environ tous les 18 mois pendant une quarantaine de jours. Les transits de Vénus sur votre Soleil ou Vénus natale favorisent également les retours. La synastrie entre vos deux thèmes astraux révèle si vous êtes destinés à vous retrouver et sous quelles conditions. Un voyant analyse ces configurations pour identifier les périodes les plus propices à la reconquête. Les signes d\'eau (Cancer, Scorpion, Poissons) sont particulièrement sensibles à ces transits, tandis que les signes fixes mettent plus de temps à revenir mais le font avec davantage de conviction.',
    },
    {
      question: 'Comment connaître les vrais sentiments de mon ex ?',
      answer: 'Un voyant capte les émotions et pensées de votre ex via le tarot, la clairvoyance ou la lecture énergétique. Le tirage révèle s\'il ou elle éprouve encore de l\'amour, des regrets, de la colère, ou a tourné la page. Cette clarté vous aide à décider de votre stratégie avec discernement. Le tirage en croix et le tirage relationnel sont deux méthodes particulièrement efficaces pour sonder les sentiments cachés d\'une personne et anticiper ses prochaines actions.',
    },
  ]);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Reconquête', url: 'https://www.voyantlove.fr/reconquete/' },
    { name: 'Reconquérir son Ex', url: 'https://www.voyantlove.fr/reconquete/reconquerir-son-ex/' },
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
      <header className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/reconquete" className="text-white/80 hover:text-white mb-4 inline-block">← Reconquête</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">💜 Reconquérir son Ex</h1>
          <p className="text-xl opacity-95 mb-6">Guidance tarot et voyance pour le retour de votre ex</p>
          <a href="#consultation" className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition inline-block">Consultation Reconquête</a>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">⭐</div><div className="text-2xl font-bold text-purple-600">4.8/5</div><div className="text-sm text-gray-600">287 avis</div></div>
          <div><div className="text-3xl mb-1">✓</div><div className="text-2xl font-bold text-purple-600">Fort</div><div className="text-sm text-gray-600">Potentiel retour</div></div>
          <div><div className="text-3xl mb-1">⏰</div><div className="text-2xl font-bold text-purple-600">3-8 sem</div><div className="text-sm text-gray-600">Délai moyen</div></div>
          <div><div className="text-3xl mb-1">🔮</div><div className="text-2xl font-bold text-purple-600">15 ans</div><div className="text-sm text-gray-600">Expérience</div></div>
        </div>

        <EEATSignal
          colorScheme="purple"
          method="Tarot de la reconquête amoureuse"
        />

        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-purple-600">
          <p className="text-lg leading-relaxed mb-4">
            <strong>Reconquérir son ex</strong> après une <strong>rupture amoureuse</strong> est possible selon la <strong>voyance</strong> et le <strong>tarot</strong>. Les cartes révèlent que la majorité des couples se remettent ensemble après avoir travaillé sur les causes de la séparation. Le <strong>tarot amoureux</strong> peut vous guider sur le moment idéal pour agir et les étapes à suivre pour maximiser vos chances de succès.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            La <strong>reconquête</strong> ne signifie pas supplier ou harceler votre <strong>ex</strong>. Il s'agit d'une démarche stratégique et spirituelle basée sur l'évolution personnelle, le bon timing astrologique, et la compréhension profonde des énergies en jeu. Le <strong>tarot</strong> révèle si un retour est dans votre intérêt ou si vous devez tourner la page.
          </p>
          <p className="text-lg leading-relaxed">
            La <strong>reconquête</strong> réussit quand elle part d'un lieu d'amour authentique, pas de désespoir ou de peur de la solitude. La <strong>voyance</strong> vous aide à discerner vos vraies motivations et à agir avec sagesse. Découvrez toutes nos guidances sur <Link href="/" className="text-purple-600 hover:text-purple-800 underline font-medium">VoyantLove</Link> pour une vision complète de la voyance amoureuse.
          </p>
        </article>

        <VoyantQuickCTA topic="reconquete" source="reconquerir-son-ex-early" />

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🔮 Ce que le Tarot Révèle sur la Reconquête</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Le tarot de reconquête analyse quatre positions clés : les sentiments actuels de votre ex, les obstacles à la réconciliation, ce que vous devez changer en vous, et l'issue probable avec son timing.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Le tirage spécifique de reconquête analyse quatre positions clés pour éclairer votre situation et vos chances de succès.
          </p>
          <div className="space-y-4">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-purple-700">1. Sentiments Actuels de Votre Ex</h3>
              <p className="text-gray-700">Le tarot capte ce que votre ex ressent vraiment maintenant : amour résiduel, regrets, colère, indifférence. Cette carte est déterminante. Si vous vous demandez si <Link href="/sentiments/maime-t-il-elle" className="text-purple-600 hover:text-purple-800 underline font-medium">votre ex vous aime encore</Link>, cette position apporte une réponse claire. Les arcanes majeurs comme l'Amoureux ou la Lune révèlent des sentiments profonds, tandis que les arcanes mineurs précisent l'intensité émotionnelle et la direction que prennent ces émotions au fil du temps.</p>
            </div>
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-indigo-700">2. Obstacles à la Réconciliation</h3>
              <p className="text-gray-700">Qu'est-ce qui bloque le retour ? Fierté, nouvelle relation, blessure profonde, peur de souffrir à nouveau ? Le tarot identifie les vrais obstacles. Comprendre ces blocages est essentiel avant toute tentative de <strong>reconquête amoureuse</strong>. Parfois, la <Link href="/rupture/rupture-amoureuse" className="text-purple-600 hover:text-purple-800 underline font-medium">douleur liée à la rupture</Link> crée des barrières émotionnelles que seul un travail intérieur peut lever. Le voyant vous guide pour contourner chaque obstacle avec intelligence et respect.</p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-blue-700">3. Ce que Vous Devez Changer</h3>
              <p className="text-gray-700">Le tarot révèle votre part de responsabilité et les évolutions personnelles nécessaires pour que la relation fonctionne cette fois. Cette position met en lumière des schémas répétitifs : dépendance affective, manque de communication ou peur de l'engagement. Le <strong>développement personnel</strong> guidé par la voyance vous permet d'identifier précisément les comportements à transformer. C'est souvent cette évolution intérieure qui déclenche naturellement le <Link href="/reconquete/retour-de-lex" className="text-purple-600 hover:text-purple-800 underline font-medium">retour de l'ex</Link> dans votre vie.</p>
            </div>
            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-cyan-700">4. Issue Probable et Timing</h3>
              <p className="text-gray-700">La carte finale indique si la reconquête est probable et dans combien de temps. Elle guide votre stratégie d'action. Un tirage favorable montre souvent des cartes comme le Soleil ou le Monde, signes de renouveau et d'aboutissement. À l'inverse, la Tour ou le Diable invitent à la prudence. Consultez notre guide complet sur la question « <Link href="/reconquete/va-t-il-elle-revenir" className="text-purple-600 hover:text-purple-800 underline font-medium">va-t-il ou elle revenir</Link> » pour approfondir l'interprétation de ces messages du tarot.</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 mb-8 border-2 border-purple-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">⏰ Le Timing Idéal pour Agir</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Le timing idéal pour reconquérir son ex repose sur trois fenêtres : le silence radio initial de 3 à 8 semaines, les périodes de Vénus rétrograde tous les 18 mois, et les transits de Vénus sur votre thème natal.</p>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
              <h3 className="font-bold mb-2 text-purple-700">Silence Radio Initial (3-8 semaines)</h3>
              <p className="text-gray-700 text-sm">Aucun contact après la rupture. Permet au manque de s'installer et à chacun de prendre du recul. Durée selon longueur relation.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-pink-500">
              <h3 className="font-bold mb-2 text-pink-700">Vénus Rétrograde (Période Puissante)</h3>
              <p className="text-gray-700 text-sm">Tous les 18 mois, Vénus rétrograde ramène les anciens amours. Moment astrologique idéal pour la reconquête (40 jours).</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-indigo-500">
              <h3 className="font-bold mb-2 text-indigo-700">Transits de Vénus (Moments Favorables)</h3>
              <p className="text-gray-700 text-sm">Quand Vénus transite sur votre Soleil ou Vénus natale. Périodes d'ouverture du cœur et de réconciliation naturelle.</p>
            </div>
          </div>
        </section>

        <VoyantRecommendations topic="reconquete" limit={3} showOnlineFirst={true} source="reconquerir-son-ex-mid" />

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">✅ Les 5 Étapes de la Reconquête Réussie</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">La reconquête amoureuse suit cinq étapes clés : le silence radio complet, le travail sur soi authentique, la reprise de contact subtile, la reconstruction de la confiance, et la création d'une nouvelle relation sur des bases saines.</p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-purple-600">1</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Silence Radio Complet</h3>
                <p className="text-gray-700">Aucun contact pendant 3-8 semaines minimum. Pas de messages, likes, ou tentatives de "rester amis". Le manque doit s'installer. Cette période est cruciale pour permettre à votre <strong>ex</strong> de ressentir votre absence et de réévaluer ses sentiments. Le <strong>tarot</strong> peut vous confirmer la durée idéale de ce silence en fonction de votre situation personnelle.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-purple-600">2</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Travail sur Soi Authentique</h3>
                <p className="text-gray-700">Thérapie, développement personnel, nouveaux hobbies, sport. Devenez la meilleure version de vous-même, pas pour votre ex mais pour vous. Ce travail intérieur renforce votre <strong>énergie amoureuse</strong> et votre confiance, deux qualités que votre ex remarquera immédiatement lors de vos retrouvailles.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-purple-600">3</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Reprise de Contact Subtile</h3>
                <p className="text-gray-700">Message court et léger après le silence radio. Pas de déclaration, juste une connexion amicale. Testez la réceptivité. Beaucoup de personnes constatent les premiers signes positifs lors d'un <Link href="/reconquete/ex-qui-revient" className="text-purple-600 hover:text-purple-800 underline font-medium">ex qui revient</Link> naturellement après cette phase de recul. L'essentiel est de rester détendu(e) et de ne pas forcer la conversation.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-purple-600">4</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Reconstruction Progressive de la Confiance</h3>
                <p className="text-gray-700">Discussions honnêtes sur les causes de rupture. Chacun exprime ses besoins et ses limites. Pardon mutuel authentique. La <strong>voyance amoureuse</strong> peut éclairer les points de friction inconscients et vous aider à aborder ces sujets délicats avec tact et empathie.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-purple-600">5</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Nouvelle Relation, Pas Continuation</h3>
                <p className="text-gray-700">Ne reprenez pas là où vous étiez. Recommencez avec de nouvelles bases, nouvelles règles, nouvelle dynamique plus saine. Retrouvez l'ensemble de nos conseils dans notre rubrique <Link href="/reconquete" className="text-purple-600 hover:text-purple-800 underline font-medium">reconquête amoureuse</Link> pour bâtir un couple durable et épanoui sur des fondations solides.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-red-50 border-2 border-red-200 rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">❌ Les Erreurs à Éviter Absolument</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Les cinq erreurs fatales en reconquête sont : harceler votre ex, supplier ou implorer, culpabiliser, agir par désespoir plutôt que par amour, et ignorer les vraies causes de la rupture.</p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl text-red-500">✗</div>
              <p className="text-gray-700"><strong>Harceler votre ex</strong> : Messages répétés, stalking réseaux sociaux, apparitions "par hasard". Vous paraissez désespéré(e).</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl text-red-500">✗</div>
              <p className="text-gray-700"><strong>Supplier ou implorer</strong> : "Je ne peux pas vivre sans toi". Vous perdez votre dignité et votre attractivité.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl text-red-500">✗</div>
              <p className="text-gray-700"><strong>Culpabiliser</strong> : "Tu me dois une chance", "Après tout ce que j'ai fait". La manipulation ne fonctionne jamais.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl text-red-500">✗</div>
              <p className="text-gray-700"><strong>Agir par désespoir</strong> : Reconquérir par peur de solitude, pas par amour authentique. Voué à l'échec.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl text-red-500">✗</div>
              <p className="text-gray-700"><strong>Ignorer les vraies causes</strong> : Reprendre sans avoir résolu les problèmes fondamentaux. Même rupture garantie.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">❓ Questions Fréquentes</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Retrouvez les réponses aux questions les plus posées sur la reconquête amoureuse : fiabilité du tarot, durée du silence radio, signes astrologiques favorables et sentiments réels de votre ex.</p>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Le tarot peut-il prédire le retour de mon ex ?</h3>
              <p className="text-gray-700 leading-relaxed">Le <strong>tarot</strong> révèle les énergies actuelles et les potentiels selon la trajectoire présente. Il indique si un retour est probable, les conditions nécessaires, et le <strong>timing favorable</strong>. Le libre arbitre reste déterminant : ni vous ni votre ex n'êtes figés dans un destin immuable. Le tarot vous dit si vous devez garder espoir et agir, ou tourner la page. Un tirage de <strong>reconquête</strong> précise également les blocages émotionnels à lever et les gestes concrets à poser. Pour aller plus loin, découvrez notre analyse détaillée sur la question « <Link href="/reconquete/va-t-il-elle-revenir" className="text-purple-600 hover:text-purple-800 underline font-medium">va-t-il ou elle revenir</Link> » qui approfondit les signaux du tarot liés au retour d'un ancien partenaire.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Combien de temps de silence radio avant la reconquête ?</h3>
              <p className="text-gray-700 leading-relaxed">Le <strong>silence radio</strong> idéal dure 3-4 semaines pour les ruptures courtes et 6-8 semaines pour les relations longues. Le <strong>tarot</strong> affine ce timing selon votre situation et l'évolution émotionnelle de votre <strong>ex</strong>. Ce temps permet au manque de s'installer et à chacun de prendre du recul. Si la <Link href="/rupture/rupture-amoureuse" className="text-purple-600 hover:text-purple-800 underline font-medium">rupture amoureuse</Link> a été particulièrement douloureuse, un délai plus long peut s'avérer nécessaire. La <strong>voyance</strong> vous aide à identifier le moment précis où votre ex sera le plus réceptif à une reprise de contact, en tenant compte des transits planétaires et de l'énergie relationnelle en cours.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quels signes astrologiques favorisent le retour d'un ex ?</h3>
              <p className="text-gray-700 leading-relaxed"><strong>Vénus rétrograde</strong> ramène souvent d'anciens amours dans notre vie, environ tous les 18 mois pendant une quarantaine de jours. Les <strong>transits de Vénus</strong> sur votre Soleil ou Vénus natale favorisent également les retours. La <strong>synastrie</strong> entre vos deux thèmes astraux révèle si vous êtes destinés à vous retrouver et sous quelles conditions. Un <strong>voyant</strong> analyse ces configurations pour identifier les périodes les plus propices à la <strong>reconquête</strong>. Les signes d'eau (Cancer, Scorpion, Poissons) sont particulièrement sensibles à ces transits, tandis que les signes fixes (Taureau, Lion, Verseau, Scorpion) mettent plus de temps à revenir mais le font avec davantage de conviction.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment connaître les vrais sentiments de mon ex ?</h3>
              <p className="text-gray-700 leading-relaxed">Un <strong>voyant</strong> capte les émotions et pensées de votre <strong>ex</strong> via le <strong>tarot</strong>, la <strong>clairvoyance</strong> ou la lecture énergétique. Le tirage révèle s'il ou elle éprouve encore de l'amour, des regrets, de la colère, ou a tourné la page. Cette clarté vous aide à décider de votre stratégie avec discernement. Certains consultants se tournent vers notre analyse « <Link href="/sentiments/maime-t-il-elle" className="text-purple-600 hover:text-purple-800 underline font-medium">m'aime-t-il ou m'aime-t-elle encore</Link> » pour obtenir un éclairage complémentaire. Le tirage en croix et le tirage relationnel sont deux méthodes particulièrement efficaces pour sonder les sentiments cachés d'une personne et anticiper ses prochaines actions.</p>
            </div>
          </div>
        </section>

        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900">📚 Articles Connexes</h3>
          <div className="space-y-2">
            <Link href="/reconquete/va-t-il-elle-revenir" className="block text-purple-600 hover:text-purple-800 font-medium">→ Va-t-il/elle Revenir ?</Link>
            <Link href="/reconquete/ex-qui-revient" className="block text-purple-600 hover:text-purple-800 font-medium">→ Mon Ex qui Revient</Link>
            <Link href="/reconquete/ex-revient-silence-radio" className="block text-purple-600 hover:text-purple-800 font-medium">→ Ex qui Revient après Silence Radio</Link>
            <Link href="/reconquete/seconde-chance-amour" className="block text-purple-600 hover:text-purple-800 font-medium">→ Seconde Chance en Amour</Link>
            <Link href="/rupture/oublier-son-ex" className="block text-purple-600 hover:text-purple-800 font-medium">→ Comment Oublier son Ex</Link>
            <Link href="/sentiments/maime-t-il-elle" className="block text-purple-600 hover:text-purple-800 font-medium">→ M'aime-t-il / M'aime-t-elle Encore ?</Link>
          </div>
        </div>

        <VoyantFinalCTA topic="reconquete" source="reconquerir-son-ex-final" />
      </div>
    </main>
  );
}
