'use client';

import { useState, useCallback } from 'react';
import { ORACLE_DECK, type OracleCard } from '@/lib/oracleDeck';

export default function OracleDraw() {
  const [step, setStep] = useState<'intro' | 'shuffle' | 'result'>('intro');
  const [question, setQuestion] = useState('');
  const [card, setCard] = useState<OracleCard | null>(null);

  const draw = useCallback(() => {
    setStep('shuffle');
    setTimeout(() => {
      setCard(ORACLE_DECK[Math.floor(Math.random() * ORACLE_DECK.length)]);
      setStep('result');
    }, 1800);
  }, []);

  const reset = useCallback(() => {
    setStep('intro');
    setQuestion('');
    setCard(null);
  }, []);

  return (
    <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 rounded-2xl p-6 md:p-10 text-white shadow-2xl">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">🔮 Tirage Oracle de l&rsquo;Amour</h2>
        <p className="text-teal-200 text-sm">Une carte, un message pour éclairer votre situation sentimentale</p>
      </div>

      {step === 'intro' && (
        <div className="max-w-lg mx-auto space-y-5">
          <div>
            <label className="block text-sm font-semibold text-teal-200 mb-2">Votre question (optionnel) :</label>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ex : Que dois-je comprendre de cette relation ?"
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
              onKeyDown={(e) => e.key === 'Enter' && draw()}
            />
          </div>
          <button
            onClick={draw}
            className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white font-bold py-4 rounded-lg text-lg transition-all hover:scale-[1.02] hover:shadow-lg"
          >
            Tirer ma Carte ✨
          </button>
        </div>
      )}

      {step === 'shuffle' && (
        <div className="text-center py-10">
          <div className="text-6xl animate-spin mb-4" style={{ animationDuration: '1.5s' }}>🃏</div>
          <p className="text-xl font-semibold text-teal-200 animate-pulse">L&rsquo;oracle se prépare...</p>
          {question && <p className="text-sm text-teal-300 mt-2 italic">&quot;{question}&quot;</p>}
        </div>
      )}

      {step === 'result' && card && (
        <div className="max-w-lg mx-auto text-center space-y-6">
          {question && <p className="text-sm text-teal-300 italic">&quot;{question}&quot;</p>}
          <div>
            <span className="text-6xl block mb-3">{card.emoji}</span>
            <h3 className="text-2xl font-bold">{card.name}</h3>
          </div>
          <div className="bg-white/10 rounded-xl p-5 text-left border border-white/10">
            <p className="text-sm text-teal-100 mb-2 font-semibold uppercase tracking-wider">Message de l&rsquo;oracle :</p>
            <p className="text-white leading-relaxed">{card.message}</p>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <p className="font-semibold text-teal-100 mb-3">
              Pour une interprétation approfondie de votre situation, consultez un voyant spécialisé en amour :
            </p>
            <a
              href="tel:0175754582"
              data-analytics="oracle-draw-cta"
              className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-8 py-4 rounded-xl font-bold text-xl transition-all hover:scale-105 hover:shadow-xl mb-3"
            >
              📞 01 75 75 45 82
            </a>
            <p className="text-green-300 text-sm font-semibold">10 minutes gratuites • Disponible maintenant</p>
          </div>

          <button
            onClick={reset}
            className="text-teal-300 hover:text-white text-sm underline underline-offset-4 transition-colors"
          >
            Tirer une autre carte →
          </button>
        </div>
      )}
    </div>
  );
}
