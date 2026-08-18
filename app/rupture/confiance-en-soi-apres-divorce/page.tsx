import Link from 'next/link';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import ContentPage, { contentMeta, type ContentPageConfig } from '@/components/ContentPage';

const config: ContentPageConfig = {
  title: 'Retrouver Confiance en Soi Après un Divorce : Par Où Commencer ?',
  description: 'Reconstruire l\'estime de soi après un divorce, étape par étape : renouer avec son identité, dépasser la culpabilité de recommencer et se rouvrir à l\'amour à son rythme.',
  url: 'https://www.voyantlove.fr/rupture/confiance-en-soi-apres-divorce/',
  keywords: ['retrouver confiance en soi après un divorce', 'peur de refaire sa vie après divorce', 'retrouver son estime de soi après séparation', 'se sentir coupable de rencontrer quelqu\'un après divorce', 'peur de rester seul après divorce'],
  datePublished: '2026-07-28',
  dateModified: '2026-07-28',
  breadcrumb: [
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Rupture', url: 'https://www.voyantlove.fr/rupture/' },
    { name: 'Retrouver Confiance en Soi Après un Divorce', url: 'https://www.voyantlove.fr/rupture/confiance-en-soi-apres-divorce/' },
  ],
  header: {
    emoji: '🌱',
    h1: 'Retrouver Confiance en Soi Après un Divorce',
    subtitle: 'Un chemin de reconstruction, étape par étape, à votre rythme',
    gradient: 'from-teal-500 via-emerald-500 to-cyan-600',
    backLink: { href: '/rupture/', label: 'Retour à Rupture & Guérison' },
    anchors: [
      { href: '#parcours', label: 'Le Parcours de Reconstruction', primary: true },
      { href: '#pret', label: 'Suis-je Prêt à Rencontrer ?' },
    ],
  },
  accentText: 'text-teal-600',
  stats: [
    { icon: '🔮', value: 'Reconnue', label: 'Expertise' },
    { icon: '🌱', value: '3,300+', label: 'Consultations' },
    { icon: '⭐', value: '4.8/5', label: '276 avis' },
    { icon: '🔒', value: '100%', label: 'Confidentiel' },
  ],
  eeat: { colorScheme: 'teal', method: 'Guidance de reconstruction et accompagnement après séparation' },
  cta: { topic: 'rupture', slug: 'confiance-divorce' },
  faq: [
    {
      q: 'Comment retrouver confiance en soi après un divorce ?',
      a: 'La confiance se reconstruit par étapes, pas par une décision unique. Elle commence par la reconnaissance de ce que vous traversez, se poursuit en renouant avec une identité indépendante de l\'ancien couple, puis se consolide grâce à de petites expériences réussies qui prouvent, concrètement, votre valeur et votre autonomie. Il n\'existe pas de calendrier universel : chacun avance à son rythme. L\'important est de progresser par paliers accessibles plutôt que d\'attendre de se sentir « prêt » d\'un coup, ce qui n\'arrive presque jamais.',
    },
    {
      q: 'Pourquoi ai-je l\'impression de tromper mon ex en voyant quelqu\'un après le divorce ?',
      a: 'Ce sentiment de culpabilité est très fréquent et parfaitement normal, surtout après une relation longue. Le lien affectif et les habitudes ne disparaissent pas au rythme des papiers du divorce, et une partie de vous peut continuer à ressentir une loyauté envers l\'ancien couple. Il ne s\'agit pas d\'une trahison mais d\'un deuil encore en cours. Reconnaître cette émotion sans la laisser dicter vos choix permet de la traverser : elle s\'atténue à mesure que vous acceptez que votre vie vous appartient de nouveau.',
    },
    {
      q: 'Comment savoir si je suis prêt à rencontrer quelqu\'un après un divorce ?',
      a: 'Quelques signaux indiquent une disponibilité émotionnelle réelle : vous pensez à votre ex sans douleur aiguë, vous cherchez une rencontre par envie et non pour combler un vide ou fuir la solitude, et l\'idée d\'une nouvelle relation suscite de la curiosité plutôt que de l\'anxiété. Dater n\'est jamais une obligation pour guérir, et rien ne presse. La vraie question n\'est pas « suis-je prêt à séduire ? » mais « est-ce que je me sens à nouveau entier(ère) seul(e) ? ».',
    },
    {
      q: 'Est-il normal d\'avoir peur de rester seul après un divorce ?',
      a: 'Oui, la peur de la solitude est l\'une des réactions les plus courantes après une séparation, surtout lorsque l\'identité s\'était construite autour du couple. Il est utile de distinguer la solitude, qui est une situation, du sentiment de ne plus avoir de valeur, qui est une interprétation. Apprendre à se sentir bien seul(e) n\'est pas un lot de consolation : c\'est précisément ce qui restaure la confiance et permet, plus tard, de choisir une relation par désir plutôt que par peur du vide.',
    },
    {
      q: 'Combien de temps faut-il pour se reconstruire après un divorce ?',
      a: 'Il n\'existe aucun délai standard, et se comparer aux autres est souvent contre-productif. La reconstruction dépend de la durée de la relation, des circonstances du divorce, du soutien disponible et de votre histoire personnelle. Ce qui compte n\'est pas la vitesse mais la direction : de petits signes de progrès, retrouver le plaisir de certaines activités, penser à l\'avenir sans angoisse, indiquent que vous avancez. Un accompagnement, qu\'il soit thérapeutique ou une guidance de voyance, peut soutenir ce cheminement sans le remplacer.',
    },
  ],
  related: [
    { href: '/rupture/', label: 'Rupture & Guérison : Toutes nos Guidances' },
    { href: '/rupture/voyance-divorce-separation/', label: 'Voyance Divorce et Séparation' },
    { href: '/rupture/guerir-rupture/', label: 'Guérir d\'une Rupture Amoureuse' },
    { href: '/nouvelle-rencontre/peur-de-aimer-a-nouveau/', label: 'Surmonter la Peur d\'Aimer à Nouveau' },
    { href: '/nouvelle-rencontre/nouvelle-relation-amoureuse/', label: 'Construire une Nouvelle Relation' },
  ],
};

export const metadata = contentMeta(config);

export default function ConfianceEnSoiApresDivorcePage() {
  return (
    <ContentPage config={config}>
        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-teal-500">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-4">
              Un divorce ne met pas seulement fin à une relation : il fragilise souvent l&apos;<strong>identité</strong> et la <strong>confiance en soi</strong>, surtout lorsque la vie s&apos;était longtemps construite à deux. Se sentir moins désirable, coupable à l&apos;idée de recommencer, ou émotionnellement figé(e) est une réaction fréquente, non un défaut. La bonne nouvelle est que la confiance se <strong>reconstruit par étapes</strong>, et non par une injonction à &laquo;passer à autre chose&raquo;.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Cette page propose un <strong>parcours de reconstruction</strong> progressif plutôt que des encouragements vagues. Il ne s&apos;agit pas de vous précipiter vers de nouvelles rencontres, mais de retrouver d&apos;abord une <strong>estime de soi</strong> qui ne dépend plus de l&apos;ancien couple. Chacun avance à son rythme : il n&apos;existe aucun calendrier universel, et dater n&apos;est jamais une condition pour guérir.
            </p>
            <p className="text-lg leading-relaxed">
              Nous distinguerons la <strong>solitude</strong>, qui est une situation, du sentiment de ne plus avoir de valeur, qui n&apos;est qu&apos;une interprétation passagère. Cette guidance accompagne votre réflexion sans se substituer à un suivi thérapeutique. Une <strong>consultation de voyance</strong> peut éclairer vos blocages émotionnels et vos possibilités d&apos;avenir, sans jamais promettre une rencontre ni imposer un délai.
            </p>
          </div>
        </article>

        <VoyantRecommendations topic="rupture" limit={3} showOnlineFirst={true} source="confiance-en-soi-apres-divorce-cards-top" />

        {/* H2: Pourquoi le divorce fragilise */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F4A5}'} Pourquoi le Divorce Fragilise l&apos;Identité et la Confiance</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Apres des annees de vie commune, l&apos;identite s&apos;est souvent construite autour du couple : le divorce retire ce cadre de reference, ce qui explique la perte de reperes, le doute sur sa valeur et le sentiment d&apos;etre fragilise.</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pendant une longue relation, une partie de qui l&apos;on est se définit à travers le <strong>couple</strong> : des rôles, des habitudes, un regard quotidien qui nous renvoyait une image de nous-mêmes. Le <strong>divorce</strong> retire ce cadre d&apos;un coup, et la perte de repères qui suit n&apos;est pas un signe de faiblesse : c&apos;est la conséquence logique de la disparition d&apos;un point d&apos;appui devenu invisible tant qu&apos;il était là.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Comprendre ce mécanisme change tout : votre confiance n&apos;a pas &laquo;disparu&raquo;, elle s&apos;était simplement <strong>adossée</strong> à la relation. La reconstruire consiste à réapprendre à la faire reposer sur vous-même. Ce travail rejoint celui, plus large, de <Link href="/rupture/guerir-rupture/" className="text-teal-600 hover:text-teal-800 underline font-medium">guérir d&apos;une rupture</Link>, dont il constitue une dimension centrale après un divorce.
          </p>
        </section>

        {/* H2: Solitude vs valeur */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F9ED}'} Ne Pas Confondre Solitude, Guérison et Manque de Valeur</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">La solitude est une situation temporaire, le manque de valeur est une interpretation erronee, et la guerison est un processus : les confondre transforme un etat passager en jugement definitif sur soi.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Après un divorce, l&apos;esprit fait souvent un raccourci douloureux : &laquo;je suis seul(e), donc je ne vaux rien&raquo;. Séparer ces notions est libérateur.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-teal-50 border-2 border-teal-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-teal-700">{'\u{1F327}️'} La Solitude</h3>
              <p className="text-gray-700 text-sm">Une <strong>situation</strong>, temporaire et modifiable. Être seul(e) ne dit rien de votre valeur, seulement de votre statut relationnel à un instant donné.</p>
            </div>
            <div className="bg-emerald-50 border-2 border-emerald-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-emerald-700">{'\u{1F31F}'} Le Manque de Valeur</h3>
              <p className="text-gray-700 text-sm">Une <strong>interprétation</strong>, pas un fait. Le divorce peut la souffler, mais votre valeur ne s&apos;est pas volatilisée avec la relation.</p>
            </div>
            <div className="bg-cyan-50 border-2 border-cyan-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-cyan-700">{'\u{1F33F}'} La Guérison</h3>
              <p className="text-gray-700 text-sm">Un <strong>processus</strong>, non un interrupteur. Elle avance par paliers, avec des hauts et des bas, et ne suit aucun calendrier imposé.</p>
            </div>
          </div>
        </section>

        {/* H2: Parcours de reconstruction */}
        <section id="parcours" className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-8 mb-8 border-2 border-teal-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1FA9C}'} Le Parcours de Reconstruction, Étape par Étape</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">La confiance se restaure par petites experiences reussies : renouer avec une identite independante, oser de petits pas hors de sa zone de confort, puis mesurer les progres reels plutot que d&apos;attendre de se sentir pret d&apos;un coup.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Voici un <strong>parcours</strong> en paliers accessibles. Chaque étape prépare la suivante ; nul besoin de les franchir vite, seulement dans l&apos;ordre qui vous convient.
          </p>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 border-l-4 border-teal-500">
              <h3 className="font-bold text-lg mb-2 text-teal-700">Étape 1 : Reconstruire une identité indépendante</h3>
              <p className="text-gray-700 text-sm">Renouez avec des <strong>goûts, amitiés et activités</strong> mis de côté pendant la relation. Ces ancrages rappellent qui vous êtes en dehors du couple et forment la base de tout le reste.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-emerald-500">
              <h3 className="font-bold text-lg mb-2 text-emerald-700">Étape 2 : Les petites expériences qui restaurent la confiance</h3>
              <p className="text-gray-700 text-sm">La confiance revient par la <strong>preuve concrète</strong>, pas par la volonté. De petits défis réussis, un projet, un voyage seul(e), une nouvelle compétence, reconstruisent l&apos;estime bien plus sûrement que les encouragements.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-cyan-500">
              <h3 className="font-bold text-lg mb-2 text-cyan-700">Étape 3 : Se rouvrir aux liens, sans se forcer</h3>
              <p className="text-gray-700 text-sm">Reprendre contact, flirter, poser ses limites : ces gestes se réapprennent <strong>progressivement</strong>. Rien n&apos;oblige à brûler les étapes, et chaque petit pas compte comme une victoire.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-teal-500">
              <h3 className="font-bold text-lg mb-2 text-teal-700">Étape 4 : Reconnaître que l&apos;on avance vraiment</h3>
              <p className="text-gray-700 text-sm">Le <strong>progrès</strong> se mesure à des signes discrets : penser à l&apos;ex sans douleur aiguë, se projeter dans l&apos;avenir sans angoisse, retrouver du plaisir au quotidien.</p>
            </div>
          </div>
        </section>

        <VoyantQuickCTA topic="rupture" source="confiance-en-soi-apres-divorce-banner-mid" />

        {/* H2: Prêt à rencontrer + culpabilité */}
        <section id="pret" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F49A}'} Suis-je Prêt à Rencontrer Quelqu&apos;un ? Et Pourquoi Dater Peut Sembler Trahir</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">On est disponible pour une rencontre lorsqu&apos;on la cherche par envie et non pour fuir le vide : la culpabilite de dater, tres frequente apres une relation longue, est un deuil en cours et non une trahison.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Deux questions reviennent souvent après un divorce : &laquo;suis-je prêt(e) ?&raquo; et &laquo;pourquoi ai-je l&apos;impression de tromper mon ex ?&raquo;. Elles méritent des réponses honnêtes, sans injonction.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="font-bold text-lg mb-3 text-green-700">{'✅'} Signes de Disponibilité Réelle</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&bull; Vous pensez à votre ex <strong>sans douleur aiguë</strong></li>
                <li>&bull; Vous cherchez une rencontre par <strong>envie</strong>, pas pour combler un vide</li>
                <li>&bull; L&apos;idée d&apos;une relation suscite curiosité plutôt qu&apos;angoisse</li>
                <li>&bull; Vous vous sentez à nouveau entier(ère) seul(e)</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-amber-500">
              <h3 className="font-bold text-lg mb-3 text-amber-700">{'\u{1F49B}'} La Culpabilité de Recommencer</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&bull; Sentiment <strong>très fréquent</strong>, surtout après une longue union</li>
                <li>&bull; Un <strong>deuil encore en cours</strong>, pas une trahison</li>
                <li>&bull; Le lien affectif s&apos;éteint plus lentement que les papiers</li>
                <li>&bull; L&apos;émotion s&apos;atténue à mesure que vous vous réappropriez votre vie</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <p className="text-gray-700"><strong>{'\u{1F4A1}'} À retenir :</strong> dater n&apos;est jamais une obligation pour guérir, et rien ne presse. Si la <strong>peur d&apos;aimer à nouveau</strong> vous freine plus que la culpabilité, notre guide dédié à la <Link href="/nouvelle-rencontre/peur-de-aimer-a-nouveau/" className="text-teal-600 hover:text-teal-800 underline font-medium">peur d&apos;aimer à nouveau</Link> approfondit ce blocage précis.</p>
          </div>
        </section>
    </ContentPage>
  );
}
