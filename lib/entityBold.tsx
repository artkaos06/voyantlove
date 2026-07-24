import { Fragment, type ReactNode } from 'react';

// Astrological entities to bold for semantic entity-density (Gübür framework).
// Bolds the FIRST occurrence of each distinct term per text block, so density
// lands around 5-7 entities per 200 words without saturating.
// Case-sensitive on purpose: "Air" (element) bolds, "l'air frais" does not;
// "Mars" (planet) bolds, "Marseille" does not (word-boundary guard below).
const ENTITY_TERMS = [
  'compatibilité amoureuse',
  'signes fixes', 'signes cardinaux', 'signes mutables',
  'Bélier', 'Taureau', 'Gémeaux', 'Cancer', 'Lion', 'Vierge', 'Balance',
  'Scorpion', 'Sagittaire', 'Capricorne', 'Verseau', 'Poissons',
  'trigone', 'sextile', 'carré', 'opposition', 'conjonction', 'quinconce',
  'Vénus', 'Mars', 'Lune', 'Soleil', 'Jupiter', 'Saturne', 'Pluton',
  'Mercure', 'Uranus', 'Neptune',
  'Feu', 'Terre', 'Air', 'Eau',
];

const SORTED = [...ENTITY_TERMS].sort((a, b) => b.length - a.length);
const PATTERN = new RegExp(
  '(' + SORTED.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')',
  'g'
);

const isWordChar = (c: string | undefined) => !!c && /[A-Za-zÀ-ÿ]/.test(c);

export function renderWithEntities(text: string): ReactNode {
  const used = new Set<string>();
  const nodes: ReactNode[] = [];
  let last = 0;
  let key = 0;
  let m: RegExpExecArray | null;
  PATTERN.lastIndex = 0;

  while ((m = PATTERN.exec(text)) !== null) {
    const term = m[0];
    const norm = term.toLowerCase();
    const before = text[m.index - 1];
    const after = text[m.index + term.length];
    // Skip matches inside a larger word, and repeat occurrences of a term.
    if (isWordChar(before) || isWordChar(after) || used.has(norm)) continue;
    used.add(norm);
    if (m.index > last) nodes.push(<Fragment key={key++}>{text.slice(last, m.index)}</Fragment>);
    nodes.push(<strong key={key++}>{term}</strong>);
    last = m.index + term.length;
  }
  if (last < text.length) nodes.push(<Fragment key={key++}>{text.slice(last)}</Fragment>);
  return nodes;
}
