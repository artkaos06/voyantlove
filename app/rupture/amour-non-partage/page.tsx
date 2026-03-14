import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema, getAuthorSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';

export const metadata: Metadata = {
  title: 'Amour Non Partag\u00e9 : Comprendre et Surmonter un Amour \u00e0 Sens Unique',
  description: 'Comment surmonter un amour non partag\u00e9 ? D\u00e9couvrez les causes, les signes d\u2019un amour non r\u00e9ciproque, le r\u00f4le du tarot et les \u00e9tapes pour s\u2019ouvrir \u00e0 un amour v\u00e9ritable.',
  keywords: ['amour non partag\u00e9', 'amour \u00e0 sens unique', 'amour non r\u00e9ciproque', 'surmonter rejet amoureux', 'voyance sentiments'],
  alternates: {
    canonical: 'https://voyantlove.fr/rupture/amour-non-partage/',
  },
};

export default function AmourNonPartagePage() {
  const articleSchema = getArticleSchema({
    title: 'Amour Non Partag\u00e9 : Comprendre et Surmonter un Amour \u00e0 Sens Unique',
    description: 'Comment surmonter un amour non partag\u00e9 ? D\u00e9couvrez les causes, les signes d\u2019un amour non r\u00e9ciproque, le r\u00f4le du tarot et les \u00e9tapes pour s\u2019ouvrir \u00e0 un amour v\u00e9ritable.',
    url: 'https://voyantlove.fr/rupture/amour-non-partage/',
    datePublished: '2026-03-03',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['amour non partag\u00e9', 'amour \u00e0 sens unique', 'amour non r\u00e9ciproque', 'surmonter rejet amoureux', 'voyance sentiments'],
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Rupture Amoureuse', url: 'https://voyantlove.fr/rupture/' },
    { name: 'Amour Non Partag\u00e9', url: 'https://voyantlove.fr/rupture/amour-non-partage/' },
  ]);

  const authorSchema = getAuthorSchema();

  const faqSchema = getFAQSchema([
    {
      question: 'Mon amour est-il non r\u00e9ciproque ?',
      answer: 'Un amour non r\u00e9ciproque se reconna\u00eet \u00e0 plusieurs signes clairs : la personne \u00e9vite les contacts intimes, ne prend jamais l\u2019initiative des rencontres, reste \u00e9vasive sur l\u2019avenir, et maintient une distance \u00e9motionnelle malgr\u00e9 votre rapprochement. Le tarot r\u00e9v\u00e8le avec pr\u00e9cision les sentiments v\u00e9ritables de l\u2019autre personne \u00e0 travers des cartes comme le Trois d\u2019\u00c9p\u00e9e (douleur de la non-r\u00e9ciprocit\u00e9) ou le Huit de Coupe (d\u00e9sir de s\u2019\u00e9loigner). La voyance sentimentale offre la clart\u00e9 n\u00e9cessaire pour accepter la r\u00e9alit\u00e9.',
    },
    {
      question: 'Un amour non partag\u00e9 peut-il devenir r\u00e9ciproque ?',
      answer: 'Dans certains cas, un amour qui semble non r\u00e9ciproque peut \u00e9voluer si les conditions changent. Parfois, la personne aim\u00e9e a besoin de temps, traverse une p\u00e9riode personnelle difficile, ou n\u2019a pas encore r\u00e9alis\u00e9 ses sentiments. Le tarot peut r\u00e9v\u00e9ler si un potentiel de r\u00e9ciprocit\u00e9 existe. Toutefois, forcer les sentiments est impossible et malsain. La voyance guide vers le discernement : savoir quand pers\u00e9v\u00e9rer et quand lâcher prise.',
    },
    {
      question: 'Combien de temps pour surmonter un amour non partag\u00e9 ?',
      answer: 'La dur\u00e9e varie de 3 \u00e0 6 mois en moyenne pour un amour non r\u00e9ciproque de courte dur\u00e9e, et jusqu\u2019\u00e0 un an ou plus pour un amour platonique de longue date. Le processus est similaire au deuil amoureux mais pr\u00e9sente une difficult\u00e9 suppl\u00e9mentaire : l\u2019absence de souvenirs de couple \u00e0 relativiser. Le tarot identifie les blocages qui prolongent l\u2019attachement et acc\u00e9l\u00e8re la lib\u00e9ration \u00e9motionnelle.',
    },
    {
      question: 'Pourquoi suis-je attir\u00e9(e) par des personnes indisponibles ?',
      answer: 'L\u2019attraction syst\u00e9matique vers des personnes indisponibles r\u00e9v\u00e8le souvent des sch\u00e9mas inconscients li\u00e9s \u00e0 l\u2019enfance : recherche d\u2019un amour parental conditionnel, peur de l\u2019intimit\u00e9 v\u00e9ritable, ou croyance profonde de ne pas m\u00e9riter l\u2019amour r\u00e9ciproque. Le tarot karmique peut r\u00e9v\u00e9ler ces sch\u00e9mas ancestraux et les le\u00e7ons que votre \u00e2me cherche \u00e0 int\u00e9grer \u00e0 travers ces exp\u00e9riences douloureuses.',
    },
    {
      question: 'Le tarot r\u00e9v\u00e8le-t-il si quelqu\u2019un pense \u00e0 moi ?',
      answer: 'Oui, le tarot est particuli\u00e8rement efficace pour r\u00e9v\u00e9ler les pens\u00e9es et les \u00e9nergies qu\u2019une personne projette vers vous. Des cartes comme le Deux de Coupe en position de l\u2019autre signalent une connexion mutuelle. Le Chevalier de Coupe montre une personne qui pense \u00e0 vous avec tendresse. Le Huit d\u2019\u00c9p\u00e9e r\u00e9v\u00e8le que la personne vous a mentalement bloqu\u00e9(e). La voyance sentimentale apporte les r\u00e9ponses que l\u2019observation seule ne peut offrir.',
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
      <header className="bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/rupture" className="text-white/80 hover:text-white mb-4 inline-block">&larr; Retour aux Ruptures Amoureuses</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">&#x1F49C; Amour Non Partag&eacute;</h1>
          <p className="text-xl opacity-95 mb-6">Comprendre et surmonter un amour &agrave; sens unique gr&acirc;ce &agrave; la voyance sentimentale</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#consultation" className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">Guidance Sentimentale</a>
            <a href="#signes" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition">Les Signes R&eacute;v&eacute;lateurs</a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Stats bar */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">&#x1F494;</div><div className="text-2xl font-bold text-rose-600">1 sur 4</div><div className="text-sm text-gray-600">Personnes concern&eacute;es</div></div>
          <div><div className="text-3xl mb-1">&#x1F49A;</div><div className="text-2xl font-bold text-rose-600">Forte</div><div className="text-sm text-gray-600">R&eacute;silience constat&eacute;e</div></div>
          <div><div className="text-3xl mb-1">&#x2B50;</div><div className="text-2xl font-bold text-rose-600">4.8/5</div><div className="text-sm text-gray-600">Satisfaction</div></div>
          <div><div className="text-3xl mb-1">&#x23F3;</div><div className="text-2xl font-bold text-rose-600">3-6 mois</div><div className="text-sm text-gray-600">Dur&eacute;e moyenne</div></div>
        </div>

        {/* EEAT Signal */}
        <EEATSignal colorScheme="rose" method="Tarot sentimental et clairvoyance &eacute;motionnelle" />

        {/* Answer Capsule */}
        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-rose-600">
          <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-lg">
            <p className="text-lg leading-relaxed">
              L&apos;<strong>amour non partag&eacute;</strong> est l&apos;une des souffrances sentimentales les plus universelles et les plus d&eacute;chirantes. Aussi douloureuse qu&apos;une <Link href="/rupture" className="text-rose-600 hover:text-rose-800 underline font-medium">rupture amoureuse</Link>, cette blessure d&apos;aimer quelqu&apos;un qui ne vous aime pas en retour &mdash; ou pas de la m&ecirc;me mani&egrave;re &mdash; cr&eacute;e un <strong>d&eacute;s&eacute;quilibre &eacute;motionnel</strong> profond qui affecte l&apos;estime de soi, la confiance et la capacit&eacute; &agrave; s&apos;ouvrir aux autres. La <strong>voyance sentimentale</strong> apporte une lumi&egrave;re pr&eacute;cieuse sur cette situation douloureuse en r&eacute;v&eacute;lant les <strong>sentiments v&eacute;ritables</strong> de l&apos;autre personne, les raisons profondes de cette non-r&eacute;ciprocit&eacute; et le chemin vers la <strong>lib&eacute;ration &eacute;motionnelle</strong>. Le <strong>tarot sentimental</strong> d&eacute;crypte les &eacute;nergies invisibles entre vous et la personne aim&eacute;e, distinguant un <strong>amour non r&eacute;ciproque</strong> d&eacute;finitif d&apos;un amour potentiel qui n&apos;a pas encore &eacute;clos. La <strong>clairvoyance</strong> offre le discernement n&eacute;cessaire pour savoir si l&apos;espoir est fond&eacute; ou s&apos;il est temps de tourner votre c&oelig;ur vers un <strong>amour v&eacute;ritable</strong> et r&eacute;ciproque.
            </p>
          </div>
        </article>

        <VoyantQuickCTA topic="rupture" source="amour-non-partage-early" />

        {/* Section: Pourquoi l&apos;amour non partag&eacute; */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">&#x1F4A1; Pourquoi l&apos;Amour Non Partag&eacute; ?</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">L&apos;amour non partag&eacute; s&apos;explique par quatre causes principales : l&apos;id&eacute;alisation de l&apos;autre, des sch&eacute;mas r&eacute;p&eacute;titifs li&eacute;s &agrave; l&apos;enfance, la peur inconsciente de l&apos;intimit&eacute; v&eacute;ritable et un lien karmique &agrave; transcender.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            L&apos;<strong>amour &agrave; sens unique</strong> n&apos;est pas le fruit du hasard. Il r&eacute;pond &agrave; des m&eacute;canismes psychologiques, &eacute;nerg&eacute;tiques et parfois karmiques que la <strong>voyance amoureuse</strong> permet de comprendre en profondeur. Identifier les causes de votre <strong>amour non r&eacute;ciproque</strong> est la premi&egrave;re &eacute;tape vers la <strong>gu&eacute;rison</strong> et la transformation.
          </p>

          <div className="space-y-5">
            <div className="bg-rose-50 border-l-4 border-rose-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-rose-700">L&apos;Id&eacute;alisation de l&apos;Autre</h3>
              <p className="text-gray-700 text-sm">
                L&apos;<strong>amour non partag&eacute;</strong> se nourrit souvent d&apos;une image id&eacute;alis&eacute;e de la personne aim&eacute;e. Votre esprit projette sur l&apos;autre des qualit&eacute;s fantasmées, cr&eacute;ant un &ecirc;tre parfait qui n&apos;existe que dans votre imagination. Le <strong>tarot</strong> r&eacute;v&egrave;le cette id&eacute;alisation &agrave; travers la carte de la Lune, qui expose les illusions et les projections &eacute;motionnelles. Distinguer la personne r&eacute;elle de l&apos;image id&eacute;alis&eacute;e est souvent le premier pas vers la <strong>lib&eacute;ration &eacute;motionnelle</strong>.
              </p>
            </div>

            <div className="bg-pink-50 border-l-4 border-pink-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-pink-700">Les Sch&eacute;mas R&eacute;p&eacute;titifs</h3>
              <p className="text-gray-700 text-sm">
                Si vous &ecirc;tes r&eacute;guli&egrave;rement attir&eacute;(e) par des personnes qui ne vous aiment pas, un <strong>sch&eacute;ma r&eacute;p&eacute;titif</strong> est probablement &agrave; l&apos;&oelig;uvre. Ces sch&eacute;mas trouvent souvent leur origine dans l&apos;enfance : un amour parental conditionnel, un sentiment d&apos;ind&eacute;cence ou la croyance profonde de ne pas m&eacute;riter l&apos;<strong>amour r&eacute;ciproque</strong>. Le <strong>tarot karmique</strong> identifie ces sch&eacute;mas ancestraux et les le&ccedil;ons que votre &acirc;me cherche &agrave; int&eacute;grer.
              </p>
            </div>

            <div className="bg-fuchsia-50 border-l-4 border-fuchsia-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-fuchsia-700">La Peur de l&apos;Intimit&eacute; R&eacute;elle</h3>
              <p className="text-gray-700 text-sm">
                Paradoxalement, certaines personnes choisissent inconsciemment un <strong>amour non partag&eacute;</strong> pour se prot&eacute;ger de l&apos;intimit&eacute; v&eacute;ritable. Aimer quelqu&apos;un d&apos;inaccessible permet de vivre l&apos;intensit&eacute; des <strong>sentiments amoureux</strong> sans jamais affronter la vuln&eacute;rabilit&eacute; d&apos;une <strong>relation r&eacute;elle</strong>. Le <strong>voyant</strong> per&ccedil;oit cette dynamique et guide vers la prise de conscience n&eacute;cessaire pour briser ce m&eacute;canisme d&apos;&eacute;vitement.
              </p>
            </div>

            <div className="bg-violet-50 border-l-4 border-violet-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-violet-700">Le Lien Karmique</h3>
              <p className="text-gray-700 text-sm">
                Certains <strong>amours non r&eacute;ciproques</strong> portent une dimension karmique : une dette &eacute;motionnelle d&apos;une vie ant&eacute;rieure, une le&ccedil;on d&apos;&acirc;me &agrave; compl&eacute;ter, ou un &eacute;cho d&apos;une <strong>relation pass&eacute;e</strong> non r&eacute;solue. La <strong>voyance spirituelle</strong> explore cette dimension pour vous aider &agrave; comprendre le sens profond de cette exp&eacute;rience et &agrave; la transcender plut&ocirc;t qu&apos;&agrave; la r&eacute;p&eacute;ter.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Signes non r&eacute;ciproque */}
        <section id="signes" className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-8 mb-8 border-2 border-rose-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">&#x1F50D; Les Signes d&apos;un Amour Non R&eacute;ciproque</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Les cinq signes d&apos;un amour non r&eacute;ciproque sont l&apos;asym&eacute;trie des efforts, l&apos;&eacute;vitement de l&apos;intimit&eacute;, le flou sur l&apos;avenir, le positionnement en ami(e) et votre propre d&eacute;ni face aux indices.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Reconna&icirc;tre les signes d&apos;un <strong>amour non partag&eacute;</strong> est douloureux mais essentiel. Refuser de voir la r&eacute;alit&eacute; prolonge inutilement la souffrance. Voici les indicateurs les plus fiables, tels que r&eacute;v&eacute;l&eacute;s par la <strong>voyance sentimentale</strong> et confirm&eacute;s par des milliers de consultations.
          </p>

          <div className="space-y-5">
            <div className="bg-white rounded-lg p-5 border-l-4 border-rose-500">
              <h3 className="font-bold text-lg mb-2 text-rose-700">L&apos;Asym&eacute;trie des Efforts</h3>
              <p className="text-gray-700 text-sm">
                C&apos;est toujours vous qui initiez les contacts, les rendez-vous, les conversations profondes. L&apos;autre personne r&eacute;pond poliment mais ne prend jamais les devants. Dans un <strong>amour r&eacute;ciproque</strong>, l&apos;initiative est partag&eacute;e naturellement. Si vous retirez vos efforts et que le lien s&apos;&eacute;teint, la non-r&eacute;ciprocit&eacute; est confirm&eacute;e.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-pink-500">
              <h3 className="font-bold text-lg mb-2 text-pink-700">L&apos;&Eacute;vitement de l&apos;Intimit&eacute;</h3>
              <p className="text-gray-700 text-sm">
                La personne maintient une distance &eacute;motionnelle ou physique syst&eacute;matique. Elle &eacute;vite les situations de t&ecirc;te-&agrave;-t&ecirc;te, change de sujet quand la conversation devient personnelle, et ne partage jamais ses vuln&eacute;rabilit&eacute;s avec vous. Ce comportement r&eacute;v&egrave;le un <strong>amour &agrave; sens unique</strong> que le <strong>tarot</strong> confirme souvent par le Quatre de Coupe ou l&apos;Ermite en position de l&apos;autre.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-fuchsia-500">
              <h3 className="font-bold text-lg mb-2 text-fuchsia-700">Le Flou sur l&apos;Avenir</h3>
              <p className="text-gray-700 text-sm">
                Quand vous &eacute;voquez l&apos;avenir &agrave; deux, la personne reste &eacute;vasive, change de sujet ou fait de l&apos;humour pour d&eacute;tourner la conversation. Elle ne vous int&egrave;gre pas dans ses projets &agrave; moyen ou long terme. Ce refus de projection commune est l&apos;un des signes les plus clairs d&apos;un <strong>amour non r&eacute;ciproque</strong>. La <strong>voyance</strong> r&eacute;v&egrave;le les v&eacute;ritables intentions de l&apos;autre.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-violet-500">
              <h3 className="font-bold text-lg mb-2 text-violet-700">Le &laquo;&nbsp;Friend Zone&nbsp;&raquo; Install&eacute;</h3>
              <p className="text-gray-700 text-sm">
                La personne vous traite explicitement comme un(e) ami(e), vous parle de ses autres int&eacute;r&ecirc;ts amoureux, et vous confie ses probl&egrave;mes de c&oelig;ur sans percevoir vos <strong>sentiments</strong>. Ce positionnement amical est souvent d&eacute;finitif. Le <strong>tarot sentimental</strong> distingue clairement si une &eacute;volution vers l&apos;<strong>amour</strong> est possible ou si l&apos;amiti&eacute; est le plafond &eacute;motionnel de cette connexion.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-red-500">
              <h3 className="font-bold text-lg mb-2 text-red-700">Le D&eacute;ni Int&eacute;rieur</h3>
              <p className="text-gray-700 text-sm">
                Le signe le plus subtil est votre propre <strong>d&eacute;ni</strong>. Vous interpr&eacute;tez chaque geste banal comme un signe d&apos;int&eacute;r&ecirc;t, vous trouvez des excuses &agrave; son indiff&eacute;rence et vous vous accrochez &agrave; de minuscules espoirs. Le <strong>tarot</strong> coupe &agrave; travers vos illusions avec bienveillance, r&eacute;v&eacute;lant la r&eacute;alit&eacute; &eacute;nerg&eacute;tique du lien plut&ocirc;t que vos projections. Pour savoir ce que l&apos;autre pense r&eacute;ellement, consultez notre guide <Link href="/sentiments/pense-t-il-elle-a-moi" className="text-rose-600 hover:text-rose-800 underline font-medium">Pense-t-il/elle &agrave; moi ?</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Le Tarot r&eacute;v&egrave;le les sentiments */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">&#x1F0CF; Ce que le Tarot R&eacute;v&egrave;le sur les Sentiments de l&apos;Autre</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Le tarot r&eacute;v&egrave;le les sentiments v&eacute;ritables de l&apos;autre : le Deux de Coupe signale une connexion mutuelle, tandis que le Quatre de Coupe ou le Huit de Coupe confirment un amour non r&eacute;ciproque.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Le <strong>tarot sentimental</strong> est l&apos;outil le plus pr&eacute;cis pour interpr&eacute;ter ce que la personne aim&eacute;e ressent v&eacute;ritablement. Certaines cartes sont particuli&egrave;rement r&eacute;v&eacute;latrices lorsqu&apos;elles apparaissent en position &laquo;&nbsp;sentiments de l&apos;autre&nbsp;&raquo; dans un <strong>tirage amoureux</strong>.
          </p>

          <div className="space-y-4">
            <div className="bg-green-50 rounded-lg p-5 border-l-4 border-green-400">
              <h3 className="font-bold text-green-700 mb-2">Cartes Encourageantes &mdash; Un Espoir Fond&eacute;</h3>
              <p className="text-gray-700 text-sm mb-2">Certaines cartes indiquent que les <strong>sentiments</strong> de l&apos;autre sont plus profonds qu&apos;il n&apos;y para&icirc;t.</p>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>&bull; <strong>Le Chevalier de Coupe :</strong> des sentiments tendres naissent mais la personne h&eacute;site &agrave; les exprimer</li>
                <li>&bull; <strong>Le Deux de Coupe :</strong> un potentiel de <strong>r&eacute;ciprocit&eacute;</strong> existe, la connexion est mutuelle</li>
                <li>&bull; <strong>L&apos;&Eacute;toile :</strong> un espoir sincère de votre c&ocirc;t&eacute; qui trouve un &eacute;cho chez l&apos;autre</li>
                <li>&bull; <strong>Temp&eacute;rance :</strong> patience requise, les <strong>sentiments</strong> m&ucirc;rissent lentement</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-5 border-l-4 border-red-400">
              <h3 className="font-bold text-red-700 mb-2">Cartes de Cl&ocirc;ture &mdash; Accepter la R&eacute;alit&eacute;</h3>
              <p className="text-gray-700 text-sm mb-2">D&apos;autres cartes signalent clairement que l&apos;<strong>amour</strong> n&apos;est pas r&eacute;ciproque.</p>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>&bull; <strong>Le Quatre de Coupe :</strong> la personne est ferm&eacute;e &eacute;motionnellement et ne voit pas ce que vous offrez</li>
                <li>&bull; <strong>Le Huit de Coupe :</strong> elle s&apos;&eacute;loigne d&eacute;lib&eacute;r&eacute;ment de cette connexion</li>
                <li>&bull; <strong>Le Trois d&apos;&Eacute;p&eacute;e :</strong> votre <strong>amour non partag&eacute;</strong> cause une douleur reconnue par le tarot</li>
                <li>&bull; <strong>L&apos;Ermite :</strong> la personne pr&eacute;f&egrave;re la solitude et n&apos;est pas disponible pour l&apos;<strong>amour</strong></li>
              </ul>
            </div>
          </div>

          <div className="bg-rose-50 border-l-4 border-rose-600 p-5 rounded mt-6">
            <p className="text-gray-700"><strong>&Agrave; d&eacute;couvrir :</strong> Pour une analyse compl&egrave;te des sentiments de l&apos;autre, consultez notre guide <Link href="/sentiments/maime-t-il-elle" className="text-rose-600 hover:text-rose-800 underline font-medium">M&apos;aime-t-il/elle vraiment ?</Link> qui d&eacute;taille chaque carte en position de <strong>sentiments</strong>.</p>
          </div>
        </section>

        <VoyantRecommendations topic="rupture" limit={3} showOnlineFirst={true} source="amour-non-partage-mid" />

        {/* Section: Guide &eacute;tape par &eacute;tape */}
        <section className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-8 mb-8 border-2 border-pink-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">&#x1F4CB; Guide &Eacute;tape par &Eacute;tape pour Surmonter un Amour Non Partag&eacute;</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Surmonter un amour non partag&eacute; passe par cinq &eacute;tapes : reconna&icirc;tre et accepter la non-r&eacute;ciprocit&eacute;, cr&eacute;er de la distance, traverser la douleur, se recentrer sur soi et comprendre les le&ccedil;ons karmiques.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Surmonter un <strong>amour non r&eacute;ciproque</strong> est un parcours structur&eacute; qui demande du courage, de l&apos;honnêtet&eacute; envers soi-m&ecirc;me et du temps. Le <strong>tarot</strong> et la <strong>voyance sentimentale</strong> accompagnent chaque &eacute;tape de cette <strong>lib&eacute;ration &eacute;motionnelle</strong>.
          </p>

          <div className="space-y-5">
            <div className="bg-white rounded-lg p-5 border-l-4 border-rose-500">
              <h3 className="font-bold text-lg mb-2 text-rose-700">&Eacute;tape 1 &mdash; Reconna&icirc;tre et Accepter</h3>
              <p className="text-gray-700 text-sm">
                La premi&egrave;re &eacute;tape est la plus difficile : admettre que vos <strong>sentiments</strong> ne sont pas r&eacute;ciproques. Le <strong>tarot</strong> facilite cette prise de conscience en montrant objectivement les &eacute;nergies du lien. Accepter la r&eacute;alit&eacute; n&apos;est pas un &eacute;chec mais un acte de respect envers vous-m&ecirc;me. Le <strong>d&eacute;ni</strong> prolonge la souffrance tandis que l&apos;acceptation ouvre la porte &agrave; la <strong>gu&eacute;rison</strong>.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-pink-500">
              <h3 className="font-bold text-lg mb-2 text-pink-700">&Eacute;tape 2 &mdash; Cr&eacute;er de la Distance</h3>
              <p className="text-gray-700 text-sm">
                R&eacute;duire ou couper le contact avec la personne aim&eacute;e est essentiel pour permettre &agrave; votre c&oelig;ur de se d&eacute;tacher. Chaque interaction nourrit l&apos;espoir et ravive la douleur de la <strong>non-r&eacute;ciprocit&eacute;</strong>. Le <strong>silence radio</strong>, m&ecirc;me temporaire, cr&eacute;e l&apos;espace n&eacute;cessaire &agrave; la <strong>cicatrisation &eacute;motionnelle</strong>. La <strong>voyance</strong> confirme si cette distance est la bonne strat&eacute;gie pour votre situation sp&eacute;cifique.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-fuchsia-500">
              <h3 className="font-bold text-lg mb-2 text-fuchsia-700">&Eacute;tape 3 &mdash; Traverser la Douleur</h3>
              <p className="text-gray-700 text-sm">
                Autorisez-vous &agrave; ressentir pleinement le <strong>chagrin d&apos;amour</strong>. Le <Link href="/rupture/deuil-amoureux" className="text-rose-600 hover:text-rose-800 underline font-medium">deuil amoureux</Link> d&apos;un amour qui n&apos;a jamais exist&eacute; dans sa r&eacute;ciprocit&eacute; est l&eacute;gitime et n&eacute;cessaire. Pleurez ce qui aurait pu &ecirc;tre, la beaut&eacute; du sentiment que vous portiez, et les r&ecirc;ves associ&eacute;s. Le <strong>tarot de gu&eacute;rison</strong> soutient cette traversée en r&eacute;v&eacute;lant les cartes d&apos;espoir qui annoncent l&apos;apaisement.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-violet-500">
              <h3 className="font-bold text-lg mb-2 text-violet-700">&Eacute;tape 4 &mdash; Se Recentrer sur Soi</h3>
              <p className="text-gray-700 text-sm">
                Redirigez l&apos;&eacute;nergie consacr&eacute;e &agrave; cet <strong>amour non partag&eacute;</strong> vers vous-m&ecirc;me. Reconnectez-vous &agrave; vos passions, vos projets et vos relations nourrissantes. Cultivez l&apos;<strong>amour de soi</strong> comme fondation de tout futur lien amoureux sain. Le <strong>tarot</strong> r&eacute;v&egrave;le les talents et les potentiels que cette &eacute;preuve lib&egrave;re en vous, transformant la perte en d&eacute;couverte.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-purple-500">
              <h3 className="font-bold text-lg mb-2 text-purple-700">&Eacute;tape 5 &mdash; Comprendre les Le&ccedil;ons</h3>
              <p className="text-gray-700 text-sm">
                Chaque <strong>amour &agrave; sens unique</strong> porte des le&ccedil;ons profondes sur vous-m&ecirc;me, vos besoins et vos sch&eacute;mas amoureux. Le <strong>tarot karmique</strong> r&eacute;v&egrave;le ces enseignements : peut-&ecirc;tre aviez-vous besoin d&apos;apprendre la valeur de la <strong>r&eacute;ciprocit&eacute;</strong>, de renforcer vos limites &eacute;motionnelles, ou de gu&eacute;rir une blessure ancienne. Int&eacute;grer ces le&ccedil;ons vous prot&egrave;ge de la <strong>r&eacute;p&eacute;tition</strong> de ce sch&eacute;ma.
              </p>
            </div>
          </div>
        </section>

        {/* Section: S&apos;ouvrir &agrave; l&apos;amour r&eacute;ciproque */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">&#x1F49D; S&apos;Ouvrir &agrave; l&apos;Amour R&eacute;ciproque</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">S&apos;ouvrir &agrave; l&apos;amour r&eacute;ciproque exige de red&eacute;finir ses crit&egrave;res amoureux en pla&ccedil;ant la r&eacute;ciprocit&eacute; en priorit&eacute;, d&apos;accueillir la vuln&eacute;rabilit&eacute; et de faire confiance au timing de la vie.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Apr&egrave;s avoir travers&eacute; et int&eacute;gr&eacute; l&apos;exp&eacute;rience d&apos;un <strong>amour non partag&eacute;</strong>, votre c&oelig;ur est pr&ecirc;t &agrave; accueillir une <strong>relation &eacute;quilibr&eacute;e</strong> et <strong>r&eacute;ciproque</strong>. Le <strong>tarot</strong> et la <strong>voyance sentimentale</strong> guident cette ouverture en identifiant les &eacute;nergies favorables et les blocages r&eacute;siduels.
          </p>

          <div className="space-y-5">
            <div className="bg-rose-50 border-l-4 border-rose-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-rose-700">Red&eacute;finir Vos Crit&egrave;res Amoureux</h3>
              <p className="text-gray-700 text-sm">
                L&apos;exp&eacute;rience d&apos;un <strong>amour non r&eacute;ciproque</strong> vous enseigne une le&ccedil;on fondamentale : la <strong>r&eacute;ciprocit&eacute;</strong> n&apos;est pas n&eacute;gociable. Elle doit &ecirc;tre le premier crit&egrave;re de toute <strong>relation amoureuse</strong>. Le <strong>tarot</strong> vous aide &agrave; identifier ce que vous m&eacute;ritez vraiment dans l&apos;amour et &agrave; ne plus vous contenter de miettes &eacute;motionnelles. La carte du Soleil en position de conseil rappelle que vous m&eacute;ritez un <strong>amour lumineux</strong> et partag&eacute;.
              </p>
            </div>

            <div className="bg-pink-50 border-l-4 border-pink-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-pink-700">Accueillir la Vuln&eacute;rabilit&eacute;</h3>
              <p className="text-gray-700 text-sm">
                Un <strong>amour v&eacute;ritable</strong> et <strong>r&eacute;ciproque</strong> exige la vuln&eacute;rabilit&eacute; : montrer qui vous &ecirc;tes vraiment, avec vos forces et vos failles. Apr&egrave;s un <strong>rejet amoureux</strong>, cette ouverture demande du courage. Mais c&apos;est pr&eacute;cis&eacute;ment cette authenticit&eacute; qui attire les <strong>relations saines</strong>. Le <strong>Deux de Coupe</strong> dans votre tirage annonce cette rencontre &eacute;quilibr&eacute;e o&ugrave; la vuln&eacute;rabilit&eacute; sera accueillie avec tendresse.
              </p>
            </div>

            <div className="bg-fuchsia-50 border-l-4 border-fuchsia-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-fuchsia-700">Faire Confiance au Timing Divin</h3>
              <p className="text-gray-700 text-sm">
                La <strong>voyance</strong> r&eacute;v&egrave;le que chaque exp&eacute;rience amoureuse &mdash; m&ecirc;me douloureuse &mdash; vous pr&eacute;pare &agrave; la <strong>relation</strong> qui vous est destin&eacute;e. L&apos;<strong>amour non partag&eacute;</strong> que vous avez travers&eacute; a renforc&eacute; votre c&oelig;ur, affin&eacute; vos besoins et clarifi&eacute; vos valeurs. Le <strong>tarot</strong> r&eacute;v&egrave;le que le moment de votre <strong>rencontre v&eacute;ritable</strong> approche. Pour en savoir plus, explorez notre guidance sur <Link href="/nouvelle-rencontre/quand-rencontre-amour" className="text-rose-600 hover:text-rose-800 underline font-medium">quand vais-je rencontrer l&apos;amour</Link>.
              </p>
            </div>
          </div>

          <div className="bg-rose-50 border-l-4 border-rose-600 p-5 rounded mt-6">
            <p className="text-gray-700"><strong>Compl&eacute;ment :</strong> Si vous traversez un <strong>chagrin d&apos;amour</strong> li&eacute; &agrave; cette situation, notre guide d&eacute;di&eacute; au <Link href="/rupture/chagrin-damour" className="text-rose-600 hover:text-rose-800 underline font-medium">chagrin d&apos;amour</Link> vous propose des techniques concr&egrave;tes de soulagement imm&eacute;diat.</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">&#x2753; Questions Fr&eacute;quentes sur l&apos;Amour Non Partag&eacute;</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Voici les r&eacute;ponses aux questions les plus pos&eacute;es sur l&apos;amour non partag&eacute; : reconna&icirc;tre la non-r&eacute;ciprocit&eacute;, possibilit&eacute; de transformation, dur&eacute;e de gu&eacute;rison, sch&eacute;mas r&eacute;p&eacute;titifs et r&eacute;v&eacute;lations du tarot.</p>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mon amour est-il non r&eacute;ciproque ?</h3>
              <p className="text-gray-700 leading-relaxed">Un <strong>amour non r&eacute;ciproque</strong> se reconna&icirc;t &agrave; plusieurs signes clairs : la personne &eacute;vite les contacts intimes, ne prend jamais l&apos;initiative des rencontres, reste &eacute;vasive sur l&apos;avenir, et maintient une distance &eacute;motionnelle malgr&eacute; votre rapprochement. Le <strong>tarot</strong> r&eacute;v&egrave;le avec pr&eacute;cision les <strong>sentiments</strong> v&eacute;ritables de l&apos;autre personne &agrave; travers des cartes comme le Trois d&apos;&Eacute;p&eacute;e ou le Huit de Coupe. La <strong>voyance sentimentale</strong> offre la clart&eacute; n&eacute;cessaire pour accepter la r&eacute;alit&eacute;.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Un amour non partag&eacute; peut-il devenir r&eacute;ciproque ?</h3>
              <p className="text-gray-700 leading-relaxed">Dans certains cas, un <strong>amour</strong> qui semble <strong>non r&eacute;ciproque</strong> peut &eacute;voluer si les conditions changent. Parfois, la personne aim&eacute;e a besoin de temps, traverse une p&eacute;riode personnelle difficile, ou n&apos;a pas encore r&eacute;alis&eacute; ses <strong>sentiments</strong>. Le <strong>tarot</strong> peut r&eacute;v&eacute;ler si un potentiel de r&eacute;ciprocit&eacute; existe. Toutefois, forcer les sentiments est impossible et malsain. La <strong>voyance</strong> guide vers le discernement : savoir quand pers&eacute;v&eacute;rer et quand lâcher prise.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Combien de temps pour surmonter un amour non partag&eacute; ?</h3>
              <p className="text-gray-700 leading-relaxed">La dur&eacute;e varie de 3 &agrave; 6 mois en moyenne pour un <strong>amour non r&eacute;ciproque</strong> de courte dur&eacute;e, et jusqu&apos;&agrave; un an ou plus pour un <strong>amour platonique</strong> de longue date. Le processus est similaire au <strong>deuil amoureux</strong> mais pr&eacute;sente une difficult&eacute; suppl&eacute;mentaire : l&apos;absence de souvenirs de couple &agrave; relativiser. Le <strong>tarot</strong> identifie les <strong>blocages</strong> qui prolongent l&apos;attachement et acc&eacute;l&egrave;re la <strong>lib&eacute;ration &eacute;motionnelle</strong>.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pourquoi suis-je attir&eacute;(e) par des personnes indisponibles ?</h3>
              <p className="text-gray-700 leading-relaxed">L&apos;attraction syst&eacute;matique vers des personnes indisponibles r&eacute;v&egrave;le souvent des <strong>sch&eacute;mas inconscients</strong> li&eacute;s &agrave; l&apos;enfance : recherche d&apos;un amour parental conditionnel, peur de l&apos;intimit&eacute; v&eacute;ritable, ou croyance profonde de ne pas m&eacute;riter l&apos;<strong>amour r&eacute;ciproque</strong>. Le <strong>tarot karmique</strong> peut r&eacute;v&eacute;ler ces sch&eacute;mas ancestraux et les le&ccedil;ons que votre &acirc;me cherche &agrave; int&eacute;grer &agrave; travers ces exp&eacute;riences douloureuses.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Le tarot r&eacute;v&egrave;le-t-il si quelqu&apos;un pense &agrave; moi ?</h3>
              <p className="text-gray-700 leading-relaxed">Oui, le <strong>tarot</strong> est particuli&egrave;rement efficace pour r&eacute;v&eacute;ler les pens&eacute;es et les &eacute;nergies qu&apos;une personne projette vers vous. Des cartes comme le <strong>Deux de Coupe</strong> en position de l&apos;autre signalent une connexion mutuelle. Le <strong>Chevalier de Coupe</strong> montre une personne qui pense &agrave; vous avec tendresse. Le <strong>Huit d&apos;&Eacute;p&eacute;e</strong> r&eacute;v&egrave;le que la personne vous a mentalement bloqu&eacute;(e). La <strong>voyance sentimentale</strong> apporte les r&eacute;ponses que l&apos;observation seule ne peut offrir.</p>
            </div>
          </div>
        </section>

        {/* Articles Connexes */}
        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900">&#x1F4DA; Articles Connexes</h3>
          <div className="space-y-2">
            <Link href="/sentiments/maime-t-il-elle" className="block text-rose-600 hover:text-rose-800 font-medium">&rarr; M&apos;aime-t-il/elle Vraiment ?</Link>
            <Link href="/rupture/oublier-son-ex" className="block text-rose-600 hover:text-rose-800 font-medium">&rarr; Comment Oublier son Ex</Link>
            <Link href="/nouvelle-rencontre/trouver-ame-soeur" className="block text-rose-600 hover:text-rose-800 font-medium">&rarr; Trouver son &Acirc;me S&oelig;ur</Link>
            <Link href="/sentiments/pense-t-il-elle-a-moi" className="block text-rose-600 hover:text-rose-800 font-medium">&rarr; Pense-t-il/elle &agrave; Moi ?</Link>
            <Link href="/rupture/chagrin-damour" className="block text-rose-600 hover:text-rose-800 font-medium">&rarr; Surmonter un Chagrin d&apos;Amour</Link>
          </div>
        </div>

        <VoyantFinalCTA topic="rupture" source="amour-non-partage-final" />
      </div>
    </main>
  );
}
