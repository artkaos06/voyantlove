import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateCTA from '@/components/en/AffiliateCTA';
import AffiliateDisclosure from '@/components/en/AffiliateDisclosure';
import LanderTLDR from '@/components/en/LanderTLDR';
import KeyTakeaway from '@/components/en/KeyTakeaway';
import PullQuote from '@/components/en/PullQuote';
import OfferBridge from '@/components/en/OfferBridge';
import MobileStickyCTA from '@/components/en/MobileStickyCTA';

// Tier 1 topic page: "is my ex thinking of me"
//
// Conversion-engineered version with curiosity-preserving framing,
// $1 offer in TLDR, and direct-affiliate CTAs.

export const metadata: Metadata = {
  title:
    'Is my ex thinking of me? Real signs + how to get a personalized read',
  description:
    'A short-read on the real signs your ex is thinking about you, what they actually mean, and how to get a personalized reading about your specific ex for $1.',
  alternates: {
    canonical: 'https://www.lovepsychicguide.com/is-my-ex-thinking-of-me',
  },
};

export default function IsMyExThinkingOfMePage() {
  return (
    <>
      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-4 pt-12 pb-2">
          <div className="text-sm text-gray-500 mb-3">
            <Link href="/" className="hover:text-purple-700">
              Home
            </Link>{' '}
            / <span className="text-gray-700">Is my ex thinking of me?</span>
          </div>
          <p className="text-sm font-semibold tracking-wide uppercase text-purple-600 mb-3">
            Honest read · 4 min
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
            Is my ex thinking of me? Real signs — and how to know what
            they&apos;re actually thinking.
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            You&apos;re looking for evidence that lets you stop asking
            the question. Generic articles can give you signs to read.
            But the actual answer — what <em>they</em> specifically are
            feeling about <em>you</em> right now — needs more than a
            checklist.
          </p>
        </header>

        <div className="max-w-3xl mx-auto px-4">
          <LanderTLDR
            readingTime="4 min read"
            subtitle="Honest editorial"
            summary={[
              'Yes, most exes do think about each other post-breakup. Severed attachments are open loops, and theirs is open too.',
              'But "thinking about you" ≠ "wanting you back." Guilt, comparison, and curiosity all generate frequent thoughts that aren\'t romantic. The signs below help distinguish.',
              'For a real answer about what your ex specifically is feeling — not generic signals — a 5-minute reading with a love psychic gets you what no article can.',
            ]}
            ctaPrompt="Want to know what your ex specifically is thinking?"
            cta={
              <AffiliateCTA
                offer="keen"
                placement="topic_ex_thinking_tldr"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
              >
                Find out — 5 min for $1 →
              </AffiliateCTA>
            }
            ctaFootnote="New users: 5 minutes for $1 with any new advisor on Keen · 18+"
          />
        </div>

        <div className="max-w-3xl mx-auto px-4 py-6 prose prose-purple prose-lg max-w-none prose-p:leading-relaxed prose-li:my-1">
          <h2>Why this question won&apos;t leave you alone</h2>

          <p>
            Behavioral research on grief and attachment offers a
            consistent explanation: when an attachment bond is severed,
            the brain treats it as an open loop. Open loops cost
            cognitive energy, and the brain keeps trying to close them
            — by replaying memories, looking for new information, and
            checking whether the other person is still &ldquo;there&rdquo;
            in some sense.
          </p>

          <p>
            The question &ldquo;is my ex thinking of me?&rdquo; is your
            brain checking whether the loop can close. If they&apos;re
            thinking about you too, the loop has symmetry. If
            they&apos;ve stopped, you have to close it on your own.
          </p>

          <KeyTakeaway title="You're not weak for asking">
            Your brain is doing standard post-loss processing. The work
            isn&apos;t to shame yourself for the question — it&apos;s
            to give your brain enough closure-quality information that
            it can stop checking.
          </KeyTakeaway>

          <h2>3 signs they&apos;re probably thinking about you</h2>

          <ul>
            <li>
              <strong>
                Sustained social-media presence at low intensity.
              </strong>{' '}
              They haven&apos;t blocked, haven&apos;t unfollowed, still
              view your stories occasionally. Inertia like this
              isn&apos;t accidental at the 3-month mark — it&apos;s a
              choice to keep the door cracked.
            </li>
            <li>
              <strong>
                Strangely-timed reach-outs about logistics.
              </strong>{' '}
              A text six months later about &ldquo;a sweater you
              left&rdquo; is rarely a wardrobe emergency. The sweater
              hasn&apos;t become time-sensitive — their feelings have.
            </li>
            <li>
              <strong>Asking mutual friends about you specifically.</strong>{' '}
              &ldquo;How is she handling things&rdquo; or &ldquo;is she
              dating anyone&rdquo; rather than &ldquo;how&apos;s she
              doing.&rdquo; The level of detail is the signal.
            </li>
          </ul>

          <h2>3 signs they&apos;ve actually moved on</h2>

          <ul>
            <li>
              <strong>A clean digital cut.</strong> Unfollowed, blocked,
              photos removed, no mutual interactions through friends.
              This level of effort is what going-no-contact-on-purpose
              looks like.
            </li>
            <li>
              <strong>
                Sustained calm contentment with someone new.
              </strong>{' '}
              The early performative stage is noise. Quiet happiness
              with another person at the 3-month mark is the signal
              that their attention has redirected.
            </li>
            <li>
              <strong>Total social-graph silence.</strong> People who
              are still preoccupied tend to leak it to mutual
              connections, even unintentionally. Total silence usually
              means the topic has stopped coming up.
            </li>
          </ul>

          <PullQuote>
            Thinking about you isn&apos;t the same as wanting you back.
            That distinction is the one that actually matters.
          </PullQuote>

          <OfferBridge
            placement="topic_ex_thinking_mid"
            eyebrow="The one question generic articles can't answer"
            headline={
              <>
                Is your ex thinking about you specifically? An
                experienced love psychic can read his/her energy in 5
                minutes.
              </>
            }
            subtext={
              <>
                Generic signs tell you the population baseline. They
                can&apos;t see your ex&apos;s current state of mind, the
                specific dynamic between you, or what&apos;s shifting
                right now. New users on Keen get 5 minutes for $1 with
                any new advisor.
              </>
            }
            ctaLabel="Find out what they're really thinking →"
          />

          <h2>The harder distinction</h2>

          <p>
            People think about exes for many reasons that aren&apos;t
            romantic interest:
          </p>

          <ul>
            <li>
              <strong>Unresolved guilt.</strong> If they ended things
              badly, they may think about you frequently as guilt
              processing — not desire to reconcile.
            </li>
            <li>
              <strong>Curiosity without intent.</strong> Idle &ldquo;I
              wonder how she&apos;s doing&rdquo; thoughts that go
              nowhere.
            </li>
            <li>
              <strong>Comparison anchoring.</strong> When their new
              relationship isn&apos;t going well, they mentally return
              to you as a reference point. This isn&apos;t a positive
              signal.
            </li>
          </ul>

          <KeyTakeaway title="What's actually relevant" variant="caution">
            The question isn&apos;t whether you&apos;re in their
            thoughts. It&apos;s whether they&apos;re acting on those
            thoughts in any way — and what kind of thoughts they are.
            That&apos;s the question a real reading can answer.
          </KeyTakeaway>

          <h2>Why a real reading actually helps here</h2>

          <p>
            A psychic reading is genuinely useful when you&apos;ve
            already done the work of self-reflection and you&apos;re
            stuck in a loop where the information you have isn&apos;t
            resolving the question.
          </p>

          <p>
            Experienced love advisors do thousands of post-breakup
            readings. They can read energy patterns most people
            can&apos;t — including the specific texture of what&apos;s
            going on for your ex right now. It&apos;s the difference
            between &ldquo;the population reaches out 40% of the
            time&rdquo; and &ldquo;here&apos;s what&apos;s on his mind
            this week.&rdquo;
          </p>

          <p>
            Most importantly: low friction. Five minutes for $1 with a
            new advisor on Keen. Less than a coffee, and it&apos;s
            about your situation specifically.
          </p>

          {/* Final CTA */}
          <div className="not-prose my-10 p-6 md:p-8 bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-2xl text-center shadow-md">
            <p className="text-2xl font-bold mb-3">
              Stop wondering. Get a real answer.
            </p>
            <p className="text-purple-50 mb-6">
              5 minutes with a love psychic about your ex specifically.
              $1 for new users.
            </p>
            <AffiliateCTA
              offer="keen"
              placement="topic_ex_thinking_end"
              className="inline-block bg-white text-purple-700 hover:bg-gray-50 font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Talk to a love psychic →
            </AffiliateCTA>
            <p className="mt-4 text-xs text-purple-100 opacity-90">
              5 min for $1 with new advisor · 18+ · for entertainment
              purposes
            </p>
          </div>

          <p className="text-sm text-gray-600 text-center">
            Want to read more about Keen first?{' '}
            <Link
              href="/love-psychic-services/keen-review"
              className="text-purple-700 underline decoration-purple-300 underline-offset-4 font-semibold"
            >
              Our honest Keen review
            </Link>{' '}
            covers pricing, how to choose an advisor, and what to ask.
          </p>

          <AffiliateDisclosure variant="inline" className="mt-12" />
        </div>
      </article>

      <MobileStickyCTA
        affiliateOffer="keen"
        label="Talk to a love psychic"
        subLabel="5 min for $1 · about your ex specifically"
        placement="topic_ex_thinking_mobile"
      />
    </>
  );
}
