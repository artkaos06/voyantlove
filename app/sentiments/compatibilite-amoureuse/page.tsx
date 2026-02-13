import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';

export const metadata: Metadata = {
  title: 'Compatibilit\u00e9 Amoureuse : \u00cates-vous Faits l\u2019Un pour l\u2019Autre ? | Voyance',
  description: 'Analyse de compatibilit\u00e9 amoureuse par le tarot et l\u2019astrologie. Synastrie, \u00e2me s\u0153ur, flamme jumelle : d\u00e9couvrez si vous \u00eates vraiment compatibles.',
  keywords: ['compatibilit\u00e9 amoureuse', 'compatibilit\u00e9 couple voyance', 'synastrie amoureuse', 'sommes-nous faits l\'un pour l\'autre', 'compatibilit\u00e9 astrale'],
  alternates: {
    canonical: 'https://voyantlove.fr/sentiments/compatibilite-amoureuse',
  },
};

export default function CompatibiliteAmoureusePage() {
  const articleSchema = getArticleSchema({
    title: 'Compatibilit\u00e9 Amoureuse : \u00cates-vous Faits l\u2019Un pour l\u2019Autre ? | Voyance',
    description: 'Analyse de compatibilit\u00e9 amoureuse par le tarot et l\u2019astrologie. Synastrie, \u00e2me s\u0153ur, flamme jumelle : d\u00e9couvrez si vous \u00eates vraiment compatibles.',
    url: 'https://voyantlove.fr/sentiments/compatibilite-amoureuse',
    datePublished: '2026-02-09',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['compatibilit\u00e9 amoureuse', 'compatibilit\u00e9 couple voyance', 'synastrie amoureuse', 'sommes-nous faits l\'un pour l\'autre', 'compatibilit\u00e9 astrale'],
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Sentiments', url: 'https://voyantlove.fr/sentiments' },
    { name: 'Compatibilit\u00e9 Amoureuse', url: 'https://voyantlove.fr/sentiments/compatibilite-amoureuse' },
  ]);

  const faqSchema = getFAQSchema([
    {
      question: 'Comment savoir si nous sommes vraiment compatibles ?',
      answer: 'La compatibilit\u00e9 amoureuse s\u2019\u00e9value \u00e0 travers plusieurs dimensions compl\u00e9mentaires. Le tarot de compatibilit\u00e9 analyse l\u2019harmonie \u00e9motionnelle, la communication profonde et la vision commune du couple. La synastrie astrologique \u00e9tudie les aspects plan\u00e9taires entre vos deux th\u00e8mes nataux pour mesurer l\u2019attraction, la stabilit\u00e9 et le potentiel de durabilit\u00e9. Une vraie compatibilit\u00e9 ne signifie pas l\u2019absence de conflits, mais la capacit\u00e9 \u00e0 les traverser ensemble. Un voyant exp\u00e9riment\u00e9 croise ces deux approches pour offrir une \u00e9valuation fiable et nuanc\u00e9e de votre lien amoureux.',
    },
    {
      question: 'La synastrie astrologique est-elle fiable pour \u00e9valuer un couple ?',
      answer: 'La synastrie astrologique est un outil ancestral d\u2019une grande profondeur. En \u00e9tudiant les aspects entre V\u00e9nus, Mars, la Lune et le Soleil de chaque partenaire, elle r\u00e9v\u00e8le les zones d\u2019harmonie naturelle et les points de friction potentiels. Un trigone V\u00e9nus-Mars indique une attraction magn\u00e9tique puissante, tandis qu\u2019un carr\u00e9 Lune-Saturne signale des tensions \u00e9motionnelles r\u00e9currentes. La fiabilit\u00e9 augmente lorsqu\u2019on combine la synastrie avec un tirage de tarot, car le tarot capte les \u00e9nergies actuelles l\u00e0 o\u00f9 l\u2019astrologie montre les tendances de fond.',
    },
    {
      question: 'Peut-on am\u00e9liorer la compatibilit\u00e9 avec son partenaire ?',
      answer: 'Oui, la compatibilit\u00e9 amoureuse n\u2019est pas fig\u00e9e. Le tarot r\u00e9v\u00e8le les blocages sp\u00e9cifiques qui entravent votre harmonie de couple et propose des pistes concr\u00e8tes. Travailler sur la communication, d\u00e9velopper l\u2019empathie mutuelle et comprendre les besoins profonds de l\u2019autre transforme la dynamique relationnelle. L\u2019astrologie identifie vos diff\u00e9rences fondamentales pour mieux les accepter. Un carr\u00e9 plan\u00e9taire difficile en synastrie devient une opportunit\u00e9 de croissance plut\u00f4t qu\u2019une fatalit\u00e9. La cl\u00e9 r\u00e9side dans la volont\u00e9 commune d\u2019\u00e9voluer ensemble.',
    },
    {
      question: 'Quelle est la diff\u00e9rence entre compatibilit\u00e9 et amour ?',
      answer: 'L\u2019amour est une \u00e9motion intense, un \u00e9lan du c\u0153ur qui peut na\u00eetre entre deux personnes tr\u00e8s diff\u00e9rentes. La compatibilit\u00e9 amoureuse, en revanche, mesure la capacit\u00e9 de deux \u00eatres \u00e0 construire ensemble sur la dur\u00e9e. On peut aimer profond\u00e9ment sans \u00eatre compatible : valeurs divergentes, rythmes de vie oppos\u00e9s, visions d\u2019avenir contradictoires. Inversement, une forte compatibilit\u00e9 astrale sans flamme passionnelle cr\u00e9e une relation confortable mais fade. L\u2019id\u00e9al r\u00e9v\u00e9l\u00e9 par le tarot combine amour authentique et compatibilit\u00e9 profonde pour une relation \u00e9panouissante et durable.',
    },
    {
      question: 'Le tarot peut-il pr\u00e9dire l\u2019avenir d\u2019un couple compatible ?',
      answer: 'Le tarot de compatibilit\u00e9 ne se contente pas de mesurer l\u2019harmonie pr\u00e9sente : il r\u00e9v\u00e8le \u00e9galement la trajectoire probable de votre relation. Les arcanes majeurs comme Les Amoureux, Le Soleil ou Le Monde annoncent un avenir lumineux pour les couples fortement compatibles. Le Dix de Coupe confirme l\u2019accomplissement familial. Toutefois, m\u00eame les couples les plus compatibles traversent des \u00e9preuves. Le tarot identifie ces d\u00e9fis \u00e0 venir et vous pr\u00e9pare \u00e0 les affronter ensemble, transformant chaque obstacle en tremplin vers une union plus solide.',
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <header className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/sentiments" className="text-white/80 hover:text-white mb-4 inline-block">&larr; Retour aux Sentiments</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">💕 Compatibilit&eacute; Amoureuse : &Ecirc;tes-vous Faits l&rsquo;Un pour l&rsquo;Autre ?</h1>
          <p className="text-xl opacity-95 mb-6">Analyse de compatibilit&eacute; par le tarot et la synastrie astrologique</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#consultation" className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">Analyse de Compatibilit&eacute;</a>
            <a href="#piliers" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition">Les 7 Piliers du Couple</a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Stats bar */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">🎯</div><div className="text-2xl font-bold text-rose-600">92%</div><div className="text-sm text-gray-600">Pr&eacute;cision compatibilit&eacute;</div></div>
          <div><div className="text-3xl mb-1">💑</div><div className="text-2xl font-bold text-rose-600">8,200+</div><div className="text-sm text-gray-600">Couples analys&eacute;s</div></div>
          <div><div className="text-3xl mb-1">⭐</div><div className="text-2xl font-bold text-rose-600">4.9/5</div><div className="text-sm text-gray-600">Satisfaction</div></div>
          <div><div className="text-3xl mb-1">🔮</div><div className="text-2xl font-bold text-rose-600">15 ans</div><div className="text-sm text-gray-600">Exp&eacute;rience</div></div>
        </div>

        {/* EEAT Signal */}
        <EEATSignal colorScheme="rose" method="Tarot de compatibilit&eacute; et synastrie astrologique" />

        {/* Answer Capsule Article */}
        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-rose-600">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-4">
              La <strong>compatibilit&eacute; amoureuse</strong> est la question fondamentale de toute <strong>relation sentimentale</strong> qui aspire &agrave; durer. &Agrave; travers le <strong>tarot de compatibilit&eacute;</strong> et la <strong>synastrie astrologique</strong>, il est possible de mesurer avec pr&eacute;cision l&rsquo;harmonie profonde entre deux &ecirc;tres. Que vous cherchiez &agrave; savoir si votre partenaire est votre <strong>&acirc;me s&oelig;ur</strong>, votre <strong>flamme jumelle</strong>, ou simplement un compagnon de route, la <strong>voyance amoureuse</strong> offre des r&eacute;ponses claires et nuanc&eacute;es. La <strong>compatibilit&eacute; astrale</strong> croise les positions de V&eacute;nus, Mars et la Lune dans vos deux th&egrave;mes nataux pour r&eacute;v&eacute;ler les zones d&rsquo;attraction magn&eacute;tique, les tensions latentes et le potentiel de construction commune. Le <strong>tirage de compatibilit&eacute;</strong> compl&egrave;te cette analyse en captant les &eacute;nergies vivantes du moment pr&eacute;sent, car un couple &eacute;volue sans cesse. Comprendre votre <strong>compatibilit&eacute; de couple</strong> par la voyance, c&rsquo;est prendre le recul n&eacute;cessaire pour b&acirc;tir une relation &eacute;panouissante fond&eacute;e sur la connaissance mutuelle plut&ocirc;t que sur l&rsquo;illusion.
            </p>
          </div>
        </article>

        {/* Section: Analyse de Compatibilit&eacute; par le Tarot */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🃏 Analyse de Compatibilit&eacute; par le Tarot</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Le <strong>tirage de compatibilit&eacute; amoureuse</strong> utilise un &eacute;talement sp&eacute;cifique de six positions, chacune r&eacute;v&eacute;lant une dimension essentielle de votre lien. Chaque position est interpr&eacute;t&eacute;e &agrave; travers deux cartes : l&rsquo;une montrant le potentiel positif, l&rsquo;autre les d&eacute;fis &agrave; surmonter. Cette double lecture offre une <strong>analyse de couple</strong> compl&egrave;te et honn&ecirc;te.
          </p>

          <div className="space-y-5">
            <div className="bg-rose-50 border-l-4 border-rose-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-rose-700">1. L&rsquo;Attraction &mdash; L&rsquo;&Eacute;tincelle Initiale</h3>
              <p className="text-gray-700 text-sm mb-2"><strong>Positif &mdash; Les Amoureux :</strong> Attirance r&eacute;ciproque puissante, alchimie naturelle, choix conscient l&rsquo;un de l&rsquo;autre.</p>
              <p className="text-gray-700 text-sm"><strong>D&eacute;fi &mdash; Le Diable :</strong> Attraction purement physique ou obsessionnelle, d&eacute;pendance affective masqu&eacute;e en passion.</p>
            </div>

            <div className="bg-pink-50 border-l-4 border-pink-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-pink-700">2. La Communication &mdash; Le Pont entre Deux C&oelig;urs</h3>
              <p className="text-gray-700 text-sm mb-2"><strong>Positif &mdash; As d&rsquo;&Eacute;p&eacute;e :</strong> Clart&eacute; des &eacute;changes, honnetetéet&eacute; intellectuelle, compr&eacute;hension mutuelle sans filtre.</p>
              <p className="text-gray-700 text-sm"><strong>D&eacute;fi &mdash; Sept d&rsquo;&Eacute;p&eacute;e :</strong> Non-dits, mensonges par omission, strat&eacute;gies de manipulation inconscientes.</p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-purple-700">3. Les Valeurs &mdash; Le Socle Commun</h3>
              <p className="text-gray-700 text-sm mb-2"><strong>Positif &mdash; Le Pape :</strong> Valeurs partag&eacute;es, respect des traditions communes, vision &eacute;thique align&eacute;e.</p>
              <p className="text-gray-700 text-sm"><strong>D&eacute;fi &mdash; La Tour :</strong> Divergences fondamentales de valeurs qui &eacute;branlent les fondations du couple.</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-blue-700">4. L&rsquo;&Eacute;quilibre &Eacute;motionnel &mdash; L&rsquo;Harmonie Int&eacute;rieure</h3>
              <p className="text-gray-700 text-sm mb-2"><strong>Positif &mdash; Temp&eacute;rance :</strong> &Eacute;quilibre parfait entre donner et recevoir, patience et compr&eacute;hension mutuelles.</p>
              <p className="text-gray-700 text-sm"><strong>D&eacute;fi &mdash; Cinq de Coupe :</strong> D&eacute;s&eacute;quilibre &eacute;motionnel, un partenaire donne plus que l&rsquo;autre, amertume latente.</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-green-700">5. La Croissance &mdash; &Eacute;voluer Ensemble</h3>
              <p className="text-gray-700 text-sm mb-2"><strong>Positif &mdash; Le Monde :</strong> Le couple grandit ensemble, chaque partenaire &eacute;l&egrave;ve l&rsquo;autre vers sa meilleure version.</p>
              <p className="text-gray-700 text-sm"><strong>D&eacute;fi &mdash; Huit de Coupe :</strong> Stagnation, l&rsquo;un des partenaires d&eacute;sire partir pour &eacute;voluer ailleurs.</p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-yellow-700">6. Le Destin du Couple &mdash; L&rsquo;Avenir</h3>
              <p className="text-gray-700 text-sm mb-2"><strong>Positif &mdash; Dix de Coupe :</strong> Accomplissement amoureux, famille &eacute;panouie, bonheur durable et partag&eacute;.</p>
              <p className="text-gray-700 text-sm"><strong>D&eacute;fi &mdash; Trois d&rsquo;&Eacute;p&eacute;e :</strong> Douleur sentimentale &agrave; venir, trahison ou s&eacute;paration si les probl&egrave;mes ne sont pas r&eacute;solus.</p>
            </div>
          </div>

          <div className="bg-rose-50 border-l-4 border-rose-600 p-5 rounded mt-6">
            <p className="text-gray-700"><strong>Important :</strong> Ce tirage r&eacute;v&egrave;le les &eacute;nergies actuelles du couple. Pour comprendre <Link href="/sentiments/maime-t-il-elle" className="text-rose-600 hover:text-rose-800 underline font-medium">ses vrais sentiments</Link> &agrave; votre &eacute;gard et approfondir votre lecture, combinez ce tirage avec une analyse individuelle des &eacute;motions de chaque partenaire.</p>
          </div>
        </section>

        {/* Section: Synastrie Astrologique */}
        <section className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-8 mb-8 border-2 border-rose-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">⭐ Synastrie Astrologique &mdash; Votre Couple au Microscope</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            La <strong>synastrie amoureuse</strong> est l&rsquo;art ancestral de superposer deux th&egrave;mes nataux pour mesurer la <strong>compatibilit&eacute; astrale</strong> d&rsquo;un couple. Chaque aspect plan&eacute;taire r&eacute;v&egrave;le une dimension sp&eacute;cifique de votre relation &mdash; de l&rsquo;attraction physique &agrave; la connexion spirituelle. Cette m&eacute;thode permet de comprendre pourquoi certains couples fonctionnent sans effort tandis que d&rsquo;autres luttent en permanence malgr&eacute; un amour sinc&egrave;re.
          </p>

          <div className="space-y-5">
            <div className="bg-white rounded-lg p-5 border-l-4 border-red-500">
              <h3 className="font-bold text-lg mb-3 text-red-700">V&eacute;nus-Mars : L&rsquo;Attraction et la Passion</h3>
              <p className="text-gray-700 mb-2">
                L&rsquo;aspect entre <strong>V&eacute;nus</strong> d&rsquo;un partenaire et <strong>Mars</strong> de l&rsquo;autre est le principal indicateur d&rsquo;attraction en <strong>synastrie</strong>. Un <strong>trigone</strong> (120&deg;) ou un <strong>sextile</strong> (60&deg;) entre ces deux plan&egrave;tes cr&eacute;e une alchimie naturelle et une attirance magn&eacute;tique irr&eacute;sistible. Le <strong>carr&eacute;</strong> (90&deg;) g&eacute;n&egrave;re une tension sexuelle explosive mais aussi des conflits passionnels fr&eacute;quents. L&rsquo;<strong>opposition</strong> (180&deg;) fascine autant qu&rsquo;elle frustre, cr&eacute;ant un effet miroir puissant mais &eacute;puisant &agrave; long terme.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-3 text-blue-700">Lune-Lune : La Connexion &Eacute;motionnelle</h3>
              <p className="text-gray-700 mb-2">
                La comparaison des <strong>Lunes</strong> dans vos deux th&egrave;mes r&eacute;v&egrave;le votre <strong>compatibilit&eacute; &eacute;motionnelle</strong> profonde. Deux Lunes en trigone ressentent intuitivement les besoins de l&rsquo;autre et cr&eacute;ent un cocon de s&eacute;curit&eacute; affective. Des Lunes en carr&eacute; provoquent des r&eacute;actions &eacute;motionnelles incompatibles : quand l&rsquo;un a besoin de r&eacute;confort, l&rsquo;autre se ferme. Cet aspect est crucial pour d&eacute;terminer si vous pouvez construire un foyer harmonieux. Pour explorer votre <Link href="/sentiments/avenir-amoureux" className="text-rose-600 hover:text-rose-800 underline font-medium">avenir amoureux ensemble</Link>, cette dimension &eacute;motionnelle est d&eacute;terminante.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-yellow-500">
              <h3 className="font-bold text-lg mb-3 text-yellow-700">Soleil-Soleil : L&rsquo;Identit&eacute; du Couple</h3>
              <p className="text-gray-700 mb-2">
                L&rsquo;aspect entre vos deux <strong>Soleils</strong> d&eacute;termine la mani&egrave;re dont vos identit&eacute;s individuelles coexistent. Un <strong>trigone solaire</strong> permet &agrave; chacun de briller sans &eacute;clipser l&rsquo;autre. Une <strong>conjonction</strong> cr&eacute;e une fusion intense mais risque l&rsquo;effacement d&rsquo;un partenaire. Le <strong>carr&eacute; solaire</strong> g&eacute;n&egrave;re des luttes de pouvoir et de territoire &mdash; chacun veut mener sans c&eacute;der.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-purple-500">
              <h3 className="font-bold text-lg mb-3 text-purple-700">Saturne : La Durabilit&eacute; et l&rsquo;Engagement</h3>
              <p className="text-gray-700">
                Les aspects de <strong>Saturne</strong> en synastrie r&eacute;v&egrave;lent la capacit&eacute; du couple &agrave; durer. <strong>Saturne</strong> en trigone avec le Soleil ou V&eacute;nus du partenaire ancre la relation dans la maturit&eacute; et la fid&eacute;lit&eacute;. En carr&eacute;, il &eacute;touffe et cr&eacute;e un sentiment de restriction. Les couples sans aucun aspect de Saturne manquent souvent du ciment n&eacute;cessaire pour traverser les &eacute;preuves du temps, aussi passionn&eacute;s soient-ils au d&eacute;but.
              </p>
            </div>
          </div>
        </section>

        {/* Section: &Acirc;me S&oelig;ur vs Partenaire Compatible vs Flamme Jumelle */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🔥 &Acirc;me S&oelig;ur vs Partenaire Compatible vs Flamme Jumelle</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            La <strong>voyance amoureuse</strong> distingue trois types de liens profonds entre deux &ecirc;tres. Chacun poss&egrave;de ses propres caract&eacute;ristiques, ses signes r&eacute;v&eacute;lateurs et son impact sur votre vie sentimentale. Confondre ces liens m&egrave;ne souvent &agrave; des attentes irr&eacute;alistes et des d&eacute;ceptions. Voici comment le <strong>tarot</strong> et l&rsquo;<strong>astrologie</strong> les diff&eacute;rencient.
          </p>

          <div className="space-y-5">
            <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-green-700">💚 L&rsquo;&Acirc;me S&oelig;ur</h3>
              <p className="text-gray-700 mb-3">
                Votre <strong>&acirc;me s&oelig;ur</strong> est une personne avec laquelle vous partagez une connexion spirituelle ancienne, souvent d&eacute;crite comme une reconnaissance imm&eacute;diate lors de la premi&egrave;re rencontre. Le tarot la r&eacute;v&egrave;le par le Deux de Coupe et Le Soleil en combinaison. Cette relation apporte confort, compr&eacute;hension profonde et croissance mutuelle. Contrairement aux id&eacute;es re&ccedil;ues, nous avons plusieurs &acirc;mes s&oelig;urs potentielles au cours d&rsquo;une vie. Pour reconna&icirc;tre les <Link href="/nouvelle-rencontre/signes-ame-soeur" className="text-rose-600 hover:text-rose-800 underline font-medium">signes de l&rsquo;&acirc;me s&oelig;ur</Link>, la voyance offre des rep&egrave;res pr&eacute;cis.
              </p>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>&bull; Sentiment de familiarit&eacute; instantan&eacute;e</li>
                <li>&bull; Communication t&eacute;l&eacute;pathique, lectures mutuelles des pens&eacute;es</li>
                <li>&bull; Relation &eacute;quilibr&eacute;e et apaisante</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-blue-700">💙 Le Partenaire Compatible</h3>
              <p className="text-gray-700 mb-3">
                Un <strong>partenaire compatible</strong> est une personne dont les valeurs, le rythme de vie et la vision du couple s&rsquo;harmonisent naturellement avec les v&ocirc;tres. La <strong>compatibilit&eacute; amoureuse</strong> se construit ici sur des bases concr&egrave;tes plut&ocirc;t que mystiques. Le tarot la montre par le Dix de Pentacles et Temp&eacute;rance. Cette relation est stable, pr&eacute;visible et propice &agrave; la construction d&rsquo;une vie commune durable, m&ecirc;me si elle manque parfois du feu sacr&eacute; des liens karmiques.
              </p>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>&bull; Valeurs et objectifs de vie align&eacute;s</li>
                <li>&bull; Gestion harmonieuse du quotidien</li>
                <li>&bull; Projet familial et financier commun naturel</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-purple-700">💜 La Flamme Jumelle</h3>
              <p className="text-gray-700 mb-3">
                La <strong>flamme jumelle</strong> repr&eacute;sente la connexion la plus intense et la plus transformatrice. Ce lien, r&eacute;v&eacute;l&eacute; par Le Jugement et La Lune dans le tarot, provoque un bouleversement total de votre &ecirc;tre. Contrairement &agrave; l&rsquo;<strong>&acirc;me s&oelig;ur</strong>, la flamme jumelle n&rsquo;est pas toujours confortable : elle confronte vos ombres, vos peurs et vos blessures les plus profondes. Cette relation catalyse une &eacute;volution spirituelle acc&eacute;l&eacute;r&eacute;e qui peut &ecirc;tre douloureuse mais profond&eacute;ment lib&eacute;ratrice.
              </p>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>&bull; Connexion &eacute;lectrique et d&eacute;stabilisante</li>
                <li>&bull; Cycles de rapprochement et de fuite</li>
                <li>&bull; Transformation personnelle radicale</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Les 7 Piliers de la Compatibilit&eacute; Amoureuse */}
        <section id="piliers" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🏛️ Les 7 Piliers de la Compatibilit&eacute; Amoureuse</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Une <strong>compatibilit&eacute; amoureuse</strong> solide repose sur sept dimensions compl&eacute;mentaires. Le <strong>tarot de compatibilit&eacute;</strong> &eacute;value chacun de ces piliers pour dresser un portrait global de votre harmonie de couple. Un d&eacute;ficit sur un seul pilier peut fragiliser l&rsquo;ensemble de la relation.
          </p>

          <div className="space-y-4">
            <div className="bg-red-50 rounded-lg p-5 border-l-4 border-red-400">
              <h3 className="font-bold text-red-700 mb-2">1. La Compatibilit&eacute; Physique et Sexuelle</h3>
              <p className="text-gray-700 text-sm mb-2">L&rsquo;attraction corporelle et l&rsquo;harmonie intime forment le socle charnel du couple. Sans cette dimension, la relation glisse vers l&rsquo;amiti&eacute;.</p>
              <p className="text-gray-600 text-xs italic">Le tarot r&eacute;v&egrave;le : L&rsquo;Imp&eacute;ratrice et le Cavalier de B&acirc;ton indiquent une forte compatibilit&eacute; physique.</p>
            </div>

            <div className="bg-orange-50 rounded-lg p-5 border-l-4 border-orange-400">
              <h3 className="font-bold text-orange-700 mb-2">2. La Compatibilit&eacute; &Eacute;motionnelle</h3>
              <p className="text-gray-700 text-sm mb-2">La capacit&eacute; &agrave; ressentir, exprimer et accueillir les &eacute;motions de l&rsquo;autre. Pour d&eacute;couvrir les <Link href="/sentiments/signes-il-elle-maime" className="text-rose-600 hover:text-rose-800 underline font-medium">signes d&rsquo;amour authentique</Link>, cette dimension est d&eacute;terminante dans le tirage.</p>
              <p className="text-gray-600 text-xs italic">Le tarot r&eacute;v&egrave;le : La Reine de Coupe et le Deux de Coupe confirment l&rsquo;harmonie &eacute;motionnelle.</p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-5 border-l-4 border-yellow-400">
              <h3 className="font-bold text-yellow-700 mb-2">3. La Compatibilit&eacute; Intellectuelle</h3>
              <p className="text-gray-700 text-sm mb-2">Le plaisir de la conversation, le partage d&rsquo;id&eacute;es, la stimulation mentale r&eacute;ciproque. Un couple intellectuellement compatible ne s&rsquo;ennuie jamais.</p>
              <p className="text-gray-600 text-xs italic">Le tarot r&eacute;v&egrave;le : L&rsquo;As d&rsquo;&Eacute;p&eacute;e et le Roi d&rsquo;&Eacute;p&eacute;e signalent une complicité c&eacute;r&eacute;brale exceptionnelle.</p>
            </div>

            <div className="bg-green-50 rounded-lg p-5 border-l-4 border-green-400">
              <h3 className="font-bold text-green-700 mb-2">4. La Compatibilit&eacute; de Valeurs</h3>
              <p className="text-gray-700 text-sm mb-2">Le partage de convictions profondes sur la fid&eacute;lit&eacute;, la famille, l&rsquo;argent, la spiritualit&eacute;. Des valeurs divergentes cr&eacute;ent des fractures irr&eacute;parables &agrave; long terme.</p>
              <p className="text-gray-600 text-xs italic">Le tarot r&eacute;v&egrave;le : Le Pape et le Dix de Pentacles indiquent un socle de valeurs solide.</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-400">
              <h3 className="font-bold text-blue-700 mb-2">5. La Compatibilit&eacute; de Projet de Vie</h3>
              <p className="text-gray-700 text-sm mb-2">Vouloir le m&ecirc;me avenir : enfants, lieu de vie, style de vie, ambitions professionnelles. Deux personnes s&rsquo;aimant mais visant des horizons oppos&eacute;s finissent par se s&eacute;parer.</p>
              <p className="text-gray-600 text-xs italic">Le tarot r&eacute;v&egrave;le : Le Chariot et Le Monde ensemble promettent une vision commune puissante.</p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-5 border-l-4 border-indigo-400">
              <h3 className="font-bold text-indigo-700 mb-2">6. La Compatibilit&eacute; de Communication</h3>
              <p className="text-gray-700 text-sm mb-2">La facilit&eacute; &agrave; se parler, &agrave; r&eacute;soudre les conflits, &agrave; exprimer ses besoins sans agressivit&eacute;. C&rsquo;est le pilier le plus am&eacute;liorable avec le temps et la volont&eacute;.</p>
              <p className="text-gray-600 text-xs italic">Le tarot r&eacute;v&egrave;le : Le Valet d&rsquo;&Eacute;p&eacute;e et Temp&eacute;rance signalent des &eacute;changes sains et constructifs.</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-5 border-l-4 border-purple-400">
              <h3 className="font-bold text-purple-700 mb-2">7. La Compatibilit&eacute; Spirituelle et Karmique</h3>
              <p className="text-gray-700 text-sm mb-2">Le sens profond de la rencontre, la mission commune, la croissance spirituelle partag&eacute;e. Ce pilier distingue les relations ordinaires des liens d&rsquo;<strong>&acirc;me s&oelig;ur</strong> et de <strong>flamme jumelle</strong>.</p>
              <p className="text-gray-600 text-xs italic">Le tarot r&eacute;v&egrave;le : Le Jugement et L&rsquo;&Eacute;toile r&eacute;v&egrave;lent une connexion karmique profonde.</p>
            </div>
          </div>
        </section>

        {/* Section: Surmonter l&rsquo;Incompatibilit&eacute; */}
        <section className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-8 mb-8 border-2 border-rose-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🛠️ Surmonter l&rsquo;Incompatibilit&eacute; &mdash; Ce que le Tarot Conseille</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Lorsque le <strong>tirage de compatibilit&eacute;</strong> r&eacute;v&egrave;le des zones d&rsquo;incompatibilit&eacute;, tout n&rsquo;est pas perdu. Le <strong>tarot</strong> ne condamne jamais un couple &mdash; il &eacute;claire les chemins possibles. Certaines incompatibilit&eacute;s sont surmontables avec effort et conscience, tandis que d&rsquo;autres signalent des diff&eacute;rences trop fondamentales pour &ecirc;tre r&eacute;solues. Savoir faire la distinction est essentiel pour votre bonheur.
          </p>

          <div className="space-y-5">
            <div className="bg-white rounded-lg p-5 border-l-4 border-green-500">
              <h3 className="font-bold text-lg mb-2 text-green-700">Incompatibilit&eacute;s Surmontables</h3>
              <p className="text-gray-700 text-sm">
                Les diff&eacute;rences de <strong>communication</strong>, de rythme &eacute;motionnel ou d&rsquo;habitudes quotidiennes peuvent &ecirc;tre travaill&eacute;es. Le tarot conseille souvent la carte de Temp&eacute;rance : patience, compromis et adaptation mutuelle. Un carr&eacute; V&eacute;nus-Mars en <strong>synastrie</strong> transforme la tension en passion cr&eacute;ative quand les deux partenaires s&rsquo;y engagent. De nombreux couples ayant travers&eacute; des <Link href="/crise-couple" className="text-rose-600 hover:text-rose-800 underline font-medium">crises de couple</Link> t&eacute;moignent que ces &eacute;preuves ont renforc&eacute; leur lien.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-red-500">
              <h3 className="font-bold text-lg mb-2 text-red-700">Incompatibilit&eacute;s Structurelles</h3>
              <p className="text-gray-700 text-sm">
                Quand les valeurs fondamentales divergent &mdash; d&eacute;sir d&rsquo;enfant oppos&eacute;, fid&eacute;lit&eacute; non n&eacute;gociable face &agrave; un partenaire poly, visions spirituelles irr&eacute;conciliables &mdash; le tarot montre La Tour ou le Dix d&rsquo;&Eacute;p&eacute;e. Dans ces cas, la <strong>compatibilit&eacute; amoureuse</strong> est insuffisante pour construire une relation durable, quel que soit l&rsquo;amour pr&eacute;sent. Le voyant doit alors guider vers une d&eacute;cision lucide plut&ocirc;t que de nourrir l&rsquo;illusion.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-2 text-blue-700">Les Conseils du Tarot pour Am&eacute;liorer la Compatibilit&eacute;</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>&bull; <strong>Temp&eacute;rance :</strong> Cultiver la patience et chercher le juste milieu dans chaque conflit</li>
                <li>&bull; <strong>L&rsquo;&Eacute;toile :</strong> Garder espoir et nourrir la vision commune de votre couple</li>
                <li>&bull; <strong>La Force :</strong> Dompter l&rsquo;orgueil et choisir la douceur plut&ocirc;t que la confrontation</li>
                <li>&bull; <strong>Le Pendu :</strong> Changer de perspective, voir la situation &agrave; travers les yeux de l&rsquo;autre</li>
                <li>&bull; <strong>L&rsquo;Imp&eacute;ratrice :</strong> Cultiver la tendresse, la sensualit&eacute; et la g&eacute;n&eacute;rosit&eacute; affective</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">❓ Questions Fr&eacute;quentes sur la Compatibilit&eacute; Amoureuse</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment savoir si nous sommes vraiment compatibles ?</h3>
              <p className="text-gray-700 leading-relaxed">La <strong>compatibilit&eacute; amoureuse</strong> s&rsquo;&eacute;value &agrave; travers plusieurs dimensions compl&eacute;mentaires. Le <strong>tarot de compatibilit&eacute;</strong> analyse l&rsquo;harmonie &eacute;motionnelle, la communication profonde et la vision commune du couple. La <strong>synastrie astrologique</strong> &eacute;tudie les aspects plan&eacute;taires entre vos deux th&egrave;mes nataux pour mesurer l&rsquo;attraction, la stabilit&eacute; et le potentiel de durabilit&eacute;. Une vraie compatibilit&eacute; ne signifie pas l&rsquo;absence de conflits, mais la capacit&eacute; &agrave; les traverser ensemble. Un <strong>voyant</strong> exp&eacute;riment&eacute; croise ces deux approches pour offrir une &eacute;valuation fiable et nuanc&eacute;e de votre lien amoureux.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">La synastrie astrologique est-elle fiable pour &eacute;valuer un couple ?</h3>
              <p className="text-gray-700 leading-relaxed">La <strong>synastrie astrologique</strong> est un outil ancestral d&rsquo;une grande profondeur. En &eacute;tudiant les aspects entre <strong>V&eacute;nus</strong>, <strong>Mars</strong>, la <strong>Lune</strong> et le <strong>Soleil</strong> de chaque partenaire, elle r&eacute;v&egrave;le les zones d&rsquo;harmonie naturelle et les points de friction potentiels. Un <strong>trigone</strong> V&eacute;nus-Mars indique une attraction magn&eacute;tique puissante, tandis qu&rsquo;un <strong>carr&eacute;</strong> Lune-Saturne signale des tensions &eacute;motionnelles r&eacute;currentes. La fiabilit&eacute; augmente lorsqu&rsquo;on combine la synastrie avec un tirage de <strong>tarot</strong>, car le tarot capte les &eacute;nergies actuelles l&agrave; o&ugrave; l&rsquo;astrologie montre les tendances de fond.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Peut-on am&eacute;liorer la compatibilit&eacute; avec son partenaire ?</h3>
              <p className="text-gray-700 leading-relaxed">Oui, la <strong>compatibilit&eacute; amoureuse</strong> n&rsquo;est pas fig&eacute;e. Le <strong>tarot</strong> r&eacute;v&egrave;le les blocages sp&eacute;cifiques qui entravent votre harmonie de couple et propose des pistes concr&egrave;tes. Travailler sur la <strong>communication</strong>, d&eacute;velopper l&rsquo;empathie mutuelle et comprendre les besoins profonds de l&rsquo;autre transforme la dynamique relationnelle. L&rsquo;<strong>astrologie</strong> identifie vos diff&eacute;rences fondamentales pour mieux les accepter. Un <strong>carr&eacute; plan&eacute;taire</strong> difficile en synastrie devient une opportunit&eacute; de croissance plut&ocirc;t qu&rsquo;une fatalit&eacute;. La cl&eacute; r&eacute;side dans la volont&eacute; commune d&rsquo;&eacute;voluer ensemble.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quelle est la diff&eacute;rence entre compatibilit&eacute; et amour ?</h3>
              <p className="text-gray-700 leading-relaxed">L&rsquo;<strong>amour</strong> est une &eacute;motion intense, un &eacute;lan du c&oelig;ur qui peut na&icirc;tre entre deux personnes tr&egrave;s diff&eacute;rentes. La <strong>compatibilit&eacute; amoureuse</strong>, en revanche, mesure la capacit&eacute; de deux &ecirc;tres &agrave; construire ensemble sur la dur&eacute;e. On peut aimer profond&eacute;ment sans &ecirc;tre <strong>compatible</strong> : valeurs divergentes, rythmes de vie oppos&eacute;s, visions d&rsquo;avenir contradictoires. Inversement, une forte <strong>compatibilit&eacute; astrale</strong> sans flamme passionnelle cr&eacute;e une relation confortable mais fade. L&rsquo;id&eacute;al r&eacute;v&eacute;l&eacute; par le <strong>tarot</strong> combine amour authentique et compatibilit&eacute; profonde pour une relation &eacute;panouissante et durable.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Le tarot peut-il pr&eacute;dire l&rsquo;avenir d&rsquo;un couple compatible ?</h3>
              <p className="text-gray-700 leading-relaxed">Le <strong>tarot de compatibilit&eacute;</strong> ne se contente pas de mesurer l&rsquo;harmonie pr&eacute;sente : il r&eacute;v&egrave;le &eacute;galement la trajectoire probable de votre <strong>relation</strong>. Les arcanes majeurs comme <strong>Les Amoureux</strong>, <strong>Le Soleil</strong> ou <strong>Le Monde</strong> annoncent un avenir lumineux pour les couples fortement compatibles. Le <strong>Dix de Coupe</strong> confirme l&rsquo;accomplissement familial. Toutefois, m&ecirc;me les couples les plus compatibles traversent des &eacute;preuves. Le tarot identifie ces d&eacute;fis &agrave; venir et vous pr&eacute;pare &agrave; les affronter ensemble, transformant chaque obstacle en tremplin vers une union plus solide.</p>
            </div>
          </div>
        </section>

        {/* Articles Connexes */}
        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900">📚 Articles Connexes</h3>
          <div className="space-y-2">
            <Link href="/sentiments" className="block text-rose-600 hover:text-rose-800 font-medium">&rarr; Sentiments Amoureux : Toutes nos Guidances</Link>
            <Link href="/sentiments/maime-t-il-elle" className="block text-rose-600 hover:text-rose-800 font-medium">&rarr; M&rsquo;aime-t-il/elle Vraiment ?</Link>
            <Link href="/sentiments/avenir-amoureux" className="block text-rose-600 hover:text-rose-800 font-medium">&rarr; Mon Avenir Amoureux : Pr&eacute;dictions</Link>
            <Link href="/sentiments/signes-il-elle-maime" className="block text-rose-600 hover:text-rose-800 font-medium">&rarr; Les Signes qu&rsquo;il/elle M&rsquo;aime</Link>
            <Link href="/nouvelle-rencontre/signes-ame-soeur" className="block text-rose-600 hover:text-rose-800 font-medium">&rarr; Reconna&icirc;tre les Signes de l&rsquo;&Acirc;me S&oelig;ur</Link>
            <Link href="/crise-couple" className="block text-rose-600 hover:text-rose-800 font-medium">&rarr; Surmonter une Crise de Couple</Link>
          </div>
        </div>

        {/* CTA Footer */}
        <div id="consultation" className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">💕 Analysez Votre Compatibilit&eacute; Amoureuse</h2>
          <p className="text-lg mb-6 opacity-95">Consultation personnalis&eacute;e par le tarot et la synastrie astrologique</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#consultation" className="bg-white text-rose-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition">Analyse de Compatibilit&eacute;</a>
            <a href="#piliers" className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition">Tirage Synastrie Compl&egrave;te</a>
          </div>
          <p className="mt-6 text-sm opacity-90">✓ Synastrie d&eacute;taill&eacute;e &bull; ✓ Tarot 6 positions &bull; ✓ Guidance personnalis&eacute;e</p>
        </div>
      </div>
    </main>
  );
}
