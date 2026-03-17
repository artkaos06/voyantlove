'use client';

import React, { useState, useRef } from 'react';
import { ZODIAC_SIGNS, SITUATION_TYPES, getPrediction, type SituationType, type ZodiacSign, type TarotPrediction } from '@/data/tarot-predictions';
import DynamicCTAButton from '@/components/DynamicCTAButton';
import VoyantRecommendations from '@/components/VoyantRecommendations';

interface LeadCaptureFormProps {
  source: string;
  colorScheme: 'purple' | 'emerald';
}

const topicMap: Record<SituationType, 'reconquete' | 'rupture' | 'nouvelle-rencontre' | 'sentiments' | 'crise-couple'> = {
  reconquete: 'reconquete',
  rupture: 'rupture',
  'nouvelle-rencontre': 'nouvelle-rencontre',
  sentiments: 'sentiments',
  'crise-couple': 'crise-couple',
};

export default function LeadCaptureForm({ source, colorScheme }: LeadCaptureFormProps) {
  const [view, setView] = useState<'form' | 'result'>('form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [zodiac, setZodiac] = useState<ZodiacSign | ''>('');
  const [situation, setSituation] = useState<SituationType | ''>('');
  const [prediction, setPrediction] = useState<TarotPrediction | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const isPurple = colorScheme === 'purple';

  const btnClass = isPurple
    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700'
    : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700';

  const accentBg = isPurple ? 'bg-purple-50' : 'bg-emerald-50';
  const accentBorder = isPurple ? 'border-purple-500' : 'border-emerald-500';
  const accentText = isPurple ? 'text-purple-700' : 'text-emerald-700';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !zodiac || !situation) return;

    // Store lead in localStorage
    const lead = { name, email, zodiac, situation, source, timestamp: new Date().toISOString() };
    const existing = JSON.parse(localStorage.getItem('voyantlove_leads') || '[]');
    existing.push(lead);
    localStorage.setItem('voyantlove_leads', JSON.stringify(existing));

    // Track event
    window.dataLayer?.push({
      event: 'lead_form_submit',
      form_name: `tarot-gratuit-${source}`,
    });

    // Generate prediction
    const result = getPrediction(situation, zodiac, name);
    setPrediction(result);
    setView('result');

    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  if (view === 'result' && prediction) {
    return (
      <div ref={resultRef}>
        {/* Prediction reveal */}
        <div className={`${accentBg} rounded-xl p-8 mb-8 border-l-4 ${accentBorder}`}>
          <div className="text-center mb-6">
            <div className="text-6xl mb-3">{prediction.cardEmoji}</div>
            <h3 className={`text-2xl font-bold ${accentText}`}>Votre Carte : {prediction.card}</h3>
            <p className="text-sm text-gray-500 mt-1">Élément {prediction.element}</p>
          </div>

          <div className="space-y-5 max-w-2xl mx-auto">
            <p className="text-lg font-medium text-gray-800 italic">
              {prediction.opening}
            </p>

            <div>
              <h4 className="font-bold text-gray-900 mb-2">Ce que les cartes révèlent</h4>
              <p className="text-gray-700 leading-relaxed">{prediction.insight}</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2">Le conseil des cartes</h4>
              <p className="text-gray-700 leading-relaxed">{prediction.advice}</p>
            </div>

            <div className={`${isPurple ? 'bg-purple-100' : 'bg-emerald-100'} rounded-lg p-4`}>
              <h4 className="font-bold text-gray-900 mb-1">Votre timing</h4>
              <p className="text-gray-700">{prediction.timeframe}</p>
            </div>
          </div>
        </div>

        {/* Upsell to paid consultation */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Pour aller plus loin...
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Ce tirage gratuit donne un aperçu général. Pour une analyse <strong>personnalisée et approfondie</strong> de votre situation avec des dates et détails précis, consultez un voyant spécialisé.
          </p>
          <DynamicCTAButton
            label="Consultation Personnalisée Maintenant"
            source={`${source}-post-prediction`}
            className={`inline-block ${btnClass} text-white px-10 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 hover:shadow-xl`}
          />
          <p className="text-xs text-gray-500 mt-3">Paiement sécurisé — Confidentiel — Voyants disponibles 7j/7</p>
        </div>

        {/* Voyant recommendations */}
        <VoyantRecommendations
          topic={topicMap[situation as SituationType]}
          title="Voyants Recommandés pour Votre Situation"
          subtitle="Ces voyants sont spécialisés dans votre problématique"
          limit={3}
          showOnlineFirst={true}
          source={`${source}-post-prediction`}
        />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 max-w-lg mx-auto">
      <h3 className={`text-2xl font-bold text-center mb-2 ${accentText}`}>
        Votre Tirage Tarot Amour Gratuit
      </h3>
      <p className="text-center text-gray-600 mb-6">
        Remplissez ce formulaire et recevez votre prédiction personnalisée
      </p>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Votre prénom</label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ex : Marie"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Votre email</label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ex : marie@email.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="zodiac" className="block text-sm font-semibold text-gray-700 mb-1">Votre signe astrologique</label>
          <select
            id="zodiac"
            required
            value={zodiac}
            onChange={(e) => setZodiac(e.target.value as ZodiacSign)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Choisissez votre signe</option>
            {ZODIAC_SIGNS.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="situation" className="block text-sm font-semibold text-gray-700 mb-1">Votre situation</label>
          <select
            id="situation"
            required
            value={situation}
            onChange={(e) => setSituation(e.target.value as SituationType)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Choisissez votre situation</option>
            {SITUATION_TYPES.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className={`w-full ${btnClass} text-white font-bold py-4 rounded-lg text-lg transition-all hover:scale-[1.02] hover:shadow-lg mt-2`}
        >
          Recevoir Mon Tirage Gratuit
        </button>

        <p className="text-xs text-gray-500 text-center">
          En soumettant ce formulaire, vous acceptez de recevoir votre tirage et des conseils par email. Désinscription possible à tout moment.
        </p>
      </div>
    </form>
  );
}
