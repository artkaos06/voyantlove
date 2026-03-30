import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema, getAuthorSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';

export const metadata: Metadata = {
  title: 'Voyance Grossesse : Vais-Je Avoir un Enfant ? Prédictions | VoyantLove',
  description: 'Vous vous demandez si vous allez avoir un enfant ? La voyance grossesse révèle les perspectives de maternité, les périodes favorables et les signes spirituels d\'une naissance.',
  keywords: ['voyance grossesse', 'vais-je avoir un enfant', 'voyance bébé', 'voyance maternité', 'prédiction grossesse'],
  alternates: { canonical: 'https://www.voyantlove.fr/sentiments/voyance-grossesse-bebe/' },
};

export default function VoyanceGrossessePage() {
  const articleSchema = getArticleSchema({
    title: 'Voyance Grossesse : Vais-Je Avoir un Enfant ? Prédictions | VoyantLove',
    description: 'Vous vous demandez si vous allez avoir un enfant ? La voyance grossesse révèle les perspectives de maternité, les périodes favorables et les signes spirituels d\'une naissance.',
    url: 'https://www.voyantlove.fr/sentiments/voyance-grossesse-bebe/',
    datePublished: '2026-03-27',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['voyance grossesse', 'vais-je avoir un enfant', 'voyance bébé', 'voyance maternité', 'prédiction grossesse'],
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Sentiments & Avenir', url: 'https://www.voyantlove.fr/sentiments/' },
    { name: 'Voyance Grossesse', url: 'https://www.voyantlove.fr/sentiments/voyance-grossesse-bebe/' },
  ]);

  const authorSchema = getAuthorSchema();

  const faqSchema = getFAQSchema([
    {
      question: 'La voyance peut-elle vraiment prédire une grossesse ?',
      answer: 'La voyance ne prédit pas la grossesse avec la certitude d\'un test médical, mais elle peut révéler les énergies, les tendances et les dispositions favorables à une conception. Un voyant expérimenté, travaillant avec le tarot ou la clairvoyance, perçoit des potentiels et des cycles temporels propices. Certains tirages — notamment la présence de l\'Impératrice, de l\'As de Coupe ou de l\'As de Bâton — signalent avec une fréquence remarquable des périodes de conception imminentes. Des milliers de consultants ont témoigné avoir consulté un voyant peu avant une grossesse confirmée médicalement. La voyance donne une orientation, pas une certitude absolue.',
    },
    {
      question: 'Quelles cartes du tarot annoncent une grossesse ?',
      answer: 'Plusieurs cartes du tarot de Marseille sont traditionnellement associées à la grossesse et à la naissance. L\'Impératrice (arcane III) est la carte mère par excellence, symbolisant la fertilité, la création et la maternité épanouie. L\'As de Bâton représente un nouveau souffle vital, une énergie de création qui commence. L\'As de Coupe incarne l\'abondance émotionnelle et l\'ouverture du cœur à recevoir de la vie. La Lune évoque les cycles féminins, la gestation et le monde intérieur. Le Soleil annonce une naissance joyeuse et lumineuse. La présence combinée de deux ou trois de ces cartes dans un même tirage est un signal fort pour un voyant spécialisé.',
    },
    {
      question: 'Mon désir d\'enfant ne se réalise pas — que dit la voyance ?',
      answer: 'Quand le désir d\'enfant se heurte à des obstacles, la voyance peut apporter un éclairage différent de la perspective médicale seule. Les cartes peuvent révéler des blocages émotionnels inconscients — peurs profondes, deuils non traversés, conflits intérieurs autour de la parentalité — qui freinent la conception au niveau énergétique. Elles peuvent aussi indiquer que le timing n\'est pas encore aligné, ou que certaines conditions dans la relation de couple méritent d\'être travaillées d\'abord. La voyance ne remplace ni la médecine ni la psychologie, mais elle peut ouvrir des pistes de compréhension et d\'action complémentaires, notamment en identifiant des périodes plus favorables à venir.',
    },
    {
      question: 'À quel moment consulter un voyant pour une question de grossesse ?',
      answer: 'Il n\'y a pas de mauvais moment pour consulter un voyant sur votre désir d\'enfant. Beaucoup de personnes consultent lorsqu\'elles commencent à penser à fonder une famille et souhaitent une orientation sur le timing favorable. D\'autres consultent après des mois d\'essais sans succès, pour comprendre les blocages énergétiques ou recevoir un message d\'espoir. Certains consultent après une fausse couche pour traverser ce deuil et comprendre la suite de leur chemin. Un voyant spécialisé dans la maternité peut adapter sa lecture selon votre situation spécifique. Venez avec vos questions précises — la qualité d\'un tirage dépend en grande partie de la clarté de votre intention.',
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />

      {/* Header */}
      <header className="bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/sentiments" className="text-white/80 hover:text-white mb-4 inline-block">&larr; Retour aux Sentiments & Avenir</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">&#x1F476; Voyance Grossesse</h1>
          <p className="text-xl opacity-95 mb-6">Vais-Je Avoir un Enfant ?</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#cartes" className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">Les Cartes de la Grossesse</a>
            <a href="#periodes" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition">Périodes Favorables</a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Stats Bar */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">&#x1F476;</div><div className="text-2xl font-bold text-pink-600">5 Cartes</div><div className="text-sm text-gray-600">Tarot maternité clés</div></div>
          <div><div className="text-3xl mb-1">&#x2728;</div><div className="text-2xl font-bold text-pink-600">11 Ans</div><div className="text-sm text-gray-600">D'expérience</div></div>
          <div><div className="text-3xl mb-1">&#x1F52E;</div><div className="text-2xl font-bold text-pink-600">Cycles</div><div className="text-sm text-gray-600">Lunaires & Jupiter</div></div>
          <div><div className="text-3xl mb-1">&#x1F49C;</div><div className="text-2xl font-bold text-pink-600">1 700+</div><div className="text-sm text-gray-600">Consultations</div></div>
        </div>

        {/* E-E-A-T Signal */}
        <EEATSignal
          colorScheme="pink"
          method="Tarot de maternité, astrologie lunaire et clairvoyance"
        />

        {/* Answer Capsule */}
        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-pink-500">
          <p className="text-lg leading-relaxed mb-4">
            Le <strong>désir d'enfant</strong> est l'une des questions les plus profondes et les plus chargées émotionnellement qu'une personne puisse porter. Quand la <strong>grossesse</strong> tarde, que l'incertitude s'installe ou que le chemin vers la parentalité semble semé d'obstacles, la voyance offre un regard intérieur qui complète les approches médicales. Le <strong>tarot maternité</strong>, pratiqué par un voyant spécialisé, révèle les énergies en présence, les blocages potentiels et les cycles favorables à la conception.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Le <strong>tirage grossesse</strong> s'appuie sur des cartes fondamentales dont <strong>l'Impératrice</strong> est la figure centrale — cette arcane III symbolise la fertilité, la création et la maternité accomplie dans toute sa plénitude. La voyance identifie aussi les <strong>périodes fertiles</strong> favorables selon les cycles astrologiques et énergétiques, offrant une dimension temporelle à ce désir de <strong>naissance</strong>.
          </p>
          <p className="text-lg leading-relaxed">
            Cette guidance explore ce que la voyance peut véritablement révéler sur votre désir d'enfant, les cartes du tarot associées à la maternité, les signes spirituels annonciateurs et les périodes astrologiques à privilégier. Pour une vision globale de ce que l'avenir vous réserve sur le plan affectif, consultez notre guide sur <Link href="/sentiments/avenir-amoureux" className="text-pink-600 hover:text-pink-800 underline font-medium">votre avenir sentimental</Link> en complément de cette lecture.
          </p>
        </article>

        <VoyantQuickCTA topic="sentiments" source="voyance-grossesse-early" />

        {/* Section 1 — Ce que la voyance révèle */}
        <section className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-8 mb-8 border-2 border-pink-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">&#x1F52E; Ce que la Voyance Peut Révéler sur votre Désir d'Enfant</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">La voyance ne remplace pas la médecine mais révèle les dimensions énergétiques, émotionnelles et temporelles de votre chemin vers la maternité — ce que les examens cliniques ne peuvent pas mesurer.</p>
          <p className="text-gray-700 mb-5">
            La question "vais-je avoir un enfant ?" est l'une des plus posées à un voyant. Elle porte en elle une intensité particulière, mélange d'espoir profond, d'anxiété et parfois de deuils silencieux. La voyance aborde cette question dans sa globalité — non pas comme un simple oui ou non, mais comme un chemin avec ses propres rythmes, ses conditions et ses potentialités.
          </p>

          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg border-l-4 border-pink-500">
              <h3 className="font-bold text-pink-700 mb-2 text-lg">Ce que la voyance peut révéler</h3>
              <div className="space-y-2 text-gray-700">
                <p>&#x2713; <strong>Les blocages énergétiques</strong> qui freinent la conception au niveau subtil</p>
                <p>&#x2713; <strong>Les dispositions intérieures</strong> — peurs inconscientes, ambivalences autour de la parentalité</p>
                <p>&#x2713; <strong>Les cycles temporels favorables</strong> — fenêtres astrologiques et lunaires propices</p>
                <p>&#x2713; <strong>La dimension karmique</strong> — les contrats d'âme avec l'enfant qui vient</p>
                <p>&#x2713; <strong>L'état de la relation de couple</strong> — alignement ou tensions qui impactent le projet</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg border-l-4 border-rose-400">
              <h3 className="font-bold text-rose-700 mb-2 text-lg">Ce que la voyance ne peut pas faire</h3>
              <div className="space-y-2 text-gray-700">
                <p>&#x2717; <strong>Diagnostiquer des causes médicales</strong> d'infertilité — c'est le rôle des médecins</p>
                <p>&#x2717; <strong>Garantir une grossesse</strong> avec certitude absolue</p>
                <p>&#x2717; <strong>Déterminer le sexe de l'enfant</strong> avec fiabilité scientifique</p>
                <p>&#x2717; <strong>Remplacer un suivi médical</strong> ou un accompagnement psychologique</p>
              </div>
            </div>
          </div>

          <div className="bg-pink-100 border-l-4 border-pink-500 p-5 rounded-lg mt-5">
            <p className="text-gray-700">
              <strong>La posture juste :</strong> La voyance grossesse est la plus précieuse quand elle est utilisée en complément d'un suivi médical, pas à sa place. Elle ouvre des dimensions que la médecine ne peut pas explorer et peut apporter une paix intérieure précieuse dans l'attente. Pour comprendre comment <Link href="/sentiments/maime-t-il-elle" className="text-pink-600 hover:text-pink-800 underline font-medium">les sentiments de votre partenaire</Link> s'inscrivent dans ce projet commun, notre guidance dédiée vous éclaire.
            </p>
          </div>
        </section>

        {/* Section 2 — Les cartes du tarot */}
        <section id="cartes" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-pink-600">&#x1F0CF; Les Cartes du Tarot Liées à la Grossesse</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">L'Impératrice, l'As de Bâton, l'As de Coupe, la Lune et le Soleil sont les cinq cartes les plus systématiquement présentes dans les tirages annonçant une grossesse ou une maternité imminente.</p>
          <p className="text-gray-700 mb-6">
            Le tarot de Marseille comporte plusieurs cartes directement associées à la grossesse, la fertilité et la maternité. Leur présence dans un tirage, surtout en combinaison, constitue un signal fort pour le voyant.
          </p>

          <div className="space-y-5">
            <div className="bg-pink-50 border-l-4 border-pink-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-pink-700">&#x1F0CF; L'Impératrice (Arcane III) — La Mère Fertile</h3>
              <p className="text-gray-700">
                L'Impératrice est la carte maîtresse de la <strong>fertilité et de la maternité</strong> dans le tarot. Elle représente la nature créatrice dans sa plénitude, la femme en tant que source de vie, la gestation dans toutes ses dimensions — physique, créative et spirituelle. Sa présence dans un tirage grossesse est le signe le plus fort d'une <strong>énergie de maternité</strong> active. Quand l'Impératrice occupe une position centrale ou de résultat, le voyant perçoit une disposition favorable à la conception ou une grossesse en cours ou très proche.
              </p>
            </div>

            <div className="bg-rose-50 border-l-4 border-rose-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-rose-700">&#x1F0CF; L'As de Bâton — Le Souffle Vital</h3>
              <p className="text-gray-700">
                L'As de Bâton représente le commencement d'une <strong>énergie vitale nouvelle</strong>, un élan créateur qui prend forme. Dans le contexte d'une question de grossesse, il symbolise la graine qui attend de germer — l'étincelle de vie qui cherche à se manifester. Associé à l'Impératrice ou à l'As de Coupe, il confirme une <strong>période de conception favorable</strong>. Il peut aussi indiquer qu'un projet parental commence à prendre forme concrète, que ce soit par voie naturelle ou assistée.
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-orange-700">&#x1F0CF; L'As de Coupe — L'Abondance Émotionnelle</h3>
              <p className="text-gray-700">
                L'As de Coupe évoque l'<strong>ouverture du cœur à recevoir</strong>, l'abondance émotionnelle et la plénitude intérieure. Dans un tirage de maternité, il signale que le terrain émotionnel est prêt à accueillir une vie nouvelle. Il peut aussi indiquer une <strong>grossesse déjà en cours</strong> symbolisée par la coupe pleine. Cette carte est particulièrement significative pour les personnes qui ont traversé des deuils périnataux et qui se demandent si leur cœur est prêt à s'ouvrir à nouveau.
              </p>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-indigo-700">&#x1F0CF; La Lune — Les Cycles Féminins</h3>
              <p className="text-gray-700">
                La Lune gouverne les <strong>cycles féminins</strong>, l'intuition profonde et le monde de la gestation invisible. Dans un tirage grossesse, elle peut indiquer qu'une grossesse est en cours mais pas encore visible, ou que le processus se déroule dans les profondeurs — dans l'inconscient ou le plan subtil. Elle signale aussi parfois des cycles menstruels irréguliers à harmoniser ou une période d'attente nécessaire avant la conception. Son message est : la création est en marche, même si elle n'est pas encore visible.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-yellow-700">&#x1F0CF; Le Soleil — La Naissance Joyeuse</h3>
              <p className="text-gray-700">
                Le Soleil est la carte de la <strong>naissance et de l'épanouissement</strong>. Représentant souvent un enfant ou une joie pure et rayonnante, sa présence dans un tirage grossesse annonce une <strong>naissance heureuse et lumineuse</strong>. Il indique une période de joie familiale, un enfant attendu qui apporte bonheur et lumière. Dans la tradition tarot, un tirage où apparaissent ensemble l'Impératrice et le Soleil constitue l'une des combinaisons les plus positives pour une question de maternité.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 — Signes spirituels */}
        <section className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-8 mb-8 border-2 border-rose-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">&#x2728; Les Signes Spirituels d'une Grossesse à Venir</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Les signes précurseurs d'une grossesse imminente incluent les rêves de bébés ou d'eau, la présence répétée de certains animaux symboliques, des synchronicités autour du chiffre 3 et une intuition corporelle inhabituelle.</p>
          <p className="text-gray-700 mb-5">
            Au-delà du tarot, de nombreuses traditions spirituelles et témoignages de femmes ayant vécu des grossesses rapportent des signes précurseurs non médicaux. Ces signaux sont à accueillir avec discernement — ils invitent à l'attention et à l'écoute intérieure, sans créer d'attente rigide.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-lg p-5 border-2 border-pink-200">
              <h3 className="font-bold text-lg mb-3 text-pink-700">&#x1F6CC; Rêves Prémonitoires</h3>
              <p className="text-gray-700">
                Les <strong>rêves de bébés</strong>, de nourrissons ou d'enfants inconnus sont souvent rapportés dans les semaines précédant une grossesse découverte. Des rêves d'eau pure, de jardins en fleurs ou de sources sont également associés dans la symbolique onirique à la fertilité et à la gestation. L'intensité émotionnelle de ces rêves — particulièrement s'ils laissent un sentiment de chaleur et de plénitude — est souvent soulignée par les voyants comme un signal significatif.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-rose-200">
              <h3 className="font-bold text-lg mb-3 text-rose-700">&#x1F4AB; Synchronicités Récurrentes</h3>
              <p className="text-gray-700">
                Des <strong>synchronicités</strong> répétées autour du thème de l'enfant ou de la naissance — croiser des femmes enceintes en nombre inhabituel, trouver des objets de bébé, voir le chiffre 3 (associé à l'Impératrice) partout — peuvent être des signaux que l'inconscient collectif ou le plan spirituel envoie. Jung décrivait ces coïncidences significatives comme des messages de l'âme à ne pas ignorer.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-orange-200">
              <h3 className="font-bold text-lg mb-3 text-orange-700">&#x1F40D; Animaux Symboliques</h3>
              <p className="text-gray-700">
                Dans de nombreuses traditions chamaniques et spirituelles, certains animaux sont associés à la fertilité et à la maternité. La <strong>tortue</strong> symbolise la gestation patiente, la <strong>cigogne</strong> annonce bien sûr une naissance prochaine, l'<strong>abeille</strong> représente la fécondité et la création collective. La rencontre répétée — réelle ou symbolique — avec ces animaux est parfois interprétée comme un message de la nature.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-pink-200">
              <h3 className="font-bold text-lg mb-3 text-pink-700">&#x1F9D8; Intuition Corporelle</h3>
              <p className="text-gray-700">
                Certaines femmes rapportent une <strong>conscience corporelle inhabituellement intense</strong> dans les semaines précédant une grossesse — une attention accrue à leur ventre, une chaleur inexpliquée, ou simplement un "savoir" inexplicable que quelque chose est en train de changer. Cette dimension interoceptive, à mi-chemin entre le physique et le spirituel, est prise au sérieux dans la voyance comme un signal d'alignement.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 — Périodes favorables */}
        <section id="periodes" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-pink-600">&#x1F319; Périodes Favorables à la Conception selon l'Astrologie</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Jupiter en transit favorable sur la Maison V ou sur la Lune natale, les nouvelles lunes en signes fertiles (Cancer, Scorpion, Poissons), et certains transits de Vénus signalent des fenêtres propices à la conception.</p>
          <p className="text-gray-700 mb-6">
            L'astrologie de la maternité est une discipline à part entière. Plusieurs planètes et cycles sont particulièrement significatifs pour identifier les périodes favorables à la conception et à la grossesse.
          </p>

          <div className="space-y-5">
            <div className="bg-pink-50 border-l-4 border-pink-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-pink-700">&#x2A50; Jupiter — Le Grand Bienfaiteur</h3>
              <p className="text-gray-700">
                <strong>Jupiter</strong> est la planète de l'expansion, de l'abondance et de la chance. Son transit sur la Maison V (maison des enfants et de la créativité), sur votre Lune natale ou sur le Milieu du Ciel crée des fenêtres d'opportunité remarquables pour la conception. Jupiter change de signe environ tous les 12 mois — les astrologues identifient ces périodes de transit comme les plus propices à la naissance d'un projet parental, qu'il soit naturel ou assisté.
              </p>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-indigo-700">&#x1F319; Les Cycles Lunaires — Le Rythme de la Vie</h3>
              <p className="text-gray-700">
                La Lune gouverne les cycles féminins depuis la nuit des temps. Les <strong>nouvelles lunes</strong> en signes d'eau (Cancer, Scorpion, Poissons) sont traditionnellement considérées comme les périodes les plus fertiles du calendrier lunaire. La pleine lune, quant à elle, amplifie toutes les énergies en présence. Certaines approches de <strong>planification lunaire</strong> suggèrent de prêter attention à l'angle lune-soleil au moment de la naissance d'une femme comme cycle personnel de fertilité.
              </p>
            </div>

            <div className="bg-rose-50 border-l-4 border-rose-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-rose-700">&#x2640; Vénus et les Transits Favorables</h3>
              <p className="text-gray-700">
                <strong>Vénus</strong>, planète de l'amour, de la féminité et de la beauté, joue un rôle dans la fécondité. Ses transits favorables — notamment quand elle traverse les signes de Taureau ou de Cancer, ou quand elle forme un aspect harmonieux avec votre Maison V — renforcent l'énergie de réceptivité et d'accueil nécessaire à la grossesse. Les périodes où Vénus est en exaltation ou en domicile sont particulièrement propices aux projets de vie affectifs et familiaux.
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-orange-700">&#x2609; Les Maisons Astrologiques Clés</h3>
              <p className="text-gray-700">
                Dans la carte natale, la <strong>Maison V</strong> gouverne directement les enfants, la création et la procréation. Son état (signes des planètes qui y transitent, aspects reçus) révèle la facilité ou les défis du chemin vers la maternité. La <strong>Maison IV</strong> (foyer et famille) et la <strong>Maison VIII</strong> (transformations profondes) sont également analysées dans un bilan astrologique de maternité complet. Pour une lecture personnalisée intégrant votre thème natal, un <Link href="/methodes-voyance/tirage-tarot-amour" className="text-pink-600 hover:text-pink-800 underline font-medium">tirage tarot amour</Link> combiné à votre carte natale offre la vision la plus complète.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 — Questions à poser */}
        <section className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl p-8 mb-8 border-2 border-pink-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">&#x1F4AC; Questions à Poser à un Voyant sur la Grossesse</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">La qualité d'un tirage grossesse dépend directement de la précision des questions posées — des formulations ouvertes et spécifiques permettent au voyant d'accéder aux énergies les plus pertinentes pour votre situation.</p>
          <p className="text-gray-700 mb-6">
            Beaucoup de consultants arrivent avec la question "vais-je avoir un bébé ?" — une question légitime, mais souvent trop large pour obtenir les informations les plus utiles. Voici comment formuler des questions précises et productives.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-lg p-5 border-2 border-pink-200">
              <h3 className="font-bold text-lg mb-3 text-pink-700">&#x2714; Questions Productives</h3>
              <div className="space-y-2 text-gray-700">
                <p>&#x2192; "Quels sont les blocages énergétiques qui freinent ma grossesse ?"</p>
                <p>&#x2192; "Quelle est la fenêtre temporelle la plus favorable dans les 12 prochains mois ?"</p>
                <p>&#x2192; "Mon couple est-il aligné pour accueillir un enfant en ce moment ?"</p>
                <p>&#x2192; "Y a-t-il un deuil émotionnel à traverser avant que la grossesse puisse se produire ?"</p>
                <p>&#x2192; "Quels signes m'indiqueront que le bon moment est arrivé ?"</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-rose-200">
              <h3 className="font-bold text-lg mb-3 text-rose-700">&#x2718; Questions à Éviter</h3>
              <div className="space-y-2 text-gray-700">
                <p>&#x2192; "Quel jour exactement vais-je tomber enceinte ?" (trop précis, irréaliste)</p>
                <p>&#x2192; "Est-ce que je vais avoir trois enfants ?" (projection sur l'avenir lointain)</p>
                <p>&#x2192; "Mon médecin a-t-il tort ?" (le voyant ne se substitue pas au médecin)</p>
                <p>&#x2192; "C'est quoi le sexe de mon bébé ?" (sans grossesse confirmée)</p>
                <p>&#x2192; "Pourquoi est-ce que ça ne marche pas ?" (implique une cause unique)</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg mt-5">
            <h4 className="font-bold text-yellow-800 mb-2">&#x1F4A1; Conseil pour votre consultation</h4>
            <p className="text-gray-700">
              Arrivez à votre consultation avec vos dates de cycle (si pertinent), vos antécédents (fausses couches, traitements médicaux) et votre date de naissance. Ces informations permettent au voyant de combiner lecture intuitive et analyse astrologique pour une guidance beaucoup plus personnalisée et précise.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-8 text-pink-600">&#x2753; Questions Fréquentes sur la Voyance Grossesse</h2>
          <p className="text-lg font-semibold text-gray-800 mb-6">Retrouvez les réponses aux questions les plus posées sur la fiabilité des prédictions de grossesse, les cartes du tarot, les blocages et le bon moment pour consulter.</p>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">La voyance peut-elle vraiment prédire une grossesse ?</h3>
              <p className="text-gray-700 leading-relaxed">
                La <strong>voyance</strong> ne prédit pas la grossesse avec la certitude d'un test médical, mais elle peut révéler les énergies, les tendances et les dispositions favorables à une conception. Un voyant expérimenté, travaillant avec le <strong>tarot</strong> ou la clairvoyance, perçoit des potentiels et des cycles temporels propices. Certains tirages — notamment la présence de <strong>l'Impératrice</strong>, de l'As de Coupe ou de l'As de Bâton — signalent avec une fréquence remarquable des périodes de conception imminentes. Des milliers de consultants ont témoigné avoir consulté un voyant peu avant une grossesse confirmée médicalement. La voyance donne une orientation, pas une certitude absolue.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Quelles cartes du tarot annoncent une grossesse ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Plusieurs cartes du tarot de Marseille sont traditionnellement associées à la grossesse et à la naissance. <strong>L'Impératrice</strong> (arcane III) est la carte mère par excellence, symbolisant la fertilité, la création et la maternité épanouie. L'<strong>As de Bâton</strong> représente un nouveau souffle vital, une énergie de création qui commence. L'<strong>As de Coupe</strong> incarne l'abondance émotionnelle et l'ouverture du cœur à recevoir de la vie. <strong>La Lune</strong> évoque les cycles féminins, la gestation et le monde intérieur. Le Soleil annonce une <strong>naissance</strong> joyeuse et lumineuse. La présence combinée de deux ou trois de ces cartes dans un même <strong>tirage grossesse</strong> est un signal fort.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Mon désir d'enfant ne se réalise pas — que dit la voyance ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Quand le <strong>désir d'enfant</strong> se heurte à des obstacles, la voyance peut apporter un éclairage différent de la perspective médicale seule. Les cartes peuvent révéler des blocages émotionnels inconscients — peurs profondes, deuils non traversés, conflits intérieurs autour de la parentalité — qui freinent la conception au niveau énergétique. Elles peuvent aussi indiquer que le timing n'est pas encore aligné, ou que certaines conditions dans la <strong>relation de couple</strong> méritent d'être travaillées d'abord. La voyance ne remplace ni la médecine ni la psychologie, mais elle peut ouvrir des pistes de compréhension et d'action complémentaires, notamment en identifiant des <strong>périodes fertiles</strong> plus favorables à venir.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">À quel moment consulter un voyant pour une question de grossesse ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Il n'y a pas de mauvais moment pour consulter un voyant sur votre désir d'enfant. Beaucoup consultent lorsqu'elles commencent à penser à fonder une famille et souhaitent une orientation sur le <strong>timing favorable</strong>. D'autres consultent après des mois d'essais sans succès, pour comprendre les blocages énergétiques ou recevoir un message d'espoir. Certains consultent après une fausse couche pour traverser ce deuil et comprendre la suite de leur chemin. Un voyant spécialisé dans la <strong>maternité</strong> peut adapter sa lecture selon votre situation spécifique. Venez avec vos questions précises — la qualité d'un tirage dépend en grande partie de la clarté de votre intention.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Connexes */}
        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900">&#x1F4DA; Articles Connexes</h3>
          <div className="space-y-2">
            <Link href="/sentiments" className="block text-pink-600 hover:text-pink-800 font-medium">&rarr; Sentiments & Avenir : Toutes nos Guidances</Link>
            <Link href="/sentiments/avenir-amoureux" className="block text-pink-600 hover:text-pink-800 font-medium">&rarr; Mon Avenir Sentimental : Guidance Complète</Link>
            <Link href="/sentiments/maime-t-il-elle" className="block text-pink-600 hover:text-pink-800 font-medium">&rarr; Les Sentiments de mon Partenaire : Analyse Tarot</Link>
            <Link href="/methodes-voyance/tirage-tarot-amour" className="block text-pink-600 hover:text-pink-800 font-medium">&rarr; Tirage Tarot Amour : Guide Complet</Link>
          </div>
        </div>

        <VoyantFinalCTA topic="sentiments" source="voyance-grossesse-final" />
      </div>
    </main>
  );
}
