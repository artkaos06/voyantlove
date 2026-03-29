import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema, getAuthorSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';

export const metadata: Metadata = {
  title: "Voyance Célibat : Quand Vais-Je Trouver l'Amour ? | VoyantLove",
  description: "Vous êtes célibataire et cherchez à savoir quand l'amour va arriver. Voyance célibat : découvrez les signes, les blocages et les prédictions pour trouver l'amour.",
  keywords: ['voyance célibat', 'quand vais-je trouver l amour', 'voyance trouver l amour', 'célibataire voyance', 'blocage amoureux voyance'],
  alternates: { canonical: 'https://voyantlove.fr/nouvelle-rencontre/voyance-celibat-trouver-lamour/' },
};

export default function VoyanceCelibatPage() {
  const articleSchema = getArticleSchema({
    title: "Voyance Célibat : Quand Vais-Je Trouver l'Amour ? | VoyantLove",
    description: "Vous êtes célibataire et cherchez à savoir quand l'amour va arriver. Voyance célibat : découvrez les signes, les blocages et les prédictions pour trouver l'amour.",
    url: 'https://voyantlove.fr/nouvelle-rencontre/voyance-celibat-trouver-lamour/',
    datePublished: '2026-03-27',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['voyance célibat', 'quand vais-je trouver l amour', 'voyance trouver l amour', 'célibataire voyance', 'blocage amoureux voyance'],
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Nouvelle Rencontre', url: 'https://voyantlove.fr/nouvelle-rencontre/' },
    { name: 'Voyance Célibat', url: 'https://voyantlove.fr/nouvelle-rencontre/voyance-celibat-trouver-lamour/' },
  ]);

  const authorSchema = getAuthorSchema();

  const faqSchema = getFAQSchema([
    {
      question: 'Pourquoi suis-je encore célibataire malgré mes efforts ?',
      answer: 'Selon la voyance, le célibat prolongé malgré des efforts sincères s\'explique souvent par des blocages énergétiques invisibles : blessures d\'abandon non guéries, croyances limitantes intériorisées ("je ne mérite pas l\'amour"), ou une période karmique de préparation nécessaire. La voyance identifie précisément si votre célibat est dû à une fermeture du cœur, un schéma répétitif inconscient, ou simplement un mauvais timing astrologique. Comprendre la cause profonde permet de lever l\'obstacle spécifique et d\'ouvrir réellement la voie à une nouvelle rencontre amoureuse significative.',
    },
    {
      question: 'Comment savoir si quelqu\'un va entrer dans ma vie bientôt ?',
      answer: 'Plusieurs signaux indiquent qu\'une rencontre amoureuse est imminente selon la voyance : une sensation inexplicable d\'anticipation et d\'excitation intérieure, des rêves prémonitoires récurrents mettant en scène un inconnu, des synchronicités répétées (numéros angéliques comme 11:11, 222), une énergie sentimentale qui se réveille spontanément, et des changements dans votre environnement quotidien créant de nouvelles opportunités de rencontres. Le tarot confirme ces signaux avec les cartes des Amoureux, de l\'As de Coupe, ou du Cavalier de Coupe annonciateur d\'une arrivée romantique prochaine.',
    },
    {
      question: 'Le tarot peut-il prédire une rencontre amoureuse ?',
      answer: 'Oui, le tarot est l\'un des outils les plus précis pour prédire une rencontre amoureuse imminente. Les cartes révèlent le timing probable (saison, mois), le contexte de la rencontre (lieu de travail, cercle social, voyage, application de rencontre), et les caractéristiques de la personne à venir. L\'As de Coupe annonce un nouveau départ sentimental, le Cavalier de Coupe l\'arrivée d\'un prétendant romantique, et les Amoureux une connexion significative. Un tirage complet de l\'arbre de vie peut même révéler la compatibilité potentielle avant que la rencontre ne se produise.',
    },
    {
      question: 'Quels signes astrologiques auront des rencontres en 2026 ?',
      answer: 'En 2026, les signes les plus favorisés pour les rencontres amoureuses sont le Taureau et la Balance (sous l\'influence bénéfique de Vénus en domicile), les Gémeaux et la Vierge (Mercure facilitant les connexions), et les Poissons (Neptune amplifiant la réceptivité émotionnelle). Jupiter en transit favorise le Bélier et le Lion pour des rencontres significatives et durables. Les périodes clés sont le printemps 2026 (mars à mai) et l\'automne (septembre à novembre). Une consultation personnalisée précise le timing exact selon votre thème natal complet.',
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/nouvelle-rencontre" className="text-white/80 hover:text-white mb-4 inline-block">&larr; Retour aux Nouvelles Rencontres</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">&#x1F52E; Voyance Célibat</h1>
          <p className="text-xl opacity-95 mb-6">Quand Vais-Je Trouver l&rsquo;Amour ?</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#blocages" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">Identifier mes Blocages</a>
            <a href="#timing" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition">Timing de Rencontre</a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Stats Bar */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">&#x1F52E;</div><div className="text-2xl font-bold text-indigo-600">12 ans</div><div className="text-sm text-gray-600">Expertise voyance</div></div>
          <div><div className="text-3xl mb-1">&#x1F49C;</div><div className="text-2xl font-bold text-indigo-600">3&nbsp;200+</div><div className="text-sm text-gray-600">Consultations célibat</div></div>
          <div><div className="text-3xl mb-1">&#x2728;</div><div className="text-2xl font-bold text-indigo-600">Précise</div><div className="text-sm text-gray-600">Prédiction timing</div></div>
          <div><div className="text-3xl mb-1">&#x1F31F;</div><div className="text-2xl font-bold text-indigo-600">4.9/5</div><div className="text-sm text-gray-600">Satisfaction clients</div></div>
        </div>

        {/* E-E-A-T Signal */}
        <EEATSignal
          colorScheme="purple"
          method="Voyance &amp; Célibat — Tarot, astrologie et guidance spirituelle"
        />

        {/* Answer Capsule */}
        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-indigo-500">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ce que la voyance révèle sur votre célibat</h2>
          <p className="text-lg leading-relaxed mb-4">
            La <strong>solitude affective</strong> prolongée n&rsquo;est jamais le fruit du hasard selon la voyance : elle reflète un <strong>blocage amoureux</strong> précis, inscrit dans votre énergie ou votre karma. Comprendre ce blocage est la première étape pour modifier votre <strong>timing de rencontre</strong>. Votre <strong>énergie sentimentale</strong> émet en permanence un signal vibratoire que les partenaires potentiels captent — et lorsque ce signal est pollué par la peur, la déception ou la fermeture, votre <strong>attractivité</strong> naturelle s&rsquo;efface.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            La voyance travaille sur votre <strong>vibration amoureuse</strong> profonde pour identifier à quel niveau l&rsquo;amour est bloqué. Est-ce une blessure de rejet non guérie ? Une croyance limitante intériorisée dans l&rsquo;enfance ? Un contrat karmique à solder avant de rencontrer votre <strong>âme sœur</strong> ? Chaque célibataire a un profil unique, et c&rsquo;est ce profil que révèle un tirage de voyance personnalisé.
          </p>
          <p className="text-lg leading-relaxed">
            Ce guide complet vous permet d&rsquo;identifier vos blocages, de reconnaître les signes que l&rsquo;amour approche, et de comprendre le timing de votre prochaine rencontre. Pour aller plus loin dans votre quête, découvrez comment <Link href="/nouvelle-rencontre/trouver-ame-soeur" className="text-indigo-600 hover:text-indigo-800 underline font-medium">trouver votre âme sœur</Link> grâce à la guidance spirituelle.
          </p>
        </article>

        <VoyantQuickCTA topic="nouvelle-rencontre" source="voyance-celibat-early" />

        {/* Section 1: Pourquoi encore célibataire */}
        <section id="blocages" className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 mb-8 border-2 border-indigo-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">&#x1F50D; Pourquoi Êtes-Vous Encore Célibataire selon la Voyance ?</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Les causes profondes du célibat prolongé sont les blocages karmiques, les croyances limitantes héritées du passé et les périodes de préparation spirituelle nécessaires avant une rencontre significative.</p>
          <p className="text-gray-700 mb-6">
            La question que posent presque tous les célibataires en consultation est la même : <em>&laquo; Je suis quelqu&rsquo;un de bien, je fais des efforts, alors pourquoi suis-je encore seul(e) ? &raquo;</em> La voyance apporte des réponses là où la logique ordinaire échoue.
          </p>

          <div className="space-y-5">
            <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-3 text-blue-700">&#x1F300; Les Blocages Karmiques</h3>
              <p className="text-gray-700">
                Certains célibats prolongés sont liés à des <strong>dettes karmiques</strong> issues de vies antérieures ou de schémas répétitifs transgénérationnels. Ces blocages se manifestent par une attraction systématique pour des partenaires indisponibles, des ruptures au même stade de la relation, ou une peur irrationnelle de l&rsquo;engagement. La voyance karmique identifie précisément quelle leçon de vie doit être intégrée avant que l&rsquo;amour stable puisse se manifester. Ces contrats karmiques, une fois conscientisés, peuvent être libérés grâce à un travail spirituel ciblé.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-indigo-500">
              <h3 className="font-bold text-lg mb-3 text-indigo-700">&#x1F9E0; Les Croyances Limitantes</h3>
              <p className="text-gray-700">
                Les croyances comme <em>&laquo; l&rsquo;amour fait toujours souffrir &raquo;</em>, <em>&laquo; je ne suis pas suffisamment bien &raquo;</em> ou <em>&laquo; les hommes/femmes bien sont tous pris &raquo;</em> créent un filtre énergétique qui repousse les partenaires compatibles avant même qu&rsquo;ils n&rsquo;approchent. Ces <strong>croyances limitantes</strong> sont souvent héritées de l&rsquo;enfance, de parents, ou de ruptures douloureuses. Un voyant expérimenté les identifie rapidement dans votre champ énergétique et propose des pratiques concrètes pour les reprogrammer. Une croyance limitante transformée peut changer radicalement votre vie amoureuse en quelques mois.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-purple-500">
              <h3 className="font-bold text-lg mb-3 text-purple-700">&#x23F3; La Période de Préparation</h3>
              <p className="text-gray-700">
                Parfois, le célibat n&rsquo;est pas un blocage mais une <strong>période de préparation</strong> nécessaire. L&rsquo;univers vous accorde ce temps pour vous développer, guérir vos blessures passées, et devenir la personne avec qui votre futur partenaire va tomber amoureux. Cette phase, bien que douloureuse à vivre, est souvent précédée d&rsquo;une rencontre significative imminente. La voyance distingue clairement les périodes de blocage à travailler des périodes de maturation à accepter avec confiance et patience.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Signes que l'amour approche */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-indigo-600">&#x2728; Les Signes que l&rsquo;Amour Approche</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Les signaux précurseurs d&rsquo;une rencontre amoureuse imminente incluent les synchronicités répétées, les rêves prémonitoires et un changement soudain d&rsquo;énergie intérieure inexplicable.</p>
          <p className="text-gray-700 mb-6">
            La voyance et la spiritualité s&rsquo;accordent sur ce point : avant chaque rencontre significative, l&rsquo;univers envoie des signaux annonciateurs. Apprendre à les lire vous permet non seulement de vous préparer, mais aussi d&rsquo;agir au bon moment.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-indigo-50 rounded-lg p-5">
              <h3 className="font-bold text-indigo-700 mb-3">&#x1F500; Synchronicités Répétées</h3>
              <p className="text-gray-700">Vous voyez les mêmes chiffres en boucle (11:11, 222, 444), croisez des situations qui vous rappellent votre désir d&rsquo;amour, entendez la même chanson romantique dans des contextes différents. Ces <strong>synchronicités</strong> sont la signature de l&rsquo;univers vous signalant que votre énergie s&rsquo;aligne sur la fréquence de l&rsquo;amour.</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-5">
              <h3 className="font-bold text-purple-700 mb-3">&#x1F634; Rêves Prémonitoires</h3>
              <p className="text-gray-700">Des <strong>rêves prémonitoires</strong> mettant en scène un inconnu dont vous percevez clairement la présence affective, ou des rêves récurrents où vous êtes heureux(se) en couple, sont des signaux puissants. L&rsquo;inconscient capte les informations énergétiques avant la conscience éveillée.</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-700 mb-3">&#x1F4AB; Changement d&rsquo;Énergie</h3>
              <p className="text-gray-700">Un regain d&rsquo;optimisme inexplicable, une envie soudaine de prendre soin de votre apparence, une ouverture naturelle vers les autres — ces <strong>changements d&rsquo;énergie</strong> signalent que votre corps et votre âme se préparent à accueillir quelqu&rsquo;un de nouveau dans votre vie.</p>
            </div>
            <div className="bg-violet-50 rounded-lg p-5">
              <h3 className="font-bold text-violet-700 mb-3">&#x1F4AC; Conversations Qui Reviennent</h3>
              <p className="text-gray-700">Des amis vous parlent d&rsquo;une personne à rencontrer, des inconnus vous complimentent davantage, ou des opportunités sociales se présentent de manière inhabituelle. L&rsquo;univers crée les conditions de la rencontre à travers votre environnement humain immédiat.</p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg">
            <p className="text-gray-700">
              <strong>&#x26A0;&#xFE0F; Important :</strong> Ces signes doivent être interprétés dans leur contexte global. Pour connaître ce que révèlent précisément les <Link href="/nouvelle-rencontre/signes-ame-soeur" className="text-indigo-600 hover:text-indigo-800 underline font-medium">signes de l&rsquo;âme sœur</Link> dans votre situation personnelle, une lecture de tarot approfondie reste l&rsquo;outil le plus fiable.
            </p>
          </div>
        </section>

        {/* Section 3: Tarot pour célibataires */}
        <section id="tarot" className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-8 mb-8 border-2 border-purple-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">&#x1F0CF; Quel Tirage Tarot pour les Célibataires ?</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Les cartes clés pour les célibataires en quête d&rsquo;amour sont l&rsquo;Impératrice pour l&rsquo;attractivité, le Monde pour l&rsquo;accomplissement à venir, et l&rsquo;As de Coupe pour un nouveau départ sentimental.</p>
          <p className="text-gray-700 mb-6">
            Le tarot offre des éclairages uniques pour les célibataires qui cherchent à comprendre leur situation amoureuse et à anticiper leurs prochaines rencontres. Certaines cartes sont particulièrement significatives dans ce contexte.
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 flex gap-4 items-start">
              <div className="text-4xl">&#x1F451;</div>
              <div>
                <h3 className="font-bold text-lg text-purple-700 mb-2">L&rsquo;Impératrice — L&rsquo;Attractivité et la Féminité</h3>
                <p className="text-gray-700">L&rsquo;<strong>Impératrice</strong> dans un tirage célibat signifie que vous êtes dans une phase d&rsquo;épanouissement de votre attractivité naturelle. C&rsquo;est la carte de la séduction authentique, de la sensualité assumée et de la fertilité affective. Elle annonce souvent que la rencontre est proche dès lors que vous acceptez pleinement votre valeur personnelle et que vous rayonnez sans retenue.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 flex gap-4 items-start">
              <div className="text-4xl">&#x1F30D;</div>
              <div>
                <h3 className="font-bold text-lg text-indigo-700 mb-2">Le Monde — L&rsquo;Accomplissement Amoureux</h3>
                <p className="text-gray-700"><strong>Le Monde</strong> en tirage sentimental est l&rsquo;une des cartes les plus prometteuses pour un(e) célibataire. Elle annonce l&rsquo;accomplissement d&rsquo;un cycle, la fin d&rsquo;une période de solitude, et l&rsquo;entrée dans une phase de réalisation amoureuse. Si cette carte apparaît dans votre tirage, la rencontre significative est souvent à portée de main — dans les trois à six mois suivant la consultation.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 flex gap-4 items-start">
              <div className="text-4xl">&#x1F3BA;</div>
              <div>
                <h3 className="font-bold text-lg text-blue-700 mb-2">L&rsquo;As de Coupe — Le Nouveau Départ Sentimental</h3>
                <p className="text-gray-700">L&rsquo;<strong>As de Coupe</strong> est la carte de l&rsquo;ouverture du cœur et des nouveaux commencements amoureux. Elle indique qu&rsquo;un espace émotionnel neuf se crée en vous, prêt à accueillir un amour authentique et profond. Cette carte apparaît souvent quand la personne a achevé son processus de deuil de l&rsquo;ancienne relation et est véritablement libre de vivre quelque chose de nouveau et de beau.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Attirer l'amour */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">&#x1F9FF; Comment Attirer l&rsquo;Amour : Conseils Spirituels</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Attirer l&rsquo;amour passe par la loi de l&rsquo;attraction, un travail de guérison intérieure profond et l&rsquo;ouverture consciente du cœur aux nouvelles expériences amoureuses.</p>
          <p className="text-gray-700 mb-6">
            La voyance ne se contente pas de prédire : elle guide aussi vers les actions concrètes et les pratiques spirituelles qui accélèrent l&rsquo;arrivée de l&rsquo;amour dans votre vie. Voici les piliers identifiés après 12 ans de consultations spécialisées.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-pink-50 rounded-lg p-5 text-center">
              <div className="text-4xl mb-3">&#x1F9F2;</div>
              <h3 className="font-bold text-pink-700 mb-2">Loi de l&rsquo;Attraction</h3>
              <p className="text-gray-700 text-sm">Vos pensées et émotions dominantes créent votre réalité amoureuse. Visualisez chaque jour la relation que vous désirez avec précision et gratitude anticipée. La <strong>loi de l&rsquo;attraction</strong> fonctionne d&rsquo;autant mieux que votre désir est clairement défini et ressenti dans le corps.</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-5 text-center">
              <div className="text-4xl mb-3">&#x1F9D8;</div>
              <h3 className="font-bold text-purple-700 mb-2">Travail sur Soi</h3>
              <p className="text-gray-700 text-sm">Guérissez vos blessures émotionnelles, identifiez vos schémas répétitifs et développez votre estime personnelle. Le <strong>travail sur soi</strong> est l&rsquo;investissement le plus rentable pour attirer un partenaire sain. Thérapie, méditation, journaling — choisissez les outils qui résonnent avec vous.</p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-5 text-center">
              <div className="text-4xl mb-3">&#x1F493;</div>
              <h3 className="font-bold text-indigo-700 mb-2">Ouverture du Cœur</h3>
              <p className="text-gray-700 text-sm">Pratiquez l&rsquo;<strong>ouverture du cœur</strong> consciemment : sortez de votre zone de confort social, acceptez les invitations, soyez curieux(se) des autres. L&rsquo;amour ne peut entrer dans un cœur fermé, même s&rsquo;il se présente sur le seuil. L&rsquo;ouverture est un choix actif, renouvelé chaque jour.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 mt-6 border border-purple-200">
            <h3 className="font-bold text-purple-800 mb-3">&#x1F4A1; La Pratique des 21 Jours</h3>
            <p className="text-gray-700">
              La voyance recommande souvent une pratique de 21 jours pour reprogrammer votre énergie sentimentale : écrire chaque soir trois qualités que vous apportez dans une relation, visualiser 5 minutes votre futur partenaire avec reconnaissance, et noter les synchronicités du jour. Cette pratique simple mais puissante transforme progressivement votre <strong>vibration amoureuse</strong> et accélère concrètement l&rsquo;arrivée de l&rsquo;amour dans votre vie.
            </p>
          </div>
        </section>

        <VoyantRecommendations topic="nouvelle-rencontre" limit={3} showOnlineFirst={true} source="voyance-celibat-mid" />

        {/* Section 5: Timing */}
        <section id="timing" className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8 mb-8 border-2 border-blue-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">&#x23F0; Timing : Quand Rencontrerez-Vous l&rsquo;Amour ?</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Les périodes les plus favorables aux rencontres amoureuses correspondent aux transits de Vénus et Jupiter, aux années personnelles 2, 6 et 9, et aux saisons astrologiques du Taureau et de la Balance.</p>
          <p className="text-gray-700 mb-6">
            La question du timing est celle qui revient le plus souvent en consultation de voyance célibat. L&rsquo;astrologie et la numérologie offrent des repères précieux pour anticiper les périodes favorables.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-blue-700 text-lg mb-4">&#x2728; Périodes Favorables par Signe</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Bélier, Lion, Sagittaire</span>
                  <span className="text-green-600 font-bold">Printemps 2026</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Taureau, Vierge, Capricorne</span>
                  <span className="text-green-600 font-bold">Été 2026</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Gémeaux, Balance, Verseau</span>
                  <span className="text-blue-600 font-bold">Automne 2026</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Cancer, Scorpion, Poissons</span>
                  <span className="text-purple-600 font-bold">Fin 2026 / Début 2027</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-purple-700 text-lg mb-4">&#x1FA90; Planètes de l&rsquo;Amour</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold text-pink-600">Vénus</p>
                  <p className="text-sm">Planète maîtresse de l&rsquo;amour, ses transits dans votre signe ou votre maison 5/7 sont les indicateurs les plus fiables d&rsquo;une rencontre amoureuse imminente.</p>
                </div>
                <div>
                  <p className="font-semibold text-orange-600">Jupiter</p>
                  <p className="text-sm">La planète de l&rsquo;expansion en transit dans votre maison 7 (partenariats) ouvre une fenêtre d&rsquo;opportunité exceptionnelle pour les rencontres durables et significatives.</p>
                </div>
                <div>
                  <p className="font-semibold text-red-600">Mars</p>
                  <p className="text-sm">Mars active le désir et l&rsquo;initiative amoureuse. Son passage en maison 5 vous donne l&rsquo;audace nécessaire pour saisir les opportunités qui se présentent.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-100 rounded-lg p-5 mt-6 text-center">
            <p className="text-indigo-800 font-semibold text-lg">
              Pour connaître précisément votre timing personnel, consultez notre guide complet sur{' '}
              <Link href="/sentiments/avenir-amoureux" className="text-indigo-600 hover:text-indigo-800 underline font-medium">votre avenir amoureux</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">&#x2753; Questions Fréquentes sur la Voyance Célibat</h2>
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="font-bold text-lg text-indigo-700 mb-3">Pourquoi suis-je encore célibataire malgré mes efforts ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Selon la voyance, le célibat prolongé malgré des efforts sincères s&rsquo;explique souvent par des <strong>blocages énergétiques</strong> invisibles : blessures d&rsquo;abandon non guéries, croyances limitantes intériorisées ("je ne mérite pas l&rsquo;amour"), ou une période karmique de préparation nécessaire. La voyance identifie précisément si votre célibat est dû à une fermeture du cœur, un schéma répétitif inconscient, ou simplement un mauvais timing astrologique. Comprendre la cause profonde permet de lever l&rsquo;obstacle spécifique et d&rsquo;ouvrir réellement la voie à une nouvelle rencontre amoureuse significative.
              </p>
            </div>
            <div className="border-b pb-6">
              <h3 className="font-bold text-lg text-indigo-700 mb-3">Comment savoir si quelqu&rsquo;un va entrer dans ma vie bientôt ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Plusieurs signaux indiquent qu&rsquo;une rencontre amoureuse est imminente : une sensation inexplicable d&rsquo;anticipation intérieure, des <strong>rêves prémonitoires</strong> récurrents mettant en scène un inconnu, des synchronicités répétées (11:11, 222), une énergie sentimentale qui se réveille spontanément, et des changements dans votre environnement quotidien créant de nouvelles opportunités. Le tarot confirme ces signaux avec les cartes des Amoureux, de l&rsquo;As de Coupe, ou du Cavalier de Coupe annonciateur d&rsquo;une arrivée romantique prochaine.
              </p>
            </div>
            <div className="border-b pb-6">
              <h3 className="font-bold text-lg text-indigo-700 mb-3">Le tarot peut-il prédire une rencontre amoureuse ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Oui, le tarot est l&rsquo;un des outils les plus précis pour prédire une rencontre amoureuse imminente. Les cartes révèlent le <strong>timing probable</strong> (saison, mois), le contexte de la rencontre (lieu de travail, cercle social, voyage, application de rencontre), et les caractéristiques de la personne à venir. L&rsquo;As de Coupe annonce un nouveau départ sentimental, le Cavalier de Coupe l&rsquo;arrivée d&rsquo;un prétendant romantique, et les Amoureux une connexion significative. Un tirage complet peut même révéler la compatibilité potentielle avant que la rencontre ne se produise.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-indigo-700 mb-3">Quels signes astrologiques auront des rencontres en 2026 ?</h3>
              <p className="text-gray-700 leading-relaxed">
                En 2026, les signes les plus favorisés pour les rencontres amoureuses sont le <strong>Taureau</strong> et la <strong>Balance</strong> (sous l&rsquo;influence de Vénus en domicile), les Gémeaux et la Vierge (Mercure facilitant les connexions), et les Poissons (Neptune amplifiant la réceptivité émotionnelle). Jupiter en transit favorise le Bélier et le Lion pour des rencontres significatives et durables. Les périodes clés sont le printemps 2026 (mars à mai) et l&rsquo;automne (septembre à novembre). Une consultation personnalisée précise le timing exact selon votre thème natal complet.
              </p>
            </div>
          </div>
        </section>

        <VoyantFinalCTA topic="nouvelle-rencontre" source="voyance-celibat-final" />
      </div>
    </main>
  );
}
