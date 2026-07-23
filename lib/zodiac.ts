// Sun-sign lookup + simplified element-based compatibility.
// Note: this is intentionally NOT a full synastry engine — real synastry
// needs birth time + location and an ephemeris. This gives an honest,
// simplified read (sun sign + element) framed with the same aspect
// vocabulary (trigone/carré/opposition) already used on the synastrie page,
// and is explicit that a full chart needs a real consultation.

export type Element = 'Feu' | 'Terre' | 'Air' | 'Eau';

export interface ZodiacSign {
  name: string;
  emoji: string;
  element: Element;
  /** [startMonth, startDay, endMonth, endDay] — 1-indexed months */
  range: [number, number, number, number];
}

export const ZODIAC_SIGNS: ZodiacSign[] = [
  { name: 'Bélier', emoji: '♈', element: 'Feu', range: [3, 21, 4, 19] },
  { name: 'Taureau', emoji: '♉', element: 'Terre', range: [4, 20, 5, 20] },
  { name: 'Gémeaux', emoji: '♊', element: 'Air', range: [5, 21, 6, 20] },
  { name: 'Cancer', emoji: '♋', element: 'Eau', range: [6, 21, 7, 22] },
  { name: 'Lion', emoji: '♌', element: 'Feu', range: [7, 23, 8, 22] },
  { name: 'Vierge', emoji: '♍', element: 'Terre', range: [8, 23, 9, 22] },
  { name: 'Balance', emoji: '♎', element: 'Air', range: [9, 23, 10, 22] },
  { name: 'Scorpion', emoji: '♏', element: 'Eau', range: [10, 23, 11, 21] },
  { name: 'Sagittaire', emoji: '♐', element: 'Feu', range: [11, 22, 12, 21] },
  { name: 'Capricorne', emoji: '♑', element: 'Terre', range: [12, 22, 1, 19] },
  { name: 'Verseau', emoji: '♒', element: 'Air', range: [1, 20, 2, 18] },
  { name: 'Poissons', emoji: '♓', element: 'Eau', range: [2, 19, 3, 20] },
];

/** dateStr expected as 'YYYY-MM-DD'. */
export function zodiacSign(dateStr: string): ZodiacSign | null {
  const [, m, d] = dateStr.split('-').map(Number);
  if (!m || !d) return null;

  return (
    ZODIAC_SIGNS.find(({ range: [sm, sd, em, ed] }) => {
      if (sm === em) return m === sm && d >= sd && d <= ed;
      // Wraps across year boundary (Capricorne: Dec 22 -> Jan 19)
      if (sm > em) return (m === sm && d >= sd) || (m === em && d <= ed) || (m > sm || m < em);
      return (m === sm && d >= sd) || (m === em && d <= ed) || (m > sm && m < em);
    }) || null
  );
}

export interface CompatibilityRead {
  aspect: 'Trigone' | 'Sextile' | 'Carré' | 'Opposition';
  headline: string;
  desc: string;
}

const ELEMENT_PAIR_KEY = (a: Element, b: Element) => [a, b].sort().join('-');

const COMPATIBILITY: Record<string, CompatibilityRead> = {
  // Same element
  'Feu-Feu': { aspect: 'Trigone', headline: 'Élan partagé', desc: 'Deux natures Feu se comprennent instinctivement : même énergie, même goût du mouvement et de la passion. L\'harmonie est naturelle, un peu comme un trigone en synastrie — mais veillez à laisser de la place à la douceur, pas seulement à l\'intensité.' },
  'Terre-Terre': { aspect: 'Trigone', headline: 'Stabilité partagée', desc: 'Deux natures Terre construisent sur les mêmes bases : sécurité, fiabilité, sens pratique. Cette harmonie rappelle un trigone en synastrie — solide et confortable, à condition de cultiver aussi la spontanéité.' },
  'Air-Air': { aspect: 'Trigone', headline: 'Connexion mentale', desc: 'Deux natures Air communiquent sans effort : idées, curiosité et légèreté partagées. Comme un trigone en synastrie, l\'entente intellectuelle est immédiate — l\'enjeu est d\'ancrer cette complicité dans le concret.' },
  'Eau-Eau': { aspect: 'Trigone', headline: 'Fusion émotionnelle', desc: 'Deux natures Eau se comprennent à demi-mot sur le plan émotionnel. Cette profondeur évoque un trigone en synastrie — intense et intuitive, à condition de ne pas se noyer l\'un dans l\'autre.' },
  // Complementary (traditionally compatible)
  'Air-Feu': { aspect: 'Sextile', headline: 'Le vent qui attise la flamme', desc: 'L\'Air nourrit le Feu : la légèreté et les idées de l\'un stimulent l\'énergie et l\'enthousiasme de l\'autre. Une dynamique complice, proche d\'un sextile en synastrie — vivante et facile, si chacun laisse à l\'autre son espace.' },
  'Eau-Terre': { aspect: 'Sextile', headline: 'La pluie qui fait pousser', desc: 'L\'Eau nourrit la Terre : la sensibilité de l\'un donne vie et profondeur à la stabilité de l\'autre. Une complicité naturelle, proche d\'un sextile en synastrie — nourrissante pour les deux, si l\'Eau ne submerge pas la Terre.' },
  // Traditionally challenging (different pace/values)
  'Feu-Terre': { aspect: 'Carré', headline: 'Rythmes différents', desc: 'Le Feu avance vite, la Terre avance sûrement — ce décalage de rythme crée une tension stimulante, comme un carré en synastrie : source de friction, mais aussi de dépassement si chacun respecte le tempo de l\'autre.' },
  'Air-Terre': { aspect: 'Carré', headline: 'Idées contre concret', desc: 'L\'Air vit dans les idées, la Terre dans le tangible — un carré en synastrie typique : la tension pousse chacun à sortir de sa zone de confort, à condition de ne pas se juger mutuellement d\'être "trop dans sa tête" ou "trop terre-à-terre".' },
  // Traditionally most opposite
  'Eau-Feu': { aspect: 'Opposition', headline: 'Attraction magnétique', desc: 'Le Feu et l\'Eau s\'attirent précisément parce qu\'ils sont opposés — une polarité magnétique, comme une opposition en synastrie. Fascinante et intense, elle demande un vrai travail conscient pour que la vapeur ne devienne pas conflit.' },
  'Air-Eau': { aspect: 'Opposition', headline: 'Tête et cœur', desc: 'L\'Air raisonne, l\'Eau ressent — une polarité fascinante, comme une opposition en synastrie. L\'attraction est réelle, mais la compréhension mutuelle demande de traduire consciemment logique et émotion l\'une vers l\'autre.' },
};

export function elementCompatibility(a: Element, b: Element): CompatibilityRead {
  return COMPATIBILITY[ELEMENT_PAIR_KEY(a, b)];
}
