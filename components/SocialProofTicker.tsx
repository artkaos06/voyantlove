'use client';

import { useEffect, useState } from 'react';

type Entry = { name: string; city: string; minutesAgo: number };

const ENTRIES: Entry[] = [
  { name: 'Sophie',    city: 'Lyon',        minutesAgo: 2 },
  { name: 'Marion',    city: 'Bordeaux',    minutesAgo: 5 },
  { name: 'Aline',     city: 'Marseille',   minutesAgo: 8 },
  { name: 'Julie',     city: 'Toulouse',    minutesAgo: 11 },
  { name: 'Catherine', city: 'Strasbourg',  minutesAgo: 14 },
  { name: 'Céline',    city: 'Nantes',      minutesAgo: 17 },
  { name: 'Nathalie',  city: 'Rennes',      minutesAgo: 22 },
  { name: 'Corinne',   city: 'Nice',        minutesAgo: 25 },
  { name: 'Laetitia',  city: 'Montpellier', minutesAgo: 29 },
  { name: 'Valérie',   city: 'Lille',       minutesAgo: 33 },
];

export default function SocialProofTicker() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % ENTRIES.length);
        setVisible(true);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const entry = ENTRIES[index];
  const minuteLabel = entry.minutesAgo === 1 ? 'minute' : 'minutes';

  return (
    <div
      className="inline-flex items-center gap-2 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-4 py-2 text-xs text-gray-700 shadow-sm"
      aria-live="polite"
    >
      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" aria-hidden></span>
      <span className={`transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        Dernière consultation il y a {entry.minutesAgo} {minuteLabel} • {entry.name}, {entry.city}
      </span>
    </div>
  );
}
