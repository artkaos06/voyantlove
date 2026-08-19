import Link from 'next/link';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import ContentPage, { contentMeta, type ContentPageConfig } from '@/components/ContentPage';

const config: ContentPageConfig = {
  title: 'Sentiments non partagés : comment avancer | voyance',
  description: 'Amour non partagé : comment gérer des sentiments non réciproques. Découvrez les guidances de la voyance pour avancer et retrouver votre équilibre.',
  url: 'https://www.voyantlove.fr/sentiments/sentiments-non-partages/',
  keywords: ['amour non partagé', 'sentiments non réciproques', 'aimer sans retour', 'amour à sens unique', 'voyance sentiments'],
  datePublished: '2026-03-22',
  dateModified: '2026-03-22',
  breadcrumb: [
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Sentiments', url: 'https://www.voyantlove.fr/sentiments/' },
    { name: 'Sentiments Non Partagés', url: 'https://www.voyantlove.fr/sentiments/sentiments-non-partages/' },
  ],
  header: {
    emoji: '💔',
    h1: 'Sentiments non partagés : comment avancer',
    subtitle: 'Guidance voyance pour traverser l\'amour non réciproque et retrouver la paix',
    gradient: 'from-pink-500 via-rose-600 to-pink-700',
    backLink: { href: '/sentiments/', label: 'Sentiments' },
    anchors: [
      { href: '#consultation', label: 'Consultation sentiments', primary: true },
    ],
  },
  accentText: 'text-pink-600',
  stats: [
    { icon: '⭐', value: '4.8/5', label: '298 Avis' },
    { icon: '💪', value: '91%', label: 'Ont avancé' },
    { icon: '🔮', value: '25 min', label: 'Consultation' },
    { icon: '✨', value: '15 ans', label: 'Expérience' },
  ],
  eeat: { colorScheme: 'pink', method: 'Tarot des sentiments et guidance émotionnelle' },
  cta: { topic: 'sentiments', slug: 'sentiments-non-partages' },
  faq: [
    {
      q: 'Le tarot peut-il révéler si mes sentiments seront un jour partagés ?',
      a: 'Le tarot éclaire les potentiels et les probabilités, pas les certitudes absolues. Un tirage relationnel analyse les sentiments actuels de l\'autre personne, les obstacles qui empêchent la réciprocité, et les évolutions possibles dans les semaines ou mois à venir. Les cartes comme l\'Amoureux ou le Deux de Coupes peuvent indiquer un potentiel de réciprocité, tandis que le Cinq de Coupes ou l\'Ermite suggèrent un chemin solitaire à honorer. La voyance capte aussi les énergies en mouvement, car les sentiments ne sont jamais figés dans le temps.',
    },
    {
      q: 'Comment la voyance aide-t-elle à surmonter un amour non partagé ?',
      a: 'La voyance apporte trois choses essentielles face à un amour non réciproque. D\'abord la clarté, en révélant les véritables sentiments de l\'autre personne sans filtre ni illusion. Ensuite la compréhension karmique, en expliquant pourquoi cette situation se présente dans votre parcours d\'âme. Enfin la guidance, en éclairant le chemin vers la guérison et vers un amour qui vous correspond pleinement. Un voyant expérimenté ne se contente pas de constater la non-réciprocité : il vous aide à en comprendre le sens profond et à transformer cette épreuve en opportunité de croissance.',
    },
    {
      q: 'Faut-il avouer ses sentiments quand on aime sans retour ?',
      a: 'La réponse dépend de chaque situation. Le tarot peut vous guider sur le timing et l\'opportunité d\'une déclaration. Parfois, exprimer ses sentiments libère de leur poids même si la réponse n\'est pas celle espérée. D\'autres fois, la sagesse commande de garder le silence pour préserver une amitié précieuse ou votre propre dignité. La voyance analyse l\'énergie relationnelle entre vous deux pour déterminer si une déclaration pourrait ouvrir une porte ou en fermer une définitivement. L\'essentiel est d\'agir en alignement avec vos valeurs profondes.',
    },
    {
      q: 'Combien de temps faut-il pour guérir d\'un amour non partagé ?',
      a: 'Il n\'existe pas de durée universelle pour guérir d\'un amour à sens unique. La voyance observe que le processus dure généralement de trois à douze mois, selon la profondeur de l\'attachement et votre capacité à vous tourner vers l\'avenir. Les transits de Saturne et de Pluton marquent souvent les périodes de transformation profonde où le détachement devient possible. Le tarot peut identifier où vous en êtes dans ce cycle de guérison et les étapes restantes. La clé est de ne pas forcer le processus mais de l\'accompagner avec patience et bienveillance envers vous-même.',
    },
  ],
  related: [
    { href: '/sentiments/maime-t-il-elle/', label: 'M\'aime-t-il / m\'aime-t-elle encore ?' },
    { href: '/sentiments/pense-t-il-elle-a-moi/', label: 'Pense-t-il/elle à moi ?' },
    { href: '/rupture/chagrin-damour/', label: 'Surmonter un chagrin d\'amour' },
    { href: '/reconquete/sentiments-peuvent-ils-revenir-couple/', label: 'Les sentiments peuvent-ils revenir dans un couple ?' },
  ],
};

export const metadata = contentMeta(config);

export default function SentimentsNonPartagesPage() {

  return (
    <ContentPage config={config}>

        <article className="bg-pink-50 border-l-4 border-pink-500 rounded-xl shadow-md p-8 mb-8">
          <p className="text-lg leading-relaxed mb-4">
            <strong>Aimer sans retour</strong> est l&apos;une des épreuves les plus douloureuses de la <strong>vie sentimentale</strong>. Quand les <strong>sentiments non réciproques</strong> s&apos;installent, chaque jour devient un combat entre l&apos;espoir et la raison. Le coeur refuse d&apos;accepter ce que l&apos;esprit sait déjà, et cette tension intérieure peut devenir épuisante.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            La <strong>voyance amoureuse</strong> offre un regard lucide et bienveillant sur cette situation. Le <strong>tarot des sentiments</strong> ne cherche pas à embellir la réalité : il révèle la vérité telle qu&apos;elle est, mais avec la compassion nécessaire pour vous aider à la recevoir. Un <strong>amour non partagé</strong> n&apos;est pas une fatalité ni un signe de votre insuffisance &mdash; c&apos;est une étape de votre parcours sentimental.
          </p>
          <p className="text-lg leading-relaxed">
            Comprendre pourquoi cet <strong>amour à sens unique</strong> se manifeste dans votre vie est la première étape vers la <strong>guérison émotionnelle</strong>. La <strong>voyance</strong> éclaire les racines profondes de cette attirance et vous guide vers la libération. Retrouvez toutes nos guidances sur <Link href="/" className="text-pink-600 hover:text-pink-800 underline font-medium">VoyantLove</Link> pour accompagner votre chemin.
          </p>
        </article>

        <VoyantRecommendations topic="sentiments" limit={3} showOnlineFirst={true} source="sentiments-non-partages-cards-top" />

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🔮 Ce que le Tarot Révèle sur l&apos;Amour Non Partagé</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Le tarot des sentiments analyse les dynamiques profondes d&apos;un amour non réciproque : les raisons cachées de la non-réciprocité, les illusions à dépasser, et les chemins d&apos;évolution possibles.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Quand un consultant souffre d&apos;<strong>amour non partagé</strong>, le <strong>tarot</strong> apporte des réponses que ni les amis ni la logique ne peuvent offrir. Les cartes plongent au coeur de la dynamique relationnelle et révèlent des vérités parfois difficiles mais toujours libératrices.
          </p>
          <div className="space-y-4">
            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-pink-700">Les Sentiments Réels de l&apos;Autre</h3>
              <p className="text-gray-700">La première question que pose le <strong>tarot</strong> est : que ressent vraiment l&apos;autre personne ? Parfois, les <strong>sentiments</strong> sont présents mais refoulés par peur, par timing ou par circonstances. D&apos;autres fois, la carte du Cinq de Coupes confirme une indifférence sincère qu&apos;il faut accepter. Un <strong>voyant</strong> capte ces nuances avec précision. Si vous vous demandez ce que l&apos;autre pense de vous, notre guide &laquo; <Link href="/sentiments/pense-t-il-elle-a-moi/" className="text-pink-600 hover:text-pink-800 underline font-medium">pense-t-il/elle à moi</Link> &raquo; approfondit cette question.</p>
            </div>
            <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-rose-700">Les Obstacles à la Réciprocité</h3>
              <p className="text-gray-700">Le <strong>tarot</strong> identifie ce qui empêche la réciprocité : l&apos;autre personne est peut-être engagée ailleurs, elle traverse une période de fermeture émotionnelle, ou vos <strong>énergies</strong> ne sont tout simplement pas alignées pour une relation amoureuse. La carte de l&apos;Ermite indique souvent que l&apos;autre a besoin de solitude, tandis que le Quatre de Coupes révèle une forme de lassitude ou de désintérêt qui n&apos;a rien à voir avec votre valeur personnelle.</p>
            </div>
            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-pink-700">La Leçon Karmique</h3>
              <p className="text-gray-700">En <strong>voyance</strong>, chaque <strong>amour non partagé</strong> porte un enseignement. Peut-être cet attachement révèle-t-il une blessure d&apos;abandon ancienne, un besoin de validation extérieure, ou une difficulté à s&apos;aimer soi-même. Le <strong>tarot karmique</strong> explore ces dimensions et transforme la souffrance en compréhension. Comprendre la <strong>leçon d&apos;âme</strong> derrière cet amour impossible est souvent le déclencheur de la guérison et l&apos;ouverture vers un <strong>amour</strong> véritablement réciproque.</p>
            </div>
            <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-rose-700">Les Perspectives d&apos;Évolution</h3>
              <p className="text-gray-700">Le <strong>tarot</strong> ne se contente pas de constater : il projette les potentiels. Certaines situations de <strong>sentiments non réciproques</strong> évoluent avec le temps. Les transits planétaires, le travail intérieur et les changements de circonstances peuvent modifier l&apos;équation relationnelle. Le <strong>voyant</strong> distingue les situations vouées à rester asymétriques de celles qui portent en germe une possible <strong>réciprocité</strong> future, vous permettant ainsi de choisir entre l&apos;attente et le détachement.</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-8 mb-8 border-2 border-pink-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">💫 Pourquoi On Tombe Amoureux de la Mauvaise Personne</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">L&apos;attirance pour des personnes inaccessibles cache souvent des schémas inconscients. La voyance et l&apos;astrologie révèlent les racines profondes de ces choix amoureux répétitifs.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            L&apos;<strong>amour non partagé</strong> n&apos;est pas un accident. En <strong>voyance</strong>, on observe que les personnes qui vivent régulièrement des <strong>sentiments non réciproques</strong> suivent souvent des schémas inconscients. Ce n&apos;est pas une question de malchance mais de programmation émotionnelle profonde qu&apos;il est possible de comprendre et de transformer.
          </p>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-l-4 border-pink-500">
              <h3 className="font-bold mb-2 text-pink-700">La Blessure d&apos;Abandon</h3>
              <p className="text-gray-700">Si vous avez vécu un abandon dans l&apos;enfance &mdash; physique ou émotionnel &mdash; vous pouvez inconsciemment être attiré(e) par des personnes indisponibles. C&apos;est la façon dont votre psyché tente de &laquo; réparer &raquo; la blessure originelle en recréant la même dynamique. Le <strong>tarot</strong> révèle cette programmation à travers des cartes comme l&apos;Orphelin ou le Cinq d&apos;Épée inversé. La prise de conscience est le premier pas vers la libération de ce cycle douloureux.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-rose-500">
              <h3 className="font-bold mb-2 text-rose-700">La Peur de l&apos;Intimité Réelle</h3>
              <p className="text-gray-700">Paradoxalement, certaines personnes choisissent inconsciemment des <strong>amours impossibles</strong> pour éviter la vulnérabilité d&apos;une vraie relation. Aimer quelqu&apos;un d&apos;inaccessible est &laquo; sûr &raquo; : on souffre du manque, mais on n&apos;affronte jamais les défis de l&apos;<strong>intimité partagée</strong>. La <strong>voyance</strong> met en lumière cette stratégie d&apos;évitement et propose un chemin vers une ouverture authentique du coeur.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-pink-500">
              <h3 className="font-bold mb-2 text-pink-700">Les Connexions Karmiques</h3>
              <p className="text-gray-700">Certains <strong>amours non partagés</strong> sont des rencontres karmiques : des âmes croisées dans d&apos;autres vies qui réapparaissent pour achever un cycle. L&apos;<strong>astrologie karmique</strong> identifie ces liens à travers les noeuds lunaires et les aspects de Pluton. Ces connexions sont intenses mais pas forcément destinées à devenir des relations. Leur but est souvent de catalyser une <strong>transformation intérieure</strong> profonde qui vous prépare au véritable amour de votre vie.</p>
            </div>
          </div>
        </section>

        <VoyantQuickCTA topic="sentiments" source="sentiments-non-partages-banner-mid" />

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🌱 5 Étapes pour Guérir et Avancer</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">La guérison d&apos;un amour non partagé suit un processus en cinq étapes : accepter la réalité, autoriser le deuil, se reconnecter à soi, transformer l&apos;expérience et s&apos;ouvrir au renouveau.</p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-pink-600">1</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Accepter la Réalité avec Courage</h3>
                <p className="text-gray-700">La première étape est la plus difficile : accepter que cet <strong>amour</strong> n&apos;est pas réciproque. Non pas comme un échec, mais comme un fait. Le <strong>tarot</strong> aide à cette acceptation en montrant clairement la situation telle qu&apos;elle est. La carte de la Justice ou du Jugement apparaît souvent dans ces tirages, invitant à regarder la vérité en face. L&apos;acceptation n&apos;est pas de la résignation &mdash; c&apos;est un acte de courage qui ouvre la porte à la <strong>guérison émotionnelle</strong>.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-pink-600">2</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Autoriser le Deuil Amoureux</h3>
                <p className="text-gray-700">Même sans <strong>rupture</strong> formelle, un <strong>amour non partagé</strong> nécessite un deuil. Vous faites le deuil d&apos;une relation qui n&apos;a existé que dans votre coeur. Pleurez si vous en avez besoin, autorisez-vous la tristesse sans culpabilité. Ce processus ressemble au <Link href="/rupture/chagrin-damour/" className="text-pink-600 hover:text-pink-800 underline font-medium">chagrin d&apos;amour</Link> classique et mérite la même attention et la même douceur. Un <strong>voyant</strong> vous accompagne dans ce processus en éclairant chaque étape du chemin.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-pink-600">3</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Se Reconnecter à Soi-Même</h3>
                <p className="text-gray-700">L&apos;<strong>amour à sens unique</strong> a tendance à vous décentrer : toute votre énergie va vers l&apos;autre. Il est temps de ramener cette énergie vers vous. Méditation, créativité, nature, sport &mdash; reconnectez-vous à ce qui vous fait vibrer indépendamment de cette personne. La <strong>voyance</strong> peut identifier vos sources de <strong>vitalité intérieure</strong> et les pratiques spirituelles qui vous correspondent le mieux pour retrouver votre centre.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-pink-600">4</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Transformer l&apos;Expérience en Sagesse</h3>
                <p className="text-gray-700">Chaque <strong>amour</strong>, même non partagé, vous enseigne quelque chose sur vous-même. Qu&apos;avez-vous appris sur vos besoins, vos limites, vos schémas ? Le <strong>tarot karmique</strong> révèle la <strong>leçon spirituelle</strong> de cette expérience. Peut-être aviez-vous besoin de vivre cette intensité pour comprendre la différence entre l&apos;obsession et l&apos;amour véritable. Peut-être cette personne est-elle entrée dans votre vie pour vous montrer votre capacité d&apos;aimer profondément.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-pink-600">5</div>
              <div>
                <h3 className="font-bold text-lg mb-2">S&apos;Ouvrir au Renouveau Amoureux</h3>
                <p className="text-gray-700">Quand le deuil est fait et la leçon intégrée, un espace se libère pour accueillir un <strong>amour réciproque</strong>. La <strong>voyance</strong> accompagne cette transition en éclairant les <strong>nouvelles opportunités sentimentales</strong> qui se profilent. Les transits de Vénus et de Jupiter annoncent souvent ces périodes de renouveau. Notre guide sur <Link href="/nouvelle-rencontre/" className="text-pink-600 hover:text-pink-800 underline font-medium">quand rencontrer l&apos;amour</Link> peut vous aider à identifier ces fenêtres de chance amoureuse.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🌙 L&apos;Astrologie et l&apos;Amour Non Réciproque</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">L&apos;astrologie explique pourquoi certaines périodes nous rendent plus vulnérables aux amours impossibles et comment les transits planétaires influencent nos choix sentimentaux.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            En <strong>astrologie</strong>, les périodes d&apos;<strong>amour non partagé</strong> ne sont pas aléatoires. Elles correspondent souvent à des transits planétaires spécifiques qui intensifient notre besoin d&apos;amour tout en nous orientant vers des cibles inaccessibles. Comprendre ces cycles permet de les traverser avec plus de conscience et moins de souffrance.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Neptune</strong> en aspect difficile à votre Vénus natale crée des illusions romantiques puissantes. Vous idéalisez l&apos;autre personne et projetez sur elle des qualités qu&apos;elle ne possède peut-être pas. <strong>Pluton</strong> transitant votre maison VII génère des obsessions amoureuses intenses mais souvent destructrices. <strong>Chiron</strong>, l&apos;astéroïde de la blessure sacrée, réactive vos anciennes <strong>blessures sentimentales</strong> quand il touche vos planètes personnelles.
          </p>
          <p className="text-gray-700 leading-relaxed">
            L&apos;<Link href="/methodes-voyance/astrologie-amoureuse/" className="text-pink-600 hover:text-pink-800 underline font-medium">astrologie amoureuse</Link> ne sert pas seulement à prédire : elle offre une <strong>carte de navigation émotionnelle</strong> qui vous aide à comprendre pourquoi vous ressentez ce que vous ressentez et quand ces transits difficiles prendront fin. La combinaison de l&apos;<strong>astrologie</strong> et du <strong>tarot</strong> offre une vision complète qui transforme la confusion en compréhension et la souffrance en évolution.
          </p>
        </section>

      </ContentPage>
  );
}
