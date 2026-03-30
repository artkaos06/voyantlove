import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema, getAuthorSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';

export const metadata: Metadata = {
  title: "Peur d'Aimer à Nouveau : Surmonter les Blocages",
  description: "Comment surmonter la peur d'aimer à nouveau après une rupture ? Guidance voyance et tarot pour lever les blocages amoureux et ouvrir son cœur au bonheur.",
  keywords: ["peur d'aimer", 'blocage amoureux', 'peur nouvelle relation', 'peur engagement', 'ouvrir son cœur voyance'],
  alternates: { canonical: 'https://www.voyantlove.fr/nouvelle-rencontre/peur-de-aimer-a-nouveau/' },
};

export default function PeurDeAimerANouveauPage() {
  const articleSchema = getArticleSchema({
    title: "Peur d'Aimer à Nouveau : Surmonter les Blocages",
    description: "Comment surmonter la peur d'aimer à nouveau après une rupture ? Guidance voyance et tarot pour lever les blocages amoureux et ouvrir son cœur au bonheur.",
    url: 'https://www.voyantlove.fr/nouvelle-rencontre/peur-de-aimer-a-nouveau/',
    datePublished: '2026-03-22',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ["peur d'aimer", 'blocage amoureux', 'peur nouvelle relation', 'peur engagement', 'ouvrir son cœur voyance'],
  });

  const faqSchema = getFAQSchema([
    {
      question: "La voyance peut-elle identifier la cause de ma peur d'aimer ?",
      answer: "Le tarot et la clairvoyance sont des outils puissants pour identifier les causes profondes de la peur d'aimer. En analysant votre parcours émotionnel et les empreintes karmiques de votre thème astral, un voyant remonte à la source de votre blocage. Il peut s'agir d'une rupture traumatisante, d'un schéma familial de relations dysfonctionnelles, d'une trahison qui a brisé votre confiance, ou même d'une blessure d'abandon vécue dans l'enfance. Le tarot identifie précisément le nœud émotionnel à dénouer pour retrouver votre capacité à aimer sans peur et à accueillir l'amour pleinement.",
    },
    {
      question: 'Est-il normal d\'avoir peur d\'aimer après une rupture difficile ?',
      answer: "La peur d'aimer après une rupture douloureuse est un mécanisme de protection parfaitement normal et sain. Votre psyché a enregistré que l'amour peut causer une souffrance intense et elle vous protège en érigeant des barrières émotionnelles. La voyance reconnaît cette sagesse du corps et de l'âme. Le tarot montre que cette peur est temporaire si elle est adressée avec conscience. Les cartes comme le Quatre d'Épées indiquent un temps de repos nécessaire avant de se relancer. En revanche, si cette peur persiste au-delà de 12 à 18 mois et vous empêche totalement de créer des liens, un accompagnement en voyance et en thérapie est recommandé.",
    },
    {
      question: 'Quels signes astrologiques sont les plus sujets à la peur d\'aimer ?',
      answer: "Certaines configurations astrales prédisposent davantage à la peur d'aimer. Le Scorpion, avec son intensité émotionnelle, redoute la vulnérabilité que l'amour exige. Le Capricorne, pragmatique et contrôlant, peine à lâcher prise dans les sentiments. Le Verseau, épris de liberté, craint la perte d'indépendance. La Vierge, analytique, intellectualise l'amour au lieu de le ressentir. Les personnes ayant Saturne en aspect difficile avec Vénus dans leur thème natal sont particulièrement sujettes aux blocages amoureux. Un voyant analyse votre carte du ciel pour comprendre votre rapport unique à l'amour et les leviers de transformation.",
    },
    {
      question: 'Comment la voyance m\'aide-t-elle à surmonter mes blocages amoureux ?',
      answer: "La voyance accompagne la levée des blocages amoureux à travers plusieurs approches complémentaires. Le tarot identifie la nature exacte du blocage et sa cause racine. L'astrologie révèle les périodes favorables au travail émotionnel et à l'ouverture du cœur. La clairvoyance capte les énergies de guérison et les opportunités amoureuses qui s'approchent de votre vie. Un voyant expérimenté vous propose aussi des rituels de libération : méditation guidée sur le chakra du cœur, visualisations de guérison, et affirmations personnalisées. Ce travail, combiné à une éventuelle thérapie, accélère considérablement la dissolution des peurs.",
    },
  ]);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Nouvelle Rencontre', url: 'https://www.voyantlove.fr/nouvelle-rencontre/' },
    { name: "Peur d'Aimer à Nouveau", url: 'https://www.voyantlove.fr/nouvelle-rencontre/peur-de-aimer-a-nouveau/' },
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
      <header className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/nouvelle-rencontre" className="text-white/80 hover:text-white mb-4 inline-block">← Nouvelle Rencontre</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">💙 Peur d'Aimer à Nouveau : Surmonter les Blocages</h1>
          <p className="text-xl opacity-95 mb-6">Lever les blocages amoureux avec la guidance de la voyance</p>
          <a href="#consultation" className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition inline-block">Consultation Blocages</a>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">⭐</div><div className="text-2xl font-bold text-cyan-600">4.8/5</div><div className="text-sm text-gray-600">276 avis</div></div>
          <div><div className="text-3xl mb-1">🛡️</div><div className="text-2xl font-bold text-cyan-600">1 sur 4</div><div className="text-sm text-gray-600">Personnes touchées</div></div>
          <div><div className="text-3xl mb-1">💫</div><div className="text-2xl font-bold text-cyan-600">85%</div><div className="text-sm text-gray-600">Surmontent la peur</div></div>
          <div><div className="text-3xl mb-1">🔮</div><div className="text-2xl font-bold text-cyan-600">15 ans</div><div className="text-sm text-gray-600">Expérience</div></div>
        </div>

        <EEATSignal
          colorScheme="cyan"
          method="Guidance voyance pour surmonter la peur d'aimer à nouveau"
        />

        <article className="bg-cyan-50 border-l-4 border-cyan-500 rounded-xl shadow-md p-8 mb-8">
          <p className="text-lg leading-relaxed mb-4">
            La <strong>peur d'aimer</strong> est l'un des <strong>blocages amoureux</strong> les plus répandus et les plus douloureux. Après une <strong>rupture</strong> traumatisante, une <strong>trahison</strong> ou des déceptions répétées, le cœur se ferme comme un réflexe de survie. On veut aimer, on en rêve même, mais au moment de s'ouvrir vraiment à quelqu'un, une terreur invisible prend le dessus. La <strong>voyance</strong> et le <strong>tarot</strong> offrent un éclairage unique sur ces mécanismes de protection devenus des prisons.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Cette <strong>peur de la nouvelle relation</strong> ne signifie pas que vous êtes incapable d'aimer. Au contraire, elle prouve à quel point vous savez aimer puissamment — et c'est précisément cette intensité qui vous effraie. La <strong>clairvoyance</strong> révèle que derrière chaque <strong>blocage amoureux</strong> se cache une <strong>blessure</strong> qui demande à être reconnue et guérie, pas ignorée ou combattue.
          </p>
          <p className="text-lg leading-relaxed">
            Ce guide explore les origines de cette peur et les chemins de <strong>libération</strong> que la <strong>voyance amoureuse</strong> illumine. Retrouvez toutes nos guidances sur <Link href="/" className="text-cyan-600 hover:text-cyan-800 underline font-medium">VoyantLove</Link> pour retrouver le courage d'aimer et d'être aimé(e).
          </p>
        </article>

        <VoyantQuickCTA topic="nouvelle-rencontre" source="peur-de-aimer-early" />

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🔮 Ce que le Tarot Révèle sur votre Peur d'Aimer</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Le tarot identifie trois dimensions de la peur d'aimer : la blessure originelle qui a créé le blocage, les mécanismes de défense que vous avez érigés, et le potentiel amoureux qui attend derrière ces murs.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Les arcanes du <strong>tarot</strong> sont d'une précision remarquable pour cartographier les <strong>blocages amoureux</strong>. Chaque carte raconte une histoire différente et ensemble, elles dessinent la carte de votre paysage émotionnel avec ses montagnes de peur et ses vallées de potentiel inexploré.
          </p>
          <div className="space-y-4">
            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-cyan-700">La Blessure Originelle</h3>
              <p className="text-gray-700">Le <strong>tarot</strong> remonte à la source de votre <strong>peur d'aimer</strong>. Le <strong>Trois d'Épées</strong> pointe vers une <strong>trahison</strong> ou un cœur brisé dont la cicatrice n'est pas encore fermée. La <strong>Lune</strong> révèle des peurs inconscientes, souvent héritées de l'enfance ou de schémas familiaux. Le <strong>Cinq de Coupes</strong> montre un <strong>deuil amoureux</strong> inachevé qui vous retient dans le passé. La <strong>voyance</strong> ne se contente pas d'identifier la blessure : elle éclaire aussi le chemin de <strong>guérison</strong> spécifique à votre situation. Si votre peur est liée à une <strong>rupture</strong> récente, notre guide sur <Link href="/rupture/chagrin-damour" className="text-cyan-600 hover:text-cyan-800 underline font-medium">le chagrin d'amour</Link> peut compléter cette guidance.</p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-blue-700">Les Mécanismes de Défense</h3>
              <p className="text-gray-700">Votre psyché a développé des stratégies pour vous protéger de la souffrance amoureuse. Le <strong>tarot</strong> les identifie avec clarté. Le <strong>Neuf d'Épées</strong> représente l'anxiété chronique qui sabote chaque début de <strong>relation</strong>. Le <strong>Huit d'Épées</strong> symbolise les limitations auto-imposées : « je ne suis pas fait(e) pour l'amour ». Le <strong>Quatre de Coupes</strong> montre le repli émotionnel et l'indifférence feinte. Le <strong>Chevalier d'Épées inversé</strong> révèle la fuite dès que les <strong>sentiments</strong> deviennent réels. La <strong>clairvoyance</strong> vous aide à reconnaître ces mécanismes en action dans votre vie quotidienne pour commencer à les désactiver consciemment.</p>
            </div>
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-indigo-700">Le Potentiel Amoureux Derrière les Murs</h3>
              <p className="text-gray-700">Derrière chaque mur de protection se cache un immense potentiel d'<strong>amour</strong>. Le <strong>tarot</strong> révèle ce qui vous attend quand vous oserez ouvrir votre cœur à nouveau. L'<strong>As de Coupes</strong> promet un nouveau départ affectif débordant de joie. Le <strong>Deux de Coupes</strong> annonce une <strong>rencontre</strong> d'âmes profonde et authentique. Le <strong>Soleil</strong> prédit une période de bonheur lumineux. La <strong>voyance</strong> vous montre que la douleur que vous fuyez est infiniment moindre que la joie qui vous attend. Découvrez <Link href="/nouvelle-rencontre/quand-rencontre-amour" className="text-cyan-600 hover:text-cyan-800 underline font-medium">quand vous rencontrerez l'amour</Link> pour ancrer cet espoir dans une temporalité concrète.</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 mb-8 border-2 border-cyan-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🗝️ Les 5 Clés pour Surmonter la Peur d'Aimer</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Cinq clés guidées par la voyance transforment la peur d'aimer en force : reconnaître la peur, guérir la blessure source, se reconnecter au désir d'aimer, avancer à son rythme, et accueillir l'amour imparfait.</p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-cyan-600">1</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Reconnaître et Nommer la Peur</h3>
                <p className="text-gray-700">La première étape est de reconnaître que vous avez peur, sans honte et sans jugement. Beaucoup de personnes masquent leur <strong>peur d'aimer</strong> derrière des excuses : « je n'ai pas le temps », « je suis bien seul(e) », « les bonnes personnes n'existent plus ». Le <strong>tarot</strong> traverse ces protections pour révéler la vérité émotionnelle. Nommer sa peur, c'est déjà commencer à la désarmer. La <strong>voyance</strong> vous offre un espace bienveillant pour cette reconnaissance, sans pression pour « passer à autre chose » avant d'être prêt(e). Ce premier acte de courage est le socle de toute <strong>guérison</strong>.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-cyan-600">2</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Guérir la Blessure Source</h3>
                <p className="text-gray-700">Chaque <strong>blocage amoureux</strong> a une racine précise que le <strong>tarot</strong> identifie. Si c'est une <strong>trahison</strong>, le travail de <strong>pardon</strong> (pour vous, pas pour l'autre) est essentiel. Si c'est un <strong>abandon</strong>, la reconnexion à votre valeur intrinsèque est la priorité. Si c'est une accumulation de déceptions, il faut défaire les croyances limitantes qui en découlent. La <strong>voyance</strong> propose des rituels de <strong>guérison</strong> adaptés : méditation sur le <strong>chakra du cœur</strong>, visualisations de libération, travail sur les mémoires karmiques. Ce processus demande du temps et de la patience, mais chaque pas vous rapproche de la <strong>liberté émotionnelle</strong>.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-cyan-600">3</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Se Reconnecter au Désir d'Aimer</h3>
                <p className="text-gray-700">La peur ne tue pas le désir d'aimer, elle le recouvre. Sous la glace de la protection, le feu du cœur brûle encore. La <strong>voyance</strong> vous aide à rallumer cette flamme doucement, sans brusquerie. Le <strong>tarot</strong> vous reconnecte avec vos rêves amoureux authentiques — pas les fantasmes de perfection, mais le désir sincère de partager votre vie avec quelqu'un. Des exercices de <strong>visualisation</strong> guidés par un <strong>voyant</strong> vous aident à imaginer à nouveau un futur amoureux sans que la panique ne s'installe. L'<strong>astrologie</strong> identifie les périodes où votre cœur est naturellement plus réceptif à cette reconnexion.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-cyan-600">4</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Avancer à son Propre Rythme</h3>
                <p className="text-gray-700">La société vous presse : « tu devrais refaire ta vie », « ça fait longtemps maintenant ». La <strong>voyance</strong> respecte votre rythme et affirme que chaque personne guérit différemment. Le <strong>tarot</strong> vous montre où vous en êtes objectivement dans votre processus, sans comparaison ni jugement. Certaines personnes ont besoin de mois, d'autres d'années. L'important n'est pas la vitesse mais la direction. La <strong>clairvoyance</strong> vous rassure : l'amour ne connaît pas de date de péremption. Si votre <strong>blocage</strong> est lié à une rupture encore fraîche, découvrez comment <Link href="/rupture/comment-tourner-la-page" className="text-cyan-600 hover:text-cyan-800 underline font-medium">tourner la page</Link> à votre rythme.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-cyan-600">5</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Accueillir l'Amour Imparfait</h3>
                <p className="text-gray-700">Souvent, la <strong>peur d'aimer</strong> se cache derrière un perfectionnisme amoureux impossible. Tant que le partenaire idéal ne se présente pas, vous êtes « en sécurité ». La <strong>voyance</strong> enseigne que l'<strong>amour authentique</strong> n'est jamais parfait — il est réel, imparfait, vivant. Le <strong>tarot</strong> vous aide à accepter cette imperfection comme la condition même de l'amour vrai. L'<strong>Amoureux</strong>, arcane majeur du choix amoureux, montre toujours un choix entre deux voies : la peur ou le courage. Choisir l'amour, c'est accepter le risque de souffrir tout en sachant que la joie qui en naît vaut infiniment cette vulnérabilité.</p>
              </div>
            </div>
          </div>
        </section>

        <VoyantRecommendations topic="nouvelle-rencontre" limit={3} showOnlineFirst={true} source="peur-de-aimer-mid" />

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🌙 Les Signes que Vous Êtes Prêt(e) à Aimer à Nouveau</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">La voyance identifie cinq signes que votre cœur s'ouvre à nouveau : la nostalgie qui cède la place à la sérénité, l'envie de partager, la capacité à être vulnérable, la paix avec le passé, et les synchronicités amoureuses.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Comment savoir si vous êtes vraiment prêt(e) à aimer à nouveau ou si vous forcez les choses par impatience ou pression sociale ? La <strong>voyance</strong> et le <strong>tarot</strong> vous offrent des indicateurs fiables de votre état de préparation émotionnelle.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl text-cyan-600">✦</div>
              <p className="text-gray-700"><strong>La sérénité remplace la nostalgie</strong> : Vous pouvez penser à votre <strong>ex</strong> ou à vos relations passées sans douleur aiguë. Le <strong>tarot</strong> montre la <strong>Tempérance</strong>, signe d'équilibre émotionnel retrouvé. Vous n'idéalisez plus le passé et ne le diabolisez plus non plus.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl text-cyan-600">✦</div>
              <p className="text-gray-700"><strong>L'envie de partager renaît</strong> : Un beau coucher de soleil, une bonne nouvelle, un film touchant — vous ressentez l'envie de partager ces moments avec quelqu'un. Cette envie est un signal clair que votre <strong>chakra du cœur</strong> se rouvre naturellement.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl text-cyan-600">✦</div>
              <p className="text-gray-700"><strong>La vulnérabilité ne vous terrifie plus</strong> : Vous pouvez envisager de vous ouvrir émotionnellement sans paniquer. L'idée de montrer vos <strong>fragilités</strong> à quelqu'un ne déclenche plus de réaction de fuite. La <strong>voyance</strong> confirme cette maturation en montrant le <strong>Deux de Coupes</strong> dans vos tirages.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl text-cyan-600">✦</div>
              <p className="text-gray-700"><strong>Vous êtes en paix avec le passé</strong> : Le <strong>pardon</strong> — envers votre ex et envers vous-même — est sincèrement accompli. Les leçons sont intégrées. Le <strong>tarot</strong> montre le <strong>Monde</strong>, signe d'un cycle complété et d'une sagesse acquise. Vous êtes prêt(e) pour un nouveau chapitre.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl text-cyan-600">✦</div>
              <p className="text-gray-700"><strong>Les synchronicités se multiplient</strong> : L'univers vous envoie des signes : numéros récurrents, chansons significatives, rencontres fortuites. La <strong>clairvoyance</strong> capte ces <strong>synchronicités</strong> comme des signaux que votre <strong>chemin amoureux</strong> est prêt à accueillir une nouvelle personne. Explorez notre guide pour reconnaître <Link href="/nouvelle-rencontre/signes-ame-soeur" className="text-cyan-600 hover:text-cyan-800 underline font-medium">les signes de l'âme sœur</Link>.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🌟 L'Astrologie au Service de la Guérison Amoureuse</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Votre thème natal révèle votre rapport inné à l'amour et les transits planétaires indiquent les périodes idéales pour transformer votre peur en ouverture du cœur.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            L'<strong>astrologie</strong> offre une grille de lecture complémentaire au <strong>tarot</strong> pour comprendre et surmonter la <strong>peur d'aimer</strong>. Votre thème natal contient des informations précieuses sur votre <strong>rapport à l'amour</strong> et aux <strong>relations</strong>.
          </p>
          <div className="space-y-4">
            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-cyan-700">Vénus dans votre Thème</h3>
              <p className="text-gray-700 text-sm">La position de <strong>Vénus</strong> révèle comment vous aimez et ce qui vous fait peur dans l'amour. <strong>Vénus en Scorpion</strong> craint la trahison et le contrôle. <strong>Vénus en Capricorne</strong> redoute la perte de contrôle émotionnel. <strong>Vénus en Verseau</strong> fuit l'intimité par peur de perdre sa liberté. Connaître votre <strong>Vénus</strong> vous donne les clés pour transformer votre <strong>rapport à l'amour</strong>.</p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-blue-700">Saturne et les Leçons Amoureuses</h3>
              <p className="text-gray-700 text-sm"><strong>Saturne</strong>, planète des limitations et des leçons, joue un rôle central dans les <strong>blocages amoureux</strong>. Quand Saturne transite votre maison 7 (couple) ou forme un aspect avec votre Vénus natale, les peurs amoureuses s'intensifient mais c'est aussi le moment idéal pour les affronter et les transformer. La <strong>voyance</strong> utilise ces <strong>transits</strong> comme des fenêtres de travail intérieur profond.</p>
            </div>
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-indigo-700">Les Transits de Guérison</h3>
              <p className="text-gray-700 text-sm"><strong>Jupiter</strong> en aspect favorable avec votre Vénus ouvre le cœur à de nouvelles possibilités. <strong>Neptune</strong> dissout les barrières émotionnelles et ravive la capacité à rêver d'amour. <strong>Pluton</strong> transforme en profondeur votre rapport aux <strong>relations</strong>. Un <strong>voyant astrologue</strong> identifie ces transits pour que vous puissiez en tirer le meilleur parti et accélérer votre <strong>guérison amoureuse</strong>.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">❓ Questions Fréquentes</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Retrouvez les réponses aux questions les plus posées sur la peur d'aimer : causes profondes, normalité du processus, profil astrologique et accompagnement voyance.</p>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">La voyance peut-elle identifier la cause de ma peur d'aimer ?</h3>
              <p className="text-gray-700 leading-relaxed">Le <strong>tarot</strong> et la <strong>clairvoyance</strong> sont des outils puissants pour identifier les causes profondes de la <strong>peur d'aimer</strong>. En analysant votre parcours émotionnel et les empreintes karmiques de votre <strong>thème astral</strong>, un <strong>voyant</strong> remonte à la source de votre <strong>blocage</strong>. Il peut s'agir d'une <strong>rupture</strong> traumatisante, d'un schéma familial de relations dysfonctionnelles, d'une <strong>trahison</strong> qui a brisé votre confiance, ou même d'une blessure d'<strong>abandon</strong> vécue dans l'enfance. Le <strong>tarot</strong> identifie précisément le nœud émotionnel à dénouer pour retrouver votre capacité à aimer sans peur.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Est-il normal d'avoir peur d'aimer après une rupture difficile ?</h3>
              <p className="text-gray-700 leading-relaxed">La <strong>peur d'aimer</strong> après une <strong>rupture</strong> douloureuse est un mécanisme de protection parfaitement normal et sain. Votre psyché a enregistré que l'amour peut causer une souffrance intense et elle vous protège en érigeant des barrières émotionnelles. La <strong>voyance</strong> reconnaît cette sagesse du corps et de l'âme. Le <strong>tarot</strong> montre que cette peur est temporaire si elle est adressée avec conscience. Les cartes comme le <strong>Quatre d'Épées</strong> indiquent un temps de repos nécessaire. En revanche, si cette peur persiste au-delà de 12 à 18 mois, un accompagnement en <strong>voyance</strong> et en <strong>thérapie</strong> est recommandé. Notre guide sur <Link href="/rupture/rupture-amoureuse" className="text-cyan-600 hover:text-cyan-800 underline font-medium">la rupture amoureuse</Link> approfondit ce processus.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quels signes astrologiques sont les plus sujets à la peur d'aimer ?</h3>
              <p className="text-gray-700 leading-relaxed">Certaines configurations astrales prédisposent davantage à la <strong>peur d'aimer</strong>. Le <strong>Scorpion</strong>, avec son intensité émotionnelle, redoute la vulnérabilité. Le <strong>Capricorne</strong>, pragmatique, peine à lâcher prise dans les <strong>sentiments</strong>. Le <strong>Verseau</strong>, épris de liberté, craint la perte d'indépendance. La <strong>Vierge</strong>, analytique, intellectualise l'<strong>amour</strong>. Les personnes ayant <strong>Saturne</strong> en aspect difficile avec <strong>Vénus</strong> dans leur thème natal sont particulièrement sujettes aux <strong>blocages amoureux</strong>. Un <strong>voyant</strong> analyse votre carte du ciel pour comprendre votre rapport unique à l'amour.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment la voyance m'aide-t-elle à surmonter mes blocages amoureux ?</h3>
              <p className="text-gray-700 leading-relaxed">La <strong>voyance</strong> accompagne la levée des <strong>blocages amoureux</strong> à travers plusieurs approches complémentaires. Le <strong>tarot</strong> identifie la nature exacte du blocage et sa cause racine. L'<strong>astrologie</strong> révèle les périodes favorables au travail émotionnel et à l'ouverture du cœur. La <strong>clairvoyance</strong> capte les énergies de <strong>guérison</strong> et les opportunités amoureuses qui s'approchent. Un <strong>voyant</strong> expérimenté vous propose aussi des rituels de libération : méditation guidée sur le <strong>chakra du cœur</strong>, visualisations de guérison, et affirmations personnalisées. Ce travail accélère considérablement la dissolution des peurs et vous prépare à <Link href="/nouvelle-rencontre/rencontre-amoureuse-en-ligne" className="text-cyan-600 hover:text-cyan-800 underline font-medium">rencontrer l'amour</Link>.</p>
            </div>
          </div>
        </section>

        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900">📚 Articles Connexes</h3>
          <div className="space-y-2">
            <Link href="/nouvelle-rencontre/quand-rencontre-amour" className="block text-cyan-600 hover:text-cyan-800 font-medium">→ Quand Vais-je Rencontrer l'Amour ?</Link>
            <Link href="/nouvelle-rencontre/rencontre-amoureuse-en-ligne" className="block text-cyan-600 hover:text-cyan-800 font-medium">→ Rencontre Amoureuse en Ligne</Link>
            <Link href="/nouvelle-rencontre/signes-ame-soeur" className="block text-cyan-600 hover:text-cyan-800 font-medium">→ Les Signes de l'Âme Sœur</Link>
            <Link href="/rupture/comment-tourner-la-page" className="block text-cyan-600 hover:text-cyan-800 font-medium">→ Comment Tourner la Page</Link>
            <Link href="/rupture/chagrin-damour" className="block text-cyan-600 hover:text-cyan-800 font-medium">→ Guérir d'un Chagrin d'Amour</Link>
            <Link href="/rupture/surmonter-trahison" className="block text-cyan-600 hover:text-cyan-800 font-medium">→ Surmonter une Trahison Amoureuse</Link>
          </div>
        </div>

        <VoyantFinalCTA topic="nouvelle-rencontre" source="peur-de-aimer-final" />
      </div>
    </main>
  );
}
