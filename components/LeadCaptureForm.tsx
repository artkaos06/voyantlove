'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ZODIAC_SIGNS, SITUATION_TYPES, getPrediction, type SituationType, type ZodiacSign, type TarotPrediction } from '@/data/tarot-predictions';

interface LeadCaptureFormProps {
  source: string;
  colorScheme: 'purple' | 'emerald';
  mode?: 'full' | 'teaser';
}

export default function LeadCaptureForm({ source, colorScheme, mode = 'full' }: LeadCaptureFormProps) {
  const router = useRouter();
  const [view, setView] = useState<'form' | 'result'>('form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [zodiac, setZodiac] = useState<ZodiacSign | ''>('');
  const [situation, setSituation] = useState<SituationType | ''>('');
  const [prediction, setPrediction] = useState<TarotPrediction | null>(null);
  const [countdown, setCountdown] = useState(8);
  const resultRef = useRef<HTMLDivElement>(null);

  const isPurple = colorScheme === 'purple';

  const btnClass = isPurple
    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700'
    : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700';

  const accentBg = isPurple ? 'bg-purple-50' : 'bg-emerald-50';
  const accentBorder = isPurple ? 'border-purple-500' : 'border-emerald-500';
  const accentText = isPurple ? 'text-purple-700' : 'text-emerald-700';

  // Countdown + auto-redirect in teaser mode
  useEffect(() => {
    if (view !== 'result' || mode !== 'teaser') return;
    if (countdown <= 0) {
      router.push(`/consulter?ref=${source}-teaser`);
      return;
    }
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [view, mode, countdown, router, source]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !zodiac || !situation) return;

    fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, zodiac, situation, source }),
    }).catch(() => {
      const lead = { name, email, zodiac, situation, source, timestamp: new Date().toISOString() };
      const stored = JSON.parse(localStorage.getItem('voyantlove_leads') || '[]');
      stored.push(lead);
      localStorage.setItem('voyantlove_leads', JSON.stringify(stored));
    });

    window.dataLayer?.push({
      event: 'lead_form_submit',
      form_name: `tarot-gratuit-${source}`,
    });

    const result = getPrediction(situation, zodiac, name);
    setPrediction(result);
    setView('result');

    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  if (view === 'result' && prediction) {
    // TEASER mode: show card + opening only, blur the rest, countdown to /consulter
    if (mode === 'teaser') {
      return (
        <div ref={resultRef} className="max-w-lg mx-auto">
          <div className={`${accentBg} rounded-xl p-8 border-l-4 ${accentBorder} mb-6`}>
            <div className="text-center mb-5">
              <div className="text-6xl mb-3">{prediction.cardEmoji}</div>
              <h3 className={`text-2xl font-bold ${accentText}`}>{name}, votre carte : {prediction.card}</h3>
              <p className="text-sm text-gray-500 mt-1">Élément {prediction.element}</p>
            </div>
            <p className="text-lg font-medium text-gray-800 italic text-center mb-6">
              {prediction.opening}
            </p>

            {/* Blurred locked content */}
            <div className="relative rounded-lg overflow-hidden mb-6">
              <div className="blur-sm select-none pointer-events-none p-4 bg-white space-y-3">
                <p className="text-gray-700 text-sm leading-relaxed">{prediction.insight}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{prediction.advice}</p>
                <p className="text-gray-600 text-sm">{prediction.timeframe}</p>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/60">
                <span className="text-2xl mb-1">🔒</span>
                <p className="text-sm font-semibold text-gray-700 text-center px-4">
                  Un voyant peut vous révéler l&apos;interprétation complète
                </p>
              </div>
            </div>

            {/* Phone CTA — primary */}
            <div className="text-center mb-4">
              <a
                href="tel:0175754582"
                className="inline-block w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-bold text-xl transition-all hover:scale-105 hover:shadow-xl text-center"
              >
                📞 01 75 75 45 82
              </a>
              <p className="text-green-700 font-semibold mt-2 text-sm">10 minutes gratuites • Disponible maintenant</p>
            </div>

            {/* /consulter CTA with countdown */}
            <div className="text-center">
              <a
                href={`/consulter?ref=${source}-teaser`}
                onClick={() => window.dataLayer?.push({ event: 'cta_click', cta_label: `consulter-teaser-${source}` })}
                className={`inline-block ${btnClass} text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105`}
              >
                Choisir mon voyant en ligne →
              </a>
              <p className="text-xs text-gray-400 mt-2">
                Redirection automatique dans {countdown}s
              </p>
            </div>
          </div>
        </div>
      );
    }

    // FULL mode: complete prediction reveal
    return (
      <div ref={resultRef}>
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

            <div className="bg-white rounded-xl p-6 text-center border-2 border-green-400 shadow-md mt-2">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Allez plus loin — Parlez à un Voyant
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Obtenez des réponses précises et personnalisées sur votre situation
              </p>
              <a
                href="tel:0175754582"
                className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-bold text-xl transition-all hover:scale-105 hover:shadow-xl"
              >
                📞 01 75 75 45 82
              </a>
              <p className="text-green-700 font-semibold mt-3 text-sm">10 minutes gratuites — 1re consultation offerte</p>
              <p className="text-xs text-gray-500 mt-1">Voyants disponibles maintenant — Appel confidentiel</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Ou consultez en ligne
          </h3>
          <p className="text-gray-600 mb-4 max-w-xl mx-auto">
            Choisissez un voyant pour une consultation par chat ou email.
          </p>
          <a
            href={`/consulter?ref=${source}-post-prediction`}
            className={`inline-block ${btnClass} text-white px-8 py-3 rounded-lg font-bold transition-all hover:scale-105 hover:shadow-xl`}
          >
            Choisir Mon Voyant en Ligne
          </a>
        </div>
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
