'use client';

import React from 'react';
import { getAffiliateLink } from '@/lib/voyants';
import { trackAffiliateClick } from '@/lib/glyphex';
import { useVoyants } from '@/lib/useVoyants';

interface VoyantFinalCTAProps {
  topic: 'reconquete' | 'rupture' | 'nouvelle-rencontre' | 'sentiments' | 'crise-couple' | 'methodes-voyance' | 'voyance-gratuite';
  source?: string;
  headline?: string;
  subheadline?: string;
}

export default function VoyantFinalCTA({
  topic,
  source = 'final-cta',
  headline,
  subheadline,
}: VoyantFinalCTAProps) {
  const { voyants: liveVoyants, loading } = useVoyants();

  if (loading || liveVoyants.length === 0) return null;

  const selectedVoyant = liveVoyants[0];
  const affiliateLink = getAffiliateLink(selectedVoyant.ID, `${source}-${topic}`);

  const handleAffiliateClick = () => {
    trackAffiliateClick(selectedVoyant.ID, `${source}-${topic}`, selectedVoyant.VOYANT);
  };

  const gradients: Record<string, string> = {
    reconquete: 'from-purple-600 via-pink-600 to-rose-600',
    rupture: 'from-gray-700 via-gray-800 to-gray-900',
    'nouvelle-rencontre': 'from-cyan-600 via-blue-600 to-indigo-600',
    sentiments: 'from-pink-600 via-rose-600 to-purple-600',
    'crise-couple': 'from-amber-600 via-orange-600 to-red-600',
    'methodes-voyance': 'from-indigo-600 via-violet-600 to-purple-600',
    'voyance-gratuite': 'from-green-600 via-emerald-600 to-teal-600',
  };

  const defaultHeadlines: Record<string, string> = {
    reconquete: 'Ne Restez Pas Dans le Doute',
    rupture: 'Trouvez la Paix Intérieure',
    'nouvelle-rencontre': 'Découvrez Votre Avenir Amoureux',
    sentiments: 'Clarifiez Ses Vrais Sentiments',
    'crise-couple': 'Sauvez Votre Couple Maintenant',
    'methodes-voyance': 'Consultez un Expert du Tarot',
    'voyance-gratuite': 'Essayez une Consultation Gratuite',
  };

  const defaultSubheadlines: Record<string, string> = {
    reconquete: 'Obtenez une guidance claire et honnête sur votre situation amoureuse',
    rupture: 'Nos voyants vous accompagnent avec bienveillance dans votre guérison',
    'nouvelle-rencontre': 'Nos voyants révèlent quand et comment vous rencontrerez l\'amour',
    sentiments: 'Nos voyants lisent les sentiments cachés et révèlent la vérité',
    'crise-couple': 'Nos voyants identifient les solutions pour retrouver l\'harmonie',
    'methodes-voyance': 'Nos experts du tarot et de l\'oracle éclairent votre vie sentimentale',
    'voyance-gratuite': 'Découvrez la voyance amoureuse sans engagement — premières minutes offertes',
  };

  const buttonColors: Record<string, string> = {
    reconquete: 'text-pink-600',
    rupture: 'text-gray-800',
    'nouvelle-rencontre': 'text-blue-600',
    sentiments: 'text-rose-600',
    'crise-couple': 'text-orange-600',
    'methodes-voyance': 'text-violet-600',
    'voyance-gratuite': 'text-emerald-600',
  };

  return (
    <div className={`bg-gradient-to-br ${gradients[topic]} text-white rounded-xl p-10 mb-8 text-center shadow-2xl`}>
      <div className="mb-6">
        <h2 className="text-4xl font-bold mb-4">🔮 {headline || defaultHeadlines[topic]}</h2>
        <p className="text-xl opacity-95 max-w-2xl mx-auto mb-2">
          {subheadline || defaultSubheadlines[topic]}
        </p>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Nos voyants spécialisés vous guident avec précision et bienveillance
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8 text-sm">
        <div className="bg-white/10 backdrop-blur rounded-lg p-4">
          <div className="text-3xl mb-2">⚡</div>
          <div className="font-semibold">Réponse Immédiate</div>
          <div className="opacity-90 text-xs mt-1">Voyants disponibles maintenant</div>
        </div>
        <div className="bg-white/10 backdrop-blur rounded-lg p-4">
          <div className="text-3xl mb-2">🎯</div>
          <div className="font-semibold">Guidance Précise</div>
          <div className="opacity-90 text-xs mt-1">Adaptée à votre situation</div>
        </div>
        <div className="bg-white/10 backdrop-blur rounded-lg p-4">
          <div className="text-3xl mb-2">💯</div>
          <div className="font-semibold">Sans Jugement</div>
          <div className="opacity-90 text-xs mt-1">Écoute bienveillante garantie</div>
        </div>
      </div>

      <a
        href={affiliateLink}
        target="_blank"
        rel="noopener noreferrer sponsored"
        onClick={handleAffiliateClick}
        className={`inline-block bg-white ${buttonColors[topic]} px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all hover:scale-105`}
      >
        🔮 Consulter un Voyant Maintenant
      </a>
      <p className="mt-4 text-sm opacity-90">
        ✓ {liveVoyants.length} voyants en ligne • ✓ Paiement sécurisé • ✓ Confidentialité garantie
      </p>
    </div>
  );
}
