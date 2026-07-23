'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { zodiacSign, elementCompatibility, type ZodiacSign, type CompatibilityRead } from '@/lib/zodiac';

interface Result {
  signA: ZodiacSign;
  signB: ZodiacSign;
  read: CompatibilityRead;
}

const ASPECT_COLOR: Record<CompatibilityRead['aspect'], string> = {
  Trigone: 'text-green-700 bg-green-50 border-green-300',
  Sextile: 'text-emerald-700 bg-emerald-50 border-emerald-300',
  Carré: 'text-orange-700 bg-orange-50 border-orange-300',
  Opposition: 'text-red-700 bg-red-50 border-red-300',
};

export default function SynastryCalculator() {
  const [dateA, setDateA] = useState('');
  const [dateB, setDateB] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!dateA || !dateB) {
      setError('Merci de renseigner les deux dates de naissance.');
      setResult(null);
      return;
    }
    const signA = zodiacSign(dateA);
    const signB = zodiacSign(dateB);
    if (!signA || !signB) {
      setError('Date invalide.');
      setResult(null);
      return;
    }
    setError(null);
    setResult({ signA, signB, read: elementCompatibility(signA.element, signB.element) });
  }

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 md:p-8 border-2 border-indigo-300">
      <h3 className="font-bold text-xl text-indigo-800 mb-2">⭐ Testez Votre Compatibilité de Signes</h3>
      <p className="text-gray-700 text-sm mb-5">
        Entrez les deux dates de naissance : lecture instantanée par élément (Feu, Terre, Air, Eau), dans votre navigateur, sans donnée conservée. Pour une vraie synastrie planète par planète, il faut l&rsquo;heure et le lieu de naissance — c&rsquo;est le travail d&rsquo;une <Link href="/consulter" className="underline font-medium">consultation</Link>.
      </p>

      <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-3 mb-2">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Votre date de naissance</label>
          <input
            type="date"
            value={dateA}
            onChange={(e) => setDateA(e.target.value)}
            className="w-full px-3 py-2 border border-indigo-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Date de naissance du partenaire</label>
          <input
            type="date"
            value={dateB}
            onChange={(e) => setDateB(e.target.value)}
            className="w-full px-3 py-2 border border-indigo-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <button
          type="submit"
          className="md:col-span-2 bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 rounded-lg transition"
        >
          Voir notre compatibilité
        </button>
      </form>

      {error && (
        <p className="text-red-700 bg-red-50 border border-red-200 rounded-lg p-3 text-sm mt-2">{error}</p>
      )}

      {result && (
        <div className="mt-6 bg-white rounded-lg p-6 border-2 border-indigo-200">
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <div className="text-center">
              <div className="text-3xl">{result.signA.emoji}</div>
              <div className="font-bold text-gray-800">{result.signA.name}</div>
              <div className="text-xs text-gray-500">{result.signA.element}</div>
            </div>
            <div className="text-2xl text-gray-300">+</div>
            <div className="text-center">
              <div className="text-3xl">{result.signB.emoji}</div>
              <div className="font-bold text-gray-800">{result.signB.name}</div>
              <div className="text-xs text-gray-500">{result.signB.element}</div>
            </div>
            <div className={`ml-auto text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full border ${ASPECT_COLOR[result.read.aspect]}`}>
              {result.read.aspect}
            </div>
          </div>
          <div className="font-bold text-lg text-indigo-800 mb-2">{result.read.headline}</div>
          <p className="text-gray-700 text-sm">{result.read.desc}</p>
        </div>
      )}
    </div>
  );
}
