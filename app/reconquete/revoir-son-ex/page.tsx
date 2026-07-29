import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema, getAuthorSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';

export const metadata: Metadata = {
  title: 'Revoir son Ex Après une Rupture : Comment se Préparer et se Comporter',
  description: 'Vous allez revoir votre ex après la rupture ? Comment clarifier votre intention, gérer l\'émotion, vous comporter le jour J et interpréter ce que vous ressentez ensuite.',
  keywords: ['revoir son ex après une rupture', 'comment se comporter en revoyant son ex', 'revoir son ex fait mal', 'faut-il revoir son ex', 'premier rendez-vous avec son ex'],
  alternates: {
    canonical: 'https://www.voyantlove.fr/reconquete/revoir-son-ex/',
  },
};

export default function RevoirSonExPage() {
  const articleSchema = getArticleSchema({
    title: 'Revoir son Ex Après une Rupture : Comment se Préparer et se Comporter',
    description: 'Vous allez revoir votre ex après la rupture ? Comment clarifier votre intention, gérer l\'émotion, vous comporter le jour J et interpréter ce que vous ressentez ensuite.',
    url: 'https://www.voyantlove.fr/reconquete/revoir-son-ex/',
    datePublished: '2026-07-29',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['revoir son ex après une rupture', 'comment se comporter en revoyant son ex', 'revoir son ex fait mal', 'faut-il revoir son ex', 'premier rendez-vous avec son ex'],
  });

  const faqSchema = getFAQSchema([
    {
      question: 'Faut-il revoir son ex après une rupture ?',
      answer: 'Cela dépend entièrement de votre intention et de votre état émotionnel. Revoir son ex peut être bénéfique pour obtenir une clarification, tourner la page en conscience ou explorer un possible rapprochement, à condition d\'être suffisamment stable pour ne pas rouvrir la plaie inutilement. En revanche, accepter une rencontre alors que la douleur est encore vive, ou dans le seul espoir de provoquer un retour, expose souvent à une déception. La bonne question n\'est pas « puis-je le revoir ? » mais « pourquoi et dans quel état vais-je le faire ? ».',
    },
    {
      question: 'Comment se comporter en revoyant son ex ?',
      answer: 'Restez vous-même, posé et authentique, plutôt que de jouer un rôle destiné à provoquer une réaction. Fixez-vous à l\'avance un cadre simple : le lieu, la durée, et ce que vous voulez ou non aborder. Écoutez autant que vous parlez, évitez les reproches comme la séduction forcée, et autorisez-vous à écourter si l\'émotion devient trop lourde. L\'objectif n\'est pas de gagner quoi que ce soit, mais de vivre cette rencontre avec dignité, en restant fidèle à vos limites quel que soit le comportement de l\'autre.',
    },
    {
      question: 'Pourquoi revoir son ex fait-il si mal parfois ?',
      answer: 'Revoir un ex réactive d\'un coup des souvenirs, des sensations et un attachement que la distance avait mis en sommeil. La présence physique court-circuite le travail de deuil et peut raviver l\'espoir ou la douleur, même quand on se croyait apaisé. Ce ressac émotionnel est normal et ne signifie pas que vous régressez : il indique simplement que le lien laisse encore une trace. Si la rencontre rouvre une plaie profonde, il est parfois plus sage d\'espacer ou de reporter, le temps de se sentir plus solide.',
    },
    {
      question: 'Que faire des émotions ressenties après avoir revu son ex ?',
      answer: 'Accueillez ce que la rencontre a fait remonter sans en tirer de conclusion hâtive. Une vague de nostalgie, d\'espoir ou de tristesse ne prouve pas qu\'il faut se remettre ensemble, ni que tout est fini : c\'est une information sur votre état intérieur, pas une décision. Laissez passer quelques jours avant d\'interpréter, car l\'émotion à chaud déforme le jugement. Observer ce que vous ressentez à distance, une fois l\'intensité retombée, est bien plus fiable que la réaction immédiate du moment.',
    },
    {
      question: 'Revoir son ex peut-il aider à se remettre ensemble ?',
      answer: 'Une rencontre peut rouvrir un dialogue, mais revoir son ex ne provoque ni ne garantit une réconciliation. Si un rapprochement se dessine, ce qui compte n\'est pas l\'émotion d\'un instant partagé mais la cohérence des actes dans la durée. Aborder cette rencontre uniquement comme une stratégie de reconquête place beaucoup de pression sur un seul moment et déçoit souvent. Il est plus sain d\'y aller pour clarifier et ressentir, puis de laisser le temps révéler si une reconstruction est réellement possible.',
    },
  ]);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Reconquête', url: 'https://www.voyantlove.fr/reconquete/' },
    { name: 'Revoir son Ex Après une Rupture', url: 'https://www.voyantlove.fr/reconquete/revoir-son-ex/' },
  ]);

  const authorSchema = getAuthorSchema();

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />

      <header className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/reconquete" className="text-white/80 hover:text-white mb-4 inline-block">&larr; Retour à la Reconquête</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{'\u{1F91D}'} Revoir son Ex Après une Rupture</h1>
          <p className="text-xl opacity-95 mb-6">Se préparer, se comporter le jour J et interpréter ce que vous ressentez ensuite</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#preparer" className="bg-white text-fuchsia-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">Se Préparer</a>
            <a href="#apres" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-fuchsia-600 transition">Après la Rencontre</a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">{'\u{1F52E}'}</div><div className="text-2xl font-bold text-fuchsia-600">Reconnue</div><div className="text-sm text-gray-600">Expertise</div></div>
          <div><div className="text-3xl mb-1">{'\u{1F91D}'}</div><div className="text-2xl font-bold text-fuchsia-600">3,400+</div><div className="text-sm text-gray-600">Consultations</div></div>
          <div><div className="text-3xl mb-1">{'⭐'}</div><div className="text-2xl font-bold text-fuchsia-600">4.7/5</div><div className="text-sm text-gray-600">269 avis</div></div>
          <div><div className="text-3xl mb-1">{'\u{1F512}'}</div><div className="text-2xl font-bold text-fuchsia-600">100%</div><div className="text-sm text-gray-600">Confidentiel</div></div>
        </div>

        <EEATSignal colorScheme="pink" method="Guidance de reconquête et accompagnement émotionnel" />

        {/* Answer Capsule */}
        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-fuchsia-500">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-4">
              <strong>Revoir son ex</strong> après une rupture est un moment chargé : espoir, appréhension, souvenirs qui remontent d&apos;un coup. La question n&apos;est pas tant &laquo;puis-je le revoir ?&raquo; que &laquo;<strong>pourquoi</strong> et dans quel état vais-je le faire ?&raquo;. Une rencontre peut aider à obtenir une clarification, à tourner la page en conscience ou à explorer un rapprochement — à condition d&apos;être assez stable pour ne pas rouvrir la plaie inutilement.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              La <strong>présence physique</strong> court-circuite le travail de deuil : elle réactive des sensations et un <strong>attachement</strong> que la distance avait endormis. C&apos;est pourquoi revoir un ex peut faire mal même quand on se croyait apaisé. Ce ressac est normal et ne signifie pas que vous régressez. Si vous hésitez encore sur l&apos;opportunité même de la rencontre, notre guide <Link href="/reconquete/dois-je-attendre-son-retour" className="text-fuchsia-600 hover:text-fuchsia-800 underline font-medium">dois-je l&apos;attendre</Link> peut compléter votre réflexion.
            </p>
            <p className="text-lg leading-relaxed">
              Cette page vous accompagne sur trois temps : <strong>clarifier votre intention</strong>, vous comporter avec justesse le jour J, et interpréter sans précipitation ce que la rencontre fait remonter. Revoir son ex ne provoque ni ne garantit une réconciliation ; ce qui compte, si un rapprochement se dessine, c&apos;est la <strong>cohérence des actes</strong> dans la durée. Une <strong>consultation de voyance</strong> peut clarifier vos intentions avant la rencontre, sans jamais en prédire l&apos;issue.
            </p>
          </div>
        </article>

        <VoyantQuickCTA topic="reconquete" source="revoir-ex-early" />

        {/* H2: Clarifier son intention */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F3AF}'} D&apos;Abord, Clarifier votre Intention</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Avant d&apos;accepter une rencontre, identifiez pourquoi vous la souhaitez : obtenir une clarification, tourner la page, explorer un rapprochement ou seulement ceder a un manque ; connaitre votre intention reelle protege de la deception.</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le point de départ n&apos;est pas la logistique de la rencontre, mais votre <strong>intention</strong> réelle. Cherchez-vous une réponse à une question restée ouverte, une clôture apaisée, une possibilité de reconstruction — ou répondez-vous simplement à un manque du moment ? Nommer honnêtement cette intention évite de transformer un élan passager en rendez-vous qui blesse.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ce travail préalable protège aussi vos attentes : une rencontre abordée pour &laquo;clarifier&raquo; ne déçoit pas de la même façon qu&apos;une rencontre abordée dans le seul espoir, souvent tu, de provoquer un <strong>retour</strong>.
          </p>
        </section>

        {/* H2: Se préparer et se comporter le jour J */}
        <section id="preparer" className="bg-gradient-to-br from-fuchsia-50 to-pink-50 rounded-xl p-8 mb-8 border-2 border-fuchsia-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F338}'} Se Préparer et se Comporter le Jour de la Rencontre</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Fixez a l&apos;avance un cadre simple — lieu, duree, sujets a aborder ou non —, restez vous-meme plutot que de jouer un role, ecoutez autant que vous parlez et autorisez-vous a ecourter si l&apos;emotion devient trop lourde.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Un cadre préparé à l&apos;avance allège l&apos;anxiété et vous garde maître de la situation. Voici les repères d&apos;une rencontre vécue avec dignité.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="font-bold text-lg mb-3 text-green-700">{'✅'} Ce qui Aide</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&bull; Choisir un <strong>lieu neutre</strong> et une durée limitée</li>
                <li>&bull; Rester <strong>authentique</strong>, sans jouer un rôle</li>
                <li>&bull; Écouter autant que parler</li>
                <li>&bull; S&apos;autoriser à <strong>écourter</strong> si l&apos;émotion déborde</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="font-bold text-lg mb-3 text-red-700">{'\u{1F6D1}'} Ce qui Nuit</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&bull; Enchaîner les <strong>reproches</strong> sur le passé</li>
                <li>&bull; Forcer la séduction pour provoquer une réaction</li>
                <li>&bull; Attendre une déclaration ou une décision immédiate</li>
                <li>&bull; Effacer ses <strong>limites</strong> pour plaire</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <p className="text-gray-700"><strong>{'\u{1F4A1}'} À retenir :</strong> l&apos;objectif n&apos;est pas de &laquo;gagner&raquo; la rencontre, mais de rester fidèle à vos limites quoi que fasse l&apos;autre. Une attitude posée, ni froide ni empressée, en dit plus long qu&apos;un discours préparé.</p>
          </div>
        </section>

        <VoyantRecommendations topic="reconquete" limit={3} showOnlineFirst={true} source="revoir-ex-mid" />

        {/* H2: Pourquoi ça peut faire mal */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F494}'} Pourquoi Revoir son Ex Peut Faire Mal</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">La presence physique reactive d&apos;un coup souvenirs, sensations et attachement que la distance avait mis en sommeil : ce ressac emotionnel est normal et ne signifie pas une regression, seulement que le lien laisse encore une trace.</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            À distance, le <strong>deuil</strong> avance : l&apos;émotion s&apos;apaise, les repères se reconstruisent. Une rencontre physique peut <strong>court-circuiter</strong> ce processus en réveillant d&apos;un coup ce que le temps avait mis en sommeil. Éprouver une vague de nostalgie, d&apos;espoir ou de tristesse au contact de l&apos;autre est donc parfaitement normal, et ne prouve pas que vous êtes revenu(e) au point de départ.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Si la rencontre rouvre une plaie profonde, il est parfois plus sage d&apos;<strong>espacer ou reporter</strong>, le temps de vous sentir plus solide. Prendre soin de soi n&apos;est pas un renoncement : c&apos;est reconnaître que revoir son ex n&apos;a de sens que si l&apos;on est capable de le vivre sans se perdre.
          </p>
        </section>

        {/* H2: Après la rencontre */}
        <section id="apres" className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8 mb-8 border-2 border-pink-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F9ED}'} Que Faire des Émotions Ressenties Après</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Une vague de nostalgie, d&apos;espoir ou de tristesse apres avoir revu son ex est une information sur votre etat interieur, pas une decision : laissez passer quelques jours avant d&apos;interpreter, car l&apos;emotion a chaud deforme le jugement.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            L&apos;après-rencontre est souvent plus déterminant que la rencontre elle-même. Voici comment traiter ce qui remonte sans en tirer de conclusion hâtive.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-pink-500">
              <h3 className="font-bold text-lg mb-2 text-pink-700">{'\u{1F553}'} Laisser retomber</h3>
              <p className="text-gray-700 text-sm">Attendez quelques jours avant d&apos;interpréter. L&apos;<strong>émotion à chaud</strong> déforme le jugement et pousse aux décisions impulsives.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-fuchsia-500">
              <h3 className="font-bold text-lg mb-2 text-fuchsia-700">{'\u{1F50D}'} Distinguer émotion et décision</h3>
              <p className="text-gray-700 text-sm">Ressentir un élan ne veut pas dire qu&apos;il faut se remettre ensemble ; une tristesse ne veut pas dire que tout est fini. C&apos;est une <strong>information</strong>, pas une conclusion.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-purple-500">
              <h3 className="font-bold text-lg mb-2 text-purple-700">{'\u{1F4C8}'} Regarder les actes</h3>
              <p className="text-gray-700 text-sm">Si un rapprochement s&apos;esquisse, observez si les <Link href="/reconquete/veut-se-remettre-ensemble-mais-ne-fait-rien" className="text-purple-600 hover:text-purple-800 underline font-medium">actes suivent les mots</Link> dans la durée, plutôt qu&apos;un seul moment partagé.</p>
            </div>
          </div>
          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <p className="text-gray-700"><strong>{'\u{1F4A1}'} À retenir :</strong> si la rencontre confirme au contraire votre besoin de clôture, notre guide pour <Link href="/rupture/comment-tourner-la-page" className="text-pink-600 hover:text-pink-800 underline font-medium">tourner la page</Link> vous accompagne dans cette étape. Revoir son ex peut aussi servir à conclure sereinement, pas seulement à raviver.</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{'❓'} Questions Fréquentes</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Les reponses aux questions les plus posees avant et apres avoir revu son ex.</p>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Faut-il revoir son ex après une rupture ?</h3>
              <p className="text-gray-700 leading-relaxed">Cela dépend entièrement de votre <strong>intention</strong> et de votre état émotionnel. Revoir son ex peut aider à obtenir une clarification, tourner la page ou explorer un rapprochement, à condition d&apos;être assez stable pour ne pas rouvrir la plaie. En revanche, accepter une rencontre alors que la douleur est vive, ou dans le seul espoir de provoquer un retour, expose à la déception. La bonne question n&apos;est pas &laquo;puis-je le revoir ?&raquo; mais &laquo;<strong>pourquoi et dans quel état</strong> vais-je le faire ?&raquo;.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment se comporter en revoyant son ex ?</h3>
              <p className="text-gray-700 leading-relaxed">Restez vous-même, <strong>posé(e) et authentique</strong>, plutôt que de jouer un rôle. Fixez-vous à l&apos;avance un cadre simple : le lieu, la durée, et ce que vous voulez ou non aborder. Écoutez autant que vous parlez, évitez les reproches comme la séduction forcée, et autorisez-vous à écourter si l&apos;émotion devient trop lourde. L&apos;objectif n&apos;est pas de gagner quoi que ce soit, mais de vivre cette rencontre avec dignité, fidèle à vos <strong>limites</strong>.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pourquoi revoir son ex fait-il si mal parfois ?</h3>
              <p className="text-gray-700 leading-relaxed">Revoir un ex réactive d&apos;un coup des souvenirs, des sensations et un <strong>attachement</strong> que la distance avait mis en sommeil. La présence physique court-circuite le travail de deuil et peut raviver l&apos;espoir ou la douleur, même quand on se croyait apaisé. Ce ressac émotionnel est normal et ne signifie pas que vous régressez. Si la rencontre rouvre une plaie profonde, il est parfois plus sage d&apos;<strong>espacer ou reporter</strong>, le temps de se sentir plus solide.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Que faire des émotions ressenties après avoir revu son ex ?</h3>
              <p className="text-gray-700 leading-relaxed">Accueillez ce que la rencontre a fait remonter sans en tirer de conclusion hâtive. Une vague de nostalgie, d&apos;espoir ou de tristesse ne prouve pas qu&apos;il faut se remettre ensemble, ni que tout est fini : c&apos;est une <strong>information</strong> sur votre état intérieur, pas une décision. Laissez passer quelques jours avant d&apos;interpréter, car l&apos;émotion à chaud déforme le jugement. Observer à distance, une fois l&apos;intensité retombée, est bien plus fiable.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Revoir son ex peut-il aider à se remettre ensemble ?</h3>
              <p className="text-gray-700 leading-relaxed">Une rencontre peut rouvrir un dialogue, mais revoir son ex ne <strong>provoque ni ne garantit</strong> une réconciliation. Si un rapprochement se dessine, ce qui compte n&apos;est pas l&apos;émotion d&apos;un instant mais la <strong>cohérence des actes</strong> dans la durée. Aborder cette rencontre uniquement comme une stratégie de reconquête met beaucoup de pression sur un seul moment et déçoit souvent. Mieux vaut y aller pour clarifier et ressentir, puis laisser le temps révéler si une reconstruction est possible.</p>
            </div>
          </div>
        </section>

        {/* Articles Connexes */}
        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900">{'\u{1F4DA}'} Articles Connexes</h3>
          <div className="space-y-2">
            <Link href="/reconquete" className="block text-fuchsia-600 hover:text-fuchsia-800 font-medium">&rarr; Reconquête Amoureuse : Toutes nos Guidances</Link>
            <Link href="/reconquete/repondre-a-son-ex" className="block text-fuchsia-600 hover:text-fuchsia-800 font-medium">&rarr; Faut-il Répondre à son Ex ?</Link>
            <Link href="/reconquete/se-remettre-ensemble" className="block text-fuchsia-600 hover:text-fuchsia-800 font-medium">&rarr; Se Remettre Ensemble : Les 5 Étapes</Link>
            <Link href="/reconquete/veut-se-remettre-ensemble-mais-ne-fait-rien" className="block text-fuchsia-600 hover:text-fuchsia-800 font-medium">&rarr; Il Veut se Remettre Ensemble mais ne Fait Rien</Link>
            <Link href="/rupture/comment-tourner-la-page" className="block text-fuchsia-600 hover:text-fuchsia-800 font-medium">&rarr; Comment Tourner la Page</Link>
          </div>
        </div>

        <VoyantFinalCTA topic="reconquete" source="revoir-ex-final" />
      </div>
    </main>
  );
}
