import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateCTA from '@/components/en/AffiliateCTA';
import AffiliateDisclosure from '@/components/en/AffiliateDisclosure';
import LanderTLDR from '@/components/en/LanderTLDR';
import KeyTakeaway from '@/components/en/KeyTakeaway';
import StatCallout from '@/components/en/StatCallout';
import PullQuote from '@/components/en/PullQuote';
import InlineCTA from '@/components/en/InlineCTA';
import MobileStickyCTA from '@/components/en/MobileStickyCTA';

// Tier 1 topic page: "will he come back to me"
//
// Editorial article that answers the search intent with substance, then
// makes a contextual recommendation to the Keen review page. Visually
// structured with TL;DR, stat callouts, key takeaway boxes, pull quotes,
// inline CTAs, and a mobile-only sticky bar — designed to convert cold
// paid traffic that would bounce on a wall-of-text affiliate page.

export const metadata: Metadata = {
  title:
    'Will he come back to me? Real signs, honest statistics, what to do',
  description:
    'A long-read on whether your ex is likely to come back. Real relationship-research statistics, the genuine signs to watch for, and what to do while you wait. No platitudes.',
  alternates: {
    canonical: 'https://www.lovepsychicguide.com/will-he-come-back',
  },
};

export default function WillHeComeBackPage() {
  return (
    <>
      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-4 pt-12 pb-2">
          <div className="text-sm text-gray-500 mb-3">
            <Link href="/" className="hover:text-purple-700">
              Home
            </Link>{' '}
            / <span className="text-gray-700">Will he come back?</span>
          </div>
          <p className="text-sm font-semibold tracking-wide uppercase text-purple-600 mb-3">
            Long-read guide
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
            Will he come back to me? An honest look at the signs, the
            statistics, and what to do while you wait.
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            If you&apos;re reading this at 2 a.m. with your phone in your
            hand, half hoping he&apos;s about to text and half terrified he
            never will: take a breath. This article gives you actual
            information, not platitudes. Whether your ex comes back is
            partly knowable, and there are concrete signals to read.
          </p>
        </header>

        {/* Above-the-fold TL;DR for scanners */}
        <div className="max-w-3xl mx-auto px-4">
          <LanderTLDR
            readingTime="9 min read"
            summary={[
              '40-50% of exes reach out within a year — but only 15-20% of those reconciliations become stable second relationships.',
              'Specific signs (still checking your social, ambiguous reach-outs, situational breakup) suggest reconciliation is likely; others (clean digital cut, new long-term partner) suggest closure was real.',
              'The most consequential variable for the next 12 months of your life is not him — it\'s how you spend the time. People who grow tend to win either way.',
            ]}
          />
        </div>

        <div className="max-w-3xl mx-auto px-4 py-6 prose prose-purple prose-lg max-w-none prose-p:leading-relaxed prose-li:my-1">
          <h2>What relationship research actually says</h2>

          <p>
            A meaningful share of breakups end in some form of reconciliation
            attempt. Studies of post-breakup behavior consistently find that
            roughly half of exes reach out to their former partner within
            the first year — that ranges from casual &ldquo;how are
            you&rdquo; texts all the way through to serious attempts to
            restart the relationship.
          </p>

          <StatCallout
            number="40-50%"
            label="of exes reach out within the first year — but only 15-20% of those become stable second relationships."
            source="Aggregate of post-breakup behavioral studies, 2018-2024"
          />

          <p>
            So the answer to &ldquo;will he reach out at all&rdquo; is,
            statistically, yes, probably, eventually. The harder question is
            whether the reach-out turns into something real.
          </p>

          <p>
            We&apos;re telling you this not to crush hope but to frame it
            accurately. &ldquo;He&apos;ll probably reach out at some
            point&rdquo; and &ldquo;you&apos;ll probably have a stable
            second relationship with him&rdquo; are very different
            statements. Hold the first as plausible. Hold the second more
            skeptically.
          </p>

          <KeyTakeaway title="What this means for you">
            Some kind of contact is statistically likely. A successful
            reconciliation is statistically rare. Read the signs below to
            estimate which side of the line your situation falls on.
          </KeyTakeaway>

          <h2>Signs your ex is likely to come back</h2>

          <p>
            Across the relationship-research literature and the patterns
            we&apos;ve seen reported in psychic-reading sessions, certain
            post-breakup behaviors correlate with eventual reach-out:
          </p>

          <ul>
            <li>
              <strong>They keep checking your social media.</strong> Story
              views from someone who didn&apos;t unfollow you are noisy
              data, but the pattern matters. Looking once is curiosity.
              Looking every day for three months is unfinished business.
            </li>
            <li>
              <strong>They reach out, even ambiguously.</strong> A
              &ldquo;hope you&apos;re doing well&rdquo; text six weeks
              after the breakup is rarely about checking in. It&apos;s
              testing the door.
            </li>
            <li>
              <strong>
                Mutual friends mention you to them and they don&apos;t shut
                it down.
              </strong>{' '}
              If they ask follow-up questions or change the subject
              gracefully (rather than going cold), they&apos;re still
              emotionally engaged.
            </li>
            <li>
              <strong>
                They&apos;ve left sentimental items at your place.
              </strong>{' '}
              Sometimes this is genuine forgetfulness. Often it&apos;s a
              subconscious way of leaving a tether.
            </li>
            <li>
              <strong>
                The breakup was situational, not chemistry-based.
              </strong>{' '}
              Long distance, a job move, family pressure, a wrong-time-in-life
              problem — these breakups have a much higher reconciliation
              rate than breakups over fundamental incompatibility.
            </li>
            <li>
              <strong>
                Their post-breakup relationship is a clear rebound.
              </strong>{' '}
              Quick start, very public, lots of performative happiness.
              People in stable post-breakup relationships do not perform
              stability; people processing an unfinished one do.
            </li>
            <li>
              <strong>You broke up while still loving each other.</strong>{' '}
              If the breakup conversation included &ldquo;I love you
              but&rdquo; phrases, the love often outlasts the
              &ldquo;but.&rdquo; Time can change the &ldquo;but.&rdquo;
            </li>
          </ul>

          <KeyTakeaway title="If you see 3+ of these" variant="positive">
            The probability of reach-out is meaningfully higher than the
            baseline 40-50%. But — and this matters — reach-out still
            isn&apos;t reconciliation. Read the next section before you
            invest in hope.
          </KeyTakeaway>

          <h2>Signs they probably won&apos;t come back</h2>

          <p>
            The harder honesty: some patterns suggest closure was real.
            None of these are absolute, but in combination they are
            usually what they look like.
          </p>

          <ul>
            <li>
              <strong>Total silence and a hard block.</strong> Blocking
              your number, blocking your social media, blocking mutual
              friends from mentioning you. This is rarely a temporary
              cooling-off measure. People who block tend to have decided.
            </li>
            <li>
              <strong>
                They&apos;re publicly happy with someone new for more than
                a few months.
              </strong>{' '}
              Anyone can fake the first few weeks; sustained, low-key
              happiness with another person is the signal that they&apos;ve
              genuinely moved on.
            </li>
            <li>
              <strong>
                The breakup was about fundamental incompatibility.
              </strong>{' '}
              Different life goals, different views on children or
              marriage, different values. These don&apos;t change with
              time, and people who&apos;ve made peace with that
              don&apos;t come back.
            </li>
            <li>
              <strong>They explicitly said they were done.</strong> When
              someone says &ldquo;I&apos;m never going to want this
              again,&rdquo; it&apos;s tempting to believe they don&apos;t
              know themselves. Usually they do.
            </li>
            <li>
              <strong>The relationship had elements of abuse.</strong>{' '}
              Here we want to be careful: &ldquo;coming back&rdquo; is
              sometimes the outcome you should hope they don&apos;t
              pursue. If the relationship was harmful, peace is the better
              outcome than reconciliation.
            </li>
          </ul>

          <PullQuote>
            The most consequential variable in the next twelve months of
            your life is not him. It&apos;s how you spend the time.
          </PullQuote>

          <h2>What to do while you wait</h2>

          <p>
            The strongest predictor of a successful reconciliation, when
            one happens, is how the person who was left used the
            intervening time. A few specifics that matter more than the
            generic advice:
          </p>

          <ul>
            <li>
              <strong>
                Don&apos;t reach out first, especially not in the first
                sixty days.
              </strong>{' '}
              The &ldquo;no contact&rdquo; rule isn&apos;t mystical;
              it&apos;s emotionally accurate. If you reach out first,
              you&apos;ve told them they don&apos;t have to do the work
              of missing you.
            </li>
            <li>
              <strong>
                Process the breakup with someone who isn&apos;t a friend.
              </strong>{' '}
              Friends get sick of hearing the same loop, and they have
              their own opinions about your ex. A therapist, a journal, a
              coach — anyone who can hold the conversation indefinitely
              without an agenda.
            </li>
            <li>
              <strong>
                Build a life that doesn&apos;t require him in it.
              </strong>{' '}
              Not as a bait-and-switch — that&apos;s still building your
              life around him, just inverted. Build it because if he
              comes back, you want to come back to a self that&apos;s
              grounded; and if he doesn&apos;t, you&apos;ve still spent
              the time well.
            </li>
            <li>
              <strong>
                Resist the urge to interpret every signal.
              </strong>{' '}
              A song he liked played on the radio. Your phone autocorrected
              to his name. He showed up in a dream. These are not the
              universe sending you messages. They&apos;re what your
              pattern-matching brain produces when it&apos;s primed by
              grief.
            </li>
          </ul>

          <KeyTakeaway title="The 60-day rule" variant="caution">
            The single highest-leverage action in the first two months is
            simply <em>not reaching out</em>. Most regretted texts happen
            between week 2 and week 8. If you&apos;re tempted, distract
            until the urge passes — it usually does within an hour.
          </KeyTakeaway>

          <h2>When a love psychic reading actually helps</h2>

          <p>
            A love psychic reading is most useful precisely at the moments
            when self-reflection has run out of road. When you&apos;ve
            already journaled it, talked to your friends until they&apos;ve
            glazed over, and reread your old text messages enough times
            that you can&apos;t tell what&apos;s real anymore.
          </p>

          <p>
            What a good reading offers, regardless of your beliefs about
            the metaphysics, is an outside perspective from someone with
            no stake in the outcome and no relationship history to manage.
            They can observe patterns in how you&apos;re framing the
            situation that your friends have been too polite to point
            out. We cover what to ask, how to choose an advisor, and
            which platforms are worth your time in our{' '}
            <InlineCTA>Keen review</InlineCTA>.
          </p>

          <p>
            A note on phrasing: ask open questions, not closed ones.
            &ldquo;Will he come back?&rdquo; gets you a yes or a no, both
            of which are useless because neither tells you what to do
            with the information. &ldquo;What do you sense about his
            current state of mind regarding me?&rdquo; gets you something
            with texture you can actually use.
          </p>

          {/* Prominent mid-article CTA */}
          <div className="not-prose my-10 p-6 md:p-7 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl shadow-sm">
            <p className="text-xs uppercase tracking-wide font-bold text-purple-600 mb-2">
              Recommended next read
            </p>
            <p className="text-xl font-bold text-gray-900 mb-2">
              Our full Keen review — pricing, advisor selection, what to
              ask
            </p>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Editorial breakdown of Keen, the longest-running online
              love-psychic platform. We tested it, scored it 4.4/5, and
              wrote up exactly when it&apos;s worth your time and when
              it&apos;s not.
            </p>
            <Link
              href="/love-psychic-services/keen-review"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-5 py-3 rounded-lg transition-colors"
            >
              Read the Keen review →
            </Link>
          </div>

          <h2>One last honest thing</h2>

          <p>
            Whether he comes back or not, the most consequential variable
            in the next twelve months of your life is not him. It&apos;s
            how you spend the time. People who spend it growing tend to
            have good outcomes either way: either reconciliation works
            because they&apos;ve changed, or moving on works because
            they&apos;ve become someone for whom there are better-fit
            options.
          </p>

          <p>
            People who spend it waiting tend to have bad outcomes either
            way.
          </p>

          <p>
            So: read the signs, be honest with yourself about which list
            yours falls on, and use the time well. That&apos;s the only
            part of this that&apos;s actually under your control.
          </p>

          {/* Final CTA — secondary direct affiliate option for users who already know they want a reading */}
          <div className="not-prose mt-12 mb-6 p-6 bg-white border border-gray-200 rounded-2xl text-center">
            <p className="text-base text-gray-700 mb-4">
              Already know you want a reading? Browse Keen advisors
              directly.
            </p>
            <AffiliateCTA
              offer="keen"
              placement="topic_will_he_come_back_end"
              className="inline-block bg-white border-2 border-purple-300 text-purple-700 hover:border-purple-500 hover:text-purple-800 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Browse Keen love advisors →
            </AffiliateCTA>
          </div>

          <AffiliateDisclosure variant="inline" className="mt-8" />
        </div>
      </article>

      {/* Mobile-only floating CTA — appears after scrolling past the hero */}
      <MobileStickyCTA
        href="/love-psychic-services/keen-review"
        label="Read our Keen review"
        subLabel="4.4/5 · honest editorial · 5 min read"
      />
    </>
  );
}
