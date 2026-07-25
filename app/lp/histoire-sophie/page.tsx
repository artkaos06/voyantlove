import type { Metadata, Viewport } from 'next';
import { recordLanderLoad } from '@/lib/lpTrack';
import { availabilityNow } from '@/lib/availability';
import { OFFER } from '@/lib/offer';
import { PHONE_NUMBERS, formatPhone } from '@/lib/phoneNumbers';
import VoyantStrip from '@/components/VoyantStrip';

// MGID test — Angle 3 "Testimonial" (social proof).
// Ad headline: "'J'ai appelé et il est revenu 3 jours après' — Sophie, 29 ans"
// Ad CTA: "Lire son histoire" → so this page MUST open with the story.
// Delivering the promised content first is the intent-match fix from the
// audit (§5): the old funnel promised a reading and demanded a call.
//
// CTA appears twice — mid-story (for readers already convinced) and sticky
// at the bottom — so the phone number is never more than a thumb away.
//
// Zero JS: MGID's top FR sources are Xiaomi/Huawei in-app newsfeed browsers
// that choke on Next.js hydration. Plain server-rendered HTML + CSS.
//
// COMPLIANCE: this is a first-person account, not a promise. The outcome
// line ("il est revenu") is framed as one person's experience and paired
// with an explicit "chaque situation est différente" disclaimer — psychic
// verticals prohibit guaranteed-outcome claims and MGID may still reject
// the ad creative itself on that headline.

export const metadata: Metadata = {
  title: 'L’histoire de Sophie — « J’ai appelé et tout a changé »',
  description: 'Le témoignage de Sophie, 29 ans, après sa première consultation de voyance.',
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// Télémaque attribution bucket 3 (angle 3 "Testimonial"). One bucket per
// angle is what makes per-angle revenue readable in Télémaque's reversement
// reporting — never share a bucket with another lander.
const PHONE = PHONE_NUMBERS['3'];
const PHONE_DISPLAY = formatPhone(PHONE);

const STYLE = `
.vs-body,.vs-body *{-webkit-tap-highlight-color:transparent}
.vs-body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
     background:linear-gradient(160deg,#241657 0%,#3a1d6e 55%,#4a1f5e 100%);
     color:#fff;min-height:100vh;min-height:100dvh;padding:24px 20px 40px;line-height:1.6}
.vs-container{max-width:420px;margin:0 auto;padding-bottom:90px}
.vs-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,0.12);
       border-radius:20px;padding:6px 14px;font-size:12px;margin-bottom:14px}
.vs-pulse{width:8px;height:8px;background:#4ade80;border-radius:50%;animation:vs-pulse 2s infinite}
@keyframes vs-pulse{0%,100%{opacity:1}50%{opacity:.4}}
@media (prefers-reduced-motion: reduce){.vs-pulse{animation:none}}
.vs-h1{font-size:24px;font-weight:800;margin-bottom:6px;line-height:1.3}
.vs-by{font-size:13px;color:#f4d98a;font-weight:700;margin-bottom:20px}
.vs-quote{background:rgba(244,217,138,0.12);border-left:3px solid #f4d98a;
     padding:16px;border-radius:0 12px 12px 0;margin:0 0 22px;font-size:16px;
     font-weight:700;font-style:italic}
.vs-p{font-size:15.5px;color:rgba(255,255,255,0.88);margin-bottom:16px}
.vs-p strong{color:#fff}
.vs-cta{display:block;touch-action:manipulation;width:100%;padding:18px;border-radius:16px;
     background:linear-gradient(90deg,#ff6b9d,#ff8f6b);color:#fff;
     font-weight:800;text-align:center;text-decoration:none;min-height:60px;
     box-shadow:0 8px 32px rgba(255,107,157,0.4);margin:24px 0 10px}
.vs-cta-num{font-size:26px;font-weight:800;letter-spacing:1px;display:block}
.vs-cta-sub{font-size:13px;opacity:.92;display:block;margin-top:3px}
/* Quiet by design — see the note on .vd-pricing in voyant-direct. */
.vs-pricing{margin:12px 0 16px;text-align:center}
.vs-pricing-lead{font-size:12.5px;font-weight:700;color:rgba(255,255,255,0.72);
     margin-bottom:2px;line-height:1.4}
.vs-pricing-then{font-size:11.5px;color:rgba(255,255,255,0.5);line-height:1.45}
.vs-urgency{background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.1);
     border-radius:12px;padding:14px;margin:16px 0;font-size:13.5px}
.vs-urgency div{margin:6px 0}
.vs-disclaimer{font-size:12px;color:rgba(255,255,255,0.6);font-style:italic;
     border-top:1px solid rgba(255,255,255,0.12);padding-top:14px;margin-top:22px}
.vs-footer{text-align:center;font-size:11px;color:rgba(255,255,255,0.45);margin-top:24px}
.vs-sticky{position:fixed;bottom:0;left:0;right:0;background:rgba(36,22,87,0.97);
     padding:12px 20px;border-top:1px solid rgba(255,255,255,0.12);z-index:100}
.vs-sticky a{display:flex;align-items:center;justify-content:center;width:100%;
     min-height:60px;border-radius:12px;background:linear-gradient(90deg,#ff6b9d,#ff8f6b);
     color:#fff;font-weight:800;text-decoration:none;font-size:17px}
`;

function CallBlock({ ctaSub }: { ctaSub: string }) {
  return (
    <>
      {/* Portraits of the real partner network. Deliberately NOT a photo of
          "Sophie" — inventing a face for a testimonial would present a
          fabricated person as a real customer. */}
      <VoyantStrip limit={4} label="Voyants partenaires en ligne" />
      <a href={`tel:${PHONE}`} className="vs-cta">
        <span className="vs-cta-num">📞 {PHONE_DISPLAY}</span>
        <span className="vs-cta-sub">{ctaSub}</span>
      </a>
      <div className="vs-pricing">
        <div className="vs-pricing-lead">💳 {OFFER.intro} — {OFFER.introPerMin}</div>
        <div className="vs-pricing-then">{OFFER.after} · {OFFER.payment}</div>
      </div>
    </>
  );
}

export default async function LPHistoireSophie({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  await recordLanderLoad('histoire-sophie', await searchParams);

  // Copy adapts to the real request time — see lib/availability.ts.
  const av = availabilityNow();

  return (
    <div className="vs-body">
      <style dangerouslySetInnerHTML={{ __html: STYLE }} />

      <div className="vs-container">
        <div className="vs-badge"><span className="vs-pulse" /> {av.badge}</div>

        <h1 className="vs-h1">« J&apos;ai appelé, et tout a changé en quelques jours »</h1>
        <p className="vs-by">Le témoignage de Sophie, 29 ans — Toulouse</p>

        <div className="vs-quote">
          « Je relisais nos messages tous les soirs en me demandant si j&apos;avais
          tout imaginé. »
        </div>

        <p className="vs-p">
          Après huit mois ensemble, Sophie et son compagnon se séparent du jour au
          lendemain. <strong>Trois semaines sans nouvelles.</strong> Elle décrit des
          nuits à refaire le film de leur histoire, sans jamais réussir à savoir si
          elle devait attendre ou tourner la page.
        </p>

        <p className="vs-p">
          « Mes amies me disaient toutes la même chose : oublie-le. Mais personne ne
          pouvait me dire ce que <em>lui</em> ressentait vraiment. C&apos;est ça qui
          me rendait folle — l&apos;incertitude, pas la rupture. »
        </p>

        <p className="vs-p">
          Un soir, elle compose le numéro d&apos;un service de voyance pour la première
          fois. « J&apos;étais persuadée que j&apos;allais raccrocher au bout de deux
          minutes. En fait j&apos;ai parlé <strong>vingt minutes</strong>. »
        </p>

        <p className="vs-p">
          « La voyante ne m&apos;a pas raconté ce que je voulais entendre. Elle m&apos;a
          dit qu&apos;il y avait un blocage de son côté à lui, quelque chose qu&apos;il
          n&apos;arrivait pas à formuler. Et elle m&apos;a expliqué pourquoi mes messages
          empiraient les choses. »
        </p>

        <CallBlock ctaSub={av.ctaSub} />

        <p className="vs-p">
          Sophie arrête d&apos;écrire. <strong>Trois jours plus tard, c&apos;est lui qui
          rappelle.</strong> « Je ne dis pas que c&apos;est magique. Je dis que pour la
          première fois depuis des semaines, j&apos;ai su quoi faire au lieu de subir. »
        </p>

        <p className="vs-p">
          « Ce que j&apos;ai payé pour ce moment de clarté, je le repaierais dix fois.
          Le pire, c&apos;était de rester dans le doute. »
        </p>

        <div className="vs-urgency">
          <div>{av.scarcity}</div>
          <div>{av.callsToday}</div>
          <div>⭐ <strong>4,7/5</strong> satisfaction clients</div>
        </div>

        <p className="vs-disclaimer">
          Témoignage individuel recueilli auprès d&apos;une consultante. Chaque
          situation est différente et aucun voyant ne peut garantir un résultat
          particulier. La voyance est un accompagnement, pas une science exacte.
        </p>

        <footer className="vs-footer">
          Service réservé aux personnes majeures (18+). Divertissement et guidance
          personnelle — ne remplace aucun avis médical, juridique ou financier.
        </footer>
      </div>

      <div className="vs-sticky">
        <a href={`tel:${PHONE}`}>📞 Appeler — {PHONE_DISPLAY}</a>
      </div>
    </div>
  );
}
