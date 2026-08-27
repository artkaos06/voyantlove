'use client';

// Multi-card tarot spread, reused by the tirage pages under
// /voyance-gratuite-amour/ (tarot-amour-gratuit, tarot-du-jour-amour,
// tarot-futur-proche-amour, tirage-gratuit-celibataire).
//
// The site-wide de-emoji pass blanked SpreadCard.emoji but left the markup that
// consumed it, so the widget rendered an empty spinning block during the
// shuffle and an empty 3xl span in front of every card name. Card identity is
// now the position number plus the card name, and the site's Icon component
// stands in for the face-down backs — the same pattern as
// components/TarotOuiNon.tsx.

import { useCallback, useEffect, useRef, useState } from 'react';
import Icon from '@/components/Icon';
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

const SHUFFLE_MS = 1400;

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

  // One timer at a time, cleared on unmount so a draw left mid-animation never
  // sets state on an unmounted component.
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const startDraw = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    setStep('shuffle');
    timer.current = setTimeout(() => {
      const cards = drawUnique(positions.length);
      setDrawn(positions.map((label, i) => ({ label, card: cards[i] })));
      setStep('result');
    }, SHUFFLE_MS);
  }, [positions]);

  const reset = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    setStep('intro');
    setQuestion('');
    setDrawn([]);
  }, []);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
      <div className="mb-6">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">{title}</h2>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-gray-600">{subtitle}</p>
      </div>

      {/* Étape 1 — la question */}
      {step === 'intro' && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            startDraw();
          }}
          className="space-y-4"
        >
          <div>
            <label htmlFor="spread-question" className="mb-2 block text-sm font-semibold text-gray-800">
              Votre question ou intention (facultatif)
            </label>
            <input
              id="spread-question"
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ex : où en est ma vie amoureuse en ce moment ?"
              maxLength={140}
              autoComplete="off"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-purple-700 px-5 py-3.5 text-base font-semibold text-white transition hover:bg-purple-800"
          >
            Tirer les cartes
          </button>
          <p className="text-center text-xs text-gray-500">
            Gratuit, sans inscription.{' '}
            {positions.length > 1
              ? `${positions.length} cartes, une lecture d’ensemble.`
              : 'Une carte, une lecture.'}
          </p>
        </form>
      )}

      {/* Étape 2 — le mélange */}
      {step === 'shuffle' && (
        <div>
          <p className="text-sm font-semibold text-gray-800">Les cartes se mélangent…</p>
          {question && <p className="mt-1 truncate text-sm italic text-gray-500">« {question} »</p>}

          <div
            className="mx-auto mt-5 grid gap-3"
            style={{
              gridTemplateColumns: `repeat(${Math.min(positions.length, 3)}, minmax(0, 1fr))`,
              maxWidth: `${Math.min(positions.length, 3) * 7}rem`,
            }}
          >
            {positions.map((label, slot) => (
              <div
                key={label}
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

      {/* Étape 3 — le tirage */}
      {step === 'result' && drawn.length > 0 && (
        <div aria-live="polite">
          {question && <p className="truncate text-sm italic text-gray-500">« {question} »</p>}

          <div
            className={`mt-3 grid gap-4 ${
              drawn.length === 1 ? '' : drawn.length >= 4 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'
            }`}
          >
            {drawn.map(({ label, card }, i) => (
              <div key={label} className="rounded-xl border border-gray-200 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-purple-700">
                  {i + 1}. {label}
                </p>
                <p className="mt-1 text-lg font-bold tracking-tight text-gray-900">{card.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{card.meaning}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={startDraw}
              className="rounded-lg bg-purple-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-800"
            >
              Refaire un tirage
            </button>
            <button
              type="button"
              onClick={reset}
              className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-purple-400 hover:text-purple-700"
            >
              Poser une autre question
            </button>
          </div>

          <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
            <p className="font-semibold text-gray-900">Un tirage indique une tendance</p>
            <p className="mt-1 text-sm leading-relaxed text-gray-600">
              Pour une interprétation approfondie de ces cartes dans votre situation, un voyant
              spécialisé en amour reprend votre tirage avec vous.
            </p>
            <a
              href="tel:0175754582"
              data-analytics={`tarot-spread-cta-${ctaSource}`}
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
