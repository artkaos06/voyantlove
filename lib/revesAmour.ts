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

/** Card view-model consumed directly by the love-dream hub. */
export function getDreamHubCards() {
  return REVES_AMOUR.filter((d) => validateDreamRecord(d).length === 0).map((d) => ({
    slug: d.slug,
    titre: d.titre,
    emoji: d.emoji,
    primaryQuery: d.primaryQuery,
    href: `/reves-amour/${d.slug}`,
  }));
}

/** Quality gate — a record below these thresholds must not produce a page. */
export function validateDreamRecord(d: DreamEntry): string[] {
  const issues: string[] = [];
  const answerWords = d.answerCapsule.trim().split(/\s+/u).filter(Boolean).length;
  if (answerWords < 150 || answerWords > 170) {
    issues.push(`${d.slug}: answerCapsule must contain 150-170 words (found ${answerWords})`);
  }
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
      'Rêver de tromperie, que ce soit d’être trompé ou de tromper, est l’un des rêves amoureux les plus troublants — et l’un des moins prédictifs. Dans l’immense majorité des cas, ce rêve ne dit rien d’une infidélité réelle : il met en scène une émotion intérieure, le plus souvent une peur de l’abandon, une insécurité dans le couple ou un manque de confiance en soi. Rêver que son partenaire nous trompe traduit souvent une crainte de ne pas être assez, ou une distance ressentie ces derniers temps. Rêver que l’on trompe l’autre renvoie fréquemment à une culpabilité, à un besoin non comblé ou à une part de soi négligée. La signification dépend du ressenti au réveil, jamais d’une grille figée. Une consultation de voyance amoureuse peut éclairer l’émotion que ce rêve met en lumière, sans jamais prétendre annoncer une trahison à venir. Elle invite surtout à nommer votre besoin de sécurité.',
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
      'Rêver de mariage est l’un des rêves symboliques les plus riches, et il ne prédit presque jamais un mariage réel. Le mariage y est avant tout un symbole d’union, d’engagement, de transformation et de passage vers une nouvelle étape — dans le couple, mais aussi dans la vie en général. Rêver de se marier peut traduire un désir d’engagement, une peur de celui-ci, ou un besoin d’unir deux parts de soi. Rêver du mariage de quelqu’un d’autre, ou d’un mariage avec un inconnu, renvoie souvent à une évolution intérieure plutôt qu’à un événement à venir. Le ressenti au réveil — joie, angoisse, fuite — oriente la lecture bien plus que le scénario. Ce rêve parle de votre rapport à l’engagement et au changement. Une consultation de voyance amoureuse peut éclairer ce que cette symbolique révèle de votre moment de vie, sans annoncer une date ni un événement. Il invite donc au discernement intérieur.',
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
      'Rêver de faire l’amour avec son ex est un rêve fréquent, souvent gênant au réveil, et rarement lié à un désir réel de retour. En langage des rêves, l’intimité physique symbolise une reconnexion, une fusion ou l’intégration de quelque chose — pas nécessairement une envie sexuelle littérale. Ce rêve traduit le plus souvent un besoin de clôture, la nostalgie d’une intimité perdue, ou une part de la relation restée inachevée. Il peut aussi surgir quand une émotion liée à l’ex remonte : manque, colère non soldée, ou attachement encore actif que le sommeil met en scène. Cela ne signifie pas qu’il faut renouer, ni que l’autre pense à vous. Le ressenti au réveil — apaisement, trouble, tristesse — oriente la lecture. Une consultation de voyance amoureuse peut éclairer l’émotion que ce rêve réveille, sans jamais prescrire un retour ni prédire les intentions de votre ex. Cette nuance protège des décisions affectives impulsives.',
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
      'Rêver de son ex avec quelqu’un d’autre est un rêve douloureux, mais il est presque toujours le signe d’un travail intérieur, pas une prémonition ni une information sur la vie réelle de l’ex. Le plus souvent, ce rêve accompagne le processus d’acceptation : une part de vous intègre que la relation est terminée et que l’autre peut avancer. Il peut aussi refléter une peur d’être remplacé, une insécurité, ou une jalousie résiduelle que le sommeil met en scène pour l’apprivoiser. Paradoxalement, ce rêve douloureux marque souvent une étape de guérison — le moment où l’inconscient regarde en face la page qui se tourne. Le ressenti au réveil, de la détresse au soulagement, en dit long sur où vous en êtes. Une consultation de voyance amoureuse peut éclairer cette étape, sans jamais prétendre savoir si votre ex est réellement avec quelqu’un. Cette lecture protège votre guérison des conclusions hâtives sur sa vie.',
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
      'Rêver de rupture, alors même que le couple va bien, est un rêve angoissant mais rarement prémonitoire. La séparation, en langage des rêves, symbolise souvent une peur de perdre l’autre, un besoin de changement, ou une part de soi qui cherche plus d’autonomie — pas une rupture réelle à venir. Rêver que son partenaire nous quitte traduit fréquemment une insécurité affective ou un manque de réassurance. Rêver de quitter l’autre peut refléter un besoin d’espace, une frustration non exprimée, ou une part de vous qui étouffe. Le rêve met en scène une tension intérieure pour la rendre visible, non pour l’annoncer. Le ressenti au réveil oriente la lecture bien plus que le scénario. Une consultation de voyance amoureuse peut éclairer le besoin que ce rêve met en lumière, sans jamais prédire une séparation ni la provoquer. Cette lecture aide à distinguer une inquiétude passagère d’une décision réellement mûrie dans la vie éveillée.',
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
  {
    slug: 'rever-de-tomber-amoureux',
    titre: 'Rêver de Tomber Amoureux',
    emoji: '✨',
    primaryQuery: 'Rêver de tomber amoureux d’une personne inconnue ou nouvelle',
    answerCapsule:
      'Rêver de tomber amoureux d’une personne inconnue ou nouvelle surprend souvent par son intensité au réveil. Ce songe n’annonce pourtant pas la rencontre d’un futur partenaire et ne décrit aucun visage réel à rechercher. Il met surtout en scène votre capacité à aimer, à être touché et à accueillir un changement affectif. Cette naissance du sentiment peut traduire une ouverture intérieure, un désir de renouveau ou la redécouverte d’un élan que le quotidien avait mis en veille. En couple, elle peut inviter à raviver l’intensité ou la curiosité dans la relation existante, sans signaler une attirance réelle pour un tiers. Célibataire, elle peut accompagner la fin d’une période de repli, sans fournir de calendrier amoureux. Le visage rêvé compte moins que l’émotion ressentie : joie, vertige, confiance ou prudence renseignent sur votre disponibilité actuelle. Une consultation de voyance amoureuse peut aider à nommer cet élan et vos attentes, sans transformer le rêve en promesse de rencontre ni désigner la personne qui vous attendrait.',
    pourquoi:
      'Ce rêve apparaît souvent quand une part de vous redevient disponible à l’émotion amoureuse, même sans projet concret. Une rupture qui s’apaise, une routine qui pèse, un désir de changement : autant de terrains qui préparent ce type de songe. Le cerveau, la nuit, explore librement des scénarios que la prudence éveillée n’autorise pas toujours, et invente des visages pour donner forme à un élan encore flou. Ce n’est pas la personne rêvée qui compte, mais la sensation de disponibilité intérieure qu’elle réveille.',
    interpretations: [
      {
        variante: 'Rêver de tomber amoureux d’un inconnu au visage flou',
        sens: 'Signale le plus souvent une ouverture intérieure à l’amour ou au changement, sans lien avec une personne précise à rencontrer. Le visage flou laisse la place à l’émotion elle-même, plus importante que le scénario.',
      },
      {
        variante: 'Rêver de tomber amoureux alors qu’on est en couple',
        sens: 'Renvoie rarement à une attirance réelle pour un tiers. Traduit plus souvent un besoin de nouveauté, d’intensité ou de légèreté à retrouver dans la relation actuelle, pas une invitation à s’en détourner.',
      },
      {
        variante: 'Rêver de tomber amoureux étant célibataire',
        sens: 'Exprime fréquemment l’envie de s’ouvrir à nouveau après une période de prudence ou de repli. Le rêve prépare intérieurement à accueillir une relation, sans en désigner la date ni la personne.',
      },
      {
        variante: 'Rêver du coup de foudre ou d’un vertige amoureux intense',
        sens: 'Met en scène l’intensité d’un désir de connexion plutôt qu’un événement à venir. Ce vertige onirique traduit souvent un besoin de vous sentir vivant et pleinement présent à vos émotions.',
      },
    ],
    neProuvePas:
      'Ce rêve ne prouve pas qu’une rencontre est proche, ni qu’une personne précise entrera bientôt dans votre vie. Il ne révèle pas non plus une attirance réelle pour un inconnu croisé récemment. Le prendre pour un présage pousse à guetter un signe extérieur là où le rêve ne parle, en réalité, que de votre disponibilité intérieure à l’amour.',
    conseil:
      'Accueillez la légèreté ou le vertige de ce rêve comme une information sur votre propre élan, pas comme une annonce. Si vous êtes en couple, demandez-vous ce qui, dans votre relation, mériterait un peu plus de nouveauté ou d’attention. Si vous êtes célibataire, ce rêve peut simplement confirmer que vous êtes prêt à aimer à nouveau, sans qu’il faille en chercher la preuve dans une rencontre précise.',
    faq: [
      {
        q: 'Rêver de tomber amoureux annonce-t-il une vraie rencontre ?',
        a: 'Non. Ce rêve ne désigne aucune personne réelle et n’annonce pas de rencontre précise. Il met en scène votre propre disponibilité intérieure à l’amour, un désir de renouveau ou d’intensité. Le visage inconnu ou flou du rêve n’a pas de correspondance à chercher dans la vie éveillée : c’est l’émotion ressentie, pas le scénario, qui porte le sens de ce songe.',
      },
      {
        q: 'Pourquoi je rêve de tomber amoureux alors que je suis en couple ?',
        a: 'Ce rêve renvoie rarement à une attirance réelle pour un tiers. Il traduit le plus souvent un besoin de nouveauté, de légèreté ou d’intensité à retrouver dans votre relation actuelle. Plutôt que d’y voir un signe d’infidélité intérieure, il peut être lu comme une invitation à raviver ce qui, dans votre couple, s’est un peu endormi avec le temps.',
      },
      {
        q: 'Ce rêve veut-il dire que je suis enfin prêt à retomber amoureux ?',
        a: 'Il peut effectivement traduire une ouverture nouvelle, surtout après une période de prudence ou de repli affectif. Mais ce n’est pas une garantie ni un calendrier : le rêve reflète un état intérieur du moment, pas une promesse. Il indique que quelque chose en vous redevient disponible à l’émotion amoureuse, ce qui est déjà, en soi, une évolution intéressante à observer.',
      },
    ],
  },
  {
    slug: 'rever-de-dispute-avec-son-partenaire',
    titre: 'Rêver de Dispute avec son Partenaire',
    emoji: '⚡',
    primaryQuery: 'Rêver de se disputer avec son partenaire actuel',
    answerCapsule:
      'Rêver de se disputer avec son partenaire peut laisser un malaise durable, même lorsque le couple va bien. Ce scénario ne prédit pas une querelle et ne prouve pas qu’un conflit factuel existe entre vous. Il peut d’abord exprimer une émotion intérieure qui cherche une issue, comme une colère liée au travail ou une fatigue transposée sur le partenaire. Il peut aussi refléter une tension relationnelle diffuse : besoin tu, frustration minimisée ou difficulté à se sentir entendu. Enfin, lorsqu’un désaccord réel a déjà eu lieu, le rêve peut simplement le retraiter sans apporter de nouvelle information. Cette distinction évite de confondre votre état émotionnel, le climat du lien et les faits vérifiables. Une dispute violente souligne souvent l’intensité ressentie, non la gravité objective de la situation ; une réconciliation onirique peut traduire un désir d’apaisement. Le ressenti et le contexte éveillé orientent donc la lecture. Une consultation de voyance amoureuse peut aider à formuler le besoin sous-jacent, sans annoncer un conflit ni attribuer au partenaire une intention cachée.',
    pourquoi:
      'Ce rêve peut survenir quand une frustration ou un besoin reste tu dans la relation éveillée, mais aussi lorsque la fatigue ou une colère extérieure cherche simplement un personnage sur lequel se projeter. Après un échange réellement difficile, le sommeil peut encore retraiter les faits déjà connus. Il faut donc distinguer trois niveaux : l’émotion personnelle, une tension ressentie dans le lien et un conflit confirmé par des paroles ou des actes. Le rêve éclaire les deux premiers ; il ne crée aucune preuve du troisième.',
    interpretations: [
      {
        variante: 'Rêver d’une dispute violente avec son partenaire',
        sens: 'Traduit souvent une colère accumulée ou un besoin longtemps tu. Si un désaccord existe déjà, le rêve peut le retraiter ; son intensité n’en mesure toutefois pas la gravité factuelle.',
      },
      {
        variante: 'Rêver d’une dispute pour un motif absurde ou flou',
        sens: 'Le motif précis compte peu : le rêve emprunte souvent un prétexte pour libérer une tension plus large, accumulée sur plusieurs petits désaccords non exprimés.',
      },
      {
        variante: 'Rêver de se réconcilier après la dispute',
        sens: 'Signale fréquemment un besoin d’apaisement déjà en cours, ou l’espoir que les tensions réelles du couple trouvent une issue. Le rêve rejoue une résolution que vous souhaitez voir advenir.',
      },
      {
        variante: 'Rêver de dispute alors que le couple va très bien',
        sens: 'Peut traduire une petite frustration minimisée par souci d’harmonie, ou simplement le résidu d’une tension extérieure au couple, comme le travail ou la fatigue, transposée sur la relation la nuit.',
      },
    ],
    neProuvePas:
      'Ce rêve ne prouve ni une dispute à venir, ni un désamour caché, ni un conflit que les faits éveillés ne montrent pas. Un conflit réel peut bien sûr exister indépendamment du songe, mais il s’établit par des échanges et comportements observables. Le scénario nocturne indique seulement votre émotion ou votre perception du climat relationnel. Le traiter comme un message envoyé inconsciemment par l’autre risque de créer une accusation sans fondement.',
    conseil:
      'Servez-vous de ce rêve pour identifier ce qui, dans votre relation, demande à être exprimé avec des mots plutôt que rejoué la nuit : un besoin, une frustration minime, une charge mentale. Choisissez un moment calme pour en parler, sans mentionner le rêve lui-même, qui risquerait d’être mal compris comme une accusation. C’est le besoin sous-jacent qui mérite l’attention, pas le scénario onirique.',
    faq: [
      {
        q: 'Rêver de me disputer avec mon partenaire veut-il dire que notre couple va mal ?',
        a: 'Pas nécessairement. Le rêve peut exprimer votre propre colère ou fatigue, refléter une tension perçue dans le lien, ou retraiter un désaccord qui a réellement eu lieu. Ces possibilités ne sont pas équivalentes. Seuls les échanges et comportements observables renseignent sur l’état factuel du couple. Une relation qui va bien peut produire ce scénario parce qu’une émotion extérieure a été transposée ou qu’un petit besoin reste à formuler.',
      },
      {
        q: 'Pourquoi je rêve de disputes violentes alors que je ne me dispute jamais avec mon partenaire dans la vraie vie ?',
        a: 'Le rêve emprunte souvent l’intensité d’une émotion plus large — colère, fatigue, charge mentale — pour la mettre en scène, indépendamment de la gravité réelle d’un désaccord. Éviter les conflits dans la vie éveillée n’empêche pas la tension d’exister ailleurs ; le sommeil lui offre alors un espace d’expression que le quotidien refuse.',
      },
      {
        q: 'Dois-je parler de ce rêve à mon partenaire ?',
        a: 'Mieux vaut ne pas raconter le rêve tel quel, car il pourrait être mal interprété comme une accusation ou un reproche. Utilisez-le plutôt comme point de départ personnel : identifiez le besoin ou la frustration qu’il pointe, puis abordez ce sujet concrètement avec votre partenaire, à un moment calme, sans faire référence au songe lui-même.',
      },
    ],
  },
  {
    slug: 'rever-de-recevoir-une-declaration-damour',
    titre: 'Rêver de Recevoir une Déclaration d’Amour',
    emoji: '💌',
    primaryQuery: 'Rêver que quelqu’un nous déclare son amour',
    answerCapsule:
      'Rêver que quelqu’un vous déclare son amour met les mots, la reconnaissance et la confirmation au centre du scénario. Ce rêve ne révèle pas les sentiments secrets de la personne entendue et n’annonce aucune déclaration réelle. Il reflète souvent votre besoin de savoir où vous comptez, d’être choisi ou de recevoir une parole claire dans une relation ambiguë. Si la déclaration vient d’un inconnu, le personnage peut représenter une validation que vous cherchez d’abord en vous-même, plutôt qu’un futur partenaire. Si elle vient de votre partenaire, le rêve peut souligner un besoin de réassurance ou de mots tendres, même lorsque l’affection existe dans les gestes. Une déclaration refusée ou gênante peut, elle, montrer une difficulté à recevoir l’attention ou la crainte qu’un engagement devienne trop pressant. L’émotion au réveil — soulagement, joie, doute ou inconfort — précise le besoin concerné. Une consultation de voyance amoureuse peut aider à distinguer attente de reconnaissance et réalité du lien, sans lire les pensées d’autrui ni promettre un aveu prochain.',
    pourquoi:
      'Ce rêve apparaît souvent lorsqu’une relation manque de clarté, que les marques d’affection restent implicites ou que votre confiance a besoin d’être consolidée. Le sommeil fabrique alors la phrase nette que la vie éveillée ne fournit pas. Il peut aussi survenir après une période de solitude ou de doute personnel : être déclaré digne d’amour répare symboliquement un sentiment de mise à l’écart. La parole rêvée répond à un besoin de reconnaissance ; elle ne transmet pas la pensée réelle de celui ou celle qui parle.',
    interpretations: [
      {
        variante: 'Rêver qu’un inconnu nous déclare son amour',
        sens: 'Met souvent en scène un besoin général de reconnaissance ou de valeur personnelle. L’inconnu ne désigne pas un partenaire à venir : il porte les mots que vous aimeriez pouvoir croire sur vous-même.',
      },
      {
        variante: 'Rêver que son partenaire nous dit « je t’aime »',
        sens: 'Peut traduire un besoin de réassurance verbale lorsque l’affection passe surtout par les actes. Le rêve formule une attente de clarté, sans prouver que le lien manque d’amour.',
      },
      {
        variante: 'Rêver de refuser une déclaration d’amour',
        sens: 'Peut refléter une crainte de l’engagement, le besoin de préserver vos limites ou une difficulté à recevoir l’attention. Le refus rêvé ne décide pas de vos sentiments éveillés.',
      },
      {
        variante: 'Rêver d’attendre une déclaration qui ne vient pas',
        sens: 'Souligne souvent la fatigue d’une situation ambiguë ou le besoin d’une réponse explicite. L’attente onirique invite à regarder votre tolérance à l’incertitude, pas à patienter pour un signe.',
      },
    ],
    neProuvePas:
      'Une déclaration entendue en rêve ne prouve pas que cette personne vous aime, pense à vous ou prépare un aveu. Elle ne garantit pas davantage une rencontre si le visage est inconnu. Prendre ces mots pour un message reçu à distance nourrit une attente sans fondement et détourne du seul élément observable : votre propre besoin de reconnaissance, de clarté ou de réassurance.',
    conseil:
      'Notez les mots prononcés et surtout l’effet qu’ils ont produit. Cherchiez-vous à être rassuré, choisi, valorisé ou libéré d’une ambiguïté ? Vous pouvez ensuite demander davantage de clarté dans une relation réelle, sans présenter le rêve comme une preuve. Si la déclaration venait d’un inconnu, travaillez la reconnaissance que vous attendez d’autrui : une validation intérieure stable réduit le besoin de transformer ce scénario en promesse extérieure.',
    faq: [
      {
        q: 'Rêver que quelqu’un me déclare son amour signifie-t-il qu’il m’aime vraiment ?',
        a: 'Non. Le rêve ne donne pas accès aux sentiments d’une autre personne. Il fabrique souvent la réponse claire que vous souhaitez entendre lorsque le lien reste ambigu, ou met en scène votre besoin d’être choisi et reconnu. Pour connaître les sentiments réels de quelqu’un, seuls ses paroles, ses actes cohérents et un échange direct apportent des éléments fiables ; le scénario nocturne parle uniquement de votre attente.',
      },
      {
        q: 'Que signifie une déclaration d’amour faite par un inconnu en rêve ?',
        a: 'L’inconnu représente souvent une validation sans auteur précis : le besoin de vous sentir aimable, visible ou digne d’attention. Il ne faut pas chercher son visage dans une prochaine rencontre. Observez plutôt ce que les paroles ont réparé ou apaisé au réveil. Cette émotion indique la forme de reconnaissance qui vous manque actuellement et que vous pouvez commencer à construire sans attendre un partenaire providentiel.',
      },
      {
        q: 'Pourquoi ai-je refusé la déclaration dans mon rêve ?',
        a: 'Un refus peut exprimer le besoin de garder vos limites, une peur de l’engagement ou une gêne à recevoir pleinement l’affection. Il ne tranche pas vos sentiments pour la personne rêvée. Le contexte compte : un soulagement peut signaler une limite saine, tandis qu’un regret peut révéler une prudence protectrice devenue trop forte. Dans les deux cas, le rêve invite à observer votre rapport à la proximité.',
      },
    ],
  },
  {
    slug: 'rever-detre-jaloux',
    titre: 'Rêver d’Être Jaloux',
    emoji: '🟢',
    primaryQuery: 'Rêver d’être jaloux ou jalouse en amour',
    answerCapsule:
      'Rêver d’être jaloux ou jalouse en amour met souvent en scène une comparaison, une peur de perdre sa place ou un besoin de réassurance. Ce rêve ne prouve ni infidélité ni rivalité réelle : la personne perçue comme menaçante peut simplement incarner une qualité que vous craignez de ne pas posséder. Lorsque la jalousie vise un partenaire actuel, elle peut refléter une sécurité affective fragilisée, même sans fait objectif. Avec un partenaire imaginaire, le scénario parle davantage de votre rapport à la valeur personnelle et à l’exclusivité. Une jalousie très intense peut aussi transposer une compétition vécue ailleurs, au travail ou dans la famille, sur une scène amoureuse plus chargée émotionnellement. L’élément utile n’est donc pas de surveiller l’autre, mais d’identifier ce que la comparaison menace en vous : sentiment d’être choisi, confiance, reconnaissance ou peur du remplacement. Une consultation de voyance amoureuse peut éclairer cette insécurité et les besoins qu’elle révèle, sans transformer l’émotion rêvée en soupçon ni confirmer l’existence d’un rival.',
    pourquoi:
      'Ce rêve apparaît lorsque votre sentiment de sécurité ou de valeur traverse une période fragile. Une comparaison sur les réseaux sociaux, moins d’attention dans le couple, un changement physique ou une compétition extérieure peuvent nourrir la scène. Le sommeil amplifie alors la peur de perdre votre place pour la rendre visible. La jalousie onirique renseigne sur une vulnérabilité personnelle ou relationnelle ; elle n’apporte aucun fait sur la conduite du partenaire.',
    interpretations: [
      {
        variante: 'Rêver d’être jaloux de son partenaire',
        sens: 'Reflète souvent une peur de perdre votre place ou un besoin de réassurance, sans indiquer que le partenaire a fauté. L’émotion mérite d’être nommée sans devenir une accusation.',
      },
      {
        variante: 'Rêver d’être jaloux d’un rival inconnu',
        sens: 'L’inconnu représente fréquemment une comparaison abstraite ou une qualité que vous pensez ne pas avoir. Il ne désigne pas une personne réelle qui menacerait votre relation.',
      },
      {
        variante: 'Rêver que son partenaire est jaloux',
        sens: 'Peut mettre en scène votre besoin de vous sentir important ou désiré, ou votre crainte d’être contrôlé. Ce scénario ne révèle pas la jalousie cachée de l’autre.',
      },
      {
        variante: 'Rêver d’une jalousie incontrôlable',
        sens: 'L’intensité peut traduire une insécurité accumulée ou une compétition extérieure transposée sur le couple. Elle mesure la charge émotionnelle, pas la probabilité d’une trahison.',
      },
    ],
    neProuvePas:
      'La jalousie ressentie en rêve ne prouve pas que votre partenaire vous trompe, vous compare ou souhaite vous remplacer. Elle ne confirme pas davantage l’existence d’un rival. Fouiller un téléphone, surveiller ou interroger l’autre sur cette seule base transformerait une insécurité intérieure en conflit factuel. Seuls des comportements observables peuvent justifier une discussion sur les faits ; le rêve invite d’abord à comprendre votre émotion.',
    conseil:
      'Repérez précisément ce qui vous a menacé dans le rêve : beauté, attention, réussite, complicité ou peur d’être remplacé. Cette qualité indique le terrain où votre confiance demande du soutien. Si un besoin relationnel réel existe, formulez-le sans accusation, par exemple en demandant davantage de présence ou de réassurance. Distinguez toujours ce besoin légitime d’une enquête sur un rival que le rêve, à lui seul, ne permet pas d’établir.',
    faq: [
      {
        q: 'Rêver d’être jaloux signifie-t-il que mon partenaire me trompe ?',
        a: 'Non. La jalousie onirique exprime le plus souvent une peur de perdre votre place, une comparaison ou un besoin de réassurance. Elle ne fournit aucune information sur les actes de votre partenaire. Avant toute conclusion, séparez l’émotion ressentie des faits observables. Vous pouvez parler d’un besoin de sécurité ou de présence, mais le rêve seul ne justifie ni accusation, ni surveillance, ni certitude sur une infidélité.',
      },
      {
        q: 'Pourquoi suis-je jaloux d’une personne inconnue dans mon rêve ?',
        a: 'Un rival inconnu condense souvent une comparaison plutôt qu’une menace réelle. Il peut incarner la confiance, l’apparence, la réussite ou l’aisance que vous pensez manquer. Demandez-vous quelle caractéristique lui donnait un avantage dans le scénario : elle montre le domaine où votre estime a besoin d’attention. Le visage n’est pas à rechercher dans la réalité et n’annonce pas l’arrivée d’un concurrent amoureux.',
      },
      {
        q: 'Comment réagir après un rêve de jalousie très intense ?',
        a: 'Attendez que l’émotion retombe avant d’en tirer une conclusion ou d’interroger votre partenaire. Notez ce qui déclenchait la comparaison et le besoin associé : être choisi, rassuré, reconnu ou protégé. Si ce besoin existe aussi dans la vie éveillée, exprimez-le calmement sans présenter le rêve comme une preuve. Une jalousie récurrente peut aussi inviter à travailler l’estime de soi et les blessures de confiance anciennes.',
      },
    ],
  },
];
