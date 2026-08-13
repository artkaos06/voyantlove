interface EEATSignalProps {
  source?: string;
  lastUpdated?: string;
  method?: string;
  colorScheme?: 'purple' | 'red' | 'green' | 'blue' | 'rose' | 'teal' | 'cyan' | 'orange' | 'pink';
}

/**
 * E-E-A-T Signal Component
 * Displays authorship, methodology, and freshness signals for SEO
 */
export default function EEATSignal({
  source = 'VoyantLove',
  lastUpdated,
  method = 'Tarot et voyance professionnelle',
  colorScheme = 'purple',
}: EEATSignalProps) {
  const colors = {
    purple: 'bg-purple-50 border-purple-500',
    red: 'bg-red-50 border-red-500',
    green: 'bg-green-50 border-green-500',
    blue: 'bg-blue-50 border-blue-500',
    rose: 'bg-rose-50 border-rose-500',
    teal: 'bg-teal-50 border-teal-500',
    cyan: 'bg-cyan-50 border-cyan-500',
    orange: 'bg-orange-50 border-orange-500',
    pink: 'bg-pink-50 border-pink-500',
  };

  // Only show a "Mis à jour" date when the page passes a real one. The old
  // `new Date()` fallback rendered the *build* date on every page, implying
  // fresh updates that never happened, a fake-freshness signal search
  // engines penalize. Pages that want the freshness signal pass `lastUpdated`.
  return (
    <div className={`${colors[colorScheme]} border-l-4 p-4 mb-8 text-sm text-gray-700`}>
      <strong>Source :</strong> {source} • {' '}
      {lastUpdated && (
        <>
          <strong>Mis à jour :</strong> {lastUpdated} • {' '}
        </>
      )}
      <strong>Méthode :</strong> {method}
    </div>
  );
}
