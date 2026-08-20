'use client';

import React from 'react';
import VoyantRail from './VoyantRail';

interface VoyantRailSectionProps {
  source: string;
  /** Heading above the block. Kept optional so a page can stay silent. */
  title?: string;
  /** Drop the outer padding when the caller already provides a section. */
  bare?: boolean;
}

/**
 * The commercial voyant block: three rails on three real orderings.
 *
 * Exists so the pages that never used <VoyantRecommendations> (the
 * /voyance-amour/ pillar, the tarot / rêves / astrologie / compatibilité hubs
 * and their dynamic routes) can show the same rails as everything else
 * without inheriting VoyantRecommendations' "Pourquoi choisir nos voyants ?"
 * reassurance grid, which those pages already cover in their own copy.
 *
 * The first rail is eager: on a commercial page this block IS the offer.
 */
export default function VoyantRailSection({ source, title, bare = false }: VoyantRailSectionProps) {
  const body = (
    <div className="space-y-8">
      {title && <h2 className="sr-only">{title}</h2>}
      <VoyantRail
        title="Voyants disponibles maintenant"
        subtitle="Tarif à la minute affiché sur chaque fiche."
        limit={16}
        source={`${source}-online`}
        lazy={false}
      />
      <VoyantRail
        title="Les mieux notés"
        subtitle="Classés par note moyenne, puis par nombre d’avis."
        limit={16}
        source={`${source}-top-rated`}
        sortBy="rating"
        lazy
      />
      <VoyantRail
        title="Les plus consultés"
        subtitle="Ceux que nos visiteurs appellent le plus."
        limit={16}
        source={`${source}-most-consulted`}
        sortBy="consultations"
        lazy
      />
    </div>
  );

  if (bare) return body;

  return (
    <section className="bg-white px-4 py-8">
      <div className="mx-auto max-w-6xl">{body}</div>
    </section>
  );
}
