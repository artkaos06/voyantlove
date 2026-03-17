'use client';

import { useEffect } from 'react';
import { useVoyants } from '@/lib/useVoyants';
import { getAffiliateLink } from '@/lib/voyants';
import { trackAffiliateClick } from '@/lib/glyphex';

export default function GoRedirect() {
  const { voyants, loading } = useVoyants();

  useEffect(() => {
    if (loading || voyants.length === 0) return;

    const voyant = voyants[0];
    const params = new URLSearchParams(window.location.search);
    const source = params.get('ref') || 'email-cta';

    trackAffiliateClick(voyant.ID, source, voyant.VOYANT);
    window.dataLayer?.push({ event: 'cta_click', cta_label: `email-redirect-${source}` });

    const link = getAffiliateLink(voyant.ID, source);
    window.location.href = link;
  }, [voyants, loading]);

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="text-5xl mb-4">🔮</div>
        <p className="text-lg text-gray-700 font-medium">Connexion avec votre voyant...</p>
        <p className="text-sm text-gray-500 mt-2">Vous allez être redirigé dans quelques secondes</p>
      </div>
    </main>
  );
}
