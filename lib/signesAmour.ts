// Per-sign love-profile records — data layer for /astrologie-amour/[signe]/.
//
// The 4th dictionary network, and the one that meshes the others: each sign
// page auto-links to its 11 compatibility pairs (via pairSlug over
// COMPATIBILITY_PAIRS), the sign-selector / synastry tools, and the tarot
// network. Built to the site's semantic-SEO standard (answer capsule +
// question structure + entity density) with gendered homme/femme sections to
// capture "homme scorpion en amour" / "femme balance amoureuse" intent.
//
// Publication gate: a sign page is generated ONLY if its record passes
// validateSignRecord. Slug is a clean ASCII kebab of the sign name.

export interface SignFaq {
  q: string;
  a: string;
}

export interface SignLoveProfile {
  slug: string;
  name: string;
  emoji: string;
  element: string;
  planet: string;
  dates: string;
  /** 3 love keywords */
  mots: string[];
  answerCapsule: string;
  enAmour: string;
  homme: string;
  femme: string;
  celibataire: string;
  couple: string;
  seduction: string;
  defauts: string;
  faq: SignFaq[];
}

export function findSign(slug: string): SignLoveProfile | undefined {
  return SIGNES_AMOUR.find((s) => s.slug === slug);
}

/** Quality gate — a record below these thresholds must not produce a page. */
export function validateSignRecord(s: SignLoveProfile): string[] {
  const issues: string[] = [];
  if (s.answerCapsule.length < 400) issues.push(`${s.slug}: answerCapsule too short`);
  if (s.enAmour.length < 300) issues.push(`${s.slug}: enAmour too short`);
  if (s.homme.length < 150) issues.push(`${s.slug}: homme too short`);
  if (s.femme.length < 150) issues.push(`${s.slug}: femme too short`);
  if (s.celibataire.length < 120) issues.push(`${s.slug}: celibataire too short`);
  if (s.couple.length < 120) issues.push(`${s.slug}: couple too short`);
  if (s.seduction.length < 120) issues.push(`${s.slug}: seduction too short`);
  if (s.defauts.length < 120) issues.push(`${s.slug}: defauts too short`);
  if (s.faq.length < 3) issues.push(`${s.slug}: fewer than 3 FAQ`);
  s.faq.forEach((f, i) => {
    if (f.a.length < 150) issues.push(`${s.slug}: faq[${i}] answer too short`);
  });
  return issues;
}

export const SIGNES_AMOUR: SignLoveProfile[] = [
  {
    slug: 'belier',
    name: 'Bélier',
    emoji: '♈',
    element: 'Feu',
    planet: 'Mars',
    dates: '21 mars – 19 avril',
    mots: ['Passionné', 'Conquérant', 'Impulsif'],
    answerCapsule:
      'En amour, le Bélier est un signe de Feu gouverné par Mars, la planète du désir et de la conquête. Il aime avec fougue, franchise et intensité : quand un Bélier s’éprend, il fonce, séduit sans détour et déteste les jeux ambigus. La conquête l’électrise, mais la routine peut l’éteindre — il a besoin de défi, de spontanéité et de passion renouvelée pour rester engagé. Loyal et protecteur une fois conquis, il se montre aussi impatient, parfois jaloux, et supporte mal qu’on le freine. Le Bélier séduit par son audace et sa vitalité communicative. Ses meilleures compatibilités amoureuses se jouent souvent avec les autres signes de Feu et les signes d’Air qui attisent sa flamme. Pour comprendre comment votre Bélier vit vraiment l’amour et vers quelle union il est le plus attiré, une consultation de voyance amoureuse éclaire sa dynamique de cœur.',
    enAmour:
      'Le Bélier vit l’amour comme une conquête permanente : direct, entier, incapable de tiédeur. Premier signe du zodiaque, il incarne l’élan, l’initiative et le désir brut. Il tombe amoureux vite et fort, exprime ses sentiments sans détour et attend la même franchise en retour. Son moteur est la passion : tant que le feu brûle, il est un partenaire ardent et généreux. Mais l’installation et la routine sont ses ennemies — il a besoin de sentir que la relation reste vivante, surprenante, un peu conquise chaque jour.',
    homme:
      'L’homme Bélier en amour est un fonceur : il prend l’initiative, déclare sa flamme sans tourner autour du pot et adore séduire. Protecteur et généreux, il aime se sentir le héros de sa partenaire. Son côté impulsif et sa jalousie latente demandent une partenaire assez sûre d’elle pour ne pas se laisser dominer, mais assez tendre pour apaiser son feu.',
    femme:
      'La femme Bélier en amour est indépendante, franche et initiatrice : elle n’attend pas qu’on la choisisse, elle choisit. Passionnée et directe, elle déteste les faux-semblants et fuit les partenaires trop mous. Elle a besoin d’admirer autant que d’être admirée, et donne une relation intense à qui sait soutenir son rythme sans étouffer sa liberté.',
    celibataire:
      'Célibataire, le Bélier ne le reste jamais longtemps par manque d’audace : il ose aborder, propose, avance. Le risque est de confondre le frisson de la conquête avec l’amour durable. Une rencontre le comble quand elle allie défi, complicité et intensité.',
    couple:
      'En couple, le Bélier apporte énergie, passion et spontanéité. Il déteste l’ennui et cherche à garder la relation vivante par des projets et des surprises. Son défi : transformer l’ardeur des débuts en engagement patient, sans fuir dès que la routine pointe.',
    seduction:
      'Pour séduire un Bélier, misez sur la franchise et le défi : il déteste les jeux tièdes mais adore qu’on lui résiste un peu. Montrez de l’assurance, de l’indépendance et de l’enthousiasme. Proposez de l’action plutôt que de longues attentes, et laissez-le mener la conquête sans jamais vous perdre vous-même.',
    defauts:
      'Les défauts du Bélier en amour tiennent à son impatience et son impulsivité : il veut tout, tout de suite, et supporte mal la frustration. Sa jalousie et son besoin de dominer peuvent créer des tensions, tout comme sa tendance à se lasser dès que le défi disparaît. Apprendre la patience est sa grande leçon amoureuse.',
    faq: [
      {
        q: 'Comment aime le Bélier ?',
        a: 'Le Bélier aime avec passion, franchise et intensité. Signe de Feu gouverné par Mars, il fonce dès qu’il s’éprend, séduit sans détour et déteste l’ambiguïté. La conquête l’électrise et il se montre loyal et protecteur une fois engagé, mais il a besoin de spontanéité et de défi pour ne pas se lasser. La routine est son principal ennemi amoureux.',
      },
      {
        q: 'Quels signes sont les plus compatibles avec le Bélier en amour ?',
        a: 'Le Bélier s’entend souvent le mieux avec les autres signes de Feu (Lion, Sagittaire), qui partagent son énergie, et avec les signes d’Air (Gémeaux, Balance, Verseau), qui attisent sa flamme sans l’étouffer. Les signes de Terre et d’Eau, plus lents ou plus sensibles, demandent davantage d’ajustements. Chaque couple reste unique au-delà du seul soleil.',
      },
      {
        q: 'Pourquoi le Bélier se lasse-t-il en amour ?',
        a: 'Le Bélier ne se lasse pas de l’amour mais de la routine : son moteur est la conquête et la passion renouvelée. Quand une relation s’installe sans surprise ni projet, son feu peut baisser. Il ne s’agit pas d’infidélité de nature mais d’un besoin de sentir le lien vivant. Entretenir le défi et la complicité le garde engagé sur la durée.',
      },
    ],
  },
  {
    slug: 'taureau',
    name: 'Taureau',
    emoji: '♉',
    element: 'Terre',
    planet: 'Vénus',
    dates: '20 avril – 20 mai',
    mots: ['Sensuel', 'Fidèle', 'Possessif'],
    answerCapsule:
      'En amour, le Taureau est un signe de Terre gouverné par Vénus, la planète de l’amour et du plaisir. Il aime lentement mais profondément : une fois attaché, il l’est pour longtemps, avec une fidélité et une constance rares. Le Taureau recherche la stabilité, la sécurité affective et une sensualité pleine — le toucher, le confort et les plaisirs partagés sont sa vraie langue amoureuse. Patient et rassurant, il construit une relation solide, mais son besoin de possession et son entêtement peuvent peser. Il déteste le changement brusque et la jalousie le guette. Le Taureau séduit par sa douceur, sa fiabilité et sa générosité sensorielle. Ses meilleures compatibilités se jouent souvent avec les signes de Terre et d’Eau, qui partagent son besoin de stabilité et de tendresse. Pour comprendre comment votre Taureau aime et ce qui le sécurise vraiment, une consultation de voyance amoureuse éclaire sa dynamique de cœur.',
    enAmour:
      'Le Taureau vit l’amour comme un ancrage : il ne se donne pas à la légère mais, une fois engagé, il offre une loyauté à toute épreuve. Gouverné par Vénus, il associe l’amour au plaisir des sens, au confort et à la beauté du quotidien. Il prouve ses sentiments par des gestes concrets — présence fiable, tendresse, petits plaisirs partagés — plus que par de grandes déclarations. Sa lenteur à s’attacher est en réalité une garantie de sérieux : le Taureau qui aime, aime pour durer.',
    homme:
      'L’homme Taureau en amour est un roc : fiable, sensuel et attentionné, il construit lentement mais sûrement. Il aime gâter sa partenaire et offrir un cadre sécurisant. Son revers est la possessivité et l’entêtement : il supporte mal la jalousie comme le changement imposé. Une partenaire patiente et tendre obtient de lui une fidélité inébranlable.',
    femme:
      'La femme Taureau en amour est sensuelle, loyale et profondément attachée à la stabilité. Elle donne beaucoup une fois en confiance, mais teste d’abord la fiabilité de l’autre. Têtue et un brin possessive, elle a besoin de sécurité et de gestes concrets pour se sentir aimée. Rassurée, elle devient une partenaire d’une constance et d’une douceur rares.',
    celibataire:
      'Célibataire, le Taureau prend son temps : il observe, teste la sécurité et ne se lance qu’une fois rassuré. Il préfère une relation qui s’installe qu’une aventure sans lendemain. La patience est sa meilleure alliée, l’impatience de l’autre son principal repoussoir.',
    couple:
      'En couple, le Taureau est stable, fidèle et sensuel : il bâtit un foyer confortable et durable. Son défi est de résister à la routine et de lâcher un peu de contrôle et de possessivité. Quand il se sent en sécurité, il devient le partenaire le plus rassurant du zodiaque.',
    seduction:
      'Pour séduire un Taureau, jouez la carte de la sincérité, de la douceur et de la patience : il se méfie de ce qui va trop vite. Soignez les plaisirs des sens — un bon repas, un cadre agréable, du contact tendre — et montrez-vous fiable et constant. La sécurité que vous inspirez ouvre son cœur bien plus que la séduction spectaculaire.',
    defauts:
      'Les défauts du Taureau en amour sont la possessivité, l’entêtement et la résistance au changement. Il peut confondre amour et propriété, s’accrocher à ses habitudes et bouder longtemps quand il se sent bousculé. Sa jalousie, discrète mais tenace, demande à être apaisée par la réassurance plutôt que par la provocation.',
    faq: [
      {
        q: 'Comment aime le Taureau ?',
        a: 'Le Taureau aime lentement mais profondément, avec une fidélité rare. Signe de Terre gouverné par Vénus, il associe l’amour à la sécurité, à la sensualité et au confort. Il prouve ses sentiments par des gestes concrets plutôt que par de grandes paroles. Sa lenteur à s’attacher garantit son sérieux : quand un Taureau aime, c’est pour durer, à condition de se sentir en sécurité.',
      },
      {
        q: 'Quels signes sont les plus compatibles avec le Taureau ?',
        a: 'Le Taureau s’accorde souvent le mieux avec les signes de Terre (Vierge, Capricorne), qui partagent son goût de la stabilité, et avec les signes d’Eau (Cancer, Scorpion, Poissons), dont la tendresse nourrit sa sensibilité. Les signes de Feu et d’Air, plus mobiles, peuvent le séduire mais demandent davantage d’ajustements de rythme. Chaque couple reste unique.',
      },
      {
        q: 'Le Taureau est-il fidèle en amour ?',
        a: 'Oui, le Taureau est l’un des signes les plus fidèles du zodiaque une fois réellement engagé. Sa fidélité découle de son besoin de stabilité et de son aversion pour le changement. Il ne se lance pas à la légère, mais son attachement, une fois installé, est durable et loyal. La sécurité affective renforce cette constance ; l’insécurité, à l’inverse, réveille sa jalousie.',
      },
    ],
  },
  {
    slug: 'gemeaux',
    name: 'Gémeaux',
    emoji: '♊',
    element: 'Air',
    planet: 'Mercure',
    dates: '21 mai – 20 juin',
    mots: ['Curieux', 'Léger', 'Communicant'],
    answerCapsule:
      'En amour, le Gémeaux est un signe d’Air gouverné par Mercure, la planète de la communication et de l’esprit. Il séduit par sa vivacité, son humour et sa curiosité insatiable : avec un Gémeaux, on ne s’ennuie jamais. La conversation est son premier terrain de séduction — il tombe amoureux d’un esprit avant tout. Léger et joueur, il a besoin de liberté, de nouveauté et de stimulation intellectuelle pour rester attaché. Sa versatilité et son besoin d’air peuvent le faire paraître insaisissable ou inconstant, mais c’est souvent l’ennui qu’il fuit, pas l’amour. Le Gémeaux séduit par sa légèreté et sa capacité à tout rendre amusant. Ses meilleures compatibilités se jouent souvent avec les autres signes d’Air et les signes de Feu, qui suivent son rythme. Pour comprendre comment votre Gémeaux aime et ce qui le retient vraiment, une consultation de voyance amoureuse éclaire sa dynamique de cœur.',
    enAmour:
      'Le Gémeaux vit l’amour comme un jeu et une conversation infinie : il a besoin de complicité mentale autant que de tendresse. Signe double, il peut souffler le chaud et le froid, non par calcul mais parce que son esprit va vite et cherche sans cesse la nouveauté. Il séduit par les mots, l’humour et la curiosité qu’il porte à l’autre. Sa peur secrète est l’enfermement : il donne le meilleur de lui-même dans une relation qui préserve sa liberté et nourrit son besoin d’échange.',
    homme:
      'L’homme Gémeaux en amour est un charmeur spirituel : il séduit par la parole, l’humour et sa curiosité pour l’autre. Insaisissable et parfois inconstant, il fuit la routine et l’étouffement. Il s’attache durablement à qui sait le surprendre, dialoguer et lui laisser de l’espace. La complicité intellectuelle est sa vraie porte d’entrée amoureuse.',
    femme:
      'La femme Gémeaux en amour est vive, indépendante et communicante : elle a besoin de liberté et de stimulation pour ne pas se lasser. Elle séduit par son esprit et sa fraîcheur, mais déteste être enfermée dans un rôle. Un partenaire qui la fait rire, la suit dans ses idées et respecte son autonomie gagne un cœur aussi joueur que fidèle à sa manière.',
    celibataire:
      'Célibataire, le Gémeaux multiplie les rencontres et les conversations : il aime explorer avant de se fixer. Le risque est de papillonner sans jamais choisir. Une relation le capte quand elle allie complicité mentale, humour et liberté préservée.',
    couple:
      'En couple, le Gémeaux apporte légèreté, dialogue et jeunesse d’esprit. Son défi est l’ancrage émotionnel : il analyse parfois les sentiments plutôt que de les vivre. Il reste engagé tant que la relation le stimule et ne l’enferme pas dans une routine figée.',
    seduction:
      'Pour séduire un Gémeaux, misez tout sur l’esprit : conversation vive, humour, curiosité partagée. Surprenez-le, changez de registre, ne devenez jamais prévisible. Laissez-lui de l’air et de la liberté plutôt que de le presser. Un Gémeaux tombe amoureux d’une personne avec qui parler pendant des heures sans voir le temps passer.',
    defauts:
      'Les défauts du Gémeaux en amour sont l’inconstance, la difficulté à s’engager et une tendance à intellectualiser les émotions. Il peut sembler insaisissable, changer d’avis, fuir dès que la relation devient trop pesante. Sa légèreté, précieuse au quotidien, devient un obstacle quand il s’agit de plonger dans la profondeur émotionnelle.',
    faq: [
      {
        q: 'Comment aime le Gémeaux ?',
        a: 'Le Gémeaux aime par l’esprit : il lui faut de la complicité mentale, de l’humour et de la nouveauté autant que de la tendresse. Signe d’Air gouverné par Mercure, il séduit par les mots et fuit l’ennui plus que l’engagement. Sa versatilité vient de son besoin de stimulation, pas d’un manque de cœur. Il s’attache durablement à qui préserve sa liberté et nourrit sa curiosité.',
      },
      {
        q: 'Quels signes sont les plus compatibles avec le Gémeaux ?',
        a: 'Le Gémeaux s’entend souvent le mieux avec les autres signes d’Air (Balance, Verseau), avec qui la connexion mentale est immédiate, et avec les signes de Feu (Bélier, Lion, Sagittaire), qui partagent son goût du mouvement. Les signes d’Eau et de Terre, plus profonds ou plus stables, peuvent le séduire mais demandent des ajustements. Chaque couple reste unique.',
      },
      {
        q: 'Pourquoi le Gémeaux souffle-t-il le chaud et le froid ?',
        a: 'Le Gémeaux est un signe double : son esprit va vite et oscille entre l’envie de proximité et le besoin de liberté. Ce chaud et froid traduit rarement un calcul, plutôt une ambivalence naturelle et la peur de l’enfermement. Il ne fuit pas l’amour mais la routine. Un partenaire qui reste léger, stimulant et peu envahissant apaise cette alternance.',
      },
    ],
  },
  {
    slug: 'cancer',
    name: 'Cancer',
    emoji: '♋',
    element: 'Eau',
    planet: 'la Lune',
    dates: '21 juin – 22 juillet',
    mots: ['Tendre', 'Protecteur', 'Sensible'],
    answerCapsule:
      'En amour, le Cancer est un signe d’Eau gouverné par la Lune, l’astre des émotions et de l’intériorité. Il aime avec une tendresse et une profondeur rares : pour lui, aimer, c’est protéger, nourrir et construire un foyer. Extrêmement sensible et intuitif, le Cancer ressent tout, devine les non-dits et s’investit corps et âme une fois en confiance. Il recherche la sécurité affective avant tout et se referme comme une carapace au moindre signe de danger. Fidèle et dévoué, il peut aussi devenir possessif, susceptible ou lunatique, ses humeurs suivant ses marées intérieures. Le Cancer séduit par sa douceur, son écoute et son sens du cocon. Ses meilleures compatibilités se jouent souvent avec les signes d’Eau et de Terre, qui savent l’envelopper et le rassurer. Pour comprendre comment votre Cancer aime et ce qui apaise ses peurs, une consultation de voyance amoureuse éclaire sa dynamique de cœur.',
    enAmour:
      'Le Cancer vit l’amour comme un refuge : il cherche moins la passion spectaculaire que la sécurité et la tendresse durable. Gouverné par la Lune, il fonctionne à l’émotion et à l’intuition, ressent les ambiances et les non-dits avec une acuité désarmante. Il se donne pleinement une fois rassuré, mais protège d’abord sa vulnérabilité derrière une carapace. Son foyer, ses proches et son couple forment son univers : le Cancer aime pour bâtir un nid et y déployer une tendresse sans limites.',
    homme:
      'L’homme Cancer en amour est attentionné, protecteur et profondément sentimental. Il crée un cocon rassurant et devine les besoins de sa partenaire. Sa sensibilité le rend susceptible et parfois lunatique : il boude quand il est blessé plutôt que d’exprimer sa peine. Rassuré et aimé sans jeu, il offre une fidélité et une tendresse d’une rare constance.',
    femme:
      'La femme Cancer en amour est intuitive, maternelle et fusionnelle : elle aime prendre soin et se sentir indispensable. Elle a besoin d’une sécurité affective forte et se protège tant qu’elle doute. Ses marées d’humeur suivent son monde intérieur. À qui sait la rassurer et honorer sa sensibilité, elle offre un amour enveloppant et loyal.',
    celibataire:
      'Célibataire, le Cancer avance à reculons : il rêve d’amour mais craint d’être blessé, et teste longuement la fiabilité de l’autre. Il préfère la profondeur à l’aventure. Une rencontre le rassure quand elle est douce, patiente et sincère.',
    couple:
      'En couple, le Cancer est tendre, dévoué et bâtisseur de foyer. Son défi est de ne pas se laisser envahir par la susceptibilité et la possessivité, ni de bouder au lieu de parler. Sécurisé, il devient un partenaire d’une tendresse et d’une loyauté inégalées.',
    seduction:
      'Pour séduire un Cancer, misez sur la douceur, la sincérité et la patience : il fuit ce qui est brusque ou incertain. Rassurez-le, montrez de la constance, intéressez-vous à son monde intérieur et à ses proches. Un cadre tendre et sécurisant ouvre son cœur bien mieux qu’une séduction directe, qui le fait se replier.',
    defauts:
      'Les défauts du Cancer en amour sont la susceptibilité, la possessivité et les sautes d’humeur. Il encaisse en silence, boude, garde rancune des blessures. Sa peur de l’abandon peut le rendre étouffant ou dépendant. Son grand travail est d’exprimer ses besoins avec des mots clairs plutôt que par des marées émotionnelles.',
    faq: [
      {
        q: 'Comment aime le Cancer ?',
        a: 'Le Cancer aime avec tendresse, profondeur et un immense besoin de sécurité. Signe d’Eau gouverné par la Lune, il associe l’amour au foyer, à la protection et à la fusion émotionnelle. Très intuitif, il ressent les non-dits et se donne pleinement une fois rassuré, après s’être longtemps protégé. Fidèle et dévoué, il peut aussi devenir possessif ou lunatique quand il doute d’être aimé.',
      },
      {
        q: 'Quels signes sont les plus compatibles avec le Cancer ?',
        a: 'Le Cancer s’accorde souvent le mieux avec les autres signes d’Eau (Scorpion, Poissons), qui partagent sa profondeur, et avec les signes de Terre (Taureau, Vierge, Capricorne), qui lui offrent la sécurité qu’il recherche. Les signes de Feu et d’Air, plus détachés ou plus vifs, peuvent le déstabiliser et demandent des ajustements. Chaque couple reste unique.',
      },
      {
        q: 'Pourquoi le Cancer se referme-t-il en amour ?',
        a: 'Le Cancer se referme pour se protéger : hypersensible, il redoute la blessure et l’abandon. Sa carapace est un réflexe de défense, pas un désintérêt. Au moindre signe d’insécurité, il boude ou se retire au lieu d’exprimer sa peine. La réassurance, la douceur et la constance sont ce qui l’aide à baisser la garde et à offrir toute sa tendresse.',
      },
    ],
  },
  {
    slug: 'lion',
    name: 'Lion',
    emoji: '♌',
    element: 'Feu',
    planet: 'le Soleil',
    dates: '23 juillet – 22 août',
    mots: ['Généreux', 'Fier', 'Romantique'],
    answerCapsule:
      'En amour, le Lion est un signe de Feu gouverné par le Soleil, l’astre du rayonnement et de la vitalité. Il aime avec panache, générosité et un vrai sens du grand jeu : le Lion romance, offre, met sa partenaire sur un piédestal. Il a besoin d’admiration et de reconnaissance autant que d’amour — se sentir choisi et honoré est vital pour lui. Loyal et protecteur, il se donne pleinement mais supporte mal l’indifférence, la mesquinerie ou la blessure d’orgueil. Fier et un brin dominateur, il veut régner sur son couple comme sur une cour. Le Lion séduit par sa chaleur, son charisme et sa générosité solaire. Ses meilleures compatibilités se jouent souvent avec les autres signes de Feu et les signes d’Air, qui savent l’admirer sans se soumettre. Pour comprendre comment votre Lion aime et ce qui nourrit vraiment son cœur, une consultation de voyance amoureuse éclaire sa dynamique amoureuse.',
    enAmour:
      'Le Lion vit l’amour comme une scène où déployer sa générosité et son romantisme. Gouverné par le Soleil, il a besoin de briller et d’être admiré : l’amour, pour lui, doit être grand, chaleureux et un peu spectaculaire. Il offre beaucoup — attentions, cadeaux, protection — et attend en retour reconnaissance et loyauté. Son orgueil est son point sensible : une humiliation ou une indifférence le blesse profondément. Aimé et valorisé, le Lion est un partenaire d’une loyauté et d’une chaleur royales.',
    homme:
      'L’homme Lion en amour est un séducteur généreux et protecteur : il aime conquérir en grand et couvrir sa partenaire d’attentions. Fier, il a besoin d’être admiré et respecté publiquement. Une blessure d’orgueil le referme aussitôt. Une partenaire qui le valorise sincèrement, sans servilité, obtient de lui une dévotion chaleureuse et fidèle.',
    femme:
      'La femme Lion en amour est une reine : rayonnante, exigeante et loyale, elle veut un partenaire à sa hauteur, capable de l’admirer sans la dominer. Généreuse et passionnée, elle donne beaucoup mais ne tolère ni la mesquinerie ni le manque de reconnaissance. Honorée et aimée avec panache, elle offre une fidélité éclatante.',
    celibataire:
      'Célibataire, le Lion ne passe pas inaperçu : charismatique, il attire les regards et aime plaire. Le risque est de tomber amoureux de l’admiration plutôt que de la personne. Une rencontre le comble quand elle allie passion, respect et reconnaissance sincère.',
    couple:
      'En couple, le Lion est généreux, chaleureux et loyal : il aime faire de la relation une belle histoire. Son défi est de partager la lumière, de dompter son orgueil et sa jalousie. Valorisé, il devient un partenaire protecteur et d’une fidélité exemplaire.',
    seduction:
      'Pour séduire un Lion, valorisez-le sincèrement : admirez ses qualités, remarquez ses efforts, montrez-lui qu’il est spécial. Soignez l’élégance et offrez-lui du romantisme et de belles attentions. Évitez de le rabaisser ou de le rendre jaloux pour tester : son orgueil s’en souvient. Un Lion aimé et honoré donne un amour d’une chaleur rare.',
    defauts:
      'Les défauts du Lion en amour sont l’orgueil, le besoin de dominer et la susceptibilité de l’ego. Il peut prendre toute la place, mal supporter la critique et bouder longuement une blessure d’amour-propre. Sa jalousie et son goût du paraître demandent une partenaire assez solide pour l’aimer sans le flatter ni le craindre.',
    faq: [
      {
        q: 'Comment aime le Lion ?',
        a: 'Le Lion aime avec générosité, panache et romantisme. Signe de Feu gouverné par le Soleil, il a besoin d’admiration et de reconnaissance autant que d’amour. Il offre beaucoup et met sa partenaire sur un piédestal, mais supporte mal l’indifférence ou la blessure d’orgueil. Loyal et protecteur, il donne un amour chaleureux et fidèle à qui sait le valoriser sincèrement.',
      },
      {
        q: 'Quels signes sont les plus compatibles avec le Lion ?',
        a: 'Le Lion s’entend souvent le mieux avec les autres signes de Feu (Bélier, Sagittaire), qui partagent son énergie, et avec les signes d’Air (Gémeaux, Balance, Verseau), qui l’admirent sans se soumettre. Les signes de Terre et d’Eau, plus discrets ou plus sensibles, peuvent le combler mais demandent des ajustements autour de son besoin de rayonner. Chaque couple reste unique.',
      },
      {
        q: 'Le Lion est-il jaloux en amour ?',
        a: 'Le Lion peut être jaloux, moins par insécurité que par orgueil et sens de la possession : il supporte mal de ne pas être le centre de l’attention de sa partenaire. Sa jalousie se réveille surtout quand il se sent négligé ou insuffisamment admiré. La valoriser, le rassurer sur sa place et éviter les jeux de rivalité apaisent cette fierté ombrageuse.',
      },
    ],
  },
  {
    slug: 'vierge',
    name: 'Vierge',
    emoji: '♍',
    element: 'Terre',
    planet: 'Mercure',
    dates: '23 août – 22 septembre',
    mots: ['Dévoué', 'Discret', 'Perfectionniste'],
    answerCapsule:
      'En amour, la Vierge est un signe de Terre gouverné par Mercure, la planète de l’analyse et du discernement. Elle aime avec discrétion, dévouement et une attention aux détails qui touche au soin : la Vierge prouve son amour par des gestes concrets, des services rendus, une présence fiable. Prudente et un brin méfiante, elle ne se livre pas vite — elle observe, analyse, teste la sincérité de l’autre avant d’ouvrir son cœur. Perfectionniste, elle peut se montrer critique ou anxieuse, mais c’est souvent par exigence d’un amour juste. Une fois engagée, la Vierge est loyale, attentionnée et profondément fidèle. Elle séduit par sa finesse, son sérieux et sa tendresse pudique. Ses meilleures compatibilités se jouent souvent avec les signes de Terre et d’Eau, qui apprécient sa fiabilité et sa douceur. Pour comprendre comment votre Vierge aime et ce qui apaise ses doutes, une consultation de voyance amoureuse éclaire sa dynamique de cœur.',
    enAmour:
      'La Vierge vit l’amour comme un engagement sérieux et attentionné, loin des démonstrations tapageuses. Gouvernée par Mercure, elle analyse tout, y compris ses sentiments, et se protège derrière la prudence. Elle exprime son amour en prenant soin concrètement de l’autre — anticiper, aider, être fiable. Son perfectionnisme la pousse à vouloir bien faire, parfois trop, jusqu’à la critique ou l’inquiétude. Sous une réserve apparente, la Vierge cache une tendresse profonde et une loyauté à toute épreuve, qu’elle offre à qui gagne patiemment sa confiance.',
    homme:
      'L’homme Vierge en amour est discret, fidèle et attentionné : il montre ses sentiments par des actes plus que par des mots. Réservé et un peu anxieux, il analyse avant de s’engager et redoute de mal faire. Sa tendance à la critique cache souvent un désir de bien-faire. Une partenaire patiente et rassurante découvre un compagnon d’une loyauté et d’un dévouement rares.',
    femme:
      'La femme Vierge en amour est prévenante, pudique et exigeante : elle donne beaucoup mais se protège derrière la prudence et l’analyse. Elle a besoin de fiabilité et de propreté émotionnelle, et se méfie des grands séducteurs. Rassurée, elle offre un amour attentionné, fidèle et concret, tissé de mille petites attentions du quotidien.',
    celibataire:
      'Célibataire, la Vierge avance prudemment : elle observe, analyse et se méfie des coups de foudre. Elle préfère la qualité à la quantité et redoute de se tromper. Une rencontre la rassure quand elle est sincère, fiable et sans jeux ni faux-semblants.',
    couple:
      'En couple, la Vierge est dévouée, fidèle et attentive au bien-être de l’autre. Son défi est de lâcher le perfectionnisme et la critique, et de croire qu’elle est aimée telle qu’elle est. Rassurée, elle devient une partenaire d’un soutien et d’une constance précieux.',
    seduction:
      'Pour séduire une Vierge, misez sur la sincérité, la fiabilité et la finesse : elle déteste le tape-à-l’œil et les promesses en l’air. Montrez-vous constant, soigné, attentionné dans les détails, et rassurez-la sans la presser. Valorisez ses attentions plutôt que de les prendre pour acquises. La confiance patiemment gagnée ouvre son cœur pudique.',
    defauts:
      'Les défauts de la Vierge en amour sont l’excès de critique, l’anxiété et la difficulté à lâcher prise. Son perfectionnisme peut peser sur l’autre, et sa prudence la rendre distante ou difficile à conquérir. Elle doit apprendre à exprimer ses émotions plutôt qu’à les analyser, et à accepter l’imperfection du lien comme de l’autre.',
    faq: [
      {
        q: 'Comment aime la Vierge ?',
        a: 'La Vierge aime avec discrétion, dévouement et un soin méticuleux du quotidien. Signe de Terre gouverné par Mercure, elle prouve son amour par des gestes concrets plutôt que par de grandes déclarations. Prudente, elle se livre lentement, après avoir analysé et testé la sincérité de l’autre. Une fois engagée, elle est loyale, attentionnée et profondément fidèle, malgré une tendance à la critique.',
      },
      {
        q: 'Quels signes sont les plus compatibles avec la Vierge ?',
        a: 'La Vierge s’accorde souvent le mieux avec les autres signes de Terre (Taureau, Capricorne), qui partagent son sérieux, et avec les signes d’Eau (Cancer, Scorpion, Poissons), dont la sensibilité adoucit son mental. Les signes de Feu et d’Air, plus impulsifs ou plus abstraits, peuvent la séduire mais heurtent parfois son besoin d’ordre. Chaque couple reste unique.',
      },
      {
        q: 'Pourquoi la Vierge est-elle si critique en amour ?',
        a: 'La critique de la Vierge naît de son perfectionnisme et de son désir de bien faire, pas d’un manque d’amour. En pointant les détails, elle cherche souvent à améliorer et à protéger la relation. Le revers est qu’elle peut blesser ou peser sur l’autre. Sa leçon amoureuse est d’exprimer d’abord la tendresse et la reconnaissance, et de doser ses remarques avec douceur.',
      },
    ],
  },
  {
    slug: 'balance',
    name: 'Balance',
    emoji: '♎',
    element: 'Air',
    planet: 'Vénus',
    dates: '23 septembre – 22 octobre',
    mots: ['Romantique', 'Diplomate', 'Indécis'],
    answerCapsule:
      'En amour, la Balance est un signe d’Air gouverné par Vénus, la planète de l’amour, de l’harmonie et de la beauté. Elle est le signe du couple par excellence : elle a besoin de relation comme d’air, recherche l’équilibre, la douceur et le raffinement. Romantique et diplomate, la Balance déteste le conflit et cherche toujours l’entente, quitte à s’oublier un peu. Elle séduit avec élégance, charme et attention à l’autre, mais son indécision légendaire peut la faire hésiter longtemps avant de s’engager — ou entre deux personnes. Une fois en couple, elle donne beaucoup et vise l’harmonie parfaite. La Balance séduit par sa grâce, son écoute et son goût de l’amour. Ses meilleures compatibilités se jouent souvent avec les autres signes d’Air et les signes de Feu, qui apportent l’élan qu’elle canalise. Pour comprendre comment votre Balance aime et ce qui l’aide à trancher, une consultation de voyance amoureuse éclaire sa dynamique de cœur.',
    enAmour:
      'La Balance vit l’amour comme un besoin vital d’harmonie et de partage : elle s’épanouit à deux et supporte mal la solitude affective. Gouvernée par Vénus, elle recherche la beauté, la douceur et l’équilibre dans la relation, et fuit les tensions comme la peste. Diplomate, elle cède parfois trop pour préserver la paix, au risque de s’oublier. Son indécision reflète sa peur de mal choisir et son désir de tout concilier. Aimée dans un climat serein et romantique, la Balance offre une tendresse raffinée et un vrai talent pour l’entente à deux.',
    homme:
      'L’homme Balance en amour est un charmeur raffiné : galant, à l’écoute et soucieux de plaire, il excelle à créer une ambiance romantique. Son indécision et sa peur du conflit peuvent le rendre fuyant ou trop conciliant. Il s’épanouit avec une partenaire qui apporte de la clarté et de la douceur sans drame. L’harmonie du couple est sa boussole.',
    femme:
      'La femme Balance en amour est élégante, sociable et profondément romantique : elle rêve d’un couple équilibré et esthétique. Diplomate, elle déteste les disputes et cherche l’entente à tout prix, parfois en s’effaçant. Elle a besoin d’attentions, de galanterie et de sérénité. Un partenaire tendre et rassurant, capable de trancher sans brutalité, comble son cœur.',
    celibataire:
      'Célibataire, la Balance supporte mal le célibat : faite pour le duo, elle cherche activement l’âme sœur. Le risque est de se précipiter par peur de la solitude, ou d’hésiter sans fin. Une rencontre la comble quand elle allie romantisme, harmonie et respect mutuel.',
    couple:
      'En couple, la Balance est attentionnée, conciliante et dévouée à l’harmonie. Son défi est de ne pas s’oublier pour éviter le conflit, et d’oser exprimer ses vrais désirs. Dans un climat serein, elle offre une relation douce, raffinée et profondément partenaire.',
    seduction:
      'Pour séduire une Balance, soignez l’élégance, la douceur et le romantisme : elle est sensible à la beauté, aux belles manières et à l’ambiance. Montrez-vous galant, à l’écoute et apaisant, sans jamais brusquer. Aidez-la à décider sans la contraindre. Un climat harmonieux et une cour raffinée ouvrent son cœur bien plus que la pression.',
    defauts:
      'Les défauts de la Balance en amour sont l’indécision, la peur du conflit et la dépendance au couple. Elle peut céder trop, s’oublier, éviter les vrais sujets pour préserver la paix, ou hésiter longuement entre deux options. Son travail amoureux est d’apprendre à trancher, à s’affirmer et à trouver son équilibre en elle-même, pas seulement dans la relation.',
    faq: [
      {
        q: 'Comment aime la Balance ?',
        a: 'La Balance aime dans la recherche d’harmonie, de romantisme et d’équilibre. Signe d’Air gouverné par Vénus, elle est le signe du couple : elle a besoin de relation, de douceur et de beauté. Diplomate, elle fuit le conflit et cède parfois trop pour préserver la paix. Son indécision reflète sa peur de mal choisir. Dans un climat serein, elle offre une tendresse raffinée et un vrai talent pour l’entente.',
      },
      {
        q: 'Quels signes sont les plus compatibles avec la Balance ?',
        a: 'La Balance s’entend souvent le mieux avec les autres signes d’Air (Gémeaux, Verseau), avec qui la complicité est fluide, et avec les signes de Feu (Bélier, Lion, Sagittaire), qui apportent l’élan qu’elle sait canaliser. Les signes de Terre et d’Eau, plus pragmatiques ou plus intenses, peuvent la séduire mais demandent des ajustements. Chaque couple reste unique.',
      },
      {
        q: 'Pourquoi la Balance est-elle si indécise en amour ?',
        a: 'L’indécision de la Balance vient de son désir de tout concilier et de sa peur de mal choisir ou de blesser. Gouvernée par Vénus, elle voit les qualités de chaque option et redoute de renoncer. Cette hésitation n’est pas de la froideur mais un excès de considération. L’aider à clarifier ses priorités, sans la presser, lui permet de trancher et de s’engager sereinement.',
      },
    ],
  },
  {
    slug: 'scorpion',
    name: 'Scorpion',
    emoji: '♏',
    element: 'Eau',
    planet: 'Pluton',
    dates: '23 octobre – 21 novembre',
    mots: ['Intense', 'Passionné', 'Loyal'],
    answerCapsule:
      'En amour, le Scorpion est un signe d’Eau gouverné par Pluton, la planète de la transformation et des profondeurs. Il aime avec une intensité absolue : pour le Scorpion, c’est tout ou rien, la fusion ou le désert. Magnétique et passionné, il cherche une connexion profonde, sans masque, où l’on se donne entièrement. D’une loyauté farouche une fois engagé, il exige la même vérité en retour et supporte mal le mensonge, la trahison ou la tiédeur. Sa jalousie et son besoin de contrôle sont le revers de sa passion. Le Scorpion séduit par son mystère, son intensité et sa présence troublante. Ses meilleures compatibilités se jouent souvent avec les signes d’Eau et de Terre, qui savent accueillir sa profondeur sans la fuir. Pour comprendre comment votre Scorpion aime et ce qui apaise sa méfiance, une consultation de voyance amoureuse éclaire sa dynamique de cœur.',
    enAmour:
      'Le Scorpion vit l’amour comme une plongée en profondeur : il ne connaît ni la demi-mesure ni la superficialité. Gouverné par Pluton, il cherche la fusion, la vérité nue et l’intensité émotionnelle et physique. Il teste, sonde, veut connaître l’autre jusqu’à l’âme. Une fois qu’il a choisi, sa loyauté est totale — mais la trahison est impardonnable et sa mémoire, longue. Sa passion s’accompagne d’un besoin de contrôle et d’une jalousie qu’il doit apprendre à dompter. Aimé en confiance, le Scorpion offre l’amour le plus intense et le plus dévoué du zodiaque.',
    homme:
      'L’homme Scorpion en amour est magnétique, intense et possessif : il aime avec passion et exige une vérité totale. Séducteur mystérieux, il capte et envoûte, mais se méfie tant qu’il n’a pas éprouvé la loyauté de l’autre. Sa jalousie est le revers de son engagement absolu. À qui gagne sa confiance, il offre une fidélité et une profondeur d’une rare puissance.',
    femme:
      'La femme Scorpion en amour est envoûtante, exclusive et profondément loyale : elle donne tout et attend tout en retour. Intuitive, elle perçoit les mensonges et ne pardonne pas la trahison. Sa passion s’accompagne d’une jalousie et d’un besoin de fusion intenses. En confiance, elle aime avec une force, une sensualité et une dévotion hors norme.',
    celibataire:
      'Célibataire, le Scorpion ne s’attache pas à la légère : il préfère l’intensité rare à l’aventure facile, et sonde longuement avant de se livrer. Le risque est la méfiance excessive. Une rencontre le capte quand elle est vraie, profonde et sans faux-semblants.',
    couple:
      'En couple, le Scorpion est passionné, loyal et protecteur, capable d’une intimité rare. Son défi est de dompter la jalousie, le besoin de contrôle et la rancune. En confiance mutuelle, il offre une relation d’une profondeur et d’une intensité que peu de signes égalent.',
    seduction:
      'Pour séduire un Scorpion, misez sur l’authenticité, le mystère et la profondeur : il déteste le superficiel et repère le faux. Soutenez son regard, montrez de la sincérité et un peu d’intensité, sans tout dévoiler d’emblée. Prouvez votre loyauté dans la durée. Gagner sa confiance est long mais ouvre un amour d’une puissance rare.',
    defauts:
      'Les défauts du Scorpion en amour sont la jalousie, le besoin de contrôle et la rancune. Sa passion peut virer à la possessivité, sa méfiance à la surveillance, et une blessure de trahison le pousse à des vengeances silencieuses. Sa grande leçon est de faire confiance et de transformer son intensité en fusion choisie plutôt qu’en emprise.',
    faq: [
      {
        q: 'Comment aime le Scorpion ?',
        a: 'Le Scorpion aime avec une intensité absolue : c’est tout ou rien. Signe d’Eau gouverné par Pluton, il cherche la fusion, la vérité et une connexion profonde, sans masque. D’une loyauté farouche une fois engagé, il exige la même sincérité et ne pardonne pas la trahison. Sa jalousie et son besoin de contrôle sont le revers de sa passion. En confiance, il offre l’amour le plus dévoué du zodiaque.',
      },
      {
        q: 'Quels signes sont les plus compatibles avec le Scorpion ?',
        a: 'Le Scorpion s’accorde souvent le mieux avec les autres signes d’Eau (Cancer, Poissons), qui accueillent sa profondeur, et avec les signes de Terre (Taureau, Vierge, Capricorne), qui lui offrent stabilité et loyauté. Les signes de Feu et d’Air, plus légers ou plus indépendants, peuvent l’attirer intensément mais heurtent son besoin de fusion. Chaque couple reste unique.',
      },
      {
        q: 'Le Scorpion est-il jaloux en amour ?',
        a: 'Oui, le Scorpion est l’un des signes les plus jaloux, par intensité de son engagement plus que par simple insécurité. Aimant en fusion, il vit la relation comme exclusive et supporte mal le doute ou le partage. Sa jalousie s’apaise avec une loyauté prouvée dans la durée et une transparence sincère. Sans confiance, elle peut virer au contrôle ; avec elle, elle se mue en dévotion.',
      },
    ],
  },
  {
    slug: 'sagittaire',
    name: 'Sagittaire',
    emoji: '♐',
    element: 'Feu',
    planet: 'Jupiter',
    dates: '22 novembre – 21 décembre',
    mots: ['Libre', 'Optimiste', 'Aventurier'],
    answerCapsule:
      'En amour, le Sagittaire est un signe de Feu gouverné par Jupiter, la planète de l’expansion, de la liberté et de l’optimisme. Il aime avec enthousiasme, franchise et un immense besoin d’espace : le Sagittaire veut un partenaire de route autant qu’un amoureux, quelqu’un avec qui explorer, rire et grandir. Allergique à l’enfermement et à la routine, il fuit les relations étouffantes et la jalousie. Sincère parfois jusqu’à la maladresse, il déteste les jeux et les faux-semblants. Fidèle à sa façon, il l’est tant qu’il se sent libre. Le Sagittaire séduit par sa joie de vivre, son humour et son appétit d’aventure. Ses meilleures compatibilités se jouent souvent avec les autres signes de Feu et les signes d’Air, qui partagent son goût de la liberté. Pour comprendre comment votre Sagittaire aime et ce qui le fait rester, une consultation de voyance amoureuse éclaire sa dynamique de cœur.',
    enAmour:
      'Le Sagittaire vit l’amour comme une aventure à partager, pas comme une cage. Gouverné par Jupiter, il déborde d’optimisme, de franchise et de soif de découverte. Il cherche un complice de vie avec qui voyager, philosopher et rire, et fuit tout ce qui l’enferme ou l’alourdit. Sa liberté est sacrée : loin d’être de l’inconstance, elle est la condition de son engagement. Rassuré sur son espace, le Sagittaire est un partenaire loyal, généreux et follement vivant, qui insuffle de la légèreté et du grand air à la relation.',
    homme:
      'L’homme Sagittaire en amour est un charmeur indépendant : joyeux, franc et aventurier, il séduit par son enthousiasme et son humour. Il fuit l’étouffement et déteste la jalousie. Il s’attache durablement à une partenaire qui partage sa soif de liberté et d’aventure, sans chercher à le retenir. Rassuré sur son espace, il devient un compagnon loyal et généreux.',
    femme:
      'La femme Sagittaire en amour est joyeuse, franche et éprise de liberté : elle veut un partenaire complice, pas un geôlier. Elle déteste la routine et les relations pesantes, et donne le meilleur d’elle-même quand on la suit dans ses élans. Indépendante et sincère, elle offre un amour vivant et fidèle à qui respecte son besoin d’air.',
    celibataire:
      'Célibataire, le Sagittaire savoure sa liberté et multiplie les expériences : il ne se fixe que par vrai coup de cœur, jamais par peur de la solitude. Le risque est de fuir l’engagement. Une rencontre le capte quand elle allie complicité, aventure et respect de son espace.',
    couple:
      'En couple, le Sagittaire apporte optimisme, aventure et légèreté. Son défi est d’ancrer la relation dans le concret et de rassurer sans se sentir enfermé. Quand il se sent libre et complice, il s’engage avec loyauté et transforme le couple en terrain de jeu et de croissance.',
    seduction:
      'Pour séduire un Sagittaire, misez sur la liberté, l’aventure et la bonne humeur : proposez de la nouveauté, des projets, des rires. Montrez-vous indépendant et ouvert d’esprit, jamais collant ni jaloux. Partagez ses centres d’intérêt et sa soif de découverte. Un Sagittaire tombe amoureux d’un ou une complice de route, pas d’une contrainte.',
    defauts:
      'Les défauts du Sagittaire en amour sont la peur de l’engagement, l’instabilité et une franchise parfois blessante. Il peut fuir dès que la relation devient pesante, promettre plus qu’il ne tient, ou manquer de tact au nom de la sincérité. Sa leçon amoureuse est d’apprendre que l’engagement choisi n’est pas une perte de liberté mais une aventure de plus.',
    faq: [
      {
        q: 'Comment aime le Sagittaire ?',
        a: 'Le Sagittaire aime avec enthousiasme, franchise et un grand besoin de liberté. Signe de Feu gouverné par Jupiter, il cherche un complice d’aventure autant qu’un amoureux et fuit tout ce qui l’enferme. Sa liberté n’est pas de l’inconstance mais la condition de son engagement. Sincère jusqu’à la maladresse, il déteste les jeux. Rassuré sur son espace, il est loyal, généreux et follement vivant.',
      },
      {
        q: 'Quels signes sont les plus compatibles avec le Sagittaire ?',
        a: 'Le Sagittaire s’entend souvent le mieux avec les autres signes de Feu (Bélier, Lion), qui partagent son élan, et avec les signes d’Air (Gémeaux, Balance, Verseau), qui aiment sa liberté et son esprit. Les signes de Terre et d’Eau, plus stables ou plus sensibles, peuvent le séduire mais se heurtent à son besoin d’espace. Chaque couple reste unique.',
      },
      {
        q: 'Le Sagittaire a-t-il peur de s’engager ?',
        a: 'Le Sagittaire ne fuit pas l’amour mais l’enfermement : il redoute qu’un engagement ne sacrifie sa liberté et son goût de l’aventure. Il s’engage volontiers quand il sent que la relation reste un espace de découverte et non une cage. Le rassurer sur son autonomie, partager ses élans et éviter la possessivité lèvent cette crainte et révèlent sa loyauté profonde.',
      },
    ],
  },
  {
    slug: 'capricorne',
    name: 'Capricorne',
    emoji: '♑',
    element: 'Terre',
    planet: 'Saturne',
    dates: '22 décembre – 19 janvier',
    mots: ['Sérieux', 'Fidèle', 'Pudique'],
    answerCapsule:
      'En amour, le Capricorne est un signe de Terre gouverné par Saturne, la planète du temps, de la structure et de l’engagement. Il aime avec sérieux, pudeur et une vision de long terme : le Capricorne ne joue pas, il construit. Sous une réserve parfois froide se cache une profondeur et une fidélité rares — il se protège jusqu’à ce qu’il soit sûr, puis s’investit durablement. Il exprime son amour par la fiabilité, la loyauté et les actes concrets plus que par les mots tendres. Ambitieux, il peut faire passer le travail avant le cœur, et sa pudeur émotionnelle demande une partenaire patiente. Le Capricorne séduit par sa solidité, son intégrité et sa constance. Ses meilleures compatibilités se jouent souvent avec les signes de Terre et d’Eau, qui apprécient sa fiabilité et savent réchauffer sa réserve. Pour comprendre comment votre Capricorne aime et ce qui ouvre son cœur, une consultation de voyance amoureuse éclaire sa dynamique de cœur.',
    enAmour:
      'Le Capricorne vit l’amour comme un engagement mûri, jamais comme un caprice. Gouverné par Saturne, il avance prudemment, se méfie des débordements et cherche une relation solide, qui dure. Sa pudeur cache une grande profondeur : il dit peu mais tient beaucoup, et prouve son amour par la fiabilité et la présence. Ambitieux et responsable, il peut sembler distant ou absorbé par ses objectifs, mais son attachement, une fois donné, est d’une loyauté à toute épreuve. Réchauffé par la confiance, le Capricorne révèle une tendresse insoupçonnée sous sa carapace sérieuse.',
    homme:
      'L’homme Capricorne en amour est fiable, réservé et profondément loyal : il construit lentement et s’engage pour de bon. Pudique, il exprime peu ses émotions mais prouve son amour par les actes et la constance. Son ambition peut le rendre absent. Une partenaire patiente qui sait lire sa tendresse discrète gagne un compagnon solide et fidèle pour la vie.',
    femme:
      'La femme Capricorne en amour est exigeante, loyale et pudique : elle ne se donne qu’à qui inspire respect et sécurité. Réservée, elle protège ses émotions et se méfie des séducteurs. Elle valorise l’engagement, la fiabilité et l’ambition partagée. Rassurée, elle offre un amour d’une constance et d’une profondeur rares, sous une apparente froideur.',
    celibataire:
      'Célibataire, le Capricorne ne se précipite pas : il préfère attendre la bonne personne qu’enchaîner les aventures. Prudent, il teste le sérieux de l’autre. Une rencontre le rassure quand elle est sincère, stable et respectueuse de son besoin de construire.',
    couple:
      'En couple, le Capricorne est fidèle, responsable et bâtisseur : il vise le long terme et tient ses engagements. Son défi est de ne pas sacrifier l’intimité à l’ambition et d’exprimer davantage ses émotions. Réchauffé, il devient un partenaire d’une loyauté et d’un soutien indéfectibles.',
    seduction:
      'Pour séduire un Capricorne, misez sur le sérieux, la patience et l’authenticité : il se méfie de la séduction rapide et des débordements. Montrez-vous fiable, ambitieux à votre manière et respectueux de ses objectifs. Valorisez sa profondeur discrète et ne le brusquez pas. La confiance construite dans le temps ouvre sa carapace et révèle sa tendresse.',
    defauts:
      'Les défauts du Capricorne en amour sont la froideur apparente, la pudeur excessive et la tendance à faire passer le devoir ou le travail avant le cœur. Il peut sembler distant, avare de mots tendres, ou trop maître de lui. Sa leçon amoureuse est de baisser la garde, d’exprimer ses émotions et de laisser de la place à la légèreté et à l’intimité.',
    faq: [
      {
        q: 'Comment aime le Capricorne ?',
        a: 'Le Capricorne aime avec sérieux, pudeur et une vision de long terme. Signe de Terre gouverné par Saturne, il ne joue pas : il construit. Sous une réserve parfois froide se cachent une profondeur et une fidélité rares. Il prouve son amour par la fiabilité et les actes plus que par les mots. Prudent, il se protège jusqu’à être sûr, puis s’investit durablement, avec une loyauté à toute épreuve.',
      },
      {
        q: 'Quels signes sont les plus compatibles avec le Capricorne ?',
        a: 'Le Capricorne s’accorde souvent le mieux avec les autres signes de Terre (Taureau, Vierge), qui partagent son sérieux, et avec les signes d’Eau (Cancer, Scorpion, Poissons), dont la sensibilité réchauffe sa réserve. Les signes de Feu et d’Air, plus spontanés ou plus détachés, peuvent le séduire mais demandent des ajustements autour de sa pudeur. Chaque couple reste unique.',
      },
      {
        q: 'Pourquoi le Capricorne paraît-il froid en amour ?',
        a: 'La froideur du Capricorne est une pudeur, pas une absence de sentiments. Gouverné par Saturne, il se protège et exprime son amour par les actes plutôt que par les mots. Il redoute de perdre le contrôle de ses émotions et met du temps à baisser la garde. Sous cette réserve se cache une tendresse profonde, que la confiance et la patience finissent par révéler.',
      },
    ],
  },
  {
    slug: 'verseau',
    name: 'Verseau',
    emoji: '♒',
    element: 'Air',
    planet: 'Uranus',
    dates: '20 janvier – 18 février',
    mots: ['Indépendant', 'Original', 'Cérébral'],
    answerCapsule:
      'En amour, le Verseau est un signe d’Air gouverné par Uranus, la planète de la liberté, de l’originalité et de l’imprévu. Il aime autrement : pour le Verseau, l’amour idéal est d’abord une amitié amoureuse, une complicité d’esprits libres qui se choisissent sans se posséder. Indépendant jusqu’au cœur, il a besoin d’espace, refuse la routine et déteste la jalousie et l’étouffement. Cérébral, il vit parfois les sentiments à distance, ce qui le fait paraître détaché. Mais sous cette réserve, le Verseau est d’une loyauté profonde envers qui respecte sa liberté et partage ses idéaux. Il séduit par son originalité, son ouverture d’esprit et sa singularité. Ses meilleures compatibilités se jouent souvent avec les autres signes d’Air et les signes de Feu, qui aiment sa liberté. Pour comprendre comment votre Verseau aime et ce qui touche vraiment son cœur, une consultation de voyance amoureuse éclaire sa dynamique de cœur.',
    enAmour:
      'Le Verseau vit l’amour comme une rencontre de libertés : il veut un partenaire-complice, pas un miroir fusionnel. Gouverné par Uranus, il valorise l’indépendance, l’originalité et l’égalité, et fuit tout ce qui ressemble à la possession. Il tombe amoureux d’un esprit, d’une singularité, d’une amitié qui s’approfondit. Son détachement apparent cache une fidélité réelle mais peu démonstrative : le Verseau aime à sa manière, souvent sans les codes attendus. Rassuré sur sa liberté et respecté dans sa différence, il offre une relation moderne, loyale et étonnamment tendre.',
    homme:
      'L’homme Verseau en amour est libre, imprévisible et cérébral : il séduit par son originalité et son ouverture, mais garde ses distances émotionnelles. Il déteste la possessivité et l’étouffement, et privilégie la complicité amicale. Il s’attache durablement à une partenaire indépendante, singulière et respectueuse de son espace, à qui il offre une loyauté discrète mais réelle.',
    femme:
      'La femme Verseau en amour est indépendante, originale et amicale : elle veut un partenaire égal et complice, jamais un possesseur. Elle fuit la routine et les codes conventionnels du couple. Cérébrale, elle exprime peu ses émotions mais reste loyale à sa façon. Un partenaire ouvert, libre et fasciné par sa différence gagne un cœur fidèle et singulier.',
    celibataire:
      'Célibataire, le Verseau savoure son autonomie et refuse de se caser par convention : il attend une connexion d’esprit rare. Le risque est le détachement excessif. Une rencontre le capte quand elle allie amitié profonde, liberté et originalité partagée.',
    couple:
      'En couple, le Verseau apporte ouverture, originalité et respect de l’autonomie de chacun. Son défi est d’incarner davantage ses émotions et de ne pas se réfugier dans le mental. Respecté dans sa liberté, il offre une relation moderne, loyale et complice, à rebours des schémas classiques.',
    seduction:
      'Pour séduire un Verseau, misez sur l’amitié, l’originalité et l’indépendance : devenez d’abord un complice fascinant. Surprenez-le par vos idées, respectez son espace, ne jouez jamais la carte de la jalousie ou de la possession. Montrez votre singularité et votre ouverture d’esprit. Le Verseau tombe amoureux d’une personne libre et unique, jamais d’une contrainte.',
    defauts:
      'Les défauts du Verseau en amour sont le détachement émotionnel, l’imprévisibilité et une fuite de l’intimité fusionnelle. Il peut paraître froid, tenir l’autre à distance ou intellectualiser les sentiments. Sa leçon amoureuse est d’oser la vulnérabilité et de descendre du mental au cœur, sans renoncer à la liberté qui le définit.',
    faq: [
      {
        q: 'Comment aime le Verseau ?',
        a: 'Le Verseau aime autrement : pour lui, l’amour idéal est une amitié amoureuse entre esprits libres qui se choisissent sans se posséder. Signe d’Air gouverné par Uranus, il valorise l’indépendance, l’originalité et l’égalité, et fuit la jalousie. Cérébral, il paraît détaché mais reste loyal à sa manière. Respecté dans sa liberté et sa différence, il offre une relation moderne, fidèle et étonnamment tendre.',
      },
      {
        q: 'Quels signes sont les plus compatibles avec le Verseau ?',
        a: 'Le Verseau s’entend souvent le mieux avec les autres signes d’Air (Gémeaux, Balance), avec qui la connexion mentale est immédiate, et avec les signes de Feu (Bélier, Lion, Sagittaire), qui partagent son goût de la liberté. Les signes de Terre et d’Eau, plus attachés à la sécurité ou à la fusion, peuvent le séduire mais heurtent son besoin d’indépendance. Chaque couple reste unique.',
      },
      {
        q: 'Pourquoi le Verseau paraît-il détaché en amour ?',
        a: 'Le détachement du Verseau vient de sa nature cérébrale et de son besoin vital de liberté : il vit souvent les émotions à distance et se méfie de la fusion. Ce n’est pas de l’indifférence mais une façon de préserver son autonomie. Sous cette réserve se cache une loyauté réelle, peu démonstrative. La confiance et le respect de son espace l’aident à s’ouvrir et à incarner davantage sa tendresse.',
      },
    ],
  },
  {
    slug: 'poissons',
    name: 'Poissons',
    emoji: '♓',
    element: 'Eau',
    planet: 'Neptune',
    dates: '19 février – 20 mars',
    mots: ['Romantique', 'Rêveur', 'Empathique'],
    answerCapsule:
      'En amour, les Poissons sont un signe d’Eau gouverné par Neptune, la planète du rêve, de l’imaginaire et de la compassion. Ils aiment avec une tendresse et une profondeur presque infinies : romantiques absolus, ils rêvent d’amour idéal, de fusion des âmes et de dévouement total. D’une empathie rare, les Poissons ressentent l’autre de l’intérieur, devinent ses peines et se donnent sans compter. Leur imaginaire embellit tout, au risque d’idéaliser le partenaire ou de fuir la réalité. Sensibles et parfois fragiles, ils ont besoin de douceur, de réassurance et d’un cadre qui les protège de leur propre porosité émotionnelle. Les Poissons séduisent par leur tendresse, leur intuition et leur âme d’artiste. Leurs meilleures compatibilités se jouent souvent avec les signes d’Eau et de Terre, qui savent les envelopper ou les ancrer. Pour comprendre comment votre Poissons aime et ce qui le rassure, une consultation de voyance amoureuse éclaire sa dynamique de cœur.',
    enAmour:
      'Les Poissons vivent l’amour comme un rêve à incarner : ils cherchent la fusion des âmes, la tendresse absolue et une connexion presque spirituelle. Gouvernés par Neptune, ils débordent d’empathie et de romantisme, se fondent dans l’autre et donnent sans compter. Leur imaginaire idéalise le partenaire et l’histoire, ce qui les rend merveilleusement aimants mais parfois déconnectés de la réalité. Fragiles et poreux aux émotions, ils ont besoin d’être rassurés et protégés. Aimés avec douceur et ancrés par un partenaire fiable, les Poissons offrent l’amour le plus dévoué et le plus tendre du zodiaque.',
    homme:
      'L’homme Poissons en amour est tendre, romantique et insaisissable : il aime en rêvant, devine les besoins de l’autre et se dévoue sans compter. Sa sensibilité extrême le rend fuyant quand la réalité le heurte. Il a besoin de douceur et d’ancrage. Une partenaire aimante et rassurante, capable de le ramener sur terre avec tendresse, gagne un compagnon d’une dévotion rare.',
    femme:
      'La femme Poissons en amour est romantique, intuitive et fusionnelle : elle rêve d’un amour idéal et se donne corps et âme. D’une empathie désarmante, elle ressent tout et s’oublie parfois pour l’autre. Fragile, elle a besoin de réassurance et de protection. À qui l’aime avec douceur et la sécurise, elle offre une tendresse et un dévouement quasi sans limites.',
    celibataire:
      'Célibataire, le Poissons rêve d’amour plus qu’il ne le cherche activement : il attend l’âme sœur et idéalise volontiers. Le risque est de tomber amoureux d’un rêve plutôt que d’une personne réelle. Une rencontre le comble quand elle est douce, sincère et rassurante.',
    couple:
      'En couple, le Poissons est dévoué, tendre et profondément empathique : il fusionne et s’adapte à l’autre. Son défi est de ne pas s’oublier, de garder les pieds sur terre et de poser ses limites. Aimé et ancré, il offre une relation d’une douceur et d’une profondeur rares.',
    seduction:
      'Pour séduire un Poissons, misez sur la douceur, le romantisme et la sincérité : il est sensible à la poésie, à la tendresse et aux âmes qui le comprennent. Rassurez-le, montrez de l’empathie et créez une bulle protectrice. Évitez la brutalité et le cynisme, qui le font fuir. Un climat tendre et magique ouvre son cœur d’artiste bien plus que la séduction directe.',
    defauts:
      'Les défauts des Poissons en amour sont l’idéalisation, la fuite de la réalité et la tendance à s’oublier ou à se sacrifier. Ils peuvent aimer une image plutôt que la personne, éviter les conflits par évitement, ou se laisser envahir par leurs émotions. Leur leçon amoureuse est de s’ancrer, de poser des limites et d’aimer l’autre tel qu’il est, pas tel qu’ils le rêvent.',
    faq: [
      {
        q: 'Comment aiment les Poissons ?',
        a: 'Les Poissons aiment avec une tendresse et une profondeur presque infinies. Signe d’Eau gouverné par Neptune, ils sont des romantiques absolus qui rêvent de fusion des âmes et se dévouent sans compter. D’une empathie rare, ils ressentent l’autre de l’intérieur. Leur imaginaire idéalise le partenaire, au risque de fuir la réalité. Aimés avec douceur et ancrés, ils offrent l’amour le plus dévoué du zodiaque.',
      },
      {
        q: 'Quels signes sont les plus compatibles avec les Poissons ?',
        a: 'Les Poissons s’accordent souvent le mieux avec les autres signes d’Eau (Cancer, Scorpion), qui partagent leur profondeur, et avec les signes de Terre (Taureau, Vierge, Capricorne), qui les ancrent et les rassurent. Les signes de Feu et d’Air, plus directs ou plus détachés, peuvent les séduire mais heurtent leur sensibilité. Chaque couple reste unique au-delà du seul soleil.',
      },
      {
        q: 'Pourquoi les Poissons idéalisent-ils l’amour ?',
        a: 'Gouvernés par Neptune, les Poissons voient l’amour à travers leur imaginaire : ils embellissent le partenaire et l’histoire, et rêvent d’un idéal absolu. Cette idéalisation les rend merveilleusement aimants mais les expose à la déception quand la réalité ne suit pas. Leur travail amoureux est d’aimer la personne réelle, avec ses imperfections, plutôt que l’image rêvée qu’ils projettent sur elle.',
      },
    ],
  },
];
