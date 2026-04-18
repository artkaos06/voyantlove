'use client';

import React, { useState, useCallback } from 'react';

type CardResult = 'oui' | 'non' | 'peut-etre';

interface TarotCard {
  name: string;
  emoji: string;
  result: CardResult;
  message: string;
}

const TAROT_CARDS: TarotCard[] = [
  // OUI cards
  { name: 'Le Soleil', emoji: '☀️', result: 'oui', message: 'Le Soleil illumine votre question d\'une lumière éclatante. La réponse est un oui radieux — bonheur, épanouissement et clarté dans votre vie amoureuse.' },
  { name: 'L\'Étoile', emoji: '⭐', result: 'oui', message: 'L\'Étoile brille en votre faveur. Espoir, sérénité et renouveau sentimental sont en chemin. La réponse est oui, avec douceur.' },
  { name: 'L\'Impératrice', emoji: '👑', result: 'oui', message: 'L\'Impératrice vous enveloppe de son énergie féminine et créatrice. Oui, l\'amour grandit — tendresse, fertilité émotionnelle et abondance sentimentale.' },
  { name: 'Le Monde', emoji: '🌍', result: 'oui', message: 'Le Monde annonce l\'accomplissement. Oui, un cycle amoureux se complète avec succès. Vous êtes aligné(e) avec votre destinée sentimentale.' },
  { name: 'L\'Amoureux', emoji: '💕', result: 'oui', message: 'L\'Amoureux confirme un oui passionné. Les sentiments sont réciproques, la connexion est authentique. L\'amour est présent.' },
  { name: 'As de Coupe', emoji: '🏆', result: 'oui', message: 'L\'As de Coupe déborde d\'émotion pure. Oui — un nouveau départ amoureux, un sentiment sincère et profond se manifeste.' },
  { name: 'Dix de Coupe', emoji: '🌈', result: 'oui', message: 'Le Dix de Coupe représente le bonheur familial et amoureux. Oui, l\'harmonie et la joie partagée sont votre avenir.' },
  { name: 'Quatre de Bâton', emoji: '🎉', result: 'oui', message: 'Le Quatre de Bâton célèbre l\'union et la stabilité. Oui — engagement, célébration et fondations solides pour votre amour.' },

  // NON cards
  { name: 'La Tour', emoji: '⚡', result: 'non', message: 'La Tour annonce un bouleversement. La réponse est non pour l\'instant — une structure doit s\'effondrer avant qu\'un renouveau soit possible.' },
  { name: 'Le Diable', emoji: '😈', result: 'non', message: 'Le Diable révèle une illusion ou une dépendance. Non — cette situation cache des chaînes invisibles. Prenez du recul avant d\'avancer.' },
  { name: 'Cinq d\'Épée', emoji: '⚔️', result: 'non', message: 'Le Cinq d\'Épée signale un conflit non résolu. Non — les tensions actuelles empêchent l\'évolution souhaitée. La guérison doit venir d\'abord.' },
  { name: 'Trois d\'Épée', emoji: '💔', result: 'non', message: 'Le Trois d\'Épée porte une blessure émotionnelle. Non, pas dans ces conditions — un travail de guérison intérieure est nécessaire avant tout.' },
  { name: 'Huit de Coupe', emoji: '🚶', result: 'non', message: 'Le Huit de Coupe invite au lâcher-prise. Non — il est temps de tourner la page et de chercher un chemin plus authentique pour votre cœur.' },
  { name: 'Dix d\'Épée', emoji: '🗡️', result: 'non', message: 'Le Dix d\'Épée marque une fin. Non — ce chapitre se clôt. Mais rappelez-vous : après chaque fin vient un nouveau commencement.' },

  // PEUT-ÊTRE cards
  { name: 'La Lune', emoji: '🌙', result: 'peut-etre', message: 'La Lune voile la réponse dans le mystère. Peut-être — des éléments cachés influencent la situation. Fiez-vous à votre intuition profonde.' },
  { name: 'La Roue de Fortune', emoji: '🎡', result: 'peut-etre', message: 'La Roue de Fortune tourne sans cesse. Peut-être — tout dépend du timing et de vos choix prochains. Le destin n\'est pas encore fixé.' },
  { name: 'Le Pendu', emoji: '🙃', result: 'peut-etre', message: 'Le Pendu invite à la patience. Peut-être — mais pas maintenant. Un changement de perspective est nécessaire avant d\'obtenir une réponse claire.' },
  { name: 'Tempérance', emoji: '⚖️', result: 'peut-etre', message: 'Tempérance demande l\'équilibre. Peut-être — si vous trouvez l\'harmonie intérieure, la réponse penchera en votre faveur. Patience et douceur.' },
  { name: 'La Justice', emoji: '⚖️', result: 'peut-etre', message: 'La Justice pèse votre situation. Peut-être — le résultat dépend de l\'honnêteté et de l\'équité dans votre relation. Soyez sincère avec vous-même.' },
  { name: 'Deux de Coupe', emoji: '🤝', result: 'peut-etre', message: 'Le Deux de Coupe montre un potentiel de connexion. Peut-être — les bases sont là, mais les deux parties doivent s\'engager pleinement.' },
];

const SAMPLE_QUESTIONS = [
  'M\'aime-t-il/elle vraiment ?',
  'Mon ex va-t-il revenir ?',
  'Vais-je rencontrer quelqu\'un bientôt ?',
  'Notre couple va-t-il durer ?',
  'Est-il/elle fidèle ?',
  'Vais-je me marier cette année ?',
];

export default function TarotOuiNon() {
  const [step, setStep] = useState<'question' | 'shuffle' | 'pick' | 'result'>('question');
  const [question, setQuestion] = useState('');
  const [drawnCard, setDrawnCard] = useState<TarotCard | null>(null);
  const [shuffledCards, setShuffledCards] = useState<number[]>([]);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const startShuffle = useCallback(() => {
    if (!question.trim()) return;

    // Generate 6 random card indices
    const indices: number[] = [];
    while (indices.length < 6) {
      const idx = Math.floor(Math.random() * TAROT_CARDS.length);
      if (!indices.includes(idx)) indices.push(idx);
    }
    setShuffledCards(indices);
    setStep('shuffle');

    // Auto-advance to pick after 2s
    setTimeout(() => setStep('pick'), 2000);
  }, [question]);

  const pickCard = useCallback((displayIndex: number) => {
    if (step !== 'pick' || flippedIndex !== null) return;
    setFlippedIndex(displayIndex);
    const card = TAROT_CARDS[shuffledCards[displayIndex]];
    setDrawnCard(card);

    setTimeout(() => setStep('result'), 1200);
  }, [step, flippedIndex, shuffledCards]);

  const reset = useCallback(() => {
    setStep('question');
    setQuestion('');
    setDrawnCard(null);
    setShuffledCards([]);
    setFlippedIndex(null);
  }, []);

  const resultColor = drawnCard?.result === 'oui'
    ? 'from-green-500 to-emerald-600'
    : drawnCard?.result === 'non'
      ? 'from-red-500 to-rose-600'
      : 'from-amber-500 to-orange-500';

  const resultLabel = drawnCard?.result === 'oui'
    ? 'OUI ✓'
    : drawnCard?.result === 'non'
      ? 'NON ✗'
      : 'PEUT-ÊTRE ◎';

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 rounded-2xl p-6 md:p-10 text-white shadow-2xl">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">🔮 Tirage Tarot Oui Non Amour</h2>
        <p className="text-purple-200 text-sm">Posez votre question et tirez une carte pour obtenir votre réponse</p>
      </div>

      {/* Step 1: Question */}
      {step === 'question' && (
        <div className="max-w-lg mx-auto space-y-5">
          <div>
            <label className="block text-sm font-semibold text-purple-200 mb-2">Votre question (oui/non) :</label>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ex : M'aime-t-il vraiment ?"
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              onKeyDown={(e) => e.key === 'Enter' && startShuffle()}
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {SAMPLE_QUESTIONS.map((q, i) => (
              <button
                key={i}
                onClick={() => { setQuestion(q); }}
                className="text-xs bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-1.5 rounded-full transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          <button
            onClick={startShuffle}
            disabled={!question.trim()}
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg text-lg transition-all hover:scale-[1.02] hover:shadow-lg"
          >
            Mélanger les Cartes ✨
          </button>
        </div>
      )}

      {/* Step 2: Shuffle animation */}
      {step === 'shuffle' && (
        <div className="text-center py-10">
          <div className="text-6xl animate-spin mb-4" style={{ animationDuration: '1.5s' }}>🃏</div>
          <p className="text-xl font-semibold text-purple-200 animate-pulse">Les cartes se mélangent...</p>
          <p className="text-sm text-purple-300 mt-2 italic">&quot;{question}&quot;</p>
        </div>
      )}

      {/* Step 3: Pick a card */}
      {step === 'pick' && (
        <div className="text-center">
          <p className="text-lg font-semibold text-purple-200 mb-2">Choisissez une carte</p>
          <p className="text-sm text-purple-300 mb-6 italic">&quot;{question}&quot;</p>
          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
            {shuffledCards.map((_, i) => (
              <button
                key={i}
                onClick={() => pickCard(i)}
                className={`aspect-[2/3] rounded-xl border-2 transition-all duration-500 ${
                  flippedIndex === i
                    ? 'bg-gradient-to-br from-yellow-400 to-amber-500 border-yellow-300 scale-110 shadow-xl'
                    : flippedIndex !== null
                      ? 'bg-indigo-800/50 border-white/10 opacity-40 cursor-not-allowed'
                      : 'bg-gradient-to-br from-indigo-700 to-purple-800 border-white/20 hover:border-white/50 hover:scale-105 hover:shadow-lg cursor-pointer'
                }`}
              >
                {flippedIndex === i && drawnCard ? (
                  <div className="flex flex-col items-center justify-center h-full p-2">
                    <span className="text-3xl md:text-4xl mb-1">{drawnCard.emoji}</span>
                    <span className="text-xs font-bold text-indigo-900 leading-tight">{drawnCard.name}</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-3xl md:text-4xl">🂠</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: Result */}
      {step === 'result' && drawnCard && (
        <div className="max-w-lg mx-auto text-center space-y-6">
          <div>
            <span className="text-6xl block mb-3">{drawnCard.emoji}</span>
            <h3 className="text-2xl font-bold mb-1">{drawnCard.name}</h3>
            <div className={`inline-block bg-gradient-to-r ${resultColor} px-6 py-2 rounded-full font-black text-xl tracking-wider mt-2`}>
              {resultLabel}
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-5 text-left border border-white/10">
            <p className="text-sm text-purple-100 mb-2 font-semibold uppercase tracking-wider">Votre question :</p>
            <p className="text-white italic mb-4">&quot;{question}&quot;</p>
            <p className="text-sm text-purple-100 mb-2 font-semibold uppercase tracking-wider">Interprétation :</p>
            <p className="text-white leading-relaxed">{drawnCard.message}</p>
          </div>

          {/* CTA */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <p className="font-semibold text-purple-100 mb-3">
              Pour une interprétation approfondie de votre situation, consultez un voyant spécialisé en amour :
            </p>
            <a
              href="tel:0175754582"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dataLayer?.push({ event: 'phone_click', cta_label: 'tarot-oui-non-result' });
                }
              }}
              className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-8 py-4 rounded-xl font-bold text-xl transition-all hover:scale-105 hover:shadow-xl mb-3"
            >
              📞 01 75 75 45 82
            </a>
            <p className="text-green-300 text-sm font-semibold">10 minutes gratuites • Disponible maintenant</p>
          </div>

          <button
            onClick={reset}
            className="text-purple-300 hover:text-white text-sm underline underline-offset-4 transition-colors"
          >
            Poser une autre question →
          </button>
        </div>
      )}
    </div>
  );
}
