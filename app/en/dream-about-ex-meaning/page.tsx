import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateCTA from '@/components/en/AffiliateCTA';
import AffiliateDisclosure from '@/components/en/AffiliateDisclosure';
import LanderTLDR from '@/components/en/LanderTLDR';
import KeyTakeaway from '@/components/en/KeyTakeaway';
import PullQuote from '@/components/en/PullQuote';
import OfferBridge from '@/components/en/OfferBridge';
import MobileStickyCTA from '@/components/en/MobileStickyCTA';

// Tier 1 topic page: "dream about ex meaning"
//
// Conversion-engineered version with curiosity-preserving framing,
// $1 offer in TLDR, and direct-affiliate CTAs.

export const metadata: Metadata = {
  title:
    'Dream about ex meaning — and how to get a real interpretation for $1',
  description:
    'A grounded look at the 5 dream types about exes and what they mean. Plus how to get a personalized dream interpretation from a love psychic for $1.',
  alternates: {
    canonical: 'https://www.lovepsychicguide.com/dream-about-ex-meaning',
  },
};

export default function DreamAboutExMeaningPage() {
  return (
    <>
      <article className="bg-white">
        <header className="max-w-3xl mx-auto px-4 pt-12 pb-2">
          <div className="text-sm text-gray-500 mb-3">
            <Link href="/" className="hover:text-purple-700">
              Home
            </Link>{' '}
            / <span className="text-gray-700">Dream about ex meaning</span>
          </div>
          <p className="text-sm font-semibold tracking-wide uppercase text-purple-600 mb-3">
            Honest read · 4 min
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
            Dreaming about your ex — what your specific dream actually
            means.
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            You woke up at 4 a.m., dream still vivid, your ex right
            there. Generic dream-meaning articles can give you the
            categories. But what <em>your</em> specific dream means —
            given your situation, where you are emotionally, what
            happened with this person — needs more than a checklist.
          </p>
        </header>

        <div className="max-w-3xl mx-auto px-4">
          <LanderTLDR
            readingTime="4 min read"
            subtitle="Honest editorial"
            summary={[
              'Most dreams about exes are processing dreams — your brain working through unfinished emotional content. They\'re rarely predictions or messages.',
              'There are 5 distinct dream types (closure, anxiety, longing, fight, communication). Each tells you something different about your own emotional state.',
              'For what your specific dream actually means — and whether yours is the rare "communication dream" type — a real psychic dream interpretation gets you what no article can.',
            ]}
            ctaPrompt="Want a real interpretation of your specific dream?"
            cta={
              <AffiliateCTA
                offer="keen"
                placement="topic_dream_ex_tldr"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
              >
                Ask a dream psychic — 5 min for $1 →
              </AffiliateCTA>
            }
            ctaFootnote="New users: 5 minutes for $1 with any new advisor on Keen · 18+"
          />
        </div>

        <div className="max-w-3xl mx-auto px-4 py-6 prose prose-purple prose-lg max-w-none prose-p:leading-relaxed prose-li:my-1">
          <h2>Why you dream about exes at all</h2>

          <p>
            The brain processes emotional content during REM sleep —
            that&apos;s one of its primary functions. Anything
            emotionally significant that hasn&apos;t been fully
            metabolized in waking life tends to show up.
          </p>

          <p>
            Exes, especially recent ones or ones where the relationship
            ended without clean closure, are common dream material
            precisely because they represent unresolved emotional
            content.
          </p>

          <KeyTakeaway title="Most dreams aren't messages">
            Most dreams about exes are not signs that the ex is
            thinking about you, that they&apos;re about to reach out,
            or that the universe is sending you a message. They&apos;re
            signs that <em>your</em> brain is still processing
            something. Useful information — just different from what
            people often hope for.
          </KeyTakeaway>

          <h2>The 5 common dream types</h2>

          <h3>1. Closure dreams</h3>
          <p>
            You and your ex meet, talk peacefully, sometimes hug. The
            dream ends with resolution. <strong>Meaning:</strong> your
            subconscious is finishing the work of accepting the
            relationship is over. A good sign.
          </p>

          <h3>2. Anxiety dreams</h3>
          <p>
            You&apos;re together but something is wrong — they
            won&apos;t look at you, the setting keeps shifting.{' '}
            <strong>Meaning:</strong> general anxiety using the ex as
            day-residue. Less about them, more about an unresolved fear
            in your current life.
          </p>

          <h3>3. Longing dreams</h3>
          <p>
            The relationship is good in the dream. You wake up missing
            them sharply. <strong>Meaning:</strong> grief processing.
            Your psyche giving you a temporary version of what you lost.
            Not a prediction.
          </p>

          <h3>4. Fight dreams</h3>
          <p>
            You argue, sometimes about things that were never said. You
            wake up tense. <strong>Meaning:</strong> unprocessed
            resentment finishing the conversation you didn&apos;t get
            to finish.
          </p>

          <h3>5. Communication dreams</h3>
          <p>
            Unusually vivid, you remember specifics, strong feeling
            that the dream wasn&apos;t about you — it was about{' '}
            <em>them</em>. <strong>Meaning:</strong> this is the rarer
            category where the metaphysics gets harder to dismiss.
            Truly distinctive dreams ARE worth paying attention to —
            but most aren&apos;t this type.
          </p>

          <PullQuote>
            The morning-after &ldquo;they&apos;re thinking of me too&rdquo;
            feeling is one of the most reliable triggers for regretted
            texts.
          </PullQuote>

          <OfferBridge
            placement="topic_dream_ex_mid"
            eyebrow="When self-interpretation isn't enough"
            headline={
              <>
                What did your dream actually mean? A real dream psychic
                can read it in 5 minutes.
              </>
            }
            subtext={
              <>
                Self-interpretation has limits — your reading is shaped
                by what you want it to mean. Dream-interpretation
                specialists on Keen do thousands of these readings.
                They can tell you which of the 5 types yours is, what
                your subconscious is actually working on, and whether
                yours is the rare communication-dream type. New users
                get 5 minutes for $1.
              </>
            }
            ctaLabel="Get your dream interpreted →"
          />

          <h2>What NOT to read into the dream</h2>

          <ul>
            <li>
              A dream about an ex isn&apos;t evidence they&apos;re
              thinking about you. People dream about people who
              haven&apos;t thought about them in years.
            </li>
            <li>
              A reconciliation dream isn&apos;t a sign reconciliation
              is coming. Usually it&apos;s wish-fulfillment your brain
              produces for emotional regulation.
            </li>
            <li>
              Frequent dreams don&apos;t mean &ldquo;they haunt
              you&rdquo; in any literal sense. They mean you&apos;re
              still processing.
            </li>
          </ul>

          <KeyTakeaway title="The 4 a.m. text rule" variant="caution">
            If you woke up from a vivid dream and your hand is reaching
            for the phone — wait. The dream isn&apos;t evidence;
            it&apos;s your subconscious processing. By 11 a.m.
            you&apos;ll be glad you waited. If the urge is still there,
            a 5-minute reading often resolves the loop faster than
            sending a regretted text.
          </KeyTakeaway>

          <h2>Why a real interpretation actually helps</h2>

          <p>
            When you book a session for dream interpretation, an
            experienced advisor can do what self-reflection can&apos;t:
            tell you which of the 5 categories your dream falls into,
            what context you&apos;re missing, and whether it&apos;s
            worth paying attention to as a signal vs. processing.
          </p>

          <p>
            Tip: bring a written-out version of the dream rather than
            trying to recall it live. Specifics matter. The advisor
            can ask clarifying questions, but starting from a written
            record gets you a more useful reading.
          </p>

          {/* Final CTA */}
          <div className="not-prose my-10 p-6 md:p-8 bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-2xl text-center shadow-md">
            <p className="text-2xl font-bold mb-3">
              Get a real interpretation of your dream.
            </p>
            <p className="text-purple-50 mb-6">
              5 minutes with a love psychic. $1 for new users.
            </p>
            <AffiliateCTA
              offer="keen"
              placement="topic_dream_ex_end"
              className="inline-block bg-white text-purple-700 hover:bg-gray-50 font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Talk to a dream psychic →
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
            covers pricing, advisor selection, and what to ask.
          </p>

          <AffiliateDisclosure variant="inline" className="mt-12" />
        </div>
      </article>

      <MobileStickyCTA
        affiliateOffer="keen"
        label="Ask a dream psychic"
        subLabel="5 min for $1 · interpret your dream"
        placement="topic_dream_ex_mobile"
      />
    </>
  );
}
