import type { Metadata } from 'next';
import Link from 'next/link';
import { getWebPageSchema, getBreadcrumbSchema, getOrganizationSchema, getFAQSchema, getAuthorSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';

export const metadata: Metadata = {
  title: 'Voyance Amour : Consultation Voyant Amour en Ligne | VoyantLove',
  description: 'Voyance amour : consultez un voyant sp\u00e9cialis\u00e9 en amour pour vos questions sentimentales. Reconqu\u00eate, sentiments, rupture, rencontre \u2014 guidance tarot et astrologie.',
  keywords: ['voyance amour', 'voyant amour', 'voyante amour', 'voyance amoureuse', 'voyance en amour', 'consultation voyance amour', 'voyance amour couple', 'voyance relation amoureuse'],
  alternates: { canonical: 'https://www.voyantlove.fr/voyance-amour/' },
};

export default function VoyanceAmourPage() {
  const webPageSchema = getWebPageSchema({
    title: 'Voyance Amour : Consultation Voyant Amour en Ligne | VoyantLove',
    description: 'Voyance amour : consultez un voyant sp\u00e9cialis\u00e9 en amour pour vos questions sentimentales. Reconqu\u00eate, sentiments, rupture, rencontre \u2014 guidance tarot et astrologie.',
    url: 'https://www.voyantlove.fr/voyance-amour/',
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Voyance Amour', url: 'https://www.voyantlove.fr/voyance-amour/' },
  ]);

  const organizationSchema = getOrganizationSchema();
  const authorSchema = getAuthorSchema();

  const faqSchema = getFAQSchema([
    {
      question: 'Qu\u2019est-ce que la voyance amour\u00a0?',
      answer: 'La voyance amour d\u00e9signe l\u2019ensemble des pratiques divinatoires appliqu\u00e9es aux questions sentimentales. Un voyant sp\u00e9cialis\u00e9 en amour utilise le tarot de Marseille, l\u2019astrologie ou la clairvoyance pour analyser une situation de couple, une rupture, une reconqu\u00eate ou une attente de rencontre. L\u2019objectif n\u2019est pas de pr\u00e9dire un destin fig\u00e9, mais d\u2019\u00e9clairer les \u00e9nergies en pr\u00e9sence, les blocages \u00e9motionnels et les ouvertures possibles. La voyance amour s\u2019adresse \u00e0 toute personne traversant un questionnement sentimental, qu\u2019il s\u2019agisse d\u2019un doute sur les sentiments de l\u2019autre, d\u2019une s\u00e9paration douloureuse ou d\u2019une envie de comprendre son avenir amoureux.',
    },
    {
      question: 'Comment consulter un voyant amour en ligne\u00a0?',
      answer: 'Consulter un voyant amour en ligne est aujourd\u2019hui simple et confidentiel. Vous choisissez un voyant dont le profil et les avis vous inspirent confiance, puis vous r\u00e9servez une consultation par t\u00e9l\u00e9phone, chat ou visio. Avant la s\u00e9ance, formulez clairement votre question \u2014 par exemple \u00ab\u00a0Mon ex va-t-il revenir\u00a0?\u00a0\u00bb ou \u00ab\u00a0Quand vais-je rencontrer quelqu\u2019un\u00a0?\u00a0\u00bb. Le voyant proc\u00e8de ensuite \u00e0 un tirage de tarot ou \u00e0 une lecture \u00e9nerg\u00e9tique adapt\u00e9e \u00e0 votre situation. Une bonne consultation dure entre 20 et 40 minutes et se conclut par des pistes d\u2019action concr\u00e8tes, jamais par des pr\u00e9dictions absolues.',
    },
    {
      question: 'La voyance amoureuse est-elle fiable\u00a0?',
      answer: 'Soyons honn\u00eates\u00a0: la fiabilit\u00e9 d\u00e9pend avant tout du praticien, pas de la discipline. Un voyant exp\u00e9riment\u00e9, \u00e9thique et sp\u00e9cialis\u00e9 en questions sentimentales vous fournira des \u00e9clairages pertinents que vous pourrez v\u00e9rifier dans votre v\u00e9cu. En revanche, m\u00e9fiez-vous des promesses de \u00ab\u00a0retour garanti de l\u2019ex en 48h\u00a0\u00bb \u2014 c\u2019est le signal d\u2019une arnaque. La voyance amoureuse s\u00e9rieuse ne pr\u00e9tend pas contr\u00f4ler le libre arbitre d\u2019autrui. Elle r\u00e9v\u00e8le des tendances, des \u00e9nergies dominantes et des fen\u00eatres de possibilit\u00e9. Plusieurs \u00e9tudes de satisfaction montrent que 70\u00a0% des consultants estiment avoir re\u00e7u une guidance utile.',
    },
    {
      question: 'Quelle est la diff\u00e9rence entre un voyant et une voyante amour\u00a0?',
      answer: 'Aucune diff\u00e9rence de comp\u00e9tence. Le genre du praticien n\u2019influe ni sur la qualit\u00e9 du tirage, ni sur la pr\u00e9cision de la lecture \u00e9nerg\u00e9tique. Certains consultants pr\u00e9f\u00e8rent une voyante par affinit\u00e9 personnelle, estimant qu\u2019une femme comprend mieux les nuances \u00e9motionnelles. D\u2019autres choisissent un voyant homme pour un regard diff\u00e9rent sur leur dynamique de couple. Ce qui compte r\u00e9ellement, c\u2019est la sp\u00e9cialisation en voyance amoureuse, les ann\u00e9es de pratique, la qualit\u00e9 des avis clients et le respect d\u2019une charte \u00e9thique. Homme ou femme, le bon voyant amour est celui qui vous \u00e9coute sans jugement et vous guide avec bienveillance.',
    },
    {
      question: 'Peut-on faire une voyance amour gratuite\u00a0?',
      answer: 'Oui, il existe plusieurs options de voyance amour gratuite, mais il faut en conna\u00eetre les limites. Les tirages en ligne automatis\u00e9s \u2014 comme le tarot oui/non amour \u2014 offrent une premi\u00e8re r\u00e9ponse rapide sur une question simple. Certaines plateformes proposent aussi quelques minutes gratuites pour d\u00e9couvrir un voyant avant de s\u2019engager. En revanche, une consultation approfondie avec analyse compl\u00e8te de votre situation sentimentale n\u00e9cessite du temps et une expertise qui justifient une r\u00e9mun\u00e9ration. Consid\u00e9rez la voyance gratuite comme un premier pas, non comme un remplacement de la guidance personnalis\u00e9e.',
    },
    {
      question: 'Quelles questions poser lors d\u2019une voyance en amour\u00a0?',
      answer: 'Les questions les plus efficaces sont ouvertes et centr\u00e9es sur vous. Plut\u00f4t que \u00ab\u00a0Est-ce qu\u2019il m\u2019aime\u00a0?\u00a0\u00bb (r\u00e9ponse oui/non), demandez \u00ab\u00a0Quelles sont les \u00e9nergies actuelles entre nous\u00a0?\u00a0\u00bb ou \u00ab\u00a0Que puis-je faire pour am\u00e9liorer ma situation amoureuse\u00a0?\u00a0\u00bb. Parmi les meilleures questions\u00a0: \u00ab\u00a0Quels blocages freinent ma rencontre\u00a0?\u00a0\u00bb, \u00ab\u00a0Mon couple \u00e9volue dans quelle direction\u00a0?\u00a0\u00bb, \u00ab\u00a0Quelle le\u00e7on tirer de cette rupture\u00a0?\u00a0\u00bb. Plus votre question donne de mati\u00e8re au voyant, plus la r\u00e9ponse sera riche et actionnable. \u00c9vitez les questions portant sur le libre arbitre d\u2019une tierce personne.',
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />

      {/* Header */}
      <header className="bg-gradient-to-r from-purple-800 via-indigo-800 to-purple-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">&larr; Accueil</Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">&#x1F52E; Voyance Amour</h1>
          <p className="text-2xl opacity-95 mb-6">Tout Savoir sur la Voyance Amoureuse</p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">Reconqu&ecirc;te, sentiments, rupture, rencontre &mdash; consultez un voyant sp&eacute;cialis&eacute; en amour pour &eacute;clairer votre chemin sentimental.</p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link href="/consulter" className="bg-white text-purple-800 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition">Consulter un Voyant Amour</Link>
            <a href="#questions" className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-800 transition">Les 7 Questions Cl&eacute;s</a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Section 1: Answer Capsule */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Qu&rsquo;est-ce que la Voyance Amour&nbsp;?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            La <strong>voyance amour</strong> regroupe l&rsquo;ensemble des pratiques divinatoires d&eacute;di&eacute;es aux <strong>questions de c&oelig;ur</strong>. Un <strong>voyant sp&eacute;cialis&eacute;</strong> en amour met son don et ses outils &mdash; <strong>tarot amour</strong>, <strong>astrologie</strong>, <strong>clairvoyance</strong> &mdash; au service de ceux qui traversent un doute sentimental, une crise de couple ou une attente de rencontre.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            L&rsquo;objectif d&rsquo;une <strong>consultation sentimentale</strong> n&rsquo;est pas de pr&eacute;dire un avenir fig&eacute;, mais d&rsquo;offrir une <strong>guidance amoureuse</strong> claire&nbsp;: comprendre les &eacute;nergies en pr&eacute;sence, identifier les blocages &eacute;motionnels et ouvrir de nouvelles perspectives. Que vous vous demandiez si votre ex reviendra, si votre partenaire vous aime vraiment ou quand l&rsquo;amour croisera votre route, la voyance amoureuse apporte des r&eacute;ponses &eacute;clair&eacute;es.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Chaque ann&eacute;e, des milliers de personnes consultent un voyant amour pour retrouver confiance et s&eacute;r&eacute;nit&eacute; dans leur vie sentimentale. Cette page est votre guide complet pour comprendre comment fonctionne la <strong>voyance en amour</strong>, choisir le bon praticien et poser les bonnes questions.
          </p>
        </section>

        {/* Section 2: 7 Questions Grid */}
        <section className="mb-12" id="questions">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Les 7 Questions d&rsquo;Amour les Plus Fr&eacute;quentes</h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto">Voici les interrogations sentimentales les plus pos&eacute;es en <strong>voyance amour</strong>. Chacune m&egrave;ne vers une guidance d&eacute;di&eacute;e.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/sentiments/" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-t-4 border-pink-500 group">
              <div className="text-3xl mb-3">&#x1F496;</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-pink-600 transition">M&rsquo;aime-t-il vraiment&nbsp;?</h3>
              <p className="text-gray-600 text-sm mb-3">D&eacute;cryptez les sentiments r&eacute;els de l&rsquo;autre gr&acirc;ce au tarot et &agrave; la clairvoyance &eacute;motionnelle.</p>
              <span className="text-pink-600 font-semibold text-sm">D&eacute;couvrir &rarr;</span>
            </Link>

            <Link href="/reconquete/" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-t-4 border-purple-500 group">
              <div className="text-3xl mb-3">&#x1F504;</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition">Mon ex va-t-il revenir&nbsp;?</h3>
              <p className="text-gray-600 text-sm mb-3">Strat&eacute;gies de reconqu&ecirc;te, silence radio et signes de retour analys&eacute;s par la voyance.</p>
              <span className="text-purple-600 font-semibold text-sm">D&eacute;couvrir &rarr;</span>
            </Link>

            <Link href="/nouvelle-rencontre/" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-t-4 border-indigo-500 group">
              <div className="text-3xl mb-3">&#x2728;</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition">Quand vais-je rencontrer l&rsquo;amour&nbsp;?</h3>
              <p className="text-gray-600 text-sm mb-3">P&eacute;riodes favorables, signes pr&eacute;curseurs et guidance pour attirer la bonne personne.</p>
              <span className="text-indigo-600 font-semibold text-sm">D&eacute;couvrir &rarr;</span>
            </Link>

            <Link href="/crise-couple/" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-t-4 border-red-500 group">
              <div className="text-3xl mb-3">&#x1F494;</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition">Mon couple peut-il &ecirc;tre sauv&eacute;&nbsp;?</h3>
              <p className="text-gray-600 text-sm mb-3">Analyse des tensions, communication et pistes pour retrouver l&rsquo;harmonie conjugale.</p>
              <span className="text-red-600 font-semibold text-sm">D&eacute;couvrir &rarr;</span>
            </Link>

            <Link href="/sentiments/avenir-amoureux" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-t-4 border-violet-500 group">
              <div className="text-3xl mb-3">&#x1F52E;</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-violet-600 transition">Quel est mon avenir amoureux&nbsp;?</h3>
              <p className="text-gray-600 text-sm mb-3">Pr&eacute;dictions sentimentales, tendances &agrave; venir et chemins possibles r&eacute;v&eacute;l&eacute;s par le tarot.</p>
              <span className="text-violet-600 font-semibold text-sm">D&eacute;couvrir &rarr;</span>
            </Link>

            <Link href="/methodes-voyance/" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-t-4 border-amber-500 group">
              <div className="text-3xl mb-3">&#x1F0CF;</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-amber-600 transition">Quel tirage pour une question d&rsquo;amour&nbsp;?</h3>
              <p className="text-gray-600 text-sm mb-3">Tarot, oracle, pendule, astrologie &mdash; quelle m&eacute;thode pour quelle question sentimentale.</p>
              <span className="text-amber-600 font-semibold text-sm">D&eacute;couvrir &rarr;</span>
            </Link>

            <Link href="/voyance-gratuite-amour/" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-t-4 border-emerald-500 group md:col-span-2 lg:col-span-1">
              <div className="text-3xl mb-3">&#x1F381;</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-600 transition">Existe-t-il un tirage gratuit&nbsp;?</h3>
              <p className="text-gray-600 text-sm mb-3">Tirages gratuits en ligne, tarot oui/non amour et premi&egrave;res minutes offertes.</p>
              <span className="text-emerald-600 font-semibold text-sm">D&eacute;couvrir &rarr;</span>
            </Link>
          </div>
        </section>

        {/* Section 3: How a Consultation Works */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Comment Fonctionne une Consultation Voyance Amour</h2>
          <p className="text-gray-700 mb-8">Que vous consultiez pour la premi&egrave;re fois ou que vous soyez habitu&eacute;(e), comprendre le d&eacute;roulement d&rsquo;une s&eacute;ance de <strong>voyance amoureuse</strong> vous permet d&rsquo;en tirer le meilleur parti. Voici les trois &eacute;tapes cl&eacute;s.</p>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-700">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Formulez votre Question</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  La qualit&eacute; de la r&eacute;ponse d&eacute;pend de la pr&eacute;cision de la question. Plut&ocirc;t que &laquo;&nbsp;Est-ce qu&rsquo;il m&rsquo;aime&nbsp;?&nbsp;&raquo;, essayez &laquo;&nbsp;Quelles sont les &eacute;nergies entre nous en ce moment&nbsp;?&nbsp;&raquo; ou &laquo;&nbsp;Que dois-je comprendre de cette situation&nbsp;?&nbsp;&raquo;.
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Astuce&nbsp;:</strong> &eacute;crivez votre question avant la s&eacute;ance. Si vous h&eacute;sitez entre plusieurs, un bon <Link href="/methodes-voyance/voyance-sentimentale" className="text-purple-600 hover:text-purple-800 underline">voyant sentimental</Link> vous aidera &agrave; la reformuler.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-700">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Le Voyant Analyse votre Situation</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Selon votre probl&eacute;matique, le voyant choisit l&rsquo;outil le plus adapt&eacute;. Le <Link href="/methodes-voyance/tirage-tarot-amour" className="text-purple-600 hover:text-purple-800 underline">tarot amour</Link> convient pour une question pr&eacute;cise sur les sentiments. L&rsquo;<Link href="/methodes-voyance/astrologie-amoureuse" className="text-purple-600 hover:text-purple-800 underline">astrologie amoureuse</Link> &eacute;claire les compatibilit&eacute;s et les cycles. La <strong>clairvoyance</strong> pure capte les &eacute;nergies sans support, id&eacute;ale pour les situations complexes.
                </p>
                <p className="text-gray-600 text-sm">
                  Le voyant peut combiner plusieurs m&eacute;thodes au cours d&rsquo;une m&ecirc;me s&eacute;ance pour affiner sa lecture.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-700">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Recevez Guidance et Pistes d&rsquo;Action</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Une consultation r&eacute;ussie ne se termine pas par une pr&eacute;diction vague. Le voyant vous restitue une lecture structur&eacute;e&nbsp;: ce qui se passe actuellement dans votre relation, les obstacles identifi&eacute;s, et surtout les <strong>actions concr&egrave;tes</strong> que vous pouvez entreprendre. Vous repartez avec une vision claire et des rep&egrave;res temporels.
                </p>
                <p className="text-gray-600 text-sm">
                  Apr&egrave;s la s&eacute;ance, notez les points cl&eacute;s. Beaucoup de consultants observent les premiers signes de changement dans les 2 &agrave; 4 semaines suivantes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Methods */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Les M&eacute;thodes de Voyance Amour</h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto">Chaque m&eacute;thode apporte un &eacute;clairage diff&eacute;rent sur votre situation sentimentale. D&eacute;couvrez celle qui correspond &agrave; votre question.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/methodes-voyance/tirage-tarot-amour" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition group">
              <div className="flex items-start gap-4">
                <div className="text-3xl">&#x1F0CF;</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition">Tarot de Marseille</h3>
                  <p className="text-gray-600 text-sm">L&rsquo;outil phare de la voyance amoureuse. Les 78 arcanes r&eacute;v&egrave;lent sentiments cach&eacute;s, intentions de l&rsquo;autre et &eacute;volution de la relation. Id&eacute;al pour une question pr&eacute;cise.</p>
                </div>
              </div>
            </Link>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="text-3xl">&#x2B50;</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Astrologie &amp; Synastrie</h3>
                  <p className="text-gray-600 text-sm mb-2">L&rsquo;astrologie &eacute;tudie les cycles plan&eacute;taires favorables &agrave; l&rsquo;amour. La synastrie compare deux th&egrave;mes astraux pour r&eacute;v&eacute;ler la compatibilit&eacute; profonde.</p>
                  <div className="flex gap-3 text-sm">
                    <Link href="/methodes-voyance/astrologie-amoureuse" className="text-purple-600 hover:text-purple-800 underline">Astrologie</Link>
                    <Link href="/methodes-voyance/synastrie-amoureuse" className="text-purple-600 hover:text-purple-800 underline">Synastrie</Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/methodes-voyance/pendule-amour" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition group">
              <div className="flex items-start gap-4">
                <div className="text-3xl">&#x1F4AB;</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition">Pendule Amour</h3>
                  <p className="text-gray-600 text-sm">Le pendule r&eacute;pond par oui ou non avec une pr&eacute;cision remarquable. Parfait pour trancher un dilemme sentimental ou confirmer une intuition.</p>
                </div>
              </div>
            </Link>

            <Link href="/methodes-voyance/numerologie-amoureuse" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition group">
              <div className="flex items-start gap-4">
                <div className="text-3xl">&#x1F522;</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition">Num&eacute;rologie</h3>
                  <p className="text-gray-600 text-sm">Les nombres de votre date de naissance et de votre nom r&eacute;v&egrave;lent votre profil amoureux, vos ann&eacute;es cl&eacute;s de rencontre et votre compatibilit&eacute;.</p>
                </div>
              </div>
            </Link>

            <Link href="/methodes-voyance/oracle-amour" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition group md:col-span-2">
              <div className="flex items-start gap-4">
                <div className="text-3xl">&#x1F3B4;</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition">Oracle Amour</h3>
                  <p className="text-gray-600 text-sm">Plus intuitif que le tarot, l&rsquo;oracle d&eacute;livre des messages clairs et bienveillants. Appr&eacute;ci&eacute; pour les p&eacute;riodes de doute o&ugrave; l&rsquo;on cherche r&eacute;confort et direction.</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Section 5: Voyance Amour Gratuite */}
        <section className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-8 mb-12 border border-emerald-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">&#x1F381; Voyance Amour Gratuite</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vous souhaitez d&eacute;couvrir la voyance amoureuse sans engagement&nbsp;? Plusieurs options gratuites existent. Notre <Link href="/voyance-gratuite-amour/" className="text-emerald-700 hover:text-emerald-900 underline font-semibold">espace voyance gratuite amour</Link> propose des tirages interactifs accessibles imm&eacute;diatement, dont le populaire <Link href="/voyance-gratuite-amour/tarot-oui-non-amour/" className="text-emerald-700 hover:text-emerald-900 underline font-semibold">tarot oui/non amour</Link> pour une r&eacute;ponse instantan&eacute;e &agrave; votre question sentimentale.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ces outils gratuits conviennent pour une premi&egrave;re exploration ou une question simple. Pour une analyse approfondie de votre situation &mdash; avec contexte, nuances et conseil personnalis&eacute; &mdash; une <Link href="/consulter" className="text-emerald-700 hover:text-emerald-900 underline font-semibold">consultation compl&egrave;te</Link> avec un voyant sp&eacute;cialis&eacute; reste indispensable.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/voyance-gratuite-amour/" className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition">Tirages Gratuits</Link>
            <Link href="/voyance-gratuite-amour/tarot-oui-non-amour/" className="border-2 border-emerald-600 text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition">Tarot Oui/Non Amour</Link>
          </div>
        </section>

        {/* Section 6: How to Choose */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Comment Choisir un Voyant Amour S&eacute;rieux</h2>
          <p className="text-gray-700 mb-6">Tous les voyants ne se valent pas. Voici les quatre crit&egrave;res qui distinguent un praticien comp&eacute;tent d&rsquo;un opportuniste, et les signaux d&rsquo;alerte &agrave; conna&icirc;tre.</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-purple-50 rounded-lg p-5 border border-purple-100">
              <h3 className="font-bold text-purple-800 mb-2">&#x1F3AF; Sp&eacute;cialisation Amour</h3>
              <p className="text-gray-700 text-sm">Privil&eacute;giez un voyant dont la majorit&eacute; des consultations porte sur les questions sentimentales. La <strong>voyance amour</strong> demande une sensibilit&eacute; &eacute;motionnelle particuli&egrave;re et une connaissance fine des dynamiques relationnelles.</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-5 border border-purple-100">
              <h3 className="font-bold text-purple-800 mb-2">&#x2696;&#xFE0F; &Eacute;thique et D&eacute;ontologie</h3>
              <p className="text-gray-700 text-sm">Un voyant s&eacute;rieux respecte votre libre arbitre, ne cr&eacute;e jamais de d&eacute;pendance et refuse de &laquo;&nbsp;jeter des sorts&nbsp;&raquo; ou de &laquo;&nbsp;forcer un retour&nbsp;&raquo;. Il est transparent sur ses tarifs et la dur&eacute;e de la s&eacute;ance.</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-5 border border-purple-100">
              <h3 className="font-bold text-purple-800 mb-2">&#x1F4C5; Exp&eacute;rience V&eacute;rifiable</h3>
              <p className="text-gray-700 text-sm">Recherchez un minimum de 5 ans de pratique. L&rsquo;exp&eacute;rience affine l&rsquo;intuition et la capacit&eacute; &agrave; interpr&eacute;ter les cartes dans le contexte sp&eacute;cifique de chaque histoire d&rsquo;amour.</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-5 border border-purple-100">
              <h3 className="font-bold text-purple-800 mb-2">&#x2B50; Avis Authentiques</h3>
              <p className="text-gray-700 text-sm">Consultez les t&eacute;moignages d&rsquo;autres clients. Des avis d&eacute;taill&eacute;s mentionnant des situations concr&egrave;tes sont plus fiables que de simples notes &eacute;toil&eacute;es sans commentaire.</p>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-5 border border-red-200 mb-6">
            <h3 className="font-bold text-red-800 mb-2">&#x1F6A9; Signaux d&rsquo;Alerte</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>&bull; Promesse de &laquo;&nbsp;retour de l&rsquo;ex garanti en 48h&nbsp;&raquo; &mdash; aucun voyant s&eacute;rieux ne garantit un r&eacute;sultat</li>
              <li>&bull; Demande de travaux occultes payants suppl&eacute;mentaires (bougies, rituels, envoutements)</li>
              <li>&bull; Cr&eacute;ation de peur (&laquo;&nbsp;un mal&eacute;fice bloque votre amour&nbsp;&raquo;) pour inciter &agrave; rappeler</li>
              <li>&bull; Absence totale d&rsquo;avis v&eacute;rifiables ou profil sans aucune information personnelle</li>
            </ul>
          </div>

          <p className="text-gray-700">
            Chez VoyantLove, chaque voyant est s&eacute;lectionn&eacute; selon ces crit&egrave;res stricts. D&eacute;couvrez <Link href="/a-propos" className="text-purple-600 hover:text-purple-800 underline font-semibold">notre processus de s&eacute;lection</Link> et l&rsquo;&eacute;thique qui guide notre plateforme.
          </p>
        </section>

        {/* Section 7: Quick CTA */}
        <VoyantQuickCTA topic="sentiments" source="voyance-amour-pillar-mid" />

        {/* Section 8: FAQ */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions Fr&eacute;quentes sur la Voyance Amour</h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Qu&rsquo;est-ce que la voyance amour&nbsp;?</h3>
              <p className="text-gray-700 leading-relaxed">La <strong>voyance amour</strong> d&eacute;signe l&rsquo;ensemble des pratiques divinatoires appliqu&eacute;es aux questions sentimentales. Un <strong>voyant sp&eacute;cialis&eacute;</strong> en amour utilise le tarot de Marseille, l&rsquo;astrologie ou la clairvoyance pour analyser une situation de couple, une rupture, une reconqu&ecirc;te ou une attente de rencontre. L&rsquo;objectif n&rsquo;est pas de pr&eacute;dire un destin fig&eacute;, mais d&rsquo;&eacute;clairer les &eacute;nergies en pr&eacute;sence, les blocages &eacute;motionnels et les ouvertures possibles. La voyance amour s&rsquo;adresse &agrave; toute personne traversant un questionnement sentimental, qu&rsquo;il s&rsquo;agisse d&rsquo;un doute sur les sentiments de l&rsquo;autre, d&rsquo;une s&eacute;paration douloureuse ou d&rsquo;une envie de comprendre son avenir amoureux.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment consulter un voyant amour en ligne&nbsp;?</h3>
              <p className="text-gray-700 leading-relaxed">Consulter un <strong>voyant amour en ligne</strong> est aujourd&rsquo;hui simple et confidentiel. Vous choisissez un voyant dont le profil et les avis vous inspirent confiance, puis vous r&eacute;servez une <strong>consultation</strong> par t&eacute;l&eacute;phone, chat ou visio. Avant la s&eacute;ance, formulez clairement votre question &mdash; par exemple &laquo;&nbsp;Mon ex va-t-il revenir&nbsp;?&nbsp;&raquo; ou &laquo;&nbsp;Quand vais-je rencontrer quelqu&rsquo;un&nbsp;?&nbsp;&raquo;. Le voyant proc&egrave;de ensuite &agrave; un tirage de tarot ou &agrave; une lecture &eacute;nerg&eacute;tique adapt&eacute;e &agrave; votre situation. Une bonne consultation dure entre 20 et 40 minutes et se conclut par des pistes d&rsquo;action concr&egrave;tes, jamais par des pr&eacute;dictions absolues.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">La voyance amoureuse est-elle fiable&nbsp;?</h3>
              <p className="text-gray-700 leading-relaxed">Soyons honn&ecirc;tes&nbsp;: la fiabilit&eacute; d&eacute;pend avant tout du praticien, pas de la discipline. Un <strong>voyant exp&eacute;riment&eacute;</strong>, &eacute;thique et sp&eacute;cialis&eacute; en questions sentimentales vous fournira des &eacute;clairages pertinents que vous pourrez v&eacute;rifier dans votre v&eacute;cu. En revanche, m&eacute;fiez-vous des promesses de &laquo;&nbsp;retour garanti de l&rsquo;ex en 48h&nbsp;&raquo; &mdash; c&rsquo;est le signal d&rsquo;une arnaque. La <strong>voyance amoureuse</strong> s&eacute;rieuse ne pr&eacute;tend pas contr&ocirc;ler le libre arbitre d&rsquo;autrui. Elle r&eacute;v&egrave;le des tendances, des &eacute;nergies dominantes et des fen&ecirc;tres de possibilit&eacute;. Plusieurs &eacute;tudes de satisfaction montrent que 70&nbsp;% des consultants estiment avoir re&ccedil;u une guidance utile.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quelle est la diff&eacute;rence entre un voyant et une voyante amour&nbsp;?</h3>
              <p className="text-gray-700 leading-relaxed">Aucune diff&eacute;rence de comp&eacute;tence. Le genre du praticien n&rsquo;influe ni sur la qualit&eacute; du tirage, ni sur la pr&eacute;cision de la lecture &eacute;nerg&eacute;tique. Certains consultants pr&eacute;f&egrave;rent une <strong>voyante amour</strong> par affinit&eacute; personnelle, estimant qu&rsquo;une femme comprend mieux les nuances &eacute;motionnelles. D&rsquo;autres choisissent un <strong>voyant</strong> homme pour un regard diff&eacute;rent sur leur dynamique de couple. Ce qui compte r&eacute;ellement, c&rsquo;est la sp&eacute;cialisation en <strong>voyance amoureuse</strong>, les ann&eacute;es de pratique, la qualit&eacute; des avis clients et le respect d&rsquo;une charte &eacute;thique. Homme ou femme, le bon voyant amour est celui qui vous &eacute;coute sans jugement et vous guide avec bienveillance.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Peut-on faire une voyance amour gratuite&nbsp;?</h3>
              <p className="text-gray-700 leading-relaxed">Oui, il existe plusieurs options de <strong>voyance amour gratuite</strong>, mais il faut en conna&icirc;tre les limites. Les tirages en ligne automatis&eacute;s &mdash; comme le <Link href="/voyance-gratuite-amour/tarot-oui-non-amour/" className="text-purple-600 hover:text-purple-800 underline">tarot oui/non amour</Link> &mdash; offrent une premi&egrave;re r&eacute;ponse rapide sur une question simple. Certaines plateformes proposent aussi quelques minutes gratuites pour d&eacute;couvrir un voyant avant de s&rsquo;engager. En revanche, une consultation approfondie avec analyse compl&egrave;te de votre situation sentimentale n&eacute;cessite du temps et une expertise qui justifient une r&eacute;mun&eacute;ration. Consid&eacute;rez la voyance gratuite comme un premier pas, non comme un remplacement de la guidance personnalis&eacute;e.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quelles questions poser lors d&rsquo;une voyance en amour&nbsp;?</h3>
              <p className="text-gray-700 leading-relaxed">Les questions les plus efficaces sont ouvertes et centr&eacute;es sur vous. Plut&ocirc;t que &laquo;&nbsp;Est-ce qu&rsquo;il m&rsquo;aime&nbsp;?&nbsp;&raquo; (r&eacute;ponse oui/non), demandez &laquo;&nbsp;Quelles sont les &eacute;nergies actuelles entre nous&nbsp;?&nbsp;&raquo; ou &laquo;&nbsp;Que puis-je faire pour am&eacute;liorer ma situation amoureuse&nbsp;?&nbsp;&raquo;. Parmi les meilleures questions&nbsp;: &laquo;&nbsp;Quels blocages freinent ma <Link href="/nouvelle-rencontre/" className="text-purple-600 hover:text-purple-800 underline">rencontre</Link>&nbsp;?&nbsp;&raquo;, &laquo;&nbsp;Mon <Link href="/crise-couple/" className="text-purple-600 hover:text-purple-800 underline">couple</Link> &eacute;volue dans quelle direction&nbsp;?&nbsp;&raquo;, &laquo;&nbsp;Quelle le&ccedil;on tirer de cette <Link href="/rupture/" className="text-purple-600 hover:text-purple-800 underline">rupture</Link>&nbsp;?&nbsp;&raquo;. Plus votre question donne de mati&egrave;re au voyant, plus la r&eacute;ponse sera riche et actionnable.</p>
            </div>
          </div>
        </section>

        {/* Section 9: EEAT Signal */}
        <EEATSignal colorScheme="purple" method="Voyance amoureuse : tarot, astrologie et clairvoyance sentimentale" />

        {/* Section 10: Final CTA */}
        <VoyantFinalCTA topic="sentiments" source="voyance-amour-pillar-bottom" />

        {/* Cross-hub Navigation */}
        <section className="py-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Explorez Tous les Univers de la Voyance Amour</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/sentiments/" className="block bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
              <h3 className="font-bold text-purple-700 mb-1">Sentiments Amoureux</h3>
              <p className="text-sm text-gray-600">M&rsquo;aime-t-il, avenir amoureux, compatibilit&eacute; et &eacute;motions cach&eacute;es</p>
            </Link>
            <Link href="/reconquete/" className="block bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
              <h3 className="font-bold text-purple-700 mb-1">Reconqu&ecirc;te Amoureuse</h3>
              <p className="text-sm text-gray-600">Retrouver son ex, silence radio, strat&eacute;gies de retour</p>
            </Link>
            <Link href="/nouvelle-rencontre/" className="block bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
              <h3 className="font-bold text-purple-700 mb-1">Nouvelle Rencontre</h3>
              <p className="text-sm text-gray-600">&Acirc;me s&oelig;ur, flamme jumelle, rencontre amoureuse et c&eacute;libat</p>
            </Link>
            <Link href="/crise-couple/" className="block bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
              <h3 className="font-bold text-purple-700 mb-1">Crise de Couple</h3>
              <p className="text-sm text-gray-600">Infid&eacute;lit&eacute;, jalousie, communication, sauver son couple</p>
            </Link>
            <Link href="/rupture/" className="block bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
              <h3 className="font-bold text-purple-700 mb-1">Rupture Amoureuse</h3>
              <p className="text-sm text-gray-600">Surmonter la rupture, chagrin d&rsquo;amour, tourner la page</p>
            </Link>
            <Link href="/methodes-voyance/" className="block bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
              <h3 className="font-bold text-purple-700 mb-1">M&eacute;thodes de Voyance</h3>
              <p className="text-sm text-gray-600">Tarot, oracle, astrologie, pendule, num&eacute;rologie</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}