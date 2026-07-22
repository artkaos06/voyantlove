import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema, getAuthorSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';

export const metadata: Metadata = {
  title: 'Dois-je l\'Attendre ? Voyance Retour de Mon Ex',
  description: 'Faut-il attendre le retour de votre ex ? Le tarot révèle les signes qui indiquent si l\'attente en vaut la peine, et combien de temps patienter.',
  keywords: ['dois-je attendre mon ex', 'faut-il attendre son retour', 'attendre le retour voyance', 'combien de temps attendre ex', 'tarot attente reconquête'],
  alternates: {
    canonical: 'https://www.voyantlove.fr/reconquete/dois-je-attendre-son-retour/',
  },
};

export default function DoisJeAttendreSonRetourPage() {
  const articleSchema = getArticleSchema({
    title: 'Dois-je l\'Attendre ? Voyance Retour de Mon Ex',
    description: 'Faut-il attendre le retour de votre ex ? Le tarot révèle les signes qui indiquent si l\'attente en vaut la peine, et combien de temps patienter.',
    url: 'https://www.voyantlove.fr/reconquete/dois-je-attendre-son-retour/',
    datePublished: '2026-07-22',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['dois-je attendre mon ex', 'faut-il attendre son retour', 'attendre le retour voyance', 'combien de temps attendre ex', 'tarot attente reconquête'],
  });

  const faqSchema = getFAQSchema([
    {
      question: 'Comment savoir si je dois attendre le retour de mon ex ?',
      answer: 'Le tarot de l\'attente analyse trois éléments clés : la probabilité réelle d\'un retour, le temps nécessaire pour que la situation évolue, et le coût émotionnel de cette attente pour vous. Des cartes comme L\'Étoile ou le Deux de Coupe confirment un potentiel de réconciliation qui justifie la patience, tandis que Le Huit d\'Épée ou La Lune signalent une attente qui risque de vous épuiser sans issue favorable.',
    },
    {
      question: 'Combien de temps faut-il attendre le retour d\'un ex ?',
      answer: 'Il n\'existe pas de délai universel, mais au-delà de trois à six mois sans évolution tangible du silence radio ou du contact, l\'attente devient généralement contre-productive. Le tarot précise un timing personnalisé selon l\'énergie de votre situation spécifique, en tenant compte du profil émotionnel de votre ex et des circonstances de la rupture.',
    },
    {
      question: 'Est-ce une erreur d\'attendre son ex ?',
      answer: 'Attendre n\'est une erreur que si cela vous empêche de vivre, de guérir ou d\'avancer. Une attente active, accompagnée d\'un travail sur soi et sans mise en pause totale de votre vie, peut être bénéfique. En revanche, une attente passive et obsessionnelle qui vous isole est généralement néfaste, quelle que soit l\'issue finale de la situation.',
    },
    {
      question: 'Quels signes montrent qu\'il ne faut plus attendre ?',
      answer: 'Un silence prolongé sans aucune évolution, une nouvelle relation confirmée chez votre ex, ou une sensation d\'épuisement émotionnel croissant sont des signaux clairs qu\'il est temps de tourner la page. Le tarot identifie ces énergies de stagnation à travers des cartes comme Le Huit d\'Épée ou le Cinq de Coupe inversé, qui indiquent qu\'aucune évolution positive n\'est en cours.',
    },
    {
      question: 'Peut-on attendre sans se faire du mal ?',
      answer: 'Oui, à condition de fixer une limite de temps claire, de continuer à vivre pleinement sa vie sociale et personnelle, et de travailler sur ses propres blessures pendant cette période. L\'attente saine se distingue de l\'attente toxique par la présence d\'un équilibre émotionnel maintenu, sans dépendance affective envers un retour hypothétique.',
    },
  ]);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Reconquête', url: 'https://www.voyantlove.fr/reconquete/' },
    { name: 'Dois-je l\'Attendre ?', url: 'https://www.voyantlove.fr/reconquete/dois-je-attendre-son-retour/' },
  ]);

  const authorSchema = getAuthorSchema();

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />

      <header className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/reconquete" className="text-white/80 hover:text-white mb-4 inline-block">&larr; Retour à la Reconquête</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{'⏳'} Dois-je l&apos;Attendre ?</h1>
          <p className="text-xl opacity-95 mb-6">Le tarot révèle si l&apos;attente de son retour en vaut vraiment la peine</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#signes" className="bg-white text-violet-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">Signes à Observer</a>
            <a href="#tirage" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-violet-600 transition">Tirage de l&apos;Attente</a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">{'\u{1F52E}'}</div><div className="text-2xl font-bold text-violet-600">Reconnue</div><div className="text-sm text-gray-600">Expertise</div></div>
          <div><div className="text-3xl mb-1">{'⏳'}</div><div className="text-2xl font-bold text-violet-600">3,600+</div><div className="text-sm text-gray-600">Tirages réalisés</div></div>
          <div><div className="text-3xl mb-1">{'⭐'}</div><div className="text-2xl font-bold text-violet-600">4.7/5</div><div className="text-sm text-gray-600">271 avis</div></div>
          <div><div className="text-3xl mb-1">{'\u{1F512}'}</div><div className="text-2xl font-bold text-violet-600">100%</div><div className="text-sm text-gray-600">Confidentiel</div></div>
        </div>

        <EEATSignal colorScheme="purple" method="Tarot de l'attente et guidance de reconquête" />

        {/* Answer Capsule */}
        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-violet-500">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-4">
              <strong>&laquo;Dois-je l&apos;attendre&raquo;</strong> est l&apos;une des questions les plus douloureuses en <strong>reconquête amoureuse</strong>. Entre l&apos;espoir d&apos;un <strong>retour</strong> et la peur de gâcher du temps précieux, cette décision mérite un éclairage précis. Le <strong>tarot de l&apos;attente</strong> analyse trois dimensions essentielles : la probabilité réelle de réconciliation, le <strong>timing</strong> envisageable et le coût émotionnel de cette patience pour vous.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Toute attente n&apos;est pas équivalente. Une <strong>attente active</strong>, nourrie d&apos;espoir fondé et de travail personnel, diffère radicalement d&apos;une <strong>attente passive</strong> qui vous maintient prisonnier(ère) du passé. Pour évaluer si un retour est réellement envisageable, notre guidance sur <Link href="/reconquete/va-t-il-elle-revenir" className="text-violet-600 hover:text-violet-800 underline font-medium">va-t-il/elle revenir</Link> complète parfaitement cette analyse.
            </p>
            <p className="text-lg leading-relaxed">
              Que vous soyez en plein <strong>silence radio</strong> ou dans l&apos;incertitude d&apos;un contact intermittent, la <strong>voyance</strong> offre un cadre clair pour décider sereinement si patienter est un acte de foi justifié ou une <strong>illusion émotionnelle</strong> à abandonner.
            </p>
          </div>
        </article>

        <VoyantQuickCTA topic="reconquete" source="dois-je-attendre-early" />

        {/* H2: Les Signes qu'il vaut la peine d'attendre */}
        <section id="signes" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'✨'} Les Signes qu&apos;il Vaut la Peine d&apos;Attendre</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Contact regulier maintenu, regrets exprimes, absence de nouvelle relation et evolution positive du dialogue sont des signaux qui justifient de patienter pour un eventuel retour.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Certains signaux objectifs indiquent qu&apos;une <strong>attente raisonnable</strong> a des chances réelles d&apos;aboutir à une réconciliation.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-green-700">{'✅'} Contact Maintenu et Régulier</h3>
              <p className="text-gray-700 text-sm mb-2">
                Un <strong>ex qui maintient le contact</strong>, même de façon espacée, sans le couper définitivement, montre une porte encore entrouverte. Ce lien résiduel est un indicateur favorable pour une attente justifiée.
              </p>
            </div>
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-blue-700">{'\u{1F4AC}'} Regrets Exprimés</h3>
              <p className="text-gray-700 text-sm mb-2">
                Des <strong>regrets verbalisés</strong>, même timidement, concernant la rupture ou certains comportements passés, témoignent d&apos;une remise en question favorable à un retour.
              </p>
            </div>
            <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-purple-700">{'\u{1F494}'} Absence de Nouvelle Relation</h3>
              <p className="text-gray-700 text-sm mb-2">
                L&apos;absence de <strong>nouvelle relation sérieuse</strong> plusieurs mois après la rupture indique souvent un cœur encore occupé par le passé, ou une difficulté à s&apos;engager ailleurs.
              </p>
            </div>
            <div className="bg-rose-50 border-2 border-rose-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-rose-700">{'\u{1F4C8}'} Évolution Positive du Dialogue</h3>
              <p className="text-gray-700 text-sm mb-2">
                Si chaque échange devient progressivement plus <strong>chaleureux et ouvert</strong> qu&apos;au moment de la rupture, cette évolution graduelle est un signe encourageant à ne pas négliger.
              </p>
            </div>
          </div>
        </section>

        {/* H2: Le Tirage */}
        <section id="tirage" className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-xl p-8 mb-8 border-2 border-violet-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F0CF}'} Le Tirage Tarot &laquo;Dois-je l&apos;Attendre ?&raquo;</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Le tirage en trois positions evalue la probabilite de retour, le delai raisonnable a envisager et le cout emotionnel de l&apos;attente pour vous aider a decider en conscience.</p>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-violet-500">
              <h3 className="font-bold text-lg mb-3 text-violet-700">Position 1 : Probabilité</h3>
              <p className="text-gray-700 text-sm mb-2">
                L&apos;<strong>Étoile</strong> ou le Deux de Coupe confirment un potentiel réel de réconciliation. Le Cinq de Coupe inversé ou La Tour signalent une probabilité plus faible.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-purple-500">
              <h3 className="font-bold text-lg mb-3 text-purple-700">Position 2 : Délai</h3>
              <p className="text-gray-700 text-sm mb-2">
                Cette carte estime le <strong>temps nécessaire</strong> avant une évolution tangible. La Roue de Fortune indique un changement rapide, L&apos;Hermite un délai plus long.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-indigo-500">
              <h3 className="font-bold text-lg mb-3 text-indigo-700">Position 3 : Coût Émotionnel</h3>
              <p className="text-gray-700 text-sm mb-2">
                Le <strong>Huit d&apos;Épée</strong> avertit d&apos;une attente épuisante. Le Soleil ou la Tempérance indiquent que vous pouvez attendre sereinement, sans vous perdre.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border-2 border-violet-200">
            <p className="text-gray-700"><strong>{'\u{1F52E}'} Conseil du voyant :</strong> Ce tirage est particulièrement utile lorsqu&apos;il est renouvelé tous les mois, pour suivre l&apos;<strong>évolution énergétique</strong> de la situation plutôt que de se fier à une lecture unique et figée dans le temps.</p>
          </div>
        </section>

        <VoyantRecommendations topic="reconquete" limit={3} showOnlineFirst={true} source="dois-je-attendre-mid" />

        {/* H2: Combien de temps */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F4C5}'} Combien de Temps Attendre Raisonnablement</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Au-dela de trois a six mois sans evolution tangible du silence radio, l&apos;attente devient generalement contre-productive et le tarot precise un delai personnalise selon votre situation.</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Il n&apos;existe pas de règle universelle, mais l&apos;expérience montre qu&apos;au-delà de <strong>trois à six mois</strong> sans évolution tangible, l&apos;attente devient souvent contre-productive et nuit à votre reconstruction personnelle. Si vous traversez actuellement une période de <Link href="/reconquete/ex-revient-silence-radio" className="text-violet-600 hover:text-violet-800 underline font-medium">silence radio</Link>, ce délai s&apos;applique particulièrement à votre situation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Le <strong>tarot</strong> personnalise ce délai selon le profil émotionnel de votre ex, les circonstances de la rupture et l&apos;intensité du lien passé. Certaines situations justifient une patience plus longue, notamment lorsque des <strong>obstacles extérieurs</strong> (distance, famille, timing de vie) plutôt qu&apos;un désintérêt réel expliquent l&apos;éloignement actuel.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <p className="text-gray-700"><strong>{'✨'} Repère utile :</strong> Fixez-vous une <strong>limite de temps claire</strong> et révisable, plutôt qu&apos;une attente indéfinie. Cette limite protège votre équilibre émotionnel tout en laissant une chance réelle à la réconciliation.</p>
          </div>
        </section>

        {/* H2: Attendre sans s'oublier */}
        <section className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-xl p-8 mb-8 border-2 border-rose-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F331}'} Attendre sans s&apos;Oublier : Comment Faire</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Maintenir sa vie sociale, poursuivre un travail personnel et fixer une limite claire permettent d&apos;attendre sainement sans sombrer dans la dependance affective ou l&apos;obsession.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            L&apos;<strong>attente saine</strong> se distingue radicalement de l&apos;attente toxique. Elle nécessite de continuer à vivre pleinement, sans mettre votre existence entière en pause dans l&apos;espoir d&apos;un retour hypothétique. Si cette attente commence à ressembler à une dépendance, notre guide sur la <Link href="/crise-couple/dependance-affective" className="text-violet-600 hover:text-violet-800 underline font-medium">dépendance affective</Link> peut vous aider à identifier les signaux d&apos;alerte.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="font-bold text-lg mb-3 text-green-700">{'✅'} Attente Saine</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&bull; <strong>Vie sociale maintenue</strong> et activités poursuivies</li>
                <li>&bull; Travail sur soi et guérison des blessures passées</li>
                <li>&bull; Limite de temps clairement fixée</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500">
              <h3 className="font-bold text-lg mb-3 text-orange-700">{'\u{1F6D1}'} Attente Toxique</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&bull; <strong>Isolement social</strong> et vie mise en pause</li>
                <li>&bull; Vérification obsessionnelle des réseaux sociaux</li>
                <li>&bull; Aucune limite de temps envisagée</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{'❓'} Questions Fréquentes</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Les reponses aux questions les plus posees sur l&apos;attente d&apos;un retour, la duree raisonnable et le tirage tarot dedie a cette decision.</p>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment savoir si je dois attendre le retour de mon ex ?</h3>
              <p className="text-gray-700 leading-relaxed">Le <strong>tarot de l&apos;attente</strong> analyse trois éléments clés : la probabilité réelle d&apos;un retour, le temps nécessaire pour que la situation évolue, et le coût émotionnel de cette attente pour vous. Des cartes comme <strong>L&apos;Étoile</strong> ou le Deux de Coupe confirment un potentiel de réconciliation, tandis que Le Huit d&apos;Épée ou La Lune signalent une attente épuisante sans issue favorable.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Combien de temps faut-il attendre le retour d&apos;un ex ?</h3>
              <p className="text-gray-700 leading-relaxed">Il n&apos;existe pas de délai universel, mais au-delà de <strong>trois à six mois</strong> sans évolution tangible du <strong>silence radio</strong> ou du contact, l&apos;attente devient généralement contre-productive. Le tarot précise un timing personnalisé selon l&apos;énergie de votre situation spécifique.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Est-ce une erreur d&apos;attendre son ex ?</h3>
              <p className="text-gray-700 leading-relaxed">Attendre n&apos;est une erreur que si cela vous empêche de vivre, de guérir ou d&apos;avancer. Une <strong>attente active</strong>, accompagnée d&apos;un travail sur soi, peut être bénéfique. En revanche, une <strong>attente passive et obsessionnelle</strong> qui vous isole est généralement néfaste, quelle que soit l&apos;issue finale.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quels signes montrent qu&apos;il ne faut plus attendre ?</h3>
              <p className="text-gray-700 leading-relaxed">Un <strong>silence prolongé</strong> sans évolution, une nouvelle relation confirmée chez votre ex, ou un <strong>épuisement émotionnel</strong> croissant sont des signaux clairs qu&apos;il est temps de tourner la page. Le tarot identifie ces énergies de stagnation à travers des cartes comme Le Huit d&apos;Épée.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Peut-on attendre sans se faire du mal ?</h3>
              <p className="text-gray-700 leading-relaxed">Oui, à condition de fixer une <strong>limite de temps claire</strong>, de continuer à vivre pleinement sa vie sociale, et de travailler sur ses propres blessures pendant cette période. L&apos;<strong>attente saine</strong> se distingue de l&apos;attente toxique par l&apos;équilibre émotionnel maintenu.</p>
            </div>
          </div>
        </section>

        {/* Articles Connexes */}
        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900">{'\u{1F4DA}'} Articles Connexes</h3>
          <div className="space-y-2">
            <Link href="/reconquete" className="block text-violet-600 hover:text-violet-800 font-medium">&rarr; Reconquête Amoureuse : Toutes nos Guidances</Link>
            <Link href="/reconquete/va-t-il-elle-revenir" className="block text-violet-600 hover:text-violet-800 font-medium">&rarr; Va-t-il/elle Revenir ?</Link>
            <Link href="/reconquete/ex-revient-silence-radio" className="block text-violet-600 hover:text-violet-800 font-medium">&rarr; Silence Radio : Ex qui Recontacte</Link>
            <Link href="/crise-couple/dependance-affective" className="block text-violet-600 hover:text-violet-800 font-medium">&rarr; Dépendance Affective</Link>
            <Link href="/reconquete/se-remettre-ensemble" className="block text-violet-600 hover:text-violet-800 font-medium">&rarr; Se Remettre Ensemble</Link>
          </div>
        </div>

        <VoyantFinalCTA topic="reconquete" source="dois-je-attendre-final" />
      </div>
    </main>
  );
}
