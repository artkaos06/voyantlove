import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateCTA from '@/components/en/AffiliateCTA';
import AffiliateDisclosure from '@/components/en/AffiliateDisclosure';
import Screenshot from '@/components/en/Screenshot';

// Keen review — Tier 2 review page, primary launch target for paid traffic.
//
// Structure follows the editorial-review pattern that survives Google's
// affiliate policy filter and converts cold traffic:
//   - Intro + above-the-fold disclosure
//   - What is Keen (founding, ownership, scale)
//   - How it works (sign-up, browsing, sessions)
//   - Pricing breakdown
//   - Best for / not for
//   - First-session expectations
//   - How to choose an advisor
//   - Pros / cons
//   - Verdict + final CTA
//
// All affiliate links route through <AffiliateCTA /> so the gclid is
// stamped onto the click-out URL and the conversion can be attributed back
// to Google Ads via the postback bridge.

export const metadata: Metadata = {
  title: 'Keen review (2026): is the love psychic platform worth it?',
  description:
    'In-depth review of Keen — the longest-running online psychic platform. Pricing, advisor quality, pros and cons, and who should (and shouldn\'t) use it.',
  alternates: {
    canonical:
      'https://www.lovepsychicguide.com/love-psychic-services/keen-review',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'Service',
    name: 'Keen',
    provider: {
      '@type': 'Organization',
      name: 'Keen.com (Ingenio LLC)',
      url: 'https://www.keen.com',
    },
    serviceType: 'Online psychic reading service',
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '4.4',
    bestRating: '5',
    worstRating: '1',
  },
  author: {
    '@type': 'Organization',
    name: 'LovePsychicGuide',
    url: 'https://www.lovepsychicguide.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'LovePsychicGuide',
  },
};

export default function KeenReviewPage() {
  return (
    <article className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      {/* Hero */}
      <header className="max-w-3xl mx-auto px-4 pt-12 pb-6">
        <div className="text-sm text-gray-500 mb-3">
          <Link href="/" className="hover:text-purple-700">
            Home
          </Link>{' '}
          /{' '}
          <Link
            href="/love-psychic-services"
            className="hover:text-purple-700"
          >
            Services
          </Link>{' '}
          / <span className="text-gray-700">Keen review</span>
        </div>
        <p className="text-sm font-semibold tracking-wide uppercase text-purple-600 mb-3">
          In-depth review
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          Keen review (2026): is the love psychic platform worth it?
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Keen has been online since 1999, which makes it one of the few
          psychic platforms with more than two decades of operating history.
          That alone deserves attention. Here&apos;s what you actually get for
          your money, and the trade-offs we noticed when we tested love
          advisors on the platform.
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 mb-6">
          <span>
            <strong className="text-gray-900">Our rating:</strong> 4.4 / 5
          </span>
          <span>
            <strong className="text-gray-900">Pricing:</strong> $1.99–$50/min
          </span>
          <span>
            <strong className="text-gray-900">Intro offer:</strong>{' '}
            5 minutes for $1*
          </span>
        </div>

        <AffiliateDisclosure variant="banner" />
      </header>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-4 py-8 prose prose-purple prose-lg max-w-none">
        {/* Hero screenshot — Keen homepage / brand context */}
        <Screenshot
          src="/images/keen/homepage.png"
          alt="Keen.com homepage — &ldquo;Real answers from trusted psychics&rdquo;"
          caption="Keen.com homepage. The interface leads with a question prompt — type what you're dealing with and the platform matches you to relevant advisors."
        />

        {/* TL;DR */}
        <section className="bg-purple-50 border-l-4 border-purple-400 p-5 rounded-r-md not-prose mb-10">
          <p className="font-bold text-purple-900 mb-2">In short</p>
          <p className="text-purple-900 leading-relaxed text-sm">
            Keen is a marketplace, not a service — thousands of independent
            advisors set their own rates and compete on rating, specialty, and
            reviews. For love and relationship questions specifically, the
            depth of advisor specialization (clairvoyants, empaths, tarot
            readers, dream interpreters) is one of the strongest on the
            market. Pay-per-minute pricing is the main downside; budget caps
            are essential. New-user introductory pricing — currently{' '}
            <strong>5 minutes for $1</strong> with each new advisor — keeps
            the cost of testing fit low.
          </p>
        </section>

        <h2>What is Keen?</h2>
        <p>
          Keen.com launched in 1999, originally as a general advice
          marketplace. Over the past two decades it has narrowed its identity
          to live psychic, tarot, astrology, and spiritual readings — with
          love and relationship advice being its most populated category.
          Since 2007 it has been part of <strong>Ingenio LLC</strong>, the
          parent company that also owns Kasamba and Psychic Source. Ingenio
          is privately held, headquartered in San Francisco, and has been one
          of the longest-running operators in the space.
        </p>
        <p>
          The platform&apos;s scale is its main differentiator. At the time
          of writing there are several thousand active advisors, including
          long-tenured profiles with a decade or more of session history on
          the platform. For a niche question — say, dream interpretation
          specifically about an ex, or twin-flame guidance — you can usually
          find a specialist rather than getting routed to whichever generalist
          happens to be online.
        </p>

        <h2>How Keen works</h2>
        <p>
          Sign-up is free. Once you have an account you can browse the advisor
          directory, filtered by category (Love &amp; Relationships, Destiny
          and Life Path, Family and Friends, Money and Prosperity, Career and
          Work) plus subspecialties like Psychic Mediums, Otherworld
          Connections, Dream Interpretation, and Pet Psychics. Each advisor
          card shows rating, total readings since they joined the platform,
          and current availability — and importantly, Keen surfaces one{' '}
          <em>Highlighted Review</em> per advisor algorithmically, which
          functions as a quick credibility check before you commit any time.
        </p>
        <p>
          One detail worth flagging that&apos;s easy to miss: regular
          advisors keep continuity across sessions. The first author of a
          5-star review on a profile we tested put it well: &ldquo;She
          remembers details from our previous conversations which makes the
          experience feel personal and thoughtful.&rdquo; If you find an
          advisor whose readings work for you, the relationship deepens with
          re-use rather than restarting cold each time.
        </p>
        <p>
          Sessions happen in three formats:
        </p>
        <ul>
          <li>
            <strong>Live phone:</strong> the platform places the call to
            whatever number you provide, no caller-ID exposure either way.
          </li>
          <li>
            <strong>Live chat:</strong> text-based, useful when privacy is a
            concern (no audio in the room) or when you want to scroll back
            through what was said.
          </li>
          <li>
            <strong>Mail readings:</strong> a written response delivered over
            hours rather than real-time. Less common; some advisors don&apos;t
            offer this.
          </li>
        </ul>
        <p>
          You pay per minute at the advisor&apos;s posted rate. New users
          get an introductory promotion — at the time of writing,{' '}
          <strong>5 minutes for $1</strong> with each new advisor. The
          promotion shows up as a discounted rate badge on each advisor card
          (their original per-minute price crossed out, replaced by the
          intro deal). It&apos;s a deliberately generous trial window that
          lets you confirm rapport before any real money changes hands. If
          the energy doesn&apos;t click in those first few minutes, end the
          session. There&apos;s no penalty.
        </p>

        <Screenshot
          src="/images/keen/advisor-browse.png"
          alt="Keen advisor browse — Love & Relationships category showing 6 advisor cards"
          caption="The advisor grid. Each card surfaces rating, total readings since joining (e.g. 79,688 readings since 2005 for Gina Marie), the introductory '5 minutes for $1' badge, and live availability."
        />

        {/* Mid-CTA */}
        <div className="not-prose my-10 p-6 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl">
          <p className="font-semibold text-gray-900 mb-2">
            Want to see for yourself?
          </p>
          <p className="text-sm text-gray-700 mb-4">
            Browse the love &amp; relationship advisors on Keen — new users
            get 5 minutes for $1 with each new advisor.
          </p>
          <AffiliateCTA
            offer="keen"
            placement="mid_review"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-5 py-3 rounded-lg transition-colors"
          >
            Browse Keen love advisors →
          </AffiliateCTA>
        </div>

        <h2>Pricing breakdown</h2>
        <p>
          Posted rates range from $1.99/min on the low end (often newer
          advisors building reviews) to $50/min for top-tier specialists with
          long waitlists. Most love advisors fall in the $2.99 to $7.99 per
          minute band based on a sample of currently-available advisors —
          rates that look like &ldquo;$6.99/min&rdquo; or &ldquo;$2.99/min&rdquo;
          on each card. A 15-minute session at $6.99/min, after the intro
          deal&apos;s first 5 minutes for $1, costs roughly $71.
        </p>
        <p>
          Compared to in-person psychic readings, which typically run
          $150–$300 per hour and require travel, Keen is meaningfully
          cheaper for the same time on the clock. Compared to other online
          platforms, pricing is competitive but not the cheapest available —
          you&apos;re paying for the depth of the advisor pool and the rating
          history that helps you screen quality.
        </p>
        <p>
          One important behavior: Keen lets you set a per-call dollar limit.
          Use it. Without a cap, the per-minute meter has a way of inducing
          one of two opposite behaviors — either rushing through your
          questions and not hearing the answer, or losing track of time. A
          $50 or $75 cap on your first session forces you to focus and
          protects against the bill creeping past what you intended to spend.
        </p>

        <Screenshot
          src="/images/keen/advisor-profile.png"
          alt="Keen advisor profile page — Briaz, 4.85 rating, 439 reviews"
          caption="A typical advisor profile. Rating breakdown, total ratings, total readings, current availability, and the intro &lsquo;5 minutes for $1&rsquo; badge are all visible above the fold — alongside a Highlighted Review pulled from past clients as a quick credibility check."
        />

        <h2>Best for</h2>
        <ul>
          <li>
            <strong>Specific love questions</strong> — &ldquo;is he going to
            reach out,&rdquo; &ldquo;does she still have feelings,&rdquo;
            &ldquo;is this person aligned with my long-term path.&rdquo;
            Advisor depth helps you find someone whose wheelhouse matches.
          </li>
          <li>
            <strong>Late-night moments of doubt</strong> — psychic platforms
            of any size can&apos;t guarantee 24/7 advisor availability, but
            Keen&apos;s scale means there is almost always someone qualified
            online when you need them.
          </li>
          <li>
            <strong>People in long-distance / remote situations</strong>{' '}
            who don&apos;t have a trusted local psychic and want to avoid
            walking into an unknown storefront.
          </li>
          <li>
            <strong>Privacy-conscious users</strong> — sessions happen via
            the platform&apos;s phone bridge or in-app chat, so neither side
            sees the other&apos;s number or address.
          </li>
          <li>
            <strong>Trying multiple advisors before committing.</strong>{' '}
            The free-three-minutes-per-new-advisor model is designed exactly
            for this; it&apos;s reasonable to test two or three before you
            settle on one.
          </li>
        </ul>

        <h2>Not the right fit if</h2>
        <ul>
          <li>
            You&apos;re looking to be intellectually convinced that psychics
            are real. The platform isn&apos;t built to debate epistemology
            with skeptics. Either the format works for you as a tool for
            reflection or it doesn&apos;t.
          </li>
          <li>
            You&apos;re in acute mental-health crisis. A psychic reading is
            not a substitute for talking to a licensed therapist or, in an
            emergency, a crisis line. Some advisors are explicit about
            redirecting users in this state, but not all are.
          </li>
          <li>
            You&apos;re hoping for a guaranteed prediction with a specific
            timeline. No reputable advisor will say &ldquo;he will text you
            on June 14th.&rdquo; If they do, that itself is a red flag.
          </li>
          <li>
            Pay-per-minute models give you anxiety. The meter ticking
            in the background can compress how you ask questions. Some
            people simply do better with fixed-fee structures, which Keen
            doesn&apos;t offer for live readings.
          </li>
        </ul>

        <h2>What to expect in your first session</h2>
        <p>
          Pick an advisor whose specialty matches your question — for love
          topics specifically, look at the &ldquo;Love &amp; Relationships&rdquo;
          category and filter by rating (4.5 stars and above is a reasonable
          floor). Read the most recent five to ten reviews, paying attention
          to specifics rather than generic praise: someone writing &ldquo;she
          told me my partner was a Gemini and she was right&rdquo; signals a
          different kind of session than &ldquo;she made me feel heard.&rdquo;
        </p>
        <p>
          Have your question prepared in advance, written down if possible.
          Vague questions get vague answers. Instead of &ldquo;will my ex
          come back,&rdquo; try something more open: &ldquo;tell me what you
          see about my ex&apos;s current state of mind regarding me.&rdquo;
          The first phrasing presupposes a yes/no answer; the second invites
          actual perception.
        </p>
        <p>
          Use the introductory minutes deliberately. State your topic, give
          minimal context, and listen to whether the advisor&apos;s
          response has texture and specificity or feels generic. If it
          feels generic, end the call without paying. If it feels specific
          and resonates, continue and budget yourself fifteen to twenty
          minutes max.
        </p>
        <p>
          Take notes during the session. The most consistent feedback from
          first-time users is that they remember the emotional tone of the
          reading vividly but lose the actual specifics within twenty-four
          hours. Specifics are what you can actually verify or reflect on
          later.
        </p>

        <h2>How to choose an advisor</h2>
        <p>
          A few quick filters cut the directory down to the actually-useful
          advisors:
        </p>
        <ol>
          <li>
            <strong>Rating floor.</strong> Don&apos;t settle below 4.5 stars
            unless you&apos;re intentionally looking for a newer advisor at
            a lower rate.
          </li>
          <li>
            <strong>Tenure.</strong> Long-tenured advisors (multi-year
            histories on the platform) tend to have more consistent quality.
            Newer advisors can be excellent — but variance is higher.
          </li>
          <li>
            <strong>Specialty match.</strong> If your question is about
            interpreting a specific dream, find a dream-interpretation
            specialist; they exist on Keen. If it&apos;s about reading a
            person&apos;s current intentions, look for clairvoyant or empath
            in their bio rather than a tarot-only specialist.
          </li>
          <li>
            <strong>Price-to-rating sanity.</strong> Top-rated does not always
            mean expensive. There are 4.7-star love advisors at $5.99/min and
            4.6-star advisors at $19.99/min. The price often reflects demand
            and personal branding more than skill differential.
          </li>
          <li>
            <strong>Sample audio when available.</strong> Listening to two
            minutes of someone&apos;s actual voice tells you more about
            whether you&apos;ll click with them than ten minutes of reading
            their bio.
          </li>
        </ol>

        <Screenshot
          src="/images/keen/categories.png"
          alt="Keen Explore by Topics categories and Psychic Readings subspecialties"
          caption="Keen organizes browsing by both top-level topics (Love & Relationships, Destiny and Life Path, Family and Friends, Money and Prosperity, Career and Work) and reading subspecialties — Psychic Mediums, Otherworld Connections, Dream Interpretation, Pet Psychics, and more. The depth lets you find a specialist whose framework matches your question."
        />

        <h2>Pros and cons</h2>
        <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <p className="font-bold text-green-900 mb-3">Pros</p>
            <ul className="space-y-2 text-sm text-green-900">
              <li>✓ 25+ years operating history, financial stability</li>
              <li>✓ Largest depth of love-specific advisors in the space</li>
              <li>✓ Three free minutes per new advisor — real trial</li>
              <li>✓ Per-call dollar cap protects against runaway bills</li>
              <li>✓ Multiple session formats (phone, chat, written)</li>
              <li>✓ Rating + review history visible per advisor</li>
              <li>✓ Decent mobile apps on iOS and Android</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-5">
            <p className="font-bold text-red-900 mb-3">Cons</p>
            <ul className="space-y-2 text-sm text-red-900">
              <li>✗ Pay-per-minute pricing creates time pressure</li>
              <li>✗ Quality varies wildly between advisors</li>
              <li>✗ No money-back guarantee on individual sessions</li>
              <li>
                ✗ Some advisors push longer sessions than necessary
              </li>
              <li>✗ No fixed-fee package option for live readings</li>
              <li>✗ Sign-up flow encourages immediate first session</li>
            </ul>
          </div>
        </div>

        <h2>Verdict</h2>
        <p>
          Keen earns a 4.4 / 5 from us. The depth of love-specific advisors
          and the operating-history credibility put it at the top of the
          shortlist for online love readings. The pay-per-minute model and
          the variance in advisor quality keep it from a perfect score —
          but those are arguably structural to the entire live-reading
          format, not Keen-specific failings.
        </p>
        <p>
          Our honest recommendation for a first-time user: pick a love
          advisor rated 4.5 or higher in the $5–$10 per minute range, set a
          $50 cap on your first call, and use the intro &lsquo;5 minutes for
          $1&rsquo; window to test
          fit before committing. If the rapport works, twenty minutes is
          usually enough for one focused question. If it doesn&apos;t, end
          the call without payment and try a different advisor next time.
        </p>

        {/* Final CTA */}
        <div className="not-prose my-12 p-8 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-2xl text-center">
          <p className="text-2xl font-bold mb-3">Ready to try a reading?</p>
          <p className="mb-6 opacity-90">
            Browse Keen&apos;s love &amp; relationship advisors — first three
            minutes free with each.
          </p>
          <AffiliateCTA
            offer="keen"
            placement="end_review"
            className="inline-block bg-white text-purple-700 hover:bg-gray-50 font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Browse Keen love advisors →
          </AffiliateCTA>
          <p className="mt-4 text-xs opacity-75">
            Affiliate link · We may earn a commission · 18+ · For
            entertainment purposes
          </p>
        </div>

        <hr className="my-10" />

        {/* Related */}
        <div className="not-prose grid sm:grid-cols-2 gap-4">
          <Link
            href="/will-he-come-back"
            className="block p-5 border border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-sm transition"
          >
            <p className="text-xs uppercase tracking-wide text-purple-600 font-semibold mb-1">
              Related guide
            </p>
            <p className="font-bold text-gray-900">
              Will he come back to me? Honest signs &amp; statistics →
            </p>
          </Link>
          <Link
            href="/is-my-ex-thinking-of-me"
            className="block p-5 border border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-sm transition"
          >
            <p className="text-xs uppercase tracking-wide text-purple-600 font-semibold mb-1">
              Related guide
            </p>
            <p className="font-bold text-gray-900">
              Is my ex thinking of me? What the signals actually mean →
            </p>
          </Link>
        </div>
      </div>
    </article>
  );
}
