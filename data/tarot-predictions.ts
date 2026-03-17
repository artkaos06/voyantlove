export type SituationType = 'reconquete' | 'rupture' | 'nouvelle-rencontre' | 'sentiments' | 'crise-couple';
export type ZodiacSign = 'belier' | 'taureau' | 'gemeaux' | 'cancer' | 'lion' | 'vierge' | 'balance' | 'scorpion' | 'sagittaire' | 'capricorne' | 'verseau' | 'poissons';

export const ZODIAC_SIGNS: { value: ZodiacSign; label: string }[] = [
  { value: 'belier', label: 'Bélier (21 mars - 19 avril)' },
  { value: 'taureau', label: 'Taureau (20 avril - 20 mai)' },
  { value: 'gemeaux', label: 'Gémeaux (21 mai - 20 juin)' },
  { value: 'cancer', label: 'Cancer (21 juin - 22 juillet)' },
  { value: 'lion', label: 'Lion (23 juillet - 22 août)' },
  { value: 'vierge', label: 'Vierge (23 août - 22 septembre)' },
  { value: 'balance', label: 'Balance (23 septembre - 22 octobre)' },
  { value: 'scorpion', label: 'Scorpion (23 octobre - 21 novembre)' },
  { value: 'sagittaire', label: 'Sagittaire (22 novembre - 21 décembre)' },
  { value: 'capricorne', label: 'Capricorne (22 décembre - 19 janvier)' },
  { value: 'verseau', label: 'Verseau (20 janvier - 18 février)' },
  { value: 'poissons', label: 'Poissons (19 février - 20 mars)' },
];

export const SITUATION_TYPES: { value: SituationType; label: string }[] = [
  { value: 'reconquete', label: 'Reconquérir mon ex' },
  { value: 'rupture', label: 'Surmonter une rupture' },
  { value: 'nouvelle-rencontre', label: 'Rencontrer l\'amour' },
  { value: 'sentiments', label: 'Comprendre ses sentiments' },
  { value: 'crise-couple', label: 'Crise de couple' },
];

interface BasePrediction {
  card: string;
  cardEmoji: string;
  insight: string;
  advice: string;
}

interface ZodiacModifier {
  element: string;
  opening: string;
  timeframe: string;
}

const basePredictions: Record<SituationType, BasePrediction> = {
  reconquete: {
    card: 'Le Jugement',
    cardEmoji: '🔄',
    insight: 'Les cartes révèlent un cycle de renaissance dans votre relation. L\'énergie entre vous et votre ex n\'est pas éteinte — elle est en transformation. Des sentiments enfouis remontent à la surface, et un événement inattendu pourrait rouvrir le dialogue. La carte du Jugement indique que le passé n\'est pas terminé : une prise de conscience mutuelle est en cours.',
    advice: 'Le timing est essentiel dans votre situation. Les cartes conseillent de ne pas forcer le contact, mais de vous préparer à une ouverture. Travaillez sur vous-même et montrez votre évolution. Un voyant spécialisé peut vous révéler le moment exact où agir pour maximiser vos chances de reconquête.',
  },
  rupture: {
    card: 'L\'Étoile',
    cardEmoji: '⭐',
    insight: 'La carte de l\'Étoile apparaît dans votre tirage — c\'est un signe puissant de guérison et d\'espoir. Même si la douleur est encore présente, les énergies indiquent que cette rupture porte en elle les graines d\'un renouveau. Vous êtes plus fort(e) que vous ne le pensez, et cette épreuve vous mène vers quelque chose de meilleur.',
    advice: 'Les cartes vous invitent à lâcher prise sur ce qui ne vous sert plus. La guérison n\'est pas linéaire, mais elle est déjà en marche. Un éclairage approfondi par un voyant spécialisé peut vous aider à identifier les blocages émotionnels restants et accélérer votre reconstruction.',
  },
  'nouvelle-rencontre': {
    card: 'L\'Amoureux',
    cardEmoji: '💕',
    insight: 'La carte de l\'Amoureux est un signe clair : une rencontre significative se profile dans votre chemin de vie. Les énergies actuelles indiquent que l\'univers prépare un alignement favorable. Cette personne pourrait arriver par un cercle social existant ou une situation que vous n\'anticipez pas. Les cartes montrent une connexion authentique et profonde.',
    advice: 'Restez ouvert(e) aux opportunités et sortez de votre routine. Les cartes indiquent que cette rencontre nécessite que vous soyez visible et réceptif(ve). Un voyant spécialisé peut vous préciser le lieu, le timing et les signes à surveiller pour reconnaître cette personne quand elle se présentera.',
  },
  sentiments: {
    card: 'La Lune',
    cardEmoji: '🌙',
    insight: 'La carte de la Lune révèle des émotions cachées et des non-dits dans votre situation. Les sentiments de l\'autre personne sont plus complexes qu\'il n\'y paraît en surface. Il y a de la peur, du désir, et une hésitation qui masque des sentiments réels. Les cartes indiquent que cette personne pense à vous plus souvent qu\'elle ne le montre.',
    advice: 'La vérité sur ses sentiments est accessible, mais elle demande une lecture plus approfondie. Les cartes de surface ne suffisent pas pour une situation aussi nuancée. Un voyant spécialisé en sentiments peut capter les émotions exactes de cette personne et vous révéler ce qu\'elle n\'ose pas exprimer.',
  },
  'crise-couple': {
    card: 'La Tempérance',
    cardEmoji: '⚖️',
    insight: 'La carte de la Tempérance apparaît dans votre tirage — elle indique que l\'équilibre peut être restauré. La crise que vous traversez n\'est pas une fin mais un point de transformation. Les cartes montrent que les deux partenaires ont besoin d\'être entendus. Des blessures non exprimées alimentent le conflit, mais la volonté de reconstruire existe des deux côtés.',
    advice: 'Les cartes suggèrent que la communication est la clé. Mais attention : ce n\'est pas n\'importe quelle conversation qui résoudra la crise. Il faut comprendre les dynamiques profondes en jeu. Un voyant spécialisé en couple peut identifier les vrais points de tension et vous guider vers les mots et actions qui restaureront l\'harmonie.',
  },
};

const zodiacModifiers: Record<ZodiacSign, ZodiacModifier> = {
  belier: {
    element: 'Feu',
    opening: 'Votre nature de Bélier, portée par le feu et l\'impulsion, colore fortement cette situation.',
    timeframe: 'Les astres indiquent un moment charnière dans les 2 à 3 prochaines semaines. Mars, votre planète, entre dans une phase favorable à l\'action.',
  },
  taureau: {
    element: 'Terre',
    opening: 'En tant que Taureau, votre besoin de stabilité et de sécurité émotionnelle est au cœur de cette situation.',
    timeframe: 'Vénus, votre planète, favorise des développements positifs d\'ici 3 à 4 semaines. La patience sera votre alliée.',
  },
  gemeaux: {
    element: 'Air',
    opening: 'Votre esprit de Gémeaux, vif et communicatif, joue un rôle clé dans la dynamique actuelle.',
    timeframe: 'Mercure stimule votre secteur sentimental dans les 10 prochains jours. Une conversation importante se profile.',
  },
  cancer: {
    element: 'Eau',
    opening: 'Votre sensibilité de Cancer amplifie les émotions liées à cette situation. Votre intuition ne vous trompe pas.',
    timeframe: 'La prochaine Nouvelle Lune dans votre signe, d\'ici 2 à 3 semaines, ouvrira un nouveau chapitre émotionnel.',
  },
  lion: {
    element: 'Feu',
    opening: 'En tant que Lion, votre générosité et votre fierté influencent cette situation amoureuse de manière significative.',
    timeframe: 'Le Soleil, votre astre, illumine votre secteur amoureux dans les 3 prochaines semaines. Un élan de confiance s\'annonce.',
  },
  vierge: {
    element: 'Terre',
    opening: 'Votre esprit analytique de Vierge cherche des réponses logiques, mais cette situation demande aussi d\'écouter votre cœur.',
    timeframe: 'Les énergies se clarifient progressivement. D\'ici un mois, Mercure apportera la lucidité que vous cherchez.',
  },
  balance: {
    element: 'Air',
    opening: 'En tant que Balance, l\'harmonie relationnelle est votre besoin fondamental. Ce déséquilibre actuel vous affecte profondément.',
    timeframe: 'Vénus favorise un rééquilibrage dans les 2 à 3 prochaines semaines. Un geste de l\'autre personne est probable.',
  },
  scorpion: {
    element: 'Eau',
    opening: 'Votre intensité de Scorpion donne à cette situation une profondeur émotionnelle rare. Vos pressentiments sont justes.',
    timeframe: 'Pluton active des transformations profondes dans votre vie sentimentale. Les 3 prochaines semaines seront révélatrices.',
  },
  sagittaire: {
    element: 'Feu',
    opening: 'Votre nature de Sagittaire, optimiste et aventurière, vous pousse à voir au-delà de la situation actuelle.',
    timeframe: 'Jupiter, votre planète de chance, ouvre une fenêtre favorable d\'ici 2 à 4 semaines. Un voyage ou déplacement pourrait jouer un rôle.',
  },
  capricorne: {
    element: 'Terre',
    opening: 'En tant que Capricorne, vous abordez cette situation avec sérieux et détermination. Votre patience est une force.',
    timeframe: 'Saturne consolide lentement mais sûrement votre secteur amoureux. Des résultats concrets apparaîtront d\'ici un mois.',
  },
  verseau: {
    element: 'Air',
    opening: 'Votre originalité de Verseau apporte un regard unique sur cette situation. Votre indépendance est à la fois votre force et votre défi.',
    timeframe: 'Uranus stimule des changements inattendus dans les 2 prochaines semaines. Restez ouvert(e) aux surprises.',
  },
  poissons: {
    element: 'Eau',
    opening: 'Votre sensibilité de Poissons capte des énergies que d\'autres ne perçoivent pas. Votre intuition sur cette situation est particulièrement aiguisée.',
    timeframe: 'Neptune renforce vos capacités intuitives. D\'ici 2 à 3 semaines, un rêve ou un signe vous apportera une réponse importante.',
  },
};

export interface TarotPrediction {
  card: string;
  cardEmoji: string;
  opening: string;
  insight: string;
  advice: string;
  timeframe: string;
  element: string;
}

export function getPrediction(situation: SituationType, zodiac: ZodiacSign, name: string): TarotPrediction {
  const base = basePredictions[situation];
  const zodiacMod = zodiacModifiers[zodiac];

  return {
    card: base.card,
    cardEmoji: base.cardEmoji,
    opening: `${name}, ${zodiacMod.opening.charAt(0).toLowerCase()}${zodiacMod.opening.slice(1)}`,
    insight: base.insight,
    advice: base.advice,
    timeframe: zodiacMod.timeframe,
    element: zodiacMod.element,
  };
}
