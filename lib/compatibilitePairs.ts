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
  /** 150-170 word answer capsule (extractive snippet target); added per Gübür framework retrofit */
  answerCapsule?: string;
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
    answerCapsule:
      'La compatibilité amoureuse entre le Lion et le Scorpion est l’une des plus intenses du zodiaque. Ces deux signes fixes, unis par un carré, s’attirent avec une force magnétique : le Lion règne dans la lumière, le Scorpion dans l’ombre, et chacun reconnaît chez l’autre une puissance égale. La passion et la loyauté y sont exceptionnelles, mais la lutte de pouvoir permanente en fait un couple noté 3 sur 5. Le charme social du Lion heurte l’exclusivité jalouse du Scorpion, et deux orgueils inflexibles transforment la moindre dispute en bras de fer. Pour durer, ce couple doit convertir sa rivalité en alliance : transparence du Lion, expression des peurs du Scorpion. Une consultation de voyance amoureuse éclaire les blocages précis de votre relation Lion-Scorpion et le chemin vers un équilibre durable.',
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
    answerCapsule:
      'La compatibilité amoureuse entre le Bélier et le Lion est l’une des plus fortes du zodiaque, notée 5 sur 5. Ces deux signes de Feu, reliés par un trigone harmonieux, partagent la même énergie, la même franchise et le même goût de l’aventure. L’attirance est immédiate et la passion physique durable, car chacun nourrit la flamme de l’autre au lieu de l’éteindre. Le Bélier apporte l’élan et l’audace, le Lion la constance et le panache : ensemble, ils forment un couple solaire et enviable. Le seul vrai défi est la gestion de deux ego puissants — la question du leadership revient sans cesse. En répartissant les territoires de décision et en célébrant les victoires de l’autre, ce couple devient indestructible. Une guidance personnalisée précise comment canaliser votre énergie commune vers une relation aussi durable qu’intense.',
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
    answerCapsule:
      'La compatibilité amoureuse entre le Bélier et la Balance repose sur l’attirance des opposés : ils occupent les deux extrémités du même axe zodiacal, celui du « moi » face au « nous ». Le Bélier fonce et tranche, la Balance pèse et harmonise — chacun possède exactement ce qui manque à l’autre. Cette opposition crée une polarité magnétique et une relation notée 4 sur 5, où le Bélier apprend la nuance et la Balance l’affirmation de soi. Le principal point de friction est le rythme de décision : le Bélier déteste attendre, la Balance a besoin de peser. Les couples qui durent utilisent leurs forces en alternance au lieu de s’opposer. Une consultation révèle si votre axe Bélier-Balance penche vers la croissance mutuelle ou l’incompréhension chronique, et comment transformer cette différence en complémentarité.',
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
    answerCapsule:
      'La compatibilité amoureuse entre le Taureau et le Scorpion forme l’axe le plus sensuel du zodiaque. Ces deux signes fixes en opposition combinent la sensualité terrestre du Taureau et l’intensité émotionnelle du Scorpion, produisant une alchimie physique rare, notée 4 sur 5. Tous deux s’engagent lentement mais totalement : quand ce couple se forme, il vise le définitif, et la possessivité partagée y devient un langage d’amour commun. Le défi tient à deux entêtements légendaires — quand ils se braquent, personne ne cède — et au besoin de transformation du Scorpion qui bouscule la stabilité du Taureau. Pour durer, chacun respecte le tempo de l’autre : le Scorpion annonce ses tempêtes, le Taureau accepte qu’une crise traversée ensemble renforce le lien. Une guidance de voyance amoureuse éclaire les dynamiques profondes de votre couple Taureau-Scorpion.',
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
    answerCapsule:
      'La compatibilité amoureuse entre le Cancer et les Poissons est l’une des plus harmonieuses du zodiaque, notée 5 sur 5. Ces deux signes d’Eau, unis par un trigone, se comprennent sans parler et vivent l’amour comme une évidence émotionnelle. Le Cancer apporte le foyer, la tendresse protectrice et la mémoire du couple ; les Poissons apportent le rêve, la douceur et une capacité d’adaptation qui désamorce les tensions. Leur relation ressemble à une bulle tendre, un monde à deux d’une rare qualité. Le seul risque vient de leur sensibilité commune : les blessures silencieuses s’accumulent, car aucun n’ose froisser l’autre, et la fusion peut devenir étouffante. Verbaliser les besoins au lieu de les deviner et garder chacun un jardin personnel suffit à protéger ce lien précieux. Une consultation vous aide à transformer votre intuition partagée en force durable.',
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
    answerCapsule:
      'La compatibilité amoureuse entre le Taureau et le Cancer est l’une des plus stables du zodiaque, notée 5 sur 5. Reliés par un sextile Terre-Eau, ils partagent le même projet sans même en parler : construire un cocon. Le Taureau offre la stabilité matérielle et une présence rassurante, le Cancer la tendresse et l’art de faire d’une maison un refuge. Fidélité, foyer et famille sont leurs valeurs communes, et les sujets de conflit structurels sont rares. Le principal danger est la routine confortable qui endort le désir : deux signes attachés à leurs habitudes peuvent cesser de se surprendre. Programmer l’imprévu et rester attentif aux humeurs lunaires du Cancer entretient la flamme. Une guidance amoureuse précise comment garder votre stabilité vivante plutôt qu’endormie, pour un couple aussi passionné que sécurisant.',
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
    answerCapsule:
      'La compatibilité amoureuse entre le Gémeaux et le Sagittaire forme l’axe le plus joyeux du zodiaque, celui de la connaissance et du mouvement. Ces deux signes mutables en opposition sont curieux et allergiques à l’enfermement : leur couple ressemble à une conversation sans fin entrecoupée de voyages, notée 4 sur 5. Le Gémeaux butine les idées, le Sagittaire leur donne une direction et un horizon. Aucun ne cherche à posséder l’autre, ce qui rend la relation étonnamment légère et libre. Le défi est le concret — factures, engagement, projets de long terme — que deux signes du mouvement repoussent volontiers. Nommer un responsable de l’intendance à tour de rôle et transformer les différences de fond en jeu suffit à ancrer ce couple. Une consultation révèle comment votre liberté partagée peut devenir un engagement durable sans perdre sa vitalité.',
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
    answerCapsule:
      'La compatibilité amoureuse entre le Cancer et le Capricorne forme l’axe parental du zodiaque : le foyer face à la carrière, le dedans face au dehors. Cette opposition attire puissamment, car chacun reconnaît chez l’autre la moitié de l’équation familiale qu’il porte. Le Cancer offre la chaleur émotionnelle dont le Capricorne austère a soif ; le Capricorne offre la structure et la sécurité dont le Cancer anxieux a besoin. Couple bâtisseur noté 4 sur 5, souvent tourné vers la famille et le long terme. Le défi tient au langage affectif : le Capricorne aime en actes, le Cancer attend des mots et de la présence, et chacun peut se sentir mal aimé. Apprendre la langue de l’autre et sanctuariser du temps de couple hors travail change tout. Une guidance amoureuse éclaire comment conjuguer vos deux rôles complémentaires sans vous y réduire.',
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
    answerCapsule:
      'La compatibilité amoureuse entre le Lion et le Verseau oppose le cœur et la tête sur l’axe du rayonnement. Le Lion rayonne pour être aimé, le Verseau se détache pour rester libre : deux signes fixes que tout oppose et qui pourtant se fascinent. Le Lion est intrigué par cet être qui ne tombe pas sous son charme, le Verseau par cette chaleur qu’il s’interdit. Relation notée 3 sur 5 : brillante et originale quand l’équilibre est trouvé, épuisante sinon. Le Lion a besoin d’adoration exclusive, le Verseau la refuse par principe. Pour durer, le Verseau offre des marques d’admiration sincères et le Lion cesse d’exiger — la liberté donnée est le seul chemin vers la loyauté du Verseau. Une consultation précise si votre paradoxe Lion-Verseau mène à un couple rayonnant ou à des malentendus affectifs répétés.',
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
    answerCapsule:
      'La compatibilité amoureuse entre la Vierge et les Poissons forme l’axe du dévouement : deux signes qui aiment en se rendant utiles, l’un par l’ordre, l’autre par l’abandon. La Vierge organise et soigne, les Poissons ressentent et pardonnent — cette opposition fonctionne comme deux mains d’un même geste, notée 4 sur 5. La Vierge donne un corps aux rêves des Poissons, les Poissons donnent une âme à la précision de la Vierge. Chacun trouve chez l’autre ce qu’il ne sait pas faire. Le défi : la Vierge critique pour aider, les Poissons l’entendent comme un rejet et fuient dans le flou. Remplacer une critique par un remerciement et offrir des repères concrets aux Poissons désamorce la spirale. Une guidance amoureuse montre comment votre complémentarité Vierge-Poissons devient une force au lieu d’un épuisement mutuel.',
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
    answerCapsule:
      'La compatibilité amoureuse entre le Gémeaux et la Balance est l’une des plus fluides du zodiaque, notée 5 sur 5. Ces deux signes d’Air, unis par un trigone, se connectent d’abord par l’esprit — l’humour, la répartie, le plaisir d’échanger — avant que le lien ne descende au cœur. La Balance apporte l’harmonie et le raffinement, le Gémeaux la légèreté et la curiosité : leur vie de couple est sociale, élégante et étonnamment paisible. Ils préfèrent séduire que se disputer. Le seul point de vigilance est que deux signes qui fuient le conflit laissent les vrais sujets sous le tapis, et que l’indécision fait flotter les grands choix. Institutionnaliser de vraies conversations et fixer des échéances aux décisions donne des fondations à cette belle harmonie. Une consultation vous aide à ancrer votre complicité dans la durée.',
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
    answerCapsule:
      'La compatibilité amoureuse entre le Taureau et le Capricorne est l’une des plus solides du zodiaque, notée 5 sur 5. Ces deux signes de Terre, reliés par un trigone, parlent le même langage : celui des actes, du temps long et des fondations. Le Capricorne apporte l’ambition et la stratégie, le Taureau la sensualité et l’art de savourer ce qui a été construit. Leur amour grandit lentement mais atteint une profondeur que les couples spectaculaires connaissent rarement, avec une fiabilité mutuelle absolue. Le seul ennemi intérieur est la routine : deux signes de Terre s’installent volontiers dans un confort qui peut anesthésier le désir. Bâtir toujours un projet nouveau et ritualiser l’expression des sentiments maintient le couple vivant. Une guidance amoureuse précise comment savourer votre réussite à deux au lieu de la subir.',
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
    answerCapsule:
      'La compatibilité amoureuse entre le Scorpion et les Poissons est l’une des plus profondes du zodiaque, notée 5 sur 5. Ces deux signes d’Eau, unis par un trigone, vivent une connexion immédiate, intuitive, presque télépathique — beaucoup parlent d’âme sœur dès la rencontre. Le Scorpion, intense et entier, trouve chez les Poissons une âme qui n’a pas peur de ses profondeurs ; les Poissons trouvent chez le Scorpion une passion qui les ancre et les protège. Leur intimité atteint des intensités rares. Le risque est la fusion qui devient engloutissement : le Scorpion possessif et les Poissons influençables peuvent s’enfermer dans un huis clos sans oxygène. Garder des ancrages extérieurs et cultiver la confiance protège ce lien exceptionnel. Une consultation éclaire comment votre fusion Scorpion-Poissons reste une force au lieu de devenir un vertige.',
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
    answerCapsule:
      'La compatibilité amoureuse entre le Bélier et le Sagittaire est l’une des plus dynamiques du zodiaque, notée 5 sur 5. Ces deux signes de Feu, reliés par un trigone, partagent l’énergie, la liberté et l’enthousiasme : le Bélier allume les projets, le Sagittaire leur donne un horizon. Leur amour ressemble à une amitié passionnée — on rit beaucoup, on bouge tout le temps, on se dit tout sans détour, sans jalousie ni jeux de pouvoir. Le seul vrai danger est l’impulsivité doublée : décisions hâtives, achats ou ruptures sur un coup de tête. La règle des 24 heures avant toute décision importante ou dispute sérieuse protège ce couple d’aventuriers. Une guidance amoureuse montre comment transformer votre spontanéité commune en une relation aussi durable qu’intense.',
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
    answerCapsule:
      'La compatibilité amoureuse entre le Gémeaux et le Verseau est l’une des plus naturelles du zodiaque, notée 5 sur 5. Ces deux signes d’Air, unis par un trigone, se rencontrent d’abord sur le terrain de l’esprit : enfin quelqu’un qui suit, qui surprend, qui ne cherche pas à posséder. Le Gémeaux apporte la vivacité et le jeu, le Verseau la vision et l’originalité, et leur couple invente son propre modèle, libre des conventions. On s’aime ici sans s’enfermer — chacun garde ses amis, ses projets, son indépendance —, et ce respect mutuel de la liberté soude le lien plus sûrement que toute promesse. Le seul vrai risque est l’émotionnel : deux cérébraux qui analysent les sentiments au lieu de les vivre, jusqu’à ce que la tendresse physique et les mots d’amour se raréfient sans que personne n’ose le signaler. Une consultation de voyance amoureuse aide le couple Gémeaux-Verseau à incarner ce lien mental exceptionnel dans un amour pleinement vécu.',
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
    answerCapsule:
      'La compatibilité amoureuse entre la Balance et le Verseau est élégante et cérébrale, notée 4 sur 5. Ces deux signes d’Air en trigone partagent le même idéalisme : la Balance rêve d’harmonie parfaite, le Verseau d’un monde meilleur. Leur entente se tisse dans les conversations raffinées, les projets culturels et une vie sociale choisie. La Balance apporte la grâce relationnelle et l’art du compromis ; le Verseau, l’originalité et le courage de la différence — un couple classique en apparence, profondément non conventionnel dans son fonctionnement. Les frictions sont douces mais réelles : la Balance attend un romantisme que le Verseau, pudique et détaché, oublie de donner, tandis que le rebelle du zodiaque s’ennuie du consensualisme de sa partenaire. L’équilibre tient quand la Balance soutient les combats du Verseau et que celui-ci offre les attentions tendres qu’elle n’ose réclamer. Une consultation de voyance amoureuse éclaire les ajustements précis qui rendent le lien Balance-Verseau durable.',
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
    answerCapsule:
      'La compatibilité amoureuse entre le Cancer et le Scorpion est l’une des plus intenses du zodiaque, notée 5 sur 5. Ces deux signes d’Eau, unis par un trigone, s’aiment au niveau de profondeur où la plupart des autres signes ne descendent jamais : la connexion est instinctive, presque animale. Le Cancer offre la tendresse enveloppante et la loyauté du foyer ; le Scorpion, la passion totale et une protection farouche de ce qu’il aime. Chacun sent que l’autre ne joue pas — ici, on aime entièrement ou pas du tout —, et le couple se construit vite, en clan impénétrable. Le revers de cette intensité est la mémoire émotionnelle : deux rancuniers dont les blessures ressortent des années plus tard, entre bouderie lunaire et silence vengeur. Instaurer le pardon explicite est vital. Une consultation de voyance amoureuse aide le couple Cancer-Scorpion à transformer sa profondeur en refuge plutôt qu’en piège.',
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
    answerCapsule:
      'La compatibilité amoureuse entre le Bélier et le Scorpion est explosive et combative, notée 3 sur 5. Ces deux signes partagent le même maître ancestral, Mars, planète du désir et du combat : leur rencontre est un choc de puissances, attraction physique immédiate et tension électrique permanente. Le Bélier attaque de front, le Scorpion enveloppe et attend son heure — deux stratégies de conquête opposées pour une même intensité. Rien n’est tiède entre eux, et c’est ce qui les accroche : chacun a enfin trouvé un adversaire, et un amant, à sa hauteur. Le défi vient du décalage de mémoire : le Bélier oublie la dispute en une heure, le Scorpion la grave à vie, tandis que sa stratégie secrète déroute la franchise impulsive du Bélier. Le couple dure quand le Bélier mesure les blessures qu’il inflige sans y penser et que le Scorpion parle en direct. Une consultation de voyance amoureuse éclaire ce bras de fer Bélier-Scorpion.',
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
    answerCapsule:
      'La compatibilité amoureuse entre le Gémeaux et le Scorpion est l’une des plus déroutantes du zodiaque, notée 2 sur 5. L’Air le plus léger y rencontre l’Eau la plus profonde : le Scorpion est fasciné par cette insaisissabilité qui échappe à son radar, le Gémeaux intrigué par une intensité qu’il ne sait pas produire. La séduction est un jeu d’échecs délicieux, mais la vie commune confronte deux fonctionnements presque incompatibles — le Gémeaux vit en surface et en mouvement, le Scorpion en profondeur et en fusion. Chacun réclame à l’autre exactement ce qu’il ne sait pas donner. La confiance, vitale pour le Scorpion et optionnelle pour le Gémeaux, devient le champ de bataille : sa jalousie répond à la sociabilité papillonnante de l’autre, vécue comme un interrogatoire. Ce couple ne tient que par contrat clair et transparence volontaire. Une consultation de voyance amoureuse aide le duo Gémeaux-Scorpion à savoir s’il peut vraiment durer.',
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
    answerCapsule:
      'La compatibilité amoureuse entre le Lion et le Sagittaire est l’une des plus solaires du zodiaque, notée 5 sur 5. Ces deux signes de Feu en trigone partagent la générosité, l’optimisme et le goût du grand spectacle de la vie. Le Lion apporte le panache, la constance et l’art de célébrer ; le Sagittaire, l’aventure, la philosophie et un enthousiasme que rien ne décourage. Leur vie commune ressemble à un voyage festif — projets, fêtes, départs impromptus — porté par une admiration mutuelle sincère, et le Sagittaire est l’un des rares signes dont la franchise ne blesse pas l’orgueil du Lion. Les tensions naissent de la liberté : le Sagittaire la revendique, le Lion, plus possessif qu’il ne l’admet, la vit comme un manque d’égards, pendant que leurs dépenses fastueuses fragilisent le budget. Une consultation de voyance amoureuse aide le couple Lion-Sagittaire à préserver sa flamme sans étouffer le besoin d’espace de l’archer.',
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
    answerCapsule:
      'La compatibilité amoureuse entre le Lion et la Balance est l’une des plus esthétiques du zodiaque, notée 4 sur 5. Le sextile Feu-Air fait circuler une énergie de séduction permanente : le Lion rayonne, la Balance sublime. Elle est l’écrin dont ce roi rêvait — élégante, sociable, flatteuse avec sincérité ; il est la force tranquille qui tranche enfin les hésitations de ce signe d’Air. Ensemble, ils forment un couple social par excellence, reçu partout et admiré, mais derrière la vitrine se cache une vraie tendresse : la Balance aime l’ego du Lion sans servilité, le Lion protège sans dominer. Le danger tient au paraître — deux dépensiers soucieux d’image — et à la peur du conflit de la Balance, qui laisse le Lion tout décider puis accumule une rancune polie. Le couple s’équilibre quand la Balance exprime ses désaccords à chaud et que le Lion la consulte avant de trancher. Une consultation de voyance amoureuse éclaire le lien Lion-Balance.',
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
    answerCapsule:
      'La compatibilité amoureuse entre le Taureau et la Vierge est l’une des plus harmonieuses du zodiaque, notée 5 sur 5. Ces deux signes de Terre en trigone se reconnaissent au premier regard : même rapport concret au monde, même méfiance envers les grandes déclarations, même amour des choses bien faites. Le Taureau apaise l’anxiété perfectionniste de la Vierge par sa stabilité placide ; la Vierge offre au Taureau une attention fine et des soins quotidiens qui sont sa vraie langue amoureuse. L’amour se prouve ici en gestes — un repas préparé, un problème réglé, une présence fiable —, et la confiance s’installe vite et dure. Le principal défi est la critique : la Vierge améliore tout, y compris son Taureau, qui vit ces remarques comme une remise en cause de ce qu’il est, tandis que la routine guette deux amoureux de leurs habitudes. Une consultation de voyance amoureuse aide le couple Taureau-Vierge à préserver la surprise.',
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
    answerCapsule:
      'La compatibilité amoureuse entre la Vierge et le Capricorne est l’une des plus fiables du zodiaque, notée 5 sur 5. Ces deux signes de Terre en trigone sont deux exigeants qui se reconnaissent enfin : la Vierge analyse le détail, le Capricorne planifie le long terme. Leur amour naît souvent de l’estime — admiration pour le sérieux, la compétence et l’éthique de l’autre — avant de devenir une tendresse profonde. Ni drames ni jeux : ce couple avance, construit et se prouve son attachement par une loyauté sans faille et des projets menés à bien, avec un humour pince-sans-rire pour jardin secret. Le piège est le travail, qui dévore tout : deux bourreaux de labeur peuvent se croiser des semaines sans vraie rencontre, et leur pudeur commune peut atrophier l’expression des sentiments jusqu’au doute silencieux. Une consultation de voyance amoureuse aide le couple Vierge-Capricorne à traiter sa relation comme son plus beau projet.',
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
    answerCapsule:
      'La compatibilité amoureuse entre le Taureau et les Poissons est l’une des plus tendres du zodiaque, notée 4 sur 5. Le sextile Terre-Eau marie deux douceurs : celle, charnelle et stable, du Taureau ; celle, rêveuse et infinie, des Poissons. Ces derniers trouvent enfin un rivage — quelqu’un qui les ancre sans les brusquer — tandis que le Taureau découvre une dimension magique que son réalisme ignorait. Leur amour a une qualité rare : il ne s’use pas en conflits, car les Poissons contournent ce que le Taureau n’impose pas, et la sensualité unit le toucher terrien à l’imaginaire océanique. Le rapport au réel reste le point sensible : factures, horaires et engagements flous des Poissons exaspèrent le Taureau qui aime le concret, tandis que sa possessivité angoisse en retour un signe insaisissable par nature, non par infidélité mais par besoin de flou vital. Une consultation de voyance amoureuse aide le couple Taureau-Poissons à conjuguer ancrage et rêve sans que l’un n’étouffe l’autre.',
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
    answerCapsule:
      'La compatibilité amoureuse entre le Bélier et le Cancer est celle de deux contraires touchants, notée 3 sur 5. Ce carré cardinal oppose deux forces d’initiative qui tirent en sens inverse : le Bélier fonce vers le monde, le Cancer construit un refuge contre lui. L’attirance initiale est réelle — le guerrier est ému par cette tendresse qui l’attend, le sensible fasciné par ce courage qui le défend. Mais le quotidien confronte l’impatience du Feu à la susceptibilité de l’Eau : les brusqueries du Bélier meurtrissent la carapace du Cancer, dont les marées émotionnelles déroutent le conquérant. Leur complémentarité archétypale — la force et la tendresse — ne tient que si le Bélier découvre que la douceur n’est pas une perte de temps et si le Cancer dit ses blessures en mots simples plutôt qu’en bouderies illisibles. Une consultation de voyance amoureuse éclaire ce couple Bélier-Cancer partagé entre le dehors et le dedans.',
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
    answerCapsule:
      'La compatibilité amoureuse entre le Bélier et le Capricorne est un choc respectueux, notée 3 sur 5. Ce carré cardinal oppose le feu de l’élan à la terre de l’endurance : deux conquérants, mais le Bélier veut la victoire aujourd’hui quand le Capricorne bâtit celle de dans dix ans. L’attirance naît de l’admiration — le Capricorne est impressionné par cette audace qui ose tout, le Bélier par cette puissance froide qui finit toujours par gagner. En couple, ils s’affûtent mutuellement ou s’épuisent : l’impatience contre la prudence, la spontanéité contre le plan quinquennal. Leur ambition partagée force le respect et leur loyauté est carrée, mais le rythme reste le champ de bataille, aggravé par une expression affective impulsive d’un côté, différée de l’autre. Le couple gagne à diviser le travail — au Bélier les lancements, au Capricorne les consolidations. Une consultation de voyance amoureuse éclaire ce duo Bélier-Capricorne d’ambition et de tempo.',
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
    answerCapsule:
      'La compatibilité amoureuse entre le Taureau et le Lion réunit deux royautés inflexibles, notée 3 sur 5. Ce carré entre signes fixes promet un amour pour toujours quand ils s’accordent, et un mur contre mur quand ils s’opposent. Le Lion veut briller, le Taureau veut posséder : deux formes de pouvoir qui se complètent — il règne en façade, l’autre gouverne l’intendance — ou s’affrontent sur chaque décision. Ils partagent le goût du beau, du confort et une fidélité massive, et la sensualité reste leur langage de réconciliation, deux épicuriens qui changent une dispute en festin. Le défi est l’entêtement au carré : aucun ne cède le premier et les conflits gèlent en sièges, pendant que le Lion dépense pour paraître et le Taureau épargne pour sécuriser. Un rôle d’arbitre tournant les sauve. Une consultation de voyance amoureuse aide le couple Taureau-Lion à faire de sa fixité un engagement plutôt qu’une prison.',
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
    answerCapsule:
      'La compatibilité amoureuse entre le Gémeaux et le Cancer unit l’esprit et le cœur, notée 3 sur 5. Voisins sur le zodiaque, ces deux signes habitent pourtant deux mondes : les mots pour l’Air, les émotions pour l’Eau. Le Gémeaux séduit le Cancer par une légèreté qui dédramatise tout ; le Cancer touche le Gémeaux par une profondeur affective qu’aucune conversation ne remplace. Leur relation est une traduction permanente — convertir les sentiments en phrases pour l’un, les phrases en sentiments pour l’autre — et quand elle fonctionne, le couple est complet : intelligence et tendresse, humour et refuge. Le défi tient au besoin de présence du Cancer contre le besoin de mouvement du Gémeaux : l’un se sent délaissé, l’autre étouffé, et l’humeur lunaire déroute le mental qui la fuit dans la blague. Une consultation de voyance amoureuse aide le couple Gémeaux-Cancer à réussir cette traduction entre la tête et le cœur.',
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
    answerCapsule:
      'La compatibilité amoureuse entre le Cancer et le Lion marie les deux luminaires du zodiaque, notée 4 sur 5 : la Lune et le Soleil en couple. Le Cancer offre au Lion ce que la cour du roi ne donne jamais — une tendresse vraie, sans calcul, qui aime la personne derrière la couronne ; le Lion offre au Cancer la protection éclatante et la loyauté d’un roc solaire. Leur complémentarité est archétypale : il rayonne dehors, l’autre veille dedans, et la famille devient souvent leur royaume commun. Le risque est le déséquilibre lumière-ombre : le Lion prend toute la scène et le Cancer s’efface, jaloux d’une intimité que le besoin de public écorne, tandis que ses marées d’humeur agacent un signe allergique à la plainte. Le Lion doit partager la lumière, le Cancer formuler ses besoins avant la marée haute. Une consultation de voyance amoureuse éclaire ce couple Cancer-Lion de tendresse et de panache.',
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
    answerCapsule:
      'La compatibilité amoureuse entre la Vierge et le Scorpion réunit deux esprits perçants, notée 4 sur 5. Le sextile Terre-Eau unit l’analyste et l’enquêteur : elle décortique, il sonde, et tous deux se reconnaissent avec soulagement — enfin quelqu’un qui ne vit pas à la surface. Leur amour se construit dans les conversations profondes et une confiance progressive, deux méfiants qui se livrent par couches. Le Scorpion apporte l’intensité qui déride la prudence de la Vierge, la Vierge la stabilité qui apaise les tempêtes du Scorpion, et elle est l’un des rares signes dont il accepte les critiques, car elles sont justes et sans malveillance. Le piège : deux anxieux qui ruminent, la critique de l’une nourrissant les scénarios de l’autre en spirales d’acidité mutuelle. Un rituel hebdomadaire — une inquiétude, une gratitude — vide les contentieux avant qu’ils ne fermentent en procès imaginaires. Une consultation de voyance amoureuse aide le couple Vierge-Scorpion à changer sa lucidité commune en complicité plutôt qu’en procès.',
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
  {
    slug: 'belier-belier',
    signA: 'Bélier',
    signB: 'Bélier',
    score: 3,
    titre: 'Deux flammes, un seul briquet',
    answerCapsule:
      'La compatibilité amoureuse entre deux Bélier est un feu d’artifice permanent, notée 3 sur 5. Même énergie, même impatience, même besoin de gagner : la reconnaissance est instantanée et l’attirance électrique, la conquête fulgurante, la passion intense, l’ennui impossible. Mais le zodiaque n’a pas prévu deux chefs pour un seul feu : chacun veut décider, initier, avoir raison le premier, et le miroir renvoie à chacun ses qualités éclatantes comme ses défauts en double. Leur franchise totale, sans jeux ni manipulation, et leur goût partagé de l’action font une équipe redoutable, tant qu’ils courent dans la même direction. Le défi est la compétition d’ego et l’impulsivité doublée, qui mènent aux ruptures sur un coup de sang. La règle d’or des couples de Feu — aucune décision majeure dans la première heure d’une dispute — les sauve. Une consultation de voyance amoureuse aide le couple Bélier-Bélier à transformer sa rivalité en alliance.',
    dynamique:
      'Deux Béliers ensemble, c’est un feu d’artifice permanent. Même énergie, même impatience, même besoin de gagner : ils se reconnaissent instantanément et l’attirance est électrique. La conquête est fulgurante, la passion physique intense, l’ennui strictement impossible. Mais le zodiaque n’a pas prévu deux chefs pour un seul feu : chacun veut décider, initier, avoir raison le premier. Leur histoire est une course où personne ne veut ralentir — exaltante tant qu’ils courent dans la même direction, explosive dès qu’ils divergent. Le miroir leur renvoie leurs qualités éclatantes… et leurs défauts en double.',
    forces:
      'Une compréhension immédiate des besoins de l’autre — même carburant, même rythme —, une passion qui ne retombe pas, une franchise totale sans jeux ni manipulation, et un goût partagé de l’action qui fait de leur couple une équipe redoutable face au monde extérieur.',
    defis:
      'La compétition permanente : deux ego qui refusent de céder transforment les broutilles en batailles rangées. Les colères simultanées ne laissent personne pour apaiser, et l’impulsivité doublée mène aux décisions catastrophiques prises à chaud, des ruptures sur un coup de sang aux réconciliations aussi précipitées.',
    conseil:
      'Attribuez-vous des territoires exclusifs de décision pour cesser de rivaliser sur tout. Et instaurez la règle d’or des couples de Feu : aucune décision importante, aucune rupture prononcée dans la première heure d’une dispute. Votre colère retombe aussi vite qu’elle monte.',
    faq: [
      {
        q: 'Deux Béliers peuvent-ils vivre une relation durable ?',
        a: 'Oui, à condition de canaliser leur rivalité naturelle vers l’extérieur plutôt que l’un contre l’autre. Les couples de deux Béliers qui durent partagent des projets ambitieux, du sport, des défis communs qui absorbent leur besoin de gagner. Sans cet exutoire, ils transforment leur salon en arène. La passion, elle, ne pose jamais problème : c’est leur meilleur terrain d’entente.',
      },
      {
        q: 'Pourquoi deux Béliers se disputent-ils autant ?',
        a: 'Parce qu’aucun des deux ne possède le frein qui manque à l’autre. Dans un couple équilibré, un partenaire tempère les emballements ; ici, deux impulsifs s’enflamment ensemble et personne ne calme le jeu. Chaque désaccord peut monter en quelques secondes. La bonne nouvelle : ils oublient aussi vite qu’ils explosent, et rares sont les rancunes durables entre deux Béliers.',
      },
      {
        q: 'Qui commande dans un couple de deux Béliers ?',
        a: 'Personne en permanence, et c’est le nœud du problème. Deux signes nés pour mener se disputent chaque décision, du choix du restaurant au projet de vie. Les couples qui fonctionnent ont renoncé au commandement unique au profit d’un partage clair : à l’un tel domaine, à l’autre tel autre. Reconnaître le leadership de l’autre sur son terrain est leur plus grand acte d’amour.',
      },
    ],
  },
  {
    slug: 'taureau-taureau',
    signA: 'Taureau',
    signB: 'Taureau',
    score: 4,
    titre: 'Le cocon de velours, à double tour',
    answerCapsule:
      'La compatibilité amoureuse entre deux Taureau construit le couple le plus confortable du zodiaque, notée 4 sur 5. Même amour du concret, de la bonne chère, du corps et de la sécurité : ils se comprennent sans un mot et bâtissent lentement un nid douillet où rien ne manque. La sensualité partagée est profonde et gourmande, la fidélité va de soi, la stabilité est totale, et cet amour se prouve en gestes plutôt qu’en déclarations. Le seul ennemi de ce paradis terrien est l’immobilisme : deux signes fixes qui détestent le changement peuvent s’endormir dans un confort qui vire à la torpeur, et quand ils se braquent tous deux, aucun ne bouge et le conflit se fossilise des semaines. Programmer délibérément l’imprévu — un voyage, un projet neuf chaque saison — et désigner un premier pas à l’avance les préserve de la torpeur. Une consultation de voyance amoureuse aide le couple Taureau-Taureau à garder sa stabilité choisie plutôt que subie et à raviver le désir.',
    dynamique:
      'Deux Taureaux construisent le couple le plus confortable du zodiaque. Même amour du concret, de la bonne chère, du corps et de la sécurité : ils se comprennent sans un mot et bâtissent lentement un nid douillet où rien ne manque. La sensualité partagée est profonde et gourmande, la fidélité va de soi, la stabilité est totale. C’est un amour qui se prouve en gestes — un repas mijoté, une maison qui embellit, une épargne qui grossit — plutôt qu’en déclarations. Le seul ennemi de ce paradis terrien s’appelle l’immobilisme : deux signes qui détestent le changement peuvent s’endormir dans un confort qui finit par ressembler à de la torpeur.',
    forces:
      'Une sécurité affective et matérielle exceptionnelle, une sensualité complète et durable, des valeurs parfaitement alignées — foyer, patrimoine, fidélité — et une absence quasi totale de jeux de pouvoir. Ce couple traverse les crises extérieures sans jamais se lâcher la main.',
    defis:
      'L’entêtement croisé : quand deux Taureaux se braquent, aucun ne bouge et le conflit se fossilise pendant des semaines. Et surtout la routine : deux signes qui aiment leurs habitudes peuvent laisser mourir le désir sous le poids du confort, sans même s’en apercevoir avant qu’il soit tard.',
    conseil:
      'Programmez délibérément l’imprévu : un voyage inhabituel, un restaurant hors zone de confort, un projet neuf chaque saison. Votre stabilité est un trésor tant qu’elle reste choisie et non subie. Et quand vous vous braquez tous les deux, désignez un « premier pas » à l’avance.',
    faq: [
      {
        q: 'Deux Taureaux forment-ils un couple stable ?',
        a: 'Parmi les plus stables du zodiaque. Deux signes de Terre partageant les mêmes besoins de sécurité, de fidélité et de confort construisent une relation d’une solidité rare, à l’abri des tempêtes qui emportent d’autres couples. Leur défi n’est jamais la rupture mais l’endormissement : le confort peut anesthésier la passion s’ils ne l’entretiennent pas consciemment.',
      },
      {
        q: 'La routine menace-t-elle un couple de deux Taureaux ?',
        a: 'C’est leur unique vrai danger. Aucun des deux ne provoque spontanément le changement : ils s’installent avec délice dans des habitudes qui rassurent mais peuvent éteindre le désir. Le couple reste alors solide comme un roc… et tiède comme une pièce trop chauffée. La parade tient à leur nature sensorielle : cuisine, week-ends, plaisirs du corps réinventés régulièrement les tiennent vivants.',
      },
      {
        q: 'Comment deux Taureaux gèrent-ils leurs disputes ?',
        a: 'Rarement, mais durablement. Deux entêtements légendaires face à face, cela donne des sièges silencieux où chacun attend que l’autre capitule — ce qui n’arrive jamais spontanément. Les couples rodés conviennent à l’avance d’un signal de réconciliation, souvent sensoriel : un plat préféré, un geste tendre, une sortie. Ce rituel permet de déposer les armes sans que personne perde la face.',
      },
    ],
  },
  {
    slug: 'gemeaux-gemeaux',
    signA: 'Gémeaux',
    signB: 'Gémeaux',
    score: 3,
    titre: 'Quatre personnes dans un couple',
    answerCapsule:
      'La compatibilité amoureuse entre deux Gémeaux est un feu d’artifice intellectuel — et un peu une foule, notée 3 sur 5. Le signe du double réuni à lui-même donne une conversation infinie, un humour permanent, une curiosité contagieuse : ils se stimulent, se font rire, changent de sujet et de projet à la vitesse de l’éclair et ne connaissent jamais l’ennui. Chacun comprend le besoin d’air de l’autre sans le vivre comme un rejet, liberté rare et précieuse. Mais deux êtres versatiles peinent à ancrer quoi que ce soit : les décisions flottent, les émotions restent en surface, et le couple risque de n’être qu’une brillante amitié qui a oublié de s’incarner. Nommer un pilote du concret et forcer le contact physique quotidien répare ce manque. Une consultation de voyance amoureuse aide le couple Gémeaux-Gémeaux à donner un corps à son lien mental exceptionnel pour qu’il devienne un véritable amour.',
    dynamique:
      'Deux Gémeaux, c’est un feu d’artifice intellectuel — et un peu une foule. Le signe du double réuni au signe du double : la conversation est infinie, l’humour permanent, la curiosité contagieuse. Ils se stimulent, se font rire, changent de sujet et de projet à la vitesse de l’éclair, et ne connaissent jamais l’ennui. Chacun comprend le besoin d’air et de mouvement de l’autre sans le vivre comme un rejet — une liberté rare et précieuse. Mais deux êtres versatiles peinent à ancrer quoi que ce soit : les décisions flottent, les émotions profondes restent en surface, et le couple peut ressembler à une brillante amitié qui aurait oublié de devenir un amour incarné.',
    forces:
      'Une complicité intellectuelle immédiate, un rire partagé qui traverse tout, une liberté mutuelle sans jalousie, et une adaptabilité qui leur permet de rebondir sur n’importe quelle situation. Le couple le moins ennuyeux du zodiaque, socialement rayonnant.',
    defis:
      'L’ancrage : personne pour poser le couple, gérer le concret, trancher les grands choix qui restent en suspens des années. Et la profondeur émotionnelle — deux mentaux qui analysent les sentiments au lieu de les vivre risquent une relation tout en surface, où la tendresse physique et les vrais aveux se raréfient.',
    conseil:
      'Nommez un pilote du concret à tour de rôle et fixez des dates limites aux décisions qui traînent. Surtout, forcez-vous à l’incarnation : du contact physique quotidien, des mots d’amour même maladroits. Votre lien mental est exceptionnel — offrez-lui un corps pour qu’il devienne un couple.',
    faq: [
      {
        q: 'Deux Gémeaux s’entendent-ils bien en couple ?',
        a: 'Intellectuellement, à merveille : même vivacité, même humour, même soif de nouveauté. Ils forment le couple le plus stimulant et le plus complice du zodiaque au quotidien. Le hic est ailleurs : deux signes également fuyants peinent à ancrer la relation dans le concret et l’émotionnel. L’entente est brillante ; c’est la profondeur et la constance qui demandent un vrai effort conscient.',
      },
      {
        q: 'Ce couple manque-t-il de stabilité ?',
        a: 'C’est son point faible structurel. Aucun des deux n’apporte l’ancrage qu’un Gémeaux trouve normalement chez un partenaire de Terre ou d’Eau. Résultat : les décisions importantes — engagement, logement, enfants — peuvent flotter indéfiniment, chacun attendant que l’autre pose le cadre. Les couples qui durent s’imposent des rituels et des échéances, contre leur nature, pour compenser cette légèreté partagée.',
      },
      {
        q: 'Comment deux Gémeaux entretiennent-ils la passion ?',
        a: 'En résistant à leur pente naturelle vers l’amitié cérébrale. Deux Gémeaux peuvent glisser vers une relation de complices brillants où le corps et les sentiments passent au second plan. La parade est volontaire : cultiver le contact physique, s’autoriser la vulnérabilité, dire les choses tendres qui font peur. Leur imagination, bien orientée, en fait aussi les partenaires les plus ludiques du zodiaque.',
      },
    ],
  },
  {
    slug: 'cancer-cancer',
    signA: 'Cancer',
    signB: 'Cancer',
    score: 4,
    titre: 'Deux cœurs, une seule carapace',
    answerCapsule:
      'La compatibilité amoureuse entre deux Cancer crée le foyer le plus tendre du zodiaque, notée 4 sur 5. Même sensibilité à fleur de peau, même besoin de sécurité affective, même culte de la maison et de la famille : ils se devinent, se consolent et s’enveloppent d’une douceur que peu de couples connaissent, et leur nid devient un sanctuaire. L’intimité émotionnelle est immédiate — enfin quelqu’un qui ne juge ni les larmes ni les besoins. Mais deux hypersensibles, ce sont aussi deux susceptibilités qui se blessent en silence, deux mémoires qui archivent les vexations et deux humeurs lunaires qui montent ensemble sans personne pour tenir la barre — deux bateaux dans la même tempête. Un rituel de parole vraie, régulier et non négociable, et des ancrages extérieurs empêchent le couple de se noyer l’un dans l’autre. Une consultation de voyance amoureuse aide le couple Cancer-Cancer à faire de sa sensibilité commune une force verbalisée plutôt qu’une marée subie.',
    dynamique:
      'Deux Cancers créent le foyer le plus tendre du zodiaque. Même sensibilité à fleur de peau, même besoin de sécurité affective, même culte de la maison et de la famille : ils se devinent, se consolent, s’enveloppent d’une douceur que peu de couples connaissent. L’intimité émotionnelle est immédiate et profonde — enfin quelqu’un qui ne juge pas les larmes ni les besoins. Leur nid devient un sanctuaire. Mais deux hypersensibles, c’est aussi deux susceptibilités qui se blessent en silence, deux mémoires qui archivent les vexations, et deux humeurs lunaires qui peuvent monter ensemble sans personne pour tenir la barre.',
    forces:
      'Une empathie mutuelle totale, une tendresse quotidienne rare, une loyauté indéfectible et un même rêve de foyer chaleureux. Chacun se sent enfin compris sans avoir à s’expliquer — le repos affectif après des amours qui ne les comprenaient pas.',
    defis:
      'La double susceptibilité : les blessures non dites s’accumulent, car aucun n’ose froisser l’autre, et ressortent en marées disproportionnées. Quand les deux humeurs lunaires basculent en même temps, le couple se retrouve sans phare — deux bateaux dans la même tempête, personne au gouvernail.',
    conseil:
      'Instaurez un rituel de parole vraie, régulier et non négociable, où chacun dit l’inconfort avant qu’il fermente. Votre sensibilité commune est une force à condition de la verbaliser au lieu de la deviner — et gardez des ancrages extérieurs pour ne pas vous noyer l’un dans l’autre.',
    faq: [
      {
        q: 'Deux Cancers sont-ils faits l’un pour l’autre ?',
        a: 'Sur le plan émotionnel, profondément : ils partagent le même besoin de tendresse, de sécurité et de foyer, et se comprennent à demi-mot. C’est l’un des couples les plus doux du zodiaque. Le revers de cette sensibilité commune est la vulnérabilité : sans hygiène émotionnelle, deux Cancers accumulent les non-dits et les rancunes silencieuses qui finissent par peser lourd.',
      },
      {
        q: 'Que se passe-t-il quand deux Cancers sont de mauvaise humeur en même temps ?',
        a: 'C’est leur situation la plus délicate. Le Cancer traverse des marées d’humeur ; quand celles des deux partenaires montent ensemble, il n’y a plus personne pour rassurer et stabiliser. Le couple peut alors sombrer dans une spirale de bouderies croisées. Les couples avertis apprennent à repérer ces phases et à s’accorder un espace de retrait bienveillant plutôt que d’exiger l’un de l’autre un réconfort momentanément indisponible.',
      },
      {
        q: 'Ce couple est-il fait pour fonder une famille ?',
        a: 'Idéalement : le foyer et la famille sont au cœur de l’identité cancérienne, et deux Cancers construisent des maisons chaleureuses où les enfants se sentent enveloppés. Le point de vigilance est la fusion : ce couple peut se replier sur son nid au point de couper les ponts avec l’extérieur. Cultiver des liens sociaux et des espaces personnels protège la vitalité de la relation autant que celle de la famille.',
      },
    ],
  },
  {
    slug: 'lion-lion',
    signA: 'Lion',
    signB: 'Lion',
    score: 3,
    titre: 'Deux soleils, un seul ciel',
    answerCapsule:
      'La compatibilité amoureuse entre deux Lion forme un couple royal — et un ciel où deux soleils se disputent la lumière, notée 3 sur 5. L’attirance est immédiate et flamboyante : chacun reconnaît chez l’autre le panache, la générosité et la présence qu’il chérit en lui-même, et ensemble ils composent un couple spectaculaire, socialement magnétique. La générosité est double, la loyauté farouche, la passion théâtrale. Mais deux ego qui ont besoin d’être le centre du monde ne peuvent régner sur le même trône : la question « qui brille le plus ? » plane sur chaque dîner, chacun jaloux de la lumière que l’autre capte, l’orgueil croisé rend les excuses impossibles et les dépenses fastueuses doublées menacent le train de vie. Se faire mutuellement roi et reine plutôt que rivaux, en célébrant publiquement les succès de l’autre au lieu de les comparer, est leur ciment. Une consultation de voyance amoureuse aide le couple Lion-Lion à convertir la rivalité de rayonnement en admiration partagée.',
    dynamique:
      'Deux Lions, c’est un couple royal — et un ciel où deux soleils se disputent la lumière. L’attirance est immédiate et flamboyante : chacun reconnaît chez l’autre le panache, la générosité, la présence qu’il chérit en lui-même. Ensemble, ils forment un couple spectaculaire, socialement magnétique, adoré et envié. La générosité est double, la loyauté farouche, la passion théâtrale. Mais deux ego qui ont besoin d’être le centre du monde ne peuvent pas régner sur le même trône : la question « qui brille le plus ? » plane sur chaque dîner, chaque fête, chaque décision. L’admiration mutuelle est leur ciment ; la rivalité de rayonnement, leur poison.',
    forces:
      'Une générosité mutuelle sans calcul, une loyauté totale, une vie sociale éclatante et une passion qui ne faiblit pas. Deux Lions qui s’admirent sincèrement forment le couple le plus glamour du zodiaque, une véritable dynastie à deux.',
    defis:
      'La compétition d’ego : deux besoins d’adoration exclusive qui s’entrechoquent, chacun jaloux de la lumière que l’autre capte. L’orgueil croisé rend les excuses impossibles et les disputes théâtrales. Sans oublier les dépenses fastueuses doublées, qui peuvent mettre le train de vie en péril.',
    conseil:
      'Faites-vous mutuellement roi et reine plutôt que rivaux : célébrez publiquement les succès de l’autre au lieu de les comparer aux vôtres. L’admiration donnée vous revient toujours. Et confiez votre budget à un garde-fou automatique, car aucun de vous ne freinera l’autre.',
    faq: [
      {
        q: 'Deux Lions peuvent-ils former un couple heureux ?',
        a: 'Oui, quand ils choisissent l’admiration mutuelle plutôt que la rivalité. Deux Lions qui se mettent en valeur l’un l’autre forment un couple rayonnant, généreux et d’une loyauté à toute épreuve. Le danger permanent est la guerre de rayonnement : si chacun exige d’être le seul soleil, le ciel devient invivable. La maturité de chacun fait toute la différence.',
      },
      {
        q: 'Comment gérer deux ego dans un couple de Lions ?',
        a: 'En partageant la scène au lieu de se la disputer. Chaque Lion a un besoin vital de reconnaissance ; le secret est que chacun devienne le premier admirateur de l’autre. Un Lion qui valorise publiquement son partenaire ne perd rien de sa superbe — il gagne un allié loyal. Les couples qui échouent sont ceux où chacun garde toute la lumière pour soi, transformant l’amour en concours permanent.',
      },
      {
        q: 'L’argent est-il un problème pour deux Lions ?',
        a: 'Souvent, car aucun ne tempère l’autre. Le Lion dépense pour briller, offrir et vivre grand ; deux Lions ensemble additionnent leurs générosités et leurs fastes sans frein naturel. Les couples stables mettent en place un garde-fou externe — épargne prélevée automatiquement, budget plaisir cadré — qui protège leur train de vie de leur commune magnificence sans brider leur besoin de panache.',
      },
    ],
  },
  {
    slug: 'vierge-vierge',
    signA: 'Vierge',
    signB: 'Vierge',
    score: 4,
    titre: 'La perfection à quatre mains',
    answerCapsule:
      'La compatibilité amoureuse entre deux Vierge construit le couple le plus fonctionnel du zodiaque, notée 4 sur 5. Même exigence, même sens du détail, même besoin d’un quotidien bien ordonné : ils se reconnaissent avec soulagement — enfin quelqu’un qui comprend qu’un tiroir rangé est une forme d’amour. L’estime précède la tendresse, puis les deux se mêlent en une complicité discrète, leur maison tourne comme une horloge et leurs projets aboutissent. Mais deux perfectionnistes, ce sont aussi deux critiques et deux anxieux : quand chacun veut améliorer l’autre, l’amour se dissout dans une liste de remarques, chacun amplifiant les inquiétudes de l’autre, et l’angoisse de l’un nourrit celle de l’autre en boucle. Remplacer une critique sur deux par une gratitude explicite et créer une zone où l’imperfection est autorisée les sauve. Une consultation de voyance amoureuse aide le couple Vierge-Vierge à respirer hors de la quête permanente du mieux sans perdre son exigence complice.',
    dynamique:
      'Deux Vierges construisent le couple le plus fonctionnel du zodiaque. Même exigence, même sens du détail, même besoin d’un quotidien bien ordonné : ils se reconnaissent avec soulagement — enfin quelqu’un qui comprend qu’un tiroir rangé est une forme d’amour. L’estime précède la tendresse, puis les deux se mêlent en une complicité discrète et profonde. Leur maison tourne comme une horloge, leur santé est choyée, leurs projets aboutissent. Mais deux perfectionnistes, c’est aussi deux critiques et deux anxieux : quand chacun veut améliorer l’autre, l’amour peut se dissoudre dans une liste de remarques, et l’angoisse de l’un nourrir celle de l’autre en boucle.',
    forces:
      'Une entente parfaite sur le quotidien, un respect mutuel du sérieux et de l’effort, une santé et une organisation soignées à deux, et un humour pince-sans-rire complice. Deux Vierges se sentent enfin comprises dans leur exigence au lieu d’être jugées « trop ».',
    defis:
      'La critique croisée : deux signes qui améliorent tout, y compris leur partenaire, peuvent transformer l’amour en audit permanent. Et l’anxiété doublée — deux mentaux qui ruminent — risque de fabriquer des soucis là où il n’y en a pas, chacun amplifiant les inquiétudes de l’autre.',
    conseil:
      'Remplacez une critique sur deux par une gratitude explicite : vous vous corrigez par amour, jamais par reproche. Et créez une zone sans exigence — un espace, un moment — où l’imperfection est autorisée. Votre couple a besoin de respirer hors de la quête permanente du mieux.',
    faq: [
      {
        q: 'Deux Vierges sont-elles compatibles en amour ?',
        a: 'Très bien, sur la base d’une estime mutuelle et de valeurs identiques : sérieux, fiabilité, soin du détail. Chacune se sent enfin comprise dans une exigence que d’autres partenaires jugeaient excessive. Le couple est fonctionnel et loyal. Son seul vrai risque : que la critique constructive, doublée, se transforme en climat de reproche permanent qui étouffe la tendresse.',
      },
      {
        q: 'La critique est-elle un problème entre deux Vierges ?',
        a: 'C’est leur talon d’Achille. Chaque Vierge voit ce qui pourrait être mieux et le dit pour aider ; mais recevoir cet éclairage en continu, de part et d’autre, use l’estime de soi et refroidit l’amour. Les couples qui durent instaurent une règle simple : valoriser explicitement ce qui va avant de suggérer ce qui pourrait aller mieux, et s’accorder des zones où rien n’est à corriger.',
      },
      {
        q: 'Ce couple sait-il lâcher prise ?',
        a: 'C’est son grand apprentissage. Deux Vierges peuvent transformer leur vie commune en quête d’optimisation permanente — maison, santé, budget, projets — jusqu’à oublier de simplement profiter. L’anxiété de l’une nourrit celle de l’autre. Les couples épanouis se ménagent des rituels de relâchement délibéré : un désordre toléré, une journée sans planning, un plaisir sans utilité. C’est là, souvent, que renaît leur tendresse.',
      },
    ],
  },
  {
    slug: 'balance-balance',
    signA: 'Balance',
    signB: 'Balance',
    score: 4,
    titre: 'L’harmonie, jusqu’à l’indécision',
    answerCapsule:
      'La compatibilité amoureuse entre deux Balance forme le couple le plus élégant et le plus courtois du zodiaque, notée 4 sur 5. Même quête d’harmonie, même horreur du conflit, même amour du beau : leur relation est douce, esthétique, pleine d’égards, et Vénus y règne en double, sans qu’on hausse jamais le ton. Mais deux signes qui fuient le conflit ne règlent jamais rien : les désaccords glissent sous le tapis avec élégance jusqu’à former une bosse, et deux indécis face au moindre choix — un restaurant, un canapé, un projet de vie — restent paralysés, chacun renvoyant poliment la décision à l’autre pour préserver l’harmonie. Instituer des conversations vraies, où l’on aborde ce qui fâche avec la même élégance que le reste, et désigner choix par choix qui tranche donne au couple le tranchant qui lui manque. Une consultation de voyance amoureuse aide le couple Balance-Balance à bâtir son harmonie sur des fondations et non seulement sur des ornements.',
    dynamique:
      'Deux Balances forment le couple le plus élégant et le plus courtois du zodiaque. Même quête d’harmonie, même horreur du conflit, même amour du beau et du raffinement : leur relation est douce, esthétique, pleine d’égards mutuels. Ils s’écoutent, se ménagent, transforment leur vie commune en un art de vivre gracieux où l’on ne hausse jamais le ton. Vénus règne en double. Mais deux signes qui fuient le conflit ne règlent jamais rien : les désaccords glissent sous le tapis avec élégance jusqu’à former une bosse. Et deux indécis face au moindre choix — un restaurant, un canapé, un projet de vie — peuvent rester paralysés, chacun renvoyant poliment la décision à l’autre.',
    forces:
      'Une courtoisie et une douceur constantes, un art de vivre partagé — beauté, culture, sorties —, une vie sociale harmonieuse et une capacité rare à se ménager mutuellement. Le couple où l’on ne crie jamais, où chacun se sent respecté et choyé.',
    defis:
      'L’évitement du conflit : les vrais sujets ne sont jamais posés, et les frustrations s’accumulent en silence sous des sourires. Et l’indécision doublée — deux Balances peuvent laisser flotter les grands choix des années, chacune attendant que l’autre tranche pour préserver l’harmonie.',
    conseil:
      'Instituez des conversations vraies, régulières, où l’on aborde ce qui fâche avec la même élégance que le reste — l’harmonie durable se construit sur des fondations, pas seulement des ornements. Et désignez, choix par choix, qui décide : votre couple a besoin d’un tranchant pour ne pas s’enliser dans la courtoisie.',
    faq: [
      {
        q: 'Deux Balances forment-elles un bon couple ?',
        a: 'Un couple remarquablement doux et harmonieux : même goût du beau, de la paix et des égards mutuels, quasi aucun conflit ouvert. Sa fragilité est le miroir de sa force : à force de préserver l’harmonie, deux Balances évitent les sujets difficiles et repoussent les décisions. La relation est élégante mais peut manquer de colonne vertébrale. Apprendre à trancher est leur grand chantier.',
      },
      {
        q: 'Comment deux Balances prennent-elles des décisions ?',
        a: 'Difficilement, c’est leur point faible. Chacune pèse indéfiniment le pour et le contre et, par courtoisie, renvoie volontiers le choix à l’autre — qui fait de même. Résultat : des décisions importantes qui flottent des mois. Les couples qui fonctionnent adoptent une règle claire : une date limite par choix, et l’attribution explicite du dernier mot à l’une ou l’autre selon le domaine.',
      },
      {
        q: 'L’évitement du conflit menace-t-il ce couple ?',
        a: 'C’est son danger le plus insidieux. Deux Balances peuvent maintenir une paix de surface pendant des années en taisant chacune ses frustrations, jusqu’à une rupture qui semble surgir de nulle part — mais qui couvait sous les sourires. La prévention tient à une discipline contre-nature pour elles : oser le désaccord tôt, poliment mais réellement, avant que le non-dit ne devienne une distance irréparable.',
      },
    ],
  },
  {
    slug: 'scorpion-scorpion',
    signA: 'Scorpion',
    signB: 'Scorpion',
    score: 3,
    titre: 'Les abysses, en double',
    answerCapsule:
      'La compatibilité amoureuse entre deux Scorpion se vit comme une plongée en apnée dans les abysses, notée 3 sur 5. Même intensité, même profondeur, même refus du superficiel : la reconnaissance est immédiate et magnétique — enfin quelqu’un qui n’a pas peur de tout donner et tout exiger. La passion est totale, la loyauté viscérale, l’intimité d’une richesse rare. Mais deux êtres de contrôle, de secret et de méfiance réunis, ce sont deux stratèges qui se testent, deux jaloux qui s’épient, deux mémoires qui archivent chaque blessure en vengeances silencieuses qui se répondent en écho : l’amour peut devenir une forteresse imprenable face au monde ou un huis clos sans oxygène où chacun sonde l’autre sans jamais désarmer. La transparence radicale, offerte plutôt qu’exigée, et le bannissement de la vengeance sont leur seule voie de survie. Une consultation de voyance amoureuse aide le couple Scorpion-Scorpion à changer ses luttes de pouvoir en confiance donnée.',
    dynamique:
      'Deux Scorpions vivent l’amour comme une plongée en apnée dans les abysses. Même intensité, même profondeur, même refus du superficiel : la reconnaissance est immédiate et magnétique — enfin quelqu’un qui n’a pas peur de tout donner et tout exiger. La passion est totale, la loyauté viscérale, l’intimité d’une richesse que peu de couples atteignent. Mais deux êtres de contrôle, de secret et de méfiance réunis, c’est aussi deux stratèges qui se testent, deux jaloux qui s’épient, deux mémoires qui archivent chaque blessure. Leur amour peut devenir une forteresse imprenable — ou un huis clos sans oxygène où chacun sonde l’autre sans jamais désarmer.',
    forces:
      'Une intimité émotionnelle et physique d’une profondeur exceptionnelle, une loyauté farouche, une compréhension mutuelle des zones d’ombre que personne d’autre n’accepte, et une résilience de couple à toute épreuve face au monde extérieur.',
    defis:
      'Les luttes de pouvoir : deux stratèges qui refusent de céder transforment l’amour en partie d’échecs. La jalousie doublée et le besoin de contrôle croisé peuvent asphyxier la relation, et deux rancuniers gravent chaque offense au lieu de pardonner — les vengeances silencieuses se répondent en écho.',
    conseil:
      'Choisissez la transparence radicale plutôt que les tests permanents : ce que vous cherchez en sondant l’autre, offrez-le d’abord. Et bannissez la vengeance de votre langage de couple — deux Scorpions qui se punissent mutuellement creusent un gouffre. La confiance donnée est votre seule voie de survie.',
    faq: [
      {
        q: 'Deux Scorpions peuvent-ils s’aimer sans se détruire ?',
        a: 'Oui, mais c’est l’une des combinaisons les plus exigeantes du zodiaque. Deux Scorpions partagent une profondeur et une loyauté rares, et une intimité que peu de couples connaissent. Le risque est proportionnel : jalousie, contrôle et rancune, doublés, peuvent transformer la passion en guerre souterraine. La réussite dépend entièrement de leur capacité à choisir la confiance plutôt que la méfiance.',
      },
      {
        q: 'La jalousie est-elle un problème entre deux Scorpions ?',
        a: 'C’est leur principal champ de mines. Chaque Scorpion est possessif et enclin à la méfiance ; réunis, ils peuvent s’épier, se tester et interpréter le moindre signe comme une trahison. Paradoxalement, cette intensité peut aussi les rassurer — chacun comprend le besoin d’exclusivité de l’autre. La ligne entre passion protectrice et contrôle asphyxiant doit rester consciente, sous peine d’étouffer le couple.',
      },
      {
        q: 'Comment ce couple traverse-t-il les conflits ?',
        a: 'Intensément, et dangereusement s’ils cèdent à leur pente vengeresse. Deux Scorpions blessés ripostent en silence, chacun archivant l’offense pour la ressortir au moment stratégique — une escalade sans fin. Les couples qui survivent renoncent explicitement à la vengeance et pratiquent un pardon réel, dit à voix haute. Leur mémoire émotionnelle, si elle sert l’amour plutôt que les comptes, devient au contraire une force de fidélité inébranlable.',
      },
    ],
  },
  {
    slug: 'sagittaire-sagittaire',
    signA: 'Sagittaire',
    signB: 'Sagittaire',
    score: 4,
    titre: 'Deux flèches vers le même horizon',
    answerCapsule:
      'La compatibilité amoureuse entre deux Sagittaire forme le couple le plus libre et le plus aventureux du zodiaque, notée 4 sur 5. Même soif de découverte, même optimisme, même horreur de l’enfermement : ils se reconnaissent comme deux explorateurs décidés à faire route ensemble sans jamais s’attacher à un piquet. La relation tient de l’amitié passionnée doublée d’une agence de voyages — projets, départs, philosophie, éclats de rire — et aucun ne fait peser sur l’autre le poids de la possession. Mais deux êtres allergiques à l’engagement et au concret repoussent indéfiniment ce qui ancre : factures, promesses et projets de long terme flottent, et la franchise brute doublée fait des étincelles quand les vérités se croisent sans tact ni tendresse. Transformer le besoin commun d’horizon en projets d’ancrage — construire ensemble reste une aventure — et nommer un responsable du concret les consolide. Une consultation de voyance amoureuse aide le couple Sagittaire-Sagittaire à poser des fondations sans renier sa liberté.',
    dynamique:
      'Deux Sagittaires forment le couple le plus libre et le plus aventureux du zodiaque. Même soif de découverte, même optimisme, même horreur de l’enfermement : ils se reconnaissent comme deux explorateurs qui décident de faire route ensemble sans jamais s’attacher à un piquet. La relation ressemble à une amitié passionnée doublée d’une agence de voyages — projets, départs, philosophie, éclats de rire. Aucun ne fait peser sur l’autre le poids de la possession, ce qui rend le lien étonnamment léger et vivant. Mais deux êtres allergiques à l’engagement et au concret peuvent repousser indéfiniment tout ce qui ancre : factures, promesses, projets de long terme flottent, et la franchise brute de deux Sagittaires fait parfois des étincelles.',
    forces:
      'Une liberté mutuelle totale sans jalousie, un optimisme partagé qui transforme les épreuves en aventures, une franchise sans jeux, et une soif de découverte qui interdit l’ennui. Le couple qui vit large, voyage loin et rit fort.',
    defis:
      'La fuite de l’engagement : deux signes qui préfèrent l’horizon à l’ancrage peuvent ne jamais poser les fondations concrètes du couple. Le quotidien matériel est le parent pauvre, et la franchise sans filtre, doublée, blesse quand les vérités se croisent sans tact.',
    conseil:
      'Transformez votre besoin commun d’horizon en projets d’ancrage : construire ensemble, c’est encore une aventure. Nommez un responsable du concret à tour de rôle, et rappelez-vous que la franchise sans tendresse n’est que de la brutalité — même entre deux amoureux de la vérité.',
    faq: [
      {
        q: 'Deux Sagittaires sont-ils faits pour vivre ensemble ?',
        a: 'S’ils acceptent une forme de couple non conventionnelle, oui, et heureuse. Deux Sagittaires partagent la liberté, l’optimisme et l’aventure ; leur relation est vivante, légère et sans jalousie. Leur défi n’est pas de s’aimer mais de s’ancrer : deux signes qui fuient l’engagement et le concret doivent construire consciemment ce que d’autres couples posent naturellement — sinon la belle aventure reste sans fondations.',
      },
      {
        q: 'L’engagement fait-il peur à un couple de deux Sagittaires ?',
        a: 'Les formes classiques de l’engagement, oui — mais leur loyauté réelle peut être forte. Ils restent ensemble par choix renouvelé et par plaisir partagé, pas par contrat. Le couple fonctionne quand chacun accepte cette liberté comme un cadre, non comme une menace. Le vrai risque n’est pas l’infidélité mais l’inachèvement : des projets, une vie, un couple qu’on ne finit jamais de construire.',
      },
      {
        q: 'Qui gère le quotidien dans ce couple d’aventuriers ?',
        a: 'Personne spontanément, et c’est leur angle mort. Deux Sagittaires préfèrent le grand horizon aux petites tâches ; factures, ménage et démarches administratives peuvent s’accumuler dangereusement pendant qu’ils rêvent au prochain voyage. Les couples qui durent instaurent un partage explicite du concret — même à contrecœur — ou délèguent ce qu’ils peuvent, pour préserver l’énergie et la joie qui font leur lien.',
      },
    ],
  },
  {
    slug: 'capricorne-capricorne',
    signA: 'Capricorne',
    signB: 'Capricorne',
    score: 4,
    titre: 'Deux bâtisseurs, un empire',
    answerCapsule:
      'La compatibilité amoureuse entre deux Capricorne construit le couple le plus solide et le plus ambitieux du zodiaque, notée 4 sur 5. Même sérieux, même endurance, même vision du temps long : ils se reconnaissent dans l’effort et la loyauté et bâtissent méthodiquement une vie aux fondations décennales. L’amour naît de l’estime — admiration pour la compétence, l’éthique, la fiabilité — et grandit lentement en tendresse profonde à l’abri des regards. Mais deux bourreaux de travail réunis peuvent transformer leur couple en entreprise : la carrière dévore l’intimité, la pudeur émotionnelle double s’atrophie, et chacun finit par se demander en silence s’il est encore aimé sous le respect. Traiter le couple comme le projet le plus important — rendez-vous non annulables, objectifs de tendresse assumés — sauve ce que le devoir menace. Une consultation de voyance amoureuse aide le couple Capricorne-Capricorne à réussir son intimité comme il réussit tout le reste.',
    dynamique:
      'Deux Capricornes construisent le couple le plus solide et le plus ambitieux du zodiaque. Même sérieux, même endurance, même vision du temps long : ils se reconnaissent dans l’effort et la loyauté, et bâtissent méthodiquement une vie dont les fondations défient les décennies. L’amour naît de l’estime — admiration pour la compétence, l’éthique, la fiabilité de l’autre — et grandit lentement en une tendresse profonde à l’abri des regards. Rien n’est laissé au hasard, tout est mérité. Mais deux bourreaux de travail réunis peuvent transformer leur couple en entreprise : la carrière dévore l’intimité, la pudeur émotionnelle double s’atrophie, et chacun peut finir par se demander, en silence, s’il est encore aimé sous le respect.',
    forces:
      'Une fiabilité mutuelle absolue, des ambitions parfaitement alignées, une loyauté sans faille et une efficacité de couple redoutable : ce que deux Capricornes décident se réalise. L’humour sec partagé et une sensualité insoupçonnée sont leur jardin secret.',
    defis:
      'Le travail qui dévore tout : deux workaholics peuvent se croiser des semaines sans vraie rencontre. Et l’expression des sentiments, pudique des deux côtés, peut s’assécher jusqu’à ce que la tendresse disparaisse sous le devoir — chacun aimant en silence et doutant d’être aimé en retour.',
    conseil:
      'Traitez votre couple comme votre projet le plus important : rendez-vous non annulables, bilans réguliers, objectifs de tendresse assumés. C’est contre-romantique en apparence, c’est exactement votre langage — et ça sauve les couples qui, sans cela, réussissent tout sauf leur intimité.',
    faq: [
      {
        q: 'Deux Capricornes forment-ils un couple durable ?',
        a: 'Parmi les plus durables du zodiaque. Même système de valeurs — effort, loyauté, parole tenue, ambition — et même horizon de long terme : deux Capricornes construisent une vie d’une solidité rare. La passion est discrète mais le lien, indéfectible. Leur seul vrai risque n’est pas la rupture mais l’assèchement : laisser le devoir et le travail éclipser l’intimité au point de vider le couple de sa chaleur.',
      },
      {
        q: 'Le travail menace-t-il un couple de deux Capricornes ?',
        a: 'C’est leur ennemi intérieur numéro un. Deux ambitieux également investis dans leur carrière peuvent transformer la vie commune en cohabitation efficace de deux professionnels épuisés. Sans vigilance, l’intimité devient un poste secondaire, toujours reporté. Les couples qui s’épanouissent sanctuarisent du temps à deux avec la même rigueur qu’un rendez-vous d’affaires — la seule discipline que respecte vraiment un Capricorne.',
      },
      {
        q: 'Ce couple manque-t-il de romantisme ?',
        a: 'De romantisme démonstratif, pas d’amour. Deux Capricornes s’aiment en actes : sécuriser l’avenir, tenir parole, être présent dans l’adversité valent pour eux toutes les déclarations. Le risque est que cette pudeur croisée finisse par ressembler à de la froideur, chacun n’osant pas le premier geste tendre. Ritualiser quelques marques d’affection explicites, contre leur nature réservée, protège la chaleur du couple sur la durée.',
      },
    ],
  },
  {
    slug: 'verseau-verseau',
    signA: 'Verseau',
    signB: 'Verseau',
    score: 4,
    titre: 'Deux électrons libres, même orbite',
    answerCapsule:
      'La compatibilité amoureuse entre deux Verseau forme le couple le plus original et le plus libre du zodiaque, notée 4 sur 5. Même indépendance farouche, même vision tournée vers l’avenir, même refus des conventions : ils se reconnaissent comme deux esprits rares qui n’ont enfin plus à s’excuser d’être différents. La complicité est d’abord une amitié intellectuelle profonde, puis un amour qui invente ses propres règles — chacun garde ses projets, ses amis, sa liberté, et ce respect mutuel de l’espace les soude. Mais deux cérébraux détachés, ce sont deux êtres qui analysent les émotions au lieu de les vivre : la tendresse physique et les mots d’amour se raréfient jusqu’à la brillante colocation d’idées, chacun craignant, par fierté d’indépendance, de faire le premier geste tendre. Une consultation de voyance amoureuse aide le couple Verseau-Verseau à oser la vulnérabilité pour que son amitié géniale devienne une histoire d’amour assumée.',
    dynamique:
      'Deux Verseaux forment le couple le plus original et le plus libre du zodiaque. Même indépendance farouche, même vision tournée vers l’avenir, même refus des conventions : ils se reconnaissent comme deux esprits rares qui n’ont enfin plus à s’excuser d’être différents. La complicité est d’abord une amitié intellectuelle profonde, puis un amour qui invente ses propres règles — chacun garde ses projets, ses amis, sa liberté, et c’est précisément ce respect mutuel de l’espace qui les soude. Mais deux cérébraux détachés, c’est aussi deux êtres qui analysent les émotions au lieu de les vivre : la tendresse physique et les mots d’amour peuvent se raréfier jusqu’à ce que le couple ressemble à une brillante colocation d’idées.',
    forces:
      'Une liberté mutuelle totale sans possessivité, une stimulation intellectuelle permanente, une amitié profonde sous l’amour, et une créativité commune qui invente un modèle de couple sur mesure. Deux Verseaux ne s’ennuient jamais et ne s’enferment jamais.',
    defis:
      'Le désert émotionnel : deux esprits qui intellectualisent les sentiments risquent une relation tout en tête, où l’incarnation et la vulnérabilité manquent cruellement. Et un détachement doublé peut faire que personne n’ose le premier geste tendre, chacun craignant de paraître dépendant.',
    conseil:
      'Osez la vulnérabilité en premier plutôt que d’attendre que l’autre craque : entre deux Verseaux, le silence des cœurs vient d’une fierté d’indépendance, pas d’un manque d’amour. Décidez ensemble que montrer son attachement n’est pas une défaite. C’est le seul verrou à faire sauter pour que votre amitié géniale devienne une histoire d’amour assumée.',
    faq: [
      {
        q: 'Deux Verseaux sont-ils compatibles en amour ?',
        a: 'Sur l’indépendance et les idées, l’accord est immédiat : même refus des conventions, même besoin d’espace, même curiosité pour l’avenir. Ils forment un couple sans possessivité qui écrit ses propres règles. La difficulté vient de leur ressemblance sur un autre point : le détachement émotionnel. Quand ni l’un ni l’autre ne prend le risque d’exprimer son attachement, la relation reste géniale mais bizarrement suspendue, comme en attente d’un aveu que personne n’ose faire.',
      },
      {
        q: 'Pourquoi ce couple peine-t-il à exprimer ses sentiments ?',
        a: 'Parce que le Verseau associe la dépendance affective à une perte de liberté, et se protège en gardant ses émotions à distance. Avec un partenaire d’un autre signe, ce mur finit par céder sous la chaleur de l’autre ; entre deux Verseaux, personne n’apporte cette chaleur — chacun attend un signal que l’autre retient par la même fierté. Le couple avance sur un malentendu confortable jusqu’à ce que l’un ose enfin nommer ce qu’il ressent.',
      },
      {
        q: 'L’indépendance de chacun menace-t-elle le couple ?',
        a: 'Au contraire, c’est son ciment — tant qu’elle ne se change pas en distance affective. Deux Verseaux respectent d’instinct l’espace de l’autre, évitant l’étouffement fatal à tant de couples. Le vrai danger est inverse : deux autonomies si complètes que la relation s’étiole faute de moments de proximité réelle. Des rituels de retrouvailles réguliers, choisis et non subis, rappellent que la liberté partagée forme quand même un couple.',
      },
    ],
  },
  {
    slug: 'poissons-poissons',
    signA: 'Poissons',
    signB: 'Poissons',
    score: 3,
    titre: 'Deux rêveurs sans rivage',
    answerCapsule:
      'La compatibilité amoureuse entre deux Poissons est la plus romantique et la plus fusionnelle du zodiaque, notée 3 sur 5. Même sensibilité infinie, même imaginaire débordant, même compassion sans limites : ils se devinent d’un regard et créent un monde à deux d’une douceur presque irréelle, beaucoup parlant d’âmes sœurs dès la rencontre. Leur amour ressemble à un rêve partagé, tendre et magique. Mais deux rêveurs sans ancre, c’est un bateau sans quille : personne pour gérer le concret, poser les limites, ramener à la réalité. Les émotions non exprimées se diluent dans le flou, tous deux fuient les conflits, et l’escapisme partagé peut éloigner le couple du réel jusqu’à le laisser dériver, adorable et perdu. Ancrer délibérément le rêve — cadre matériel minimal, responsabilités réparties — protège leur magie. Une consultation de voyance amoureuse aide le couple Poissons-Poissons à garder un rivage sans renoncer à son océan.',
    dynamique:
      'Deux Poissons vivent l’amour le plus romantique et le plus fusionnel du zodiaque. Même sensibilité infinie, même imaginaire débordant, même compassion sans limites : ils se devinent, se comprennent d’un regard et créent un monde à deux d’une douceur presque irréelle. La connexion émotionnelle et spirituelle est immédiate — beaucoup parlent d’âmes sœurs dès la rencontre. Leur amour ressemble à un rêve partagé, tendre et magique. Mais deux rêveurs sans ancre, c’est un bateau sans quille : personne pour gérer le concret, poser les limites, ramener à la réalité. Les émotions non exprimées se diluent dans le flou, l’un et l’autre fuient les conflits, et le couple peut dériver, adorable et perdu, loin de toute rive.',
    forces:
      'Une compréhension intuitive totale, une tendresse et une créativité partagées d’une richesse rare, une compassion mutuelle sans jugement, et une connexion spirituelle profonde. Deux Poissons s’offrent le refuge affectif dont chacun rêvait sans oser y croire.',
    defis:
      'L’absence d’ancrage : aucun des deux ne gère le concret, et la vie matérielle — argent, démarches, décisions — peut sombrer dans le flou. Deux hypersensibles qui fuient le conflit laissent les non-dits fermenter, et l’escapisme partagé (rêve, addictions, évitement) peut éloigner le couple du réel.',
    conseil:
      'Ancrez délibérément votre rêve : un cadre matériel minimal, des responsabilités réparties, des repères concrets qui protègent votre part de magie au lieu de la menacer. Et nommez vos émotions au lieu de les diluer — même entre intuitifs, le non-dit finit par créer une distance brumeuse.',
    faq: [
      {
        q: 'Deux Poissons peuvent-ils construire un couple solide ?',
        a: 'Émotionnellement et spirituellement, leur connexion est parmi les plus profondes du zodiaque — beaucoup évoquent l’âme sœur. Mais « solide » est le mot juste du défi : deux rêveurs sans ancrage peinent à poser les fondations concrètes d’une vie commune. Le couple est d’une tendresse rare ; sa longévité dépend de leur capacité à gérer, ensemble ou en déléguant, le réel qu’aucun des deux n’aime affronter.',
      },
      {
        q: 'Qui gère le concret dans un couple de deux Poissons ?',
        a: 'C’est précisément le problème : souvent personne. Argent, administratif, décisions pratiques peuvent s’accumuler pendant que le couple vit dans son monde intérieur. Les couples qui durent trouvent une solution — l’un endosse à contrecœur le rôle d’intendant, ou ils délèguent à un tiers de confiance, ou automatisent tout ce qui peut l’être. Reconnaître ce point faible commun, sans se le reprocher, est le premier pas vital.',
      },
      {
        q: 'Le flou émotionnel menace-t-il ce couple ?',
        a: 'Oui, paradoxalement pour deux êtres si sensibles. Par peur de blesser et par tendance à l’évitement, deux Poissons taisent leurs frustrations qui se diluent puis ressurgissent en vagues confuses. S’ajoute le risque d’escapisme partagé — se réfugier ensemble dans le rêve ou les paradis artificiels plutôt que d’affronter les difficultés. Nommer les émotions et rester ancrés dans le réel protège la beauté fragile de leur lien.',
      },
    ],
  },
  {
    slug: 'belier-taureau',
    signA: 'Bélier',
    signB: 'Taureau',
    score: 3,
    titre: 'Le sprinteur et le roc, apprivoisement mutuel',
    answerCapsule:
      'La compatibilité amoureuse entre le Bélier et le Taureau oppose le sprinteur et le roc, notée 3 sur 5. Voisins du zodiaque que tout sépare dans le rythme, le Feu jaillit quand la Terre dure : le Bélier vit dans l’instant et se lasse vite, le Taureau savoure, temporise et s’attache pour toujours. L’attirance est celle des contraires touchants — le Bélier apaisé par cette solidité rassurante, le Taureau électrisé par cette fougue qui le sort de sa torpeur. Une fois les tempos accordés, la complémentarité est réelle : l’élan du Bélier tire le Taureau de l’inertie, l’ancrage du Taureau empêche le Bélier de se disperser, et la sensualité réconcilie souvent ce que les caractères opposent. Le défi reste le rythme : impatience contre entêtement, sprint contre sieste. Une consultation de voyance amoureuse aide le couple Bélier-Taureau à négocier un tempo médian plutôt qu’à s’imposer le sien.',
    dynamique:
      'Bélier et Taureau sont deux voisins du zodiaque que tout oppose dans le rythme : le Feu qui jaillit et la Terre qui dure. Le Bélier vit dans l’instant, décide en une seconde, se lasse vite ; le Taureau savoure, temporise, s’attache pour toujours. L’attirance initiale est celle des contraires touchants — le Bélier est apaisé par cette solidité rassurante, le Taureau électrisé par cette fougue qui le sort de sa torpeur. Mais la vie commune confronte l’impatience à la lenteur : le Bélier trépigne quand le Taureau réfléchit, le Taureau se braque quand le Bélier bouscule. C’est un couple d’apprivoisement, où chacun doit apprendre le tempo de l’autre au lieu de vouloir l’imposer.',
    forces:
      'Une complémentarité réelle une fois les rythmes accordés : le Bélier apporte l’élan qui sort le Taureau de l’inertie, le Taureau offre l’ancrage qui empêche le Bélier de se disperser. La sensualité, terrain commun, réconcilie souvent ce que les tempéraments opposent.',
    defis:
      'Le rythme, encore le rythme : l’impatience du Bélier contre l’entêtement du Taureau produit des blocages où l’un fonce et l’autre plante ses sabots. Le Bélier trouve le Taureau exaspérant de lenteur ; le Taureau trouve le Bélier épuisant de brusquerie et d’imprévoyance.',
    conseil:
      'Bélier : la patience n’est pas une perte de temps avec un Taureau, c’est la seule clé qui l’ouvre — la pression le verrouille définitivement. Taureau : acceptez que la spontanéité de votre Bélier n’est pas de l’inconséquence mais sa façon de vivre. Négociez un tempo médian, ni sprint ni sieste.',
    faq: [
      {
        q: 'Bélier et Taureau sont-ils compatibles en amour ?',
        a: 'C’est une compatibilité de travail plus que d’évidence. Voisins du zodiaque, Bélier et Taureau ne partagent ni élément ni rythme : le Feu impatient rencontre la Terre patiente. L’attirance des contraires est réelle et la sensualité les rapproche, mais la relation exige que chacun apprenne le tempo de l’autre. Les couples qui réussissent sont ceux où le Bélier a gagné en patience et le Taureau en souplesse.',
      },
      {
        q: 'Pourquoi le Bélier s’impatiente-t-il avec le Taureau ?',
        a: 'Parce que le Taureau vit à un rythme que le Bélier perçoit comme de l’immobilisme. Là où le Bélier décide et agit dans la seconde, le Taureau pèse, savoure et avance à pas mesurés — non par indécision mais par nature terrienne. Le Bélier doit comprendre que cette lenteur est le prix de la fiabilité qu’il apprécie : on ne peut pas vouloir la solidité du roc et lui reprocher de ne pas courir.',
      },
      {
        q: 'Comment ce couple accorde-t-il ses rythmes opposés ?',
        a: 'En transformant la différence en répartition plutôt qu’en conflit : au Bélier les décisions rapides et les impulsions à saisir, au Taureau les choix lourds qui engagent l’avenir. La sensualité partagée est leur meilleur terrain de réconciliation — c’est là qu’un Bélier apprend à ralentir et qu’un Taureau apprend à s’enflammer. Beaucoup de ces couples se disputent le jour et se retrouvent la nuit.',
      },
    ],
  },
  {
    slug: 'belier-gemeaux',
    signA: 'Bélier',
    signB: 'Gémeaux',
    score: 4,
    titre: 'L’étincelle et le vent, duo pétillant',
    answerCapsule:
      'La compatibilité amoureuse entre le Bélier et le Gémeaux est l’une des plus pétillantes du zodiaque, notée 4 sur 5. Le sextile Feu-Air fait circuler une énergie de jeu, d’idées et de mouvement : le Bélier allume, le Gémeaux attise et fait circuler. Ils se comprennent vite, rient beaucoup, enchaînent projets et sorties sans jamais s’ennuyer — le Bélier adore la vivacité mentale qui met des mots sur ses élans, le Gémeaux est stimulé par l’audace qui change ses idées en actes. Deux complices espiègles qui découvrent le monde ensemble, avec une liberté mutuelle sans surveillance. Leur seule ombre : deux êtres qui vivent vite et en surface peuvent esquiver les vrais sujets émotionnels et laisser flotter les décisions de fond. Une consultation de voyance amoureuse aide le couple Bélier-Gémeaux à descendre sous la surface pour que son étincelle brillante devienne un vrai feu.',
    dynamique:
      'Bélier et Gémeaux forment l’un des couples les plus pétillants du zodiaque. Le sextile Feu-Air fait circuler une énergie de jeu, d’idées et de mouvement : le Bélier allume, le Gémeaux attise et fait circuler. Ils se comprennent vite, rient beaucoup, enchaînent projets et sorties sans jamais s’ennuyer. Le Bélier adore la vivacité mentale du Gémeaux, qui met des mots sur ses élans ; le Gémeaux est stimulé par l’audace du Bélier, qui transforme ses idées en actes. C’est une relation de complices espiègles — deux enfants terribles qui découvrent le monde ensemble. Leur seule ombre : deux êtres qui vivent vite et en surface peuvent négliger la profondeur émotionnelle et l’ancrage du couple.',
    forces:
      'Une complicité immédiate, un humour partagé, une énergie commune qui interdit l’ennui, et une liberté mutuelle : le Bélier ne s’attarde pas à surveiller, le Gémeaux ne supporte pas d’être surveillé. Ils forment un duo social brillant et inventif.',
    defis:
      'La superficialité : deux signes qui privilégient l’action et l’idée peuvent esquiver les vrais sujets émotionnels. Le Bélier direct se heurte parfois à l’esquive et à l’ambiguïté du Gémeaux ; l’impatience de l’un rencontre la versatilité de l’autre, et les décisions de fond peuvent flotter.',
    conseil:
      'Osez descendre sous la surface : votre complicité brillante mérite une vraie intimité émotionnelle, pas seulement des fous rires et des projets. Bélier, exigez de la clarté sans brusquer ; Gémeaux, offrez de la franchise sans esquiver. C’est là que votre étincelle devient un vrai feu.',
    faq: [
      {
        q: 'Bélier et Gémeaux : une bonne compatibilité amoureuse ?',
        a: 'Oui, l’une des plus vivantes et des plus faciles. Le sextile Feu-Air crée une complicité naturelle : même goût du mouvement, de l’humour et de la nouveauté, sans les jeux de pouvoir des couples plus intenses. La relation pétille et ne s’ennuie jamais. Son seul chantier est la profondeur : deux signes légers doivent apprendre à aborder l’émotionnel qu’ils préfèrent contourner.',
      },
      {
        q: 'Ce couple risque-t-il de rester en surface ?',
        a: 'C’est son point faible naturel. Le Bélier vit dans l’action, le Gémeaux dans les idées : ni l’un ni l’autre n’est spontanément porté vers l’introspection ou les grandes conversations sur les sentiments. Le couple peut alors ressembler à une amitié survitaminée qui esquive l’intimité profonde. Les partenaires qui durent s’imposent des moments de vraie parole, où l’on parle de « nous » et pas seulement du prochain projet.',
      },
      {
        q: 'La franchise du Bélier convient-elle au Gémeaux ?',
        a: 'Plutôt bien, à un détail près : le Bélier dit tout de front, le Gémeaux préfère nuancer, contourner, jouer avec les mots. Le Bélier peut vivre cette agilité comme de l’ambiguïté, voire de la fuite. Le Gémeaux, lui, encaisse la franchise brute mieux que d’autres signes car il ne s’en formalise pas longtemps. L’équilibre : un Bélier qui adoucit à peine, un Gémeaux qui tranche un peu plus.',
      },
    ],
  },
  {
    slug: 'belier-poissons',
    signA: 'Bélier',
    signB: 'Poissons',
    score: 3,
    titre: 'Le guerrier et le rêveur, les deux bouts du zodiaque',
    answerCapsule:
      'La compatibilité amoureuse entre le Bélier et les Poissons unit les deux extrémités du zodiaque, notée 3 sur 5 : le tout premier signe et le tout dernier, l’aube et le crépuscule. Le Bélier incarne l’élan brut et l’action, les Poissons la dissolution, le rêve et l’abandon. L’attirance naît d’un mystère réciproque — le Bélier fasciné par cette douceur insaisissable qui ne se conquiert pas, les Poissons par cette force claire qui les protège et les guide. Le Bélier devient le chevalier des Poissons, qui lui offrent en retour un havre de tendresse et d’imaginaire. Mais la franchise brute du guerrier meurtrit une sensibilité qui encaisse en silence puis se dérobe dans le flou, exaspérant un Bélier qui ne sait pas l’atteindre. Une consultation de voyance amoureuse aide le couple Bélier-Poissons à conjuguer la force et la douceur sans que l’une ne blesse l’autre.',
    dynamique:
      'Bélier et Poissons se touchent aux deux extrémités du zodiaque : le tout premier signe et le tout dernier, l’aube et le crépuscule. Le Bélier incarne l’élan brut, l’action, le « moi » qui fonce ; les Poissons incarnent la dissolution, le rêve, le « tout » qui s’abandonne. L’attirance est celle d’un mystère réciproque : le Bélier est fasciné par cette douceur insaisissable qui ne se conquiert pas, les Poissons par cette force claire qui les protège et les guide. Le Bélier peut devenir le chevalier des Poissons, celui qui affronte le monde à leur place ; les Poissons offrent au guerrier un havre de tendresse et d’imaginaire. Mais la brusquerie de l’un blesse facilement la sensibilité de l’autre.',
    forces:
      'Une complémentarité archétypale — la force et la douceur, l’action et le rêve —, une protection réelle du Bélier envers les Poissons, et une inspiration mutuelle : les Poissons adoucissent le guerrier, le Bélier concrétise les rêves du poète. La tendresse peut y être immense.',
    defis:
      'La sensibilité : la franchise brute du Bélier meurtrit des Poissons qui encaissent en silence puis se dérobent dans le flou. Le Bélier s’exaspère de cette fuite qu’il ne sait pas atteindre ; les Poissons se sentent bousculés par une énergie trop directe pour leur monde intérieur.',
    conseil:
      'Bélier : votre force protège les Poissons à condition de brider votre brusquerie — un mot dur les blesse plus qu’un coup. Poissons : ne fuyez pas dans le brouillard, dites simplement ce qui vous touche ; votre Bélier ne décode pas le silence, mais il désarme devant la vulnérabilité assumée.',
    faq: [
      {
        q: 'Bélier et Poissons peuvent-ils s’aimer malgré leurs différences ?',
        a: 'Oui, et l’attirance des deux bouts du zodiaque est souvent puissante. Le Bélier apporte la force et la direction qui manquent aux Poissons, les Poissons la douceur et l’imaginaire qui manquent au Bélier. La relation peut être d’une belle complémentarité — le chevalier et le rêveur. Sa fragilité tient à la différence de peau émotionnelle : le Bélier doit apprendre une délicatesse que sa nature ignore.',
      },
      {
        q: 'Pourquoi le Bélier blesse-t-il facilement les Poissons ?',
        a: 'Parce que sa communication est frontale et rapide, sans emballage — et que les Poissons ressentent tout à une intensité démultipliée. Une remarque banale pour le Bélier peut être vécue comme un rejet par les Poissons, qui n’ont pas la carapace pour la relativiser. Le Bélier n’est pas méchant, il est direct ; mais avec les Poissons, la manière compte autant que le fond. La tendresse dans le ton change tout.',
      },
      {
        q: 'Comment les Poissons doivent-ils communiquer avec le Bélier ?',
        a: 'En clair et sans se réfugier dans le flou. La tendance naturelle des Poissons blessés est de se dérober, de sous-entendre, de bouder dans le brouillard — exactement ce qu’un Bélier ne sait pas lire. Or le Bélier répond magnifiquement à la franchise vulnérable : dire « ça m’a fait mal » le désarme instantanément, là où le silence l’agace. La sincérité directe est le langage qui relie ces deux extrêmes.',
      },
    ],
  },
  {
    slug: 'taureau-gemeaux',
    signA: 'Taureau',
    signB: 'Gémeaux',
    score: 3,
    titre: 'Le roc et le papillon, voisins étrangers',
    answerCapsule:
      'La compatibilité amoureuse entre le Taureau et le Gémeaux réunit le roc et le papillon, notée 3 sur 5. Voisins du zodiaque, ils habitent deux univers : la Terre qui se pose et l’Air qui volette. Le Taureau cherche la stabilité et la routine rassurante, le Gémeaux la variété et la nouveauté permanente. Le Taureau est séduit par la vivacité brillante du Gémeaux, qui l’ouvre et l’amuse ; le Gémeaux est intrigué par cette solidité tranquille qui le change de son agitation. Mais le quotidien révèle le fossé : le Taureau veut construire un nid, le Gémeaux garder les fenêtres ouvertes — l’un vit la légèreté comme de l’inconstance, l’autre la stabilité comme de l’ennui. La possessivité du Taureau fait fuir un Gémeaux qui étouffe dans les habitudes. Une consultation de voyance amoureuse aide le couple Taureau-Gémeaux à se rencontrer au milieu, entre repères stables et air frais.',
    dynamique:
      'Taureau et Gémeaux sont voisins sur le zodiaque mais habitent deux univers : la Terre qui se pose et l’Air qui volette. Le Taureau cherche la stabilité, la sécurité, la routine rassurante ; le Gémeaux cherche la variété, le mouvement, la nouveauté permanente. Le Taureau est d’abord séduit par la vivacité brillante du Gémeaux, qui l’amuse et l’ouvre ; le Gémeaux est intrigué par cette solidité tranquille qui le change de son agitation. Mais le quotidien révèle le fossé : le Taureau veut construire un nid, le Gémeaux veut garder les fenêtres ouvertes. L’un vit la légèreté de l’autre comme de l’inconstance, l’autre vit la stabilité comme de l’ennui. C’est un couple d’effort où chacun doit s’étirer vers l’univers de l’autre.',
    forces:
      'Une complémentarité possible : le Gémeaux apporte l’air frais et la surprise qui empêchent le Taureau de s’encroûter, le Taureau offre l’ancrage et la sécurité dont le Gémeaux manque cruellement. Ensemble, ils peuvent équilibrer routine et nouveauté.',
    defis:
      'Le fossé des besoins : sécurité contre liberté, profondeur contre mobilité. Le Taureau, possessif, s’inquiète du papillonnage social du Gémeaux ; le Gémeaux étouffe dans la routine et les habitudes que le Taureau chérit. Le rythme de la parole et de la décision les oppose aussi.',
    conseil:
      'Taureau : lâchez du lest sur la liberté sociale du Gémeaux, votre possessivité le fait fuir plus sûrement que tout. Gémeaux : offrez à votre Taureau quelques repères stables non négociables, cette base sécurisante achète toute la légèreté que vous réclamez. Rencontrez-vous au milieu.',
    faq: [
      {
        q: 'Taureau et Gémeaux forment-ils un couple viable ?',
        a: 'Viable mais exigeant. Voisins du zodiaque sans élément commun, le Taureau de Terre et le Gémeaux d’Air ont des besoins presque opposés : sécurité contre liberté, profondeur contre mouvement. L’attirance initiale — la solidité fascine le papillon, la vivacité amuse le roc — doit se transformer en apprentissage mutuel. Les couples qui durent ont chacun fait un vrai pas vers l’univers de l’autre.',
      },
      {
        q: 'Pourquoi le Taureau s’inquiète-t-il avec le Gémeaux ?',
        a: 'Parce que la sociabilité papillonnante du Gémeaux heurte de plein fouet le besoin de sécurité et l’instinct possessif du Taureau. Voir son partenaire séduire, butiner les contacts et chérir sa liberté active toutes les alarmes du Taureau, qui associe l’amour à l’exclusivité et à la constance. Le malentendu est réel : le Gémeaux est léger par nature, pas infidèle. Le Taureau doit apprendre à distinguer les deux.',
      },
      {
        q: 'Comment ce couple évite-t-il l’ennui et l’étouffement ?',
        a: 'En trouvant un point d’équilibre entre leurs deux besoins vitaux. Le Taureau doit accepter que le Gémeaux ait besoin d’air — sorties, amis, variété — sans y voir une menace ; le Gémeaux doit accepter quelques ancrages fixes qui rassurent le Taureau. C’est un dosage permanent : trop de routine et le Gémeaux suffoque, trop de liberté et le Taureau s’angoisse. Le couple vit dans cette négociation continue.',
      },
    ],
  },
  {
    slug: 'gemeaux-lion',
    signA: 'Gémeaux',
    signB: 'Lion',
    score: 4,
    titre: 'L’esprit et la scène, duo brillant',
    answerCapsule:
      'La compatibilité amoureuse entre le Gémeaux et le Lion forme un couple lumineux et sociable, notée 4 sur 5. Le sextile Air-Feu fait circuler une énergie de jeu, de séduction et de spectacle : le Lion brille sur scène, le Gémeaux fait l’esprit dans la salle. Le Lion adore l’esprit vif du Gémeaux, qui le met en valeur ; le Gémeaux est fasciné par la chaleur et le charisme du Lion, qui donnent du poids à sa légèreté. Ensemble, ils forment un duo brillant qu’on remarque, où la constance généreuse du Lion ancre la versatilité du Gémeaux. Leur seule ombre : le Lion réclame une admiration exclusive que le Gémeaux, dispersé et taquin, blague au lieu d’appuyer, vexant un signe gourmand en compliments. Une consultation de voyance amoureuse aide le couple Gémeaux-Lion à rire ensemble plutôt qu’à compter les points, en nourrissant l’ego solaire sans étouffer l’humour.',
    dynamique:
      'Gémeaux et Lion forment un couple lumineux et sociable. Le sextile Air-Feu fait circuler une énergie de jeu, de séduction et de spectacle : le Lion brille sur scène, le Gémeaux fait l’esprit dans la salle. Le Lion adore l’esprit vif du Gémeaux, qui le divertit et le met en valeur ; le Gémeaux est fasciné par la chaleur et le charisme du Lion, qui donnent du poids à sa légèreté. Ensemble, ils forment un duo brillant que l’on remarque, plein d’humour et de mouvement. Le Lion apporte la constance et la générosité, le Gémeaux la fraîcheur et la surprise. Une seule ombre : le Lion a besoin d’une admiration exclusive que le Gémeaux, dispersé et taquin, ne donne pas toujours de façon assez appuyée.',
    forces:
      'Une complicité sociale éclatante, un humour partagé, une stimulation mutuelle constante, et une complémentarité de tempéraments : la constance chaleureuse du Lion ancre la versatilité du Gémeaux, qui en retour empêche le Lion de se prendre trop au sérieux.',
    defis:
      'Le besoin d’admiration du Lion se heurte à la légèreté taquine du Gémeaux, qui blague au lieu de flatter. Le Lion peut se vexer de ne pas être assez adoré ; le Gémeaux peut trouver le Lion susceptible et gourmand en compliments. La profondeur émotionnelle n’est le fort d’aucun des deux.',
    conseil:
      'Gémeaux : nourrissez l’ego de votre Lion par des marques d’admiration sincères — c’est sa faim vitale, et cela ne coûte que quelques mots que vous maniez si bien. Lion : ne prenez pas les taquineries du Gémeaux pour un manque de respect, c’est sa façon d’aimer. Riez ensemble plutôt que de compter les points.',
    faq: [
      {
        q: 'Gémeaux et Lion : une bonne compatibilité ?',
        a: 'Oui, très bonne. Le sextile Air-Feu crée un couple sociable, drôle et stimulant, où l’esprit du Gémeaux rencontre le rayonnement du Lion. La relation est vivante et brillante en société. Le seul ajustement porte sur l’ego du Lion : il a besoin d’une admiration régulière que le Gémeaux, taquin et dispersé, doit apprendre à exprimer plus clairement pour que le Lion se sente pleinement aimé.',
      },
      {
        q: 'Pourquoi le Lion se vexe-t-il parfois avec le Gémeaux ?',
        a: 'Parce que le Gémeaux exprime son affection par la taquinerie et l’humour, quand le Lion l’attend sous forme d’admiration appuyée. Une blague affectueuse du Gémeaux peut être reçue par le Lion comme une moquerie qui écorne sa fierté. Le malentendu est réel : le Gémeaux ne se moque pas, il joue. Le Lion doit apprendre à lire ce jeu comme une preuve de complicité, pas comme un manque d’égards.',
      },
      {
        q: 'Ce couple a-t-il de la profondeur émotionnelle ?',
        a: 'C’est son chantier. Ni le Gémeaux cérébral ni le Lion tourné vers l’image ne plongent spontanément dans l’intimité émotionnelle profonde. Le couple brille en surface — humour, sorties, complicité — mais peut négliger les vraies conversations du cœur. Les partenaires qui construisent du durable s’imposent des moments de sincérité désarmée, où le Lion baisse la garde et le Gémeaux arrête de plaisanter.',
      },
    ],
  },
  {
    slug: 'gemeaux-vierge',
    signA: 'Gémeaux',
    signB: 'Vierge',
    score: 3,
    titre: 'Deux enfants de Mercure, même planète, mondes opposés',
    answerCapsule:
      'La compatibilité amoureuse entre le Gémeaux et la Vierge réunit deux enfants de Mercure, notée 3 sur 5 : même planète maîtresse, mondes opposés. Le Gémeaux est le Mercure aérien — dispersé, curieux, papillonnant ; la Vierge, le Mercure terrien — concentré, méthodique, perfectionniste. Ils se reconnaissent d’abord sur le terrain de l’esprit, conversation vive et humour intelligent, puis découvrent qu’ils ne rangent pas le monde de la même façon : le Gémeaux vit dans le désordre créatif, la Vierge dans la maîtrise. La Vierge structure les idées foisonnantes du Gémeaux, qui allège son perfectionnisme anxieux, mais leur rapport au concret les sépare — le désordre joyeux angoisse, la critique perfectionniste blesse le Gémeaux sensible sous ses airs légers. Une consultation de voyance amoureuse aide le couple Gémeaux-Vierge à se servir de sa planète commune pour se parler au lieu de se juger.',
    dynamique:
      'Gémeaux et Vierge partagent la même planète maîtresse, Mercure — l’intelligence, le langage, l’analyse — mais l’expriment de façons radicalement opposées. Le Gémeaux est le Mercure aérien : dispersé, curieux, papillonnant d’une idée à l’autre ; la Vierge est le Mercure terrien : concentré, méthodique, perfectionniste. Ils se reconnaissent d’abord sur le terrain de l’esprit — conversation vive, humour intelligent, curiosité partagée — puis découvrent qu’ils ne rangent pas le monde de la même manière. Le Gémeaux vit dans le mouvement et le désordre créatif, la Vierge dans l’ordre et la maîtrise. L’un trouve l’autre rigide, l’autre trouve l’un brouillon. Leur lien mental est réel, mais leur rapport au concret les sépare.',
    forces:
      'Une entente intellectuelle immédiate — mêmes armes mentales, même goût des mots —, une complémentarité possible : la Vierge structure les idées foisonnantes du Gémeaux, le Gémeaux allège le perfectionnisme anxieux de la Vierge. Ensemble, ils forment un duo cérébral efficace.',
    defis:
      'Le rapport au concret et à l’ordre : le désordre joyeux du Gémeaux angoisse la Vierge méthodique, dont la critique perfectionniste blesse le Gémeaux sensible sous ses airs légers. L’un veut la liberté, l’autre la maîtrise ; l’un survole, l’autre approfondit. Le nerveux mental des deux peut s’emballer.',
    conseil:
      'Vierge : votre Gémeaux ne supporte ni la critique ni le contrôle — suggérez sans corriger, sa légèreté n’est pas de la négligence. Gémeaux : reconnaissez le besoin d’ordre de votre Vierge au lieu d’en rire, cet ordre est sa sécurité. Utilisez votre planète commune pour parler au lieu de vous juger.',
    faq: [
      {
        q: 'Gémeaux et Vierge : leur planète commune les rapproche-t-elle ?',
        a: 'Elle crée une vraie connexion mentale — même vivacité d’esprit, même amour du langage et des idées — mais ne suffit pas à les accorder. Gémeaux et Vierge sont deux visages de Mercure : l’un aérien et dispersé, l’autre terrien et méthodique. Ils se comprennent intellectuellement et se heurtent sur le concret. L’attrait est réel, l’harmonie demande que chacun respecte le mode de fonctionnement opposé de l’autre.',
      },
      {
        q: 'Pourquoi la Vierge critique-t-elle le Gémeaux ?',
        a: 'Parce que le fonctionnement du Gémeaux — désordre créatif, projets abandonnés en chemin, légèreté — heurte tout ce que la Vierge valorise : la rigueur, l’achèvement, la maîtrise. Sa critique part d’une intention d’aider, mais le Gémeaux, plus sensible qu’il n’y paraît, la vit comme un rejet. La Vierge doit apprendre que suggérer vaut mieux que corriger, surtout avec un partenaire dont la spontanéité est la nature même.',
      },
      {
        q: 'Ce couple peut-il équilibrer liberté et ordre ?',
        a: 'C’est tout son enjeu. Le Gémeaux a besoin d’air, de mouvement et de désordre pour respirer ; la Vierge a besoin de structure et de maîtrise pour se sentir en sécurité. Le couple fonctionne quand chacun offre à l’autre un espace pour son mode : des zones où le Gémeaux crée librement, des cadres où la Vierge organise en paix. Leur intelligence commune, bien orientée, en fait une équipe redoutable plutôt que deux critiques.',
      },
    ],
  },
  {
    slug: 'cancer-vierge',
    signA: 'Cancer',
    signB: 'Vierge',
    score: 4,
    titre: 'Le soin sous deux formes, tendresse et dévouement',
    answerCapsule:
      'La compatibilité amoureuse entre le Cancer et la Vierge exprime le soin sous deux formes, notée 4 sur 5. Le sextile Eau-Terre unit deux signes serviables qui disent l’amour en se rendant utiles — le Cancer par la tendresse et le réconfort, la Vierge par l’attention concrète et les mille gestes du quotidien. Ils se reconnaissent avec soulagement : enfin quelqu’un qui remarque, anticipe et protège. La chaleur du Cancer adoucit l’anxiété de la Vierge, dont la fiabilité pratique rassure les inquiétudes du Cancer, et ils bâtissent un foyer soigné où chacun se sent pris en charge. Leur risque commun est l’anxiété, qui tourne en boucle entre deux inquiets, tandis que la critique de la Vierge blesse la susceptibilité du Cancer, qui veut être consolé plus que corrigé. Une consultation de voyance amoureuse aide le couple Cancer-Vierge à interrompre ses spirales d’inquiétude et à écouter au lieu de résoudre.',
    dynamique:
      'Cancer et Vierge partagent une même vocation : prendre soin. Le sextile Eau-Terre unit deux signes serviables qui expriment l’amour en se rendant utiles — le Cancer par la tendresse et le réconfort, la Vierge par l’attention concrète et les mille gestes du quotidien. Ils se reconnaissent avec soulagement : enfin quelqu’un qui remarque, qui anticipe, qui protège. Le Cancer apporte la chaleur émotionnelle qui adoucit l’anxiété de la Vierge ; la Vierge apporte la fiabilité pratique qui rassure les inquiétudes du Cancer. C’est un couple discret et dévoué, qui construit un foyer soigné où chacun se sent pris en charge. Leur risque commun : l’inquiétude, qui peut tourner en boucle entre deux anxieux.',
    forces:
      'Un dévouement mutuel rare — chacun veille sur l’autre sans compter —, une tendresse doublée d’efficacité, un foyer soigné et sécurisant, et une loyauté tranquille. Deux signes qui ne trahissent pas et construisent dans la durée, gestes après gestes.',
    defis:
      'L’anxiété partagée : deux inquiets peuvent nourrir leurs soucis en écho jusqu’à la spirale. La critique perfectionniste de la Vierge blesse la susceptibilité du Cancer ; les marées d’humeur du Cancer déroutent la Vierge, qui voudrait tout résoudre logiquement là où le Cancer veut juste être consolé.',
    conseil:
      'Vierge : votre Cancer ne cherche pas de solution mais une présence — écoutez au lieu de corriger. Cancer : ne prenez pas les remarques pratiques de votre Vierge pour un rejet, c’est sa façon d’aimer. Et interrompez ensemble les spirales d’inquiétude : quand l’un s’emballe, l’autre ancre.',
    faq: [
      {
        q: 'Cancer et Vierge sont-ils compatibles en amour ?',
        a: 'Oui, c’est une compatibilité douce et solide. Le sextile Eau-Terre unit deux signes qui aiment en prenant soin : le Cancer par la tendresse, la Vierge par l’attention concrète. Ils se complètent naturellement et construisent un foyer dévoué. Leur seul point de vigilance est l’anxiété commune, qui peut tourner en boucle, et la différence entre le besoin de réconfort du Cancer et le réflexe de solution de la Vierge.',
      },
      {
        q: 'Pourquoi le Cancer se sent-il parfois critiqué par la Vierge ?',
        a: 'Parce que la Vierge, face à une difficulté, analyse et suggère des améliorations — un réflexe pratique que le Cancer, hypersensible, reçoit comme un jugement sur sa personne. Quand le Cancer partage une peine, il attend de la chaleur, pas un plan d’action. La Vierge doit apprendre à consoler avant de conseiller ; sa bienveillance est réelle, mais sa forme doit s’adoucir pour atteindre le cœur du Cancer.',
      },
      {
        q: 'Comment ce couple gère-t-il l’inquiétude commune ?',
        a: 'C’est leur principal apprentissage. Le Cancer s’inquiète des émotions et des liens, la Vierge des détails et de ce qui pourrait mal tourner : réunis, ils peuvent alimenter mutuellement leurs angoisses jusqu’à la spirale. Les couples équilibrés instaurent un rôle d’ancrage tournant : quand l’un s’emballe, l’autre reste calme et rassure. Leur soin mutuel, bien orienté, devient alors un refuge au lieu d’une chambre d’écho anxieuse.',
      },
    ],
  },
  {
    slug: 'cancer-sagittaire',
    signA: 'Cancer',
    signB: 'Sagittaire',
    score: 2,
    titre: 'Le nid et l’horizon, quinconce délicat',
    answerCapsule:
      'La compatibilité amoureuse entre le Cancer et le Sagittaire est un quinconce délicat, notée 2 sur 5 : un angle sans terrain commun naturel, qui demande tout à l’ajustement. Le Cancer cherche le nid, la sécurité, la proximité émotionnelle ; le Sagittaire l’horizon, la liberté, l’aventure. Le Cancer est charmé par l’optimisme chaleureux du Sagittaire, qui lui offre en retour un refuge après ses voyages, mais le quotidien confronte deux besoins presque inconciliables : le Cancer vit les départs comme des abandons, le Sagittaire vit les besoins du Cancer comme une entrave, et sa franchise sans tact meurtrit une susceptibilité dont les marées pèsent sur son besoin de légèreté. Un simple message pendant les escapades, et la fin des cages, change tout. Une consultation de voyance amoureuse aide le couple Cancer-Sagittaire à réconcilier le nid et l’horizon quand l’affection est sincère.',
    dynamique:
      'Cancer et Sagittaire forment un quinconce — cet angle qui n’offre aucun terrain commun naturel et demande tout à l’ajustement. Le Cancer cherche le nid, la sécurité, la proximité émotionnelle ; le Sagittaire cherche l’horizon, la liberté, l’aventure. Le Cancer est d’abord charmé par l’optimisme chaleureux du Sagittaire, qui illumine ses ciels intérieurs ; le Sagittaire est touché par la tendresse du Cancer, qui lui offre un refuge après ses voyages. Mais le quotidien confronte deux besoins presque inconciliables : le Cancer veut la présence, le Sagittaire l’évasion ; le Cancer se replie, le Sagittaire s’élance. La franchise sans tact du Sagittaire blesse la susceptibilité du Cancer, dont les marées émotionnelles pèsent sur le besoin de légèreté du Sagittaire.',
    forces:
      'Une complémentarité possible pour qui la travaille : le Sagittaire sort le Cancer de sa coquille et l’ouvre au monde, le Cancer offre au Sagittaire le foyer chaleureux vers lequel revenir. Leur affection mutuelle, quand elle passe les malentendus, est sincère et tendre.',
    defis:
      'Le fossé sécurité/liberté, au maximum : le Cancer vit les départs du Sagittaire comme des abandons, le Sagittaire vit les besoins du Cancer comme une entrave. La franchise brute du Sagittaire meurtrit le Cancer, dont les bouderies émotionnelles agacent le Sagittaire allergique à la lourdeur.',
    conseil:
      'Sagittaire : mesurez vos mots et vos absences, le Cancer a besoin de réassurance là où vous avez besoin d’air — un simple message pendant vos escapades change tout. Cancer : n’enfermez pas votre Sagittaire, sa liberté n’est pas un désamour ; il revient d’autant plus volontiers qu’on ne le retient pas.',
    faq: [
      {
        q: 'Cancer et Sagittaire sont-ils vraiment incompatibles ?',
        a: 'C’est l’une des combinaisons les plus délicates du zodiaque, en quinconce — un angle sans harmonie naturelle. Le besoin de nid du Cancer et le besoin d’horizon du Sagittaire s’opposent frontalement. Difficile ne veut pas dire impossible : certains couples y parviennent par un ajustement constant et une vraie tendresse. Mais c’est une relation qui demande beaucoup d’efforts conscients des deux côtés pour tenir.',
      },
      {
        q: 'Pourquoi le Cancer souffre-t-il de la liberté du Sagittaire ?',
        a: 'Parce qu’il lit les départs et l’indépendance du Sagittaire comme des abandons. Le Cancer a besoin de présence et de proximité pour se sentir aimé ; le Sagittaire a besoin d’évasion pour se sentir vivant. Quand le Sagittaire s’élance vers l’aventure, le Cancer se sent délaissé et se replie dans sa coquille, ce qui éloigne encore le Sagittaire. Le cercle vicieux ne se brise que par la réassurance active.',
      },
      {
        q: 'Comment ce couple peut-il tenir malgré tout ?',
        a: 'Par un ajustement mutuel permanent, seule voie pour un quinconce. Le Sagittaire doit apprendre à rassurer — un mot, un geste, un retour fiable — sans renoncer à sa liberté ; le Cancer doit apprendre à lâcher du lest sans se sentir abandonné. Quand chacun fait ce pas contre-nature, la complémentarité opère : le foyer du Cancer devient la base heureuse d’où le Sagittaire rayonne et vers laquelle il revient.',
      },
    ],
  },
  {
    slug: 'lion-vierge',
    signA: 'Lion',
    signB: 'Vierge',
    score: 3,
    titre: 'Le roi et la conseillère, panache et précision',
    answerCapsule:
      'La compatibilité amoureuse entre le Lion et la Vierge oppose le panache et la précision, notée 3 sur 5. Voisins du zodiaque aux styles inverses, le faste et la discrétion : le Lion règne et voit grand, la Vierge observe et perfectionne dans l’ombre. Le Lion est séduit par l’intelligence attentive de la Vierge, qui le comprend et le sert avec finesse ; la Vierge est fascinée par la chaleur et l’assurance du Lion, qui la sortent de sa réserve. Un couple peut naître d’une belle complémentarité — le Lion sur scène, la Vierge à la régie — à condition que le Lion ne la prenne pas pour une servante et qu’elle n’écorne pas son ego par ses critiques, poison de sa faim d’admiration. Entre besoin de gloire et besoin de perfection, l’équilibre est subtil. Une consultation de voyance amoureuse aide le couple Lion-Vierge à valoriser avant de corriger et à reconnaître le travail de l’ombre.',
    dynamique:
      'Lion et Vierge sont voisins du zodiaque et pourtant à l’opposé dans le style : le faste et la discrétion, le geste large et le détail précis. Le Lion règne, rayonne, voit grand ; la Vierge observe, ajuste, perfectionne dans l’ombre. Le Lion est d’abord séduit par l’intelligence attentive de la Vierge, qui le comprend et le sert avec finesse ; la Vierge est fascinée par la chaleur et l’assurance du Lion, qui la sortent de sa réserve. Un couple peut naître d’une belle complémentarité — le Lion sur scène, la Vierge à la régie — à condition que le Lion ne prenne pas la Vierge pour une servante et que la Vierge n’écorne pas l’ego du Lion par ses critiques. Entre le besoin de gloire et le besoin de perfection, l’équilibre est subtil.',
    forces:
      'Une complémentarité efficace : la Vierge structure et soutient les grandes visions du Lion, qui offre en retour à la Vierge chaleur, reconnaissance et confiance. La loyauté est forte des deux côtés, et l’admiration réciproque, quand elle s’installe, très solide.',
    defis:
      'La critique de la Vierge est le poison de l’ego du Lion, qui a besoin d’admiration là où la Vierge voit ce qui peut être amélioré. Le Lion, dépensier et démonstratif, peut heurter la Vierge économe et pudique. L’un veut briller, l’autre veut que tout soit juste — deux quêtes qui se contredisent.',
    conseil:
      'Vierge : gardez vos critiques pour l’essentiel et valorisez d’abord — un Lion nourri d’admiration vous offre tout, un Lion rabaissé se ferme définitivement. Lion : reconnaissez le travail de l’ombre de votre Vierge, elle donne sans réclamer la scène ; un merci sincère la comble plus qu’un cadeau.',
    faq: [
      {
        q: 'Lion et Vierge peuvent-ils former un bon couple ?',
        a: 'Oui, sur la base d’une complémentarité bien gérée : le panache du Lion et la précision de la Vierge peuvent former une équipe efficace, l’un sur scène, l’autre en régie. Voisins du zodiaque sans élément commun, ils diffèrent profondément de style. La réussite dépend d’un équilibre délicat : que le Lion respecte le travail discret de la Vierge et que la Vierge ménage l’ego du Lion.',
      },
      {
        q: 'Pourquoi la critique de la Vierge blesse-t-elle tant le Lion ?',
        a: 'Parce que le Lion a un besoin vital d’admiration, et que la critique — même bienveillante et constructive — touche directement son point le plus sensible : sa fierté. Là où la Vierge croit aider en pointant ce qui pourrait être mieux, le Lion entend qu’il n’est pas à la hauteur. Avec ce signe royal plus qu’avec tout autre, la Vierge doit apprendre à envelopper ses remarques d’une reconnaissance sincère.',
      },
      {
        q: 'La Vierge risque-t-elle de s’effacer derrière le Lion ?',
        a: 'C’est un risque réel. La Vierge donne volontiers dans l’ombre, sans réclamer la lumière que le Lion accapare naturellement. Le danger : qu’elle s’épuise à servir un partenaire qui prend sans remarquer, jusqu’à une lassitude silencieuse. La prévention tient à la reconnaissance : un Lion qui honore explicitement le rôle de sa Vierge, en privé comme en public, transforme le déséquilibre en partenariat où chacun trouve sa place.',
      },
    ],
  },
  {
    slug: 'lion-capricorne',
    signA: 'Lion',
    signB: 'Capricorne',
    score: 3,
    titre: 'Deux ambitieux, la gloire et le pouvoir',
    answerCapsule:
      'La compatibilité amoureuse entre le Lion et le Capricorne réunit deux ambitieux, notée 3 sur 5 : deux signes de pouvoir qui visent le sommet par des chemins opposés, la gloire et le rayonnement contre la stratégie et l’endurance. L’attirance naît d’une reconnaissance mutuelle — le Lion admire la solidité imperturbable du Capricorne, qui arrive toujours ; le Capricorne est fasciné par le charisme du Lion, qui obtient par la présence ce que lui obtient par l’effort. En couple, ils forment une dynastie redoutable, l’image et la structure, la façade et les fondations. Mais le Lion vit d’admiration et de démonstrations chaleureuses que le Capricorne, réservé et pragmatique, distribue au compte-gouttes, le laissant se sentir mal aimé face à cette pudeur austère. Une consultation de voyance amoureuse aide le couple Lion-Capricorne à traduire l’amour discret du Capricorne dans les gestes chaleureux dont le Lion a besoin.',
    dynamique:
      'Lion et Capricorne sont deux signes de pouvoir qui visent le sommet par des chemins opposés : le Lion par la gloire et le rayonnement, le Capricorne par la stratégie et l’endurance. L’attirance naît d’une reconnaissance mutuelle — chacun sent chez l’autre une puissance et une ambition à sa hauteur. Le Lion admire la solidité imperturbable du Capricorne, qui finit toujours par arriver ; le Capricorne est fasciné par le charisme du Lion, qui obtient par la présence ce que lui obtient par l’effort. En couple, ils peuvent former une dynastie redoutable — l’image et la structure, la façade et les fondations. Mais le Lion a besoin de chaleur et d’admiration démonstratives que le Capricorne, réservé et pragmatique, peine à offrir.',
    forces:
      'Une ambition partagée qui force le respect mutuel, une loyauté solide, et une complémentarité de pouvoir : le charisme du Lion ouvre les portes que la persévérance du Capricorne franchit. Ensemble, ils construisent un statut et un patrimoine qui durent.',
    defis:
      'La chaleur : le Lion vit d’admiration et de démonstrations que le Capricorne, pudique et austère, distribue au compte-gouttes. Le Lion peut se sentir mal aimé face à cette réserve ; le Capricorne peut trouver le Lion trop gourmand en reconnaissance et trop dépensier pour son goût de l’épargne.',
    conseil:
      'Capricorne : votre Lion a besoin de mots et de gestes chaleureux que votre pudeur retient — faites l’effort, ils comptent plus pour lui que toute la sécurité que vous bâtissez. Lion : reconnaissez que l’amour du Capricorne se prouve dans les actes et l’engagement, pas dans les grandes déclarations.',
    faq: [
      {
        q: 'Lion et Capricorne : l’ambition les unit-elle ?',
        a: 'Elle est leur meilleur terrain d’entente. Deux signes de pouvoir qui visent le sommet — le Lion par la gloire, le Capricorne par la stratégie — se reconnaissent et se respectent profondément. Ensemble, ils forment un couple ambitieux qui construit statut et patrimoine. Le fossé se creuse dans l’intimité : le Lion a besoin d’une chaleur démonstrative que le Capricorne, réservé, exprime rarement. C’est là que le couple se joue.',
      },
      {
        q: 'Pourquoi le Lion se sent-il mal aimé par le Capricorne ?',
        a: 'Parce que le Capricorne aime en silence et en actes, quand le Lion a besoin de le voir et de l’entendre. Le Capricorne sécurise l’avenir, tient ses engagements, reste fidèle — et considère cela comme une déclaration permanente. Le Lion, lui, attend des compliments, des gestes, une admiration exprimée. Sans traduction, le Lion se sent froid dans une relation pourtant solide, et le Capricorne se sent incompris malgré son dévouement réel.',
      },
      {
        q: 'Ce couple peut-il bâtir sur le long terme ?',
        a: 'Oui, et souvent avec panache. Leur ambition commune et leur loyauté en font des bâtisseurs efficaces — le Lion ouvre les portes par son charisme, le Capricorne les franchit par sa constance. Le patrimoine et le statut suivent. La longévité du couple dépend d’un seul facteur : que le Capricorne apprenne à réchauffer sa réserve et que le Lion reconnaisse la valeur des preuves d’amour discrètes. Le reste, ils le construisent naturellement.',
      },
    ],
  },
  {
    slug: 'scorpion-sagittaire',
    signA: 'Scorpion',
    signB: 'Sagittaire',
    score: 3,
    titre: 'La profondeur et l’envol, voisins contrastés',
    answerCapsule:
      'La compatibilité amoureuse entre le Scorpion et le Sagittaire mêle la profondeur et l’envol, notée 3 sur 5. Voisins du zodiaque respirant à des altitudes opposées, les abysses et le grand ciel : le Scorpion plonge dans l’intensité, le secret, la fusion ; le Sagittaire s’élance vers la liberté et l’aventure. L’attirance mêle fascination et défi — le Scorpion intrigué par cet optimisme insaisissable, le Sagittaire retenu par cette profondeur magnétique. L’intensité de l’un donne du poids à la légèreté de l’autre, dont la franchise totale rassure paradoxalement le Scorpion méfiant. Mais son besoin de contrôle et d’exclusivité se heurte frontalement à la liberté du Sagittaire — cercle vicieux où la jalousie étouffe et l’indépendance ravive la méfiance —, et la franchise sans filtre grave des cicatrices que l’autre a déjà oubliées. Une consultation de voyance amoureuse aide le couple Scorpion-Sagittaire à échanger le contrôle contre la confiance.',
    dynamique:
      'Scorpion et Sagittaire sont voisins du zodiaque mais respirent à des altitudes opposées : les abysses et le grand ciel. Le Scorpion plonge dans l’intensité, le secret, la fusion ; le Sagittaire s’élance vers la liberté, la lumière, l’aventure. L’attirance mêle fascination et défi : le Scorpion est intrigué par cet optimisme insaisissable qui ne se laisse pas posséder, le Sagittaire par cette profondeur magnétique qui le retient. Le Scorpion apporte l’intensité qui donne du poids à la légèreté du Sagittaire ; le Sagittaire apporte l’air et l’espoir qui aèrent les profondeurs du Scorpion. Mais le besoin de contrôle et d’exclusivité du Scorpion se heurte frontalement au besoin de liberté du Sagittaire — et la franchise brute de l’un rencontre la susceptibilité secrète de l’autre.',
    forces:
      'Une fascination mutuelle qui interdit l’ennui, une complémentarité réelle — l’un approfondit, l’autre élargit —, et une honnêteté partagée : le Sagittaire dit tout franchement, ce qui rassure paradoxalement le Scorpion méfiant qui déteste les cachotteries.',
    defis:
      'Liberté contre contrôle : la jalousie possessive du Scorpion étouffe le Sagittaire, dont l’indépendance active la méfiance du Scorpion — cercle vicieux classique. La franchise sans filtre du Sagittaire heurte l’orgueil secret du Scorpion, qui n’oublie pas les blessures que l’autre a déjà oubliées.',
    conseil:
      'Scorpion : lâchez le contrôle, votre Sagittaire ne se retient pas, il se donne à qui ne l’enferme pas — votre confiance est la seule chaîne qui le garde. Sagittaire : mesurez votre franchise avec ce signe qui grave tout ; une vérité lancée sans tact peut laisser une cicatrice durable.',
    faq: [
      {
        q: 'Scorpion et Sagittaire peuvent-ils s’accorder ?',
        a: 'C’est une combinaison contrastée mais fascinante. Voisins du zodiaque, le Scorpion des profondeurs et le Sagittaire des grands espaces s’attirent par leur différence même. La complémentarité est réelle — l’un donne du poids, l’autre de l’air — mais le choc entre le besoin de contrôle du Scorpion et le besoin de liberté du Sagittaire est le nœud de la relation. Elle tient quand le Scorpion fait confiance et le Sagittaire fait attention.',
      },
      {
        q: 'La jalousie du Scorpion pose-t-elle problème au Sagittaire ?',
        a: 'C’est le principal point de friction. Le Sagittaire a un besoin viscéral de liberté et d’espace ; la jalousie possessive du Scorpion la vit comme une menace permanente et cherche à contrôler. Mais plus le Scorpion enferme, plus le Sagittaire s’échappe, ce qui aggrave la méfiance. Le Scorpion doit comprendre que la liberté donnée est ce qui garde le Sagittaire, quand la surveillance est ce qui le fait fuir.',
      },
      {
        q: 'La franchise du Sagittaire blesse-t-elle le Scorpion ?',
        a: 'Souvent, et durablement. Le Sagittaire dit les vérités sans emballage ni calcul, avec une bonne foi désarmante — mais le Scorpion, orgueilleux et à la mémoire longue, grave les mots qui touchent. Là où le Sagittaire aura oublié sa remarque en une heure, le Scorpion la remâchera des semaines. Le Sagittaire gagne à mesurer sa franchise avec ce partenaire ; sa sincérité, appréciée sur le fond, doit soigner la forme.',
      },
    ],
  },
  {
    slug: 'sagittaire-capricorne',
    signA: 'Sagittaire',
    signB: 'Capricorne',
    score: 3,
    titre: 'L’explorateur et le bâtisseur, voisins opposés',
    answerCapsule:
      'La compatibilité amoureuse entre le Sagittaire et le Capricorne oppose l’explorateur et le bâtisseur, notée 3 sur 5. Voisins du zodiaque aux rapports inverses à la vie, l’envol et l’enracinement, le pari et le plan : le Sagittaire vise l’horizon et croit en la chance, le Capricorne bâtit pierre à pierre et se méfie du hasard. Le Sagittaire est séduit par la solidité qui donne un cadre à ses rêves, le Capricorne par l’optimisme qui allège son sérieux. Ils se complètent admirablement — la vision et la méthode, l’élan et l’endurance — ou se bloquent : le Capricorne freine ce que le Sagittaire veut lancer, le Sagittaire déstabilise ce que le Capricorne veut sécuriser. Faire de leurs différences une division du travail les réconcilie. Une consultation de voyance amoureuse aide le couple Sagittaire-Capricorne à réaliser ensemble de grandes choses que ni l’un ni l’autre n’oserait seul.',
    dynamique:
      'Sagittaire et Capricorne sont voisins du zodiaque et incarnent deux rapports opposés à la vie : l’envol et l’enracinement, le pari et le plan. Le Sagittaire vise l’horizon, prend des risques, croit en la chance ; le Capricorne bâtit pierre à pierre, calcule, se méfie du hasard. Le Sagittaire est d’abord séduit par la solidité et l’ambition du Capricorne, qui donne un cadre à ses rêves ; le Capricorne est attiré par l’optimisme et l’audace du Sagittaire, qui allègent son sérieux. En couple, ils peuvent se compléter admirablement — la vision et la méthode, l’élan et l’endurance — ou se bloquer : le Capricorne freine ce que le Sagittaire veut lancer, le Sagittaire déstabilise ce que le Capricorne veut sécuriser. Entre prudence et audace, le dialogue est un apprentissage.',
    forces:
      'Une complémentarité stratégique : la vision aventureuse du Sagittaire ouvre des horizons que la méthode du Capricorne concrétise. Le Capricorne ancre le Sagittaire, le Sagittaire allège le Capricorne. Ensemble, ils peuvent réaliser de grandes choses que ni l’un ni l’autre n’oserait seul.',
    defis:
      'Prudence contre audace : le Capricorne vit le Sagittaire comme un risque permanent, le Sagittaire vit le Capricorne comme un frein rabat-joie. L’un veut sécuriser, l’autre veut oser. Le besoin de liberté du Sagittaire se heurte au besoin de contrôle et de structure du Capricorne.',
    conseil:
      'Faites de vos différences une division du travail : au Sagittaire d’ouvrir les horizons et de repérer les opportunités, au Capricorne de bâtir et de sécuriser. Capricorne : ne bridez pas tous les élans, certains paris de votre Sagittaire sont justes. Sagittaire : respectez la prudence de votre Capricorne, elle protège vos rêves.',
    faq: [
      {
        q: 'Sagittaire et Capricorne sont-ils compatibles ?',
        a: 'Ils forment un couple d’opposition constructive. Voisins du zodiaque, l’explorateur Sagittaire et le bâtisseur Capricorne s’attirent par ce qui leur manque : l’un rêve d’ancrage, l’autre d’évasion. Bien géré, ce contraste devient une complémentarité puissante — vision plus méthode. Mal géré, il tourne au bras de fer entre l’audace et la prudence. Tout dépend de leur capacité à voir la différence comme une richesse, pas un obstacle.',
      },
      {
        q: 'Le Capricorne freine-t-il trop le Sagittaire ?',
        a: 'C’est le risque central du couple. Le Capricorne, prudent et méthodique, veut sécuriser avant d’agir, ce que le Sagittaire, impatient d’explorer, vit comme un frein permanent et décourageant. Mais cette prudence protège aussi le Sagittaire de ses paris hasardeux. L’équilibre : que le Capricorne laisse passer les élans justes et que le Sagittaire reconnaisse quand la prudence du Capricorne lui évite une chute.',
      },
      {
        q: 'Que peuvent construire ensemble ces deux signes ?',
        a: 'Beaucoup, s’ils conjuguent leurs forces au lieu de les opposer. Le Sagittaire apporte la vision, l’audace, le flair des opportunités ; le Capricorne apporte la stratégie, la discipline et l’endurance qui transforment un rêve en réalité durable. Séparément, l’un se disperse et l’autre s’enferme ; ensemble, ils peuvent accomplir des projets ambitieux — voyages, entreprise, patrimoine — que ni l’explorateur ni le bâtisseur n’aurait menés seul.',
      },
    ],
  },
  {
    slug: 'capricorne-verseau',
    signA: 'Capricorne',
    signB: 'Verseau',
    score: 3,
    titre: 'La tradition et l’avenir, voisins de Saturne',
    answerCapsule:
      'La compatibilité amoureuse entre le Capricorne et le Verseau confronte la tradition et l’avenir, notée 3 sur 5. Voisins du zodiaque et de maîtrise saturnienne dans la tradition astrologique, l’un regarde vers la structure, l’autre vers la rupture : le Capricorne bâtit sur des fondations éprouvées et respecte les règles, le Verseau invente, transgresse et refuse les hiérarchies. Le Capricorne est intrigué par l’originalité brillante qui le sort de son conformisme, le Verseau respecte la solidité qui donne corps à ses idées, et leur méthode au service de l’innovation peut faire une équipe fascinante. Mais l’engagement classique rassure l’un et effraie l’autre, et deux réserves émotionnelles réunies produisent une relation d’estime où la chaleur manque cruellement. Une consultation de voyance amoureuse aide le couple Capricorne-Verseau à inventer une forme d’engagement à la fois durable et libre, et à forcer la tendresse explicite.',
    dynamique:
      'Capricorne et Verseau sont voisins du zodiaque et partagent une maîtrise saturnienne dans la tradition astrologique — mais l’un regarde vers le passé et la structure, l’autre vers le futur et la rupture. Le Capricorne bâtit sur les fondations éprouvées, respecte les règles, gravit l’échelle ; le Verseau invente, transgresse, refuse les hiérarchies. Le Capricorne est intrigué par l’originalité brillante du Verseau, qui le sort de son conformisme ; le Verseau respecte la solidité du Capricorne, qui donne corps à ses idées. En couple, ils peuvent former une équipe fascinante — la structure au service de l’innovation — ou se heurter : le Capricorne veut la sécurité et l’engagement classique, le Verseau la liberté et les fonctionnements atypiques. Deux réserves émotionnelles se font aussi face, chacun peinant à réchauffer l’autre.',
    forces:
      'Un respect intellectuel mutuel, une complémentarité rare — la méthode du Capricorne concrétise les visions d’avant-garde du Verseau —, et une loyauté sérieuse des deux côtés. Ni l’un ni l’autre ne joue avec les sentiments : quand ils s’engagent, c’est solidement.',
    defis:
      'Tradition contre rupture : le Capricorne veut construire selon les règles, le Verseau veut les réinventer. L’engagement classique rassure l’un et effraie l’autre. Et deux réserves émotionnelles réunies produisent une relation d’estime où la chaleur et l’expression des sentiments peuvent cruellement manquer.',
    conseil:
      'Capricorne : lâchez du lest sur les conventions, votre Verseau a besoin d’inventer sa propre forme d’engagement — atypique ne veut pas dire moins solide. Verseau : rassurez votre Capricorne sur la durabilité du lien, sa sécurité affective passe par des repères stables. Et forcez-vous tous deux à la tendresse explicite.',
    faq: [
      {
        q: 'Capricorne et Verseau peuvent-ils s’entendre ?',
        a: 'Oui, sur la base d’un respect intellectuel mutuel et d’une complémentarité originale. Voisins du zodiaque, liés par Saturne dans la tradition, ils regardent pourtant dans des directions opposées : le Capricorne vers la structure éprouvée, le Verseau vers l’innovation. Bien conjugués, la méthode de l’un sert la vision de l’autre. Le défi tient à l’engagement — classique pour le Capricorne, réinventé pour le Verseau — et à la réserve émotionnelle commune.',
      },
      {
        q: 'L’engagement est-il un problème pour ce couple ?',
        a: 'C’est un terrain de négociation clé. Le Capricorne aspire à un engagement classique, structuré et sécurisant ; le Verseau fuit les formes conventionnelles et veut inventer ses propres règles. Le malentendu : le Capricorne peut prendre l’originalité du Verseau pour un manque de sérieux, alors que la loyauté du Verseau est réelle, simplement exprimée autrement. Le couple tient quand il construit un engagement sur mesure, solide mais non conformiste.',
      },
      {
        q: 'Ce couple manque-t-il de chaleur ?',
        a: 'C’est son risque principal. Le Capricorne est pudique par sérieux, le Verseau distant par principe d’indépendance : réunis, ils peuvent former une relation d’estime et de complicité intellectuelle où la tendresse et l’expression des sentiments s’atrophient. Aucun des deux ne fait spontanément le premier geste chaleureux. Les couples qui s’épanouissent instaurent délibérément des rituels d’affection, contre leur double réserve, pour que l’estime devienne un amour incarné.',
      },
    ],
  },
  {
    slug: 'verseau-poissons',
    signA: 'Verseau',
    signB: 'Poissons',
    score: 3,
    titre: 'L’idéaliste et le mystique, les derniers du zodiaque',
    answerCapsule:
      'La compatibilité amoureuse entre le Verseau et les Poissons ferme le zodiaque, notée 3 sur 5 : deux voisins des confins où l’individu se dissout dans le grand tout, l’un par l’esprit, l’autre par le cœur. Le Verseau rêve d’un monde meilleur avec ses idées et ses causes, les Poissons le rêvent avec leur âme et leur compassion — deux idéalistes profondément humains, terrain de rencontre rare et touchant. Le Verseau est intrigué par la profondeur intuitive qui atteint ce que sa raison ne saisit pas, les Poissons fascinés par sa vision et sa liberté. Mais son détachement cérébral peine à combler leur besoin de fusion : le Verseau raisonne quand les Poissons ressentent, et ni l’un ni l’autre n’ancre solidement le quotidien. Une consultation de voyance amoureuse aide le couple Verseau-Poissons à descendre de la tête au cœur et à combler son angle mort commun, le concret.',
    dynamique:
      'Verseau et Poissons ferment le zodiaque, voisins des confins où l’individu se dissout dans le grand tout — mais l’un par l’esprit, l’autre par le cœur. Le Verseau rêve d’un monde meilleur avec sa tête, ses idées, ses causes ; les Poissons rêvent le monde avec leur âme, leur compassion, leur imaginaire. Les deux sont des idéalistes profondément humains, tournés vers plus grand qu’eux — un terrain de rencontre rare et touchant. Le Verseau est intrigué par la profondeur émotionnelle et intuitive des Poissons, qui atteint ce que sa raison ne saisit pas ; les Poissons sont fascinés par la vision et la liberté du Verseau. Mais le détachement cérébral de l’un peine à combler le besoin de fusion émotionnelle de l’autre : le Verseau raisonne quand les Poissons ressentent.',
    forces:
      'Un idéalisme partagé, une ouverture et une tolérance mutuelles rares, une créativité commune tournée vers plus grand qu’eux, et une absence totale de mesquinerie. Deux signes qui aiment l’humanité et se retrouvent dans cet élan désintéressé.',
    defis:
      'Tête contre cœur : le Verseau intellectualise les émotions que les Poissons vivent à fleur de peau, et son détachement peut laisser les Poissons affamés de fusion et de tendresse. Deux signes peu ancrés dans le concret, aucun ne gère solidement le quotidien — la vie matérielle peut dériver.',
    conseil:
      'Verseau : votre Poissons a besoin de fusion émotionnelle et de présence sensible, pas seulement de complicité d’idées — descendez de la tête au cœur. Poissons : n’attendez pas de votre Verseau la démonstration qu’il ne sait pas donner, apprenez à lire sa loyauté discrète. Et ancrez ensemble le concret, votre angle mort commun.',
    faq: [
      {
        q: 'Verseau et Poissons sont-ils compatibles ?',
        a: 'Ils partagent un bel idéalisme et une ouverture rare, ce qui crée une connexion sincère et tolérante. Voisins des confins du zodiaque, tous deux tournés vers plus grand qu’eux, ils se rejoignent dans l’élan vers l’humanité. Le défi est le registre : le Verseau vit dans les idées, les Poissons dans les émotions. Le couple tient quand le Verseau apprend la tendresse sensible et les Poissons acceptent la loyauté discrète du Verseau.',
      },
      {
        q: 'Le détachement du Verseau blesse-t-il les Poissons ?',
        a: 'C’est le point sensible du couple. Les Poissons ont besoin de fusion, de tendresse démonstrative et de présence émotionnelle ; le Verseau exprime son amour par la complicité intellectuelle et la loyauté, rarement par les gestes fusionnels. Les Poissons peuvent alors se sentir seuls dans une relation pourtant sincère. Le Verseau doit faire l’effort conscient de descendre de la tête au cœur pour combler la soif d’intimité émotionnelle de son partenaire.',
      },
      {
        q: 'Qui gère le concret dans ce couple d’idéalistes ?',
        a: 'C’est leur angle mort commun. Ni le Verseau, tourné vers les idées et le futur, ni les Poissons, tournés vers le rêve et l’émotion, ne sont naturellement doués pour l’intendance — factures, décisions pratiques, organisation. La vie matérielle peut dériver faute de pilote. Les couples qui durent en prennent conscience tôt et s’organisent : partage explicite des tâches, automatisation, ou délégation, pour que leur bel idéalisme ne se fracasse pas sur le réel.',
      },
    ],
  },
  {
    slug: 'belier-vierge',
    signA: 'Bélier',
    signB: 'Vierge',
    score: 2,
    titre: 'Le fonceur et la perfectionniste, quinconce exigeant',
    answerCapsule:
      'La compatibilité amoureuse entre le Bélier et la Vierge est l’une des plus délicates du zodiaque, en quinconce — un angle sans harmonie naturelle. Le Bélier de Feu fonce, tranche et déteste attendre ; la Vierge de Terre analyse, corrige et redoute l’erreur. L’attirance existe — le Bélier admire la fiabilité de la Vierge, la Vierge la vitalité du Bélier — mais le quotidien confronte l’impulsivité à la méthode, d’où une note de 2 sur 5. Le Bélier vit les remarques de la Vierge comme des freins, la Vierge vit la précipitation du Bélier comme de l’imprudence. Pour tenir, le Bélier doit gagner en patience et la Vierge lâcher du contrôle, chacun voyant la différence comme un complément. Une consultation de voyance amoureuse peut révéler si votre couple Bélier-Vierge a le potentiel d’un vrai équilibre.',
    dynamique:
      'Bélier et Vierge forment un quinconce, cet angle qui n’offre aucun terrain commun naturel et demande tout à l’ajustement. Le Bélier vit dans l’élan, l’instinct, l’action immédiate ; la Vierge dans l’analyse, la prudence, le détail maîtrisé. L’un décide en une seconde, l’autre pèse chaque option. Le Bélier est d’abord rassuré par la fiabilité tranquille de la Vierge, qui structure son chaos ; la Vierge est stimulée par l’audace du Bélier, qui la sort de ses inquiétudes. Mais la vie commune révèle un fossé de rythme et de tempérament : la Vierge freine ce que le Bélier veut lancer, le Bélier bouscule ce que la Vierge veut peaufiner. C’est une relation d’apprentissage mutuel où rien n’est spontanément fluide.',
    forces:
      'Une complémentarité possible : la Vierge apporte la méthode et la finition qui manquent au Bélier, le Bélier apporte l’élan et le courage qui débloquent la Vierge. Ensemble, ils peuvent transformer une idée en réalisation aboutie — l’impulsion et la précision réunies.',
    defis:
      'Le rythme et la critique : l’impatience du Bélier se heurte à la minutie de la Vierge, dont les remarques perfectionnistes blessent l’ego du Bélier. L’un trouve l’autre imprudent, l’autre le trouve tatillon. Deux façons de fonctionner presque opposées à réconcilier consciemment.',
    conseil:
      'Bélier : les remarques de votre Vierge visent à aider, pas à rabaisser — écoutez avant de vous braquer. Vierge : votre Bélier a besoin d’encouragement, pas de corrections permanentes ; valorisez son élan et gardez vos suggestions pour l’essentiel.',
    faq: [
      {
        q: 'Bélier et Vierge sont-ils vraiment incompatibles ?',
        a: 'C’est l’une des combinaisons les plus exigeantes du zodiaque, en quinconce — un angle qui n’offre aucun point d’accord spontané. Le Feu impulsif du Bélier et la Terre méthodique de la Vierge fonctionnent à des rythmes opposés. Difficile ne veut pas dire impossible : les couples qui réussissent transforment cette différence en complémentarité, le Bélier gagnant en patience et la Vierge en souplesse. Mais cela demande un effort conscient et permanent des deux côtés.',
      },
      {
        q: 'Pourquoi la Vierge agace-t-elle le Bélier ?',
        a: 'Parce que la Vierge analyse, nuance et suggère des améliorations, là où le Bélier veut agir tout de suite et être approuvé. Ce que la Vierge vit comme une aide précieuse, le Bélier le reçoit comme un frein permanent et une critique de son jugement. Son ego, sensible, supporte mal d’être corrigé. La Vierge doit apprendre à encourager avant de suggérer, et à réserver ses remarques aux enjeux qui comptent vraiment.',
      },
      {
        q: 'Comment ce couple peut-il fonctionner malgré tout ?',
        a: 'En répartissant les rôles selon leurs forces : au Bélier l’initiative, le démarrage, l’audace ; à la Vierge la finition, l’organisation, la fiabilité. Le Bélier doit accepter que la prudence de la Vierge lui évite des erreurs, la Vierge que l’élan du Bélier la sort de la paralysie. Quand chacun cesse de vouloir convertir l’autre à son rythme, le quinconce devient une équipe où l’impulsion et la précision se complètent.',
      },
    ],
  },
  {
    slug: 'taureau-balance',
    signA: 'Taureau',
    signB: 'Balance',
    score: 3,
    titre: 'Les deux enfants de Vénus, même déesse, deux amours',
    answerCapsule:
      'La compatibilité amoureuse entre le Taureau et la Balance réunit les deux signes gouvernés par Vénus, la planète de l’amour et de la beauté. Le Taureau vit Vénus dans la Terre — sensualité, confort, possession ; la Balance la vit dans l’Air — esthétique, harmonie, relation. Ils partagent le goût du beau et du raffinement, mais un quinconce les sépare sur le tempo et les besoins, d’où une note de 3 sur 5. Le Taureau cherche la sécurité et l’exclusivité, la Balance la légèreté sociale et le dialogue. Le Taureau possessif s’inquiète de la sociabilité de la Balance, qui étouffe sous la routine casanière du Taureau. Pour durer, chacun offre à l’autre un peu de son monde : de l’ancrage pour la Balance, de la vie sociale pour le Taureau. Une consultation éclaire votre couple Taureau-Balance et ses affinités vénusiennes.',
    dynamique:
      'Taureau et Balance partagent la même planète maîtresse, Vénus, mais l’expriment de façons opposées : l’un dans la Terre, l’autre dans l’Air. Le Taureau aime avec ses sens — le toucher, le confort, la possession tranquille ; la Balance aime avec son esprit — la conversation, l’élégance, l’harmonie relationnelle. Ils se reconnaissent sur le terrain du beau : tous deux apprécient l’art, le raffinement, une belle table. Mais le quinconce entre eux crée un décalage de rythme et de besoins. Le Taureau veut construire un nid stable et exclusif ; la Balance veut une vie sociale ouverte et un dialogue permanent. Leur amour vénusien est réel, mais il navigue entre le besoin de sécurité de l’un et le besoin de légèreté de l’autre.',
    forces:
      'Un amour commun du beau, du raffinement et du plaisir esthétique, une douceur mutuelle — ni l’un ni l’autre n’aime le conflit brutal —, et une sensualité que le Taureau approfondit et que la Balance sublime. Deux Vénus qui savent créer un cadre de vie agréable.',
    defis:
      'Sécurité contre sociabilité : le Taureau possessif supporte mal le besoin de vie sociale et de séduction de la Balance, qui étouffe sous la routine casanière du Taureau. L’indécision de la Balance agace le Taureau qui, une fois décidé, ne comprend pas qu’on hésite encore.',
    conseil:
      'Taureau : lâchez du lest sur la vie sociale de votre Balance, sa sociabilité n’est pas une menace mais son oxygène. Balance : offrez à votre Taureau des repères stables et de l’exclusivité affective, cette sécurité lui permet de vous laisser respirer.',
    faq: [
      {
        q: 'Taureau et Balance, tous deux gouvernés par Vénus, sont-ils compatibles ?',
        a: 'Leur planète commune, Vénus, leur donne un vrai terrain d’entente — l’amour du beau, du raffinement et de la douceur — mais ne suffit pas à les accorder. Le Taureau vit Vénus dans la Terre (sensualité, sécurité), la Balance dans l’Air (esthétique, relation). Le quinconce entre eux crée un décalage de tempo et de besoins. L’attrait esthétique est réel ; l’harmonie durable demande que chacun respecte le mode d’amour opposé de l’autre.',
      },
      {
        q: 'Pourquoi le Taureau est-il jaloux de la Balance ?',
        a: 'Parce que la Balance est sociable, charmeuse et a besoin d’un large cercle relationnel pour s’épanouir — exactement ce qui active la possessivité du Taureau. Le Taureau associe l’amour à l’exclusivité et à la sécurité ; voir sa Balance séduire et multiplier les contacts l’inquiète. Le malentendu est réel : la Balance a besoin de plaire socialement sans que cela menace le couple. Le Taureau doit apprendre à distinguer la sociabilité de l’infidélité.',
      },
      {
        q: 'Comment ce couple vénusien trouve-t-il son équilibre ?',
        a: 'En échangeant un peu de leurs mondes. La Balance offre au Taureau l’exclusivité affective et les repères stables qui apaisent sa possessivité ; le Taureau accorde à la Balance la liberté sociale et le dialogue dont elle a besoin. Leur amour commun du beau — sorties culturelles, belle maison, plaisirs partagés — est le ciment naturel. Quand chacun cesse d’imposer son rythme, leur double héritage vénusien crée un couple raffiné et sensuel.',
      },
    ],
  },
  {
    slug: 'gemeaux-poissons',
    signA: 'Gémeaux',
    signB: 'Poissons',
    score: 2,
    titre: 'L’esprit et le rêve, deux signes doubles en quinconce',
    answerCapsule:
      'La compatibilité amoureuse entre le Gémeaux et les Poissons unit les deux signes « doubles » du zodiaque — les Gémeaux et leurs deux visages, les Poissons et leurs deux poissons — mais en quinconce, sans harmonie naturelle. Le Gémeaux vit dans le mental, l’Air, les mots ; les Poissons dans l’émotion, l’Eau, l’intuition. L’attirance est celle d’une fascination mutuelle : le Gémeaux est intrigué par la profondeur insaisissable des Poissons, les Poissons par la vivacité brillante du Gémeaux. Mais leurs langages diffèrent trop, d’où une note de 2 sur 5. Le Gémeaux analyse ce que les Poissons ressentent ; sa légèreté peut blesser leur hypersensibilité. Pour tenir, le Gémeaux doit descendre vers l’émotion et les Poissons accepter la nature cérébrale du Gémeaux. Une guidance de voyance amoureuse peut clarifier ce que votre couple Gémeaux-Poissons peut réellement construire.',
    dynamique:
      'Gémeaux et Poissons sont les deux signes doubles du zodiaque, et pourtant tout les sépare : l’Air mental contre l’Eau émotionnelle, en quinconce sans terrain commun. Le Gémeaux vit dans les idées, la parole, le mouvement ; les Poissons dans le ressenti, le rêve, l’intuition. Le Gémeaux est fasciné par cette profondeur insaisissable qu’il ne sait pas produire ; les Poissons sont charmés par cette vivacité qui les amuse et les distrait de leur mélancolie. Leur rencontre a quelque chose de magique et de flou à la fois. Mais le quotidien confronte deux fonctionnements presque étrangers : le Gémeaux met des mots et de la distance là où les Poissons veulent de la fusion et du silence habité. Chacun demande à l’autre ce qu’il ne sait pas donner.',
    forces:
      'Une imagination commune et une adaptabilité rare — deux signes mutables qui épousent les circonstances —, une fascination mutuelle qui interdit l’ennui, et une créativité partagée : le mental du Gémeaux et l’imaginaire des Poissons peuvent produire de belles choses ensemble.',
    defis:
      'Le fossé tête-cœur : le Gémeaux intellectualise et prend de la distance quand les Poissons ont besoin de fusion émotionnelle ; sa légèreté et son ironie blessent leur hypersensibilité. Deux signes fuyants, aucun n’ancre le couple ni ne gère solidement le concret.',
    conseil:
      'Gémeaux : vos Poissons ne cherchent pas un débat mais une présence sensible — posez le mental et offrez de l’émotion vraie. Poissons : ne prenez pas la légèreté du Gémeaux pour de l’indifférence, c’est sa nature ; dites clairement vos besoins au lieu de vous replier dans le flou.',
    faq: [
      {
        q: 'Gémeaux et Poissons peuvent-ils s’accorder ?',
        a: 'C’est une combinaison difficile, en quinconce, entre deux signes doubles qui fonctionnent pourtant à l’opposé : le mental du Gémeaux et l’émotion des Poissons. La fascination mutuelle est réelle et l’imagination partagée crée un lien, mais leurs langages diffèrent profondément. Les couples qui réussissent sont ceux où le Gémeaux apprend à ressentir et les Poissons à accepter la nature cérébrale de leur partenaire. Sans cet effort, chacun se sent incompris.',
      },
      {
        q: 'Pourquoi la légèreté du Gémeaux blesse-t-elle les Poissons ?',
        a: 'Parce que les Poissons ressentent tout à une intensité extrême, et que l’humour, l’ironie et le détachement du Gémeaux leur semblent minimiser leurs émotions. Quand les Poissons partagent une peine et que le Gémeaux répond par une pirouette ou une analyse, ils entendent « tes sentiments ne comptent pas ». Le Gémeaux ne méprise pas, il est démuni face à l’émotion pure et fuit dans le mental. Nommer ce mécanisme évite bien des malentendus.',
      },
      {
        q: 'Qui ancre le couple entre le Gémeaux et les Poissons ?',
        a: 'C’est leur difficulté majeure : personne spontanément. Le Gémeaux vit dans les idées, les Poissons dans le rêve — ni l’un ni l’autre n’est doué pour le concret, l’organisation ou les décisions fermes. La vie matérielle peut vite dériver. Les couples qui durent en prennent conscience et s’organisent délibérément : partage des tâches, repères fixes, ou aide extérieure, pour que leur bel imaginaire commun ne se dissolve pas dans le désordre du quotidien.',
      },
    ],
  },
  {
    slug: 'cancer-balance',
    signA: 'Cancer',
    signB: 'Balance',
    score: 2,
    titre: 'Le foyer et le salon, carré cardinal',
    answerCapsule:
      'La compatibilité amoureuse entre le Cancer et la Balance oppose deux besoins d’harmonie qui ne se rejoignent pas. Ces deux signes cardinaux forment un carré, angle de tension : le Cancer d’Eau cherche l’intimité du foyer et la sécurité émotionnelle, la Balance d’Air cherche la vie sociale et l’équilibre relationnel. Tous deux détestent le conflit, ce qui crée une douceur de surface, mais aussi une note de 2 sur 5, car les non-dits s’accumulent. Le Cancer veut rester à deux dans le cocon, la Balance veut sortir et recevoir ; le Cancer vit les besoins sociaux de la Balance comme un abandon, la Balance vit le repli du Cancer comme une contrainte. Pour durer, chacun doit nommer ses besoins au lieu de bouder poliment. Une consultation peut éclairer si votre carré Cancer-Balance mène à un équilibre ou à une distance silencieuse.',
    dynamique:
      'Cancer et Balance sont deux signes cardinaux en carré, unis par une même horreur du conflit mais séparés par des besoins opposés. Le Cancer, signe d’Eau gouverné par la Lune, cherche le foyer, l’intimité, la sécurité affective — l’amour comme un refuge. La Balance, signe d’Air gouverné par Vénus, cherche l’harmonie sociale, le dialogue, la beauté des relations — l’amour comme un art de vivre à plusieurs. Le Cancer est d’abord séduit par la grâce et la douceur de la Balance ; la Balance par la tendresse enveloppante du Cancer. Mais le quotidien révèle la tension du carré : le Cancer veut rester blotti à deux, la Balance veut ouvrir les portes et recevoir. Deux façons d’aimer qui se frôlent sans se rencontrer vraiment.',
    forces:
      'Une même douceur et un même refus de la brutalité, un souci sincère du bien-être de l’autre, et une esthétique de vie partagée : tous deux aiment un foyer beau et accueillant. Quand ils s’accordent, ils créent une maison chaleureuse et élégante.',
    defis:
      'Le carré des besoins : intimité contre sociabilité, cocon contre salon. Deux signes qui fuient le conflit taisent leurs frustrations jusqu’à la distance. Le Cancer boude quand la Balance sort, la Balance se sent enfermée quand le Cancer se replie — et personne n’ose le dire.',
    conseil:
      'Cancer : les besoins sociaux de votre Balance ne sont pas un rejet de vous — accompagnez-la parfois au lieu de bouder. Balance : rassurez votre Cancer par des moments d’intimité exclusive avant de vous tourner vers le monde. Et osez tous deux nommer ce qui fâche.',
    faq: [
      {
        q: 'Cancer et Balance forment-ils un bon couple ?',
        a: 'C’est un couple délicat, en carré cardinal. Le Cancer et la Balance partagent la douceur et l’horreur du conflit, mais leurs besoins s’opposent : intimité du foyer contre vie sociale, sécurité émotionnelle contre harmonie relationnelle. La note de 2 sur 5 reflète cette tension. La relation peut fonctionner si chacun accueille le besoin de l’autre au lieu de le vivre comme une menace — mais leur commune fuite du conflit rend le dialogue franc particulièrement difficile.',
      },
      {
        q: 'Pourquoi le Cancer se sent-il délaissé par la Balance ?',
        a: 'Parce que la Balance a besoin de vie sociale, de sorties et d’un large cercle relationnel pour respirer, quand le Cancer rêve d’un cocon à deux. Chaque fois que la Balance se tourne vers le monde extérieur, le Cancer, hypersensible, le vit comme un abandon affectif et se replie dans sa coquille. La Balance ne délaisse pas le Cancer — elle a simplement une autre écologie affective. La réassurance régulière apaise cette blessure.',
      },
      {
        q: 'Comment ce couple gère-t-il les non-dits ?',
        a: 'Mal, par nature : deux signes qui fuient le conflit préfèrent taire leurs frustrations plutôt que de risquer une dispute. Le Cancer boude en silence, la Balance sourit poliment, et les rancunes s’accumulent sous une paix de façade jusqu’à une distance froide. La seule prévention est contre-nature pour eux : oser nommer tôt ce qui dérange, avec douceur mais franchise, avant que le non-dit ne creuse un fossé irréparable.',
      },
    ],
  },
  {
    slug: 'lion-poissons',
    signA: 'Lion',
    signB: 'Poissons',
    score: 3,
    titre: 'Le soleil et l’océan, quinconce fascinant',
    answerCapsule:
      'La compatibilité amoureuse entre le Lion et les Poissons unit deux mondes que rien ne prépare à se rencontrer : le Feu solaire et l’Eau océanique, en quinconce. Le Lion rayonne, s’affirme, veut être admiré ; les Poissons se dissolvent, s’adaptent, veulent fusionner. L’attirance est celle d’un mystère réciproque — le Lion est touché par la douceur dévouée des Poissons, les Poissons éblouis par la chaleur généreuse du Lion, d’où une note de 3 sur 5. Les Poissons offrent au Lion une admiration sans réserve et un refuge tendre ; le Lion offre aux Poissons une protection éclatante. Mais le Lion peut prendre toute la lumière, laissant les Poissons s’effacer, et sa fierté heurte leur sensibilité. Pour durer, le Lion partage la scène et les Poissons s’affirment. Une consultation peut éclairer le potentiel réel de votre couple Lion-Poissons.',
    dynamique:
      'Lion et Poissons forment un quinconce, l’angle de l’ajustement permanent, entre le Feu qui brille et l’Eau qui se répand. Le Lion, signe fixe gouverné par le Soleil, veut rayonner, mener, être adoré ; les Poissons, signe mutable gouverné par Neptune, veulent rêver, s’adapter, se fondre dans l’autre. Le Lion est ému par la tendresse dévouée des Poissons, qui l’admirent sans calcul et lui offrent un havre ; les Poissons sont éblouis par la générosité chaleureuse du Lion, qui les protège et les guide. La relation a des airs de conte — le roi et la sirène. Mais leurs natures créent un déséquilibre : le Lion accapare volontiers la lumière, les Poissons s’effacent volontiers dans l’ombre, et ce glissement peut vider le couple de sa réciprocité.',
    forces:
      'Une tendresse et une admiration mutuelles réelles, une complémentarité archétypale — la force protectrice et la douceur inspirante —, et une générosité partagée : le Lion donne avec panache, les Poissons avec compassion. Les Poissons savent aimer l’ego du Lion sans se sentir diminués, s’ils gardent leur voix.',
    defis:
      'Le déséquilibre lumière/ombre : le Lion prend la scène, les Poissons s’effacent, jusqu’à ce que la réciprocité disparaisse. La fierté et le besoin d’admiration du Lion heurtent l’hypersensibilité des Poissons, qui se blessent en silence et fuient dans le flou plutôt que d’affronter.',
    conseil:
      'Lion : partagez la lumière et valorisez vos Poissons, leur effacement n’est pas de l’humilité mais un risque pour le couple. Poissons : ne disparaissez pas derrière votre Lion, affirmez vos besoins ; il respecte bien plus une âme qui a sa propre voix qu’un miroir docile.',
    faq: [
      {
        q: 'Lion et Poissons sont-ils compatibles en amour ?',
        a: 'C’est une combinaison fascinante mais délicate, en quinconce, entre le Feu du Lion et l’Eau des Poissons. L’attirance des contraires est forte : les Poissons offrent au Lion l’admiration tendre qu’il recherche, le Lion offre aux Poissons la protection dont ils rêvent. La note de 3 sur 5 reflète le potentiel réel mais aussi le risque de déséquilibre. La relation tient si le Lion partage la lumière et si les Poissons osent exister à côté de son éclat.',
      },
      {
        q: 'Les Poissons risquent-ils de s’effacer derrière le Lion ?',
        a: 'C’est le principal danger du couple. Les Poissons, adaptables et dévoués, se fondent volontiers dans le monde de leur partenaire ; le Lion, naturellement rayonnant, occupe toute la place sans même s’en rendre compte. Le risque : des Poissons qui disparaissent peu à peu, jusqu’à une lassitude ou une tristesse silencieuse. La prévention passe par un Lion qui valorise activement ses Poissons et des Poissons qui cultivent leur propre voix et leurs propres passions.',
      },
      {
        q: 'Comment le Lion doit-il traiter la sensibilité des Poissons ?',
        a: 'Avec une délicatesse qui ne lui est pas naturelle. Le Lion est franc, démonstratif et parfois brusque dans sa fierté ; les Poissons, ultrasensibles, sont blessés par un ton dur ou une remarque désinvolte, et se réfugient alors dans le silence ou le flou. Le Lion gagne à adoucir sa manière, à rassurer souvent, et à comprendre que la vulnérabilité des Poissons n’est pas une faiblesse mais leur façon d’aimer profondément.',
      },
    ],
  },
  {
    slug: 'vierge-sagittaire',
    signA: 'Vierge',
    signB: 'Sagittaire',
    score: 2,
    titre: 'La loupe et la longue-vue, carré mutable',
    answerCapsule:
      'La compatibilité amoureuse entre la Vierge et le Sagittaire oppose deux façons de regarder le monde : la loupe et la longue-vue. Ces deux signes mutables forment un carré, angle de friction stimulante : la Vierge de Terre observe le détail, planifie, perfectionne ; le Sagittaire de Feu vise l’horizon, improvise, agrandit. L’attirance mêle admiration et exaspération, d’où une note de 2 sur 5. La Vierge est séduite par l’optimisme large du Sagittaire, qui la libère de ses angoisses ; le Sagittaire par la fiabilité de la Vierge, qui structure ses élans. Mais la Vierge trouve le Sagittaire imprécis et imprudent, le Sagittaire trouve la Vierge tatillonne et anxieuse. Pour durer, chacun doit valoriser le regard opposé de l’autre. Une consultation peut révéler si votre couple Vierge-Sagittaire transforme sa tension en complémentarité.',
    dynamique:
      'Vierge et Sagittaire, tous deux signes mutables, forment un carré qui oppose le détail au grand ensemble. La Vierge, gouvernée par Mercure, vit dans la précision, l’analyse, l’amélioration du concret ; le Sagittaire, gouverné par Jupiter, vit dans l’expansion, la vision, la quête de sens et d’horizon. La Vierge est d’abord séduite par la générosité optimiste du Sagittaire, qui allège ses inquiétudes ; le Sagittaire est attiré par la compétence tranquille de la Vierge, qui donne corps à ses rêves. Mais leur regard sur la vie diverge profondément : la Vierge veut maîtriser les détails, le Sagittaire veut embrasser l’ensemble, et chacun juge la focale de l’autre. La franchise sans filtre du Sagittaire heurte la sensibilité de la Vierge, qui répond par la critique.',
    forces:
      'Une complémentarité de focales : la Vierge concrétise et affine les grandes visions du Sagittaire, le Sagittaire élargit et dédramatise le perfectionnisme de la Vierge. Ensemble, ils peuvent unir l’ambition et la méthode, le sens et l’exécution.',
    defis:
      'Détail contre horizon : la Vierge trouve le Sagittaire imprécis et imprudent, le Sagittaire trouve la Vierge anxieuse et tatillonne. La franchise brute du Sagittaire blesse la Vierge, dont les critiques perfectionnistes agacent le Sagittaire épris de liberté.',
    conseil:
      'Vierge : votre Sagittaire a besoin d’espace et d’encouragement, pas de corrections — lâchez le contrôle sur ses élans. Sagittaire : mesurez votre franchise, la Vierge est plus sensible qu’elle n’en a l’air, et reconnaissez que sa minutie protège vos projets au lieu de les brider.',
    faq: [
      {
        q: 'Vierge et Sagittaire peuvent-ils s’entendre ?',
        a: 'C’est une combinaison exigeante, en carré mutable, qui oppose le sens du détail de la Vierge à la vision d’ensemble du Sagittaire. La tension est réelle — chacun juge la façon de fonctionner de l’autre — d’où une note de 2 sur 5. Mais le carré est stimulant : bien géré, il devient une complémentarité où la méthode sert la vision. Les couples qui réussissent valorisent le regard opposé de l’autre au lieu de vouloir le corriger.',
      },
      {
        q: 'Pourquoi la Vierge critique-t-elle le Sagittaire ?',
        a: 'Parce que le Sagittaire, dans son enthousiasme, néglige les détails, prend des risques et improvise — tout ce que la Vierge, soucieuse de maîtrise et de fiabilité, redoute. Sa critique part d’une inquiétude sincère, mais le Sagittaire, épris de liberté, la vit comme un frein rabat-joie. La Vierge doit apprendre que l’optimisme du Sagittaire est une force, pas une imprudence à corriger, et réserver ses remarques aux vrais enjeux.',
      },
      {
        q: 'La franchise du Sagittaire blesse-t-elle la Vierge ?',
        a: 'Souvent. Le Sagittaire dit les choses sans filtre, avec une bonne foi qui ignore l’effet de ses mots ; la Vierge, plus sensible qu’elle ne le montre sous sa réserve, encaisse ces vérités brutes comme des jugements. Là où le Sagittaire pense être simplement honnête, la Vierge se sent visée dans sa personne. Le Sagittaire gagne à adoucir sa franchise avec ce partenaire, sans renoncer à sa sincérité appréciée sur le fond.',
      },
    ],
  },
  {
    slug: 'balance-scorpion',
    signA: 'Balance',
    signB: 'Scorpion',
    score: 3,
    titre: 'La légèreté et l’abîme, voisins contrastés',
    answerCapsule:
      'La compatibilité amoureuse entre la Balance et le Scorpion réunit deux voisins du zodiaque que tout oppose en intensité : l’Air léger et l’Eau profonde. La Balance charme, harmonise, reste en surface par élégance ; le Scorpion sonde, fusionne, plonge dans l’abîme émotionnel. L’attirance est celle d’une fascination — le Scorpion est intrigué par la grâce insaisissable de la Balance, la Balance par le magnétisme intense du Scorpion, d’où une note de 3 sur 5. La Balance apporte la douceur qui apaise les tempêtes du Scorpion ; le Scorpion apporte la profondeur qui donne du poids à la légèreté de la Balance. Mais la jalousie possessive du Scorpion étouffe la Balance sociable, dont l’évitement du conflit frustre le Scorpion qui veut tout affronter. Une consultation peut éclairer ce que votre couple Balance-Scorpion peut construire.',
    dynamique:
      'Balance et Scorpion sont voisins sur le zodiaque mais respirent à des profondeurs opposées. La Balance, signe d’Air gouverné par Vénus, vit dans la légèreté, la diplomatie, l’harmonie sociale ; le Scorpion, signe d’Eau, vit dans l’intensité, le secret, la fusion émotionnelle. La Balance est d’abord fascinée par le magnétisme et la profondeur du Scorpion, qui la sortent de sa surface policée ; le Scorpion est intrigué par la grâce et l’équilibre de la Balance, qui l’apaisent. Mais leur rapport à l’émotion diverge radicalement : la Balance veut désamorcer les tensions et garder l’harmonie, le Scorpion veut plonger dans le conflit pour atteindre la vérité. L’une fuit ce que l’autre recherche, et cette différence de température affective est le cœur de leur défi.',
    forces:
      'Une fascination mutuelle qui interdit l’ennui, une complémentarité réelle — la Balance apaise, le Scorpion approfondit —, et une intensité que la Balance découvre et que le Scorpion tempère au contact de la douceur de sa partenaire.',
    defis:
      'Jalousie contre sociabilité, profondeur contre légèreté : la possessivité du Scorpion étouffe la Balance qui a besoin de vie sociale, et l’évitement du conflit de la Balance frustre le Scorpion qui veut tout affronter en face. Deux températures affectives opposées.',
    conseil:
      'Scorpion : la sociabilité de votre Balance n’est pas une trahison, lâchez le contrôle — votre confiance la garde bien mieux que votre surveillance. Balance : n’esquivez pas les conflits que le Scorpion a besoin de traverser ; sa profondeur attend votre franchise, pas votre diplomatie.',
    faq: [
      {
        q: 'Balance et Scorpion sont-ils compatibles ?',
        a: 'C’est une combinaison contrastée mais magnétique, entre deux voisins du zodiaque que sépare l’intensité : l’Air léger de la Balance et l’Eau profonde du Scorpion. La fascination mutuelle est forte, d’où une note de 3 sur 5, mais leurs rapports à l’émotion et au conflit s’opposent. La relation tient quand le Scorpion apprend à faire confiance sans contrôler et quand la Balance accepte d’affronter les sujets qu’elle préfère esquiver.',
      },
      {
        q: 'La jalousie du Scorpion pose-t-elle problème à la Balance ?',
        a: 'Beaucoup. La Balance est sociable, charmeuse et a besoin d’un large cercle relationnel ; la possessivité intense du Scorpion vit cette sociabilité comme une menace permanente et cherche à contrôler. Or plus le Scorpion surveille, plus la Balance étouffe et se ferme. Le Scorpion doit comprendre que la confiance donnée est ce qui retient la Balance, et que son besoin de plaire socialement n’enlève rien à son attachement.',
      },
      {
        q: 'Pourquoi le Scorpion est-il frustré par la Balance ?',
        a: 'Parce que la Balance fuit le conflit qu’il a, lui, besoin d’affronter. Quand une tension surgit, la Balance désamorce, sourit, temporise pour préserver l’harmonie ; le Scorpion veut plonger dans le problème pour atteindre la vérité et purger l’émotion. L’évitement de la Balance lui donne l’impression de ne jamais toucher le fond des choses. Pour ce couple, la Balance doit oser la franchise directe que le Scorpion attend.',
      },
    ],
  },
  {
    slug: 'scorpion-capricorne',
    signA: 'Scorpion',
    signB: 'Capricorne',
    score: 4,
    titre: 'Le stratège et le bâtisseur, alliance de pouvoir',
    answerCapsule:
      'La compatibilité amoureuse entre le Scorpion et le Capricorne forme l’une des alliances les plus puissantes du zodiaque. Le sextile Eau-Terre unit l’intensité stratégique du Scorpion et l’ambition méthodique du Capricorne : deux volontés de fer qui se reconnaissent et se respectent, d’où une note de 4 sur 5. Le Scorpion apporte la passion, la profondeur et une loyauté farouche ; le Capricorne apporte la stabilité, la patience et une fiabilité à toute épreuve. Ensemble, ils forment un couple discret mais redoutable, uni par la confiance et l’ambition partagée. Le défi tient à leur double réserve émotionnelle et à deux caractères qui ne cèdent jamais : les luttes de pouvoir couvent. En choisissant la transparence et en exprimant une tendresse qu’ils retiennent, ce couple devient inébranlable. Une consultation peut éclairer la force réelle de votre lien Scorpion-Capricorne.',
    dynamique:
      'Scorpion et Capricorne s’attirent par une reconnaissance mutuelle de puissance. Le sextile Eau-Terre unit deux volontés intenses : le Scorpion, gouverné par Pluton, agit par la stratégie, le magnétisme et la profondeur émotionnelle ; le Capricorne, gouverné par Saturne, avance par la méthode, l’endurance et l’ambition patiente. Chacun sent chez l’autre un égal — quelqu’un qui ne joue pas, qui s’engage sérieusement et qui vise loin. Le Scorpion admire la solidité imperturbable du Capricorne, le Capricorne la force de caractère du Scorpion. Leur amour naît souvent de l’estime avant de devenir une passion profonde, à l’abri des regards. Discret en public, ce couple est d’une intensité et d’une loyauté rares en privé — une alliance qui construit dans la durée et résiste à toutes les tempêtes extérieures.',
    forces:
      'Une loyauté farouche des deux côtés, une ambition et des valeurs alignées, une confiance mutuelle rare — deux signes qui ne trahissent pas —, et une résilience de couple à toute épreuve. Ensemble, ils bâtissent un pouvoir, un patrimoine et une intimité solides.',
    defis:
      'La double réserve émotionnelle : deux pudiques peuvent laisser la tendresse s’atrophier sous le sérieux. Et deux volontés inflexibles qui ne cèdent jamais : les luttes de pouvoir silencieuses couvent, chacun campant sur ses positions sans un mot.',
    conseil:
      'Osez tous deux la vulnérabilité : votre force commune n’a de sens que si elle protège une vraie tendresse — dites et montrez ce que votre pudeur retient. Et désarmez les luttes de pouvoir par la transparence : entre deux stratèges, la confiance ouverte vaut mille manœuvres.',
    faq: [
      {
        q: 'Scorpion et Capricorne forment-ils un couple solide ?',
        a: 'Oui, c’est l’une des alliances les plus puissantes du zodiaque. Le sextile Eau-Terre unit l’intensité du Scorpion et l’ambition du Capricorne dans une relation d’estime, de loyauté et de construction, d’où une note de 4 sur 5. Deux volontés de fer qui se respectent bâtissent un couple d’une solidité rare. Leur seul vrai risque n’est pas la rupture mais l’assèchement émotionnel : deux réserves pudiques qui oublient d’exprimer la tendresse.',
      },
      {
        q: 'Pourquoi dit-on que c’est un couple de pouvoir ?',
        a: 'Parce que le Scorpion et le Capricorne partagent une ambition profonde et une volonté inflexible, et qu’ensemble ils conjuguent la stratégie magnétique de l’un et l’endurance méthodique de l’autre. Ce qu’ils décident, ils le réalisent : statut, patrimoine, projets d’envergure. Leur loyauté mutuelle et leur discrétion en font une équipe redoutable face au monde. C’est le couple qui construit silencieusement une forteresse là où d’autres font du bruit.',
      },
      {
        q: 'Les luttes de pouvoir menacent-elles ce couple ?',
        a: 'C’est leur risque interne principal. Deux caractères qui ne cèdent jamais, face à face, peuvent transformer chaque désaccord en bras de fer silencieux où chacun attend que l’autre plie. Le Scorpion teste et manœuvre, le Capricorne s’arc-boute et endure. La sortie n’est pas la victoire mais le désarmement : la transparence radicale, où chacun expose ses besoins au lieu de manœuvrer, est la seule voie pour que deux stratèges construisent au lieu de s’affronter.',
      },
    ],
  },
  {
    slug: 'sagittaire-poissons',
    signA: 'Sagittaire',
    signB: 'Poissons',
    score: 3,
    titre: 'Deux idéalistes de Jupiter, carré mutable',
    answerCapsule:
      'La compatibilité amoureuse entre le Sagittaire et les Poissons unit deux signes que la tradition rattache à Jupiter — la planète de la foi, du sens et de l’expansion. Ces deux mutables forment un carré, mais partagent un idéalisme profond et une générosité rare, d’où une note de 3 sur 5. Le Sagittaire de Feu cherche la vérité par l’aventure et la philosophie ; les Poissons d’Eau la cherchent par le rêve et la compassion. Chacun reconnaît chez l’autre une âme tournée vers plus grand que soi. Le Sagittaire apporte l’élan et l’optimisme, les Poissons la douceur et la profondeur émotionnelle. Mais la franchise brute du Sagittaire blesse l’hypersensibilité des Poissons, et leur besoin de fusion se heurte au besoin de liberté du Sagittaire. Une consultation peut éclairer ce que votre couple Sagittaire-Poissons peut vraiment vivre.',
    dynamique:
      'Sagittaire et Poissons forment un carré entre deux signes mutables, mais que la tradition astrologique relie par Jupiter — d’où une parenté idéaliste rare. Le Sagittaire, signe de Feu, cherche le sens par le mouvement, l’aventure, la connaissance ; les Poissons, signe d’Eau, cherchent le sens par l’intuition, le rêve, la compassion. Les deux sont profondément humains, tournés vers plus grand qu’eux, ce qui crée une reconnaissance immédiate et touchante. Le Sagittaire est ému par la profondeur émotionnelle des Poissons ; les Poissons sont inspirés par la foi et la liberté du Sagittaire. Mais le carré crée une tension : le Sagittaire fonce et parle sans filtre, les Poissons ressentent et se dérobent. Leur idéalisme partagé les rapproche autant que leurs tempéraments les éloignent.',
    forces:
      'Un idéalisme et une générosité partagés, une ouverture d’esprit et une tolérance mutuelles, une créativité et une spiritualité communes, et une absence de mesquinerie : deux âmes tournées vers l’ailleurs qui se comprennent sur l’essentiel.',
    defis:
      'La franchise du Sagittaire blesse l’hypersensibilité des Poissons, qui fuient dans le silence ou le flou ; le besoin de fusion des Poissons se heurte au besoin de liberté du Sagittaire. Deux signes peu ancrés, aucun ne gère solidement le concret du quotidien.',
    conseil:
      'Sagittaire : mesurez vos mots avec les Poissons, leur sensibilité amplifie tout — la tendresse dans le ton compte autant que la vérité. Poissons : n’enfermez pas votre Sagittaire, sa liberté n’est pas un désamour ; il revient toujours vers ce qui ne l’entrave pas.',
    faq: [
      {
        q: 'Sagittaire et Poissons sont-ils compatibles ?',
        a: 'C’est un carré exigeant, mais adouci par un idéalisme profondément partagé — la tradition relie les deux signes à Jupiter, planète de la foi et du sens. La note de 3 sur 5 reflète ce mélange : des tempéraments qui se heurtent (Feu franc contre Eau sensible) mais des âmes qui se rejoignent sur l’essentiel. La relation tient quand le Sagittaire adoucit sa franchise et les Poissons respectent son besoin de liberté.',
      },
      {
        q: 'Qu’est-ce qui rapproche vraiment ces deux signes ?',
        a: 'Leur idéalisme et leur générosité. Le Sagittaire et les Poissons sont deux des signes les plus tournés vers plus grand qu’eux — la quête de sens, la compassion, l’ouverture au monde. Là où d’autres couples se lient par la sécurité ou la passion, ceux-ci se reconnaissent dans une même soif d’absolu et une même absence de mesquinerie. Cette parenté d’âme est le vrai ciment qui leur permet de dépasser les frictions de tempérament.',
      },
      {
        q: 'Pourquoi la franchise du Sagittaire blesse-t-elle les Poissons ?',
        a: 'Parce que le Sagittaire dit les vérités sans emballage, avec une bonne foi qui ignore leur impact, et que les Poissons ressentent tout à une intensité extrême. Une remarque banale pour le Sagittaire peut être vécue comme un rejet par les Poissons, qui se réfugient alors dans le silence ou la fuite. Le Sagittaire n’est pas dur, il est direct ; mais avec les Poissons, la manière compte autant que le fond, et la tendresse désamorce ce que la franchise seule briserait.',
      },
    ],
  },
  {
    slug: 'capricorne-poissons',
    signA: 'Capricorne',
    signB: 'Poissons',
    score: 4,
    titre: 'Le roc et le rêve, sextile qui ancre',
    answerCapsule:
      'La compatibilité amoureuse entre le Capricorne et les Poissons unit le roc et le rêve dans une belle harmonie. Le sextile Terre-Eau marie la solidité structurante du Capricorne et la douceur imaginative des Poissons : chacun offre à l’autre ce qui lui manque, d’où une note de 4 sur 5. Le Capricorne apporte l’ancrage, la sécurité et la fiabilité dont les Poissons ont désespérément besoin ; les Poissons apportent la tendresse, la sensibilité et la magie qui adoucissent l’austérité du Capricorne. Le réaliste protège le rêveur, le rêveur réchauffe le réaliste. Le défi tient à leur expression affective — pudique et concrète chez l’un, fusionnelle et floue chez l’autre — et au rapport au réel qui les sépare. Une consultation peut éclairer comment votre couple Capricorne-Poissons transforme sa différence en complémentarité durable.',
    dynamique:
      'Capricorne et Poissons composent l’un des sextiles les plus complémentaires du zodiaque. Le Capricorne, signe de Terre gouverné par Saturne, vit dans la structure, l’ambition, la maîtrise du réel ; les Poissons, signe d’Eau gouverné par Neptune, vivent dans le rêve, l’émotion, l’abandon. Les Poissons trouvent chez le Capricorne un rivage solide — quelqu’un qui les ancre, les protège et gère ce qui les dépasse ; le Capricorne découvre chez les Poissons une tendresse et une magie que son réalisme ignorait, et qui réchauffent son austérité. Le roc et l’océan se rencontrent sans se combattre : les Poissons contournent ce que le Capricorne n’impose pas, le Capricorne s’attendrit devant une douceur qui ne le juge jamais. Leur amour a une qualité rare de refuge mutuel.',
    forces:
      'Une complémentarité profonde — l’ancrage pour les Poissons, la tendresse pour le Capricorne —, une loyauté sérieuse des deux côtés, et un refuge mutuel : le Capricorne protège, les Poissons consolent. Chacun donne exactement ce qui manque à l’autre.',
    defis:
      'Le rapport au réel et à l’émotion : le flou des Poissons face au concret exaspère parfois le Capricorne rigoureux, dont la pudeur et la froideur apparente laissent les Poissons affamés de tendresse démonstrative. Deux langages affectifs à traduire.',
    conseil:
      'Capricorne : vos Poissons ont besoin de tendresse exprimée, pas seulement de sécurité assurée — descendez de la structure au cœur. Poissons : honorez les repères concrets de votre Capricorne, cette fiabilité minimale est ce qui vous permet de rêver en sécurité.',
    faq: [
      {
        q: 'Capricorne et Poissons sont-ils compatibles en amour ?',
        a: 'Oui, c’est l’une des complémentarités les plus harmonieuses du zodiaque, en sextile Terre-Eau. Le Capricorne apporte l’ancrage et la sécurité dont les Poissons manquent, les Poissons la tendresse et la magie qui adoucissent le Capricorne : chacun comble le vide de l’autre, d’où une note de 4 sur 5. Le roc protège le rêve, le rêve réchauffe le roc. La relation demande surtout de traduire deux langages affectifs opposés.',
      },
      {
        q: 'Le Capricorne peut-il vivre avec le flou des Poissons ?',
        a: 'Oui, s’il distingue le flou vital du flou problématique. Les Poissons ont besoin d’imprécision et de rêverie pour respirer ; c’est leur écologie mentale, pas de la négligence. Le Capricorne, rigoureux, doit sanctuariser l’essentiel — engagements, finances, fiabilité — et lâcher le reste. En échange, il gagne une douceur et une inspiration que son monde structuré ne connaissait pas. Beaucoup de ces couples trouvent un équilibre étonnamment durable.',
      },
      {
        q: 'Pourquoi les Poissons se sentent-ils parfois mal aimés par le Capricorne ?',
        a: 'Parce que le Capricorne aime en actes et en silence — sécuriser, protéger, tenir parole — quand les Poissons ont besoin de tendresse exprimée, de mots doux et de fusion émotionnelle. La pudeur du Capricorne peut ressembler à de la froideur pour un signe aussi sensible. Le Capricorne ne manque pas d’amour, il manque de démonstration ; faire l’effort conscient de dire et montrer sa tendresse comble ce que les Poissons attendent réellement.',
      },
    ],
  },
  {
    slug: 'taureau-sagittaire',
    signA: 'Taureau',
    signB: 'Sagittaire',
    score: 2,
    titre: 'Le sédentaire et le nomade, quinconce délicat',
    answerCapsule:
      'La compatibilité amoureuse entre le Taureau et le Sagittaire oppose le sédentaire et le nomade, en quinconce sans terrain commun naturel. Le Taureau de Terre veut la sécurité, le confort, la routine rassurante ; le Sagittaire de Feu veut l’aventure, la liberté, l’horizon toujours plus loin. L’attirance des contraires existe — le Taureau est fasciné par l’optimisme du Sagittaire, le Sagittaire par la solidité du Taureau — mais le quotidien confronte deux besoins presque inconciliables, d’où une note de 2 sur 5. Le Taureau vit les départs du Sagittaire comme de l’instabilité, le Sagittaire vit l’attachement du Taureau comme une entrave. Pour tenir, le Taureau doit accepter le besoin d’air du Sagittaire et le Sagittaire offrir au Taureau des ancrages fiables. Une consultation peut éclairer le potentiel réel de votre couple Taureau-Sagittaire.',
    dynamique:
      'Taureau et Sagittaire forment un quinconce, l’angle de l’ajustement permanent, entre la Terre qui s’enracine et le Feu qui s’élance. Le Taureau, gouverné par Vénus, cherche la sécurité, la sensualité, le confort d’un nid stable ; le Sagittaire, gouverné par Jupiter, cherche la liberté, l’aventure, l’expansion vers de nouveaux horizons. Le Taureau est d’abord séduit par la joie de vivre et l’optimisme contagieux du Sagittaire, qui l’ouvre au monde ; le Sagittaire est rassuré par la solidité tranquille du Taureau, qui lui offre une base. Mais leurs besoins fondamentaux s’opposent : le Taureau veut poser ses valises pour toujours, le Sagittaire veut les garder prêtes. L’un vit le mouvement comme une menace, l’autre la routine comme une prison.',
    forces:
      'Une complémentarité possible : le Sagittaire apporte l’air frais et l’aventure qui empêchent le Taureau de s’encroûter, le Taureau offre l’ancrage et la fidélité qui manquent au Sagittaire. Ensemble, ils peuvent équilibrer racines et voyages.',
    defis:
      'Sécurité contre liberté, au maximum : le Taureau possessif s’inquiète des envolées du Sagittaire, qui étouffe sous les habitudes du Taureau. L’un veut rester, l’autre veut partir ; leurs rythmes et leurs valeurs de vie divergent profondément.',
    conseil:
      'Taureau : la liberté de votre Sagittaire n’est pas de l’infidélité, c’est son oxygène — le retenir le fait fuir. Sagittaire : offrez à votre Taureau des repères stables et de la présence fiable ; cette base rassurante est ce qui lui permet de vous laisser voyager.',
    faq: [
      {
        q: 'Taureau et Sagittaire peuvent-ils former un couple ?',
        a: 'C’est une combinaison délicate, en quinconce, qui oppose le besoin de sécurité du Taureau au besoin de liberté du Sagittaire. Leurs valeurs de vie divergent profondément — s’enraciner contre explorer — d’où une note de 2 sur 5. L’attirance des contraires est réelle mais doit se transformer en ajustement constant. Les couples qui réussissent trouvent un équilibre où le Taureau accorde de l’air au Sagittaire et le Sagittaire offre de l’ancrage au Taureau.',
      },
      {
        q: 'Pourquoi le Taureau s’inquiète-t-il avec le Sagittaire ?',
        a: 'Parce que le Sagittaire a un besoin viscéral de liberté, de mouvement et d’aventure, ce qui active toutes les alarmes du Taureau, attaché à la sécurité et à l’exclusivité. Les départs, les projets de voyage et l’indépendance du Sagittaire sont vécus par le Taureau comme de l’instabilité, voire une menace pour le couple. Le malentendu est réel : le Sagittaire est fidèle à sa manière, simplement allergique à l’enfermement. Le Taureau doit apprendre à distinguer liberté et abandon.',
      },
      {
        q: 'Comment ce couple concilie-t-il des besoins si opposés ?',
        a: 'En inventant un mode de vie qui honore les deux : une base solide d’où l’on part et vers laquelle on revient. Le Taureau tient le foyer, les finances et les repères ; le Sagittaire y ramène les aventures, les voyages et l’oxygène. Beaucoup de ces couples fonctionnent sur ce modèle du camp de base — l’un garde le feu allumé, l’autre explore le monde, et chacun a besoin de l’autre pour que le voyage ait un port et que le nid ait une âme.',
      },
    ],
  },
  {
    slug: 'belier-verseau',
    signA: 'Bélier',
    signB: 'Verseau',
    score: 3,
    titre: 'Deux électrons libres, sextile stimulant',
    answerCapsule:
      'La compatibilité amoureuse entre le Bélier et le Verseau unit deux esprits indépendants dans une relation vive et libre. Le sextile Feu-Air fait circuler une énergie stimulante : le Bélier fonce, le Verseau innove, et aucun ne cherche à posséder l’autre. Cette liberté mutuelle, rare et précieuse, vaut à ce couple une note de 3 sur 5. Le Bélier admire l’originalité du Verseau, le Verseau la vitalité audacieuse du Bélier. Ensemble, ils forment un duo dynamique, sans jalousie ni routine. Le défi tient à l’émotion : le Bélier impulsif veut de la chaleur immédiate, le Verseau détaché la tempère par principe. Pour durer, le Bélier accepte la pudeur du Verseau et le Verseau offre plus de présence. Une consultation de voyance amoureuse éclaire le potentiel de votre couple Bélier-Verseau.',
    dynamique:
      'Bélier et Verseau s’attirent par un même amour de la liberté. Le sextile Feu-Air crée une complicité énergique : le Bélier, gouverné par Mars, agit dans l’instant, fonce, ose ; le Verseau, gouverné par Uranus, invente, surprend, refuse les conventions. Aucun des deux ne supporte l’enfermement ni la possessivité, ce qui rend leur relation étonnamment fluide — chacun laisse à l’autre son espace sans le vivre comme un abandon. Le Bélier est stimulé par l’esprit visionnaire du Verseau ; le Verseau est séduit par l’audace directe du Bélier. Ils forment un couple d’électrons libres qui avancent côte à côte plutôt que fusionnés. Leur seule ombre : deux êtres peu portés sur l’émotionnel qui peuvent négliger la tendresse au profit de l’action et des idées.',
    forces:
      'Une liberté mutuelle sans jalousie, une stimulation intellectuelle et physique constante, un goût partagé de la nouveauté et de l’indépendance. Deux esprits qui se respectent et ne s’étouffent jamais, portés par une énergie commune et un refus de la routine.',
    defis:
      'Le déficit émotionnel : le Bélier veut de la chaleur immédiate, le Verseau reste distant par principe. L’impulsivité du Bélier peut heurter le besoin de recul du Verseau, et deux têtes fortes peuvent se disputer le contrôle des grandes décisions sans céder.',
    conseil:
      'Bélier : le détachement du Verseau n’est pas de la froideur, c’est sa nature — offrez-lui de l’espace, il reviendra vers votre énergie. Verseau : votre Bélier a besoin de chaleur exprimée, pas seulement de complicité d’idées ; descendez parfois de la tête au cœur.',
    faq: [
      {
        q: 'Bélier et Verseau sont-ils compatibles en amour ?',
        a: 'Oui, plutôt bien : le sextile Feu-Air unit deux indépendants qui se stimulent sans s’étouffer. Le Bélier apporte l’audace et l’action, le Verseau l’originalité et la vision, et aucun ne cherche à posséder l’autre — une liberté mutuelle rare, d’où une note de 3 sur 5. La relation est vive, sans jalousie ni routine. Son seul chantier est l’émotionnel : deux signes peu démonstratifs doivent cultiver consciemment la tendresse.',
      },
      {
        q: 'Pourquoi ce couple manque-t-il de chaleur ?',
        a: 'Parce que ni le Bélier ni le Verseau n’est spontanément porté vers l’expression émotionnelle. Le Bélier vit dans l’action et l’instant, le Verseau dans les idées et le détachement : leur lien se nourrit d’énergie et de complicité mentale plus que de fusion tendre. Le risque est une relation dynamique mais un peu sèche affectivement. Les couples qui durent s’imposent des gestes de tendresse et des moments de vraie présence pour réchauffer leur complicité.',
      },
      {
        q: 'La liberté est-elle la force de ce couple ?',
        a: 'Absolument, c’est son ciment. Bélier et Verseau partagent une horreur de la possessivité et un besoin vital d’indépendance : chacun respecte d’instinct l’espace de l’autre, ce qui évite l’étouffement fatal à bien d’autres couples. Le Bélier garde ses élans, le Verseau ses causes et ses amis, et cette autonomie renforce paradoxalement le lien. Tant qu’ils cultivent aussi des moments de proximité réelle, leur liberté partagée fait leur solidité.',
      },
    ],
  },
  {
    slug: 'taureau-verseau',
    signA: 'Taureau',
    signB: 'Verseau',
    score: 2,
    titre: 'Tradition contre révolution, carré fixe',
    answerCapsule:
      'La compatibilité amoureuse entre le Taureau et le Verseau est l’une des plus difficiles du zodiaque. Ces deux signes fixes forment un carré, et tout les oppose : le Taureau de Terre chérit la tradition, la sécurité et la sensualité ; le Verseau d’Air vénère la liberté, l’innovation et l’indépendance. Deux entêtements inflexibles face à face, d’où une note de 2 sur 5. Le Taureau veut construire un nid stable, le Verseau refuse toute cage ; le Taureau possessif s’angoisse de la distance du Verseau, qui étouffe sous les habitudes du Taureau. L’attirance des contraires existe mais la vie commune est un bras de fer permanent. Pour tenir, chacun doit lâcher du terrain sur ce qui lui est le plus cher. Une consultation peut éclairer si votre couple Taureau-Verseau peut dépasser ce fossé.',
    dynamique:
      'Taureau et Verseau forment un carré entre deux signes fixes, l’un des affrontements les plus tenaces du zodiaque. Le Taureau, gouverné par Vénus, vit dans le concret, le confort, la fidélité aux habitudes ; le Verseau, gouverné par Uranus, vit dans les idées, la rupture, le refus des conventions. Le Taureau cherche à posséder et sécuriser, le Verseau à s’affranchir et surprendre. L’attirance initiale tient à la fascination des contraires : le Taureau est intrigué par l’originalité du Verseau, le Verseau par la stabilité sensuelle du Taureau. Mais deux volontés fixes qui ne cèdent jamais transforment chaque désaccord en siège. Là où le Taureau veut planter des racines, le Verseau veut garder ses ailes — et aucun ne comprend spontanément le besoin de l’autre.',
    forces:
      'Une fascination mutuelle réelle, et une complémentarité possible si elle est travaillée : le Verseau sort le Taureau de sa routine, le Taureau ancre les envolées du Verseau. Chacun peut apprendre de l’univers opposé de l’autre, à condition d’y consentir.',
    defis:
      'Sécurité contre liberté, tradition contre rupture, au maximum. Deux entêtements fixes qui ne cèdent jamais et fossilisent les conflits. Le Taureau possessif étouffe le Verseau épris d’indépendance, dont la distance émotionnelle blesse le Taureau en quête de chaleur et de présence.',
    conseil:
      'Taureau : la liberté du Verseau n’est pas une menace, cesser de le retenir est la seule façon de le garder. Verseau : votre Taureau a besoin de sécurité et de présence concrètes ; offrez-lui quelques repères stables sans y voir une perte de liberté.',
    faq: [
      {
        q: 'Taureau et Verseau sont-ils compatibles ?',
        a: 'C’est l’une des combinaisons les plus difficiles du zodiaque, un carré entre deux signes fixes aux valeurs opposées : sécurité et tradition pour le Taureau, liberté et innovation pour le Verseau. La note de 2 sur 5 reflète ce fossé. L’attirance des contraires existe, mais deux entêtements inflexibles transforment la vie commune en bras de fer. La relation ne tient que si chacun accepte de lâcher du terrain sur ce qui lui est le plus cher.',
      },
      {
        q: 'Pourquoi ce couple se dispute-t-il autant ?',
        a: 'Parce que ce sont deux signes fixes, c’est-à-dire deux volontés qui ne plient pas. Quand le besoin de sécurité du Taureau se heurte au besoin de liberté du Verseau, aucun ne cède, et le désaccord se fige en siège interminable. S’ajoute un fossé de valeurs profond : le Taureau chérit ce que le Verseau veut réinventer. Sans compromis conscient et répété, leurs affrontements deviennent chroniques et épuisants pour les deux.',
      },
      {
        q: 'Ce couple peut-il durer malgré tout ?',
        a: 'Oui, mais c’est un vrai travail. Les couples Taureau-Verseau qui durent sont ceux où chacun a fait un pas majeur vers l’autre : le Taureau a accepté d’offrir de la liberté et de la nouveauté, le Verseau de fournir de la présence et des repères stables. Leur fascination mutuelle et leur complémentarité potentielle — l’ancrage et l’innovation — peuvent alors devenir une force. Mais sans ce compromis, le carré fixe les use.',
      },
    ],
  },
  {
    slug: 'gemeaux-capricorne',
    signA: 'Gémeaux',
    signB: 'Capricorne',
    score: 2,
    titre: 'La légèreté et la gravité, quinconce',
    answerCapsule:
      'La compatibilité amoureuse entre le Gémeaux et le Capricorne oppose la légèreté à la gravité, en quinconce sans terrain commun. Le Gémeaux d’Air papillonne, s’amuse, change ; le Capricorne de Terre planifie, endure, construit. L’attirance mêle admiration et incompréhension, d’où une note de 2 sur 5. Le Capricorne est séduit par la vivacité rafraîchissante du Gémeaux, le Gémeaux par la solidité rassurante du Capricorne. Mais le Capricorne trouve le Gémeaux inconstant et superficiel, le Gémeaux trouve le Capricorne rigide et austère. L’un veut jouer, l’autre veut bâtir ; l’un vit dans l’instant, l’autre dans le long terme. Pour durer, chacun doit valoriser ce que l’autre lui apporte de complémentaire. Une consultation peut éclairer si votre couple Gémeaux-Capricorne trouve son équilibre.',
    dynamique:
      'Gémeaux et Capricorne forment un quinconce, l’angle de l’ajustement, entre l’Air joueur et la Terre sérieuse. Le Gémeaux, gouverné par Mercure, vit dans la curiosité, le mouvement, la légèreté ; le Capricorne, gouverné par Saturne, vit dans l’ambition, la discipline, la construction patiente. Le Capricorne est d’abord charmé par l’esprit vif et l’humour du Gémeaux, qui allègent son sérieux ; le Gémeaux est rassuré par la maturité et la fiabilité du Capricorne, qui structurent son chaos. Mais leurs rythmes et leurs valeurs divergent profondément : le Gémeaux change d’avis quand le Capricorne s’engage pour durer, le Gémeaux improvise quand le Capricorne planifie. L’un trouve l’autre inconstant, l’autre le trouve rigide — deux mondes qui se frôlent sans se comprendre.',
    forces:
      'Une complémentarité possible : le Gémeaux apporte la légèreté et la fraîcheur qui dérident le Capricorne, le Capricorne offre la stabilité et le cadre qui manquent au Gémeaux. Ensemble, ils peuvent équilibrer jeu et sérieux, spontanéité et construction.',
    defis:
      'Légèreté contre gravité : le Capricorne trouve le Gémeaux superficiel et inconstant, le Gémeaux trouve le Capricorne austère et rigide. Le besoin de liberté et de variété du Gémeaux se heurte au besoin de stabilité et d’engagement du Capricorne.',
    conseil:
      'Capricorne : la légèreté du Gémeaux n’est pas de la superficialité, c’est son oxygène — ne l’enfermez pas dans votre sérieux. Gémeaux : reconnaissez la valeur de l’engagement du Capricorne au lieu d’en rire ; sa constance est ce qui peut vous ancrer.',
    faq: [
      {
        q: 'Gémeaux et Capricorne peuvent-ils s’entendre ?',
        a: 'C’est une combinaison exigeante, en quinconce, qui oppose la légèreté joueuse du Gémeaux à la gravité ambitieuse du Capricorne. Leurs rythmes et leurs valeurs divergent profondément — improviser contre planifier, jouer contre bâtir — d’où une note de 2 sur 5. L’attirance des contraires est réelle mais demande un ajustement constant. Les couples qui réussissent valorisent la complémentarité : la fraîcheur de l’un, la solidité de l’autre.',
      },
      {
        q: 'Pourquoi le Capricorne trouve-t-il le Gémeaux superficiel ?',
        a: 'Parce que le Gémeaux change d’avis, papillonne d’un sujet à l’autre et privilégie le jeu et la variété, là où le Capricorne valorise la profondeur, la constance et l’engagement. Ce que le Gémeaux vit comme une curiosité joyeuse, le Capricorne le perçoit comme de l’inconstance ou du manque de sérieux. Le malentendu est réel : la légèreté du Gémeaux n’exclut pas la profondeur, elle l’exprime autrement. Le Capricorne doit apprendre à ne pas confondre les deux.',
      },
      {
        q: 'Comment ce couple trouve-t-il son équilibre ?',
        a: 'En transformant leurs différences en complémentarité plutôt qu’en jugement. Le Gémeaux apporte au Capricorne la légèreté et le rire qui l’empêchent de se scléroser ; le Capricorne offre au Gémeaux l’ancrage et la structure qui canalisent sa dispersion. Chacun doit respecter le mode de l’autre : le Capricorne laisse au Gémeaux son espace de liberté, le Gémeaux reconnaît le besoin de sérieux du Capricorne. C’est un dosage délicat mais fertile.',
      },
    ],
  },
  {
    slug: 'cancer-verseau',
    signA: 'Cancer',
    signB: 'Verseau',
    score: 2,
    titre: 'Le cœur et la tête, quinconce délicat',
    answerCapsule:
      'La compatibilité amoureuse entre le Cancer et le Verseau confronte le cœur à la tête, en quinconce sans harmonie naturelle. Le Cancer d’Eau vit d’émotion, de foyer et de proximité ; le Verseau d’Air vit d’idées, de liberté et de distance. L’attirance existe — le Cancer est fasciné par l’originalité du Verseau, le Verseau touché par la tendresse du Cancer — mais leurs besoins s’opposent frontalement, d’où une note de 2 sur 5. Le Cancer réclame de la présence et de la chaleur que le Verseau, détaché par principe, peine à donner ; le Verseau étouffe sous le besoin de fusion du Cancer. L’un se sent délaissé, l’autre enfermé. Pour tenir, le Verseau doit réchauffer sa réserve et le Cancer accepter l’indépendance de l’autre. Une consultation peut éclairer ce couple Cancer-Verseau si contrasté.',
    dynamique:
      'Cancer et Verseau forment un quinconce entre l’Eau émotionnelle et l’Air cérébral, l’un des écarts les plus délicats du zodiaque. Le Cancer, gouverné par la Lune, cherche le foyer, la sécurité affective, la proximité tendre ; le Verseau, gouverné par Uranus, cherche la liberté, les idées, une certaine distance émotionnelle. Le Cancer est d’abord intrigué par l’esprit visionnaire et l’indépendance du Verseau ; le Verseau est ému par la chaleur et le dévouement du Cancer. Mais le quotidien révèle un fossé presque insurmontable : le Cancer a besoin de fusion et de réassurance permanente, le Verseau a besoin d’espace et vit l’attachement fusionnel comme une entrave. L’un aime avec le cœur, l’autre avec la tête, et chacun reste étranger au langage de l’autre.',
    forces:
      'Une complémentarité possible : le Verseau ouvre le Cancer au monde et à la nouveauté, le Cancer réchauffe l’univers cérébral du Verseau. Chacun peut apprendre de l’autre un registre qui lui manque — l’émotion pour l’un, le recul pour l’autre.',
    defis:
      'Fusion contre distance : le Cancer réclame présence et chaleur, le Verseau reste détaché par principe. Le Cancer se sent délaissé, le Verseau se sent envahi. Les marées émotionnelles du Cancer déroutent le Verseau rationnel, dont la froideur apparente blesse le Cancer.',
    conseil:
      'Verseau : votre Cancer a besoin de réassurance émotionnelle régulière ; un mot tendre, une présence, valent plus que toutes vos idées. Cancer : l’indépendance du Verseau n’est pas un rejet ; laissez-lui de l’espace au lieu de réclamer une fusion qui le fait fuir.',
    faq: [
      {
        q: 'Cancer et Verseau sont-ils compatibles ?',
        a: 'C’est l’une des combinaisons les plus délicates du zodiaque, en quinconce, qui oppose le cœur du Cancer à la tête du Verseau. Le Cancer a besoin de fusion et de chaleur, le Verseau de liberté et de distance : deux besoins presque inconciliables, d’où une note de 2 sur 5. L’attirance des contraires est réelle mais l’écart émotionnel est le nœud de la relation. Elle ne tient que si le Verseau se réchauffe et le Cancer lâche du lest.',
      },
      {
        q: 'Pourquoi le Cancer se sent-il délaissé par le Verseau ?',
        a: 'Parce que le Verseau exprime peu ses émotions et tient à sa distance, quand le Cancer a besoin de présence, de réassurance et de proximité pour se sentir aimé. Le détachement du Verseau, qui est chez lui une nature et non un désamour, est vécu par le Cancer hypersensible comme une froideur, voire un abandon. Le Verseau doit faire l’effort conscient de rassurer et de manifester sa tendresse, contre sa réserve naturelle, pour combler le Cancer.',
      },
      {
        q: 'Ce couple peut-il fonctionner malgré leurs différences ?',
        a: 'Difficilement, mais pas impossible. Le quinconce Cancer-Verseau demande un ajustement mutuel permanent : le Verseau doit apprendre la chaleur et la présence, le Cancer l’indépendance et le lâcher-prise. Quand chacun fait ce pas contre-nature, la complémentarité peut opérer — le Verseau ouvre le Cancer au monde, le Cancer réchauffe le Verseau. Mais l’écart émotionnel est tel que ce couple reste l’un des plus exigeants du zodiaque.',
      },
    ],
  },
  {
    slug: 'vierge-balance',
    signA: 'Vierge',
    signB: 'Balance',
    score: 3,
    titre: 'La perfectionniste et l’esthète, voisines raffinées',
    answerCapsule:
      'La compatibilité amoureuse entre la Vierge et la Balance unit deux signes raffinés et attentifs, mais de tempéraments distincts. Voisines du zodiaque, la Vierge de Terre analyse et perfectionne, la Balance d’Air harmonise et séduit. Elles partagent le goût de l’élégance et du soin porté à l’autre, d’où une note de 3 sur 5. La Vierge apporte la fiabilité et le sens pratique, la Balance la douceur et l’art de la relation. Mais la critique perfectionniste de la Vierge heurte le besoin d’harmonie de la Balance, et l’indécision de la Balance agace la Vierge méthodique. L’une veut corriger, l’autre veut plaire ; l’une tranche, l’autre hésite. Pour durer, la Vierge adoucit ses remarques et la Balance ose décider. Une consultation peut éclairer votre couple Vierge-Balance et ses affinités.',
    dynamique:
      'Vierge et Balance sont voisines sur le zodiaque et partagent un même raffinement, mais fonctionnent différemment. La Vierge, gouvernée par Mercure, vit dans l’analyse, le détail, l’amélioration du concret ; la Balance, gouvernée par Vénus, vit dans l’harmonie, la beauté, l’équilibre des relations. Toutes deux sont attentives à l’autre et soignent leur vie commune — la Vierge par des gestes concrets, la Balance par la douceur et le charme. La Vierge est rassurée par la grâce apaisante de la Balance ; la Balance est touchée par le dévouement discret de la Vierge. Mais leurs tempéraments s’accrochent : la Vierge critique pour aider, la Balance fuit le conflit et déteste être jugée. L’une cherche la perfection, l’autre l’harmonie — deux quêtes proches qui ne coïncident pas tout à fait.',
    forces:
      'Un raffinement et une attention mutuelle partagés, une douceur commune — ni l’une ni l’autre n’aime la brutalité —, et une complémentarité : la Vierge structure et fiabilise, la Balance apaise et embellit. Ensemble, elles créent une vie de couple soignée et harmonieuse.',
    defis:
      'La critique contre l’harmonie : les remarques perfectionnistes de la Vierge blessent la Balance, qui fuit le conflit et se ferme. L’indécision de la Balance exaspère la Vierge méthodique, qui, une fois analysée, veut trancher là où la Balance hésite encore.',
    conseil:
      'Vierge : votre Balance a horreur d’être jugée ; enveloppez vos remarques de douceur, valorisez avant de suggérer. Balance : osez trancher et exprimer vos désaccords ; votre Vierge préfère une position claire à une hésitation permanente qui la laisse dans le flou.',
    faq: [
      {
        q: 'Vierge et Balance sont-elles compatibles ?',
        a: 'Oui, plutôt bien : voisines du zodiaque, elles partagent le raffinement, la douceur et le soin porté à l’autre, d’où une note de 3 sur 5. La Vierge apporte la fiabilité et le sens pratique, la Balance l’harmonie et le charme. La relation est élégante et attentive. Son point de friction est le tempérament : la critique de la Vierge se heurte au besoin d’harmonie de la Balance, et l’indécision de la Balance agace la Vierge.',
      },
      {
        q: 'Pourquoi la critique de la Vierge blesse-t-elle la Balance ?',
        a: 'Parce que la Balance, gouvernée par Vénus, vit d’harmonie et supporte mal d’être jugée ou remise en cause : le conflit et la critique la déstabilisent profondément. La Vierge, elle, pointe ce qui pourrait être amélioré par souci d’aider, sans intention de blesser. Mais la Balance reçoit ces remarques comme une atteinte à la paix qu’elle chérit. La Vierge doit apprendre à envelopper ses suggestions de douceur pour ne pas fermer sa Balance.',
      },
      {
        q: 'L’indécision de la Balance pose-t-elle problème ?',
        a: 'Oui, c’est le principal reproche de la Vierge. La Balance pèse indéfiniment le pour et le contre avant de trancher, par peur de se tromper ou de rompre l’harmonie ; la Vierge, qui analyse vite et veut agir, s’impatiente de cette hésitation permanente. Le couple gagne à ce que la Balance s’impose des échéances de décision et que la Vierge laisse à la Balance le temps de peser sans la presser. L’équilibre se trouve dans le respect des deux rythmes.',
      },
    ],
  },
  {
    slug: 'vierge-verseau',
    signA: 'Vierge',
    signB: 'Verseau',
    score: 2,
    titre: 'L’ordre et la disruption, quinconce cérébral',
    answerCapsule:
      'La compatibilité amoureuse entre la Vierge et le Verseau oppose l’ordre à la disruption, en quinconce sans terrain commun. La Vierge de Terre veut la méthode, le détail maîtrisé, la fiabilité ; le Verseau d’Air veut l’innovation, la liberté, la rupture des règles. Deux esprits vifs mais aux systèmes opposés, d’où une note de 2 sur 5. La Vierge est intriguée par l’originalité du Verseau, le Verseau par l’intelligence précise de la Vierge. Mais la Vierge trouve le Verseau imprévisible et désordonné, le Verseau trouve la Vierge rigide et tatillonne. L’une veut perfectionner l’existant, l’autre veut tout réinventer. Pour durer, chacun doit voir dans la différence un complément plutôt qu’un défaut. Une consultation peut éclairer votre couple Vierge-Verseau et son potentiel intellectuel.',
    dynamique:
      'Vierge et Verseau forment un quinconce entre la Terre méthodique et l’Air novateur, uni par un point commun — l’intelligence — mais séparé par tout le reste. La Vierge, gouvernée par Mercure, vit dans l’analyse, l’ordre, l’amélioration patiente du concret ; le Verseau, gouverné par Uranus, vit dans les idées, la disruption, le refus des cadres. Ils se reconnaissent d’abord sur le terrain mental : deux esprits vifs qui aiment réfléchir. Mais leurs systèmes s’opposent : la Vierge perfectionne les règles, le Verseau les casse ; la Vierge maîtrise le détail, le Verseau embrasse l’utopie. L’une a besoin d’ordre et de prévisibilité, l’autre de liberté et de surprise. Leur connexion intellectuelle est réelle, mais leur rapport au quotidien et à l’émotion les sépare.',
    forces:
      'Une connexion intellectuelle réelle — deux esprits vifs et curieux —, et une complémentarité possible : la Vierge concrétise les idées visionnaires du Verseau, le Verseau élargit l’horizon parfois étroit de la Vierge. Ensemble, ils peuvent unir innovation et rigueur.',
    defis:
      'Ordre contre disruption : la Vierge trouve le Verseau imprévisible et brouillon, le Verseau trouve la Vierge rigide et anxieuse. Deux réserves émotionnelles se font aussi face — l’analyse de l’une, le détachement de l’autre — laissant la tendresse au second plan.',
    conseil:
      'Vierge : le désordre créatif du Verseau n’est pas de la négligence, c’est sa façon d’innover ; lâchez le contrôle. Verseau : le besoin d’ordre de la Vierge est sa sécurité, pas une manie ; respectez ses repères au lieu de les bousculer.',
    faq: [
      {
        q: 'Vierge et Verseau peuvent-ils s’accorder ?',
        a: 'C’est une combinaison difficile, en quinconce, qui oppose l’ordre méthodique de la Vierge à la disruption du Verseau. Leur point commun est l’intelligence — deux esprits vifs qui se comprennent mentalement — mais tout le reste diverge, d’où une note de 2 sur 5. La connexion intellectuelle peut fonder une belle complicité, mais leurs rapports opposés au quotidien, à l’ordre et à l’émotion demandent un ajustement constant pour tenir.',
      },
      {
        q: 'Pourquoi la Vierge et le Verseau se comprennent-ils mal au quotidien ?',
        a: 'Parce que la Vierge a besoin d’ordre, de méthode et de prévisibilité pour se sentir en sécurité, quand le Verseau vit dans l’imprévu, l’improvisation et le refus des routines. Ce que la Vierge perçoit comme du désordre, le Verseau le vit comme de la liberté créative ; ce que le Verseau perçoit comme de la rigidité, la Vierge le vit comme un cadre rassurant. Leurs deux systèmes de vie, également légitimes, s’entrechoquent sur le terrain concret.',
      },
      {
        q: 'Ce couple a-t-il une vraie connexion ?',
        a: 'Oui, sur le plan intellectuel, qui est leur meilleur terrain. Vierge et Verseau sont deux esprits curieux et analytiques qui aiment échanger et réfléchir ensemble — une complicité mentale réelle. Le défi est d’incarner cette connexion : deux signes peu démonstratifs, ils peuvent négliger la tendresse et rester dans les idées. Les couples qui durent cultivent l’expression émotionnelle et respectent leurs différences de fonctionnement au lieu de vouloir se convertir.',
      },
    ],
  },
  {
    slug: 'balance-sagittaire',
    signA: 'Balance',
    signB: 'Sagittaire',
    score: 4,
    titre: 'La charmeuse et l’aventurier, sextile joyeux',
    answerCapsule:
      'La compatibilité amoureuse entre la Balance et le Sagittaire est l’une des plus agréables du zodiaque. Le sextile Air-Feu fait circuler une énergie légère et joyeuse : la Balance charme et harmonise, le Sagittaire explore et enthousiasme. Ils partagent le goût des rencontres, des voyages et de la vie sociale, d’où une note de 4 sur 5. La Balance apporte la douceur et le raffinement, le Sagittaire l’aventure et l’optimisme. Ensemble, ils forment un couple sociable et cultivé qui ne s’ennuie jamais. Le défi tient à leurs besoins : la Balance veut de la présence et du romantisme, le Sagittaire de la liberté et de l’espace ; la franchise brute du Sagittaire heurte parfois la sensibilité diplomate de la Balance. Une consultation peut éclairer votre couple Balance-Sagittaire et son bel élan.',
    dynamique:
      'Balance et Sagittaire s’accordent avec une facilité rare. Le sextile Air-Feu crée une complicité vive et chaleureuse : la Balance, gouvernée par Vénus, vit dans la relation, l’harmonie, la beauté ; le Sagittaire, gouverné par Jupiter, vit dans l’aventure, la découverte, la quête de sens. La Balance est séduite par l’optimisme et l’ouverture du Sagittaire, qui élargit son horizon ; le Sagittaire est charmé par la grâce et la sociabilité de la Balance, qui adoucit sa fougue. Ensemble, ils aiment sortir, voyager, rencontrer, débattre — un couple tourné vers le monde et vers les autres. Leur relation est légère sans être superficielle, portée par une vraie estime mutuelle. La seule ombre tient à leurs besoins d’espace et de présence, qui ne coïncident pas toujours.',
    forces:
      'Une complicité sociale et intellectuelle éclatante, un goût partagé de l’aventure, de la culture et des rencontres, un optimisme commun et peu de conflits frontaux. Un couple ouvert sur le monde, cultivé et joyeux, où l’on ne s’ennuie jamais.',
    defis:
      'Présence contre liberté : la Balance a besoin de romantisme et d’attention, le Sagittaire de liberté et d’espace. La franchise sans filtre du Sagittaire heurte la sensibilité diplomate de la Balance, qui préfère la nuance et redoute la brusquerie.',
    conseil:
      'Balance : offrez au Sagittaire la liberté dont il a besoin sans y voir un désamour ; il revient toujours vers ce qui ne l’entrave pas. Sagittaire : adoucissez votre franchise avec la Balance, plus sensible qu’elle n’y paraît, et offrez-lui les attentions romantiques qu’elle attend.',
    faq: [
      {
        q: 'Balance et Sagittaire sont-ils compatibles ?',
        a: 'Oui, très bien : le sextile Air-Feu crée un couple sociable, joyeux et cultivé, où la grâce de la Balance rencontre l’aventure du Sagittaire, d’où une note de 4 sur 5. Ils partagent le goût des voyages, des rencontres et des échanges, sans jeux de pouvoir ni conflits lourds. Leur seul ajustement porte sur les besoins d’espace du Sagittaire et de romantisme de la Balance, à concilier.',
      },
      {
        q: 'Qu’est-ce qui unit ce couple ?',
        a: 'Leur ouverture au monde et leur optimisme partagé. Balance et Sagittaire aiment tous deux la vie sociale, la culture, les découvertes et les échanges d’idées : leur couple est tourné vers l’extérieur, curieux et joyeux. La Balance apporte le raffinement et la diplomatie, le Sagittaire l’enthousiasme et l’aventure — une complémentarité qui les stimule sans les opposer. Cette légèreté cultivée, faite d’estime mutuelle, est le vrai ciment de leur relation.',
      },
      {
        q: 'La liberté du Sagittaire pose-t-elle problème à la Balance ?',
        a: 'Un peu : la Balance a besoin de présence, d’attentions et de romantisme, quand le Sagittaire chérit son indépendance et son espace. La Balance peut se sentir négligée quand le Sagittaire s’élance vers ses aventures. Mais contrairement à des couples plus tendus, l’harmonie de base est telle que ce décalage se négocie facilement : le Sagittaire offre de l’attention, la Balance accorde de la liberté, et leur estime mutuelle absorbe le reste.',
      },
    ],
  },
  {
    slug: 'balance-capricorne',
    signA: 'Balance',
    signB: 'Capricorne',
    score: 3,
    titre: 'La relation et l’ambition, carré cardinal',
    answerCapsule:
      'La compatibilité amoureuse entre la Balance et le Capricorne unit deux signes cardinaux ambitieux, mais aux priorités opposées, dans un carré exigeant. La Balance d’Air place la relation et l’harmonie au centre ; le Capricorne de Terre place la carrière et la réussite. Tous deux apprécient le statut et l’élégance, d’où une note de 3 sur 5. La Balance apporte le charme et la diplomatie, le Capricorne la solidité et l’ambition. Mais la Balance a besoin de romantisme et de vie sociale que le Capricorne, absorbé par le travail et pudique, néglige ; le Capricorne trouve la Balance indécise et trop mondaine. L’une veut plaire, l’autre veut réussir. Pour durer, chacun doit faire de la place à la priorité de l’autre. Une consultation peut éclairer votre couple Balance-Capricorne.',
    dynamique:
      'Balance et Capricorne forment un carré entre deux signes cardinaux, l’un tourné vers la relation, l’autre vers l’accomplissement. La Balance, gouvernée par Vénus, met l’harmonie, le couple et la vie sociale au cœur de son existence ; le Capricorne, gouverné par Saturne, met l’ambition, le travail et la construction du statut. Ils se reconnaissent sur le terrain de l’élégance et de la réussite sociale : tous deux aiment un certain standing. La Balance est rassurée par la solidité du Capricorne, le Capricorne charmé par la grâce de la Balance. Mais leurs priorités s’affrontent : la Balance veut du temps à deux, du romantisme, de la vie mondaine ; le Capricorne se donne d’abord à sa carrière et exprime peu ses sentiments. L’une se sent négligée, l’autre trouve l’autre trop dépendante de la relation.',
    forces:
      'Un goût commun du statut, de l’élégance et de la réussite, une complémentarité — la Balance adoucit le Capricorne, le Capricorne structure la Balance —, et une ambition partagée de construire une vie respectable et durable ensemble.',
    defis:
      'Relation contre carrière : la Balance réclame présence, romantisme et vie sociale, le Capricorne se donne au travail et reste pudique. La Balance se sent négligée, le Capricorne trouve la Balance indécise et trop mondaine. Deux priorités qui se disputent le temps du couple.',
    conseil:
      'Capricorne : votre Balance a besoin de temps à deux et de marques d’affection, pas seulement de sécurité ; sortez du travail pour elle. Balance : reconnaissez que l’ambition du Capricorne est sa façon de construire votre avenir, et rassurez-le par votre constance.',
    faq: [
      {
        q: 'Balance et Capricorne sont-ils compatibles ?',
        a: 'C’est un couple de carré cardinal, exigeant mais constructible. Balance et Capricorne partagent le goût du statut, de l’élégance et de la réussite, d’où une note de 3 sur 5, mais leurs priorités s’opposent : la relation pour la Balance, la carrière pour le Capricorne. La complémentarité — charme et solidité — est réelle. La réussite dépend de leur capacité à faire de la place à la priorité de l’autre plutôt qu’à la lui reprocher.',
      },
      {
        q: 'Pourquoi la Balance se sent-elle négligée par le Capricorne ?',
        a: 'Parce que le Capricorne se consacre d’abord à son travail et à ses ambitions, et exprime peu ses sentiments par pudeur. La Balance, gouvernée par Vénus, a besoin de temps à deux, de romantisme et de vie sociale pour se sentir aimée ; elle vit l’investissement professionnel du Capricorne comme un abandon. Le Capricorne, lui, considère qu’il construit leur avenir. Le couple gagne à ce que le Capricorne sanctuarise du temps de couple et exprime son attachement.',
      },
      {
        q: 'Qu’est-ce qui rapproche ces deux signes ?',
        a: 'Leur goût commun de la réussite et de l’élégance. Balance et Capricorne apprécient tous deux un certain standing, une belle vie sociale, un statut respectable — ils forment souvent un couple soigné et ambitieux. La Balance apporte le charme, la diplomatie et le raffinement ; le Capricorne la solidité, la stratégie et l’endurance. Cette complémentarité, quand elle coopère au lieu de s’opposer sur les priorités, en fait un couple qui construit une vie durable et enviée.',
      },
    ],
  },
  {
    slug: 'balance-poissons',
    signA: 'Balance',
    signB: 'Poissons',
    score: 3,
    titre: 'Deux romantiques rêveurs, quinconce tendre',
    answerCapsule:
      'La compatibilité amoureuse entre la Balance et les Poissons unit deux romantiques rêveurs, mais de registres différents, en quinconce. La Balance d’Air aime avec grâce et harmonie, les Poissons d’Eau avec fusion et compassion. Tous deux fuient le conflit et idéalisent l’amour, d’où une note de 3 sur 5. La Balance apporte l’élégance et l’équilibre, les Poissons la tendresse et la profondeur émotionnelle. Mais la Balance vit dans le mental et la relation sociale, les Poissons dans l’émotion et le monde intérieur ; la Balance peut sembler trop détachée pour les Poissons avides de fusion, les Poissons trop flous et lunatiques pour la Balance. Deux évitants du conflit qui laissent les non-dits s’accumuler. Pour durer, chacun ancre l’autre. Une consultation peut éclairer votre couple Balance-Poissons si tendre.',
    dynamique:
      'Balance et Poissons forment un quinconce entre l’Air relationnel et l’Eau émotionnelle, unis par un même romantisme mais séparés par le registre. La Balance, gouvernée par Vénus, aime l’harmonie, la beauté, l’équilibre des relations ; les Poissons, gouvernés par Neptune, aiment la fusion, le rêve, la compassion infinie. Tous deux sont doux, tendres, allergiques au conflit et épris d’un idéal amoureux — ce qui crée une reconnaissance immédiate et une atmosphère de couple délicate. La Balance est charmée par la sensibilité des Poissons, les Poissons par la grâce apaisante de la Balance. Mais leurs mondes diffèrent : la Balance raisonne et socialise, les Poissons ressentent et se replient. La Balance peut paraître trop mentale pour les Poissons en quête de fusion, les Poissons trop insaisissables pour la Balance.',
    forces:
      'Un romantisme et une douceur partagés, une même horreur du conflit et de la brutalité, une sensibilité esthétique et émotionnelle commune. Deux âmes tendres qui créent une atmosphère de couple délicate, empreinte de gentillesse mutuelle.',
    defis:
      'Mental contre émotion : la Balance socialise et raisonne, les Poissons ressentent et se replient ; la Balance semble détachée aux Poissons, les Poissons flous à la Balance. Deux évitants du conflit laissent les non-dits fermenter, et aucun n’ancre solidement le concret.',
    conseil:
      'Balance : offrez aux Poissons la fusion émotionnelle et la profondeur qu’ils recherchent, au-delà de la seule harmonie de surface. Poissons : donnez à la Balance des repères clairs et de la présence ; et osez tous deux nommer ce qui fâche avant que le non-dit ne creuse une distance.',
    faq: [
      {
        q: 'Balance et Poissons sont-ils compatibles ?',
        a: 'Oui, avec tendresse : ces deux romantiques partagent la douceur, l’idéalisme amoureux et l’horreur du conflit, d’où une note de 3 sur 5. La Balance apporte l’élégance et l’équilibre, les Poissons la profondeur émotionnelle et la compassion. La relation est délicate et gentille. Son défi tient au registre — le mental relationnel de la Balance face à l’émotion fusionnelle des Poissons — et à leur commune tendance à éviter les vrais sujets.',
      },
      {
        q: 'Pourquoi la Balance semble-t-elle détachée aux Poissons ?',
        a: 'Parce que la Balance vit l’amour d’abord dans le mental et la relation sociale — la conversation, l’harmonie, la vie à deux et à plusieurs — quand les Poissons cherchent une fusion émotionnelle totale et une intimité profonde. Ce que la Balance offre comme équilibre et légèreté, les Poissons le vivent parfois comme un manque de profondeur ou de fusion. La Balance doit descendre du mental vers l’émotion pour combler la soif d’absolu des Poissons.',
      },
      {
        q: 'Ce couple gère-t-il bien les conflits ?',
        a: 'C’est justement leur faiblesse commune : Balance et Poissons fuient tous deux le conflit, l’une par amour de l’harmonie, l’autre par hypersensibilité. Résultat, les frustrations se taisent et les non-dits s’accumulent sous une paix de surface, jusqu’à créer une distance floue. La prévention est contre-nature pour eux : oser aborder tôt et avec douceur ce qui dérange, avant que l’évitement ne mine une relation par ailleurs très tendre.',
      },
    ],
  },
  {
    slug: 'scorpion-verseau',
    signA: 'Scorpion',
    signB: 'Verseau',
    score: 2,
    titre: 'La fusion contre la liberté, carré fixe électrique',
    answerCapsule:
      'La compatibilité amoureuse entre le Scorpion et le Verseau oppose la fusion à la liberté, dans un carré entre deux signes fixes. Le Scorpion d’Eau veut l’intensité, l’exclusivité, la profondeur ; le Verseau d’Air veut l’indépendance, la distance, la liberté. Deux volontés inflexibles aux besoins opposés, d’où une note de 2 sur 5. L’attirance est magnétique — le Scorpion fasciné par l’insaisissable Verseau, le Verseau intrigué par l’intensité du Scorpion — mais la jalousie possessive du Scorpion se heurte de plein fouet au besoin de liberté du Verseau. Le Scorpion veut tout fusionner, le Verseau tout préserver ; aucun ne cède. Pour tenir, le Scorpion doit lâcher le contrôle et le Verseau offrir de l’engagement. Une consultation peut éclairer ce couple Scorpion-Verseau si électrique.',
    dynamique:
      'Scorpion et Verseau forment un carré entre deux signes fixes, l’un des affrontements les plus électriques du zodiaque. Le Scorpion, gouverné par Pluton, vit dans l’intensité émotionnelle, la fusion, l’exclusivité et le contrôle ; le Verseau, gouverné par Uranus, vit dans le détachement, la liberté, l’indépendance et le collectif. L’attirance est puissante et magnétique : le Scorpion est fasciné par ce Verseau insaisissable qui échappe à son emprise, le Verseau intrigué par la profondeur intense du Scorpion. Mais leurs besoins sont diamétralement opposés : le Scorpion veut posséder et fusionner, le Verseau veut respirer et rester libre. Deux volontés fixes qui ne plient jamais transforment cette différence en lutte de pouvoir. Le Scorpion resserre l’étreinte, le Verseau s’échappe davantage — un cercle vicieux difficile à briser.',
    forces:
      'Une attraction magnétique et une fascination mutuelle, une intensité qui interdit l’indifférence, et une complémentarité possible : le Verseau apprend au Scorpion le lâcher-prise, le Scorpion apprend au Verseau la profondeur émotionnelle. Deux personnalités fortes qui se respectent.',
    defis:
      'Fusion contre liberté, possessivité contre indépendance : la jalousie du Scorpion étouffe le Verseau, dont le détachement rend le Scorpion méfiant. Deux signes fixes qui ne cèdent jamais figent le conflit en lutte de pouvoir sur le contrôle et la distance.',
    conseil:
      'Scorpion : votre Verseau ne se retient pas, il se donne à qui ne l’enferme pas ; lâchez le contrôle, c’est votre seule chance de le garder. Verseau : l’intensité du Scorpion est un besoin d’engagement, pas une menace ; offrez-lui de la loyauté et de la présence rassurante.',
    faq: [
      {
        q: 'Scorpion et Verseau sont-ils compatibles ?',
        a: 'C’est l’une des combinaisons les plus difficiles du zodiaque, un carré entre deux signes fixes aux besoins opposés : fusion et exclusivité pour le Scorpion, liberté et distance pour le Verseau. L’attirance magnétique est forte, mais la note de 2 sur 5 reflète le choc frontal de leurs natures. Deux volontés qui ne cèdent jamais transforment leurs différences en lutte de pouvoir. La relation ne tient que si le Scorpion lâche le contrôle et le Verseau offre de l’engagement.',
      },
      {
        q: 'Pourquoi la jalousie du Scorpion pose-t-elle problème au Verseau ?',
        a: 'Parce que le Verseau a un besoin viscéral d’indépendance et de liberté, exactement ce que la possessivité intense du Scorpion cherche à contrôler. Plus le Scorpion, jaloux et fusionnel, resserre son étreinte, plus le Verseau se sent enfermé et s’échappe — ce qui aggrave la méfiance du Scorpion. C’est un cercle vicieux typique de ce couple. Le Scorpion doit comprendre que la confiance et la liberté données sont ce qui retient un Verseau, jamais la surveillance.',
      },
      {
        q: 'Qu’est-ce qui attire ces deux signes malgré tout ?',
        a: 'Leur fascination réciproque. Le Scorpion, habitué à percer les gens, se heurte à un Verseau insaisissable qui échappe à son radar — et cette énigme le rend obsessionnel. Le Verseau, détaché de la plupart des émotions, est intrigué par l’intensité brute et la profondeur du Scorpion, si étrangère à son univers cérébral. Cette attraction des opposés est magnétique, presque hypnotique. Mais l’attirance ne suffit pas : sans travail sur le contrôle et la liberté, elle se consume en conflits.',
      },
    ],
  },
  {
    slug: 'sagittaire-verseau',
    signA: 'Sagittaire',
    signB: 'Verseau',
    score: 4,
    titre: 'Deux esprits libres, sextile visionnaire',
    answerCapsule:
      'La compatibilité amoureuse entre le Sagittaire et le Verseau est l’une des plus libres et complices du zodiaque. Le sextile Feu-Air unit deux amoureux de l’indépendance, des idées et de l’aventure : le Sagittaire explore le monde, le Verseau réinvente l’avenir. Aucun ne cherche à posséder l’autre, d’où une note de 4 sur 5. Le Sagittaire est stimulé par la vision originale du Verseau, le Verseau par l’optimisme aventureux du Sagittaire. Leur amour ressemble à une amitié passionnée entre esprits libres, sans jalousie ni routine. Le défi tient à l’émotionnel : deux signes cérébraux et indépendants peuvent négliger la tendresse et l’engagement concret. Pour durer, ils incarnent leur complicité au lieu de rester dans les idées. Une consultation peut éclairer votre couple Sagittaire-Verseau si stimulant.',
    dynamique:
      'Sagittaire et Verseau s’accordent avec une aisance rare. Le sextile Feu-Air unit deux esprits épris de liberté : le Sagittaire, gouverné par Jupiter, cherche l’aventure, le sens, l’expansion vers de nouveaux horizons ; le Verseau, gouverné par Uranus, cherche l’innovation, les idées, un avenir meilleur. Ils partagent un même refus de l’enfermement, une même curiosité insatiable et un même idéalisme tourné vers plus grand qu’eux. Le Sagittaire est enthousiasmé par la vision d’avant-garde du Verseau, le Verseau par l’optimisme et l’ouverture du Sagittaire. Leur couple ressemble à une amitié amoureuse d’explorateurs — voyages, débats, projets, causes communes — porté par un respect total de l’indépendance de chacun. Ni jalousie ni possessivité : deux électrons libres qui choisissent de faire route ensemble.',
    forces:
      'Une liberté mutuelle totale sans jalousie, une stimulation intellectuelle permanente, un idéalisme et une curiosité partagés, et une amitié profonde sous l’amour. Deux esprits libres qui ne s’ennuient ni ne s’étouffent jamais, tournés ensemble vers l’aventure et les idées.',
    defis:
      'Le déficit émotionnel : deux cérébraux indépendants peuvent intellectualiser les sentiments et négliger la tendresse. Leur commun refus de l’engagement classique et du concret peut laisser la relation flotter, sans ancrage ni vie matérielle solide.',
    conseil:
      'Cultivez délibérément la tendresse et la présence physique : votre complicité mentale est exceptionnelle, mais elle a besoin d’un corps et d’un cœur pour devenir un amour complet. Et ancrez ensemble le concret, votre angle mort commun, pour que l’aventure ait des fondations.',
    faq: [
      {
        q: 'Sagittaire et Verseau sont-ils compatibles ?',
        a: 'Oui, remarquablement : le sextile Feu-Air unit deux amoureux de la liberté, des idées et de l’aventure, sans jalousie ni possessivité, d’où une note de 4 sur 5. Le Sagittaire explore, le Verseau innove, et chacun respecte totalement l’indépendance de l’autre. Leur couple ressemble à une amitié passionnée entre esprits libres. Son seul chantier est l’émotionnel : deux signes cérébraux doivent cultiver consciemment la tendresse et l’engagement concret.',
      },
      {
        q: 'Qu’est-ce qui rend ce couple si complice ?',
        a: 'Leur amour partagé de la liberté et des idées. Sagittaire et Verseau détestent tous deux l’enfermement, adorent apprendre, débattre et explorer, et portent un même idéalisme tourné vers le monde. Chacun stimule l’autre au lieu de le brider : le Sagittaire élargit les horizons du Verseau, le Verseau donne une vision d’avenir aux aventures du Sagittaire. Cette complicité intellectuelle, doublée d’un respect total de l’indépendance, fait d’eux l’un des couples les plus fluides du zodiaque.',
      },
      {
        q: 'Ce couple manque-t-il de tendresse ?',
        a: 'C’est son risque principal. Deux signes cérébraux et indépendants comme le Sagittaire et le Verseau peuvent privilégier les idées, l’aventure et la complicité mentale au détriment de l’expression émotionnelle et de la fusion tendre. La relation, brillante et libre, peut alors ressembler à une amitié survitaminée. Les couples qui durent cultivent volontairement le contact physique, la vulnérabilité et les gestes d’affection, pour que leur belle entente d’esprits devienne un amour incarné.',
      },
    ],
  },
];
