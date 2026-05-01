// Big-number stat box for data-heavy sections. Use when an article cites
// research or statistics — surfaces the number visually rather than burying
// it in prose.
//
// Renders a card with a large hero number and a one-line description.
// Supports an optional source caption for credibility.

interface StatCalloutProps {
  /** The hero number, e.g. "40-50%" or "1 in 5" */
  number: string;
  /** One-line description, e.g. "of exes reach out within a year". */
  label: string;
  /** Optional smaller source caption. */
  source?: string;
}

export default function StatCallout({
  number,
  label,
  source,
}: StatCalloutProps) {
  return (
    <aside className="not-prose my-8 grid md:grid-cols-[auto,1fr] gap-5 items-center bg-gradient-to-br from-purple-600 to-pink-500 text-white p-6 md:p-7 rounded-2xl shadow-md">
      <div className="text-center md:text-left">
        <p className="text-5xl md:text-6xl font-black leading-none tracking-tight">
          {number}
        </p>
      </div>
      <div>
        <p className="text-base md:text-lg leading-snug font-semibold">
          {label}
        </p>
        {source && (
          <p className="text-xs opacity-80 mt-2 italic">{source}</p>
        )}
      </div>
    </aside>
  );
}
