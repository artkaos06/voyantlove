// Pure text-analysis helpers for scripts/validate-pseo.ts.
//
// No filesystem/network access here on purpose — keeps this module trivially
// unit-testable (see tests/validatePseo.test.ts) and reusable from both the
// CLI script and its tests without spinning up the rest of the validator.

const FR_STOPWORDS = new Set([
  'le', 'la', 'les', 'un', 'une', 'des', 'de', 'du', 'et', 'ou', 'a', 'à',
  'en', 'pour', 'sur', 'avec', 'dans', 'par', 'qui', 'que', 'quoi', 'ce',
  'cette', 'ces', 'cet', 'son', 'sa', 'ses', 'votre', 'vos', 'notre', 'nos',
  'est', 'sont', 'être', 'etre', 'avoir', 'a', 'plus', 'comme', 'mais',
  'aussi', 'tout', 'tous', 'toute', 'toutes', 'au', 'aux', 'd', 'l', 'qu',
  'n', 's', 'c', 'j', 'y', 'il', 'elle', 'ils', 'elles', 'vous', 'nous',
  'on', 'je', 'tu', 'pas', 'ne', 'se', 'sans', 'ou', 'où', 'donc', 'car',
  'si', 'leur', 'leurs', 'lui', 'eux', 'me', 'te', 'mon', 'ma', 'mes',
  'ton', 'ta', 'tes', 'voyantlove', 'amour', 'amoureuse', 'amoureux',
]);

/** Strip accents, lowercase, drop punctuation — matches the slug-normalization idiom already used in lib/compatibilitePairs.ts. */
export function foldAscii(text: string): string {
  return text
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase();
}

export function wordCount(text: string): number {
  return text.trim().split(/\s+/u).filter(Boolean).length;
}

/** Tokenize into normalized, stopword-free words (order preserved). */
export function significantWords(text: string): string[] {
  const folded = foldAscii(text).replace(/[^a-z0-9\s]/g, ' ');
  return folded
    .split(/\s+/)
    .filter((w) => w.length >= 3 && !FR_STOPWORDS.has(w));
}

/** Word 3-gram shingles of the significant (stopword-free) token stream. */
export function trigramShingles(text: string): Set<string> {
  const words = significantWords(text);
  const shingles = new Set<string>();
  for (let i = 0; i + 3 <= words.length; i++) {
    shingles.add(`${words[i]} ${words[i + 1]} ${words[i + 2]}`);
  }
  return shingles;
}

function jaccard<T>(a: Set<T>, b: Set<T>): number {
  if (a.size === 0 && b.size === 0) return 0;
  let intersection = 0;
  for (const item of a) if (b.has(item)) intersection++;
  const union = a.size + b.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

/** Near-duplicate BODY-content signal: word-trigram Jaccard similarity, 0..1. */
export function contentSimilarity(a: string, b: string): number {
  return jaccard(trigramShingles(a), trigramShingles(b));
}

/** Keyword-cannibalization signal: unigram (word-set) overlap of two titles/headings, 0..1. */
export function titleOverlap(a: string, b: string): number {
  const setA = new Set(significantWords(a));
  const setB = new Set(significantWords(b));
  return jaccard(setA, setB);
}

export function isKebabSlug(slug: string): boolean {
  return /^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug);
}
