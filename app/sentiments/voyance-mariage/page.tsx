import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema, getAuthorSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';

export const metadata: Metadata = {
  title: 'Voyance Mariage : Vais-Je Me Marier ? Avec Qui ? | VoyantLove',
  description: 'Vous vous demandez si et quand vous allez vous marier ? La voyance mariage révèle les prédictions sur votre union, la demande en mariage et votre futur conjoint.',
  keywords: ['voyance mariage', 'vais-je me marier', 'quand vais-je me marier', 'prédiction mariage', 'voyance union'],
  alternates: { canonical: 'https://www.voyantlove.fr/sentiments/voyance-mariage/' },
};

export default function VoyanceMariagePage() {
  const articleSchema = getArticleSchema({
    title: 'Voyance Mariage : Vais-Je Me Marier ? Avec Qui ? | VoyantLove',
    description: 'Vous vous demandez si et quand vous allez vous marier ? La voyance mariage révèle les prédictions sur votre union, la demande en mariage et votre futur conjoint.',
    url: 'https://www.voyantlove.fr/sentiments/voyance-mariage/',
    datePublished: '2026-03-27',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['voyance mariage', 'vais-je me marier', 'quand vais-je me marier', 'prédiction mariage', 'voyance union'],
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Sentiments & Avenir', url: 'https://www.voyantlove.fr/sentiments/' },
    { name: 'Voyance Mariage', url: 'https://www.voyantlove.fr/sentiments/voyance-mariage/' },
  ]);

  const authorSchema = getAuthorSchema();

  const faqSchema = getFAQSchema([
    {
      question: 'La voyance peut-elle vraiment prédire un mariage ?',
      answer: 'La voyance mariage ne prédit pas un événement gravé dans le marbre, mais elle lit les tendances énergétiques actuelles et les probabilités d\'union selon votre vibration amoureuse. Un voyant expérimenté peut identifier si votre relation actuelle porte les graines d\'un engagement durable, estimer une fenêtre temporelle favorable et repérer les blocages qui retardent la demande en mariage. Le tarot union, la numérologie et l\'astrologie conjugale donnent des indications précises — sans jamais ôter votre libre arbitre ni celui de votre partenaire.',
    },
    {
      question: 'Quelles cartes du tarot annoncent un mariage ou une demande ?',
      answer: 'Plusieurs arcanes majeurs et mineurs signalent un mariage imminent. L\'Amoureux (VI) symbolise le choix conscient de l\'union officielle. Le Soleil (XIX) annonce une célébration joyeuse et une reconnaissance publique de l\'amour. Le 10 de Coupe représente l\'accomplissement familial et le bonheur conjugal durable. L\'As de Bâton indique un nouveau départ passionné qui peut mener à l\'engagement. Le 4 de Bâton est la carte la plus directement liée à la cérémonie de mariage et à la fête de l\'union. Leur combinaison dans un tirage constitue un signal fort.',
    },
    {
      question: 'Je suis en couple depuis longtemps — pourquoi pas encore de demande en mariage ?',
      answer: 'Plusieurs raisons peuvent expliquer un délai dans la demande en mariage, même dans un couple solide. La voyance identifie souvent des peurs inconscientes chez votre partenaire — peur de l\'engagement, blessures passées, ou croyances limitantes sur le mariage héritées de sa famille. Des blocages pratiques comme l\'instabilité financière ou professionnelle jouent aussi un rôle. Un tirage tarot union peut révéler l\'obstacle principal, distinguer un partenaire qui n\'est pas prêt d\'un partenaire qui ne veut pas, et indiquer les conditions à réunir pour que la demande se concrétise dans votre avenir amoureux.',
    },
    {
      question: 'Mon partenaire ne veut pas se marier — que faire selon la voyance ?',
      answer: 'Face à un partenaire réticent au mariage, la voyance peut d\'abord clarifier si ce refus est définitif ou temporaire, et en identifier les racines profondes. La spiritualité amoureuse distingue le partenaire qui a besoin de temps et de sécurité du partenaire dont la mission d\'âme n\'inclut pas l\'union formelle. La voyance vous aide aussi à interroger vos propres motivations : cherchez-vous le mariage comme validation de l\'amour, ou est-il une aspiration profonde et authentique ? Cette clarté permet une conversation honnête en couple et une décision alignée avec votre véritable futur conjoint idéal.',
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
      <header className="bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/sentiments" className="text-white/80 hover:text-white mb-4 inline-block">&larr; Retour à Sentiments &amp; Avenir</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">&#x1F48D; Voyance Mariage</h1>
          <p className="text-xl opacity-95 mb-6">Vais-Je Me Marier ? Avec Qui ?</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#tarot-mariage" className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">Les Cartes du Mariage</a>
            <a href="#quand" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition">Timing &amp; Numérologie</a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Stats Bar */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">&#x1F48D;</div><div className="text-2xl font-bold text-pink-600">5 Cartes</div><div className="text-sm text-gray-600">Tarot union &amp; mariage</div></div>
          <div><div className="text-3xl mb-1">&#x2728;</div><div className="text-2xl font-bold text-pink-600">16 ans</div><div className="text-sm text-gray-600">D'expertise en voyance</div></div>
          <div><div className="text-3xl mb-1">&#x1F52E;</div><div className="text-2xl font-bold text-pink-600">3 400+</div><div className="text-sm text-gray-600">Consultations réalisées</div></div>
          <div><div className="text-3xl mb-1">&#x1F31F;</div><div className="text-2xl font-bold text-pink-600">Timing</div><div className="text-sm text-gray-600">Cycles Jupiter &amp; num.</div></div>
        </div>

        {/* E-E-A-T Signal */}
        <EEATSignal
          colorScheme="rose"
        />

        {/* Answer Capsule */}
        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-rose-500">
          <p className="text-lg leading-relaxed mb-4">
            La <strong>voyance mariage</strong> répond à l'une des questions les plus profondes de la vie amoureuse : vais-je me marier, et avec qui ? En croisant tarot, numérologie et astrologie, elle révèle les probabilités d'une <strong>demande en mariage</strong>, les qualités et le profil de votre <strong>futur conjoint</strong>, et les périodes de l'année les plus favorables à l'<strong>engagement</strong>. Le <strong>tirage tarot union</strong> illumine les forces et les blocages qui entourent le projet de mariage, qu'il s'agisse d'une relation déjà établie ou d'une rencontre encore à venir.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Au-delà de la simple prédiction, la voyance mariage explore la <strong>compatibilité</strong> profonde entre deux âmes, la solidité des fondations émotionnelles, et les dynamiques invisibles qui favorisent ou freinent une union officielle. Chaque consultation révèle non seulement si et quand la <strong>cérémonie</strong> peut avoir lieu, mais aussi comment préparer votre terrain intérieur pour accueillir cet engagement avec amour et clarté.
          </p>
          <p className="text-lg leading-relaxed">
            Pour mieux cerner votre destinée amoureuse au-delà du mariage, explorez également notre guide sur <Link href="/sentiments/avenir-amoureux" className="text-rose-600 hover:text-rose-800 underline font-medium">votre avenir amoureux</Link> complet, qui embrasse tous les aspects de votre vie sentimentale à venir.
          </p>
        </article>

        <VoyantQuickCTA topic="sentiments" source="voyance-mariage-early" />

        {/* Ce que la voyance révèle sur votre mariage */}
        <section className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-8 mb-8 border-2 border-rose-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">&#x1F52E; Ce que la Voyance Révèle sur Votre Mariage</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">La voyance mariage peut identifier les probabilités d'union, le timing favorable, les blocages énergétiques et le profil de votre futur conjoint — sans jamais ôter votre libre arbitre.</p>
          <p className="text-gray-700 mb-6">
            La <strong>voyance mariage</strong> ne fonctionne pas comme un oracle infaillible qui dicte un futur figé. Elle lit les courants énergétiques présents dans votre vie amoureuse et évalue la probabilité d'une union formelle selon votre vibration actuelle, les tendances de votre relation, et les cycles cosmiques qui vous gouvernent.
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 border-l-4 border-rose-500">
              <h3 className="font-bold text-lg mb-2 text-rose-700">Ce qu'un voyant peut lire</h3>
              <p className="text-gray-700">
                Un voyant expérimenté peut percevoir si votre partenaire actuel porte en lui la graine d'un <strong>engagement durable</strong>, estimer la fenêtre temporelle dans laquelle une demande en mariage pourrait survenir, identifier les peurs ou blocages inconscients qui retardent l'union, et décrire les traits caractéristiques de votre futur conjoint si vous êtes encore célibataire. Le <strong>tirage tarot union</strong> révèle aussi la nature de l'amour qui vous unit : passion fugace, amour profond, connexion karmique ou âme complémentaire.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-pink-400">
              <h3 className="font-bold text-lg mb-2 text-pink-700">Les limites de la prédiction</h3>
              <p className="text-gray-700">
                La voyance opère sur les probabilités, non sur les certitudes absolues. Le libre arbitre de chaque individu peut modifier le cours des événements. Une prédiction de mariage pour l'année suivante signifie que les conditions énergétiques sont favorables — pas que l'issue est garantie. La <strong>compatibilité</strong> émotionnelle et spirituelle entre les partenaires, leur degré de maturité affective et leurs choix conscients restent déterminants. La voyance est un outil d'éclairage, pas de substitution à votre propre discernement et à la communication au sein du couple.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-purple-400">
              <h3 className="font-bold text-lg mb-2 text-purple-700">Comment se préparer à une consultation mariage</h3>
              <p className="text-gray-700">
                Pour tirer le meilleur parti d'une consultation voyance mariage, venez avec des questions précises : "Mon partenaire envisage-t-il un engagement cette année ?", "Quels blocages freinent la demande en mariage ?", "À quelle période le mariage est-il le plus probable ?". Apportez si possible la date de naissance de votre partenaire pour un éclairage astrologique et numérique approfondi. La <strong>prédiction mariage</strong> la plus complète combine tarot, numérologie personnelle et synastrie astrologique pour une vision à 360 degrés de votre potentiel d'union.
              </p>
            </div>
          </div>
        </section>

        {/* Les cartes du tarot */}
        <section id="tarot-mariage" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-rose-600">&#x1F0CF; Les Cartes du Tarot qui Annoncent un Mariage</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">L'Amoureux, le Soleil, le 10 de Coupe, l'As de Bâton et le 4 de Bâton sont les cinq cartes les plus associées à l'annonce d'un mariage ou d'une demande imminente dans un tirage amoureux.</p>
          <p className="text-gray-700 mb-6">
            Chaque carte du tarot porte une symbolique précise lorsqu'elle apparaît dans un contexte de <strong>voyance union</strong>. Leur position dans le tirage et leur association avec les autres cartes affinent considérablement le message. Voici les cinq arcanes les plus significatifs pour la question du mariage.
          </p>

          <div className="space-y-4">
            <div className="bg-pink-50 p-5 rounded-lg border-l-4 border-pink-500">
              <h3 className="font-bold text-pink-700 mb-2 text-lg">&#x1F0CF; L'Amoureux (Arcane VI)</h3>
              <p className="text-gray-700">
                L'Amoureux représente le choix conscient et délibéré de l'union. Dans un tirage mariage, il symbolise la décision intérieure d'officialiser la relation. Il peut indiquer que votre partenaire est en train de peser cet engagement dans son for intérieur. Quand il apparaît accompagné d'autres cartes positives, il signale que la <strong>demande en mariage</strong> est une possibilité réelle dans l'horizon proche. Il invite aussi à vérifier que les deux partenaires choisissent cette union librement et en conscience, sans pression extérieure.
              </p>
            </div>

            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-bold text-yellow-700 mb-2 text-lg">&#x1F0CF; Le Soleil (Arcane XIX)</h3>
              <p className="text-gray-700">
                Le Soleil est la carte de la joie rayonnante, de la réussite et de la célébration. Dans un tirage mariage, il annonce une <strong>cérémonie</strong> heureuse, reconnue et célébrée par l'entourage. Il indique également une union fondée sur une lumière authentique et une transparence émotionnelle entre les partenaires. Le Soleil dans une position d'avenir représente souvent une union qui s'épanouit pleinement et qui rayonne de bonheur durable.
              </p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-700 mb-2 text-lg">&#x1F0CF; Le 10 de Coupe</h3>
              <p className="text-gray-700">
                Le 10 de Coupe est la carte de l'accomplissement émotionnel et familial par excellence. Elle représente le bonheur conjugal durable, la fondation d'un foyer aimant et l'épanouissement de la vie à deux. Sa présence dans un tirage mariage est un signe très positif : elle indique que l'union envisagée portera les fruits d'une profonde satisfaction émotionnelle et d'une <strong>compatibilité</strong> fondamentale entre les âmes. C'est la carte du « ils vécurent heureux » du tarot.
              </p>
            </div>

            <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
              <h3 className="font-bold text-orange-700 mb-2 text-lg">&#x1F0CF; L'As de Bâton</h3>
              <p className="text-gray-700">
                L'As de Bâton représente un nouveau départ ardent, une initiative passionnée et le lancement d'un projet amoureux majeur. Dans le contexte du mariage, il peut signaler l'émergence d'une décision d'<strong>engagement</strong> chez votre partenaire — une étincelle qui cherche à se concrétiser. Il peut aussi indiquer une proposition de mariage spontanée et enthousiaste, portée par une énergie de feu et de désir de construction commune. Sa présence est encourageante et dynamique.
              </p>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-700 mb-2 text-lg">&#x1F0CF; Le 4 de Bâton</h3>
              <p className="text-gray-700">
                Le 4 de Bâton est la carte la plus directement liée à la <strong>cérémonie de mariage</strong> dans le tarot des mineurs. Elle représente littéralement la célébration, le portique floral de la noce, la fête et la stabilité d'une union officialisée. Sa présence dans un tirage est un signal puissant d'une célébration imminente ou prochaine. Combinée au Soleil ou à l'Amoureux, elle constitue l'un des signes les plus clairs d'un mariage dans votre avenir proche selon la <strong>voyance mariage</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Signes que la demande approche */}
        <section className="bg-gradient-to-br from-purple-50 to-rose-50 rounded-xl p-8 mb-8 border-2 border-purple-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">&#x2728; Signes que la Demande en Mariage Approche</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Certains comportements, synchronicités et rêves signalent que votre partenaire prépare une demande en mariage ou que l'univers vous oriente vers une union prochaine.</p>
          <p className="text-gray-700 mb-6">
            En dehors du tarot, certains signaux dans votre vie quotidienne peuvent indiquer qu'une <strong>demande en mariage</strong> se prépare. La voyance interprète ces signaux comme des marqueurs énergétiques d'un changement de cap amoureux imminent.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border-2 border-rose-200">
              <h3 className="font-bold text-xl mb-4 text-rose-700">Comportements de votre partenaire</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">&#x2665;</span>
                  <p>Il ou elle parle davantage d'avenir commun, de projets à long terme et de famille</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">&#x2665;</span>
                  <p>Changements de comportement discrets : économies, discussions avec la famille, secrets inhabituels</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">&#x2665;</span>
                  <p>Intérêt soudain pour des bagues, des bijoux ou les préférences de votre entourage</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">&#x2665;</span>
                  <p>Profonde stabilisation émotionnelle, réduction des conflits et apaisement général du couple</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-purple-200">
              <h3 className="font-bold text-xl mb-4 text-purple-700">Synchronicités &amp; signes de l'univers</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">&#x2605;</span>
                  <p>Répétition du chiffre 6 (Amoureux tarot) ou de nombres doubles dans votre quotidien</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">&#x2605;</span>
                  <p>Rêves de bague, de cérémonie, de robe blanche ou de votre partenaire en habits de fête</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">&#x2605;</span>
                  <p>Invitations répétées à des mariages ou rencontres fréquentes avec des couples qui viennent de se fiancer</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">&#x2605;</span>
                  <p>Sentiment intérieur fort et persistant d'un engagement imminent, intuition qui se renforce chaque semaine</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Avec qui vais-je me marier ? */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-rose-600">&#x1F48F; Avec Qui Vais-Je Me Marier ?</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">La voyance peut décrire le profil de votre futur conjoint selon ses traits de caractère dominants, son signe astrologique probable et le timing de votre rencontre si elle n'a pas encore eu lieu.</p>
          <p className="text-gray-700 mb-6">
            La question du <strong>futur conjoint</strong> est l'une des plus demandées en consultation voyance mariage. Que vous soyez en couple et incertain de l'avenir, ou célibataire en attente d'une rencontre décisive, la voyance peut apporter des éléments concrets de réponse. Pour approfondir la <Link href="/sentiments/compatibilite-amoureuse" className="text-rose-600 hover:text-rose-800 underline font-medium">compatibilité de votre couple</Link>, un tirage dédié est particulièrement révélateur.
          </p>

          <div className="space-y-5">
            <div className="bg-rose-50 border-l-4 border-rose-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-rose-700">Le portrait de votre futur conjoint</h3>
              <p className="text-gray-700">
                Par le tirage des cartes et la lecture de votre thème natal, un voyant peut dresser un portrait énergétique de votre <strong>futur conjoint</strong> : traits de caractère dominants (bienveillance, ambition, sensibilité, stabilité), cadre de vie probable (ville ou campagne, actif ou contemplatif), et même des indices sur sa profession ou ses passions. Ces éléments ne constituent pas une fiche d'identité précise, mais ils permettent de reconnaître la personne quand elle se présentera dans votre vie.
              </p>
            </div>

            <div className="bg-pink-50 border-l-4 border-pink-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-pink-700">Profil astrologique du partenaire idéal</h3>
              <p className="text-gray-700">
                L'astrologie conjugale analyse la <strong>compatibilité</strong> entre votre thème natal et les archétypes planétaires pour identifier les signes zodiacaux les plus harmonieux avec votre carte natale. Par exemple, une Vierge avec Vénus en Cancer sera naturellement attirée par des signes d'Eau ou de Terre stables. Un Lion avec Mars en Bélier trouvera une union passionnée avec des signes de Feu. Cette analyse nuance les compatibilités simplistes souvent citées et offre une perspective bien plus riche sur l'identité probable de votre <strong>futur conjoint</strong>.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-purple-700">Si la rencontre n'a pas encore eu lieu</h3>
              <p className="text-gray-700">
                Pour les personnes célibataires, la <strong>voyance mariage</strong> peut indiquer dans quel contexte la rencontre avec votre futur conjoint est la plus probable (via votre entourage, lors d'un voyage, via une application, dans un cadre professionnel ou associatif), la période de l'année la plus propice à cette rencontre, et les changements de comportement ou d'environnement qui peuvent accélérer cette venue. Si vous cherchez à <Link href="/nouvelle-rencontre/trouver-ame-soeur" className="text-rose-600 hover:text-rose-800 underline font-medium">trouver votre âme sœur</Link>, une consultation combinant voyance et numérologie personnelle est particulièrement éclairante.
              </p>
            </div>
          </div>
        </section>

        {/* Quand vais-je me marier ? */}
        <section id="quand" className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-8 mb-8 border-2 border-pink-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">&#x1F4C5; Quand Vais-Je Me Marier ?</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Les périodes les plus favorables au mariage se lisent dans les cycles de Jupiter, les années personnelles en numérologie et les transits planétaires sur votre Vénus natale.</p>
          <p className="text-gray-700 mb-6">
            La question du timing est centrale en <strong>prédiction mariage</strong>. Plusieurs disciplines divinatoires convergent pour identifier les fenêtres temporelles les plus propices à l'union officielle.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-xl mb-4 text-rose-700">&#x1FA90; Cycles de Jupiter</h3>
              <p className="text-gray-700 mb-3">
                Jupiter, planète de l'expansion et de la chance, fait le tour du zodiaque en 12 ans. Lorsqu'il transite sur votre Vénus natale, votre Maison VII (maison du mariage) ou votre Descendant, il ouvre une période de grande opportunité d'union et d'<strong>engagement</strong> officiel. Ces fenêtres durent environ 12 à 18 mois et constituent les périodes les plus favorables pour célébrer un mariage ou recevoir une demande.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-xl mb-4 text-purple-700">&#x1F522; Années Personnelles en Numérologie</h3>
              <p className="text-gray-700 mb-3">
                En numérologie, certaines années personnelles favorisent particulièrement l'union. L'<strong>année personnelle 6</strong> est la plus associée au mariage, à la famille et à l'engagement — c'est l'année des unions officielles et des engagements durables. L'année 2 favorise les partenariats intimes et les fiançailles. L'année 9 peut marquer la fin d'un cycle et la préparation à une nouvelle union. Calculer votre année personnelle actuelle vous donne une indication précieuse sur le timing probable de votre mariage.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-xl mb-4 text-pink-700">&#x1F4AB; Transits Vénus et Saisons Favorables</h3>
            <p className="text-gray-700 mb-4">
              Les transits de Vénus sur les points sensibles de votre thème natal (Ascendant, Vénus natale, Lune, soleil) créent des fenêtres d'opportunité romantique et d'<strong>engagement</strong>. Certaines saisons astronomiques sont traditionnellement plus propices : le printemps (sous l'influence de Vénus en Taureau) et la fin d'été (Vénus en Vierge ou Balance) concentrent historiquement le plus grand nombre de mariages et de demandes.
            </p>
            <p className="text-gray-700">
              La combinaison d'un transit Jupiter favorable, d'une année personnelle 6 en numérologie, et d'une saison Vénus positive constitue une convergence rare et puissante — un signal fort que la <strong>voyance mariage</strong> identifie comme une période d'exception pour l'union. Ces fenêtres ne se présentent que tous les 6 à 12 ans : les repérer à l'avance est l'un des cadeaux les plus précieux d'une consultation voyance dédiée au mariage.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-8 text-rose-600">&#x2753; Questions Fréquentes sur la Voyance Mariage</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Retrouvez les réponses aux questions les plus posées sur la prédiction mariage, le tarot union, les blocages à l'engagement et le comportement d'un partenaire réticent.</p>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">La voyance peut-elle vraiment prédire un mariage ?</h3>
              <p className="text-gray-700 leading-relaxed">
                La <strong>voyance mariage</strong> ne prédit pas un événement gravé dans le marbre, mais elle lit les tendances énergétiques actuelles et les probabilités d'union selon votre vibration amoureuse. Un voyant expérimenté peut identifier si votre relation actuelle porte les graines d'un <strong>engagement</strong> durable, estimer une fenêtre temporelle favorable et repérer les blocages qui retardent la <strong>demande en mariage</strong>. Le <strong>tarot union</strong>, la numérologie et l'astrologie conjugale donnent des indications précises — sans jamais ôter votre libre arbitre ni celui de votre partenaire.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Quelles cartes du tarot annoncent un mariage ou une demande ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Plusieurs arcanes majeurs et mineurs signalent un mariage imminent. L'<strong>Amoureux</strong> (VI) symbolise le choix conscient de l'union officielle. Le <strong>Soleil</strong> (XIX) annonce une <strong>cérémonie</strong> joyeuse et une reconnaissance publique de l'amour. Le <strong>10 de Coupe</strong> représente l'accomplissement familial et le bonheur conjugal durable. L'<strong>As de Bâton</strong> indique un nouveau départ passionné qui peut mener à l'<strong>engagement</strong>. Le <strong>4 de Bâton</strong> est la carte la plus directement liée à la <strong>cérémonie de mariage</strong> et à la fête de l'union. Leur combinaison dans un tirage constitue un signal fort de <strong>voyance union</strong>.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Je suis en couple depuis longtemps — pourquoi pas encore de demande en mariage ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Plusieurs raisons peuvent expliquer un délai dans la <strong>demande en mariage</strong>, même dans un couple solide. La <strong>voyance mariage</strong> identifie souvent des peurs inconscientes chez votre partenaire — peur de l'<strong>engagement</strong>, blessures passées, ou croyances limitantes sur le mariage héritées de sa famille. Des blocages pratiques comme l'instabilité financière ou professionnelle jouent aussi un rôle. Un <strong>tirage tarot union</strong> peut révéler l'obstacle principal, distinguer un partenaire qui n'est pas prêt d'un partenaire qui ne veut pas, et indiquer les conditions à réunir pour que la demande se concrétise dans votre <strong>avenir amoureux</strong>.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Mon partenaire ne veut pas se marier — que faire selon la voyance ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Face à un partenaire réticent au mariage, la <strong>voyance</strong> peut d'abord clarifier si ce refus est définitif ou temporaire, et en identifier les racines profondes. La spiritualité amoureuse distingue le partenaire qui a besoin de temps et de sécurité du partenaire dont la mission d'âme n'inclut pas l'union formelle. La <strong>voyance mariage</strong> vous aide aussi à interroger vos propres motivations : cherchez-vous le mariage comme validation de l'amour, ou est-il une aspiration profonde et authentique ? Cette clarté permet une conversation honnête en couple et une décision alignée avec votre véritable <strong>futur conjoint</strong> idéal.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Connexes */}
        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900">&#x1F4DA; Articles Connexes</h3>
          <div className="space-y-2">
            <Link href="/sentiments" className="block text-rose-600 hover:text-rose-800 font-medium">&rarr; Sentiments &amp; Avenir : Toutes nos Guidances</Link>
            <Link href="/sentiments/avenir-amoureux" className="block text-rose-600 hover:text-rose-800 font-medium">&rarr; Mon Avenir Amoureux : Guidance Complète</Link>
            <Link href="/sentiments/compatibilite-amoureuse" className="block text-rose-600 hover:text-rose-800 font-medium">&rarr; Compatibilité Amoureuse &amp; Spirituelle</Link>
            <Link href="/nouvelle-rencontre/trouver-ame-soeur" className="block text-rose-600 hover:text-rose-800 font-medium">&rarr; Trouver son Âme S&oelig;ur : Guide Complet</Link>
          </div>
        </div>

        <VoyantFinalCTA topic="sentiments" source="voyance-mariage-final" />
      </div>
    </main>
  );
}
