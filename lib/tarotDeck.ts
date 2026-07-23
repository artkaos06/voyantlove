// Tarot deck data for spread-based draws (distinct from components/TarotOuiNon.tsx,
// which has its own oui/non-classified deck for the binary yes/no tool).
// General love-reading meanings, position-agnostic — the spread's position labels
// supply the context, the card supplies the energy.

export interface SpreadCard {
  name: string;
  emoji: string;
  meaning: string;
}

export const TAROT_SPREAD_DECK: SpreadCard[] = [
  { name: 'Le Soleil', emoji: '☀️', meaning: 'Joie, clarté et épanouissement. Une énergie lumineuse et sans ambiguïté traverse cette dimension de votre situation.' },
  { name: 'La Lune', emoji: '🌙', meaning: 'Intuition, mystère et émotions cachées. Tout n\'est pas encore visible ici — fiez-vous à votre ressenti plus qu\'aux apparences.' },
  { name: 'L\'Étoile', emoji: '⭐', meaning: 'Espoir et renouveau. Après une période difficile, une guérison douce et une confiance retrouvée se dessinent.' },
  { name: 'L\'Amoureux', emoji: '💕', meaning: 'Un choix de cœur déterminant. Cette carte parle de connexion authentique et de décision amoureuse à assumer.' },
  { name: 'L\'Impératrice', emoji: '👑', meaning: 'Abondance affective et créativité. Une énergie nourricière et généreuse imprègne cette partie de votre histoire.' },
  { name: 'L\'Empereur', emoji: '🛡️', meaning: 'Structure et engagement. Le besoin de stabilité et de cadre clair domine ici, parfois au prix de la spontanéité.' },
  { name: 'Le Monde', emoji: '🌍', meaning: 'Accomplissement d\'un cycle. Quelque chose se boucle ici avec succès, ouvrant la voie à une nouvelle étape.' },
  { name: 'La Roue de Fortune', emoji: '🎡', meaning: 'Changement et timing. Les circonstances évoluent indépendamment de votre volonté — le moment compte plus que l\'effort.' },
  { name: 'La Justice', emoji: '⚖️', meaning: 'Équilibre et vérité. Une clarification honnête, parfois inconfortable, s\'impose dans cette dimension.' },
  { name: 'Le Pendu', emoji: '🙃', meaning: 'Pause et lâcher-prise. Rien ne sert de forcer ici — un changement de perspective doit précéder l\'action.' },
  { name: 'La Tempérance', emoji: '⚗️', meaning: 'Harmonie et patience. Un dosage juste entre deux énergies opposées permet d\'avancer sans rupture.' },
  { name: 'La Force', emoji: '🦁', meaning: 'Douceur qui dompte l\'intensité. Le courage tranquille l\'emporte ici sur la confrontation directe.' },
  { name: 'Le Chariot', emoji: '🏇', meaning: 'Avancée déterminée. Une direction claire se dessine, portée par la volonté plus que par les circonstances.' },
  { name: 'L\'Hermite', emoji: '🕯️', meaning: 'Introspection nécessaire. Cette dimension demande du recul et de la solitude choisie avant toute décision.' },
  { name: 'La Tour', emoji: '⚡', meaning: 'Bouleversement révélateur. Une structure ou une illusion s\'effondre ici pour laisser place à quelque chose de plus vrai.' },
  { name: 'Le Diable', emoji: '⛓️', meaning: 'Attachement ou dépendance. Une dynamique contraignante mérite d\'être regardée en face dans cette partie de la situation.' },
  { name: 'As de Coupe', emoji: '🏆', meaning: 'Nouveau départ émotionnel. Un sentiment sincère et neuf émerge, plein de potentiel.' },
  { name: 'Deux de Coupe', emoji: '🤝', meaning: 'Connexion réciproque. Un échange équilibré et sincère se joue ici entre les deux personnes concernées.' },
  { name: 'Trois d\'Épée', emoji: '💔', meaning: 'Blessure à reconnaître. Une douleur non résolue influence cette dimension — la guérison passe par l\'honnêteté.' },
  { name: 'Cinq de Coupe', emoji: '🥀', meaning: 'Regret et ce qui reste. Le regard reste tourné vers ce qui a été perdu, alors que des ressources restent disponibles.' },
  { name: 'Huit de Coupe', emoji: '🚶', meaning: 'Départ conscient. Il devient nécessaire de quitter une situation qui ne nourrit plus, même si elle est familière.' },
  { name: 'Dix de Coupe', emoji: '🌈', meaning: 'Bonheur durable. Une harmonie affective profonde et stable caractérise cette dimension de votre histoire.' },
  { name: 'Quatre de Bâton', emoji: '🎉', meaning: 'Célébration et fondations. Un engagement ou une étape se pose sur des bases solides et joyeuses.' },
  { name: 'Le Cavalier de Coupe', emoji: '🐎', meaning: 'Message ou proposition romantique. Une invitation ou une nouvelle sentimentale approche.' },
];
