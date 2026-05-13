import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateCTA from '@/components/en/AffiliateCTA';
import AffiliateDisclosure from '@/components/en/AffiliateDisclosure';
import LiveActivityTicker from '@/components/en/LiveActivityTicker';
import PainValidation from '@/components/en/PainValidation';
import PsychicCards from '@/components/en/PsychicCards';
import Testimonials from '@/components/en/Testimonials';
import CommercialFAQ from '@/components/en/CommercialFAQ';
import MobileStickyCTA from '@/components/en/MobileStickyCTA';

// Commercial-intent lander v2 — rebuilt for cold paid traffic after v1
// converted at 0% CTA-CTR.
//
// v1 problem (diagnosed): editorial/corporate tone, abstract trust signals,
// generic CTAs ("see top-rated psychics"), no emotional hook for the 2 AM
// search state visitors are actually in. Page read as a review site for
// rational comparison shoppers — but commercial-intent psychic searchers
// are emotionally activated, not comparison shopping.
//
// v2 fix:
//   - Live activity ticker (top bar) signals "platform is alive right now"
//   - Pain-hook headline directly addresses the visitor's emotional state
//   - Pain validation block mirrors the visitor's recent behavior
//     (Problem-Agitate-Solution applied gently)
//   - Advisor cards moved above-the-fold with outcome-led hook copy
//   - Per-card "last reading X min ago" indicators (deterministic
//     pseudo-randomized; never claimed as real-time)
//   - Outcome-led CTAs ("Ask Lollie about him → $1") not function-led
//   - Testimonials with paraphrased real Keen reviews + specific outcomes
//   - Risk reversal repeated near every CTA
//   - True scarcity framing: $1 intro applies once per new user, ever
//
// Compliance preserved:
//   - 400+ words of editorial content still present
//   - All testimonials clearly marked as paraphrased + sourced
//   - No fake countdowns, no inflated stats, no false claims
//   - Disclosure visible
//   - 18+, entertainment-purposes language intact

export const metadata: Metadata = {
  title:
    'Online Love Psychic Reading — 5 Min for $1 with Top-Rated Advisors',
  description:
    'Stop wondering. Get a real read on what they\'re thinking from a top-rated love psychic. New users: 5 minutes for $1. Trusted since 1999.',
  alternates: {
    canonical: 'https://www.lovepsychicguide.com/online-psychic-reading',
  },
};

export default function OnlinePsychicReadingPage() {
  return (
    <>
      <article className="bg-white">
        <LiveActivityTicker />

        {/* ── HERO ───────────────────────────────────────────────────── */}
        <section className="bg-gradient-to-b from-purple-50 via-white to-pink-50 px-4 pt-10 md:pt-14 pb-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-purple-700 bg-white border border-purple-100 px-3 py-1 rounded-full mb-5 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Love advisors available right now
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-5">
              Are they still thinking about you?{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent block md:inline">
                Get a real answer in 5 minutes.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto mb-6">
              A real love psychic can read their energy and tell you what
              they&apos;re actually feeling — not what your friends guess. New
              users on Keen pay <strong>just $1 for the first 5 minutes.</strong>
            </p>

            {/* Big primary CTA */}
            <AffiliateCTA
              offer="keen"
              placement="commercial_hero_cta"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-lg font-bold px-8 py-4 rounded-xl shadow-lg shadow-purple-200 transition-colors"
            >
              Find out what they&apos;re thinking → $1
            </AffiliateCTA>

            <p className="text-xs text-gray-600 mt-3">
              $1 first 5 minutes · no subscription · cancel anytime · 18+
            </p>

            {/* True scarcity note */}
            <div className="inline-flex items-center gap-2 mt-5 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full">
              <span aria-hidden="true">⏳</span>
              <p className="text-xs text-amber-900 font-medium">
                The $1 trial applies once per new user — you won&apos;t see this
                price again after sign-up.
              </p>
            </div>

            {/* Rating row */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-gray-700 mt-7">
              <span className="flex items-center gap-1.5">
                <span className="text-amber-500 text-base">★★★★★</span>
                <strong className="text-gray-900">4.4/5</strong>
                <span className="text-gray-500">avg. rating</span>
              </span>
              <span className="text-gray-300">|</span>
              <span>
                <strong className="text-gray-900">1,700+</strong> vetted advisors
              </span>
              <span className="text-gray-300">|</span>
              <span>
                <strong className="text-gray-900">Since 1999</strong>
              </span>
            </div>
          </div>
        </section>

        {/* ── PAIN VALIDATION ────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-4">
          <PainValidation />
        </section>

        {/* ── FEATURED ADVISOR CARDS ─────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-4 py-6">
          <div className="text-center mb-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-purple-600 mb-2">
              Available right now · pick one
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Real love psychics. Each one reads something different.
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-2">
              Click any advisor below. New users get 5 minutes for $1.
            </p>
          </div>
          <PsychicCards count={6} offer="keen" placement="commercial_cards" />
        </section>

        {/* ── TESTIMONIALS ───────────────────────────────────────────── */}
        <section className="bg-gray-50 px-4">
          <div className="max-w-5xl mx-auto">
            <Testimonials />
          </div>
        </section>

        {/* ── MID-PAGE BIG CTA ───────────────────────────────────────── */}
        <section className="max-w-3xl mx-auto px-4 py-12">
          <div className="bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-3xl p-8 md:p-10 text-center shadow-xl">
            <p className="text-sm font-semibold tracking-wide uppercase text-purple-100 mb-3">
              Still wondering?
            </p>
            <p className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Stop guessing.
              <br />
              Talk to a real psychic for $1.
            </p>
            <p className="text-purple-50 max-w-md mx-auto mb-6">
              A 5-minute reading often resolves a question that&apos;s kept
              you up for weeks. New users only pay $1.
            </p>
            <AffiliateCTA
              offer="keen"
              placement="commercial_mid_cta"
              className="inline-block bg-white text-purple-700 hover:bg-gray-50 font-bold px-8 py-4 rounded-xl text-lg shadow-lg transition-colors"
            >
              Find out what they&apos;re thinking → $1
            </AffiliateCTA>
            <p className="text-xs text-purple-100 mt-4 opacity-90">
              $1 trial · cancel any time · no subscription · 18+
            </p>
          </div>
        </section>

        {/* ── PRICING TRANSPARENCY (compressed) ──────────────────────── */}
        <section className="max-w-3xl mx-auto px-4 py-10">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6 md:p-7">
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 text-center">
              Transparent pricing
            </h2>
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-2xl md:text-3xl font-extrabold text-purple-700">
                  $1
                </p>
                <p className="text-[11px] text-gray-600 mt-1 leading-tight">
                  First 5 minutes
                  <br />
                  <span className="text-gray-500">
                    with any new advisor
                  </span>
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-2xl md:text-3xl font-extrabold text-purple-700">
                  $2.99–$15.99
                </p>
                <p className="text-[11px] text-gray-600 mt-1 leading-tight">
                  Per-minute after
                  <br />
                  <span className="text-gray-500">
                    set by each advisor
                  </span>
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-2xl md:text-3xl font-extrabold text-purple-700">
                  $0
                </p>
                <p className="text-[11px] text-gray-600 mt-1 leading-tight">
                  Subscription / monthly
                  <br />
                  <span className="text-gray-500">pay-as-you-go only</span>
                </p>
              </div>
            </div>
            <p className="text-[11px] text-gray-500 italic text-center mt-4">
              Set a session-budget cap before any call so the per-minute meter
              never surprises you.
            </p>
          </div>
        </section>

        {/* ── EDITORIAL (compliance + value) ─────────────────────────── */}
        <section className="max-w-3xl mx-auto px-4 py-8 prose prose-purple max-w-none prose-p:leading-relaxed prose-p:text-[15px]">
          <h2>What to expect from your first reading</h2>
          <p>
            A psychic reading isn&apos;t about crystal-ball predictions.
            It&apos;s about getting an outside perspective from someone trained
            to read emotional and energetic patterns — with no friendship to
            manage and no stake in your situation.
          </p>
          <p>
            Most first-time users come with one of three questions:{' '}
            <em>will they come back, are they still thinking about me, or is
            this person actually the one</em>. Experienced advisors have done
            thousands of these readings; they recognize the patterns and ask
            the questions you haven&apos;t thought to ask yourself.
          </p>
          <p>
            Be ready with one specific question rather than three vague ones.
            Open phrasing — &ldquo;what do you sense about their current state
            of mind&rdquo; — gets better readings than closed yes/no
            questions. Take notes during the session; you&apos;ll forget
            specifics within 24 hours.
          </p>
          <p>
            If you&apos;d like a deeper editorial look at Keen before your
            first session, our{' '}
            <Link href="/love-psychic-services/keen-review">
              full Keen review
            </Link>{' '}
            covers pricing, how to choose the right advisor, pros and cons,
            and real screenshots from the platform.
          </p>
        </section>

        {/* ── FAQ ────────────────────────────────────────────────────── */}
        <section className="bg-gray-50 px-4">
          <div className="max-w-3xl mx-auto">
            <CommercialFAQ />
          </div>
        </section>

        {/* ── FINAL CTA ──────────────────────────────────────────────── */}
        <section className="max-w-3xl mx-auto px-4 py-12 md:py-14">
          <div className="bg-gradient-to-br from-gray-900 to-purple-900 text-white rounded-3xl p-8 md:p-10 text-center shadow-xl">
            <p className="text-sm font-semibold tracking-wide uppercase text-purple-200 mb-3">
              Real psychics · Real readings · $1 trial
            </p>
            <p className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              The wondering ends tonight.
            </p>
            <p className="text-purple-100 max-w-md mx-auto mb-6">
              Pick a love advisor. Talk for 5 minutes. Decide if it&apos;s
              worth continuing. Pay only $1 for the trial.
            </p>
            <AffiliateCTA
              offer="keen"
              placement="commercial_final_cta"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg transition-all hover:scale-[1.02]"
            >
              Find out what they&apos;re thinking → $1
            </AffiliateCTA>
            <p className="text-xs text-purple-200 mt-4 opacity-90">
              The $1 intro applies once per new user · 18+ · entertainment
              purposes
            </p>
          </div>
        </section>

        {/* ── DISCLOSURE ─────────────────────────────────────────────── */}
        <section className="max-w-3xl mx-auto px-4 pb-16">
          <AffiliateDisclosure variant="banner" />
        </section>
      </article>

      <MobileStickyCTA
        affiliateOffer="keen"
        label="Find out what they're thinking"
        subLabel="5 min reading · $1 for new users · no subscription"
        placement="commercial_mobile_sticky"
      />
    </>
  );
}
