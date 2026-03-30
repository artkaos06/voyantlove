import type { Metadata } from 'next';
import Link from 'next/link';
import { getWebPageSchema, getBreadcrumbSchema, getOrganizationSchema, getFAQSchema, getAuthorSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';

export const metadata: Metadata = {
  title: 'Voyance Gratuite Amour : Tirages et Guidance Sentimentale',
  description: 'Voyance amoureuse gratuite : tarot, oracle et horoscope pour éclairer votre vie sentimentale. Guidance fiable sans engagement.',
  alternates: { canonical: 'https://www.voyantlove.fr/voyance-gratuite-amour/' },
};

export default function VoyanceGratuiteAmourHubPage() {
  const webPageSchema = getWebPageSchema({
    title: 'Voyance Gratuite Amour : Tirages et Guidance Sentimentale',
    description: 'Voyance amoureuse gratuite : tarot, oracle et horoscope pour éclairer votre vie sentimentale. Guidance fiable sans engagement.',
    url: 'https://www.voyantlove.fr/voyance-gratuite-amour/',
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Voyance Gratuite Amour', url: 'https://www.voyantlove.fr/voyance-gratuite-amour/' },
  ]);

  const organizationSchema = getOrganizationSchema();
  const authorSchema = getAuthorSchema();

  const faqSchema = getFAQSchema([
    {
      question: 'La voyance gratuite amour est-elle fiable ?',
      answer: 'Les tirages gratuits en ligne utilisent un algorithme aléatoire qui simule le tirage des cartes — la symbolique reste authentique et peut offrir des pistes de réflexion pertinentes. Cependant, un tirage personnalisé par un voyant expérimenté sera toujours plus précis car il intègre votre énergie, votre situation unique et une interprétation contextuelle. Le gratuit est fiable comme introduction, le personnalisé apporte la profondeur.',
    },
    {
      question: 'Combien de minutes gratuites sont offertes en consultation ?',
      answer: 'Les offres découverte proposent généralement entre 3 et 10 minutes gratuites selon la plateforme et le voyant. Ces minutes suffisent pour poser une question ciblée et évaluer la connexion avec le praticien. Préparez votre question à l\'avance pour optimiser ces premières minutes offertes. Si le voyant vous semble juste et bienveillant, vous pouvez poursuivre la consultation à votre rythme.',
    },
    {
      question: 'Quel est le meilleur tirage gratuit pour l\'amour ?',
      answer: 'Le tirage en croix (5 cartes) est le plus complet pour une question amoureuse générale. Le tirage oui/non (3 cartes) répond aux questions directes comme « M\'aime-t-il ? ». L\'oracle est préférable si vous cherchez un message intuitif plutôt qu\'une analyse structurée. Choisissez selon votre question : le tarot pour comprendre, l\'oracle pour ressentir, l\'horoscope pour anticiper.',
    },
    {
      question: 'Comment passer du gratuit à une consultation personnalisée ?',
      answer: 'Le passage se fait naturellement quand vos questions deviennent plus spécifiques ou que vous souhaitez approfondir un tirage. Choisissez un voyant dont le profil correspond à votre problématique sentimentale. Les premières minutes offertes vous permettent de tester la connexion. Une consultation personnalisée de 20 minutes suffit généralement pour obtenir des réponses claires et une guidance adaptée.',
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />
      <header className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">&larr; Accueil</Link>
          <h1 className="text-5xl font-bold mb-6">🌟 Voyance Gratuite Amour</h1>
          <p className="text-2xl opacity-95 mb-8">Tirages et Guidance Sentimentale Sans Engagement</p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Découvrez la <strong>voyance amoureuse gratuite</strong> : tarot, oracle et horoscope pour éclairer votre <strong>vie sentimentale</strong> en toute confiance.</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <EEATSignal colorScheme="green" method="Tarot, oracle et guidance gratuite" />

        <VoyantQuickCTA topic="voyance-gratuite" source="voyance-gratuite-hub-early" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🗺️ Nos Guidances Gratuites</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Les principales méthodes de <strong>voyance gratuite amour</strong> sont le <strong>tarot amour gratuit</strong>, le <strong>tarot oui/non</strong>, l&apos;<strong>oracle</strong>, l&apos;<strong>horoscope amoureux</strong>, la <strong>voyance par tchat</strong> et les <strong>tirages pour célibataires</strong>. Chaque outil offre un éclairage unique sur votre situation sentimentale.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/voyance-gratuite-amour/tarot-amour-gratuit" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-green-500">
              <div className="text-4xl mb-4">🃏</div>
              <h3 className="text-2xl font-bold mb-3">Tarot Amour Gratuit</h3>
              <p className="text-gray-600 mb-4">Tirage et interprétation des arcanes pour éclairer votre vie sentimentale.</p>
              <span className="text-green-600 font-semibold">Découvrir &rarr;</span>
            </Link>

            <Link href="/voyance-gratuite-amour/tarot-oui-non-amour" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-emerald-500">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-3">Tarot Oui Non Amour</h3>
              <p className="text-gray-600 mb-4">Réponses claires et directes à vos questions sentimentales les plus pressantes.</p>
              <span className="text-emerald-600 font-semibold">Découvrir &rarr;</span>
            </Link>

            <Link href="/voyance-gratuite-amour/oracle-gratuit-amour" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-teal-500">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3">Oracle Gratuit Amour</h3>
              <p className="text-gray-600 mb-4">Guidance intuitive par Oracle Belline, Gé et des Anges pour votre amour.</p>
              <span className="text-teal-600 font-semibold">Découvrir &rarr;</span>
            </Link>

            <Link href="/voyance-gratuite-amour/horoscope-amour-2026" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-cyan-500">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold mb-3">Horoscope Amour 2026</h3>
              <p className="text-gray-600 mb-4">Prédictions sentimentales par signe pour l&apos;année 2026.</p>
              <span className="text-cyan-600 font-semibold">Découvrir &rarr;</span>
            </Link>

            <Link href="/voyance-gratuite-amour/voyance-tchat-gratuit-amour" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-blue-500">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-3">Voyance Tchat Gratuit</h3>
              <p className="text-gray-600 mb-4">Consultation sentimentale immédiate par tchat avec un voyant en ligne.</p>
              <span className="text-blue-600 font-semibold">Découvrir &rarr;</span>
            </Link>

            <Link href="/voyance-gratuite-amour/tirage-gratuit-celibataire" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-rose-500">
              <div className="text-4xl mb-4">💕</div>
              <h3 className="text-2xl font-bold mb-3">Tirage Célibataire</h3>
              <p className="text-gray-600 mb-4">Découvrez quand et comment vous rencontrerez l&apos;amour selon les cartes.</p>
              <span className="text-rose-600 font-semibold">Découvrir &rarr;</span>
            </Link>
          </div>
        </section>

        <VoyantRecommendations topic="voyance-gratuite" limit={3} showOnlineFirst={true} source="voyance-gratuite-hub-mid" />

        <section className="bg-white rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">🔮 Comprendre la Voyance Gratuite Amour</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">La <strong>voyance gratuite amour</strong> permet de découvrir la <strong>guidance sentimentale</strong> sans engagement financier, grâce aux <strong>premières minutes offertes</strong>, aux <strong>tirages en ligne</strong> et aux <strong>prédictions horoscopiques</strong> personnalisées.</p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">Que vous soyez en couple ou célibataire, la <Link href="/" className="text-green-600 hover:text-green-800 underline font-medium">voyance amoureuse</Link> offre un éclairage précieux sur votre situation sentimentale. Le <strong>tarot amour gratuit</strong> reste la méthode la plus populaire pour une première approche, tandis que l&apos;<strong>oracle</strong> et l&apos;<strong>horoscope amoureux</strong> complètent cette guidance avec des perspectives différentes. Pour approfondir, nos <Link href="/methodes-voyance" className="text-green-600 hover:text-green-800 underline font-medium">méthodes de voyance</Link> détaillent chaque outil divinatoire.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">🃏 Gratuit en Ligne vs Consultation</h3>
              <p className="text-gray-700">Le <strong>tirage gratuit en ligne</strong> offre une lecture générale basée sur la symbolique authentique des <strong>arcanes du tarot</strong>. La <strong>consultation personnalisée</strong> avec un <strong>voyant spécialisé amour</strong> apporte la connexion humaine, l&apos;interprétation contextuelle et une <strong>guidance sentimentale</strong> adaptée à votre situation unique. Le gratuit est le tremplin idéal vers une lecture approfondie.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">⚡ Préparer Votre Question</h3>
              <p className="text-gray-700">La qualité de votre <strong>tirage gratuit</strong> dépend de la clarté de votre question. Privilégiez les questions ouvertes : &laquo;&nbsp;Que dois-je comprendre de ma situation avec cette personne&nbsp;?&nbsp;&raquo; plutôt que &laquo;&nbsp;Va-t-il revenir&nbsp;?&nbsp;&raquo;. Concentrez-vous sur ce que <strong>vous</strong> pouvez influencer dans votre <strong>vie amoureuse</strong>. Un tirage bien préparé révèle des insights puissants.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions Fréquentes sur la Voyance Gratuite Amour</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Les questions les plus fréquentes portent sur la fiabilité des <strong>tirages gratuits</strong>, la durée des <strong>minutes offertes</strong>, le choix du meilleur tirage et la transition vers une <strong>consultation personnalisée</strong>.</p>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">La voyance gratuite amour est-elle fiable ?</h3>
              <p className="text-gray-700 leading-relaxed">Les <strong>tirages gratuits en ligne</strong> utilisent un algorithme aléatoire qui simule le tirage des cartes &mdash; la symbolique reste authentique et peut offrir des pistes de réflexion pertinentes. Cependant, un <strong>tirage personnalisé</strong> par un <strong>voyant expérimenté</strong> sera toujours plus précis car il intègre votre <strong>énergie</strong>, votre situation unique et une interprétation contextuelle. Le gratuit est fiable comme introduction, le personnalisé apporte la profondeur.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Combien de minutes gratuites sont offertes en consultation ?</h3>
              <p className="text-gray-700 leading-relaxed">Les <strong>offres découverte</strong> proposent généralement entre 3 et 10 <strong>minutes gratuites</strong> selon la plateforme et le <strong>voyant</strong>. Ces minutes suffisent pour poser une question ciblée et évaluer la connexion avec le praticien. Préparez votre <strong>question sentimentale</strong> à l&apos;avance pour optimiser ces premières minutes offertes. Si le voyant vous semble juste et bienveillant, vous pouvez poursuivre la <strong>consultation</strong> à votre rythme.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quel est le meilleur tirage gratuit pour l&apos;amour ?</h3>
              <p className="text-gray-700 leading-relaxed">Le <strong>tirage en croix</strong> (5 cartes) est le plus complet pour une question amoureuse générale. Le <strong>tirage oui/non</strong> (3 cartes) répond aux questions directes comme &laquo;&nbsp;M&apos;aime-t-il&nbsp;?&nbsp;&raquo;. L&apos;<strong>oracle</strong> est préférable si vous cherchez un message intuitif plutôt qu&apos;une analyse structurée. Choisissez selon votre question : le <strong>tarot</strong> pour comprendre, l&apos;<strong>oracle</strong> pour ressentir, l&apos;<strong>horoscope</strong> pour anticiper.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment passer du gratuit à une consultation personnalisée ?</h3>
              <p className="text-gray-700 leading-relaxed">Le passage se fait naturellement quand vos questions deviennent plus spécifiques ou que vous souhaitez approfondir un tirage. Choisissez un <strong>voyant</strong> dont le profil correspond à votre <strong>problématique sentimentale</strong>. Les <strong>premières minutes offertes</strong> vous permettent de tester la connexion. Une <strong>consultation personnalisée</strong> de 20 minutes suffit généralement pour obtenir des réponses claires et une <strong>guidance adaptée</strong>.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Thèmes Connexes</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">La <strong>voyance gratuite</strong> s&apos;applique à toutes les dimensions de votre <strong>vie sentimentale</strong> : méthodes de voyance, sentiments amoureux et nouvelles rencontres.</p>
          <p className="text-gray-700 mb-4">Explorez nos guidances thématiques pour approfondir vos questions sentimentales.</p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/methodes-voyance" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-900 mb-1">Méthodes de Voyance</h3>
              <p className="text-sm text-gray-600">Tarot, oracle et astrologie en détail pour vos questions d&apos;amour.</p>
            </Link>
            <Link href="/sentiments" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-900 mb-1">Sentiments Amoureux</h3>
              <p className="text-sm text-gray-600">Décryptez les émotions et sentiments cachés de votre partenaire.</p>
            </Link>
            <Link href="/nouvelle-rencontre" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
              <h3 className="font-bold text-gray-900 mb-1">Nouvelle Rencontre</h3>
              <p className="text-sm text-gray-600">Prédictions et guidance pour trouver votre prochaine relation.</p>
            </Link>
          </div>
        </section>

        {/* Cross-hub navigation */}
        <section className="py-10 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sujets Connexes</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/methodes-voyance/" className="block bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                <h3 className="font-bold text-purple-700 mb-1">M&eacute;thodes de Voyance</h3>
                <p className="text-sm text-gray-600">Tarot, astrologie, num&eacute;rologie, pendule, oracle</p>
              </Link>
              <Link href="/sentiments/" className="block bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                <h3 className="font-bold text-purple-700 mb-1">Sentiments & Avenir</h3>
                <p className="text-sm text-gray-600">M&apos;aime-t-il, compatibilit&eacute;, avenir amoureux</p>
              </Link>
              <Link href="/nouvelle-rencontre/" className="block bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                <h3 className="font-bold text-purple-700 mb-1">Nouvelle Rencontre</h3>
                <p className="text-sm text-gray-600">Trouver l&apos;amour, &acirc;me s&oelig;ur, rencontre amoureuse</p>
              </Link>
            </div>
          </div>
        </section>

        <VoyantFinalCTA topic="voyance-gratuite" source="voyance-gratuite-hub-final" />
      </div>
    </main>
  );
}
