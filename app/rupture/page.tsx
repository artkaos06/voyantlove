import type { Metadata } from 'next';
import Link from 'next/link';
import { getWebPageSchema, getBreadcrumbSchema, getOrganizationSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Rupture Amoureuse : Comprendre, Surmonter et Guérir | Voyance',
  description: 'Guide complet sur la rupture amoureuse : comprendre les causes, surmonter le chagrin et guérir selon le tarot et la voyance.',
  alternates: { canonical: 'https://voyantlove.fr/rupture' },
};

export default function RuptureHubPage() {
  const webPageSchema = getWebPageSchema({
    title: 'Rupture Amoureuse : Comprendre, Surmonter et Guérir | Voyance',
    description: 'Guide complet sur la rupture amoureuse : comprendre les causes, surmonter le chagrin et guérir selon le tarot et la voyance.',
    url: 'https://voyantlove.fr/rupture',
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Rupture Amoureuse', url: 'https://voyantlove.fr/rupture' },
  ]);

  const organizationSchema = getOrganizationSchema();

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <header className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Accueil</Link>
          <h1 className="text-5xl font-bold mb-6">💔 Rupture Amoureuse</h1>
          <p className="text-2xl opacity-95 mb-8">Comprendre, Surmonter et Guérir selon la Voyance</p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Guidance tarot pour traverser votre rupture, comprendre les raisons profondes et entamer votre reconstruction.</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🗺️ Votre Parcours de Guérison</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/rupture/rupture-amoureuse" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-red-500">
              <div className="text-4xl mb-4">💔</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Rupture Amoureuse</h3>
              <p className="text-gray-600 mb-4">Comprendre les vraies raisons de la séparation et le sens profond de cette épreuve.</p>
              <span className="text-red-600 font-semibold">Lire →</span>
            </Link>

            <Link href="/rupture/chagrin-damour" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-blue-500">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Chagrin d'Amour</h3>
              <p className="text-gray-600 mb-4">Traverser la douleur étape par étape avec compassion et retrouver l'espoir.</p>
              <span className="text-blue-600 font-semibold">Lire →</span>
            </Link>

            <Link href="/rupture/oublier-son-ex" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-pink-500">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Oublier son Ex</h3>
              <p className="text-gray-600 mb-4">Tourner la page complètement et se préparer à rencontrer un nouvel amour.</p>
              <span className="text-pink-600 font-semibold">Lire →</span>
            </Link>
          </div>
        </section>

        <section className="bg-white rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">🔮 Ce que la Voyance Révèle sur la Rupture</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">Le <strong>tarot</strong> aide à comprendre pourquoi votre relation devait se terminer, quelles leçons en tirer, et comment transformer cette épreuve en évolution personnelle. Chaque <strong>rupture amoureuse</strong> porte un sens spirituel profond.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">✨ Les Leçons Karmiques</h3>
              <p className="text-gray-700">Chaque relation enseigne quelque chose. Le tarot révèle ce que vous deviez apprendre de cette expérience.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">⏰ Le Timing de Guérison</h3>
              <p className="text-gray-700">Combien de temps pour guérir ? Le tarot donne un timing personnalisé selon votre évolution.</p>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">💬 Besoin de Guidance ?</h2>
          <p className="text-lg mb-6 opacity-90">Consultez un voyant pour comprendre votre rupture et entamer votre guérison</p>
          <a href="#consultation" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition inline-block">Consultation Rupture</a>
        </div>
      </div>
    </main>
  );
}
