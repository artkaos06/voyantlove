'use client';

// Email click-to-call bridge (/appel?num=3&src=email).
//
// The relance emails can't fire our beacon from a raw tel: link, so email-driven
// calls were invisible (no Discord ping, no funnel count). This tiny page is the
// bridge: the email's call button points here, and the tap logs the call intent
// (Discord + counter) then dials.
//
// Why a tap and not the page load: email clients (Gmail/Outlook/Apple Mail)
// auto-prefetch links, so counting on load would inflate numbers with bots. We
// count only on the button tap. On mobile the tap opens the dialer; on desktop
// (no dialer) the number stays visible to dial manually.

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { phoneForNum, formatPhone } from '@/lib/phoneNumbers';

function AppelInner() {
  const params = useSearchParams();
  const num = params.get('num') || '1';
  const src = (params.get('src') || 'email').slice(0, 40);
  const phone = phoneForNum(num);
  const [dialing, setDialing] = useState(false);

  function call() {
    setDialing(true);
    // Best-effort beacon → Discord ping + email-call counter. Never blocks dial.
    try {
      const payload = JSON.stringify({
        event: 'emailcall',
        tracking: { num, source: src, dialed: phone },
        ts: Date.now(),
      });
      if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/track/quiz', new Blob([payload], { type: 'application/json' }));
      } else {
        fetch('/api/track/quiz', { method: 'POST', body: payload, keepalive: true }).catch(() => {});
      }
    } catch {
      /* no-op */
    }
    window.location.href = `tel:${phone}`;
  }

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-5 py-10 text-center text-white"
      style={{ background: 'linear-gradient(160deg,#241657 0%,#3a1d6e 55%,#4a1f5e 100%)' }}
    >
      <div className="w-full max-w-md">
        <div className="text-5xl mb-4">🔮</div>
        <h1 className="text-2xl font-bold mb-3">Votre voyant vous attend</h1>
        <p className="text-white/75 mb-8 leading-relaxed">
          Appuyez pour lancer votre consultation privée, en toute confidentialité.
        </p>
        <button
          onClick={call}
          className="w-full py-4 rounded-xl font-bold text-lg text-white transition-transform active:scale-95 shadow-lg"
          style={{ background: 'linear-gradient(90deg,#ff6b9d,#ff8f6b)' }}
        >
          📞 Appeler maintenant
        </button>
        <p className="mt-3 text-lg font-bold" style={{ color: '#f4d98a' }}>
          {formatPhone(phone)}
        </p>
        {dialing && (
          <p className="mt-2 text-xs text-white/60">
            Si l’appel ne démarre pas, composez le numéro ci-dessus.
          </p>
        )}
        <p className="mt-6 text-[11px] text-white/45 leading-relaxed">
          Consultation privée par téléphone · Voyants experts · 7j/7 · Confidentiel · 18+
        </p>
      </div>
    </main>
  );
}

export default function AppelPage() {
  return (
    <Suspense fallback={null}>
      <AppelInner />
    </Suspense>
  );
}
