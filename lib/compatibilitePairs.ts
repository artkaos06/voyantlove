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
  {
    slug: 'cancer-scorpion',
    signA: 'Cancer',
    signB: 'Scorpion',
    score: 5,
    titre: 'L’intensité émotionnelle absolue',
    dynamique:
      'Cancer et Scorpion vivent l’amour au même niveau de profondeur — celui où la plupart des autres signes ne descendent jamais. Deux signes d’Eau en trigone : la connexion est instinctive, presque animale. Le Cancer offre la tendresse enveloppante et la loyauté du foyer ; le Scorpion offre la passion totale et une protection farouche de ce qu’il aime. Chacun sent que l’autre ne joue pas : ici, on aime entièrement ou pas du tout. Le couple se construit vite, dans une intimité fusionnelle que l’extérieur perçoit comme un clan impénétrable.',
    forces:
      'Une fidélité viscérale des deux côtés, une intuition mutuelle qui devine les non-dits, une sensualité profonde et un même instinct de protection du couple face au monde. Les épreuves extérieures les soudent au lieu de les séparer.',
    defis:
      'Deux émotifs rancuniers : les blessures se gravent et ressortent des années plus tard. Les crises croisées — bouderie lunaire du Cancer contre silence vengeur du Scorpion — peuvent durer des semaines. La possessivité mutuelle frôle parfois l’asphyxie.',
    conseil:
      'Instituez le pardon explicite : dire « c’est réglé » et le penser vraiment. Votre mémoire émotionnelle est une force pour l’amour, un poison pour les comptes — choisissez ce que vous archivez.',
    faq: [
      {
        q: 'Cancer et Scorpion : est-ce l’une des meilleures compatibilités ?',
        a: 'Oui, le trigone d’Eau entre Cancer et Scorpion est régulièrement cité parmi les unions les plus profondes du zodiaque. Les deux recherchent la même chose : un amour total, exclusif et durable. La connexion émotionnelle est immédiate et le couple résiste remarquablement aux épreuves. Sa seule zone rouge : la gestion des rancunes accumulées.',
      },
      {
        q: 'Qui aime le plus fort entre le Cancer et le Scorpion ?',
        a: 'Les deux aiment intensément mais différemment : le Cancer aime en enveloppant — soins, présence, rituels tendres — quand le Scorpion aime en fusionnant — passion, exclusivité, profondeur. Aucun ne domine affectivement l’autre, ce qui est rare pour le Scorpion. C’est souvent la première relation où chacun se sent aimé à sa juste mesure.',
      },
      {
        q: 'Quel est le principal piège de ce couple fusionnel ?',
        a: 'L’isolement à deux. Le clan Cancer-Scorpion peut se couper du monde — amis, familles, projets individuels s’étiolent — jusqu’à ce que le couple devienne l’unique horizon de chacun. Cette dépendance mutuelle fragilise paradoxalement le lien : la moindre crise devient existentielle. Garder des ancrages extérieurs est leur meilleure assurance longévité.',
      },
    ],
  },
  {
    slug: 'belier-scorpion',
    signA: 'Bélier',
    signB: 'Scorpion',
    score: 3,
    titre: 'Les deux enfants de Mars, passion et combat',
    dynamique:
      'Bélier et Scorpion partagent le même maître ancestral : Mars, planète du désir et du combat. Leur rencontre est un choc de puissances — attraction physique immédiate, tension électrique permanente. Le Bélier attaque de front, le Scorpion enveloppe et attend son heure : deux stratégies de conquête opposées pour une même intensité. Ce couple vit fort, aime fort, se dispute fort. Rien n’y est tiède, et c’est précisément ce qui les accroche l’un à l’autre : chacun a enfin trouvé un adversaire — et un amant — à sa hauteur.',
    forces:
      'Une alchimie physique explosive, un courage partagé face à l’adversité, une franchise brutale mais saine côté Bélier qui rassure le Scorpion méfiant, et une loyauté de guerriers : on peut se battre entre soi, jamais laisser l’autre se faire attaquer.',
    defis:
      'La transparence impulsive du Bélier heurte la stratégie secrète du Scorpion, qui teste au lieu de demander. Le Bélier oublie la dispute en une heure, le Scorpion la grave à vie : ce décalage de mémoire émotionnelle crée des malentendus profonds.',
    conseil:
      'Bélier : prenez au sérieux les blessures que vous infligez sans y penser — le Scorpion n’oublie rien. Scorpion : dites les choses en direct, votre Bélier ne décode ni les tests ni les sous-entendus.',
    faq: [
      {
        q: 'Pourquoi l’attirance entre Bélier et Scorpion est-elle si forte ?',
        a: 'Ils partagent la même planète maîtresse traditionnelle, Mars — celle du désir, de l’instinct et du combat. Cette parenté martienne crée une reconnaissance immédiate : même intensité, même courage, même refus de la tiédeur. L’attraction physique est parmi les plus fortes du zodiaque, souvent décrite comme magnétique dès la première rencontre.',
      },
      {
        q: 'Ce couple passionnel peut-il durer ?',
        a: 'Oui, mais à une condition non négociable : que la passion ne se transforme pas en guerre d’usure. Les couples Bélier-Scorpion durables ont appris à canaliser leur intensité vers des combats communs — projets, sport, ambitions — plutôt que l’un contre l’autre. Sans cet exutoire, la relation brûle vite et fort, puis explose.',
      },
      {
        q: 'Bélier-Scorpion : qui gagne les conflits ?',
        a: 'Personne, et c’est le problème. Le Bélier gagne l’affrontement immédiat par la force frontale ; le Scorpion gagne la guerre longue par la stratégie et la mémoire. Résultat : des cycles de représailles où chacun croit répondre à l’autre. La sortie n’est pas la victoire mais le désarmement mutuel — le premier qui dépose les armes sauve le couple.',
      },
    ],
  },
  {
    slug: 'gemeaux-scorpion',
    signA: 'Gémeaux',
    signB: 'Scorpion',
    score: 2,
    titre: 'La légèreté face à l’abîme, le duo improbable',
    dynamique:
      'Gémeaux et Scorpion forment l’un des couples les plus déroutants du zodiaque : l’Air le plus léger rencontre l’Eau la plus profonde. Le Scorpion est fasciné par cette insaisissabilité qui échappe à son radar habituel ; le Gémeaux est intrigué par cette intensité qu’il ne sait pas produire. La séduction est un jeu d’échecs délicieux — mais la vie commune confronte deux fonctionnements presque incompatibles : le Gémeaux vit en surface et en mouvement, le Scorpion vit en profondeur et en fusion. Chacun demande à l’autre exactement ce qu’il ne sait pas donner.',
    forces:
      'Une fascination mutuelle durable — on ne s’ennuie jamais —, une complémentarité intellectuelle réelle : le mental agile du Gémeaux et la perspicacité psychologique du Scorpion forment un duo redoutable face au monde extérieur.',
    defis:
      'Le Scorpion exige une fusion et une transparence que le Gémeaux vit comme un interrogatoire permanent ; la sociabilité papillonnante du Gémeaux déclenche la jalousie du Scorpion. La confiance, vitale pour l’un, optionnelle pour l’autre, devient le champ de bataille central.',
    conseil:
      'Ce couple ne tient que par contrat clair : le Scorpion renonce à sonder et contrôler, le Gémeaux offre volontairement la transparence qu’on ne lui arrache pas. L’un et l’autre doivent y gagner une version d’eux-mêmes plus mature.',
    faq: [
      {
        q: 'Gémeaux et Scorpion sont-ils vraiment incompatibles ?',
        a: 'C’est l’une des combinaisons les plus difficiles du zodiaque, mais « difficile » ne signifie pas impossible. L’aspect quinconce entre eux n’offre aucun terrain commun naturel : tout doit se construire consciemment. Les couples qui réussissent sont généralement matures, souvent après des échecs qui ont assoupli le contrôle du Scorpion et ancré le Gémeaux.',
      },
      {
        q: 'Pourquoi le Scorpion est-il attiré par le Gémeaux ?',
        a: 'Parce que le Gémeaux est la seule proie que son radar ne fixe pas. Le Scorpion lit les gens en profondeur — mais le Gémeaux change avant d’être cerné, et cette insaisissabilité rend le Scorpion obsessionnel. S’y ajoute la légèreté : le Gémeaux fait rire ce signe grave, et ce souffle d’air dans ses profondeurs est une drogue douce.',
      },
      {
        q: 'Sur quoi ce couple se brise-t-il le plus souvent ?',
        a: 'Sur la jalousie et le sentiment d’être incompris. Le Scorpion finit par vivre la légèreté sociale du Gémeaux comme une trahison permanente ; le Gémeaux finit par vivre l’intensité du Scorpion comme une prison émotionnelle. Chacun part convaincu que l’autre était incapable d’aimer — alors qu’ils aimaient simplement dans deux langues étrangères.',
      },
    ],
  },
  {
    slug: 'lion-sagittaire',
    signA: 'Lion',
    signB: 'Sagittaire',
    score: 5,
    titre: 'La fête permanente des signes de Feu',
    dynamique:
      'Lion et Sagittaire forment le couple le plus solaire du zodiaque. Deux signes de Feu en trigone : générosité, optimisme et goût du grand spectacle de la vie. Le Lion apporte le panache, la constance et l’art de célébrer ; le Sagittaire apporte l’aventure, la philosophie et un enthousiasme que rien ne décourage. Leur vie commune ressemble à un voyage festif — projets, fêtes, départs impromptus — portée par une admiration mutuelle sincère. Le Sagittaire est l’un des rares signes dont la franchise ne blesse pas l’orgueil du Lion : sa bonne foi désarme.',
    forces:
      'Un optimisme partagé qui traverse les crises, une générosité mutuelle sans calcul, une vie sociale rayonnante et une passion physique joyeuse. Aucun des deux ne boude : les conflits éclatent et se règlent dans la journée.',
    defis:
      'Le Sagittaire a besoin d’une liberté que le Lion, plus possessif qu’il ne l’admet, peut vivre comme un manque d’égards. Les dépenses fastueuses des deux mettent le budget en danger. La franchise brute du Sagittaire égratigne parfois la fierté léonine.',
    conseil:
      'Lion : n’exigez pas la présence, inspirez-la — votre Sagittaire revient toujours vers ce qu’il admire librement. Sagittaire : offrez les égards publics dont votre Lion a besoin, ils ne coûtent rien et valent tout.',
    faq: [
      {
        q: 'Lion et Sagittaire : le couple le plus heureux du zodiaque ?',
        a: 'C’est l’un des plus régulièrement décrits ainsi. Le trigone de Feu aligne leur énergie et leur vision positive de la vie ; ni jeux de pouvoir ni rancunes durables. Là où Bélier-Lion rivalisent parfois, Lion-Sagittaire coopèrent naturellement : le Sagittaire ne conteste pas le trône du Lion, il l’entraîne simplement en voyage hors du royaume.',
      },
      {
        q: 'La liberté du Sagittaire menace-t-elle le Lion ?',
        a: 'Seulement si le Lion la confond avec du désamour. Le Sagittaire a besoin d’explorer — seul parfois — mais sa loyauté de cœur est réelle : il revient toujours, enrichi et enthousiaste. Les Lions épanouis dans ce couple ont compris que cette liberté n’enlève rien à leur règne ; ceux qui l’entravent transforment un compagnon solaire en fugitif.',
      },
      {
        q: 'Quel projet de vie pour un couple Lion-Sagittaire ?',
        a: 'Un projet à leur démesure : grands voyages, entreprise commune, maison ouverte où l’on reçoit beaucoup. Ce couple a besoin d’un horizon ambitieux pour canaliser son énergie — la routine modeste l’éteint. Les enfants y trouvent des parents enthousiastes et inspirants, à condition que le calendrier des aventures leur fasse une place.',
      },
    ],
  },
  {
    slug: 'lion-balance',
    signA: 'Lion',
    signB: 'Balance',
    score: 4,
    titre: 'Le couple glamour, soleil et élégance',
    dynamique:
      'Lion et Balance forment le couple le plus esthétique du zodiaque. Le sextile Feu-Air fait circuler une énergie de séduction permanente : le Lion rayonne, la Balance sublime. Elle est l’écrin dont ce roi rêvait — élégante, sociable, flatteuse avec sincérité ; il est la force tranquille qui tranche enfin les hésitations de ce signe d’air. Ensemble ils forment un couple social par excellence : reçu partout, admiré, photogénique. Derrière la vitrine, une vraie tendresse : la Balance sait aimer l’ego du Lion sans servilité, le Lion sait protéger sans dominer.',
    forces:
      'Un art de vivre partagé — beauté, sorties, raffinement —, une complémentarité décisionnelle : le Lion tranche ce que la Balance pèse. La diplomatie de la Balance désamorce les colères léonines mieux que quiconque.',
    defis:
      'Deux dépensiers pour qui l’image compte : le paraître peut ruiner le couple et masquer les vrais sujets. La Balance, conflictophobe, laisse le Lion décider de tout puis accumule une rancune polie qui explose tard et froidement.',
    conseil:
      'Balance : exprimez vos désaccords à chaud, votre Lion préfère mille fois un débat franc à une froideur différée. Lion : sollicitez l’avis de votre Balance avant de trancher — être consultée est sa façon d’être aimée.',
    faq: [
      {
        q: 'Lion et Balance : pourquoi ce couple séduit-il autant ?',
        a: 'Parce qu’il incarne le glamour astrologique : le signe du rayonnement uni au signe de l’harmonie, tous deux gouvernés par des astres de l’amour et de l’éclat — le Soleil et Vénus. Le sextile entre eux rend la relation fluide : admiration réciproque, vie sociale brillante, esthétique commune. C’est le couple que l’entourage cite en exemple.',
      },
      {
        q: 'La Balance est-elle trop soumise face au Lion ?',
        a: 'C’est le risque principal, mais un malentendu : la Balance ne cède pas par faiblesse, elle cède pour préserver l’harmonie — son bien le plus précieux. Le danger est l’accumulation : des années de concessions non dites peuvent finir en départ que le Lion, sûr de son couple, n’a pas vu venir. La Balance doit apprendre à négocier en continu.',
      },
      {
        q: 'Comment ce couple gère-t-il l’argent ?',
        a: 'Mal, avec panache. Le Lion dépense pour briller et offrir, la Balance pour la beauté et l’élégance : aucun des deux ne freine l’autre. Les couples Lion-Balance stables ont presque toujours un garde-fou externe — budget automatisé, épargne prélevée à la source — qui protège le train de vie des tentations conjointes.',
      },
    ],
  },
  {
    slug: 'taureau-vierge',
    signA: 'Taureau',
    signB: 'Vierge',
    score: 5,
    titre: 'L’harmonie tranquille des signes de Terre',
    dynamique:
      'Taureau et Vierge se reconnaissent au premier regard : même rapport concret au monde, même méfiance envers les grandes déclarations, même amour des choses bien faites. Le trigone de Terre installe une relation sans vertige mais sans mauvaise surprise — et c’est exactement ce que les deux cherchent. Le Taureau apaise l’anxiété perfectionniste de la Vierge par sa stabilité placide ; la Vierge apporte au Taureau une attention fine et des soins quotidiens qui sont sa vraie langue amoureuse. L’amour se prouve ici en gestes : un repas préparé, un problème réglé, une présence fiable.',
    forces:
      'Une confiance mutuelle rapide et durable, un quotidien fluide — deux organisés qui aiment les mêmes rythmes —, une sensualité discrète mais profonde, et une gestion patrimoniale exemplaire. Le couple qui construit sans bruit.',
    defis:
      'La critique : la Vierge améliore tout, y compris son Taureau, qui vit ces remarques comme une remise en cause de ce qu’il est. Le risque routine est réel — deux signes qui aiment leurs habitudes peuvent cesser de se surprendre entièrement.',
    conseil:
      'Vierge : dosez vos suggestions, votre Taureau change lentement mais change par amour — jamais sous pression. Taureau : acceptez qu’être améliorable n’est pas être insuffisant. Et offrez-vous de l’imprévu chaque mois.',
    faq: [
      {
        q: 'Taureau et Vierge : une compatibilité sous-estimée ?',
        a: 'Souvent, car elle manque de spectaculaire. Pas de passion tumultueuse ni de retrouvailles dramatiques : juste une entente profonde qui s’installe vite et ne se dément pas. Le trigone de Terre aligne leurs valeurs — sécurité, travail, fidélité, concret. Les astrologues la classent parmi les unions les plus durables, précisément parce qu’elle ne brûle pas ses réserves.',
      },
      {
        q: 'Comment la Vierge doit-elle formuler ses critiques au Taureau ?',
        a: 'En remplaçant le reproche par la demande : « j’aimerais que » fonctionne, « tu ne fais jamais » braque définitivement. Le Taureau est le signe le plus têtu du zodiaque face à la pression, et le plus généreux face à la douceur. Une Vierge habile obtient tout de son Taureau en valorisant ce qu’il fait déjà avant de suggérer la suite.',
      },
      {
        q: 'Ce couple sait-il encore se séduire après des années ?',
        a: 'C’est son chantier permanent. La sécurité mutuelle est si confortable que la séduction semble superflue — jusqu’au jour où l’un des deux réalise qu’il est devenu un colocataire aimant. La parade est dans leur nature même : le corps. Cuisine, massages, week-ends sensoriels : ce couple se reconquiert par les sens, pas par les mots.',
      },
    ],
  },
  {
    slug: 'vierge-capricorne',
    signA: 'Vierge',
    signB: 'Capricorne',
    score: 5,
    titre: 'L’alliance des perfectionnistes',
    dynamique:
      'Vierge et Capricorne forment le couple le plus fiable du zodiaque. Deux signes de Terre en trigone, deux exigeants qui se reconnaissent enfin : elle, l’analyste du détail ; lui, le stratège du long terme. Leur amour naît souvent de l’estime — admiration pour le sérieux, la compétence, l’éthique de l’autre — avant de devenir tendresse profonde. Ni drames ni jeux : ce couple avance, construit, se prouve son attachement par une loyauté sans faille et des projets menés à bien. Derrière deux façades réservées, une intimité étonnamment douce se déploie à l’abri des regards.',
    forces:
      'Un respect mutuel indéfectible, des ambitions alignées, zéro jalousie — la confiance est totale —, et une efficacité de couple redoutable : ce que Vierge-Capricorne décide se réalise. L’humour pince-sans-rire partagé est leur jardin secret.',
    defis:
      'Le travail dévore tout : deux bourreaux de travail peuvent se croiser des semaines sans vraie rencontre. L’expression des sentiments, pudique des deux côtés, peut s’atrophier jusqu’à ce que l’un doute d’être encore aimé — en silence, évidemment.',
    conseil:
      'Traitez votre couple comme votre meilleur projet : des rendez-vous non annulables, des bilans réguliers, des objectifs de tendresse. C’est contre-romantique en apparence — c’est exactement votre langage, et ça fonctionne.',
    faq: [
      {
        q: 'Vierge et Capricorne : pourquoi se comprennent-ils si bien ?',
        a: 'Parce qu’ils partagent le même système de valeurs : le sérieux, l’effort, la parole tenue. Chacun a souvent souffert d’être « trop exigeant » pour ses partenaires précédents — ensemble, l’exigence devient la norme commune et non plus un reproche. Le trigone de Terre transforme deux solitudes laborieuses en équipe imbattable.',
      },
      {
        q: 'Ce couple manque-t-il de romantisme ?',
        a: 'Il manque de romantisme démonstratif, pas d’amour. Le Capricorne dit « je t’aime » en sécurisant l’avenir, la Vierge le dit en prenant soin des détails du quotidien. Ces preuves concrètes valent des poèmes — encore faut-il les lire comme telles. Le couple gagne à ritualiser quelques gestes tendres explicites, pour les jours de doute.',
      },
      {
        q: 'Quel est le principal danger pour Vierge et Capricorne ?',
        a: 'L’assèchement par le devoir. Carrières, obligations, perfectionnisme domestique : ce couple peut transformer sa vie en liste de tâches parfaitement exécutées où l’amour devient un poste parmi d’autres. La crise arrive vers la quarantaine, quand l’un des deux demande soudain « et nous, dans tout ça ? ». Les couples avertis n’attendent pas la question.',
      },
    ],
  },
  {
    slug: 'taureau-poissons',
    signA: 'Taureau',
    signB: 'Poissons',
    score: 4,
    titre: 'La terre ferme et l’océan, tendresse infinie',
    dynamique:
      'Taureau et Poissons composent l’un des duos les plus tendres du zodiaque. Le sextile Terre-Eau marie deux douceurs différentes : celle, charnelle et stable, du Taureau ; celle, rêveuse et infinie, des Poissons. Les Poissons trouvent enfin un rivage — quelqu’un qui les ancre sans les brusquer ; le Taureau découvre une dimension magique que son réalisme ignorait. Leur amour a une qualité rare : il ne s’use pas en conflits, car les Poissons contournent ce que le Taureau n’impose pas. La sensualité, terrain commun majeur, unit le toucher terrien à l’imaginaire océanique.',
    forces:
      'Une tendresse quotidienne exceptionnelle, une créativité nourrie — le Taureau concrétise les visions des Poissons —, très peu de rapports de force, et une sensualité complète où chacun élargit le registre de l’autre.',
    defis:
      'Le rapport au réel : factures, horaires, engagements flous des Poissons exaspèrent le Taureau qui aime le carré. Le Taureau possessif peut angoisser des Poissons insaisissables par nature — non par infidélité, mais par besoin de flou vital.',
    conseil:
      'Taureau : n’essayez pas d’endiguer l’océan, canalisez-le — des cadres souples plutôt que des murs. Poissons : honorez les quelques rituels sacrés de votre Taureau, cette fiabilité minimale achète votre liberté de rêver.',
    faq: [
      {
        q: 'Taureau et Poissons : pourquoi cette tendresse si particulière ?',
        a: 'Parce que ni l’un ni l’autre n’aime le conflit ni le rapport de force — rare dans les combinaisons du zodiaque. Le sextile Terre-Eau fait circuler une bienveillance naturelle : le Taureau protège sans dominer, les Poissons adoucissent sans manipuler. Beaucoup décrivent cette relation comme « reposante », un compliment immense après des amours agitées.',
      },
      {
        q: 'Le Taureau peut-il vivre avec le flou des Poissons ?',
        a: 'S’il distingue le flou vital du flou problématique. Les Poissons ont besoin d’imprécision — horaires souples, rêveries, projets ouverts — pour respirer ; c’est leur écologie mentale, pas de la négligence. Le Taureau doit sanctuariser l’essentiel (fidélité, finances, parole donnée) et lâcher tout le reste. Les couples heureux ont trouvé cette frontière.',
      },
      {
        q: 'Qui gère le quotidien dans ce couple ?',
        a: 'Le Taureau, massivement — et il faut que ce soit reconnu. Courses, comptes, organisation : la terre ferme porte l’intendance pendant que l’océan inspire, console et embellit. Cette répartition fonctionne tant qu’elle est nommée et remerciée ; elle explose si le Taureau se sent devenu le parent d’un enfant-poète. La gratitude est le loyer des Poissons.',
      },
    ],
  },
  {
    slug: 'belier-cancer',
    signA: 'Bélier',
    signB: 'Cancer',
    score: 3,
    titre: 'Le guerrier et le nid, carré cardinal',
    dynamique:
      'Bélier et Cancer forment un carré cardinal : deux forces d’initiative qui tirent dans des directions opposées — le dehors conquérant contre le dedans protecteur. Le Bélier fonce vers le monde, le Cancer construit un refuge contre lui. L’attirance initiale est celle des contraires touchants : le Bélier est ému par cette tendresse qui l’attend, le Cancer est fasciné par ce courage qui le défend. Mais le quotidien confronte l’impatience à la susceptibilité : les brusqueries du Bélier meurtrissent la carapace du Cancer, dont les marées émotionnelles déroutent le guerrier.',
    forces:
      'Une complémentarité archétypale — la force et la tendresse —, une protection mutuelle réelle : le Bélier défend son Cancer contre le monde, le Cancer offre au Bélier le seul lieu où déposer les armes. Les enfants renforcent souvent ce couple.',
    defis:
      'Le Bélier dit tout, vite et fort ; le Cancer encaisse en silence et ressort les blessures en bouderies que le Bélier ne décode pas. Lui a besoin d’action et de sorties, elle ou lui de cocon et de rituels : le calendrier même devient un conflit.',
    conseil:
      'Bélier : la douceur n’est pas une perte de temps, c’est la clé de tout ce que vous voulez de votre Cancer. Cancer : dites vos blessures en mots simples et immédiats — la bouderie est illisible pour un Bélier, la franchise le désarme.',
    faq: [
      {
        q: 'Bélier et Cancer peuvent-ils former un couple durable ?',
        a: 'Oui, c’est même un carré qui vieillit bien quand il passe le cap des premières années. Les deux sont des cardinaux : ils veulent construire, agir, fonder. Une fois les codes de l’autre appris — douceur pour l’un, franchise pour l’autre — le couple combine force extérieure et richesse intérieure comme peu d’autres. Beaucoup deviennent des familles solides.',
      },
      {
        q: 'Pourquoi le Cancer se sent-il brusqué par le Bélier ?',
        a: 'Parce que le Bélier communique en mode direct : il dit ce qu’il pense à la seconde où il le pense, sans emballage. Pour le Cancer, qui pèse chaque nuance affective, cette franchise brute ressemble à de la dureté, voire du rejet. Le malentendu est total : le Bélier croit être honnête, le Cancer reçoit des coups. La traduction mutuelle s’apprend.',
      },
      {
        q: 'Ce couple fonctionne-t-il mieux avec des enfants ?',
        a: 'Souvent, oui — c’est l’axe parental en action : le Bélier incarne l’élan, le jeu, la protection extérieure ; le Cancer le soin, l’écoute, la sécurité affective. Les enfants reçoivent un équilibre complet et donnent au couple un projet qui aligne enfin ses deux énergies cardinales. Le risque : ne plus être que parents. Les rendez-vous d’amoureux restent vitaux.',
      },
    ],
  },
  {
    slug: 'belier-capricorne',
    signA: 'Bélier',
    signB: 'Capricorne',
    score: 3,
    titre: 'Le sprint face au marathon, carré d’ambition',
    dynamique:
      'Bélier et Capricorne se heurtent et se respectent : carré cardinal entre le feu de l’élan et la terre de l’endurance. Les deux sont des conquérants — mais le Bélier veut la victoire aujourd’hui quand le Capricorne bâtit celle de dans dix ans. L’attirance naît de l’admiration : le Capricorne est impressionné par cette audace qui ose tout, le Bélier par cette puissance froide qui finit toujours par gagner. En couple, ils s’affûtent mutuellement — ou s’épuisent : l’impatience de l’un contre la prudence de l’autre, la spontanéité contre le plan quinquennal.',
    forces:
      'Une ambition partagée qui force le respect mutuel, une loyauté carrée — aucun des deux ne trahit —, et une complémentarité stratégique redoutable quand elle coopère : l’audace du Bélier ouvre les portes que la persévérance du Capricorne franchit.',
    defis:
      'Le rythme, encore le rythme : le Bélier vit le Capricorne comme un frein permanent, le Capricorne vit le Bélier comme un risque ambulant. L’expression affective aggrave tout — impulsive et exigeante d’un côté, différée et pudique de l’autre.',
    conseil:
      'Faites de vos tempos une division du travail : au Bélier les lancements, au Capricorne les consolidations. Et instituez un langage amoureux minimal commun — un rituel quotidien bref que même un Capricorne pudique et un Bélier pressé peuvent tenir.',
    faq: [
      {
        q: 'Bélier et Capricorne : l’ambition suffit-elle à les unir ?',
        a: 'Elle est leur meilleur terrain commun, mais pas suffisant seule. Ces deux cardinaux se comprennent dans l’effort et le projet ; c’est dans l’intimité que le fossé apparaît — chaleur immédiate contre réserve calculée. Les couples qui durent ont construit un espace affectif à mi-chemin : plus posé que le Bélier ne voudrait, plus expressif que le Capricorne n’oserait.',
      },
      {
        q: 'Le Capricorne trouve-t-il le Bélier immature ?',
        a: 'Au début, souvent — et il a partiellement tort. L’impulsivité du Bélier n’est pas de l’immaturité mais un mode de connaissance : il apprend en fonçant, là où le Capricorne apprend en planifiant. Les Capricornes qui respectent cette différence gagnent un éclaireur audacieux ; ceux qui la méprisent transforment leur partenaire en adolescent rebelle permanent.',
      },
      {
        q: 'Comment éviter la guerre froide dans ce couple ?',
        a: 'En interdisant le mépris, dans les deux sens. Le carré Bélier-Capricorne ne se dispute pas bruyamment longtemps : il glisse vers le mépris silencieux — « tête brûlée » contre « rabat-joie » — qui tue plus sûrement que les éclats. La règle de survie : critiquer les décisions, jamais le tempérament. Le tempérament de l’autre est précisément ce qu’on est venu chercher.',
      },
    ],
  },
  {
    slug: 'taureau-lion',
    signA: 'Taureau',
    signB: 'Lion',
    score: 3,
    titre: 'Deux trônes pour un royaume, carré fixe',
    dynamique:
      'Taureau et Lion partagent le goût du beau, du confort et de la loyauté — et une inflexibilité légendaire. Carré entre deux signes fixes : quand ces deux-là s’aiment, c’est pour toujours ; quand ils s’opposent, c’est mur contre mur. Le Lion veut briller, le Taureau veut posséder : deux formes de royauté qui peuvent se compléter — il règne en façade, il ou elle gouverne l’intendance — ou s’affronter sur chaque décision. La sensualité est leur langage de réconciliation : deux épicuriens qui savent transformer une dispute en festin.',
    forces:
      'Une fidélité massive des deux côtés, un art de vivre partagé — table, confort, plaisirs —, une stabilité que rien n’ébranle de l’extérieur, et une admiration réciproque : le Taureau est fier de son Lion, le Lion se repose sur son Taureau.',
    defis:
      'L’entêtement au carré : aucun ne cède jamais le premier, et les conflits gèlent en sièges interminables. Le Lion dépense pour paraître, le Taureau épargne pour sécuriser — l’argent devient le champ de bataille récurrent.',
    conseil:
      'Créez le rôle d’arbitre tournant : chaque mois, l’un des deux a le droit de trancher les blocages — l’autre s’incline sans revanche. Votre fixité est votre force d’engagement ; ne la laissez pas devenir votre prison de couple.',
    faq: [
      {
        q: 'Taureau et Lion : que partagent-ils vraiment ?',
        a: 'L’essentiel : la loyauté, le goût du plaisir et l’horreur du provisoire. Ces deux signes fixes s’engagent totalement et construisent des couples remarquablement stables vus de l’extérieur. Leur carré ne porte pas sur les valeurs — largement communes — mais sur la manière : qui décide, qui dépense, qui cède. Du solide, avec des frictions de gouvernance.',
      },
      {
        q: 'Pourquoi leurs disputes durent-elles si longtemps ?',
        a: 'Parce qu’aucun mécanisme naturel de dégel n’existe entre deux fixes : le Bélier oublie, la Balance négocie, les Poissons contournent — Taureau et Lion, eux, campent. Chacun attend des excuses que l’autre attend aussi. Les couples rodés instaurent des rituels de sortie de crise : un geste convenu — un plat, une place de concert — qui dit « on arrête » sans perdre la face.',
      },
      {
        q: 'L’argent est-il vraiment leur principal problème ?',
        a: 'C’est le plus récurrent, car il cristallise leurs deux sécurités : le Taureau se sent en sécurité en accumulant, le Lion en rayonnant — et rayonner coûte cher. La solution éprouvée : trois comptes. Un commun pour la vie partagée, deux personnels sans droit de regard. Le Taureau garde sa réserve rassurante, le Lion sa liberté de panache, la paix est achetée.',
      },
    ],
  },
  {
    slug: 'gemeaux-cancer',
    signA: 'Gémeaux',
    signB: 'Cancer',
    score: 3,
    titre: 'L’esprit et le cœur, voisins étrangers',
    dynamique:
      'Gémeaux et Cancer se suivent sur le zodiaque mais habitent deux mondes : celui des mots et celui des émotions. Le Gémeaux séduit le Cancer par sa légèreté qui dédramatise tout ; le Cancer touche le Gémeaux par une profondeur affective qu’aucune conversation ne remplace. Leur relation est une traduction permanente — il faut convertir les sentiments en phrases pour l’un, les phrases en sentiments pour l’autre. Quand la traduction fonctionne, le couple est étonnamment complet : intelligence et tendresse, humour et refuge. Quand elle échoue, chacun se sent étranger dans sa propre histoire.',
    forces:
      'Une curiosité mutuelle durable, l’humour comme langue commune — le Gémeaux fait rire ce grand sensible et c’est un cadeau royal —, et une complémentarité réelle : le Cancer donne un foyer au nomade mental, le Gémeaux ouvre les fenêtres du cocon.',
    defis:
      'Le Cancer a besoin de présence émotionnelle constante, le Gémeaux de stimulation et de sorties : l’un se sent délaissé, l’autre étouffé. L’humeur lunaire du Cancer déroute le Gémeaux qui la fuit dans la légèreté — pire réponse possible.',
    conseil:
      'Gémeaux : quinze minutes de présence totale — sans écran, sans esquive — valent mieux pour votre Cancer que trois heures distraites. Cancer : formulez vos besoins en clair, votre Gémeaux répond merveilleusement aux demandes et terriblement aux reproches muets.',
    faq: [
      {
        q: 'Gémeaux et Cancer : que peut donner ce couple si différent ?',
        a: 'Un couple complet, si chacun apprend la langue de l’autre. Le Gémeaux apporte l’air — humour, ouverture, mouvement — dans l’univers émotionnel du Cancer qui, sans cela, tourne en huis clos ; le Cancer apporte la profondeur et l’ancrage qui manquent au papillonnage mental. Leurs voisinages zodiacaux produisent souvent ces couples : différents mais étrangement complémentaires.',
      },
      {
        q: 'Pourquoi le Cancer souffre-t-il de la légèreté du Gémeaux ?',
        a: 'Parce qu’il la lit comme de l’indifférence. Quand le Cancer partage une émotion et que le Gémeaux répond par une pirouette ou change de sujet, le Cancer entend « tes sentiments m’ennuient ». En réalité, le Gémeaux est souvent démuni face à l’émotionnel pur et fuit son impuissance, pas son partenaire. Nommer ce mécanisme désamorce des années de malentendus.',
      },
      {
        q: 'Ce couple peut-il durer sans s’épuiser ?',
        a: 'Oui, avec une architecture claire : des plages de vie sociale où le Gémeaux respire sans culpabilité, des plages de cocon où le Cancer reçoit une présence pleine. Le couple meurt quand chaque besoin devient une négociation ; il prospère quand les deux régimes sont institués et respectés. Beaucoup y ajoutent un projet créatif commun — leurs talents combinés y font merveille.',
      },
    ],
  },
  {
    slug: 'cancer-lion',
    signA: 'Cancer',
    signB: 'Lion',
    score: 4,
    titre: 'La lune et le soleil, tendresse et panache',
    dynamique:
      'Cancer et Lion incarnent les deux luminaires du zodiaque : la Lune et le Soleil en couple. Le Cancer offre au Lion ce que la cour du roi ne donne jamais — une tendresse vraie, sans calcul, qui aime l’homme ou la femme derrière la couronne ; le Lion offre au Cancer la protection éclatante et la loyauté d’un roc solaire. Leur complémentarité est archétypale : il rayonne dehors, l’autre veille dedans. La relation prend des allures de conte — le protecteur et le sensible — avec un vrai risque : que le Lion prenne toute la lumière et que le Cancer s’efface en coulisses.',
    forces:
      'Une loyauté absolue des deux côtés, des rôles naturellement harmonieux — représentation et foyer —, une générosité mutuelle : le Lion donne avec faste, le Cancer avec soin. La famille devient souvent leur royaume commun.',
    defis:
      'Le Lion a besoin d’un public que le Cancer, jaloux de l’intimité, supporte mal ; le Cancer a des marées d’humeur que le Lion, allergique à la plainte, écoute distraitement. Le déséquilibre lumière/ombre peut devenir rancune silencieuse.',
    conseil:
      'Lion : partagez la scène — valorisez publiquement votre Cancer, c’est votre plus beau cadeau de roi. Cancer : dites vos besoins avant la marée haute, votre Lion répond magnifiquement aux demandes claires et mal aux reproches noyés.',
    faq: [
      {
        q: 'Cancer et Lion : les luminaires font-ils bon ménage ?',
        a: 'Étonnamment bien. La Lune et le Soleil ne se disputent pas le même ciel : le Lion règne sur le jour social, le Cancer sur la nuit intime, et chacun est soulagé que l’autre tienne son domaine. Beaucoup de ces couples affichent une répartition assumée — l’un brille, l’autre veille — qui scandalise les modernes et les rend profondément heureux.',
      },
      {
        q: 'Le Cancer ne risque-t-il pas de s’effacer derrière le Lion ?',
        a: 'C’est le scénario d’échec classique : des années à servir le rayonnement de l’autre, puis une explosion de rancune que le Lion, sincèrement aveugle, n’a pas vue venir. La prévention tient en une pratique : la reconnaissance publique régulière. Un Lion qui honore son Cancer devant témoins transforme l’ombre en écrin — et le Cancer y fleurit au lieu de s’y faner.',
      },
      {
        q: 'Quel terrain commun pour ce couple si différent ?',
        a: 'La famille et l’hospitalité. Le Cancer rêve d’un foyer chaleureux, le Lion d’une maison dont on parle : ensemble ils créent ces maisons pleines — enfants, amis, fêtes — où le faste léonin et le soin cancérien fusionnent. Recevoir est leur art conjugal : lui met la lumière et la table, l’autre l’âme et les petits plats. Leurs tablées sont légendaires.',
      },
    ],
  },
  {
    slug: 'vierge-scorpion',
    signA: 'Vierge',
    signB: 'Scorpion',
    score: 4,
    titre: 'L’analyste et l’enquêteur, complicité des profondeurs',
    dynamique:
      'Vierge et Scorpion partagent un talent rare : voir ce que les autres ne voient pas. Elle analyse, il sonde ; le sextile Terre-Eau unit deux intelligences perçantes qui se reconnaissent avec soulagement — enfin quelqu’un qui ne vit pas à la surface. Leur amour se construit dans les conversations profondes et la confiance progressive : deux méfiants qui se livrent par couches. Le Scorpion apporte l’intensité qui déride la prudence de la Vierge ; la Vierge apporte la stabilité qui apaise les tempêtes du Scorpion. Discret dehors, ce couple est d’une richesse intérieure insoupçonnée.',
    forces:
      'Une loyauté farouche partagée, une intimité intellectuelle et psychologique rare, l’art de se dire les vraies choses — la Vierge est l’un des rares signes dont le Scorpion accepte les critiques, car elles sont justes et sans malveillance.',
    defis:
      'Deux anxieux qui ruminent : les silences de l’un nourrissent les scénarios de l’autre. La Vierge critique quand elle stresse, le Scorpion pique quand il doute — les mauvaises passes peuvent devenir des spirales d’acidité mutuelle.',
    conseil:
      'Videz les contentieux chaque semaine : un rituel court où chacun dit une inquiétude et une gratitude. Vos deux mentaux puissants ont besoin d’un déversoir organisé — sans lui, ils fabriquent des procès imaginaires.',
    faq: [
      {
        q: 'Vierge et Scorpion : pourquoi cette entente inattendue ?',
        a: 'Parce que sous des dehors opposés — la réserve sage et l’intensité magnétique — ils fonctionnent pareil : observation aiguë, méfiance initiale, engagement total une fois la confiance donnée. Le sextile entre eux fait le reste. Beaucoup de ces couples racontent la même chose : « c’est la première personne qui me comprend sans que j’explique ».',
      },
      {
        q: 'La critique de la Vierge ne blesse-t-elle pas le Scorpion ?',
        a: 'Moins qu’on ne le croit, car elle vise juste et sans intention de nuire — deux qualités que le Scorpion, expert en détection des motifs cachés, reconnaît immédiatement. Il supporte mal les attaques d’ego, pas les vérités utiles. En retour, la Vierge est l’un des rares signes à ne pas être déstabilisé par les sondages permanents du Scorpion : elle n’a rien à cacher.',
      },
      {
        q: 'Quelle est la vie intime de ce couple discret ?',
        a: 'Beaucoup plus riche que leur façade ne le suggère. Le Scorpion libère la sensualité que la Vierge contient sous son contrôle, et la Vierge offre au Scorpion une confiance dans laquelle son intensité peut se déployer sans effrayer. La pudeur publique des deux protège un jardin secret dense — c’est le couple dont l’entourage ne sait jamais rien, par choix.',
      },
    ],
  },
];
