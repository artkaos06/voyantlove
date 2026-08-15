'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { lifePathNumber, findLifePathMeaning, composeCompatibilityReading } from '@/lib/numerology';

interface Result {
  lifePathA: number;
  lifePathB: number;
}

export default function NumerologyCompatibilityCalculator() {
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
    setError(null);
    setResult({
      lifePathA: lifePathNumber(dateA),
      lifePathB: lifePathNumber(dateB),
    });
  }

  const reading = result ? composeCompatibilityReading(result.lifePathA, result.lifePathB) : null;
  const meaningA = result ? findLifePathMeaning(result.lifePathA) : null;
  const meaningB = result ? findLifePathMeaning(result.lifePathB) : null;

  return (
    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 md:p-8 border-2 border-red-300">
      <h3 className="font-bold text-xl text-red-800 mb-2">💞 Calculez Votre Compatibilité par Date de Naissance</h3>
      <p className="text-gray-700 text-sm mb-5">
        Entrez les deux dates de naissance : le chemin de vie de chaque partenaire se calcule instantanément dans votre navigateur, aucune donnée n&rsquo;est envoyée ni conservée.
      </p>

      <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-3 mb-2">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Votre date de naissance</label>
          <input
            type="date"
            value={dateA}
            onChange={(e) => setDateA(e.target.value)}
            className="w-full px-3 py-2 border border-red-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Date de naissance du partenaire</label>
          <input
            type="date"
            value={dateB}
            onChange={(e) => setDateB(e.target.value)}
            className="w-full px-3 py-2 border border-red-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>
        <button
          type="submit"
          className="md:col-span-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition"
        >
          Calculer notre compatibilité
        </button>
      </form>

      {error && (
        <p className="text-red-700 bg-red-50 border border-red-200 rounded-lg p-3 text-sm mt-2">{error}</p>
      )}

      {result && meaningA && meaningB && (
        <div className="mt-6">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white rounded-lg p-5 border-2 border-red-200">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">🧭 Votre chemin de vie</div>
              <div className="text-3xl font-bold text-red-600 mb-1">{result.lifePathA}</div>
              <div className="font-bold text-gray-800 mb-1">{meaningA.title}</div>
            </div>
            <div className="bg-white rounded-lg p-5 border-2 border-orange-200">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">🧭 Chemin de vie du partenaire</div>
              <div className="text-3xl font-bold text-orange-600 mb-1">{result.lifePathB}</div>
              <div className="font-bold text-gray-800 mb-1">{meaningB.title}</div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-red-300">
            <div className="font-bold text-lg text-red-700 mb-2">{reading?.title}</div>
            <p className="text-gray-700 text-sm mb-3">{reading?.description}</p>
            <p className="text-gray-700 text-sm"><strong>Repère relationnel :</strong> {reading?.guidance}</p>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Envie d&rsquo;une lecture complète croisant vos trois nombres (chemin de vie, expression, nombre intime) avec ceux de votre partenaire ?{' '}
            <Link href="/consulter/" className="text-red-700 hover:text-red-900 underline font-medium">
              Consultez un voyant spécialisé
            </Link>.
          </p>
        </div>
      )}
    </div>
  );
}
