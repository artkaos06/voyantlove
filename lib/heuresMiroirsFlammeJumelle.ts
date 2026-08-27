// Mirror-hour records for /nouvelle-rencontre/flamme-jumelle/[heure]/.
//
// Bounded pilot (6 hours). Live DataForSEO, Google FR, 2026-08-27: each
// "<heure> signification flamme jumelle" query sits at 1 300-1 600/mo with a
// keyword difficulty of 0, and the top 10 is entirely small niche sites. The
// parent keyword "flamme jumelle" (9 900/mo, KD 0) already has a hub at
// /nouvelle-rencontre/flamme-jumelle/, so this cluster nests UNDER it: the
// queries are "<heure> signification flamme jumelle", i.e. a qualifier on the
// hub's own entity, not a separate network.
//
// Editorial rule, same as lib/revesAmour.ts: an heure miroir is read as a
// symbol the reader projects a situation onto, never as a fact about another
// person. Every record carries a `neProuvePas` paragraph saying so.
//
// Distinctness is a hard requirement, not a nicety: six pages built from one
// paragraph with the hour swapped would be a doorway set. Each hour therefore
// has its own traditional reading (12h12 alignement, 17h17 épreuve, 20h20
// message, 10h10 nouveau cycle, 23h23 fin de cycle, 21h21 introspection), its
// own digit-sum numerology, its own tarot arcana correspondence and its own
// separation/reunion reading. tests/heuresMiroirsFlammeJumelle.test.ts pins
// pairwise trigram dissimilarity across every prose field.
//
// Publication gate: a page is generated ONLY if validateHeureMiroirRecord()
// returns no issue, exactly like the other typed networks.
//
// Phase 2 (the ~14 remaining mirror hours) is deliberately NOT built here:
// expand only if Search Console shows impressions on these six.

export interface HeureMiroirFaq {
  q: string;
  a: string;
}

export interface HeureMiroirArcane {
  /** display name, e.g. "Les Amoureux (arcane VI)" */
  nom: string;
  /** slug of the matching card in lib/tarotLoveCards.ts, for the internal link */
  slug: string;
  /** why this arcana is the one that answers this hour */
  lecture: string;
}

export interface HeureMiroirFunnel {
  /** sentence that leads into the /voyance-gratuite-amour/ link */
  lead: string;
  /** the anchor text itself — varied per hour, one repeated exact-match anchor reads as a footprint */
  anchor: string;
  /** sentence that closes after the link */
  tail: string;
}

export interface HeureMiroirEntry {
  /** URL slug and display form, e.g. "12h12" */
  slug: string;
  /** short thematic label, French sentence case */
  theme: string;
  /** one-word dominant message, used in the stats band */
  motCle: string;
  /** exact target query — MUST be `${slug} signification flamme jumelle` */
  primaryQuery: string;
  /** what follows the exact phrase in the <title> and <h1> */
  titleSuffix: string;
  /** meta description */
  description: string;
  /** 150-170 word extractive answer capsule */
  answerCapsule: string;
  /** what this hour says about the twin-flame bond specifically */
  signification: string;
  /** what to do when the hour keeps showing up */
  queFaire: string;
  /** 3+ concrete, hour-specific actions */
  actions: string[];
  /** reading when the two flames are separated / in no contact */
  enSeparation: string;
  /** reading when contact is live or reunion is under way */
  enRetrouvailles: string;
  /** what this hour does NOT prove */
  neProuvePas: string;
  /** digit-sum numerology of the four digits */
  numerologie: string;
  /** tarot correspondence, and the internal link it carries */
  arcane: HeureMiroirArcane;
  /** contextual funnel into the /voyance-gratuite-amour/ hub */
  funnel: HeureMiroirFunnel;
  faq: HeureMiroirFaq[];
}

export function findHeureMiroir(slug: string): HeureMiroirEntry | undefined {
  return HEURES_MIROIRS_FLAMME_JUMELLE.find((h) => h.slug === slug);
}

/** Live records only — the same publication gate the sitemap and the router use. */
export function getLiveHeuresMiroirs(): HeureMiroirEntry[] {
  return HEURES_MIROIRS_FLAMME_JUMELLE.filter((h) => validateHeureMiroirRecord(h).length === 0);
}

/** Card view-model consumed by the flamme-jumelle hub's cluster section. */
export function getHeureMiroirHubCards() {
  return getLiveHeuresMiroirs().map((h) => ({
    slug: h.slug,
    heure: h.slug,
    theme: h.theme,
    primaryQuery: h.primaryQuery,
    href: `/nouvelle-rencontre/flamme-jumelle/${h.slug}/`,
  }));
}

const HOUR_SLUG = /^(?:[01]\d|2[0-3])h[0-5]\d$/;

/**
 * Digit-sum of the four digits of a mirror hour, reduced to a single digit —
 * the numerology figure each record explains in prose (12h12 -> 6, 17h17 -> 7,
 * 20h20 -> 4, 10h10 -> 2, 23h23 -> 1, 21h21 -> 6). Computed rather than
 * authored so the stats band can never contradict the paragraph.
 */
export function reductionNumerologique(slug: string): number {
  let n = slug
    .replace('h', '')
    .split('')
    .reduce((sum, c) => sum + Number(c), 0);
  while (n > 9) n = String(n).split('').reduce((sum, c) => sum + Number(c), 0);
  return n;
}

/** Quality gate: a record below these thresholds must not produce a page. */
export function validateHeureMiroirRecord(h: HeureMiroirEntry): string[] {
  const issues: string[] = [];
  if (!HOUR_SLUG.test(h.slug)) issues.push(`${h.slug}: slug must be a 24h mirror hour such as "12h12"`);
  if (h.primaryQuery !== `${h.slug} signification flamme jumelle`) {
    issues.push(`${h.slug}: primaryQuery must be "${h.slug} signification flamme jumelle" (found "${h.primaryQuery}")`);
  }
  const answerWords = h.answerCapsule.trim().split(/\s+/u).filter(Boolean).length;
  if (answerWords < 150 || answerWords > 170) {
    issues.push(`${h.slug}: answerCapsule must contain 150-170 words (found ${answerWords})`);
  }
  if (h.theme.length < 12) issues.push(`${h.slug}: theme too short`);
  if (h.motCle.length < 5 || h.motCle.length > 20) issues.push(`${h.slug}: motCle must be a single 5-20 character word`);
  if (h.titleSuffix.length < 10) issues.push(`${h.slug}: titleSuffix too short`);
  if (h.description.length < 110 || h.description.length > 165) {
    issues.push(`${h.slug}: description must be 110-165 characters (found ${h.description.length})`);
  }
  if (h.signification.length < 500) issues.push(`${h.slug}: signification too short`);
  if (h.queFaire.length < 300) issues.push(`${h.slug}: queFaire too short`);
  if (h.actions.length < 3) issues.push(`${h.slug}: fewer than 3 actions`);
  h.actions.forEach((a, i) => {
    if (a.length < 80) issues.push(`${h.slug}: actions[${i}] too short`);
  });
  if (h.enSeparation.length < 220) issues.push(`${h.slug}: enSeparation too short`);
  if (h.enRetrouvailles.length < 220) issues.push(`${h.slug}: enRetrouvailles too short`);
  if (h.neProuvePas.length < 160) issues.push(`${h.slug}: neProuvePas too short`);
  if (h.numerologie.length < 120) issues.push(`${h.slug}: numerologie too short`);
  if (!h.arcane.slug) issues.push(`${h.slug}: arcane.slug missing`);
  if (h.arcane.lecture.length < 120) issues.push(`${h.slug}: arcane.lecture too short`);
  if (!h.funnel.anchor.toLowerCase().includes('voyance')) {
    issues.push(`${h.slug}: funnel.anchor must be a voyance anchor`);
  }
  if (h.funnel.lead.length < 40) issues.push(`${h.slug}: funnel.lead too short`);
  if (h.faq.length < 3) issues.push(`${h.slug}: fewer than 3 FAQ`);
  h.faq.forEach((f, i) => {
    if (f.a.length < 200) issues.push(`${h.slug}: faq[${i}] answer too short`);
  });
  return issues;
}

// Ordered by search volume (highest first), which is also the order the hub
// lists them in.
export const HEURES_MIROIRS_FLAMME_JUMELLE: HeureMiroirEntry[] = [
  {
    slug: '12h12',
    motCle: 'Alignement',
    theme: 'Alignement et union qui se rapproche',
    primaryQuery: '12h12 signification flamme jumelle',
    titleSuffix: 'le signe que le lien s’aligne',
    description:
      'Voir 12h12 en flamme jumelle : le sens traditionnel de cette heure miroir, ce qu’elle dit de l’alignement du lien, et quoi faire quand elle revient.',
    answerCapsule:
      'Voir 12h12 quand on vit une connexion de flamme jumelle est traditionnellement lu comme un signe d’alignement : les deux moitiés du lien avancent enfin au même rythme. Cette heure miroir n’annonce pas une rencontre lointaine, elle confirme un mouvement déjà commencé. Le nombre 12 y est répété tel quel, exactement comme une flamme jumelle répète l’autre, et l’addition de ses quatre chiffres donne 6, le nombre du choix assumé. Concrètement, 12h12 signale que vos décisions récentes vous rapprochent de votre jumeau au lieu de vous en éloigner : une parole enfin posée, un pardon accordé, une limite tenue. C’est une heure d’encouragement, pas une invitation à attendre les bras croisés. Elle demande de garder le cap intérieur et de ne pas saboter l’élan par la précipitation ou par un message envoyé sous le coup de l’émotion. Vue en pleine séparation, la lecture ne change pas : quelque chose s’ajuste, même si rien ne se voit encore de l’extérieur.',
    signification:
      'La force de 12h12 tient à sa symétrie parfaite : le même nombre, deux fois, sans transformation. C’est la structure même de la flamme jumelle, deux êtres qui portent le même matériau intérieur dans deux vies séparées. Là où d’autres heures miroirs parlent d’un événement à venir, 12h12 parle d’un état : celui d’un lien qui cesse d’être décalé. Dans la tradition des heures miroirs, le 12 est aussi le nombre des cycles achevés, douze mois, douze signes, douze heures ; il ferme une boucle plutôt qu’il n’en ouvre une. Appliqué à votre connexion, cela veut dire que la période où chacun avançait à contretemps, l’un prêt quand l’autre fuyait, touche à sa fin. L’alignement dont parle 12h12 est d’abord intérieur : il se produit en vous avant de se voir dans les faits, et c’est précisément pour cela qu’il déroute. Vous vous sentez apaisé sans qu’aucune nouvelle ne l’explique.',
    queFaire:
      'La réponse juste à 12h12 est la constance, pas l’action spectaculaire. Notez ce que vous étiez en train de penser ou de décider à l’instant où l’heure est apparue : dans la lecture traditionnelle, 12h12 valide la direction du moment, il ne l’oriente pas. Si vous hésitiez entre insister et respirer, il confirme presque toujours le second. Continuez le travail intérieur commencé, même s’il paraît lent, et résistez à la tentation d’en tirer un signal pour reprendre contact immédiatement : une heure miroir n’est pas une autorisation. Tenez également la promesse la plus concrète que vous vous êtes faite ces dernières semaines, car c’est elle, et non le message que vous rêvez d’envoyer, qui produit l’alignement dont cette heure parle.',
    actions: [
      'Écrivez en une phrase la décision que vous étiez en train de peser quand 12h12 est apparu, puis relisez-la trois jours plus tard : c’est le meilleur test de sa justesse.',
      'Reprenez l’engagement personnel que vous aviez laissé tomber, sommeil, sport, thérapie, création. 12h12 récompense la continuité et rien d’autre.',
      'Ne convertissez pas cette heure en message. Si l’envie d’écrire à votre jumeau devient forte, laissez passer quarante-huit heures avant de décider.',
    ],
    enSeparation:
      'En pleine séparation, 12h12 est l’une des heures les moins anxiogènes du répertoire : elle ne parle ni de retour ni de rupture définitive, elle parle de rythme. Le message traditionnel est que l’écart de maturité entre les deux flammes se réduit. Cela n’implique aucun contact à court terme, et beaucoup de personnes voient 12h12 pendant des mois de silence complet. Ce que l’heure valide, c’est votre travail, pas la disponibilité de l’autre. Le piège classique consiste à la lire comme un compte à rebours et à guetter chaque notification.',
    enRetrouvailles:
      'Quand le contact est rétabli ou que les retrouvailles sont en cours, 12h12 se lit comme une confirmation de la qualité du lien, pas de son intensité. La question qu’elle pose est simple : est-ce que vous choisissez cette relation en conscience, ou est-ce que vous y retombez par soulagement ? Le 6 des Amoureux, obtenu en additionnant les quatre chiffres, est justement le nombre du choix éclairé. À ce stade, la fidélité aux limites posées pendant la séparation compte plus que la passion retrouvée, et 12h12 revient souvent au moment précis où ces limites sont testées.',
    neProuvePas:
      'Voir 12h12 ne prouve pas que votre jumeau pense à vous à cet instant, ni qu’une union est datée. Une heure miroir ne dit rien de ce qui se passe dans la tête d’une autre personne : elle éclaire votre propre position. En faire une preuve de réciprocité conduit à attendre au lieu de vivre, et à interpréter chaque silence comme un retard sur un calendrier qui n’existe pas.',
    numerologie:
      'Les quatre chiffres additionnés, 1 + 2 + 1 + 2, donnent 6 : le nombre de l’harmonie choisie, de la responsabilité affective et de l’engagement pris les yeux ouverts. Le 12 lui-même, lu comme arcane, renvoie au Pendu et à ce temps suspendu qui précède l’union : rien n’est bloqué, tout est en train de se mettre en place à l’envers de ce que l’ego voudrait.',
    arcane: {
      nom: 'Les Amoureux (arcane VI)',
      slug: 'l-amoureux',
      lecture:
        'La réduction à 6 place 12h12 sous l’arcane des Amoureux, qui n’est pas la carte de la passion mais celle du choix : deux chemins, une décision à assumer seul. C’est exactement la question que pose l’alignement, choisir ce lien plutôt que le subir.',
    },
    funnel: {
      lead: 'Si vous voulez savoir ce que cet alignement recouvre concrètement dans votre situation,',
      anchor: 'un tirage de voyance amoureuse gratuit',
      tail: 'donne un point de départ immédiat, sans engagement.',
    },
    faq: [
      {
        q: 'Voir 12h12 signifie-t-il que ma flamme jumelle va revenir ?',
        a: 'Non, 12h12 n’est pas une heure de retour. Dans la tradition des heures miroirs, elle décrit un alignement de rythme entre deux personnes, pas un événement daté. Beaucoup de gens la voient pendant de longues périodes sans le moindre contact, précisément parce qu’elle valide le travail intérieur en cours plutôt que la disponibilité de l’autre. La lire comme une promesse de retour transforme un signe d’apaisement en source d’attente anxieuse, ce qui est l’inverse de son message.',
      },
      {
        q: 'Pourquoi je vois 12h12 tous les jours depuis des semaines ?',
        a: 'La répétition s’explique d’abord par l’attention : dès qu’une heure prend du sens, le cerveau la repère et oublie les centaines de fois où il a regardé l’écran sans rien voir de particulier. Cela n’enlève rien à ce que la répétition révèle de vous : elle signale une préoccupation constante, un lien qui occupe l’arrière-plan de vos journées. Une série de 12h12 sur plusieurs semaines correspond en général à une phase de décision, pas à un compte à rebours.',
      },
      {
        q: 'Quelle différence entre 12h12 et 11h11 pour une flamme jumelle ?',
        a: '11h11 est traditionnellement lue comme l’heure de la reconnaissance, le moment où le lien se révèle et où la synchronicité devient évidente. 12h12 intervient plus tard dans le parcours : elle ne révèle plus rien, elle confirme que ce qui a été reconnu se met en place. En pratique, 11h11 accompagne les débuts et les chocs de rencontre, 12h12 accompagne les périodes de maturation où le travail est déjà engagé et où la question n’est plus de savoir, mais de tenir.',
      },
    ],
  },
  {
    slug: '17h17',
    motCle: 'Persévérance',
    theme: 'Épreuve traversée et persévérance du lien',
    primaryQuery: '17h17 signification flamme jumelle',
    titleSuffix: 'l’épreuve qui renforce le lien',
    description:
      '17h17 en flamme jumelle : le sens de cette heure miroir d’épreuve et de persévérance, ce qu’elle demande de tenir, et comment la lire en séparation.',
    answerCapsule:
      '17h17 est l’heure miroir de l’endurance. Appliquée à la flamme jumelle, elle apparaît presque toujours dans les phases dures : silence prolongé, incompréhension, sentiment d’avoir tout donné pour rien. Son message traditionnel n’est pas consolateur mais mobilisateur : l’épreuve en cours a une fonction, et abandonner maintenant reviendrait à la traverser pour rien. Le nombre 17 est celui de L’Étoile, la carte qui vient juste après l’effondrement de la Maison Dieu et qui rend l’eau au sol brûlé. C’est toute la lecture de cette heure : la lumière ne remplace pas l’épreuve, elle la suit. Additionnés, les quatre chiffres donnent 16 puis 7, le nombre du retrait et du travail solitaire. 17h17 demande donc deux choses ensemble : tenir la foi dans le lien et cesser de chercher la preuve chez l’autre. Beaucoup la voient au moment exact où ils s’apprêtaient à renoncer, ce qui explique la réputation ambivalente de cette heure : elle réconforte et exige dans le même mouvement.',
    signification:
      'Là où d’autres heures miroirs annoncent ou confirment, 17h17 met à l’épreuve. Elle appartient au registre de la persévérance, pas à celui de la récompense, et c’est ce qui la rend difficile à recevoir : elle ne promet aucune date, elle demande de continuer sans preuve. Dans le parcours de flamme jumelle, cette heure correspond typiquement à la phase de course-poursuite, quand l’un fuit l’intensité et que l’autre s’épuise à maintenir le lien à lui seul. La tradition y voit un avertissement doublé d’un encouragement : le lien n’est pas en train de mourir, il est en train d’être testé, et le test porte sur votre capacité à rester debout sans validation extérieure. Le 7 qui ressort de l’addition dit la même chose autrement : ce qui doit être travaillé maintenant l’est en solitaire, dans le retrait, pas dans la confrontation ni dans la négociation avec l’autre flamme.',
    queFaire:
      'Face à 17h17, la question utile n’est pas « quand est-ce que ça s’arrête », mais « qu’est-ce que je refuse de lâcher, et pourquoi ». Faites la distinction entre persévérer et s’acharner : persévérer, c’est continuer à faire votre part quand elle a un sens ; s’acharner, c’est répéter une démarche qui n’a jamais produit de réponse. Cette heure valide la première et sanctionne la seconde. Si vous relancez, insistez ou surveillez depuis des mois sans résultat, 17h17 ne vous demande pas d’insister davantage : il vous demande de reporter cette énergie sur votre propre reconstruction. Fixez-vous une échéance honnête pour l’effort que vous êtes en train de fournir, et tenez-la.',
    actions: [
      'Distinguez par écrit ce que vous faites par fidélité à vous-même et ce que vous faites pour obtenir une réaction. Seule la première colonne mérite d’être poursuivie.',
      'Choisissez une épreuve concrète que vous êtes en train de traverser, deuil, thérapie, dette, isolement, et donnez-lui la priorité pendant un mois entier.',
      'Coupez la surveillance à distance, stories, statuts en ligne, comptes secondaires. 17h17 demande de la constance intérieure, et rien n’use davantage la constance que la vérification permanente.',
    ],
    enSeparation:
      'En séparation, 17h17 est l’heure la plus fréquemment rapportée, et c’est logique : elle appartient à la phase où plus rien ne vient de l’extérieur. Sa lecture traditionnelle est que la séparation n’est pas un verdict, mais une durée à traverser. Elle ne dit pas que l’autre reviendra ; elle dit que la manière dont vous traversez ce vide déterminera ce qui sera possible ensuite. Concrètement, voir 17h17 pendant un silence radio invite à arrêter de compter les jours et à recommencer à construire une vie qui tient debout toute seule.',
    enRetrouvailles:
      'Quand le contact reprend, 17h17 change de fonction : elle signale que la difficulté n’est pas derrière vous mais devant, sous une autre forme. Les retrouvailles ramènent presque toujours les schémas qui avaient provoqué la rupture, et cette heure prévient que la reprise sera exigeante. Le point de vigilance est la tentation d’effacer l’épreuve traversée pour retrouver vite la fusion du début. Ce qui a été appris en solitaire pendant la séparation doit rester actif dans la relation, sinon le même cycle recommence.',
    neProuvePas:
      '17h17 ne prouve pas que votre patience sera récompensée, ni que la personne qui vous manque est votre flamme jumelle. Aucune heure miroir ne valide la nature d’un lien. Utilisée comme argument pour rester dans une relation qui vous abîme, cette heure devient une justification commode de l’attente ; elle parle de traverser une épreuve, jamais d’en accepter une indéfiniment.',
    numerologie:
      'L’addition des quatre chiffres, 1 + 7 + 1 + 7, donne 16, puis 7 après réduction. Le passage par 16, nombre de la Maison Dieu, est parlant : l’effondrement est traversé, il n’est pas contourné. Le 7 final est celui du retrait, de l’étude et de la foi personnelle, un nombre qui travaille seul et qui ne demande rien à personne.',
    arcane: {
      nom: 'L’Étoile (arcane XVII)',
      slug: 'l-etoile',
      lecture:
        'Le 17 renvoie directement à L’Étoile, qui suit la Maison Dieu dans l’ordre du tarot : elle ne supprime pas la chute, elle vient après. C’est l’image exacte de cette heure, l’espérance qui ne dispense pas de l’épreuve mais qui la rend habitable.',
    },
    funnel: {
      lead: 'Quand l’épreuve dure et qu’on ne sait plus si on tient ou si on s’acharne,',
      anchor: 'la voyance amoureuse gratuite en ligne',
      tail: 'permet de poser la question à voix haute avant d’aller plus loin.',
    },
    faq: [
      {
        q: 'Que veut dire voir 17h17 juste au moment où je veux abandonner ?',
        a: 'C’est la situation la plus souvent décrite avec cette heure, et elle correspond à sa lecture traditionnelle : 17h17 apparaît dans les creux, pas dans les phases faciles. Le message n’est pas « ne renonce jamais », il est « ne renonce pas pour la mauvaise raison ». Renoncer par épuisement au bout d’un effort mal dirigé est différent de renoncer après avoir fait sa part. Cette heure invite à trancher lucidement entre les deux plutôt qu’à trancher sous le coup de la fatigue.',
      },
      {
        q: '17h17 annonce-t-il la fin de la séparation avec ma flamme jumelle ?',
        a: 'Non. 17h17 n’a pas de valeur d’annonce : c’est une heure de traversée. Elle décrit l’état de l’épreuve, pas sa date de fin. Les personnes qui la voient sont souvent en plein milieu du parcours, parfois pour de longs mois. Ce qu’elle indique, c’est que la période a une fonction et qu’elle travaille quelque chose en vous ; ce qu’elle ne dit pas, c’est quand ni comment cela se traduira dans les faits, ni même si la relation reprendra.',
      },
      {
        q: 'Faut-il faire quelque chose de précis quand on voit 17h17 ?',
        a: 'Oui, mais pas en direction de l’autre. La réponse cohérente avec cette heure consiste à reporter l’énergie dépensée à guetter, relancer ou analyser vers un chantier personnel identifiable : une santé, un travail, une réparation ancienne. Le 7 qui ressort de son addition est un nombre solitaire. Toute action tournée vers l’autre à ce moment-là, message, cadeau, mise au point, tend à prolonger l’épreuve au lieu de la traverser.',
      },
    ],
  },
  {
    slug: '20h20',
    motCle: 'Message',
    theme: 'Message et nouvelle du jumeau',
    primaryQuery: '20h20 signification flamme jumelle',
    titleSuffix: 'la nouvelle qui arrive',
    description:
      '20h20 et flamme jumelle : pourquoi cette heure miroir est celle du message et de l’appel, ce qu’elle annonce vraiment et comment y répondre sans se tromper.',
    answerCapsule:
      '20h20 est l’heure miroir du message. Dans le contexte de la flamme jumelle, elle est traditionnellement associée à une nouvelle qui arrive, à un appel entendu ou à une communication qui se débloque après une période de silence. Le 20 est le nombre du Jugement, l’arcane où une trompette sonne et où des figures sortent de terre : quelque chose qui semblait enterré se remet à parler. C’est la promesse et le piège de cette heure, car le message annoncé n’est pas toujours celui qu’on espère, et il ne vient pas toujours de la personne attendue. Additionnés, les quatre chiffres donnent 4, le nombre du cadre et de la structure : la nouvelle demandera une réponse construite, pas une réaction impulsive. Beaucoup voient 20h20 dans les jours qui précèdent une reprise de contact, mais aussi avant une mise au point qu’ils redoutaient d’avoir. La bonne question à se poser devient alors : qu’est-ce que je n’ai jamais dit clairement ?',
    signification:
      'Le double zéro de 20h20 est décisif : contrairement à 12h12 ou 21h21, les chiffres qui portent le sens ne sont pas répétés à l’identique, ils sont amplifiés par le vide. Dans la tradition des heures miroirs, le zéro ouvre un canal, il ne remplit rien. C’est pourquoi 20h20 est lue comme une heure de transmission plutôt que d’état : quelque chose circule entre les deux flammes, dans un sens ou dans l’autre. Cela peut prendre une forme littérale, un message reçu, un appel, une nouvelle par un tiers, mais aussi une forme plus discrète, un rêve marquant, une information qui vous parvient par hasard, une phrase entendue qui répond exactement à ce que vous n’aviez dit à personne. Le parcours de flamme jumelle appelle cette phase la reprise du dialogue, et elle intervient rarement quand on la provoque : elle arrive quand le besoin de convaincre est retombé.',
    queFaire:
      'La règle avec 20h20 est de rester joignable sans être demandeur. Si un message arrive dans cette période, ne répondez ni dans la minute ni dans la semaine : la première réaction est émotionnelle, la seconde est un jeu de pouvoir. Prenez le temps de formuler ce que vous voulez vraiment dire, une fois, clairement. Le 4 issu de l’addition est le nombre de la structure : cette heure demande une réponse posée, avec des faits et des limites, pas un flot de ressenti. Si aucun message ne vient, l’autre versant de la lecture s’applique : c’est peut-être à vous de transmettre quelque chose, et le contenu à transmettre est en général une clarification, pas une demande.',
    actions: [
      'Préparez à l’avance, par écrit, les trois phrases que vous voudriez pouvoir dire si le contact reprenait demain. La plupart des reprises ratent faute de savoir quoi dire.',
      'Vérifiez ce que vous avez laissé fermé : messages non lus, demande ignorée, numéro bloqué. 20h20 est une heure de canal ouvert, et un canal fermé rend la lecture caduque.',
      'Notez pendant une semaine tout ce qui ressemble à un message indirect, rêve marquant, information par un tiers, coïncidence de contenu. C’est souvent là que la nouvelle arrive.',
    ],
    enSeparation:
      'En séparation, 20h20 est l’heure qui alimente le plus de faux espoirs, parce qu’elle est lue immédiatement comme « il ou elle va écrire ». La lecture traditionnelle est plus large : une information va circuler, sans préciser sa source ni son contenu. Elle peut vous parvenir par une amie commune, par un réseau social, par un souvenir qui remonte. Ce que 20h20 recommande pendant un silence radio, c’est de ne pas rompre le silence pour vérifier : provoquer le message annule ce que l’heure décrit, à savoir un mouvement qui vient de lui-même.',
    enRetrouvailles:
      'Quand le lien est actif, 20h20 se lit comme une heure de mise au point : un sujet évité doit être nommé. Le Jugement demande que ce qui était enterré revienne au jour, et dans une relation reprise, ce sont en général les mêmes non-dits qui reviennent. C’est le bon moment pour parler des faits plutôt que des sentiments, en particulier de ce que chacun attend concrètement. Les couples de flammes jumelles rejouent le même conflit tant que la conversation structurante n’a pas eu lieu, et cette heure signale qu’elle est mûre.',
    neProuvePas:
      '20h20 ne prouve pas qu’un message va arriver, ni que votre jumeau est en train de penser à vous. Ce type de lecture crée une attente qui rend chaque notification douloureuse. L’heure ne dit rien de l’intention d’une autre personne : elle signale votre propre disponibilité à recevoir et à formuler quelque chose que vous gardez peut-être depuis longtemps.',
    numerologie:
      'L’addition, 2 + 0 + 2 + 0, donne 4 : le nombre du cadre, de la structure et de la parole tenue. C’est un contrepoids utile à l’émotion que déclenche cette heure. Le 20 lui-même est un nombre de bascule, celui qui précède immédiatement l’achèvement du 21 : ce qui se dit maintenant décide de ce qui pourra se conclure ensuite.',
    arcane: {
      nom: 'Le Jugement (arcane XX)',
      slug: 'le-jugement',
      lecture:
        'Le 20 est le Jugement, la carte de l’appel entendu et de ce qui sort de terre. Dans un tirage de flamme jumelle, elle annonce moins un retour qu’une remontée : un sujet, une vérité ou une personne que l’on croyait rangée revient réclamer sa place.',
    },
    funnel: {
      lead: 'Pour distinguer une vraie reprise de contact d’une simple envie de nouvelles,',
      anchor: 'un tirage gratuit en voyance amoureuse',
      tail: 'aide à poser les termes avant de répondre.',
    },
    faq: [
      {
        q: 'Voir 20h20 veut-il dire que ma flamme jumelle va me contacter ?',
        a: 'C’est l’interprétation la plus répandue, mais elle est trop étroite. 20h20 est traditionnellement l’heure de la transmission : une information va circuler, sans que sa source soit déterminée. Elle peut venir d’un tiers, d’un rêve, d’un souvenir ou d’un contenu croisé au hasard. Attendre un message précis d’une personne précise transforme un signe ouvert en test permanent, et rend chaque journée sans notification décevante alors que rien n’a été promis.',
      },
      {
        q: 'Dois-je écrire à ma flamme jumelle quand je vois 20h20 ?',
        a: 'Pas mécaniquement. Si vous n’aviez rien à dire cinq minutes avant de voir l’heure, l’heure ne crée pas le contenu. En revanche, si vous portez depuis longtemps une chose précise à formuler, une clarification, une limite, un remerciement, cette période s’y prête mieux qu’une autre. La distinction est simple : écrire pour transmettre quelque chose d’achevé est cohérent avec 20h20, écrire pour obtenir une réaction ne l’est pas et se retourne presque toujours contre vous.',
      },
      {
        q: 'Pourquoi 20h20 revient-il toujours pendant les disputes ?',
        a: 'Parce que l’arcane XX associé à cette heure, le Jugement, porte exactement sur ce qui remonte à la surface. Les périodes de conflit sont celles où les non-dits reviennent au jour, et où l’attention est la plus aiguisée. La lecture utile n’est pas de chercher qui a raison mais de repérer le sujet de fond qui revient à chaque dispute sous des prétextes différents. C’est en général ce sujet-là que l’heure désigne, pas l’incident du moment.',
      },
    ],
  },
  {
    slug: '10h10',
    motCle: 'Ouverture',
    theme: 'Nouveau cycle et porte qui s’ouvre',
    primaryQuery: '10h10 signification flamme jumelle',
    titleSuffix: 'le cycle qui recommence',
    description:
      '10h10 et flamme jumelle : l’heure miroir du nouveau cycle et de la rencontre. Ce qu’elle ouvre vraiment, à quoi la reconnaître et quoi en faire.',
    answerCapsule:
      '10h10 est l’heure des commencements : une porte s’ouvre et le cycle précédent cesse de vous retenir. Appliquée à la flamme jumelle, elle parle rarement du passé du lien ; elle annonce un contexte neuf dans lequel la connexion pourra se rejouer autrement. Le 10 est le nombre de La Roue de Fortune, la carte qui remet du mouvement là où tout semblait figé, et l’addition des quatre chiffres donne 2, le nombre du duo. Le message combiné est net : ce qui recommence recommence à deux. Beaucoup de personnes voient 10h10 juste avant une reprise de contact, un déménagement, un changement de travail ou une rencontre qui déplace leurs repères. Cette heure n’indique pas une date, elle indique une disponibilité : vous redevenez atteignable. Le risque, à ce stade, consiste à forcer l’ouverture au lieu de la laisser se produire, et à confondre nouveauté et précipitation. Une porte ouverte ne dit rien de qui la franchira.',
    signification:
      '10h10 est une heure de contexte plus que de sentiment, et c’est ce qui la distingue nettement des autres heures de ce cluster. Elle ne décrit pas l’état du lien, elle décrit le terrain sur lequel le lien va se jouer. La Roue de Fortune, arcane X, ne dit pas si le tour sera bon ou mauvais : elle dit que la position change et que l’immobilité est terminée. Pour une flamme jumelle, cela signifie qu’un élément extérieur, souvent sans rapport apparent avec la relation, va rebattre les cartes : un poste, une ville, un cercle d’amis, un état de santé. Le 2 issu de l’addition ajoute la dimension du duo, mais un duo au sens large : une rencontre, une alliance, une collaboration. C’est aussi pour cela que 10h10 est l’heure la plus souvent citée par les personnes célibataires qui attendent la rencontre plutôt que par celles qui vivent une séparation.',
    queFaire:
      'À 10h10, l’action juste est l’ouverture concrète, pas l’attente. Cette heure récompense les gestes qui augmentent votre surface de contact avec le monde : accepter l’invitation, reprendre l’activité abandonnée, dire oui à ce qui vous sort du circuit habituel. Elle est mal servie par le repli, même quand le repli semble sage. Regardez également ce que vous n’avez pas terminé, car une roue ne tourne pas tant qu’un cycle reste ouvert : un objet à rendre, un message à clore, un dossier en suspens. Enfin, méfiez-vous de la lecture littérale du 2 : cette heure ne promet aucune personne en particulier, elle décrit un terrain devenu favorable aux rencontres, y compris amicales et professionnelles.',
    actions: [
      'Acceptez dans les dix jours une invitation ou une proposition que vous auriez déclinée par habitude. 10h10 se lit dans les faits, pas dans l’intention.',
      'Fermez un dossier resté en suspens depuis des mois. La Roue ne tourne pas tant que le cycle précédent n’est pas soldé.',
      'Notez les rencontres et les propositions des trois semaines qui suivent, même celles qui n’ont rien de romantique : c’est souvent par là que le changement arrive.',
    ],
    enSeparation:
      'En séparation, 10h10 n’annonce pas un retour mais un changement de décor. C’est une heure qui déplace le problème plutôt qu’elle ne le résout : une opportunité professionnelle, un déménagement, un nouveau cercle. Sa lecture traditionnelle invite à saisir ce mouvement au lieu de le refuser au nom de l’attente. Les personnes qui restent immobiles pour ne pas rater un éventuel retour vident cette heure de son sens. Le cycle qui s’ouvre est le vôtre, et il s’ouvre que l’autre y participe ou non.',
    enRetrouvailles:
      'Quand les retrouvailles sont amorcées, 10h10 signale que la relation ne reprendra pas là où elle s’était arrêtée. Le contexte a changé pour les deux, et vouloir restaurer l’ancienne version du lien est la principale cause d’échec des reprises. Cette heure recommande de traiter la relation comme neuve : nouvelles habitudes, nouveau rythme, accords explicites. Le 2 qu’elle porte est celui d’un duo à construire, pas d’un duo à retrouver, et la nuance décide souvent de la suite.',
    neProuvePas:
      '10h10 ne prouve pas qu’une rencontre est programmée, ni que la personne que vous croiserez bientôt sera votre flamme jumelle. Elle décrit une phase d’ouverture, jamais une identité. Attribuer ce statut à la première personne intense croisée après avoir vu cette heure est l’erreur la plus fréquente, et elle coûte souvent plusieurs mois.',
    numerologie:
      'L’addition, 1 + 0 + 1 + 0, donne 2 : le nombre du duo, du miroir et de la relation. Le zéro y joue un rôle propre, il n’ajoute rien et il ouvre tout, c’est le potentiel non encore formé. Le 1 répété marque quant à lui l’initiative : cette heure demande un premier geste, pas une attente patiente.',
    arcane: {
      nom: 'La Roue de Fortune (arcane X)',
      slug: 'la-roue-de-fortune',
      lecture:
        'Le 10 est celui de La Roue de Fortune, qui ne promet ni bonheur ni malheur mais la fin de l’immobilité. Dans un tirage de flamme jumelle, elle indique que la situation va bouger par l’extérieur, souvent par un canal auquel personne ne pensait.',
    },
    funnel: {
      lead: 'Pour situer ce nouveau cycle dans votre propre histoire amoureuse,',
      anchor: 'la voyance gratuite en amour',
      tail: 'offre un premier éclairage en quelques minutes.',
    },
    faq: [
      {
        q: '10h10 annonce-t-il la rencontre de ma flamme jumelle ?',
        a: 'Cette heure annonce une ouverture de cycle, pas une personne. Elle est effectivement très citée par les célibataires, parce qu’elle correspond aux périodes où le contexte de vie change et où les occasions de rencontre se multiplient. Mais rien dans sa lecture traditionnelle ne désigne quelqu’un en particulier, et surtout pas une flamme jumelle, qui ne se reconnaît pas à une heure sur un écran. Prenez-la comme un feu vert pour sortir, pas comme une prédiction.',
      },
      {
        q: 'Que faire si je vois 10h10 alors que je suis en pleine séparation ?',
        a: 'La lecture reste celle du mouvement extérieur : quelque chose va changer dans votre vie, pas nécessairement dans la relation. La réponse cohérente consiste à accompagner ce changement plutôt qu’à le refuser pour rester disponible. Beaucoup de personnes en séparation mettent leur vie en pause dans l’espoir d’un retour, et 10h10 est précisément l’heure qui déconseille cette immobilité. Le cycle qui s’ouvre vous concerne, que l’autre y prenne part ou non.',
      },
      {
        q: 'Pourquoi 10h10 revient-il avant les grands changements ?',
        a: 'Parce que c’est une heure de seuil, associée à l’arcane X du tarot, La Roue de Fortune. Elle est rapportée le plus souvent dans les périodes où une décision est déjà en germe sans être encore formulée : une candidature envoyée, un déménagement envisagé, une inscription reportée. Voir cette heure revient alors à mettre un mot sur une bascule que l’on sentait venir. Ce n’est pas elle qui provoque le changement, c’est le changement qui la rend visible.',
      },
    ],
  },
  {
    slug: '23h23',
    motCle: 'Lâcher-prise',
    theme: 'Fin de cycle et lâcher-prise',
    primaryQuery: '23h23 signification flamme jumelle',
    titleSuffix: 'le cycle qui se termine',
    description:
      '23h23 en flamme jumelle : l’heure miroir de la fin de cycle et du lâcher-prise. Ce qu’elle demande d’abandonner et pourquoi elle apparaît la nuit.',
    answerCapsule:
      '23h23 est la dernière heure miroir de la journée, et sa lecture épouse cette position : elle parle de ce qui se termine. Dans un parcours de flamme jumelle, elle apparaît quand une phase a fait son temps, le plus souvent la phase de lutte, celle où l’on tente encore de retenir, de convaincre ou de comprendre. Son message traditionnel est le lâcher-prise, au sens précis du terme : cesser de tenir, sans cesser d’aimer. Additionnés, ses quatre chiffres donnent 10 puis 1, le nombre du recommencement, ce qui dit bien l’enjeu, une fin qui n’est une fin que pour l’étape précédente. Comme il n’existe pas de vingt-troisième arcane, la carte qui lui correspond est Le Mat, l’arcane sans nombre qui clôt et rouvre le jeu. Voir 23h23 le soir, au moment où le mental se relâche et où la rumination monte, n’a rien d’un hasard : c’est l’heure où l’on tient encore, faute de savoir comment poser.',
    signification:
      'Le 23 est le seul nombre de ce cluster qui dépasse le jeu de tarot : les arcanes majeurs s’arrêtent à 21, et le vingt-deuxième, Le Mat, ne porte pas de numéro. Cette heure sort donc du cadre, exactement comme la phase qu’elle décrit sort du récit habituel de la flamme jumelle. Après des mois passés à chercher des signes, des étapes et des explications, 23h23 propose l’inverse : arrêter de construire une histoire autour du lien. Dans la tradition des heures miroirs, elle est aussi une heure de bascule, placée juste avant minuit, entre deux jours dont aucun n’est encore le bon. Pour une flamme jumelle, cela correspond à ce moment très reconnaissable où l’on n’espère plus vraiment et où l’on ne souffre plus tout à fait, un entre-deux inconfortable que la plupart des gens cherchent à fuir en relançant le contact.',
    queFaire:
      'Le lâcher-prise dont parle 23h23 n’est pas une décision émotionnelle, c’est une série de gestes concrets. Cessez d’abord les activités de surveillance, puis les rituels d’attente : la playlist, le lieu, la date anniversaire, la conversation gardée ouverte. Terminez ensuite ce qui n’a jamais été terminé, non pas avec l’autre, mais pour vous : la lettre écrite et non envoyée, les affaires rendues, le récit que vous racontez à vos proches depuis un an. Cette heure demande aussi de traiter le sommeil, parce qu’elle apparaît la nuit et parce que la rumination nocturne est le principal carburant de la phase qu’elle veut clore. Ce qui se termine ici est un fonctionnement, pas nécessairement une relation.',
    actions: [
      'Écrivez la lettre que vous n’enverrez pas, datez-la, rangez-la. C’est le geste de clôture le plus efficace de cette phase, et il ne demande rien à l’autre.',
      'Supprimez un rituel d’attente précis : la vérification du soir, le trajet qui passe devant chez elle ou lui, la conversation laissée ouverte en haut de la liste.',
      'Reprenez la main sur vos nuits, coucher régulier, écran éloigné, carnet à côté du lit. 23h23 se voit surtout quand on veille en ruminant.',
    ],
    enSeparation:
      'En séparation, 23h23 est souvent mal reçue, parce qu’elle est comprise comme un ordre de renoncer. La lecture traditionnelle est plus fine : ce qui doit s’arrêter, c’est la lutte, pas le lien. On peut cesser de tirer sur une corde sans la lâcher. Concrètement, cette heure marque la fin de la période où chaque journée était organisée autour d’un retour possible. Beaucoup de personnes constatent après coup que c’est à partir de là que la douleur a commencé à baisser, précisément parce qu’elles avaient cessé d’attendre au quotidien.',
    enRetrouvailles:
      'Si le contact est repris, 23h23 pointe ce qu’il faut laisser mourir de l’ancienne version de la relation : les comptes à régler, les reproches en réserve, la chronologie des torts. Une reprise ne survit pas si elle transporte l’intégralité du passif. Cette heure demande de choisir explicitement ce qui n’est plus rejoué, et de le dire. Le Mat qu’elle porte est l’arcane du départ léger, celui qui n’emporte qu’un baluchon : la question devient donc très concrète, que gardez-vous, et que posez-vous ?',
    neProuvePas:
      '23h23 ne prouve pas que la relation est terminée, ni que votre jumeau vous a oublié. Elle ne délivre aucun verdict sur l’avenir du lien. Lue comme une condamnation, elle provoque des ruptures définitives décidées à minuit sur la foi d’une heure sur un écran, ce qui est exactement l’inverse du lâcher-prise dont elle parle.',
    numerologie:
      'L’addition, 2 + 3 + 2 + 3, donne 10, qui se réduit à 1 : le nombre du commencement. Une fin qui débouche sur un 1 n’est pas une fermeture, c’est un seuil. Le 2 et le 3 qui composent l’heure ajoutent la dualité et le mouvement, le couple et ce qui le dépasse, une tension caractéristique de cette phase de bascule.',
    arcane: {
      nom: 'Le Mat (arcane sans nombre)',
      slug: 'le-mat',
      lecture:
        'Il n’existe pas d’arcane XXIII : au-delà des vingt et un arcanes numérotés, il ne reste que Le Mat, la carte sans nombre. C’est la figure du lâcher-prise même, celui qui part sans savoir où, avec le strict nécessaire, et qui rouvre le jeu par sa seule liberté.',
    },
    funnel: {
      lead: 'Si vous hésitez entre clore une phase et clore la relation elle-même,',
      anchor: 'une consultation de voyance amoureuse gratuite',
      tail: 'aide à nommer ce qui se termine réellement.',
    },
    faq: [
      {
        q: 'Voir 23h23 signifie-t-il que ma relation de flamme jumelle est finie ?',
        a: 'Non, et c’est la confusion la plus dommageable autour de cette heure. 23h23 marque la fin d’une phase, en général celle de la lutte et de l’attente active, pas la fin d’un lien. Dans la tradition des heures miroirs, une fin de cycle prépare le suivant, ce que confirme la réduction de ses chiffres au nombre 1. Prendre cette heure pour un verdict conduit à des décisions définitives prises la nuit, dans un état émotionnel qui n’est jamais celui d’une décision lucide.',
      },
      {
        q: 'Comment lâcher prise concrètement quand on voit souvent 23h23 ?',
        a: 'Le lâcher-prise n’est pas un état à atteindre par la volonté, c’est une somme de gestes retirés un par un. Commencez par supprimer un seul rituel d’attente identifiable, la vérification du soir par exemple, et tenez-le une semaine. Ajoutez ensuite une clôture symbolique, une lettre non envoyée, des affaires rendues. Traitez enfin le sommeil, car cette heure apparaît la nuit et la rumination nocturne alimente précisément la phase qu’elle demande de terminer.',
      },
      {
        q: 'Pourquoi je vois 23h23 et pas les autres heures miroirs ?',
        a: 'Parce que c’est la dernière de la journée et qu’elle correspond au moment où la vigilance baisse. Les personnes qui traversent une phase difficile veillent davantage, ruminent le soir et regardent l’heure plus souvent entre 23h et minuit. Cela n’invalide pas la lecture symbolique, cela la contextualise : voir surtout 23h23 en dit long sur vos nuits, et le message de cette heure porte justement sur ce qu’il faut arrêter pour les retrouver.',
      },
    ],
  },
  {
    slug: '21h21',
    motCle: 'Introspection',
    theme: 'Introspection et retrouvailles',
    primaryQuery: '21h21 signification flamme jumelle',
    titleSuffix: 'ce qui se referme et ce qui revient',
    description:
      '21h21 et flamme jumelle : l’heure miroir de l’introspection et des retrouvailles. Sens traditionnel, lien avec 12h12 et ce qu’elle demande de regarder.',
    answerCapsule:
      '21h21 est une heure de boucle. Elle est traditionnellement lue comme celle de l’introspection et des retrouvailles, deux idées qui n’en font qu’une dans le parcours de flamme jumelle : ce que l’on retrouve chez l’autre, on a d’abord dû le retrouver en soi. Sa particularité tient à sa forme, 21 est l’inverse exact de 12, et l’addition de ses quatre chiffres donne 6, le même total que 12h12. Les deux heures se répondent donc comme un lien et son reflet : là où 12h12 aligne, 21h21 retourne. Le 21 est aussi le nombre du Monde, dernier arcane numéroté du tarot, celui de l’achèvement et du cercle refermé. Voir cette heure signale en général qu’une compréhension est en train de se faire, souvent sur votre propre part de responsabilité, et que le lien peut se rejouer sur une base différente. C’est une heure de bilan, pas de démarche : elle demande de regarder avant de reprendre.',
    signification:
      'Ce qui rend 21h21 particulière dans ce cluster, c’est qu’elle est la seule à porter les deux mouvements à la fois, le repli et le retour. L’introspection n’y est pas une pause avant l’action : elle est la condition du retour. Le Monde, arcane XXI, montre une figure entourée d’une couronne fermée ; rien n’y entre et rien n’en sort tant que le tour n’est pas complet. Pour une flamme jumelle, cela décrit très exactement le moment où l’on cesse de reprocher à l’autre ce qu’on n’a pas encore regardé chez soi. Le rapport à 12h12 est la clé de lecture la plus utile : les deux heures partagent le même total, 6, mais 12h12 le construit par répétition, quand 21h21 l’obtient par inversion. La première dit que vous avancez au même rythme, la seconde que vous avez changé de point de vue.',
    queFaire:
      'La réponse juste à 21h21 est un travail de regard, pas d’action. Reprenez l’histoire du lien en vous limitant à votre propre part : ce que vous avez évité de dire, les limites que vous n’avez pas tenues, les fois où vous avez confondu intensité et sécurité. Cet inventaire n’a pas vocation à devenir une confession envoyée à l’autre ; il sert à identifier ce qui, dans votre fonctionnement, produirait le même résultat avec n’importe qui. Si des retrouvailles se profilent, cette heure demande de ne pas les précipiter avant que cet inventaire soit fait, car une reprise engagée sans lui rejoue mécaniquement le scénario précédent, souvent en accéléré.',
    actions: [
      'Reprenez la chronologie du lien en n’écrivant que vos propres décisions, sans mentionner l’autre une seule fois. L’exercice est inconfortable et très révélateur.',
      'Identifiez le schéma qui se répète dans vos relations passées, et pas seulement dans celle-ci. C’est lui que cette heure désigne.',
      'Reportez toute reprise de contact décidée dans l’élan. 21h21 travaille par retournement, et un retournement demande quelques jours pour se stabiliser.',
    ],
    enSeparation:
      'En séparation, 21h21 marque la fin de la phase où l’autre est le sujet unique. Elle apparaît le plus souvent quand la douleur commence à laisser place à la réflexion et que l’on se met, enfin, à se demander ce qui s’est joué de son côté. Sa lecture traditionnelle n’est pas un appel au contact : elle demande de terminer le tour intérieur avant de rouvrir la porte. Le Monde qu’elle porte est un cercle fermé, et une boucle interrompue à mi-parcours se rejoue toujours à l’identique.',
    enRetrouvailles:
      'Quand les retrouvailles sont en cours, 21h21 est l’une des heures les plus favorables du répertoire, à une condition : que la compréhension ait précédé la reprise. Elle indique que le lien peut se rejouer sur une base nouvelle parce que chacun s’est vu lui-même. Le point de vigilance tient à l’inversion qui la caractérise : les rôles s’échangent souvent au retour, celui qui fuyait devient demandeur et inversement. Reconnaître ce basculement évite de reprendre la course-poursuite dans l’autre sens.',
    neProuvePas:
      '21h21 ne prouve pas que des retrouvailles sont programmées, ni que votre jumeau a fait le même chemin intérieur que vous. Une prise de conscience ne se transmet pas par synchronicité. Considérer que l’autre a forcément compris en même temps que vous est la source de beaucoup de reprises ratées et de déceptions évitables.',
    numerologie:
      'L’addition, 2 + 1 + 2 + 1, donne 6, exactement comme 12h12, mais par un chemin inverse : le 21 est le retournement du 12. Le 6 reste celui du choix et de la responsabilité affective, ici obtenu après un tour complet plutôt que par répétition. C’est la différence entre avancer au même rythme et voir enfin la situation de l’autre bout.',
    arcane: {
      nom: 'Le Monde (arcane XXI)',
      slug: 'le-monde',
      lecture:
        'Le 21 est celui du Monde, dernier arcane numéroté : l’achèvement, la boucle refermée, le tour complet. Dans un tirage de flamme jumelle, il ne signale pas la fin du lien mais la fin d’un tour de compréhension, ce qui autorise enfin autre chose que la répétition.',
    },
    funnel: {
      lead: 'Pour vérifier si le tour intérieur est vraiment terminé de votre côté,',
      anchor: 'un tirage de voyance amoureuse offert',
      tail: 'donne un retour extérieur avant toute reprise de contact.',
    },
    faq: [
      {
        q: 'Quelle est la différence entre 21h21 et 12h12 en flamme jumelle ?',
        a: 'Les deux heures partagent le même total numérologique, 6, mais elles l’obtiennent différemment. 12h12 répète le même nombre : elle décrit deux personnes qui avancent enfin au même rythme. 21h21 inverse ce nombre : elle décrit un changement de point de vue, le moment où l’on voit la situation depuis l’autre bout. En pratique, 12h12 accompagne les phases d’alignement et de constance, 21h21 les phases de compréhension et de retournement, souvent juste avant une reprise.',
      },
      {
        q: '21h21 annonce-t-il des retrouvailles avec ma flamme jumelle ?',
        a: 'Elle est associée aux retrouvailles, mais à titre de condition et non de promesse. Ce que cette heure décrit, c’est la fin d’un tour de compréhension personnelle, qui rend une reprise viable. Rien n’indique que l’autre ait accompli le même trajet au même moment, et c’est précisément l’erreur la plus courante. Une reprise engagée sur la seule foi de cette heure, sans que le travail intérieur soit terminé, rejoue en général le scénario précédent en plus rapide.',
      },
      {
        q: 'Pourquoi 21h21 me pousse-t-il à repenser à toute la relation ?',
        a: 'Parce que c’est une heure d’introspection, associée à l’arcane XXI du tarot, Le Monde, qui referme un cycle complet. Le retour mental sur l’ensemble de l’histoire est le mouvement propre à cette phase, et il n’a rien de morbide tant qu’il porte sur vos propres décisions plutôt que sur les torts de l’autre. La bascule utile consiste à passer de « pourquoi a-t-il fait cela » à « qu’est-ce que j’ai laissé s’installer », qui est la seule question sur laquelle vous avez prise.',
      },
    ],
  },
];
