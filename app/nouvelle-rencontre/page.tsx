import type { Metadata } from 'next';
import Link from 'next/link';
import { getWebPageSchema, getBreadcrumbSchema, getOrganizationSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Nouvelle Rencontre Amoureuse : Trouver l\'Amour | Voyance',
  description: 'Quand et comment rencontrer l\'amour ? Trouver votre âme sœur selon le tarot et la voyance. Prédictions et guidance.',
  alternates: { canonical: 'https://voyantlove.fr/nouvelle-rencontre' },
};

export default function NouvelleRencontreHubPage() {
  const webPageSchema = getWebPageSchema({
    title: 'Nouvelle Rencontre Amoureuse : Trouver l\'Amour | Voyance',
    description: 'Quand et comment rencontrer l\'amour ? Trouver votre âme sœur selon le tarot et la voyance. Prédictions et guidance.',
    url: 'https://voyantlove.fr/nouvelle-rencontre',
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Nouvelle Rencontre Amoureuse', url: 'https://voyantlove.fr/nouvelle-rencontre' },
  ]);

  const organizationSchema = getOrganizationSchema();

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <header className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Accueil</Link>
          <h1 className="text-5xl font-bold mb-6">✨ Nouvelle Rencontre Amoureuse</h1>
          <p className="text-2xl opacity-95 mb-8">Trouver l'Amour et votre Âme Sœur</p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Le tarot prédit quand, où et comment vous allez rencontrer votre prochaine relation.</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🗺️ Votre Chemin vers l'Amour</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/nouvelle-rencontre/quand-rencontre-amour" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-cyan-500">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-2xl font-bold mb-3">Quand Rencontrer ?</h3>
              <p className="text-gray-600 mb-4">Timing, lieu et profil de votre prochaine rencontre amoureuse.</p>
              <span className="text-cyan-600 font-semibold">Découvrir →</span>
            </Link>

            <Link href="/nouvelle-rencontre/trouver-ame-soeur" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-purple-500">
              <div className="text-4xl mb-4">💫</div>
              <h3 className="text-2xl font-bold mb-3">Trouver l'Âme Sœur</h3>
              <p className="text-gray-600 mb-4">Comment et où trouver votre âme sœur selon la destinée.</p>
              <span className="text-purple-600 font-semibold">Découvrir →</span>
            </Link>

            <Link href="/nouvelle-rencontre/signes-ame-soeur" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-pink-500">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3">Signes Âme Sœur</h3>
              <p className="text-gray-600 mb-4">Reconnaître votre âme sœur quand vous la rencontrez.</p>
              <span className="text-pink-600 font-semibold">Découvrir →</span>
            </Link>

            <Link href="/nouvelle-rencontre/nouvelle-relation-amoureuse" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-green-500">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold mb-3">Nouvelle Relation</h3>
              <p className="text-gray-600 mb-4">Débuter une nouvelle relation après rupture avec sagesse.</p>
              <span className="text-green-600 font-semibold">Découvrir →</span>
            </Link>
          </div>
        </section>

        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">✨ Prédiction Rencontre</h2>
          <p className="text-lg mb-6">Découvrez quand et comment vous allez rencontrer l'amour</p>
          <a href="#consultation" className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition inline-block">Consultation</a>
        </div>
      </div>
    </main>
  );
}
