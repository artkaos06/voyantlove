import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateCTA from '@/components/en/AffiliateCTA';
import AffiliateDisclosure from '@/components/en/AffiliateDisclosure';
import LanderTLDR from '@/components/en/LanderTLDR';
import KeyTakeaway from '@/components/en/KeyTakeaway';
import StatCallout from '@/components/en/StatCallout';
import PullQuote from '@/components/en/PullQuote';
import OfferBridge from '@/components/en/OfferBridge';
import MobileStickyCTA from '@/components/en/MobileStickyCTA';

// Tier 1 topic page: "will he come back to me"
//
// Conversion-engineered version. Previous edition fully resolved the
// search query in the article body, which led readers to leave satisfied
// without engaging the affiliate offer. This version preserves curiosity
// gaps, surfaces the $1 introductory offer above the fold, and uses
// direct-affiliate CTAs (skipping the keen-review intermediate funnel).

export const metadata: Metadata = {
  title:
    'Will he come back? Real signs, plus how to get a personalized read',
  description:
    'A short-read on whether your ex is likely to come back, the signs to watch for, and how to get a personalized reading about your specific situation for $1.',
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
            Honest read · 5 min
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
            Will he come back to me? Honest signs — and how to get a real
            answer about your specific situation.
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            If you&apos;re reading this at 2 a.m. with your phone in your
            hand: take a breath. There ARE signs you can read. But the
            signs in any generic article — including this one — can only
            tell you so much, because they don&apos;t know <em>him</em>.
          </p>
        </header>

        <div className="max-w-3xl mx-auto px-4">
          <LanderTLDR
            readingTime="5 min read"
            subtitle="Honest editorial"
            summary={[
              '40-50% of exes reach out within a year, but only 15-20% of those reconciliations become stable. Statistics give you the baseline, not the answer about him.',
              'There are specific signs to read (in their behavior, your shared history, the type of breakup) — we cover the high-signal ones below.',
              'Generic checklists can\'t see your specific situation. For a real read on him, an experienced love psychic can do in 5 minutes what a 2,000-word article can\'t.',
            ]}
            ctaPrompt="Want a real answer about him — not just generic signs?"
            cta={
              <AffiliateCTA
                offer="keen"
                placement="topic_will_he_come_back_tldr"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
              >
                Talk to a love psychic — 5 min for $1 →
              </AffiliateCTA>
            }
            ctaFootnote="New users: 5 minutes for $1 with any new advisor on Keen · 18+"
          />
        </div>

        <div className="max-w-3xl mx-auto px-4 py-6 prose prose-purple prose-lg max-w-none prose-p:leading-relaxed prose-li:my-1">
          <h2>What relationship research actually says</h2>

          <p>
            Roughly half of exes reach out to their former partner within
            the first year. That ranges from casual &ldquo;how are
            you&rdquo; texts to serious attempts to restart the
            relationship.
          </p>

          <StatCallout
            number="40-50%"
            label="of exes reach out within a year — but only 15-20% of those reconciliations become stable second relationships."
            source="Aggregate of post-breakup behavioral studies"
          />

          <p>
            So the answer to &ldquo;will he reach out at all&rdquo; is,
            statistically, probably yes — eventually. The harder
            question, the one that&apos;s actually keeping you up at
            night, is whether <em>he</em> specifically — given how the
            breakup happened, what his attachment pattern looks like,
            who&apos;s currently in his life — will reach out and
            whether it&apos;ll lead to anything real.
          </p>

          <KeyTakeaway title="Why generic stats can't answer your question">
            Statistics describe a population. Your situation is a sample
            of one. The variables that actually matter — his current
            state of mind, his guilt level, his relationship history,
            the specific dynamic between the two of you — are not in any
            dataset.
          </KeyTakeaway>

          <h2>3 signs that suggest yes</h2>

          <ul>
            <li>
              <strong>They keep checking your social media.</strong> A
              single view is curiosity. Daily views for three months is
              unfinished business.
            </li>
            <li>
              <strong>Ambiguous reach-outs.</strong> A &ldquo;hope
              you&apos;re doing well&rdquo; text six weeks after the
              breakup is rarely about checking in. It&apos;s testing
              the door.
            </li>
            <li>
              <strong>The breakup was situational, not chemistry-based.</strong>{' '}
              Long distance, a job move, family pressure — these
              breakups have a much higher reconciliation rate than
              breakups over fundamental incompatibility.
            </li>
          </ul>

          <h2>3 signs that suggest no</h2>

          <ul>
            <li>
              <strong>A clean digital cut.</strong> Blocked, unfollowed,
              photos removed — this isn&apos;t a temporary cooling-off
              measure. People who block tend to have decided.
            </li>
            <li>
              <strong>Sustained happiness with someone new.</strong>{' '}
              Anyone can fake the first few weeks. Quiet, low-key
              contentment with another person at the 3-month mark is
              the signal that they&apos;ve genuinely moved on.
            </li>
            <li>
              <strong>Fundamental incompatibility was the cause.</strong>{' '}
              Different life goals, different views on children or
              marriage. These don&apos;t change with time.
            </li>
          </ul>

          <PullQuote>
            Generic signs are useful — but the only person who can
            actually read <em>him</em> is someone tuned to his energy.
          </PullQuote>

          <OfferBridge
            placement="topic_will_he_come_back_mid"
            eyebrow="When generic isn't enough"
            headline={
              <>
                Stop guessing about him. Get a real read in 5 minutes for
                $1.
              </>
            }
            subtext={
              <>
                Generic signs are noise. The specifics of your situation
                — his state of mind, what&apos;s shifting on his side
                right now — need a real psychic who can read his energy,
                not a checklist. New users on Keen get 5 minutes for $1
                with any new advisor.
              </>
            }
            ctaLabel="Find out what he's really thinking →"
          />

          <h2>The 60-day rule</h2>

          <p>
            The single highest-leverage action in the first two months
            after a breakup is simply <em>not reaching out</em>. Most
            regretted texts happen between week 2 and week 8. If
            you&apos;re tempted, distract until the urge passes — it
            usually does within an hour.
          </p>

          <p>
            The reason is psychological, not mystical: when you reach
            out first, you&apos;ve told them they don&apos;t have to do
            the work of missing you. Their motivation drops, your
            leverage drops with it.
          </p>

          <KeyTakeaway title="If you can't help reaching out" variant="caution">
            That impulse — the one keeping your hand on the phone at 4
            a.m. — is exactly the moment a real reading helps. Five
            minutes with a love specialist often resolves the loop
            faster than three nights of refreshing his Instagram.
          </KeyTakeaway>

          <h2>Why a personalized reading actually helps here</h2>

          <p>
            A psychic reading isn&apos;t about predicting the future
            with a crystal ball. It&apos;s about getting an outside
            perspective from someone with no stake in the outcome and
            no relationship history to manage.
          </p>

          <p>
            The advisors who specialize in love and relationships have
            done thousands of post-breakup readings. They can read
            energy patterns most people can&apos;t — including, often,
            what&apos;s going on for him right now. Whether you accept
            the metaphysics or not, the structured outside-perspective
            is genuinely useful when self-reflection has run out of
            road.
          </p>

          <p>
            Most importantly: it&apos;s a low-friction first step. New
            users on Keen get 5 minutes for $1 with any new advisor.
            That&apos;s less than a coffee, and it&apos;s about your
            specific situation — not generic checklists.
          </p>

          {/* Final affiliate CTA */}
          <div className="not-prose my-10 p-6 md:p-8 bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-2xl text-center shadow-md">
            <p className="text-2xl font-bold mb-3">
              Ready to find out what he&apos;s really thinking?
            </p>
            <p className="text-purple-50 mb-6">
              5 minutes with a love psychic. $1 for new users.
            </p>
            <AffiliateCTA
              offer="keen"
              placement="topic_will_he_come_back_end"
              className="inline-block bg-white text-purple-700 hover:bg-gray-50 font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Talk to a love psychic →
            </AffiliateCTA>
            <p className="mt-4 text-xs text-purple-100 opacity-90">
              5 min for $1 with new advisor · 18+ · for entertainment
              purposes
            </p>
          </div>

          {/* Soft bridge to the editorial review for users who want more before deciding */}
          <p className="text-sm text-gray-600 text-center">
            Want to read more about Keen first?{' '}
            <Link
              href="/love-psychic-services/keen-review"
              className="text-purple-700 underline decoration-purple-300 underline-offset-4 font-semibold"
            >
              Our honest 5-minute Keen review
            </Link>{' '}
            covers pricing, how to choose an advisor, and what to ask.
          </p>

          <AffiliateDisclosure variant="inline" className="mt-12" />
        </div>
      </article>

      <MobileStickyCTA
        affiliateOffer="keen"
        label="Talk to a love psychic"
        subLabel="5 min for $1 · about him specifically"
        placement="topic_will_he_come_back_mobile"
      />
    </>
  );
}
