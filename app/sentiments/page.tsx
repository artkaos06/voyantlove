import type { Metadata } from 'next';
import Link from 'next/link';
import { getWebPageSchema, getBreadcrumbSchema, getOrganizationSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Sentiments Amoureux : Décrypter Émotions et Avenir | Voyance',
  description: 'Analyse des sentiments amoureux : M\'aime-t-il/elle ? Décrypter émotions et prédire votre avenir amoureux selon le tarot.',
  alternates: { canonical: 'https://voyantlove.fr/sentiments' },
};

export default function SentimentsHubPage() {
  const webPageSchema = getWebPageSchema({
    title: 'Sentiments Amoureux : Décrypter Émotions et Avenir | Voyance',
    description: 'Analyse des sentiments amoureux : M\'aime-t-il/elle ? Décrypter émotions et prédire votre avenir amoureux selon le tarot.',
    url: 'https://voyantlove.fr/sentiments',
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Sentiments Amoureux', url: 'https://voyantlove.fr/sentiments' },
  ]);

  const organizationSchema = getOrganizationSchema();

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <header className="bg-gradient-to-r from-red-500 via-pink-500 to-rose-500 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Accueil</Link>
          <h1 className="text-5xl font-bold mb-6">💖 Sentiments Amoureux</h1>
          <p className="text-2xl opacity-95 mb-8">Décrypter les Émotions et Prédire l'Avenir</p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Le tarot révèle les vrais sentiments et prédit votre futur sentimental avec précision.</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🗺️ Comprendre vos Sentiments</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/sentiments/maime-t-il-elle" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-red-500">
              <div className="text-4xl mb-4">💖</div>
              <h3 className="text-2xl font-bold mb-3">M'aime-t-il/elle ?</h3>
              <p className="text-gray-600 mb-4">Décryptez ses vrais sentiments grâce au tarot et à la voyance.</p>
              <span className="text-red-600 font-semibold">Découvrir →</span>
            </Link>

            <Link href="/sentiments/signes-il-elle-maime" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-pink-500">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-2xl font-bold mb-3">Signes d'Amour</h3>
              <p className="text-gray-600 mb-4">Reconnaître les signes qu'il/elle vous aime vraiment.</p>
              <span className="text-pink-600 font-semibold">Découvrir →</span>
            </Link>

            <Link href="/sentiments/avenir-amoureux" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-purple-500">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-2xl font-bold mb-3">Avenir Amoureux</h3>
              <p className="text-gray-600 mb-4">Prédictions sur votre futur sentimental et votre destinée.</p>
              <span className="text-purple-600 font-semibold">Découvrir →</span>
            </Link>
          </div>
        </section>

        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">💝 Décryptage Sentiments</h2>
          <p className="text-lg mb-6">Consultation pour comprendre les vrais sentiments et l'avenir</p>
          <a href="#consultation" className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition inline-block">Consultation</a>
        </div>
      </div>
    </main>
  );
}
