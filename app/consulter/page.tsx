'use client';

import { useState, useEffect } from 'react';
import { Voyant, getAffiliateLink, formatPrice } from '@/lib/voyants';
import { trackAffiliateClick } from '@/lib/glyphex';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function VoyantGrid() {
  const [voyants, setVoyants] = useState<Voyant[]>([]);
  const [freeVoyants, setFreeVoyants] = useState<Voyant[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const source = searchParams.get('ref') || 'consulter';

  useEffect(() => {
    Promise.all([
      fetch('/api/voyants-gratuit').then(r => r.ok ? r.json() : []),
      fetch('/api/voyants').then(r => r.ok ? r.json() : []),
    ]).then(([free, regular]) => {
      setFreeVoyants(free || []);
      // Filter out duplicates (voyants already in free list)
      const freeIds = new Set((free || []).map((v: Voyant) => v.ID));
      const filtered = (regular || []).filter((v: Voyant) => !freeIds.has(v.ID));
      setVoyants(filtered);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="text-center py-16">
        <div className="text-5xl mb-4">🔮</div>
        <p className="text-lg text-gray-600">Recherche des voyants disponibles...</p>
      </div>
    );
  }

  if (freeVoyants.length === 0 && voyants.length === 0) {
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

  const renderVoyantCard = (voyant: Voyant, isFree: boolean) => {
    const isOnline = voyant.ETAT === '1';
    const affiliateLink = getAffiliateLink(voyant.ID, source);

    return (
      <a
        key={voyant.ID}
        href={affiliateLink}
        target="_blank"
        rel="noopener noreferrer sponsored"
        onClick={() => handleClick(voyant.ID, voyant.VOYANT)}
        className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group ${isFree ? 'border-2 border-green-400 hover:border-green-500 ring-2 ring-green-100' : 'border border-gray-200 hover:border-purple-400'}`}
      >
        {/* Free badge */}
        {isFree && (
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-center py-2 text-sm font-bold">
            🎁 15 MINUTES GRATUITES — Offre Découverte
          </div>
        )}

        {/* Header */}
        <div className={`p-4 flex items-center gap-4 ${isFree ? 'bg-gradient-to-r from-green-600 to-emerald-600' : 'bg-gradient-to-r from-purple-600 to-indigo-600'}`}>
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

          {/* Free highlight */}
          {isFree && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4 text-center">
              <p className="text-green-800 font-bold text-sm">15 minutes offertes pour votre 1re consultation</p>
              <p className="text-green-600 text-xs mt-1">Sans engagement — testez gratuitement</p>
            </div>
          )}

          {/* Services & Pricing */}
          <div className="space-y-2 mb-4 text-sm">
            {voyant.TEL === '1' && (
              <div className="flex justify-between items-center">
                <span className="text-gray-600">📞 Téléphone</span>
                <span className="font-semibold text-purple-700">{isFree ? <><s className="text-gray-400">{formatPrice(voyant.T_TEL)}/min</s> <span className="text-green-600 ml-1">GRATUIT 15min</span></> : `${formatPrice(voyant.T_TEL)}/min`}</span>
              </div>
            )}
            {voyant.CHAT === '1' && (
              <div className="flex justify-between items-center">
                <span className="text-gray-600">💬 Chat</span>
                <span className="font-semibold text-purple-700">{isFree ? <><s className="text-gray-400">{formatPrice(voyant.T_CHAT)}/min</s> <span className="text-green-600 ml-1">GRATUIT 15min</span></> : `${formatPrice(voyant.T_CHAT)}/min`}</span>
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
          <div className={`text-white text-center font-semibold py-3 rounded-lg transition-all ${isFree ? 'bg-gradient-to-r from-green-600 to-emerald-600 group-hover:from-green-700 group-hover:to-emerald-700' : 'bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:from-purple-700 group-hover:to-indigo-700'}`}>
            {isFree ? '🎁 Essayer Gratuitement' : (isOnline ? 'Consulter maintenant' : 'Voir le profil')}
          </div>
        </div>
      </a>
    );
  };

  return (
    <div>
      {/* Free voyants section */}
      {freeVoyants.length > 0 && (
        <div className="mb-10">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">🎁 Voyants avec 15 Minutes Gratuites</h2>
            <p className="text-gray-600">Première consultation offerte — testez sans engagement</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeVoyants.map((v) => renderVoyantCard(v, true))}
          </div>
        </div>
      )}

      {/* Regular voyants section */}
      {voyants.length > 0 && (
        <div>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Autres Voyants Disponibles</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {voyants.map((v) => renderVoyantCard(v, false))}
          </div>
        </div>
      )}
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
            <VoyantGrid />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
