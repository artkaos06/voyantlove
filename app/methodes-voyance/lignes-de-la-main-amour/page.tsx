import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema, getAuthorSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';

export const metadata: Metadata = {
  title: 'Lignes de la Main Amour : Chiromancie et Ligne de Cœur',
  description: 'Découvrez ce que les lignes de votre main révèlent sur votre vie amoureuse : ligne de cœur, mont de Vénus, lignes de mariage. Guide complet de chiromancie sentimentale.',
  keywords: ['lignes de la main amour', 'ligne de cœur', 'chiromancie amour', 'mont de vénus', 'ligne de mariage main'],
  alternates: {
    canonical: 'https://www.voyantlove.fr/methodes-voyance/lignes-de-la-main-amour/',
  },
};

export default function LignesDeLaMainAmourPage() {
  const articleSchema = getArticleSchema({
    title: 'Lignes de la Main Amour : Chiromancie et Ligne de Cœur',
    description: 'Découvrez ce que les lignes de votre main révèlent sur votre vie amoureuse : ligne de cœur, mont de Vénus, lignes de mariage. Guide complet de chiromancie sentimentale.',
    url: 'https://www.voyantlove.fr/methodes-voyance/lignes-de-la-main-amour/',
    datePublished: '2026-08-06',
    dateModified: '2026-08-06',
    keywords: ['lignes de la main amour', 'ligne de cœur', 'chiromancie amour', 'mont de vénus'],
  });

  const authorSchema = getAuthorSchema();

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Méthodes de Voyance', url: 'https://www.voyantlove.fr/methodes-voyance/' },
    { name: 'Lignes de la Main Amour', url: 'https://www.voyantlove.fr/methodes-voyance/lignes-de-la-main-amour/' },
  ]);

  const faqSchema = getFAQSchema([
    {
      question: 'Comment reconnaître la ligne de cœur sur sa main ?',
      answer: 'La ligne de cœur est la première grande ligne horizontale en partant du haut de la paume, juste sous les doigts. Elle part généralement du bord de la main sous l\'auriculaire et se dirige vers l\'index ou le majeur. C\'est la ligne la plus proche des doigts parmi les trois lignes principales (cœur, tête, vie), ce qui la rend facile à identifier une fois qu\'on sait où regarder.',
    },
    {
      question: 'Que signifie une ligne de cœur longue ou courte ?',
      answer: 'Une ligne de cœur longue, qui traverse toute la paume jusque sous l\'index, indiquerait une personne idéaliste en amour, capable d\'un engagement profond et durable. Une ligne plus courte, qui s\'arrête sous le majeur, suggérerait une approche plus pragmatique des sentiments, centrée sur ses propres besoins avant ceux du partenaire. Ni l\'une ni l\'autre n\'est meilleure : elles décrivent simplement des tempéraments amoureux différents.',
    },
    {
      question: 'Le mont de Vénus est-il important pour l\'amour ?',
      answer: 'Oui, le mont de Vénus — la zone charnue à la base du pouce — est central en chiromancie amoureuse : il est traditionnellement associé à la sensualité, à la capacité d\'aimer et à l\'intensité affective d\'une personne. Un mont de Vénus bien développé indiquerait une nature chaleureuse et passionnée ; peu marqué, il suggérerait une approche plus réservée de l\'intimité.',
    },
    {
      question: 'Les lignes de la main changent-elles au cours de la vie amoureuse ?',
      answer: 'De nombreux chiromanciens observent de légères évolutions dans la profondeur ou le tracé de certaines lignes secondaires, notamment les lignes d\'union, au fil des grandes étapes affectives d\'une vie. La ligne de cœur elle-même reste largement stable, mais son interprétation s\'affine avec l\'expérience du praticien et le contexte de vie de la personne consultée.',
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />

      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 via-red-600 to-rose-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/methodes-voyance" className="text-white/80 hover:text-white mb-4 inline-block">&larr; Retour aux Méthodes de Voyance</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">✋ Lignes de la Main Amour</h1>
          <p className="text-xl opacity-95 mb-6">Ce que la chiromancie révèle sur votre vie sentimentale</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#ligne-coeur" className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">La Ligne de Cœur</a>
            <a href="#lecture" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition">Lire sa Propre Main</a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Stats bar */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">✋</div><div className="text-2xl font-bold text-red-700">3 lignes</div><div className="text-sm text-gray-600">Principales étudiées</div></div>
          <div><div className="text-3xl mb-1">💕</div><div className="text-2xl font-bold text-red-700">Ligne de Cœur</div><div className="text-sm text-gray-600">Baromètre amoureux</div></div>
          <div><div className="text-3xl mb-1">📜</div><div className="text-2xl font-bold text-red-700">Antique</div><div className="text-sm text-gray-600">Origine millénaire</div></div>
          <div><div className="text-3xl mb-1">🤲</div><div className="text-2xl font-bold text-red-700">2 mains</div><div className="text-sm text-gray-600">Potentiel et vécu</div></div>
        </div>

        <EEATSignal colorScheme="rose" method="Chiromancie amoureuse — lecture des lignes de la main" />

        {/* Answer capsule */}
        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-red-600">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <p className="text-lg leading-relaxed">
              Les <strong>lignes de la main</strong> livrent, selon l&apos;art de la <strong>chiromancie</strong>, des indications précieuses sur votre façon d&apos;aimer et votre potentiel affectif. Au centre de cette lecture sentimentale, la <strong>ligne de cœur</strong> — cette ligne horizontale qui traverse la paume sous les doigts — renseignerait sur la profondeur de vos sentiments, votre rapport à l&apos;engagement et votre intensité émotionnelle. Le <strong>mont de Vénus</strong>, cette zone charnue à la base du pouce, compléterait cette lecture en révélant votre sensualité et votre capacité d&apos;affection. Cette guidance complète explore la ligne de cœur, le mont de Vénus, les lignes de mariage, et vous apprend à lire votre propre main pour mieux comprendre votre vie amoureuse.
            </p>
          </div>
        </article>

        <VoyantQuickCTA topic="methodes-voyance" source="lignes-main-amour-early" />

        {/* Section 1: La ligne de cœur */}
        <section id="ligne-coeur" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">💕 La Ligne de Cœur : le Baromètre de Votre Vie Amoureuse</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">La ligne de cœur, première grande ligne horizontale sous les doigts, révèle la profondeur de vos sentiments, votre rapport à l&apos;engagement et votre intensité émotionnelle.</p>
          <p className="text-gray-700 mb-6">
            En <strong>chiromancie</strong>, la <strong>ligne de cœur</strong> occupe la place la plus proche des doigts parmi les trois grandes lignes de la paume. Sa forme, sa longueur et son tracé livrent des indications précises sur votre tempérament amoureux.
          </p>
          <div className="space-y-5">
            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-red-700">Une Ligne Longue et Droite</h3>
              <p className="text-gray-700 text-sm">Traversant toute la paume jusque sous l&apos;index, elle indiquerait une personne <strong>idéaliste</strong> en amour, capable d&apos;un engagement profond et loyal, parfois jusqu&apos;à idéaliser excessivement son ou sa partenaire.</p>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-orange-700">Une Ligne Courte</h3>
              <p className="text-gray-700 text-sm">S&apos;arrêtant sous le majeur, elle suggérerait une approche plus <strong>pragmatique</strong> des sentiments — une personne qui a besoin de sécurité concrète avant de s&apos;investir pleinement dans une relation.</p>
            </div>
            <div className="bg-rose-50 border-l-4 border-rose-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-rose-700">Une Ligne Courbée vers le Haut</h3>
              <p className="text-gray-700 text-sm">Se dirigeant nettement vers l&apos;index ou le majeur, elle indiquerait une nature <strong>expressive</strong>, qui montre facilement ses sentiments et recherche une communication ouverte dans le couple.</p>
            </div>
            <div className="bg-pink-50 border-l-4 border-pink-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-pink-700">Une Ligne Fine ou Fourchue</h3>
              <p className="text-gray-700 text-sm">Une ligne fine indiquerait une sensibilité affective marquée ; une ligne qui se dédouble en fin de parcours révélerait une capacité à concilier tête et cœur dans les décisions amoureuses importantes.</p>
            </div>
          </div>
        </section>

        {/* Section 2: Mont de Vénus */}
        <section className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-xl p-8 mb-8 border-2 border-rose-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🌹 Le Mont de Vénus : Sensualité et Capacité d&apos;Aimer</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Cette zone charnue à la base du pouce, nommée d&apos;après la planète de l&apos;amour, révélerait l&apos;intensité de votre sensualité et votre générosité affective.</p>
          <p className="text-gray-700 mb-6">
            Le <strong>mont de Vénus</strong> occupe la zone charnue qui entoure la base du pouce, sous la ligne de vie. Son nom, hérité de la planète associée à l&apos;amour en <Link href="/methodes-voyance/astrologie-amoureuse" className="text-rose-700 hover:text-rose-900 underline font-medium">astrologie amoureuse</Link>, n&apos;est pas un hasard : cette zone concentre, en chiromancie, tout ce qui touche à la sensualité et à la capacité d&apos;aimer.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-lg p-5 border-2 border-rose-300">
              <h3 className="font-bold text-lg mb-3 text-rose-700">Mont Bien Développé</h3>
              <p className="text-gray-700 text-sm">Une zone charnue et ferme indiquerait une nature <strong>chaleureuse</strong>, passionnée et généreuse en amour, avec un fort besoin de contact physique et d&apos;intimité dans le couple.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-2 border-orange-300">
              <h3 className="font-bold text-lg mb-3 text-orange-700">Mont Peu Marqué</h3>
              <p className="text-gray-700 text-sm">Une zone plus plate suggérerait une approche plus <strong>réservée</strong> de l&apos;intimité, une pudeur naturelle qui n&apos;empêche en rien la profondeur des sentiments ressentis.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Lignes de mariage */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">💍 Les Lignes d&apos;Union (« Lignes de Mariage »)</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Ces petites lignes horizontales sur le bord de la paume, sous l&apos;auriculaire, indiqueraient le nombre et l&apos;intensité des attachements affectifs marquants d&apos;une vie.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Situées sur le bord externe de la main, entre la base de l&apos;auriculaire et le début de la ligne de cœur, les <strong>lignes d&apos;union</strong> — parfois appelées « lignes de mariage » bien qu&apos;elles ne prédisent pas nécessairement un mariage officiel — indiqueraient les attachements affectifs les plus marquants d&apos;une existence. Une ligne profonde et nette suggérerait une relation intense et durable ; plusieurs lignes fines évoqueraient des attachements significatifs mais plus nombreux. Leur interprétation reste délicate et gagne à être confiée à un chiromancien expérimenté, qui saura la croiser avec l&apos;ensemble de la main plutôt que de l&apos;isoler.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-lg">
            <p className="text-gray-700"><strong>Une nuance importante :</strong> ces lignes ne comptent pas littéralement le nombre de mariages à venir. Elles reflètent plutôt l&apos;<strong>intensité émotionnelle</strong> des attachements vécus, y compris des relations non-officialisées mais profondément marquantes.</p>
          </div>
        </section>

        <VoyantRecommendations topic="methodes-voyance" limit={3} showOnlineFirst={true} source="lignes-main-amour-mid" />

        {/* Section 4: Comment lire sa main */}
        <section id="lecture" className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 mb-8 border-2 border-orange-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🔍 Comment Lire Votre Propre Main : Guide Pratique</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Repérer sa ligne de cœur et son mont de Vénus est accessible à tous, mais une lecture fiable et nuancée demande l&apos;œil exercé d&apos;un chiromancien professionnel.</p>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-l-4 border-red-400">
              <h3 className="font-bold text-red-700 mb-1">1. Choisissez la bonne main</h3>
              <p className="text-gray-700 text-sm">La main non dominante (souvent la gauche pour un droitier) refléterait votre potentiel affectif inné ; la main dominante montrerait ce que vous en avez fait concrètement. Comparez toujours les deux.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-orange-400">
              <h3 className="font-bold text-orange-700 mb-1">2. Repérez la ligne de cœur</h3>
              <p className="text-gray-700 text-sm">C&apos;est la première ligne horizontale sous vos doigts, la plus proche du sommet de la paume. Observez sa longueur, sa profondeur et sa direction.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-rose-400">
              <h3 className="font-bold text-rose-700 mb-1">3. Examinez le mont de Vénus</h3>
              <p className="text-gray-700 text-sm">Observez le relief de la zone charnue à la base de votre pouce : plus elle est marquée et souple, plus elle indiquerait une nature affective généreuse.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-amber-400">
              <h3 className="font-bold text-amber-700 mb-1">4. Ne vous arrêtez jamais à un seul signe</h3>
              <p className="text-gray-700 text-sm">Une chiromancie fiable croise toujours plusieurs indices — lignes, monts, forme de la main — plutôt que de fonder une lecture sur un seul élément isolé.</p>
            </div>
          </div>
          <div className="bg-white border-l-4 border-red-500 p-5 rounded-lg mt-6">
            <p className="text-gray-700"><strong>Pourquoi consulter un professionnel :</strong> une auto-lecture donne un premier aperçu, mais un <strong>chiromancien expérimenté</strong> croise ligne de cœur, mont de Vénus, lignes d&apos;union et forme générale de la main pour une lecture nuancée de votre situation amoureuse actuelle, impossible à obtenir seul sans formation.</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">❓ Questions Fréquentes sur les Lignes de la Main en Amour</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment reconnaître la ligne de cœur sur sa main ?</h3>
              <p className="text-gray-700 leading-relaxed">La <strong>ligne de cœur</strong> est la première grande ligne horizontale en partant du haut de la paume, juste sous les doigts. Elle part généralement du bord de la main sous l&apos;auriculaire et se dirige vers l&apos;index ou le majeur. C&apos;est la ligne la plus proche des doigts parmi les trois lignes principales (cœur, tête, vie).</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Que signifie une ligne de cœur longue ou courte ?</h3>
              <p className="text-gray-700 leading-relaxed">Une ligne de cœur longue, qui traverse toute la paume jusque sous l&apos;index, indiquerait une personne idéaliste en amour, capable d&apos;un engagement profond et durable. Une ligne plus courte suggérerait une approche plus pragmatique des sentiments. Ni l&apos;une ni l&apos;autre n&apos;est meilleure : elles décrivent simplement des tempéraments amoureux différents.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Le mont de Vénus est-il important pour l&apos;amour ?</h3>
              <p className="text-gray-700 leading-relaxed">Oui, le <strong>mont de Vénus</strong> — la zone charnue à la base du pouce — est central en chiromancie amoureuse : il est traditionnellement associé à la sensualité, à la capacité d&apos;aimer et à l&apos;intensité affective d&apos;une personne.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Les lignes de la main changent-elles au cours de la vie amoureuse ?</h3>
              <p className="text-gray-700 leading-relaxed">De nombreux chiromanciens observent de légères évolutions dans la profondeur ou le tracé de certaines lignes secondaires, notamment les lignes d&apos;union, au fil des grandes étapes affectives d&apos;une vie. La ligne de cœur elle-même reste largement stable.</p>
            </div>
          </div>
        </section>

        {/* Articles Connexes */}
        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900">📚 Méthodes de Voyance Complémentaires</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <Link href="/methodes-voyance" className="block text-red-700 hover:text-red-900 font-medium">&rarr; Toutes les Méthodes de Voyance Amoureuse</Link>
            <Link href="/methodes-voyance/voyance-sentimentale" className="block text-red-700 hover:text-red-900 font-medium">&rarr; Voyance Sentimentale</Link>
            <Link href="/methodes-voyance/astrologie-amoureuse" className="block text-red-700 hover:text-red-900 font-medium">&rarr; Astrologie Amoureuse</Link>
            <Link href="/methodes-voyance/tirage-tarot-amour" className="block text-red-700 hover:text-red-900 font-medium">&rarr; Tirage Tarot Amour</Link>
            <Link href="/glossaire/chiromancie" className="block text-red-700 hover:text-red-900 font-medium">&rarr; Glossaire : Chiromancie</Link>
            <Link href="/sentiments/savoir-si-cest-lamour" className="block text-red-700 hover:text-red-900 font-medium">&rarr; Savoir si c&apos;est l&apos;amour</Link>
          </div>
        </div>

        <VoyantFinalCTA topic="methodes-voyance" source="lignes-main-amour-final" />
      </div>
    </main>
  );
}
