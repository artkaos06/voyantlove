import type { Metadata } from 'next';
import Link from 'next/link';
import { getWebPageSchema, getBreadcrumbSchema, getOrganizationSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Crise de Couple : Solutions et Guidance | Voyance',
  description: 'Surmonter les crises de couple : infidélité, jalousie, communication. Solutions selon le tarot et la voyance.',
  alternates: { canonical: 'https://voyantlove.fr/crise-couple' },
};

export default function CriseCoupleHubPage() {
  const webPageSchema = getWebPageSchema({
    title: 'Crise de Couple : Solutions et Guidance | Voyance',
    description: 'Surmonter les crises de couple : infidélité, jalousie, communication. Solutions selon le tarot et la voyance.',
    url: 'https://voyantlove.fr/crise-couple',
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Crise de Couple', url: 'https://voyantlove.fr/crise-couple' },
  ]);

  const organizationSchema = getOrganizationSchema();

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <header className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Accueil</Link>
          <h1 className="text-5xl font-bold mb-6">⚠️ Crise de Couple</h1>
          <p className="text-2xl opacity-95 mb-8">Solutions et Guidance pour Surmonter les Problèmes</p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Le tarot aide à résoudre infidélité, jalousie et problèmes de communication.</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🗺️ Résoudre les Crises</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/crise-couple/infidelite-couple" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-red-500">
              <div className="text-4xl mb-4">💔</div>
              <h3 className="text-2xl font-bold mb-3">Infidélité Couple</h3>
              <p className="text-gray-600 mb-4">Découvrir et surmonter une infidélité selon le tarot.</p>
              <span className="text-red-600 font-semibold">Lire →</span>
            </Link>

            <Link href="/crise-couple/jalousie-excessive" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-yellow-500">
              <div className="text-4xl mb-4">😠</div>
              <h3 className="text-2xl font-bold mb-3">Jalousie Excessive</h3>
              <p className="text-gray-600 mb-4">Gérer et guérir la jalousie maladive dans le couple.</p>
              <span className="text-yellow-600 font-semibold">Lire →</span>
            </Link>

            <Link href="/crise-couple/problemes-communication-couple" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-blue-500">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-3">Problèmes Communication</h3>
              <p className="text-gray-600 mb-4">Rétablir le dialogue et la compréhension mutuelle.</p>
              <span className="text-blue-600 font-semibold">Lire →</span>
            </Link>
          </div>
        </section>

        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">⚠️ Consultation Crise</h2>
          <p className="text-lg mb-6">Guidance pour surmonter votre crise de couple</p>
          <a href="#consultation" className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition inline-block">Consultation</a>
        </div>
      </div>
    </main>
  );
}
