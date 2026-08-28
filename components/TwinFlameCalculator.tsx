'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import {
  lifePathNumber,
  reduceToLifePathOrMaster,
  findLifePathMeaning,
  findCompatibility,
  composeCompatibilityReading,
} from '@/lib/numerology';

interface TwinFlameResult {
  pathA: number;
  pathB: number;
  combined: number;
  mirrorNumbers: boolean;
  has11Connection: boolean;
  hasMasterNumber: boolean;
}

function computeResult(dateA: string, dateB: string): TwinFlameResult {
  const pathA = lifePathNumber(dateA);
  const pathB = lifePathNumber(dateB);
  const combined = reduceToLifePathOrMaster(pathA + pathB);
  const mirrorNumbers = pathA === pathB;
  const has11Connection =
    pathA === 11 || pathB === 11 || combined === 11 ||
    reduceToLifePathOrMaster(pathA + pathB) === 11;
  const hasMasterNumber = [11, 22, 33].includes(pathA) || [11, 22, 33].includes(pathB);

  return { pathA, pathB, combined, mirrorNumbers, has11Connection, hasMasterNumber };
}

function intensityLabel(r: TwinFlameResult): { label: string; color: string; explanation: string } {
  if (r.has11Connection && r.mirrorNumbers) {
    return {
      label: 'Résonance très forte',
      color: 'text-purple-700',
      explanation: 'Vos chemins de vie sont identiques et votre combinaison résonne avec le nombre maître 11, traditionnel marqueur d’éveil dans le symbolisme des flammes jumelles.',
    };
  }
  if (r.has11Connection) {
    return {
      label: 'Connexion 11 détectée',
      color: 'text-purple-600',
      explanation: 'La somme de vos chemins de vie pointe vers le nombre maître 11, associé dans la tradition numérologique à l’intuition amplifiée et au lien de flamme jumelle.',
    };
  }
  if (r.mirrorNumbers) {
    return {
      label: 'Effet miroir',
      color: 'text-indigo-600',
      explanation: 'Vous partagez le même chemin de vie. Ce miroir numérique est souvent interprété comme le signe d’une compréhension profonde, mais aussi d’un risque d’amplifier les mêmes défis.',
    };
  }
  if (r.hasMasterNumber) {
    return {
      label: 'Présence d’un nombre maître',
      color: 'text-violet-600',
      explanation: 'L’un de vos chemins de vie porte un nombre maître (11, 22 ou 33), ce qui intensifie l’énergie du lien et demande une maturité relationnelle particulière.',
    };
  }
  return {
    label: 'Lecture ouverte',
    color: 'text-gray-700',
    explanation: 'Vos chemins de vie ne produisent pas de signal numérologique particulièrement lié au symbolisme de la flamme jumelle. Cela ne dit rien sur la réalité de votre lien : la numérologie éclaire des tendances, elle ne mesure pas les sentiments.',
  };
}

export default function TwinFlameCalculator() {
  const [dateA, setDateA] = useState('');
  const [dateB, setDateB] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<TwinFlameResult | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!dateA || !dateB) {
      setError('Merci de renseigner les deux dates de naissance.');
      setResult(null);
      return;
    }
    setError(null);
    setResult(computeResult(dateA, dateB));
  }

  const meaningA = result ? findLifePathMeaning(result.pathA) : null;
  const meaningB = result ? findLifePathMeaning(result.pathB) : null;
  const intensity = result ? intensityLabel(result) : null;
  const pairReading = result ? findCompatibility(result.pathA, result.pathB) : null;
  const composedReading = result ? composeCompatibilityReading(result.pathA, result.pathB) : null;

  return (
    <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 md:p-8 border-2 border-purple-300">
      <h3 className="font-bold text-xl text-purple-800 mb-2">Test flamme jumelle par date de naissance</h3>
      <p className="text-gray-700 text-sm mb-5">
        Entrez vos deux dates de naissance. Le calcul se fait dans votre navigateur&nbsp;: aucune donn&eacute;e n&rsquo;est envoy&eacute;e ni conserv&eacute;e.
      </p>

      <form onSubmit={onSubmit} className="space-y-3 mb-2">
        <div className="grid md:grid-cols-2 gap-3">
          <div>
            <label htmlFor="tf-date-a" className="block text-sm font-medium text-gray-700 mb-1">Votre date de naissance</label>
            <input
              id="tf-date-a"
              type="date"
              value={dateA}
              onChange={(e) => setDateA(e.target.value)}
              className="w-full px-3 py-2 border border-purple-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label htmlFor="tf-date-b" className="block text-sm font-medium text-gray-700 mb-1">Date de naissance de l&rsquo;autre personne</label>
            <input
              id="tf-date-b"
              type="date"
              value={dateB}
              onChange={(e) => setDateB(e.target.value)}
              className="w-full px-3 py-2 border border-purple-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 rounded-lg transition"
        >
          Lancer le test
        </button>
      </form>

      {error && (
        <p className="text-red-700 bg-red-50 border border-red-200 rounded-lg p-3 text-sm mt-2">{error}</p>
      )}

      {result && meaningA && meaningB && intensity && (
        <div className="mt-6 space-y-4">
          <div className="bg-white rounded-lg p-5 border-2 border-purple-200">
            <div className={`text-lg font-bold ${intensity.color} mb-1`}>{intensity.label}</div>
            <p className="text-gray-700 text-sm">{intensity.explanation}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-5 border border-purple-100">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Vous</div>
              <div className="text-3xl font-bold text-purple-700 mb-1">{result.pathA}</div>
              <div className="font-bold text-gray-800 mb-1">{meaningA.title}</div>
              <p className="text-gray-600 text-sm">{meaningA.desc}</p>
            </div>
            <div className="bg-white rounded-lg p-5 border border-purple-100">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">L&rsquo;autre personne</div>
              <div className="text-3xl font-bold text-purple-700 mb-1">{result.pathB}</div>
              <div className="font-bold text-gray-800 mb-1">{meaningB.title}</div>
              <p className="text-gray-600 text-sm">{meaningB.desc}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 border border-purple-100">
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Nombre combin&eacute;</div>
            <div className="text-2xl font-bold text-purple-700 mb-2">{result.pathA} + {result.pathB} = {result.combined}</div>
            {pairReading && (
              <p className="text-gray-700 text-sm mb-2">
                <strong>{pairReading.label}</strong>&nbsp;: {pairReading.desc}
              </p>
            )}
            {composedReading && !pairReading && (
              <p className="text-gray-700 text-sm mb-2">{composedReading.description}</p>
            )}
            {composedReading && (
              <p className="text-gray-600 text-sm italic">{composedReading.guidance}</p>
            )}
          </div>

          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
            <p className="text-sm text-gray-700">
              Ce test donne un &eacute;clairage num&eacute;rologique, pas un verdict. Aucun calcul ne peut confirmer ou infirmer un lien de flamme jumelle&nbsp;: cette connexion se vit avant de se mesurer.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Envie d&rsquo;aller plus loin&nbsp;?{' '}
              <Link href="/consulter/" className="text-purple-700 hover:text-purple-900 underline font-medium">
                Consultez un voyant sp&eacute;cialis&eacute;
              </Link>{' '}
              pour une lecture personnalis&eacute;e de votre lien.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
