import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema, getAuthorSchema } from '@/lib/schema';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';
import TarotSpread from '@/components/TarotSpread';

export const metadata: Metadata = {
  title: 'Tarot futur proche amour gratuit : tirage à court terme',
  description: 'Tarot futur proche amour gratuit : un tirage à trois cartes pour éclairer les prochaines semaines de votre vie sentimentale. Tirage en ligne immédiat.',
  keywords: ['tarot futur proche amour', 'tarot futur proche gratuit', 'tirage futur proche amour', 'tarot avenir proche amour', 'tarot court terme amour'],
  alternates: {
    canonical: 'https://www.voyantlove.fr/voyance-gratuite-amour/tarot-futur-proche-amour/',
  },
};

export default function TarotFuturProcheAmourPage() {
  const articleSchema = getArticleSchema({
    title: 'Tarot futur proche amour gratuit : tirage à court terme | VoyantLove',
    description: 'Tarot futur proche amour gratuit : un tirage à trois cartes pour éclairer les prochaines semaines de votre vie sentimentale. Tirage en ligne immédiat.',
    url: 'https://www.voyantlove.fr/voyance-gratuite-amour/tarot-futur-proche-amour/',
    datePublished: '2026-08-07',
    dateModified: '2026-08-07',
    keywords: ['tarot futur proche amour', 'tarot futur proche gratuit', 'tirage futur proche amour', 'tarot avenir proche amour'],
  });

  const authorSchema = getAuthorSchema();

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Voyance Gratuite Amour', url: 'https://www.voyantlove.fr/voyance-gratuite-amour/' },
    { name: 'Tarot Futur Proche Amour', url: 'https://www.voyantlove.fr/voyance-gratuite-amour/tarot-futur-proche-amour/' },
  ]);

  const faqSchema = getFAQSchema([
    {
      question: 'Sur quelle période porte le tarot futur proche en amour ?',
      answer: 'Le tarot futur proche couvre une fenêtre de trois mois. Le tirage proposé ici la structure en trois horizons successifs et non chevauchants : dans les 7 jours, entre 8 et 30 jours, puis du 2e au 3e mois.',
    },
    {
      question: 'Le tarot futur proche gratuit est-il fiable pour prédire une évolution amoureuse ?',
      answer: 'Un tirage gratuit en ligne s\'appuie sur un tirage aléatoire et la symbolique classique des arcanes : il donne une tendance plausible, pas une certitude. Sa valeur est surtout de vous aider à formuler ce que vous pressentez déjà et à identifier les énergies à surveiller. Pour une lecture qui tient compte des spécificités de votre situation (contexte de couple, historique, timing personnel), un voyant spécialisé affine considérablement la précision de cette projection à court terme.',
    },
    {
      question: 'Quelle différence entre tarot futur proche et tirage en croix ?',
      answer: 'Le tirage en croix (5 cartes) analyse une question sentimentale sous plusieurs angles simultanés, situation actuelle, obstacles, influences cachées, conseil et évolution, sans dimension temporelle marquée. Le tarot futur proche, lui, organise ses cartes explicitement dans le temps : chaque position correspond à une échéance différente. Le premier répond à "pourquoi", le second répond davantage à "quand".',
    },
    {
      question: 'Comment poser sa question pour un tarot futur proche amour ?',
      answer: 'Formulez une intention plutôt qu\'une question fermée : "Où en sera ma relation dans les prochaines semaines ?" fonctionne mieux que "Va-t-il revenir dans un mois exactement ?", car le tarot n\'indique pas de dates précises. Restez centré sur une seule situation sentimentale à la fois pour que chaque carte du tirage garde un sens clair et cohérent avec les deux autres.',
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />

      {/* Header */}
      <header className="bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/voyance-gratuite-amour/" className="text-white/80 hover:text-white mb-4 inline-block">&larr; Retour &agrave; Voyance Gratuite Amour</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🔭 Tarot futur proche amour gratuit</h1>
          <p className="text-xl opacity-95 mb-6">Un tirage à trois cartes pour éclairer les prochaines semaines de votre vie sentimentale</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#tirage" className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">Tirer les Cartes ↓</a>
            <a href="#periode" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition">Comprendre la Période</a>
          </div>
        </div>
      </header>

        <VoyantRecommendations variant="rail" topic="voyance-gratuite" limit={3} showOnlineFirst={true} source="tarot-futur-proche-amour-cards-top" />

      {/* Interactive Tarot Tool */}
      <section id="tirage" className="max-w-4xl mx-auto px-4 py-8">
        <TarotSpread
          title="🔭 Votre Tarot Futur Proche Amour"
          subtitle="Trois cartes pour explorer l'évolution de votre situation sentimentale à court terme"
          positions={['Dans les 7 jours', 'Entre 8 et 30 jours', 'Du 2e au 3e mois']}
          ctaSource="tarot-futur-proche-amour"
        />
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Stats bar */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">🔭</div><div className="text-2xl font-bold text-teal-600">3 cartes</div><div className="text-sm text-gray-600">Tirage progressif</div></div>
          <div><div className="text-3xl mb-1">📆</div><div className="text-2xl font-bold text-teal-600">Court terme</div><div className="text-sm text-gray-600">Quelques semaines</div></div>
          <div><div className="text-3xl mb-1">✅</div><div className="text-2xl font-bold text-teal-600">Gratuit</div><div className="text-sm text-gray-600">Sans inscription</div></div>
          <div><div className="text-3xl mb-1">🔮</div><div className="text-2xl font-bold text-teal-600">Immédiat</div><div className="text-sm text-gray-600">Résultat instantané</div></div>
        </div>


        {/* Answer Capsule */}
        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-teal-600">
          <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-lg">
            <p className="text-lg leading-relaxed mb-4">
              Le <strong>tarot futur proche amour</strong> est un tirage &agrave; trois cartes con&ccedil;u pour &eacute;clairer l&apos;&eacute;volution de votre <strong>situation sentimentale</strong>. Chaque carte correspond &agrave; une &eacute;ch&eacute;ance successive et non chevauchante &mdash; dans les 7 jours, entre 8 et 30 jours, puis du 2e au 3e mois &mdash; pour dessiner une v&eacute;ritable <strong>tendance</strong>.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Ce format r&eacute;pond &agrave; une question tr&egrave;s fr&eacute;quente en <strong>voyance amoureuse</strong>&nbsp;: &laquo;&nbsp;o&ugrave; va ma relation&nbsp;&raquo; ou &laquo;&nbsp;qu&apos;est-ce qui m&apos;attend bient&ocirc;t en amour&nbsp;&raquo;. Contrairement au <Link href="/voyance-gratuite-amour/tarot-oui-non-amour/" className="text-teal-600 hover:text-teal-800 underline font-medium">tarot oui/non</Link>, il n&apos;offre pas de r&eacute;ponse binaire mais un r&eacute;cit en trois temps, plus riche pour comprendre une dynamique amoureuse en mouvement.
            </p>
            <p className="text-lg leading-relaxed">
              Ce <strong>tarot futur proche gratuit</strong> constitue une premi&egrave;re approche accessible. Pour une projection int&eacute;grant votre situation pr&eacute;cise, un <strong>voyant sp&eacute;cialis&eacute;</strong> affine consid&eacute;rablement cette lecture &agrave; court terme.
            </p>
          </div>
        </article>

        {/* Section 1 */}
        <section id="periode" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">📆 Que Signifie &laquo;&nbsp;Futur Proche&nbsp;&raquo; en Tarot</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Le futur proche désigne un horizon de quelques semaines à deux ou trois mois, une fenêtre suffisamment courte pour rester lisible sans figer une date précise.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            En <strong>tarot</strong>, la notion de &laquo;&nbsp;futur proche&nbsp;&raquo; d&eacute;signe un horizon temporel court, g&eacute;n&eacute;ralement estim&eacute; entre quelques semaines et deux ou trois mois. Contrairement &agrave; une <Link href="/sentiments/avenir-amoureux/" className="text-teal-600 hover:text-teal-800 underline font-medium">pr&eacute;diction amoureuse</Link> sur le long terme, ce tirage se concentre sur ce qui est d&eacute;j&agrave; en train de se mettre en mouvement dans votre <strong>vie sentimentale</strong> &mdash; des &eacute;nergies qui commencent &agrave; se manifester, plut&ocirc;t que des sc&eacute;narios lointains et abstraits.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Le <strong>tarot</strong> ne fournit jamais de date exacte&nbsp;: il indique des tendances et des &eacute;nergies dominantes sur une p&eacute;riode donn&eacute;e. C&apos;est pourquoi le tirage &agrave; trois cartes segmente cette p&eacute;riode en trois moments successifs plut&ocirc;t que de tout condenser dans une seule carte&nbsp;: cela permet de rep&eacute;rer une &eacute;volution &mdash; une carte tendue en premi&egrave;re position suivie d&apos;une carte plus apais&eacute;e en derni&egrave;re position raconte un mouvement, pas un &eacute;tat fig&eacute;.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Cette approche progressive convient particuli&egrave;rement aux questions du type &laquo;&nbsp;comment va &eacute;voluer ma relation&nbsp;&raquo; ou &laquo;&nbsp;&agrave; quoi dois-je m&apos;attendre bient&ocirc;t&nbsp;&raquo;, plus qu&apos;&agrave; une question binaire.
          </p>
        </section>

        {/* Section 2 */}
        <section className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-8 mb-8 border-2 border-teal-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🧭 Lire les Trois Positions du Tirage</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Chaque position du tirage futur proche raconte une étape différente de la période à venir, à lire comme une progression plutôt que trois messages isolés.</p>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-l-4 border-teal-500">
              <h3 className="font-bold text-teal-700 mb-2">1. Dans les 7 jours</h3>
              <p className="text-gray-700 text-sm">L&apos;&eacute;nergie imm&eacute;diate, ce qui se joue dans les tout prochains jours&nbsp;: une occasion &agrave; saisir, une tension &agrave; d&eacute;samorcer ou une clart&eacute; qui s&apos;installe.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-emerald-500">
              <h3 className="font-bold text-emerald-700 mb-2">2. Entre 8 et 30 jours</h3>
              <p className="text-gray-700 text-sm">La tendance interm&eacute;diaire apr&egrave;s la premi&egrave;re semaine&nbsp;: comment la <strong>situation sentimentale</strong> se consolide ou se transforme avant la fin du premier mois.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-green-500">
              <h3 className="font-bold text-green-700 mb-2">3. Du 2e au 3e mois</h3>
              <p className="text-gray-700 text-sm">La direction &agrave; plus long terme, une fois le premier mois pass&eacute;, si les &eacute;nergies actuelles se maintiennent.</p>
            </div>
          </div>
          <div className="bg-teal-100 border-l-4 border-teal-600 p-5 rounded-lg mt-6">
            <p className="text-gray-700"><strong>Bon &agrave; savoir&nbsp;:</strong> une carte plus difficile en premi&egrave;re position, suivie de cartes plus favorables ensuite, indique souvent une phase de transition n&eacute;cessaire avant une am&eacute;lioration &mdash; pas un mauvais pr&eacute;sage sur toute la p&eacute;riode.</p>
          </div>
        </section>

        <VoyantQuickCTA topic="voyance-gratuite" source="tarot-futur-proche-amour-banner-mid" />

        {/* Section 3 */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🔮 Approfondir au-delà du Tirage Gratuit</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Le tirage en ligne donne une première tendance ; une consultation avec un voyant spécialisé permet d&apos;intégrer le contexte réel de votre relation à cette projection.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Un tirage <strong>tarot futur proche</strong> gratuit s&apos;appuie sur un algorithme al&eacute;atoire&nbsp;: il applique la symbolique classique des <strong>arcanes</strong> sans conna&icirc;tre les d&eacute;tails de votre histoire. Un <strong>voyant sp&eacute;cialis&eacute;</strong> en <strong>voyance amoureuse</strong> combine cette m&ecirc;me structure de lecture avec votre contexte r&eacute;el&nbsp;: l&apos;historique du couple, le comportement r&eacute;cent de l&apos;autre personne, le timing de vos propres d&eacute;cisions.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Si le tirage gratuit fait &eacute;cho &agrave; une question qui vous pr&eacute;occupe s&eacute;rieusement, ou si vous souhaitez une lecture qui int&egrave;gre les <Link href="/reconquete/va-t-il-elle-revenir/" className="text-teal-600 hover:text-teal-800 underline font-medium">signes qu&apos;un ex va revenir</Link> ou l&apos;&eacute;volution d&apos;une <strong>relation actuelle</strong>, une consultation personnalis&eacute;e reste la fa&ccedil;on la plus fiable d&apos;affiner cette projection &agrave; court terme.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">❓ Questions Fréquentes sur le Tarot Futur Proche Amour</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sur quelle période porte le tarot futur proche en amour ?</h3>
              <p className="text-gray-700 leading-relaxed">Le <strong>tarot futur proche</strong> couvre ici une fen&ecirc;tre de trois mois, structur&eacute;e en trois temps successifs et non chevauchants&nbsp;: dans les 7 jours, entre 8 et 30 jours, puis du 2e au 3e mois.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Le tarot futur proche gratuit est-il fiable pour prédire une évolution amoureuse ?</h3>
              <p className="text-gray-700 leading-relaxed">Un tirage gratuit en ligne s&apos;appuie sur un tirage al&eacute;atoire et la symbolique classique des <strong>arcanes</strong>&nbsp;: il donne une tendance plausible, pas une certitude. Sa valeur est surtout de vous aider &agrave; formuler ce que vous pressentez d&eacute;j&agrave; et &agrave; identifier les &eacute;nergies &agrave; surveiller. Pour une lecture qui tient compte des sp&eacute;cificit&eacute;s de votre situation, un <strong>voyant sp&eacute;cialis&eacute;</strong> affine consid&eacute;rablement la pr&eacute;cision de cette projection.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quelle différence entre tarot futur proche et tirage en croix ?</h3>
              <p className="text-gray-700 leading-relaxed">Le <strong>tirage en croix</strong> (5 cartes) analyse une question sentimentale sous plusieurs angles simultan&eacute;s, sans dimension temporelle marqu&eacute;e. Le <strong>tarot futur proche</strong>, lui, organise ses cartes explicitement dans le temps&nbsp;: chaque position correspond &agrave; une &eacute;ch&eacute;ance diff&eacute;rente. Le premier r&eacute;pond &agrave; &laquo;&nbsp;pourquoi&nbsp;&raquo;, le second r&eacute;pond davantage &agrave; &laquo;&nbsp;quand&nbsp;&raquo;.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment poser sa question pour un tarot futur proche amour ?</h3>
              <p className="text-gray-700 leading-relaxed">Formulez une intention plut&ocirc;t qu&apos;une question ferm&eacute;e&nbsp;: &laquo;&nbsp;o&ugrave; en sera ma relation dans les prochaines semaines&nbsp;?&nbsp;&raquo; fonctionne mieux que &laquo;&nbsp;va-t-il revenir dans un mois exactement&nbsp;?&nbsp;&raquo;, car le tarot n&apos;indique pas de dates pr&eacute;cises. Restez centr&eacute;(e) sur une seule situation sentimentale &agrave; la fois pour que chaque carte du tirage garde un sens clair et coh&eacute;rent avec les deux autres.</p>
            </div>
          </div>
        </section>

        {/* Articles Connexes */}
        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900">📚 Articles Connexes</h3>
          <div className="space-y-2">
            <Link href="/voyance-gratuite-amour/" className="block text-teal-600 hover:text-teal-800 font-medium">&rarr; Voyance Gratuite Amour : Guide Complet</Link>
            <Link href="/voyance-gratuite-amour/tarot-du-jour-amour/" className="block text-teal-600 hover:text-teal-800 font-medium">&rarr; Tarot du Jour Amour Gratuit</Link>
            <Link href="/sentiments/avenir-amoureux/" className="block text-teal-600 hover:text-teal-800 font-medium">&rarr; Mon Avenir Amoureux : Prédictions</Link>
            <Link href="/voyance-gratuite-amour/tarot-oui-non-amour/" className="block text-teal-600 hover:text-teal-800 font-medium">&rarr; Tarot Oui Non Amour Gratuit</Link>
            <Link href="/reconquete/va-t-il-elle-revenir/" className="block text-teal-600 hover:text-teal-800 font-medium">&rarr; Va-t-il/elle Revenir ? Prédictions</Link>
          </div>
        </div>

        {/* CTA Footer */}
        <VoyantFinalCTA topic="voyance-gratuite" source="tarot-futur-proche-amour-final" />
      </div>
    </main>
  );
}
