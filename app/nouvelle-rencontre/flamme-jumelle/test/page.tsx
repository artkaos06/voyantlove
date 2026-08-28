import Link from 'next/link';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import TwinFlameCalculator from '@/components/TwinFlameCalculator';
import ContentPage, { contentMeta, type ContentPageConfig } from '@/components/ContentPage';

const config: ContentPageConfig = {
  title: 'Test flamme jumelle gratuit par date de naissance',
  description: 'Test flamme jumelle gratuit : entrez vos deux dates de naissance et découvrez ce que la numérologie révèle sur votre connexion. Calcul instantané, sans inscription.',
  url: 'https://www.voyantlove.fr/nouvelle-rencontre/flamme-jumelle/test/',
  keywords: ['flamme jumelle test', 'test flamme jumelle date de naissance', 'test flamme jumelle date de naissance gratuit', 'calcul flamme jumelle', 'calcul flamme jumelle 11'],
  datePublished: '2026-08-28',
  dateModified: '2026-08-28',
  breadcrumb: [
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Nouvelle Rencontre', url: 'https://www.voyantlove.fr/nouvelle-rencontre/' },
    { name: 'Flamme Jumelle', url: 'https://www.voyantlove.fr/nouvelle-rencontre/flamme-jumelle/' },
    { name: 'Test', url: 'https://www.voyantlove.fr/nouvelle-rencontre/flamme-jumelle/test/' },
  ],
  header: {
    emoji: '',
    h1: 'Test flamme jumelle par date de naissance',
    subtitle: 'Calculez votre compatibilité numérologique et explorez les signaux du lien',
    gradient: 'from-violet-700 via-purple-700 to-indigo-700',
    backLink: { href: '/nouvelle-rencontre/flamme-jumelle/', label: 'Flamme jumelle' },
    anchors: [
      { href: '#calculateur', label: 'Faire le test', primary: true },
      { href: '#comment-ca-marche', label: 'Comment ça marche' },
    ],
  },
  accentText: 'text-purple-700',
  stats: [
    { icon: '', value: 'Gratuit', label: 'Calcul instantané' },
    { icon: '', value: '100 % privé', label: 'Aucune donnée conservée' },
    { icon: '', value: 'Pythagoricien', label: 'Méthode de référence' },
  ],
  cta: { topic: 'nouvelle-rencontre', slug: 'flamme-jumelle-test' },
  faq: [
    {
      q: 'Un test par date de naissance peut-il prouver un lien de flamme jumelle ?',
      a: 'Non. Aucun calcul numérologique ne prouve l’existence d’un lien de flamme jumelle. La numérologie est un outil symbolique qui met en lumière des tendances et des résonances entre deux profils. Elle peut révéler des compatibilités intéressantes ou des dynamiques récurrentes, mais la réalité d’une connexion se vit, elle ne se mesure pas par un chiffre. Ce test offre un éclairage, pas un diagnostic.',
    },
    {
      q: 'Pourquoi le nombre 11 est-il associé à la flamme jumelle ?',
      a: 'Le 11 est le premier nombre maître en numérologie. Sa forme visuelle, deux 1 côte à côte, évoque deux individus distincts et égaux placés en miroir. Les communautés spirituelles ont associé le 11 à l’éveil et à l’intuition amplifiée, deux notions centrales dans le concept de flamme jumelle. C’est une association culturelle, pas une loi numérologique : le 11 porte une énergie intense, mais il ne garantit aucun lien spécifique.',
    },
    {
      q: 'Que signifie avoir le même chemin de vie que l’autre personne ?',
      a: 'Partager le même chemin de vie crée un effet miroir numérologique : les forces, les défis et les besoins relationnels se ressemblent. Cela peut favoriser une compréhension instinctive, mais aussi amplifier les mêmes zones de vulnérabilité. Deux chemins 7 se comprendront dans la solitude, mais risquent de ne jamais combler le besoin de chaleur émotionnelle de l’autre. L’effet miroir éclaire, il ne simplifie pas.',
    },
    {
      q: 'Ce test est-il vraiment gratuit et confidentiel ?',
      a: 'Oui. Le calcul se fait entièrement dans votre navigateur, côté client, grâce à un algorithme de numérologie pythagoricienne. Aucune date de naissance n’est envoyée à un serveur, stockée dans une base de données ou transmise à un tiers. Si vous fermez la page, les résultats disparaissent. Aucune inscription, aucun email, aucun cookie de suivi.',
    },
  ],
  related: [
    { href: '/nouvelle-rencontre/flamme-jumelle/', label: 'Flamme jumelle : guide complet' },
    { href: '/chemin-de-vie/', label: 'Calculer votre chemin de vie' },
    { href: '/sentiments/compatibilite-amoureuse/', label: 'Compatibilité amoureuse' },
  ],
};

export const metadata = contentMeta(config);

export default function TestFlammeJumellePage() {
  return (
    <ContentPage config={config}>
      <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-purple-600">
        <p className="text-lg leading-relaxed mb-4">
          Le <strong>test flamme jumelle par date de naissance</strong> utilise la num&eacute;rologie pythagoricienne pour comparer les chemins de vie de deux personnes. Il cherche trois signaux&nbsp;: la pr&eacute;sence du nombre ma&icirc;tre 11 (symbole d&rsquo;&eacute;veil dans la tradition des flammes jumelles), l&rsquo;effet miroir (m&ecirc;me chemin de vie) et la compatibilit&eacute; des profils amoureux.
        </p>
        <p className="text-lg leading-relaxed">
          Ce calcul ne prouve rien. Il &eacute;claire des tendances num&eacute;rologiques qui peuvent nourrir votre r&eacute;flexion, pas remplacer votre ressenti. Un lien de flamme jumelle se reconna&icirc;t dans le v&eacute;cu, pas dans un chiffre.
        </p>
      </article>

      <section id="calculateur" className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Faites le test</h2>
        <TwinFlameCalculator />
      </section>

      <VoyantQuickCTA topic="nouvelle-rencontre" source="flamme-test-mid" />

      <section id="comment-ca-marche" className="bg-white rounded-xl shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment fonctionne le calcul</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-purple-200 pl-5">
            <h3 className="font-bold text-gray-900 mb-1">1. R&eacute;duction pythagoricienne</h3>
            <p className="text-gray-700">Chaque date de naissance est r&eacute;duite &agrave; un chiffre entre 1 et 9 (ou un nombre ma&icirc;tre 11, 22, 33) en additionnant tous ses chiffres. Par exemple, le 15/03/1990 donne 1+5+0+3+1+9+9+0 = 28, puis 2+8 = 10, puis 1+0 = <strong>1</strong>.</p>
          </div>
          <div className="border-l-4 border-purple-200 pl-5">
            <h3 className="font-bold text-gray-900 mb-1">2. D&eacute;tection du 11</h3>
            <p className="text-gray-700">Le test v&eacute;rifie si l&rsquo;un des deux chemins de vie est 11, ou si la somme des deux chemins pointe vers 11. Ce nombre ma&icirc;tre est traditionnellement associ&eacute; &agrave; l&rsquo;intuition amplifi&eacute;e et au symbolisme de la flamme jumelle.</p>
          </div>
          <div className="border-l-4 border-purple-200 pl-5">
            <h3 className="font-bold text-gray-900 mb-1">3. Effet miroir</h3>
            <p className="text-gray-700">Si les deux personnes partagent le m&ecirc;me chemin de vie, le test d&eacute;tecte un effet miroir. Ce signal num&eacute;rologique &eacute;voque une compr&eacute;hension profonde, mais aussi le risque d&rsquo;amplifier les m&ecirc;mes d&eacute;fis relationnels.</p>
          </div>
          <div className="border-l-4 border-purple-200 pl-5">
            <h3 className="font-bold text-gray-900 mb-1">4. Lecture combin&eacute;e</h3>
            <p className="text-gray-700">Le test combine les deux profils pour donner une lecture de compatibilit&eacute;. Cette lecture s&rsquo;appuie sur les forces et d&eacute;fis de chaque chemin de vie, pas sur un score artificiel.</p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-xl shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce que ce test ne fait pas</h2>
        <p className="text-gray-700 mb-4">
          Aucun test num&eacute;rologique ne peut confirmer ou infirmer un lien de flamme jumelle. Le concept de flamme jumelle vient de la tradition spirituelle, pas de la num&eacute;rologie. Ce calcul identifie des r&eacute;sonances entre deux profils num&eacute;rologiques, ce qui est int&eacute;ressant mais pas probant.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <h3 className="font-bold text-green-800 mb-2">Ce qu&rsquo;il fait</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&bull; Calcule vos chemins de vie respectifs</li>
              <li>&bull; D&eacute;tecte les connexions au nombre 11</li>
              <li>&bull; Identifie l&rsquo;effet miroir entre deux profils</li>
              <li>&bull; Donne une lecture de compatibilit&eacute; ouverte</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <h3 className="font-bold text-red-800 mb-2">Ce qu&rsquo;il ne fait pas</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>&bull; Prouver l&rsquo;existence d&rsquo;un lien de flamme jumelle</li>
              <li>&bull; Pr&eacute;dire des retrouvailles ou une s&eacute;paration</li>
              <li>&bull; Mesurer les sentiments r&eacute;els entre deux personnes</li>
              <li>&bull; Remplacer une r&eacute;flexion personnelle ou un accompagnement</li>
            </ul>
          </div>
        </div>
      </section>

      <VoyantRecommendations topic="nouvelle-rencontre" limit={3} showOnlineFirst={true} source="flamme-test-reco" />

      <section className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-8 mb-8 border-2 border-purple-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Explorer les heures miroirs flamme jumelle</h2>
        <p className="text-gray-700 mb-4">
          Les heures miroirs sont un autre signal fr&eacute;quemment associ&eacute; au parcours de flamme jumelle. Chaque heure porte une signification num&eacute;rologique propre.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {['00h00', '01h01', '11h11', '12h12', '22h22'].map((h) => (
            <Link
              key={h}
              href={`/nouvelle-rencontre/flamme-jumelle/${h}/`}
              className="bg-white px-3 py-1.5 rounded-lg border border-purple-200 text-purple-700 text-sm font-medium hover:bg-purple-100 transition"
            >
              {h}
            </Link>
          ))}
          <Link
            href="/nouvelle-rencontre/flamme-jumelle/"
            className="bg-white px-3 py-1.5 rounded-lg border border-purple-200 text-gray-600 text-sm hover:bg-purple-100 transition"
          >
            Voir les 24 heures &rarr;
          </Link>
        </div>
        <Link
          href="/chemin-de-vie/"
          className="inline-block bg-purple-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-800 transition"
        >
          Calculer votre chemin de vie complet
        </Link>
      </section>
    </ContentPage>
  );
}
