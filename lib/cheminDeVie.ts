// Chemin de vie (life path number) records for /chemin-de-vie/[number]/.
//
// Live DataForSEO, Google FR, 2026-08-27: "chemin de vie" (6 600/mo KD 6),
// "calculer chemin de vie" (4 400/mo KD 0-3), "chemin de vie [N]" (~3 600/mo
// each, KD 0). The hub at /chemin-de-vie/ targets the parent keyword; each
// number page targets "chemin de vie [N]" with a love-first reading.
//
// Source of truth for numerology calculations: lib/numerology.ts
// (lifePathNumber, LIFE_PATH_MEANINGS). Compatibility claims in this file
// MUST match those in LIFE_PATH_MEANINGS.
//
// Publication gate: a page is generated ONLY if validateCheminDeVieRecord()
// returns no issue.

export interface CheminDeVieFaq {
  q: string;
  a: string;
}

export interface CheminDeVieEntry {
  number: number;
  slug: string;
  titre: string;
  titleSuffix: string;
  answerCapsule: string;
  portrait: string;
  forces: string[];
  defis: string[];
  compatibilite: { best: number[]; good: number[]; challenging: number[] };
  faq: CheminDeVieFaq[];
  liensSite: { label: string; href: string }[];
}

export function findCheminDeVie(slug: string): CheminDeVieEntry | undefined {
  return CHEMIN_DE_VIE_ENTRIES.find((e) => e.slug === slug);
}

/** Live records only, same publication gate the sitemap and the router use. */
export function getLiveCheminDeVie(): CheminDeVieEntry[] {
  return CHEMIN_DE_VIE_ENTRIES.filter((e) => validateCheminDeVieRecord(e).length === 0);
}

/** Card view-model consumed by the hub page’s grid section. */
export function getCheminDeVieHubCards() {
  return getLiveCheminDeVie().map((e) => ({
    slug: e.slug,
    number: e.number,
    titre: e.titre,
    titleSuffix: e.titleSuffix,
    href: `/chemin-de-vie/${e.slug}/`,
  }));
}

const SLUG_RE = /^chemin-de-vie-[1-9]$/;

/** Quality gate: a record below these thresholds must not produce a page. */
export function validateCheminDeVieRecord(e: CheminDeVieEntry): string[] {
  const issues: string[] = [];
  if (!SLUG_RE.test(e.slug)) issues.push(`${e.slug}: slug must be "chemin-de-vie-[1-9]"`);
  if (e.number < 1 || e.number > 9) issues.push(`${e.slug}: number must be 1-9`);
  if (e.slug !== `chemin-de-vie-${e.number}`) issues.push(`${e.slug}: slug/number mismatch`);

  const answerWords = e.answerCapsule.trim().split(/\s+/u).filter(Boolean).length;
  if (answerWords < 150 || answerWords > 170) {
    issues.push(`${e.slug}: answerCapsule must contain 150-170 words (found ${answerWords})`);
  }

  if (e.portrait.length < 300) issues.push(`${e.slug}: portrait too short (min 300 chars, found ${e.portrait.length})`);
  if (e.titleSuffix.length < 10) issues.push(`${e.slug}: titleSuffix too short`);
  if (e.titre.length < 5) issues.push(`${e.slug}: titre too short`);
  if (e.forces.length < 3 || e.forces.length > 5) issues.push(`${e.slug}: forces must have 3-5 items`);
  if (e.defis.length < 3 || e.defis.length > 5) issues.push(`${e.slug}: defis must have 3-5 items`);

  if (!e.compatibilite.best.length) issues.push(`${e.slug}: compatibilite.best is empty`);
  if (!e.compatibilite.good.length) issues.push(`${e.slug}: compatibilite.good is empty`);
  if (!e.compatibilite.challenging.length) issues.push(`${e.slug}: compatibilite.challenging is empty`);
  const allCompat = [...e.compatibilite.best, ...e.compatibilite.good, ...e.compatibilite.challenging];
  for (const n of allCompat) {
    if (n < 1 || n > 9) issues.push(`${e.slug}: invalid compatibility number ${n}`);
  }

  if (e.faq.length < 3) issues.push(`${e.slug}: fewer than 3 FAQ`);
  e.faq.forEach((f, i) => {
    if (f.a.length < 150) issues.push(`${e.slug}: faq[${i}] answer too short (min 150 chars, found ${f.a.length})`);
  });

  if (e.liensSite.length < 1) issues.push(`${e.slug}: must have at least 1 internal link`);

  return issues;
}

export const CHEMIN_DE_VIE_ENTRIES: CheminDeVieEntry[] = [
  {
    number: 1,
    slug: 'chemin-de-vie-1',
    titre: 'Chemin de vie 1',
    titleSuffix: 'le pionnier en amour',
    answerCapsule:
      'Le chemin de vie 1 en amour dessine le profil d’une personne qui aime en leader. Ce nombre porte une énergie d’initiative et d’indépendance qui se traduit dans la relation par un besoin de conduire, de décider et de se sentir admiré par son partenaire. Le 1 ne cherche pas une moitié qui le complète : il cherche un allié qui reconnaît sa force sans tenter de la brider. En couple, cette impulsion devient un vrai moteur, car le 1 est celui qui prend la première décision, qui relance quand la routine menace, qui organise sans qu’on le lui demande. Le revers se manifeste quand cette énergie se transforme en rigidité : le 1 supporte mal qu’on lui dise non, négocie difficilement et confond parfois leadership et contrôle. Sa compatibilité la plus naturelle se joue avec les chemins 3, 5 et 6, qui offrent chacun un espace suffisant pour laisser le 1 exister sans entrer en rivalité.',
    portrait:
      'En amour, le chemin de vie 1 fonctionne par conquête. La phase de séduction l’anime profondément : il veut surprendre, impressionner, remporter l’adhésion de l’autre. Une fois le couple installé, le défi change de nature. Le 1 a besoin de sentir qu’il reste choisi chaque jour, pas par insécurité, mais parce que l’admiration est le carburant de son attachement. Le partenaire qui cesse de le valoriser verra le 1 se refermer ou chercher ailleurs cette reconnaissance. Sa manière d’aimer passe par l’action plus que par la parole : il protège, il organise, il résout. Le risque principal est l’unilatéralité, car le 1 décide souvent pour deux sans consulter. La relation fonctionne quand le partenaire sait poser des limites claires tout en laissant au 1 un espace de leadership légitime.',
    forces: [
      'Capacité d’initiative : le 1 n’attend jamais que l’autre fasse le premier pas',
      'Loyauté envers le partenaire choisi, qu’il défend sans hésitation',
      'Énergie qui relance la relation quand elle risque de stagner',
      'Générosité concrète : il montre son amour par des actes, pas par des mots creux',
    ],
    defis: [
      'Tendance à vouloir diriger la relation au lieu de la partager',
      'Difficulté à accepter le compromis, vécu comme une forme de recul',
      'Impatience face aux besoins émotionnels du partenaire',
      'Risque de confondre attention et contrôle',
    ],
    compatibilite: { best: [3, 5, 6], good: [2, 9], challenging: [1, 4, 7, 8] },
    faq: [
      {
        q: 'Le chemin de vie 1 est-il fidèle en amour ?',
        a: 'Le 1 est fidèle par fierté autant que par attachement. Quand il a choisi un partenaire, il le défend et le soutient avec constance. La fidélité du 1 tient tant que l’admiration circule dans les deux sens : s’il se sent ignoré, sous-estimé ou mis en concurrence, il ne trahit pas mécaniquement, mais il se désinvestit émotionnellement avant de partir.',
      },
      {
        q: 'Quels sont les défauts du chemin de vie 1 en couple ?',
        a: 'Le 1 en couple a tendance à décider seul, à couper court aux discussions émotionnelles qu’il juge improductives et à confondre protection avec contrôle. Son besoin d’indépendance peut donner au partenaire l’impression d’être secondaire par rapport à ses projets personnels. Ces défauts se corrigent quand le 1 apprend à écouter sans résoudre immédiatement.',
      },
      {
        q: 'Chemin de vie 1 et 6 forment-ils un bon couple ?',
        a: 'La combinaison 1-6 est l’une des plus complémentaires. Le 6 offre au 1 le foyer stable et l’attention affective dont il a besoin sans les lui imposer. Le 1, de son côté, apporte l’élan et la direction qui empêchent le 6 de tomber dans la routine. Le point de vigilance reste la tendance du 1 à prendre les décisions familiales sans concerter le 6, qui a besoin d’être inclus.',
      },
    ],
    liensSite: [
      { label: 'Numérologie amoureuse : les bases', href: '/methodes-voyance/numerologie-amoureuse/' },
      { label: 'Voyance gratuite en amour', href: '/voyance-gratuite-amour/' },
    ],
  },
  {
    number: 2,
    slug: 'chemin-de-vie-2',
    titre: 'Chemin de vie 2',
    titleSuffix: 'le diplomate du cœur',
    answerCapsule:
      'Le chemin de vie 2 est le nombre du partenariat. En amour, il désigne une personne qui ressent les émotions de l’autre avec une finesse parfois déroutante, au point de capter une tension avant même qu’elle soit formulée. Le 2 cherche l’harmonie absolue dans le couple et fait de la relation son centre de gravité. Sa force est l’écoute : il entend ce qui n’est pas dit, anticipe les besoins et désamorce les conflits avant qu’ils n’éclatent. Mais cette même sensibilité le rend vulnérable au rejet, qu’il perçoit dans des détails que la plupart des gens ne remarquent pas : un ton légèrement sec, un regard absent, un message plus court que d’habitude. Le risque principal du 2 est de s’oublier dans la relation, de céder systématiquement pour éviter le conflit et de nourrir une frustration silencieuse qui finit par éclater. Sa compatibilité naturelle se joue avec les chemins 2, 6 et 8, qui lui offrent chacun une forme de stabilité affective.',
    portrait:
      'Le chemin de vie 2 construit l’amour par la présence. Là où le 1 séduit par l’action, le 2 séduit par l’attention portée à l’autre. Il remarque le détail, retient la date, perçoit le changement d’humeur. Cette qualité fait de lui un partenaire précieux, mais elle se retourne quand le 2 devient dépendant de la réciprocité : il donne beaucoup et attend en silence la même chose, sans la demander. Les conflits le blessent de manière disproportionnée et il préfère encaisser plutôt que confronter, ce qui crée un décalage invisible entre ce qu’il ressent et ce qu’il montre. Le partenaire idéal du 2 est quelqu’un qui sait nommer ses propres émotions à voix haute, parce que le 2 a besoin de ce modèle pour apprendre à exprimer les siennes au lieu de les deviner chez l’autre.',
    forces: [
      'Empathie naturelle qui rend la communication fluide même dans les périodes tendues',
      'Fidélité profonde, construite sur l’attachement émotionnel plutôt que sur le devoir',
      'Capacité à créer un espace de douceur où l’autre se sent accueilli sans jugement',
      'Sens aigu du compromis, qui désamorce les crises avant qu’elles ne s’installent',
    ],
    defis: [
      'Dépendance émotionnelle : le 2 peut faire de la relation son unique source de bien-être',
      'Tendance à éviter le conflit au prix de sa propre vérité',
      'Hypersensibilité au rejet, même involontaire ou imaginaire',
      'Difficulté à poser des limites claires sans culpabiliser',
    ],
    compatibilite: { best: [2, 6, 8], good: [4, 9], challenging: [1, 3, 5, 7] },
    faq: [
      {
        q: 'Pourquoi le chemin de vie 2 a-t-il peur du conflit en couple ?',
        a: 'Le 2 perçoit le conflit comme une menace directe sur le lien. Sa sensibilité capte les tensions bien avant qu’elles ne soient visibles, et l’anticipation du choc le pousse à céder ou à minimiser plutôt qu’à affronter. Ce réflexe protège la surface du couple mais accumule une pression souterraine qui, à terme, peut provoquer une rupture plus violente que les petites confrontations qu’il cherchait à éviter.',
      },
      {
        q: 'Le chemin de vie 2 est-il compatible avec le 5 ?',
        a: 'La combinaison 2-5 est souvent difficile. Le 5 a besoin de mouvement, de nouveauté et d’espace, trois choses que le 2 interprète facilement comme un désintérêt. Le 2 cherche la proximité constante, ce que le 5 ressent comme un enfermement. Le couple peut fonctionner si les deux posent des règles claires sur l’espace personnel, mais la tension de fond reste présente.',
      },
      {
        q: 'Comment le chemin de vie 2 vit-il une rupture amoureuse ?',
        a: 'Le 2 vit la rupture comme une amputation. Sa tendance à fusionner émotionnellement avec le partenaire rend la séparation particulièrement douloureuse, car il perd en même temps l’autre et la partie de lui-même qu’il avait construite dans la relation. La reconstruction passe par le réapprentissage de la solitude comme un espace habitable, pas comme un manque à combler.',
      },
    ],
    liensSite: [
      { label: 'Numérologie amoureuse', href: '/methodes-voyance/numerologie-amoureuse/' },
      { label: 'Compatibilité amoureuse', href: '/sentiments/compatibilite-amoureuse/' },
    ],
  },
  {
    number: 3,
    slug: 'chemin-de-vie-3',
    titre: 'Chemin de vie 3',
    titleSuffix: 'l’artiste en amour',
    answerCapsule:
      'Le chemin de vie 3 en amour est celui de la joie partagée. Ce nombre porte une énergie de créativité, d’expression et de légèreté qui transforme la relation en terrain de jeu : le 3 séduit par l’humour, surprend par l’inventivité et maintient la flamme par sa capacité à réinventer le quotidien. Sa présence rend le couple vivant, car il refuse la routine avec une sincérité presque physique. Le revers de cette énergie se manifeste dans la profondeur : le 3 peut fuir les conversations difficiles, esquiver les sujets de fond et remplacer l’intimité émotionnelle par le divertissement. Il craint l’ennui plus que la solitude, ce qui le pousse parfois à multiplier les relations plutôt qu’à approfondir celle qu’il a. Le partenaire qui le retient est celui qui sait alterner entre légèreté et gravité sans le forcer. Les chemins 1, 5 et 9 sont ses alliés les plus naturels en amour.',
    portrait:
      'Le chemin de vie 3 aime avec les mots, les gestes et l’humour. Il communique ses sentiments avec une facilité que beaucoup lui envient, mais cette aisance cache un évitement : le 3 parle volontiers de ce qu’il ressent tant que la conversation reste légère, et se ferme dès qu’elle touche des blessures réelles. En couple, il est le compagnon que tout le monde veut avoir à table, chaleureux, drôle, attentif au plaisir de l’autre, mais il est aussi celui qui change de sujet quand on aborde l’avenir, les engagements ou les douleurs anciennes. La relation avec un 3 fonctionne quand le partenaire accepte cette oscillation sans la prendre pour de la superficialité. Derrière la façade joyeuse, le 3 porte souvent une peur du vide que seule une intimité construite dans la durée finit par calmer.',
    forces: [
      'Charme naturel et aisance relationnelle qui rendent la rencontre facile',
      'Créativité dans le couple : idées, surprises, manières inédites de montrer l’amour',
      'Optimisme contagieux qui aide le partenaire à traverser les phases sombres',
      'Capacité à désamorcer les tensions par l’humour sans les minimiser',
    ],
    defis: [
      'Fuite devant les conversations émotionnelles profondes',
      'Crainte de l’ennui qui peut se traduire par une instabilité sentimentale',
      'Tendance à séduire par réflexe, même en couple, ce qui crée de l’insécurité chez le partenaire',
      'Difficulté à s’engager dans la durée quand l’enthousiasme du début retombe',
    ],
    compatibilite: { best: [1, 5, 9], good: [3, 6], challenging: [2, 4, 7, 8] },
    faq: [
      {
        q: 'Le chemin de vie 3 a-t-il du mal à s’engager ?',
        a: 'Le 3 ne fuit pas l’engagement par principe, il fuit l’ennui. S’il perçoit la relation comme un cadre fermé où la spontanéité disparaît, il se désengage progressivement. Le 3 s’engage pleinement quand le couple reste un espace de surprise, de projets partagés et de conversations qui ne se répètent pas. La clé n’est pas de le retenir, mais de renouveler ce qui le stimule.',
      },
      {
        q: 'Le chemin de vie 3 est-il compatible avec le 4 ?',
        a: 'La combinaison 3-4 est l’une des plus contrastées. Le 4 veut de la stabilité, des habitudes et un cadre prévisible ; le 3 veut du mouvement, de l’imprévu et de la fantaisie. Le 4 reprochera au 3 son manque de sérieux, le 3 reprochera au 4 sa rigidité. Le couple peut tenir si chacun reconnaît la valeur de ce que l’autre apporte, mais cela demande une maturité que ces deux nombres n’atteignent pas toujours au même moment.',
      },
      {
        q: 'Comment aimer un chemin de vie 3 ?',
        a: 'Aimer un 3 demande de la légèreté sans la superficialité. Il a besoin d’un partenaire qui rit avec lui, qui propose des activités nouvelles et qui ne transforme pas chaque discussion en bilan de couple. En contrepartie, ce même partenaire doit savoir ramener la conversation sur le fond quand c’est nécessaire, sans dramatiser. Le 3 respecte la profondeur quand elle arrive naturellement, pas quand elle est imposée.',
      },
    ],
    liensSite: [
      { label: 'Numérologie amoureuse', href: '/methodes-voyance/numerologie-amoureuse/' },
      { label: 'Voyance gratuite en amour', href: '/voyance-gratuite-amour/' },
    ],
  },
  {
    number: 4,
    slug: 'chemin-de-vie-4',
    titre: 'Chemin de vie 4',
    titleSuffix: 'le bâtisseur du couple',
    answerCapsule:
      'Le chemin de vie 4 en amour est celui de la construction. Ce nombre cherche la sécurité affective avant tout et bâtit la relation comme il bâtirait une maison : fondations solides, murs droits, rien qui ne soit posé sans raison. Le 4 est le partenaire sur qui on peut compter quand tout le reste vacille. Il ne promet pas la passion éblouissante des premiers jours : il promet d’être là au mille-et-unième. Sa loyauté n’est pas spectaculaire, elle est quotidienne, et c’est précisément ce qui la rend rare. Le revers de cette fiabilité est la rigidité : le 4 supporte mal l’imprévu, résiste au changement et peut transformer le couple en organisation où les rôles sont figés. Il exprime mal ses émotions, non par indifférence mais parce qu’il ne trouve pas les mots ; il préfère réparer une étagère que formuler un je t’aime. Les chemins 2, 4 et 8 sont ses alliés naturels en amour.',
    portrait:
      'Le chemin de vie 4 aborde la relation comme un projet de long terme. Il planifie, il budgétise, il prévoit. Cette approche rassure les partenaires qui cherchent de la stabilité, mais elle frustre ceux qui ont besoin de spontanéité. Le 4 montre son amour par des actes concrets : il répare, il conduit, il s’occupe des choses pratiques sans qu’on le lui demande. Quand le couple traverse une crise, le 4 ne fuit pas ; il reste et travaille. Son angle mort est l’expression émotionnelle. Il peut aimer profondément et ne jamais trouver le moyen de le dire autrement que par sa présence. Le partenaire du 4 doit apprendre à lire l’amour dans les gestes plutôt que dans les déclarations, et à ne pas confondre pudeur émotionnelle et froideur.',
    forces: [
      'Fiabilité absolue : le 4 tient ses promesses, même les petites',
      'Capacité à construire une vie de couple structurée et sécurisante',
      'Endurance dans les crises, il ne part pas au premier obstacle',
      'Sens pratique qui résout les problèmes concrets du quotidien',
    ],
    defis: [
      'Rigidité face à l’imprévu et au changement de plans',
      'Difficulté à exprimer ses émotions par les mots',
      'Tendance à transformer le couple en routine prévisible',
      'Résistance à la spontanéité et aux décisions prises sur un coup de tête',
    ],
    compatibilite: { best: [2, 4, 8], good: [6, 7], challenging: [1, 3, 5, 9] },
    faq: [
      {
        q: 'Le chemin de vie 4 est-il ennuyeux en couple ?',
        a: 'Le 4 n’est pas ennuyeux, il est constant. La confusion vient du fait que sa manière d’aimer n’est pas démonstrative : il ne surprend pas par des grands gestes, il rassure par sa présence. Si votre besoin premier est la sécurité affective, le 4 est le partenaire le plus solide du cycle numérologique. Si votre besoin est la nouveauté permanente, le décalage sera réel, mais il ne vient pas d’un manque chez le 4.',
      },
      {
        q: 'Comment le chemin de vie 4 gère-t-il les conflits ?',
        a: 'Le 4 gère les conflits en cherchant une solution pratique plutôt qu’en explorant l’émotion. Il veut régler le problème, pas en parler pendant des heures. Cette approche fonctionne pour les disputes concrètes, mais elle échoue face aux malentendus émotionnels où le partenaire a besoin d’être entendu, pas réparé. Le 4 qui apprend à écouter sans résoudre améliore considérablement la qualité de sa relation.',
      },
      {
        q: 'Le chemin de vie 4 et le 5 peuvent-ils fonctionner ensemble ?',
        a: 'C’est l’une des combinaisons les plus tendues du cycle. Le 4 veut s’enraciner, le 5 veut s’envoler. Le 4 vit le besoin de liberté du 5 comme une menace, le 5 vit le besoin de structure du 4 comme une prison. Le couple peut tenir si les deux acceptent de vivre à des rythmes différents sans interpréter cette différence comme un manque d’amour, ce qui demande un travail conscient des deux côtés.',
      },
    ],
    liensSite: [
      { label: 'Numérologie amoureuse', href: '/methodes-voyance/numerologie-amoureuse/' },
      { label: 'Compatibilité amoureuse', href: '/sentiments/compatibilite-amoureuse/' },
    ],
  },
  {
    number: 5,
    slug: 'chemin-de-vie-5',
    titre: 'Chemin de vie 5',
    titleSuffix: 'l’aventurier du cœur',
    answerCapsule:
      'Le chemin de vie 5 en amour est celui de la passion et de la liberté. Ce nombre porte une énergie de mouvement qui se traduit dans la relation par un besoin viscéral de nouveauté, de découverte et d’espace. Le 5 est le partenaire qui rend la vie électrique : avec lui, les week-ends improvisisés, les conversations jusqu’à trois heures du matin et les voyages décidés la veille font partie du quotidien. Sa présence est un anti-routine naturel. Le revers de cette énergie est la crainte de l’enfermement : le 5 associe la stabilité à la stagnation, et il peut quitter une relation saine par simple peur de s’y installer. Il confond parfois nouveauté et épanouissement, ce qui le pousse à chercher dehors ce qu’il pourrait trouver en approfondissant ce qu’il a. Le 5 a besoin d’un partenaire qui accepte son rythme sans le subir. Les chemins 1, 3 et 7 sont ses alliés naturels en amour.',
    portrait:
      'Le chemin de vie 5 vit l’amour comme une aventure. La rencontre le galvanise, la découverte de l’autre le fascine, et les premiers mois sont souvent intenses et passionnés. Le défi commence quand la relation entre dans sa phase quotidienne : le 5 ressent un malaise physique face à la répétition. Il a besoin que le couple reste un espace de liberté, pas un cadre de contraintes. Cela ne veut pas dire qu’il est incapable d’engagement ; cela veut dire que son engagement passe par d’autres chemins que la routine partagée. Le 5 reste quand il peut continuer à se sentir vivant dans la relation, et il part quand il se sent enfermé. Le partenaire qui lui convient est celui qui garde sa propre vie, ses propres projets et ses propres passions, car le 5 respecte l’indépendance qu’il trouve chez l’autre autant que celle qu’il réclame pour lui-même.',
    forces: [
      'Passion et intensité qui rendent la relation vivante et stimulante',
      'Adaptabilité face aux changements de vie que le couple traverse',
      'Ouverture d’esprit qui accepte l’autre tel qu’il est, sans le formater',
      'Énergie de renouvellement qui empêche le couple de s’endormir',
    ],
    defis: [
      'Peur de l’engagement perçu comme une perte de liberté',
      'Tendance à fuir les phases calmes de la relation au lieu de les habiter',
      'Recherche permanente de nouveauté qui peut déstabiliser le partenaire',
      'Impatience face aux conversations lentes et aux processus émotionnels',
    ],
    compatibilite: { best: [1, 3, 7], good: [5, 9], challenging: [2, 4, 6, 8] },
    faq: [
      {
        q: 'Le chemin de vie 5 peut-il rester fidèle ?',
        a: 'Le 5 est fidèle quand il se sent libre. Le paradoxe n’est qu’apparent : ce qui pousse le 5 à chercher ailleurs n’est pas un manque d’amour mais un manque d’air. Quand la relation lui laisse l’espace de respirer, de voyager seul parfois, de garder ses amitiés et ses projets, le 5 n’a aucune raison de fuir. La fidélité du 5 se gagne en relâchant la pression, pas en la renforçant.',
      },
      {
        q: 'Quels signes montrent qu’un chemin de vie 5 est amoureux ?',
        a: 'Le 5 amoureux inclut l’autre dans ses aventures. Quand il commence à proposer des voyages à deux, à partager ses découvertes et à intégrer le partenaire dans sa vie au lieu de la garder séparée, c’est le signe qu’il s’engage réellement. Un 5 qui reste immobile pour quelqu’un pose un acte plus fort qu’une déclaration, car il sacrifie ce qui compte le plus pour lui : le mouvement.',
      },
      {
        q: 'Le chemin de vie 5 et le 2 sont-ils compatibles ?',
        a: 'Cette combinaison demande beaucoup de travail. Le 2 a besoin de proximité émotionnelle constante, le 5 a besoin d’espace régulier. Chacun peut vivre les besoins de l’autre comme un rejet : le 2 se sent abandonné quand le 5 part, le 5 se sent étouffé quand le 2 s’accroche. Si les deux apprennent à ne pas interpréter la distance comme un manque d’amour, le couple gagne une vraie complémentarité.',
      },
    ],
    liensSite: [
      { label: 'Numérologie amoureuse', href: '/methodes-voyance/numerologie-amoureuse/' },
      { label: 'Voyance gratuite en amour', href: '/voyance-gratuite-amour/' },
    ],
  },
  {
    number: 6,
    slug: 'chemin-de-vie-6',
    titre: 'Chemin de vie 6',
    titleSuffix: 'le gardien du foyer amoureux',
    answerCapsule:
      'Le chemin de vie 6 est le nombre le plus orienté vers l’amour et la famille. En couple, le 6 prend soin : il nourrit la relation avec une constance qui impressionne, anticipe les besoins du partenaire et place le bien-être du foyer au-dessus de ses propres envies. Sa manière d’aimer passe par le dévouement, parfois jusqu’à l’oubli de soi. Le 6 veut que l’autre soit heureux, et il organise sa vie autour de cet objectif avec une détermination tranquille. Le revers de cette générosité est la possessivité déguisée en attention : le 6 peut étouffer en croyant protéger et contrôler en croyant prendre soin. Il attend aussi de la gratitude, rarement formulée, et l’absence de reconnaissance le blesse profondément. Le partenaire idéal du 6 sait recevoir sans dépendance et donner sans qu’on le lui demande. Les chemins 2, 4 et 9 sont ses alliés les plus naturels en amour.',
    portrait:
      'Le chemin de vie 6 place le couple au centre de sa vie. Il organise, il prépare, il anticipe. Sa présence est rassurante parce qu’elle est orientée vers l’autre : le 6 retient les préférences du partenaire, prépare le repas qui fait plaisir, aménage l’espace pour que chacun s’y sente bien. Ce dévouement est sincère, pas stratégique, mais il porte un risque : le 6 peut perdre le contact avec ses propres désirs à force de servir ceux de l’autre. Quand cette perte de soi s’installe, le 6 devient amer sans comprendre pourquoi, car il a donné sans compter et ne reçoit pas ce qu’il n’a jamais su demander. La relation avec un 6 fonctionne quand le partenaire refuse activement l’asymétrie : il prend l’initiative de donner plutôt que d’attendre, et il encourage le 6 à exprimer ce dont il a besoin pour lui-même.',
    forces: [
      'Dévouement naturel qui fait du couple un espace de soin et de chaleur',
      'Sens du foyer, il crée un environnement où le partenaire se sent en sécurité',
      'Patience dans les phases difficiles, il ne lâche pas au premier obstacle',
      'Capacité à maintenir l’harmonie quotidienne sans effort apparent',
    ],
    defis: [
      'Tendance à l’oubli de soi, qui génère une frustration souterraine',
      'Possessivité déguisée en protection ou en attention',
      'Besoin de reconnaissance rarement formulé, qui crée des attentes silencieuses',
      'Difficulté à laisser le partenaire gérer ses propres problèmes sans intervenir',
    ],
    compatibilite: { best: [2, 4, 9], good: [1, 3, 6], challenging: [5, 7, 8] },
    faq: [
      {
        q: 'Le chemin de vie 6 est-il trop possessif ?',
        a: 'Le 6 n’est pas possessif par jalousie, il l’est par dévouement. Sa volonté de tout organiser pour le bien du partenaire glisse facilement vers le contrôle quand il ne perçoit pas la différence entre prendre soin et décider à la place de l’autre. Le 6 qui apprend à poser la question au lieu de deviner le besoin transforme sa tendance possessive en attention respectueuse, et c’est souvent cette nuance qui sauve ses relations.',
      },
      {
        q: 'Pourquoi le chemin de vie 6 attire-t-il des partenaires dépendants ?',
        a: 'Le 6 attire les profils dépendants parce qu’il offre spontanément ce qu’ils cherchent : un cadre, une structure, quelqu’un qui prend les choses en main. Le 6 y trouve en retour le sentiment d’utilité qui le rassure. Le problème est que cette dynamique s’auto-renforce et que le 6 finit par porter la relation seul. Sortir de ce schéma demande de choisir un partenaire autonome, ce qui oblige le 6 à valoriser autre chose que le besoin qu’on a de lui.',
      },
      {
        q: 'Le chemin de vie 6 et le 9 sont-ils compatibles en amour ?',
        a: 'Oui, le 6 et le 9 forment un couple naturellement harmonieux. Les deux partagent un sens du service, le 6 tourné vers le foyer, le 9 tourné vers le monde. Leur point de friction vient précisément de là : le 6 peut reprocher au 9 de trop donner à l’extérieur au détriment du couple, et le 9 peut trouver le 6 trop centré sur la sphère domestique. Quand ils trouvent l’équilibre entre intérieur et extérieur, la complémentarité est remarquable.',
      },
    ],
    liensSite: [
      { label: 'Numérologie amoureuse', href: '/methodes-voyance/numerologie-amoureuse/' },
      { label: 'Compatibilité amoureuse', href: '/sentiments/compatibilite-amoureuse/' },
    ],
  },
  {
    number: 7,
    slug: 'chemin-de-vie-7',
    titre: 'Chemin de vie 7',
    titleSuffix: 'le mystique de la relation',
    answerCapsule:
      'Le chemin de vie 7 en amour est celui de la profondeur silencieuse. Ce nombre cherche une connexion qui dépasse le corps et les habitudes : il veut comprendre l’autre, pas seulement le fréquenter. Le 7 est le partenaire qui pose la question que personne d’autre ne pose, qui remarque le décalage entre ce que vous dites et ce que vous ressentez, qui préfère un tête-à-tête profond à une soirée entourée. Sa manière d’aimer passe par l’intellect et l’esprit avant de passer par le geste. Le revers de cette intensité intérieure est la distance apparente : le 7 a besoin de solitude pour fonctionner, et cette retraite régulière déroute le partenaire qui la lit comme un rejet. Il ne livre pas ses émotions facilement, non par secret mais parce qu’il les analyse avant de les partager. Le 7 peut aussi verser dans le jugement, car son regard analytique s’applique au partenaire autant qu’au reste. Les chemins 5 et 7 sont ses alliés naturels en amour.',
    portrait:
      'Le chemin de vie 7 construit l’amour par la compréhension. Il veut savoir qui est l’autre, pas en surface mais dans sa mécanique intime. Cette curiosité rend le début de la relation intellectuellement passionnant, car le 7 écoute avec une attention rare et retient ce qui compte. Le 7 ne tombe pas amoureux vite : il observe, il pèse, il teste la solidité de ce qu’il ressent. Une fois engagé, sa fidélité est profonde mais discrète. Le principal obstacle du 7 en amour est la solitude choisie qu’il impose au couple. Il a besoin de lire seul, de marcher seul, de penser seul, et cette exigence non négociable crée un vide que le partenaire comble parfois par de l’inquiétude. Le couple fonctionne quand le partenaire respecte ces retraits sans les interpréter comme un abandon.',
    forces: [
      'Écoute profonde qui va au-delà des mots et perçoit ce qui est tu',
      'Fidélité construite sur la réflexion, pas sur l’impulsion',
      'Capacité à poser les bonnes questions dans les moments de crise',
      'Richesse intérieure qui nourrit la relation sur le long terme',
    ],
    defis: [
      'Besoin de solitude mal compris par le partenaire, vécu comme un rejet',
      'Tendance à analyser la relation au lieu de la vivre',
      'Difficulté à exprimer ses émotions spontanément',
      'Regard parfois critique qui peut blesser sans intention de nuire',
    ],
    compatibilite: { best: [5, 7], good: [4, 9], challenging: [1, 2, 3, 6, 8] },
    faq: [
      {
        q: 'Le chemin de vie 7 est-il capable d’aimer ?',
        a: 'Le 7 aime avec une profondeur que peu de nombres atteignent. La question ne porte pas sur sa capacité mais sur sa manière : le 7 n’exprime pas l’amour par des déclarations ou des gestes spectaculaires, il l’exprime par l’attention, la compréhension et la présence silencieuse. Le partenaire qui attend des mots sera frustré ; celui qui sait lire la loyauté dans les actes quotidiens trouvera un attachement d’une rare solidité.',
      },
      {
        q: 'Pourquoi le chemin de vie 7 a-t-il besoin de tant de solitude ?',
        a: 'La solitude du 7 n’est pas un retrait émotionnel, c’est un mode de fonctionnement. Le 7 pense, analyse et recharge son énergie dans le silence. Sans ces moments, il devient irritable, distant et incapable de donner au partenaire l’attention qu’il mérite. Le comprendre transforme la dynamique du couple : la solitude du 7 cesse d’être une menace et devient un rythme partagé qui améliore la qualité du temps ensemble.',
      },
      {
        q: 'Le chemin de vie 7 et le 5 sont-ils compatibles ?',
        a: 'Oui, et la compatibilité surprend. Le 5 apporte au 7 le mouvement et la stimulation sensorielle qui le sortent de sa tendance à l’isolement. Le 7 offre au 5 la profondeur et le sens que ses aventures ne lui donnent pas seul. Les deux respectent le besoin d’indépendance de l’autre, ce qui élimine la principale source de tension dans les relations du 7. Le couple fonctionne tant que le 5 ne confond pas le retrait du 7 avec du désintérêt.',
      },
    ],
    liensSite: [
      { label: 'Numérologie amoureuse', href: '/methodes-voyance/numerologie-amoureuse/' },
      { label: 'Voyance gratuite en amour', href: '/voyance-gratuite-amour/' },
    ],
  },
  {
    number: 8,
    slug: 'chemin-de-vie-8',
    titre: 'Chemin de vie 8',
    titleSuffix: 'l’ambitieux en amour',
    answerCapsule:
      'Le chemin de vie 8 en amour lie la relation à la réussite. Ce nombre porte une énergie de pouvoir et d’ambition qui se retrouve dans le couple : le 8 veut construire quelque chose de solide avec son partenaire, un projet, un foyer, une vie qui impressionne autant qu’elle rassure. Sa manière d’aimer passe par la protection matérielle et la générosité concrète ; il offre la sécurité financière, le cadre de vie, la stabilité que d’autres rêvent. Le revers de cette force est la priorité donnée à la carrière. Le 8 peut reporter indéfiniment les moments de couple au nom d’un objectif professionnel qui ne finit jamais, et sa tendance à tout mesurer s’applique parfois au partenaire lui-même, évalué selon ce qu’il apporte plutôt que selon ce qu’il est. Le 8 a besoin d’un partenaire qui admire sa force sans la subir. Les chemins 2, 4 et 6 sont ses alliés naturels en amour.',
    portrait:
      'Le chemin de vie 8 aborde l’amour comme un investissement, au sens noble du terme : il donne beaucoup, mais il attend un retour. Sa générosité est réelle, souvent spectaculaire, cadeaux, voyages, sécurité financière, mais elle porte une condition implicite : le partenaire doit reconnaître la valeur de ce qui est offert. Le 8 ne supporte pas l’ingratitude, même quand elle est involontaire. En couple, il tend à prendre le rôle de celui qui fournit, et il mesure sa propre valeur amoureuse à sa capacité de donner du concret. Ce fonctionnement le rend vulnérable : s’il perd sa position professionnelle ou financière, il se sent indigne d’être aimé. Le partenaire du 8 l’aide en l’aimant pour ce qu’il est, pas pour ce qu’il possède ou fournit.',
    forces: [
      'Générosité matérielle et protection concrète du foyer',
      'Détermination qui porte le couple à travers les obstacles financiers et pratiques',
      'Sens de la construction qui donne à la relation un cap et des objectifs communs',
      'Fiabilité dans l’adversité, le 8 ne fuit pas quand les temps sont durs',
    ],
    defis: [
      'Tendance à prioriser la carrière au détriment du temps de couple',
      'Difficulté à séparer la valeur personnelle de la réussite matérielle',
      'Autorité dans la relation qui peut glisser vers le contrôle',
      'Attente implicite de gratitude qui crée un déséquilibre émotionnel',
    ],
    compatibilite: { best: [2, 4, 6], good: [8], challenging: [1, 3, 5, 7, 9] },
    faq: [
      {
        q: 'Le chemin de vie 8 fait-il passer le travail avant le couple ?',
        a: 'Oui, c’est sa tendance naturelle. Le 8 associe le travail à la protection du foyer : dans sa logique, travailler plus revient à mieux aimer, car il fournit davantage. Le problème est que le partenaire ne perçoit pas l’absence comme une preuve d’amour. Le 8 qui veut préserver son couple doit apprendre que la présence est un acte de soin au même titre que la provision matérielle, et que le temps ne se rattrape pas.',
      },
      {
        q: 'Quels sont les points forts du chemin de vie 8 en couple ?',
        a: 'Le 8 apporte au couple une structure que peu de nombres offrent. Il est celui qui construit le cadre de vie, qui planifie les vacances, qui assure la stabilité financière. Quand le couple traverse une crise pratique, le 8 est à son meilleur : organisé, résolu, increvable. Sa générosité n’est pas dans les mots mais dans les actes concrets, et un partenaire qui sait lire l’amour dans les gestes trouvera en lui un allié d’une solidité rare.',
      },
      {
        q: 'Le chemin de vie 8 et le 2 forment-ils un bon couple ?',
        a: 'Oui, la combinaison 8-2 est l’une des plus complémentaires. Le 8 apporte la force, la structure et la sécurité matérielle ; le 2 apporte la douceur, l’empathie et l’intelligence émotionnelle. Le risque principal est l’asymétrie de pouvoir : si le 8 décide seul et que le 2 suit par habitude, le déséquilibre finit par étouffer le 2. Le couple tient quand le 8 écoute activement et quand le 2 ose poser ses limites.',
      },
    ],
    liensSite: [
      { label: 'Numérologie amoureuse', href: '/methodes-voyance/numerologie-amoureuse/' },
      { label: 'Compatibilité amoureuse', href: '/sentiments/compatibilite-amoureuse/' },
    ],
  },
  {
    number: 9,
    slug: 'chemin-de-vie-9',
    titre: 'Chemin de vie 9',
    titleSuffix: 'le sage de l’amour',
    answerCapsule:
      'Le chemin de vie 9 en amour est celui de l’idéal et de la générosité sans condition. Ce nombre porte une vision de l’amour qui dépasse le couple : le 9 cherche une relation qui serve quelque chose de plus grand, une mission commune, un sens partagé, un engagement qui rejaillit au-delà du foyer. Sa manière d’aimer est généreuse et désintéressée ; il donne du temps, de l’énergie et de l’attention sans compter. Le revers de cet idéalisme est la difficulté à habiter le quotidien : le 9 peut être présent pour l’humanité et absent pour son partenaire, disponible pour la grande cause et indisponible pour la vaisselle. Il place aussi la barre très haut, pour lui-même et pour l’autre, ce qui rend la relation exigeante. Le partenaire idéal du 9 est quelqu’un qui partage sa vision sans se noyer dedans. Les chemins 3, 6 et 9 sont ses alliés naturels en amour.',
    portrait:
      'Le chemin de vie 9 aime avec ampleur. Son attachement n’est pas territorial : il ne cherche pas à posséder, il cherche à partager un élan. Cette ouverture rend le 9 profondément attachant, car il aime sans condition, sans calcul et sans arrière-pensée. Mais elle le rend aussi vulnérable à un piège spécifique : le 9 peut aimer l’humanité plus facilement qu’une personne en particulier. Le passage de l’amour universel à l’amour intime lui demande un effort que d’autres nombres font naturellement. En couple, le 9 est le partenaire qui soutient les rêves de l’autre, qui encourage les projets fous et qui pardonne avec une sincérité désarmante. Son angle mort est le quotidien concret : les courses, les horaires, les compromis domestiques l’ennuient et il les délègue, ce qui frustre le partenaire qui assure seul la logistique.',
    forces: [
      'Générosité d’esprit qui accueille l’autre sans jugement ni condition',
      'Vision partagée qui donne au couple un sens et une direction',
      'Capacité de pardon sincère, qui permet de dépasser les crises',
      'Ouverture au monde qui enrichit la vie du couple',
    ],
    defis: [
      'Difficulté à s’investir dans les détails concrets du quotidien',
      'Idéalisme qui peut rendre le partenaire réel insuffisant face au partenaire rêvé',
      'Tendance à se disperser entre le couple et les causes extérieures',
      'Difficulté à recevoir autant qu’il donne, créant un déséquilibre dans l’échange',
    ],
    compatibilite: { best: [3, 6, 9], good: [1, 5, 7], challenging: [2, 4, 8] },
    faq: [
      {
        q: 'Le chemin de vie 9 est-il trop idéaliste en amour ?',
        a: 'Le 9 est idéaliste, et c’est à la fois sa force et son piège. Sa vision élevée de l’amour tire le couple vers le haut, mais elle crée aussi une déception quand la réalité ne suit pas. Le 9 qui accepte que l’amour quotidien est fait de petits actes autant que de grandes visions devient un partenaire remarquable. Le travail est d’apprendre que le concret n’est pas un compromis, c’est la matière même de l’amour.',
      },
      {
        q: 'Pourquoi le chemin de vie 9 a-t-il du mal avec la routine de couple ?',
        a: 'Le 9 fonctionne par élans et par missions. La routine, qui demande de la répétition et de l’attention au détail, mobilise un type d’énergie qui n’est pas le sien. Il préfère le geste large au geste quotidien, le projet ambitieux à la liste de courses. Le partenaire du 9 gagne à répartir clairement les tâches plutôt qu’à attendre du 9 qu’il devienne organisé, car cette attente est vouée à l’échec et crée du ressentiment inutile.',
      },
      {
        q: 'Le chemin de vie 9 et le 3 forment-ils un bon couple ?',
        a: 'La combinaison 9-3 est l’une des plus belles du cycle numérologique. Le 3 apporte la joie, l’humour et la créativité qui allègent la gravité du 9. Le 9 offre au 3 un idéal qui donne du sens à son énergie. Les deux sont généreux et tournés vers l’extérieur, ce qui crée un couple vivant et ouvert. Leur point de vigilance est la gestion pratique : aucun des deux n’est naturellement organisé, et les tâches concrètes risquent de s’accumuler.',
      },
    ],
    liensSite: [
      { label: 'Numérologie amoureuse', href: '/methodes-voyance/numerologie-amoureuse/' },
      { label: 'Voyance gratuite en amour', href: '/voyance-gratuite-amour/' },
    ],
  },
];
