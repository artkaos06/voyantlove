'use client';

import React from 'react';
import VoyantCard from './VoyantCard';
import { Voyant, getVoyantsForTopic, getOnlineVoyants } from '@/lib/voyants';
import voyants from '@/data/voyants.json';

interface VoyantRecommendationsProps {
  topic: 'reconquete' | 'rupture' | 'nouvelle-rencontre' | 'sentiments' | 'crise-couple' | 'methodes-voyance';
  title?: string;
  subtitle?: string;
  limit?: number;
  showOnlineFirst?: boolean;
  source?: string;
}

export default function VoyantRecommendations({
  topic,
  title,
  subtitle,
  limit = 3,
  showOnlineFirst = true,
  source = 'recommendations',
}: VoyantRecommendationsProps) {
  const typedVoyants = voyants as Voyant[];

  let recommendedVoyants = getVoyantsForTopic(typedVoyants, topic, limit * 2);

  // Prioritize online voyants if requested
  if (showOnlineFirst) {
    const online = getOnlineVoyants(recommendedVoyants);
    const offline = recommendedVoyants.filter((v) => v.ETAT === '0');
    recommendedVoyants = [...online, ...offline];
  }

  // Limit to requested number
  recommendedVoyants = recommendedVoyants.slice(0, limit);

  const defaultTitles: Record<typeof topic, string> = {
    reconquete: '💕 Voyants Spécialisés en Reconquête Amoureuse',
    rupture: '💔 Voyants Experts en Rupture et Guérison',
    'nouvelle-rencontre': '✨ Voyants Spécialisés Nouvelle Rencontre',
    sentiments: '💖 Voyants Experts en Sentiments Amoureux',
    'crise-couple': '⚠️ Voyants Spécialisés Crise de Couple',
    'methodes-voyance': '🔮 Voyants Experts en Tarot et Oracle Amoureux',
  };

  const defaultSubtitles: Record<typeof topic, string> = {
    reconquete: 'Nos voyants les mieux notés pour vous guider dans la reconquête de votre ex',
    rupture: 'Accompagnement bienveillant pour traverser votre rupture et vous reconstruire',
    'nouvelle-rencontre': 'Découvrez quand et comment vous rencontrerez l\'amour',
    sentiments: 'Clarté sur les sentiments et l\'avenir de votre relation',
    'crise-couple': 'Solutions concrètes pour surmonter les crises et sauver votre couple',
    'methodes-voyance': 'Maîtres du tarot, oracle et astrologie pour éclairer votre vie sentimentale',
  };

  return (
    <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-xl p-8 my-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          {title || defaultTitles[topic]}
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          {subtitle || defaultSubtitles[topic]}
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full">
            ⚡ {getOnlineVoyants(typedVoyants).length} voyants en ligne maintenant
          </span>
          <span className="bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full">
            ⭐ Note moyenne : 4.9/5
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {recommendedVoyants.map((voyant) => (
          <VoyantCard key={voyant.ID} voyant={voyant} source={`${source}-${topic}`} />
        ))}
      </div>

      <div className="bg-white rounded-lg p-6 text-center border-2 border-purple-200">
        <h3 className="font-bold text-xl text-gray-900 mb-3">
          🔮 Pourquoi Choisir Nos Voyants ?
        </h3>
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="text-3xl mb-2">✅</div>
            <div className="font-semibold text-gray-800">Vérifiés</div>
            <div className="text-gray-600 mt-1">Tous nos voyants sont certifiés et vérifiés</div>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="text-3xl mb-2">🎯</div>
            <div className="font-semibold text-gray-800">Spécialisés</div>
            <div className="text-gray-600 mt-1">Experts dans leur domaine avec retours positifs</div>
          </div>
          <div className="bg-pink-50 rounded-lg p-4">
            <div className="text-3xl mb-2">💯</div>
            <div className="font-semibold text-gray-800">Satisfaits</div>
            <div className="text-gray-600 mt-1">Milliers de consultations réussies</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-3xl mb-2">🔒</div>
            <div className="font-semibold text-gray-800">Confidentiel</div>
            <div className="text-gray-600 mt-1">Confidentialité et paiement sécurisé garantis</div>
          </div>
        </div>
      </div>
    </section>
  );
}
