import type { Metadata } from 'next';
import Link from 'next/link';
import { getOrganizationSchema, getWebSiteSchema, getFAQSchema, getAuthorSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import TestimonialSection from '@/components/TestimonialSection';
import TrustBadges from '@/components/TrustBadges';
import DynamicCTAButton from '@/components/DynamicCTAButton';

export const metadata: Metadata = {
  title: {
    absolute: 'VoyantLove — Voyance Amoureuse Spécialisée',
  },
  description: 'VoyantLove : votre guide en voyance amoureuse. Reconquête, sentiments, rencontre, rupture — consultez un voyant spécialisé amour. 10 min offertes.',
  alternates: { canonical: 'https://www.voyantlove.fr/' },
};

export default function HomePage() {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();
  const authorSchema = getAuthorSchema();
  const faqSchema = getFAQSchema([
    {
      question: 'Qu\'est-ce que la voyance amoureuse et comment fonctionne-t-elle ?',
      answer: 'Oubliez l\'image de la boule de cristal. La voyance amoureuse moderne, c\'est un voyant qui utilise le tarot, la clairvoyance ou l\'astrologie pour décrypter les énergies de votre situation sentimentale. Ce qu\'il capte : les sentiments réels de l\'autre personne, les blocages invisibles dans votre relation, les fenêtres de timing favorables. La voyance ne prédit pas un futur gravé dans le marbre. Elle éclaire les probabilités en fonction de vos choix actuels et vous donne les clés pour décider en conscience.',
    },
    {
      question: 'La voyance amoureuse par tarot est-elle fiable ?',
      answer: 'Tout dépend de qui tient les cartes. Un jeu de tarot entre les mains d\'un débutant, c\'est comme un stéthoscope entre les mains d\'un non-médecin — l\'outil est bon, mais sans expertise il ne sert à rien. Les 78 arcanes (22 majeurs, 56 mineurs) offrent une palette incroyablement nuancée pour lire les sentiments, les tensions et les évolutions possibles. Le critère essentiel : un tarologue honnête qui vous dit ce qu\'il voit, même quand c\'est difficile à entendre, plutôt que ce que vous espérez.',
    },
    {
      question: 'Comment choisir un bon voyant spécialisé en amour ?',
      answer: 'Quatre signes qui ne trompent pas : il pose peu de questions et capte votre situation rapidement. Il donne des détails précis, pas des généralités. Il est franc même quand la vérité dérange. Et surtout, il ne crée jamais de dépendance. Vérifiez les avis clients et l\'expérience (minimum 5 ans de pratique). Fuyez ceux qui promettent des retours garantis ou qui vendent des rituels payants en supplément. Un vrai professionnel vous guide et vous rend autonome — il ne cherche pas à vous faire revenir chaque semaine.',
    },
    {
      question: 'Quelles questions peut-on poser en voyance amoureuse ?',
      answer: 'Toutes celles qui vous empêchent de dormir. M\'aime-t-il vraiment ? Va-t-elle revenir ? Quand vais-je rencontrer quelqu\'un ? Mon couple survivra-t-il à cette crise ? Est-il fidèle ? Le tarot répond aussi aux questions de timing et de compatibilité. Une astuce : plus votre question est précise, meilleure sera la réponse. "Que ressent-il pour moi en ce moment ?" donnera une lecture bien plus riche que "Est-ce que ça va marcher entre nous ?" qui reste trop vague pour une analyse fine.',
    },
    {
      question: 'Quelle est la différence entre un voyant amour et une voyante amour ?',
      answer: 'Aucune différence de compétence. Le don de voyance n\'a rien à voir avec le genre du praticien. Ce qui compte : la spécialisation en questions sentimentales, l\'expérience en guidance amoureuse, et la maîtrise des supports divinatoires. Certaines personnes se sentent plus à l\'aise pour aborder des sujets intimes avec une femme, d\'autres avec un homme. C\'est purement une question de confort personnel. Choisissez selon votre ressenti et les retours d\'autres consultants.',
    },
    {
      question: 'Comment se déroule une consultation voyance amour ?',
      answer: 'Vous n\'avez pas besoin de tout raconter. Un bon voyant capte les énergies dès les premières secondes. Concrètement : vous exposez brièvement votre situation, le voyant choisit le support adapté (tarot pour l\'analyse détaillée, clairvoyance pour les ressentis directs, astrologie pour le long terme), puis il vous transmet ce qu\'il perçoit. La séance dure 20 à 40 minutes en moyenne. Vous repartez avec des réponses claires et des pistes d\'action concrètes. Si un voyant reste flou après 15 minutes, changez de praticien.',
    },
  ]);

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-purple to-brand-purple-dark text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            💜 VoyantLove
          </h1>
          <p className="text-2xl mb-3 opacity-95 font-semibold">
            Voyance Amoureuse Spécialisée
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Reconquête, sentiments, rencontre, rupture — nos voyants spécialisés en amour vous guident avec le tarot, l&apos;astrologie et la clairvoyance.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <DynamicCTAButton
              label="🔮 Consultation Voyance"
              source="homepage-hero-primary"
              className="bg-white text-brand-purple px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition"
            />
            <Link
              href="#situations"
              className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-purple transition"
            >
              Découvrir nos Guidances
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl mb-2">⭐</div>
              <div className="text-2xl font-bold text-brand-purple">Voyants Certifiés</div>
              <div className="text-sm text-gray-600">Sélectionnés pour leur expertise</div>
            </div>
            <div>
              <div className="text-4xl mb-2">💜</div>
              <div className="text-2xl font-bold text-brand-purple">Spécialistes Amour</div>
              <div className="text-sm text-gray-600">Dédiés aux questions sentimentales</div>
            </div>
            <div>
              <div className="text-4xl mb-2">🔮</div>
              <div className="text-2xl font-bold text-brand-purple">Expérimentés</div>
              <div className="text-sm text-gray-600">Des années de pratique</div>
            </div>
            <div>
              <div className="text-4xl mb-2">🔒</div>
              <div className="text-2xl font-bold text-brand-purple">Confidentiel</div>
              <div className="text-sm text-gray-600">Consultations 100% privées</div>
            </div>
          </div>
        </div>
      </section>

      {/* E-E-A-T Signal */}
      <div className="max-w-6xl mx-auto px-4 pt-8">
        <EEATSignal colorScheme="purple" method="Tarot, clairvoyance et astrologie amoureuse" />
      </div>

      {/* Main Situations */}
      <section id="situations" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Nos Consultations Spécialisées
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Chaque situation amoureuse est unique. Découvrez nos guidances spécialisées adaptées à votre problématique.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Network 1: Reconquête */}
            <Link href="/reconquete" className="group">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-purple-600">
                <div className="text-4xl mb-4">💜</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition">
                  Reconquête Amoureuse
                </h3>
                <p className="text-gray-600 mb-4">
                  Reconquérir votre ex, timing idéal, étapes de reconquête, signes de retour selon le tarot.
                </p>
                <div className="text-purple-600 font-semibold">
                  Découvrir →
                </div>
              </div>
            </Link>

            {/* Network 2: Rupture */}
            <Link href="/rupture" className="group">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-gray-700">
                <div className="text-4xl mb-4">💔</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gray-700 transition">
                  Rupture & Guérison
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprendre les raisons, surmonter le chagrin et oublier son ex selon le tarot.
                </p>
                <div className="text-gray-700 font-semibold">
                  Explorer →
                </div>
              </div>
            </Link>

            {/* Network 3: Nouvelle Rencontre */}
            <Link href="/nouvelle-rencontre" className="group">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-cyan-500">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-500 transition">
                  Nouvelle Rencontre
                </h3>
                <p className="text-gray-600 mb-4">
                  Trouver l'amour, quand rencontrer, reconnaître votre âme sœur selon le tarot.
                </p>
                <div className="text-cyan-500 font-semibold">
                  Découvrir →
                </div>
              </div>
            </Link>

            {/* Network 4: Sentiments */}
            <Link href="/sentiments" className="group">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-red-500">
                <div className="text-4xl mb-4">💖</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition">
                  Sentiments & Avenir
                </h3>
                <p className="text-gray-600 mb-4">
                  Décrypter sentiments, signes d'amour, prédictions avenir amoureux selon le tarot.
                </p>
                <div className="text-red-500 font-semibold">
                  Analyser →
                </div>
              </div>
            </Link>

            {/* Network 5: Crise de Couple */}
            <Link href="/crise-couple" className="group">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-orange-500">
                <div className="text-4xl mb-4">⚠️</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition">
                  Crise de Couple
                </h3>
                <p className="text-gray-600 mb-4">
                  Infidélité, jalousie, communication : solutions pour surmonter les crises selon le tarot.
                </p>
                <div className="text-orange-500 font-semibold">
                  Solutions →
                </div>
              </div>
            </Link>

            {/* Network 6: Méthodes de Voyance */}
            <Link href="/methodes-voyance" className="group">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-indigo-500">
                <div className="text-4xl mb-4">🔮</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-500 transition">
                  Méthodes de Voyance
                </h3>
                <p className="text-gray-600 mb-4">
                  Tarot, oracle, astrologie : découvrez les méthodes de voyance amoureuse et leurs spécificités.
                </p>
                <div className="text-indigo-500 font-semibold">
                  Explorer →
                </div>
              </div>
            </Link>

            {/* Network 7: Voyance Gratuite Amour */}
            <Link href="/voyance-gratuite-amour" className="group">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-green-500">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-green-500 transition">
                  Voyance Gratuite Amour
                </h3>
                <p className="text-gray-600 mb-4">
                  Tarot gratuit, oracle et horoscope amour : tirages et guidance sentimentale sans engagement.
                </p>
                <div className="text-green-500 font-semibold">
                  Découvrir →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Voyant Amour - Anchor content section for primary keyword */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">
            Qu'est-ce qu'un Voyant Amour ?
          </h2>
          <p className="text-lg font-semibold text-gray-800 mb-6 text-center max-w-3xl mx-auto">
            Un <strong>voyant amour</strong> est un praticien de la <strong>voyance sentimentale</strong> qui décrypte, interprète et éclaire les dynamiques invisibles de votre vie amoureuse grâce au tarot, à la clairvoyance et à l'astrologie.
          </p>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg mb-8">
            <p className="text-lg leading-relaxed">
              Contrairement à un voyant généraliste, le <strong>voyant spécialisé amour</strong> — ou <strong>voyante amour</strong> — consacre sa pratique exclusivement aux problématiques du cœur : sentiments, compatibilité, reconquête, rupture et rencontre. Il guide, accompagne et analyse votre situation pour vous aider à <Link href="/sentiments/maime-t-il-elle" className="text-purple-600 hover:text-purple-800 underline font-medium">décrypter les sentiments de l'autre</Link> ou à <Link href="/reconquete/va-t-il-elle-revenir" className="text-purple-600 hover:text-purple-800 underline font-medium">anticiper un retour</Link>. Chaque <strong>consultation voyance amour</strong> apporte clarté, apaisement et direction concrète.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🔮</div>
              <h3 className="font-bold text-lg mb-2">Voyance Sentimentale</h3>
              <p className="text-gray-600 text-sm">Le <strong>voyant amour</strong> analyse les énergies de votre relation par <strong>tarot</strong>, <strong>clairvoyance</strong> ou <strong>astrologie</strong> pour révéler les sentiments cachés.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">💜</div>
              <h3 className="font-bold text-lg mb-2">Guidance Personnalisée</h3>
              <p className="text-gray-600 text-sm">Chaque <strong>consultation voyance amour</strong> est unique : le voyant adapte sa lecture à votre situation sentimentale spécifique et vos questions.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">⭐</div>
              <h3 className="font-bold text-lg mb-2">Expertise Reconnue</h3>
              <p className="text-gray-600 text-sm">Nos <strong>voyants spécialisés amour</strong> comptent des années d'expérience en <strong>voyance amoureuse</strong> avec des milliers de consultations réussies.</p>
            </div>
          </div>

          {/* Session walkthrough */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Comment se Déroule une Séance avec un Voyant Amour ?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Une consultation avec un <strong>voyant amour</strong> commence par un échange sur votre situation sentimentale. Vous n'avez pas besoin de tout raconter — un voyant expérimenté capte les énergies dès les premières secondes. Il ou elle pose peu de questions et commence rapidement à vous transmettre ce qu'il perçoit : les émotions de l'autre personne, les blocages dans la relation, et les événements à venir.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Le voyant utilise ensuite un support divinatoire — <strong>tarot de Marseille</strong>, oracle ou clairvoyance pure — pour approfondir l'analyse. Chaque carte tirée apporte une information spécifique : les sentiments réels, le timing d'un événement, ou les obstacles à lever. La séance dure en moyenne 20 à 40 minutes et se termine par des <strong>conseils concrets</strong> adaptés à votre situation. Pas de généralités : des réponses personnalisées à vos questions précises.
          </p>

          {/* Singles vs couples */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Voyant Amour pour Célibataires</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Si vous êtes célibataire, un <strong>voyant spécialisé amour</strong> peut vous aider sur plusieurs plans : <Link href="/nouvelle-rencontre/quand-rencontre-amour" className="text-purple-600 hover:text-purple-800 underline font-medium">quand allez-vous rencontrer quelqu'un</Link>, quel profil correspond à votre chemin de vie, et quels blocages émotionnels (peur de l'abandon, schémas répétitifs, blessures non guéries) retardent inconsciemment cette rencontre. Le tarot révèle aussi le contexte probable — en ligne, par des amis, au travail — pour que vous soyez au bon endroit au bon moment.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Voyant Amour pour Couples</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            En couple, les questions sont différentes : <Link href="/sentiments/maime-t-il-elle" className="text-purple-600 hover:text-purple-800 underline font-medium">m'aime-t-il/elle encore ?</Link>, y a-t-il quelqu'un d'autre ?, <Link href="/crise-couple" className="text-purple-600 hover:text-purple-800 underline font-medium">comment surmonter cette crise ?</Link>, notre couple a-t-il un avenir ? Un voyant amour capte les dynamiques entre les deux partenaires et identifie les non-dits, les frustrations accumulées et les chemins de réconciliation possibles. Il ne juge pas — il éclaire ce que chacun ressent vraiment.
          </p>

          {/* What questions to ask */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quelles Questions Poser à un Voyant Amour ?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Les meilleures consultations commencent par des questions précises. Voici les questions les plus fréquentes que nos consultants posent à un <strong>voyant amour</strong> :
          </p>
          <div className="grid md:grid-cols-2 gap-3 mb-8">
            <div className="bg-purple-50 rounded-lg p-3">
              <p className="text-gray-800 text-sm">Que ressent-il/elle vraiment pour moi ?</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3">
              <p className="text-gray-800 text-sm"><Link href="/reconquete/va-t-il-elle-revenir" className="text-purple-600 hover:text-purple-800 underline">Mon ex va-t-il/elle revenir ?</Link></p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3">
              <p className="text-gray-800 text-sm"><Link href="/nouvelle-rencontre/quand-rencontre-amour" className="text-purple-600 hover:text-purple-800 underline">Quand vais-je rencontrer l'amour ?</Link></p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3">
              <p className="text-gray-800 text-sm">Est-il/elle fidèle ?</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3">
              <p className="text-gray-800 text-sm">Notre couple a-t-il un avenir ?</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3">
              <p className="text-gray-800 text-sm">Sommes-nous compatibles ?</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3">
              <p className="text-gray-800 text-sm">Pourquoi est-il/elle distant(e) ?</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3">
              <p className="text-gray-800 text-sm"><Link href="/reconquete/reconquerir-son-ex" className="text-purple-600 hover:text-purple-800 underline">Comment reconquérir mon ex ?</Link></p>
            </div>
          </div>

          {/* Divination methods */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Les Méthodes de Voyance Amoureuse</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Un <strong>voyant amour</strong> utilise différents supports selon votre question et sa sensibilité. Chaque méthode apporte un éclairage complémentaire :
          </p>
          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-1">Tarot de Marseille</p>
              <p className="text-gray-700 text-sm">Le support le plus utilisé en voyance amour. Les 22 arcanes majeurs — en particulier <strong>L'Amoureux</strong>, <strong>Le Soleil</strong> et <strong>L'Étoile</strong> — révèlent les dynamiques sentimentales, les obstacles et l'évolution probable de votre relation. L'Amoureux indique un choix sentimental imminent, Le Soleil annonce une période de bonheur et d'harmonie, L'Étoile symbolise l'espoir et le renouveau après une épreuve.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-1">Clairvoyance Pure</p>
              <p className="text-gray-700 text-sm">Certains voyants n'utilisent aucun support — ils captent directement les émotions et les images liées à votre situation. Cette méthode est particulièrement efficace pour ressentir ce que l'autre personne éprouve en ce moment.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-1">Astrologie Amoureuse</p>
              <p className="text-gray-700 text-sm">L'analyse des <strong>transits de Vénus et Jupiter</strong> dans vos maisons relationnelles permet de déterminer les périodes les plus favorables aux rencontres et à l'épanouissement amoureux. La <Link href="/nouvelle-rencontre" className="text-purple-600 hover:text-purple-800 underline font-medium">compatibilité astrologique</Link> entre deux personnes révèle les forces et les zones de tension de la relation.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-1">Numérologie Sentimentale</p>
              <p className="text-gray-700 text-sm">Votre chemin de vie et celui de votre partenaire (ou futur partenaire) révèlent la compatibilité profonde et les cycles amoureux que vous traversez. La numérologie identifie les années personnelles favorables à l'amour.</p>
            </div>
          </div>

          {/* When to consult */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Dans Quel Cas Consulter un Voyant Amour ?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Une consultation avec un <strong>voyant amour</strong> est particulièrement utile dans ces situations :
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-purple-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-1">Doute sur les sentiments</p>
              <p className="text-gray-700 text-sm">Vous ne savez pas ce que l'autre ressent et l'incertitude vous empêche d'avancer.</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-1">Après une rupture</p>
              <p className="text-gray-700 text-sm">Vous voulez savoir si un <Link href="/reconquete" className="text-purple-600 hover:text-purple-800 underline">retour est possible</Link> ou comment tourner la page.</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-1">Envie de rencontrer quelqu'un</p>
              <p className="text-gray-700 text-sm">Célibataire depuis longtemps, vous cherchez à savoir <Link href="/nouvelle-rencontre" className="text-purple-600 hover:text-purple-800 underline">quand et comment</Link> l'amour arrivera.</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-1">Crise de couple</p>
              <p className="text-gray-700 text-sm">Disputes, distance, infidélité suspectée — vous avez besoin de comprendre ce qui se passe vraiment.</p>
            </div>
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg mb-8">
            <p className="text-gray-800 leading-relaxed">
              <strong>Conseil important :</strong> une bonne consultation suffit à éclairer votre situation. Évitez de multiplier les voyants ou de consulter trop souvent — cela crée de la confusion plutôt que de la clarté. Choisissez un <strong>voyant amour</strong> de confiance et suivez ses conseils dans la durée.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="about" className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Comment fonctionne VoyantLove ?
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-purple text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Choisissez votre situation</h3>
                <p className="text-gray-600">
                  Sélectionnez la problématique amoureuse qui correspond à votre vécu : reconquête, rencontre, doute, crise...
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-purple text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Découvrez la guidance tarot</h3>
                <p className="text-gray-600">
                  Chaque page contient une analyse complète : timing idéal, étapes à suivre, erreurs à éviter, selon les cartes.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-purple text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Consultez un voyant si besoin</h3>
                <p className="text-gray-600">
                  Pour une guidance 100% personnalisée, réservez une consultation privée avec nos voyants spécialisés en amour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Voyants Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <VoyantRecommendations
            topic="sentiments"
            title="🔮 Nos Voyants Experts en Amour"
            subtitle="Voyants spécialisés en guidance amoureuse avec des milliers de consultations réussies. Disponibles maintenant pour vous accompagner."
            limit={3}
            showOnlineFirst={true}
            source="homepage-featured"
          />
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50">
        <TestimonialSection
          title="Ce Que Disent Nos Clients"
          subtitle="Des milliers de personnes ont déjà trouvé leurs réponses grâce à nos voyants experts"
          limit={6}
          showVoyantName={true}
        />
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Questions Fréquentes sur la Voyance Amoureuse</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Qu'est-ce que la voyance amoureuse et comment fonctionne-t-elle ?</h3>
              <p className="text-gray-700 leading-relaxed">Oubliez l'image de la boule de cristal. La <strong>voyance amoureuse</strong> moderne, c'est un voyant qui utilise le <strong>tarot</strong>, la <strong>clairvoyance</strong> ou l'<strong>astrologie</strong> pour décrypter les énergies de votre situation sentimentale. Ce qu'il capte : les sentiments réels de l'autre personne, les blocages invisibles dans votre relation, les fenêtres de timing favorables. La voyance ne prédit pas un futur gravé dans le marbre. Elle éclaire les probabilités en fonction de vos choix actuels et vous donne les clés pour décider en conscience.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">La voyance amoureuse par tarot est-elle fiable ?</h3>
              <p className="text-gray-700 leading-relaxed">Tout dépend de qui tient les cartes. Un jeu de <strong>tarot</strong> entre les mains d'un débutant, c'est comme un stéthoscope entre les mains d'un non-médecin — l'outil est bon, mais sans expertise il ne sert à rien. Les 78 arcanes (22 majeurs, 56 mineurs) offrent une palette incroyablement nuancée pour lire les sentiments, les tensions et les évolutions possibles. Le critère essentiel : un <strong>tarologue honnête</strong> qui vous dit ce qu'il voit, même quand c'est difficile à entendre, plutôt que ce que vous espérez.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment choisir un bon voyant spécialisé en amour ?</h3>
              <p className="text-gray-700 leading-relaxed">Quatre signes qui ne trompent pas : il pose peu de questions et capte votre situation rapidement. Il donne des détails précis, pas des généralités. Il est franc même quand la vérité dérange. Et surtout, il ne crée jamais de dépendance. Vérifiez les <strong>avis clients</strong> et l'expérience (minimum 5 ans de pratique). Fuyez ceux qui promettent des retours garantis ou qui vendent des rituels payants en supplément. Un vrai professionnel vous guide et vous rend autonome — il ne cherche pas à vous faire revenir chaque semaine.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quelles questions peut-on poser en voyance amoureuse ?</h3>
              <p className="text-gray-700 leading-relaxed">Toutes celles qui vous empêchent de dormir. <strong>M'aime-t-il</strong> vraiment ? <strong>Va-t-elle revenir</strong> ? Quand vais-je <strong>rencontrer</strong> quelqu'un ? Mon couple survivra-t-il à cette crise ? Est-il fidèle ? Le tarot répond aussi aux questions de timing et de <strong>compatibilité</strong>. Une astuce : plus votre question est précise, meilleure sera la réponse. "Que ressent-il pour moi en ce moment ?" donnera une lecture bien plus riche que "Est-ce que ça va marcher entre nous ?" qui reste trop vague pour une <strong>analyse</strong> fine.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quelle est la différence entre un voyant amour et une voyante amour ?</h3>
              <p className="text-gray-700 leading-relaxed">Aucune différence de compétence. Le don de voyance n'a rien à voir avec le genre du praticien. Ce qui compte : la spécialisation en <strong>questions amoureuses</strong>, l'expérience en <strong>guidance sentimentale</strong>, et la maîtrise des supports divinatoires. Certaines personnes se sentent plus à l'aise pour aborder des sujets intimes avec une femme, d'autres avec un homme. C'est purement une question de confort personnel. Choisissez selon votre ressenti et les retours d'autres consultants.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment se déroule une consultation voyance amour ?</h3>
              <p className="text-gray-700 leading-relaxed">Vous n'avez pas besoin de tout raconter. Un bon <strong>voyant</strong> capte les énergies dès les premières secondes. Concrètement : vous exposez brièvement votre situation, le voyant choisit le support adapté (<strong>tarot</strong> pour l'analyse détaillée, <strong>clairvoyance</strong> pour les ressentis directs, <strong>astrologie</strong> pour le long terme), puis il vous transmet ce qu'il perçoit. La séance dure 20 à 40 minutes en moyenne. Vous repartez avec des réponses claires et des pistes d'action concrètes. Si un voyant reste flou après 15 minutes, changez de praticien.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-gradient-to-r from-brand-purple to-brand-purple-dark text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Besoin d'une Guidance Personnalisée ?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Consultez un voyant spécialisé en amour pour une analyse 100% adaptée à votre situation unique
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <DynamicCTAButton
              label="Consulter un Voyant Maintenant"
              source="homepage-cta-primary"
              className="bg-white text-brand-purple px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition"
              voyantIndex={0}
            />
            <DynamicCTAButton
              label="Tirage Tarot Personnalisé"
              source="homepage-cta-secondary"
              className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-purple transition"
              voyantIndex={1}
            />
          </div>
          <div className="mt-6">
            <TrustBadges variant="compact" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">© 2026 VoyantLove.fr - Voyance Amoureuse Spécialisée</p>
          <div className="flex gap-6 justify-center text-sm text-gray-400">
            <Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-white">Confidentialité</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
