import Link from 'next/link';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import ContentPage, { contentMeta, type ContentPageConfig } from '@/components/ContentPage';

const config: ContentPageConfig = {
  title: 'Que ressent-il/elle pour moi ? voyance sentiments',
  description: 'Découvrez la nature exacte de ses sentiments grâce au tarot : amour, attachement, désir ou indifférence. Tirage spécifique et signes révélateurs.',
  url: 'https://www.voyantlove.fr/sentiments/que-ressent-il-elle-pour-moi/',
  keywords: ['que ressent-il pour moi', 'que ressent-elle pour moi voyance', 'ses sentiments pour moi tarot', 'nature de ses sentiments', 'voyance émotions'],
  datePublished: '2026-07-22',
  dateModified: '2026-07-22',
  breadcrumb: [
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Sentiments', url: 'https://www.voyantlove.fr/sentiments/' },
    { name: 'Que Ressent-il/elle pour Moi ?', url: 'https://www.voyantlove.fr/sentiments/que-ressent-il-elle-pour-moi/' },
  ],
  header: {
    emoji: '',
    h1: 'Que ressent-il/elle pour moi ?',
    subtitle: 'La nature exacte de ses sentiments révélée par le tarot',
    gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
    backLink: { href: '/sentiments/', label: 'Retour aux sentiments' },
    anchors: [
      { href: '#nature', label: 'Tirage des sentiments', primary: true },
      { href: '#signes', label: 'Signes révélateurs' },
    ],
  },
  accentText: 'text-rose-600',
  stats: [
    { icon: '', value: 'Reconnue', label: 'Expertise' },
    { icon: '', value: '3,900+', label: 'Tirages réalisés' },
    { icon: '', value: '4.7/5', label: '298 Avis' },
    { icon: '', value: '100%', label: 'Confidentiel' },
  ],
  eeat: { colorScheme: 'rose', method: 'Tarot des émotions et lecture énergétique' },
  cta: { topic: 'sentiments', slug: 'que-ressent-il-elle' },
  faq: [
    {
      q: 'Comment savoir ce qu\'il/elle ressent vraiment pour moi ?',
      a: 'Le tarot des émotions utilise un tirage en quatre positions pour identifier la nature exacte de ses sentiments : intensité, type d\'émotion, blocages éventuels et évolution probable. Des cartes comme L\'Amoureux ou la Reine de Coupe indiquent un amour sincère, tandis que Le Pendu ou Le Diable révèlent un attachement ambivalent. Le voyant distingue ainsi l\'amour véritable de la simple habitude ou du désir passager, en s\'appuyant sur la symbolique précise de chaque arcane.',
    },
    {
      q: 'Quelle est la différence entre amour et attachement ?',
      a: 'L\'amour véritable se caractérise par un désir de faire grandir l\'autre, une admiration sincère et une envie de construire un avenir commun. L\'attachement, lui, repose davantage sur l\'habitude, la peur de la solitude ou le confort relationnel, sans réelle profondeur émotionnelle. Le tarot distingue ces deux énergies grâce à des cartes spécifiques : Le Soleil et Les Amoureux pour l\'amour authentique, La Lune ou le Quatre de Coupe pour l\'attachement par confort.',
    },
    {
      q: 'Peut-il/elle ressentir quelque chose sans le montrer ?',
      a: 'Oui, de nombreuses personnes dissimulent leurs sentiments par peur du rejet, blessure passée ou pudeur émotionnelle. La voyance permet de percevoir des émotions non exprimées consciemment, y compris chez les personnes les plus fermées. Le tirage tarot révèle les sentiments enfouis derrière une attitude distante ou évasive, en captant l\'énergie réelle plutôt que le comportement visible en surface.',
    },
    {
      q: 'Ses sentiments peuvent-ils changer avec le temps ?',
      a: 'Les sentiments évoluent naturellement selon le vécu commun, les épreuves traversées et le temps passé ensemble. Un attachement initial peut se transformer en amour profond, tout comme une passion intense peut s\'éteindre si elle n\'est pas nourrie. Le tarot offre une photographie de l\'état émotionnel actuel et des tendances d\'évolution, mais l\'engagement mutuel reste déterminant pour la direction que prennent ces sentiments.',
    },
    {
      q: 'Comment le tarot distingue-t-il désir et amour véritable ?',
      a: 'Le désir se manifeste par des cartes comme Le Diable ou l\'As de Bâton, associées à l\'attraction physique et à l\'urgence émotionnelle, souvent sans vision d\'avenir partagée. L\'amour véritable s\'exprime à travers Les Amoureux, Le Soleil ou la Justice, cartes liées à l\'équilibre, la réciprocité et la construction durable. Le voyant analyse la combinaison des arcanes pour déterminer si l\'énergie dominante est celle d\'une attirance passagère ou d\'un attachement profond et sincère.',
    },
  ],
  related: [
    { href: '/sentiments/', label: 'Sentiments amoureux : toutes nos guidances' },
    { href: '/sentiments/maime-t-il-elle/', label: 'M\'aime-t-il/elle vraiment ?' },
    { href: '/sentiments/pense-t-il-elle-a-moi/', label: 'Pense-t-il/elle à moi ?' },
    { href: '/sentiments/compatibilite-amoureuse/', label: 'Notre compatibilité amoureuse' },
    { href: '/sentiments/avenir-amoureux/', label: 'Mon avenir amoureux' },
  ],
};

export const metadata = contentMeta(config);

export default function QueRessentIlEllePourMoiPage() {

  return (
    <ContentPage config={config}>

        {/* Answer Capsule */}
        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-rose-500">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-4">
              Savoir qu&apos;une personne pense à vous ou vous aime ne suffit pas toujours : la vraie question est souvent <strong>&laquo;que ressent-il/elle pour moi&raquo;</strong> exactement. Entre <strong>amour véritable</strong>, simple <strong>attachement</strong>, <strong>désir passager</strong> ou <strong>indifférence polie</strong>, la nuance change tout pour la suite de votre relation. Le <strong>tarot des émotions</strong> permet de cartographier précisément la nature de ce que ressent l&apos;autre, au-delà des mots et des comportements parfois trompeurs.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Une <strong>lecture énergétique</strong> distingue les émotions superficielles des sentiments profondément ancrés. Pour comprendre si ces sentiments sont réciproques ou si vous projetez vos propres attentes, notre guidance sur <Link href="/sentiments/maime-t-il-elle/" className="text-rose-600 hover:text-rose-800 underline font-medium">m&apos;aime-t-il/elle vraiment</Link> complète parfaitement cette analyse.
            </p>
            <p className="text-lg leading-relaxed">
              Que vous soyez au début d&apos;une relation ambiguë ou que vous cherchiez à comprendre un silence inexpliqué, la <strong>voyance sentimentale</strong> et le <strong>tirage tarot</strong> offrent une lecture claire de ce qui se joue dans le cœur de cette personne, entre <strong>confusion émotionnelle</strong> et vérité cachée.
            </p>
          </div>
        </article>

        <VoyantRecommendations topic="sentiments" limit={3} showOnlineFirst={true} source="que-ressent-il-elle-pour-moi-cards-top" />

        {/* H2: Les Sentiments Possibles */}
        <section id="nature" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{''} Les Différents Types de Sentiments Possibles</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Amour veritable, attachement par habitude, desir passager, culpabilite ou indifference : chaque type de sentiment se manifeste differemment et le tarot permet de les distinguer avec precision.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Toutes les émotions ne se valent pas et ne mènent pas au même avenir. Voici les principales <strong>natures de sentiments</strong> que le tarot peut identifier chez la personne qui vous intéresse.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-rose-50 border-2 border-rose-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-rose-700">{''} Amour Véritable</h3>
              <p className="text-gray-700 text-sm mb-2">
                Un <strong>amour sincère</strong> se caractérise par le désir de voir l&apos;autre s&apos;épanouir, une admiration profonde et une envie de bâtir un avenir commun. Les cartes du <strong>Soleil</strong> et des <strong>Amoureux</strong> confirment cette énergie équilibrée et durable.
              </p>
              <p className="text-rose-600 text-sm italic">Signal fort : constance et réciprocité dans le temps.</p>
            </div>
            <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-purple-700">Attachement par Habitude</h3>
              <p className="text-gray-700 text-sm mb-2">
                L&apos;<strong>attachement</strong> repose sur le confort, la peur du changement ou la solitude, sans profondeur émotionnelle réelle. Le <strong>Quatre de Coupe</strong> et La Lune signalent souvent cette énergie de routine plutôt que de passion.
              </p>
              <p className="text-purple-600 text-sm italic">À distinguer d&apos;un amour construit dans la durée.</p>
            </div>
            <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-orange-700">Désir Passager</h3>
              <p className="text-gray-700 text-sm mb-2">
                Le <strong>désir physique</strong> et l&apos;attraction immédiate se lisent à travers <strong>Le Diable</strong> ou l&apos;As de Bâton. Cette énergie intense manque souvent de vision d&apos;avenir partagée et peut s&apos;éteindre rapidement.
              </p>
              <p className="text-orange-600 text-sm italic">Intense mais rarement durable sans autre fondation.</p>
            </div>
            <div className="bg-indigo-50 border-2 border-indigo-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-indigo-700">Confusion et Indifférence</h3>
              <p className="text-gray-700 text-sm mb-2">
                Certaines personnes ressentent une <strong>indifférence réelle</strong> masquée par politesse, ou traversent une <strong>confusion émotionnelle</strong> profonde. Le Pendu et le Deux d&apos;Épée indiquent une incapacité à trancher plutôt qu&apos;un vrai désintérêt.
              </p>
              <p className="text-indigo-600 text-sm italic">Important de distinguer indifférence et hésitation.</p>
            </div>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <p className="text-gray-700"><strong>À retenir :</strong> Une même personne peut ressentir plusieurs de ces émotions simultanément, en proportions variables. Le tarot mesure l&apos;<strong>énergie dominante</strong> plutôt qu&apos;une émotion unique et figée.</p>
          </div>
        </section>

        {/* H2: Le Tirage Tarot */}
        <section className="bg-gradient-to-br from-rose-50 to-purple-50 rounded-xl p-8 mb-8 border-2 border-rose-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Le Tirage Tarot des Sentiments</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Le tirage en quatre positions analyse l&apos;intensite de ses sentiments, leur nature exacte, les blocages emotionnels presents et leur evolution probable dans les prochaines semaines.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ce <strong>tirage à quatre positions</strong> capte l&apos;état émotionnel réel de la personne, au-delà de ce qu&apos;elle exprime ou dissimule consciemment.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-rose-500">
              <h3 className="font-bold text-lg mb-3 text-rose-700">Position 1 : Intensité</h3>
              <p className="text-gray-700 text-sm mb-2">
                Cette carte mesure la <strong>force du sentiment</strong> ressenti. La Reine de Coupe indique une émotion profonde et stable. Le Deux de Coupe montre un lien naissant en construction.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-purple-500">
              <h3 className="font-bold text-lg mb-3 text-purple-700">Position 2 : Nature</h3>
              <p className="text-gray-700 text-sm mb-2">
                Le <strong>type d&apos;émotion</strong> dominant : amour, attachement, désir ou culpabilité. Les Amoureux confirment un sentiment sincère et réciproque.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-fuchsia-500">
              <h3 className="font-bold text-lg mb-3 text-fuchsia-700">Position 3 : Blocages</h3>
              <p className="text-gray-700 text-sm mb-2">
                Cette position révèle les <strong>freins émotionnels</strong> : peur de souffrir, blessure passée, conflit intérieur. La Tour signale un obstacle majeur à surmonter.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-indigo-500">
              <h3 className="font-bold text-lg mb-3 text-indigo-700">Position 4 : Évolution</h3>
              <p className="text-gray-700 text-sm mb-2">
                La carte finale indique la <strong>tendance à venir</strong> : approfondissement, stagnation ou refroidissement du lien dans les semaines suivantes.
              </p>
            </div>
          </div>
        </section>

        <VoyantQuickCTA topic="sentiments" source="que-ressent-il-elle-pour-moi-banner-mid" />

        {/* H2: Attachement ou Amour */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{''} Attachement ou Amour Véritable : Comment Distinguer</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">L&apos;amour veritable pousse a faire grandir l&apos;autre tandis que l&apos;attachement repose sur le confort et la peur de la solitude. Le tarot distingue ces deux energies grace a des cartes specifiques.</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Confondre <strong>attachement</strong> et <strong>amour véritable</strong> est une erreur fréquente qui entretient des relations déséquilibrées. L&apos;amour sincère se nourrit de l&apos;épanouissement mutuel, tandis que l&apos;attachement se nourrit souvent de la peur : peur de perdre l&apos;autre, peur de rester seul(e), peur du changement. Pour approfondir cette distinction dans votre propre relation, consultez notre guide sur la <Link href="/sentiments/compatibilite-amoureuse/" className="text-rose-600 hover:text-rose-800 underline font-medium">compatibilité amoureuse</Link>.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="font-bold text-lg mb-3 text-green-700">{''} Signes d&apos;Amour Véritable</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&bull; <strong>Volonté de vous faire grandir</strong> et de vous soutenir</li>
                <li>&bull; Curiosité sincère pour votre univers intérieur</li>
                <li>&bull; Projets d&apos;avenir évoqués naturellement</li>
                <li>&bull; <strong>Constance</strong> dans l&apos;attention portée</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500">
              <h3 className="font-bold text-lg mb-3 text-orange-700">{''} Signes d&apos;Attachement</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>&bull; <strong>Présence par confort</strong>, sans réel enthousiasme</li>
                <li>&bull; Peur exprimée de la solitude plus que de vous perdre</li>
                <li>&bull; Absence de projets concrets partagés</li>
                <li>&bull; <strong>Intermittence</strong> dans l&apos;implication émotionnelle</li>
              </ul>
            </div>
          </div>
        </section>

        {/* H2: Les Signes */}
        <section id="signes" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{'️'} Les Signes Comportementaux qui Trahissent ses Sentiments</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Regard soutenu, disponibilite spontanee, memoire des details et langage corporel ouvert sont des indices comportementaux fiables pour comprendre la nature reelle de ses sentiments.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Au-delà du tarot, certains comportements observables donnent des indices précieux sur la nature de ses <strong>sentiments réels</strong>. Ces <Link href="/sentiments/signes-il-elle-maime/" className="text-rose-600 hover:text-rose-800 underline font-medium">signes concrets d&apos;amour</Link> permettent de croiser l&apos;analyse énergétique avec des observations tangibles.
          </p>
          <div className="space-y-4">
            <div className="bg-rose-50 border-l-4 border-rose-500 p-5 rounded">
              <h3 className="font-bold mb-2 text-rose-700">Regard et Attention Soutenue</h3>
              <p className="text-gray-700 text-sm">Un <strong>regard prolongé</strong>, une écoute active et une mémoire précise des détails que vous partagez trahissent un intérêt émotionnel sincère, bien plus fiable que les mots seuls.</p>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded">
              <h3 className="font-bold mb-2 text-purple-700">{''} Disponibilité Spontanée</h3>
              <p className="text-gray-700 text-sm">Une personne qui ressent un <strong>attachement sincère</strong> se rend disponible sans calcul, réorganise son emploi du temps et initie le contact régulièrement, sans qu&apos;on le lui demande.</p>
            </div>
            <div className="bg-fuchsia-50 border-l-4 border-fuchsia-500 p-5 rounded">
              <h3 className="font-bold mb-2 text-fuchsia-700">Vulnérabilité Partagée</h3>
              <p className="text-gray-700 text-sm">Le partage de <strong>confidences personnelles</strong> et de vulnérabilités témoigne d&apos;une confiance émotionnelle qui dépasse largement l&apos;attirance physique ou l&apos;habitude sociale.</p>
            </div>
          </div>
          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <p className="text-gray-700"><strong>{''} Attention :</strong> Ces signes doivent être observés dans la durée, pas isolément. Une seule attention ponctuelle ne suffit pas à conclure sur la nature de ses <strong>sentiments profonds</strong>. Pour savoir si cette énergie évoluera vers un engagement, découvrez notre guidance sur l&apos;<Link href="/sentiments/avenir-amoureux/" className="text-rose-600 hover:text-rose-800 underline font-medium">avenir de votre relation</Link>.</p>
          </div>
        </section>

      </ContentPage>
  );
}
