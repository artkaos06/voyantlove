'use client';

import React from 'react';
import { Voyant, getVoyantsForTopic, getOnlineVoyants, getAffiliateLink } from '@/lib/voyants';
import { trackAffiliateClick } from '@/lib/glyphex';
import voyants from '@/data/voyants.json';

interface VoyantQuickCTAProps {
  topic: 'reconquete' | 'rupture' | 'nouvelle-rencontre' | 'sentiments' | 'crise-couple' | 'methodes-voyance';
  source?: string;
}

/**
 * Bandeau CTA compact pour placement en début d'article
 * Affiche 1 voyant en ligne (ou top-rated si aucun en ligne)
 * Design non-intrusif, conversion rapide
 */
export default function VoyantQuickCTA({ topic, source = 'quick-cta' }: VoyantQuickCTAProps) {
  const typedVoyants = voyants as Voyant[];
  const topicVoyants = getVoyantsForTopic(typedVoyants, topic, 5);
  const onlineVoyants = getOnlineVoyants(topicVoyants);

  // Prioriser un voyant en ligne, sinon le meilleur noté
  const selectedVoyant = onlineVoyants[0] || topicVoyants[0];

  if (!selectedVoyant) return null;

  const isOnline = selectedVoyant.ETAT === '1';
  const affiliateLink = getAffiliateLink(selectedVoyant.ID, `${source}-${topic}`);

  const handleAffiliateClick = () => {
    trackAffiliateClick(selectedVoyant.ID, `${source}-${topic}`, selectedVoyant.VOYANT);
  };

  // Couleurs par topic
  const colorSchemes = {
    reconquete: {
      bg: 'from-purple-100 to-pink-100',
      border: 'border-pink-500',
      text: 'text-pink-600',
      button: 'from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
    },
    rupture: {
      bg: 'from-red-100 to-orange-100',
      border: 'border-red-500',
      text: 'text-red-600',
      button: 'from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700',
    },
    'nouvelle-rencontre': {
      bg: 'from-cyan-100 to-blue-100',
      border: 'border-cyan-500',
      text: 'text-cyan-600',
      button: 'from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700',
    },
    sentiments: {
      bg: 'from-pink-100 to-purple-100',
      border: 'border-pink-500',
      text: 'text-pink-600',
      button: 'from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700',
    },
    'crise-couple': {
      bg: 'from-amber-100 to-yellow-100',
      border: 'border-amber-500',
      text: 'text-amber-600',
      button: 'from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700',
    },
    'methodes-voyance': {
      bg: 'from-indigo-100 to-violet-100',
      border: 'border-indigo-500',
      text: 'text-indigo-600',
      button: 'from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700',
    },
  };

  const colors = colorSchemes[topic];

  return (
    <div className={`bg-gradient-to-r ${colors.bg} rounded-xl p-6 mb-8 border-l-4 ${colors.border} shadow-md`}>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        {/* Left side: Icon & Message */}
        <div className="flex items-start gap-4 flex-1">
          <div className="text-5xl flex-shrink-0">🔮</div>
          <div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">
              {isOnline ? '⚡ Voyant disponible maintenant' : '📅 Consultation voyance'}
            </h3>
            <p className="text-gray-700 mb-3">
              {isOnline
                ? `${selectedVoyant.VOYANT.charAt(0).toUpperCase() + selectedVoyant.VOYANT.slice(1)} est en ligne et peut vous guider immédiatement`
                : `${selectedVoyant.VOYANT.charAt(0).toUpperCase() + selectedVoyant.VOYANT.slice(1)} - ${selectedVoyant.CONSULT} consultations • Note: ${parseFloat(selectedVoyant.STAR).toFixed(1)}/5`}
            </p>
            <div className="flex flex-wrap gap-2 text-sm text-gray-600">
              {selectedVoyant.TEL === '1' && (
                <span className="bg-white px-3 py-1 rounded-full">
                  📞 {parseFloat(selectedVoyant.T_TEL).toFixed(2)}€/min
                </span>
              )}
              {selectedVoyant.CHAT === '1' && (
                <span className="bg-white px-3 py-1 rounded-full">
                  💬 {parseFloat(selectedVoyant.T_CHAT).toFixed(2)}€/min
                </span>
              )}
              {selectedVoyant.MAIL === '1' && (
                <span className="bg-white px-3 py-1 rounded-full">
                  📧 {parseFloat(selectedVoyant.MAIL_S).toFixed(0)}€
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Right side: CTA Button */}
        <div className="w-full md:w-auto flex-shrink-0">
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            onClick={handleAffiliateClick}
            className={`block w-full md:w-auto text-center bg-gradient-to-r ${colors.button} text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:shadow-xl transition-all`}
          >
            {isOnline ? '🔮 Consulter maintenant' : '📅 Prendre RDV'}
          </a>
          <p className="text-xs text-gray-600 text-center mt-2">
            ✓ {selectedVoyant.EVAL} avis clients • ✓ Paiement sécurisé
          </p>
        </div>
      </div>

      {/* Testimonial snippet (optionnel, peut être désactivé) */}
      {selectedVoyant.LASTEVAL && (
        <div className="mt-4 pt-4 border-t border-gray-300/50">
          <p className="text-sm text-gray-700 italic line-clamp-2">
            💬 "{selectedVoyant.LASTEVAL}"
          </p>
        </div>
      )}
    </div>
  );
}
