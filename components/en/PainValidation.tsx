// Pain validation block — sits between the hero and the advisor cards.
//
// Cold commercial-intent traffic in this niche is emotionally activated.
// They came here because of someone specific — an ex, a partner, a crush —
// and the question keeps looping. Before pitching the solution, we have to
// signal: "we see what's actually happening for you right now."
//
// This is classic Problem-Agitate-Solution applied gently. The bullets
// describe the visitor's recent behavior, not their feelings — feelings-
// based pitching reads as manipulative; behavior-based mirroring reads as
// understanding.
//
// Honesty model: every bullet is plausibly true for someone searching the
// queries our campaign targets. No fabricated emotions, no projected
// crises. Just naming the loop the visitor is already in.

export default function PainValidation() {
  return (
    <section
      className="not-prose my-10"
      aria-label="Why you're here"
    >
      <div className="max-w-3xl mx-auto bg-white border-l-4 border-purple-400 rounded-r-2xl p-6 md:p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-purple-600 mb-3">
          Wondering if they&apos;re still thinking about you?
        </p>
        <p className="text-lg md:text-xl font-bold text-gray-900 leading-snug mb-4">
          You&apos;ve already googled it more than once this week.
        </p>
        <ul className="space-y-2 text-[15px] md:text-base text-gray-700 leading-relaxed">
          <li className="flex gap-3">
            <span aria-hidden="true" className="text-purple-400 mt-0.5">
              ✓
            </span>
            You&apos;ve asked your friends. They don&apos;t actually know.
          </li>
          <li className="flex gap-3">
            <span aria-hidden="true" className="text-purple-400 mt-0.5">
              ✓
            </span>
            You&apos;ve re-read every text they sent. Twice.
          </li>
          <li className="flex gap-3">
            <span aria-hidden="true" className="text-purple-400 mt-0.5">
              ✓
            </span>
            You&apos;ve checked their social media. It told you nothing useful.
          </li>
          <li className="flex gap-3">
            <span aria-hidden="true" className="text-purple-400 mt-0.5">
              ✓
            </span>
            The question keeps coming back at the worst possible moments.
          </li>
        </ul>
        <p className="mt-5 text-base md:text-lg font-semibold text-gray-900 leading-snug">
          Talk to a real love psychic. 5 minutes for $1.
        </p>
      </div>
    </section>
  );
}
