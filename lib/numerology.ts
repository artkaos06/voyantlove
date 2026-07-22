// Pythagorean numerology — pure calculation + interpretation data.
// Shared between the static page content and the interactive calculator
// so both read from the same source of truth.

export interface NumberMeaning {
  num: number;
  title: string;
  desc: string;
}

const LETTER_VALUES: Record<string, number> = {
  A: 1, J: 1, S: 1,
  B: 2, K: 2, T: 2,
  C: 3, L: 3, U: 3,
  D: 4, M: 4, V: 4,
  E: 5, N: 5, W: 5,
  F: 6, O: 6, X: 6,
  G: 7, P: 7, Y: 7,
  H: 8, Q: 8, Z: 8,
  I: 9, R: 9,
};

const VOWELS = new Set(['A', 'E', 'I', 'O', 'U']);

/** Strip ligatures, accents and non-letters, uppercase the rest. */
export function normalizeName(name: string): string {
  return name
    .replace(/œ/gi, 'oe')
    .replace(/æ/gi, 'ae')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toUpperCase()
    .replace(/[^A-Z]/g, '');
}

/** Reduce to a single digit, stopping early on master numbers 11/22/33. */
export function reduceToLifePathOrMaster(n: number): number {
  while (n > 9 && n !== 11 && n !== 22 && n !== 33) {
    n = String(n)
      .split('')
      .reduce((sum, d) => sum + Number(d), 0);
  }
  return n;
}

/** dateStr expected as 'YYYY-MM-DD' (native <input type="date"> format). */
export function lifePathNumber(dateStr: string): number {
  const sum = dateStr
    .replace(/[^0-9]/g, '')
    .split('')
    .reduce((acc, d) => acc + Number(d), 0);
  return reduceToLifePathOrMaster(sum);
}

export function expressionNumber(fullName: string): number {
  const letters = normalizeName(fullName);
  const sum = letters
    .split('')
    .reduce((acc, ch) => acc + (LETTER_VALUES[ch] || 0), 0);
  return reduceToLifePathOrMaster(sum);
}

export function intimateNumber(fullName: string): number {
  const letters = normalizeName(fullName);
  const sum = letters
    .split('')
    .filter((ch) => VOWELS.has(ch))
    .reduce((acc, ch) => acc + (LETTER_VALUES[ch] || 0), 0);
  return reduceToLifePathOrMaster(sum);
}

export const LIFE_PATH_MEANINGS: NumberMeaning[] = [
  { num: 1, title: 'Le Pionnier', desc: 'Cherche un partenaire admiratif de son leadership. En amour, peut manquer de compromis. Compatible avec 3, 5, 6.' },
  { num: 2, title: 'Le Diplomate', desc: 'Né pour le partenariat, ressent profondément les émotions. Cherche l\'harmonie absolue. Compatible avec 2, 6, 8.' },
  { num: 3, title: 'L\'Artiste', desc: 'Amoureux joyeux et expressif, craint l\'ennui. Cherche la créativité partagée. Compatible avec 1, 5, 9.' },
  { num: 4, title: 'Le Bâtisseur', desc: 'Amour stable, fidèle et durable. Cherche la sécurité avant tout. Compatible avec 2, 4, 8.' },
  { num: 5, title: 'L\'Aventurier', desc: 'Passionné mais craint l\'enfermement. Cherche la liberté dans la relation. Compatible avec 1, 3, 7.' },
  { num: 6, title: 'Le Nourricier', desc: 'Le plus orienté vers la famille et l\'amour. Cherche engagement et foyer. Compatible avec 2, 4, 9.' },
  { num: 7, title: 'Le Mystique', desc: 'Cherche une connexion intellectuelle et spirituelle. Peut sembler distant. Compatible avec 5, 7.' },
  { num: 8, title: 'Le Bâtisseur d\'Empire', desc: 'Amour lié au partage de réussite et d\'ambition. Compatible avec 2, 4, 6.' },
  { num: 9, title: 'Le Sage', desc: 'Amour universel et idéaliste. Cherche une mission commune. Compatible avec 3, 6, 9.' },
];

export const EXPRESSION_MEANINGS: NumberMeaning[] = [
  { num: 1, title: 'Affirmation directe', desc: 'Affirme ses sentiments sans détour, cherche un partenaire qui admire son indépendance affective.' },
  { num: 2, title: 'Écoute et présence', desc: 'Exprime l\'amour par l\'écoute et la présence, doué pour la diplomatie relationnelle.' },
  { num: 3, title: 'Expression joyeuse', desc: 'Communique ses sentiments avec humour et légèreté, séduit par sa joie de vivre.' },
  { num: 4, title: 'Actes concrets', desc: 'Montre son amour par des actes concrets et la fiabilité plutôt que par les mots.' },
  { num: 5, title: 'Mouvement partagé', desc: 'Exprime son attachement à travers le mouvement et la nouveauté partagée.' },
  { num: 6, title: 'Dévouement', desc: 'Se dévoue entièrement à l\'être aimé, exprime l\'amour par le soin et la protection.' },
  { num: 7, title: 'Réserve profonde', desc: 'Réservé dans l\'expression de ses sentiments, préfère la profondeur au grand discours.' },
  { num: 8, title: 'Ambition partagée', desc: 'Manifeste son amour par l\'ambition partagée et la réussite construite à deux.' },
  { num: 9, title: 'Générosité universelle', desc: 'Aime avec générosité universelle, s\'exprime par la compassion et le don de soi.' },
];

export const INTIMATE_MEANINGS: NumberMeaning[] = [
  { num: 1, title: 'Besoin d\'admiration', desc: 'Besoin profond d\'être admiré et de se sentir unique dans le cœur de l\'autre.' },
  { num: 2, title: 'Besoin d\'harmonie', desc: 'Besoin profond d\'harmonie, de tendresse constante et de ne jamais se sentir seul.' },
  { num: 3, title: 'Besoin de stimulation', desc: 'Besoin profond d\'être stimulé, diverti et de partager sa créativité.' },
  { num: 4, title: 'Besoin de sécurité', desc: 'Besoin profond de sécurité affective et de stabilité dans la durée.' },
  { num: 5, title: 'Besoin de liberté', desc: 'Besoin profond de liberté et de ne jamais se sentir enfermé dans la relation.' },
  { num: 6, title: 'Besoin de foyer', desc: 'Besoin profond de fonder un foyer et de prendre soin d\'un être cher.' },
  { num: 7, title: 'Besoin de profondeur', desc: 'Besoin profond de connexion intellectuelle et spirituelle rare.' },
  { num: 8, title: 'Besoin de reconnaissance', desc: 'Besoin profond de bâtir quelque chose de grand et reconnu avec son partenaire.' },
  { num: 9, title: 'Besoin d\'amour sans limites', desc: 'Besoin profond d\'aimer sans limites et de vivre une mission commune.' },
];

export const MASTER_MEANINGS: NumberMeaning[] = [
  { num: 11, title: 'L\'Amour Intuitif et Spirituel', desc: 'Intuition supérieure et sensibilité extrême. Cherche une connexion qui touche l\'âme, pas seulement le corps. Défi : ne pas idéaliser le partenaire au point d\'en être déçu.' },
  { num: 22, title: 'L\'Amour Bâtisseur', desc: 'Veut construire quelque chose de grand et durable avec son partenaire : famille, mission commune. Défi : ne pas sacrifier l\'intimité émotionnelle sur l\'autel de la grande mission.' },
  { num: 33, title: 'L\'Amour Universel', desc: 'Aime avec une générosité et une compassion qui dépassent le cadre du couple. Défi : apprendre à recevoir autant qu\'il/elle donne.' },
];

export function findMeaning(list: NumberMeaning[], num: number): NumberMeaning | undefined {
  return list.find((m) => m.num === num);
}
