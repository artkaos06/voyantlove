// Subtle inline link-style CTA for placing within paragraphs or as a low-key
// mid-article touchpoint. Less aggressive than full CTA boxes — for readers
// who'd find a giant button jarring but might click a contextual link.
//
// Use 1-2 times per article in addition to the prominent CTA boxes.

import Link from 'next/link';
import type { ReactNode } from 'react';

interface InlineCTAProps {
  href?: string;
  children: ReactNode;
  className?: string;
}

export default function InlineCTA({
  href = '/love-psychic-services/keen-review',
  children,
  className = '',
}: InlineCTAProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1 text-purple-700 font-semibold underline decoration-purple-300 underline-offset-4 decoration-2 hover:decoration-purple-600 transition-colors ${className}`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
