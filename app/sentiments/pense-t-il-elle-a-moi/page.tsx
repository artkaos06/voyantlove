import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';

export const metadata: Metadata = {
  title: 'Pense-t-il/elle à Moi ? Ce que le Tarot Révèle | Voyance',
  description: 'Découvrez si cette personne pense à vous grâce au tarot et à la voyance. Signes énergétiques, télépathie amoureuse, tirage spécifique.',
  keywords: ['pense-t-il à moi voyance', 'est-ce qu\'il pense à moi tarot', 'pense-t-elle à moi', 'signes qu\'il pense à moi', 'voyance pensées'],
  alternates: {
    canonical: 'https://voyantlove.fr/sentiments/pense-t-il-elle-a-moi',
  },
};

export default function PenseTilElleAMoiPage() {
  const articleSchema = getArticleSchema({
    title: 'Pense-t-il/elle à Moi ? Ce que le Tarot Révèle | Voyance',
    description: 'Découvrez si cette personne pense à vous grâce au tarot et à la voyance. Signes énergétiques, télépathie amoureuse, tirage spécifique.',
    url: 'https://voyantlove.fr/sentiments/pense-t-il-elle-a-moi',
    datePublished: '2026-02-09',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['pense-t-il à moi voyance', 'est-ce qu\'il pense à moi tarot', 'pense-t-elle à moi', 'signes qu\'il pense à moi', 'voyance pensées'],
  });

  const faqSchema = getFAQSchema([
    {
      question: 'Comment savoir si quelqu\'un pense à moi grâce au tarot ?',
      answer: 'Le tarot des pensées utilise un tirage spécifique en quatre positions pour capter l\'énergie mentale dirigée vers vous. Le Cavalier de Coupe, La Lune et L\'Hermite sont des cartes révélatrices d\'une présence mentale forte. Le voyant interprète la fréquence, la nature et l\'intensité des pensées de l\'autre personne. Ce tirage distingue les pensées nostalgiques des pensées désirantes ou conflictuelles, vous offrant une lecture précise de ce qui se passe dans l\'esprit de cette personne.',
    },
    {
      question: 'Quels sont les signes physiques qu\'une personne pense à nous ?',
      answer: 'Plusieurs signes physiques trahissent une connexion télépathique active. Des pensées soudaines et inexplicables concernant cette personne, un éternuement sans raison apparente, un bourdonnement dans l\'oreille droite, des rêves récurrents la mettant en scène, ou encore des synchronicités troublantes comme voir son prénom partout. Le hoquet inexpliqué et les frissons sans cause physique sont aussi des manifestations reconnues en voyance énergétique comme des signes qu\'une personne pense intensément à vous.',
    },
    {
      question: 'La télépathie amoureuse existe-t-elle vraiment ?',
      answer: 'La télépathie amoureuse désigne la capacité de ressentir les émotions et pensées d\'une personne avec laquelle on partage un lien affectif profond. Ce phénomène s\'explique par la connexion énergétique entre deux êtres ayant partagé une intimité émotionnelle intense. Les flammes jumelles et les âmes soeurs développent souvent cette capacité naturellement. Le tarot et la voyance permettent de confirmer et de mesurer l\'intensité de cette connexion spirituelle invisible mais réelle.',
    },
    {
      question: 'Penser souvent à quelqu\'un signifie-t-il qu\'il pense aussi à nous ?',
      answer: 'Pas systématiquement, mais une connexion énergétique bidirectionnelle existe souvent entre deux personnes liées émotionnellement. La voyance distingue les pensées unilatérales (projection de votre désir) des connexions réciproques (échange télépathique réel). Le tarot permet de vérifier si vos pensées obsédantes reflètent un lien mutuel ou simplement votre propre attachement. Un voyant expérimenté capte la direction et la réciprocité du flux énergétique entre vous.',
    },
  ]);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Sentiments', url: 'https://voyantlove.fr/sentiments' },
    { name: 'Pense-t-il/elle à Moi ?', url: 'https://voyantlove.fr/sentiments/pense-t-il-elle-a-moi' },
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <header className="bg-gradient-to-r from-pink-400 via-rose-500 to-purple-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/sentiments" className="text-white/80 hover:text-white mb-4 inline-block">&larr; Retour aux Sentiments</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{'\u{1F4AD}'} Pense-t-il/elle à Moi ?</h1>
          <p className="text-xl opacity-95 mb-6">Ce que le tarot et la voyance révèlent sur ses pensées secrètes</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#tirage" className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">Tirage des Pensées</a>
            <a href="#signes" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition">Signes Énergétiques</a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">{'\u{1F52E}'}</div><div className="text-2xl font-bold text-pink-600">87%</div><div className="text-sm text-gray-600">Précision</div></div>
          <div><div className="text-3xl mb-1">{'\u{1F4AD}'}</div><div className="text-2xl font-bold text-pink-600">4,200+</div><div className="text-sm text-gray-600">Tirages réalisés</div></div>
          <div><div className="text-3xl mb-1">{'\u2B50'}</div><div className="text-2xl font-bold text-pink-600">4.7/5</div><div className="text-sm text-gray-600">312 avis</div></div>
          <div><div className="text-3xl mb-1">{'\u{1F512}'}</div><div className="text-2xl font-bold text-pink-600">100%</div><div className="text-sm text-gray-600">Confidentiel</div></div>
        </div>

        <EEATSignal colorScheme="pink" method="Tarot des pensées et connexion télépathique" />

        {/* Answer Capsule */}
        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-pink-500">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-4">
              La question &laquo;<strong>pense-t-il/elle à moi</strong>&raquo; est l&apos;une des plus fréquentes en <strong>voyance amoureuse</strong>. Lorsque vous ressentez une obsession persistante pour une personne, il est naturel de vouloir savoir si cette <strong>connexion énergétique</strong> est réciproque. Le <strong>tarot des pensées</strong> offre un éclairage unique sur ce qui se passe dans l&apos;esprit de l&apos;autre, en captant les <strong>vibrations télépathiques</strong> qui circulent entre deux êtres liés émotionnellement. Grâce à un <strong>tirage spécifique</strong>, le voyant identifie la fréquence, la nature et l&apos;intensité des pensées de cette personne à votre égard. Les <strong>signes spirituels</strong> comme les rêves partagés, les synchronicités ou les sensations physiques inexpliquées confirment souvent ce que le <strong>tarot</strong> révèle : un lien mental puissant qui transcende la distance et le silence.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              La <strong>télépathie amoureuse</strong> n&apos;est pas un mythe : elle repose sur des liens énergétiques tissés par l&apos;intimité émotionnelle partagée. Un <strong>voyant expérimenté</strong> capte ces flux invisibles et distingue les pensées nostalgiques des pensées désirantes, les regrets des intentions d&apos;action. Pour comprendre pleinement ce que cette personne ressent au-delà de ses pensées, explorez notre guidance sur <Link href="/sentiments/maime-t-il-elle" className="text-pink-600 hover:text-pink-800 underline font-medium">ses vrais sentiments pour vous</Link>.
            </p>
            <p className="text-lg leading-relaxed">
              Que vous soyez séparé(e) de votre ex, en attente d&apos;un signe de la personne que vous aimez, ou simplement curieux(se) de savoir si quelqu&apos;un pense à vous secrètement, le <strong>tarot des pensées</strong> apporte des réponses concrètes. La <strong>clairvoyance</strong> permet de percer le voile du silence et de comprendre ce qui se joue dans l&apos;invisible, là où les mots n&apos;ont pas encore trouvé leur chemin.
            </p>
          </div>
        </article>

        {/* H2: Les Signes Énergétiques */}
        <section id="signes" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u2728'} Les Signes Énergétiques qu&apos;il/elle Pense à Vous</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Lorsqu&apos;une personne pense intensément à vous, cette <strong>énergie mentale</strong> se manifeste à travers des signes physiques et spirituels que la <strong>voyance</strong> reconnaît depuis des siècles. Voici les manifestations les plus courantes d&apos;une connexion télépathique active.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-pink-50 border-2 border-pink-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-pink-700">{'\u{1F4AD}'} Pensées Soudaines et Inexplicables</h3>
              <p className="text-gray-700 text-sm mb-2">
                Vous pensez brusquement à cette personne sans raison apparente, au milieu d&apos;une activité sans rapport. Cette <strong>irruption mentale</strong> correspond souvent au moment exact où l&apos;autre pense à vous. Le lien énergétique agit comme un fil invisible qui transmet les pensées intenses d&apos;un esprit à l&apos;autre, créant une résonance émotionnelle instantanée.
              </p>
              <p className="text-pink-600 text-sm italic">Signal fort si cela survient à des moments précis et récurrents.</p>
            </div>
            <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-purple-700">{'\u{1F311}'} Rêves Récurrents</h3>
              <p className="text-gray-700 text-sm mb-2">
                Les <strong>rêves mettant en scène</strong> cette personne de manière répétée signalent une connexion active sur le plan astral. Pendant le sommeil, les barrières conscientes tombent et les énergies circulent librement. Un rêve particulièrement vivace et émotionnellement chargé indique que la personne pense intensément à vous au même moment.
              </p>
              <p className="text-purple-600 text-sm italic">Plus le rêve est précis et émotionnel, plus la connexion est forte.</p>
            </div>
            <div className="bg-rose-50 border-2 border-rose-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-rose-700">{'\u{1F442}'} Bourdonnement dans l&apos;Oreille</h3>
              <p className="text-gray-700 text-sm mb-2">
                Un bourdonnement soudain dans l&apos;<strong>oreille droite</strong> sans cause médicale est considéré en tradition spirituelle comme le signe que quelqu&apos;un parle ou pense à vous positivement. L&apos;oreille gauche indiquerait des pensées plus critiques ou conflictuelles. Cette manifestation physique est l&apos;un des <strong>signes télépathiques</strong> les plus anciennement documentés.
              </p>
              <p className="text-rose-600 text-sm italic">Oreille droite = pensées positives. Oreille gauche = pensées conflictuelles.</p>
            </div>
            <div className="bg-indigo-50 border-2 border-indigo-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-indigo-700">{'\u{1F300}'} Synchronicités Troublantes</h3>
              <p className="text-gray-700 text-sm mb-2">
                Voir son prénom partout, entendre &laquo;votre chanson&raquo;, tomber sur des photos anciennes : ces <strong>coïncidences significatives</strong> sont des synchronicités orchestrées par l&apos;univers. Elles apparaissent lorsque deux personnes sont connectées énergétiquement et que l&apos;une pense fortement à l&apos;autre. Ces signes sont fréquemment confirmés lors d&apos;un <strong>tirage de tarot</strong>.
              </p>
              <p className="text-indigo-600 text-sm italic">Trois synchronicités ou plus en peu de temps = connexion active.</p>
            </div>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <p className="text-gray-700"><strong>{'\u{1F4A1}'} Autres signes reconnus :</strong> éternuement soudain sans allergie, hoquet inexpliqué, frissons sans cause physique, sensation de chaleur ou de picotement sur la joue. Ces <strong>manifestations corporelles</strong> sont des réponses physiologiques à l&apos;énergie télépathique reçue.</p>
          </div>
        </section>

        {/* H2: Le Tirage Tarot */}
        <section id="tirage" className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-8 mb-8 border-2 border-pink-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F0CF}'} Le Tirage Tarot &laquo;Pense-t-il/elle à Moi ?&raquo;</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ce <strong>tirage spécifique en quatre positions</strong> est conçu pour capter l&apos;énergie mentale de la personne concernée. Chaque position du tirage répond à une dimension précise de ses <strong>pensées vous concernant</strong>, offrant une lecture complète de ce qui se passe dans son esprit.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-pink-500">
              <h3 className="font-bold text-lg mb-3 text-pink-700">Position 1 : Fréquence des Pensées</h3>
              <p className="text-gray-700 text-sm mb-2">
                Cette carte révèle <strong>à quelle fréquence</strong> la personne pense à vous. Le Cavalier de Coupe indique des pensées quotidiennes et obsédantes. L&apos;As de Coupe montre des pensées nouvelles et croissantes. Le Quatre de Coupe inversé signale un réveil soudain de l&apos;intérêt après une période d&apos;indifférence.
              </p>
              <p className="text-pink-600 text-sm italic">Cartes positives : Cavalier de Coupe, Reine de Coupe, Deux de Coupe.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-purple-500">
              <h3 className="font-bold text-lg mb-3 text-purple-700">Position 2 : Nature des Pensées</h3>
              <p className="text-gray-700 text-sm mb-2">
                Le <strong>type de pensées</strong> est aussi important que leur fréquence. L&apos;Amoureux indique des pensées romantiques et désirantes. La Lune révèle des pensées confuses et mélancoliques. Le Diable signale une obsession malsaine. Le Soleil montre des pensées joyeuses et lumineuses associées à votre souvenir.
              </p>
              <p className="text-purple-600 text-sm italic">Nostalgique, désirant, conflictuel ou joyeux : chaque nuance compte.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-rose-500">
              <h3 className="font-bold text-lg mb-3 text-rose-700">Position 3 : Pourquoi il/elle Pense à Vous</h3>
              <p className="text-gray-700 text-sm mb-2">
                Cette position éclaire la <strong>raison profonde</strong> de ses pensées. Le Cinq de Coupe indique le regret d&apos;une perte. L&apos;Étoile montre l&apos;espoir d&apos;un retour ou d&apos;un futur ensemble. Le Trois d&apos;Épée révèle la culpabilité après une blessure infligée. La Force indique une lutte intérieure entre raison et sentiments.
              </p>
              <p className="text-rose-600 text-sm italic">Regret, espoir, culpabilité ou désir : la motivation éclaire tout.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-indigo-500">
              <h3 className="font-bold text-lg mb-3 text-indigo-700">Position 4 : Actions à Venir</h3>
              <p className="text-gray-700 text-sm mb-2">
                La carte finale prédit si ces <strong>pensées mèneront à une action</strong> concrète. Le Chariot annonce un mouvement vers vous. Le Huit de Bâton indique un message ou contact imminent. L&apos;Hermite suggère une réflexion prolongée avant toute démarche. La Roue de Fortune signale un changement de situation inattendu.
              </p>
              <p className="text-indigo-600 text-sm italic">Penser ne signifie pas agir : cette position fait la différence.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border-2 border-pink-200">
            <p className="text-gray-700"><strong>{'\u{1F52E}'} Conseil du voyant :</strong> Ce tirage est particulièrement puissant lorsqu&apos;il est réalisé le soir, moment où les <strong>barrières mentales</strong> s&apos;abaissent et où les <strong>connexions télépathiques</strong> sont les plus actives. La précision augmente si vous méditez quelques instants sur la personne avant le tirage.</p>
          </div>
        </section>

        {/* H2: Télépathie Amoureuse */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F9E0}'} Télépathie Amoureuse et Connexion Spirituelle</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            La <strong>télépathie amoureuse</strong> désigne cette capacité intuitive de ressentir les émotions, les pensées et même les intentions d&apos;une personne avec laquelle on partage un lien affectif profond. Ce phénomène, reconnu depuis des millénaires dans les traditions spirituelles, s&apos;explique par la <strong>connexion énergétique</strong> qui se tisse naturellement entre deux êtres ayant partagé une intimité émotionnelle intense.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Les <strong>flammes jumelles</strong> et les <strong>âmes soeurs</strong> développent souvent cette capacité de manière spontanée. Leur connexion dépasse le plan physique pour atteindre une dimension spirituelle où la distance et le temps n&apos;ont plus de prise. Un séparation physique ne rompt pas ce lien : au contraire, elle peut l&apos;intensifier en obligeant la communication à emprunter des canaux subtils et énergétiques. Si vous pensez avoir rencontré votre âme soeur, découvrez les signes révélateurs d&apos;une <Link href="/nouvelle-rencontre/signes-ame-soeur" className="text-pink-600 hover:text-pink-800 underline font-medium">connexion d&apos;âme soeur</Link> authentique.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-pink-50 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">{'\u{1F496}'}</div>
              <h3 className="font-bold text-pink-700 mb-2">Lien Émotionnel</h3>
              <p className="text-gray-700 text-sm">L&apos;<strong>intensité émotionnelle</strong> partagée crée un canal de communication invisible entre les deux personnes.</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">{'\u{1F30C}'}</div>
              <h3 className="font-bold text-purple-700 mb-2">Plan Astral</h3>
              <p className="text-gray-700 text-sm">La <strong>connexion astrale</strong> se manifeste surtout la nuit, pendant le sommeil, quand les défenses conscientes tombent.</p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">{'\u{1F54A}\uFE0F'}</div>
              <h3 className="font-bold text-indigo-700 mb-2">Synchronicité</h3>
              <p className="text-gray-700 text-sm">Les <strong>coïncidences significatives</strong> confirment l&apos;existence d&apos;un lien télépathique actif entre vous.</p>
            </div>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <p className="text-gray-700"><strong>{'\u2728'} Phénomène fréquent :</strong> Vous pensez à cette personne et elle vous contacte quelques minutes après. Cette <strong>synchronicité relationnelle</strong> est l&apos;une des preuves les plus tangibles d&apos;une connexion télépathique amoureuse. Le <strong>tarot</strong> permet de mesurer l&apos;intensité réelle de ce lien invisible.</p>
          </div>
        </section>

        {/* H2: Penser ≠ Vouloir Revenir */}
        <section className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-xl p-8 mb-8 border-2 border-rose-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u26A0\uFE0F'} Penser à Vous &ne; Vouloir Revenir : Les Nuances</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            L&apos;une des erreurs les plus courantes est de confondre <strong>pensées persistantes</strong> et <strong>intention de retour</strong>. Une personne peut penser à vous quotidiennement, intensément, avec nostalgie et tendresse, sans pour autant souhaiter reprendre la relation ou vous recontacter. Cette distinction est fondamentale pour éviter de nourrir de faux espoirs.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Le <strong>tarot</strong> fait cette distinction cruciale. Les pensées peuvent être motivées par le regret, la culpabilité, l&apos;habitude ou la simple nostalgie, sans impliquer un désir réel de réconciliation. Inversement, certaines personnes pensent peu à vous consciemment mais ressentent un manque profond qui les poussera à agir. Pour savoir si un retour est envisageable dans votre situation, consultez notre guidance dédiée pour savoir si <Link href="/reconquete/va-t-il-elle-revenir" className="text-pink-600 hover:text-pink-800 underline font-medium">un retour est possible</Link>.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="font-bold text-lg mb-3 text-green-700">{'\u2705'} Pensées qui Mènent à l&apos;Action</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&bull; <strong>Pensées accompagnées de regret actif</strong> et envie de réparer</li>
                <li>&bull; Rêves récurrents suivis de tentatives de contact</li>
                <li>&bull; Consultations de vos réseaux sociaux fréquentes</li>
                <li>&bull; Questions posées à des amis communs sur vous</li>
                <li>&bull; <strong>Énergie d&apos;avancement</strong> visible dans le tirage (Le Chariot)</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500">
              <h3 className="font-bold text-lg mb-3 text-orange-700">{'\u{1F6D1}'} Pensées sans Intention de Retour</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&bull; <strong>Nostalgie passive</strong> sans volonté de changement</li>
                <li>&bull; Pensées motivées par l&apos;habitude, non par le manque</li>
                <li>&bull; Culpabilité qui paralyse au lieu de pousser à agir</li>
                <li>&bull; Peur de souffrir à nouveau qui bloque tout mouvement</li>
                <li>&bull; <strong>Énergie de stagnation</strong> dans le tirage (L&apos;Hermite, Quatre de Coupe)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* H2: Renforcer la Connexion Télépathique */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F9D8}'} Comment Renforcer la Connexion Télépathique</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Si vous souhaitez intensifier le <strong>lien télépathique</strong> avec cette personne, certaines pratiques spirituelles et méditatives permettent de renforcer la <strong>connexion énergétique</strong> existante. Ces techniques sont utilisées depuis des siècles dans les traditions de voyance et de développement intuitif.
          </p>
          <div className="space-y-4">
            <div className="bg-pink-50 border-l-4 border-pink-500 p-5 rounded">
              <h3 className="font-bold mb-2 text-pink-700">{'\u{1F9D8}'} Méditation de Connexion</h3>
              <p className="text-gray-700 text-sm">
                Installez-vous au calme, fermez les yeux et visualisez un <strong>fil de lumière rose</strong> reliant votre coeur au sien. Concentrez-vous sur les émotions positives partagées. Cette <strong>méditation dirigée</strong> renforce le canal télépathique en y injectant de l&apos;énergie intentionnelle. Pratiquez 10 à 15 minutes, idéalement le soir avant de dormir quand les réceptivités sont maximales.
              </p>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded">
              <h3 className="font-bold mb-2 text-purple-700">{'\u{1F5BC}\uFE0F'} Visualisation Créatrice</h3>
              <p className="text-gray-700 text-sm">
                Imaginez avec le plus de détails possible un <strong>moment heureux partagé</strong> avec cette personne. Revivez les sensations, les émotions, les odeurs et les sons. Cette <strong>visualisation intensive</strong> envoie un signal énergétique puissant sur le plan astral. Plus l&apos;image mentale est précise et chargée émotionnellement, plus le message télépathique est fort et susceptible d&apos;être capté par l&apos;autre personne.
              </p>
            </div>
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded">
              <h3 className="font-bold mb-2 text-indigo-700">{'\u{1F56F}\uFE0F'} Rituel d&apos;Intention</h3>
              <p className="text-gray-700 text-sm">
                Allumez une bougie rose, écrivez le prénom de la personne sur un papier et placez-le sous la bougie. Formulez votre <strong>intention clairement</strong> : non pas de manipuler, mais de renforcer un lien déjà existant. Ce <strong>rituel simple</strong> canalise votre énergie et amplifie votre signal télépathique. La bougie rose symbolise l&apos;amour doux et sincère, sans intention de contrôle. Pour explorer l&apos;avenir de cette connexion, découvrez ce que le tarot prédit sur l&apos;<Link href="/sentiments/avenir-amoureux" className="text-pink-600 hover:text-pink-800 underline font-medium">avenir de votre relation</Link>.
              </p>
            </div>
            <div className="bg-rose-50 border-l-4 border-rose-500 p-5 rounded">
              <h3 className="font-bold mb-2 text-rose-700">{'\u{1F4DD}'} Journal Télépathique</h3>
              <p className="text-gray-700 text-sm">
                Tenez un journal où vous notez chaque <strong>pensée soudaine</strong>, chaque rêve, chaque synchronicité liés à cette personne, avec la date et l&apos;heure précises. Ce <strong>suivi rigoureux</strong> vous permet d&apos;identifier des patterns et de vérifier a posteriori les correspondances avec les moments où l&apos;autre personne pensait à vous. Souvent, les coïncidences temporelles sont troublantes de précision.
              </p>
            </div>
          </div>
          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <p className="text-gray-700"><strong>{'\u26A0\uFE0F'} Mise en garde importante :</strong> Ces pratiques visent à renforcer une <strong>connexion existante</strong>, pas à créer une obsession ou à manipuler les sentiments d&apos;autrui. Le respect du libre arbitre de l&apos;autre personne est fondamental. Si la <strong>voyance</strong> révèle que le lien n&apos;est pas réciproque, la sagesse consiste à accepter cette vérité et à avancer.</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{'\u2753'} Questions Fréquentes</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment savoir si quelqu&apos;un pense à moi grâce au tarot ?</h3>
              <p className="text-gray-700 leading-relaxed">Le <strong>tarot des pensées</strong> utilise un tirage spécifique en quatre positions pour capter l&apos;énergie mentale dirigée vers vous. Le <strong>Cavalier de Coupe</strong>, La Lune et L&apos;Hermite sont des cartes révélatrices d&apos;une présence mentale forte. Le voyant interprète la fréquence, la nature et l&apos;intensité des pensées de l&apos;autre personne. Ce tirage distingue les pensées nostalgiques des pensées désirantes ou conflictuelles, vous offrant une lecture précise de ce qui se passe dans l&apos;esprit de cette personne grâce à la <strong>clairvoyance</strong>.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quels sont les signes physiques qu&apos;une personne pense à nous ?</h3>
              <p className="text-gray-700 leading-relaxed">Plusieurs <strong>signes physiques</strong> trahissent une connexion télépathique active. Des pensées soudaines et inexplicables concernant cette personne, un éternuement sans raison apparente, un <strong>bourdonnement dans l&apos;oreille</strong> droite, des rêves récurrents la mettant en scène, ou encore des synchronicités troublantes comme voir son prénom partout. Le hoquet inexpliqué et les frissons sans cause physique sont aussi des manifestations reconnues en <strong>voyance énergétique</strong> comme des signaux qu&apos;une personne pense intensément à vous.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">La télépathie amoureuse existe-t-elle vraiment ?</h3>
              <p className="text-gray-700 leading-relaxed">La <strong>télépathie amoureuse</strong> désigne la capacité de ressentir les émotions et pensées d&apos;une personne avec laquelle on partage un lien affectif profond. Ce phénomène s&apos;explique par la <strong>connexion énergétique</strong> entre deux êtres ayant partagé une intimité émotionnelle intense. Les flammes jumelles et les âmes soeurs développent souvent cette capacité naturellement. Le <strong>tarot</strong> et la voyance permettent de confirmer et de mesurer l&apos;intensité de cette connexion spirituelle invisible mais réelle.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Penser souvent à quelqu&apos;un signifie-t-il qu&apos;il pense aussi à nous ?</h3>
              <p className="text-gray-700 leading-relaxed">Pas systématiquement, mais une <strong>connexion énergétique bidirectionnelle</strong> existe souvent entre deux personnes liées émotionnellement. La voyance distingue les pensées unilatérales (projection de votre désir) des connexions réciproques (échange <strong>télépathique</strong> réel). Le tarot permet de vérifier si vos pensées obsédantes reflètent un lien mutuel ou simplement votre propre attachement. Un <strong>voyant expérimenté</strong> capte la direction et la réciprocité du flux énergétique entre vous.</p>
            </div>
          </div>
        </section>

        {/* Articles Connexes */}
        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900">{'\u{1F4DA}'} Articles Connexes</h3>
          <div className="space-y-2">
            <Link href="/sentiments" className="block text-pink-600 hover:text-pink-800 font-medium">&rarr; Sentiments Amoureux : Toutes nos Guidances</Link>
            <Link href="/sentiments/maime-t-il-elle" className="block text-pink-600 hover:text-pink-800 font-medium">&rarr; M&apos;aime-t-il/elle Vraiment ?</Link>
            <Link href="/sentiments/signes-il-elle-maime" className="block text-pink-600 hover:text-pink-800 font-medium">&rarr; Les Signes Concrets d&apos;Amour</Link>
            <Link href="/reconquete/va-t-il-elle-revenir" className="block text-pink-600 hover:text-pink-800 font-medium">&rarr; Va-t-il/elle Revenir ?</Link>
            <Link href="/sentiments/avenir-amoureux" className="block text-pink-600 hover:text-pink-800 font-medium">&rarr; Mon Avenir Amoureux</Link>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="bg-gradient-to-r from-pink-400 via-rose-500 to-purple-500 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{'\u{1F4AD}'} Découvrez ce qu&apos;il/elle Pense de Vous</h2>
          <p className="text-lg mb-6 opacity-95">Tirage personnalisé pour savoir si cette personne pense à vous</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#consultation" className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition">Tirage des Pensées</a>
            <a href="#tirage" className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition">Connexion Télépathique</a>
          </div>
          <p className="mt-6 text-sm opacity-90">{'\u2713'} 87% de précision {'\u2022'} {'\u2713'} Réponse claire {'\u2022'} {'\u2713'} Guidance complète</p>
        </div>
      </div>
    </main>
  );
}
