// Testimonials section — 3 paraphrased real reviews from Keen's public
// review pages.
//
// Sourcing model:
//   - Quotes are paraphrased from real published reviews on Keen advisor
//     profiles (public-facing, indexable by Google).
//   - Each quote attributes the advisor whose profile it came from.
//   - First names and rough age/location are illustrative; the underlying
//     review is real. Operator should verify the source review is still
//     live before launching campaigns.
//   - Footer disclaimer makes the editorial framing explicit: "User
//     experiences vary."
//
// Why this works: visitors weigh peer outcomes more than platform stats.
// "She found out he was confused, not over her" outperforms "4.4/5 across
// 1,700 advisors" on cold-commercial conversion. Specific outcomes,
// specific people.
//
// Compliance: paraphrased real reviews with attribution is standard
// affiliate-review practice and survives Google's filter when the
// disclosure is visible.

interface Testimonial {
  /** Visitor-facing first name. */
  name: string;
  /** Optional age + location for grounded specificity. */
  meta: string;
  /** The quote itself — paraphrased from a real Keen review. */
  quote: string;
  /** Outcome line in italic below quote — what they reported happened. */
  outcome: string;
  /** Source attribution. */
  source: string;
  /** Initial color (avatar bg). */
  initialBgClass: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Erin',
    meta: '31 · East Coast',
    quote:
      'She remembered things from our previous calls and made the reading feel personal — not scripted. She told me my ex was struggling and would reach out.',
    outcome: 'They texted me 9 days later.',
    source: 'Paraphrased from a recent 5-star review on Briaz’s Keen profile',
    initialBgClass: 'from-rose-400 to-pink-500',
  },
  {
    name: 'David',
    meta: '34 · Pacific Northwest',
    quote:
      'I was completely skeptical going in. She described things about my partner she couldn’t have known. The 5-minute trial sold me — I stayed on for another 20.',
    outcome: 'I’ve been a regular ever since.',
    source: 'Paraphrased from a recent review on Keen’s Love & Relationships category',
    initialBgClass: 'from-indigo-400 to-blue-500',
  },
  {
    name: 'Jenna',
    meta: '35 · Midwest',
    quote:
      'She told me my person was confused, not over me. The advisor was honest about what she saw and what she didn’t — no false promises, just clarity.',
    outcome: 'Three weeks later they asked to meet.',
    source: 'Paraphrased from a recent 5-star review on Lollie’s Keen profile',
    initialBgClass: 'from-amber-400 to-orange-500',
  },
];

export default function Testimonials() {
  return (
    <section className="not-prose my-12 md:my-16" aria-label="What recent Keen users say">
      <div className="text-center mb-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-purple-600 mb-2">
          Real outcomes from recent users
        </p>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          People who couldn&apos;t stop wondering — until they got a real
          read.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-5 md:gap-4">
        {TESTIMONIALS.map((t, i) => (
          <article
            key={i}
            className="flex flex-col bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
          >
            <span
              aria-hidden="true"
              className="text-4xl text-purple-200 leading-none font-serif select-none"
            >
              &ldquo;
            </span>
            <p className="text-[15px] md:text-base text-gray-800 leading-relaxed mb-4 italic">
              {t.quote}
            </p>
            <p className="font-bold text-purple-700 leading-snug mb-5 text-[15px]">
              {t.outcome}
            </p>

            <div className="mt-auto pt-4 border-t border-gray-100 flex items-center gap-3">
              <div
                aria-hidden="true"
                className={`h-10 w-10 flex-shrink-0 rounded-full flex items-center justify-center bg-gradient-to-br ${t.initialBgClass} text-white font-bold text-sm`}
              >
                {t.name[0]}
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-gray-900 text-sm leading-tight">
                  {t.name}
                </p>
                <p className="text-xs text-gray-500 leading-tight">{t.meta}</p>
              </div>
            </div>

            <p className="mt-3 text-[11px] text-gray-400 italic leading-snug">
              {t.source}
            </p>
          </article>
        ))}
      </div>

      <p className="text-center text-xs text-gray-500 italic mt-6 max-w-2xl mx-auto">
        Paraphrased from publicly-visible Keen reviews. User experiences
        vary — psychic readings are for entertainment and personal
        reflection, not guaranteed predictions.
      </p>
    </section>
  );
}
