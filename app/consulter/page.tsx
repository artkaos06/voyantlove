import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getWebPageSchema, getBreadcrumbSchema, getOrganizationSchema } from '@/lib/schema';
import ConsulterVoyantGrid from '@/components/ConsulterVoyantGrid';

export const metadata: Metadata = {
  title: 'Choisissez votre voyant spécialisé amour',
  description: 'Consultez un voyant spécialisé en amour dès maintenant : 15 minutes gratuites pour votre première consultation, sans engagement, confidentiel et disponible 7j/7.',
  alternates: { canonical: 'https://www.voyantlove.fr/consulter/' },
};

export default function ConsulterPage() {
  const webPageSchema = getWebPageSchema({
    title: 'Choisissez votre voyant spécialisé amour',
    description: 'Consultez un voyant spécialisé en amour dès maintenant : 15 minutes gratuites pour votre première consultation, sans engagement, confidentiel et disponible 7j/7.',
    url: 'https://www.voyantlove.fr/consulter/',
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Consulter', url: 'https://www.voyantlove.fr/consulter/' },
  ]);

  const organizationSchema = getOrganizationSchema();

  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Header */}
      <section className="bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-700 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Choisissez votre voyant spécialisé amour
          </h1>
          <p className="text-lg opacity-95 max-w-2xl mx-auto">
            Nos voyants sont disponibles maintenant. Profitez de <strong>15 minutes gratuites</strong> pour votre première consultation.
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b py-4 px-4">
        <div className="max-w-4xl mx-auto flex justify-center gap-8 text-sm text-gray-600">
          <span>15 min gratuites</span>
          <span>Sans engagement</span>
          <span>Confidentiel</span>
          <span>7j/7</span>
        </div>
      </section>

      {/* Voyant grid */}
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <Suspense fallback={<div className="text-center py-16 text-gray-500">Chargement...</div>}>
            <ConsulterVoyantGrid />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
