import Link from 'next/link';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import ContentPage, { contentMeta, type ContentPageConfig } from '@/components/ContentPage';

const config: ContentPageConfig = {
  title: 'Mon ex est chaud et froid après la séparation : pourquoi ?',
  description: 'Votre ex souffle le chaud et le froid après la rupture ? Comprenez les dynamiques derrière les signaux contradictoires et décidez comment répondre sans décoder chaque message.',
  url: 'https://www.voyantlove.fr/reconquete/ex-chaud-et-froid-apres-separation/',
  keywords: ['mon ex est chaud et froid', 'mon ex revient puis repart', 'mon ex me parle puis m\'ignore', 'mon ex envoie des signes contradictoires', 'comportement ambigu après séparation'],
  datePublished: '2026-07-28',
  dateModified: '2026-07-28',
  breadcrumb: [
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Reconquête', url: 'https://www.voyantlove.fr/reconquete/' },
    { name: 'Mon Ex est Chaud et Froid', url: 'https://www.voyantlove.fr/reconquete/ex-chaud-et-froid-apres-separation/' },
  ],
  header: {
    emoji: '',
    h1: 'Pourquoi mon ex souffle-t-il le chaud et le froid ?',
    subtitle: 'Comprendre les signaux contradictoires après une séparation',
    gradient: 'from-rose-500 via-purple-600 to-blue-600',
    backLink: { href: '/reconquete/', label: 'Retour à la reconquête' },
    anchors: [
      { href: '#decodeur', label: 'Le décodeur des signaux', primary: true },
      { href: '#reagir', label: 'Comment réagir' },
    ],
  },
  accentText: 'text-purple-600',
  stats: [
    { icon: '', value: 'Reconnue', label: 'Expertise' },
    { icon: '', value: '3,500+', label: 'Consultations' },
    { icon: '', value: '4.7/5', label: '289 Avis' },
    { icon: '', value: '100%', label: 'Confidentiel' },
  ],
  eeat: { colorScheme: 'purple', method: 'Guidance de reconquête et lecture des signaux relationnels' },
  cta: { topic: 'reconquete', slug: 'ex-chaud-froid' },
  faq: [
    {
      q: 'Pourquoi mon ex souffle-t-il le chaud et le froid après la séparation ?',
      a: 'Un comportement chaud et froid traduit le plus souvent une ambivalence intérieure : la personne oscille entre l\'attachement encore présent et les raisons qui ont motivé la rupture. La culpabilité, la solitude, la peur de perdre définitivement l\'autre ou le simple confort d\'un lien maintenu peuvent alimenter ces allers-retours. Il est rarement possible de désigner une cause unique à distance, et un même geste peut avoir plusieurs significations. L\'essentiel est d\'observer la tendance sur la durée plutôt que d\'interpréter chaque message isolément.',
    },
    {
      q: 'Est-ce que le fait de me recontacter signifie qu\'il veut revenir ?',
      a: 'Non, reprendre contact ne prouve pas à lui seul un désir de réconciliation. Un ex peut réécrire par nostalgie, par ennui, par culpabilité, pour se rassurer sur l\'attachement de l\'autre ou pour maintenir un lien confortable, sans projet de retour. Ce que le contact ne prouve pas est aussi important que ce qu\'il pourrait indiquer. Seule une intention exprimée clairement et suivie d\'actes concrets et réguliers permet de parler d\'une véritable volonté de revenir.',
    },
    {
      q: 'Comment distinguer une ambivalence sincère d\'un lien simplement entretenu ?',
      a: 'Une ambivalence sincère cherche à avancer : la personne pose des questions sur l\'avenir, exprime ses doutes ouvertement, et les périodes chaudes tendent à se prolonger. Un lien entretenu sans projet suit au contraire un cycle stable : rapprochement dès que vous vous éloignez, retrait dès que vous vous rapprochez, sans que rien ne progresse. La différence se lit dans l\'évolution sur plusieurs semaines : l\'ambivalence sincère bouge, le lien entretenu tourne en rond.',
    },
    {
      q: 'Pourquoi analyser chaque message aggrave-t-il l\'incertitude ?',
      a: 'Décoder chaque mot, chaque emoji ou chaque délai de réponse donne l\'illusion de comprendre, mais amplifie surtout l\'anxiété et la dépendance au prochain signal. Les signaux contradictoires sont, par définition, contradictoires : leur analyse détaillée ne produit pas de certitude, seulement une agitation mentale épuisante. Reculer d\'un cran et observer la tendance générale, plutôt que le détail de chaque échange, restaure de la clarté et vous rend votre énergie.',
    },
    {
      q: 'Comment réagir face à un ex qui est chaud et froid ?',
      a: 'La réponse la plus protectrice consiste à cesser de calquer votre humeur sur la sienne. Restez cohérent(e) : répondez avec authenticité pendant les phases chaudes sans vous précipiter, et n\'insistez pas pendant les phases froides. Fixez-vous une limite intérieure sur ce que vous acceptez d\'incertitude, et reprenez de la distance si les allers-retours vous épuisent. Une consultation de voyance sentimentale peut éclairer la dynamique en jeu et surtout votre propre positionnement.',
    },
  ],
  related: [
    { href: '/reconquete/', label: 'Reconquête amoureuse : toutes nos guidances' },
    { href: '/reconquete/veut-se-remettre-ensemble-mais-ne-fait-rien/', label: 'Il veut se remettre ensemble mais ne fait rien' },
    { href: '/reconquete/ex-qui-revient/', label: 'Ex qui revient : que faire ?' },
    { href: '/sentiments/pense-t-il-elle-a-moi/', label: 'Pense-t-il/elle à moi ?' },
    { href: '/reconquete/silence-radio-reconquete/', label: 'Le silence radio en reconquête' },
    { href: '/reconquete/separation-temporaire-ou-definitive/', label: 'Séparation temporaire ou définitive ?' },
  ],
};

export const metadata = contentMeta(config);

export default function ExChaudEtFroidApresSeparationPage() {
  return (
    <ContentPage config={config}>

        {/* Answer Capsule */}
        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-purple-500">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-4">
              Un ex qui vous <strong>parle puis vous ignore</strong>, se montre affectueux avant de disparaître, évoque une réconciliation sans jamais la concrétiser : ce comportement <strong>chaud et froid</strong> est l&apos;un des plus déstabilisants après une séparation. Dans la grande majorité des cas, il traduit une <strong>ambivalence</strong> intérieure, un tiraillement entre l&apos;attachement encore vivant et les raisons qui ont mené à la rupture, plutôt qu&apos;une stratégie calculée. Personne ne peut lire ses pensées avec certitude, mais on peut organiser ces signaux en <strong>schémas observables</strong>.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Plusieurs moteurs alimentent souvent ces allers-retours : la <strong>culpabilité</strong>, la <strong>solitude</strong>, la peur de perdre définitivement l&apos;autre, ou le confort d&apos;un lien maintenu sans décision. Aucun de ces ressentis n&apos;est un diagnostic, et un même geste peut avoir plusieurs sens. Recontacter, en particulier, ne prouve pas un désir de retour, un point que notre guidance sur <Link href="/sentiments/pense-t-il-elle-a-moi/" className="text-purple-600 hover:text-purple-800 underline font-medium">pense-t-il/elle à moi</Link> nuance en détail.
            </p>
            <p className="text-lg leading-relaxed">
              L&apos;objectif de cette page est de vous sortir de l&apos;analyse épuisante de chaque message pour vous rendre une <strong>lecture d&apos;ensemble</strong> : ce que chaque signal peut signifier, ce qu&apos;il ne prouve pas, et surtout comment répondre en préservant votre équilibre. Une <strong>consultation de voyance sentimentale</strong> peut ensuite éclairer la dynamique et votre propre positionnement, sans prétendre dévoiler avec certitude les intentions de l&apos;autre.
            </p>
          </div>
        </article>

        <VoyantRecommendations topic="reconquete" limit={3} showOnlineFirst={true} source="ex-chaud-et-froid-apres-separation-cards-top" />

        {/* H2: À quoi ressemble */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">À Quoi Ressemble un Comportement Chaud et Froid</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Le comportement chaud et froid alterne rapprochement et retrait : messages tendres suivis de silences, promesses de se revoir sans suite, presence intense puis disparition, selon un cycle qui se repete sans que la situation ne progresse.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Avant d&apos;en chercher les causes, il est utile de reconnaître le <strong>schéma</strong>. Le comportement chaud et froid n&apos;est pas un événement isolé mais un <strong>cycle</strong> qui se répète, et c&apos;est cette répétition qui le rend éprouvant.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-rose-50 border-2 border-rose-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-rose-700">Les Phases Chaudes</h3>
              <p className="text-gray-700 text-sm">Messages affectueux, nostalgie partagée, disponibilité soudaine, allusions à &laquo;ce qu&apos;on avait&raquo;. L&apos;espoir renaît, souvent au moment précis où vous commenciez à prendre de la distance.</p>
            </div>
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-blue-700">{''} Les Phases Froides</h3>
              <p className="text-gray-700 text-sm">Réponses courtes, silences, retrait inexpliqué, absence dès que le lien se rapproche. La distance revient sans explication, laissant l&apos;impression d&apos;avoir rêvé la phase précédente.</p>
            </div>
          </div>
          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <p className="text-gray-700"><strong>À retenir :</strong> ce n&apos;est pas l&apos;intensité d&apos;une phase chaude qui renseigne, mais le <strong>rythme</strong> de l&apos;alternance. Un cycle qui se répète à l&apos;identique, sans progresser, en dit plus long que le plus beau des messages.</p>
          </div>
        </section>

        {/* H2: Pourquoi - les moteurs */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Attachement, Culpabilité, Solitude : Pourquoi ces Signaux Contradictoires</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Une personne separee peut envoyer des signaux contradictoires parce qu&apos;elle est elle-meme divisee : l&apos;attachement residuel, la culpabilite, la solitude et la peur de perdre l&apos;autre definitivement coexistent sans qu&apos;elle ait tranche.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Le comportement chaud et froid vient rarement d&apos;une volonté de nuire. Il reflète le plus souvent un <strong>conflit intérieur</strong> non résolu. Voici les moteurs les plus courants, à considérer comme des hypothèses et non comme des verdicts.
          </p>
          <div className="space-y-4">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded">
              <h3 className="font-bold mb-2 text-purple-700">Un Attachement qui Persiste</h3>
              <p className="text-gray-700 text-sm">Les sentiments ne s&apos;éteignent pas au rythme des décisions. L&apos;<strong>attachement résiduel</strong> pousse à se rapprocher, même quand la raison a choisi la séparation.</p>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded">
              <h3 className="font-bold mb-2 text-purple-700">La Culpabilité et la Solitude</h3>
              <p className="text-gray-700 text-sm">La <strong>culpabilité</strong> d&apos;avoir blessé, ou la <strong>solitude</strong> des soirs difficiles, peut déclencher un rapprochement ponctuel qui retombe une fois le malaise apaisé.</p>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded">
              <h3 className="font-bold mb-2 text-purple-700">La Peur de Perdre Définitivement l&apos;Autre</h3>
              <p className="text-gray-700 text-sm">Voir l&apos;autre s&apos;éloigner pour de bon peut raviver un élan, sans pour autant s&apos;accompagner d&apos;un projet. C&apos;est souvent ce qui explique le retour pile au moment de votre recul.</p>
            </div>
          </div>
        </section>

        <VoyantQuickCTA topic="reconquete" source="ex-chaud-et-froid-apres-separation-banner-mid" />

        {/* H2: Décodeur - ambivalence sincère vs lien entretenu */}
        <section id="decodeur" className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 mb-8 border-2 border-purple-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ambivalence Sincère ou Lien Entretenu : le Décodeur</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Une ambivalence sincere cherche a avancer et ses phases chaudes se prolongent, tandis qu&apos;un lien entretenu suit un cycle stable qui ne progresse jamais : la difference se lit dans l&apos;evolution sur plusieurs semaines, pas dans un message isole.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Tous les comportements chaud et froid ne se valent pas. Ce décodeur oppose deux dynamiques que l&apos;on confond facilement, en se concentrant sur ce qu&apos;un signal <strong>prouve</strong> et ce qu&apos;il <strong>ne prouve pas</strong>.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="font-bold text-lg mb-3 text-green-700">Signes d&apos;une Ambivalence Sincère</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&bull; Il ou elle <strong>parle ouvertement</strong> de ses doutes</li>
                <li>&bull; Les phases chaudes tendent à se prolonger</li>
                <li>&bull; Des questions concrètes sur l&apos;avenir apparaissent</li>
                <li>&bull; La dynamique <strong>évolue</strong> d&apos;une semaine à l&apos;autre</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500">
              <h3 className="font-bold text-lg mb-3 text-orange-700">Signes d&apos;un Lien Entretenu</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&bull; Rapprochement <strong>dès que vous vous éloignez</strong></li>
                <li>&bull; Retrait dès que vous vous rapprochez</li>
                <li>&bull; Aucune étape concrète malgré le temps</li>
                <li>&bull; Le cycle se répète <strong>à l&apos;identique</strong></li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-white p-6 rounded-lg border-2 border-purple-200">
            <p className="text-gray-700"><strong>{'️'} Ce que le contact ne prouve pas :</strong> regarder vos stories, aimer une publication ou envoyer un message ponctuel n&apos;établit pas un désir de réconciliation. Ces gestes peuvent naître de la <strong>nostalgie</strong>, de l&apos;ennui ou du besoin de se rassurer, sans aucun projet de retour.</p>
          </div>
        </section>

        {/* H2: Pourquoi analyser aggrave */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pourquoi Analyser Chaque Message Aggrave l&apos;Incertitude</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Decoder chaque mot, emoji ou delai de reponse donne l&apos;illusion de comprendre mais nourrit l&apos;anxiete et la dependance au prochain signal : les signaux contradictoires ne produisent pas de certitude, seulement une agitation mentale epuisante.</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Face à l&apos;ambiguïté, l&apos;esprit cherche à combler le vide en <strong>surinterprétant</strong> chaque détail. Mais analyser un comportement contradictoire ne le rend pas cohérent : cela transforme seulement votre quotidien en une veille anxieuse, suspendue au prochain message. Cette <strong>hypervigilance</strong> renforce la dépendance au lien, sans jamais livrer la réponse espérée.
          </p>
          <p className="text-gray-700 leading-relaxed">
            La sortie ne consiste pas à mieux décoder, mais à <strong>reculer d&apos;un cran</strong> : observer la tendance générale sur un mois plutôt que le détail de chaque échange. Si le besoin de vérifier ses moindres faits et gestes devient envahissant, notre guide pour <Link href="/rupture/oublier-son-ex/" className="text-purple-600 hover:text-purple-800 underline font-medium">oublier son ex</Link> propose des repères pour reprendre la main.
          </p>
        </section>

        {/* H2: Comment réagir / quand prendre distance */}
        <section id="reagir" className="bg-gradient-to-r from-blue-50 to-rose-50 rounded-xl p-8 mb-8 border-2 border-blue-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Comment Répondre et Quand Prendre de la Distance</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">La reponse la plus protectrice consiste a cesser de calquer votre humeur sur la sienne : rester coherent, ne pas se precipiter pendant les phases chaudes, ne pas insister pendant les phases froides, et reprendre de la distance quand les allers-retours vous epuisent.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Vous ne contrôlez pas les allers-retours de l&apos;autre, mais vous contrôlez votre <strong>réponse</strong>. Cesser de vivre au rythme de ses signaux est le geste qui vous rend le plus de sérénité.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="font-bold text-lg mb-3 text-green-700">{''} Une Réponse Équilibrée</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&bull; Rester <strong>cohérent(e)</strong> quelle que soit sa phase</li>
                <li>&bull; Répondre avec authenticité, sans se précipiter</li>
                <li>&bull; Ne pas relancer pendant les silences</li>
                <li>&bull; Garder sa vie et ses projets en mouvement</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500">
              <h3 className="font-bold text-lg mb-3 text-orange-700">Quand Prendre de la Distance</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&bull; Le cycle se répète <strong>sans jamais progresser</strong></li>
                <li>&bull; Votre humeur dépend de son dernier message</li>
                <li>&bull; L&apos;attente occupe l&apos;essentiel de vos pensées</li>
                <li>&bull; Vous vous sentez <strong>épuisé(e)</strong> par les allers-retours</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <p className="text-gray-700"><strong>À retenir :</strong> reprendre de la distance n&apos;est pas une stratégie pour le faire revenir, mais une manière de vous protéger. Si vous hésitez sur le juste positionnement, une <strong>consultation de voyance sentimentale</strong> peut éclairer la dynamique et vos propres besoins, jamais garantir la décision de l&apos;autre.</p>
          </div>
        </section>

      </ContentPage>
  );
}
