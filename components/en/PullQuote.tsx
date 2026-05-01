// Stylized pull quote for surfacing the most resonant line in a section.
// Gives the eye an anchor in long-form articles, breaks up text density.
//
// Use sparingly — 1-2 per article max. Overuse defeats the purpose.

import type { ReactNode } from 'react';

interface PullQuoteProps {
  children: ReactNode;
  attribution?: string;
}

export default function PullQuote({ children, attribution }: PullQuoteProps) {
  return (
    <figure className="not-prose my-10 mx-0 md:mx-6">
      <blockquote className="relative pl-6 md:pl-8 border-l-4 border-purple-400">
        <span
          aria-hidden="true"
          className="absolute -top-2 -left-1 text-5xl md:text-6xl text-purple-200 font-serif leading-none select-none"
        >
          &ldquo;
        </span>
        <p className="text-xl md:text-2xl leading-snug font-semibold text-gray-800 italic">
          {children}
        </p>
      </blockquote>
      {attribution && (
        <figcaption className="mt-3 ml-6 md:ml-8 text-sm text-gray-500">
          — {attribution}
        </figcaption>
      )}
    </figure>
  );
}
