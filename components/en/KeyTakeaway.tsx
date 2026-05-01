// "What this means for you" callout boxes that appear after major H2
// sections in topic articles. Translates editorial insight into practical
// implication, breaks up wall-of-text, gives scanners a thread to follow.
//
// Three visual variants for different emotional registers:
//   - 'default'  : neutral purple/indigo (most common — translates insight to action)
//   - 'positive' : green (good news, encouragement)
//   - 'caution'  : amber (something to be wary of, no-contact rule, etc.)

import type { ReactNode } from 'react';

type Variant = 'default' | 'positive' | 'caution';

interface KeyTakeawayProps {
  title?: string;
  variant?: Variant;
  children: ReactNode;
}

const VARIANT_STYLES: Record<Variant, { box: string; label: string; icon: string }> = {
  default: {
    box: 'bg-indigo-50 border-l-4 border-indigo-400',
    label: 'text-indigo-900',
    icon: '✦',
  },
  positive: {
    box: 'bg-emerald-50 border-l-4 border-emerald-400',
    label: 'text-emerald-900',
    icon: '✓',
  },
  caution: {
    box: 'bg-amber-50 border-l-4 border-amber-400',
    label: 'text-amber-900',
    icon: '!',
  },
};

export default function KeyTakeaway({
  title = 'Key takeaway',
  variant = 'default',
  children,
}: KeyTakeawayProps) {
  const styles = VARIANT_STYLES[variant];

  return (
    <aside
      className={`not-prose my-8 ${styles.box} p-5 rounded-r-xl shadow-sm`}
      role="note"
      aria-label={title}
    >
      <p
        className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wide ${styles.label} mb-2`}
      >
        <span aria-hidden="true" className="text-base leading-none">
          {styles.icon}
        </span>
        {title}
      </p>
      <div className={`text-[15px] leading-relaxed ${styles.label}`}>
        {children}
      </div>
    </aside>
  );
}
