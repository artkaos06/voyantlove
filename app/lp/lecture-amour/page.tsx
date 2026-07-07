'use client';

// Astro-love quiz funnel — the pre-lander that was missing from every paid
// test. Cold native traffic direct-linked to a form converts ~0.7%. A
// multi-step quiz that collects birth data + situation step-by-step builds
// commitment (consistency principle) so the visitor is invested by the time
// they hit the offer — the classic profitable native astro pattern.
//
// Flow: native ad → THIS quiz → offer handoff (Télémaque phone by default,
// swappable). Native tracking params (source, click_id, widget, teaser) are
// captured on mount and forwarded to the handoff so attribution survives.
//
// Compliance: no health/death, no guaranteed outcomes, 18+.

import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';

// --- Offer handoff: Télémaque dedicated numbers --------------------------
// Three dedicated numbers = three attribution buckets. Assign one per
// campaign / angle / creative via the ?num= param (e.g. …&num=2). Télémaque
// reports reversement per number, so you learn which bucket drives paying
// calls despite phone conversion being otherwise attribution-blind. Default 1.
const PHONE_NUMBERS: Record<string, string> = {
  '1': '0423090950',
  '2': '0484200203',
  '3': '0175111171',
};
const DEFAULT_NUM = '1';
const CTA_LABEL = 'Parler à un voyant en privé';
// Télémaque product = private phone consultation with expert voyants. No price
// claims on the lander: tariff mentions carry legal obligations Télémaque
// handles on its own pages, and it advises affiliates against tariff claims.
const REASSURANCE = 'Consultation privée par téléphone · Voyants experts · 7j/7 · Confidentiel · 18+';

// 0423090950 → 04 23 09 09 50
function formatPhone(n: string): string {
  return n.replace(/(\d{2})(?=\d)/g, '$1 ').trim();
}

interface Question {
  id: string;
  title: string;
  options: string[];
  grid?: boolean;
}

const QUESTIONS: Question[] = [
  {
    id: 'situation',
    title: 'Où en êtes-vous aujourd’hui ?',
    options: ['En couple', 'Célibataire', 'C’est compliqué', 'Après une rupture'],
  },
  {
    id: 'question',
    title: 'Quelle question vous préoccupe le plus ?',
    options: [
      'Ses sentiments pour moi',
      'Notre avenir à deux',
      'Vais-je rencontrer l’amour ?',
      'Reviendra-t-il / elle ?',
    ],
  },
  {
    id: 'signe',
    title: 'Quel est votre signe astrologique ?',
    grid: true,
    options: [
      'Bélier', 'Taureau', 'Gémeaux', 'Cancer', 'Lion', 'Vierge',
      'Balance', 'Scorpion', 'Sagittaire', 'Capricorne', 'Verseau', 'Poissons',
    ],
  },
  {
    id: 'duree',
    title: 'Depuis combien de temps y pensez-vous ?',
    options: [
      'Quelques jours',
      'Plusieurs semaines',
      'Des mois',
      'Je n’arrive pas à tourner la page',
    ],
  },
  {
    id: 'ouverture',
    title: 'Êtes-vous prête à entendre la vérité, même si elle surprend ?',
    options: [
      'Oui, j’ai besoin de clarté',
      'Oui, mais en douceur',
      'Je suis prête à tout entendre',
    ],
  },
];

const TRACK_KEYS = ['source', 'click_id', 'widget', 'wname', 'v', 'gclid', 'num'] as const;

export default function LectureAmourQuiz() {
  // step 0 = intro, 1..N = questions, N+1 = email capture, N+2 = loading,
  // N+3 = result. Email is gated between the last question and the payoff:
  // the visitor wants their reading, so capture is high; the phone CTA that
  // follows still catches immediate callers, and the Brevo list nurtures the
  // rest to a consultation over the following weeks.
  const N = QUESTIONS.length;
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [phoneNumber, setPhoneNumber] = useState(PHONE_NUMBERS[DEFAULT_NUM]);
  const tracking = useRef<Record<string, string>>({});

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const captured: Record<string, string> = {};
      TRACK_KEYS.forEach((k) => {
        const v = params.get(k);
        if (v) captured[k] = v;
      });
      tracking.current = captured;
      const num =
        captured.num && PHONE_NUMBERS[captured.num] ? captured.num : DEFAULT_NUM;
      setPhoneNumber(PHONE_NUMBERS[num]);
      beacon('start', captured, {});
    } catch {
      /* no-op */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-advance from the loading screen to the result.
  useEffect(() => {
    if (step !== N + 2) return;
    const t = setTimeout(() => setStep(N + 3), 2600);
    return () => clearTimeout(t);
  }, [step, N]);

  function answer(qid: string, value: string) {
    setAnswers((a) => ({ ...a, [qid]: value }));
    setStep((s) => s + 1);
  }

  // Email capture → Brevo list (fire-and-forget so the UI advances instantly),
  // then on to the loading/result payoff.
  function onEmailSubmit(prenom: string, email: string, consent: boolean) {
    try {
      fetch('/api/lead/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        keepalive: true,
        body: JSON.stringify({
          prenom,
          email,
          consent,
          answers,
          tracking: tracking.current,
        }),
      }).catch(() => {});
    } catch {
      /* no-op */
    }
    setStep((s) => s + 1);
  }

  function onCta() {
    beacon('cta', { ...tracking.current, dialed: phoneNumber }, answers);
    window.location.href = `tel:${phoneNumber}`;
  }

  // Progress spans the N questions + the email step (N+1 input steps).
  const progress =
    step === 0 ? 0 : step <= N + 1 ? Math.round((step / (N + 1)) * 100) : 100;

  const teaser = useMemo(() => buildTeaser(answers), [answers]);

  return (
    <main
      className="min-h-screen flex flex-col text-white"
      style={{ background: 'linear-gradient(160deg,#241657 0%,#3a1d6e 55%,#4a1f5e 100%)' }}
    >
      {/* Progress bar */}
      {step > 0 && step <= N + 1 && (
        <div className="w-full h-1.5 bg-white/10">
          <div
            className="h-full transition-all duration-300"
            style={{ width: `${progress}%`, background: 'linear-gradient(90deg,#f4d98a,#ff9ec0)' }}
          />
        </div>
      )}

      <div className="flex-1 flex items-center justify-center px-5 py-8">
        <div className="w-full max-w-md">
          {step === 0 && <Intro onStart={() => setStep(1)} />}

          {step > 0 && step <= N && (
            <QuestionCard
              q={QUESTIONS[step - 1]}
              index={step}
              total={N}
              onAnswer={(v) => answer(QUESTIONS[step - 1].id, v)}
            />
          )}

          {step === N + 1 && <EmailCapture onSubmit={onEmailSubmit} />}

          {step === N + 2 && <Loading />}

          {step === N + 3 && (
            <Result teaser={teaser} phoneNumber={phoneNumber} onCta={onCta} />
          )}
        </div>
      </div>

      <footer className="px-5 pb-6 pt-2 text-center text-[11px] text-white/45 leading-relaxed">
        Service de voyance réservé aux personnes majeures (18+). Divertissement et
        guidance personnelle — ne remplace aucun avis médical, juridique ou financier.
      </footer>
    </main>
  );
}

function Intro({ onStart }: { onStart: () => void }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 text-xs font-medium mb-6">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        Voyants disponibles maintenant
      </div>
      <h1 className="text-3xl font-bold leading-tight mb-3">
        Que révèlent les astres sur votre vie amoureuse ?
      </h1>
      <p className="text-white/75 mb-8 leading-relaxed">
        Répondez à 5 questions et recevez une lecture personnalisée de votre
        situation sentimentale. Gratuit, rapide et confidentiel.
      </p>
      <button
        onClick={onStart}
        className="w-full py-4 rounded-xl font-bold text-lg text-[#3a1d6e] transition-transform active:scale-95"
        style={{ background: 'linear-gradient(90deg,#f4d98a,#ffcf8a)' }}
      >
        Commencer ma lecture →
      </button>
      <p className="mt-4 text-xs text-white/50">
        ⭐ 4,8/5 · plus de 2 400 consultations · 7j/7
      </p>
    </div>
  );
}

function QuestionCard({
  q,
  index,
  total,
  onAnswer,
}: {
  q: Question;
  index: number;
  total: number;
  onAnswer: (v: string) => void;
}) {
  return (
    <div>
      <p className="text-xs font-medium text-[#f4d98a] mb-3">
        Question {index} / {total}
      </p>
      <h2 className="text-2xl font-bold leading-snug mb-6">{q.title}</h2>
      <div className={q.grid ? 'grid grid-cols-2 gap-2.5' : 'space-y-2.5'}>
        {q.options.map((opt) => (
          <button
            key={opt}
            onClick={() => onAnswer(opt)}
            className="w-full text-left px-4 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 hover:border-[#f4d98a]/60 font-medium transition-all active:scale-[0.98]"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function EmailCapture({
  onSubmit,
}: {
  onSubmit: (prenom: string, email: string, consent: boolean) => void;
}) {
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [err, setErr] = useState('');

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!prenom.trim()) return setErr('Entrez votre prénom.');
    if (!EMAIL_RE.test(email.trim())) return setErr('Entrez un email valide.');
    if (!consent) return setErr('Merci de cocher la case pour recevoir votre lecture.');
    onSubmit(prenom.trim(), email.trim(), consent);
  }

  const field =
    'w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#f4d98a]';

  return (
    <div>
      <div className="text-center mb-6">
        <div className="text-4xl mb-2">✨</div>
        <h2 className="text-2xl font-bold mb-2">Votre lecture est presque prête</h2>
        <p className="text-white/75 leading-relaxed">
          Indiquez votre prénom et votre email pour recevoir votre lecture
          personnalisée.
        </p>
      </div>
      <form onSubmit={submit} className="space-y-3">
        <input
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          placeholder="Votre prénom"
          autoComplete="given-name"
          className={field}
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          inputMode="email"
          placeholder="Votre email"
          autoComplete="email"
          className={field}
        />
        <label className="flex items-start gap-2 text-xs text-white/70 leading-snug py-1">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 accent-[#f4d98a]"
          />
          <span>
            J’accepte de recevoir ma lecture et des conseils de voyance par email.
            Désinscription possible à tout moment.
          </span>
        </label>
        {err && <p className="text-sm text-[#ff9ec0]">{err}</p>}
        <button
          type="submit"
          className="w-full py-4 rounded-xl font-bold text-lg text-[#3a1d6e] transition-transform active:scale-95"
          style={{ background: 'linear-gradient(90deg,#f4d98a,#ffcf8a)' }}
        >
          Recevoir ma lecture →
        </button>
      </form>
      <p className="mt-3 text-center text-[11px] text-white/45">
        🔒 Vos informations restent confidentielles.
      </p>
    </div>
  );
}

function Loading() {
  return (
    <div className="text-center py-10">
      <div
        className="mx-auto mb-6 w-14 h-14 rounded-full border-4 border-white/20 animate-spin"
        style={{ borderTopColor: '#f4d98a' }}
      />
      <h2 className="text-xl font-bold mb-2">Analyse de votre profil astral…</h2>
      <p className="text-white/70 text-sm">
        Croisement de votre signe et de votre situation sentimentale.
      </p>
    </div>
  );
}

function Result({
  teaser,
  phoneNumber,
  onCta,
}: {
  teaser: string;
  phoneNumber: string;
  onCta: () => void;
}) {
  return (
    <div className="text-center">
      <div className="text-4xl mb-3">🔮</div>
      <h2 className="text-2xl font-bold mb-4">Votre lecture est prête</h2>
      <p className="text-white/80 leading-relaxed mb-7">{teaser}</p>
      <button
        onClick={onCta}
        className="w-full py-4 rounded-xl font-bold text-lg text-white transition-transform active:scale-95 shadow-lg"
        style={{ background: 'linear-gradient(90deg,#ff6b9d,#ff8f6b)' }}
      >
        📞 {CTA_LABEL}
      </button>
      <p className="mt-2 text-lg font-bold" style={{ color: '#f4d98a' }}>
        {formatPhone(phoneNumber)}
      </p>
      <p className="mt-2 text-xs text-white/55 leading-snug">{REASSURANCE}</p>
    </div>
  );
}

// Personalized-feeling but vague + compliant result copy from the answers.
function buildTeaser(a: Record<string, string>): string {
  const signe = a.signe ? `Votre profil ${a.signe}` : 'Votre profil astral';
  const sit = a.situation ? a.situation.toLowerCase() : 'votre situation actuelle';
  const q = a.question ? a.question.toLowerCase().replace(/\s*\?$/, '') : 'votre vie amoureuse';
  return (
    `${signe}, dans une période « ${sit} », entre en forte résonance avec votre ` +
    `question sur ${q}. Nos voyants perçoivent souvent un tournant important pour ` +
    `les profils comme le vôtre — mais chaque situation est unique. Une consultation ` +
    `privée avec un voyant peut vous apporter des réponses claires, maintenant.`
  );
}

// Best-effort funnel beacon — never blocks the UI.
function beacon(
  event: 'start' | 'cta',
  tracking: Record<string, string>,
  answers: Record<string, string>
) {
  try {
    const payload = JSON.stringify({ event, tracking, answers, ts: Date.now() });
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/track/quiz', new Blob([payload], { type: 'application/json' }));
    } else {
      fetch('/api/track/quiz', { method: 'POST', body: payload, keepalive: true }).catch(() => {});
    }
  } catch {
    /* no-op */
  }
}
