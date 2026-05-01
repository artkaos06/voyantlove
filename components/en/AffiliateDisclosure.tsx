// Above-the-fold disclosure block for affiliate review pages.
//
// FTC + Google Ads policy require clear, conspicuous disclosure of affiliate
// relationships. This component renders the standard disclosure used across
// all review and topic pages on lovepsychicguide.com.
//
// Two visual variants:
//   - 'banner'  : prominent box, used on review pages (above the fold)
//   - 'inline'  : muted line, used in footers or end-of-article positions

interface AffiliateDisclosureProps {
  variant?: 'banner' | 'inline';
  className?: string;
}

export default function AffiliateDisclosure({
  variant = 'banner',
  className = '',
}: AffiliateDisclosureProps) {
  if (variant === 'inline') {
    return (
      <p className={`text-xs text-gray-500 ${className}`}>
        Disclosure: LovePsychicGuide may earn a commission when readers sign up
        for services through our links. This doesn&apos;t affect what we
        recommend or our editorial scoring. We only recommend services we have
        researched and would consider using ourselves.
      </p>
    );
  }

  return (
    <div
      className={`bg-amber-50 border-l-4 border-amber-400 text-amber-900 p-4 rounded-r-md text-sm ${className}`}
      role="note"
      aria-label="Affiliate disclosure"
    >
      <p className="font-semibold mb-1">Affiliate disclosure</p>
      <p>
        LovePsychicGuide is reader-supported. When you sign up for a service
        through one of our links, we may earn a commission at no extra cost to
        you. This compensation does not influence our reviews, ratings, or
        recommendations — we only feature services we have researched and would
        consider using ourselves. <em>For entertainment purposes; psychic
        readings are not a substitute for licensed mental-health, medical, or
        legal advice.</em>
      </p>
    </div>
  );
}
