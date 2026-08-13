// Tarot love-meaning card records, data layer for /tarot-amour/[carte]/.
//
// Distinct from lib/tarotDeck.ts (the short-meaning deck powering the draw
// tools). These are full EAV records for standalone pages: general love
// meaning, upright/reversed, per-situation reads (single/couple/ex), oui-non,
// and FAQ, built to the semantic-SEO standard (answer capsule + entity
// density + question structure) from the start.
//
// Publication gate: a card page is generated ONLY if its record passes
// validateCardRecord. Slug is a clean ASCII kebab of the card name.

export interface CardFaq {
  q: string;
  a: string;
}

export interface TarotLoveCard {
  slug: string;
  name: string;
  emoji: string;
  arcane: string;
  /** 'Oui' | 'Non' | 'Nuancé', the oui/non love verdict */
  ouiNon: string;
  answerCapsule: string;
  signification: string;
  endroit: string;
  renverse: string;
  celibataire: string;
  couple: string;
  ex: string;
  faq: CardFaq[];
}

export function findCard(slug: string): TarotLoveCard | undefined {
  return TAROT_LOVE_CARDS.find((c) => c.slug === slug);
}

/** Quality gate, a record below these thresholds must not produce a page. */
export function validateCardRecord(c: TarotLoveCard): string[] {
  const issues: string[] = [];
  if (c.answerCapsule.length < 400) issues.push(`${c.slug}: answerCapsule too short`);
  if (c.signification.length < 300) issues.push(`${c.slug}: signification too short`);
  if (c.endroit.length < 180) issues.push(`${c.slug}: endroit too short`);
  if (c.renverse.length < 180) issues.push(`${c.slug}: renverse too short`);
  if (c.celibataire.length < 120) issues.push(`${c.slug}: celibataire too short`);
  if (c.couple.length < 120) issues.push(`${c.slug}: couple too short`);
  if (c.ex.length < 120) issues.push(`${c.slug}: ex too short`);
  if (c.faq.length < 3) issues.push(`${c.slug}: fewer than 3 FAQ`);
  c.faq.forEach((f, i) => {
    if (f.a.length < 150) issues.push(`${c.slug}: faq[${i}] answer too short`);
  });
  if (!['Oui', 'Non', 'Nuancé'].includes(c.ouiNon)) issues.push(`${c.slug}: bad ouiNon`);
  return issues;
}

export const TAROT_LOVE_CARDS: TarotLoveCard[] = [
  {
    slug: 'l-amoureux',
    name: 'L’Amoureux',
    emoji: '💕',
    arcane: 'Arcane majeur VI',
    ouiNon: 'Oui',
    answerCapsule:
      'L’Amoureux est la carte reine du tarot amour. Sixième arcane majeur du Tarot de Marseille, il représente le choix du cœur, l’union sincère et l’attraction réciproque. Tiré en amour, L’Amoureux est un oui franc : il annonce une rencontre déterminante, une relation fondée sur des sentiments authentiques ou une décision amoureuse importante à assumer. À l’endroit, il confirme une connexion profonde et un engagement qui vient du cœur, pas de la raison. Renversé, il signale une indécision, une hésitation entre deux personnes ou un choix fait pour de mauvaises raisons. Pour un célibataire, il promet une rencontre marquante ; pour un couple, un approfondissement du lien. L’Amoureux invite à écouter son cœur plutôt que ses peurs. Pour une lecture personnalisée de cette carte dans votre situation, une consultation de voyance amoureuse éclaire le choix qui vous attend.',
    signification:
      'En amour, L’Amoureux symbolise avant tout le choix conscient et le libre arbitre du cœur. Cette carte ne parle pas d’une passion subie mais d’une décision assumée : celle de s’engager, d’aimer, de choisir une personne parmi d’autres. Le sixième arcane majeur représente aussi l’attraction magnétique, la complémentarité et la sincérité des sentiments. Quand L’Amoureux apparaît dans un tirage sentimental, il place le consultant face à une croisée des chemins amoureuse : un choix à faire, un engagement à prendre, une union à sceller. C’est l’une des cartes les plus positives du tarot en amour, mais elle rappelle qu’aimer est un acte de volonté autant qu’un élan.',
    endroit:
      'À l’endroit, L’Amoureux est un signe très favorable en amour. Il confirme une relation sincère, réciproque et alignée avec vos vraies valeurs. Cette position annonce une rencontre importante, une déclaration, des fiançailles ou un engagement mûri. Le choix du cœur est juste et vous rapproche de votre épanouissement sentimental. La carte encourage à avancer avec confiance : les sentiments sont authentiques et l’avenir prometteur.',
    renverse:
      'Renversé, L’Amoureux révèle l’indécision et le doute. Vous hésitez entre deux personnes, ou vous fuyez un choix amoureux par peur de vous tromper. Cette position peut aussi signaler un engagement pris pour de mauvaises raisons, la sécurité, la pression, la peur de la solitude, plutôt que par amour véritable. La carte inversée invite à clarifier vos sentiments avant de décider, car un choix fait dans la confusion mène rarement au bonheur durable.',
    celibataire:
      'Pour un célibataire, L’Amoureux est l’une des cartes les plus attendues : elle annonce une rencontre significative, souvent avec une personne qui vous fera vibrer profondément. Ce n’est pas une simple attirance mais un lien à fort potentiel. La carte vous invite à rester ouvert et à oser choisir quand cette rencontre se présentera, sans vous laisser paralyser par la peur de l’engagement.',
    couple:
      'Pour un couple, L’Amoureux confirme la solidité et la sincérité du lien. Il peut annoncer une étape importante : emménagement, fiançailles, mariage ou renouvellement de l’engagement. La carte invite les deux partenaires à choisir consciemment de continuer ensemble, à raviver le désir et à approfondir la complicité. C’est un excellent présage pour une relation qui avance dans la confiance.',
    ex: 'Concernant un ex, L’Amoureux suggère qu’un vrai choix du cœur reste possible, mais un choix, pas une rechute par habitude. Si la carte est à l’endroit, elle indique que des sentiments sincères persistent des deux côtés et qu’une reconquête fondée sur l’authenticité a ses chances. Renversée, elle avertit contre un retour motivé par la peur du vide plutôt que par un amour réel.',
    faq: [
      {
        q: 'Que signifie L’Amoureux en amour ?',
        a: 'L’Amoureux signifie en amour le choix du cœur, l’union sincère et l’attraction réciproque. Sixième arcane majeur du Tarot de Marseille, il annonce une rencontre déterminante ou une décision amoureuse importante à assumer. C’est l’une des cartes les plus positives du tarot en amour : elle confirme des sentiments authentiques et un engagement qui vient du cœur. Elle rappelle toutefois qu’aimer est aussi un acte de volonté, une décision consciente et non une passion subie.',
      },
      {
        q: 'L’Amoureux annonce-t-il une rencontre amoureuse ?',
        a: 'Oui, pour un célibataire, L’Amoureux est un présage très favorable de rencontre. Il n’annonce pas une simple attirance passagère mais une connexion à fort potentiel, souvent avec une personne qui touche profondément le cœur. La carte invite à rester ouvert et à oser s’engager quand cette rencontre se présente, plutôt que de fuir par peur du choix. C’est l’un des meilleurs signes du tarot amour pour une nouvelle histoire.',
      },
      {
        q: 'L’Amoureux est-il un oui ou un non en amour ?',
        a: 'L’Amoureux est un oui franc en amour. À l’endroit, il confirme une relation sincère, un choix juste et un avenir sentimental prometteur. Il répond positivement aux questions sur l’engagement, la réciprocité des sentiments et la solidité du lien. Renversé, la réponse devient nuancée : le oui existe mais l’indécision ou la confusion doivent d’abord être levées. Dans l’ensemble, c’est une carte de confiance pour les questions de cœur.',
      },
      {
        q: 'Que veut dire L’Amoureux renversé en amour ?',
        a: 'Renversé, L’Amoureux révèle l’indécision, le doute et parfois un choix fait pour de mauvaises raisons. Il peut indiquer une hésitation entre deux personnes, une peur de l’engagement, ou une relation choisie par sécurité plutôt que par amour véritable. La carte inversée invite à clarifier vos sentiments avant de décider : un engagement pris dans la confusion mène rarement au bonheur. C’est un appel à écouter votre cœur plutôt que vos peurs.',
      },
    ],
  },
  {
    slug: 'la-lune',
    name: 'La Lune',
    emoji: '🌙',
    arcane: 'Arcane majeur XVIII',
    ouiNon: 'Nuancé',
    answerCapsule:
      'La Lune est l’une des cartes les plus mystérieuses du tarot amour. Dix-huitième arcane majeur du Tarot de Marseille, elle représente l’intuition, les émotions profondes, mais aussi les illusions et les non-dits. Tirée en amour, La Lune invite à la prudence : tout n’est pas clair, des zones d’ombre subsistent et les apparences peuvent tromper. À l’endroit, elle éveille l’intuition et révèle des sentiments cachés ; renversée, elle annonce la dissipation des malentendus et le retour de la clarté. Pour un célibataire, elle conseille de se méfier des idéalisations ; pour un couple, de lever les non-dits qui pèsent en secret. La Lune n’est ni un oui ni un non franc : c’est une invitation à écouter son ressenti profond avant de décider. Une consultation de voyance amoureuse peut vous aider à distinguer l’intuition juste de la simple peur.',
    signification:
      'En amour, La Lune gouverne le monde des émotions inconscientes, des rêves et des intuitions. Elle éclaire ce qui n’est pas dit, les sentiments enfouis et les vérités que l’on préfère ne pas voir. Cette carte est ambivalente : elle peut révéler une connexion émotionnelle profonde et une intuition juste, ou au contraire des illusions, des peurs projetées et des mensonges. La Lune apparaît souvent quand une relation traverse le flou, doutes, jalousie, imagination qui s’emballe. Le dix-huitième arcane majeur invite à ne pas confondre le ressenti profond avec l’angoisse, et à attendre la clarté avant de tirer des conclusions.',
    endroit:
      'À l’endroit, La Lune amplifie l’intuition et la sensibilité émotionnelle. Elle signale que votre ressenti capte quelque chose de vrai, même si ce n’est pas encore visible : des sentiments cachés, une situation ambiguë, un secret. En amour, elle invite à écouter votre voix intérieure tout en restant lucide, car cette même carte peut nourrir les fantasmes et les peurs. C’est une période où l’on ressent beaucoup mais où l’on voit peu, la patience est de mise.',
    renverse:
      'Renversée, La Lune annonce généralement une bonne nouvelle : le brouillard se dissipe, les illusions tombent et la vérité apparaît. Les malentendus se clarifient, les non-dits se disent enfin, et une relation confuse retrouve de la lisibilité. Cette position peut aussi révéler qu’un mensonge ou une tromperie est mis au jour. Après une période d’incertitude émotionnelle, La Lune renversée marque le retour à la clarté et à la vérité des sentiments.',
    celibataire:
      'Pour un célibataire, La Lune conseille la prudence face aux idéalisations. Vous risquez de projeter un fantasme sur une personne réelle, ou de vous laisser séduire par quelqu’un qui cache son jeu. La carte invite à prendre le temps de connaître l’autre vraiment, sans se fier aux seules apparences ni à l’imagination amoureuse qui embellit tout.',
    couple:
      'Pour un couple, La Lune signale des non-dits ou des zones d’ombre qui pèsent en secret. Des sentiments inavoués, des doutes ou une jalousie silencieuse troublent l’harmonie. La carte invite à un dialogue sincère pour lever le flou : ce qui reste caché finit par miner la relation. Une fois la vérité exprimée, la clarté revient et le lien se renforce.',
    ex: 'Concernant un ex, La Lune indique que la situation reste confuse et que vos émotions brouillent votre jugement. Vous idéalisez peut-être la relation passée ou vous laissez guider par le manque plutôt que par la réalité. La carte conseille d’attendre que le brouillard émotionnel se dissipe avant de recontacter cette personne : votre intuition profonde, une fois la peur mise de côté, vous dira la vérité.',
    faq: [
      {
        q: 'Que signifie La Lune en amour ?',
        a: 'La Lune signifie en amour l’intuition, les émotions profondes mais aussi les illusions et les non-dits. Dix-huitième arcane majeur du Tarot de Marseille, elle invite à la prudence : tout n’est pas clair, des zones d’ombre subsistent et les apparences peuvent tromper. Cette carte révèle des sentiments cachés et éveille le ressenti, mais peut aussi nourrir les fantasmes et les peurs. En amour, elle conseille d’écouter son intuition tout en restant lucide, et d’attendre la clarté avant de décider.',
      },
      {
        q: 'La Lune est-elle une carte positive ou négative en amour ?',
        a: 'La Lune est une carte nuancée, ni franchement positive ni négative en amour. À l’endroit, elle éveille l’intuition et révèle des vérités cachées, mais signale aussi le flou, les illusions et les non-dits. Renversée, elle est plus favorable : le brouillard se dissipe et la clarté revient. Tout dépend du contexte du tirage et des cartes qui l’entourent. Elle invite surtout à ne pas confondre le ressenti profond avec l’angoisse ou l’imagination.',
      },
      {
        q: 'La Lune annonce-t-elle une tromperie en amour ?',
        a: 'La Lune peut annoncer une tromperie, un mensonge ou un secret, mais ce n’est pas systématique. Elle signale surtout que quelque chose reste caché ou flou dans la relation, sans toujours préciser quoi. À l’endroit, elle invite à la vigilance sans accuser ; renversée, elle révèle souvent qu’une vérité longtemps dissimulée est mise au jour. Il faut lire La Lune avec les cartes voisines pour savoir s’il s’agit d’une réelle tromperie ou d’une simple peur projetée.',
      },
      {
        q: 'Que veut dire La Lune renversée en amour ?',
        a: 'Renversée, La Lune est plutôt une bonne nouvelle en amour : le brouillard se dissipe, les illusions tombent et la vérité des sentiments apparaît enfin. Les malentendus se clarifient, les non-dits se disent, et une relation confuse retrouve de la lisibilité. Cette position peut aussi révéler qu’un mensonge est mis au jour. Après une période d’incertitude et de doute, La Lune renversée marque le retour bienvenu à la clarté émotionnelle.',
      },
    ],
  },
  {
    slug: 'le-soleil',
    name: 'Le Soleil',
    emoji: '☀️',
    arcane: 'Arcane majeur XIX',
    ouiNon: 'Oui',
    answerCapsule:
      'Le Soleil est la carte la plus lumineuse et la plus positive du tarot amour. Dix-neuvième arcane majeur du Tarot de Marseille, il rayonne de joie, de clarté, de réussite et de bonheur partagé. Tiré en amour, Le Soleil est un oui éclatant : il annonce une relation épanouie, une histoire heureuse au grand jour, ou la fin d’une période sombre. À l’endroit, il confirme l’amour sincère, la complicité et l’épanouissement du couple ; renversé, il tempère à peine cet optimisme, signalant un bonheur retardé ou un excès d’ego à surveiller. Pour un célibataire, il promet une rencontre solaire et pleine de vie ; pour un couple, une phase de joie et de projets communs. Le Soleil est l’une des meilleures cartes que l’on puisse tirer en amour. Pour explorer ce que cette lumière annonce précisément pour vous, une consultation de voyance amoureuse en révèle les nuances.',
    signification:
      'En amour, Le Soleil incarne le bonheur pur, la vérité qui éclate au grand jour et la vitalité d’une relation épanouie. C’est la carte de la clarté après le doute, de la joie après la peine, de l’amour vécu sans masque ni secret. Le dix-neuvième arcane majeur symbolise aussi la fécondité, l’enfance, les projets qui grandissent : il annonce souvent une relation qui s’officialise, une naissance, ou un couple qui rayonne. Là où La Lune trouble, Le Soleil éclaire. Quand cette carte apparaît dans un tirage sentimental, elle apporte réconfort et confiance : l’avenir amoureux s’annonce lumineux et sincère.',
    endroit:
      'À l’endroit, Le Soleil est un présage exceptionnel en amour. Il confirme une relation heureuse, sincère et rayonnante, vécue au grand jour et sans arrière-pensées. Cette position annonce l’épanouissement du couple, l’officialisation d’une union, parfois une naissance ou un projet commun réjouissant. Pour toute question sentimentale, Le Soleil apporte une réponse chaleureuse et positive : la joie et la vérité triomphent, l’avenir est prometteur.',
    renverse:
      'Renversé, Le Soleil garde une grande partie de sa lumière mais la nuance. Il peut signaler un bonheur retardé, une joie encore voilée ou un manque de clarté passager. Cette position invite parfois à surveiller un excès d’ego, une vanité ou une tendance à ne voir que la surface des choses. En amour, Le Soleil renversé reste globalement positif : le bonheur est là ou approche, mais il demande encore un peu de patience ou d’authenticité pour se déployer pleinement.',
    celibataire:
      'Pour un célibataire, Le Soleil est l’une des cartes les plus réjouissantes : il annonce une rencontre solaire, avec une personne chaleureuse, sincère et pleine de vie. Cette relation naissante s’annonce joyeuse et lumineuse, loin des jeux ambigus. La carte invite à rayonner et à s’ouvrir pleinement : votre bonne énergie attire naturellement une histoire heureuse.',
    couple:
      'Pour un couple, Le Soleil confirme une phase de bonheur, de complicité et de projets communs. La relation s’épanouit au grand jour, la confiance règne et l’avenir s’annonce radieux. La carte peut annoncer une officialisation, un mariage, une naissance ou simplement une période de joie partagée. C’est un présage idéal pour un couple qui avance ensemble avec sincérité.',
    ex: 'Concernant un ex, Le Soleil est encourageant : il suggère qu’une réconciliation heureuse et sincère est possible, fondée sur la vérité plutôt que sur les regrets. Si la carte apparaît, elle indique que les sentiments sont clairs et positifs, et qu’un nouveau départ lumineux peut voir le jour. Renversé, ce retour reste favorable mais demande un peu plus de temps ou d’authenticité pour se concrétiser.',
    faq: [
      {
        q: 'Que signifie Le Soleil en amour ?',
        a: 'Le Soleil signifie en amour le bonheur, la clarté, la réussite et l’épanouissement partagé. Dix-neuvième arcane majeur du Tarot de Marseille, c’est la carte la plus positive du tarot amour : elle annonce une relation heureuse vécue au grand jour, la vérité qui éclate et la fin d’une période sombre. Elle symbolise aussi la fécondité et les projets qui grandissent, officialisation, mariage, naissance. Quand Le Soleil apparaît en amour, l’avenir sentimental s’annonce lumineux et sincère.',
      },
      {
        q: 'Le Soleil est-il un oui en amour ?',
        a: 'Oui, Le Soleil est un oui éclatant en amour, l’une des meilleures réponses du tarot. À l’endroit, il confirme une relation épanouie, des sentiments sincères et un avenir prometteur : il répond positivement aux questions sur le bonheur, l’engagement et la réussite du couple. Renversé, il reste globalement favorable mais annonce un bonheur légèrement retardé ou à clarifier. Pour toute question de cœur, Le Soleil apporte confiance et optimisme.',
      },
      {
        q: 'Le Soleil annonce-t-il un mariage ou une naissance ?',
        a: 'Le Soleil peut annoncer un mariage, une officialisation ou une naissance, car il symbolise la fécondité, la joie et les projets qui grandissent. Ce n’est pas systématique, mais dans un tirage sur l’avenir d’un couple, il est l’un des meilleurs signes d’une union qui se concrétise ou d’une famille qui s’agrandit. Entouré de cartes favorables comme Le Monde ou Le Dix de Coupe, cette promesse de bonheur officiel se renforce nettement.',
      },
      {
        q: 'Que veut dire Le Soleil renversé en amour ?',
        a: 'Renversé, Le Soleil conserve l’essentiel de sa lumière mais la nuance : il annonce un bonheur retardé, une joie encore voilée ou un manque de clarté passager. Il peut inviter à surveiller un excès d’ego ou une vision trop superficielle de la relation. En amour, Le Soleil renversé reste une carte positive : le bonheur est proche mais demande encore un peu de patience ou d’authenticité pour se déployer pleinement et durablement.',
      },
    ],
  },
  {
    slug: 'l-etoile',
    name: 'L’Étoile',
    emoji: '⭐',
    arcane: 'Arcane majeur XVII',
    ouiNon: 'Oui',
    answerCapsule:
      'L’Étoile est la carte de l’espoir et de la guérison dans le tarot amour. Dix-septième arcane majeur du Tarot de Marseille, elle brille après La Tour et annonce l’apaisement, la confiance retrouvée et la douceur d’un amour sincère. Tirée en amour, L’Étoile est un oui plein de sérénité : elle promet une rencontre bénie, une réconciliation en douceur ou la lente guérison d’un cœur blessé. À l’endroit, elle rayonne d’optimisme et de foi en l’avenir sentimental ; renversée, elle signale un doute, un découragement ou une perte de confiance passagère. Pour un célibataire, elle annonce l’amour après l’épreuve ; pour un couple, un renouveau tendre. L’Étoile invite à garder espoir : le meilleur est en chemin. Pour savoir ce que cette promesse signifie dans votre vie, une consultation de voyance amoureuse en précise le sens.',
    signification:
      'En amour, L’Étoile incarne l’espoir, la foi et la guérison émotionnelle. Elle apparaît souvent après une période difficile, rupture, déception, épreuve, pour annoncer que la paix revient et que l’amour est de nouveau possible. Cette carte parle d’une douceur retrouvée, d’une confiance qui se reconstruit et d’une connexion sincère et apaisée. Le dix-septième arcane majeur symbolise aussi l’inspiration, la vulnérabilité assumée et l’ouverture du cœur. Quand L’Étoile brille dans un tirage sentimental, elle réconforte : les blessures cicatrisent, l’espoir renaît et un amour plus authentique se profile à l’horizon.',
    endroit:
      'À l’endroit, L’Étoile est un signe très favorable et apaisant en amour. Elle annonce l’espoir, la guérison et le retour de la confiance après une épreuve. Une belle rencontre, une réconciliation en douceur ou une relation qui retrouve sa sérénité sont à venir. La carte invite à s’ouvrir avec foi et vulnérabilité : le cœur est prêt à aimer de nouveau, et l’avenir sentimental s’annonce doux et sincère.',
    renverse:
      'Renversée, L’Étoile signale une perte d’espoir ou de confiance. Vous doutez de l’amour, vous vous découragez ou vous fermez votre cœur par peur d’être encore blessé. Cette position peut indiquer un manque de foi en l’avenir sentimental ou une déception qui tarde à cicatriser. L’Étoile inversée n’annonce pas une catastrophe, mais invite à raviver l’espoir : la guérison est possible, à condition de ne pas laisser le pessimisme fermer la porte à l’amour.',
    celibataire:
      'Pour un célibataire, L’Étoile est particulièrement douce : elle annonce l’amour après l’épreuve, une rencontre sincère qui apaise et répare. Souvent, cette carte apparaît quand le cœur a guéri de ses anciennes blessures et s’ouvre de nouveau. La carte invite à garder foi et à s’offrir avec authenticité : une belle histoire, tendre et vraie, se prépare.',
    couple:
      'Pour un couple, L’Étoile annonce un renouveau et un apaisement. Après une tension ou une distance, la confiance et la douceur reviennent. La relation retrouve sa sérénité, les partenaires se rouvrent l’un à l’autre avec sincérité. La carte encourage à cultiver la tendresse et la vulnérabilité : le lien se régénère sur des bases plus authentiques.',
    ex: 'Concernant un ex, L’Étoile est porteuse d’espoir : elle suggère une réconciliation en douceur, fondée sur la guérison plutôt que sur les vieux schémas. Si la carte apparaît, elle indique que les blessures s’apaisent et qu’un renouveau tendre est possible entre vous. Elle invite toutefois à laisser le temps faire son œuvre : ce retour se construit dans la douceur, sans précipitation.',
    faq: [
      {
        q: 'Que signifie L’Étoile en amour ?',
        a: 'L’Étoile signifie en amour l’espoir, la guérison et la confiance retrouvée. Dix-septième arcane majeur du Tarot de Marseille, elle brille souvent après une épreuve pour annoncer que la paix revient et que l’amour est de nouveau possible. Elle parle d’une douceur retrouvée, d’une connexion sincère et apaisée, et d’un cœur qui s’ouvre à nouveau. Quand L’Étoile apparaît en amour, elle réconforte : les blessures cicatrisent et un amour plus authentique se profile.',
      },
      {
        q: 'L’Étoile annonce-t-elle une réconciliation ?',
        a: 'Oui, L’Étoile est l’une des cartes les plus favorables à une réconciliation en amour. Elle annonce une reprise en douceur, fondée sur la guérison et la sincérité plutôt que sur les anciens schémas. Concernant un ex, elle suggère que les blessures s’apaisent et qu’un renouveau tendre est possible. Elle invite toutefois à ne rien précipiter : cette réconciliation se construit lentement, dans la confiance retrouvée et le respect du temps nécessaire.',
      },
      {
        q: 'L’Étoile est-elle une bonne carte après une rupture ?',
        a: 'L’Étoile est l’une des meilleures cartes à tirer après une rupture. Elle succède symboliquement à La Tour, la carte de l’effondrement, pour annoncer l’apaisement et la reconstruction. Elle promet que le cœur va guérir, que l’espoir renaît et qu’un amour plus sincère est à venir. Après une déception, L’Étoile est un signe réconfortant : la douleur s’estompe, la confiance revient et l’avenir sentimental redevient lumineux.',
      },
      {
        q: 'Que veut dire L’Étoile renversée en amour ?',
        a: 'Renversée, L’Étoile signale une perte d’espoir ou de confiance en amour. Vous doutez, vous vous découragez ou vous fermez votre cœur par peur d’être de nouveau blessé. Cette position traduit un manque de foi en l’avenir sentimental plutôt qu’une catastrophe annoncée. L’Étoile inversée invite à raviver l’espoir : la guérison reste possible, à condition de ne pas laisser le pessimisme fermer la porte à un nouvel amour.',
      },
    ],
  },
  {
    slug: 'le-diable',
    name: 'Le Diable',
    emoji: '😈',
    arcane: 'Arcane majeur XV',
    ouiNon: 'Nuancé',
    answerCapsule:
      'Le Diable est l’une des cartes les plus intenses et ambivalentes du tarot amour. Quinzième arcane majeur du Tarot de Marseille, il incarne la passion charnelle, le désir puissant, mais aussi l’attachement toxique et la dépendance. Tiré en amour, Le Diable ne donne pas un oui ni un non simple : il révèle une attraction magnétique qui peut être délicieuse ou aliénante. À l’endroit, il signale une passion physique intense, une emprise ou une relation où le désir domine la raison ; renversé, il annonce une libération, la fin d’une dépendance affective. Pour un célibataire, il met en garde contre une attirance purement charnelle ; pour un couple, il interroge l’équilibre entre passion et liberté. Le Diable invite à distinguer l’amour véritable de l’obsession. Une consultation de voyance amoureuse peut vous aider à y voir clair dans une relation intense.',
    signification:
      'En amour, Le Diable gouverne le désir, la sensualité et les liens puissants, pour le meilleur et pour le pire. Il représente l’attraction magnétique, la passion charnelle, mais aussi tout ce qui enchaîne : la dépendance affective, la jalousie, l’emprise, l’obsession. Cette carte n’est pas mauvaise en soi ; elle éclaire l’intensité brute d’une relation et pose une question essentielle : cette passion vous élève-t-elle ou vous enchaîne-t-elle ? Le quinzième arcane majeur apparaît souvent quand le désir prend le pas sur la raison, ou quand un lien devient difficile à rompre malgré la souffrance. Il invite à la lucidité sur ce qui vous attache réellement.',
    endroit:
      'À l’endroit, Le Diable signale une passion intense et une forte attraction physique. Le désir est puissant, la connexion charnelle magnétique, ce qui peut être grisant. Mais la carte avertit aussi d’un possible déséquilibre : dépendance, jalousie, emprise ou relation où l’on perd son libre arbitre. En amour, Le Diable à l’endroit invite à profiter de l’intensité tout en restant lucide : la frontière entre passion et enfermement doit rester consciente.',
    renverse:
      'Renversé, Le Diable annonce le plus souvent une libération. Vous prenez conscience d’une dépendance affective, d’une emprise ou d’un schéma toxique, et vous vous en détachez. Les chaînes se brisent, la lucidité revient et vous retrouvez votre liberté. Cette position peut aussi signaler la fin d’une passion dévorante ou le refus d’une relation malsaine. Le Diable inversé est libérateur : il marque la sortie d’un lien qui aliénait au profit d’un amour plus sain.',
    celibataire:
      'Pour un célibataire, Le Diable met en garde contre une attirance purement charnelle ou une passion aveuglante. Vous pouvez être irrésistiblement attiré par une personne, sans que ce désir repose sur des bases saines. La carte invite à la lucidité : distinguez le coup de foudre sincère de la simple fascination physique, et méfiez-vous des relations qui enchaînent plus qu’elles ne libèrent.',
    couple:
      'Pour un couple, Le Diable interroge l’équilibre entre passion et liberté. Le désir peut être intense et la complicité charnelle forte, mais la carte invite à vérifier que le lien ne glisse pas vers la dépendance, la jalousie ou l’emprise. Si la passion domine tout, il est temps de raviver le respect et l’autonomie de chacun. Bien vécue, cette intensité peut aussi être une force du couple.',
    ex: 'Concernant un ex, Le Diable révèle un attachement puissant, souvent teinté de dépendance plus que d’amour serein. Le lien reste magnétique, difficile à couper, mais pas nécessairement sain. La carte invite à la lucidité : demandez-vous si vous voulez vraiment cette personne ou si c’est le manque, l’habitude ou l’obsession qui parlent. Renversé, Le Diable annonce au contraire votre libération de cet ex.',
    faq: [
      {
        q: 'Que signifie Le Diable en amour ?',
        a: 'Le Diable signifie en amour la passion charnelle, le désir puissant, mais aussi l’attachement toxique et la dépendance. Quinzième arcane majeur du Tarot de Marseille, il incarne une attraction magnétique qui peut être délicieuse ou aliénante. Il ne donne pas de réponse simple : il éclaire l’intensité brute d’une relation et pose la question de savoir si cette passion vous élève ou vous enchaîne. En amour, Le Diable invite à distinguer l’amour véritable de l’obsession.',
      },
      {
        q: 'Le Diable est-il une mauvaise carte en amour ?',
        a: 'Le Diable n’est pas une mauvaise carte en soi : il révèle l’intensité et le désir, ce qui peut être positif. Il devient problématique quand il signale une dépendance affective, une emprise ou une passion qui aliène. Tout dépend du contexte et des cartes voisines. À l’endroit, il parle de forte attraction physique à vivre avec lucidité ; renversé, il annonce une libération bienvenue. C’est une carte d’avertissement autant que de passion, à interpréter avec nuance.',
      },
      {
        q: 'Le Diable annonce-t-il une relation toxique ?',
        a: 'Le Diable peut annoncer une relation toxique, marquée par la dépendance, la jalousie ou l’emprise, mais ce n’est pas automatique. Il signale surtout que le désir ou l’attachement prend le pas sur la raison. Entouré de cartes difficiles comme La Tour ou le Trois d’Épée, le risque de toxicité se confirme. Seul, il invite à la vigilance : vérifiez que votre passion vous rend libre et heureux plutôt qu’elle ne vous enchaîne.',
      },
      {
        q: 'Que veut dire Le Diable renversé en amour ?',
        a: 'Renversé, Le Diable annonce le plus souvent une libération en amour. Vous prenez conscience d’une dépendance, d’une emprise ou d’un schéma toxique et vous vous en détachez. Les chaînes se brisent, la lucidité revient et vous retrouvez votre liberté affective. Cette position peut aussi marquer la fin d’une passion dévorante ou le refus d’une relation malsaine. Le Diable inversé est libérateur : il ouvre la voie à un amour plus sain et équilibré.',
      },
    ],
  },
  {
    slug: 'la-tour',
    name: 'La Tour',
    emoji: '⚡',
    arcane: 'Arcane majeur XVI',
    ouiNon: 'Non',
    answerCapsule:
      'La Tour est l’une des cartes les plus redoutées du tarot amour, mais aussi l’une des plus libératrices. Seizième arcane majeur du Tarot de Marseille, elle représente le bouleversement soudain, la rupture et l’effondrement d’une structure devenue fausse. Tirée en amour, La Tour est plutôt un non : elle annonce une crise, une séparation ou une vérité brutale qui fait tout basculer. À l’endroit, elle signale un choc, une rupture inattendue ou la fin d’une illusion ; renversée, elle atténue le choc en un bouleversement plus lent ou évité de justesse. Pour un célibataire, elle balaie les fausses pistes ; pour un couple, elle met à l’épreuve les fondations. Aussi douloureuse soit-elle, La Tour détruit ce qui sonnait faux pour laisser place au vrai. Une consultation de voyance amoureuse peut éclairer ce que ce bouleversement prépare pour vous.',
    signification:
      'En amour, La Tour symbolise le bouleversement libérateur : l’effondrement soudain de ce qui reposait sur des bases fausses. Elle apparaît quand une relation, une illusion ou une certitude vole en éclats, souvent brutalement et de façon inattendue. Rupture, révélation, crise, coup de tonnerre : le seizième arcane majeur ne fait pas dans la demi-mesure. Mais derrière le choc se cache une vérité nécessaire. La Tour détruit ce qui devait tomber pour faire place à quelque chose de plus authentique. C’est une carte difficile mais salvatrice : elle libère de ce qui emprisonnait, même si le prix émotionnel est élevé sur le moment.',
    endroit:
      'À l’endroit, La Tour annonce un bouleversement soudain en amour : rupture inattendue, révélation qui change tout, crise majeure. Le choc est brutal et l’édifice s’effondre d’un coup, laissant un sentiment de perte et de déstabilisation. Mais cette carte détruit ce qui reposait sur le mensonge ou l’illusion. Aussi douloureuse soit-elle sur le moment, La Tour à l’endroit ouvre la voie à une reconstruction plus vraie et plus solide.',
    renverse:
      'Renversée, La Tour atténue l’intensité du choc. Le bouleversement est plus lent, plus intérieur, ou bien il a été évité de justesse. Vous résistez peut-être à un changement nécessaire, prolongeant une situation qui devrait se terminer ; ou vous traversez une crise moins spectaculaire mais tout aussi transformatrice. La Tour inversée invite à ne pas fuir l’inévitable : mieux vaut accompagner le changement que de s’accrocher à ce qui doit tomber.',
    celibataire:
      'Pour un célibataire, La Tour balaie les fausses pistes et les illusions amoureuses. Elle peut marquer la fin brutale d’une situation ambiguë, la chute d’un fantasme ou la prise de conscience qu’une personne n’était pas la bonne. Aussi déstabilisante soit-elle, cette carte libère : en faisant tomber ce qui sonnait faux, elle vous rapproche d’un amour authentique.',
    couple:
      'Pour un couple, La Tour met les fondations à l’épreuve. Elle peut annoncer une crise majeure, une révélation ou une rupture, surtout si la relation reposait sur des non-dits ou des illusions. Mais si le lien est sincère, cette secousse peut aussi le purifier en forçant la vérité à éclater. La carte invite à affronter ce qui doit l’être : ce qui survit à La Tour en ressort plus authentique.',
    ex: 'Concernant un ex, La Tour évoque une rupture brutale ou une séparation marquante, souvent celle qui a déjà eu lieu ou qui reste à assumer. Elle indique rarement une réconciliation immédiate : la structure de l’ancienne relation s’est effondrée pour de bonnes raisons. La carte invite à faire le deuil de ce qui a été détruit plutôt qu’à reconstruire à l’identique. Un renouveau reste possible, mais sur des bases entièrement nouvelles.',
    faq: [
      {
        q: 'Que signifie La Tour en amour ?',
        a: 'La Tour signifie en amour le bouleversement soudain, la rupture et l’effondrement d’une structure devenue fausse. Seizième arcane majeur du Tarot de Marseille, elle annonce une crise, une séparation ou une vérité brutale qui fait tout basculer, souvent de façon inattendue. Aussi redoutée soit-elle, La Tour est libératrice : elle détruit ce qui reposait sur le mensonge ou l’illusion pour laisser place à quelque chose de plus authentique. C’est une carte difficile mais salvatrice.',
      },
      {
        q: 'La Tour annonce-t-elle une rupture ?',
        a: 'Oui, La Tour annonce souvent une rupture ou une crise majeure en amour, surtout à l’endroit. Elle signale un bouleversement soudain qui fait s’effondrer la relation, généralement parce qu’elle reposait sur des bases fausses ou des non-dits. Ce n’est pas toujours une fin définitive : si le lien est sincère, la secousse peut le purifier. Mais dans la plupart des tirages, La Tour marque une séparation ou une transformation radicale et douloureuse du couple.',
      },
      {
        q: 'La Tour est-elle toujours négative en amour ?',
        a: 'La Tour est douloureuse mais pas purement négative en amour. Elle détruit ce qui devait tomber, illusions, mensonges, situations bloquées, pour libérer et permettre une reconstruction plus vraie. Sur le moment, le choc est brutal et le prix émotionnel élevé. Mais avec le recul, beaucoup reconnaissent que La Tour a mis fin à ce qui les emprisonnait. Suivie de L’Étoile, elle annonce même la guérison et un renouveau après l’effondrement.',
      },
      {
        q: 'Que veut dire La Tour renversée en amour ?',
        a: 'Renversée, La Tour atténue l’intensité du bouleversement : le choc est plus lent, plus intérieur, ou bien évité de justesse. Elle peut indiquer que vous résistez à un changement nécessaire, prolongeant une situation qui devrait se terminer. La Tour inversée invite à ne pas fuir l’inévitable : accompagner le changement vaut mieux que s’accrocher à ce qui doit tomber. La transformation est là, plus discrète mais tout aussi réelle.',
      },
    ],
  },
  {
    slug: 'la-roue-de-fortune',
    name: 'La Roue de Fortune',
    emoji: '🎡',
    arcane: 'Arcane majeur X',
    ouiNon: 'Oui',
    answerCapsule:
      'La Roue de Fortune est la carte du destin et du changement dans le tarot amour. Dixième arcane majeur du Tarot de Marseille, elle représente les cycles de la vie, les tournants inattendus et le mouvement du sort. Tirée en amour, La Roue de Fortune est plutôt un oui porteur d’évolution : elle annonce un changement de situation, une rencontre providentielle ou un tournant décisif dans votre vie sentimentale. À l’endroit, elle apporte chance et opportunités, un cycle qui s’améliore ; renversée, elle signale un retard, une malchance passagère ou une résistance au changement. Pour un célibataire, elle annonce une rencontre due au hasard du destin ; pour un couple, une nouvelle phase. La Roue tourne toujours : rien n’est figé en amour. Une consultation de voyance amoureuse peut préciser le tournant que cette carte annonce pour vous.',
    signification:
      'En amour, La Roue de Fortune symbolise le mouvement, le destin et les cycles inévitables de la vie sentimentale. Elle rappelle que rien n’est figé : les situations évoluent, la chance tourne, et un changement se prépare souvent au moment où on l’attend le moins. Cette carte est généralement positive car elle annonce une amélioration, une opportunité ou un tournant favorable. Le dixième arcane majeur parle aussi de synchronicités, de rencontres providentielles et de ce timing mystérieux qui met les bonnes personnes sur notre route. Quand La Roue apparaît, elle invite à accueillir le changement et à faire confiance au mouvement de la vie amoureuse.',
    endroit:
      'À l’endroit, La Roue de Fortune est un signe favorable de changement positif en amour. Elle annonce un tournant heureux : une rencontre providentielle, une amélioration de votre situation sentimentale ou un cycle difficile qui se termine enfin. La chance tourne en votre faveur et de belles opportunités se présentent. La carte invite à saisir le mouvement du destin plutôt qu’à le subir : un nouveau chapitre amoureux, prometteur, s’ouvre.',
    renverse:
      'Renversée, La Roue de Fortune signale un ralentissement, un retard ou une phase de malchance passagère en amour. Le changement espéré tarde à venir, ou vous traversez un cycle moins favorable. Cette position peut aussi révéler une résistance au changement : vous vous accrochez à une situation figée alors que la vie vous invite à évoluer. La Roue inversée rappelle que le mouvement finira par reprendre, mieux vaut l’accompagner que lutter contre lui.',
    celibataire:
      'Pour un célibataire, La Roue de Fortune annonce une rencontre due au hasard du destin, souvent inattendue et providentielle. Une synchronicité, un concours de circonstances, et voilà que la vie place quelqu’un sur votre route. La carte invite à rester ouvert et disponible : le tournant amoureux peut survenir à tout moment, précisément quand vous ne l’attendez plus.',
    couple:
      'Pour un couple, La Roue de Fortune annonce une nouvelle phase, un changement dans la relation. Cela peut être un déménagement, une évolution des projets communs ou simplement un cycle qui se renouvelle. Généralement positive, la carte invite à accueillir cette évolution avec confiance. La relation ne stagne pas : elle avance vers un nouveau chapitre, porteur d’opportunités pour les deux partenaires.',
    ex: 'Concernant un ex, La Roue de Fortune évoque le mouvement du destin et les cycles qui se rouvrent. Elle peut annoncer un retour de contact inattendu ou un changement de situation qui rapproche à nouveau. Le sort semble remettre cette personne sur votre chemin. La carte invite toutefois à observer dans quel sens tourne la roue : ce tournant peut relancer l’histoire comme, au contraire, tourner définitivement la page.',
    faq: [
      {
        q: 'Que signifie La Roue de Fortune en amour ?',
        a: 'La Roue de Fortune signifie en amour le destin, le changement et les cycles de la vie sentimentale. Dixième arcane majeur du Tarot de Marseille, elle annonce un tournant inattendu : une rencontre providentielle, une amélioration de situation ou un nouveau chapitre amoureux. Généralement positive, elle rappelle que rien n’est figé et que la chance tourne. Elle parle aussi de synchronicités et de ce timing mystérieux qui met les bonnes personnes sur notre route au bon moment.',
      },
      {
        q: 'La Roue de Fortune annonce-t-elle une rencontre ?',
        a: 'Oui, pour un célibataire, La Roue de Fortune annonce souvent une rencontre due au hasard du destin, inattendue et providentielle. Une synchronicité ou un concours de circonstances place quelqu’un sur votre route, généralement au moment où vous ne l’attendez plus. La carte invite à rester ouvert et disponible. C’est l’un des signes du tarot amour associés aux rencontres marquées par le destin plutôt que par une démarche volontaire.',
      },
      {
        q: 'La Roue de Fortune est-elle un oui en amour ?',
        a: 'La Roue de Fortune est plutôt un oui en amour, porteur d’évolution favorable. À l’endroit, elle annonce un changement positif, de la chance et de belles opportunités sentimentales : un cycle difficile se termine et un nouveau chapitre s’ouvre. Renversée, la réponse se nuance en « pas encore » : un retard ou une résistance au changement freine le mouvement. Dans l’ensemble, c’est une carte de dynamique positive qui invite à accueillir le tournant qui vient.',
      },
      {
        q: 'Que veut dire La Roue de Fortune renversée en amour ?',
        a: 'Renversée, La Roue de Fortune signale un ralentissement, un retard ou une phase de malchance passagère en amour. Le changement espéré tarde, ou vous traversez un cycle moins favorable. Elle peut aussi révéler une résistance au changement : vous vous accrochez à une situation figée alors que la vie vous invite à évoluer. La Roue inversée rappelle que le mouvement reprendra, mieux vaut l’accompagner avec confiance que lutter contre le cours des choses.',
      },
    ],
  },
  {
    slug: 'la-mort',
    name: 'La Mort',
    emoji: '💀',
    arcane: 'Arcane majeur XIII',
    ouiNon: 'Nuancé',
    answerCapsule:
      'La Mort est la carte la plus mal comprise du tarot amour. Treizième arcane majeur du Tarot de Marseille, elle n’annonce presque jamais une mort réelle, mais une transformation profonde, la fin d’un cycle et un renouveau. Tirée en amour, La Mort n’est ni un oui ni un non simple : elle signale qu’une page se tourne pour qu’une nouvelle puisse s’écrire. À l’endroit, elle annonce la fin nécessaire d’une situation, une métamorphose du couple ou d’un célibat ; renversée, elle révèle une résistance au changement, un refus de tourner la page. Pour un célibataire, elle balaie l’ancien pour préparer le neuf ; pour un couple, elle transforme le lien en profondeur. La Mort libère de ce qui est terminé. Une consultation de voyance amoureuse peut éclairer la renaissance que cette carte prépare pour vous.',
    signification:
      'En amour, La Mort symbolise la transformation radicale et la fin d’un cycle. Contrairement à sa réputation effrayante, elle n’annonce quasiment jamais un décès : elle parle de mutation, de renaissance, de ce qui doit finir pour laisser place au neuf. Une relation qui se termine, un schéma amoureux que l’on abandonne, une version de soi que l’on quitte : le treizième arcane majeur fait table rase pour permettre un renouveau. C’est une carte de passage, souvent inconfortable car elle impose de lâcher prise, mais profondément régénératrice. Quand La Mort apparaît, elle annonce que quelque chose se termine pour qu’une histoire plus vraie puisse commencer.',
    endroit:
      'À l’endroit, La Mort annonce une fin nécessaire et une transformation profonde en amour. Une relation, une situation ou une phase de vie sentimentale arrive à son terme, souvent de façon inéluctable. Ce passage peut être douloureux, mais il est libérateur : il fait place nette pour un renouveau. La carte invite à accepter ce qui se termine plutôt qu’à s’y accrocher, la renaissance amoureuse passe par ce lâcher-prise nécessaire.',
    renverse:
      'Renversée, La Mort révèle une résistance au changement. Vous refusez de tourner une page pourtant nécessaire, vous vous accrochez à une relation ou à un schéma terminé, retardant une transformation inévitable. Cette position traduit une peur du vide, un deuil non fait ou une stagnation. La Mort inversée invite à lâcher prise : plus on résiste à la fin d’un cycle, plus la transition devient longue et pénible. Accepter le changement est la seule voie vers le renouveau.',
    celibataire:
      'Pour un célibataire, La Mort balaie l’ancien pour préparer le neuf. Elle peut marquer la fin d’un célibat, l’abandon d’anciens schémas amoureux ou le deuil définitif d’une histoire passée qui vous empêchait d’avancer. En faisant table rase, cette carte vous libère et vous rend disponible pour une nouvelle histoire, plus alignée avec la personne que vous êtes devenue.',
    couple:
      'Pour un couple, La Mort transforme le lien en profondeur. Elle peut annoncer la fin d’une relation qui a fait son temps, mais aussi la mutation d’un couple qui doit se réinventer pour survivre. Une phase se termine, une dynamique, une routine, une version de la relation, pour qu’une autre naisse. La carte invite à accepter cette métamorphose : le couple qui accepte de mourir à ce qu’il était peut renaître plus fort.',
    ex: 'Concernant un ex, La Mort indique le plus souvent qu’un cycle est bel et bien terminé et qu’il faut en faire le deuil. Elle n’encourage pas à reconstruire à l’identique : l’ancienne relation appartient au passé. Toutefois, en tant que carte de renaissance, elle n’exclut pas un lien totalement transformé, sur des bases entièrement nouvelles. La Mort invite surtout à lâcher ce qui fut, pour laisser la place à ce qui pourrait être.',
    faq: [
      {
        q: 'Que signifie La Mort en amour ?',
        a: 'La Mort signifie en amour la transformation profonde, la fin d’un cycle et le renouveau. Treizième arcane majeur du Tarot de Marseille, elle n’annonce presque jamais un décès réel, mais une mutation : ce qui doit finir pour laisser place au neuf. Une relation qui se termine, un schéma que l’on abandonne, une version de soi que l’on quitte. C’est une carte de passage, inconfortable mais régénératrice : elle libère de ce qui est terminé pour permettre une histoire plus vraie.',
      },
      {
        q: 'La Mort annonce-t-elle une rupture ?',
        a: 'La Mort peut annoncer la fin d’une relation, mais pas toujours une rupture définitive. Elle signale surtout qu’un cycle se termine et qu’une transformation est nécessaire. Pour un couple, elle peut marquer la fin d’une dynamique ou d’une routine plutôt que du lien lui-même : le couple qui accepte de se réinventer peut renaître. Elle indique une mutation profonde ; c’est le contexte et les cartes voisines qui précisent s’il s’agit d’une fin ou d’une métamorphose.',
      },
      {
        q: 'La Mort est-elle une carte négative en amour ?',
        a: 'La Mort n’est pas une carte négative en amour, malgré sa réputation effrayante. Elle est une carte de transformation et de renaissance : elle met fin à ce qui est terminé pour permettre un renouveau plus authentique. Le passage peut être douloureux car il impose de lâcher prise, mais il est profondément libérateur. Beaucoup de renaissances amoureuses commencent par une carte de La Mort : elle ferme une porte pour en ouvrir une plus juste.',
      },
      {
        q: 'Que veut dire La Mort renversée en amour ?',
        a: 'Renversée, La Mort révèle une résistance au changement en amour. Vous refusez de tourner une page pourtant nécessaire, vous vous accrochez à une relation ou à un schéma terminé, retardant une transformation inévitable. Cette position traduit une peur du vide ou un deuil non fait. La Mort inversée invite à lâcher prise : plus on résiste à la fin d’un cycle, plus la transition devient longue et pénible. Accepter le changement est la seule voie vers le renouveau.',
      },
    ],
  },
  {
    slug: 'le-bateleur',
    name: 'Le Bateleur',
    emoji: '🪄',
    arcane: 'Arcane majeur I',
    ouiNon: 'Oui',
    answerCapsule:
      'Le Bateleur est la carte des commencements dans le tarot amour. Premier arcane majeur du Tarot de Marseille, il représente le potentiel, l’initiative et le début d’une nouvelle histoire. Tiré en amour, Le Bateleur est un oui plein de promesses : il annonce une rencontre naissante, un nouveau départ sentimental ou le moment idéal pour oser une déclaration. À l’endroit, il incarne la confiance, le charme et la maîtrise de ses atouts pour séduire ; renversé, il signale l’hésitation, la manipulation ou un potentiel qui reste en friche. Pour un célibataire, il ouvre un cycle amoureux prometteur ; pour un couple, un renouveau ou un projet à lancer. Le Bateleur invite à prendre l’initiative : tout est possible, à vous de jouer. Une consultation de voyance amoureuse peut préciser ce que ce nouveau départ vous réserve.',
    signification:
      'En amour, Le Bateleur symbolise le commencement, le potentiel et le pouvoir d’agir. Il représente ce moment magique où tout est encore possible, où une histoire peut naître si l’on ose la saisir. Le premier arcane majeur incarne aussi l’habileté, le charme et la capacité à réunir tous ses atouts pour séduire ou construire. C’est une carte d’initiative : elle rappelle que l’amour ne tombe pas du ciel mais se provoque, se tente, se joue. Quand Le Bateleur apparaît dans un tirage sentimental, il annonce un nouveau départ et invite le consultant à prendre les choses en main plutôt qu’à attendre passivement.',
    endroit:
      'À l’endroit, Le Bateleur est un signe favorable de commencement en amour. Il annonce une rencontre naissante, un nouveau cycle sentimental ou le moment idéal pour oser une initiative, une déclaration, un premier pas, un projet. La carte parle de confiance, de charme et de maîtrise de ses atouts. Elle encourage à agir : le potentiel est là, il ne demande qu’à être saisi pour qu’une belle histoire commence.',
    renverse:
      'Renversé, Le Bateleur révèle l’hésitation, le manque de confiance ou un potentiel qui reste inexploité. Vous n’osez pas faire le premier pas, ou vous doutez de vos atouts au point de laisser passer une opportunité. Cette position peut aussi signaler de la manipulation, un jeu de séduction malhonnête ou de fausses promesses. Le Bateleur inversé invite à clarifier vos intentions et à reprendre confiance : le potentiel existe, mais il faut le mettre en action sincèrement.',
    celibataire:
      'Pour un célibataire, Le Bateleur ouvre un cycle amoureux prometteur : une rencontre se profile, ou l’occasion d’oser aborder quelqu’un qui vous attire. La carte vous invite à prendre l’initiative et à miser sur votre charme naturel. C’est le moment idéal pour vous lancer : tout commence, et l’avenir sentimental dépend de votre audace à saisir ce qui se présente.',
    couple:
      'Pour un couple, Le Bateleur annonce un renouveau ou un nouveau projet à deux. Vous entrez dans un cycle neuf : emménagement, projet commun, ou simplement l’envie de raviver la relation et de repartir sur de nouvelles bases. La carte invite à l’initiative et à la créativité : votre couple a tout pour écrire un nouveau chapitre stimulant, à condition d’oser le lancer ensemble.',
    ex:
      'Concernant un ex, Le Bateleur suggère la possibilité d’un nouveau départ, sur des bases neuves plutôt qu’en reprenant l’ancienne histoire à l’identique. Si la carte apparaît, elle indique qu’un nouveau cycle peut s’ouvrir si vous prenez l’initiative de recontacter cette personne avec des intentions claires. Renversé, elle avertit contre les fausses promesses ou un jeu de séduction sans lendemain.',
    faq: [
      {
        q: 'Que signifie Le Bateleur en amour ?',
        a: 'Le Bateleur signifie en amour le commencement, le potentiel et l’initiative. Premier arcane majeur du Tarot de Marseille, il annonce une rencontre naissante, un nouveau départ sentimental ou le moment idéal pour oser une déclaration. C’est une carte de confiance et de charme, qui rappelle que l’amour se provoque plutôt qu’il ne s’attend. Quand Le Bateleur apparaît, tout est encore possible : il invite à prendre les choses en main pour qu’une belle histoire commence.',
      },
      {
        q: 'Le Bateleur annonce-t-il une nouvelle rencontre ?',
        a: 'Oui, pour un célibataire, Le Bateleur est un bon présage de nouvelle rencontre ou de nouveau cycle amoureux. Il marque le début d’une histoire potentielle et invite à saisir l’opportunité en osant le premier pas. Ce n’est pas une promesse passive : la carte souligne que le potentiel doit être mis en action. En misant sur votre charme et votre audace, vous transformez ce commencement annoncé en histoire réelle.',
      },
      {
        q: 'Le Bateleur est-il un oui en amour ?',
        a: 'Le Bateleur est un oui porteur de potentiel en amour. À l’endroit, il répond favorablement aux questions sur les débuts, les nouvelles rencontres et les initiatives à prendre : le moment est propice, tout peut commencer. Renversé, la réponse devient un « pas encore » : l’hésitation ou le manque de confiance freine le potentiel. Dans l’ensemble, c’est une carte encourageante qui invite à passer à l’action pour concrétiser ses chances.',
      },
      {
        q: 'Que veut dire Le Bateleur renversé en amour ?',
        a: 'Renversé, Le Bateleur révèle l’hésitation, le manque de confiance ou un potentiel inexploité. Vous n’osez pas faire le premier pas, ou vous laissez passer une opportunité par doute. Cette position peut aussi signaler de la manipulation ou de fausses promesses dans un jeu de séduction. Le Bateleur inversé invite à clarifier vos intentions et à reprendre confiance : le potentiel existe, mais il ne se réalise que si vous le mettez sincèrement en action.',
      },
    ],
  },
  {
    slug: 'l-imperatrice',
    name: 'L’Impératrice',
    emoji: '👑',
    arcane: 'Arcane majeur III',
    ouiNon: 'Oui',
    answerCapsule:
      'L’Impératrice est la carte de l’amour épanoui et fécond dans le tarot amour. Troisième arcane majeur du Tarot de Marseille, elle incarne la féminité, la sensualité, l’abondance et la fertilité. Tirée en amour, L’Impératrice est un oui chaleureux : elle annonce une relation nourrissante, un amour sensuel et généreux, parfois une grossesse ou un foyer qui s’agrandit. À l’endroit, elle rayonne de douceur, de plaisir et d’épanouissement affectif ; renversée, elle signale un blocage, une dépendance affective ou un manque d’amour de soi. Pour un célibataire, elle attire une relation tendre et sensuelle ; pour un couple, une phase d’abondance et de complicité charnelle. L’Impératrice invite à s’ouvrir au plaisir et à la générosité du cœur. Une consultation de voyance amoureuse peut préciser l’épanouissement qu’elle annonce.',
    signification:
      'En amour, L’Impératrice symbolise l’épanouissement affectif, la sensualité et l’abondance du cœur. Elle représente l’amour dans sa dimension nourricière et généreuse : le plaisir des sens, la douceur du foyer, la fécondité au sens propre comme au figuré. Le troisième arcane majeur est associé à la féminité créatrice, à la séduction naturelle et à la capacité de donner et recevoir de l’amour sans retenue. Quand L’Impératrice apparaît dans un tirage sentimental, elle annonce une relation épanouie et charnelle, ou l’arrivée d’une abondance affective. C’est l’une des cartes les plus douces et fertiles du tarot amour.',
    endroit:
      'À l’endroit, L’Impératrice est un présage chaleureux en amour. Elle annonce une relation épanouie, sensuelle et généreuse, où le plaisir et la tendresse abondent. Cette position peut aussi indiquer une grossesse, un projet de famille ou un foyer qui s’épanouit. La carte invite à savourer l’amour dans toute sa richesse, à s’ouvrir aux plaisirs des sens et à la générosité du cœur. L’épanouissement affectif est à portée de main.',
    renverse:
      'Renversée, L’Impératrice signale un blocage dans l’épanouissement affectif. Vous manquez de confiance en votre pouvoir de séduction, vous vous coupez de vos plaisirs, ou vous glissez vers la dépendance affective et le besoin excessif de l’autre. Cette position peut aussi révéler une difficulté à donner ou recevoir de l’amour. L’Impératrice inversée invite à retrouver l’amour de soi avant de pouvoir rayonner à nouveau.',
    celibataire:
      'Pour un célibataire, L’Impératrice attire une relation tendre, sensuelle et nourrissante. Votre charme naturel et votre ouverture au plaisir séduisent : une belle histoire, chaleureuse et généreuse, se prépare. La carte invite à cultiver l’amour de vous-même et à rayonner sans retenue, c’est cette abondance intérieure qui appelle une rencontre épanouissante.',
    couple:
      'Pour un couple, L’Impératrice annonce une phase d’abondance, de complicité charnelle et d’épanouissement. La tendresse et le plaisir sont au rendez-vous, et la relation peut s’ouvrir à un projet fécond : emménagement, mariage ou enfant. La carte invite à savourer cette période généreuse et à nourrir le lien avec douceur et sensualité.',
    ex:
      'Concernant un ex, L’Impératrice évoque un lien encore chargé de tendresse et de sensualité. Elle suggère qu’une réconciliation chaleureuse, fondée sur l’affection et le plaisir retrouvé, est possible. Si la carte apparaît, elle indique que des sentiments doux persistent. Renversée, elle invite d’abord à retrouver l’amour de soi avant d’envisager de renouer, pour ne pas retomber dans la dépendance.',
    faq: [
      {
        q: 'Que signifie L’Impératrice en amour ?',
        a: 'L’Impératrice signifie en amour l’épanouissement, la sensualité et l’abondance du cœur. Troisième arcane majeur du Tarot de Marseille, elle incarne l’amour nourricier et généreux : le plaisir des sens, la douceur du foyer, la fécondité. Elle annonce une relation épanouie et charnelle, parfois une grossesse ou un foyer qui s’agrandit. C’est l’une des cartes les plus douces du tarot amour, qui invite à s’ouvrir au plaisir et à la générosité affective.',
      },
      {
        q: 'L’Impératrice annonce-t-elle une grossesse ?',
        a: 'L’Impératrice peut annoncer une grossesse, car elle symbolise la fertilité et l’abondance, mais ce n’est pas systématique. Dans un tirage sur l’avenir d’un couple, elle est l’un des meilleurs signes d’une fécondité au sens propre, un enfant, comme au figuré : un projet qui grandit, un foyer qui s’épanouit. Entourée de cartes comme Le Soleil, cette promesse de famille se renforce nettement.',
      },
      {
        q: 'L’Impératrice est-elle une bonne carte en amour ?',
        a: 'Oui, L’Impératrice est l’une des cartes les plus favorables du tarot amour. Elle annonce l’épanouissement affectif, la sensualité, l’abondance et la générosité du cœur. À l’endroit, elle promet une relation nourrissante et chaleureuse. Renversée, elle reste un appel positif : retrouver l’amour de soi pour rayonner à nouveau. Dans l’ensemble, c’est une carte de douceur, de plaisir et de fécondité amoureuse.',
      },
      {
        q: 'Que veut dire L’Impératrice renversée en amour ?',
        a: 'Renversée, L’Impératrice signale un blocage dans l’épanouissement affectif. Vous manquez de confiance en votre séduction, vous vous coupez de vos plaisirs, ou vous glissez vers la dépendance affective. Cette position peut révéler une difficulté à donner ou recevoir de l’amour. L’Impératrice inversée invite à retrouver l’amour de soi et la confiance en sa propre valeur avant de pouvoir à nouveau rayonner et attirer une relation épanouie.',
      },
    ],
  },
  {
    slug: 'l-empereur',
    name: 'L’Empereur',
    emoji: '🛡️',
    arcane: 'Arcane majeur IV',
    ouiNon: 'Oui',
    answerCapsule:
      'L’Empereur est la carte de la stabilité et de l’engagement dans le tarot amour. Quatrième arcane majeur du Tarot de Marseille, il incarne la solidité, la protection, l’autorité et la construction durable. Tiré en amour, L’Empereur est un oui rassurant : il annonce une relation stable et sérieuse, un partenaire fiable et protecteur, ou un engagement qui s’officialise. À l’endroit, il représente la sécurité, la loyauté et la capacité à bâtir un couple solide ; renversé, il signale la rigidité, l’autoritarisme ou un besoin de contrôle excessif. Pour un célibataire, il attire un partenaire mature et stable ; pour un couple, une consolidation ou un projet structurant. L’Empereur invite à construire l’amour sur des bases solides. Une consultation de voyance amoureuse peut préciser la stabilité qu’il annonce.',
    signification:
      'En amour, L’Empereur symbolise la stabilité, l’engagement et la construction durable. Il représente le partenaire fiable, protecteur et loyal, celui sur qui l’on peut s’appuyer et avec qui l’on bâtit un avenir. Le quatrième arcane majeur incarne l’autorité bienveillante, la structure et le sens des responsabilités en amour. Il annonce souvent une relation sérieuse et engagée, loin des passions éphémères. Quand L’Empereur apparaît dans un tirage sentimental, il rassure : le couple repose sur des fondations solides, ou une belle stabilité affective est à venir. C’est une carte de sécurité et de fiabilité.',
    endroit:
      'À l’endroit, L’Empereur est un signe rassurant en amour. Il annonce une relation stable, sérieuse et protectrice, avec un partenaire fiable et loyal. Cette position peut indiquer un engagement qui s’officialise, une union solide ou la consolidation d’un couple. La carte invite à construire l’amour sur des bases durables et à valoriser la sécurité affective. La stabilité et la fiabilité sont au rendez-vous.',
    renverse:
      'Renversé, L’Empereur révèle la rigidité, l’autoritarisme ou un besoin de contrôle excessif. Un partenaire peut se montrer dominateur, inflexible ou trop centré sur le pouvoir dans la relation. Cette position peut aussi signaler une peur de l’engagement déguisée en froideur, ou une structure qui étouffe au lieu de protéger. L’Empereur inversé invite à assouplir les rapports de force et à équilibrer autorité et tendresse dans le couple.',
    celibataire:
      'Pour un célibataire, L’Empereur attire un partenaire mature, stable et protecteur, quelqu’un sur qui l’on peut compter. La carte annonce une relation sérieuse plutôt qu’une aventure, avec une personne fiable et engagée. Elle invite à rechercher la sécurité affective et à valoriser la solidité plutôt que le seul frisson passager.',
    couple:
      'Pour un couple, L’Empereur annonce une consolidation ou un engagement structurant. La relation gagne en stabilité, et un projet sérieux peut se concrétiser : mariage, achat commun, fondation d’un foyer. La carte invite à bâtir ensemble sur des bases solides, tout en veillant à ce que l’autorité ne bascule pas en rigidité ou en contrôle.',
    ex:
      'Concernant un ex, L’Empereur évoque une relation qui reposait sur la stabilité, ou un ex au tempérament structurant, parfois dominateur. Il peut suggérer un retour sur des bases sérieuses et engagées si les deux le souhaitent vraiment. Renversé, il avertit contre un lien marqué par le contrôle ou la rigidité, qu’il vaut mieux ne pas reconstruire à l’identique.',
    faq: [
      {
        q: 'Que signifie L’Empereur en amour ?',
        a: 'L’Empereur signifie en amour la stabilité, l’engagement et la protection. Quatrième arcane majeur du Tarot de Marseille, il incarne un partenaire fiable et loyal, et une relation sérieuse bâtie sur des bases solides. Il annonce souvent un engagement qui s’officialise ou une belle sécurité affective, loin des passions éphémères. Quand L’Empereur apparaît, il rassure : le couple repose sur des fondations durables, ou une stabilité amoureuse est à venir.',
      },
      {
        q: 'L’Empereur annonce-t-il un engagement sérieux ?',
        a: 'Oui, L’Empereur est l’une des cartes de l’engagement sérieux en amour. À l’endroit, il annonce une relation stable et durable, un partenaire fiable et responsable, souvent une union qui s’officialise : mariage, vie commune, projet structurant. Il privilégie la sécurité et la loyauté au frisson passager. C’est un excellent présage pour qui cherche une relation solide et engagée plutôt qu’une simple aventure.',
      },
      {
        q: 'L’Empereur est-il un oui en amour ?',
        a: 'L’Empereur est un oui rassurant en amour, orienté vers la stabilité. À l’endroit, il répond favorablement aux questions sur l’engagement, la fiabilité du partenaire et la solidité du couple : les fondations sont bonnes. Renversé, la réponse se nuance : rigidité, contrôle ou peur de l’engagement viennent brouiller la sécurité. Dans l’ensemble, c’est une carte positive pour construire une relation durable.',
      },
      {
        q: 'Que veut dire L’Empereur renversé en amour ?',
        a: 'Renversé, L’Empereur révèle la rigidité, l’autoritarisme ou un besoin de contrôle excessif dans la relation. Un partenaire peut se montrer dominateur ou inflexible, ou bien la peur de l’engagement se cache derrière une froideur. La structure qui devait protéger étouffe alors. L’Empereur inversé invite à rééquilibrer les rapports de force et à conjuguer l’autorité avec la tendresse, pour que la sécurité ne devienne pas une prison.',
      },
    ],
  },
  {
    slug: 'le-pape',
    name: 'Le Pape',
    emoji: '📿',
    arcane: 'Arcane majeur V',
    ouiNon: 'Oui',
    answerCapsule:
      'Le Pape est la carte du mariage et de l’union sacrée dans le tarot amour. Cinquième arcane majeur du Tarot de Marseille, il incarne l’engagement officiel, la tradition, la bénédiction et les valeurs partagées. Tiré en amour, Le Pape est un oui empreint de sérieux : il annonce un mariage, une union durable, ou une relation fondée sur des valeurs et un respect profonds. À l’endroit, il représente l’engagement sincère, la fidélité et l’approbation de l’entourage ; renversé, il signale un conformisme pesant, une union par convention ou un décalage de valeurs. Pour un célibataire, il annonce une relation sérieuse et officielle ; pour un couple, une étape d’engagement. Le Pape invite à unir les cœurs sur des bases solides et partagées. Une consultation de voyance amoureuse peut préciser l’union qu’il annonce.',
    signification:
      'En amour, Le Pape symbolise l’engagement officiel, l’union sacrée et les valeurs partagées. Il représente le mariage, la relation reconnue et bénie, celle qui s’inscrit dans la durée et le respect mutuel. Le cinquième arcane majeur incarne aussi la fidélité, la spiritualité du lien et l’importance de partager les mêmes principes. Quand Le Pape apparaît dans un tirage sentimental, il annonce souvent une union sérieuse ou un engagement qui se formalise. C’est une carte de couple traditionnel et solide, fondé sur la confiance, le respect et des valeurs communes plutôt que sur la seule passion.',
    endroit:
      'À l’endroit, Le Pape est un signe favorable d’union sérieuse en amour. Il annonce un mariage, un engagement officiel ou une relation durable fondée sur des valeurs partagées. Cette position parle de fidélité, de respect mutuel et souvent de l’approbation de l’entourage familial. La carte invite à unir les cœurs de façon sincère et durable : le lien s’inscrit dans la stabilité et la reconnaissance.',
    renverse:
      'Renversé, Le Pape révèle un conformisme pesant ou une union par convention plutôt que par amour. Vous restez peut-être dans une relation pour respecter les apparences, la tradition ou la pression familiale. Cette position peut aussi signaler un décalage de valeurs, une infidélité ou un rejet des cadres établis. Le Pape inversé invite à s’interroger sur la sincérité de l’engagement : est-il choisi par amour ou subi par convention ?',
    celibataire:
      'Pour un célibataire, Le Pape annonce une relation sérieuse et officielle plutôt qu’une aventure. Vous pourriez rencontrer une personne partageant vos valeurs, avec qui construire une union durable et reconnue. La carte invite à privilégier la profondeur et le respect mutuel : ce qui se prépare n’est pas un flirt mais un lien fondé pour durer.',
    couple:
      'Pour un couple, Le Pape annonce une étape d’engagement : fiançailles, mariage ou officialisation de l’union. La relation gagne en sérieux et en reconnaissance, souvent avec la bénédiction de l’entourage. La carte invite à sceller le lien sur des bases de respect, de fidélité et de valeurs partagées, les fondations d’un couple traditionnel et solide.',
    ex:
      'Concernant un ex, Le Pape évoque une relation qui reposait sur des valeurs sérieuses, voire un projet d’union. Il peut suggérer une réconciliation sur des bases engagées et respectueuses. Si la carte apparaît, elle indique un lien fondé sur le sérieux plutôt que sur la seule passion. Renversé, elle interroge : cette relation valait-elle par amour, ou seulement par convention et habitude ?',
    faq: [
      {
        q: 'Que signifie Le Pape en amour ?',
        a: 'Le Pape signifie en amour l’engagement officiel, l’union sacrée et les valeurs partagées. Cinquième arcane majeur du Tarot de Marseille, il incarne le mariage, la relation durable et reconnue, fondée sur le respect et la fidélité. Il annonce souvent une union sérieuse ou un engagement qui se formalise. C’est une carte de couple traditionnel et solide, bâti sur la confiance et des principes communs plutôt que sur la seule passion éphémère.',
      },
      {
        q: 'Le Pape annonce-t-il un mariage ?',
        a: 'Oui, Le Pape est l’une des principales cartes du mariage dans le tarot amour. À l’endroit, il annonce une union officielle, un engagement sérieux et durable, souvent béni par l’entourage familial. Il symbolise la relation reconnue et fondée sur des valeurs partagées. Entouré de cartes favorables comme Les Amoureux ou Le Soleil, cette promesse d’union se renforce nettement. C’est un excellent présage pour un projet de mariage.',
      },
      {
        q: 'Le Pape est-il un oui en amour ?',
        a: 'Le Pape est un oui sérieux en amour, tourné vers l’engagement durable. À l’endroit, il répond favorablement aux questions sur le mariage, l’union officielle et la solidité du couple : le lien est fondé pour durer. Renversé, la réponse se nuance : conformisme, union par convention ou décalage de valeurs viennent brouiller la sincérité. Dans l’ensemble, c’est une carte positive pour un couple qui s’engage sur des bases solides.',
      },
      {
        q: 'Que veut dire Le Pape renversé en amour ?',
        a: 'Renversé, Le Pape révèle un conformisme pesant ou une union par convention plutôt que par amour. On reste parfois dans une relation pour les apparences, la tradition ou la pression familiale. Cette position peut aussi signaler un décalage de valeurs ou une infidélité. Le Pape inversé invite à s’interroger sur la sincérité de l’engagement : est-il choisi librement par amour, ou subi par habitude et convention sociale ?',
      },
    ],
  },
  {
    slug: 'le-chariot',
    name: 'Le Chariot',
    emoji: '🏇',
    arcane: 'Arcane majeur VII',
    ouiNon: 'Oui',
    answerCapsule:
      'Le Chariot est la carte de l’avancée et de la victoire dans le tarot amour. Septième arcane majeur du Tarot de Marseille, il incarne le mouvement, la détermination et le progrès vers un objectif. Tiré en amour, Le Chariot est un oui dynamique : il annonce une relation qui progresse, un obstacle surmonté ou une conquête amoureuse réussie par la volonté. À l’endroit, il représente l’élan, la maîtrise et l’avancée triomphante du couple ; renversé, il signale une perte de contrôle, une stagnation ou des efforts dispersés. Pour un célibataire, il annonce une conquête et de belles avancées ; pour un couple, une progression vers un but commun. Le Chariot invite à avancer avec détermination vers ce que l’on désire. Une consultation de voyance amoureuse peut préciser la direction qu’il indique.',
    signification:
      'En amour, Le Chariot symbolise l’avancée, la détermination et la victoire par la volonté. Il représente le mouvement en avant : une relation qui progresse, un obstacle que l’on franchit, une conquête que l’on mène à bien par sa maîtrise et son élan. Le septième arcane majeur incarne aussi l’affirmation de soi et la capacité à diriger sa vie sentimentale plutôt que de la subir. Quand Le Chariot apparaît dans un tirage amoureux, il annonce le succès d’une démarche, une avancée décisive ou la conquête d’un cœur. C’est une carte d’action et de progrès triomphant.',
    endroit:
      'À l’endroit, Le Chariot est un signe favorable d’avancée en amour. Il annonce une relation qui progresse, un obstacle surmonté ou une conquête réussie grâce à la détermination. Cette position parle d’élan, de maîtrise et de victoire par la volonté. La carte invite à avancer avec confiance vers ce que l’on désire : les efforts portent leurs fruits et le couple ou la conquête avance dans la bonne direction.',
    renverse:
      'Renversé, Le Chariot révèle une perte de contrôle, une stagnation ou des efforts dispersés. Vous tirez peut-être dans des directions opposées, ou l’avancée amoureuse patine faute d’unité et de détermination. Cette position peut aussi signaler de la précipitation, un excès de volonté qui brusque l’autre, ou un projet qui s’enlise. Le Chariot inversé invite à retrouver une direction claire et à avancer de façon coordonnée plutôt que dispersée.',
    celibataire:
      'Pour un célibataire, Le Chariot annonce une conquête réussie et de belles avancées. Votre détermination et votre assurance séduisent : si vous voulez conquérir un cœur, le moment est propice pour agir avec élan. La carte invite à prendre les rênes de votre vie amoureuse et à avancer vers ce que vous désirez sans hésiter.',
    couple:
      'Pour un couple, Le Chariot annonce une progression vers un but commun. La relation avance, un projet se concrétise, un obstacle est franchi ensemble. La carte invite à unir vos volontés et à avancer dans la même direction : c’est cette coordination qui mène le couple à la victoire. Veillez toutefois à ne pas foncer au point d’oublier la douceur.',
    ex:
      'Concernant un ex, Le Chariot suggère qu’une reconquête est possible par la détermination, mais qu’elle demande une action maîtrisée plutôt qu’une course effrénée. Si la carte apparaît, elle indique que l’avancée vers cette personne peut réussir si vous gardez le cap avec assurance. Renversé, elle avertit contre la précipitation ou un acharnement qui risque de brusquer et de faire fuir.',
    faq: [
      {
        q: 'Que signifie Le Chariot en amour ?',
        a: 'Le Chariot signifie en amour l’avancée, la détermination et la victoire par la volonté. Septième arcane majeur du Tarot de Marseille, il annonce une relation qui progresse, un obstacle surmonté ou une conquête réussie grâce à l’élan et à la maîtrise de soi. Il incarne le mouvement en avant et l’affirmation de sa direction sentimentale. Quand Le Chariot apparaît, il annonce le succès d’une démarche amoureuse menée avec assurance et détermination.',
      },
      {
        q: 'Le Chariot annonce-t-il une avancée dans la relation ?',
        a: 'Oui, Le Chariot est par excellence la carte de l’avancée en amour. À l’endroit, il annonce une relation qui progresse, un projet qui se concrétise ou un obstacle franchi grâce à la volonté commune. Il indique le mouvement, l’élan et la victoire de la détermination. Pour un couple qui avance vers un but partagé, c’est un excellent signe : les efforts coordonnés mènent au succès et la relation progresse dans la bonne direction.',
      },
      {
        q: 'Le Chariot est-il un oui en amour ?',
        a: 'Le Chariot est un oui dynamique en amour, porté par l’action. À l’endroit, il répond favorablement aux questions sur la conquête, la progression du couple et le succès d’une démarche : la victoire est à portée grâce à la détermination. Renversé, la réponse se nuance : perte de contrôle, dispersion ou précipitation freinent l’avancée. Dans l’ensemble, c’est une carte encourageante qui récompense la volonté et la maîtrise.',
      },
      {
        q: 'Que veut dire Le Chariot renversé en amour ?',
        a: 'Renversé, Le Chariot révèle une perte de contrôle, une stagnation ou des efforts dispersés en amour. Les partenaires tirent parfois dans des directions opposées, ou la relation patine faute d’unité. Cette position peut aussi signaler de la précipitation ou un excès de volonté qui brusque l’autre. Le Chariot inversé invite à retrouver une direction claire et à avancer de façon coordonnée et patiente plutôt que dispersée ou forcée.',
      },
    ],
  },
  {
    slug: 'la-justice',
    name: 'La Justice',
    emoji: '⚖️',
    arcane: 'Arcane majeur VIII',
    ouiNon: 'Nuancé',
    answerCapsule:
      'La Justice est la carte de l’équilibre et de la vérité dans le tarot amour. Huitième arcane majeur du Tarot de Marseille, elle incarne l’équité, la responsabilité, la loyauté et le juste retour des choses. Tirée en amour, La Justice n’est ni un oui ni un non simple : elle invite à la lucidité et à l’honnêteté, et récompense ou sanctionne selon les actes. À l’endroit, elle annonce une relation équilibrée, un engagement formalisé ou une situation qui se clarifie avec justice ; renversée, elle signale un déséquilibre, une injustice ou un manque d’honnêteté. Pour un célibataire, elle appelle une relation équitable ; pour un couple, un rééquilibrage nécessaire. La Justice rappelle que l’on récolte en amour ce que l’on sème. Une consultation de voyance amoureuse peut éclairer l’équilibre de votre situation.',
    signification:
      'En amour, La Justice symbolise l’équilibre, la vérité et la responsabilité. Elle rappelle que toute relation repose sur un juste échange, et que nos actes ont des conséquences : on récolte ce que l’on a semé. Le huitième arcane majeur incarne aussi l’engagement formel, contrat, mariage, décision assumée, et l’importance de l’honnêteté et de l’équité entre partenaires. Quand La Justice apparaît dans un tirage sentimental, elle invite à la lucidité : elle éclaire les déséquilibres, appelle à la sincérité et annonce souvent une clarification ou une décision juste. C’est une carte de vérité et de responsabilité affective.',
    endroit:
      'À l’endroit, La Justice annonce une relation équilibrée et honnête, ou une situation qui se clarifie avec équité. Elle peut indiquer un engagement formalisé, union, décision assumée, pris en toute lucidité. La carte parle de loyauté, de responsabilité et de juste échange entre partenaires. Elle invite à la sincérité et récompense les relations fondées sur l’équité : ce qui est juste et équilibré trouve sa reconnaissance.',
    renverse:
      'Renversée, La Justice révèle un déséquilibre, une injustice ou un manque d’honnêteté dans la relation. L’un donne plus que l’autre, une décision est biaisée, ou des non-dits faussent le lien. Cette position peut aussi signaler les conséquences d’actes passés qui se rattrapent. La Justice inversée invite à rétablir l’équité et la vérité : tant que le déséquilibre ou le mensonge persiste, la relation ne peut trouver son harmonie.',
    celibataire:
      'Pour un célibataire, La Justice appelle une relation équitable et sincère, fondée sur le respect mutuel et l’honnêteté. Elle invite à clarifier ce que vous attendez vraiment et à ne pas accepter de déséquilibre. La carte peut aussi rappeler que votre vie amoureuse reflète vos actes : en semant l’équité et la sincérité, vous attirez une rencontre juste et loyale.',
    couple:
      'Pour un couple, La Justice annonce un rééquilibrage nécessaire ou une clarification. Il peut être temps d’ajuster ce qui est injuste, répartition, engagement, vérité, pour retrouver l’harmonie. La carte peut aussi annoncer une décision formelle prise ensemble. Elle invite à l’honnêteté et à l’équité : un couple juste et équilibré est un couple qui dure.',
    ex:
      'Concernant un ex, La Justice invite à un regard lucide et honnête sur ce qui s’est passé. Elle peut annoncer une clarification, une mise à plat des responsabilités ou un juste retour des choses. Si la carte apparaît, elle rappelle que la vérité et l’équité doivent primer sur les émotions. Renversée, elle signale un déséquilibre ou une injustice non résolue qu’il faudra affronter avant d’envisager quoi que ce soit.',
    faq: [
      {
        q: 'Que signifie La Justice en amour ?',
        a: 'La Justice signifie en amour l’équilibre, la vérité et la responsabilité. Huitième arcane majeur du Tarot de Marseille, elle rappelle que toute relation repose sur un juste échange et que nos actes ont des conséquences : on récolte ce que l’on sème. Elle incarne aussi l’engagement formel et l’importance de l’honnêteté entre partenaires. Quand La Justice apparaît, elle invite à la lucidité et annonce souvent une clarification ou une décision juste.',
      },
      {
        q: 'La Justice est-elle une carte positive en amour ?',
        a: 'La Justice est une carte nuancée : elle n’est ni bonne ni mauvaise en soi, elle rend selon les actes. À l’endroit, elle est favorable aux relations équilibrées et sincères, qu’elle récompense, et peut annoncer un engagement formalisé. Renversée, elle révèle un déséquilibre ou une injustice à corriger. Elle invite avant tout à l’honnêteté : dans une relation juste et loyale, La Justice est un excellent présage ; dans un lien faussé, elle appelle à la vérité.',
      },
      {
        q: 'La Justice annonce-t-elle un engagement ou un mariage ?',
        a: 'La Justice peut annoncer un engagement formel, car elle symbolise le contrat, la décision assumée et l’équilibre officialisé, ce qui inclut le mariage ou une union légale. À l’endroit, dans un contexte favorable, elle indique une relation équilibrée prête à se formaliser en toute lucidité. Ce n’est pas systématique : elle parle d’abord d’équité et de vérité. Mais associée à des cartes d’union, elle soutient l’idée d’un engagement juste et réfléchi.',
      },
      {
        q: 'Que veut dire La Justice renversée en amour ?',
        a: 'Renversée, La Justice révèle un déséquilibre, une injustice ou un manque d’honnêteté dans la relation. L’un donne plus que l’autre, une décision est biaisée, ou des non-dits faussent le lien. Elle peut aussi signaler les conséquences d’actes passés qui se rattrapent. La Justice inversée invite à rétablir l’équité et la vérité : tant que le déséquilibre ou le mensonge persiste, la relation ne peut trouver son harmonie.',
      },
    ],
  },
  {
    slug: 'le-pendu',
    name: 'Le Pendu',
    emoji: '🙃',
    arcane: 'Arcane majeur XII',
    ouiNon: 'Nuancé',
    answerCapsule:
      'Le Pendu est la carte de l’attente et du lâcher-prise dans le tarot amour. Douzième arcane majeur du Tarot de Marseille, il incarne la suspension, le sacrifice, le changement de perspective et la patience imposée. Tiré en amour, Le Pendu n’est ni un oui ni un non : il annonce une situation en suspens, une relation qui n’avance pas encore, un temps d’attente nécessaire. À l’endroit, il invite au lâcher-prise et à voir les choses autrement pour débloquer la situation ; renversé, il signale une stagnation stérile, un sacrifice inutile ou un refus de lâcher prise. Pour un célibataire, il appelle une pause avant de rencontrer ; pour un couple, un temps de recul salutaire. Le Pendu rappelle que forcer ne sert à rien : parfois, il faut attendre et changer de regard. Une consultation de voyance amoureuse peut éclairer cette pause.',
    signification:
      'En amour, Le Pendu symbolise la suspension, l’attente et le lâcher-prise. Il représente ces moments où la situation sentimentale est comme figée, où rien n’avance malgré les efforts, et où la seule issue est d’accepter la pause et de changer de point de vue. Le douzième arcane majeur parle aussi de sacrifice consenti et de la nécessité de renoncer à vouloir tout contrôler. Quand Le Pendu apparaît dans un tirage amoureux, il invite à la patience et à voir la situation sous un autre angle : c’est souvent en lâchant prise, et non en forçant, que le blocage finit par se dénouer.',
    endroit:
      'À l’endroit, Le Pendu invite au lâcher-prise et au changement de perspective en amour. La situation est en suspens, mais cette pause a un sens : en cessant de forcer et en voyant les choses autrement, vous préparez le déblocage. La carte parle d’acceptation, de patience et parfois d’un sacrifice consenti pour un bien plus grand. Elle rappelle que tout ne se résout pas par l’action : parfois, il faut savoir attendre et changer de regard.',
    renverse:
      'Renversé, Le Pendu révèle une stagnation stérile ou un refus de lâcher prise. Vous vous accrochez à une situation figée, vous vous sacrifiez inutilement, ou vous refusez de voir les choses autrement, prolongeant un blocage sans issue. Cette position peut aussi signaler l’impatience ou le sentiment d’être victime. Le Pendu inversé invite à sortir de l’immobilisme : soit en agissant enfin, soit en acceptant vraiment de lâcher ce qui vous retient.',
    celibataire:
      'Pour un célibataire, Le Pendu appelle une pause avant la rencontre. Ce n’est pas le moment de forcer ou de courir après l’amour, mais de prendre du recul, de vous recentrer et de changer votre regard sur vos attentes. La carte invite à la patience : c’est souvent en lâchant prise et en cessant de chercher que la bonne rencontre finit par se présenter.',
    couple:
      'Pour un couple, Le Pendu annonce un temps de recul salutaire ou une situation en suspens. La relation semble figée, mais cette pause peut permettre de prendre du recul et de voir les choses autrement. La carte invite à la patience et parfois à un sacrifice ou un compromis pour débloquer la situation. Évitez de forcer : c’est en changeant de perspective que le couple retrouvera son mouvement.',
    ex:
      'Concernant un ex, Le Pendu évoque une situation en suspens, ni vraiment terminée ni relancée. Il invite à la patience et au lâcher-prise plutôt qu’à l’action : ce n’est pas le moment de forcer un retour. La carte suggère de prendre du recul et de voir la relation passée sous un autre angle. Renversé, elle avertit contre un attachement stérile à une situation figée qu’il vaudrait mieux accepter de lâcher.',
    faq: [
      {
        q: 'Que signifie Le Pendu en amour ?',
        a: 'Le Pendu signifie en amour la suspension, l’attente et le lâcher-prise. Douzième arcane majeur du Tarot de Marseille, il annonce une situation sentimentale en suspens, une relation qui n’avance pas encore, un temps de patience nécessaire. Il invite à cesser de forcer et à changer de perspective pour débloquer les choses. Quand Le Pendu apparaît, il rappelle que tout ne se résout pas par l’action : parfois, c’est en acceptant la pause que le blocage finit par se dénouer.',
      },
      {
        q: 'Le Pendu annonce-t-il une attente en amour ?',
        a: 'Oui, Le Pendu est par excellence la carte de l’attente et du suspens en amour. Il indique que la situation est temporairement figée et que rien n’avancera par la force. La carte invite à la patience et au lâcher-prise : ce temps d’attente n’est pas vide, il prépare un changement. En acceptant de voir les choses autrement plutôt qu’en s’acharnant, on favorise le déblocage. C’est une invitation à faire confiance au bon moment.',
      },
      {
        q: 'Le Pendu est-il un oui ou un non en amour ?',
        a: 'Le Pendu n’est ni un oui ni un non : c’est une carte de suspens qui répond « pas maintenant ». Elle indique que la situation est en attente et qu’il faut lâcher prise plutôt que forcer une réponse. À l’endroit, cette pause est constructive et prépare un déblocage par le changement de perspective. Renversée, elle signale une stagnation stérile à dépasser. Dans tous les cas, Le Pendu invite à la patience avant qu’une réponse claire n’émerge.',
      },
      {
        q: 'Que veut dire Le Pendu renversé en amour ?',
        a: 'Renversé, Le Pendu révèle une stagnation stérile ou un refus de lâcher prise. On s’accroche à une situation figée, on se sacrifie inutilement, ou on refuse de voir les choses autrement, prolongeant un blocage sans issue. Cette position peut aussi traduire l’impatience ou un sentiment de victime. Le Pendu inversé invite à sortir de l’immobilisme : soit en agissant enfin, soit en acceptant réellement de lâcher ce qui retient et empêche d’avancer.',
      },
    ],
  },
  {
    slug: 'le-mat',
    name: 'Le Mat',
    emoji: '🚶',
    arcane: 'Arcane sans numéro',
    ouiNon: 'Nuancé',
    answerCapsule:
      'Le Mat est la carte de la liberté et du nouveau départ dans le tarot amour. Arcane sans numéro du Tarot de Marseille, il incarne la spontanéité, l’aventure et le saut vers l’inconnu. Tiré en amour, Le Mat n’est ni un oui ni un non : il annonce une aventure sentimentale imprévue, un besoin de liberté ou un nouveau chemin à emprunter sans garantie. À l’endroit, il invite à suivre son cœur avec audace et à s’ouvrir à l’inattendu ; renversé, il signale l’instabilité, la fuite ou la peur de l’engagement. Pour un célibataire, il annonce une rencontre spontanée et libre ; pour un couple, un besoin de renouveau ou d’air. Le Mat rappelle que l’amour est parfois un saut de foi. Une consultation de voyance amoureuse peut éclairer où ce nouveau chemin vous mène.',
    signification:
      'En amour, Le Mat symbolise la liberté, la spontanéité et le saut vers l’inconnu. Il représente ces moments où l’on suit son cœur sans plan ni garantie, où une aventure sentimentale imprévue s’offre à nous. Cet arcane sans numéro, à la fois premier et dernier du Tarot de Marseille, incarne l’insouciance, le voyage et le refus des cadres. Il parle de fraîcheur amoureuse mais aussi d’instabilité et de peur de se poser. Quand Le Mat apparaît dans un tirage sentimental, il invite à l’audace et à l’ouverture, tout en rappelant qu’un amour libre demande aussi, un jour, de choisir de rester.',
    endroit:
      'À l’endroit, Le Mat invite à suivre son cœur avec audace et spontanéité. Il annonce une aventure sentimentale imprévue, une rencontre libre ou un nouveau chemin à emprunter sans trop réfléchir. La carte parle de fraîcheur, d’ouverture à l’inattendu et de foi en la vie. Elle encourage à oser l’inconnu en amour : parfois, c’est en lâchant le contrôle et en sautant le pas que naissent les plus belles histoires.',
    renverse:
      'Renversé, Le Mat révèle l’instabilité, la fuite ou la peur de l’engagement. Vous papillonnez sans vous poser, vous fuyez les responsabilités affectives, ou vous prenez des risques inconsidérés en amour. Cette position peut aussi signaler une immaturité sentimentale ou un refus de choisir. Le Mat inversé invite à distinguer la liberté saine de la fuite : à un moment, aimer demande de s’ancrer plutôt que de toujours repartir.',
    celibataire:
      'Pour un célibataire, Le Mat annonce une rencontre spontanée et libre, souvent là où on ne l’attendait pas. Une histoire légère et pleine de fraîcheur peut naître si vous osez sortir de vos habitudes. La carte invite à l’ouverture et à l’audace : suivez votre élan sans trop calculer, car cette aventure imprévue peut vous surprendre agréablement.',
    couple:
      'Pour un couple, Le Mat annonce un besoin de renouveau, de liberté ou d’air frais. La relation gagnerait à sortir de la routine par une aventure, un voyage ou un projet spontané. La carte invite à raviver la fraîcheur du lien, tout en veillant à ce que le besoin de liberté de l’un ne devienne pas une fuite de l’engagement.',
    ex:
      'Concernant un ex, Le Mat évoque un lien marqué par la liberté ou l’imprévu, parfois une histoire jamais vraiment posée. Il peut suggérer un nouveau départ spontané, sans reprendre le passé à l’identique. Si la carte apparaît, elle invite à l’ouverture sans attentes rigides. Renversée, elle avertit contre une relation instable ou une personne fuyante, incapable de s’engager durablement.',
    faq: [
      {
        q: 'Que signifie Le Mat en amour ?',
        a: 'Le Mat signifie en amour la liberté, la spontanéité et le saut vers l’inconnu. Arcane sans numéro du Tarot de Marseille, il annonce une aventure sentimentale imprévue, un besoin de liberté ou un nouveau chemin à emprunter sans garantie. Il invite à suivre son cœur avec audace, tout en rappelant les risques d’instabilité. Quand Le Mat apparaît, l’amour se vit comme un saut de foi : une belle histoire est possible si l’on ose l’inattendu.',
      },
      {
        q: 'Le Mat annonce-t-il une aventure amoureuse ?',
        a: 'Oui, Le Mat est souvent la carte de l’aventure sentimentale imprévue et de la rencontre spontanée. Il annonce une histoire libre, fraîche et inattendue, qui naît quand on lâche le contrôle. Pour un célibataire audacieux, c’est un signe d’ouverture. La carte rappelle toutefois que cette liberté peut manquer d’ancrage : l’aventure est belle, mais elle demandera un jour de choisir si l’on veut la transformer en histoire durable.',
      },
      {
        q: 'Le Mat est-il un oui ou un non en amour ?',
        a: 'Le Mat est une carte nuancée, ni oui ni non franc. Il répond « suivez votre cœur sans garantie » : l’issue dépend de votre audace et des circonstances. À l’endroit, il encourage à oser une aventure et à s’ouvrir à l’inattendu, ce qui est plutôt positif. Renversé, il signale instabilité et fuite de l’engagement. Le Mat invite à sauter le pas en conscience, en sachant qu’un amour libre demande aussi, tôt ou tard, de se poser.',
      },
      {
        q: 'Que veut dire Le Mat renversé en amour ?',
        a: 'Renversé, Le Mat révèle l’instabilité, la fuite ou la peur de l’engagement. On papillonne sans se poser, on fuit les responsabilités affectives, ou on prend des risques inconsidérés. Cette position peut aussi traduire une immaturité sentimentale ou un refus de choisir. Le Mat inversé invite à distinguer la liberté saine de la fuite : à un moment, aimer vraiment demande de s’ancrer plutôt que de toujours repartir vers un ailleurs.',
      },
    ],
  },
  {
    slug: 'la-papesse',
    name: 'La Papesse',
    emoji: '📜',
    arcane: 'Arcane majeur II',
    ouiNon: 'Nuancé',
    answerCapsule:
      'La Papesse est la carte du mystère et de l’intuition dans le tarot amour. Deuxième arcane majeur du Tarot de Marseille, elle incarne le secret, la patience, la connaissance intérieure et les sentiments non exprimés. Tirée en amour, La Papesse n’est ni un oui ni un non : elle invite à attendre, à écouter son intuition et à laisser mûrir ce qui n’est pas encore dit. À l’endroit, elle révèle des sentiments cachés, une relation secrète ou platonique, ou une vérité qui n’est pas prête à éclore ; renversée, elle signale le refoulement, la froideur ou des secrets qui pèsent. Pour un célibataire, elle conseille la patience ; pour un couple, d’écouter le non-dit. La Papesse rappelle que certaines choses se dévoilent en leur temps. Une consultation de voyance amoureuse peut lever le voile sur votre situation.',
    signification:
      'En amour, La Papesse symbolise le mystère, l’intuition et les sentiments encore secrets. Elle représente ce qui n’est pas dit, ce qui mûrit dans l’ombre, ce que l’on ressent sans oser l’exprimer. Le deuxième arcane majeur incarne la patience, la sagesse intérieure et la connaissance qui se dévoile lentement. Elle apparaît souvent quand une relation est secrète, platonique, ou quand des sentiments profonds restent tus. La Papesse invite à écouter son intuition plutôt qu’à forcer les choses, et à respecter le temps nécessaire. C’est une carte de réserve et de profondeur, qui préfère le silence habité à la précipitation.',
    endroit:
      'À l’endroit, La Papesse révèle des sentiments cachés ou une relation qui se vit dans la discrétion. Elle peut indiquer un amour secret, platonique, ou des émotions profondes que l’on n’exprime pas encore. La carte invite à la patience et à l’écoute de son intuition : ce qui doit se révéler le fera en son temps. Elle rappelle que certaines vérités amoureuses mûrissent dans le silence avant d’éclore.',
    renverse:
      'Renversée, La Papesse révèle le refoulement, la froideur ou des secrets qui pèsent. Des sentiments restent bloqués, une vérité est dissimulée, ou l’on se coupe de son intuition et de ses émotions. Cette position peut aussi signaler une relation cachée qui devient un fardeau, ou une distance émotionnelle glaçante. La Papesse inversée invite à libérer ce qui est tu : le silence, quand il devient mensonge ou déni, finit par étouffer l’amour.',
    celibataire:
      'Pour un célibataire, La Papesse conseille la patience et l’écoute intérieure. Ce n’est pas le moment de forcer une rencontre, mais de laisser mûrir ce qui se prépare en coulisses. Un sentiment peut naître discrètement, ou une personne vous observe sans se dévoiler. La carte invite à faire confiance à votre intuition : l’amour se révélera en son temps, sans qu’il soit besoin de le brusquer.',
    couple:
      'Pour un couple, La Papesse invite à écouter le non-dit et l’intuition. Des sentiments ou des besoins profonds ne sont peut-être pas exprimés, de part et d’autre. La carte encourage à créer un espace de confidence et de silence habité pour laisser émerger ce qui reste tu. Elle rappelle que la profondeur d’un couple se nourrit aussi de ce qui se ressent sans toujours se dire.',
    ex:
      'Concernant un ex, La Papesse évoque des sentiments qui subsistent en secret, non exprimés de part et d’autre. Elle invite à la patience et à l’écoute de votre intuition plutôt qu’à l’action précipitée. Si la carte apparaît, elle suggère que quelque chose mûrit dans le silence et se révélera en son temps. Renversée, elle signale des non-dits ou des secrets qui pèsent et qu’il faudra éclaircir avant tout rapprochement.',
    faq: [
      {
        q: 'Que signifie La Papesse en amour ?',
        a: 'La Papesse signifie en amour le mystère, l’intuition et les sentiments encore secrets. Deuxième arcane majeur du Tarot de Marseille, elle représente ce qui n’est pas dit, ce qui mûrit dans l’ombre, les émotions profondes que l’on n’ose exprimer. Elle apparaît souvent pour une relation secrète ou platonique. La Papesse invite à la patience et à écouter son intuition : certaines vérités amoureuses se dévoilent lentement, en leur temps, sans qu’on puisse les forcer.',
      },
      {
        q: 'La Papesse annonce-t-elle un amour secret ?',
        a: 'Oui, La Papesse est l’une des cartes de l’amour secret ou non exprimé dans le tarot. Elle peut révéler une relation cachée, un amour platonique, ou des sentiments profonds que l’on garde pour soi. Elle indique que quelque chose se vit ou mûrit dans la discrétion. La carte invite à écouter son intuition pour percevoir ces sentiments tus, tout en respectant le temps nécessaire avant qu’ils ne se dévoilent au grand jour.',
      },
      {
        q: 'La Papesse est-elle un oui ou un non en amour ?',
        a: 'La Papesse est une carte nuancée, qui répond « patience, écoutez votre intuition ». Elle n’affirme ni oui ni non : elle indique que la situation n’est pas encore prête à se dévoiler et qu’il faut laisser mûrir. À l’endroit, elle est plutôt positive, des sentiments profonds existent, cachés. Renversée, elle signale refoulement ou secrets pesants. Dans tous les cas, La Papesse invite à faire confiance au temps plutôt qu’à forcer une réponse.',
      },
      {
        q: 'Que veut dire La Papesse renversée en amour ?',
        a: 'Renversée, La Papesse révèle le refoulement, la froideur ou des secrets qui pèsent. Des sentiments restent bloqués, une vérité est dissimulée, ou l’on se coupe de son intuition et de ses émotions. Cette position peut signaler une relation cachée devenue un fardeau, ou une distance émotionnelle glaçante. La Papesse inversée invite à libérer ce qui est tu : le silence, quand il devient déni ou mensonge, finit par étouffer l’amour au lieu de le protéger.',
      },
    ],
  },
  {
    slug: 'l-ermite',
    name: 'L’Ermite',
    emoji: '🕯️',
    arcane: 'Arcane majeur IX',
    ouiNon: 'Nuancé',
    answerCapsule:
      'L’Ermite est la carte de l’introspection et de la solitude dans le tarot amour. Neuvième arcane majeur du Tarot de Marseille, il incarne le recul, la sagesse intérieure, la patience et le besoin de solitude. Tiré en amour, L’Ermite n’est pas un oui : il annonce un temps de retrait, une introspection nécessaire ou une distance dans la relation. À l’endroit, il invite à se recentrer, à réfléchir à ses vrais besoins avant d’avancer ; renversé, il signale un isolement excessif, une solitude subie ou une peur de s’engager. Pour un célibataire, il appelle un temps pour soi avant la rencontre ; pour un couple, un besoin d’espace ou de recul. L’Ermite rappelle que se connaître soi-même précède un amour juste. Une consultation de voyance amoureuse peut éclairer ce temps de retrait.',
    signification:
      'En amour, L’Ermite symbolise l’introspection, la solitude et la sagesse intérieure. Il représente ces périodes où l’on a besoin de se retirer, de réfléchir à ses vrais désirs et de faire le point loin du bruit des relations. Le neuvième arcane majeur incarne la patience, la maturité et la quête de vérité personnelle avant de s’engager. Il apparaît souvent quand une distance s’installe, quand l’on cherche à se comprendre, ou quand la solitude devient nécessaire. L’Ermite invite à écouter sa lumière intérieure : c’est en se connaissant soi-même que l’on prépare un amour juste, plutôt qu’en fuyant dans une relation.',
    endroit:
      'À l’endroit, L’Ermite invite au recul et à l’introspection en amour. Il annonce un temps de retrait nécessaire pour réfléchir à ses vrais besoins, faire le point ou guérir avant d’avancer. La carte parle de sagesse, de patience et de connaissance de soi. Elle rappelle qu’un temps de solitude choisie n’est pas un échec mais une étape : c’est en se comprenant soi-même que l’on se prépare à aimer justement.',
    renverse:
      'Renversé, L’Ermite révèle un isolement excessif ou une solitude subie. Vous vous coupez des autres par peur d’être blessé, vous vous enfermez dans le retrait, ou vous fuyez l’engagement sous couvert d’indépendance. Cette position peut aussi signaler une solitude douloureuse dont on n’arrive pas à sortir. L’Ermite inversé invite à distinguer le recul sain de l’enfermement : à un moment, il faut rouvrir sa porte et laisser entrer l’autre.',
    celibataire:
      'Pour un célibataire, L’Ermite appelle un temps pour soi avant la rencontre. Ce n’est pas le moment de chercher activement l’amour, mais de vous recentrer, de guérir vos blessures et de clarifier ce que vous voulez vraiment. La carte invite à la patience : ce travail intérieur prépare une rencontre plus juste. En vous connaissant mieux, vous attirerez un amour plus aligné avec qui vous êtes.',
    couple:
      'Pour un couple, L’Ermite annonce un besoin d’espace ou de recul. L’un des partenaires, ou les deux, a besoin de solitude pour réfléchir, respirer ou se retrouver. Ce retrait n’est pas un rejet mais une étape de maturation. La carte invite à respecter ce besoin d’introspection sans le vivre comme un abandon : un couple sain fait aussi place à l’espace individuel de chacun.',
    ex:
      'Concernant un ex, L’Ermite conseille le recul et l’introspection plutôt que l’action. Ce n’est pas le moment de recontacter, mais de comprendre ce qui s’est passé et ce que vous voulez vraiment. La carte invite à un temps de solitude pour y voir clair. Renversé, elle avertit contre un isolement douloureux ou un repli sur le passé : à un moment, il faudra sortir de la solitude pour avancer, avec ou sans cette personne.',
    faq: [
      {
        q: 'Que signifie L’Ermite en amour ?',
        a: 'L’Ermite signifie en amour l’introspection, la solitude et la sagesse intérieure. Neuvième arcane majeur du Tarot de Marseille, il annonce un temps de retrait, une réflexion sur ses vrais besoins ou une distance dans la relation. Il invite à se recentrer et à se connaître avant d’avancer. Ce n’est pas une carte négative, mais une étape : L’Ermite rappelle qu’un amour juste se prépare en se comprenant soi-même, plutôt qu’en fuyant dans une relation.',
      },
      {
        q: 'L’Ermite annonce-t-il une rupture ou une solitude ?',
        a: 'L’Ermite annonce un temps de solitude ou de recul, mais pas nécessairement une rupture. Il indique un besoin d’introspection, un éloignement temporaire ou une pause pour réfléchir. Pour un couple, c’est souvent un besoin d’espace plutôt qu’une fin. Renversé, il peut signaler un isolement subi ou une solitude douloureuse. À l’endroit, cette solitude est choisie et constructive : une étape de maturation, non un échec sentimental définitif.',
      },
      {
        q: 'L’Ermite est-il un oui en amour ?',
        a: 'L’Ermite n’est pas un oui : il répond « prends du recul avant de décider ». C’est une carte de retrait et d’introspection qui invite à la patience plutôt qu’à l’action immédiate. À l’endroit, ce temps de solitude est sage et prépare un amour plus juste. Renversé, il signale un isolement excessif à dépasser. Pour une question sur un rapprochement immédiat, L’Ermite conseille d’attendre et de se connaître d’abord.',
      },
      {
        q: 'Que veut dire L’Ermite renversé en amour ?',
        a: 'Renversé, L’Ermite révèle un isolement excessif ou une solitude subie. On se coupe des autres par peur d’être blessé, on s’enferme dans le retrait, ou on fuit l’engagement sous couvert d’indépendance. Cette position peut aussi traduire une solitude douloureuse dont on ne parvient pas à sortir. L’Ermite inversé invite à distinguer le recul sain de l’enfermement : à un moment, il faut rouvrir sa porte et laisser à nouveau entrer l’autre.',
      },
    ],
  },
  {
    slug: 'la-force',
    name: 'La Force',
    emoji: '🦁',
    arcane: 'Arcane majeur XI',
    ouiNon: 'Oui',
    answerCapsule:
      'La Force est la carte du courage doux et de la maîtrise dans le tarot amour. Onzième arcane majeur du Tarot de Marseille, elle incarne la patience, la douceur qui dompte, la persévérance et le contrôle bienveillant des passions. Tirée en amour, La Force est un oui empreint de maîtrise : elle annonce une relation solide qui triomphe des obstacles par la patience et la tendresse, ou la capacité à apaiser les tensions avec douceur. À l’endroit, elle représente le courage tranquille, la confiance et la maîtrise de soi ; renversée, elle signale le doute, l’emportement ou un manque de maîtrise émotionnelle. Pour un célibataire, elle appelle à la confiance et à la patience ; pour un couple, à surmonter les épreuves avec douceur. La Force rappelle que la vraie puissance en amour est celle du cœur. Une consultation de voyance amoureuse peut préciser ce qu’elle annonce.',
    signification:
      'En amour, La Force symbolise le courage doux, la patience et la maîtrise bienveillante. Elle représente cette puissance intérieure qui dompte non par la brutalité mais par la tendresse, la capacité d’apaiser les conflits, de surmonter les épreuves et de tenir bon avec calme et confiance. Le onzième arcane majeur incarne aussi la maîtrise de ses propres passions et la persévérance dans la relation. Quand La Force apparaît dans un tirage sentimental, elle rassure : le couple a la force de traverser les difficultés, ou vous avez en vous le courage tranquille d’aimer sans crainte. C’est une carte de solidité douce et de confiance.',
    endroit:
      'À l’endroit, La Force est un signe favorable en amour. Elle annonce une relation qui surmonte les obstacles par la patience et la tendresse, ou la capacité à apaiser les tensions avec douceur. La carte parle de courage tranquille, de confiance en soi et de maîtrise bienveillante des passions. Elle rappelle que la vraie puissance amoureuse n’est pas dans la domination mais dans la douceur ferme : c’est ainsi que l’on dompte les difficultés et que l’on construit un lien solide.',
    renverse:
      'Renversée, La Force révèle le doute, l’emportement ou un manque de maîtrise émotionnelle. Vous vous laissez submerger par la jalousie, la colère ou la peur, ou vous manquez de confiance pour affronter les épreuves du couple. Cette position peut aussi signaler une force qui bascule en domination ou en contrôle. La Force inversée invite à retrouver le calme intérieur et la douceur : la maîtrise de soi, et non la brutalité, est la clé pour surmonter les tensions amoureuses.',
    celibataire:
      'Pour un célibataire, La Force appelle à la confiance et à la patience. Vous avez en vous le courage tranquille d’aimer et d’attirer une belle relation, sans forcer ni vous précipiter. La carte invite à croire en votre valeur et à aborder l’amour avec douceur et assurance. Cette force intérieure, faite de calme et de confiance, est précisément ce qui séduit et prépare une rencontre solide.',
    couple:
      'Pour un couple, La Force annonce la capacité à surmonter les épreuves avec douceur et patience. Les difficultés se traversent grâce à la maîtrise de soi, à la tendresse et à la persévérance plutôt qu’aux éclats. La carte invite à apaiser les tensions avec calme et à tenir bon ensemble : c’est cette force douce qui rend le lien indestructible face aux obstacles.',
    ex:
      'Concernant un ex, La Force suggère qu’une reconquête est possible par la patience, la douceur et la maîtrise de soi plutôt que par la pression. Si la carte apparaît, elle indique que vous avez la force intérieure d’apaiser les tensions et de reconstruire un lien avec calme. Renversée, elle avertit contre l’emportement ou le contrôle : c’est la douceur, non l’insistance, qui peut rouvrir un cœur.',
    faq: [
      {
        q: 'Que signifie La Force en amour ?',
        a: 'La Force signifie en amour le courage doux, la patience et la maîtrise bienveillante. Onzième arcane majeur du Tarot de Marseille, elle incarne la puissance qui dompte non par la brutalité mais par la tendresse : la capacité d’apaiser les conflits et de surmonter les épreuves avec calme. Elle annonce une relation solide qui triomphe des obstacles par la patience. Quand La Force apparaît, elle rassure : vous avez en vous le courage tranquille d’aimer et de tenir bon.',
      },
      {
        q: 'La Force est-elle une bonne carte en amour ?',
        a: 'Oui, La Force est une carte favorable en amour. À l’endroit, elle annonce la capacité à surmonter les épreuves par la douceur, la patience et la maîtrise de soi, ainsi qu’une relation solide et confiante. Elle rappelle que la vraie puissance amoureuse est celle du cœur, pas de la domination. Renversée, elle signale un manque de maîtrise émotionnelle à corriger. Dans l’ensemble, c’est une carte de courage tranquille et de solidité douce.',
      },
      {
        q: 'La Force annonce-t-elle de surmonter une épreuve ?',
        a: 'Oui, La Force est par excellence la carte qui annonce de surmonter les épreuves en amour. Elle indique que le couple, ou la personne, a la force intérieure de traverser les difficultés, non par la brutalité, mais par la patience, la douceur et la maîtrise de soi. Face à un obstacle sentimental, c’est un excellent signe : la tendresse ferme et le courage tranquille permettent d’apaiser les tensions et de bâtir un lien qui résiste durablement.',
      },
      {
        q: 'Que veut dire La Force renversée en amour ?',
        a: 'Renversée, La Force révèle le doute, l’emportement ou un manque de maîtrise émotionnelle. On se laisse submerger par la jalousie, la colère ou la peur, ou l’on manque de confiance pour affronter les épreuves du couple. Cette position peut aussi signaler une force qui bascule en domination ou en contrôle. La Force inversée invite à retrouver le calme et la douceur : c’est la maîtrise de soi, jamais la brutalité, qui dénoue les tensions amoureuses.',
      },
    ],
  },
  {
    slug: 'la-temperance',
    name: 'La Tempérance',
    emoji: '🕊️',
    arcane: 'Arcane majeur XIV',
    ouiNon: 'Oui',
    answerCapsule:
      'La Tempérance est la carte de l’harmonie et de l’équilibre dans le tarot amour. Quatorzième arcane majeur du Tarot de Marseille, elle incarne la modération, la patience, la guérison et la juste alliance des énergies. Tirée en amour, La Tempérance est un oui apaisant : elle annonce une relation harmonieuse, un équilibre retrouvé ou la réconciliation en douceur de deux êtres. À l’endroit, elle représente la paix, la fluidité et la complémentarité réussie ; renversée, elle signale un déséquilibre, de l’impatience ou des excès qui perturbent l’harmonie. Pour un célibataire, elle annonce une rencontre équilibrée ; pour un couple, une phase de paix et de complicité. La Tempérance rappelle que le bel amour se construit dans la patience et la juste mesure. Une consultation de voyance amoureuse peut préciser l’harmonie qu’elle annonce.',
    signification:
      'En amour, La Tempérance symbolise l’harmonie, l’équilibre et la guérison. Elle représente la juste alliance de deux énergies, la capacité à mêler les différences en une union fluide et paisible. Le quatorzième arcane majeur incarne la modération, la patience et l’art de trouver le bon dosage, ni trop, ni trop peu. Elle apparaît souvent après une épreuve, pour annoncer l’apaisement et la réconciliation, ou pour confirmer une relation équilibrée et sereine. Quand La Tempérance apparaît dans un tirage sentimental, elle rassure : l’harmonie s’installe, les tensions se dissolvent, et l’amour trouve son juste équilibre dans la douceur et la patience.',
    endroit:
      'À l’endroit, La Tempérance est un signe d’harmonie et d’apaisement en amour. Elle annonce une relation équilibrée et sereine, un équilibre retrouvé après une tension, ou une réconciliation en douceur. La carte parle de fluidité, de complémentarité réussie et de patience. Elle rappelle que le bel amour se construit dans la juste mesure et la modération : ni excès ni carence, mais un dosage harmonieux où chacun trouve sa place.',
    renverse:
      'Renversée, La Tempérance révèle un déséquilibre, de l’impatience ou des excès qui perturbent l’harmonie. La relation manque de mesure : trop de fusion ou trop de distance, précipitation, tensions mal gérées. Cette position peut aussi signaler une difficulté à concilier les différences ou à trouver le bon rythme. La Tempérance inversée invite à retrouver l’équilibre et la patience : c’est en dosant justement les énergies que l’harmonie amoureuse se rétablit.',
    celibataire:
      'Pour un célibataire, La Tempérance annonce une rencontre équilibrée et sereine, avec une personne complémentaire et apaisante. Loin des passions tumultueuses, cette histoire se construit dans la douceur et la juste mesure. La carte invite à la patience et à l’équilibre intérieur : c’est en étant vous-même harmonieux que vous attirez une relation paisible et durable.',
    couple:
      'Pour un couple, La Tempérance annonce une phase de paix, de complicité et d’équilibre. Les tensions s’apaisent, les différences se conjuguent avec fluidité, et la relation trouve son juste rythme. La carte invite à cultiver la patience, la modération et le dialogue serein : c’est cet équilibre harmonieux qui rend le couple durable et nourrissant pour les deux partenaires.',
    ex:
      'Concernant un ex, La Tempérance est encourageante : elle suggère une réconciliation en douceur, fondée sur l’apaisement et le retour à l’équilibre. Si la carte apparaît, elle indique que les tensions passées peuvent se dissoudre et qu’un lien plus serein est possible. Elle invite toutefois à la patience : cette harmonie se reconstruit progressivement, dans la juste mesure, sans précipitation ni excès.',
    faq: [
      {
        q: 'Que signifie La Tempérance en amour ?',
        a: 'La Tempérance signifie en amour l’harmonie, l’équilibre et la guérison. Quatorzième arcane majeur du Tarot de Marseille, elle incarne la juste alliance de deux énergies, la modération et la patience. Elle annonce une relation harmonieuse, un équilibre retrouvé ou une réconciliation en douceur. Quand La Tempérance apparaît, elle rassure : l’harmonie s’installe, les tensions se dissolvent, et l’amour trouve son juste équilibre dans la sérénité et la patience.',
      },
      {
        q: 'La Tempérance annonce-t-elle une réconciliation ?',
        a: 'Oui, La Tempérance est l’une des cartes favorables à une réconciliation en amour. Elle annonce l’apaisement des tensions, le retour à l’équilibre et la fusion harmonieuse de deux énergies. Concernant un ex, elle suggère qu’un lien plus serein est possible, fondé sur la douceur plutôt que sur les conflits passés. Elle invite toutefois à la patience : cette réconciliation se construit progressivement, dans la juste mesure, sans forcer ni brusquer.',
      },
      {
        q: 'La Tempérance est-elle un oui en amour ?',
        a: 'Oui, La Tempérance est un oui apaisant en amour. À l’endroit, elle répond favorablement aux questions sur l’harmonie, l’équilibre du couple et la sérénité de la relation : la paix et la complémentarité sont au rendez-vous. Renversée, la réponse se nuance : déséquilibre, impatience ou excès à corriger. Dans l’ensemble, c’est une carte positive qui promet une relation équilibrée, à condition de cultiver la patience et la juste mesure.',
      },
      {
        q: 'Que veut dire La Tempérance renversée en amour ?',
        a: 'Renversée, La Tempérance révèle un déséquilibre, de l’impatience ou des excès qui perturbent l’harmonie. La relation manque de mesure : trop de fusion ou trop de distance, précipitation, tensions mal gérées. Cette position peut aussi signaler une difficulté à concilier les différences ou à trouver le bon rythme. La Tempérance inversée invite à retrouver l’équilibre et la patience : c’est en dosant justement les énergies que l’harmonie amoureuse se rétablit.',
      },
    ],
  },
  {
    slug: 'le-jugement',
    name: 'Le Jugement',
    emoji: '🎺',
    arcane: 'Arcane majeur XX',
    ouiNon: 'Oui',
    answerCapsule:
      'Le Jugement est la carte du renouveau et de la seconde chance dans le tarot amour. Vingtième arcane majeur du Tarot de Marseille, il incarne la renaissance, l’éveil, le pardon et le nouveau départ après une épreuve. Tiré en amour, Le Jugement est un oui porteur d’espoir : il annonce une réconciliation, une relation qui renaît, ou une prise de conscience qui change tout. À l’endroit, il représente le pardon, le renouveau et l’appel du cœur auquel on répond ; renversé, il signale le refus de pardonner, un blocage dans le passé ou une seconde chance manquée. Pour un célibataire, il annonce un renouveau sentimental ; pour un couple, une renaissance ou une réconciliation. Le Jugement rappelle qu’il est toujours possible de repartir sur de nouvelles bases. Une consultation de voyance amoureuse peut préciser ce renouveau.',
    signification:
      'En amour, Le Jugement symbolise le renouveau, la renaissance et la seconde chance. Il représente ces moments de bascule où l’on prend conscience de ses vrais sentiments, où l’on pardonne, où une relation renaît de ses cendres. Le vingtième arcane majeur incarne l’éveil, l’appel du destin et la libération du passé. Il apparaît souvent pour annoncer une réconciliation, un retour, ou une décision qui répare et fait repartir. Quand Le Jugement apparaît dans un tirage sentimental, il porte un message d’espoir : le passé peut être dépassé, les erreurs pardonnées, et une nouvelle histoire, ou la même, renouvelée, peut commencer.',
    endroit:
      'À l’endroit, Le Jugement est un signe d’espoir et de renouveau en amour. Il annonce une réconciliation, une relation qui renaît, ou une prise de conscience qui libère du passé. La carte parle de pardon, d’éveil et d’appel du cœur auquel on répond enfin. Elle rappelle qu’il est possible de tourner la page des erreurs et de repartir sur de nouvelles bases : une seconde chance s’offre, à saisir avec le cœur ouvert.',
    renverse:
      'Renversé, Le Jugement révèle le refus de pardonner ou un blocage dans le passé. Vous ressassez d’anciennes blessures, vous n’arrivez pas à tourner la page, ou vous laissez passer une seconde chance par rancune ou par peur. Cette position peut aussi signaler un déni de ses vrais sentiments. Le Jugement inversé invite à lâcher le passé et à écouter l’appel du cœur : tant que l’on reste prisonnier de ses rancunes, le renouveau amoureux reste impossible.',
    celibataire:
      'Pour un célibataire, Le Jugement annonce un renouveau sentimental et une seconde chance. Après une période difficile, votre cœur s’éveille et se libère du passé : une nouvelle histoire devient possible. La carte peut aussi annoncer le retour d’une personne du passé sous un jour nouveau. Elle invite à pardonner, à vous libérer de vos anciennes blessures et à accueillir ce renouveau avec le cœur ouvert.',
    couple:
      'Pour un couple, Le Jugement annonce une renaissance ou une réconciliation. Après une crise ou une distance, la relation peut renaître grâce à une prise de conscience, un pardon mutuel ou une décision qui répare. La carte invite à dépasser les erreurs passées et à repartir sur de nouvelles bases. C’est un signe très favorable pour un couple qui traverse une épreuve : le renouveau est à portée de cœur.',
    ex:
      'Concernant un ex, Le Jugement est l’une des cartes les plus favorables à un retour. Il annonce une seconde chance, une réconciliation ou une relation qui renaît après une prise de conscience et un pardon. Si la carte apparaît, elle indique qu’un renouveau est possible sur de nouvelles bases, en tirant les leçons du passé. Renversée, elle signale une rancune ou un blocage qui empêche encore ce renouveau : le pardon est la clé.',
    faq: [
      {
        q: 'Que signifie Le Jugement en amour ?',
        a: 'Le Jugement signifie en amour le renouveau, la renaissance et la seconde chance. Vingtième arcane majeur du Tarot de Marseille, il annonce une réconciliation, une relation qui renaît, ou une prise de conscience qui libère du passé. Il incarne le pardon, l’éveil et l’appel du cœur. Quand Le Jugement apparaît, il porte un message d’espoir : le passé peut être dépassé, les erreurs pardonnées, et une nouvelle histoire, ou la même, renouvelée, peut commencer.',
      },
      {
        q: 'Le Jugement annonce-t-il un retour de l’ex ?',
        a: 'Oui, Le Jugement est l’une des cartes les plus favorables au retour d’un ex. Il symbolise la seconde chance, la réconciliation et la relation qui renaît après une prise de conscience et un pardon. Si vous vous interrogez sur un retour, c’est un excellent signe : un renouveau est possible sur de nouvelles bases, en tirant les leçons du passé. La carte invite toutefois à pardonner réellement, car c’est le pardon qui rend ce renouveau possible.',
      },
      {
        q: 'Le Jugement est-il un oui en amour ?',
        a: 'Oui, Le Jugement est un oui porteur d’espoir et de renouveau en amour. À l’endroit, il répond favorablement aux questions sur la réconciliation, la seconde chance et la renaissance d’une relation : le passé peut être dépassé et une nouvelle page s’écrire. Renversé, la réponse se nuance : rancune ou blocage dans le passé freinent le renouveau. Dans l’ensemble, c’est une carte très positive pour repartir sur de nouvelles bases.',
      },
      {
        q: 'Que veut dire Le Jugement renversé en amour ?',
        a: 'Renversé, Le Jugement révèle le refus de pardonner ou un blocage dans le passé. On ressasse d’anciennes blessures, on n’arrive pas à tourner la page, ou l’on laisse passer une seconde chance par rancune ou par peur. Cette position peut aussi traduire un déni de ses vrais sentiments. Le Jugement inversé invite à lâcher le passé et à écouter l’appel du cœur : tant que l’on reste prisonnier de ses rancunes, le renouveau amoureux reste impossible.',
      },
    ],
  },
  {
    slug: 'le-monde',
    name: 'Le Monde',
    emoji: '🌍',
    arcane: 'Arcane majeur XXI',
    ouiNon: 'Oui',
    answerCapsule:
      'Le Monde est la carte de l’accomplissement et de la plénitude dans le tarot amour. Vingt-et-unième et dernier arcane majeur du Tarot de Marseille, il incarne la réussite, la complétude, l’union parfaite et l’épanouissement total. Tiré en amour, Le Monde est le oui le plus abouti du tarot : il annonce une relation accomplie, un rêve amoureux qui se réalise, ou l’aboutissement heureux d’un long chemin. À l’endroit, il représente la plénitude, l’union épanouie et la réalisation d’un projet de couple ; renversé, il signale un accomplissement retardé ou un cycle qui peine à se boucler. Pour un célibataire, il annonce une rencontre qui comble ; pour un couple, la concrétisation d’un rêve commun. Le Monde couronne le parcours amoureux d’une réussite entière. Une consultation de voyance amoureuse peut préciser cette plénitude.',
    signification:
      'En amour, Le Monde symbolise l’accomplissement, la plénitude et l’union parfaite. Dernier arcane majeur, il couronne le voyage : il représente la réussite d’un parcours, la réalisation d’un rêve, l’harmonie totale d’une relation épanouie. Le vingt-et-unième arcane majeur incarne aussi les voyages, l’ouverture au monde et la célébration d’un cycle abouti. Il apparaît souvent pour annoncer un mariage, une union qui se concrétise, ou l’aboutissement heureux d’une longue attente. Quand Le Monde apparaît dans un tirage sentimental, il est le meilleur des présages : l’amour atteint sa plénitude, un rêve se réalise et un cycle se boucle dans la joie.',
    endroit:
      'À l’endroit, Le Monde est le meilleur présage du tarot amour. Il annonce une relation accomplie et épanouie, la réalisation d’un rêve amoureux, ou l’aboutissement heureux d’un long chemin. Cette position parle de plénitude, d’union parfaite et de célébration d’un cycle réussi, mariage, projet commun réalisé, harmonie totale. La carte couronne le parcours sentimental d’une réussite entière : tout converge vers l’épanouissement et la joie partagée.',
    renverse:
      'Renversé, Le Monde révèle un accomplissement retardé ou un cycle qui peine à se boucler. Vous êtes proche du but mais quelque chose bloque la réalisation finale : une dernière étape à franchir, un projet qui traîne, un sentiment d’inachevé. Cette position n’annonce pas un échec mais un délai. Le Monde inversé invite à la patience et à la persévérance : l’accomplissement est là, tout proche, mais demande encore un effort ou un peu de temps pour se concrétiser pleinement.',
    celibataire:
      'Pour un célibataire, Le Monde annonce une rencontre qui comble, l’aboutissement d’une quête amoureuse. Après un parcours, l’amour épanoui se présente enfin : une relation qui vous correspond pleinement et vous apporte la plénitude. La carte invite à accueillir cette réussite avec gratitude : le cycle se boucle et un amour accompli couronne votre chemin.',
    couple:
      'Pour un couple, Le Monde annonce la concrétisation d’un rêve commun et une plénitude partagée. La relation atteint son accomplissement : mariage, projet de vie réalisé, harmonie totale. C’est l’un des meilleurs signes pour un couple, celui de la réussite entière et de la joie durable. La carte invite à célébrer ce cycle abouti et à savourer une union épanouie qui a trouvé sa plénitude.',
    ex:
      'Concernant un ex, Le Monde suggère l’aboutissement heureux d’une histoire, mais son sens dépend du contexte : il peut annoncer des retrouvailles qui couronnent enfin la relation, ou au contraire la clôture sereine et accomplie d’un cycle. Si la carte apparaît avec des cartes d’union, un retour épanoui est possible. Renversée, elle signale un cycle inachevé qui demande encore du temps pour trouver sa résolution.',
    faq: [
      {
        q: 'Que signifie Le Monde en amour ?',
        a: 'Le Monde signifie en amour l’accomplissement, la plénitude et l’union parfaite. Dernier arcane majeur du Tarot de Marseille, il annonce une relation accomplie, un rêve amoureux qui se réalise, ou l’aboutissement heureux d’un long chemin. C’est le meilleur présage du tarot amour : mariage, harmonie totale, cycle réussi. Quand Le Monde apparaît, l’amour atteint sa plénitude et un rêve se concrétise dans la joie et l’épanouissement partagé.',
      },
      {
        q: 'Le Monde annonce-t-il un mariage ?',
        a: 'Oui, Le Monde est l’une des plus belles cartes annonçant un mariage ou une union accomplie. Dernier arcane majeur, il couronne un parcours par la réalisation d’un rêve : union parfaite, projet de vie concrétisé, harmonie totale. Entouré de cartes comme Le Pape, Les Amoureux ou Le Soleil, la promesse de mariage se confirme nettement. C’est un présage exceptionnel pour un couple qui envisage de sceller son union et de célébrer un cycle abouti.',
      },
      {
        q: 'Le Monde est-il un oui en amour ?',
        a: 'Oui, Le Monde est le oui le plus abouti du tarot amour. À l’endroit, il répond très favorablement à toutes les questions de cœur : accomplissement, union parfaite, réalisation d’un rêve, plénitude partagée. C’est le meilleur présage possible. Renversé, la réponse reste positive mais retardée : l’accomplissement approche mais demande encore un peu de temps ou d’effort. Dans l’ensemble, Le Monde couronne le parcours amoureux d’une réussite entière.',
      },
      {
        q: 'Que veut dire Le Monde renversé en amour ?',
        a: 'Renversé, Le Monde révèle un accomplissement retardé ou un cycle qui peine à se boucler. On est proche du but mais quelque chose bloque la réalisation finale : une dernière étape, un projet qui traîne, un sentiment d’inachevé. Ce n’est pas un échec mais un délai. Le Monde inversé invite à la patience et à la persévérance : l’accomplissement est tout proche, mais demande encore un effort ou un peu de temps pour se concrétiser pleinement.',
      },
    ],
  },
];
