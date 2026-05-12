import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateCTA from '@/components/en/AffiliateCTA';
import AffiliateDisclosure from '@/components/en/AffiliateDisclosure';
import PsychicCards from '@/components/en/PsychicCards';
import TrustStrip from '@/components/en/TrustStrip';
import HowItWorks from '@/components/en/HowItWorks';
import CommercialFAQ from '@/components/en/CommercialFAQ';
import MobileStickyCTA from '@/components/en/MobileStickyCTA';

// Commercial-intent lander for buyer-state paid traffic.
//
// Designed for ad keywords like "online psychic reading", "best love
// psychic", "psychic reading 5 min", "online tarot reader" — users who
// are already in shopping mode rather than informational mode.
//
// Structure:
//   1. Hero with message-matched headline + price + primary CTA
//   2. Trust strip (4 above-the-fold trust signals)
//   3. Psychic advisor cards (6 real Keen advisors, each with direct CTA)
//   4. How it works (3 steps, sets expectations for offboard)
//   5. Pricing transparency block
//   6. Editorial section (~400 words) for compliance and additional
//      context — keeps Google's affiliate-policy filter happy without
//      derailing conversion
//   7. FAQ (8 questions with JSON-LD FAQPage schema)
//   8. Final CTA + disclosure
//   9. Mobile sticky CTA (direct affiliate mode)
//
// Deliberately distinct from the editorial topic pages
// (/will-he-come-back, etc.) which serve informational intent. This
// page is conversion-first while remaining policy-compliant.

export const metadata: Metadata = {
  title:
    'Online Love Psychic Reading — 5 Min for $1 with Top-Rated Advisors',
  description:
    'Get an honest love psychic reading from a top-rated advisor. New users: 5 minutes for $1 with any new psychic. 24/7 live readings on Keen — 25 years online.',
  alternates: {
    canonical: 'https://www.lovepsychicguide.com/online-psychic-reading',
  },
};

export default function OnlinePsychicReadingPage() {
  return (
    <>
      <article className="bg-white">
        {/* ── HERO ───────────────────────────────────────────────────── */}
        <section className="bg-gradient-to-b from-purple-50 via-white to-pink-50 px-4 pt-12 md:pt-16 pb-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-purple-700 bg-purple-100 px-3 py-1 rounded-full mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Advisors available now · 24/7
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              Real love psychics.
              <br className="hidden md:inline" />{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                5 minutes for $1.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto mb-7">
              Top-rated love &amp; relationship advisors on Keen — the
              25-year-old psychic platform trusted by millions. New users
              get the first 5 minutes with any advisor for $1.
            </p>

            {/* Star rating + meta */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-gray-700 mb-7">
              <span className="flex items-center gap-1.5">
                <span className="text-amber-500 text-base">★★★★★</span>
                <strong className="text-gray-900">4.4/5</strong>
                <span className="text-gray-500">avg. rating</span>
              </span>
              <span className="text-gray-300">|</span>
              <span>
                <strong className="text-gray-900">1,700+</strong> vetted
                advisors
              </span>
              <span className="text-gray-300">|</span>
              <span>
                <strong className="text-gray-900">Since 1999</strong>
              </span>
            </div>

            {/* Primary CTA */}
            <AffiliateCTA
              offer="keen"
              placement="commercial_hero_cta"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-lg font-bold px-8 py-4 rounded-xl shadow-lg shadow-purple-200 transition-colors"
            >
              See top-rated psychics →
            </AffiliateCTA>
            <p className="text-xs text-gray-500 mt-3">
              No subscription · cancel anytime · 18+
            </p>
          </div>
        </section>

        {/* ── TRUST STRIP ────────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-4">
          <TrustStrip />
        </section>

        {/* ── PSYCHIC CARDS ──────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-4 py-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
              Featured love &amp; relationship advisors
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Currently available on Keen. Each gets you 5 minutes for $1
              on your first session.
            </p>
          </div>
          <PsychicCards count={6} offer="keen" placement="commercial_cards" />
        </section>

        {/* ── HOW IT WORKS ───────────────────────────────────────────── */}
        <section className="bg-gray-50 px-4">
          <div className="max-w-5xl mx-auto">
            <HowItWorks />
          </div>
        </section>

        {/* ── PRICING TRANSPARENCY ───────────────────────────────────── */}
        <section className="max-w-3xl mx-auto px-4 py-12 md:py-16">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3 text-center">
              Transparent pricing
            </h2>
            <p className="text-center text-gray-600 text-sm mb-6">
              No hidden fees. No subscription. Pay only for the minutes
              you use.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-extrabold text-purple-700">
                  $1
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Your first 5 minutes
                  <br />
                  <span className="text-gray-500">
                    with any new advisor
                  </span>
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-extrabold text-purple-700">
                  $2.99–$15.99
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Per-minute rate after
                  <br />
                  <span className="text-gray-500">
                    set by each advisor
                  </span>
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-extrabold text-purple-700">
                  $0
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Subscription / monthly fee
                  <br />
                  <span className="text-gray-500">pay-as-you-go only</span>
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-500 italic text-center mt-5">
              Set a session-budget cap before any call so the per-minute
              meter never surprises you.
            </p>
          </div>
        </section>

        {/* ── EDITORIAL SECTION (compliance + value) ─────────────────── */}
        <section className="max-w-3xl mx-auto px-4 py-10 prose prose-purple max-w-none prose-p:leading-relaxed">
          <h2>What to expect from your first love reading</h2>
          <p>
            A psychic reading isn&apos;t about predictions with crystal
            balls. It&apos;s about getting an outside perspective from
            someone trained to read emotional and energetic patterns —
            with no stake in your situation and no friendship to manage.
          </p>
          <p>
            Most first-time users come with one of three questions: will
            this person come back, are they thinking about me, or is
            this connection meant to be. Experienced love advisors on
            Keen have done thousands of these readings; they recognize
            the patterns, and they ask the questions you might not have
            thought to ask.
          </p>
          <p>
            Be ready with one specific question rather than three vague
            ones. Open phrasing — &ldquo;tell me what you sense about my
            ex&apos;s current state of mind&rdquo; — gets better readings
            than closed yes/no questions. Take notes during the session;
            you&apos;ll forget specifics within 24 hours otherwise.
          </p>
          <p>
            Most readings run 10 to 20 minutes for a focused topic. The
            $1 intro covers the first 5 minutes, after which the
            advisor&apos;s posted rate applies. If the rapport
            doesn&apos;t click in those first 5 minutes, end the call —
            no payment beyond the $1. Try a different advisor; the intro
            applies to each new one you try.
          </p>
          <p>
            If you&apos;d like a deeper look at what makes Keen worth
            your time before you start a reading, our{' '}
            <Link href="/love-psychic-services/keen-review">
              full editorial Keen review
            </Link>{' '}
            covers pricing, how to choose an advisor, pros and cons, and
            real screenshots from the platform.
          </p>
        </section>

        {/* ── FAQ ────────────────────────────────────────────────────── */}
        <section className="bg-gray-50 px-4">
          <div className="max-w-3xl mx-auto">
            <CommercialFAQ />
          </div>
        </section>

        {/* ── FINAL CTA ──────────────────────────────────────────────── */}
        <section className="max-w-3xl mx-auto px-4 py-12 md:py-16">
          <div className="bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-3xl p-8 md:p-10 text-center shadow-xl">
            <p className="text-sm font-semibold tracking-wide uppercase text-purple-100 mb-3">
              Try Keen
            </p>
            <p className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Real psychics.
              <br />
              5 minutes for $1.
            </p>
            <p className="text-purple-50 max-w-md mx-auto mb-6">
              Top-rated love advisors are available now. Pick one, try
              them for $1, and decide for yourself.
            </p>
            <AffiliateCTA
              offer="keen"
              placement="commercial_final_cta"
              className="inline-block bg-white text-purple-700 hover:bg-gray-50 font-bold px-8 py-4 rounded-xl text-lg shadow-lg transition-colors"
            >
              See top-rated psychics →
            </AffiliateCTA>
            <p className="text-xs text-purple-100 mt-4 opacity-90">
              18+ · For entertainment purposes · No subscription · Cancel
              anytime
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
        label="Try Keen — 5 min for $1"
        subLabel="Top-rated love psychics · available now"
        placement="commercial_mobile_sticky"
      />
    </>
  );
}
