// Screenshot component for review pages.
//
// Use case: review pages need real screenshots from the platform being
// reviewed (Keen homepage, advisor list, pricing display, etc.) to look
// credible. But we don't always have them on day-one — and we want the
// page to look polished even before the screenshots are added.
//
// This component renders a styled "screenshot mockup" placeholder when
// `src` is not provided, and a real Next.js Image when it is. Captions
// and alt text always render. To add the real screenshot later, drop the
// file into /public/images/<path> and add `src="/images/<path>"` to the
// component.
//
// Captions are required (not optional) — they reinforce the editorial
// framing and serve as the alt text fallback for accessibility.

import Image from 'next/image';

interface ScreenshotProps {
  src?: string; // omit to render placeholder
  alt: string;
  caption: string;
  width?: number;
  height?: number;
  /** Aspect ratio shown in the placeholder; defaults to 16/10. */
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

const ASPECT_CLASSES: Record<NonNullable<ScreenshotProps['aspectRatio']>, string> = {
  landscape: 'aspect-[16/10]',
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
};

export default function Screenshot({
  src,
  alt,
  caption,
  width = 1200,
  height = 750,
  aspectRatio = 'landscape',
}: ScreenshotProps) {
  return (
    <figure className="not-prose my-8">
      {src ? (
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-auto"
          />
        </div>
      ) : (
        <div
          className={`${ASPECT_CLASSES[aspectRatio]} rounded-xl border-2 border-dashed border-gray-300 bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center p-6`}
          role="img"
          aria-label={alt}
        >
          <div className="text-center max-w-sm">
            <div className="text-4xl text-purple-300 mb-3">▣</div>
            <p className="font-semibold text-gray-700 text-sm mb-1">
              Screenshot placeholder
            </p>
            <p className="text-xs text-gray-500">{alt}</p>
          </div>
        </div>
      )}
      <figcaption className="text-sm text-gray-600 italic mt-3 text-center">
        {caption}
      </figcaption>
    </figure>
  );
}
