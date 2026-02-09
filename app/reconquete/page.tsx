import type { Metadata } from 'next';
import Link from 'next/link';
import { getWebPageSchema, getBreadcrumbSchema, getOrganizationSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Reconquête Amoureuse : Reconquérir son Ex | Voyance et Tarot',
  description: 'Guide complet pour reconquérir votre ex : stratégies, timing idéal, signes de retour selon le tarot et la voyance.',
  alternates: { canonical: 'https://voyantlove.fr/reconquete' },
};

export default function ReconqueteHubPage() {
  const webPageSchema = getWebPageSchema({
    title: 'Reconquête Amoureuse : Reconquérir son Ex | Voyance et Tarot',
    description: 'Guide complet pour reconquérir votre ex : stratégies, timing idéal, signes de retour selon le tarot et la voyance.',
    url: 'https://voyantlove.fr/reconquete',
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Reconquête Amoureuse', url: 'https://voyantlove.fr/reconquete' },
  ]);

  const organizationSchema = getOrganizationSchema();

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <header className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Accueil</Link>
          <h1 className="text-5xl font-bold mb-6">💜 Reconquête Amoureuse</h1>
          <p className="text-2xl opacity-95 mb-8">Stratégies et Guidance pour Reconquérir votre Ex</p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Le tarot révèle si un retour est possible, le timing idéal et les étapes pour maximiser vos chances.</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🗺️ Votre Parcours de Reconquête</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/reconquete/reconquerir-son-ex" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-t-4 border-purple-500">
              <div className="text-3xl mb-3">💜</div>
              <h3 className="text-xl font-bold mb-2">Reconquérir son Ex</h3>
              <p className="text-gray-600 text-sm">Guide complet stratégies et étapes</p>
            </Link>
            <Link href="/reconquete/va-t-il-elle-revenir" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-t-4 border-indigo-500">
              <div className="text-3xl mb-3">❓</div>
              <h3 className="text-xl font-bold mb-2">Va-t-il/elle Revenir ?</h3>
              <p className="text-gray-600 text-sm">Réponse honnête du tarot</p>
            </Link>
            <Link href="/reconquete/retour-de-lex" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-t-4 border-violet-500">
              <div className="text-3xl mb-3">↩️</div>
              <h3 className="text-xl font-bold mb-2">Retour de l'Ex</h3>
              <p className="text-gray-600 text-sm">Signes et prédictions</p>
            </Link>
            <Link href="/reconquete/ex-qui-revient" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-t-4 border-pink-500">
              <div className="text-3xl mb-3">💕</div>
              <h3 className="text-xl font-bold mb-2">Ex qui Revient</h3>
              <p className="text-gray-600 text-sm">Que faire maintenant ?</p>
            </Link>
            <Link href="/reconquete/seconde-chance-amour" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-t-4 border-green-500">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="text-xl font-bold mb-2">Seconde Chance</h3>
              <p className="text-gray-600 text-sm">Donner une nouvelle opportunité</p>
            </Link>
            <Link href="/reconquete/se-remettre-ensemble" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-t-4 border-teal-500">
              <div className="text-3xl mb-3">💞</div>
              <h3 className="text-xl font-bold mb-2">Se Remettre Ensemble</h3>
              <p className="text-gray-600 text-sm">Reconstruction du couple</p>
            </Link>
          </div>
        </section>

        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">💜 Consultation Reconquête</h2>
          <p className="text-lg mb-6">Guidance personnalisée pour reconquérir votre ex avec sagesse</p>
          <a href="#consultation" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition inline-block">Réserver</a>
        </div>
      </div>
    </main>
  );
}
