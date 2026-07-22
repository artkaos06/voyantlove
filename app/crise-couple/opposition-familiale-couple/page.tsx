import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema, getAuthorSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';

export const metadata: Metadata = {
  title: 'Opposition Familiale au Couple : Voyance et Solutions',
  description: 'Votre famille s\'oppose à votre relation ? Le tarot éclaire les causes de cette opposition et les stratégies pour préserver votre couple.',
  keywords: ['opposition familiale couple', 'famille contre ma relation', 'parents opposés relation voyance', 'famille désapprouve couple', 'tarot opposition familiale'],
  alternates: {
    canonical: 'https://www.voyantlove.fr/crise-couple/opposition-familiale-couple/',
  },
};

export default function OppositionFamilialeCouplePage() {
  const articleSchema = getArticleSchema({
    title: 'Opposition Familiale au Couple : Voyance et Solutions',
    description: 'Votre famille s\'oppose à votre relation ? Le tarot éclaire les causes de cette opposition et les stratégies pour préserver votre couple.',
    url: 'https://www.voyantlove.fr/crise-couple/opposition-familiale-couple/',
    datePublished: '2026-07-22',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['opposition familiale couple', 'famille contre ma relation', 'parents opposés relation voyance', 'famille désapprouve couple', 'tarot opposition familiale'],
  });

  const faqSchema = getFAQSchema([
    {
      question: 'Pourquoi ma famille s\'oppose-t-elle à ma relation ?',
      answer: 'Les oppositions familiales naissent souvent de différences culturelles, religieuses ou sociales, de blessures passées projetées sur le nouveau partenaire, ou d\'une peur de perdre le lien privilégié avec l\'enfant. Le tarot familial identifie la racine émotionnelle réelle de cette opposition : protection excessive, préjugés, jalousie inconsciente ou véritable inquiétude fondée sur des signaux objectifs concernant la relation.',
    },
    {
      question: 'Faut-il choisir entre sa famille et son couple ?',
      answer: 'Ce choix radical est rarement nécessaire et souvent contre-productif. La plupart des situations d\'opposition familiale évoluent avec le temps, le dialogue et la démonstration de la solidité du couple. Le tarot aide à identifier des voies de conciliation avant d\'envisager une rupture définitive avec l\'un ou l\'autre camp, en révélant le potentiel réel d\'apaisement de la situation.',
    },
    {
      question: 'Comment faire accepter mon/ma partenaire à ma famille ?',
      answer: 'La patience, la transparence et les occasions de rencontre progressive et informelle permettent souvent d\'adoucir les résistances familiales. Éviter la confrontation frontale et privilégier des preuves concrètes d\'engagement et de sérieux du couple facilite l\'acceptation. Le tarot indique le moment le plus favorable pour organiser ces rapprochements et les personnes clés à convaincre en priorité.',
    },
    {
      question: 'L\'opposition familiale peut-elle détruire un couple ?',
      answer: 'Oui, si elle n\'est pas gérée avec un front uni entre les partenaires. Le véritable danger ne vient pas de l\'opposition elle-même mais des divisions qu\'elle crée au sein du couple si l\'un des deux partenaires cède à la pression familiale au détriment de la relation. Le tarot évalue la solidité du couple face à cette pression externe et sa capacité à rester uni.',
    },
    {
      question: 'Comment savoir si l\'opposition familiale est justifiée ?',
      answer: 'Une opposition fondée sur des préoccupations concrètes et vérifiables (comportement toxique, instabilité, valeurs incompatibles) mérite d\'être entendue sérieusement. Une opposition fondée uniquement sur des préjugés, une origine sociale ou une possessivité parentale excessive relève davantage d\'un blocage émotionnel familial à travailler que d\'un signal d\'alerte réel concernant votre partenaire.',
    },
  ]);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Crise de Couple', url: 'https://www.voyantlove.fr/crise-couple/' },
    { name: 'Opposition Familiale', url: 'https://www.voyantlove.fr/crise-couple/opposition-familiale-couple/' },
  ]);

  const authorSchema = getAuthorSchema();

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />

      <header className="bg-gradient-to-r from-amber-700 via-orange-700 to-red-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/crise-couple" className="text-white/80 hover:text-white mb-4 inline-block">&larr; Retour aux Crises de Couple</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{'\u{1F46A}'} Opposition Familiale au Couple</h1>
          <p className="text-xl opacity-95 mb-6">Comment le tarot éclaire et apaise le conflit entre votre famille et votre relation</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#causes" className="bg-white text-orange-700 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">Comprendre les Causes</a>
            <a href="#strategies" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-700 transition">Stratégies d&apos;Apaisement</a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">{'\u{1F52E}'}</div><div className="text-2xl font-bold text-orange-700">Reconnue</div><div className="text-sm text-gray-600">Expertise</div></div>
          <div><div className="text-3xl mb-1">{'\u{1F46A}'}</div><div className="text-2xl font-bold text-orange-700">2,800+</div><div className="text-sm text-gray-600">Tirages réalisés</div></div>
          <div><div className="text-3xl mb-1">{'⭐'}</div><div className="text-2xl font-bold text-orange-700">4.6/5</div><div className="text-sm text-gray-600">203 avis</div></div>
          <div><div className="text-3xl mb-1">{'\u{1F512}'}</div><div className="text-2xl font-bold text-orange-700">100%</div><div className="text-sm text-gray-600">Confidentiel</div></div>
        </div>

        <EEATSignal colorScheme="orange" method="Tarot familial et guidance de couple" />

        {/* Answer Capsule */}
        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-orange-600">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-4">
              Faire face à une <strong>opposition familiale</strong> envers son couple est une épreuve particulièrement douloureuse, tiraillée entre <strong>loyauté familiale</strong> et <strong>amour choisi</strong>. Que l&apos;opposition vienne de différences culturelles, religieuses, sociales ou d&apos;une possessivité parentale, le <strong>tarot familial</strong> permet d&apos;identifier la racine réelle de ce conflit et d&apos;évaluer les chances d&apos;apaisement à moyen terme.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Cette situation fragilise souvent le couple lui-même, au-delà du conflit avec la famille. Pour renforcer votre <strong>union</strong> face à cette pression externe, notre guidance sur <Link href="/crise-couple/sauver-son-couple" className="text-orange-700 hover:text-orange-900 underline font-medium">sauver son couple</Link> propose des stratégies complémentaires de consolidation.
            </p>
            <p className="text-lg leading-relaxed">
              Grâce à un <strong>tirage ciblé</strong>, la <strong>voyance relationnelle</strong> révèle si cette opposition est une épreuve temporaire destinée à renforcer votre couple, ou un <strong>signal profond</strong> méritant une attention particulière avant de vous engager davantage.
            </p>
          </div>
        </article>

        <VoyantQuickCTA topic="crise-couple" source="opposition-familiale-early" />

        {/* H2: Pourquoi les familles s'opposent */}
        <section id="causes" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F914}'} Pourquoi les Familles s&apos;Opposent à une Relation</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Differences culturelles, blessures passees projetees, peur de perdre le lien avec l&apos;enfant ou preoccupations legitimes sont les causes principales d&apos;opposition familiale a une relation amoureuse.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Comprendre l&apos;origine réelle de l&apos;<strong>opposition</strong> est la première étape pour la désamorcer efficacement.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-amber-700">{'\u{1F30D}'} Différences Culturelles ou Religieuses</h3>
              <p className="text-gray-700 text-sm mb-2">
                Les <strong>différences d&apos;origine</strong>, de religion ou de tradition familiale nourrissent des craintes liées à la transmission des valeurs et à l&apos;identité familiale, particulièrement dans les familles fortement attachées à leurs racines.
              </p>
            </div>
            <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-orange-700">{'\u{1F494}'} Blessures Passées Projetées</h3>
              <p className="text-gray-700 text-sm mb-2">
                Un parent ayant vécu une <strong>relation douloureuse</strong> similaire projette parfois inconsciemment ses propres blessures sur le nouveau partenaire de son enfant, sans lien réel avec la situation actuelle.
              </p>
            </div>
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-red-700">{'\u{1F491}'} Peur de Perdre le Lien Privilégié</h3>
              <p className="text-gray-700 text-sm mb-2">
                Certains parents redoutent inconsciemment de perdre leur <strong>place privilégiée</strong> dans la vie de leur enfant une fois le couple installé, générant une résistance émotionnelle plus qu&apos;un jugement objectif du partenaire.
              </p>
            </div>
            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-yellow-700">{'⚠️'} Préoccupations Légitimes</h3>
              <p className="text-gray-700 text-sm mb-2">
                Parfois, l&apos;opposition repose sur des <strong>observations concrètes</strong> : comportement instable, manque de respect ou signaux d&apos;alerte objectifs que la famille perçoit avant que vous n&apos;en preniez pleinement conscience.
              </p>
            </div>
          </div>
        </section>

        {/* H2: Le Tirage */}
        <section className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 mb-8 border-2 border-orange-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F0CF}'} Le Tirage &laquo;Notre Couple Face à l&apos;Opposition Familiale&raquo;</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Ce tirage en trois positions evalue la nature reelle de l&apos;opposition, la solidite du couple face a cette pression et le potentiel d&apos;apaisement de la situation dans le temps.</p>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-amber-500">
              <h3 className="font-bold text-lg mb-3 text-amber-700">Position 1 : Nature de l&apos;Opposition</h3>
              <p className="text-gray-700 text-sm mb-2">
                La Papesse ou le Cinq de Bâton indiquent une opposition fondée sur la <strong>peur ou l&apos;incompréhension</strong> plutôt qu&apos;un jugement objectif de votre relation.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500">
              <h3 className="font-bold text-lg mb-3 text-orange-700">Position 2 : Solidité du Couple</h3>
              <p className="text-gray-700 text-sm mb-2">
                La Force ou Les Amoureux confirment un <strong>front uni</strong> capable de résister à la pression. Le Sept d&apos;Épée signale un risque de division interne.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="font-bold text-lg mb-3 text-red-700">Position 3 : Potentiel d&apos;Apaisement</h3>
              <p className="text-gray-700 text-sm mb-2">
                Le Soleil ou le Dix de Coupe annoncent une <strong>réconciliation familiale</strong> possible avec le temps. La Tour indique une rupture plus profonde à anticiper.
              </p>
            </div>
          </div>
        </section>

        <VoyantRecommendations topic="crise-couple" limit={3} showOnlineFirst={true} source="opposition-familiale-mid" />

        {/* H2: Faut-il choisir */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'⚖️'} Faut-il Choisir Entre l&apos;Amour et la Famille</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Ce choix radical est rarement necessaire : la plupart des oppositions familiales evoluent avec le dialogue, la patience et la demonstration de la solidite du couple dans le temps.</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le véritable danger ne vient pas toujours de l&apos;<strong>opposition elle-même</strong>, mais des <strong>divisions internes</strong> qu&apos;elle provoque au sein du couple si l&apos;un des partenaires cède à la pression familiale sans en discuter ouvertement avec l&apos;autre. Un couple qui traverse cette épreuve unie en ressort généralement renforcé, à condition de préserver une <Link href="/crise-couple/problemes-communication-couple" className="text-orange-700 hover:text-orange-900 underline font-medium">communication transparente</Link> entre les deux partenaires.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Rompre définitivement avec sa famille ou sacrifier sa relation amoureuse sont des décisions extrêmes qui méritent d&apos;être envisagées seulement après avoir épuisé toutes les voies de dialogue et de conciliation possibles.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <p className="text-gray-700"><strong>{'✨'} Point clé :</strong> Un couple soudé qui présente un <strong>front commun</strong> face à la famille a statistiquement plus de chances de voir l&apos;opposition s&apos;apaiser qu&apos;un couple divisé par la pression extérieure.</p>
          </div>
        </section>

        {/* H2: Stratégies */}
        <section id="strategies" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F6E1}️'} Stratégies pour Apaiser les Tensions Familiales</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Patience, rencontres progressives, transparence et front uni entre partenaires sont les strategies les plus efficaces pour apaiser une opposition familiale au fil du temps.</p>
          <div className="space-y-4">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded">
              <h3 className="font-bold mb-2 text-amber-700">{'⏳'} Patience et Temps Long</h3>
              <p className="text-gray-700 text-sm">La plupart des <strong>résistances familiales</strong> s&apos;atténuent naturellement avec le temps, à mesure que la famille observe la stabilité et le sérieux de la relation.</p>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded">
              <h3 className="font-bold mb-2 text-orange-700">{'\u{1F91D}'} Rencontres Progressives et Informelles</h3>
              <p className="text-gray-700 text-sm">Privilégier des <strong>occasions informelles</strong> de rencontre plutôt que des confrontations directes permet à la famille d&apos;apprivoiser progressivement votre partenaire.</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded">
              <h3 className="font-bold mb-2 text-red-700">{'\u{1F4AC}'} Transparence Sans Confrontation</h3>
              <p className="text-gray-700 text-sm">Exprimer ses choix avec <strong>fermeté et respect</strong>, sans chercher l&apos;affrontement, désamorce souvent les tensions mieux que le silence ou la justification excessive.</p>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded">
              <h3 className="font-bold mb-2 text-yellow-700">{'\u{1F491}'} Front Uni entre Partenaires</h3>
              <p className="text-gray-700 text-sm">Aligner votre discours et votre posture en couple avant chaque échange familial évite les <strong>manipulations</strong> et les divisions que l&apos;opposition pourrait exploiter.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{'❓'} Questions Fréquentes</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Les reponses aux questions les plus posees sur l&apos;opposition familiale, ses causes et les strategies pour preserver son couple.</p>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pourquoi ma famille s&apos;oppose-t-elle à ma relation ?</h3>
              <p className="text-gray-700 leading-relaxed">Les <strong>oppositions familiales</strong> naissent souvent de différences culturelles, religieuses ou sociales, de blessures passées projetées sur le nouveau partenaire, ou d&apos;une <strong>peur de perdre le lien privilégié</strong> avec l&apos;enfant. Le tarot familial identifie la racine émotionnelle réelle de cette opposition.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Faut-il choisir entre sa famille et son couple ?</h3>
              <p className="text-gray-700 leading-relaxed">Ce choix radical est rarement nécessaire et souvent contre-productif. La plupart des situations d&apos;<strong>opposition familiale</strong> évoluent avec le temps, le dialogue et la démonstration de la <strong>solidité du couple</strong>. Le tarot aide à identifier des voies de conciliation avant d&apos;envisager une rupture définitive.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment faire accepter mon/ma partenaire à ma famille ?</h3>
              <p className="text-gray-700 leading-relaxed">La <strong>patience</strong>, la transparence et les occasions de <strong>rencontre progressive</strong> et informelle permettent souvent d&apos;adoucir les résistances familiales. Éviter la confrontation frontale et privilégier des preuves concrètes d&apos;engagement facilite l&apos;acceptation.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">L&apos;opposition familiale peut-elle détruire un couple ?</h3>
              <p className="text-gray-700 leading-relaxed">Oui, si elle n&apos;est pas gérée avec un <strong>front uni</strong> entre les partenaires. Le véritable danger vient des <strong>divisions internes</strong> qu&apos;elle crée si l&apos;un des partenaires cède à la pression familiale au détriment de la relation.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment savoir si l&apos;opposition familiale est justifiée ?</h3>
              <p className="text-gray-700 leading-relaxed">Une opposition fondée sur des <strong>préoccupations concrètes et vérifiables</strong> mérite d&apos;être entendue sérieusement. Une opposition fondée uniquement sur des préjugés ou une <strong>possessivité parentale</strong> excessive relève davantage d&apos;un blocage émotionnel familial à travailler.</p>
            </div>
          </div>
        </section>

        {/* Articles Connexes */}
        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900">{'\u{1F4DA}'} Articles Connexes</h3>
          <div className="space-y-2">
            <Link href="/crise-couple" className="block text-orange-700 hover:text-orange-900 font-medium">&rarr; Crise de Couple : Toutes nos Guidances</Link>
            <Link href="/crise-couple/sauver-son-couple" className="block text-orange-700 hover:text-orange-900 font-medium">&rarr; Sauver son Couple</Link>
            <Link href="/crise-couple/problemes-communication-couple" className="block text-orange-700 hover:text-orange-900 font-medium">&rarr; Problèmes de Communication</Link>
            <Link href="/crise-couple/couple-a-distance-voyance" className="block text-orange-700 hover:text-orange-900 font-medium">&rarr; Couple à Distance</Link>
            <Link href="/crise-couple/pardonner-en-amour" className="block text-orange-700 hover:text-orange-900 font-medium">&rarr; Pardonner en Amour</Link>
          </div>
        </div>

        <VoyantFinalCTA topic="crise-couple" source="opposition-familiale-final" />
      </div>
    </main>
  );
}
