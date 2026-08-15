import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema, getAuthorSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';
import TarotSpread from '@/components/TarotSpread';

export const metadata: Metadata = {
  title: 'Tarot du Jour Amour Gratuit : Tirage Quotidien en Ligne',
  description: 'Tirez votre tarot du jour amour gratuit : une carte pour éclairer votre énergie sentimentale du jour. Tirage quotidien en ligne, sans inscription.',
  keywords: ['tarot du jour amour', 'tarot du jour gratuit', 'carte du jour amour', 'tirage quotidien amour', 'tarot du jour en ligne'],
  alternates: {
    canonical: 'https://www.voyantlove.fr/voyance-gratuite-amour/tarot-du-jour-amour/',
  },
};

export default function TarotDuJourAmourPage() {
  const articleSchema = getArticleSchema({
    title: 'Tarot du Jour Amour Gratuit : Tirage Quotidien en Ligne | VoyantLove',
    description: 'Tirez votre tarot du jour amour gratuit : une carte pour éclairer votre énergie sentimentale du jour. Tirage quotidien en ligne, sans inscription.',
    url: 'https://www.voyantlove.fr/voyance-gratuite-amour/tarot-du-jour-amour/',
    datePublished: '2026-08-07',
    dateModified: '2026-08-07',
    keywords: ['tarot du jour amour', 'tarot du jour gratuit', 'carte du jour amour', 'tirage quotidien amour'],
  });

  const authorSchema = getAuthorSchema();

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Voyance Gratuite Amour', url: 'https://www.voyantlove.fr/voyance-gratuite-amour/' },
    { name: 'Tarot du Jour Amour', url: 'https://www.voyantlove.fr/voyance-gratuite-amour/tarot-du-jour-amour/' },
  ]);

  const faqSchema = getFAQSchema([
    {
      question: 'Comment fonctionne le tarot du jour en amour ?',
      answer: 'Le tarot du jour amour consiste à tirer une seule carte parmi les arcanes pour éclairer l\'énergie sentimentale dominante de votre journée. Contrairement à un tirage détaillé sur une question précise, il offre une lecture générale et rapide : une tonalité, un conseil ou une mise en garde à garder à l\'esprit dans vos échanges amoureux du jour. C\'est le format le plus simple de voyance gratuite amour, pensé pour être consulté quotidiennement.',
    },
    {
      question: 'Peut-on tirer le tarot du jour amour plusieurs fois par jour ?',
      answer: 'Il est recommandé de vous limiter à un seul tirage par jour pour préserver la pertinence de la lecture. Tirer plusieurs cartes à la suite dans l\'espoir d\'obtenir un message plus favorable dilue l\'énergie du tirage et brouille l\'interprétation. Si la carte du jour ne vous parle pas immédiatement, prenez le temps d\'y réfléchir au fil de la journée plutôt que de retirer une nouvelle carte.',
    },
    {
      question: 'Le tarot du jour amour est-il différent d\'un horoscope amoureux ?',
      answer: 'Oui. L\'horoscope amoureux se base sur votre signe astrologique et couvre généralement une période plus large (jour, semaine ou année) selon des tendances collectives par signe. Le tarot du jour, lui, tire une carte au hasard parmi les arcanes et livre un message symbolique individuel, indépendant de votre date de naissance. Les deux approches sont complémentaires : l\'horoscope donne une tendance générale, le tarot du jour un éclairage plus personnel et immédiat.',
    },
    {
      question: 'Que faire si la carte du jour est négative ?',
      answer: 'Une carte perçue comme "négative" (la Tour, le Diable, l\'Ermite...) n\'est pas une fatalité mais une invitation à la vigilance ou à l\'introspection sur un point précis de votre vie sentimentale. Elle signale souvent un ajustement à faire, ralentir, clarifier une situation, éviter une réaction impulsive, plutôt qu\'un événement malheureux à venir. Si le message vous préoccupe, un voyant spécialisé peut replacer cette carte dans le contexte plus large de votre situation.',
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />

      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/voyance-gratuite-amour/" className="text-white/80 hover:text-white mb-4 inline-block">&larr; Retour &agrave; Voyance Gratuite Amour</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🌞 Tarot du Jour Amour Gratuit</h1>
          <p className="text-xl opacity-95 mb-6">Une carte, un éclairage sur l&apos;énergie sentimentale de votre journée</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#tirage" className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">Tirer ma Carte du Jour ↓</a>
            <a href="#habitude" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition">Pourquoi un Tirage Quotidien</a>
          </div>
        </div>
      </header>

      {/* Interactive Tarot Tool */}
      <section id="tirage" className="max-w-4xl mx-auto px-4 py-8">
        <TarotSpread
          title="🌞 Votre Tarot du Jour Amour"
          subtitle="Concentrez-vous sur votre vie sentimentale et tirez la carte de votre journée"
          positions={['Votre carte du jour']}
          ctaSource="tarot-du-jour-amour"
        />
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Stats bar */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">🌞</div><div className="text-2xl font-bold text-emerald-600">1 carte</div><div className="text-sm text-gray-600">Tirage express</div></div>
          <div><div className="text-3xl mb-1">📅</div><div className="text-2xl font-bold text-emerald-600">Quotidien</div><div className="text-sm text-gray-600">À renouveler chaque jour</div></div>
          <div><div className="text-3xl mb-1">✅</div><div className="text-2xl font-bold text-emerald-600">Gratuit</div><div className="text-sm text-gray-600">Sans inscription</div></div>
          <div><div className="text-3xl mb-1">🔮</div><div className="text-2xl font-bold text-emerald-600">Immédiat</div><div className="text-sm text-gray-600">Résultat instantané</div></div>
        </div>

        <EEATSignal colorScheme="green" method="Tarot du jour et tirages sentimentaux quotidiens" lastUpdated="7 août 2026" />

        {/* Answer Capsule */}
        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-emerald-600">
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
            <p className="text-lg leading-relaxed mb-4">
              Le <strong>tarot du jour amour</strong> est un tirage d&apos;une seule carte, tir&eacute;e chaque matin pour &eacute;clairer l&apos;<strong>&eacute;nergie sentimentale</strong> qui accompagnera votre journ&eacute;e. Contrairement &agrave; un <strong>tirage sentimental</strong> complet centr&eacute; sur une question pr&eacute;cise, il offre une lecture br&egrave;ve et symbolique&nbsp;: une tonalit&eacute; g&eacute;n&eacute;rale, un conseil ou un point de vigilance &agrave; garder pr&eacute;sent &agrave; l&apos;esprit dans vos &eacute;changes amoureux.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Ce format court en fait l&apos;outil de <strong>voyance gratuite amour</strong> le plus simple &agrave; int&eacute;grer &agrave; une routine quotidienne. Une carte comme <strong>Le Soleil</strong> annonce une journ&eacute;e lumineuse pour la <strong>communication amoureuse</strong>, tandis que <strong>La Lune</strong> invite &agrave; la prudence face aux non-dits et aux malentendus.
            </p>
            <p className="text-lg leading-relaxed">
              Ce <strong>tarot du jour gratuit</strong> constitue un premier repère accessible avant d&apos;approfondir, si besoin, avec un <strong>voyant sp&eacute;cialis&eacute;</strong> qui r&eacute;alise un <strong>tirage sentimental</strong> plus complet sur votre situation.
            </p>
          </div>
        </article>

        <VoyantQuickCTA topic="voyance-gratuite" source="tarot-du-jour-amour-early" />

        {/* Section 1 */}
        <section id="habitude" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">📖 Pourquoi Tirer un Tarot du Jour en Amour</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Le tarot du jour aide à aborder sa journée sentimentale avec plus de conscience : il attire l&apos;attention sur une énergie à cultiver ou un piège à éviter dans vos relations.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Contrairement &agrave; un <Link href="/voyance-gratuite-amour/tarot-amour-gratuit/" className="text-emerald-600 hover:text-emerald-800 underline font-medium">tirage tarot amour</Link> complet r&eacute;alis&eacute; pour r&eacute;pondre &agrave; une question sp&eacute;cifique, le <strong>tarot du jour</strong> ne cherche pas &agrave; r&eacute;pondre &agrave; quoi que ce soit&nbsp;: il propose simplement une <strong>tonalit&eacute; du jour</strong>. Cette diff&eacute;rence de format en fait un exercice quotidien l&eacute;ger, plut&ocirc;t qu&apos;une consultation ponctuelle sur un sujet pr&eacute;cis.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            En pratique, beaucoup de personnes tirent leur <strong>carte du jour amour</strong> le matin, avant de partir travailler ou de retrouver leur partenaire. La carte devient un point de r&eacute;f&eacute;rence &agrave; garder en t&ecirc;te&nbsp;: si elle &eacute;voque la patience, on &eacute;vitera peut-&ecirc;tre une discussion tendue le soir m&ecirc;me&nbsp;; si elle &eacute;voque l&apos;ouverture, on saisira plus facilement une occasion de rapprochement.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ce tirage r&eacute;guli&eacute;er ne remplace pas une <strong>consultation de voyance amoureuse</strong> approfondie, mais il cultive une forme d&apos;attention consciente &agrave; sa <strong>vie sentimentale</strong>, jour apr&egrave;s jour.
          </p>
        </section>

        {/* Section 2 */}
        <section className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-8 mb-8 border-2 border-emerald-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🃏 Interpréter Votre Carte du Jour en Amour</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Chaque famille d&apos;arcanes oriente différemment la lecture du jour : les cartes de Coupe parlent d&apos;émotions, les arcanes majeurs annoncent des énergies plus marquantes.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-5 border-l-4 border-emerald-500">
              <h3 className="font-bold text-emerald-700 mb-2">Les Arcanes Majeurs</h3>
              <p className="text-gray-700 text-sm">Le Soleil, la Lune, l&apos;&Eacute;toile ou la Tour indiquent une <strong>&eacute;nergie forte</strong> qui structure la journ&eacute;e enti&egrave;re. Une carte majeure m&eacute;rite qu&apos;on s&apos;y attarde un peu plus longtemps que les autres jours.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-green-500">
              <h3 className="font-bold text-green-700 mb-2">Les Cartes de Coupe</h3>
              <p className="text-gray-700 text-sm">Li&eacute;es &agrave; l&apos;eau et aux &eacute;motions, elles annoncent une journ&eacute;e o&ugrave; les <strong>sentiments</strong> occupent le devant de la sc&egrave;ne&nbsp;: tendresse, nostalgie ou nouvelle connexion.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-teal-500">
              <h3 className="font-bold text-teal-700 mb-2">Les Cartes d&apos;&Eacute;p&eacute;e</h3>
              <p className="text-gray-700 text-sm">Associ&eacute;es &agrave; la pens&eacute;e et &agrave; la communication, elles signalent souvent une journ&eacute;e propice &mdash; ou &agrave; risque &mdash; pour les <strong>discussions importantes</strong> en couple.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-lime-500">
              <h3 className="font-bold text-lime-700 mb-2">Les Cartes de B&acirc;ton</h3>
              <p className="text-gray-700 text-sm">Symboles d&apos;action et de d&eacute;sir, elles annoncent une journ&eacute;e o&ugrave; l&apos;<strong>initiative amoureuse</strong> est favoris&eacute;e&nbsp;: oser un premier pas, relancer une conversation.</p>
            </div>
          </div>
        </section>

        <VoyantRecommendations topic="voyance-gratuite" limit={3} showOnlineFirst={true} source="tarot-du-jour-amour-mid" />

        {/* Section 3 */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🔁 Tarot du Jour et Tarot Futur Proche : Quelle Différence</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Le tarot du jour éclaire les prochaines 24 heures, tandis que le tarot futur proche projette un tirage sur les prochaines semaines.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ces deux formats de <strong>voyance gratuite amour</strong> se compl&egrave;tent sans se substituer l&apos;un &agrave; l&apos;autre. Le <strong>tarot du jour</strong> ne concerne que la journ&eacute;e en cours&nbsp;: une seule carte, une lecture imm&eacute;diate. Pour une vision sur un horizon plus large &mdash; les prochaines semaines de votre <strong>situation sentimentale</strong> &mdash; le <Link href="/voyance-gratuite-amour/tarot-futur-proche-amour/" className="text-emerald-600 hover:text-emerald-800 underline font-medium">tarot futur proche amour</Link> propose un tirage &agrave; plusieurs cartes qui trace une v&eacute;ritable tendance &agrave; court terme.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Beaucoup d&apos;utilisateurs combinent les deux&nbsp;: le tarot du jour comme rituel quotidien l&eacute;ger, et le tarot futur proche lorsqu&apos;une question plus large sur l&apos;<strong>&eacute;volution de leur relation</strong> se pose.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">❓ Questions Fréquentes sur le Tarot du Jour Amour</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment fonctionne le tarot du jour en amour ?</h3>
              <p className="text-gray-700 leading-relaxed">Le <strong>tarot du jour amour</strong> consiste &agrave; tirer une seule carte parmi les arcanes pour &eacute;clairer l&apos;&eacute;nergie sentimentale dominante de votre journ&eacute;e. Contrairement &agrave; un tirage d&eacute;taill&eacute; sur une question pr&eacute;cise, il offre une lecture g&eacute;n&eacute;rale et rapide&nbsp;: une tonalit&eacute;, un conseil ou une mise en garde &agrave; garder &agrave; l&apos;esprit dans vos &eacute;changes amoureux du jour. C&apos;est le format le plus simple de <strong>voyance gratuite amour</strong>, pens&eacute; pour &ecirc;tre consult&eacute; quotidiennement.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Peut-on tirer le tarot du jour amour plusieurs fois par jour ?</h3>
              <p className="text-gray-700 leading-relaxed">Il est recommand&eacute; de vous limiter &agrave; un seul tirage par jour pour pr&eacute;server la pertinence de la lecture. Tirer plusieurs cartes &agrave; la suite dans l&apos;espoir d&apos;obtenir un message plus favorable dilue l&apos;&eacute;nergie du tirage et brouille l&apos;interpr&eacute;tation. Si la carte du jour ne vous parle pas imm&eacute;diatement, prenez le temps d&apos;y r&eacute;fl&eacute;chir au fil de la journ&eacute;e plut&ocirc;t que de retirer une nouvelle carte.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Le tarot du jour amour est-il différent d&apos;un horoscope amoureux ?</h3>
              <p className="text-gray-700 leading-relaxed">Oui. L&apos;<strong>horoscope amoureux</strong> se base sur votre signe astrologique et couvre g&eacute;n&eacute;ralement une p&eacute;riode plus large selon des tendances collectives par signe. Le <strong>tarot du jour</strong>, lui, tire une carte au hasard parmi les arcanes et livre un message symbolique individuel, ind&eacute;pendant de votre date de naissance. Les deux approches sont compl&eacute;mentaires&nbsp;: l&apos;horoscope donne une tendance g&eacute;n&eacute;rale, le tarot du jour un &eacute;clairage plus personnel et imm&eacute;diat.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Que faire si la carte du jour est négative ?</h3>
              <p className="text-gray-700 leading-relaxed">Une carte per&ccedil;ue comme &laquo;&nbsp;n&eacute;gative&nbsp;&raquo; (la Tour, le Diable, l&apos;Ermite...) n&apos;est pas une fatalit&eacute; mais une invitation &agrave; la vigilance ou &agrave; l&apos;introspection sur un point pr&eacute;cis de votre vie sentimentale. Elle signale souvent un ajustement &agrave; faire plut&ocirc;t qu&apos;un &eacute;v&eacute;nement malheureux &agrave; venir. Si le message vous pr&eacute;occupe, un <strong>voyant sp&eacute;cialis&eacute;</strong> peut replacer cette carte dans le contexte plus large de votre situation.</p>
            </div>
          </div>
        </section>

        {/* Articles Connexes */}
        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900">📚 Articles Connexes</h3>
          <div className="space-y-2">
            <Link href="/voyance-gratuite-amour/" className="block text-emerald-600 hover:text-emerald-800 font-medium">&rarr; Voyance Gratuite Amour : Guide Complet</Link>
            <Link href="/voyance-gratuite-amour/tarot-futur-proche-amour/" className="block text-emerald-600 hover:text-emerald-800 font-medium">&rarr; Tarot Futur Proche Amour Gratuit</Link>
            <Link href="/voyance-gratuite-amour/tarot-amour-gratuit/" className="block text-emerald-600 hover:text-emerald-800 font-medium">&rarr; Tarot Amour Gratuit : Tirage et Interprétation</Link>
            <Link href="/voyance-gratuite-amour/tarot-oui-non-amour/" className="block text-emerald-600 hover:text-emerald-800 font-medium">&rarr; Tarot Oui Non Amour Gratuit</Link>
            <Link href="/voyance-gratuite-amour/horoscope-amour-2026/" className="block text-emerald-600 hover:text-emerald-800 font-medium">&rarr; Horoscope Amour 2026</Link>
          </div>
        </div>

        {/* CTA Footer */}
        <VoyantFinalCTA topic="voyance-gratuite" source="tarot-du-jour-amour-final" />
      </div>
    </main>
  );
}
