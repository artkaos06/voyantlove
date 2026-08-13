import type { Metadata, Viewport } from 'next';
import AlternativeCpa68Tracker from '@/components/AlternativeCpa68Tracker';
import { getAlternativeOfferConfig } from '@/lib/alternativeCpa68';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Consultation par téléphone, 10 minutes offertes',
  description: 'Échangez par téléphone avec un voyant pendant 10 minutes offertes, puis choisissez librement si vous souhaitez continuer.',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  alternates: {},
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const QUESTIONS = [
  'Un silence ou un éloignement qui vous pèse',
  'Une rupture ou une incertitude amoureuse',
  'L’avenir d’une relation',
  'Une décision personnelle difficile',
  'Le besoin de prendre du recul',
];

const STEPS = [
  {
    title: 'Vous appelez',
    text: 'Lancez votre consultation directement par téléphone.',
  },
  {
    title: 'Vous échangez pendant 10 minutes offertes',
    text: 'Expliquez votre situation et posez les questions qui comptent pour vous.',
  },
  {
    title: 'Vous choisissez',
    text: 'À la fin des 10 minutes, vous décidez librement si vous souhaitez continuer.',
  },
];

const STYLE = `
.cpa68{--ink:#271943;--purple:#5d3588;--deep:#251441;--rose:#d65182;--cream:#fff9f5;
  overflow-x:hidden;background:var(--cream);color:var(--ink);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}
.cpa68 *{box-sizing:border-box}.cpa68-shell{width:min(100% - 32px,1080px);margin-inline:auto}
.cpa68-hero{position:relative;isolation:isolate;padding:52px 0 46px;background:radial-gradient(circle at 85% 12%,rgba(239,176,199.32),transparent 28%),linear-gradient(145deg,#291648 0%,#563078 58%,#713c77 100%);color:#fff}
.cpa68-hero:after{content:'';position:absolute;z-index:-1;inset:auto -60px -90px auto;width:210px;height:210px;border:1px solid rgba(255,255,255.12);border-radius:50%}
.cpa68-brand{display:flex;align-items:center;gap:8px;margin-bottom:34px;font-size:15px;font-weight:750;letter-spacing:.02em}.cpa68-heart{color:#f3a8c2}
.cpa68-eyebrow{margin:0 0 12px;color:#f5c2d4;font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}
.cpa68 h1{max-width:780px;margin:0;font-family:Georgia,'Times New Roman',serif;font-size:clamp(34px,8.7vw,62px);font-weight:600;line-height:1.05;letter-spacing:-.025em}
.cpa68-lead{max-width:650px;margin:20px 0 26px;color:#f7effa;font-size:18px;line-height:1.55}
.cpa68-reassure{display:grid;gap:10px;max-width:650px;margin:0 0 28px;padding:0;list-style:none}.cpa68-reassure li{display:flex;align-items:flex-start;gap:10px;font-size:14px;line-height:1.45}.cpa68-check{flex:0 0 22px;display:grid;place-items:center;width:22px;height:22px;border-radius:50%;background:rgba(255,255,255.14);color:#ffd7e5;font-weight:900}
.cpa68-cta{display:inline-flex;align-items:center;justify-content:center;width:100%;min-height:58px;padding:14px 18px;border:0;border-radius:15px;background:linear-gradient(100deg,#e85c8e,#ed795d);box-shadow:0 10px 28px rgba(28,8,39.3);color:#fff;font-size:16px;font-weight:850;line-height:1.25;text-align:center;text-decoration:none;touch-action:manipulation;transition:transform .16s ease,filter .16s ease}.cpa68-cta:hover{filter:brightness(1.05);transform:translateY(-1px)}.cpa68-cta:focus-visible{outline:3px solid #fff;outline-offset:3px}
.cpa68-hero-cta{max-width:510px}.cpa68-micro{max-width:560px;margin:11px 0 0;color:rgba(255,255,255.78);font-size:12px;line-height:1.5}.cpa68-price{max-width:610px;margin:14px 0 0;padding:12px 14px;border:1px solid rgba(255,255,255.19);border-radius:12px;background:rgba(20,7,39.2);font-size:12px;line-height:1.5}.cpa68-price strong{color:#fff}.cpa68-price a{color:#fff;text-underline-offset:3px}
.cpa68-section{padding:56px 0}.cpa68-section h2{max-width:730px;margin:0 auto 12px;font-family:Georgia,'Times New Roman',serif;font-size:clamp(28px,7.5vw,44px);font-weight:600;line-height:1.12;text-align:center}.cpa68-intro{max-width:650px;margin:0 auto 34px;color:#695d77;line-height:1.65;text-align:center}
.cpa68-problems{background:#fff}.cpa68-question-grid{display:grid;gap:12px;max-width:800px;margin:auto}.cpa68-question{display:flex;align-items:center;gap:13px;min-height:58px;padding:14px 16px;border:1px solid #eadfec;border-radius:14px;background:#fffcfa;box-shadow:0 5px 18px rgba(71,40,88.05);font-size:15px;font-weight:650}.cpa68-dot{flex:0 0 10px;width:10px;height:10px;border-radius:50%;background:#d65c88;box-shadow:0 0 0 5px #f9e1ea}
.cpa68-how{background:linear-gradient(180deg,#fff9f5,#f6eff8)}.cpa68-steps{display:grid;gap:16px;max-width:900px;margin:auto}.cpa68-step{position:relative;padding:23px 20px 22px 68px;border:1px solid #e8dbe9;border-radius:18px;background:rgba(255,255,255.82)}.cpa68-step-number{position:absolute;top:20px;left:18px;display:grid;place-items:center;width:36px;height:36px;border-radius:50%;background:#603886;color:#fff;font-family:Georgia,serif;font-size:18px}.cpa68-step h3{margin:0 0 7px;font-size:17px}.cpa68-step p{margin:0;color:#6c6076;font-size:14px;line-height:1.6}
.cpa68-final{padding:62px 0 96px;background:#2a1749;color:#fff;text-align:center}.cpa68-final h2{max-width:730px;margin:0 auto 14px;font-family:Georgia,'Times New Roman',serif;font-size:clamp(28px,7.5vw,44px);font-weight:600;line-height:1.12}.cpa68-final p{max-width:620px;margin:0 auto 27px;color:#e8ddec;line-height:1.65}.cpa68-final .cpa68-cta{max-width:510px}.cpa68-final-price{max-width:610px;margin:15px auto 0;color:#d9c9df;font-size:12px;line-height:1.55}.cpa68-final-price a{color:#fff;text-underline-offset:3px}.cpa68-legal{max-width:680px;margin:26px auto 0;color:#bbaac3;font-size:11px;line-height:1.55}
.cpa68-sticky{display:none}
@media(min-width:700px){.cpa68-shell{width:min(100% - 64px,1080px)}.cpa68-hero{padding:60px 0 64px}.cpa68-question-grid{grid-template-columns:1fr 1fr}.cpa68-question:last-child{grid-column:1/-1}.cpa68-steps{grid-template-columns:repeat(3,1fr)}.cpa68-step{padding:72px 22px 24px}.cpa68-step-number{top:22px;left:22px}}
@media(max-width:699px){.cpa68{padding-bottom:126px}.cpa68-sticky{position:fixed;z-index:100;right:0;bottom:0;left:0;display:block;padding:8px 12px calc(8px + env(safe-area-inset-bottom));border-top:1px solid #decfe3;background:rgba(255,250,247.97);box-shadow:0 -8px 25px rgba(36,18,55.12);backdrop-filter:blur(10px)}.cpa68-sticky-inner{max-width:520px;margin:auto}.cpa68-sticky .cpa68-cta{min-height:50px;padding:11px 14px;font-size:15px}.cpa68-sticky-terms{display:block;margin:4px 3px 0;color:#594b64;font-size:10px;line-height:1.3;text-align:center;overflow-wrap:anywhere}.cpa68-sticky-terms a{display:inline-block;min-height:20px;padding:2px;color:#4f2f73;font-weight:700}}
@media(max-width:340px){.cpa68-shell{width:min(100% - 24px,1080px)}.cpa68-hero{padding-top:38px}.cpa68 h1{font-size:32px}.cpa68-lead{font-size:16px}.cpa68-cta{font-size:15px}.cpa68-step{padding-left:62px}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}.cpa68-cta{transition:none}.cpa68-cta:hover{transform:none}}
`;

function PriceTerms({ priceDisclosure }: { priceDisclosure: string }) {
  return (
    <>
      <strong>10 minutes offertes, sans carte bancaire.</strong> {priceDisclosure}
    </>
  );
}

export default async function Consultation10MinutesOffertesPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const offer = getAlternativeOfferConfig();

  // Resolve searchParams so Next keeps this paid route request-dynamic. The
  // provider-isolated tracker owns both named events; this page deliberately
  // never writes into Télémaque's shared lp-funnel KV namespace.
  await searchParams;

  return (
    <main className="cpa68">
      <style dangerouslySetInnerHTML={{ __html: STYLE }} />
      <AlternativeCpa68Tracker />

      <section className="cpa68-hero" aria-labelledby="cpa68-title">
        <div className="cpa68-shell">
          <div className="cpa68-brand"><span className="cpa68-heart" aria-hidden="true">♥</span> VoyantLove</div>
          <p className="cpa68-eyebrow">CONSULTATION PAR TÉLÉPHONE</p>
          <h1 id="cpa68-title">Besoin d’y voir plus clair dans votre situation&nbsp;?</h1>
          <p className="cpa68-lead">Parlez maintenant à un voyant pendant 10 minutes offertes.</p>
          <p className="cpa68-lead">
            Bénéficiez de notre offre découverte&nbsp;: 10 premières minutes offertes, puis 3€/min
            (paiement par CB ou PayPal). Créez votre compte afin d’être mis en relation avec l’un
            de nos voyants par téléphone.
          </p>
          <ul className="cpa68-reassure">
            <li><span className="cpa68-check" aria-hidden="true">✓</span><span>10 minutes offertes</span></li>
            <li><span className="cpa68-check" aria-hidden="true">✓</span><span>Aucune carte bancaire avant la fin des 10 minutes</span></li>
            <li><span className="cpa68-check" aria-hidden="true">✓</span><span>Vous décidez ensuite si vous souhaitez continuer</span></li>
          </ul>
          <a className="cpa68-cta cpa68-hero-cta" href={offer.telHref} data-cpa68-placement="hero">
            Appeler maintenant, 10 min offertes
          </a>
          <p className="cpa68-micro">Appel téléphonique • Vous restez libre de ne pas continuer après les 10 minutes</p>
          <p className="cpa68-price"><PriceTerms priceDisclosure={offer.priceDisclosure} /></p>
        </div>
      </section>

      <section className="cpa68-section cpa68-problems" aria-labelledby="questions-title">
        <div className="cpa68-shell">
          <h2 id="questions-title">Quand les questions tournent en boucle</h2>
          <p className="cpa68-intro">Un échange peut vous aider à poser votre situation autrement, sans promesse de résultat ni réponse toute faite.</p>
          <div className="cpa68-question-grid">
            {QUESTIONS.map((question) => (
              <div className="cpa68-question" key={question}><span className="cpa68-dot" aria-hidden="true" />{question}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="cpa68-section cpa68-how" aria-labelledby="how-title">
        <div className="cpa68-shell">
          <h2 id="how-title">Comment se déroule votre appel&nbsp;?</h2>
          <p className="cpa68-intro">Trois étapes simples, avec une décision qui vous appartient entièrement.</p>
          <div className="cpa68-steps">
            {STEPS.map((step, index) => (
              <article className="cpa68-step" key={step.title}>
                <span className="cpa68-step-number" aria-hidden="true">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cpa68-final" aria-labelledby="final-title">
        <div className="cpa68-shell">
          <h2 id="final-title">Vous n’avez pas besoin de rester seul face à vos questions.</h2>
          <p>Prenez quelques minutes pour expliquer votre situation et obtenir un nouvel éclairage.</p>
          <a className="cpa68-cta" href={offer.telHref} data-cpa68-placement="final">
            Commencer mes 10 minutes offertes
          </a>
          <p className="cpa68-final-price"><PriceTerms priceDisclosure={offer.priceDisclosure} /></p>
          <p className="cpa68-legal">Service réservé aux personnes majeures. La voyance est un service de divertissement et ne remplace aucun avis médical, juridique ou financier. Numéro appelé&nbsp;: {offer.displayPhone}.</p>
        </div>
      </section>

      <aside className="cpa68-sticky" aria-label="Appeler pour commencer la consultation">
        <div className="cpa68-sticky-inner">
          <a className="cpa68-cta" href={offer.telHref} data-cpa68-placement="sticky_mobile">
            Appeler, 10 min offertes
          </a>
          <span className="cpa68-sticky-terms">10 min offertes, {offer.priceDisclosure}</span>
        </div>
      </aside>
    </main>
  );
}
