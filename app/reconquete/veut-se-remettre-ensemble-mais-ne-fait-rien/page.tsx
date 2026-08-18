import Link from 'next/link';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import ContentPage, { contentMeta, type ContentPageConfig } from '@/components/ContentPage';

const config: ContentPageConfig = {
  title: 'Il Veut se Remettre Ensemble mais ne Fait Rien : Que Comprendre ?',
  description: 'Il/elle dit vouloir se remettre ensemble mais ne fait aucun effort ? Distinguez une vraie volonté de reconstruire d\'un simple lien entretenu, grâce à un cadre paroles contre actes.',
  url: 'https://www.voyantlove.fr/reconquete/veut-se-remettre-ensemble-mais-ne-fait-rien/',
  keywords: ['il veut se remettre ensemble mais ne fait rien', 'il veut revenir mais ne fait aucun effort', 'mon ex parle de réconciliation mais ne revient pas', 'il dit qu\'il m\'aime mais ne veut pas se remettre avec moi', 'séparation sans décision depuis des mois'],
  datePublished: '2026-07-28',
  dateModified: '2026-07-28',
  breadcrumb: [
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Reconquête', url: 'https://www.voyantlove.fr/reconquete/' },
    { name: 'Il Veut se Remettre Ensemble mais ne Fait Rien', url: 'https://www.voyantlove.fr/reconquete/veut-se-remettre-ensemble-mais-ne-fait-rien/' },
  ],
  header: {
    emoji: '💬',
    h1: 'Il Dit Vouloir se Remettre Ensemble, mais ne Fait Rien',
    subtitle: 'Comment interpréter l\'écart entre ses paroles et ses actes',
    gradient: 'from-violet-600 via-purple-600 to-indigo-600',
    backLink: { href: '/reconquete/', label: 'Retour à la Reconquête' },
    anchors: [
      { href: '#diagnostic', label: 'Le Cadre Paroles / Actes', primary: true },
      { href: '#decision', label: 'Demander une Décision' },
    ],
  },
  accentText: 'text-violet-600',
  stats: [
    { icon: '🔮', value: 'Reconnue', label: 'Expertise' },
    { icon: '💬', value: '3,400+', label: 'Consultations' },
    { icon: '⭐', value: '4.7/5', label: '264 avis' },
    { icon: '🔒', value: '100%', label: 'Confidentiel' },
  ],
  eeat: { colorScheme: 'purple', method: 'Guidance de reconquête et lecture des dynamiques relationnelles' },
  cta: { topic: 'reconquete', slug: 'veut-se-remettre' },
  faq: [
    {
      q: 'Pourquoi dit-il vouloir se remettre ensemble sans jamais agir ?',
      a: 'Plusieurs dynamiques peuvent l\'expliquer sans qu\'il soit possible de trancher à distance : une hésitation sincère qui n\'ose pas se déclarer, la peur de reprendre un engagement qui avait échoué, le confort d\'un lien maintenu sans décision, ou le besoin de garder une porte ouverte par sécurité affective. Les paroles de réconciliation coûtent peu ; ce sont les actes répétés et cohérents dans le temps qui révèlent une intention réelle. Observer l\'écart entre ce qui est dit et ce qui est fait, sur plusieurs semaines, est plus fiable que d\'interpréter une seule phrase.',
    },
    {
      q: 'Quels actes montrent une vraie volonté de reconstruire le couple ?',
      a: 'Une volonté sincère se traduit par des gestes concrets et répétés : proposer des moments à deux avec une date précise, aborder ouvertement ce qui a causé la rupture, présenter des changements observables plutôt que des promesses, prendre l\'initiative du contact sans qu\'on ait à le solliciter, et parler d\'un avenir commun en termes tangibles. Un seul de ces signes ne suffit pas ; c\'est leur constance sur la durée qui distingue une reconstruction réelle d\'une intention purement verbale.',
    },
    {
      q: 'Comment savoir s\'il veut surtout me garder sous le coude ?',
      a: 'Le lien entretenu sans projet se reconnaît à un schéma : des marques d\'affection qui réapparaissent chaque fois que vous prenez de la distance, des paroles chaleureuses jamais suivies d\'actes, une disponibilité intermittente et confortable pour lui, et l\'absence de toute étape concrète malgré le temps qui passe. Ce comportement ne prouve pas une mauvaise intention consciente, mais il maintient une ambiguïté qui sert son besoin de sécurité plus que votre besoin de clarté.',
    },
    {
      q: 'Combien de temps attendre avant de demander une décision claire ?',
      a: 'Il n\'existe pas de délai universel, mais lorsque plusieurs mois passent sans qu\'aucun acte ne vienne appuyer les paroles, il devient légitime de demander une clarification. Demander une décision n\'est pas poser un ultimatum : c\'est exprimer un besoin de lisibilité et donner à l\'autre l\'occasion de se positionner. Fixez-vous d\'abord à vous-même une limite intérieure de temps, afin de ne pas rester suspendu(e) à une situation qui n\'évolue pas.',
    },
    {
      q: 'Comment poser une limite sans provoquer une rupture définitive ?',
      a: 'Une limite saine parle de vous, pas de l\'autre : elle formule ce dont vous avez besoin pour avancer, sans menace ni chantage. Plutôt que « décide maintenant ou je pars », préférez « j\'ai besoin de savoir où nous allons, et je ne peux pas rester dans l\'incertitude indéfiniment ». Cette formulation respecte votre équilibre tout en laissant à l\'autre un espace pour répondre par des actes. Une consultation de voyance sentimentale peut vous aider à clarifier vos propres attentes avant cette conversation.',
    },
  ],
  related: [
    { href: '/reconquete/', label: 'Reconquête Amoureuse : Toutes nos Guidances' },
    { href: '/reconquete/dois-je-attendre-son-retour/', label: 'Dois-je l\'Attendre ?' },
    { href: '/reconquete/se-remettre-ensemble/', label: 'Se Remettre Ensemble : Les 5 Étapes' },
    { href: '/reconquete/va-t-il-elle-revenir/', label: 'Va-t-il/elle Revenir ?' },
    { href: '/crise-couple/dependance-affective/', label: 'Reconnaître la Dépendance Affective' },
    { href: '/reconquete/sentiments-peuvent-ils-revenir-couple/', label: 'Les Sentiments Peuvent-ils Revenir ?' },
  ],
};

export const metadata = contentMeta(config);

export default function VeutSeRemettreEnsembleMaisNeFaitRienPage() {
  return (
    <ContentPage config={config}>

        {/* Answer Capsule */}
        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-violet-500">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-4">
              Entendre <strong>&laquo;je veux qu&apos;on se remette ensemble&raquo;</strong> sans voir aucun <strong>acte</strong> suivre est l&apos;une des situations les plus déroutantes après une séparation. Les <strong>paroles de réconciliation</strong> entretiennent l&apos;espoir, mais elles ne coûtent presque rien et n&apos;engagent à rien. La seule manière fiable de comprendre l&apos;intention réelle de l&apos;autre est d&apos;observer, sur plusieurs semaines, l&apos;écart entre <strong>ce qui est dit</strong> et <strong>ce qui est fait</strong>. Personne ne peut prédire à votre place s&apos;il ou elle reviendra vraiment, mais ce cadre vous rend votre lucidité.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Derrière l&apos;inaction, plusieurs dynamiques coexistent souvent : une <strong>hésitation sincère</strong>, la peur de reprendre un <strong>engagement</strong> qui avait échoué, ou le confort d&apos;un lien maintenu sans décision. Aucune de ces explications ne relève d&apos;un diagnostic psychologique, et il ne s&apos;agit pas d&apos;étiqueter l&apos;autre. Si l&apos;incertitude vous épuise, notre guidance sur <Link href="/reconquete/dois-je-attendre-son-retour/" className="text-violet-600 hover:text-violet-800 underline font-medium">dois-je l&apos;attendre</Link> complète cette réflexion sur la juste durée de patience.
            </p>
            <p className="text-lg leading-relaxed">
              L&apos;objectif de cette page n&apos;est pas de deviner ses intentions cachées, mais de vous donner une <strong>grille de lecture concrète</strong> pour évaluer les paroles, les comportements, leur constance, et décider de la limite qui protège votre équilibre. Une <strong>consultation de voyance sentimentale</strong> peut ensuite éclairer la dynamique émotionnelle en jeu et vos propres choix, sans jamais prétendre contraindre la décision de l&apos;autre.
            </p>
          </div>
        </article>

        <VoyantRecommendations topic="reconquete" limit={3} showOnlineFirst={true} source="veut-se-remettre-ensemble-mais-ne-fait-rien-cards-top" />

        {/* H2: Pourquoi les paroles ne suffisent pas */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F5E3}️'} Pourquoi les Paroles de Réconciliation ne Suffisent Pas</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Une parole de reconciliation exprime un desir de l&apos;instant, tandis qu&apos;un acte engage la personne dans la duree : c&apos;est la repetition des gestes concrets, non des mots, qui revele une intention reelle.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Dire &laquo;je veux qu&apos;on se remette ensemble&raquo; peut être parfaitement sincère sur le moment, et pourtant ne rien engager. Une <strong>parole</strong> exprime une envie, un manque ou un élan passager ; un <strong>acte</strong> demande du courage, de l&apos;organisation et une décision assumée. C&apos;est pourquoi il est possible de penser vraiment ce qu&apos;on dit et de ne rien faire pour autant.
          </p>
          <div className="bg-violet-50 border-l-4 border-violet-500 p-6 rounded mb-4">
            <p className="text-gray-700"><strong>{'\u{1F4A1}'} L&apos;essentiel :</strong> une phrase ne se juge pas isolément. Ce qui compte, c&apos;est le <strong>schéma</strong> : les paroles sont-elles suivies, une fois sur deux, une fois sur dix, jamais, par un geste concret ? La réponse à cette question vaut plus que le contenu de n&apos;importe quelle déclaration.</p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Ce constat n&apos;a rien de cynique : il vous évite d&apos;organiser votre vie autour d&apos;intentions qui ne se matérialisent jamais. Tant que vous mesurez l&apos;<strong>engagement</strong> aux mots, l&apos;incertitude peut durer indéfiniment.
          </p>
        </section>

        {/* H2: Les actes qui prouvent une vraie volonté */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'✅'} Quels Actes Montrent une Véritable Volonté de Reconstruire</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Proposer des rendez-vous datés, aborder les causes de la rupture, montrer des changements observables et prendre l&apos;initiative du contact sont les actes concrets qui traduisent une intention sincère de reconstruire le couple.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Une volonté réelle de se remettre ensemble laisse des traces visibles. Voici les <strong>signaux comportementaux</strong> les plus fiables, à observer dans leur <strong>constance</strong> plutôt qu&apos;isolément.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-green-700">{'\u{1F4C5}'} Des Propositions Concrètes et Datées</h3>
              <p className="text-gray-700 text-sm">Il ou elle propose un moment précis, avec un jour et un lieu, plutôt que des &laquo;on devrait se revoir&raquo; sans lendemain. L&apos;<strong>initiative datée</strong> est l&apos;un des marqueurs les plus parlants d&apos;une intention réelle.</p>
            </div>
            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-green-700">{'\u{1F50D}'} Une Vraie Discussion sur la Rupture</h3>
              <p className="text-gray-700 text-sm">Reconstruire suppose de nommer ce qui a échoué. Une personne engagée aborde les <strong>causes de la rupture</strong> au lieu de les contourner, et cherche à comprendre plutôt qu&apos;à séduire de nouveau.</p>
            </div>
            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-green-700">{'\u{1F331}'} Des Changements Observables</h3>
              <p className="text-gray-700 text-sm">Les promesses de changement se vérifient dans les faits. Un <strong>comportement</strong> réellement modifié, visible sur la durée, pèse infiniment plus lourd qu&apos;un engagement formulé mais jamais tenu.</p>
            </div>
            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-green-700">{'\u{1F5FA}️'} Un Avenir Évoqué en Termes Tangibles</h3>
              <p className="text-gray-700 text-sm">Parler d&apos;un <strong>projet commun</strong> avec des éléments concrets, un rythme, des étapes, une organisation, traduit une projection réelle, à distinguer des &laquo;un jour peut-être&raquo; qui restent flous.</p>
            </div>
          </div>
        </section>

        {/* H2: Les signes qu'il veut maintenir le lien */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1FA9D}'} Les Signes qu&apos;il ou elle Veut Surtout Maintenir le Lien</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Des marques d&apos;affection qui reapparaissent des que vous prenez de la distance, des paroles jamais suivies d&apos;actes et une disponibilite intermittente signalent un lien entretenu pour la securite affective, sans projet de reconstruction.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            À l&apos;opposé des signaux d&apos;engagement, certains schémas trahissent un <strong>lien maintenu sans décision</strong>. Ils ne prouvent pas une manipulation consciente, mais entretiennent une ambiguïté confortable pour l&apos;autre et douloureuse pour vous.
          </p>
          <div className="space-y-4">
            <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded">
              <h3 className="font-bold mb-2 text-orange-700">{'\u{1F504}'} Le Retour à Chaque Prise de Distance</h3>
              <p className="text-gray-700 text-sm">Chaque fois que vous vous éloignez, un message tendre réapparaît, puis plus rien dès que le lien est rétabli. Ce rythme relance l&apos;espoir sans jamais faire avancer la situation.</p>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded">
              <h3 className="font-bold mb-2 text-orange-700">{'\u{1F4AC}'} Des Mots Chaleureux, Aucun Geste</h3>
              <p className="text-gray-700 text-sm">Les déclarations sont fréquentes et sincères en apparence, mais rien ne les suit. L&apos;<strong>écart parole / acte</strong> reste stable dans le temps, sans jamais se réduire.</p>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded">
              <h3 className="font-bold mb-2 text-orange-700">{'⏳'} Une Disponibilité Intermittente et Confortable</h3>
              <p className="text-gray-700 text-sm">L&apos;autre est présent quand cela lui convient, absent le reste du temps, sans que la situation ne progresse. Si ce schéma vous épuise, notre guide sur la <Link href="/crise-couple/dependance-affective/" className="text-violet-600 hover:text-violet-800 underline font-medium">dépendance affective</Link> aide à reconnaître le moment où le lien devient un piège.</p>
            </div>
          </div>
        </section>

        <VoyantQuickCTA topic="reconquete" source="veut-se-remettre-ensemble-mais-ne-fait-rien-banner-mid" />

        {/* H2: Diagnostic paroles vs actes */}
        <section id="diagnostic" className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-xl p-8 mb-8 border-2 border-violet-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'⚖️'} Hésitation Sincère ou Absence d&apos;Engagement : le Cadre Paroles / Actes</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Pour trancher entre une hesitation sincere et une absence d&apos;engagement, comparez cinq elements : ce qui est dit, ce qui est fait de facon repetee, ce qui manque encore, la limite que vous pouvez poser et la preuve qui justifierait de reconsiderer.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ce cadre en cinq points remplace l&apos;interprétation sans fin par une <strong>observation structurée</strong>. Il ne prédit pas l&apos;avenir : il vous aide à voir la situation telle qu&apos;elle est réellement.
          </p>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 border-l-4 border-violet-500">
              <h3 className="font-bold text-lg mb-2 text-violet-700">1. Ce que la personne dit</h3>
              <p className="text-gray-700 text-sm">Notez les paroles réellement prononcées, sans les amplifier ni les minimiser. Distinguez un &laquo;tu me manques&raquo; d&apos;un &laquo;je veux qu&apos;on reconstruise vraiment&raquo;.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-purple-500">
              <h3 className="font-bold text-lg mb-2 text-purple-700">2. Ce que la personne fait de façon répétée</h3>
              <p className="text-gray-700 text-sm">Recensez les <strong>actes</strong> concrets sur les dernières semaines. Un geste isolé ne compte pas ; c&apos;est la <strong>répétition</strong> qui fait foi.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-indigo-500">
              <h3 className="font-bold text-lg mb-2 text-indigo-700">3. Ce qui manque encore</h3>
              <p className="text-gray-700 text-sm">Identifiez l&apos;écart : quelles étapes concrètes n&apos;ont jamais eu lieu malgré le temps écoulé ? Cet espace vide est souvent la réponse la plus honnête.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-fuchsia-500">
              <h3 className="font-bold text-lg mb-2 text-fuchsia-700">4. La limite que vous pouvez poser</h3>
              <p className="text-gray-700 text-sm">Définissez ce dont vous avez besoin pour continuer à espérer sereinement, et le point au-delà duquel l&apos;attente vous coûte trop.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-rose-500">
              <h3 className="font-bold text-lg mb-2 text-rose-700">5. La preuve qui justifierait de reconsidérer</h3>
              <p className="text-gray-700 text-sm">Nommez d&apos;avance l&apos;acte concret qui vous ferait légitimement croire à une reconstruction. S&apos;il n&apos;arrive pas, vous saurez à quoi vous en tenir.</p>
            </div>
          </div>
        </section>

        {/* H2: Combien de temps / demander une décision */}
        <section id="decision" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F4C5}'} Combien de Temps Attendre Avant de Demander une Décision Claire</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Lorsque plusieurs mois passent sans qu&apos;aucun acte n&apos;appuie les paroles, demander une clarification devient legitime : ce n&apos;est pas un ultimatum, mais l&apos;expression d&apos;un besoin de lisibilite qui vous protege de l&apos;attente indefinie.</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Il n&apos;existe pas de délai universel, mais une <strong>séparation sans décision</strong> qui s&apos;étire sur des mois, sans acte pour soutenir les paroles, appelle une clarification. Demander où vous en êtes n&apos;est pas exercer une pression : c&apos;est reprendre votre part de responsabilité dans une situation où vous n&apos;êtes pas condamné(e) à seulement attendre. Pour situer la juste durée de patience, notre page <Link href="/reconquete/dois-je-attendre-son-retour/" className="text-violet-600 hover:text-violet-800 underline font-medium">dois-je l&apos;attendre</Link> approfondit ce point.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Avant même de parler à l&apos;autre, fixez-vous une <strong>limite intérieure de temps</strong>, révisable mais réelle. Cette limite n&apos;a pas à être annoncée : elle existe pour vous, pour éviter que l&apos;espoir ne se transforme en une <strong>attente indéfinie</strong> qui met votre vie en pause. Si un jour la réconciliation se concrétise, notre guide sur <Link href="/reconquete/se-remettre-ensemble/" className="text-violet-600 hover:text-violet-800 underline font-medium">se remettre ensemble</Link> détaille les étapes pour repartir sur des bases saines.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <p className="text-gray-700"><strong>{'✨'} Repère utile :</strong> une bonne question à se poser régulièrement est simple, &laquo;depuis un mois, qu&apos;est-ce qui a concrètement changé ?&raquo;. Si la réponse reste &laquo;rien&raquo; mois après mois, l&apos;information est là, même sans confrontation.</p>
          </div>
        </section>

        {/* H2: Poser une limite sans ultimatum */}
        <section className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-xl p-8 mb-8 border-2 border-rose-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'\u{1F6E1}️'} Comment Poser une Limite sans Tomber dans l&apos;Ultimatum Destructeur</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Une limite saine parle de vos besoins et non des torts de l&apos;autre : elle exprime ce dont vous avez besoin pour avancer, tandis que l&apos;ultimatum menace et acule ; la premiere ouvre un choix, le second ferme le dialogue.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            La différence entre une <strong>limite</strong> et un <strong>ultimatum</strong> tient à l&apos;intention et à la formulation. La limite protège votre équilibre ; l&apos;ultimatum cherche à forcer une réponse. La première laisse à l&apos;autre la liberté de se positionner par des actes ; le second transforme la décision en réaction sous contrainte, rarement durable.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="font-bold text-lg mb-3 text-green-700">{'✅'} Une Limite Saine</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&bull; Parle de <strong>vos besoins</strong> : &laquo;j&apos;ai besoin de lisibilité&raquo;</li>
                <li>&bull; Nomme un ressenti sans accuser l&apos;autre</li>
                <li>&bull; Laisse un espace pour répondre par des actes</li>
                <li>&bull; Protège votre équilibre, quoi qu&apos;il décide</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="font-bold text-lg mb-3 text-red-700">{'\u{1F6D1}'} Un Ultimatum Destructeur</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&bull; Menace : &laquo;décide maintenant ou je pars&raquo;</li>
                <li>&bull; Cherche à contraindre plutôt qu&apos;à clarifier</li>
                <li>&bull; Provoque une réponse sous pression, peu fiable</li>
                <li>&bull; Ferme le dialogue au lieu de l&apos;ouvrir</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <p className="text-gray-700"><strong>{'\u{1F4A1}'} À retenir :</strong> avant d&apos;engager cette conversation, il est utile de clarifier vos propres attentes. Une <strong>consultation de voyance sentimentale</strong> peut vous aider à y voir clair dans ce que vous ressentez et souhaitez, sans jamais prétendre décider à la place de l&apos;autre ni garantir son retour.</p>
          </div>
        </section>

      </ContentPage>
  );
}
