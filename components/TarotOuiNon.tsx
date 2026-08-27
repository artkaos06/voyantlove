'use client';

// Interactive one-card oui/non draw — the tool that /voyance-gratuite-amour/
// tarot-oui-non-amour/ ranks for. The queries behind that page ("tirage oui non
// gratuit", "tarots amour oui non") are tool intent, not article intent: every
// SERP leader answers with a widget, so this component sits directly under the
// H1 rather than below the prose.
//
// The oui / non / nuancé classification is not arbitrary — it is the same
// classification the page states in its "Cartes Oui vs Cartes Non" section
// (10 oui, 5 non, 7 conditionnelles). Changing a verdict here without changing
// it there makes the tool contradict its own explanation. tests/
// phaseBBoundedBatch.test.ts pins the count at 22.

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';

type CardResult = 'oui' | 'non' | 'peut-etre';

interface TarotCard {
  name: string;
  /** Roman numeral of the arcanum — the card's identity now that emoji are gone. */
  numeral: string;
  /** Slug of the matching /tarot-amour/[carte]/ page, when one exists. */
  slug?: string;
  result: CardResult;
  message: string;
}

const TAROT_CARDS: TarotCard[] = [
  // The complete 22 major arcana, each with one stable interpretation.
  { name: 'Le Mat', numeral: '0', slug: 'le-mat', result: 'peut-etre', message: 'Le Mat ouvre un chemin imprévisible. La réponse reste nuancée : avancez avec curiosité, sans tenir l’issue pour acquise.' },
  { name: 'Le Bateleur', numeral: 'I', slug: 'le-bateleur', result: 'oui', message: 'Le Bateleur favorise l’initiative et le commencement. Oui, à condition de faire un premier pas concret.' },
  { name: 'La Papesse', numeral: 'II', slug: 'la-papesse', result: 'peut-etre', message: 'La Papesse garde encore une information sous silence. La réponse est nuancée : observez et laissez la vérité se révéler.' },
  { name: 'L\'Impératrice', numeral: 'III', slug: 'l-imperatrice', result: 'oui', message: 'L’Impératrice favorise l’expression des sentiments. Oui : une dynamique chaleureuse et créative peut grandir.' },
  { name: 'L\'Empereur', numeral: 'IV', slug: 'l-empereur', result: 'oui', message: 'L’Empereur apporte structure et stabilité. Oui, si la relation s’appuie sur des actes constants et un engagement clair.' },
  { name: 'Le Pape', numeral: 'V', slug: 'le-pape', result: 'peut-etre', message: 'Le Pape invite à clarifier les valeurs et l’engagement. La réponse dépend d’un accord sincère entre les deux personnes.' },
  { name: 'L\'Amoureux', numeral: 'VI', slug: 'l-amoureux', result: 'oui', message: 'L’Amoureux confirme un oui, tout en rappelant qu’un choix sincère doit être assumé.' },
  { name: 'Le Chariot', numeral: 'VII', slug: 'le-chariot', result: 'oui', message: 'Le Chariot annonce une avancée. Oui : prenez une direction claire et évitez les signaux contradictoires.' },
  { name: 'La Justice', numeral: 'VIII', slug: 'la-justice', result: 'peut-etre', message: 'La Justice pèse votre situation. La réponse dépend de l’honnêteté, de l’équilibre et des choix de chacun.' },
  { name: 'L\'Ermite', numeral: 'IX', slug: 'l-ermite', result: 'non', message: 'L’Ermite indique retrait et lenteur. Non pour le moment : accordez du temps à la réflexion avant de relancer la situation.' },
  { name: 'La Roue de Fortune', numeral: 'X', slug: 'la-roue-de-fortune', result: 'peut-etre', message: 'La Roue de Fortune annonce un changement. La réponse reste nuancée car le timing et vos prochains choix peuvent encore la faire évoluer.' },
  { name: 'La Force', numeral: 'XI', slug: 'la-force', result: 'oui', message: 'La Force soutient une progression patiente et maîtrisée. Oui, si vous privilégiez la confiance plutôt que le rapport de force.' },
  { name: 'Le Pendu', numeral: 'XII', slug: 'le-pendu', result: 'non', message: 'Le Pendu signale un blocage. Non pour le moment : changez de perspective et ne forcez pas le rythme.' },
  { name: 'L\'Arcane sans nom', numeral: 'XIII', slug: 'la-mort', result: 'non', message: 'L’Arcane sans nom clôt une forme ancienne de la situation. Non dans les conditions actuelles : une transformation est nécessaire.' },
  { name: 'Tempérance', numeral: 'XIV', slug: 'la-temperance', result: 'oui', message: 'Tempérance favorise l’apaisement et le dialogue. Oui, avec patience, mesure et ajustements réciproques.' },
  { name: 'Le Diable', numeral: 'XV', slug: 'le-diable', result: 'non', message: 'Le Diable révèle une illusion ou une dépendance. Non dans les conditions actuelles : prenez du recul avant d’avancer.' },
  { name: 'La Maison Dieu', numeral: 'XVI', slug: 'la-tour', result: 'non', message: 'La Maison Dieu annonce un bouleversement. Non pour l’instant : les bases doivent être revues avant de reconstruire.' },
  { name: 'L\'Étoile', numeral: 'XVII', slug: 'l-etoile', result: 'oui', message: 'L’Étoile brille en votre faveur. Oui, avec douceur : espoir, sérénité et renouveau sentimental sont encouragés.' },
  { name: 'La Lune', numeral: 'XVIII', slug: 'la-lune', result: 'peut-etre', message: 'La Lune voile la réponse. La réponse est nuancée : des éléments cachés influencent encore la situation.' },
  { name: 'Le Soleil', numeral: 'XIX', slug: 'le-soleil', result: 'oui', message: 'Le Soleil éclaire votre question. Oui : la dynamique favorise la clarté, le partage et l’épanouissement.' },
  { name: 'Le Jugement', numeral: 'XX', slug: 'le-jugement', result: 'peut-etre', message: 'Le Jugement ouvre une possibilité de réveil ou de retour. La réponse dépend d’une prise de conscience suivie d’une action concrète.' },
  { name: 'Le Monde', numeral: 'XXI', slug: 'le-monde', result: 'oui', message: 'Le Monde annonce l’accomplissement. Oui : un cycle peut aboutir de manière cohérente et constructive.' },
];

const SAMPLE_QUESTIONS = [
  'M\'aime-t-il/elle vraiment ?',
  'Mon ex va-t-il revenir ?',
  'Vais-je rencontrer quelqu\'un bientôt ?',
  'Notre couple va-t-il durer ?',
  'Est-il/elle fidèle ?',
];

/** How many face-down cards the spread offers. */
const SPREAD_SIZE = 6;

const SHUFFLE_MS = 900;
const FLIP_MS = 450;

const VERDICT: Record<CardResult, { label: string; panel: string; badge: string }> = {
  oui: {
    label: 'Oui',
    panel: 'border-green-200 bg-green-50',
    badge: 'text-green-700',
  },
  non: {
    label: 'Non',
    panel: 'border-red-200 bg-red-50',
    badge: 'text-red-700',
  },
  'peut-etre': {
    label: 'Peut-être',
    panel: 'border-amber-200 bg-amber-50',
    badge: 'text-amber-700',
  },
};

/** Fisher-Yates over the deck indices, then keep the first `size`. */
function dealSpread(size: number): number[] {
  const indices = TAROT_CARDS.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices.slice(0, size);
}

export default function TarotOuiNon() {
  const [step, setStep] = useState<'question' | 'shuffle' | 'pick' | 'result'>('question');
  const [question, setQuestion] = useState('');
  const [spread, setSpread] = useState<number[]>([]);
  const [pickedSlot, setPickedSlot] = useState<number | null>(null);

  // One timer at a time, cleared on unmount so a draw left mid-animation never
  // sets state on an unmounted component.
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const schedule = useCallback((fn: () => void, ms: number) => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(fn, ms);
  }, []);
  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const drawnCard = pickedSlot !== null && spread[pickedSlot] !== undefined
    ? TAROT_CARDS[spread[pickedSlot]]
    : null;

  const shuffle = useCallback(() => {
    if (!question.trim()) return;
    setSpread(dealSpread(SPREAD_SIZE));
    setPickedSlot(null);
    setStep('shuffle');
    schedule(() => setStep('pick'), SHUFFLE_MS);
  }, [question, schedule]);

  const pickCard = useCallback((slot: number) => {
    if (step !== 'pick' || pickedSlot !== null) return;
    setPickedSlot(slot);
    schedule(() => setStep('result'), FLIP_MS);
  }, [step, pickedSlot, schedule]);

  /** Same question, fresh cards. */
  const drawAgain = useCallback(() => {
    setSpread(dealSpread(SPREAD_SIZE));
    setPickedSlot(null);
    setStep('shuffle');
    schedule(() => setStep('pick'), SHUFFLE_MS);
  }, [schedule]);

  const reset = useCallback(() => {
    setStep('question');
    setQuestion('');
    setSpread([]);
    setPickedSlot(null);
  }, []);

  const verdict = drawnCard ? VERDICT[drawnCard.result] : null;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
      <div className="mb-6">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          Tirage oui ou non gratuit
        </h2>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-gray-600">
          Posez une question fermée, tirez une carte parmi les 22 arcanes majeurs et lisez sa réponse.
        </p>
      </div>

      {/* Étape 1 — la question */}
      {step === 'question' && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            shuffle();
          }}
          className="space-y-4"
        >
          <div>
            <label htmlFor="tarot-question" className="mb-2 block text-sm font-semibold text-gray-800">
              Votre question
            </label>
            <input
              id="tarot-question"
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ex : m’aime-t-il vraiment ?"
              maxLength={140}
              autoComplete="off"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {SAMPLE_QUESTIONS.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => setQuestion(q)}
                className="rounded-full border border-gray-300 px-3 py-1.5 text-xs text-gray-700 transition hover:border-purple-400 hover:text-purple-700"
              >
                {q}
              </button>
            ))}
          </div>

          <button
            type="submit"
            disabled={!question.trim()}
            className="w-full rounded-lg bg-purple-700 px-5 py-3.5 text-base font-semibold text-white transition hover:bg-purple-800 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            Mélanger les cartes
          </button>
          <p className="text-center text-xs text-gray-500">
            Gratuit, sans inscription. Une carte, une réponse.
          </p>
        </form>
      )}

      {/* Étapes 2 et 3 — le mélange puis le choix, sur la même grille pour que
          rien ne bouge entre les deux. */}
      {(step === 'shuffle' || step === 'pick') && (
        <div>
          <p className="text-sm font-semibold text-gray-800">
            {step === 'shuffle' ? 'Les cartes se mélangent…' : 'Choisissez une carte'}
          </p>
          <p className="mt-1 truncate text-sm italic text-gray-500">« {question} »</p>

          <div className="mx-auto mt-5 grid max-w-md grid-cols-3 gap-3">
            {spread.map((deckIndex, slot) => {
              const isPicked = pickedSlot === slot;
              const isDimmed = pickedSlot !== null && !isPicked;
              return (
                <button
                  key={slot}
                  type="button"
                  onClick={() => pickCard(slot)}
                  disabled={step !== 'pick' || pickedSlot !== null}
                  aria-label={`Carte face cachée numéro ${slot + 1}`}
                  style={step === 'shuffle' ? { animationDelay: `${slot * 90}ms` } : undefined}
                  className={[
                    'flex aspect-[2/3] items-center justify-center rounded-lg border transition duration-300',
                    step === 'shuffle' ? 'animate-pulse border-gray-200 bg-gray-100 text-gray-300' : '',
                    step === 'pick' && !isPicked && !isDimmed
                      ? 'cursor-pointer border-purple-200 bg-purple-50 text-purple-400 hover:-translate-y-1 hover:border-purple-500 hover:text-purple-700'
                      : '',
                    isPicked ? 'scale-105 border-purple-600 bg-purple-700 text-white shadow-md' : '',
                    isDimmed ? 'border-gray-200 bg-gray-50 text-gray-300 opacity-50' : '',
                  ].join(' ')}
                >
                  {isPicked && drawnCard ? (
                    <span className="px-1 text-center">
                      <span className="block text-lg font-bold leading-none">{drawnCard.numeral}</span>
                      <span className="mt-1 block text-[0.65rem] font-semibold leading-tight">{drawnCard.name}</span>
                    </span>
                  ) : (
                    <Icon name="star" size={22} />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Étape 4 — la réponse */}
      {step === 'result' && drawnCard && verdict && (
        <div aria-live="polite">
          <p className="truncate text-sm italic text-gray-500">« {question} »</p>

          <div className={`mt-3 rounded-xl border p-6 text-center ${verdict.panel}`}>
            <p className={`text-4xl font-bold tracking-tight sm:text-5xl ${verdict.badge}`}>
              {verdict.label}
            </p>
            <p className="mt-2 text-sm font-semibold text-gray-700">
              {drawnCard.name} (arcane {drawnCard.numeral})
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-gray-200 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Interprétation</p>
            <p className="mt-2 leading-relaxed text-gray-800">{drawnCard.message}</p>
            {drawnCard.slug && (
              <Link
                href={`/tarot-amour/${drawnCard.slug}/`}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-purple-700 hover:text-purple-900 hover:underline"
              >
                Signification complète de {drawnCard.name} en amour
                <Icon name="arrow" size={14} />
              </Link>
            )}
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={drawAgain}
              className="rounded-lg bg-purple-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-800"
            >
              Retirer une carte
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
            <p className="font-semibold text-gray-900">Une réponse en oui/non ne dit pas tout</p>
            <p className="mt-1 text-sm leading-relaxed text-gray-600">
              Le tirage indique une tendance. Pour comprendre le « pourquoi » et le « quand » de votre
              situation, un voyant spécialisé en amour reprend cette carte dans votre contexte.
            </p>
            <a
              href="tel:0175754582"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-purple-700 px-5 py-3 text-base font-semibold text-white transition hover:bg-purple-800"
            >
              <Icon name="phone" size={18} />
              01 75 75 45 82
            </a>
            <p className="mt-2 text-xs text-gray-500">10 minutes offertes pour une première consultation</p>
          </div>

          <div className="mt-4">
            <VoyantQuickCTA topic="voyance-gratuite" source="tarot-oui-non-tirage-result" />
          </div>
        </div>
      )}
    </div>
  );
}
