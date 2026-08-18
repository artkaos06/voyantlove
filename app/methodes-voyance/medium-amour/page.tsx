import Link from 'next/link';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import ContentPage, { contentMeta, type ContentPageConfig } from '@/components/ContentPage';

const config: ContentPageConfig = {
  title: 'Médium Amour : Médiumnité et Guidance Sentimentale',
  description: 'Découvrez ce qu\'est un médium en amour : dons médiumniques, déroulement d\'une consultation, ce qu\'un médium peut révéler sur votre vie sentimentale. Guide complet de la médiumnité amoureuse.',
  url: 'https://www.voyantlove.fr/methodes-voyance/medium-amour/',
  keywords: ['médium amour', 'médium amoureux', 'médiumnité amour', 'consultation médium sentimental', 'don de médium amour'],
  datePublished: '2026-08-06',
  dateModified: '2026-08-07',
  breadcrumb: [
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Méthodes de Voyance', url: 'https://www.voyantlove.fr/methodes-voyance/' },
    { name: 'Médium Amour', url: 'https://www.voyantlove.fr/methodes-voyance/medium-amour/' },
  ],
  header: {
    emoji: '🕊️',
    h1: 'Médium Amour',
    subtitle: 'La médiumnité au service de votre guidance sentimentale',
    gradient: 'from-fuchsia-700 via-purple-700 to-indigo-800',
    backLink: { href: '/methodes-voyance/', label: 'Retour aux Méthodes de Voyance' },
    anchors: [
      { href: '#dons', label: 'Les Dons Médiumniques', primary: true },
      { href: '#consultation', label: 'La Consultation' },
    ],
  },
  accentText: 'text-purple-700',
  stats: [
    { icon: '🕊️', value: '3 dons', label: 'Clair-perceptions' },
    { icon: '📡', value: 'Channeling', label: 'Réception de messages' },
    { icon: '🧘', value: 'État réceptif', label: 'Concentration profonde' },
    { icon: '💜', value: 'Guidance', label: 'Pas une prédiction figée' },
  ],
  eeat: { colorScheme: 'purple', method: 'Médiumnité et guidance sentimentale par channeling' },
  cta: { topic: 'methodes-voyance', slug: 'medium-amour' },
  faq: [
    {
      q: 'Quelle est la différence entre un médium et un voyant en amour ?',
      a: 'Un voyant s\'appuie généralement sur des outils, tarot, oracle, pendule, ou sur sa clairvoyance directe pour analyser une situation. Un médium se distingue par sa capacité revendiquée à recevoir des informations d\'une source extérieure à sa propre pensée : guides spirituels, énergies, parfois des proches disparus. En amour, un médium ne « lit » pas seulement une situation, il affirme recevoir des messages qui l\'éclairent, à travers des canaux comme la clairvoyance, la clairaudience ou la clairsentience.',
    },
    {
      q: 'Comment se déroule une consultation avec un médium pour une question d\'amour ?',
      a: 'La séance débute généralement par un temps d\'échange sur votre situation sentimentale, puis le médium se recentre et se met en état réceptif pour recevoir des impressions liées à votre question. Il partage ensuite ce qu\'il perçoit, images, mots, ressentis, au fur et à mesure, sans nécessairement connaître à l\'avance le déroulement complet de la séance.',
    },
    {
      q: 'Un médium peut-il vraiment prédire l\'avenir de mon couple ?',
      a: 'Un médium sérieux parle généralement de tendances énergétiques et d\'éclairages sur une situation présente, plutôt que de certitudes figées sur l\'avenir. La médiumnité offre une perception complémentaire à votre propre discernement, pas un verdict définitif qui dispenserait d\'agir et de communiquer dans votre relation.',
    },
    {
      q: 'Quels sont les différents dons médiumniques utilisés en amour ?',
      a: 'Les praticiens distinguent principalement la clairvoyance (perception d\'images), la clairaudience (perception de mots ou de sons) et la clairsentience (perception d\'émotions et de sensations physiques). Un médium peut posséder un ou plusieurs de ces dons, qu\'il mobilise selon la nature de votre question amoureuse.',
    },
    {
      q: 'Qu’est-ce qu’un médium sans support en amour ?',
      a: 'Un médium sans support affirme recevoir ses perceptions directement, sans tirer de cartes ni utiliser de pendule ou de boule de cristal. Il peut demander quelques informations de contexte pour cadrer la question, puis décrire les images, mots ou ressentis qui lui viennent. « Sans support » décrit donc sa méthode de perception, pas une absence de dialogue avec la personne qui consulte.',
    },
  ],
  related: [
    { href: '/methodes-voyance/', label: 'Toutes les Méthodes de Voyance Amoureuse' },
    { href: '/methodes-voyance/suis-je-medium-comment-savoir/', label: 'Suis-je Médium ? Comment le Savoir' },
    { href: '/methodes-voyance/voyance-sentimentale/', label: 'Voyance Sentimentale' },
    { href: '/methodes-voyance/boule-de-cristal-amour/', label: 'Boule de Cristal Amour' },
    { href: '/methodes-voyance/voyance-telephone-amour/', label: 'Voyance par Téléphone' },
    { href: '/glossaire/clairvoyance/', label: 'Glossaire : Clairvoyance' },
    { href: '/glossaire/channeling/', label: 'Glossaire : Channeling' },
  ],
};

export const metadata = contentMeta(config);

export default function MediumAmourPage() {
  return (
    <ContentPage config={config}>
        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-purple-700">
          <p className="text-lg leading-relaxed mb-4">
            Un <strong>médium</strong> se distingue des autres praticiens de <Link href="/voyance-amour/" className="text-purple-700 hover:text-purple-900 underline font-medium">voyance amoureuse</Link> par la nature de sa perception : là où le tarologue interprète des cartes et l&apos;astrologue analyse un thème, le médium affirme <strong>recevoir directement</strong> des informations sur votre situation sentimentale, par clairvoyance, clairaudience ou clairsentience, sans passer par un support symbolique à décoder. En amour, cette faculté est mobilisée pour ressentir l&apos;état affectif réel d&apos;un partenaire, capter l&apos;énergie d&apos;une relation, ou recevoir un message de guidance sur une décision de cœur.
          </p>
          <p className="text-lg leading-relaxed">
            Cette guidance complète explique les différents dons médiumniques utilisés en amour, comment se déroule une consultation, ce qu&apos;un médium peut raisonnablement vous apporter, et comment cette approche se distingue des autres méthodes de voyance sentimentale.
          </p>
        </article>

        <VoyantRecommendations topic="methodes-voyance" limit={3} showOnlineFirst={true} source="medium-amour-cards-top" />

        {/* Section 1: Dons médiumniques */}
        <section id="dons" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">✨ Les Différents Dons Médiumniques Utilisés en Amour</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Clairvoyance, clairaudience et clairsentience sont les trois canaux de perception principaux qu&apos;un médium mobilise pour éclairer votre vie sentimentale.</p>
          <p className="text-gray-700 mb-6">
            La <strong>médiumnité</strong> ne désigne pas un don unique, mais un ensemble de facultés de perception que chaque praticien développe différemment. Voici les trois canaux les plus mobilisés en consultation amoureuse.
          </p>
          <div className="space-y-5">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-purple-800">👁️ La Clairvoyance</h3>
              <p className="text-gray-700 text-sm">La perception d&apos;<strong>images</strong> et de symboles liés à votre situation amoureuse : le visage ou l&apos;attitude d&apos;une personne, une scène évocatrice, l&apos;ambiance d&apos;une relation. C&apos;est le don le plus souvent associé au mot « voyance » lui-même.</p>
            </div>
            <div className="bg-fuchsia-50 border-l-4 border-fuchsia-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-fuchsia-800">👂 La Clairaudience</h3>
              <p className="text-gray-700 text-sm">La perception de <strong>mots, phrases ou noms</strong> en lien avec votre question : un médium clairaudient peut « entendre » intérieurement une information précise qui vient préciser sa lecture de votre situation.</p>
            </div>
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-indigo-800">💓 La Clairsentience</h3>
              <p className="text-gray-700 text-sm">La capacité à <strong>ressentir physiquement ou émotionnellement</strong> l&apos;énergie d&apos;une situation ou d&apos;une personne : un médium clairsentient peut percevoir la tension, l&apos;affection ou l&apos;ambivalence d&apos;un partenaire comme s&apos;il la vivait lui-même l&apos;espace d&apos;un instant.</p>
            </div>
          </div>
          <div className="bg-purple-100 border-l-4 border-purple-600 p-5 rounded-lg mt-6">
            <p className="text-gray-700"><strong>Bon à savoir :</strong> la plupart des médiums combinent plusieurs de ces dons au cours d&apos;une même séance, et certains pratiquent également le <strong>channeling</strong>, la réception de messages venant de guides spirituels, pour enrichir leur lecture de votre situation sentimentale.</p>
          </div>
        </section>

        <section id="sans-support" className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 mb-8 border-2 border-indigo-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🕊️ Médium Sans Support en Amour : une Perception Sans Outil</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Un médium dit « sans support » ne tire ni tarot ni oracle et n’utilise pas de pendule : il s’appuie sur ses perceptions directes pour éclairer la question sentimentale.</p>
          <p className="text-gray-700 leading-relaxed mb-5">Dans une consultation amoureuse, cette approche commence généralement par une question claire et quelques éléments de contexte. Le praticien se concentre ensuite sur les images, mots, sensations ou impressions qu’il affirme recevoir. Il les restitue au fil de l’échange, puis la personne qui consulte peut demander des précisions. L’absence de cartes ne signifie donc pas une séance muette ni une réponse instantanée sans contexte.</p>
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div className="bg-white rounded-lg p-5 border-l-4 border-indigo-500">
              <h3 className="font-bold text-indigo-800 mb-2">Ce qui distingue cette pratique</h3>
              <p className="text-gray-700 text-sm">Le tarot construit une lecture à partir d’une symbolique visible et structurée. Le médium sans support présente sa lecture comme une perception spontanée, souvent par clairvoyance, clairaudience ou clairsentience. Certains praticiens proposent toutefois un support en complément si la question demande une structure plus précise.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-purple-500">
              <h3 className="font-bold text-purple-800 mb-2">Questions adaptées en amour</h3>
              <p className="text-gray-700 text-sm">Cette méthode convient surtout à une demande ouverte sur l’ambiance d’une relation, les ressentis dominants, un blocage ou une direction possible. Pour comparer plusieurs scénarios ou construire une chronologie détaillée, un tirage de cartes structuré peut être plus lisible.</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">Avant de consulter, demandez au praticien s’il travaille entièrement sans outil ou s’il combine médiumnité et tarot. Vous saurez ainsi quel type de dialogue et de restitution attendre pendant la séance.</p>
        </section>

        {/* Section 2: Ce qu'un médium peut apporter */}
        <section className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-xl p-8 mb-8 border-2 border-purple-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">💜 Ce qu&apos;un Médium Peut (et ne Peut pas) Vous Dire en Amour</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Un médium sérieux éclaire une énergie et une tendance, jamais une certitude absolue sur l&apos;avenir de votre couple.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border-2 border-green-300">
              <h3 className="font-bold text-green-800 mb-3">✓ Ce qu&apos;il peut apporter</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Un éclairage sur l&apos;état émotionnel réel d&apos;un partenaire</li>
                <li>• Une perception de l&apos;énergie et de la dynamique d&apos;une relation</li>
                <li>• Un message de guidance pour prendre une décision de cœur</li>
                <li>• Une mise en lumière de blocages affectifs inconscients</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border-2 border-red-300">
              <h3 className="font-bold text-red-800 mb-3">✗ Ce qu&apos;il ne devrait pas promettre</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Une date exacte de rencontre ou de retour garantie</li>
                <li>• Un résultat certain sur une décision qui appartient à deux personnes</li>
                <li>• Un « diagnostic » définitif sans nuance ni possibilité d&apos;évolution</li>
                <li>• Un rituel payant présenté comme la seule voie de résultat</li>
              </ul>
            </div>
          </div>
        </section>

        <VoyantQuickCTA topic="methodes-voyance" source="medium-amour-banner-mid" />

        {/* Section 3: Médium vs autres méthodes */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">⚖️ Médium, Tarot ou Pendule : Quelle Méthode Choisir ?</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Le médium excelle pour ressentir une énergie et recevoir une guidance globale, le tarot pour une analyse structurée, le pendule pour une réponse binaire rapide.</p>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-purple-50 rounded-lg p-5 border-2 border-purple-300">
              <h3 className="font-bold text-lg mb-3 text-purple-700">🕊️ Médium</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p>&bull; Perception directe, sans support</p>
                <p>&bull; Idéal pour ressentir une énergie globale</p>
                <p>&bull; Guidance parfois formulée comme reçue de guides</p>
              </div>
            </div>
            <div className="bg-indigo-50 rounded-lg p-5 border-2 border-indigo-300">
              <h3 className="font-bold text-lg mb-3 text-indigo-700">🃏 Tarot</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p>&bull; Grille symbolique structurée</p>
                <p>&bull; Idéal pour une analyse narrative détaillée</p>
              </div>
              <p className="text-sm text-indigo-600 mt-3">
                <Link href="/methodes-voyance/tarologie-amoureuse/" className="underline hover:text-indigo-800 font-medium">Découvrir la tarologie &rarr;</Link>
              </p>
            </div>
            <div className="bg-rose-50 rounded-lg p-5 border-2 border-rose-300">
              <h3 className="font-bold text-lg mb-3 text-rose-700">🔮 Pendule</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p>&bull; Réponses oui/non directes</p>
                <p>&bull; Idéal pour confirmer une intuition précise</p>
              </div>
              <p className="text-sm text-rose-600 mt-3">
                <Link href="/methodes-voyance/pendule-amour/" className="underline hover:text-rose-800 font-medium">Découvrir le pendule &rarr;</Link>
              </p>
            </div>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-lg mt-6">
            <p className="text-gray-700"><strong>À noter :</strong> cette page présente la <strong>médiumnité</strong> comme méthode de perception. Pour choisir le <strong>canal de communication</strong> de votre consultation (téléphone, chat, mail), consultez notre guide de la <Link href="/methodes-voyance/voyance-telephone-amour/" className="text-purple-700 hover:text-purple-900 underline font-medium">voyance par téléphone</Link> ou notre page <Link href="/methodes-voyance/voyance-sentimentale/" className="text-purple-700 hover:text-purple-900 underline font-medium">voyance sentimentale</Link>, qui couvre l&apos;ensemble des options disponibles.</p>
          </div>
        </section>

        {/* Section 4: Consultation */}
        <section id="consultation" className="bg-gradient-to-br from-fuchsia-50 to-indigo-50 rounded-xl p-8 mb-8 border-2 border-fuchsia-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🧘 Comment se Déroule une Consultation Médiumnique Amoureuse</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">La séance alterne temps d&apos;échange, moments de concentration du médium, et partage progressif des impressions perçues sur votre situation.</p>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-l-4 border-purple-400">
              <h3 className="font-bold text-purple-700 mb-1">1. Présentation de votre situation</h3>
              <p className="text-gray-700 text-sm">Un premier échange permet au médium de cerner le contexte général de votre question sentimentale, sans que vous ayez à tout détailler à l&apos;avance.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-fuchsia-400">
              <h3 className="font-bold text-fuchsia-700 mb-1">2. Mise en état réceptif</h3>
              <p className="text-gray-700 text-sm">Le praticien se recentre, parfois par une courte méditation, pour entrer dans l&apos;état de perception nécessaire à la médiumnité.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-indigo-400">
              <h3 className="font-bold text-indigo-700 mb-1">3. Partage et dialogue</h3>
              <p className="text-gray-700 text-sm">Le médium partage progressivement ce qu&apos;il perçoit, en répondant à vos questions pour affiner la lecture de votre situation amoureuse.</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link href="/consulter/?ref=medium-amour" className="inline-block bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition">Consulter un Médium Vérifié →</Link>
          </div>
        </section>
    </ContentPage>
  );
}
