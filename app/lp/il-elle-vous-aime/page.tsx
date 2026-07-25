import type { Metadata, Viewport } from 'next';
import { recordLanderLoad } from '@/lib/lpTrack';
import { availabilityNow, type Availability } from '@/lib/availability';
import { OFFER } from '@/lib/offer';
import { PHONE_NUMBERS, formatPhone } from '@/lib/phoneNumbers';
import VoyantStrip from '@/components/VoyantStrip';

// MGID test — Angle 2 "Relationship Clarity" (emotional hook).
// Ad headline: "Il/Elle vous aime vraiment ? La révélation en 2 min"
// Spec: audit §8.4 — ONE question, then an immediate situation-specific
// phone CTA. No loading screen, no email gate (both were identified as
// conversion killers in the old 5-question funnel).
//
// Step logic is pure CSS — hidden radio inputs + general-sibling selectors
// swap the question for the matching result. Zero JS on purpose: MGID's
// top FR sources are Xiaomi/Huawei in-app newsfeed browsers that choke on
// Next.js hydration, and a quiz needing JS to advance shows a dead screen
// there. This advances even if JS never runs.
//
// Attribution: the root layout's sitewide tel: listener logs page_path to
// /api/track/tel-click, so calls from this angle are distinguishable from
// the other two landers by URL alone.

export const metadata: Metadata = {
  title: 'Il/Elle vous aime vraiment ? — La révélation en 2 minutes',
  description: 'Une question, une réponse. Découvrez ce qu’un voyant peut révéler sur vos sentiments.',
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// Télémaque attribution bucket 2 (angle 2 "Relationship Clarity"). One bucket
// per angle is what makes per-angle revenue readable in Télémaque's
// reversement reporting — never share a bucket with another lander.
const PHONE = PHONE_NUMBERS['2'];
const PHONE_DISPLAY = formatPhone(PHONE);

// One option → one result. `spec` fills "Un voyant spécialisé en …".
const OPTIONS = [
  { id: 'couple', label: 'En couple', spec: 'les relations de couple' },
  { id: 'celib', label: 'Célibataire', spec: 'les rencontres amoureuses' },
  { id: 'complique', label: 'C’est compliqué', spec: 'les situations sentimentales complexes' },
  { id: 'rupture', label: 'Après une rupture', spec: 'l’après-rupture et le retour de l’ex' },
];

const STYLE = `
.vq-body,.vq-body *{-webkit-tap-highlight-color:transparent}
.vq-body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
     background:linear-gradient(160deg,#241657 0%,#3a1d6e 55%,#4a1f5e 100%);
     color:#fff;min-height:100vh;min-height:100dvh;padding:24px 20px 40px;line-height:1.5}
.vq-container{max-width:420px;margin:0 auto}
.vq-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,0.12);
       border-radius:20px;padding:6px 14px;font-size:12px;margin-bottom:14px}
.vq-pulse{width:8px;height:8px;background:#4ade80;border-radius:50%;animation:vq-pulse 2s infinite}
@keyframes vq-pulse{0%,100%{opacity:1}50%{opacity:.4}}
@media (prefers-reduced-motion: reduce){.vq-pulse{animation:none}}
.vq-h1{font-size:25px;font-weight:800;margin-bottom:8px;line-height:1.25}
.vq-intro{font-size:15px;color:rgba(255,255,255,0.75);margin-bottom:24px}
.vq-radio{position:absolute;opacity:0;width:0;height:0;pointer-events:none}
.vq-q{font-size:21px;font-weight:800;margin-bottom:18px;line-height:1.3}
.vq-opt{width:100%;touch-action:manipulation;padding:16px;margin-bottom:11px;border-radius:12px;
     background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.16);
     font-weight:600;font-size:16px;cursor:pointer;min-height:58px;
     display:flex;align-items:center}
.vq-step{display:none}
.vq-ask{display:block}
.vq-flow input:checked ~ .vq-ask{display:none}
.vq-flow input#opt-couple:checked ~ .vq-r-couple{display:block}
.vq-flow input#opt-celib:checked ~ .vq-r-celib{display:block}
.vq-flow input#opt-complique:checked ~ .vq-r-complique{display:block}
.vq-flow input#opt-rupture:checked ~ .vq-r-rupture{display:block}
.vq-result-inner{text-align:center;padding-bottom:86px}
/* Sticky CTA is gated on an answer. Showing the phone number on the question
   screen would let visitors skip the one question, which is the entire
   mechanic of this angle — so it rides the same :checked selector. */
.vq-sticky{display:none;position:fixed;bottom:0;left:0;right:0;
     background:rgba(36,22,87,0.97);padding:12px 20px;
     border-top:1px solid rgba(255,255,255,0.12);z-index:100}
.vq-flow input:checked ~ .vq-sticky{display:block}
.vq-sticky a{display:flex;align-items:center;justify-content:center;width:100%;
     min-height:60px;border-radius:12px;touch-action:manipulation;
     background:linear-gradient(90deg,#ff6b9d,#ff8f6b);color:#fff;font-weight:800;
     text-decoration:none;font-size:17px}
.vq-seal{font-size:40px;margin-bottom:10px}
.vq-rh{font-size:22px;font-weight:800;margin-bottom:18px;line-height:1.35}
.vq-cta{display:block;touch-action:manipulation;width:100%;padding:18px;border-radius:16px;
     background:linear-gradient(90deg,#ff6b9d,#ff8f6b);color:#fff;
     font-weight:800;text-align:center;text-decoration:none;min-height:60px;
     box-shadow:0 8px 32px rgba(255,107,157,0.4);margin-bottom:10px}
.vq-cta-num{font-size:26px;font-weight:800;letter-spacing:1px;display:block}
.vq-cta-sub{font-size:13px;opacity:.92;display:block;margin-top:3px}
.vq-pricing{background:rgba(74,222,128,0.1);border:1px solid rgba(74,222,128,0.35);
     border-radius:12px;padding:14px;margin:16px 0;text-align:center}
.vq-pricing-free{font-size:16px;font-weight:800;color:#4ade80;margin-bottom:3px}
.vq-pricing-then{font-size:13px;color:rgba(255,255,255,0.85)}
.vq-pricing-then strong{color:#f4d98a;font-size:15px}
.vq-urgency{background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.1);
     border-radius:12px;padding:14px;margin:16px 0;font-size:13.5px;text-align:left}
.vq-urgency div{margin:6px 0}
.vq-reassure{font-size:12px;color:rgba(255,255,255,0.6);margin-top:14px}
.vq-footer{text-align:center;font-size:11px;color:rgba(255,255,255,0.45);margin-top:28px}
`;

function Result({ spec, av }: { spec: string; av: Availability }) {
  return (
    <div className="vq-result-inner">
      <div className="vq-seal">🔮</div>
      <div className="vq-rh">
        Un voyant spécialisé en {spec} est disponible maintenant.
      </div>

      {/* Faces at the moment of decision — the result screen IS the CTA screen
          on this angle, so the trust signal belongs here, not on the question. */}
      <VoyantStrip limit={4} label="Voyants partenaires en ligne" />

      <a href={`tel:${PHONE}`} className="vq-cta">
        <span className="vq-cta-num">📞 {PHONE_DISPLAY}</span>
        <span className="vq-cta-sub">{av.ctaSub}</span>
      </a>

      <div className="vq-pricing">
        <div className="vq-pricing-free">💳 {OFFER.intro}</div>
        <div className="vq-pricing-then"><strong>{OFFER.introPerMin}</strong></div>
        <div className="vq-pricing-then">{OFFER.after} · {OFFER.payment}</div>
      </div>

      <div className="vq-urgency">
        <div>{av.scarcity}</div>
        <div>{av.callsToday}</div>
        <div>⭐ <strong>4,7/5</strong> satisfaction clients</div>
      </div>

      <p className="vq-reassure">
        ✓ Privé et confidentiel · ✓ Voyants experts · ✓ 7j/7 de 8h à 2h · ✓ +18 ans
      </p>
    </div>
  );
}

export default async function LPIlElleVousAime({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  await recordLanderLoad('il-elle-vous-aime', await searchParams);

  // Copy adapts to the real request time — see lib/availability.ts.
  const av = availabilityNow();

  return (
    <div className="vq-body">
      <style dangerouslySetInnerHTML={{ __html: STYLE }} />

      <div className="vq-container">
        <div className="vq-badge"><span className="vq-pulse" /> {av.badge}</div>
        <h1 className="vq-h1">Il/Elle vous aime vraiment&nbsp;?</h1>
        <p className="vq-intro">Une question, et votre réponse immédiate.</p>

        <div className="vq-flow">
          {/* Hidden state — must precede the steps for the ~ selectors to work */}
          {OPTIONS.map((o) => (
            <input key={o.id} type="radio" name="vqs" id={`opt-${o.id}`} className="vq-radio" />
          ))}

          <div className="vq-step vq-ask">
            <div className="vq-q">Où en êtes-vous aujourd&apos;hui&nbsp;?</div>
            {OPTIONS.map((o) => (
              <label key={o.id} className="vq-opt" htmlFor={`opt-${o.id}`}>{o.label}</label>
            ))}
          </div>

          {OPTIONS.map((o) => (
            <div key={o.id} className={`vq-step vq-r-${o.id}`}>
              <Result spec={o.spec} av={av} />
            </div>
          ))}

          {/* Must stay INSIDE .vq-flow: the `input:checked ~` sibling selector
              can only reach elements that share the inputs' parent. */}
          <div className="vq-sticky">
            <a href={`tel:${PHONE}`}>📞 Appeler — {PHONE_DISPLAY}</a>
          </div>
        </div>

        <footer className="vq-footer">
          Service réservé aux personnes majeures (18+). Divertissement et guidance
          personnelle — ne remplace aucun avis médical, juridique ou financier.
        </footer>
      </div>
    </div>
  );
}
