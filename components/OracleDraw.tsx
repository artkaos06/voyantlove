'use client';

// Single-card oracle draw, the tool on /voyance-gratuite-amour/oracle-gratuit-amour/.
//
// The site-wide de-emoji pass blanked OracleCard.emoji but left the markup that
// consumed it, so the widget rendered an empty spinning block during the
// shuffle and an empty 6xl span where the card face belonged. Card identity is
// now the deck number plus the card name, and the site's Icon component stands
// in for the face-down back — the same pattern as components/TarotOuiNon.tsx.

import { useCallback, useEffect, useRef, useState } from 'react';
import Icon from '@/components/Icon';
import { ORACLE_DECK } from '@/lib/oracleDeck';

const SHUFFLE_MS = 1400;

/** Face-down cards shown while the deck shuffles. */
const SHUFFLE_PLACEHOLDERS = 3;

export default function OracleDraw() {
  const [step, setStep] = useState<'intro' | 'shuffle' | 'result'>('intro');
  const [question, setQuestion] = useState('');
  const [drawnIndex, setDrawnIndex] = useState<number | null>(null);

  // One timer at a time, cleared on unmount so a draw left mid-animation never
  // sets state on an unmounted component.
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const draw = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    setStep('shuffle');
    timer.current = setTimeout(() => {
      setDrawnIndex(Math.floor(Math.random() * ORACLE_DECK.length));
      setStep('result');
    }, SHUFFLE_MS);
  }, []);

  const reset = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    setStep('intro');
    setQuestion('');
    setDrawnIndex(null);
  }, []);

  const card = drawnIndex !== null ? ORACLE_DECK[drawnIndex] : null;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
      <div className="mb-6">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          Tirage oracle de l&rsquo;amour
        </h2>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-gray-600">
          Une carte, un message pour éclairer votre situation sentimentale.
        </p>
      </div>

      {/* Étape 1 — la question */}
      {step === 'intro' && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            draw();
          }}
          className="space-y-4"
        >
          <div>
            <label htmlFor="oracle-question" className="mb-2 block text-sm font-semibold text-gray-800">
              Votre question (facultatif)
            </label>
            <input
              id="oracle-question"
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ex : que dois-je comprendre de cette relation ?"
              maxLength={140}
              autoComplete="off"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-purple-700 px-5 py-3.5 text-base font-semibold text-white transition hover:bg-purple-800"
          >
            Tirer ma carte
          </button>
          <p className="text-center text-xs text-gray-500">
            Gratuit, sans inscription. Une carte, un message.
          </p>
        </form>
      )}

      {/* Étape 2 — le mélange */}
      {step === 'shuffle' && (
        <div>
          <p className="text-sm font-semibold text-gray-800">L&rsquo;oracle se prépare…</p>
          {question && <p className="mt-1 truncate text-sm italic text-gray-500">« {question} »</p>}

          <div className="mx-auto mt-5 grid max-w-xs grid-cols-3 gap-3">
            {Array.from({ length: SHUFFLE_PLACEHOLDERS }, (_, slot) => (
              <div
                key={slot}
                aria-hidden="true"
                style={{ animationDelay: `${slot * 120}ms` }}
                className="flex aspect-[2/3] animate-pulse items-center justify-center rounded-lg border border-gray-200 bg-gray-100 text-gray-300"
              >
                <Icon name="star" size={22} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Étape 3 — la carte */}
      {step === 'result' && card && (
        <div aria-live="polite">
          {question && <p className="truncate text-sm italic text-gray-500">« {question} »</p>}

          <div className="mt-3 flex flex-col items-center gap-4 rounded-xl border border-gray-200 p-6 sm:flex-row sm:items-center">
            <div className="flex aspect-[2/3] w-24 flex-col items-center justify-center rounded-lg border border-purple-600 bg-purple-700 px-2 text-center text-white">
              <span className="text-lg font-bold leading-none">{(drawnIndex ?? 0) + 1}</span>
              <span className="mt-1 block text-[0.65rem] font-semibold leading-tight">{card.name}</span>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Carte {(drawnIndex ?? 0) + 1} sur {ORACLE_DECK.length}
              </p>
              <h3 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">{card.name}</h3>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-gray-200 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Message de l&rsquo;oracle</p>
            <p className="mt-2 leading-relaxed text-gray-800">{card.message}</p>
          </div>

          <div className="mt-4">
            <button
              type="button"
              onClick={reset}
              className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-purple-400 hover:text-purple-700"
            >
              Tirer une autre carte
            </button>
          </div>

          <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
            <p className="font-semibold text-gray-900">Une carte ne dit pas tout</p>
            <p className="mt-1 text-sm leading-relaxed text-gray-600">
              Pour une interprétation approfondie de votre situation, un voyant spécialisé en amour
              reprend cette carte dans votre contexte.
            </p>
            <a
              href="tel:0175754582"
              data-analytics="oracle-draw-cta"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-purple-700 px-5 py-3 text-base font-semibold text-white transition hover:bg-purple-800"
            >
              <Icon name="phone" size={18} />
              01 75 75 45 82
            </a>
            <p className="mt-2 text-xs text-gray-500">10 minutes offertes pour une première consultation</p>
          </div>
        </div>
      )}
    </div>
  );
}
