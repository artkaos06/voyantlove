// Symbolic love-oracle deck (Lenormand-tradition symbols, the same family
// referenced by Oracle Belline / Oracle Gé on the site). Single-card draws.
//
// Deck order is the card numbering: components/OracleDraw.tsx shows a drawn
// card as "index + 1" plus its name, the way a numbered oracle deck reads.
// Reordering these entries renumbers the cards.

export interface OracleCard {
  name: string;
  message: string;
}

export const ORACLE_DECK: OracleCard[] = [
  { name: 'Le Cœur', message: 'Un sentiment sincère est au centre de votre question. L\'amour présent est réel, laissez-le s\'exprimer sans crainte.' },
  { name: 'La Bague', message: 'Engagement et union. Cette carte parle de lien durable, de promesse tenue ou à venir.' },
  { name: 'Le Bouquet', message: 'Invitation et douceur. Un geste attentionné ou une proposition agréable se profile bientôt.' },
  { name: 'La Lettre', message: 'Une nouvelle arrive, écrite ou orale. Une communication importante va éclairer votre situation.' },
  { name: 'L\'Étoile', message: 'Espoir fondé. Le chemin est encore incertain, mais l\'énergie autour de vous est favorable.' },
  { name: 'L\'Ancre', message: 'Stabilité recherchée ou trouvée. Le besoin de sécurité affective domine cette période.' },
  { name: 'Le Soleil', message: 'Clarté et joie. Ce que vous viviez dans l\'incertitude devient enfin lumineux et évident.' },
  { name: 'La Lune', message: 'Sensibilité et introspection. Vos émotions demandent à être écoutées avant toute décision.' },
  { name: 'La Clé', message: 'Une solution se débloque. Ce qui semblait fermé trouve une ouverture inattendue.' },
  { name: 'Le Chemin', message: 'Un choix se présente. Deux directions s\'offrent à vous, l\'une demande du courage, l\'autre de la patience.' },
  { name: 'La Maison', message: 'Foyer et vie commune. Cette carte évoque la construction d\'un cadre de vie partagé.' },
  { name: 'Les Oiseaux', message: 'Dialogue et échange. Une conversation à deux clarifiera ce qui reste flou entre vous.' },
  { name: 'Le Serpent', message: 'Prudence face à une complication. Une situation n\'est peut-être pas aussi simple qu\'elle en a l\'air.' },
  { name: 'Les Nuages', message: 'Confusion passagère. Le trouble actuel se dissipera, évitez les décisions hâtives en attendant.' },
  { name: 'Le Trèfle', message: 'Petite chance inattendue. Un heureux hasard vient légèrement faire avancer votre situation.' },
  { name: 'Le Cavalier', message: 'Une nouvelle approche rapidement. Une rencontre, un message ou un événement arrive plus vite que prévu.' },
];
