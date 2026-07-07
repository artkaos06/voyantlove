// Télémaque dedicated numbers — three attribution buckets, one per campaign /
// angle, selected via the ?num= param. Télémaque reports reversement per number,
// so you learn which bucket drives paying calls despite phone conversion being
// otherwise attribution-blind. Shared by the quiz (/lp/lecture-amour) and the
// email click-to-call page (/appel) so the mapping never drifts.

export const PHONE_NUMBERS: Record<string, string> = {
  '1': '0423090950',
  '2': '0484200203',
  '3': '0175111171',
};

export const DEFAULT_NUM = '1';

/** 0423090950 → 04 23 09 09 50 */
export function formatPhone(n: string): string {
  return n.replace(/(\d{2})(?=\d)/g, '$1 ').trim();
}

/** Resolve a ?num= value to a phone number, falling back to the default. */
export function phoneForNum(num: string | null | undefined): string {
  return num && PHONE_NUMBERS[num] ? PHONE_NUMBERS[num] : PHONE_NUMBERS[DEFAULT_NUM];
}
