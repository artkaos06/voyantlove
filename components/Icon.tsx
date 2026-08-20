import React from 'react';

/**
 * Minimal inline icon set.
 *
 * Replaces the emoji that were doing the work of an icon system (44 of them on
 * the homepage, 15 distinct, including the logo and the primary CTA). Emoji
 * are rendered by the operating system, so the same glyph is a flat pictogram
 * on one phone and a glossy 3D blob on another — nothing about them can be
 * made to look designed. These are 1.5px-stroke line icons on a 24px grid that
 * inherit currentColor and the surrounding font size.
 */

export type IconName =
  | 'heart' | 'heartbreak' | 'sparkle' | 'alert' | 'moon' | 'star'
  | 'gift' | 'phone' | 'chat' | 'lock' | 'check' | 'shield' | 'arrow';

const PATHS: Record<IconName, React.ReactNode> = {
  heart: <path d="M12 20.5S3.5 15 3.5 9.2A4.7 4.7 0 0 1 12 6.6a4.7 4.7 0 0 1 8.5 2.6c0 5.8-8.5 11.3-8.5 11.3Z" />,
  heartbreak: <path d="M12 20.5S3.5 15 3.5 9.2A4.7 4.7 0 0 1 12 6.6a4.7 4.7 0 0 1 8.5 2.6c0 5.8-8.5 11.3-8.5 11.3ZM12 6.6l-2 3.6 3.4 2-2.2 4" />,
  sparkle: <path d="M12 3.5 13.7 9l5.5 1.7-5.5 1.7L12 18l-1.7-5.6L4.8 10.7 10.3 9 12 3.5ZM18.5 15.5l.7 2.1 2.1.7-2.1.7-.7 2.1-.7-2.1-2.1-.7 2.1-.7.7-2.1Z" />,
  alert: <path d="M12 8.2v5m0 3h.01M10.3 3.9 2.6 17.2a2 2 0 0 0 1.7 3h15.4a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />,
  moon: <path d="M20.5 14.3A8.5 8.5 0 1 1 9.7 3.5a6.6 6.6 0 0 0 10.8 10.8Z" />,
  star: <path d="m12 3.8 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8L12 3.8Z" />,
  gift: <path d="M20 12v8.5H4V12M2.5 7.5h19V12h-19V7.5ZM12 7.5v13M12 7.5S11 3.5 8.5 3.5a2 2 0 0 0 0 4H12Zm0 0s1-4 3.5-4a2 2 0 0 1 0 4H12Z" />,
  phone: <path d="M15.6 21.5A16.5 16.5 0 0 1 2.5 8.4 3 3 0 0 1 5.5 5h2.2a1.5 1.5 0 0 1 1.5 1.3l.5 2.7a1.5 1.5 0 0 1-.6 1.5l-1.2.9a13 13 0 0 0 4.7 4.7l.9-1.2a1.5 1.5 0 0 1 1.5-.6l2.7.5a1.5 1.5 0 0 1 1.3 1.5v2.2a3 3 0 0 1-3.4 3Z" />,
  chat: <path d="M20.5 12.4a7.9 7.9 0 0 1-8.5 7.9 8.8 8.8 0 0 1-3.4-.7L3.5 21l1.4-5.1a8.8 8.8 0 0 1-.7-3.4A7.9 7.9 0 0 1 12.1 4h.5a7.9 7.9 0 0 1 7.9 7.9v.5Z" />,
  lock: <path d="M6.5 10.5V7.3a5.5 5.5 0 0 1 11 0v3.2M5.5 10.5h13v10h-13v-10Z" />,
  check: <path d="m4.5 12.5 5 5 10-11" />,
  shield: <path d="M12 21.5s7.5-3.4 7.5-9.4V5.6L12 2.9 4.5 5.6v6.5c0 6 7.5 9.4 7.5 9.4Z" />,
  arrow: <path d="M4.5 12h15m-6-6 6 6-6 6" />,
};

export default function Icon({
  name,
  className = '',
  size,
  filled = false,
}: {
  name: IconName;
  className?: string;
  /** Defaults to 1em so an icon tracks the text it sits beside. */
  size?: number | string;
  /** Solid rather than outlined — rating stars need to read as filled. */
  filled?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size ?? '1em'}
      height={size ?? '1em'}
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}
