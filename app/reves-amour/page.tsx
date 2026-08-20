import type { Metadata } from 'next';
import Link from 'next/link';
import { getWebPageSchema, getBreadcrumbSchema, getAuthorSchema } from '@/lib/schema';
import { getDreamHubCards } from '@/lib/revesAmour';
import EEATSignal from '@/components/EEATSignal';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';
import VoyantRailSection from '@/components/VoyantRailSection';

const DREAM_HUB_CARDS = getDreamHubCards();

export const metadata: Metadata = {
  title: 'Interprétation des rêves amoureux : signification',
  description: 'Rêver de son ex, de tromperie, de mariage, de son crush : la signification des rêves d\'amour. Ce que chaque rêve révèle sur votre monde intérieur, et ce qu\'il ne prédit pas.',
  alternates: { canonical: 'https://www.voyantlove.fr/reves-amour/' },
};

export default function RevesAmourHub() {
  const webPageSchema = getWebPageSchema({
    title: 'Interprétation des rêves amoureux : signification',
    description: 'La signification des rêves d\'amour : ex, tromperie, mariage, crush. Ce que chaque rêve révèle de votre monde intérieur.',
    url: 'https://www.voyantlove.fr/reves-amour/',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Rêves Amour', url: 'https://www.voyantlove.fr/reves-amour/' },
  ]);
  const authorSchema = getAuthorSchema();

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />

      <header className="bg-gradient-to-r from-indigo-700 via-purple-700 to-violet-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Accueil</Link>
          <h1 className="text-5xl font-bold mb-6">🌙 Interprétation des rêves amoureux</h1>
          <p className="text-2xl opacity-95 mb-4">Ce que vos rêves d&apos;amour révèlent sur votre monde intérieur</p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Rêver de son ex, de tromperie, de mariage, de son crush : la signification de chaque rêve, et ce qu&apos;il ne prédit pas.</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <EEATSignal colorScheme="purple" method="Interprétation symbolique des rêves et guidance émotionnelle" />

        {/* Intro / principle */}
        <section className="bg-purple-50 border-l-4 border-purple-500 rounded-r-xl p-6 md:p-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Comment lire un rêve amoureux&nbsp;?</h2>
          <p className="text-lg leading-relaxed text-gray-800">
            En amour comme ailleurs, un <strong>rêve</strong> parle de votre <strong>monde intérieur</strong>, pas de celui d&apos;une autre personne. Il met en scène des émotions non digérées, désir, peur, manque, attachement, bien plus qu&apos;il n&apos;annonce l&apos;avenir. Un rêve n&apos;est ni une <strong>prémonition</strong>, ni un message que quelqu&apos;un vous envoie, ni une preuve des sentiments de l&apos;autre. La clé d&apos;interprétation la plus fiable reste le <strong>ressenti au réveil</strong>, jamais une grille figée. Chaque fiche ci-dessous décode un rêve d&apos;amour selon cet esprit&nbsp;: ce qu&apos;il peut refléter, et ce qu&apos;il ne prouve pas.
          </p>
        </section>
        {/* Bloc voyants commercial : mêmes rails que la home. */}
        <VoyantRailSection source="reves-amour-hub-rail" bare />

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Les rêves d&apos;amour décryptés</h2>
          <p className="text-lg text-gray-700 mb-8">
            Découvrez la <strong>signification</strong> des rêves amoureux les plus fréquents. D&apos;autres rêves s&apos;ajoutent progressivement à ce dictionnaire.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {DREAM_HUB_CARDS.map((d) => (
              <Link
                key={d.slug}
                href={d.href}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition border-t-4 border-indigo-500"
              >
                <div className="text-3xl mb-2">{d.emoji}</div>
                <h3 className="text-xl font-bold mb-1 text-gray-900">{d.titre}</h3>
                <p className="text-gray-600 text-sm">{d.primaryQuery}</p>
              </Link>
            ))}

            {/* Bridge to the full rêver-de-son-ex guidance page */}
            <Link
              href="/rupture/rever-de-son-ex/"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition border-t-4 border-purple-500"
            >
              <div className="text-3xl mb-2">🌙</div>
              <h3 className="text-xl font-bold mb-1 text-gray-900">Rêver de son Ex</h3>
              <p className="text-gray-600 text-sm">Le guide complet : rêver de son ex qui revient, qui nous ignore, qui nous embrasse.</p>
            </Link>
          </div>
        </section>

        {/* Related networks */}
        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h2 className="font-bold text-lg mb-4 text-gray-900">🔮 Aller plus loin</h2>
          <div className="space-y-2">
            <Link href="/tarot-amour/" className="block text-indigo-600 hover:text-indigo-800 font-medium">&rarr; Tarot amour : signification des cartes</Link>
            <Link href="/methodes-voyance/" className="block text-indigo-600 hover:text-indigo-800 font-medium">&rarr; Les méthodes de voyance amoureuse</Link>
            <Link href="/rupture/" className="block text-indigo-600 hover:text-indigo-800 font-medium">&rarr; Rupture &amp; guérison : toutes nos guidances</Link>
            <Link href="/sentiments/pense-t-il-elle-a-moi/" className="block text-indigo-600 hover:text-indigo-800 font-medium">&rarr; Pense-t-il/elle à moi ?</Link>
          </div>
        </div>

        <VoyantFinalCTA topic="rupture" source="reves-amour-hub-final" />
      </div>
    </main>
  );
}
