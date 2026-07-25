import type { Metadata, Viewport } from 'next';
import { recordLanderLoad } from '@/lib/lpTrack';
import { availabilityNow } from '@/lib/availability';
import { OFFER } from '@/lib/offer';
import { PHONE_NUMBERS, formatPhone } from '@/lib/phoneNumbers';
import VoyantStrip from '@/components/VoyantStrip';

// Zero-JS lander: no 'use client', no client components, no per-page
// <Script>. MGID's top FR sources are Xiaomi in-app newsfeed browsers,
// which have historically choked on Next.js hydration — plain
// server-rendered HTML + CSS renders and is tappable even if JS never
// runs. OFFER: Télémaque (switched from Goracash 2026-07-25). Each angle gets
// its OWN dedicated Télémaque number so Télémaque's per-number reversement
// reporting attributes revenue back to the angle — the only way to learn
// which angle earns, since a phone call carries no click ID. This lander =
// bucket 1. Never point two landers at the same bucket or that breaks.
// Pricing terms live in lib/offer.ts.
//
// No custom tracking beacon here on purpose: /api/track/quiz writes to the
// SAME cpl:quiz:<date> KV bucket the quiz funnel dashboard reads, with no
// per-page field — wiring this page into it would silently merge its
// numbers into the quiz's. The root layout already auto-tracks every
// tel: tap sitewide (phone-click-tracker → /api/track/tel-click, Discord +
// digest), so calls from here are still observable without that risk.
//
// CSS classes are prefixed `vd-` and `footer` is a class, not a bare tag
// selector — this <style> block is injected into the live document while
// mounted (not scoped), and Tailwind ships its own global `.container`
// utility that would otherwise collide.
//
// Cookie-consent bar renders at z-index 2147483647 (vanilla-cookieconsent's
// max, confirmed in node_modules/vanilla-cookieconsent/dist/cookieconsent.css)
// — nothing can out-stack it. That's what buried the quiz lander's CTA for
// 4 days (commit 38adde3). The in-content CTA below is placed high enough
// to clear it on load; the sticky bottom bar is a bonus for after scroll,
// not the only path to the phone number.

export const metadata: Metadata = {
  title: 'Consultation Voyance Privée — Disponible Maintenant',
  description: 'Parlez à un voyant expert maintenant. 15€ les 10 premières minutes, consultation privée et confidentielle, 7j/7.',
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// Télémaque attribution bucket 1 (angle 1 "Immediate Help").
const PHONE = PHONE_NUMBERS['1'];
const PHONE_DISPLAY = formatPhone(PHONE);

const STYLE = `
.vd-body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
     background:linear-gradient(160deg,#241657 0%,#3a1d6e 55%,#4a1f5e 100%);
     color:#fff;min-height:100vh;min-height:100dvh;padding:20px;line-height:1.5}
.vd-container{max-width:420px;margin:0 auto}
.vd-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,0.12);
       border-radius:20px;padding:6px 14px;font-size:12px;margin-bottom:16px}
.vd-pulse{width:8px;height:8px;background:#4ade80;border-radius:50%;animation:vd-pulse 2s infinite}
@keyframes vd-pulse{0%,100%{opacity:1}50%{opacity:.4}}
@media (prefers-reduced-motion: reduce){.vd-pulse{animation:none}}
.vd-h1{font-size:26px;font-weight:800;margin-bottom:12px;line-height:1.2}
.vd-sub{font-size:16px;color:rgba(255,255,255,0.8);margin-bottom:24px}
.vd-cta-btn{display:block;touch-action:manipulation;width:100%;padding:20px;border-radius:16px;border:none;
         background:linear-gradient(90deg,#ff6b9d,#ff8f6b);color:#fff;font-size:20px;
         font-weight:800;text-align:center;text-decoration:none;margin-bottom:12px;
         box-shadow:0 8px 32px rgba(255,107,157,0.4);cursor:pointer;min-height:60px}
.vd-phone{font-size:28px;font-weight:800;letter-spacing:1px;margin-bottom:4px}
.vd-phone-sub{font-size:13px;opacity:.9}
.vd-urgency{background:rgba(255,255,255,0.08);border-radius:12px;padding:16px;margin:20px 0;
         border:1px solid rgba(255,255,255,0.1)}
.vd-urgency-row{display:flex;align-items:center;gap:10px;margin:8px 0;font-size:14px}
.vd-social-proof{background:rgba(244,217,138,0.12);border-left:3px solid #f4d98a;
              padding:14px 16px;border-radius:0 12px 12px 0;margin:20px 0;font-size:14px}
.vd-pricing{background:rgba(74,222,128,0.1);border:1px solid rgba(74,222,128,0.35);
         border-radius:12px;padding:16px;margin:0 0 20px;text-align:center}
.vd-pricing-free{font-size:17px;font-weight:800;color:#4ade80;margin-bottom:4px}
.vd-pricing-then{font-size:14px;color:rgba(255,255,255,0.85)}
.vd-pricing-then strong{color:#f4d98a;font-size:16px}
.vd-features{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:20px 0}
.vd-feature{background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;font-size:12px;
         text-align:center}
.vd-footer{text-align:center;font-size:11px;color:rgba(255,255,255,0.45);margin-top:30px;
       padding-bottom:80px}
.vd-sticky-cta{position:fixed;bottom:0;left:0;right:0;background:rgba(36,22,87,0.95);
            backdrop-filter:blur(10px);padding:12px 20px;border-top:1px solid rgba(255,255,255,0.1);
            display:flex;align-items:center;justify-content:space-between;z-index:100}
.vd-sticky-cta a{flex:1;text-align:center;padding:14px;border-radius:12px;min-height:60px;
              display:flex;align-items:center;justify-content:center;
              background:linear-gradient(90deg,#ff6b9d,#ff8f6b);color:#fff;font-weight:700;
              text-decoration:none;font-size:16px}
.vd-sticky-info{font-size:11px;color:rgba(255,255,255,0.7);margin-right:12px}
`;

export default async function LPVoyantDirect({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  // Server-side load counting — accurate even when JS never runs, which is
  // the case on a chunk of MGID's Xiaomi/Huawei in-app browser traffic.
  // Reading searchParams opts this page into dynamic rendering.
  await recordLanderLoad('voyant-direct', await searchParams);

  // Copy adapts to the real request time — see lib/availability.ts.
  const av = availabilityNow();

  return (
    <div className="vd-body">
      <style dangerouslySetInnerHTML={{ __html: STYLE }} />

      <div className="vd-container">
        <div className="vd-badge"><span className="vd-pulse" /> {av.badge}</div>

        <h1 className="vd-h1">Votre voyant disponible maintenant — appel privé</h1>
        <p className="vd-sub">Consultation téléphonique confidentielle. Réponses claires sur l&apos;amour, le couple, l&apos;avenir.</p>

        <a href={`tel:${PHONE}`} className="vd-cta-btn">
          <div className="vd-phone">📞 {PHONE_DISPLAY}</div>
          <div className="vd-phone-sub">{av.ctaSub}</div>
        </a>

        <div className="vd-pricing">
          <div className="vd-pricing-free">💳 {OFFER.intro}</div>
          <div className="vd-pricing-then"><strong>{OFFER.introPerMin}</strong></div>
          <div className="vd-pricing-then">{OFFER.after} · {OFFER.payment}</div>
        </div>

        <VoyantStrip label="Voyants partenaires en ligne" />

        <div className="vd-social-proof">
          <strong>&laquo;&nbsp;J&apos;hésitais à appeler, mais en 10 minutes tout s&apos;est éclairci.&nbsp;&raquo;</strong><br />
          — Claire, 34 ans, Lyon
        </div>

        <div className="vd-urgency">
          <div className="vd-urgency-row">{av.scarcity}</div>
          <div className="vd-urgency-row">{av.callsToday}</div>
          <div className="vd-urgency-row">⭐ 4,7/5 satisfaction clients</div>
        </div>

        <div className="vd-features">
          <div className="vd-feature">✓ 100% confidentiel</div>
          <div className="vd-feature">✓ Voyants certifiés</div>
          <div className="vd-feature">✓ 7j/7 — 8h à 2h</div>
          <div className="vd-feature">✓ +18 ans uniquement</div>
        </div>

        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', margin: '16px 0' }}>
          Nos voyants utilisent la cartomancie, l&apos;astrologie et leur intuition pour vous guider.
          Ce service est un divertissement et ne remplace aucun avis médical ou juridique.
        </p>

        <footer className="vd-footer">
          Service réservé aux personnes majeures (18+).<br />
          Consultation privée par téléphone. Tarification selon la durée de l&apos;appel.
        </footer>
      </div>

      <div className="vd-sticky-cta">
        <div className="vd-sticky-info" style={{ whiteSpace: 'pre-line' }}>{av.stickyInfo}</div>
        <a href={`tel:${PHONE}`}>📞 Appeler</a>
      </div>
    </div>
  );
}
