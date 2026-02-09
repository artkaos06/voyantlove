'use client';

import React from 'react';
import { Voyant, formatPrice, getAvailabilityServices, getGenderLabel, getTrustScore, getAffiliateLink } from '@/lib/voyants';
import { trackAffiliateClick } from '@/lib/glyphex';

interface VoyantCardProps {
  voyant: Voyant;
  source?: string;
  compact?: boolean;
}

export default function VoyantCard({ voyant, source = 'content-page', compact = false }: VoyantCardProps) {
  const services = getAvailabilityServices(voyant);
  const genderLabel = getGenderLabel(voyant.SEXE);
  const trustScore = getTrustScore(voyant);
  const isOnline = voyant.ETAT === '1';
  const affiliateLink = getAffiliateLink(voyant.ID, source);

  // Get primary service and price
  const getPrimaryService = () => {
    if (voyant.TEL === '1') return { type: 'Téléphone', price: voyant.T_TEL };
    if (voyant.CHAT === '1') return { type: 'Chat', price: voyant.T_CHAT };
    if (voyant.MAIL === '1') return { type: 'Email', price: voyant.MAIL_S };
    return null;
  };

  const primaryService = getPrimaryService();

  const handleAffiliateClick = () => {
    trackAffiliateClick(voyant.ID, source, voyant.VOYANT);
  };

  if (compact) {
    return (
      <a
        href={affiliateLink}
        target="_blank"
        rel="noopener noreferrer sponsored"
        onClick={handleAffiliateClick}
        className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4 border border-gray-200 hover:border-purple-400"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-lg text-gray-900 capitalize">{voyant.VOYANT}</h3>
              {isOnline && (
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full" title="En ligne"></span>
              )}
            </div>
            <p className="text-sm text-gray-600 mb-2">{genderLabel}</p>
            <div className="flex items-center gap-3 text-xs text-gray-600 mb-2">
              <span className="flex items-center gap-1">
                ⭐ {parseFloat(voyant.STAR).toFixed(1)}/5
              </span>
              <span>{voyant.EVAL} avis</span>
              <span>{voyant.CONSULT} consultations</span>
            </div>
            {primaryService && (
              <p className="text-sm font-semibold text-purple-700">
                {primaryService.type} : {formatPrice(primaryService.price)}/min
              </p>
            )}
          </div>
        </div>
      </a>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300">
      {/* Header with online status */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl font-bold overflow-hidden">
              <img
                src={`https://www.monsitevoyance.com/vignettephoto/${voyant.ID}.jpg`}
                alt={voyant.VOYANT}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to initial if image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `<span class="text-3xl font-bold">${voyant.VOYANT.charAt(0).toUpperCase()}</span>`;
                }}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold capitalize">{voyant.VOYANT}</h3>
              <p className="text-sm opacity-90">{genderLabel} Expert</p>
            </div>
          </div>
          {isOnline && (
            <div className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              En ligne
            </div>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        {/* Trust indicators */}
        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
          <div className="bg-purple-50 rounded-lg p-3">
            <div className="text-2xl font-bold text-purple-700">{parseFloat(voyant.STAR).toFixed(1)}</div>
            <div className="text-xs text-gray-600 mt-1">⭐ Note</div>
          </div>
          <div className="bg-blue-50 rounded-lg p-3">
            <div className="text-2xl font-bold text-blue-700">{voyant.EVAL}</div>
            <div className="text-xs text-gray-600 mt-1">📝 Avis</div>
          </div>
          <div className="bg-green-50 rounded-lg p-3">
            <div className="text-2xl font-bold text-green-700">{voyant.CONSULT}</div>
            <div className="text-xs text-gray-600 mt-1">✅ Consultations</div>
          </div>
        </div>

        {/* Services available */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Services disponibles :</h4>
          <div className="flex flex-wrap gap-2">
            {services.map((service, idx) => (
              <span key={idx} className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-4 bg-gray-50 rounded-lg p-3">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Tarifs :</h4>
          <div className="space-y-1 text-sm">
            {voyant.TEL === '1' && (
              <div className="flex justify-between">
                <span className="text-gray-600">📞 Téléphone :</span>
                <span className="font-semibold text-purple-700">{formatPrice(voyant.T_TEL)}/min</span>
              </div>
            )}
            {voyant.CHAT === '1' && (
              <div className="flex justify-between">
                <span className="text-gray-600">💬 Chat :</span>
                <span className="font-semibold text-purple-700">{formatPrice(voyant.T_CHAT)}/min</span>
              </div>
            )}
            {voyant.MAIL === '1' && (
              <div className="flex justify-between">
                <span className="text-gray-600">📧 Email :</span>
                <span className="font-semibold text-purple-700">{formatPrice(voyant.MAIL_S)}€</span>
              </div>
            )}
          </div>
        </div>

        {/* Last review */}
        <div className="mb-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border-l-4 border-purple-500">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">💬 Dernier avis client :</h4>
          <p className="text-sm text-gray-700 italic line-clamp-3">"{voyant.LASTEVAL}"</p>
        </div>

        {/* Trust score */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">Score de confiance :</span>
            <span className="text-sm font-bold text-purple-700">{trustScore}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${trustScore}%` }}
            ></div>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer sponsored"
          onClick={handleAffiliateClick}
          className="block w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
        >
          {isOnline ? '🔮 Consulter maintenant' : '📅 Prendre rendez-vous'}
        </a>

        <p className="text-xs text-gray-500 text-center mt-3">
          ✓ Paiement sécurisé • ✓ Confidentialité garantie
        </p>
      </div>
    </div>
  );
}
