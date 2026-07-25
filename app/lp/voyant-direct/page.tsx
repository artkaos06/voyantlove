import type { Metadata, Viewport } from 'next';

// Zero-JS lander: no 'use client', no client components, no per-page
// <Script>. MGID's top FR sources are Xiaomi in-app newsfeed browsers,
// which have historically choked on Next.js hydration — plain
// server-rendered HTML + CSS renders and is tappable even if JS never
// runs. Phone = Goracash's call offer, confirmed 2026-07 — NOT Télémaque
// despite lib/phoneNumbers.ts labeling this same number (bucket 1) as a
// "Télémaque dedicated number." That label is wrong for this number; fix
// pending. Pricing (10 min free, then 3€/min CB) is safe to state here —
// unlike Télémaque, Goracash has no on-record "no tariff claims" rule.
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
  description: 'Parlez à un voyant expert maintenant. 1er appel gratuit, consultation privée et confidentielle, 7j/7.',
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const PHONE = '0423090950';
const PHONE_DISPLAY = '04 23 09 09 50';

const STYLE = `
.vd-body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
     background:linear-gradient(160deg,#241657 0%,#3a1d6e 55%,#4a1f5e 100%);
     color:#fff;min-height:100vh;padding:20px;line-height:1.5}
.vd-container{max-width:420px;margin:0 auto}
.vd-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,0.12);
       border-radius:20px;padding:6px 14px;font-size:12px;margin-bottom:16px}
.vd-pulse{width:8px;height:8px;background:#4ade80;border-radius:50%;animation:vd-pulse 2s infinite}
@keyframes vd-pulse{0%,100%{opacity:1}50%{opacity:.4}}
.vd-h1{font-size:26px;font-weight:800;margin-bottom:12px;line-height:1.2}
.vd-sub{font-size:16px;color:rgba(255,255,255,0.8);margin-bottom:24px}
.vd-cta-btn{display:block;width:100%;padding:20px;border-radius:16px;border:none;
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

export default function LPVoyantDirect() {
  return (
    <div className="vd-body">
      <style dangerouslySetInnerHTML={{ __html: STYLE }} />

      <div className="vd-container">
        <div className="vd-badge"><span className="vd-pulse" /> Voyants disponibles maintenant</div>

        <h1 className="vd-h1">Votre voyant disponible maintenant — appel privé</h1>
        <p className="vd-sub">Consultation téléphonique confidentielle. Réponses claires sur l&apos;amour, le couple, l&apos;avenir.</p>

        <a href={`tel:${PHONE}`} className="vd-cta-btn">
          <div className="vd-phone">📞 {PHONE_DISPLAY}</div>
          <div className="vd-phone-sub">Appeler maintenant — 10 min offertes</div>
        </a>

        <div className="vd-pricing">
          <div className="vd-pricing-free">🎁 10 premières minutes OFFERTES</div>
          <div className="vd-pricing-then">Puis <strong>seulement 3€/minute</strong> — paiement CB sécurisé</div>
        </div>

        <div className="vd-social-proof">
          <strong>&laquo;&nbsp;J&apos;hésitais à appeler, mais en 10 minutes tout s&apos;est éclairci.&nbsp;&raquo;</strong><br />
          — Claire, 34 ans, Lyon
        </div>

        <div className="vd-urgency">
          <div className="vd-urgency-row">⏱️ <strong>Seulement 3 places</strong> ce soir après 21h</div>
          <div className="vd-urgency-row">👥 <strong>247 consultations</strong> réalisées aujourd&apos;hui</div>
          <div className="vd-urgency-row">⭐ <strong>4.7/5</strong> satisfaction clients</div>
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
        <div className="vd-sticky-info">3 voyants<br />disponibles</div>
        <a href={`tel:${PHONE}`}>📞 Appeler</a>
      </div>
    </div>
  );
}
