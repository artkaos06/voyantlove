import Link from 'next/link';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import ContentPage, { contentMeta, type ContentPageConfig } from '@/components/ContentPage';

const config: ContentPageConfig = {
  title: 'Cartomancie Amour : L\'Art des Cartes au Service de Votre Cœur',
  description: 'Découvrez la cartomancie amoureuse : Petit Lenormand, jeu de 32 cartes, symbolique des couleurs. Guide complet pour comprendre cet art divinatoire ancestral appliqué aux questions de cœur.',
  url: 'https://www.voyantlove.fr/methodes-voyance/cartomancie-amour/',
  keywords: ['cartomancie amour', 'cartomancie amoureuse', 'petit lenormand amour', 'cartomancien amour', 'tirage cartomancie sentimental'],
  datePublished: '2026-08-06',
  dateModified: '2026-08-06',
  breadcrumb: [
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Méthodes de Voyance', url: 'https://www.voyantlove.fr/methodes-voyance/' },
    { name: 'Cartomancie Amour', url: 'https://www.voyantlove.fr/methodes-voyance/cartomancie-amour/' },
  ],
  header: {
    emoji: '🎴',
    h1: 'Cartomancie Amour',
    subtitle: 'L\'art ancestral des cartes au service de votre vie sentimentale',
    gradient: 'from-teal-600 via-cyan-600 to-blue-700',
    backLink: { href: '/methodes-voyance', label: 'Retour aux Méthodes de Voyance' },
    anchors: [
      { href: '#lenormand', label: 'Le Petit Lenormand', primary: true },
      { href: '#consultation', label: 'Consulter un Cartomancien' },
    ],
  },
  accentText: 'text-teal-700',
  stats: [
    { icon: '🎴', value: '36 cartes', label: 'Petit Lenormand' },
    { icon: '📜', value: '19e siècle', label: 'Origine en France' },
    { icon: '💞', value: 'Direct', label: 'Réponses concrètes' },
    { icon: '🔗', value: 'Combinatoire', label: 'Lecture par association' },
  ],
  eeat: { colorScheme: 'teal', method: 'Cartomancie amoureuse, Petit Lenormand et cartes traditionnelles' },
  cta: { topic: 'methodes-voyance', slug: 'cartomancie-amour' },
  faq: [
    {
      q: 'Quelle est la différence entre cartomancie et tarot ?',
      a: 'La cartomancie est le terme général qui désigne l\'art de tirer les cartes pour la divination, quel que soit le jeu utilisé : Petit Lenormand, jeu de 32 cartes ordinaires, ou même le tarot. Le tarot est donc une forme de cartomancie, mais historiquement, le terme « cartomancie » en français désigne surtout la lecture du Petit Lenormand ou des cartes à jouer classiques, aux symboles concrets et à la lecture combinatoire, par opposition aux 78 arcanes du tarot et à leur symbolique plus riche et narrative. Un cartomancien professionnel peut maîtriser plusieurs de ces supports.',
    },
    {
      q: 'Qu\'est-ce que le Petit Lenormand et pourquoi est-il utilisé en amour ?',
      a: 'Le Petit Lenormand est un jeu de 36 cartes aux symboles simples et concrets (le Cœur, l\'Anneau, le Navire, les Nuages) qui se combinent entre elles pour former une réponse précise, un peu comme des mots assemblés en phrase. En amour, il est particulièrement apprécié car il donne des réponses directes et peu ambiguës aux questions sentimentales : la carte Cœur associée à l\'Anneau évoque un engagement sincère, tandis que Cœur associée aux Nuages suggère des sentiments troublés par le doute.',
    },
    {
      q: 'Comment se déroule un tirage de cartomancie amoureuse ?',
      a: 'Le cartomancien commence généralement par un échange sur votre situation, puis vous invite à formuler votre question sentimentale de façon claire. Il mélange ensuite les cartes en se concentrant sur votre énergie avant de les disposer selon le tirage choisi : tirage en croix, grand tableau de 36 cartes, ou tirage ciblé de trois à cinq cartes. L\'interprétation se fait carte par carte, puis dans la logique combinatoire d\'ensemble propre à la cartomancie.',
    },
    {
      q: 'Peut-on pratiquer la cartomancie amoureuse soi-même ?',
      a: 'Techniquement oui, avec un jeu de 32 cartes ou un Petit Lenormand et un peu d\'apprentissage des significations de base. Mais la cartomancie repose sur une lecture combinatoire fine, où le sens naît de l\'association entre plusieurs cartes selon leur position : une pratique autodidacte manque souvent de la nuance qu\'apporte un praticien expérimenté, en particulier pour des questions amoureuses complexes ou chargées émotionnellement.',
    },
  ],
  related: [
    { href: '/methodes-voyance', label: 'Toutes les Méthodes de Voyance Amoureuse' },
    { href: '/methodes-voyance/tirage-tarot-amour', label: 'Tirage Tarot Amour : Guide Complet' },
    { href: '/methodes-voyance/tarologie-amoureuse', label: 'Tarologie Amoureuse' },
    { href: '/methodes-voyance/oracle-amour', label: 'Oracle de l\'Amour' },
    { href: '/glossaire/petit-lenormand', label: 'Glossaire : Petit Lenormand' },
    { href: '/glossaire/carte-inversee', label: 'Glossaire : Carte Inversée' },
  ],
};

export const metadata = contentMeta(config);

export default function CartomancieAmourPage() {
  return (
    <ContentPage config={config}>
        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-teal-600">
          <p className="text-lg leading-relaxed mb-4">
            La <strong>cartomancie amour</strong> est l&apos;art ancestral de lire les cartes pour éclairer votre vie sentimentale, non pas avec les 78 arcanes du <Link href="/methodes-voyance/tirage-tarot-amour" className="text-teal-700 hover:text-teal-900 underline font-medium">tarot</Link>, mais avec des jeux plus anciens et plus directs : le <strong>Petit Lenormand</strong>, ses 36 cartes aux symboles concrets, ou le traditionnel <strong>jeu de 32 cartes</strong> utilisé par les cartomanciennes depuis des générations. Là où le tarot déploie une symbolique riche à interpréter carte par carte, la cartomancie fonctionne par <strong>combinaison</strong> : deux ou trois cartes assemblées forment une phrase, une réponse nette à votre question de cœur.
          </p>
          <p className="text-lg leading-relaxed">
            Cette guidance complète vous explique l&apos;histoire de la cartomancie, le fonctionnement du Petit Lenormand et du jeu de 32 cartes, la symbolique des couleurs, comment se déroule une consultation, et comment choisir un cartomancien de confiance pour vos questions amoureuses.
          </p>
        </article>

        <VoyantQuickCTA topic="methodes-voyance" source="cartomancie-amour-early" />

        {/* Section 1: Qu'est-ce que la cartomancie */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">📖 Qu&apos;est-ce que la Cartomancie Amoureuse ?</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">La cartomancie est l&apos;art de lire des cartes ordinaires ou du Petit Lenormand pour révéler les dynamiques amoureuses, une pratique distincte du tarot par son approche plus concrète et combinatoire.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            La <strong>cartomancie</strong> désigne, au sens strict, la divination par les cartes en général, mais dans l&apos;usage courant français, elle renvoie surtout à la tradition du <strong>Petit Lenormand</strong> et du <strong>jeu de 32 cartes</strong>, distincte du tarot par son histoire et sa méthode de lecture. Cette pratique remonte au dix-huitième siècle, popularisée en France par des figures comme <strong>Etteilla</strong>, premier cartomancien professionnel connu, puis par la légendaire <strong>Marie-Anne Lenormand</strong>, consultée sous le Premier Empire par des personnalités de la cour impériale.
          </p>
          <div className="space-y-5">
            <div className="bg-teal-50 border-l-4 border-teal-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-teal-800">Une Tradition Populaire et Accessible</h3>
              <p className="text-gray-700 text-sm">
                Contrairement au tarot, souvent perçu comme plus ésotérique, la cartomancie s&apos;est historiquement transmise dans un cadre plus populaire : de mère en fille, entre voisines, lors de veillées. Cette accessibilité explique sa popularité durable pour les questions du quotidien, et tout particulièrement pour les questions de <strong>cœur</strong>, où sa précision et sa clarté sont recherchées.
              </p>
            </div>
            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-cyan-800">Une Lecture par Combinaison, pas par Symbole Isolé</h3>
              <p className="text-gray-700 text-sm">
                La grande différence avec le tarot tient à la <strong>méthode de lecture</strong> : une carte de cartomancie se lit rarement seule. Son sens se construit dans sa relation aux cartes voisines, un peu comme des mots qui prennent leur sens complet une fois assemblés en phrase. Cette logique combinatoire rend la cartomancie particulièrement adaptée aux réponses directes que recherchent les consultants sur leurs questions amoureuses.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Petit Lenormand */}
        <section id="lenormand" className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-8 mb-8 border-2 border-teal-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🎴 Le Petit Lenormand : Le Jeu de Référence en Amour</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Le Petit Lenormand compte 36 cartes aux symboles concrets, Cœur, Anneau, Navire, dont la combinaison offre des réponses amoureuses précises et rarement ambiguës.</p>
          <p className="text-gray-700 mb-6">
            Nommé d&apos;après Marie-Anne Lenormand bien que commercialisé après sa mort, ce jeu de <strong>36 cartes</strong> s&apos;est imposé comme la référence de la cartomancie amoureuse en France. Voici les cartes les plus scrutées lors d&apos;un tirage sentimental.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-lg p-5 border-l-4 border-rose-500">
              <h3 className="font-bold text-lg mb-2 text-rose-700">💗 Le Cœur</h3>
              <p className="text-gray-700 text-sm">La carte centrale de toute question amoureuse. Associée à l&apos;Anneau, elle annonce un engagement sincère ; associée aux Nuages, elle signale des sentiments troublés par le doute.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-amber-500">
              <h3 className="font-bold text-lg mb-2 text-amber-700">💍 L&apos;Anneau</h3>
              <p className="text-gray-700 text-sm">Symbole d&apos;engagement et d&apos;union. Proche du Cœur, elle confirme un mariage ou des fiançailles ; isolée, elle peut simplement indiquer un accord ou une promesse.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-2 text-blue-700">⛵ Le Navire</h3>
              <p className="text-gray-700 text-sm">Le voyage, l&apos;éloignement, parfois une rencontre venue d&apos;ailleurs. En amour, elle peut annoncer une relation à distance ou un déplacement lié à une histoire de cœur.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-slate-500">
              <h3 className="font-bold text-lg mb-2 text-slate-700">☁️ Les Nuages</h3>
              <p className="text-gray-700 text-sm">Confusion, malentendu, période trouble. Elle invite à la patience et à la clarification avant de tirer des conclusions sur une situation amoureuse ambiguë.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-red-500">
              <h3 className="font-bold text-lg mb-2 text-red-700">🦊 Le Renard</h3>
              <p className="text-gray-700 text-sm">Ruse, méfiance, parfois un manque de sincérité de l&apos;un des partenaires. Une carte qui invite à la vigilance plutôt qu&apos;à la confiance aveugle.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-emerald-500">
              <h3 className="font-bold text-lg mb-2 text-emerald-700">🏠 La Maison</h3>
              <p className="text-gray-700 text-sm">Le foyer, la stabilité, la vie à deux installée. Associée au Cœur, elle annonce un amour durable qui s&apos;ancre dans le quotidien partagé.</p>
            </div>
          </div>
          <div className="bg-teal-100 border-l-4 border-teal-600 p-5 rounded-lg mt-6">
            <p className="text-gray-700"><strong>La logique combinatoire :</strong> une lecture du Petit Lenormand ne s&apos;arrête jamais à une seule carte. Le <strong>grand tableau</strong>, qui dispose les 36 cartes selon un schéma fixe, permet une lecture d&apos;ensemble très détaillée de votre vie amoureuse, la zone du Cœur et son voisinage direct concentrant l&apos;essentiel des réponses sentimentales.</p>
          </div>
        </section>

        {/* Section 3: jeu de 32 cartes */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">♥️ Le Jeu de 32 Cartes et la Symbolique des Couleurs</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Le jeu de 32 cartes ordinaires, celui de la belote, porte lui aussi une symbolique divinatoire précise en amour, chaque couleur incarnant un domaine de vie.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Avant même le Petit Lenormand, les cartomanciennes françaises lisaient l&apos;avenir dans un simple <strong>jeu de 32 cartes</strong>, celui-là même utilisé pour la belote ou le piquet. Chaque couleur y porte un domaine symbolique précis, hérité d&apos;une tradition orale transmise de génération en génération.
          </p>
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
              <div className="text-3xl mb-2">♥️</div>
              <h3 className="font-bold text-red-700 mb-1">Cœur</h3>
              <p className="text-xs text-gray-600">Amour, sentiments, famille</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 text-center border border-orange-200">
              <div className="text-3xl mb-2">♦️</div>
              <h3 className="font-bold text-orange-700 mb-1">Carreau</h3>
              <p className="text-xs text-gray-600">Argent, communication, projets</p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-4 text-center border border-emerald-200">
              <div className="text-3xl mb-2">♣️</div>
              <h3 className="font-bold text-emerald-700 mb-1">Trèfle</h3>
              <p className="text-xs text-gray-600">Chance, réussite, opportunités</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 text-center border border-slate-200">
              <div className="text-3xl mb-2">♠️</div>
              <h3 className="font-bold text-slate-700 mb-1">Pique</h3>
              <p className="text-xs text-gray-600">Épreuves, obstacles, ruptures</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            En amour, une majorité de <strong>Cœurs</strong> dans un tirage signale une période sentimentale intense et favorable ; une accumulation de <strong>Piques</strong> invite à la prudence face à une épreuve traversée par le couple, sans pour autant en annoncer l&apos;issue fatale. C&apos;est toujours l&apos;équilibre d&apos;ensemble du tirage, et non une seule carte, qui oriente la lecture d&apos;un <strong>cartomancien</strong> expérimenté.
          </p>
        </section>

        <VoyantRecommendations topic="methodes-voyance" limit={3} showOnlineFirst={true} source="cartomancie-amour-mid" />

        {/* Section 4: Cartomancie vs Tarot vs Oracle */}
        <section className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 mb-8 border-2 border-cyan-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">⚖️ Cartomancie, Tarot ou Oracle : Que Choisir ?</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">La cartomancie excelle pour des réponses concrètes et rapides, le tarot pour une analyse psychologique profonde, l&apos;oracle pour une guidance intuitive et douce.</p>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-white rounded-lg p-5 border-2 border-teal-300">
              <h3 className="font-bold text-lg mb-3 text-teal-700">🎴 Cartomancie</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p>&bull; <strong>Force :</strong> réponses concrètes et directes</p>
                <p>&bull; <strong>Idéal pour :</strong> confirmer une situation précise</p>
                <p>&bull; <strong>Limite :</strong> moins narrative sur le « pourquoi »</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 border-2 border-indigo-300">
              <h3 className="font-bold text-lg mb-3 text-indigo-700">🃏 Tarot</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p>&bull; <strong>Force :</strong> profondeur psychologique</p>
                <p>&bull; <strong>Idéal pour :</strong> comprendre une dynamique complexe</p>
                <p>&bull; <strong>Limite :</strong> lecture plus longue à interpréter</p>
              </div>
              <p className="text-sm text-indigo-600 mt-3">
                <Link href="/methodes-voyance/tarologie-amoureuse" className="underline hover:text-indigo-800 font-medium">Découvrir la tarologie amoureuse &rarr;</Link>
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 border-2 border-purple-300">
              <h3 className="font-bold text-lg mb-3 text-purple-700">✨ Oracle</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p>&bull; <strong>Force :</strong> messages intuitifs et bienveillants</p>
                <p>&bull; <strong>Idéal pour :</strong> guidance émotionnelle douce</p>
                <p>&bull; <strong>Limite :</strong> moins systématique</p>
              </div>
              <p className="text-sm text-purple-600 mt-3">
                <Link href="/methodes-voyance/oracle-amour" className="underline hover:text-purple-800 font-medium">Découvrir l&apos;oracle amour &rarr;</Link>
              </p>
            </div>
          </div>
          <div className="bg-white border-l-4 border-teal-500 p-5 rounded-lg mt-6">
            <p className="text-gray-700"><strong>Le conseil VoyantLove :</strong> pour une question fermée et précise (« Va-t-il revenir ? », « Est-ce le bon ? »), la <strong>cartomancie</strong> apporte souvent la réponse la plus nette. Pour comprendre les rouages émotionnels d&apos;une relation, le <strong>tarot</strong> ou la <Link href="/methodes-voyance/voyance-sentimentale" className="text-teal-700 hover:text-teal-900 underline font-medium">voyance sentimentale</Link> complète offrent une lecture plus approfondie.</p>
          </div>
        </section>

        {/* Section 5: Consultation */}
        <section id="consultation" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🧙 Consulter un Cartomancien Spécialisé en Amour</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Un bon cartomancien combine la maîtrise technique du Petit Lenormand ou du jeu de 32 cartes à une intuition affinée, indispensable pour nuancer une lecture combinatoire.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            La cartomancie amoureuse demande une double compétence : la connaissance rigoureuse des significations et des combinaisons, et une sensibilité intuitive qui permet d&apos;adapter la lecture à votre situation précise. Voici comment se déroule généralement une consultation.
          </p>
          <div className="space-y-5">
            <div className="bg-teal-50 border-l-4 border-teal-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-teal-700">1. L&apos;Échange Préalable</h3>
              <p className="text-gray-700 text-sm">Le cartomancien vous écoute présenter votre situation sentimentale, sans avoir besoin de tout détailler : cette étape sert surtout à cerner le contexte général de votre question.</p>
            </div>
            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-cyan-700">2. La Formulation de la Question</h3>
              <p className="text-gray-700 text-sm">Une question claire et centrée sur vous, « Que ressent-il/elle pour moi ? » plutôt que « Que va-t-il se passer ? », permet un tirage plus précis et une lecture plus utile.</p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-blue-700">3. Le Tirage et l&apos;Interprétation</h3>
              <p className="text-gray-700 text-sm">Le praticien dispose les cartes selon le tirage adapté à votre question, puis interprète chaque carte dans sa relation aux cartes voisines, jamais de façon isolée.</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link href="/consulter?ref=cartomancie-amour" className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition">Consulter un Cartomancien Vérifié →</Link>
          </div>
        </section>
    </ContentPage>
  );
}
