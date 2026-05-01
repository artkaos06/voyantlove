import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateCTA from '@/components/en/AffiliateCTA';
import AffiliateDisclosure from '@/components/en/AffiliateDisclosure';
import LanderTLDR from '@/components/en/LanderTLDR';
import KeyTakeaway from '@/components/en/KeyTakeaway';
import PullQuote from '@/components/en/PullQuote';
import InlineCTA from '@/components/en/InlineCTA';
import MobileStickyCTA from '@/components/en/MobileStickyCTA';

// Tier 1 topic page: "is my ex thinking of me"
//
// Companion to will-he-come-back. Where that page is about reconciliation
// prospects, this is about the underlying obsessive question and what to
// do with the loop.

export const metadata: Metadata = {
  title:
    'Is my ex thinking of me? Real signals, the psychology, and what it means',
  description:
    'A long-read on whether your ex is actually thinking about you, what the signals mean, and the difference between "thinking of you" and "wants you back." Honest, no-fluff.',
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
            Long-read guide
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
            Is my ex thinking of me? An honest look at the signals — and
            why it matters less than you think.
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            You&apos;re looking for a piece of evidence that lets you stop
            asking the question. The bad news: that piece of evidence
            rarely arrives in a clean form. The good news: there are
            actually predictable patterns about who thinks about an ex
            and when, and an honest read on those signals is more useful
            than the absolute yes-or-no your head is searching for.
          </p>
        </header>

        <div className="max-w-3xl mx-auto px-4">
          <LanderTLDR
            readingTime="8 min read"
            summary={[
              'Most exes do think about each other post-breakup — your brain processes severed attachments as open loops, and theirs does too. The question is what kind of thoughts.',
              'There\'s a hard distinction between "thinking about you" and "wanting you back." Guilt, comparison, and curiosity all generate frequent thoughts that aren\'t romantic.',
              'The actually-actionable question isn\'t whether they\'re thinking of you — it\'s whether you\'re building a life that you\'d want even if the answer is no.',
            ]}
          />
        </div>

        <div className="max-w-3xl mx-auto px-4 py-6 prose prose-purple prose-lg max-w-none prose-p:leading-relaxed prose-li:my-1">
          <h2>Why this question is so persistent</h2>

          <p>
            The need to know whether an ex is thinking about you is one
            of the most universal post-breakup experiences.
          </p>

          <p>
            Behavioral research on grief and attachment offers a fairly
            consistent explanation: when an attachment bond is severed,
            the brain doesn&apos;t treat it as a one-time event. It
            treats it as an open loop. Open loops cost cognitive energy
            to maintain, and the brain keeps trying to close them — by
            replaying memories, looking for new information, and
            checking whether the other person is still &ldquo;there&rdquo;
            in some sense.
          </p>

          <p>
            The question &ldquo;is my ex thinking of me?&rdquo; is, in
            part, your brain checking whether the loop can close. If
            they&apos;re thinking about you too, the loop has symmetry —
            there&apos;s something to potentially restart. If
            they&apos;ve stopped completely, the loop has to close on
            your side alone, which is harder.
          </p>

          <KeyTakeaway title="Why this matters">
            You&apos;re not weak or obsessive for asking. Your brain is
            doing its standard post-loss processing. The work is to give
            it enough closure-quality information that it can stop
            checking — not to shame yourself for the question.
          </KeyTakeaway>

          <h2>Signs they probably are thinking about you</h2>

          <p>
            A few patterns reliably indicate active mental presence on
            their side:
          </p>

          <ul>
            <li>
              <strong>
                Recurring social media activity on your profile.
              </strong>{' '}
              Liking older photos, viewing your stories consistently,
              watching content from people closely associated with you.
            </li>
            <li>
              <strong>Asking mutual friends about you.</strong> Especially
              in a specific way — &ldquo;how is she handling things&rdquo;
              or &ldquo;is she dating anyone&rdquo; rather than
              &ldquo;how&apos;s she doing.&rdquo; The level of detail is
              the signal.
            </li>
            <li>
              <strong>Showing up where you&apos;ll be.</strong> Not by
              coincidence. If they appear at events, neighborhoods, or
              online spaces they used to avoid, they&apos;re curating
              proximity.
            </li>
            <li>
              <strong>
                Drunk-texts, late-night likes, ambiguous comments.
              </strong>{' '}
              People don&apos;t reach out at 1 a.m. about people
              they&apos;ve stopped thinking about. Inhibition lowering
              reveals what&apos;s been running in the background.
            </li>
            <li>
              <strong>
                Strangely-timed reach-outs about logistics.
              </strong>{' '}
              A text six months later about &ldquo;a sweater you
              left&rdquo; is usually a pretext to talk, not a wardrobe
              emergency. The sweater hasn&apos;t become time-sensitive.
              Their feelings have.
            </li>
            <li>
              <strong>Sustained presence at low intensity.</strong> They
              haven&apos;t blocked you, haven&apos;t unfollowed you,
              haven&apos;t removed photos. Inertia like this isn&apos;t
              accidental at the three-month mark. It&apos;s a choice to
              keep the door cracked.
            </li>
          </ul>

          <h2>Signs they probably aren&apos;t — at least not anymore</h2>

          <ul>
            <li>
              <strong>A clean, complete digital cut.</strong> Unfollowed,
              blocked, photos removed, no mutual interactions through
              friends. This level of effort is what going-no-contact-on-
              purpose looks like.
            </li>
            <li>
              <strong>
                They&apos;ve been visibly happy with someone new for
                months.
              </strong>{' '}
              The early performative stage is noise. Sustained calm
              contentment with another person is the signal that their
              attention has redirected.
            </li>
            <li>
              <strong>
                You&apos;ve heard nothing through the grapevine.
              </strong>{' '}
              People who are still preoccupied tend to leak it to mutual
              connections, even unintentionally. Total silence in the
              social graph usually means the topic has stopped coming
              up.
            </li>
            <li>
              <strong>
                Their life has changed in ways that don&apos;t include
                you.
              </strong>{' '}
              New city, new career, new friend group, new spiritual
              practice. Major life pivots are how some people close
              their own loops.
            </li>
          </ul>

          <PullQuote>
            Thinking about you isn&apos;t the same as wanting you back.
            Guilt, comparison, and curiosity all produce frequent
            thoughts that aren&apos;t romantic.
          </PullQuote>

          <h2>The harder distinction: thinking about you ≠ wanting you back</h2>

          <p>
            This is the part most reconciliation content skips, and
            it&apos;s the part that matters most. People think about
            exes for many reasons that aren&apos;t romantic interest:
          </p>

          <ul>
            <li>
              <strong>Unresolved guilt.</strong> If they ended the
              relationship badly — abruptly, cruelly, while overlapping
              with someone else — they may think about you frequently as
              guilt processing. This is not a desire to reconcile.
              It&apos;s their conscience.
            </li>
            <li>
              <strong>Curiosity without intent.</strong> &ldquo;I wonder
              how she&apos;s doing&rdquo; is a thought people have about
              old colleagues, distant cousins, and yes, exes. It
              doesn&apos;t mean anything is being acted on.
            </li>
            <li>
              <strong>Comparison anchoring.</strong> When someone is in a
              new relationship that isn&apos;t going well, they
              sometimes mentally return to the previous one as a
              reference point. This is rarely a positive signal — it
              usually means they&apos;re using your memory as a measuring
              stick, not pursuing reconciliation.
            </li>
            <li>
              <strong>Memory triggers.</strong> A song, a place, a
              smell. Your ex thinking about you on a Tuesday afternoon
              because they walked past a restaurant you liked is real,
              but it&apos;s a sensory event, not a decision.
            </li>
          </ul>

          <KeyTakeaway title="What's actually relevant" variant="caution">
            The question isn&apos;t whether you&apos;re in their
            thoughts. It&apos;s whether they&apos;re acting on those
            thoughts in any way. If not, the thoughts are noise — yours
            and theirs.
          </KeyTakeaway>

          <h2>What to do with the answer either way</h2>

          <p>
            <strong>If the signals suggest yes</strong>: hold this
            gently. It&apos;s a piece of information, not a plan.
            Don&apos;t use it as permission to break your own no-contact,
            and don&apos;t use it to spin up scenarios about
            reconciliation that haven&apos;t actually been offered.
            Their thoughts are theirs to act on.
          </p>

          <p>
            Your move is to keep doing what you&apos;d do regardless:
            live well, give time, let things unfold or not.
          </p>

          <p>
            <strong>If the signals suggest no</strong>: the brain
            doesn&apos;t accept that information cleanly the first ten
            times you tell it. That&apos;s okay. The job becomes giving
            yourself enough closure-quality experiences — therapy,
            meaningful new relationships, time spent on things that
            don&apos;t involve them at all — that the open loop slowly
            closes on its own.
          </p>

          <p>
            Either way, the most actionable advice is the same: stop
            looking for the answer in their behavior, and start looking
            for it in your own. The day you genuinely don&apos;t need to
            check whether they&apos;re thinking about you is the day the
            question has stopped mattering. That&apos;s the actual goal.
          </p>

          <h2>When a love psychic reading can help</h2>

          <p>
            A reading is genuinely useful when you&apos;ve already done
            the work of self-reflection and you&apos;re stuck in a loop
            where the information you have isn&apos;t resolving the
            question.
          </p>

          <p>
            An experienced advisor — particularly one who specializes in
            relationships and reads psychic energy or tarot for emotional
            situations — can offer a perspective that&apos;s harder to
            access alone. Our pick for this specific use case is Keen,
            and we walk through pricing, what to ask, and how to choose
            the right advisor in our{' '}
            <InlineCTA>full Keen review</InlineCTA>.
          </p>

          <p>
            The most useful framing for this particular question is to
            ask something like: &ldquo;What do you sense about my
            ex&apos;s current emotional state regarding our
            relationship?&rdquo; Note the difference from &ldquo;is he
            thinking of me?&rdquo; — the first is open and invites
            texture; the second is a yes/no that mostly produces yes/no.
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

          <h2>One last reframe</h2>

          <p>
            The version of this question that&apos;s actually worth
            asking is not &ldquo;is he thinking about me?&rdquo; but
            &ldquo;am I building a life that I would still want even if
            the answer is no?&rdquo;
          </p>

          <p>
            The first question puts you in the passenger seat of your
            own recovery. The second one puts you in the driver&apos;s
            seat. The paradox is that people who genuinely orient around
            the second question tend to get better answers to the first
            one — not because the universe rewards detachment, but
            because actually living a good life is the kind of thing
            exes notice and find themselves drawn back toward.
          </p>

          {/* Final CTA — secondary direct affiliate option */}
          <div className="not-prose mt-12 mb-6 p-6 bg-white border border-gray-200 rounded-2xl text-center">
            <p className="text-base text-gray-700 mb-4">
              Already know you want a reading? Browse Keen advisors
              directly.
            </p>
            <AffiliateCTA
              offer="keen"
              placement="topic_is_my_ex_thinking_of_me_end"
              className="inline-block bg-white border-2 border-purple-300 text-purple-700 hover:border-purple-500 hover:text-purple-800 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Browse Keen love advisors →
            </AffiliateCTA>
          </div>

          <AffiliateDisclosure variant="inline" className="mt-8" />
        </div>
      </article>

      <MobileStickyCTA
        href="/love-psychic-services/keen-review"
        label="Read our Keen review"
        subLabel="4.4/5 · honest editorial · 5 min read"
      />
    </>
  );
}
