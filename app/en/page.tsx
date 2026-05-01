import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateDisclosure from '@/components/en/AffiliateDisclosure';

// Home page for lovepsychicguide.com.
//
// Strategy: this is NOT a thin landing page. It's an editorial entry point
// into the site. The home page introduces the site's editorial premise,
// surfaces the most useful pages, and guides readers to either a topic page
// (intent-driven) or the services hub (commercial intent).
//
// We intentionally don't put a giant "Try Keen now" CTA above the fold —
// that's the thin-affiliate pattern Google penalizes. Instead, the home
// page reads like the front page of a small editorial site.

export const metadata: Metadata = {
  title:
    'Honest reviews of love & relationship psychic services',
  description:
    'Independent guides and reviews of online love psychic reading services. We test the platforms, compare pricing, and recommend the ones worth your time. Reader-supported, no fluff.',
  alternates: {
    canonical: 'https://www.lovepsychicguide.com',
  },
};

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 via-white to-pink-50 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-wide uppercase text-purple-600 mb-4">
            Independent. Reader-supported. No fluff.
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Honest reviews of love &amp; relationship psychic services.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            We test the platforms, compare pricing, and write the reviews we
            wished existed when we first searched for clarity about a
            relationship. Start here if you&apos;re trying to figure out
            whether a love reading is right for you — and which service is
            actually worth your time.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/love-psychic-services/keen-review"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Read our Keen review →
            </Link>
            <Link
              href="/love-psychic-services"
              className="bg-white text-purple-700 border border-purple-200 hover:border-purple-400 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              See all services
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial promise */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-purple-600 text-2xl mb-2">✦</div>
            <h2 className="font-bold text-lg mb-2">We pay our own way</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              When we test a service, we sign up like any other user — no
              comped accounts, no special advisor pairings. The reviews
              describe the actual experience.
            </p>
          </div>
          <div>
            <div className="text-purple-600 text-2xl mb-2">✦</div>
            <h2 className="font-bold text-lg mb-2">We say what we think</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Cons are as visible as pros. If a service has shady billing,
              pushy upsells, or wildly inconsistent advisor quality, that goes
              in the review.
            </p>
          </div>
          <div>
            <div className="text-purple-600 text-2xl mb-2">✦</div>
            <h2 className="font-bold text-lg mb-2">We&apos;re reader-supported</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              If you sign up for a service through one of our links we may
              earn a commission. It doesn&apos;t change what we recommend, and
              we disclose it on every page.
            </p>
          </div>
        </div>
      </section>

      {/* Topic guides — the editorial core */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Common questions, real answers
          </h2>
          <p className="text-gray-600 text-center mb-10">
            The questions people actually search when a relationship feels
            stuck. Each guide is a long-read, not a sales pitch.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/will-he-come-back"
              className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition"
            >
              <h3 className="font-bold text-lg mb-2 text-gray-900">
                Will he come back to me?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                What relationship research actually says about how often exes
                return — and the specific signs that suggest it&apos;s likely
                versus unlikely in your situation.
              </p>
              <p className="text-purple-600 text-sm font-semibold mt-3">
                Read the guide →
              </p>
            </Link>

            <Link
              href="/is-my-ex-thinking-of-me"
              className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition"
            >
              <h3 className="font-bold text-lg mb-2 text-gray-900">
                Is my ex thinking of me?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Why this question is so persistent, what psychology says about
                post-breakup thought patterns, and the signals that they
                probably are (or definitely aren&apos;t) thinking of you.
              </p>
              <p className="text-purple-600 text-sm font-semibold mt-3">
                Read the guide →
              </p>
            </Link>

            <Link
              href="/twin-flame-signs"
              className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition"
            >
              <h3 className="font-bold text-lg mb-2 text-gray-900">
                Twin flame signs
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Honest assessment of what twin flame signs actually mean,
                the patterns that suggest a real connection vs. confirmation
                bias, and how to get clarity.
              </p>
              <p className="text-purple-600 text-sm font-semibold mt-3">
                Read the guide →
              </p>
            </Link>

            <Link
              href="/dream-about-ex-meaning"
              className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition"
            >
              <h3 className="font-bold text-lg mb-2 text-gray-900">
                Dream about ex meaning
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The five common dream types about exes, what each one
                actually means, and what to do with the feeling the morning
                after.
              </p>
              <p className="text-purple-600 text-sm font-semibold mt-3">
                Read the guide →
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Services intro */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Looking for a reading?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          When self-reflection isn&apos;t enough — when the conversation in
          your head keeps looping and you want an outside perspective —
          a love-focused psychic reading can help. We&apos;ve reviewed the
          major online services so you don&apos;t have to gamble on which
          one is worth your time.
        </p>
        <Link
          href="/love-psychic-services"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          See our recommended services →
        </Link>
      </section>

      {/* Footer disclosure */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <AffiliateDisclosure variant="inline" />
      </section>
    </div>
  );
}
