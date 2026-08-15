import Link from 'next/link';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import ContentPage, { contentMeta, type ContentPageConfig } from '@/components/ContentPage';

const config: ContentPageConfig = {
  title: 'Ascendant en Amour : Signification et Compatibilité',
  description: 'L\'ascendant en amour : ce que votre signe ascendant révèle sur votre style de séduction et la première attraction. Calcul, signification par signe et compatibilité.',
  url: 'https://www.voyantlove.fr/methodes-voyance/ascendant-amour/',
  keywords: ['ascendant amour', 'ascendant en amour', 'signe ascendant amoureux', 'calculer son ascendant', 'ascendant et attraction'],
  datePublished: '2026-08-07',
  dateModified: '2026-08-07',
  breadcrumb: [
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Méthodes de Voyance', url: 'https://www.voyantlove.fr/methodes-voyance/' },
    { name: 'Ascendant en Amour', url: 'https://www.voyantlove.fr/methodes-voyance/ascendant-amour/' },
  ],
  header: {
    emoji: '🌅',
    h1: 'Ascendant en Amour',
    subtitle: 'Ce que votre signe ascendant révèle sur votre style de séduction',
    gradient: 'from-violet-600 via-indigo-600 to-purple-600',
    backLink: { href: '/methodes-voyance/', label: 'Retour aux Méthodes de Voyance' },
    anchors: [
      { href: '#calcul', label: 'Calculer son Ascendant', primary: true },
      { href: '#signes', label: 'Ascendant par Signe' },
    ],
  },
  accentText: 'text-indigo-700',
  stats: [
    { icon: '🌅', value: '12 signes', label: 'Ascendants possibles' },
    { icon: '🕰️', value: '~2h', label: 'Change de signe' },
    { icon: '🎭', value: 'Masque social', label: 'Première impression' },
    { icon: '💫', value: 'Attraction', label: 'Rôle en synastrie' },
  ],
  eeat: { colorScheme: 'purple', method: 'Astrologie amoureuse et lecture de l\'ascendant' },
  cta: { topic: 'methodes-voyance', slug: 'ascendant-amour' },
  faq: [
    {
      q: 'Comment calculer son ascendant en amour ?',
      a: 'Le calcul de l\'ascendant nécessite trois informations précises : votre date de naissance, votre heure exacte de naissance (à quelques minutes près idéalement) et votre lieu de naissance. Ces données permettent de déterminer quel signe du zodiaque se levait à l\'horizon Est au moment précis de votre venue au monde. Sans heure de naissance fiable, l\'ascendant ne peut pas être calculé avec certitude, contrairement au signe solaire qui ne dépend que de la date.',
    },
    {
      q: 'Pourquoi l\'ascendant est-il important en amour ?',
      a: 'L\'ascendant façonne la première impression que vous donnez et le type d\'attraction que vous suscitez avant même que votre personnalité profonde (signe solaire) ne se révèle. En amour, il influence votre style de séduction spontané, la manière dont on vous perçoit lors d\'une première rencontre, et parfois le profil de partenaire vers lequel vous êtes instinctivement attiré.',
    },
    {
      q: 'Ascendant ou signe solaire : lequel compte le plus en amour ?',
      a: 'Les deux jouent des rôles complémentaires plutôt que concurrents. Le signe solaire renseigne sur l\'identité profonde et les besoins affectifs fondamentaux, tandis que l\'ascendant informe sur la façon d\'aborder une rencontre et l\'image projetée dans les premiers instants. Une analyse de compatibilité complète en astrologie amoureuse tient compte des deux, ainsi que de la position de Vénus et de la Lune.',
    },
    {
      q: 'Deux personnes avec le même ascendant sont-elles compatibles en amour ?',
      a: 'Un ascendant partagé peut créer une reconnaissance immédiate et une facilité de contact dans les premiers échanges, mais il ne garantit pas à lui seul une compatibilité amoureuse durable. Celle-ci dépend de nombreux autres facteurs du thème natal : position de Vénus et Mars, aspects planétaires entre les deux thèmes, éléments dominants. L\'ascendant est une pièce du puzzle, pas une réponse complète.',
    },
  ],
  related: [
    { href: '/methodes-voyance/astrologie-amoureuse/', label: 'Astrologie Amoureuse : Compatibilité Astrale et Prédictions' },
    { href: '/methodes-voyance/synastrie-amoureuse/', label: 'Synastrie Amoureuse : Compatibilité de Couple' },
    { href: '/astrologie-amour/', label: 'Les Signes Astrologiques en Amour' },
    { href: '/glossaire/ascendant/', label: 'Glossaire : Ascendant' },
    { href: '/sentiments/compatibilite-amoureuse/', label: 'Compatibilité Amoureuse : Tous les Indicateurs' },
  ],
};

const ASCENDANTS = [
  { signe: 'Bélier', emoji: '♈', trait: 'Allure dynamique et séduction directe. L\'ascendant Bélier donne une première impression énergique, spontanée, presque conquérante.' },
  { signe: 'Taureau', emoji: '♉', trait: 'Présence posée et sensuelle. L\'ascendant Taureau projette une image rassurante et chaleureuse, un charme qui prend son temps.' },
  { signe: 'Gémeaux', emoji: '♊', trait: 'Charme par les mots et la vivacité. L\'ascendant Gémeaux séduit par sa curiosité, son esprit pétillant et sa facilité de contact.' },
  { signe: 'Cancer', emoji: '♋', trait: 'Douceur protectrice perceptible immédiatement. L\'ascendant Cancer inspire confiance et donne une image chaleureuse, presque familière dès le premier échange.' },
  { signe: 'Lion', emoji: '♌', trait: 'Charisme et assurance immédiats. L\'ascendant Lion attire les regards par sa prestance naturelle et son envie de briller.' },
  { signe: 'Vierge', emoji: '♍', trait: 'Réserve élégante et soignée. L\'ascendant Vierge séduit par son attention aux détails et une discrétion qui intrigue plus qu\'elle n\'éloigne.' },
  { signe: 'Balance', emoji: '♎', trait: 'Charme raffiné et sens de l\'harmonie. L\'ascendant Balance donne une image agréable, diplomate, portée sur l\'esthétique de la première rencontre.' },
  { signe: 'Scorpion', emoji: '♏', trait: 'Intensité magnétique et regard marquant. L\'ascendant Scorpion projette un mystère qui capte l\'attention et suscite la curiosité.' },
  { signe: 'Sagittaire', emoji: '♐', trait: 'Énergie joviale et franchise désarmante. L\'ascendant Sagittaire donne une image aventurière, optimiste, facile d\'accès dès les premiers instants.' },
  { signe: 'Capricorne', emoji: '♑', trait: 'Sérieux et retenue qui inspirent le respect. L\'ascendant Capricorne projette une image mature, une séduction qui se construit progressivement.' },
  { signe: 'Verseau', emoji: '♒', trait: 'Originalité assumée. L\'ascendant Verseau attire par sa différence, son détachement apparent et son style hors des sentiers battus.' },
  { signe: 'Poissons', emoji: '♓', trait: 'Douceur rêveuse et sensibilité visible. L\'ascendant Poissons dégage un romantisme perceptible dès le premier regard.' },
];

export const metadata = contentMeta(config);

export default function AscendantAmourPage() {
  return (
    <ContentPage config={config}>
        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-indigo-600">
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-lg">
            <p className="text-lg leading-relaxed mb-4">
              L&apos;<strong>ascendant</strong> est le signe du zodiaque qui se levait &agrave; l&apos;horizon Est au moment et au lieu exacts de votre naissance. Contrairement au <strong>signe solaire</strong>, d&eacute;termin&eacute; uniquement par la date, l&apos;ascendant n&eacute;cessite de conna&icirc;tre l&apos;<strong>heure pr&eacute;cise</strong> de naissance, puisqu&apos;il change de signe environ toutes les deux heures. En <strong>amour</strong>, il joue un r&ocirc;le central dans l&apos;<strong>attraction imm&eacute;diate</strong> et la premi&egrave;re impression&nbsp;: c&apos;est souvent lui, plus que le signe solaire, qui d&eacute;termine comment on vous per&ccedil;oit lors d&apos;une premi&egrave;re rencontre.
            </p>
            <p className="text-lg leading-relaxed">
              Traditionnellement d&eacute;crit comme le &laquo;&nbsp;masque social&nbsp;&raquo;, l&apos;ascendant colore votre <strong>style de s&eacute;duction</strong> spontan&eacute; avant m&ecirc;me que votre personnalit&eacute; profonde ne se r&eacute;v&egrave;le. Ce guide explique comment le calculer, ce que chaque ascendant r&eacute;v&egrave;le en amour, et comment il s&apos;articule avec le reste de votre <Link href="/methodes-voyance/astrologie-amoureuse/" className="text-indigo-600 hover:text-indigo-800 underline font-medium">th&egrave;me astral amoureux</Link>.
            </p>
          </div>
        </article>

        <VoyantQuickCTA topic="methodes-voyance" source="ascendant-amour-early" />

        {/* Section 1: Calcul */}
        <section id="calcul" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🧮 Comment Calculer Son Ascendant</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Le calcul de l&apos;ascendant nécessite trois données précises : date, heure et lieu de naissance, car il change de signe environ toutes les deux heures.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Contrairement au signe solaire, calculable &agrave; partir de la seule date de naissance, l&apos;<strong>ascendant</strong> exige trois informations&nbsp;: la <strong>date</strong>, l&apos;<strong>heure exacte</strong> (id&eacute;alement &agrave; quelques minutes pr&egrave;s) et le <strong>lieu de naissance</strong>. Ces trois &eacute;l&eacute;ments permettent de d&eacute;terminer le degr&eacute; du zodiaque qui croisait l&apos;horizon Est au moment pr&eacute;cis de la naissance &mdash; un calcul astronomique que r&eacute;alise un <strong>astrologue</strong> ou un outil sp&eacute;cialis&eacute;.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Sans heure de naissance fiable, l&apos;ascendant ne peut &ecirc;tre d&eacute;termin&eacute; avec certitude&nbsp;: une erreur de deux heures peut suffire &agrave; changer enti&egrave;rement de signe ascendant. C&apos;est pourquoi les <strong>horoscopes g&eacute;n&eacute;ralistes</strong>, bas&eacute;s uniquement sur la date de naissance, ne peuvent jamais int&eacute;grer cette dimension &mdash; contrairement &agrave; une <Link href="/methodes-voyance/synastrie-amoureuse/" className="text-indigo-600 hover:text-indigo-800 underline font-medium">&eacute;tude de synastrie</Link> compl&egrave;te r&eacute;alis&eacute;e par un professionnel.
          </p>
        </section>

        {/* Section 2: 12 signs */}
        <section id="signes" className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-xl p-8 mb-8 border-2 border-indigo-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🎭 L&apos;Ascendant en Amour, Signe par Signe</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Chaque ascendant colore différemment le style de séduction et la première impression laissée, indépendamment du signe solaire.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {ASCENDANTS.map(({ signe, emoji, trait }) => (
              <div key={signe} className="bg-white rounded-lg p-5 border-l-4 border-indigo-400">
                <h3 className="font-bold text-indigo-700 mb-2">{emoji} Ascendant {signe}</h3>
                <p className="text-gray-700 text-sm">{trait}</p>
              </div>
            ))}
          </div>
        </section>

        <VoyantRecommendations topic="methodes-voyance" limit={3} showOnlineFirst={true} source="ascendant-amour-mid" />

        {/* Section 3: Ascendant vs signe solaire, rôle en synastrie */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">💫 Ascendant et Compatibilité de Couple</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">L&apos;ascendant influence la première attraction et complète l&apos;analyse de compatibilité, sans jamais la remplacer entièrement.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            En <Link href="/methodes-voyance/synastrie-amoureuse/" className="text-indigo-600 hover:text-indigo-800 underline font-medium">synastrie amoureuse</Link>, quand une plan&egrave;te de votre partenaire &mdash; le Soleil, V&eacute;nus ou Mars &mdash; tombe pr&egrave;s de votre ascendant, elle &laquo;&nbsp;&eacute;claire&nbsp;&raquo; ou &laquo;&nbsp;challenge&nbsp;&raquo; de mani&egrave;re tr&egrave;s perceptible l&apos;image que vous projetez. C&apos;est souvent ce type de contact qui explique une <strong>attraction imm&eacute;diate</strong> et une forte visibilit&eacute; mutuelle d&egrave;s les premiers &eacute;changes.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Comparer les ascendants de deux personnes compl&egrave;te utilement l&apos;analyse de <Link href="/sentiments/compatibilite-amoureuse/" className="text-indigo-600 hover:text-indigo-800 underline font-medium">compatibilit&eacute; amoureuse</Link> par signe solaire, sans pour autant la remplacer&nbsp;: le signe solaire renseigne sur l&apos;identit&eacute; profonde et les besoins affectifs fondamentaux, tandis que l&apos;ascendant informe davantage sur la mani&egrave;re d&apos;aborder une rencontre et le type de partenaire vers lequel on est spontan&eacute;ment attir&eacute;.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Pour une lecture compl&egrave;te de votre profil amoureux, l&apos;ascendant s&apos;articule avec la position de <strong>V&eacute;nus</strong> (votre fa&ccedil;on d&apos;aimer) et de <strong>Mars</strong> (votre d&eacute;sir) d&eacute;taill&eacute;es dans notre guide d&apos;<Link href="/methodes-voyance/astrologie-amoureuse/" className="text-indigo-600 hover:text-indigo-800 underline font-medium">astrologie amoureuse</Link>.
          </p>
        </section>
    </ContentPage>
  );
}
