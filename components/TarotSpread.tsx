'use client';

import { useState, useCallback } from 'react';
import { TAROT_SPREAD_DECK, type SpreadCard } from '@/lib/tarotDeck';

interface DrawnPosition {
  label: string;
  card: SpreadCard;
}

interface TarotSpreadProps {
  title: string;
  subtitle: string;
  positions: string[];
  ctaSource: string;
}

function drawUnique(count: number): SpreadCard[] {
  const pool = [...TAROT_SPREAD_DECK];
  const drawn: SpreadCard[] = [];
  for (let i = 0; i < count && pool.length > 0; i++) {
    const idx = Math.floor(Math.random() * pool.length);
    drawn.push(pool[idx]);
    pool.splice(idx, 1);
  }
  return drawn;
}

export default function TarotSpread({ title, subtitle, positions, ctaSource }: TarotSpreadProps) {
  const [step, setStep] = useState<'intro' | 'shuffle' | 'result'>('intro');
  const [question, setQuestion] = useState('');
  const [drawn, setDrawn] = useState<DrawnPosition[]>([]);

  const startDraw = useCallback(() => {
    setStep('shuffle');
    setTimeout(() => {
      const cards = drawUnique(positions.length);
      setDrawn(positions.map((label, i) => ({ label, card: cards[i] })));
      setStep('result');
    }, 1800);
  }, [positions]);

  const reset = useCallback(() => {
    setStep('intro');
    setQuestion('');
    setDrawn([]);
  }, []);

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 rounded-2xl p-6 md:p-10 text-white shadow-2xl">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
        <p className="text-purple-200 text-sm">{subtitle}</p>
      </div>

      {step === 'intro' && (
        <div className="max-w-lg mx-auto space-y-5">
          <div>
            <label className="block text-sm font-semibold text-purple-200 mb-2">Votre question ou intention (optionnel) :</label>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ex : Où en est ma vie amoureuse en ce moment ?"
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              onKeyDown={(e) => e.key === 'Enter' && startDraw()}
            />
          </div>
          <button
            onClick={startDraw}
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white font-bold py-4 rounded-lg text-lg transition-all hover:scale-[1.02] hover:shadow-lg"
          >
            Tirer les Cartes ✨
          </button>
        </div>
      )}

      {step === 'shuffle' && (
        <div className="text-center py-10">
          <div className="text-6xl animate-spin mb-4" style={{ animationDuration: '1.5s' }}>🃏</div>
          <p className="text-xl font-semibold text-purple-200 animate-pulse">Les cartes se mélangent...</p>
          {question && <p className="text-sm text-purple-300 mt-2 italic">&quot;{question}&quot;</p>}
        </div>
      )}

      {step === 'result' && (
        <div className="space-y-6">
          {question && (
            <p className="text-center text-sm text-purple-300 italic">&quot;{question}&quot;</p>
          )}
          <div className={`grid gap-4 ${drawn.length >= 4 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
            {drawn.map(({ label, card }, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-5 border border-white/10">
                <div className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-2">{label}</div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{card.emoji}</span>
                  <span className="font-bold text-lg">{card.name}</span>
                </div>
                <p className="text-purple-100 text-sm leading-relaxed">{card.meaning}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
            <p className="font-semibold text-purple-100 mb-3">
              Pour une interprétation approfondie de votre tirage, consultez un voyant spécialisé en amour :
            </p>
            <a
              href="tel:0175754582"
              data-analytics={`tarot-spread-cta-${ctaSource}`}
              className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-8 py-4 rounded-xl font-bold text-xl transition-all hover:scale-105 hover:shadow-xl mb-3"
            >
              📞 01 75 75 45 82
            </a>
            <p className="text-green-300 text-sm font-semibold">10 minutes gratuites • Disponible maintenant</p>
          </div>

          <div className="text-center">
            <button
              onClick={reset}
              className="text-purple-300 hover:text-white text-sm underline underline-offset-4 transition-colors"
            >
              Refaire un tirage →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
