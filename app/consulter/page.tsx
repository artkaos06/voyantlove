'use client';

import { useVoyants } from '@/lib/useVoyants';
import { getAffiliateLink, formatPrice } from '@/lib/voyants';
import { trackAffiliateClick } from '@/lib/glyphex';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function VoyantGrid() {
  const { voyants, loading } = useVoyants();
  const searchParams = useSearchParams();
  const source = searchParams.get('ref') || 'consulter';

  if (loading) {
    return (
      <div className="text-center py-16">
        <div className="text-5xl mb-4">🔮</div>
        <p className="text-lg text-gray-600">Recherche des voyants disponibles...</p>
      </div>
    );
  }

  if (voyants.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-lg text-gray-600">Aucun voyant disponible pour le moment. Réessayez dans quelques minutes.</p>
      </div>
    );
  }

  const handleClick = (voyantId: string, voyantName: string) => {
    trackAffiliateClick(voyantId, source, voyantName);
    window.dataLayer?.push({ event: 'cta_click', cta_label: `consulter-${voyantName}` });
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {voyants.map((voyant) => {
        const isOnline = voyant.ETAT === '1';
        const affiliateLink = getAffiliateLink(voyant.ID, source);

        return (
          <a
            key={voyant.ID}
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            onClick={() => handleClick(voyant.ID, voyant.VOYANT)}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-purple-400 group"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={`https://www.monsitevoyance.com/vignaff/${voyant.ID}.jpg`}
                  alt={voyant.VOYANT}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `<span class="text-white text-2xl font-bold flex items-center justify-center w-full h-full">${voyant.VOYANT.charAt(0).toUpperCase()}</span>`;
                  }}
                />
              </div>
              <div className="text-white flex-1">
                <h2 className="text-lg font-bold capitalize">{voyant.VOYANT}</h2>
                <p className="text-sm opacity-90">{voyant.SEXE === '1' ? 'Voyant' : 'Voyante'} Expert{voyant.SEXE === '2' ? 'e' : ''}</p>
              </div>
              {isOnline && (
                <div className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1 flex-shrink-0">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  En ligne
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="p-4">
              <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                <div className="bg-purple-50 rounded-lg p-2">
                  <div className="text-lg font-bold text-purple-700">{parseFloat(voyant.STAR).toFixed(1)}</div>
                  <div className="text-xs text-gray-500">Note</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-2">
                  <div className="text-lg font-bold text-blue-700">{voyant.EVAL}</div>
                  <div className="text-xs text-gray-500">Avis</div>
                </div>
                <div className="bg-green-50 rounded-lg p-2">
                  <div className="text-lg font-bold text-green-700">{voyant.PC}%</div>
                  <div className="text-xs text-gray-500">Satisfaction</div>
                </div>
              </div>

              {/* Services & Pricing */}
              <div className="space-y-2 mb-4 text-sm">
                {voyant.TEL === '1' && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">📞 Téléphone</span>
                    <span className="font-semibold text-purple-700">{formatPrice(voyant.T_TEL)}/min</span>
                  </div>
                )}
                {voyant.CHAT === '1' && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">💬 Chat</span>
                    <span className="font-semibold text-purple-700">{formatPrice(voyant.T_CHAT)}/min</span>
                  </div>
                )}
                {voyant.MAIL === '1' && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">📧 Email</span>
                    <span className="font-semibold text-purple-700">{formatPrice(voyant.MAIL_S)}€</span>
                  </div>
                )}
              </div>

              {/* Last review */}
              {voyant.LASTEVAL && (
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-gray-600 italic line-clamp-2">&quot;{voyant.LASTEVAL}&quot;</p>
                </div>
              )}

              {/* CTA */}
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center font-semibold py-3 rounded-lg group-hover:from-purple-700 group-hover:to-indigo-700 transition-all">
                {isOnline ? 'Consulter maintenant' : 'Voir le profil'}
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default function ConsulterPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-700 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Choisissez Votre Voyant Spécialisé Amour
          </h1>
          <p className="text-lg opacity-95 max-w-2xl mx-auto">
            Nos voyants sont disponibles maintenant pour une consultation personnalisée. Choisissez celui qui vous correspond.
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b py-4 px-4">
        <div className="max-w-4xl mx-auto flex justify-center gap-8 text-sm text-gray-600">
          <span>Paiement sécurisé</span>
          <span>Confidentialité garantie</span>
          <span>Disponible 7j/7</span>
        </div>
      </section>

      {/* Voyant grid */}
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <Suspense fallback={<div className="text-center py-16 text-gray-500">Chargement...</div>}>
            <VoyantGrid />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
