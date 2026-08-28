import Link from 'next/link';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import NumerologyCalculator from '@/components/NumerologyCalculator';
import ContentPage, { contentMeta, type ContentPageConfig } from '@/components/ContentPage';
import { getCheminDeVieHubCards } from '@/lib/cheminDeVie';

const config: ContentPageConfig = {
  title: 'Chemin de vie et amour : calculez votre profil num&eacute;rologique',
  description: 'Calculez votre chemin de vie et d&eacute;couvrez ce que la num&eacute;rologie r&eacute;v&egrave;le sur votre vie amoureuse. Portraits d&eacute;taill&eacute;s, compatibilit&eacute; et forces en couple pour les chemins 1 &agrave; 9.',
  url: 'https://www.voyantlove.fr/chemin-de-vie/',
  keywords: ['chemin de vie', 'calculer chemin de vie', 'chemin de vie amour', 'numérologie chemin de vie', 'chemin de vie compatibilité'],
  datePublished: '2026-08-28',
  dateModified: '2026-08-28',
  breadcrumb: [
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Chemin de vie', url: 'https://www.voyantlove.fr/chemin-de-vie/' },
  ],
  header: {
    emoji: '',
    h1: 'Chemin de vie et amour',
    subtitle: 'Calculez votre chemin de vie et explorez ce que la numérologie révèle sur votre vie sentimentale',
    gradient: 'from-indigo-700 via-purple-700 to-violet-700',
    backLink: { href: '/methodes-voyance/numerologie-amoureuse/', label: 'Numérologie amoureuse' },
    anchors: [
      { href: '#calculateur', label: 'Calculer mon chemin', primary: true },
      { href: '#chemins', label: 'Les 9 chemins' },
    ],
  },
  accentText: 'text-indigo-700',
  stats: [
    { icon: '', value: '9 chemins', label: 'Portraits détaillés' },
    { icon: '', value: 'Gratuit', label: 'Calcul instantané' },
    { icon: '', value: 'Pythagoricien', label: 'Méthode de référence' },
  ],
  cta: { topic: 'sentiments', slug: 'chemin-de-vie' },
  faq: [
    {
      q: 'Comment calculer son chemin de vie ?',
      a: 'Le chemin de vie se calcule en additionnant tous les chiffres de votre date de naissance, puis en réduisant le total à un chiffre entre 1 et 9. Par exemple, pour une personne née le 15 mars 1990 : 1+5+0+3+1+9+9+0 = 28, puis 2+8 = 10, puis 1+0 = 1. Son chemin de vie est 1. Les nombres 11, 22 et 33 sont considérés comme des nombres maîtres et ne sont pas réduits dans certaines traditions.',
    },
    {
      q: 'Le chemin de vie détermine-t-il la compatibilité amoureuse ?',
      a: 'Le chemin de vie offre des indications sur les dynamiques relationnelles entre deux personnes, mais il ne détermine pas à lui seul la compatibilité. Deux personnes avec des chemins réputés « difficiles » ensemble peuvent très bien fonctionner si elles ont conscience de leurs différences. La numérologie est un outil de compréhension, pas un verdict. Elle éclaire les tendances et les points de vigilance, ce qui aide à mieux communiquer en couple.',
    },
    {
      q: 'Quelle est la différence entre chemin de vie et nombre d\'expression ?',
      a: 'Le chemin de vie se calcule à partir de la date de naissance et représente la direction générale de votre existence, y compris en amour. Le nombre d\'expression se calcule à partir des lettres de votre nom complet et révèle comment vous vous exprimez dans le monde, y compris dans vos relations. Les deux se complètent : le chemin de vie montre ce que vous cherchez, le nombre d\'expression montre comment vous le vivez au quotidien.',
    },
    {
      q: 'Les nombres maîtres 11, 22 et 33 ont-ils un impact spécial en amour ?',
      a: 'Les nombres maîtres portent une intensité accrue. Le 11 amplifie l\'intuition et la sensibilité émotionnelle dans le couple. Le 22 pousse à construire quelque chose de durable ensemble, souvent un projet commun au-delà du couple. Le 33 incarne un amour universel qui peut rendre la relation fusionnelle ou, au contraire, diluer l\'attention portée au partenaire au profit d\'une cause plus large. Ces nombres demandent une maturité relationnelle particulière.',
    },
  ],
  related: [
    { href: '/methodes-voyance/numerologie-amoureuse/', label: 'Numérologie amoureuse : les bases' },
    { href: '/sentiments/compatibilite-amoureuse/', label: 'Compatibilité amoureuse' },
    { href: '/voyance-gratuite-amour/', label: 'Voyance gratuite en amour' },
  ],
};

export const metadata = contentMeta(config);

export default function CheminDeVieHubPage() {
  const cards = getCheminDeVieHubCards();

  return (
    <ContentPage config={config}>
      <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-indigo-600">
        <p className="text-lg leading-relaxed mb-4">
          Le <strong>chemin de vie</strong> est le nombre fondamental de la num&eacute;rologie. Calcul&eacute; &agrave; partir de votre date de naissance, il r&eacute;v&egrave;le les grandes tendances de votre personnalit&eacute; amoureuse : ce que vous cherchez dans une relation, comment vous aimez, et les d&eacute;fis que vous rencontrez en couple.
        </p>
        <p className="text-lg leading-relaxed">
          La m&eacute;thode utilis&eacute;e ici est la r&eacute;duction pythagoricienne, la plus r&eacute;pandue en num&eacute;rologie occidentale. Chaque nombre de 1 &agrave; 9 correspond &agrave; un profil amoureux distinct, avec ses forces, ses zones de vigilance et ses compatibilit&eacute;s naturelles.
        </p>
      </article>

      <section id="calculateur" className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Calculez votre chemin de vie</h2>
        <NumerologyCalculator />
      </section>

      <VoyantQuickCTA topic="sentiments" source="chemin-de-vie-hub-mid" />

      <section id="chemins" className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Les 9 chemins de vie en amour</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <Link
              key={c.slug}
              href={c.href}
              className="block rounded-xl border-2 border-indigo-100 bg-white p-5 hover:border-indigo-400 hover:shadow-lg transition"
            >
              <div className="text-3xl font-bold text-indigo-700 mb-1">{c.number}</div>
              <div className="font-bold text-gray-900">{c.titre}</div>
              <div className="text-sm text-gray-600 mt-1">{c.titleSuffix}</div>
            </Link>
          ))}
        </div>
      </section>

      <VoyantRecommendations topic="sentiments" limit={3} showOnlineFirst={true} source="chemin-de-vie-hub-reco" />

      <section className="bg-white rounded-xl shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment utiliser votre chemin de vie en amour</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-indigo-200 pl-5">
            <h3 className="font-bold text-gray-900 mb-1">Mieux vous conna&icirc;tre</h3>
            <p className="text-gray-700">Votre chemin de vie met des mots sur vos besoins relationnels profonds. Comprendre pourquoi vous r&eacute;agissez de telle mani&egrave;re en couple aide &agrave; sortir des sch&eacute;mas r&eacute;p&eacute;titifs.</p>
          </div>
          <div className="border-l-4 border-indigo-200 pl-5">
            <h3 className="font-bold text-gray-900 mb-1">Comprendre votre partenaire</h3>
            <p className="text-gray-700">Calculez aussi le chemin de vie de votre partenaire. Les diff&eacute;rences entre vos deux nombres &eacute;clairent souvent les sources de friction et les zones de complicit&eacute; naturelle.</p>
          </div>
          <div className="border-l-4 border-indigo-200 pl-5">
            <h3 className="font-bold text-gray-900 mb-1">&Eacute;valuer la compatibilit&eacute;</h3>
            <p className="text-gray-700">Chaque page d&eacute;taill&eacute;e ci-dessous indique les compatibilit&eacute;s fortes, bonnes et exigeantes. Ces indications ne sont pas des verdicts, mais des pistes pour mieux communiquer.</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 mb-8 border-2 border-indigo-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Pour aller plus loin</h2>
        <p className="text-gray-700 mb-4">
          Le chemin de vie n&rsquo;est qu&rsquo;un des trois nombres cl&eacute;s de votre profil num&eacute;rologique. Le <strong>nombre d&rsquo;expression</strong> (calcul&eacute; &agrave; partir de votre nom) et le <strong>nombre intime</strong> (calcul&eacute; &agrave; partir des voyelles) compl&egrave;tent le portrait.
        </p>
        <Link
          href="/methodes-voyance/numerologie-amoureuse/"
          className="inline-block bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-800 transition"
        >
          D&eacute;couvrir la num&eacute;rologie amoureuse compl&egrave;te
        </Link>
      </section>
    </ContentPage>
  );
}
