import Link from 'next/link';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import ContentPage, { contentMeta, type ContentPageConfig } from '@/components/ContentPage';

const config: ContentPageConfig = {
  railsTop: 'suis-je-medium-comment-savoir-cards-top',
  title: 'Suis-je médium ? comment savoir en amour',
  description: 'Comment savoir si l\'on est médium ? Les signes d\'une sensibilité médiumnique dans votre vie sentimentale : empathie intense, intuitions, rêves prémonitoires.',
  url: 'https://www.voyantlove.fr/methodes-voyance/suis-je-medium-comment-savoir/',
  keywords: ['suis-je médium', 'comment savoir si on est médium', 'signes de médiumnité', 'don de médium amour', 'suis-je empathe'],
  datePublished: '2026-08-07',
  dateModified: '2026-08-07',
  breadcrumb: [
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Méthodes de Voyance', url: 'https://www.voyantlove.fr/methodes-voyance/' },
    { name: 'Suis-je Médium ?', url: 'https://www.voyantlove.fr/methodes-voyance/suis-je-medium-comment-savoir/' },
  ],
  header: {
    emoji: '🌙',
    h1: 'Suis-je médium ? comment le savoir',
    subtitle: 'Les signes d\'une sensibilité médiumnique dans votre vie sentimentale',
    gradient: 'from-violet-700 via-fuchsia-700 to-purple-800',
    backLink: { href: '/methodes-voyance/', label: 'Retour aux méthodes de voyance' },
    anchors: [
      { href: '#signes', label: 'Les signes à observer', primary: true },
      { href: '#distinguer', label: 'Empathe ou médium ?' },
    ],
  },
  accentText: 'text-purple-700',
  stats: [
    { icon: '🌙', value: 'Auto-diagnostic', label: 'Pas un verdict figé' },
    { icon: '💓', value: 'Empathie', label: 'Signe le plus cité' },
    { icon: '🌌', value: 'Récurrence', label: 'Clé de lecture' },
    { icon: '🕊️', value: 'Prudence', label: 'Sans excès d\'interprétation' },
  ],
  eeat: { colorScheme: 'purple', method: 'Médiumnité et sensibilité intuitive en amour' },
  cta: { topic: 'methodes-voyance', slug: 'suis-je-medium' },
  faq: [
    {
      q: 'Comment savoir si l\'on est médium ?',
      a: 'Il n\'existe pas de test unique et définitif, mais plusieurs signes récurrents sont évoqués par les personnes qui se découvrent une sensibilité médiumnique : une empathie si intense qu\'elle confond ses propres émotions avec celles des autres, des intuitions qui se vérifient après coup, des rêves prémonitoires marquants, ou la capacité à "sentir" l\'ambiance d\'un lieu ou l\'état intérieur d\'une personne avant qu\'elle ne s\'exprime. Aucun de ces signes pris isolément n\'est une preuve : c\'est leur récurrence et leur intensité qui orientent vers cette hypothèse.',
    },
    {
      q: 'Être très empathique en amour signifie-t-il être médium ?',
      a: 'Pas nécessairement. Une empathie développée est un trait de sensibilité que beaucoup de personnes possèdent sans se considérer médiums. Ce qui distingue une sensibilité médiumnique évoquée par certains praticiens, c\'est la nature de la perception : au-delà de "comprendre" ce que l\'autre ressent par déduction ou par observation, il s\'agit de "ressentir" une information de façon directe, parfois sur une personne éloignée ou absente, sans indice rationnel apparent.',
    },
    {
      q: 'Peut-on développer un don de médiumnité ou naît-on médium ?',
      a: 'Les praticiens qui enseignent la médiumnité décrivent généralement les deux cas de figure : certaines personnes rapportent une sensibilité présente depuis l\'enfance, tandis que d\'autres estiment avoir développé ou affiné cette perception avec le temps, par la méditation, l\'attention portée à leurs ressentis, ou un accompagnement. Dans les deux cas, la démarche la plus prudente consiste à observer ses propres expériences dans la durée plutôt que de se fier à une conviction immédiate.',
    },
    {
      q: 'Que faire si je pense avoir un don de médium ?',
      a: 'Commencez par noter vos intuitions et leur degré de justesse dans le temps, sans pression ni attente de résultat. Si cette sensibilité vous intrigue, échanger avec un médium expérimenté peut vous aider à mettre des mots sur ce que vous vivez et à distinguer une perception réelle d\'une simple anxiété ou d\'un biais d\'interprétation. Cette démarche reste avant tout personnelle : elle ne nécessite ni validation extérieure ni urgence à "prouver" quoi que ce soit.',
    },
  ],
  related: [
    { href: '/methodes-voyance/', label: 'Toutes les méthodes de voyance amoureuse' },
    { href: '/methodes-voyance/medium-amour/', label: 'Médium amour : consultation et guidance' },
    { href: '/methodes-voyance/medium-amour/#sans-support', label: 'Médium sans support : la voyance sans outils' },
    { href: '/methodes-voyance/voyance-sentimentale/', label: 'Voyance sentimentale' },
    { href: '/glossaire/clairvoyance/', label: 'Glossaire : clairvoyance' },
    { href: '/glossaire/channeling/', label: 'Glossaire : channeling' },
  ],
};

export const metadata = contentMeta(config);

export default function SuisJeMediumPage() {
  return (
    <ContentPage config={config}>
        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-purple-700">
          <p className="text-lg leading-relaxed mb-4">
            &laquo;&nbsp;<strong>Comment savoir si l&apos;on est médium</strong>&nbsp;?&nbsp;&raquo; est une question que beaucoup de personnes se posent, souvent d&eacute;clench&eacute;e par une <strong>intuition</strong> troublante v&eacute;rifi&eacute;e apr&egrave;s coup, une <strong>empathie</strong> qui d&eacute;borde le cadre habituel, ou la sensation r&eacute;currente de percevoir les <strong>&eacute;motions</strong> d&apos;un proche &mdash; en particulier d&apos;un partenaire &mdash; avant m&ecirc;me qu&apos;il ne les exprime. Contrairement &agrave; une consultation avec un <Link href="/methodes-voyance/medium-amour/" className="text-purple-700 hover:text-purple-900 underline font-medium">m&eacute;dium professionnel</Link>, cette page s&apos;adresse &agrave; celles et ceux qui se demandent s&apos;ils poss&egrave;dent eux-m&ecirc;mes cette sensibilit&eacute;.
          </p>
          <p className="text-lg leading-relaxed">
            Il n&apos;existe pas de test scientifique validant un &laquo;&nbsp;don de m&eacute;dium&nbsp;&raquo;. Cette guidance recense les <strong>signes les plus souvent d&eacute;crits</strong> par les praticiens et les personnes qui se sont interrog&eacute;es sur leur propre sensibilit&eacute;, avec la prudence n&eacute;cessaire face &agrave; un sujet qui ne se r&eacute;duit pas &agrave; une case coch&eacute;e.
          </p>
        </article>


        {/* Section 1: Signes */}
        <section id="signes" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">✨ Les Signes Souvent Associés à une Sensibilité Médiumnique</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Aucun signe isolé ne suffit : c&apos;est la récurrence de plusieurs de ces expériences, en particulier dans vos relations, qui oriente vers l&apos;hypothèse d&apos;une sensibilité médiumnique.</p>
          <div className="space-y-4">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-purple-800">💓 Une empathie qui dépasse la compréhension</h3>
              <p className="text-gray-700 text-sm">Vous ne comprenez pas seulement ce que ressent votre partenaire, vous le ressentez dans votre propre corps &mdash; une lourdeur, une tension, une joie soudaine sans cause apparente qui appartient en r&eacute;alit&eacute; &agrave; l&apos;autre personne.</p>
            </div>
            <div className="bg-fuchsia-50 border-l-4 border-fuchsia-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-fuchsia-800">🌙 Des rêves qui se vérifient</h3>
              <p className="text-gray-700 text-sm">Certains r&ecirc;ves r&eacute;currents ou particuli&egrave;rement vivants concernant une relation semblent, apr&egrave;s coup, avoir anticip&eacute; une situation r&eacute;elle&nbsp;: une rupture, une rencontre, un retour inattendu.</p>
            </div>
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-indigo-800">🔔 Des intuitions qui se confirment</h3>
              <p className="text-gray-700 text-sm">Un pressentiment concernant une personne &mdash; &laquo;&nbsp;quelque chose ne va pas&nbsp;&raquo;, &laquo;&nbsp;cette personne va m&apos;appeler&nbsp;&raquo; &mdash; se v&eacute;rifie avec une fr&eacute;quence qui d&eacute;passe la simple co&iuml;ncidence &agrave; vos yeux.</p>
            </div>
            <div className="bg-violet-50 border-l-4 border-violet-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-violet-800">🌡️ Une sensibilité aux ambiances et aux énergies</h3>
              <p className="text-gray-700 text-sm">Vous percevez tr&egrave;s vite la tension ou l&apos;harmonie d&apos;un lieu ou d&apos;un groupe en entrant dans une pi&egrave;ce, avant m&ecirc;me d&apos;avoir &eacute;chang&eacute; un mot avec qui que ce soit.</p>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-purple-800">🕰️ Une sensibilité présente depuis l&apos;enfance</h3>
              <p className="text-gray-700 text-sm">Beaucoup de personnes qui se d&eacute;crivent m&eacute;diums rapportent avoir per&ccedil;u ce type d&apos;informations d&egrave;s l&apos;enfance, parfois sans les nommer ni comprendre ce qu&apos;elles vivaient &agrave; l&apos;&eacute;poque.</p>
            </div>
          </div>
          <div className="bg-purple-100 border-l-4 border-purple-600 p-5 rounded-lg mt-6">
            <p className="text-gray-700"><strong>Important&nbsp;:</strong> ces signes sont largement partag&eacute;s par des personnes simplement tr&egrave;s sensibles ou tr&egrave;s intuitives, sans qu&apos;elles se consid&egrave;rent m&eacute;diums pour autant. C&apos;est pourquoi la nuance suivante compte.</p>
          </div>
        </section>

        {/* Section 2: Distinguer */}
        <section id="distinguer" className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-xl p-8 mb-8 border-2 border-purple-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">⚖️ Empathe, Intuitif ou Médium : Où Est la Frontière ?</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">La frontière entre grande sensibilité, intuition développée et médiumnité reste floue et débattue même parmi les praticiens ; elle tient surtout à la nature et à la source perçue de l&apos;information.</p>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-white rounded-lg p-5 border-2 border-purple-300">
              <h3 className="font-bold text-lg mb-3 text-purple-700">💗 Empathe</h3>
              <p className="text-gray-700 text-sm">Ressent intens&eacute;ment les &eacute;motions des autres, souvent par contact direct ou proximit&eacute;. La perception reste g&eacute;n&eacute;ralement li&eacute;e &agrave; une pr&eacute;sence physique ou &eacute;motionnelle imm&eacute;diate.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-2 border-fuchsia-300">
              <h3 className="font-bold text-lg mb-3 text-fuchsia-700">✨ Intuitif</h3>
              <p className="text-gray-700 text-sm">Per&ccedil;oit des informations ou des pressentiments sans pouvoir les justifier rationnellement, mais sans n&eacute;cessairement les attribuer &agrave; une source ext&eacute;rieure &agrave; sa propre psych&eacute;.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-2 border-indigo-300">
              <h3 className="font-bold text-lg mb-3 text-indigo-700">🕊️ Médium</h3>
              <p className="text-gray-700 text-sm">D&eacute;crit une perception qui semble provenir d&apos;une source ext&eacute;rieure &agrave; sa propre pens&eacute;e &mdash; une information re&ccedil;ue plut&ocirc;t que d&eacute;duite. Pour en savoir plus sur cette distinction, consultez notre guide <Link href="/methodes-voyance/medium-amour/" className="underline hover:text-indigo-900 font-medium">m&eacute;dium en amour</Link>.</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-6">
            Ces trois profils ne s&apos;excluent pas&nbsp;: une m&ecirc;me personne peut se reconna&icirc;tre dans les trois &agrave; des degr&eacute;s divers. L&apos;essentiel n&apos;est pas de se ranger dans une case, mais de mieux comprendre sa propre <strong>sensibilit&eacute;</strong> pour mieux la vivre, en particulier dans ses <strong>relations amoureuses</strong> o&ugrave; cette perception accrue peut &ecirc;tre autant une force qu&apos;une source de fatigue &eacute;motionnelle.
          </p>
        </section>

        <VoyantQuickCTA topic="methodes-voyance" source="suis-je-medium-comment-savoir-banner-mid" />

        {/* Section 3: Que faire */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🧭 Que Faire de Cette Sensibilité en Amour</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Observer, noter et prendre du recul sont les trois réflexes les plus utiles avant de tirer une conclusion sur sa propre sensibilité médiumnique.</p>
          <div className="space-y-4">
            <div className="bg-purple-50 rounded-lg p-5 border-l-4 border-purple-400">
              <h3 className="font-bold text-purple-700 mb-1">1. Observer sans forcer</h3>
              <p className="text-gray-700 text-sm">Notez vos intuitions et ressentis au fil du temps, sans chercher &agrave; provoquer des perceptions ni &agrave; les surinterpr&eacute;ter dans l&apos;instant.</p>
            </div>
            <div className="bg-fuchsia-50 rounded-lg p-5 border-l-4 border-fuchsia-400">
              <h3 className="font-bold text-fuchsia-700 mb-1">2. Distinguer perception et anxiété</h3>
              <p className="text-gray-700 text-sm">Une inqui&eacute;tude r&eacute;p&eacute;t&eacute;e sur une relation peut ressembler &agrave; une intuition sans en &ecirc;tre une&nbsp;: le recul dans le temps aide &agrave; faire la diff&eacute;rence.</p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-5 border-l-4 border-indigo-400">
              <h3 className="font-bold text-indigo-700 mb-1">3. En parler avec un praticien si besoin</h3>
              <p className="text-gray-700 text-sm">&Eacute;changer avec un <strong>m&eacute;dium exp&eacute;riment&eacute;</strong> permet de mettre des mots sur votre v&eacute;cu et d&apos;obtenir un regard ext&eacute;rieur bienveillant, sans que cela n&apos;implique un &laquo;&nbsp;diagnostic&nbsp;&raquo; formel.</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link href="/consulter/?ref=suis-je-medium" className="inline-block bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition">Échanger avec un Médium Vérifié →</Link>
          </div>
        </section>
    </ContentPage>
  );
}
