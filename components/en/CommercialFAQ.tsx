// FAQ section for the commercial-intent lander. Addresses the 8 most
// common objections that prevent cold paid traffic from converting on
// a psychic-reading affiliate offer.
//
// Uses native <details>/<summary> for accessibility, no JS required.
// Renders FAQPage JSON-LD schema so Google can surface the FAQ in SERPs
// (small but free SEO boost for the lander).

import type { ReactNode } from 'react';

interface FAQItem {
  question: string;
  answer: ReactNode;
  /** Plain-text version of the answer for JSON-LD schema. */
  answerPlain: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'Is this actually $1? What\'s the catch?',
    answer: (
      <>
        Yes — Keen offers new users 5 minutes for $1 with any new advisor.
        The catch is honest: the offer only applies to your first session
        with each advisor. After 5 minutes, the advisor&apos;s posted rate
        kicks in (most love advisors are $4.99–$15.99 per minute). You
        control the meter: set a session-budget cap before you start, end
        the call any time, and you&apos;re only charged for the minutes
        you actually use.
      </>
    ),
    answerPlain:
      'Yes — Keen offers new users 5 minutes for $1 with any new advisor. After 5 minutes the advisor\'s posted rate applies. You control the meter and can set a session budget cap.',
  },
  {
    question: 'What if I don\'t click with my advisor?',
    answer: (
      <>
        End the call. Then try a different advisor — the $1 intro applies
        to <em>each</em> new advisor, so testing two or three is genuinely
        cheap. Keen also has a satisfaction policy: if your first paid
        reading goes badly, customer support can refund up to $25 of it.
      </>
    ),
    answerPlain:
      'End the call and try a different advisor. The $1 intro applies to each new advisor. Keen will refund up to $25 of an unsatisfactory first paid reading.',
  },
  {
    question: 'Are the psychics real?',
    answer: (
      <>
        Keen vets advisors before they can list. Beyond that, the rating
        and review system filters out the rest — most advisors who stay
        on Keen long-term have 4.5+ ratings across thousands of readings.
        Whether psychic readings work the way the advisors say is a
        question for personal belief; but the platform itself is real, the
        advisors are real people, and the sessions deliver what they
        promise.
      </>
    ),
    answerPlain:
      'Keen vets advisors before listing. Ratings and reviews filter the rest. Long-tenured advisors typically have 4.5+ ratings across thousands of readings.',
  },
  {
    question: 'How long is a typical reading?',
    answer: (
      <>
        Most first love readings on Keen are 10 to 20 minutes. After the
        first 5 minutes (free under the intro offer), expect to pay
        roughly $70–$120 for a focused 15-minute session, depending on
        the advisor&apos;s rate. Set a $50 or $75 session cap if
        you&apos;re anxious about the per-minute meter.
      </>
    ),
    answerPlain:
      'Most first readings are 10–20 minutes. A focused 15-minute session typically costs $70–$120 after the intro. You can set a session cap.',
  },
  {
    question: 'Will my information be private?',
    answer: (
      <>
        Yes. Keen routes phone calls through their platform, so neither
        you nor the advisor sees the other&apos;s number. Live chat is
        in-app only — no email exchange, no SMS, no traceable contact info.
        Your name on Keen is a username of your choosing; advisors only
        see what you choose to share during the session.
      </>
    ),
    answerPlain:
      'Phone calls route through Keen — no caller-ID exposure. Live chat is in-app. Your username on Keen is whatever you choose; advisors only see what you share.',
  },
  {
    question: 'Phone or chat — which is better?',
    answer: (
      <>
        Chat is usually better for first-time users: you can scroll back
        through the reading later, take screenshots of specifics, and
        process the information at your own pace. Phone is more immediate
        and emotionally rich, but you lose the ability to re-read what
        was said. If your question is &ldquo;tell me specifics about my
        ex&apos;s state of mind,&rdquo; chat captures the answer better.
      </>
    ),
    answerPlain:
      'Chat is better for first-time users (scrollable, screenshotable). Phone is more immediate. For specifics, chat captures answers better.',
  },
  {
    question: 'Do I have to use my real name or credit card?',
    answer: (
      <>
        Username is your choice (most users pick a handle, not their
        legal name). Payment is required to start a session — Keen
        accepts major credit cards and PayPal. The intro charge is $1,
        and the platform stores your payment for any sessions you choose
        to continue afterward. You can remove the payment method from
        your account any time.
      </>
    ),
    answerPlain:
      'Username is your choice. Payment is required — credit cards and PayPal accepted. Intro is $1. Payment method can be removed any time.',
  },
  {
    question: 'When can I get a reading?',
    answer: (
      <>
        Right now. Keen has advisors live 24/7 — thousands across all
        specialties. Even at 3 a.m. local time, there are typically
        dozens of love &amp; relationship advisors available for
        immediate live chat or phone reading. No appointments, no
        waiting room.
      </>
    ),
    answerPlain:
      'Right now. Keen has thousands of advisors live 24/7. No appointments needed.',
  },
];

export default function CommercialFAQ() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answerPlain,
      },
    })),
  };

  return (
    <section aria-label="Frequently asked questions" className="not-prose my-12 md:my-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 text-center">
        Common questions
      </h2>
      <p className="text-center text-gray-600 text-sm md:text-base mb-8">
        Everything we get asked before someone takes their first reading.
      </p>

      <div className="max-w-2xl mx-auto space-y-2">
        {FAQS.map((f, i) => (
          <details
            key={i}
            className="group bg-white rounded-xl border border-gray-200 hover:border-purple-200 transition-colors overflow-hidden"
          >
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-4 md:p-5 font-semibold text-gray-900 text-base">
              <span>{f.question}</span>
              <span
                aria-hidden="true"
                className="flex-shrink-0 text-purple-600 transition-transform group-open:rotate-45 text-xl leading-none font-bold"
              >
                +
              </span>
            </summary>
            <div className="px-4 md:px-5 pb-4 md:pb-5 text-sm md:text-[15px] text-gray-700 leading-relaxed">
              {f.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
