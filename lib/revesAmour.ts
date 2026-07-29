// Love-dream interpretation records — data layer for /reves-amour/[reve]/.
//
// A dream-dictionary network (oniromancie amoureuse), built to the same
// semantic-SEO standard as the tarot and compatibility networks: answer
// capsule + question structure + entity density, with a strict no-prediction
// editorial stance (dreams reflect the dreamer's inner world, never a
// premonition or a message about another person).
//
// Publication gate: a dream page is generated ONLY if its record passes
// validateDreamRecord. Slug is a clean ASCII kebab.
//
// NOTE: "rêver de son ex" intentionally lives as a full guidance page at
// /rupture/rever-de-son-ex/ (richer situational treatment). The hub bridges
// to it rather than duplicating it here.

export interface DreamFaq {
  q: string;
  a: string;
}

export interface DreamInterpretation {
  /** the dream variant, e.g. "Rêver que son ex nous trompe" */
  variante: string;
  /** what that variant can reflect (never a prediction) */
  sens: string;
}

export interface DreamEntry {
  slug: string;
  titre: string;
  emoji: string;
  /** natural-language H1 / primary query */
  primaryQuery: string;
  /** 150-170 word extractive answer capsule */
  answerCapsule: string;
  /** why this dream occurs */
  pourquoi: string;
  /** the interpretation matrix (variants) */
  interpretations: DreamInterpretation[];
  /** what the dream does NOT prove */
  neProuvePas: string;
  /** what to do with the emotion */
  conseil: string;
  faq: DreamFaq[];
}

export function findDream(slug: string): DreamEntry | undefined {
  return REVES_AMOUR.find((d) => d.slug === slug);
}

/** Quality gate — a record below these thresholds must not produce a page. */
export function validateDreamRecord(d: DreamEntry): string[] {
  const issues: string[] = [];
  if (d.answerCapsule.length < 400) issues.push(`${d.slug}: answerCapsule too short`);
  if (d.pourquoi.length < 200) issues.push(`${d.slug}: pourquoi too short`);
  if (d.neProuvePas.length < 150) issues.push(`${d.slug}: neProuvePas too short`);
  if (d.conseil.length < 120) issues.push(`${d.slug}: conseil too short`);
  if (d.interpretations.length < 3) issues.push(`${d.slug}: fewer than 3 interpretations`);
  d.interpretations.forEach((it, i) => {
    if (it.sens.length < 80) issues.push(`${d.slug}: interpretation[${i}] too short`);
  });
  if (d.faq.length < 3) issues.push(`${d.slug}: fewer than 3 FAQ`);
  d.faq.forEach((f, i) => {
    if (f.a.length < 150) issues.push(`${d.slug}: faq[${i}] answer too short`);
  });
  return issues;
}

export const REVES_AMOUR: DreamEntry[] = [
  {
    slug: 'rever-de-tromperie',
    titre: 'Rêver de Tromperie',
    emoji: '💔',
    primaryQuery: 'Rêver que son partenaire nous trompe',
    answerCapsule:
      'Rêver de tromperie, que ce soit d’être trompé ou de tromper, est l’un des rêves amoureux les plus troublants — et l’un des moins prédictifs. Dans l’immense majorité des cas, ce rêve ne dit rien d’une infidélité réelle : il met en scène une émotion intérieure, le plus souvent une peur de l’abandon, une insécurité dans le couple ou un manque de confiance en soi. Rêver que son partenaire nous trompe traduit souvent une crainte de ne pas être assez, ou une distance ressentie ces derniers temps. Rêver que l’on trompe l’autre renvoie fréquemment à une culpabilité, à un besoin non comblé ou à une part de soi négligée. La signification dépend du ressenti au réveil, jamais d’une grille figée. Une consultation de voyance amoureuse peut éclairer l’émotion que ce rêve met en lumière, sans jamais prétendre annoncer une trahison à venir.',
    pourquoi:
      'Le rêve de tromperie surgit surtout dans les périodes de doute, de fatigue relationnelle ou d’insécurité personnelle. Le sommeil amplifie des micro-tensions que la vie éveillée minimise : une distance installée, un manque de réassurance, une jalousie latente ou une blessure de confiance ancienne. Le cerveau met en images la peur de perdre l’autre, non un fait constaté. C’est un signal émotionnel à écouter, pas une preuve à instruire.',
    interpretations: [
      {
        variante: 'Rêver que son partenaire nous trompe',
        sens: 'Reflète le plus souvent une peur de l’abandon, une insécurité ou une distance ressentie dans le couple, plutôt qu’une infidélité réelle. Le rêve exprime un besoin de réassurance, pas une découverte.',
      },
      {
        variante: 'Rêver que l’on trompe son partenaire',
        sens: 'Renvoie fréquemment à une culpabilité, à un besoin non comblé dans la relation, ou à une part de soi (liberté, désir, projet) mise de côté. Rarement une envie réelle d’infidélité.',
      },
      {
        variante: 'Rêver que son ex nous trompe ou nous a trompé',
        sens: 'Rejoue souvent une blessure de confiance non cicatrisée, ou une insécurité que la relation passée avait installée. Le rêve travaille un deuil, il ne révèle pas le présent de l’autre.',
      },
      {
        variante: 'Rêver de tromperie avec une personne précise',
        sens: 'Le visage qui apparaît symbolise souvent une qualité ou une peur que cette personne incarne à vos yeux, plus qu’un désir ou une menace réels la concernant.',
      },
    ],
    neProuvePas:
      'Ce rêve ne prouve en rien une infidélité réelle, ni de la part de votre partenaire, ni de la vôtre. Il ne constitue pas une prémonition et n’autorise aucune accusation. En faire une preuve conduit à des conflits infondés et à une jalousie qui abîme le lien sans raison objective.',
    conseil:
      'Accueillez l’émotion sans en tirer de conclusion sur l’autre. Demandez-vous ce qui, en ce moment, fragilise votre sécurité affective : distance, fatigue, manque de mots tendres. Ouvrir un dialogue apaisé sur ce besoin est bien plus utile que d’interroger l’autre sur un rêve dont il n’est pas l’auteur.',
    faq: [
      {
        q: 'Rêver que mon partenaire me trompe veut-il dire qu’il me trompe vraiment ?',
        a: 'Non. Ce rêve ne constitue pas une prémonition et ne prouve aucune infidélité réelle. Il traduit le plus souvent une peur de l’abandon, une insécurité personnelle ou une distance ressentie dans le couple. Le prendre pour une preuve mène à des accusations infondées et à une jalousie destructrice. Mieux vaut y lire un besoin de réassurance à exprimer qu’un fait à reprocher.',
      },
      {
        q: 'Pourquoi je rêve que je trompe mon partenaire alors que je ne le voudrais pas ?',
        a: 'Rêver que l’on trompe l’autre renvoie rarement à un désir réel d’infidélité. Ce rêve exprime plus souvent une culpabilité, un besoin non comblé dans la relation, ou une part de vous — liberté, désir, projet personnel — laissée de côté. Il invite à regarder ce qui vous manque ou ce que vous négligez en vous, pas à douter de votre fidélité.',
      },
      {
        q: 'Que faire après un rêve de tromperie qui me hante ?',
        a: 'Commencez par ne pas le traiter comme une information sur l’autre. Observez le ressenti dominant au réveil — peur, culpabilité, colère — car c’est lui qui porte le message. Interrogez votre propre sécurité affective du moment et, si besoin, ouvrez un dialogue apaisé sur ce dont vous avez besoin. Un rêve récurrent signale une émotion insistante qu’il peut être utile d’éclairer en consultation.',
      },
    ],
  },
  {
    slug: 'rever-de-son-crush',
    titre: 'Rêver de son Crush',
    emoji: '💘',
    primaryQuery: 'Rêver de son crush ou de la personne qu’on aime en secret',
    answerCapsule:
      'Rêver de son crush, cette personne qui nous attire sans que rien ne soit encore déclaré, est un rêve fréquent et intense. Contrairement à une croyance répandue, il ne signifie pas que l’autre pense à vous ou rêve de vous en retour : un rêve parle de votre monde intérieur, pas de celui d’une autre personne. Rêver de son crush traduit surtout l’intensité de votre désir, de votre attente ou de votre idéalisation. Le rêve donne un espace à une histoire qui n’existe pas encore, ou explore ce que cette personne représente pour vous — souvent une qualité ou un manque que vous projetez. Selon le scénario, il peut refléter de l’espoir, une peur du rejet ou un besoin de réponse. La signification dépend du ressenti au réveil. Une consultation de voyance amoureuse peut éclairer ce que cette attirance révèle de vos attentes, sans prétendre lire les pensées de votre crush.',
    pourquoi:
      'On rêve de son crush quand cette personne occupe une place importante dans nos pensées éveillées : l’esprit prolonge la nuit ce qui l’habite le jour. L’absence de relation réelle laisse un vide que le rêve comble en imaginant des scénarios. Plus l’attente et l’idéalisation sont fortes, plus le crush s’invite dans les rêves — non parce qu’il pense à vous, mais parce que vous pensez beaucoup à lui.',
    interpretations: [
      {
        variante: 'Rêver que son crush nous aime en retour',
        sens: 'Exprime un désir et un espoir, pas une réalité partagée. Le rêve met en scène l’issue souhaitée pour apaiser l’attente, sans renseigner sur les sentiments réels de l’autre.',
      },
      {
        variante: 'Rêver que son crush nous rejette ou nous ignore',
        sens: 'Reflète le plus souvent une peur du rejet ou un manque de confiance en soi, projeté sur la personne. C’est votre insécurité qui parle, pas un présage.',
      },
      {
        variante: 'Rêver d’embrasser ou d’être en couple avec son crush',
        sens: 'Traduit l’intensité du désir et le besoin d’une concrétisation. Le rêve offre une satisfaction symbolique à un élan qui n’a pas encore trouvé d’issue dans la réalité.',
      },
      {
        variante: 'Rêver d’un crush qu’on pensait avoir oublié',
        sens: 'Signale une émotion résiduelle encore active, ou le fait que cette personne incarne un besoin (tendresse, reconnaissance) qui cherche à être comblé, indépendamment d’elle.',
      },
    ],
    neProuvePas:
      'Rêver de son crush ne prouve pas qu’il pense à vous, qu’il rêve de vous, ou qu’une relation est écrite. Un rêve n’est pas une connexion télépathique ni une prémonition. En faire un signe pousse à des attentes et à des interprétations qui peuvent mener à la déception ou à des gestes précipités.',
    conseil:
      'Servez-vous du rêve pour clarifier ce que vous ressentez vraiment, plutôt que pour deviner l’autre. Demandez-vous si vous êtes amoureux de la personne réelle ou de l’image que vous en avez. Si l’attirance est sincère, l’étape utile est d’oser un pas concret dans la réalité, pas d’attendre un signe dans un songe.',
    faq: [
      {
        q: 'Rêver de mon crush signifie-t-il qu’il pense à moi ?',
        a: 'Non. Un rêve reflète votre monde intérieur, pas celui d’une autre personne, et il n’existe aucune connexion télépathique par le rêve. Rêver de son crush traduit surtout l’intensité de votre attirance, de votre attente ou de votre idéalisation. C’est parce que vous pensez beaucoup à cette personne qu’elle s’invite dans vos rêves, pas parce qu’elle penserait à vous.',
      },
      {
        q: 'Pourquoi je rêve souvent de mon crush ?',
        a: 'Un crush récurrent en rêve signale simplement qu’il occupe une grande place dans vos pensées éveillées : l’esprit prolonge la nuit ce qui l’habite le jour. L’absence de relation concrète laisse un espace que le rêve comble par des scénarios. Plus l’attente et l’idéalisation sont fortes, plus la personne réapparaît — c’est le signe d’un désir à écouter, pas d’un destin.',
      },
      {
        q: 'Rêver que mon crush me rejette est-il un mauvais signe ?',
        a: 'Non, ce n’est pas un présage. Rêver d’un rejet renvoie le plus souvent à une peur du rejet ou à un manque de confiance en vous, projeté sur la personne. Le rêve rejoue une insécurité pour tenter de l’apprivoiser ; il ne prédit pas la réaction réelle de votre crush. Travailler votre confiance vous servira davantage que d’interpréter ce songe comme un avertissement.',
      },
    ],
  },
  {
    slug: 'rever-de-mariage',
    titre: 'Rêver de Mariage',
    emoji: '💍',
    primaryQuery: 'Rêver de mariage ou de se marier',
    answerCapsule:
      'Rêver de mariage est l’un des rêves symboliques les plus riches, et il ne prédit presque jamais un mariage réel. Le mariage y est avant tout un symbole d’union, d’engagement, de transformation et de passage vers une nouvelle étape — dans le couple, mais aussi dans la vie en général. Rêver de se marier peut traduire un désir d’engagement, une peur de celui-ci, ou un besoin d’unir deux parts de soi. Rêver du mariage de quelqu’un d’autre, ou d’un mariage avec un inconnu, renvoie souvent à une évolution intérieure plutôt qu’à un événement à venir. Le ressenti au réveil — joie, angoisse, fuite — oriente la lecture bien plus que le scénario. Ce rêve parle de votre rapport à l’engagement et au changement. Une consultation de voyance amoureuse peut éclairer ce que cette symbolique révèle de votre moment de vie, sans annoncer une date ni un événement.',
    pourquoi:
      'Le rêve de mariage apparaît souvent aux moments de transition : début ou approfondissement d’une relation, questionnement sur l’engagement, changement de vie important. Le mariage étant le symbole culturel du grand passage, l’inconscient l’emploie pour mettre en scène toute forme d’union ou de bascule, y compris intérieure. Il traduit un mouvement d’engagement ou une peur de celui-ci, rarement une prédiction d’événement.',
    interpretations: [
      {
        variante: 'Rêver de se marier avec son partenaire actuel',
        sens: 'Traduit souvent un désir d’approfondir le lien, ou au contraire une interrogation sur l’engagement. La joie ou l’angoisse du rêve révèle votre rapport intime à cette étape.',
      },
      {
        variante: 'Rêver de se marier avec un inconnu',
        sens: 'L’inconnu symbolise fréquemment une part de vous ou une qualité à intégrer. Le rêve parle d’une union intérieure ou d’un nouveau départ, plus que d’une personne réelle.',
      },
      {
        variante: 'Rêver du mariage de quelqu’un d’autre',
        sens: 'Renvoie souvent à votre propre rapport à l’engagement, projeté sur autrui, ou à un sentiment face à l’évolution de vos proches. Il peut aussi refléter une comparaison ou une attente personnelle.',
      },
      {
        variante: 'Rêver de fuir ou d’annuler un mariage',
        sens: 'Exprime généralement une peur de l’engagement, un besoin de liberté, ou le sentiment d’être poussé vers une décision non mûrie. C’est une alerte intérieure à écouter, pas un présage.',
      },
    ],
    neProuvePas:
      'Rêver de mariage n’annonce pas un mariage réel, ni une demande imminente, ni une rupture. Ce n’est pas une prémonition datée. Y voir la promesse d’un événement précis conduit à des attentes déçues ou à une pression inutile sur une relation qui suit son propre rythme.',
    conseil:
      'Lisez ce rêve comme une question sur votre rapport à l’engagement et au changement, pas comme une annonce. Repérez l’émotion dominante : l’enthousiasme oriente vers un désir d’union, l’angoisse vers une peur à explorer. Dans les deux cas, le rêve invite à clarifier ce que vous attendez vraiment de votre vie amoureuse à cette étape.',
    faq: [
      {
        q: 'Rêver de mariage annonce-t-il un vrai mariage ?',
        a: 'Presque jamais. Le mariage en rêve est un symbole d’union, d’engagement et de transformation, pas une prémonition datée. Il met en scène votre rapport intérieur au changement et à l’engagement, dans le couple comme dans la vie. Y voir l’annonce d’un événement précis conduit à des attentes déçues. Le ressenti au réveil renseigne bien mieux que le scénario lui-même.',
      },
      {
        q: 'Que signifie rêver de se marier avec un inconnu ?',
        a: 'L’inconnu symbolise le plus souvent une part de vous-même ou une qualité que vous cherchez à intégrer, plutôt qu’une personne réelle à venir. Ce rêve parle d’une union intérieure, d’un nouveau départ ou d’un équilibre à trouver en soi. Il ne prédit pas la rencontre d’un futur époux : il éclaire un mouvement personnel de transformation en cours.',
      },
      {
        q: 'Rêver de fuir son mariage est-il mauvais signe pour mon couple ?',
        a: 'Pas nécessairement. Ce rêve exprime généralement une peur de l’engagement, un besoin de liberté ou le sentiment d’être poussé vers une décision non mûrie — des émotions à écouter, pas un verdict sur votre relation. Il invite à clarifier ce dont vous avez besoin avant de vous engager davantage. C’est une alerte intérieure utile, pas une prédiction de rupture.',
      },
    ],
  },
  {
    slug: 'rever-de-faire-lamour-avec-son-ex',
    titre: 'Rêver de Faire l’Amour avec son Ex',
    emoji: '🔥',
    primaryQuery: 'Rêver de faire l’amour avec son ex',
    answerCapsule:
      'Rêver de faire l’amour avec son ex est un rêve fréquent, souvent gênant au réveil, et rarement lié à un désir réel de retour. En langage des rêves, l’intimité physique symbolise une reconnexion, une fusion ou l’intégration de quelque chose — pas nécessairement une envie sexuelle littérale. Ce rêve traduit le plus souvent un besoin de clôture, la nostalgie d’une intimité perdue, ou une part de la relation restée inachevée. Il peut aussi surgir quand une émotion liée à l’ex remonte : manque, colère non soldée, ou attachement encore actif que le sommeil met en scène. Cela ne signifie pas qu’il faut renouer, ni que l’autre pense à vous. Le ressenti au réveil — apaisement, trouble, tristesse — oriente la lecture. Une consultation de voyance amoureuse peut éclairer l’émotion que ce rêve réveille, sans jamais prescrire un retour ni prédire les intentions de votre ex.',
    pourquoi:
      'Ce rêve apparaît souvent quand le deuil de la relation n’est pas totalement achevé, ou lors de transitions — nouvelle relation, anniversaire, période de solitude. L’intimité onirique met en scène un lien encore chargé d’émotion, un besoin de clôture ou une nostalgie de la fusion passée. Le corps du rêve parle d’un attachement à digérer, pas d’un désir à assouvir ni d’une décision à prendre.',
    interpretations: [
      {
        variante: 'Rêver de faire l’amour avec son ex et se sentir bien',
        sens: 'Traduit souvent la nostalgie d’une intimité perdue ou un besoin de tendresse présent, pas forcément lié à cet ex. Le bien-être du rêve pointe un manque affectif à combler dans votre vie actuelle.',
      },
      {
        variante: 'Rêver de faire l’amour avec son ex et se sentir mal',
        sens: 'Reflète fréquemment une part de la relation restée douloureuse ou inachevée, ou une culpabilité. Le malaise signale un travail de clôture encore à faire.',
      },
      {
        variante: 'Rêver de cela alors qu’on est en couple',
        sens: 'Renvoie rarement à un désir réel pour l’ex. Il peut s’agir d’un besoin non comblé dans la relation actuelle, ou d’une comparaison inconsciente à apaiser, plutôt que d’une envie de retour.',
      },
      {
        variante: 'Rêver que son ex prend l’initiative',
        sens: 'Met souvent en scène votre propre désir de vous sentir désiré ou choisi, projeté sur l’ex. Le rêve parle de votre besoin de valeur, pas des intentions réelles de l’autre.',
      },
    ],
    neProuvePas:
      'Ce rêve ne prouve pas que vous devez renouer, que votre ex vous désire ou pense à vous, ni que vos sentiments sont intacts. L’intimité onirique est symbolique. En faire un signe de retour pousse à des gestes prématurés fondés sur une émotion nocturne plutôt que sur la réalité.',
    conseil:
      'Ne confondez pas l’émotion du rêve avec une décision. Identifiez ce que l’intimité rêvée cherche à combler : tendresse, clôture, sentiment d’être désiré. Souvent, le vrai besoin peut être nourri autrement que par un retour. Si le rêve revient et vous trouble durablement, il éclaire un attachement à travailler, pas une voie à suivre.',
    faq: [
      {
        q: 'Rêver de faire l’amour avec mon ex veut-il dire que je veux le récupérer ?',
        a: 'Pas forcément. L’intimité physique en rêve est symbolique : elle évoque une reconnexion, une clôture ou l’intégration d’une part de soi, pas un désir sexuel ou un projet de retour littéral. Ce rêve traduit le plus souvent une nostalgie, un besoin de tendresse ou une relation restée inachevée. Confondre cette émotion nocturne avec une décision mène à des gestes prématurés.',
      },
      {
        q: 'Pourquoi je rêve de mon ex sexuellement alors que je suis en couple ?',
        a: 'Ce rêve renvoie rarement à un désir réel pour votre ex. Il pointe plus souvent un besoin non comblé dans votre relation actuelle, une nostalgie d’une forme d’intimité, ou une comparaison inconsciente à apaiser. Le sommeil emprunte une figure du passé pour parler du présent. Il éclaire un manque à regarder dans votre couple, pas une infidélité du cœur.',
      },
      {
        q: 'Est-ce que ce rêve signifie que mon ex pense à moi ?',
        a: 'Non. Un rêve reflète votre monde intérieur, jamais celui d’une autre personne, et il n’existe pas de connexion télépathique par le rêve. Rêver que votre ex prend l’initiative met souvent en scène votre propre besoin de vous sentir désiré ou choisi. Ce songe parle de vous et de votre attachement à digérer, pas des pensées ou des intentions réelles de votre ex.',
      },
    ],
  },
  {
    slug: 'rever-de-son-ex-avec-quelquun-dautre',
    titre: 'Rêver de son Ex avec Quelqu’un d’Autre',
    emoji: '💔',
    primaryQuery: 'Rêver de son ex avec quelqu’un d’autre',
    answerCapsule:
      'Rêver de son ex avec quelqu’un d’autre est un rêve douloureux, mais il est presque toujours le signe d’un travail intérieur, pas une prémonition ni une information sur la vie réelle de l’ex. Le plus souvent, ce rêve accompagne le processus d’acceptation : une part de vous intègre que la relation est terminée et que l’autre peut avancer. Il peut aussi refléter une peur d’être remplacé, une insécurité, ou une jalousie résiduelle que le sommeil met en scène pour l’apprivoiser. Paradoxalement, ce rêve douloureux marque souvent une étape de guérison — le moment où l’inconscient regarde en face la page qui se tourne. Le ressenti au réveil, de la détresse au soulagement, en dit long sur où vous en êtes. Une consultation de voyance amoureuse peut éclairer cette étape, sans jamais prétendre savoir si votre ex est réellement avec quelqu’un.',
    pourquoi:
      'Ce rêve survient souvent quand le deuil avance : l’inconscient met en images l’idée, encore difficile, que l’ex peut appartenir à une autre histoire. Il apparaît aussi lors de pics d’insécurité — solitude, comparaison, réseaux sociaux consultés. La peur d’être remplacé ou la jalousie résiduelle s’exprime la nuit pour être digérée. C’est un signe de page qui se tourne, pas une fenêtre sur la réalité de l’autre.',
    interpretations: [
      {
        variante: 'Rêver de son ex heureux avec quelqu’un d’autre',
        sens: 'Accompagne souvent le travail d’acceptation : une part de vous intègre que l’autre peut avancer. Aussi douloureux soit-il, ce rêve marque fréquemment une étape de guérison.',
      },
      {
        variante: 'Rêver de son ex avec une personne qu’on connaît',
        sens: 'Le visage précis symbolise souvent une peur ou une qualité que cette personne incarne à vos yeux (elle vous semble « mieux », menaçante), plus qu’une réalité concernant votre ex.',
      },
      {
        variante: 'Rêver de sa jalousie ou de sa colère dans ce rêve',
        sens: 'Reflète une émotion encore active — jalousie résiduelle, sentiment d’injustice — que le deuil n’a pas fini de traiter. Le rêve donne une issue à ce qui n’a pas été exprimé.',
      },
      {
        variante: 'Rêver de cela et se réveiller soulagé',
        sens: 'Signe souvent encourageant : une part de vous accepte la séparation et se détache. Le soulagement indique que la page se tourne réellement, au-delà de la douleur de surface.',
      },
    ],
    neProuvePas:
      'Ce rêve ne prouve pas que votre ex est réellement avec quelqu’un, ni qu’il le sera. Ce n’est ni une prémonition, ni une information à distance. En faire une certitude alimente la surveillance et la souffrance sans fondement, et retarde la guérison au lieu de la soutenir.',
    conseil:
      'Accueillez la douleur sans la transformer en enquête sur la vie de l’autre. Rappelez-vous que ce rêve parle de votre deuil, souvent d’une acceptation en cours. Si vous surveillez les réseaux de votre ex, cette veille nourrit ce type de rêves : vous en couper protège votre repos autant que votre cœur.',
    faq: [
      {
        q: 'Rêver de mon ex avec quelqu’un d’autre veut-il dire qu’il a refait sa vie ?',
        a: 'Non. Ce rêve ne constitue ni une prémonition ni une information à distance sur la vie réelle de votre ex. Il accompagne le plus souvent votre travail d’acceptation : une part de vous intègre que l’autre peut avancer. Il peut aussi refléter une peur d’être remplacé ou une jalousie résiduelle. Le prendre pour une preuve alimente une souffrance sans fondement.',
      },
      {
        q: 'Pourquoi ce rêve fait-il si mal si c’est bon signe ?',
        a: 'Parce que la guérison passe souvent par des étapes douloureuses. Ce rêve met en face l’idée que la relation est finie et que l’autre peut appartenir à une autre histoire — une réalité difficile mais nécessaire à intégrer. La douleur ressentie est le prix de l’acceptation en cours. Se réveiller soulagé, à l’inverse, indique que le détachement est déjà bien avancé.',
      },
      {
        q: 'Comment arrêter de faire ce rêve à répétition ?',
        a: 'Un rêve récurrent signale une émotion insistante qui cherche à être traitée : jalousie, peur du remplacement, deuil inachevé. Le comprendre l’aide souvent à s’espacer. Concrètement, cesser de surveiller les réseaux de votre ex réduit ce type de rêves, car cette veille les alimente. Avancer dans votre reconstruction, à votre rythme, est ce qui les apaise durablement.',
      },
    ],
  },
  {
    slug: 'rever-de-rupture',
    titre: 'Rêver de Rupture',
    emoji: '🥀',
    primaryQuery: 'Rêver de rupture ou de se séparer',
    answerCapsule:
      'Rêver de rupture, alors même que le couple va bien, est un rêve angoissant mais rarement prémonitoire. La séparation, en langage des rêves, symbolise souvent une peur de perdre l’autre, un besoin de changement, ou une part de soi qui cherche plus d’autonomie — pas une rupture réelle à venir. Rêver que son partenaire nous quitte traduit fréquemment une insécurité affective ou un manque de réassurance. Rêver de quitter l’autre peut refléter un besoin d’espace, une frustration non exprimée, ou une part de vous qui étouffe. Le rêve met en scène une tension intérieure pour la rendre visible, non pour l’annoncer. Le ressenti au réveil oriente la lecture bien plus que le scénario. Une consultation de voyance amoureuse peut éclairer le besoin que ce rêve met en lumière, sans jamais prédire une séparation ni la provoquer.',
    pourquoi:
      'Le rêve de rupture apparaît souvent dans les phases d’insécurité, de transition ou de tension non dite. Le sommeil dramatise une peur de perdre l’autre, un besoin d’autonomie, ou une frustration que la vie éveillée tait. Plus l’attachement est fort, plus la peur de le perdre peut se mettre en scène la nuit. C’est un signal émotionnel à décoder, pas un avertissement sur l’avenir du couple.',
    interpretations: [
      {
        variante: 'Rêver que son partenaire nous quitte',
        sens: 'Traduit le plus souvent une peur de l’abandon ou un manque de réassurance, pas une intention réelle de l’autre. Le rêve exprime une insécurité affective à apaiser, souvent par le dialogue.',
      },
      {
        variante: 'Rêver de quitter son partenaire',
        sens: 'Reflète fréquemment un besoin d’espace, une frustration non exprimée, ou une part de vous qui se sent à l’étroit. Il invite à regarder ce qui demande à être dit ou ajusté dans la relation.',
      },
      {
        variante: 'Rêver d’une rupture alors que tout va bien',
        sens: 'Met souvent en scène la peur de perdre un bonheur présent, précisément parce qu’il compte. Le rêve mesure la valeur du lien plus qu’il n’annonce sa fin.',
      },
      {
        variante: 'Rêver de la rupture d’un couple proche',
        sens: 'Renvoie souvent à vos propres questionnements sur l’engagement, ou à une projection de vos craintes, plus qu’à un présage concernant les personnes rêvées.',
      },
    ],
    neProuvePas:
      'Rêver de rupture n’annonce pas une séparation réelle et ne révèle pas les intentions cachées de votre partenaire. Ce n’est pas une prémonition. En faire un signe pousse à des doutes ou à des questions anxieuses qui peuvent fragiliser un couple sain sans raison objective.',
    conseil:
      'Ne traitez pas ce rêve comme une prédiction mais comme un révélateur d’émotion. Repérez ce qu’il pointe : peur de l’abandon, besoin d’espace, frustration tue. Le vrai message est souvent un besoin à formuler avec douceur. Ouvrir un dialogue sur ce besoin renforce le lien bien plus sûrement que d’interroger l’autre sur un songe.',
    faq: [
      {
        q: 'Rêver de rupture annonce-t-il une vraie séparation ?',
        a: 'Non. Ce rêve n’est pas prémonitoire. La séparation onirique symbolise le plus souvent une peur de perdre l’autre, un besoin de changement ou une part de soi en quête d’autonomie, pas une rupture à venir. Il met en scène une tension intérieure pour la rendre visible. Le prendre pour une annonce sème des doutes qui peuvent fragiliser un couple sain sans aucune raison réelle.',
      },
      {
        q: 'Pourquoi je rêve de rupture alors que mon couple va bien ?',
        a: 'Ce scénario met souvent en scène la peur de perdre un bonheur présent, précisément parce qu’il compte pour vous. Plus l’attachement est fort, plus l’inconscient peut dramatiser la crainte de le perdre. Le rêve mesure la valeur du lien bien plus qu’il n’annonce sa fin. Il peut aussi refléter une insécurité personnelle indépendante de la solidité réelle de votre relation.',
      },
      {
        q: 'Que faire quand ce rêve me laisse anxieux au réveil ?',
        a: 'Commencez par ne pas le lire comme une information sur votre couple. Observez l’émotion dominante — peur de l’abandon, besoin d’espace, frustration — car c’est elle qui porte le message. Souvent, un besoin cherche à être formulé. En parler avec douceur à votre partenaire apaise l’anxiété et renforce le lien, alors qu’interroger l’autre sur le rêve lui-même ne mène à rien.',
      },
    ],
  },
];
