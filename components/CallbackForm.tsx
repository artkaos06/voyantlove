'use client';

import { useEffect, useState, FormEvent } from 'react';

type SubmitState =
  | { kind: 'idle' }
  | { kind: 'submitting' }
  | { kind: 'success'; message: string }
  | { kind: 'error'; message: string };

// Maps Goracash callback_status to French UI copy.
function successMessage(status: string): string {
  switch (status) {
    case 'ok':
      return 'Demande enregistrée. Nous vous rappelons dans quelques instants.';
    case 'already_exist':
      return 'Votre demande est déjà enregistrée — nous vous rappelons sous peu.';
    case 'outside_the_schedule':
      return 'Demande enregistrée. Notre service rouvre à 9h — nous vous rappelons dès la réouverture.';
    case 'we_try_later':
      return 'Demande enregistrée. Nous essayons à nouveau dans quelques instants.';
    case 'refused_by_provider':
      return 'Nous n\'avons pas pu valider ce numéro. Merci d\'appeler directement le 01 75 75 45 82.';
    default:
      return 'Demande enregistrée.';
  }
}

interface CallbackFormProps {
  source?: string;
}

export default function CallbackForm({ source = 'lp-voyant-direct' }: CallbackFormProps) {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [firstname, setFirstname] = useState('');
  const [gender, setGender] = useState<'' | 'MADAME' | 'MONSIEUR'>('');
  const [state, setState] = useState<SubmitState>({ kind: 'idle' });
  const [gclid, setGclid] = useState<string | null>(null);

  // Capture gclid from URL on mount, persist to sessionStorage so it survives
  // route changes within the session.
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlGclid = params.get('gclid');
      if (urlGclid) {
        sessionStorage.setItem('gclid', urlGclid);
        setGclid(urlGclid);
      } else {
        const stored = sessionStorage.getItem('gclid');
        if (stored) setGclid(stored);
      }
    } catch {
      // sessionStorage unavailable (SSR / privacy mode) — fine, just skip
    }
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state.kind === 'submitting') return;

    setState({ kind: 'submitting' });
    try {
      const res = await fetch('/api/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone,
          firstname: firstname || undefined,
          gender: gender || undefined,
          gclid: gclid || undefined,
          source,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        if (data.error === 'invalid_phone') {
          setState({
            kind: 'error',
            message: 'Numéro invalide. Vérifiez votre saisie (numéros français non surtaxés uniquement).',
          });
        } else if (data.error === 'provider_error') {
          setState({
            kind: 'error',
            message: 'Le service est momentanément indisponible. Merci d\'appeler le 01 75 75 45 82.',
          });
        } else {
          setState({
            kind: 'error',
            message: 'Une erreur est survenue. Merci de réessayer.',
          });
        }
        return;
      }

      setState({
        kind: 'success',
        message: successMessage(data.callback_status || 'ok'),
      });
      setPhone('');
      setFirstname('');
      setGender('');
    } catch {
      setState({
        kind: 'error',
        message: 'Erreur réseau. Merci de réessayer.',
      });
    }
  }

  if (!open) {
    return (
      <div className="mt-4">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="text-purple-700 hover:text-purple-900 text-sm font-medium underline underline-offset-2"
        >
          Pas disponible maintenant ? Être rappelé(e) gratuitement →
        </button>
      </div>
    );
  }

  return (
    <div className="mt-4 max-w-md mx-auto bg-white border border-gray-200 rounded-xl p-5 shadow-sm text-left">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-gray-900">Être rappelé(e) gratuitement</h3>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="text-gray-400 hover:text-gray-600 text-xl leading-none"
          aria-label="Fermer"
        >
          ×
        </button>
      </div>

      {state.kind === 'success' ? (
        <p className="text-green-700 bg-green-50 border border-green-200 rounded-lg p-3 text-sm">
          ✓ {state.message}
        </p>
      ) : (
        <form onSubmit={onSubmit} className="space-y-3">
          <div className="flex gap-2">
            <label className="flex items-center gap-1 text-sm text-gray-700">
              <input
                type="radio"
                name="gender"
                value="MADAME"
                checked={gender === 'MADAME'}
                onChange={() => setGender('MADAME')}
              />
              Madame
            </label>
            <label className="flex items-center gap-1 text-sm text-gray-700">
              <input
                type="radio"
                name="gender"
                value="MONSIEUR"
                checked={gender === 'MONSIEUR'}
                onChange={() => setGender('MONSIEUR')}
              />
              Monsieur
            </label>
          </div>

          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="Prénom (optionnel)"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            maxLength={50}
          />

          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Votre numéro de téléphone"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
            autoComplete="tel"
            inputMode="tel"
          />

          <button
            type="submit"
            disabled={state.kind === 'submitting'}
            className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-300 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            {state.kind === 'submitting' ? 'Envoi…' : 'Me faire rappeler'}
          </button>

          {state.kind === 'error' && (
            <p className="text-red-700 bg-red-50 border border-red-200 rounded-lg p-2 text-xs">
              {state.message}
            </p>
          )}

          <p className="text-[11px] text-gray-500 leading-snug">
            Service 7j/7 de 9h à 21h — hors horaires, nous vous rappelons dès la
            réouverture. Numéros français non surtaxés uniquement.
          </p>
        </form>
      )}
    </div>
  );
}
