'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import {
  lifePathNumber,
  expressionNumber,
  intimateNumber,
  findMeaning,
  LIFE_PATH_MEANINGS,
  EXPRESSION_MEANINGS,
  INTIMATE_MEANINGS,
  MASTER_MEANINGS,
} from '@/lib/numerology';

interface Result {
  lifePath: number;
  expression: number;
  intimate: number;
}

function ResultCard({
  label,
  icon,
  num,
  title,
  desc,
  accent,
}: {
  label: string;
  icon: string;
  num: number;
  title: string;
  desc: string;
  accent: string;
}) {
  return (
    <div className={`bg-white rounded-lg p-5 border-2 ${accent}`}>
      <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">{icon} {label}</div>
      <div className="text-3xl font-bold text-orange-600 mb-1">{num}</div>
      <div className="font-bold text-gray-800 mb-1">{title}</div>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

export default function NumerologyCalculator() {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fullName = `${prenom} ${nom}`.trim();

    if (!fullName) {
      setError('Merci de renseigner votre prénom et nom.');
      setResult(null);
      return;
    }
    if (!dateNaissance) {
      setError('Merci de renseigner votre date de naissance.');
      setResult(null);
      return;
    }

    setError(null);
    setResult({
      lifePath: lifePathNumber(dateNaissance),
      expression: expressionNumber(fullName),
      intimate: intimateNumber(fullName),
    });
  }

  const lifePathMeaning = result
    ? findMeaning(LIFE_PATH_MEANINGS, result.lifePath) || findMeaning(MASTER_MEANINGS, result.lifePath)
    : null;
  const expressionMeaning = result
    ? findMeaning(EXPRESSION_MEANINGS, result.expression) || findMeaning(MASTER_MEANINGS, result.expression)
    : null;
  const intimateMeaning = result
    ? findMeaning(INTIMATE_MEANINGS, result.intimate) || findMeaning(MASTER_MEANINGS, result.intimate)
    : null;

  return (
    <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 md:p-8 border-2 border-orange-300">
      <h3 className="font-bold text-xl text-orange-800 mb-2">🔢 Calculez Vos 3 Nombres Maintenant</h3>
      <p className="text-gray-700 text-sm mb-5">
        Entrez votre prénom, nom et date de naissance : le calcul se fait instantanément dans votre navigateur, aucune donnée n&rsquo;est envoyée ni conservée.
      </p>

      <form onSubmit={onSubmit} className="grid md:grid-cols-3 gap-3 mb-2">
        <input
          type="text"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          placeholder="Prénom"
          maxLength={60}
          className="px-3 py-2 border border-orange-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          placeholder="Nom"
          maxLength={60}
          className="px-3 py-2 border border-orange-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="date"
          value={dateNaissance}
          onChange={(e) => setDateNaissance(e.target.value)}
          className="px-3 py-2 border border-orange-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          type="submit"
          className="md:col-span-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition"
        >
          Calculer mes nombres
        </button>
      </form>

      {error && (
        <p className="text-red-700 bg-red-50 border border-red-200 rounded-lg p-3 text-sm mt-2">{error}</p>
      )}

      {result && lifePathMeaning && expressionMeaning && intimateMeaning && (
        <div className="mt-6">
          <div className="grid md:grid-cols-3 gap-4">
            <ResultCard
              label="Chemin de Vie"
              icon="🧭"
              num={result.lifePath}
              title={lifePathMeaning.title}
              desc={lifePathMeaning.desc}
              accent="border-orange-200"
            />
            <ResultCard
              label="Nombre d'Expression"
              icon="🗣️"
              num={result.expression}
              title={expressionMeaning.title}
              desc={expressionMeaning.desc}
              accent="border-orange-200"
            />
            <ResultCard
              label="Nombre Intime"
              icon="💛"
              num={result.intimate}
              title={intimateMeaning.title}
              desc={intimateMeaning.desc}
              accent="border-amber-200"
            />
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Envie d&rsquo;une lecture approfondie de ces trois nombres croisés avec ceux de votre partenaire ?{' '}
            <Link href="/consulter" className="text-orange-700 hover:text-orange-900 underline font-medium">
              Consultez un voyant spécialisé
            </Link>.
          </p>
        </div>
      )}
    </div>
  );
}
