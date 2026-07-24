// Sign-pair compatibility records — the data layer for /compatibilite-amoureuse/[pair]/.
//
// Publication gating: a pair page is generated ONLY if its record exists here and
// passes validatePairRecord (min content lengths). Slugs use canonical zodiac
// order (Bélier < Taureau < ... < Poissons) — one URL per pair, never both orders.
// Records are added in quality-checked batches; target is all 78 pairs.

import { ZODIAC_SIGNS } from './zodiac';

export interface PairFaq {
  q: string;
  a: string;
}

export interface PairRecord {
  /** canonical slug, e.g. 'lion-scorpion' (zodiac order) */
  slug: string;
  signA: string;
  signB: string;
  /** compatibility score out of 5 — editorial, shown as hearts */
  score: number;
  titre: string;
  dynamique: string;
  forces: string;
  defis: string;
  conseil: string;
  faq: PairFaq[];
}

const SIGN_SLUGS = ZODIAC_SIGNS.map((s) =>
  s.name
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
);

/** Canonical pair slug: signs ordered by zodiac position, joined by '-'. */
export function pairSlug(nameA: string, nameB: string): string {
  const ia = ZODIAC_SIGNS.findIndex((s) => s.name === nameA);
  const ib = ZODIAC_SIGNS.findIndex((s) => s.name === nameB);
  const [first, second] = ia <= ib ? [ia, ib] : [ib, ia];
  return `${SIGN_SLUGS[first]}-${SIGN_SLUGS[second]}`;
}

export function findPair(slug: string): PairRecord | undefined {
  return COMPATIBILITY_PAIRS.find((p) => p.slug === slug);
}

/** Quality gate — a record below these thresholds must not produce a page. */
export function validatePairRecord(r: PairRecord): string[] {
  const issues: string[] = [];
  if (r.dynamique.length < 250) issues.push(`${r.slug}: dynamique < 250 chars`);
  if (r.forces.length < 150) issues.push(`${r.slug}: forces < 150 chars`);
  if (r.defis.length < 150) issues.push(`${r.slug}: defis < 150 chars`);
  if (r.conseil.length < 100) issues.push(`${r.slug}: conseil < 100 chars`);
  if (r.faq.length < 3) issues.push(`${r.slug}: fewer than 3 FAQ`);
  r.faq.forEach((f, i) => {
    if (f.a.length < 120) issues.push(`${r.slug}: faq[${i}] answer < 120 chars`);
  });
  if (r.score < 1 || r.score > 5) issues.push(`${r.slug}: score out of range`);
  return issues;
}

export const COMPATIBILITY_PAIRS: PairRecord[] = [
  {
    slug: 'lion-scorpion',
    signA: 'Lion',
    signB: 'Scorpion',
    score: 3,
    titre: 'Passion magnétique, lutte de pouvoir',
    dynamique:
      'Le Lion et le Scorpion forment l’un des couples les plus intenses du zodiaque. Deux signes fixes, deux volontés de fer : le Lion règne dans la lumière, le Scorpion gouverne depuis l’ombre. L’attraction est immédiate et presque magnétique — chacun reconnaît chez l’autre une puissance égale à la sienne. Mais cette admiration mutuelle cohabite avec une lutte de pouvoir permanente : le Lion veut être adoré publiquement, le Scorpion veut posséder exclusivement. Leur histoire oscille entre fusion passionnelle et bras de fer silencieux.',
    forces:
      'Une loyauté absolue une fois l’engagement pris : ni le Lion ni le Scorpion ne trahissent ce qu’ils ont choisi. Une intensité sensuelle rare, une ambition commune qui peut bâtir des projets impressionnants, et un respect profond pour le courage de l’autre.',
    defis:
      'Le côté charmeur et théâtral du Lion heurte l’exclusivité ombrageuse du Scorpion, qui perçoit toute légèreté comme un manque de respect. Deux orgueils inflexibles : après une dispute, aucun ne fait le premier pas, et les silences peuvent durer des semaines.',
    conseil:
      'Instaurez un pacte de transparence : le Lion verbalise ses besoins de reconnaissance, le Scorpion nomme ses peurs au lieu de tester. La confiance établie, ce couple devient indestructible.',
    faq: [
      {
        q: 'Le Lion et le Scorpion sont-ils faits l’un pour l’autre ?',
        a: 'Ils partagent une intensité et une loyauté peu communes, mais leur compatibilité dépend de leur capacité à transformer la lutte de pouvoir en alliance. Un Lion qui rassure et un Scorpion qui exprime ses émotions au lieu de les dissimuler forment un couple d’une solidité exceptionnelle. Sans ce travail, la relation s’épuise en conflits d’ego.',
      },
      {
        q: 'Pourquoi l’attirance Lion-Scorpion est-elle si forte ?',
        a: 'Ce sont deux signes fixes en carré astrologique : cette tension crée précisément l’électricité qui les attire. Le Scorpion est fasciné par le rayonnement solaire du Lion, le Lion par le mystère et la profondeur du Scorpion. Chacun sent que l’autre est un égal — chose rare pour ces deux personnalités dominantes.',
      },
      {
        q: 'Quel est le principal risque de rupture pour ce couple ?',
        a: 'La jalousie et le contrôle. Le Scorpion supporte mal la sociabilité flamboyante du Lion et peut devenir possessif ; le Lion, qui a besoin d’admiration et de liberté sociale, vit ce contrôle comme une cage. Si aucun des deux ne cède sur ce point, la relation se termine en rupture brutale — rarement en séparation douce.',
      },
    ],
  },
  {
    slug: 'belier-lion',
    signA: 'Bélier',
    signB: 'Lion',
    score: 5,
    titre: 'Le couple de feu par excellence',
    dynamique:
      'Bélier et Lion forment l’une des alliances les plus naturelles du zodiaque. Deux signes de Feu en trigone : l’énergie circule sans effort, l’admiration est réciproque et immédiate. Le Bélier apporte l’élan, l’audace, l’étincelle du premier pas ; le Lion apporte la constance du feu qui dure, la générosité et le sens de la fête. Ensemble, ils vivent vite, fort et sans détour — un couple visible, solaire, que l’entourage remarque et envie. La passion ne retombe pas facilement, car chacun stimule l’autre au lieu de l’éteindre.',
    forces:
      'Une passion physique durable, une franchise totale — ni manipulation ni sous-entendus —, un goût commun de l’aventure et des projets ambitieux. Le Bélier ne se lasse jamais du charisme du Lion, le Lion adore l’énergie brute du Bélier.',
    defis:
      'Deux ego surdimensionnés : la question « qui décide ? » revient sans cesse. Les disputes sont explosives et publiques. Le Lion attend des égards que le Bélier, impulsif et parfois brusque, oublie de donner ; le Bélier trouve le Lion trop fier pour s’excuser.',
    conseil:
      'Répartissez les territoires de leadership : au Bélier l’initiative, au Lion la représentation. Célébrez les victoires de l’autre au lieu de les comparer aux vôtres — l’admiration mutuelle est votre carburant.',
    faq: [
      {
        q: 'Bélier et Lion : est-ce une bonne compatibilité amoureuse ?',
        a: 'Oui, c’est l’une des meilleures du zodiaque. Le trigone de Feu entre ces deux signes crée une harmonie d’énergie, de valeurs et de désir. La passion s’installe vite et dure, car chacun nourrit la flamme de l’autre. Le seul vrai chantier est la gestion des deux ego — une fois réglé, l’union est solide et joyeuse.',
      },
      {
        q: 'Qui domine dans un couple Bélier-Lion ?',
        a: 'Les deux veulent mener, mais différemment : le Bélier domine dans l’action et la décision rapide, le Lion dans l’image et la vie sociale du couple. Les couples qui durent répartissent naturellement ces rôles au lieu de se disputer un trône unique. Quand la rivalité s’installe sur tous les terrains à la fois, les éclats deviennent quotidiens.',
      },
      {
        q: 'Ce couple peut-il durer sur le long terme ?',
        a: 'Oui, à condition d’entretenir la nouveauté. Deux signes de Feu s’ennuient dans la routine : voyages, projets communs et défis partagés maintiennent la vitalité du lien. Un couple Bélier-Lion qui continue de se surprendre après des années reste l’un des plus durables et des plus enviés du zodiaque.',
      },
    ],
  },
  {
    slug: 'belier-balance',
    signA: 'Bélier',
    signB: 'Balance',
    score: 4,
    titre: 'L’axe des opposés qui s’attirent',
    dynamique:
      'Bélier et Balance occupent les deux extrémités du même axe zodiacal — l’opposition par excellence, celle du « moi » face au « nous ». Le Bélier fonce, tranche, affirme ; la Balance pèse, harmonise, séduit. Cette polarité crée une attraction quasi irrésistible : chacun possède exactement ce qui manque à l’autre. Le Bélier est fasciné par l’élégance et la diplomatie de la Balance ; la Balance est électrisée par la décision et le courage du Bélier. Leur relation est un apprentissage permanent de l’équilibre entre indépendance et vie à deux.',
    forces:
      'Une complémentarité réelle : le Bélier apprend la nuance, la Balance apprend à trancher. Une vie sociale riche, un charme de couple indéniable, et une attraction physique alimentée par la différence plutôt que par la ressemblance.',
    defis:
      'Le Bélier trouve la Balance indécise et trop soucieuse du regard des autres ; la Balance juge le Bélier brutal et égocentrique. Les décisions communes — du restaurant au projet de vie — peuvent devenir des négociations épuisantes.',
    conseil:
      'Utilisez vos forces en alternance plutôt qu’en opposition : laissez le Bélier décider dans l’urgence et la Balance arbitrer le durable. L’opposition astrologique devient alors un axe de croissance, pas un champ de bataille.',
    faq: [
      {
        q: 'Pourquoi le Bélier et la Balance s’attirent-ils autant ?',
        a: 'Ils sont en opposition sur le zodiaque, et l’opposition crée une polarité magnétique : chacun incarne la moitié qui manque à l’autre. Le Bélier apporte le feu de la décision, la Balance l’art de la relation. Cette attraction des contraires est l’une des plus puissantes en astrologie amoureuse — et l’une des plus transformatrices.',
      },
      {
        q: 'Un couple Bélier-Balance peut-il fonctionner durablement ?',
        a: 'Oui, si chacun accepte d’apprendre de l’autre au lieu de vouloir le convertir. Les couples Bélier-Balance qui durent racontent la même chose : le Bélier s’est adouci, la Balance s’est affirmée. Si chacun campe sur son mode de fonctionnement, la fascination initiale se transforme en incompréhension chronique.',
      },
      {
        q: 'Quel est le point de friction principal entre Bélier et Balance ?',
        a: 'Le rythme de décision. Le Bélier décide en une seconde et déteste attendre ; la Balance a besoin de peser chaque option et vit la pression comme une agression. Ce décalage touche tout : sorties, achats, engagement. La solution passe par des règles claires sur qui tranche quoi, établies hors des moments de tension.',
      },
    ],
  },
  {
    slug: 'taureau-scorpion',
    signA: 'Taureau',
    signB: 'Scorpion',
    score: 4,
    titre: 'Sensualité et profondeur, l’axe du désir',
    dynamique:
      'Taureau et Scorpion se font face sur l’axe zodiacal de la possession et du désir — l’opposition la plus sensuelle du zodiaque. Le Taureau incarne la sensualité terrestre, concrète, rassurante ; le Scorpion incarne l’intensité émotionnelle, le magnétisme, la fusion. Leur rencontre produit une alchimie physique immédiate et durable, rarement égalée par d’autres combinaisons. Tous deux signes fixes, ils s’engagent lentement mais totalement : quand ce couple se forme, il vise le définitif. La possessivité, présente des deux côtés, est ici paradoxalement un langage d’amour commun.',
    forces:
      'Une compatibilité sensuelle exceptionnelle, une fidélité partagée, un même besoin de sécurité affective et matérielle. Le Taureau apaise les tempêtes intérieures du Scorpion ; le Scorpion donne de la profondeur à la tranquillité du Taureau.',
    defis:
      'Deux entêtements légendaires : quand ils se braquent, personne ne cède. Le Scorpion a besoin de crises et de transformation, le Taureau déteste le changement — les remises en question de l’un bousculent le besoin de stabilité de l’autre.',
    conseil:
      'Acceptez vos tempos différents : le Scorpion doit annoncer ses tempêtes au lieu de les faire éclater, le Taureau doit accepter qu’une crise traversée ensemble renforce le lien au lieu de le menacer.',
    faq: [
      {
        q: 'Taureau et Scorpion : pourquoi cette attirance si intense ?',
        a: 'Ils forment l’axe astrologique du désir et de la possession : deux signes fixes en opposition, ce qui combine stabilité et polarité magnétique. Le Taureau est attiré par le mystère du Scorpion, le Scorpion par la présence charnelle et rassurante du Taureau. C’est l’une des alchimies physiques les plus fortes du zodiaque.',
      },
      {
        q: 'La jalousie est-elle un problème dans ce couple ?',
        a: 'Les deux signes sont possessifs, mais c’est souvent un terrain d’entente plutôt qu’un conflit : chacun comprend le besoin d’exclusivité de l’autre et s’y retrouve. Le danger apparaît quand la possessivité du Scorpion devient contrôle ou quand le Taureau confond amour et propriété — la limite entre sécurité et enfermement doit rester consciente.',
      },
      {
        q: 'Ce couple survit-il aux crises ?',
        a: 'Mieux que la plupart. Deux signes fixes ne fuient pas : ils affrontent. Les crises Taureau-Scorpion sont rares mais profondes, et le couple en ressort généralement soudé — à condition que l’entêtement mutuel n’empêche pas la réconciliation. Le premier pas est leur plus grande difficulté ; une fois franchi, le lien se reconstruit plus fort.',
      },
    ],
  },
  {
    slug: 'cancer-poissons',
    signA: 'Cancer',
    signB: 'Poissons',
    score: 5,
    titre: 'La fusion des âmes d’eau',
    dynamique:
      'Cancer et Poissons forment le couple le plus intuitif du zodiaque. Deux signes d’Eau en trigone : ils se comprennent sans parler, se devinent à distance, vivent l’amour comme une évidence émotionnelle. Le Cancer apporte le nid, la tendresse protectrice, la mémoire du couple ; les Poissons apportent le rêve, la douceur infinie et une capacité d’adaptation qui désamorce les tensions avant qu’elles n’existent. Leur relation ressemble souvent à une bulle — un monde à deux, fait de rituels tendres, où l’extérieur n’entre qu’invité.',
    forces:
      'Une empathie mutuelle totale, une tendresse quotidienne rare, une créativité partagée et une vie émotionnelle d’une richesse que peu de couples connaissent. Chacun se sent enfin compris sans avoir à s’expliquer.',
    defis:
      'Deux hypersensibles : les blessures silencieuses s’accumulent, car aucun n’ose froisser l’autre. Le Cancer a besoin de sécurité concrète que les Poissons, fuyants face aux contraintes matérielles, ne garantissent pas toujours. Risque de fusion étouffante.',
    conseil:
      'Nommez vos besoins au lieu de les deviner : même entre intuitifs, le non-dit finit par peser. Gardez chacun un jardin personnel — la bulle est belle quand on peut aussi en sortir.',
    faq: [
      {
        q: 'Cancer et Poissons : le couple parfait des signes d’Eau ?',
        a: 'C’est l’une des compatibilités les plus harmonieuses du zodiaque. Le trigone d’Eau crée une connexion émotionnelle immédiate et profonde : les deux vivent l’amour comme une fusion intuitive. Le couple fonctionne naturellement, sans effort — sa seule fragilité est l’excès de sensibilité partagée, qui demande d’apprendre à verbaliser plutôt qu’à deviner.',
      },
      {
        q: 'Quels sont les risques d’une relation Cancer-Poissons ?',
        a: 'La fusion excessive et l’évitement des sujets qui fâchent. Par peur de blesser, chacun tait ses frustrations, qui ressortent des mois plus tard en vagues émotionnelles disproportionnées. S’ajoute la question matérielle : le Cancer a besoin de sécurité concrète, et peut s’épuiser si les Poissons laissent l’intendance du couple reposer sur lui seul.',
      },
      {
        q: 'Comment renforcer un couple Cancer-Poissons ?',
        a: 'Par des rituels de parole régulière : un moment fixe où chacun exprime ce qu’il a ressenti, même l’inconfortable. Cette hygiène émotionnelle transforme leur sensibilité commune en force au lieu de la laisser fermenter en non-dits. Côté pratique, répartir clairement les responsabilités matérielles évite que le Cancer ne porte tout.',
      },
    ],
  },
  {
    slug: 'taureau-cancer',
    signA: 'Taureau',
    signB: 'Cancer',
    score: 5,
    titre: 'Le foyer idéal, tendresse et sécurité',
    dynamique:
      'Taureau et Cancer partagent le même projet de vie sans même avoir à en parler : construire un cocon. Le sextile Terre-Eau nourrit une complicité paisible où chacun donne exactement ce que l’autre recherche — le Taureau offre la stabilité matérielle et une présence rassurante, le Cancer offre la tendresse, l’attention et l’art de faire d’une maison un refuge. C’est le couple des dîners à la maison préférés aux soirées mondaines, des projets patrimoniaux et de la famille. La passion y est douce plutôt que spectaculaire, mais d’une constance remarquable.',
    forces:
      'Des valeurs identiques : fidélité, foyer, famille, épargne. Une tendresse physique quotidienne, un besoin partagé de rituels rassurants, et très peu de sujets de conflit structurels. L’un des couples les plus stables du zodiaque.',
    defis:
      'Le risque principal est la routine confortable qui endort le désir. Les humeurs lunaires du Cancer déroutent le Taureau, peu équipé pour les subtilités émotionnelles ; le Cancer peut juger le Taureau trop terre-à-terre face à ses besoins affectifs.',
    conseil:
      'Programmez l’imprévu : une escapade, une surprise, un projet nouveau chaque saison. Votre stabilité est une force tant qu’elle reste un choix, pas une habitude par défaut.',
    faq: [
      {
        q: 'Taureau et Cancer : pourquoi ce couple fonctionne-t-il si bien ?',
        a: 'Parce que leurs besoins fondamentaux coïncident : sécurité pour le Taureau, tendresse et foyer pour le Cancer — et chacun fournit naturellement ce que l’autre attend. Le sextile Terre-Eau est l’une des harmonies les plus fluides de l’astrologie amoureuse : peu de friction, beaucoup de complicité, et une vision commune du long terme.',
      },
      {
        q: 'Quel est le principal danger pour un couple Taureau-Cancer ?',
        a: 'L’installation dans une routine si confortable que le couple devient une colocation tendre. Ni le Taureau ni le Cancer ne provoquent le changement spontanément : sans effort conscient pour entretenir le désir et la surprise, la relation reste solide mais peut perdre sa dimension amoureuse au profit du seul attachement.',
      },
      {
        q: 'Comment le Taureau doit-il gérer les humeurs du Cancer ?',
        a: 'En résistant à l’envie de « résoudre » ou de minimiser. Le Cancer ne cherche pas une solution mais une présence : un Taureau qui reste calme, physiquement présent et patient pendant la marée émotionnelle devient le roc dont le Cancer a besoin. Demander « que puis-je faire ? » vaut mieux que « ce n’est pas si grave ».',
      },
    ],
  },
  {
    slug: 'gemeaux-sagittaire',
    signA: 'Gémeaux',
    signB: 'Sagittaire',
    score: 4,
    titre: 'L’axe du mouvement et de la liberté',
    dynamique:
      'Gémeaux et Sagittaire se font face sur l’axe de la connaissance : l’information d’un côté, le sens de l’autre. Cette opposition est l’une des plus joyeuses du zodiaque — deux signes mutables, curieux, allergiques à l’ennui et à l’enfermement. Leur couple ressemble à une conversation sans fin entrecoupée de voyages : le Gémeaux butine les idées, le Sagittaire leur donne une direction et un horizon. Ni l’un ni l’autre ne cherche à posséder l’autre, ce qui rend la relation étonnamment légère là où d’autres couples s’étouffent.',
    forces:
      'Une liberté mutuelle réelle — le besoin d’espace de l’un ne blesse pas l’autre —, un humour partagé, une curiosité insatiable et une vie sociale et intellectuelle stimulante. L’ennui, tueur numéro un des couples, n’existe pas ici.',
    defis:
      'Le concret : factures, engagement, projets de long terme sont repoussés par deux signes qui préfèrent le mouvement à l’ancrage. Le Sagittaire assène ses vérités sans filtre, le Gémeaux pratique l’esquive — les vrais sujets peuvent ne jamais être posés.',
    conseil:
      'Nommez un « ministre du concret » tournant : chaque mois, l’un des deux pilote l’intendance. Et transformez vos différences de fond en jeu — débattre est votre langage d’amour, tant que personne ne veut gagner.',
    faq: [
      {
        q: 'Gémeaux et Sagittaire peuvent-ils construire du long terme ?',
        a: 'Oui, mais leur long terme ne ressemble pas aux standards : il se construit sur le mouvement plutôt que sur l’ancrage. Voyages, projets, apprentissages partagés remplacent la maison-ancre traditionnelle. Les couples Gémeaux-Sagittaire durables sont ceux qui ont accepté cette forme nomade au lieu de se forcer au modèle classique.',
      },
      {
        q: 'L’infidélité est-elle un risque dans ce couple ?',
        a: 'Le risque existe si la liberté n’est pas définie. Les deux signes ont besoin d’espace et de stimulations extérieures, ce qui peut glisser vers l’ambiguïté sans cadre clair. La solution n’est pas le contrôle — insupportable pour les deux — mais un contrat de confiance explicite : liberté totale de mouvement, transparence totale sur l’essentiel.',
      },
      {
        q: 'Qu’est-ce qui rend cette opposition si complémentaire ?',
        a: 'Le Gémeaux collectionne les informations, le Sagittaire cherche la vision d’ensemble : ensemble ils forment une intelligence complète. Chacun élargit le monde de l’autre — le Gémeaux ramène mille curiosités, le Sagittaire leur donne du sens et une direction. Cette stimulation intellectuelle mutuelle est le vrai ciment du couple, plus que la passion physique.',
      },
    ],
  },
  {
    slug: 'cancer-capricorne',
    signA: 'Cancer',
    signB: 'Capricorne',
    score: 4,
    titre: 'L’axe du foyer et de l’ambition',
    dynamique:
      'Cancer et Capricorne forment l’axe parental du zodiaque : la mère symbolique face au père symbolique, le foyer face à la carrière, le dedans face au dehors. Cette opposition attire puissamment car chacun reconnaît chez l’autre la moitié de l’équation familiale qu’il porte en lui. Le Cancer offre la chaleur émotionnelle dont le Capricorne austère a secrètement soif ; le Capricorne offre la structure et la sécurité dont le Cancer anxieux a besoin pour se poser. C’est un couple bâtisseur, souvent tourné vers la famille, le patrimoine et le long terme dès les premiers mois.',
    forces:
      'Un sérieux partagé face à l’engagement — ni l’un ni l’autre ne joue —, des rôles naturellement complémentaires, et une solidité à toute épreuve dans les coups durs. Le Capricorne protège, le Cancer nourrit : chacun se sent utile à l’autre.',
    defis:
      'Le Capricorne exprime son amour en actes et en résultats, le Cancer attend des mots et de la présence : chacun peut se sentir mal aimé alors que l’autre donne à sa façon. Le travail du Capricorne devient facilement le rival du foyer.',
    conseil:
      'Apprenez la langue affective de l’autre : le Capricorne doit dire et montrer sa tendresse, le Cancer doit reconnaître les sacrifices concrets comme des preuves d’amour. Sanctuarisez du temps de couple hors travail.',
    faq: [
      {
        q: 'Cancer et Capricorne : les opposés peuvent-ils s’aimer durablement ?',
        a: 'C’est même l’une des oppositions les plus durables du zodiaque. Contrairement aux axes plus conflictuels, Cancer et Capricorne veulent la même chose — construire — par des chemins différents. Les couples qui durent racontent une répartition assumée : l’un porte le dedans, l’autre le dehors, avec une reconnaissance mutuelle des deux rôles.',
      },
      {
        q: 'Pourquoi le Cancer se sent-il parfois délaissé par le Capricorne ?',
        a: 'Parce que le Capricorne aime en silence et en actes : il travaille, sécurise, construit — et considère cela comme une déclaration permanente. Le Cancer, lui, a besoin de présence, de mots et de rituels tendres. Sans traduction entre ces deux langages, le Cancer se sent seul et le Capricorne incompris malgré ses efforts.',
      },
      {
        q: 'Ce couple est-il fait pour fonder une famille ?',
        a: 'C’est l’axe familial par excellence : le Cancer incarne le soin et la vie intérieure du foyer, le Capricorne la structure et la sécurité matérielle. Peu de couples offrent un cadre aussi complet à des enfants. Le point de vigilance est de ne pas se réduire à ces rôles parentaux au point d’oublier le couple amoureux qui les a précédés.',
      },
    ],
  },
  {
    slug: 'lion-verseau',
    signA: 'Lion',
    signB: 'Verseau',
    score: 3,
    titre: 'Le cœur face à la tête, l’axe du rayonnement',
    dynamique:
      'Lion et Verseau s’opposent sur l’axe de l’individu face au collectif : le Lion rayonne pour être aimé, le Verseau se détache pour rester libre. L’attraction est intellectuelle autant que physique — le Lion est intrigué par cet être qui ne tombe pas sous son charme comme les autres, le Verseau est fasciné par cette chaleur qu’il s’interdit. Leur relation est un paradoxe vivant : le signe le plus personnel du zodiaque aime le plus impersonnel. Quand l’équilibre est trouvé, le couple est brillant, original et socialement magnétique.',
    forces:
      'Une stimulation mutuelle constante, zéro routine, une vie sociale foisonnante et une vraie admiration intellectuelle. Le Verseau apprend au Lion la liberté, le Lion apprend au Verseau la chaleur du lien incarné.',
    defis:
      'Le Lion a besoin d’adoration exclusive, le Verseau la refuse par principe — il aime l’humanité entière et déteste les hiérarchies affectives. La froideur apparente du Verseau blesse l’orgueil du Lion, qui répond en dramatisant, ce qui éloigne encore le Verseau.',
    conseil:
      'Verseau : offrez au Lion des marques d’admiration sincères — ce n’est pas de la soumission, c’est sa nourriture affective. Lion : cessez d’exiger, la liberté donnée est le seul chemin vers la loyauté du Verseau.',
    faq: [
      {
        q: 'Lion et Verseau sont-ils compatibles en amour ?',
        a: 'C’est une opposition exigeante mais féconde. La compatibilité dépend presque entièrement de la maturité des deux : un Lion sûr de lui n’a pas besoin d’adoration permanente, un Verseau apaisé sait donner de la chaleur. Réunis, ils forment un couple original et rayonnant ; immatures, ils s’épuisent en malentendus affectifs.',
      },
      {
        q: 'Pourquoi le Verseau semble-t-il froid avec le Lion ?',
        a: 'Le Verseau n’est pas froid, il est pudique et méfiant envers les émotions spectaculaires — exactement le registre du Lion. Il exprime son attachement par la loyauté intellectuelle et la complicité, pas par les démonstrations. Le Lion doit apprendre à lire ces signes discrets au lieu d’attendre les grandes déclarations qui ne viendront pas.',
      },
      {
        q: 'Comment éviter la rupture dans un couple Lion-Verseau ?',
        a: 'En cessant la guerre des principes. La rupture type survient quand le Lion pose un ultimatum affectif et que le Verseau, allergique aux ultimatums, prend le large. Le couple survit quand chacun renonce à convertir l’autre : le Lion accepte un amour moins démonstratif mais profondément loyal, le Verseau consent à des gestes de chaleur réguliers.',
      },
    ],
  },
  {
    slug: 'vierge-poissons',
    signA: 'Vierge',
    signB: 'Poissons',
    score: 4,
    titre: 'Le réel et le rêve, l’axe du service',
    dynamique:
      'Vierge et Poissons forment l’axe du dévouement : deux signes qui aiment en se rendant utiles, l’un par l’ordre, l’autre par l’abandon. La Vierge organise, soigne, améliore ; les Poissons ressentent, consolent, pardonnent. Cette opposition fonctionne comme deux mains d’un même geste : la Vierge donne un corps aux rêves des Poissons, les Poissons donnent une âme à la précision de la Vierge. L’attraction naît souvent d’un sentiment de complétude immédiate — chacun trouve chez l’autre exactement ce qu’il ne sait pas faire.',
    forces:
      'Une douceur mutuelle rare, deux natures serviables qui prennent soin l’une de l’autre sans compter, une créativité équilibrée par le pragmatisme, et une capacité commune au pardon qui désamorce les rancunes.',
    defis:
      'La Vierge critique pour aider, les Poissons l’entendent comme un rejet et fuient dans le silence ou le flou — ce qui angoisse la Vierge, qui contrôle davantage. Le désordre émotionnel et matériel des Poissons peut épuiser la Vierge qui compense.',
    conseil:
      'Vierge : remplacez une critique sur deux par un remerciement — les Poissons se corrigent par amour, jamais par remarque. Poissons : donnez des repères concrets à votre Vierge, son anxiété diminue quand elle sait où elle en est.',
    faq: [
      {
        q: 'Vierge et Poissons : pourquoi dit-on qu’ils se complètent ?',
        a: 'Parce que chacun excelle exactement là où l’autre est démuni. La Vierge maîtrise le réel — organisation, santé, quotidien — mais se noie dans l’émotionnel ; les Poissons naviguent l’émotionnel les yeux fermés mais se perdent dans le concret. En couple, ils forment un être complet : c’est le sens profond de leur opposition zodiacale.',
      },
      {
        q: 'Comment la Vierge doit-elle gérer la sensibilité des Poissons ?',
        a: 'En comprenant que les Poissons ne fonctionnent pas à la logique mais à l’atmosphère. Une remarque juste dite froidement blesse plus qu’une erreur ; la même remarque enveloppée de tendresse est acceptée et suivie d’effet. La Vierge doit donc soigner la forme autant que le fond — un effort contre-nature au début, qui devient sa plus belle preuve d’amour.',
      },
      {
        q: 'Ce couple risque-t-il de s’épuiser mutuellement ?',
        a: 'Le risque existe dans un scénario précis : la Vierge devient l’adulte responsable du couple pendant que les Poissons dérivent, puis la Vierge s’épuise en rancune silencieuse et les Poissons culpabilisent en fuyant davantage. La prévention passe par une répartition explicite des responsabilités — même inégale, tant qu’elle est choisie et reconnue des deux côtés.',
      },
    ],
  },
  {
    slug: 'gemeaux-balance',
    signA: 'Gémeaux',
    signB: 'Balance',
    score: 5,
    titre: 'La complicité des esprits d’Air',
    dynamique:
      'Gémeaux et Balance forment le couple de la conversation amoureuse. Deux signes d’Air en trigone : la connexion est d’abord mentale — l’humour, la répartie, le plaisir d’échanger — puis elle descend au cœur. La Balance apporte l’harmonie, le raffinement et l’art de la relation ; le Gémeaux apporte la légèreté, la curiosité et un mouvement perpétuel qui empêche la relation de se figer. Leur vie de couple est sociale, élégante et étonnamment paisible : ces deux-là préfèrent séduire que se disputer, comprendre que juger.',
    forces:
      'Une entente intellectuelle immédiate, un partage social naturel — le couple qu’on invite partout —, peu de conflits frontaux, et une capacité commune à dédramatiser. La légèreté n’est pas ici une faiblesse mais un art de vivre.',
    defis:
      'Deux signes qui fuient le conflit : les problèmes de fond glissent sous le tapis avec élégance. L’indécision de la Balance combinée à la dispersion du Gémeaux peut laisser les grands choix — engagement, enfants, patrimoine — en suspens des années.',
    conseil:
      'Institutionnalisez les vraies conversations : un rendez-vous mensuel où l’on parle de ce qui fâche, avec la même élégance que le reste. Votre harmonie mérite des fondations, pas seulement des ornements.',
    faq: [
      {
        q: 'Gémeaux et Balance : est-ce l’une des meilleures compatibilités ?',
        a: 'Oui, le trigone d’Air est l’une des harmonies les plus fluides du zodiaque. La relation repose sur ce que les deux signes préfèrent : l’échange, la légèreté et la vie sociale. Peu de couples se disputent aussi peu. La vigilance porte sur la profondeur : cette entente brillante doit régulièrement traiter les sujets de fond pour ne pas rester en surface.',
      },
      {
        q: 'Qui prend les décisions dans un couple Gémeaux-Balance ?',
        a: 'C’est leur talon d’Achille : la Balance pèse indéfiniment, le Gémeaux change d’avis — les décisions importantes peuvent flotter longtemps. Les couples qui fonctionnent adoptent une règle simple : fixer une date limite à chaque grand choix, et l’un des deux reçoit le droit de trancher si la date passe. L’important est que la règle soit posée hors conflit.',
      },
      {
        q: 'La séduction extérieure menace-t-elle ce couple ?',
        a: 'Les deux signes aiment plaire et séduire socialement — c’est leur oxygène, pas une trahison. Le couple fonctionne quand cette séduction reste un jeu partagé dont on se raconte les anecdotes, et se fragilise quand elle devient secrète. La transparence joyeuse est leur meilleure protection : tant qu’on en rit ensemble, le lien est sain.',
      },
    ],
  },
  {
    slug: 'taureau-capricorne',
    signA: 'Taureau',
    signB: 'Capricorne',
    score: 5,
    titre: 'Les bâtisseurs, l’alliance de Terre',
    dynamique:
      'Taureau et Capricorne forment le couple le plus solide du zodiaque au sens littéral : deux signes de Terre en trigone, deux constructeurs qui parlent le même langage — celui des actes, du temps long et des fondations. Le Capricorne apporte l’ambition, la stratégie et une loyauté à toute épreuve ; le Taureau apporte la sensualité, la douceur du quotidien et l’art de profiter de ce qui a été construit. Leur amour grandit lentement, sans coup d’éclat, mais atteint une profondeur que les couples spectaculaires connaissent rarement.',
    forces:
      'Une fiabilité mutuelle absolue, des valeurs identiques — travail, fidélité, patrimoine, famille —, une sensualité terrienne durable, et une résistance aux crises extérieures exceptionnelle : ce couple traverse tout, ensemble.',
    defis:
      'La pudeur émotionnelle des deux : on s’aime fort mais on se le dit peu, et les blessures restent muettes. Le Capricorne workaholic peut négliger le couple ; le Taureau peut confondre stabilité et immobilisme, refusant les évolutions nécessaires.',
    conseil:
      'Fixez des rituels d’expression : un dîner hebdomadaire où l’on parle de nous, pas des projets. Et laissez le Taureau enseigner au Capricorne l’art de jouir du présent — la réussite n’a de sens que savourée à deux.',
    faq: [
      {
        q: 'Taureau et Capricorne : pourquoi ce couple est-il si stable ?',
        a: 'Parce qu’aucun des deux ne joue avec l’amour. Signes de Terre, ils s’engagent après réflexion et pour durer ; le trigone entre eux aligne leurs valeurs profondes : sécurité, loyauté, construction. Les statistiques des astrologues placent régulièrement cette combinaison parmi les unions les plus durables du zodiaque — la passion y est discrète mais le lien, indéfectible.',
      },
      {
        q: 'La routine peut-elle tuer ce couple ?',
        a: 'C’est son seul vrai ennemi intérieur. Deux signes de Terre s’installent volontiers dans un confort répétitif qui sécurise mais peut anesthésier le désir. La parade est simple et leur convient : construire toujours un projet nouveau — maison, voyage, entreprise commune. Tant que ce couple bâtit quelque chose ensemble, il reste vivant et amoureux.',
      },
      {
        q: 'Comment ce couple gère-t-il l’argent et les projets ?',
        a: 'Mieux que presque tous les autres : le Capricorne planifie et investit, le Taureau gère et fait fructifier le quotidien. Leur patrimoine commun se construit naturellement. Le seul point de friction possible est le rythme des dépenses plaisir — le Taureau aime le confort et la qualité, le Capricorne peut être austère. Un budget « plaisirs » assumé règle la question.',
      },
    ],
  },
  {
    slug: 'scorpion-poissons',
    signA: 'Scorpion',
    signB: 'Poissons',
    score: 5,
    titre: 'La fusion mystique des profondeurs',
    dynamique:
      'Scorpion et Poissons vivent l’amour comme une expérience totale. Deux signes d’Eau en trigone : la connexion est immédiate, intuitive, presque télépathique. Le Scorpion, intense et entier, trouve chez les Poissons une âme qui n’a pas peur de ses profondeurs ; les Poissons, souvent incompris, trouvent chez le Scorpion une passion qui les ancre et les protège. Leur intimité — émotionnelle et physique — atteint des intensités que peu de combinaisons connaissent. C’est le couple fusionnel par excellence, pour le meilleur et parfois pour le vertige.',
    forces:
      'Une compréhension intuitive mutuelle, une intimité d’une profondeur rare, une loyauté émotionnelle totale et une dimension quasi spirituelle du lien — beaucoup de ces couples parlent d’évidence ou d’âme sœur dès la rencontre.',
    defis:
      'La fusion peut devenir engloutissement : le Scorpion possessif et les Poissons influençables risquent un huis clos émotionnel sans oxygène. Les tempêtes du Scorpion submergent les Poissons, qui fuient dans le flou — ce qui déclenche la méfiance du Scorpion.',
    conseil:
      'Gardez des ancrages extérieurs — amis, passions individuelles — non comme une menace mais comme l’oxygène du couple. Scorpion : votre confiance est le plus beau cadeau. Poissons : votre clarté est la vôtre.',
    faq: [
      {
        q: 'Scorpion et Poissons : une histoire d’âmes sœurs ?',
        a: 'C’est la combinaison qui évoque le plus souvent ce sentiment. Le trigone d’Eau crée une reconnaissance immédiate — l’impression de se connaître depuis toujours — et une intimité émotionnelle totale. Que l’on croie ou non aux âmes sœurs, cette alchimie est réelle : peu de couples atteignent cette profondeur de connexion aussi naturellement.',
      },
      {
        q: 'La possessivité du Scorpion pose-t-elle problème aux Poissons ?',
        a: 'Moins qu’avec d’autres signes : les Poissons, qui cherchent la fusion, vivent souvent l’exclusivité du Scorpion comme une preuve d’amour plutôt qu’une cage. Le danger apparaît si le contrôle s’étend à leurs rêves et à leur liberté intérieure — le seul territoire que les Poissons défendront en fuyant, silencieusement mais définitivement.',
      },
      {
        q: 'Comment ce couple traverse-t-il les crises ?',
        a: 'Par vagues profondes. Le Scorpion affronte et intensifie, les Poissons fuient et diluent — deux stratégies opposées qui peuvent aggraver la crise. Mais leur lien intuitif finit généralement par les ramener l’un vers l’autre : la séparation leur est physiquement douloureuse. Les couples durables apprennent à traverser la tempête côte à côte plutôt qu’en se poursuivant.',
      },
    ],
  },
  {
    slug: 'belier-sagittaire',
    signA: 'Bélier',
    signB: 'Sagittaire',
    score: 5,
    titre: 'L’aventure amoureuse permanente',
    dynamique:
      'Bélier et Sagittaire forment le couple le plus dynamique du zodiaque. Deux signes de Feu en trigone : l’énergie est commune, la liberté sacrée, l’enthousiasme contagieux. Le Bélier allume les projets, le Sagittaire leur donne un horizon — souvent au sens propre, tant ce couple voyage. Leur amour ressemble à une amitié passionnée : on rit beaucoup, on bouge tout le temps, on se dit tout sans détour. Ni jalousie maladive ni jeux de pouvoir : deux indépendants qui choisissent chaque jour de faire route ensemble.',
    forces:
      'Une énergie partagée inépuisable, une franchise mutuelle qui évite les non-dits, un respect naturel de la liberté de l’autre et un optimisme commun qui traverse les épreuves. Le couple qui transforme les problèmes en aventures.',
    defis:
      'Deux impulsifs sans frein : les décisions hâtives — achats, déménagements, ruptures sur un coup de tête — sont le vrai danger. La brutalité verbale du Bélier rencontre la franchise sans tact du Sagittaire : les mots dépassent vite la pensée.',
    conseil:
      'Adoptez la règle des 24 heures pour toute décision importante ou dispute sérieuse : rien ne se conclut à chaud. Votre spontanéité est votre force partout, sauf dans l’irréversible.',
    faq: [
      {
        q: 'Bélier et Sagittaire : le couple d’aventuriers idéal ?',
        a: 'Oui, c’est l’archétype du couple qui vit intensément. Le trigone de Feu aligne leur besoin de mouvement, de liberté et de projets. Là où d’autres couples s’usent sur la routine, celui-ci s’use seulement s’il s’arrête. Voyages, sport, défis partagés ne sont pas des loisirs pour eux : c’est la substance même de leur lien amoureux.',
      },
      {
        q: 'Ce couple peut-il se poser et fonder une famille ?',
        a: 'Oui, à sa manière : une famille mobile, sportive, où les enfants voyagent tôt et où la maison est une base plutôt qu’un cocon. Le piège serait de s’imposer un modèle sédentaire par conformisme — la frustration rejaillirait sur le couple. Quand ils assument leur style de vie, Bélier et Sagittaire font d’excellents parents complices.',
      },
      {
        q: 'Quelle est la cause de rupture la plus fréquente entre ces signes ?',
        a: 'La rupture impulsive après une dispute où les mots ont dépassé la pensée — deux signes de Feu peuvent se quitter sur un éclat et le regretter une semaine plus tard. Beaucoup de ces couples se séparent et se retrouvent. La maturité consiste à instaurer un sas de décompression : la colère de Feu retombe aussi vite qu’elle monte.',
      },
    ],
  },
  {
    slug: 'gemeaux-verseau',
    signA: 'Gémeaux',
    signB: 'Verseau',
    score: 5,
    titre: 'La rencontre des esprits libres',
    dynamique:
      'Gémeaux et Verseau forment le couple le plus moderne du zodiaque. Deux signes d’Air en trigone : la rencontre est d’abord un choc intellectuel — enfin quelqu’un qui comprend, qui suit, qui surprend. Le Gémeaux apporte la vivacité et le jeu, le Verseau la vision et l’originalité. Leur couple ignore les conventions : chacun garde son indépendance, ses amis, ses projets, et c’est précisément ce respect mutuel de la liberté qui soude le lien. On s’aime ici sans se posséder — une évidence pour eux, un mystère pour les autres.',
    forces:
      'Une stimulation intellectuelle permanente, zéro possessivité — le couple le plus libre du zodiaque —, une amitié profonde sous l’amour, et une créativité commune qui invente son propre modèle de vie à deux.',
    defis:
      'L’émotionnel est le parent pauvre : deux cérébraux qui analysent les sentiments plutôt que de les vivre. La relation peut devenir une brillante colocation d’esprits où la tendresse physique et les mots d’amour se raréfient sans que personne n’ose le signaler.',
    conseil:
      'Programmez l’incarnation : du contact physique quotidien, des mots doux même maladroits. Votre lien mental est exceptionnel — donnez-lui un corps pour qu’il devienne un amour complet.',
    faq: [
      {
        q: 'Gémeaux et Verseau : pourquoi se comprennent-ils si bien ?',
        a: 'Le trigone d’Air aligne leur fonctionnement profond : tous deux vivent d’idées, de liberté et d’échanges. Le Verseau trouve chez le Gémeaux la seule personne capable de suivre ses raisonnements originaux ; le Gémeaux trouve chez le Verseau une profondeur de vision qui donne du sens à sa curiosité. Leur entente intellectuelle est la plus naturelle du zodiaque.',
      },
      {
        q: 'Ce couple manque-t-il de passion ?',
        a: 'Il manque de démonstrations, pas de lien. La passion Gémeaux-Verseau est mentale : débattre jusqu’à l’aube est leur équivalent d’une nuit torride. Le risque réel est de négliger le corps et la tendresse au point de glisser vers l’amitié. Les couples durables cultivent consciemment le contact physique — non par besoin, mais pour protéger la dimension amoureuse.',
      },
      {
        q: 'L’engagement fait-il peur à ces deux signes ?',
        a: 'Les formes classiques de l’engagement, oui — mariage traditionnel, promesses solennelles les font fuir. Mais leur loyauté réelle est forte : ils restent par choix renouvelé, pas par contrat. Le couple fonctionne quand chacun accepte cette forme d’engagement librement consenti, souvent plus solide que les serments qui rassurent les autres signes.',
      },
    ],
  },
  {
    slug: 'balance-verseau',
    signA: 'Balance',
    signB: 'Verseau',
    score: 4,
    titre: 'L’harmonie des idéalistes',
    dynamique:
      'Balance et Verseau partagent le même élément Air et le même idéalisme : l’une rêve d’harmonie parfaite, l’autre d’un monde meilleur. Leur trigone crée une entente élégante et cérébrale, faite de conversations raffinées, de projets culturels et d’une vie sociale choisie. La Balance apporte la grâce relationnelle et l’art du compromis ; le Verseau apporte l’originalité et le courage de la différence. Le couple étonne souvent : classique en apparence grâce à la Balance, profondément non conventionnel dans son fonctionnement grâce au Verseau.',
    forces:
      'Un dialogue permanent et apaisé, des valeurs humanistes partagées, une esthétique de vie commune et un équilibre rare entre vie sociale riche et complicité à deux. Peu de conflits, beaucoup d’estime mutuelle.',
    defis:
      'La Balance a besoin de romantisme et de gestes tendres que le Verseau, pudique et détaché, oublie de donner. Le Verseau a besoin d’imprévu et de causes à défendre, quand la Balance préfère la paix — son consensualisme peut ennuyer le rebelle du zodiaque.',
    conseil:
      'Balance : soutenez les combats du Verseau même quand ils dérangent — c’est sa façon d’aimer le monde. Verseau : offrez à votre Balance les attentions romantiques qu’elle n’ose pas réclamer. L’équilibre est à ce prix.',
    faq: [
      {
        q: 'Balance et Verseau : une compatibilité amoureuse naturelle ?',
        a: 'Oui, le trigone d’Air leur donne une entente immédiate sur l’essentiel : communication, liberté, vie sociale et curiosité intellectuelle. C’est un couple qui se construit sans lutte. Sa vigilance principale : ne pas laisser la relation devenir si raisonnable et si fluide qu’elle en oublie la passion — l’Air a besoin d’étincelles pour rester amoureux.',
      },
      {
        q: 'Le détachement du Verseau blesse-t-il la Balance ?',
        a: 'C’est le point sensible du couple. La Balance, signe de Vénus, vit d’attentions, de compliments et de romantisme ; le Verseau exprime son amour par la complicité intellectuelle et la loyauté, rarement par les gestes tendres. Sans traduction consciente entre ces deux langages, la Balance peut se sentir négligée dans une relation pourtant profondément solide.',
      },
      {
        q: 'Quel type de vie de couple construisent Balance et Verseau ?',
        a: 'Une vie sociale et culturelle riche : amis nombreux, engagements associatifs, sorties, débats. Leur maison est souvent un lieu ouvert où l’on reçoit. Ils inventent volontiers des fonctionnements atypiques — chambres séparées, projets indépendants — qui scandalisent les conventionnels et leur conviennent parfaitement. Leur règle implicite : l’harmonie sans la prison.',
      },
    ],
  },
];
