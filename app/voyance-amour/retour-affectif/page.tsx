import Link from 'next/link';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import ContentPage, { contentMeta, type ContentPageConfig } from '@/components/ContentPage';

const config: ContentPageConfig = {
  title: 'Retour affectif : guide anti-arnaque | voyance honnête',
  description: 'Le retour affectif est souvent une arnaque. Découvrez les red flags, comment vous protéger et ce que la voyance peut vraiment faire pour votre situation.',
  url: 'https://www.voyantlove.fr/voyance-amour/retour-affectif/',
  keywords: ['retour affectif', 'retour affectif avis', 'retour affectif marabout', 'retour affectif arnaque', 'retour affectif gratuit danger', 'comment recuperer son ex sans marabout'],
  datePublished: '2026-08-28',
  dateModified: '2026-08-28',
  breadcrumb: [
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Voyance Amour', url: 'https://www.voyantlove.fr/voyance-amour/' },
    { name: 'Retour Affectif', url: 'https://www.voyantlove.fr/voyance-amour/retour-affectif/' },
  ],
  header: {
    emoji: '',
    h1: 'Retour affectif : ce que personne ne vous dit',
    subtitle: 'Guide honnête sur les promesses de retour affectif, les arnaques à éviter et ce que la voyance peut réellement faire pour vous',
    gradient: 'from-amber-700 via-orange-700 to-red-700',
    backLink: { href: '/voyance-amour/', label: 'Voyance Amour' },
    anchors: [
      { href: '#red-flags', label: 'Les red flags', primary: true },
      { href: '#protection', label: 'Se protéger' },
    ],
  },
  accentText: 'text-amber-700',
  stats: [
    { icon: '', value: '5 red flags', label: 'Signalés dans ce guide' },
    { icon: '', value: '12 min', label: 'Temps de lecture' },
    { icon: '', value: 'MIVILUDES', label: 'Référence officielle' },
  ],
  cta: { topic: 'reconquete', slug: 'retour-affectif' },
  faq: [
    {
      q: 'Le retour affectif, est-ce que ça marche vraiment ?',
      a: 'Aucune preuve sérieuse ne démontre qu’un rituel, un sort ou un travail occulte puisse forcer quelqu’un à revenir. Les témoignages positifs que vous trouvez en ligne sont quasi systématiquement fabriqués par les praticiens eux-mêmes. Ce qui fonctionne pour récupérer un ex, c’est un travail sur soi, une communication adaptée et du temps. La voyance peut vous aider à y voir clair, mais elle ne remplacera jamais le libre arbitre de l’autre personne.',
    },
    {
      q: 'Peut-on faire confiance à un marabout pour un retour affectif ?',
      a: 'La grande majorité des offres de \"retour affectif marabout\" en ligne sont des arnaques. Le schéma est presque toujours le même : un premier rituel à prix accessible, puis des coûts qui augmentent (\"un blocage supplémentaire à lever\"), des demandes de silence (\"n’en parlez à personne\") et zéro résultat vérifiable. Si quelqu’un vous garantit un résultat sur les sentiments d’une autre personne, c’est un signal d’arnaque, pas de compétence.',
    },
    {
      q: 'Le retour affectif gratuit, c’est dangereux ?',
      a: 'Oui. L’offre de \"retour affectif gratuit\" est un appât classique. Le scénario : on vous propose un premier diagnostic gratuit, on vous annonce un \"blocage\" ou un \"envoûtement\" qui explique votre rupture, puis on vous demande de payer pour le lever. C’est de la manipulation émotionnelle pure. Vous êtes vulnérable après une séparation, et ces praticiens exploitent précisément cette vulnérabilité.',
    },
    {
      q: 'Comment récupérer son ex sans passer par un marabout ?',
      a: 'Commencez par respecter une période de silence radio de quelques semaines pour laisser retomber les émotions. Travaillez sur les vraies causes de la rupture plutôt que de chercher une solution magique. La voyance honnête peut vous aider à comprendre les dynamiques de votre relation et à identifier ce que vous pouvez changer. Consultez nos guides sur la reconquête amoureuse pour des stratégies concrètes et éprouvées, sans manipulation ni fausses promesses.',
    },
  ],
  related: [
    { href: '/reconquete/', label: 'Reconquête amoureuse : toutes nos guidances' },
    { href: '/reconquete/reconquerir-son-ex/', label: 'Reconquérir son ex : guide complet' },
    { href: '/reconquete/va-t-il-elle-revenir/', label: 'Va-t-il/elle revenir ?' },
    { href: '/voyance-gratuite-amour/', label: 'Voyance gratuite amour' },
    { href: '/rupture/oublier-son-ex/', label: 'Oublier son ex et tourner la page' },
  ],
};

export const metadata = contentMeta(config);

export default function RetourAffectifPage() {
  return (
    <ContentPage config={config}>

        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-amber-600">
          <p className="text-lg leading-relaxed mb-4">
            <strong>Le retour affectif est un terme utilis&eacute; par des praticiens qui promettent de ramener un ex par des rituels ou des sorts. Dans la grande majorit&eacute; des cas, ces services rel&egrave;vent de l&rsquo;arnaque ou de l&rsquo;emprise.</strong> Vous lisez ces lignes probablement parce que vous souffrez d&rsquo;une rupture et que vous cherchez d&eacute;sesp&eacute;r&eacute;ment un moyen de faire revenir la personne que vous aimez. Cette douleur est r&eacute;elle, et elle m&eacute;rite une r&eacute;ponse honn&ecirc;te.
          </p>
          <p className="text-lg leading-relaxed">
            Ce guide n&rsquo;est pas l&agrave; pour vous juger. Il est l&agrave; pour vous prot&eacute;ger. Nous allons d&eacute;cortiquer ensemble ce que cache l&rsquo;industrie du &laquo;&nbsp;retour affectif&nbsp;&raquo;, pourquoi ces arnaques fonctionnent si bien, et surtout ce que vous pouvez faire <em>r&eacute;ellement</em> pour votre situation amoureuse.
          </p>
        </article>

        <section id="red-flags" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-amber-700">Comment fonctionne l&rsquo;arnaque au retour affectif</h2>
          <p className="text-gray-700 mb-6">
            Les sites et praticiens qui proposent un &laquo;&nbsp;retour affectif&nbsp;&raquo; suivent presque tous le m&ecirc;me sc&eacute;nario. Voici les cinq signaux d&rsquo;alerte &agrave; reconna&icirc;tre imm&eacute;diatement.
          </p>

          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
              <h3 className="font-bold text-red-700 mb-2">1. &laquo;&nbsp;R&eacute;sultat garanti&nbsp;&raquo; ou &laquo;&nbsp;paiement apr&egrave;s r&eacute;sultat&nbsp;&raquo;</h3>
              <p className="text-gray-700">
                C&rsquo;est le signal le plus fiable. Personne ne peut garantir de changer les sentiments d&rsquo;un &ecirc;tre humain. La formule &laquo;&nbsp;paiement apr&egrave;s r&eacute;sultat&nbsp;&raquo; est un m&eacute;canisme d&rsquo;<strong>avance de frais d&eacute;guis&eacute;e</strong>&nbsp;: on vous demandera de &laquo;&nbsp;d&eacute;bloquer&nbsp;&raquo; quelque chose, d&rsquo;acheter des ingr&eacute;dients, de financer un rituel pr&eacute;liminaire. Le &laquo;&nbsp;vrai&nbsp;&raquo; paiement apr&egrave;s r&eacute;sultat n&rsquo;arrive jamais, parce que le r&eacute;sultat n&rsquo;arrive jamais non plus.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
              <h3 className="font-bold text-red-700 mb-2">2. Pression d&rsquo;urgence&nbsp;: &laquo;&nbsp;il faut agir vite&nbsp;&raquo;</h3>
              <p className="text-gray-700">
                &laquo;&nbsp;Si vous n&rsquo;agissez pas maintenant, le lien sera d&eacute;finitivement rompu.&nbsp;&raquo; &laquo;&nbsp;Les astres sont align&eacute;s seulement cette semaine.&nbsp;&raquo; Cette urgence artificielle vise &agrave; court-circuiter votre r&eacute;flexion. Un praticien honn&ecirc;te ne vous mettra jamais sous pression pour d&eacute;cider dans l&rsquo;heure.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
              <h3 className="font-bold text-red-700 mb-2">3. Injonction au secret&nbsp;: &laquo;&nbsp;n&rsquo;en parlez &agrave; personne&nbsp;&raquo;</h3>
              <p className="text-gray-700">
                Si un praticien vous demande de garder le rituel secret &laquo;&nbsp;pour qu&rsquo;il fonctionne&nbsp;&raquo;, c&rsquo;est pour vous isoler de votre entourage. L&rsquo;isolement est une technique d&rsquo;emprise classique que la <strong>MIVILUDES</strong> (Mission interminist&eacute;rielle de vigilance et de lutte contre les d&eacute;rives sectaires) identifie comme un marqueur de d&eacute;rive.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
              <h3 className="font-bold text-red-700 mb-2">4. Co&ucirc;ts qui escaladent&nbsp;: &laquo;&nbsp;un dernier rituel est n&eacute;cessaire&nbsp;&raquo;</h3>
              <p className="text-gray-700">
                Le premier paiement est souvent raisonnable (50 &agrave; 100&nbsp;&euro;) pour vous mettre en confiance. Puis arrivent les complications&nbsp;: &laquo;&nbsp;un blocage karmique plus profond&nbsp;&raquo;, &laquo;&nbsp;un envoutement &agrave; lever d&rsquo;abord&nbsp;&raquo;. Chaque nouveau probl&egrave;me exige un nouveau paiement. Certaines victimes rapportent avoir d&eacute;pens&eacute; plusieurs milliers d&rsquo;euros avant de r&eacute;aliser la supercherie.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
              <h3 className="font-bold text-red-700 mb-2">5. Aucune identit&eacute; v&eacute;rifiable</h3>
              <p className="text-gray-700">
                Pas de nom r&eacute;el, pas d&rsquo;adresse physique, pas de statut professionnel d&eacute;clar&eacute;. Souvent un simple num&eacute;ro de t&eacute;l&eacute;phone ou un profil sur les r&eacute;seaux sociaux avec des t&eacute;moignages impossibles &agrave; v&eacute;rifier. Un praticien l&eacute;gitime n&rsquo;a rien &agrave; cacher.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 mb-8 border-2 border-amber-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Pourquoi ces arnaques fonctionnent</h2>
          <p className="text-gray-700 mb-6">
            Si vous &ecirc;tes arriv&eacute;(e) sur cette page, vous savez d&eacute;j&agrave; ce que c&rsquo;est que de souffrir d&rsquo;une rupture. Les arnaqueurs du retour affectif exploitent des m&eacute;canismes psychologiques bien connus, et les reconna&icirc;tre est la premi&egrave;re &eacute;tape pour s&rsquo;en prot&eacute;ger.
          </p>

          <div className="space-y-4">
            <div className="bg-white border-l-4 border-amber-500 p-5 rounded-lg">
              <h3 className="font-bold text-amber-800 mb-2">La douleur &eacute;motionnelle alt&egrave;re le jugement</h3>
              <p className="text-gray-700">
                Apr&egrave;s une rupture, le cerveau traverse un &eacute;tat comparable au sevrage. L&rsquo;attachement &agrave; l&rsquo;autre cr&eacute;e une d&eacute;pendance neurochimique r&eacute;elle. Dans cet &eacute;tat de d&eacute;tresse, la pens&eacute;e critique s&rsquo;affaiblit et les promesses de &laquo;&nbsp;solution miracle&nbsp;&raquo; deviennent tentantes, m&ecirc;me pour des personnes habituellement lucides.
              </p>
            </div>

            <div className="bg-white border-l-4 border-amber-500 p-5 rounded-lg">
              <h3 className="font-bold text-amber-800 mb-2">Le besoin de reprendre le contr&ocirc;le</h3>
              <p className="text-gray-700">
                Une rupture impose un sentiment d&rsquo;impuissance. Vous ne pouvez pas forcer quelqu&rsquo;un &agrave; revenir. Le retour affectif offre l&rsquo;illusion de reprendre le contr&ocirc;le&nbsp;: &laquo;&nbsp;il suffit de payer ce rituel et tout s&rsquo;arrangera.&nbsp;&raquo; Cette illusion est ce que vous achetez, pas un r&eacute;sultat.
              </p>
            </div>

            <div className="bg-white border-l-4 border-amber-500 p-5 rounded-lg">
              <h3 className="font-bold text-amber-800 mb-2">Le biais de confirmation</h3>
              <p className="text-gray-700">
                Apr&egrave;s avoir pay&eacute; pour un rituel, vous surveillez le moindre signe. Votre ex like une photo sur Instagram&nbsp;? &laquo;&nbsp;Le rituel commence &agrave; agir.&nbsp;&raquo; Un num&eacute;ro inconnu vous appelle&nbsp;? &laquo;&nbsp;C&rsquo;est peut-&ecirc;tre lui/elle.&nbsp;&raquo; Ces co&iuml;ncidences normales deviennent des &laquo;&nbsp;preuves&nbsp;&raquo; qui alimentent la croyance et justifient de continuer &agrave; payer.
              </p>
            </div>

            <div className="bg-white border-l-4 border-amber-500 p-5 rounded-lg">
              <h3 className="font-bold text-amber-800 mb-2">Le pi&egrave;ge des co&ucirc;ts irr&eacute;cup&eacute;rables</h3>
              <p className="text-gray-700">
                &laquo;&nbsp;J&rsquo;ai d&eacute;j&agrave; pay&eacute; 300&nbsp;&euro;, si j&rsquo;arr&ecirc;te maintenant, c&rsquo;est de l&rsquo;argent perdu.&nbsp;&raquo; Ce raisonnement est naturel mais pi&eacute;geur&nbsp;: l&rsquo;argent d&eacute;j&agrave; d&eacute;pens&eacute; l&rsquo;est, que vous continuiez ou non. Chaque euro suppl&eacute;mentaire ne &laquo;&nbsp;sauve&nbsp;&raquo; pas les pr&eacute;c&eacute;dents, il s&rsquo;ajoute aux pertes.
              </p>
            </div>
          </div>
        </section>

        <VoyantQuickCTA topic="reconquete" source="retour-affectif-banner-mid" />

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-amber-700">Ce que la voyance peut vraiment faire pour votre situation</h2>
          <p className="text-gray-700 mb-6">
            Soyons clairs&nbsp;: la voyance honn&ecirc;te ne pr&eacute;tend pas changer les sentiments de quelqu&rsquo;un d&rsquo;autre. Le <strong>libre arbitre</strong> de votre ex n&rsquo;est pas quelque chose que quiconque peut manipuler, ni par un rituel, ni par un sort, ni par une pri&egrave;re. Mais la voyance peut faire autre chose de bien plus utile.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-xl mb-4 text-green-700">Ce que la voyance PEUT faire</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="text-green-600 mt-1 font-bold">&#10003;</div>
                  <div className="text-gray-700">
                    <strong>Clarifier votre &eacute;tat &eacute;motionnel</strong> et vous aider &agrave; distinguer l&rsquo;amour v&eacute;ritable de la d&eacute;pendance affective.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-green-600 mt-1 font-bold">&#10003;</div>
                  <div className="text-gray-700">
                    <strong>&Eacute;clairer les dynamiques de votre relation</strong> et les raisons profondes de la rupture.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-green-600 mt-1 font-bold">&#10003;</div>
                  <div className="text-gray-700">
                    <strong>Vous aider &agrave; d&eacute;cider</strong>&nbsp;: est-ce que vous voulez vraiment reconqu&eacute;rir cette personne, ou traverser le deuil et avancer&nbsp;?
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-green-600 mt-1 font-bold">&#10003;</div>
                  <div className="text-gray-700">
                    <strong>Accompagner le processus de gu&eacute;rison</strong> &eacute;motionnelle avec empathie et guidance personnalis&eacute;e.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
              <h3 className="font-bold text-xl mb-4 text-red-700">Ce que la voyance NE PEUT PAS faire</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="text-red-600 mt-1 font-bold">&#10007;</div>
                  <div className="text-gray-700">
                    <strong>Forcer quelqu&rsquo;un &agrave; revenir</strong> vers vous par un rituel, un sort ou un travail occulte.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-red-600 mt-1 font-bold">&#10007;</div>
                  <div className="text-gray-700">
                    <strong>Modifier le libre arbitre</strong> d&rsquo;une autre personne, quelle que soit la m&eacute;thode.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-red-600 mt-1 font-bold">&#10007;</div>
                  <div className="text-gray-700">
                    <strong>Garantir un r&eacute;sultat pr&eacute;cis</strong> (&laquo;&nbsp;votre ex revient dans 7 jours&nbsp;&raquo;).
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-red-600 mt-1 font-bold">&#10007;</div>
                  <div className="text-gray-700">
                    <strong>Remplacer un suivi psychologique</strong> si vous traversez une d&eacute;tresse profonde.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700">
            Si vous souhaitez sinc&egrave;rement reconqu&eacute;rir votre ex, des strat&eacute;gies concr&egrave;tes existent. Elles passent par le travail sur soi, la compr&eacute;hension des causes de la rupture et une communication adapt&eacute;e. Notre guide complet sur <Link href="/reconquete/reconquerir-son-ex/" className="text-amber-700 hover:text-amber-900 underline font-medium">comment reconqu&eacute;rir son ex</Link> vous donne des pistes honn&ecirc;tes et &eacute;prouv&eacute;es. Vous pouvez aussi consulter notre analyse <Link href="/reconquete/va-t-il-elle-revenir/" className="text-amber-700 hover:text-amber-900 underline font-medium">va-t-il/elle revenir</Link> pour y voir plus clair sur votre situation.
          </p>
        </section>

        <VoyantRecommendations topic="reconquete" limit={3} showOnlineFirst={true} source="retour-affectif-cards" />

        <section id="protection" className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 mb-8 border-2 border-green-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Prot&eacute;gez-vous</h2>
          <p className="text-gray-700 mb-6">
            Que vous ayez d&eacute;j&agrave; pay&eacute; pour un retour affectif ou que vous soyez tent&eacute;(e) de le faire, voici les r&eacute;flexes &agrave; adopter.
          </p>

          <div className="space-y-4">
            <div className="bg-white border-l-4 border-green-500 p-5 rounded-lg">
              <h3 className="font-bold text-green-800 mb-2">Ne payez jamais pour un &laquo;&nbsp;r&eacute;sultat garanti&nbsp;&raquo;</h3>
              <p className="text-gray-700">
                Aucun voyant, aucun marabout, aucun praticien au monde ne peut garantir de changer les sentiments d&rsquo;une autre personne. Si on vous le promet, c&rsquo;est un mensonge, et c&rsquo;est votre argent qu&rsquo;on vise.
              </p>
            </div>

            <div className="bg-white border-l-4 border-green-500 p-5 rounded-lg">
              <h3 className="font-bold text-green-800 mb-2">Parlez-en &agrave; quelqu&rsquo;un de confiance</h3>
              <p className="text-gray-700">
                Si un praticien vous demande le secret, c&rsquo;est pr&eacute;cis&eacute;ment le moment d&rsquo;en parler. Un ami, un proche, un professionnel de sant&eacute;&nbsp;: un regard ext&eacute;rieur vous aidera &agrave; &eacute;valuer la situation avec recul. L&rsquo;isolement est l&rsquo;alli&eacute; des manipulateurs.
              </p>
            </div>

            <div className="bg-white border-l-4 border-green-500 p-5 rounded-lg">
              <h3 className="font-bold text-green-800 mb-2">Signalez les d&eacute;rives</h3>
              <p className="text-gray-700">
                La <strong>MIVILUDES</strong> (www.miviludes.interieur.gouv.fr) recueille les signalements de d&eacute;rives sectaires et de manipulation mentale, y compris dans le domaine des pratiques occultes. Si vous avez &eacute;t&eacute; victime d&rsquo;une arnaque au retour affectif, vous pouvez &eacute;galement contacter une <strong>association d&rsquo;aide aux victimes</strong> ou d&eacute;poser plainte.
              </p>
            </div>

            <div className="bg-white border-l-4 border-green-500 p-5 rounded-lg">
              <h3 className="font-bold text-green-800 mb-2">Si vous avez d&eacute;j&agrave; pay&eacute;</h3>
              <p className="text-gray-700">
                Contactez votre banque pour signaler la transaction et demander une opposition ou un remboursement (chargeback). Conservez toutes les preuves&nbsp;: messages, re&ccedil;us, &eacute;changes. Plus vous agissez vite, plus vos chances de r&eacute;cup&eacute;rer votre argent sont &eacute;lev&eacute;es. N&rsquo;ayez aucune honte&nbsp;: les arnaqueurs sont des professionnels de la manipulation, et des personnes tr&egrave;s intelligentes tombent dans leurs filets.
              </p>
            </div>

            <div className="bg-white border-l-4 border-green-500 p-5 rounded-lg">
              <h3 className="font-bold text-green-800 mb-2">Prenez soin de votre sant&eacute; mentale</h3>
              <p className="text-gray-700">
                La souffrance d&rsquo;une rupture est r&eacute;elle et m&eacute;rite un accompagnement s&eacute;rieux. Un psychologue ou un th&eacute;rapeute peut vous aider &agrave; traverser cette p&eacute;riode. La voyance peut compl&eacute;ter cette d&eacute;marche avec de la guidance &eacute;motionnelle, mais elle ne la remplace pas quand la d&eacute;tresse est profonde.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-amber-700">Avancer honn&ecirc;tement apr&egrave;s une rupture</h2>
          <p className="text-gray-700 mb-6">
            Plut&ocirc;t que de chercher une solution magique, voici des ressources concr&egrave;tes pour traverser cette p&eacute;riode difficile.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/reconquete/" className="block bg-purple-50 p-5 rounded-lg border border-purple-200 hover:shadow-md transition">
              <h3 className="font-bold text-purple-800 mb-1">Reconqu&ecirc;te amoureuse</h3>
              <p className="text-sm text-gray-700">Strat&eacute;gies honn&ecirc;tes pour reconqu&eacute;rir un ex, sans manipulation ni fausses promesses.</p>
            </Link>
            <Link href="/reconquete/reconquerir-son-ex/" className="block bg-purple-50 p-5 rounded-lg border border-purple-200 hover:shadow-md transition">
              <h3 className="font-bold text-purple-800 mb-1">Reconqu&eacute;rir son ex</h3>
              <p className="text-sm text-gray-700">Le guide complet&nbsp;: silence radio, travail sur soi, reprise de contact.</p>
            </Link>
            <Link href="/rupture/oublier-son-ex/" className="block bg-blue-50 p-5 rounded-lg border border-blue-200 hover:shadow-md transition">
              <h3 className="font-bold text-blue-800 mb-1">Oublier son ex</h3>
              <p className="text-sm text-gray-700">Quand la reconqu&ecirc;te n&rsquo;est pas la bonne option, apprendre &agrave; tourner la page.</p>
            </Link>
            <Link href="/voyance-gratuite-amour/" className="block bg-emerald-50 p-5 rounded-lg border border-emerald-200 hover:shadow-md transition">
              <h3 className="font-bold text-emerald-800 mb-1">Voyance gratuite amour</h3>
              <p className="text-sm text-gray-700">Tirages gratuits pour une premi&egrave;re guidance, sans engagement ni arnaque.</p>
            </Link>
          </div>
        </section>

    </ContentPage>
  );
}
