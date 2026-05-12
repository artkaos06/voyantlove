// Three-step "How it works" section for the commercial-intent lander.
//
// Reduces friction by showing cold visitors exactly what happens after
// they click through. Most affiliate landers skip this; the result is a
// click-through audience that hits Keen, sees an unfamiliar UI, and
// bounces before signing up. Setting expectations on our lander pre-
// warms them for the offboarding experience.

interface StepProps {
  number: string;
  title: string;
  description: string;
}

const STEPS: StepProps[] = [
  {
    number: '1',
    title: 'Pick your advisor',
    description:
      'Browse psychics by specialty, rating, and price. Read recent reviews. Pick someone whose tone matches what you need.',
  },
  {
    number: '2',
    title: 'Connect in seconds',
    description:
      'Choose live chat or a phone call. Keen connects you instantly — no waiting room, no scheduling, no caller-ID exposure either way.',
  },
  {
    number: '3',
    title: 'Pay $1 for the first 5 minutes',
    description:
      'New users get 5 minutes for just $1 with any new advisor. After that, the advisor\'s regular rate applies. You can set a session-cost cap to keep yourself in budget.',
  },
];

export default function HowItWorks() {
  return (
    <section
      aria-label="How a Keen psychic reading works"
      className="not-prose my-12 md:my-16"
    >
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 text-center">
        How it works
      </h2>
      <p className="text-center text-gray-600 text-sm md:text-base mb-8">
        From click to your first reading — usually under 2 minutes.
      </p>

      <ol className="grid md:grid-cols-3 gap-5 md:gap-6">
        {STEPS.map((step) => (
          <li
            key={step.number}
            className="relative flex flex-col p-6 rounded-2xl bg-white border border-gray-200"
          >
            <div
              aria-hidden="true"
              className="absolute -top-4 left-6 h-9 w-9 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-white font-bold flex items-center justify-center shadow-md"
            >
              {step.number}
            </div>
            <h3 className="font-bold text-gray-900 text-lg mt-3 mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
