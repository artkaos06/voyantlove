'use client';

import React from 'react';
import { useVoyants } from '@/lib/useVoyants';
import { getAffiliateLink } from '@/lib/voyants';
import { trackAffiliateClick } from '@/lib/glyphex';

interface DynamicCTAButtonProps {
  label: string;
  source: string;
  className?: string;
  /** Which online voyant to pick: 0 = first, 1 = second, etc. */
  voyantIndex?: number;
}

export default function DynamicCTAButton({
  label,
  source,
  className = '',
  voyantIndex = 0,
}: DynamicCTAButtonProps) {
  const { voyants: liveVoyants, loading } = useVoyants();

  if (loading || liveVoyants.length === 0) return null;

  const selectedVoyant = liveVoyants[Math.min(voyantIndex, liveVoyants.length - 1)];
  const affiliateLink = getAffiliateLink(selectedVoyant.ID, source);

  const handleClick = () => {
    trackAffiliateClick(selectedVoyant.ID, source, selectedVoyant.VOYANT);
  };

  return (
    <a
      href={affiliateLink}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={handleClick}
      className={className}
    >
      {label}
    </a>
  );
}
