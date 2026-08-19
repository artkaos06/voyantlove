import Link from 'next/link';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import ContentPage, { contentMeta, type ContentPageConfig } from '@/components/ContentPage';

const config: ContentPageConfig = {
  title: 'Reconquérir son ex : voyance et Tarot | guidance retour',
  description: 'Comment reconquérir votre ex selon la voyance et le tarot ? Découvrez le timing idéal, les étapes de reconquête et ce que votre ex ressent vraiment.',
  url: 'https://www.voyantlove.fr/reconquete/reconquerir-son-ex/',
  keywords: ['reconquérir son ex', 'reconquête amoureuse', 'retour ex', 'tarot ex', 'voyance retour'],
  datePublished: '2026-01-15',
  dateModified: '2026-01-15',
  breadcrumb: [
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Reconquête', url: 'https://www.voyantlove.fr/reconquete/' },
    { name: 'Reconquérir son Ex', url: 'https://www.voyantlove.fr/reconquete/reconquerir-son-ex/' },
  ],
  header: {
    emoji: '💜',
    h1: 'Reconquérir son ex',
    subtitle: 'Guidance tarot et voyance pour le retour de votre ex',
    gradient: 'from-purple-600 via-purple-700 to-indigo-600',
    backLink: { href: '/reconquete/', label: 'Reconquête' },
    anchors: [
      { href: '#consultation', label: 'Consultation reconquête', primary: true },
    ],
  },
  accentText: 'text-purple-600',
  stats: [
    { icon: '⭐', value: '4.8/5', label: '287 Avis' },
    { icon: '✓', value: 'Fort', label: 'Potentiel retour' },
    { icon: '⏰', value: '3-8 sem', label: 'Délai moyen' },
    { icon: '🔮', value: '15 ans', label: 'Expérience' },
  ],
  eeat: { colorScheme: 'purple', method: 'Tarot de la reconquête amoureuse' },
  cta: { topic: 'reconquete', slug: 'reconquerir-son-ex' },
  faq: [
    {
      q: 'Le tarot peut-il prédire le retour de mon ex ?',
      a: 'Le tarot révèle les énergies actuelles et les potentiels selon la trajectoire présente. Il indique si un retour est probable, les conditions nécessaires, et le timing favorable. Le libre arbitre reste déterminant : ni vous ni votre ex n\'êtes figés dans un destin immuable. Le tarot vous dit si vous devez garder espoir et agir, ou tourner la page. Un tirage de reconquête précise également les blocages émotionnels à lever et les gestes concrets à poser pour maximiser vos chances de retrouvailles.',
    },
    {
      q: 'Combien de temps de silence radio avant la reconquête ?',
      a: 'Le silence radio idéal dure 3-4 semaines pour les ruptures courtes et 6-8 semaines pour les relations longues. Le tarot affine ce timing selon votre situation et l\'évolution émotionnelle de votre ex. Ce temps permet au manque de s\'installer et à chacun de prendre du recul. Si la rupture amoureuse a été particulièrement douloureuse, un délai plus long peut s\'avérer nécessaire. La voyance vous aide à identifier le moment précis où votre ex sera le plus réceptif à une reprise de contact, en tenant compte des transits planétaires et de l\'énergie relationnelle en cours.',
    },
    {
      q: 'Quels signes astrologiques favorisent le retour d\'un ex ?',
      a: 'Vénus rétrograde ramène souvent d\'anciens amours dans notre vie, environ tous les 18 mois pendant une quarantaine de jours. Les transits de Vénus sur votre Soleil ou Vénus natale favorisent également les retours. La synastrie entre vos deux thèmes astraux révèle si vous êtes destinés à vous retrouver et sous quelles conditions. Un voyant analyse ces configurations pour identifier les périodes les plus propices à la reconquête. Les signes d\'eau (Cancer, Scorpion, Poissons) sont particulièrement sensibles à ces transits, tandis que les signes fixes mettent plus de temps à revenir mais le font avec davantage de conviction.',
    },
    {
      q: 'Comment connaître les vrais sentiments de mon ex ?',
      a: 'Un voyant capte les émotions et pensées de votre ex via le tarot, la clairvoyance ou la lecture énergétique. Le tirage révèle s\'il ou elle éprouve encore de l\'amour, des regrets, de la colère, ou a tourné la page. Cette clarté vous aide à décider de votre stratégie avec discernement. Le tirage en croix et le tirage relationnel sont deux méthodes particulièrement efficaces pour sonder les sentiments cachés d\'une personne et anticiper ses prochaines actions.',
    },
  ],
  related: [
    { href: '/reconquete/va-t-il-elle-revenir/', label: 'Va-t-il/elle revenir ?' },
    { href: '/reconquete/ex-qui-revient/', label: 'Mon ex qui revient' },
    { href: '/reconquete/ex-revient-silence-radio/', label: 'Ex qui revient après silence radio' },
    { href: '/reconquete/seconde-chance-amour/', label: 'Seconde chance en amour' },
    { href: '/rupture/oublier-son-ex/', label: 'Comment oublier son ex' },
    { href: '/sentiments/maime-t-il-elle/', label: 'M\'aime-t-il / m\'aime-t-elle encore ?' },
  ],
};

export const metadata = contentMeta(config);

export default function ReconquerirSonExPage() {
  return (
    <ContentPage config={config}>

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

        <VoyantRecommendations topic="reconquete" limit={3} showOnlineFirst={true} source="reconquerir-son-ex-cards-top" />

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🔮 Ce que le Tarot Révèle sur la Reconquête</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Le tarot de reconquête analyse quatre positions clés : les sentiments actuels de votre ex, les obstacles à la réconciliation, ce que vous devez changer en vous, et l'issue probable avec son timing.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Le tirage spécifique de reconquête analyse quatre positions clés pour éclairer votre situation et vos chances de succès.
          </p>
          <div className="space-y-4">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-purple-700">1. Sentiments Actuels de Votre Ex</h3>
              <p className="text-gray-700">Le tarot capte ce que votre ex ressent vraiment maintenant : amour résiduel, regrets, colère, indifférence. Cette carte est déterminante. Si vous vous demandez si <Link href="/sentiments/maime-t-il-elle/" className="text-purple-600 hover:text-purple-800 underline font-medium">votre ex vous aime encore</Link>, cette position apporte une réponse claire. Les arcanes majeurs comme l'Amoureux ou la Lune révèlent des sentiments profonds, tandis que les arcanes mineurs précisent l'intensité émotionnelle et la direction que prennent ces émotions au fil du temps.</p>
            </div>
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-indigo-700">2. Obstacles à la Réconciliation</h3>
              <p className="text-gray-700">Qu'est-ce qui bloque le retour ? Fierté, nouvelle relation, blessure profonde, peur de souffrir à nouveau ? Le tarot identifie les vrais obstacles. Comprendre ces blocages est essentiel avant toute tentative de <strong>reconquête amoureuse</strong>. Parfois, la <Link href="/rupture/rupture-amoureuse/" className="text-purple-600 hover:text-purple-800 underline font-medium">douleur liée à la rupture</Link> crée des barrières émotionnelles que seul un travail intérieur peut lever. Le voyant vous guide pour contourner chaque obstacle avec intelligence et respect.</p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-blue-700">3. Ce que Vous Devez Changer</h3>
              <p className="text-gray-700">Le tarot révèle votre part de responsabilité et les évolutions personnelles nécessaires pour que la relation fonctionne cette fois. Cette position met en lumière des schémas répétitifs : dépendance affective, manque de communication ou peur de l'engagement. Le <strong>développement personnel</strong> guidé par la voyance vous permet d'identifier précisément les comportements à transformer. C'est souvent cette évolution intérieure qui déclenche naturellement le <Link href="/reconquete/retour-de-lex/" className="text-purple-600 hover:text-purple-800 underline font-medium">retour de l'ex</Link> dans votre vie.</p>
            </div>
            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-cyan-700">4. Issue Probable et Timing</h3>
              <p className="text-gray-700">La carte finale indique si la reconquête est probable et dans combien de temps. Elle guide votre stratégie d'action. Un tirage favorable montre souvent des cartes comme le Soleil ou le Monde, signes de renouveau et d'aboutissement. À l'inverse, la Tour ou le Diable invitent à la prudence. Consultez notre guide complet sur la question « <Link href="/reconquete/va-t-il-elle-revenir/" className="text-purple-600 hover:text-purple-800 underline font-medium">va-t-il ou elle revenir</Link> » pour approfondir l'interprétation de ces messages du tarot.</p>
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

        <VoyantQuickCTA topic="reconquete" source="reconquerir-son-ex-banner-mid" />

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
                <p className="text-gray-700">Message court et léger après le silence radio. Pas de déclaration, juste une connexion amicale. Testez la réceptivité. Beaucoup de personnes constatent les premiers signes positifs lors d'un <Link href="/reconquete/ex-qui-revient/" className="text-purple-600 hover:text-purple-800 underline font-medium">ex qui revient</Link> naturellement après cette phase de recul. L'essentiel est de rester détendu(e) et de ne pas forcer la conversation.</p>
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
                <p className="text-gray-700">Ne reprenez pas là où vous étiez. Recommencez avec de nouvelles bases, nouvelles règles, nouvelle dynamique plus saine. Retrouvez l'ensemble de nos conseils dans notre rubrique <Link href="/reconquete/" className="text-purple-600 hover:text-purple-800 underline font-medium">reconquête amoureuse</Link> pour bâtir un couple durable et épanoui sur des fondations solides.</p>
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

      </ContentPage>
  );
}
