'use client';

import { useState } from 'react';
import { ZODIAC_SIGNS } from '@/lib/zodiac';
import { findHoroscope } from '@/lib/horoscope2026';

export default function HoroscopeSelector() {
  const [selected, setSelected] = useState<string | null>(null);
  const horoscope = selected ? findHoroscope(selected) : null;

  return (
    <div className="bg-gradient-to-br from-cyan-900 via-teal-900 to-emerald-900 rounded-2xl p-6 md:p-10 text-white shadow-2xl">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">✨ Quel Est Votre Signe ?</h2>
        <p className="text-teal-200 text-sm">Cliquez sur votre signe pour votre prédiction amoureuse 2026</p>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-6 gap-2 max-w-2xl mx-auto mb-6">
        {ZODIAC_SIGNS.map((z) => (
          <button
            key={z.name}
            onClick={() => setSelected(z.name)}
            className={`flex flex-col items-center gap-1 py-3 px-1 rounded-lg border transition-all ${
              selected === z.name
                ? 'bg-white text-teal-900 border-white scale-105 shadow-lg'
                : 'bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/40'
            }`}
          >
            <span className="text-2xl">{z.emoji}</span>
            <span className="text-xs font-semibold">{z.name}</span>
          </button>
        ))}
      </div>

      {horoscope && (
        <div className="max-w-lg mx-auto bg-white/10 rounded-xl p-6 border border-white/10">
          <div className="text-xs font-bold uppercase tracking-wider text-teal-300 mb-1">{selected} — 2026</div>
          <h3 className="text-xl font-bold mb-3">{horoscope.headline}</h3>
          <p className="text-teal-50 text-sm leading-relaxed mb-4">{horoscope.prediction}</p>
          <div className="text-xs text-teal-200 border-t border-white/10 pt-3">
            <p><strong>Période clé :</strong> {horoscope.periodKey}</p>
            <p><strong>Compatibilité renforcée avec :</strong> {horoscope.compatibleWith}</p>
          </div>
        </div>
      )}
    </div>
  );
}
