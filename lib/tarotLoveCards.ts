// Tarot love-meaning card records — data layer for /tarot-amour/[carte]/.
//
// Distinct from lib/tarotDeck.ts (the short-meaning deck powering the draw
// tools). These are full EAV records for standalone pages: general love
// meaning, upright/reversed, per-situation reads (single/couple/ex), oui-non,
// and FAQ — built to the semantic-SEO standard (answer capsule + entity
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
  /** 'Oui' | 'Non' | 'Nuancé' — the oui/non love verdict */
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

/** Quality gate — a record below these thresholds must not produce a page. */
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
      'Renversé, L’Amoureux révèle l’indécision et le doute. Vous hésitez entre deux personnes, ou vous fuyez un choix amoureux par peur de vous tromper. Cette position peut aussi signaler un engagement pris pour de mauvaises raisons — la sécurité, la pression, la peur de la solitude — plutôt que par amour véritable. La carte inversée invite à clarifier vos sentiments avant de décider, car un choix fait dans la confusion mène rarement au bonheur durable.',
    celibataire:
      'Pour un célibataire, L’Amoureux est l’une des cartes les plus attendues : elle annonce une rencontre significative, souvent avec une personne qui vous fera vibrer profondément. Ce n’est pas une simple attirance mais un lien à fort potentiel. La carte vous invite à rester ouvert et à oser choisir quand cette rencontre se présentera, sans vous laisser paralyser par la peur de l’engagement.',
    couple:
      'Pour un couple, L’Amoureux confirme la solidité et la sincérité du lien. Il peut annoncer une étape importante : emménagement, fiançailles, mariage ou renouvellement de l’engagement. La carte invite les deux partenaires à choisir consciemment de continuer ensemble, à raviver le désir et à approfondir la complicité. C’est un excellent présage pour une relation qui avance dans la confiance.',
    ex: 'Concernant un ex, L’Amoureux suggère qu’un vrai choix du cœur reste possible — mais un choix, pas une rechute par habitude. Si la carte est à l’endroit, elle indique que des sentiments sincères persistent des deux côtés et qu’une reconquête fondée sur l’authenticité a ses chances. Renversée, elle avertit contre un retour motivé par la peur du vide plutôt que par un amour réel.',
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
      'En amour, La Lune gouverne le monde des émotions inconscientes, des rêves et des intuitions. Elle éclaire ce qui n’est pas dit, les sentiments enfouis et les vérités que l’on préfère ne pas voir. Cette carte est ambivalente : elle peut révéler une connexion émotionnelle profonde et une intuition juste, ou au contraire des illusions, des peurs projetées et des mensonges. La Lune apparaît souvent quand une relation traverse le flou — doutes, jalousie, imagination qui s’emballe. Le dix-huitième arcane majeur invite à ne pas confondre le ressenti profond avec l’angoisse, et à attendre la clarté avant de tirer des conclusions.',
    endroit:
      'À l’endroit, La Lune amplifie l’intuition et la sensibilité émotionnelle. Elle signale que votre ressenti capte quelque chose de vrai, même si ce n’est pas encore visible : des sentiments cachés, une situation ambiguë, un secret. En amour, elle invite à écouter votre voix intérieure tout en restant lucide, car cette même carte peut nourrir les fantasmes et les peurs. C’est une période où l’on ressent beaucoup mais où l’on voit peu — la patience est de mise.',
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
        a: 'Le Soleil signifie en amour le bonheur, la clarté, la réussite et l’épanouissement partagé. Dix-neuvième arcane majeur du Tarot de Marseille, c’est la carte la plus positive du tarot amour : elle annonce une relation heureuse vécue au grand jour, la vérité qui éclate et la fin d’une période sombre. Elle symbolise aussi la fécondité et les projets qui grandissent — officialisation, mariage, naissance. Quand Le Soleil apparaît en amour, l’avenir sentimental s’annonce lumineux et sincère.',
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
      'En amour, L’Étoile incarne l’espoir, la foi et la guérison émotionnelle. Elle apparaît souvent après une période difficile — rupture, déception, épreuve — pour annoncer que la paix revient et que l’amour est de nouveau possible. Cette carte parle d’une douceur retrouvée, d’une confiance qui se reconstruit et d’une connexion sincère et apaisée. Le dix-septième arcane majeur symbolise aussi l’inspiration, la vulnérabilité assumée et l’ouverture du cœur. Quand L’Étoile brille dans un tirage sentimental, elle réconforte : les blessures cicatrisent, l’espoir renaît et un amour plus authentique se profile à l’horizon.',
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
      'En amour, Le Diable gouverne le désir, la sensualité et les liens puissants — pour le meilleur et pour le pire. Il représente l’attraction magnétique, la passion charnelle, mais aussi tout ce qui enchaîne : la dépendance affective, la jalousie, l’emprise, l’obsession. Cette carte n’est pas mauvaise en soi ; elle éclaire l’intensité brute d’une relation et pose une question essentielle : cette passion vous élève-t-elle ou vous enchaîne-t-elle ? Le quinzième arcane majeur apparaît souvent quand le désir prend le pas sur la raison, ou quand un lien devient difficile à rompre malgré la souffrance. Il invite à la lucidité sur ce qui vous attache réellement.',
    endroit:
      'À l’endroit, Le Diable signale une passion intense et une forte attraction physique. Le désir est puissant, la connexion charnelle magnétique — ce qui peut être grisant. Mais la carte avertit aussi d’un possible déséquilibre : dépendance, jalousie, emprise ou relation où l’on perd son libre arbitre. En amour, Le Diable à l’endroit invite à profiter de l’intensité tout en restant lucide : la frontière entre passion et enfermement doit rester consciente.',
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
      'En amour, La Tour symbolise le bouleversement libérateur : l’effondrement soudain de ce qui reposait sur des bases fausses. Elle apparaît quand une relation, une illusion ou une certitude vole en éclats — souvent brutalement et de façon inattendue. Rupture, révélation, crise, coup de tonnerre : le seizième arcane majeur ne fait pas dans la demi-mesure. Mais derrière le choc se cache une vérité nécessaire. La Tour détruit ce qui devait tomber pour faire place à quelque chose de plus authentique. C’est une carte difficile mais salvatrice : elle libère de ce qui emprisonnait, même si le prix émotionnel est élevé sur le moment.',
    endroit:
      'À l’endroit, La Tour annonce un bouleversement soudain en amour : rupture inattendue, révélation qui change tout, crise majeure. Le choc est brutal et l’édifice s’effondre d’un coup, laissant un sentiment de perte et de déstabilisation. Mais cette carte détruit ce qui reposait sur le mensonge ou l’illusion. Aussi douloureuse soit-elle sur le moment, La Tour à l’endroit ouvre la voie à une reconstruction plus vraie et plus solide.',
    renverse:
      'Renversée, La Tour atténue l’intensité du choc. Le bouleversement est plus lent, plus intérieur, ou bien il a été évité de justesse. Vous résistez peut-être à un changement nécessaire, prolongeant une situation qui devrait se terminer ; ou vous traversez une crise moins spectaculaire mais tout aussi transformatrice. La Tour inversée invite à ne pas fuir l’inévitable : mieux vaut accompagner le changement que de s’accrocher à ce qui doit tomber.',
    celibataire:
      'Pour un célibataire, La Tour balaie les fausses pistes et les illusions amoureuses. Elle peut marquer la fin brutale d’une situation ambiguë, la chute d’un fantasme ou la prise de conscience qu’une personne n’était pas la bonne. Aussi déstabilisante soit-elle, cette carte libère : en faisant tomber ce qui sonnait faux, elle vous rapproche d’un amour authentique.',
    couple:
      'Pour un couple, La Tour met les fondations à l’épreuve. Elle peut annoncer une crise majeure, une révélation ou une rupture, surtout si la relation reposait sur des non-dits ou des illusions. Mais si le lien est sincère, cette secousse peut aussi le purifier en forçant la vérité à éclater. La carte invite à affronter ce qui doit l’être : ce qui survit à La Tour en ressort plus authentique.',
    ex: 'Concernant un ex, La Tour évoque une rupture brutale ou une séparation marquante — souvent celle qui a déjà eu lieu ou qui reste à assumer. Elle indique rarement une réconciliation immédiate : la structure de l’ancienne relation s’est effondrée pour de bonnes raisons. La carte invite à faire le deuil de ce qui a été détruit plutôt qu’à reconstruire à l’identique. Un renouveau reste possible, mais sur des bases entièrement nouvelles.',
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
        a: 'La Tour est douloureuse mais pas purement négative en amour. Elle détruit ce qui devait tomber — illusions, mensonges, situations bloquées — pour libérer et permettre une reconstruction plus vraie. Sur le moment, le choc est brutal et le prix émotionnel élevé. Mais avec le recul, beaucoup reconnaissent que La Tour a mis fin à ce qui les emprisonnait. Suivie de L’Étoile, elle annonce même la guérison et un renouveau après l’effondrement.',
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
      'Renversée, La Roue de Fortune signale un ralentissement, un retard ou une phase de malchance passagère en amour. Le changement espéré tarde à venir, ou vous traversez un cycle moins favorable. Cette position peut aussi révéler une résistance au changement : vous vous accrochez à une situation figée alors que la vie vous invite à évoluer. La Roue inversée rappelle que le mouvement finira par reprendre — mieux vaut l’accompagner que lutter contre lui.',
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
        a: 'Renversée, La Roue de Fortune signale un ralentissement, un retard ou une phase de malchance passagère en amour. Le changement espéré tarde, ou vous traversez un cycle moins favorable. Elle peut aussi révéler une résistance au changement : vous vous accrochez à une situation figée alors que la vie vous invite à évoluer. La Roue inversée rappelle que le mouvement reprendra — mieux vaut l’accompagner avec confiance que lutter contre le cours des choses.',
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
      'À l’endroit, La Mort annonce une fin nécessaire et une transformation profonde en amour. Une relation, une situation ou une phase de vie sentimentale arrive à son terme, souvent de façon inéluctable. Ce passage peut être douloureux, mais il est libérateur : il fait place nette pour un renouveau. La carte invite à accepter ce qui se termine plutôt qu’à s’y accrocher — la renaissance amoureuse passe par ce lâcher-prise nécessaire.',
    renverse:
      'Renversée, La Mort révèle une résistance au changement. Vous refusez de tourner une page pourtant nécessaire, vous vous accrochez à une relation ou à un schéma terminé, retardant une transformation inévitable. Cette position traduit une peur du vide, un deuil non fait ou une stagnation. La Mort inversée invite à lâcher prise : plus on résiste à la fin d’un cycle, plus la transition devient longue et pénible. Accepter le changement est la seule voie vers le renouveau.',
    celibataire:
      'Pour un célibataire, La Mort balaie l’ancien pour préparer le neuf. Elle peut marquer la fin d’un célibat, l’abandon d’anciens schémas amoureux ou le deuil définitif d’une histoire passée qui vous empêchait d’avancer. En faisant table rase, cette carte vous libère et vous rend disponible pour une nouvelle histoire, plus alignée avec la personne que vous êtes devenue.',
    couple:
      'Pour un couple, La Mort transforme le lien en profondeur. Elle peut annoncer la fin d’une relation qui a fait son temps, mais aussi la mutation d’un couple qui doit se réinventer pour survivre. Une phase se termine — une dynamique, une routine, une version de la relation — pour qu’une autre naisse. La carte invite à accepter cette métamorphose : le couple qui accepte de mourir à ce qu’il était peut renaître plus fort.',
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
];
