import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema, getAuthorSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';

export const metadata: Metadata = {
  title: 'Surmonter une Trahison Amoureuse : Guidance Voyance',
  description: 'Comment surmonter une trahison et une infidélité ? Découvrez la guidance de la voyance et du tarot pour guérir, comprendre et reconstruire après la tromperie.',
  keywords: ['surmonter trahison', 'tromperie couple', 'infidélité guérison', 'trahison amoureuse', 'voyance infidélité'],
  alternates: { canonical: 'https://voyantlove.fr/rupture/surmonter-trahison/' },
};

export default function SurmonterTrahisonPage() {
  const articleSchema = getArticleSchema({
    title: 'Surmonter une Trahison Amoureuse',
    description: 'Comment surmonter une trahison et une infidélité ? Découvrez la guidance de la voyance et du tarot pour guérir, comprendre et reconstruire après la tromperie.',
    url: 'https://voyantlove.fr/rupture/surmonter-trahison/',
    datePublished: '2026-03-22',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['surmonter trahison', 'tromperie couple', 'infidélité guérison', 'trahison amoureuse', 'voyance infidélité'],
  });

  const faqSchema = getFAQSchema([
    {
      question: 'La voyance peut-elle révéler si mon partenaire me trompe ?',
      answer: 'La voyance et le tarot captent les énergies de tromperie et de dissimulation dans un couple. Des cartes comme le Sept d\'Épées (tromperie), la Lune (secrets) ou le Diable (liaison cachée) apparaissent fréquemment dans les tirages quand une infidélité est en cours. Le voyant perçoit également les changements d\'énergie dans la relation : distance émotionnelle, mensonges, doubles vies. Cependant, la voyance ne remplace pas une communication honnête avec votre partenaire. Elle vous donne des indices pour poser les bonnes questions et écouter votre intuition avec discernement.',
    },
    {
      question: 'Peut-on reconstruire un couple après une trahison ?',
      answer: 'Le tarot montre que la reconstruction après une trahison est possible mais exige un travail profond des deux partenaires. Les cartes de renouveau comme le Jugement ou l\'Étoile indiquent un potentiel de renaissance du couple, tandis que la Tour suggère que certaines fondations doivent être détruites pour reconstruire sainement. La voyance révèle si votre partenaire éprouve des remords sincères et s\'il est prêt à faire le travail nécessaire. Environ 60% des couples qui choisissent de rester ensemble après une infidélité y parviennent avec un accompagnement adapté, thérapie de couple et guidance spirituelle.',
    },
    {
      question: 'Comment savoir si je dois pardonner ou partir après une infidélité ?',
      answer: 'Cette décision est l\'une des plus difficiles à prendre et la voyance vous aide à y voir clair. Le tarot analyse plusieurs dimensions : les sentiments réels de votre partenaire, sa propension à recommencer, votre capacité à pardonner sans rancoeur, et le potentiel futur de votre couple. Des tirages spécifiques comme le tirage de la croisée des chemins éclairent les deux options. Un voyant expérimenté ne vous dit pas quoi faire mais vous révèle les conséquences probables de chaque choix. Le libre arbitre reste le vôtre, guidé par une vision plus claire de la vérité.',
    },
    {
      question: 'Combien de temps faut-il pour guérir d\'une trahison amoureuse ?',
      answer: 'La guérison après une trahison prend généralement 12 à 24 mois selon la profondeur de la blessure et le soutien dont vous disposez. La voyance accompagne ce processus en identifiant les phases de deuil que vous traversez et en anticipant les moments de rechute émotionnelle. Le tarot montre que la guérison n\'est pas linéaire : des vagues de colère, de tristesse et de doute se succèdent avant d\'atteindre l\'acceptation. La clairvoyance vous aide à traverser chaque phase avec conscience, sans vous enliser dans l\'amertume ou le déni. L\'énergie karmique de la trahison porte aussi des leçons d\'évolution pour votre parcours de vie.',
    },
  ]);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Rupture', url: 'https://voyantlove.fr/rupture/' },
    { name: 'Surmonter une Trahison', url: 'https://voyantlove.fr/rupture/surmonter-trahison/' },
  ]);

  const authorSchema = getAuthorSchema();

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      <header className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/rupture" className="text-white/80 hover:text-white mb-4 inline-block">← Rupture</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🖤 Surmonter une Trahison Amoureuse</h1>
          <p className="text-xl opacity-95 mb-6">Guérir de l'infidélité avec la guidance de la voyance et du tarot</p>
          <a href="#consultation" className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition inline-block">Consultation Guidance</a>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">⭐</div><div className="text-2xl font-bold text-gray-700">4.9/5</div><div className="text-sm text-gray-600">341 avis</div></div>
          <div><div className="text-3xl mb-1">💔</div><div className="text-2xl font-bold text-gray-700">12-24</div><div className="text-sm text-gray-600">Mois de guérison</div></div>
          <div><div className="text-3xl mb-1">🔄</div><div className="text-2xl font-bold text-gray-700">60%</div><div className="text-sm text-gray-600">Couples reconstruits</div></div>
          <div><div className="text-3xl mb-1">🔮</div><div className="text-2xl font-bold text-gray-700">15 ans</div><div className="text-sm text-gray-600">Expérience</div></div>
        </div>

        <EEATSignal
          colorScheme="rose"
          method="Guidance voyance pour surmonter la trahison amoureuse"
        />

        <article className="bg-gray-50 border-l-4 border-gray-500 rounded-xl shadow-md p-8 mb-8">
          <p className="text-lg leading-relaxed mb-4">
            Découvrir une <strong>trahison amoureuse</strong> est l'une des douleurs les plus dévastatrices qu'un être humain puisse traverser. L'<strong>infidélité</strong> ne brise pas seulement la confiance : elle fracture votre vision du monde, votre estime personnelle et tout ce que vous pensiez savoir de votre <strong>couple</strong>. La <strong>voyance</strong> et le <strong>tarot</strong> accompagnent des milliers de personnes chaque année à travers cette épreuve, en offrant une compréhension profonde des dynamiques invisibles qui ont mené à la <strong>tromperie</strong>.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Surmonter une <strong>trahison</strong> ne signifie pas oublier ou minimiser la souffrance. C'est un processus de <strong>guérison</strong> qui demande du courage, de l'honnêteté envers soi-même et un accompagnement bienveillant. La <strong>clairvoyance</strong> vous aide à démêler les émotions contradictoires — colère, amour résiduel, honte, incompréhension — pour avancer avec lucidité plutôt que dans la confusion.
          </p>
          <p className="text-lg leading-relaxed">
            Que vous choisissiez de rester ou de partir, la <strong>voyance amoureuse</strong> éclaire votre chemin vers la reconstruction. Retrouvez toutes nos guidances sur <Link href="/" className="text-gray-600 hover:text-gray-800 underline font-medium">VoyantLove</Link> pour traverser cette épreuve avec sagesse et trouver la paix intérieure.
          </p>
        </article>

        <VoyantQuickCTA topic="rupture" source="surmonter-trahison-early" />

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🔮 Ce que le Tarot Révèle sur la Trahison</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Le tarot ne se contente pas de confirmer une infidélité : il dévoile les raisons profondes de la tromperie, les émotions cachées de votre partenaire, et le chemin de guérison qui s'offre à vous.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Les arcanes du <strong>tarot</strong> portent une sagesse millénaire sur les épreuves du cœur. Quand une <strong>trahison</strong> survient dans un <strong>couple</strong>, les cartes révèlent bien plus que la surface des événements. Elles plongent dans les profondeurs de l'âme pour éclairer les motivations inconscientes, les blessures anciennes et les possibilités de renouveau.
          </p>
          <div className="space-y-4">
            <div className="bg-gray-50 border-l-4 border-gray-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-gray-700">Les Cartes de la Trahison</h3>
              <p className="text-gray-700">Le <strong>Sept d'Épées</strong> est l'arcane de la tromperie par excellence : il symbolise les mensonges, les secrets et les actions cachées. La <strong>Lune</strong> révèle les illusions et les vérités dissimulées dans l'ombre. Le <strong>Diable</strong> pointe les dépendances et les liaisons toxiques. Quand ces cartes apparaissent ensemble dans un tirage, le message est sans ambiguïté. Mais le <strong>tarot</strong> ne juge pas : il éclaire. Il montre aussi les <strong>failles dans la relation</strong> qui ont créé un terrain propice à l'<strong>infidélité</strong>, pas pour excuser mais pour comprendre en profondeur ce qui s'est passé.</p>
            </div>
            <div className="bg-gray-100 border-l-4 border-gray-600 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-gray-800">Les Motivations Cachées</h3>
              <p className="text-gray-700">La <strong>voyance</strong> révèle que la <strong>tromperie</strong> naît rarement d'un simple manque de respect. Elle trouve souvent ses racines dans des besoins non comblés : besoin de validation, peur de l'engagement profond, blessures d'enfance non résolues, ou sentiment d'invisibilité au sein du <strong>couple</strong>. Le <strong>tarot</strong> identifie ces causes profondes pour que vous puissiez comprendre sans excuser. Un tirage spécifique analyse le <strong>parcours émotionnel</strong> de votre partenaire, ses regrets sincères ou son absence de remords, et sa capacité réelle à changer.</p>
            </div>
            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-gray-700">Le Chemin de Guérison</h3>
              <p className="text-gray-700">Après la tempête émotionnelle, le <strong>tarot</strong> trace un chemin vers la <strong>guérison</strong>. Des cartes comme l'<strong>Étoile</strong> (espoir renouvelé), le <strong>Monde</strong> (complétude intérieure) ou la <strong>Tempérance</strong> (équilibre retrouvé) apparaissent pour indiquer que la douleur actuelle mène à une transformation profonde. La <strong>voyance</strong> vous accompagne dans cette traversée en identifiant les étapes de reconstruction et les pièges à éviter. Si la <Link href="/rupture/rupture-amoureuse" className="text-purple-600 hover:text-gray-800 underline font-medium">rupture amoureuse</Link> est inévitable, elle peut aussi devenir un tremplin vers un amour plus authentique.</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 mb-8 border-2 border-gray-300">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">💪 Les 5 Étapes pour Surmonter la Trahison</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">La guérison après une trahison suit cinq étapes clés : le choc initial et la colère, la quête de vérité, le deuil de la relation idéalisée, la reconstruction de l'estime de soi, et le pardon libérateur.</p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-gray-600">1</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Le Choc et la Colère</h3>
                <p className="text-gray-700">La découverte de l'<strong>infidélité</strong> provoque un traumatisme émotionnel comparable à un deuil. Sidération, incrédulité, colère explosive, envie de vengeance : ces réactions sont normales et nécessaires. Le <strong>tarot</strong> montre souvent la Tour à ce stade — l'effondrement de tout ce que vous croyiez solide. La <strong>voyance</strong> vous rappelle que cette destruction est le préalable à une reconstruction plus authentique. Ne refoulez pas votre colère : exprimez-la de manière saine, à travers l'écriture, le sport, la thérapie ou la parole. Cette énergie brute, canalisée correctement, deviendra votre force de <strong>guérison</strong>.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-gray-600">2</div>
              <div>
                <h3 className="font-bold text-lg mb-2">La Quête de Vérité</h3>
                <p className="text-gray-700">Après le choc vient le besoin obsessionnel de savoir : qui, quand, comment, pourquoi. Cette quête est compréhensible mais peut devenir destructrice si elle tourne à l'obsession. La <strong>clairvoyance</strong> vous donne les réponses essentielles sans que vous ayez à fouiller téléphones et messageries. Le <strong>voyant</strong> capte les émotions et motivations de votre partenaire, vous offrant une vérité plus profonde que les simples faits. Posez les questions qui comptent vraiment pour votre <strong>guérison</strong>, pas celles qui nourrissent votre douleur. Le <strong>tarot</strong> distingue ce qui est utile à savoir de ce qui ne ferait qu'aggraver la blessure.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-gray-600">3</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Le Deuil de la Relation Idéalisée</h3>
                <p className="text-gray-700">L'étape la plus douloureuse est le deuil non pas de votre partenaire, mais de l'image que vous aviez de votre <strong>couple</strong>. La <strong>trahison</strong> révèle que la réalité était différente de votre perception. Ce <strong>deuil amoureux</strong> est profond car il touche à votre confiance en votre propre jugement. Le <strong>tarot</strong> vous aide à voir votre relation telle qu'elle était vraiment, avec ses beautés et ses failles. Cette lucidité, bien que douloureuse, est libératrice. Pour approfondir ce processus, notre guide sur le <Link href="/rupture/chagrin-damour" className="text-gray-600 hover:text-gray-800 underline font-medium">chagrin d'amour</Link> offre des outils complémentaires.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-gray-600">4</div>
              <div>
                <h3 className="font-bold text-lg mb-2">La Reconstruction de l'Estime</h3>
                <p className="text-gray-700">La <strong>tromperie</strong> attaque directement l'<strong>estime de soi</strong>. « Qu'est-ce que je n'avais pas ? » est la question qui ronge. La <strong>voyance</strong> est catégorique : l'infidélité parle de celui qui trompe, pas de celui qui est trompé. Le <strong>tarot</strong> vous guide vers une reconnexion avec votre valeur intrinsèque, indépendante du regard de l'autre. Des arcanes comme le Soleil ou l'Impératrice rappellent votre lumière intérieure et votre capacité d'amour. Le <strong>développement personnel</strong> guidé par la voyance accélère cette reconstruction.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-gray-600">5</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Le Pardon Libérateur</h3>
                <p className="text-gray-700">Pardonner ne signifie pas excuser ni oublier. C'est un acte de <strong>libération personnelle</strong> qui vous affranchit du poison de la rancœur. Le <strong>tarot</strong> montre que le pardon arrive naturellement quand les quatre étapes précédentes ont été traversées avec conscience. La <strong>voyance</strong> révèle que le pardon authentique transforme l'énergie karmique de la <strong>trahison</strong> en sagesse de vie. Vous pardonnez pour vous, pas pour l'autre. Ce pardon n'implique pas de rester en <strong>couple</strong> : il est compatible avec une séparation définitive et saine.</p>
              </div>
            </div>
          </div>
        </section>

        <VoyantRecommendations topic="rupture" limit={3} showOnlineFirst={true} source="surmonter-trahison-mid" />

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🔄 Rester ou Partir : Ce que la Voyance Éclaire</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">La décision de rester ou de quitter après une trahison est profondément personnelle. Le tarot analyse les deux voies et révèle les potentiels de chaque choix pour vous aider à décider en conscience.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            La question la plus douloureuse après une <strong>infidélité</strong> est : dois-je rester ou partir ? Il n'existe pas de réponse universelle. La <strong>voyance</strong> ne vous impose pas un choix mais éclaire les conséquences probables de chaque voie. Le <strong>tarot</strong> est un outil remarquable pour cette prise de décision car il capte les <strong>énergies</strong> des deux futurs possibles.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-green-700">Signes Favorables pour Rester</h3>
              <p className="text-gray-700 text-sm mb-2">Le <strong>tarot</strong> indique un potentiel de reconstruction quand :</p>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Votre partenaire éprouve des remords profonds et sincères</li>
                <li>• Il ou elle est prêt(e) à un travail thérapeutique de <strong>couple</strong></li>
                <li>• L'<strong>infidélité</strong> était ponctuelle, non répétitive</li>
                <li>• Les fondations d'amour sont encore solides</li>
                <li>• Les cartes de renouveau (Jugement, Étoile) dominent le tirage</li>
              </ul>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-red-700">Signes pour Tourner la Page</h3>
              <p className="text-gray-700 text-sm mb-2">La <strong>voyance</strong> conseille de partir quand :</p>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• La <strong>tromperie</strong> est un schéma répétitif</li>
                <li>• Votre partenaire minimise ou nie sa responsabilité</li>
                <li>• La confiance est irréparablement brisée</li>
                <li>• Le <strong>tarot</strong> montre la Tour ou le Dix d'Épées en position d'avenir</li>
                <li>• Rester vous détruit plus que la séparation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🌟 Transformer la Blessure en Force</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">La voyance enseigne que toute épreuve porte en elle une graine de transformation. La trahison, malgré sa brutalité, peut devenir le catalyseur d'un éveil personnel profond et d'un amour futur plus authentique.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Aussi paradoxal que cela puisse sembler au cœur de la souffrance, de nombreuses personnes témoignent que leur <strong>trahison amoureuse</strong> a été le déclencheur d'une transformation de vie profonde. La <strong>voyance</strong> confirme cette dimension karmique : certaines épreuves sont des catalyseurs d'éveil nécessaires sur notre <strong>chemin de vie</strong>.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl text-gray-600">✦</div>
              <p className="text-gray-700"><strong>Vous développez un discernement affûté</strong> : votre capacité à lire les gens et à détecter les <strong>incohérences</strong> devient un atout précieux. Le <strong>tarot</strong> montre que cette intuition renforcée vous protégera dans vos futures <strong>relations amoureuses</strong>.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl text-gray-600">✦</div>
              <p className="text-gray-700"><strong>Vous clarifiez vos valeurs non négociables</strong> : la <strong>trahison</strong> vous oblige à définir précisément ce que vous acceptez et refusez dans un <strong>couple</strong>. Cette clarté attire des partenaires alignés avec vos vraies valeurs.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl text-gray-600">✦</div>
              <p className="text-gray-700"><strong>Vous accédez à une profondeur émotionnelle nouvelle</strong> : avoir traversé l'enfer de la <strong>tromperie</strong> vous donne une empathie et une sensibilité qui enrichissent tous vos <strong>liens humains</strong>. Si vous envisagez de reconstruire votre vie amoureuse, notre guide sur <Link href="/rupture/oublier-son-ex" className="text-gray-600 hover:text-gray-800 underline font-medium">comment oublier son ex</Link> peut compléter votre démarche de guérison.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">❓ Questions Fréquentes</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Retrouvez les réponses aux questions les plus posées sur la trahison amoureuse : voyance et infidélité, reconstruction du couple, pardon et durée de guérison.</p>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">La voyance peut-elle révéler si mon partenaire me trompe ?</h3>
              <p className="text-gray-700 leading-relaxed">La <strong>voyance</strong> et le <strong>tarot</strong> captent les énergies de tromperie et de dissimulation dans un <strong>couple</strong>. Des cartes comme le <strong>Sept d'Épées</strong> (tromperie), la <strong>Lune</strong> (secrets) ou le <strong>Diable</strong> (liaison cachée) apparaissent fréquemment dans les tirages quand une <strong>infidélité</strong> est en cours. Le <strong>voyant</strong> perçoit également les changements d'énergie dans la relation : distance émotionnelle, mensonges, doubles vies. Cependant, la voyance ne remplace pas une communication honnête avec votre partenaire. Elle vous donne des indices pour poser les bonnes questions et écouter votre <strong>intuition</strong> avec discernement.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Peut-on reconstruire un couple après une trahison ?</h3>
              <p className="text-gray-700 leading-relaxed">Le <strong>tarot</strong> montre que la reconstruction après une <strong>trahison</strong> est possible mais exige un travail profond des deux partenaires. Les cartes de renouveau comme le <strong>Jugement</strong> ou l'<strong>Étoile</strong> indiquent un potentiel de renaissance du <strong>couple</strong>, tandis que la <strong>Tour</strong> suggère que certaines fondations doivent être détruites pour reconstruire sainement. La <strong>voyance</strong> révèle si votre partenaire éprouve des remords sincères et s'il est prêt à faire le travail nécessaire. La <strong>thérapie de couple</strong> et la <strong>guidance spirituelle</strong> offrent ensemble le meilleur cadre pour cette reconstruction délicate.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment savoir si je dois pardonner ou partir après une infidélité ?</h3>
              <p className="text-gray-700 leading-relaxed">Cette décision est l'une des plus difficiles à prendre et la <strong>voyance</strong> vous aide à y voir clair. Le <strong>tarot</strong> analyse plusieurs dimensions : les <strong>sentiments</strong> réels de votre partenaire, sa propension à recommencer, votre capacité à pardonner sans rancœur, et le potentiel futur de votre <strong>couple</strong>. Des tirages spécifiques comme le tirage de la croisée des chemins éclairent les deux options. Un <strong>voyant</strong> expérimenté ne vous dit pas quoi faire mais vous révèle les conséquences probables de chaque choix. Si vous envisagez une <Link href="/rupture/rupture-amoureuse" className="text-gray-600 hover:text-gray-800 underline font-medium">séparation</Link>, la voyance vous accompagne également dans cette transition.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Combien de temps faut-il pour guérir d'une trahison amoureuse ?</h3>
              <p className="text-gray-700 leading-relaxed">La <strong>guérison</strong> après une <strong>trahison</strong> prend généralement 12 à 24 mois selon la profondeur de la blessure et le soutien dont vous disposez. La <strong>voyance</strong> accompagne ce processus en identifiant les phases de <strong>deuil</strong> que vous traversez et en anticipant les moments de rechute émotionnelle. Le <strong>tarot</strong> montre que la guérison n'est pas linéaire : des vagues de colère, de tristesse et de doute se succèdent avant d'atteindre l'<strong>acceptation</strong>. La <strong>clairvoyance</strong> vous aide à traverser chaque phase avec conscience, sans vous enliser dans l'amertume ou le déni.</p>
            </div>
          </div>
        </section>

        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900">📚 Articles Connexes</h3>
          <div className="space-y-2">
            <Link href="/rupture/rupture-amoureuse" className="block text-gray-600 hover:text-gray-800 font-medium">→ Surmonter une Rupture Amoureuse</Link>
            <Link href="/rupture/comment-tourner-la-page" className="block text-gray-600 hover:text-gray-800 font-medium">→ Comment Tourner la Page</Link>
            <Link href="/rupture/chagrin-damour" className="block text-gray-600 hover:text-gray-800 font-medium">→ Guérir d'un Chagrin d'Amour</Link>
            <Link href="/rupture/oublier-son-ex" className="block text-gray-600 hover:text-gray-800 font-medium">→ Comment Oublier son Ex</Link>
            <Link href="/reconquete/reconquerir-son-ex" className="block text-gray-600 hover:text-gray-800 font-medium">→ Reconquérir son Ex</Link>
            <Link href="/sentiments/maime-t-il-elle" className="block text-gray-600 hover:text-gray-800 font-medium">→ M'aime-t-il / M'aime-t-elle Encore ?</Link>
          </div>
        </div>

        <VoyantFinalCTA topic="rupture" source="surmonter-trahison-final" />
      </div>
    </main>
  );
}
