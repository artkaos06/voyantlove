// Trust-signal strip for the commercial-intent lander.
//
// Placed immediately below the hero to reduce friction for cold paid
// traffic. Stacks four high-impact trust elements horizontally on desktop,
// vertically on mobile. No interactive elements — pure signal.

interface TrustBadgeProps {
  icon: string;
  headline: string;
  subtext: string;
}

const BADGES: TrustBadgeProps[] = [
  {
    icon: '★',
    headline: '4.4 / 5 average',
    subtext: 'Aggregate rating · thousands of recent reviews',
  },
  {
    icon: '25+',
    headline: 'Years online',
    subtext: 'Keen launched 1999 · part of Ingenio LLC',
  },
  {
    icon: '🛡️',
    headline: 'Money-back guarantee',
    subtext: 'Unhappy with your first session? Get your money back.',
  },
  {
    icon: '24/7',
    headline: 'Always-on advisors',
    subtext: 'Thousands of advisors · live readings around the clock',
  },
];

export default function TrustStrip() {
  return (
    <section
      aria-label="Trust signals"
      className="not-prose my-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-3"
    >
      {BADGES.map((b) => (
        <div
          key={b.headline}
          className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 bg-white"
        >
          <span
            aria-hidden="true"
            className="flex-shrink-0 h-10 w-10 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 text-purple-700 font-bold flex items-center justify-center text-base"
          >
            {b.icon}
          </span>
          <div className="min-w-0">
            <p className="font-bold text-gray-900 text-sm leading-tight">
              {b.headline}
            </p>
            <p className="text-xs text-gray-600 leading-snug mt-0.5">
              {b.subtext}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
