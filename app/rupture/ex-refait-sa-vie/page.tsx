import Link from 'next/link';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import ContentPage, { contentMeta, type ContentPageConfig } from '@/components/ContentPage';

const config: ContentPageConfig = {
  title: 'Mon ex refait sa vie : comment le vivre et avancer',
  description: 'Votre ex est déjà avec quelqu\'un ou semble passé à autre chose ? Ce que cela prouve (ou pas), pourquoi ça fait si mal, et comment retrouver votre équilibre sans mettre votre vie en pause.',
  url: 'https://www.voyantlove.fr/rupture/ex-refait-sa-vie/',
  keywords: ['mon ex refait sa vie', 'mon ex est déjà avec quelqu\'un', 'mon ex est passé à autre chose', 'accepter que mon ex refasse sa vie', 'mon ex a quelqu\'un d\'autre et ça fait mal'],
  datePublished: '2026-07-29',
  dateModified: '2026-07-29',
  breadcrumb: [
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Rupture', url: 'https://www.voyantlove.fr/rupture/' },
    { name: 'Mon Ex Refait sa Vie', url: 'https://www.voyantlove.fr/rupture/ex-refait-sa-vie/' },
  ],
  header: {
    emoji: '🍃',
    h1: 'Mon ex refait sa vie : comment le vivre et avancer',
    subtitle: 'Ce que cela prouve (ou pas), pourquoi ça fait mal, et comment retrouver votre équilibre',
    gradient: 'from-teal-600 via-cyan-600 to-blue-600',
    backLink: { href: '/rupture/', label: 'Retour à rupture & guérison' },
    anchors: [
      { href: '#prouve', label: 'Ce que ça prouve (ou pas)', primary: true },
      { href: '#accepter', label: 'Comment accepter' },
    ],
  },
  accentText: 'text-teal-600',
  stats: [
    { icon: '🔮', value: 'Reconnue', label: 'Expertise' },
    { icon: '🍃', value: '3,300+', label: 'Consultations' },
    { icon: '⭐', value: '4.7/5', label: '283 Avis' },
    { icon: '🔒', value: '100%', label: 'Confidentiel' },
  ],
  eeat: { colorScheme: 'teal', method: 'Guidance de reconstruction et accompagnement après séparation' },
  cta: { topic: 'rupture', slug: 'ex-refait-vie' },
  faq: [
    {
      q: 'Mon ex refait sa vie : est-ce que ça veut dire que c\'est fini pour de bon ?',
      a: 'Voir son ex avec quelqu\'un ne prouve pas, à soi seul, que toute page est définitivement tournée, mais cela ne prouve pas non plus l\'inverse. Certaines nouvelles relations durent, d\'autres non, et personne ne peut prédire l\'issue avec certitude. Le point important n\'est pas de deviner l\'avenir de leur couple, mais de cesser de suspendre le vôtre à cette hypothèse. Se concentrer sur ce que vous pouvez observer et sur votre propre reconstruction est plus fiable et plus protecteur que d\'attendre un dénouement que vous ne maîtrisez pas.',
    },
    {
      q: 'Pourquoi ça fait si mal que mon ex soit déjà avec quelqu\'un ?',
      a: 'La douleur vient rarement du seul fait qu\'il ou elle voit quelqu\'un : elle touche à la comparaison, au sentiment d\'avoir été remplacé, et à l\'impression que l\'autre avance plus vite que vous. Ces réactions sont normales et ne mesurent pas votre valeur. Elles disent surtout que le deuil est encore actif. Il est aussi fréquent de surestimer le bonheur affiché de l\'autre, car les débuts d\'une relation et les réseaux sociaux ne montrent qu\'une image partielle, jamais la réalité complète.',
    },
    {
      q: 'Mon ex est-il vraiment passé à autre chose ou fait-il semblant ?',
      a: 'Il est impossible de le savoir à distance, et chercher à le déterminer entretient surtout votre souffrance. Une nouvelle relation rapide peut traduire un vrai renouveau comme un moyen de fuir un vide ; un ex qui affiche sa vie peut être apaisé comme chercher à se convaincre. Ces hypothèses ne se tranchent pas depuis l\'extérieur. Plutôt que d\'interpréter son comportement, il est plus utile de ramener votre attention sur vous : c\'est le seul terrain où vos efforts changent réellement quelque chose.',
    },
    {
      q: 'Comment accepter que mon ex refasse sa vie ?',
      a: 'L\'acceptation n\'est pas un interrupteur mais un processus qui avance par étapes. Elle passe par se couper de la surveillance de l\'autre couple, par renouer avec une identité indépendante de la relation passée, et par autoriser la tristesse sans la laisser tout envahir. Accepter ne signifie pas être d\'accord ni ne plus rien ressentir : c\'est cesser de lutter contre une réalité que vous ne contrôlez pas, pour réinvestir l\'énergie ainsi libérée dans votre propre vie.',
    },
    {
      q: 'Faut-il arrêter de suivre son ex sur les réseaux sociaux ?',
      a: 'Dans la grande majorité des cas, oui. Suivre les publications de son ex et de sa nouvelle relation ravive la blessure à chaque consultation et retarde la guérison, sans jamais apporter la paix recherchée. Se désabonner, masquer ou s\'imposer des limites n\'est pas de l\'évitement mais un acte de protection. Retrouver de la clarté passe par le retour à sa propre vie, pas par l\'observation de traces numériques qui, par nature, ne montrent qu\'une version filtrée de la réalité.',
    },
  ],
  related: [
    { href: '/rupture/', label: 'Rupture & guérison : toutes nos guidances' },
    { href: '/rupture/guerir-rupture/', label: 'Guérir d\'une rupture amoureuse' },
    { href: '/reconquete/quitte-pour-quelquun-dautre-va-t-il-revenir/', label: 'Quitté pour quelqu\'un d\'autre : va-t-il revenir ?' },
    { href: '/rupture/signes-reseaux-sociaux-apres-rupture/', label: 'Réseaux sociaux après une rupture' },
    { href: '/rupture/confiance-en-soi-apres-divorce/', label: 'Retrouver confiance en soi après un divorce' },
  ],
};

export const metadata = contentMeta(config);

export default function ExRefaitSaViePage() {
  return (
    <ContentPage config={config}>
        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-teal-500">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-4">
              Apprendre que son <strong>ex refait sa vie</strong>, nouvelle relation, publications complices, impression qu&apos;il ou elle est &laquo;passé à autre chose&raquo;, ravive souvent une douleur qu&apos;on croyait apaisée. La première chose à savoir : voir son ex avec quelqu&apos;un ne <strong>prouve pas</strong>, à soi seul, que toute page est définitivement tournée, mais ne prouve pas l&apos;inverse non plus. Certaines nouvelles relations durent, d&apos;autres s&apos;éteignent, et personne ne peut prédire l&apos;issue.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Si c&apos;est aussi douloureux, c&apos;est que cela touche à la <strong>comparaison</strong>, au sentiment d&apos;avoir été <strong>remplacé</strong> et à l&apos;impression que l&apos;autre avance plus vite. Ces réactions sont normales et ne mesurent pas votre valeur. On surestime d&apos;ailleurs souvent le bonheur affiché : les débuts d&apos;une relation et les <strong>réseaux sociaux</strong> ne montrent qu&apos;une image partielle. Cette distinction est détaillée dans notre guide sur les <Link href="/rupture/signes-reseaux-sociaux-apres-rupture/" className="text-teal-600 hover:text-teal-800 underline font-medium">signes des réseaux sociaux après une rupture</Link>.
            </p>
            <p className="text-lg leading-relaxed">
              Cette page ne cherche pas à deviner l&apos;avenir de leur couple, mais à vous aider à <strong>cesser de suspendre le vôtre</strong> à cette hypothèse. À la différence d&apos;une séparation où l&apos;on a été <Link href="/reconquete/quitte-pour-quelquun-dautre-va-t-il-revenir/" className="text-teal-600 hover:text-teal-800 underline font-medium">quitté pour quelqu&apos;un d&apos;autre</Link>, il s&apos;agit ici d&apos;un ex qui avance <em>après</em> la rupture. Une <strong>consultation de voyance</strong> peut éclairer votre ressenti et votre reconstruction, sans jamais prédire ni provoquer quoi que ce soit.
            </p>
          </div>
        </article>

        <VoyantRecommendations topic="rupture" limit={3} showOnlineFirst={true} source="ex-refait-sa-vie-cards-top" />

        {/* H2: Ce que ça prouve ou pas */}
        <section id="prouve" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'⚖️'} Ce que le Fait qu&apos;il Refasse sa Vie Prouve, et ne Prouve Pas</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Qu&apos;un ex refasse sa vie prouve qu&apos;il avance a son rythme, mais ne prouve ni que la relation ne comptait pas, ni que tout est definitivement fini, ni que sa nouvelle histoire durera : ces conclusions depassent ce qu&apos;un fait exterieur peut reveler.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Face à la douleur, l&apos;esprit tire des conclusions rapides. Séparer les <strong>faits</strong> des <strong>interprétations</strong> évite de se blesser davantage avec des certitudes qui n&apos;en sont pas.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-teal-50 border-2 border-teal-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-teal-700">{'✅'} Ce que Ça Peut Indiquer</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&bull; Qu&apos;il ou elle <strong>avance</strong>, à son propre rythme</li>
                <li>&bull; Un besoin de se sentir désiré(e) de nouveau</li>
                <li>&bull; Parfois une façon de fuir un vide, parfois un vrai renouveau</li>
              </ul>
            </div>
            <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-orange-700">{'\u{26A0}️'} Ce que Ça ne Prouve Pas</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&bull; Que votre relation ne <strong>comptait pas</strong></li>
                <li>&bull; Que sa nouvelle histoire durera forcément</li>
                <li>&bull; Que vous valez moins que l&apos;autre personne</li>
                <li>&bull; Qu&apos;il ou elle est réellement plus heureux(se)</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <p className="text-gray-700"><strong>{'\u{1F4A1}'} À retenir :</strong> la vitesse à laquelle un ex &laquo;refait sa vie&raquo; ne dit rien de la profondeur de ce que vous avez vécu. Le rythme de deuil de chacun est différent, et avancer vite n&apos;est pas un signe d&apos;amour moindre.</p>
          </div>
        </section>

        {/* H2: Pourquoi ça fait si mal */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F494}'} Pourquoi Ça Fait Aussi Mal</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">La douleur vient de la comparaison, du sentiment d&apos;avoir ete remplace et de l&apos;impression que l&apos;autre avance plus vite : des reactions normales, amplifiees par l&apos;image partielle et idealisee que montrent les debuts d&apos;une relation.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Comprendre l&apos;origine de la douleur aide à ne pas la retourner contre soi. Voici les mécanismes les plus courants.
          </p>
          <div className="space-y-4">
            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-5 rounded">
              <h3 className="font-bold mb-2 text-cyan-700">{'⚖️'} La Comparaison</h3>
              <p className="text-gray-700 text-sm">Se mesurer à la <strong>nouvelle personne</strong> est un réflexe douloureux et perdu d&apos;avance. Votre valeur ne se joue pas dans cette comparaison.</p>
            </div>
            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-5 rounded">
              <h3 className="font-bold mb-2 text-cyan-700">{'\u{1F504}'} Le Sentiment d&apos;Être Remplacé</h3>
              <p className="text-gray-700 text-sm">L&apos;idée d&apos;avoir été &laquo;remplacé&raquo; blesse l&apos;estime. Pourtant, une personne ne se remplace pas : une nouvelle relation est une autre histoire, pas la vôtre reprise par quelqu&apos;un d&apos;autre.</p>
            </div>
            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-5 rounded">
              <h3 className="font-bold mb-2 text-cyan-700">{'\u{1F3AD}'} L&apos;Image Idéalisée</h3>
              <p className="text-gray-700 text-sm">On surestime presque toujours le <strong>bonheur affiché</strong> de l&apos;autre. Les débuts et les réseaux sociaux montrent une vitrine, jamais la réalité complète.</p>
            </div>
          </div>
        </section>

        <VoyantQuickCTA topic="rupture" source="ex-refait-sa-vie-banner-mid" />

        {/* H2: Comment accepter et avancer */}
        <section id="accepter" className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8 mb-8 border-2 border-teal-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F331}'} Comment Accepter et Réinvestir votre Vie</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Accepter n&apos;est pas etre d&apos;accord ni ne plus rien ressentir : c&apos;est cesser de lutter contre une realite que l&apos;on ne controle pas, en se coupant de la surveillance, en renouant avec son identite et en autorisant la tristesse sans la laisser tout envahir.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            L&apos;acceptation avance par <strong>étapes</strong>, pas d&apos;un coup. Voici les leviers concrets qui aident à traverser cette phase.
          </p>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 border-l-4 border-teal-500">
              <h3 className="font-bold text-lg mb-2 text-teal-700">{'\u{1F6D1}'} Se couper de la surveillance</h3>
              <p className="text-gray-700 text-sm">Suivre l&apos;autre couple à distance ravive la blessure sans rien changer. Se désabonner ou masquer est un <strong>acte de protection</strong>, pas de l&apos;évitement.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-cyan-500">
              <h3 className="font-bold text-lg mb-2 text-cyan-700">{'\u{1F98B}'} Renouer avec son identité</h3>
              <p className="text-gray-700 text-sm">Reprendre des goûts, des amitiés et des projets à soi restaure une <strong>identité indépendante</strong> de l&apos;ancien couple, le socle de toute reconstruction.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-2 text-blue-700">{'\u{1F327}️'} Autoriser la tristesse</h3>
              <p className="text-gray-700 text-sm">Refouler la peine la prolonge. La laisser exister, par vagues, sans qu&apos;elle envahisse tout, fait partie du <Link href="/rupture/guerir-rupture/" className="text-blue-600 hover:text-blue-800 underline font-medium">chemin de guérison</Link>.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-teal-500">
              <h3 className="font-bold text-lg mb-2 text-teal-700">{'\u{1F31F}'} Se tourner vers l&apos;avenir</h3>
              <p className="text-gray-700 text-sm">Le jour où l&apos;idée d&apos;une <Link href="/nouvelle-rencontre/nouvelle-relation-amoureuse/" className="text-teal-600 hover:text-teal-800 underline font-medium">nouvelle relation</Link> suscite de la curiosité plutôt que de la peur, vous saurez que vous avancez vraiment.</p>
            </div>
          </div>
          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <p className="text-gray-700"><strong>{'\u{1F4A1}'} À retenir :</strong> accepter que son ex refasse sa vie ne veut pas dire renoncer à être heureux, c&apos;est libérer l&apos;énergie qui vous épuisait pour la réinvestir en vous. Retrouver l&apos;estime de soi est au cœur de ce travail, notamment après une séparation longue.</p>
          </div>
        </section>
    </ContentPage>
  );
}
