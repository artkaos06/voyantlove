import Link from 'next/link';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import ContentPage, { contentMeta, type ContentPageConfig } from '@/components/ContentPage';

const config: ContentPageConfig = {
  title: 'Ex qui revient : que faire ? conseils voyance',
  description: 'Votre ex est revenu ? Découvrez que faire selon le tarot. Faut-il donner une seconde chance ?',
  url: 'https://www.voyantlove.fr/reconquete/ex-qui-revient/',
  keywords: ['ex qui revient', 'seconde chance', 'retrouvailles'],
  datePublished: '2026-01-17',
  dateModified: '2026-01-17',
  breadcrumb: [
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Reconquête', url: 'https://www.voyantlove.fr/reconquete/' },
    { name: 'Ex qui Revient', url: 'https://www.voyantlove.fr/reconquete/ex-qui-revient/' },
  ],
  header: {
    emoji: '',
    h1: 'Ex qui revient',
    subtitle: 'Que faire selon le tarot ?',
    gradient: 'from-violet-500 via-pink-500 to-rose-500',
    backLink: { href: '/reconquete/', label: 'Retour à la reconquête' },
    anchors: [
      { href: '#consultation', label: 'Consultation', primary: true },
    ],
  },
  accentText: 'text-pink-600',
  stats: [
    { icon: '', value: '4.8/5', label: '' },
    { icon: '', value: 'Forte', label: '' },
    { icon: '', value: '3-6m', label: '' },
    { icon: '', value: 'Reconnue', label: '' },
  ],
  eeat: { colorScheme: 'purple', method: 'Tarot de la reconquête amoureuse' },
  cta: { topic: 'reconquete', slug: 'ex-qui-revient' },
  faq: [
    {
      q: 'Ex qui revient après silence radio : bon signe ?',
      a: 'Le retour après un silence radio peut être positif s\'il s\'accompagne de changements concrets. Observez si votre ex prend ses responsabilités, reconnaît ses erreurs et propose des solutions. Le tarot révèle si ce retour est sincère ou motivé par la solitude. Un vrai retour se manifeste par des actions, pas seulement des paroles.',
    },
    {
      q: 'Quels sont les signes qu\'un ex revient pour de bon ?',
      a: 'Les signes d\'un retour sincère incluent : reconnaissance des erreurs passées, changements visibles de comportement, patience et respect de votre rythme, communication ouverte sur les problèmes, engagement concret pour l\'avenir. Le tarot avec Les Amoureux et Le Jugement confirme un retour authentique basé sur une véritable évolution.',
    },
    {
      q: 'Comment réagir quand mon ex revient ?',
      a: 'Prenez du recul avant de répondre. Posez-vous les bonnes questions : pourquoi revient-il maintenant ? A-t-il changé ? Ai-je pardonné ? Demandez une discussion honnête sur les causes de la rupture. Observez ses actions sur plusieurs semaines. Le tarot guide votre décision en révélant ses vraies motivations et vos chances de réussite.',
    },
    {
      q: 'Faut-il accepter le retour de son ex ?',
      a: 'Non, refuser peut être la meilleure décision si : votre ex n\'a pas changé, les causes de rupture persistent, vous n\'avez pas pardonné, il revient par manipulation ou ego. Accepter sans conditions garantit l\'échec. Le tarot avec La Tour ou Le Diable révèle les situations toxiques où refuser protège votre bien-être.',
    },
    {
      q: 'Combien de temps faut-il avant qu\'un ex revienne ?',
      a: 'La durée varie selon les situations : 3 à 6 mois en moyenne pour une vraie évolution. Un retour trop rapide (moins d\'un mois) est souvent motivé par la nostalgie ou la solitude, pas par un changement profond. Le tarot révèle le timing idéal et si ce retour mènera à une relation durable.',
    },
    {
      q: 'Comment différencier un retour sincère d\'une manipulation ?',
      a: 'Un retour sincère montre : cohérence entre paroles et actes, reconnaissance des torts, patience, respect de vos limites. Une manipulation révèle : promesses sans actions, urgence pour revenir, culpabilisation, refus d\'assumer ses erreurs. Le tarot avec Le Bateleur inversé ou La Lune alerte sur les intentions douteuses.',
    },
  ],
  related: [
    { href: '/reconquete/', label: 'Reconquête amoureuse : toutes nos guidances' },
    { href: '/reconquete/seconde-chance-amour/', label: 'Seconde chance en amour : conditions de réussite' },
    { href: '/reconquete/se-remettre-ensemble/', label: 'Se remettre ensemble : les 5 étapes' },
    { href: '/reconquete/ex-revient-silence-radio/', label: 'Ex qui revient après silence radio' },
    { href: '/reconquete/retour-de-lex/', label: 'Retour de l\'ex : signes et timing' },
    { href: '/reconquete/va-t-il-elle-revenir/', label: 'Va-t-il/elle revenir ? prédiction Tarot' },
    { href: '/reconquete/reconquerir-son-ex/', label: 'Reconquérir son ex : stratégies efficaces' },
    { href: '/reconquete/ex-chaud-et-froid-apres-separation/', label: 'Mon ex est chaud et froid : décoder les signaux' },
  ],
};

export const metadata = contentMeta(config);

export default function ExQuiRevientPage() {
  return (
    <ContentPage config={config}>

        <article className="bg-white rounded-xl p-8 mb-8 border-t-4 border-pink-500">
          <p className="text-lg mb-4">Votre <strong>ex qui revient</strong> pose la question cruciale : <strong>que faire</strong> ? La plupart des personnes confrontées au <strong>retour de l'ex</strong> hésitent entre donner une <strong>seconde chance</strong> ou refuser définitivement. Le <strong>tarot</strong> guide votre décision en révélant les vraies motivations de ce retour et vos chances réelles de réussite. Cette situation délicate nécessite une analyse approfondie avant toute décision.</p>
          <p className="text-lg mb-4">Le <strong>retour d'un ex</strong> peut signifier plusieurs choses : des regrets sincères accompagnés d'une véritable évolution personnelle, une simple nostalgie passagère, une peur de la solitude, ou dans les cas les plus problématiques, une tentative de manipulation. Pour mieux cerner ses intentions, repérez les <Link href="/sentiments/signes-il-elle-maime/" className="text-pink-600 hover:text-pink-800 underline font-medium">signes qu'il ou elle vous aime</Link> encore avant de prendre une décision. Le <strong>tarot de Marseille</strong> et les oracles amoureux permettent de distinguer ces motivations pour éviter de répéter les mêmes erreurs qui ont mené à la première rupture.</p>
          <p className="text-lg">Comprendre pourquoi votre <strong>ex revenu</strong> frappe à votre porte est essentiel pour prendre la bonne décision. Cette guidance tarot, au coeur de notre approche de la <Link href="/reconquete/" className="text-pink-600 hover:text-pink-800 underline font-medium">reconquête amoureuse</Link>, vous aide à analyser la situation objectivement, au-delà des émotions du moment, pour construire un avenir sentimental épanouissant.</p>
        </article>

        {/* ZONE 1: Early CTA - Bandeau compact après introduction */}
        <VoyantQuickCTA topic="reconquete" source="ex-qui-revient-early" />

        <section className="bg-white rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-pink-600">Les 5 Types de Retour d'Ex : Identifier les Vraies Motivations</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Les cinq types de retour d'un ex sont : le retour sincère avec évolution réelle, le retour nostalgique, le retour par solitude, le retour d'ego et le retour manipulateur. Seul le premier mérite une seconde chance.</p>
          <p className="text-gray-700 mb-6">Tous les <strong>retours d'ex</strong> ne se ressemblent pas. Comprendre le type de retour vous aide à réagir de manière appropriée et à protéger votre cœur.</p>

          <div className="space-y-4">
            <div className="bg-green-50 border-l-4 border-green-500 p-5">
              <h3 className="font-bold text-green-700 mb-3 text-xl">1. Le Retour Sincère (Le Plus Rare)</h3>
              <p className="text-gray-700 mb-3">Votre ex a réellement changé et évolué. Il ou elle reconnaît ses erreurs, a travaillé sur les causes de la rupture et revient avec des solutions concrètes. Ce type de retour se manifeste par de la patience, du respect de votre rythme, et une communication ouverte. Plusieurs signes concrets permettent de savoir si le <Link href="/reconquete/retour-de-lex/" className="text-pink-600 hover:text-pink-800 underline font-medium">retour de l'ex</Link> est sincère ou superficiel.</p>
              <p className="text-gray-700"><strong>Signes à observer :</strong> Actions cohérentes avec les paroles, acceptation de sa responsabilité, proposition de thérapie de couple ou changements concrets, respect de vos limites. Le tarot révèle ce retour avec Les Amoureux, Le Soleil ou Le Jugement.</p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5">
              <h3 className="font-bold text-yellow-700 mb-3 text-xl">2. Le Retour Nostalgique</h3>
              <p className="text-gray-700 mb-3">Votre ex idéalise le passé et oublie les raisons de la séparation. Ce retour est motivé par les bons souvenirs, souvent amplifié par un moment difficile dans sa vie actuelle. Attention : la nostalgie n'est pas de l'amour véritable.</p>
              <p className="text-gray-700"><strong>Signes à observer :</strong> Discours centré sur "le bon vieux temps", minimisation des problèmes passés, refus de parler des vraies causes de rupture. Cartes tarot : La Lune, Le Pendu. Risque élevé de répétition du schéma.</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-5">
              <h3 className="font-bold text-blue-700 mb-3 text-xl">3. Le Retour par Solitude</h3>
              <p className="text-gray-700 mb-3">Ce retour intervient souvent après l'échec d'une nouvelle relation ou pendant une période de célibat difficile. Votre ex ne revient pas par amour pour vous, mais par peur de la solitude et besoin de confort émotionnel.</p>
              <p className="text-gray-700"><strong>Signes à observer :</strong> Timing suspect (juste après une rupture), demandes pressantes, manque d'intérêt réel pour votre vie actuelle, discours centré sur ses besoins. Le tarot montre souvent L'Ermite inversé ou Le Cinq de Coupe.</p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-5">
              <h3 className="font-bold text-orange-700 mb-3 text-xl">4. Le Retour d'Ego</h3>
              <p className="text-gray-700 mb-3">Votre ex revient parce que vous avez "osé" passer à autre chose. Il s'agit d'une question de fierté : il veut prouver qu'il peut encore vous séduire, surtout si vous semblez heureux sans lui. Ce retour est toxique et égoïste.</p>
              <p className="text-gray-700"><strong>Signes à observer :</strong> Retour quand vous montrez des signes de bonheur, jalousie apparente, compétition avec vos nouvelles fréquentations, perte d'intérêt si vous cédez. Cartes tarot : L'Empereur inversé, Le Bateleur inversé.</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5">
              <h3 className="font-bold text-red-700 mb-3 text-xl">5. Le Retour Manipulateur</h3>
              <p className="text-gray-700 mb-3">Le plus dangereux : votre ex utilise des techniques de manipulation pour revenir dans votre vie. Ce comportement relève souvent de relations toxiques où le cycle rupture-réconciliation sert à maintenir le contrôle.</p>
              <p className="text-gray-700"><strong>Signes à observer :</strong> Alternance chaud-froid, promesses sans actions, culpabilisation, victimisation, refus d'assumer ses responsabilités. Le tarot alerte avec Le Diable, La Tour, ou Le Sept d'Épée. Fuyez ce type de retour.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-pink-600">Comment Réagir Face à un Ex qui Revient : Le Guide Complet</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Face au retour d'un ex, suivez cinq étapes : prenez du recul sans répondre immédiatement, analysez le contexte, évaluez votre propre évolution, demandez une discussion franche et observez les actions sur plusieurs semaines.</p>
          <p className="text-gray-700 mb-6">Votre réaction face au <strong>retour de votre ex</strong> détermine l'issue de cette situation. Voici les étapes à suivre pour prendre la meilleure décision.</p>

          <div className="space-y-6">
            <div className="bg-purple-50 p-5 rounded-lg">
              <h3 className="font-bold text-purple-700 mb-3 text-xl">Étape 1 : Prenez du Recul (Ne Répondez Pas Immédiatement)</h3>
              <p className="text-gray-700 mb-3">La première réaction est souvent émotionnelle. Accordez-vous 24 à 48 heures avant de répondre. Ce temps permet de sortir du choc émotionnel et d'analyser la situation rationnellement.</p>
              <p className="text-gray-700">Pendant ce temps, notez vos émotions : joie, colère, doute, espoir. Ces sentiments vous renseignent sur votre état émotionnel réel face à cette personne.</p>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg">
              <h3 className="font-bold text-purple-700 mb-3 text-xl">Étape 2 : Analysez le Contexte du Retour</h3>
              <p className="text-gray-700 mb-2"><strong>Questions essentielles à vous poser :</strong></p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Combien de temps s'est écoulé depuis la rupture ? (Minimum 3 mois pour une vraie évolution)</li>
                <li>Qui a initié la rupture et pourquoi ?</li>
                <li>Votre ex a-t-il eu d'autres relations entre-temps ?</li>
                <li>Comment se manifeste ce retour ? (Message, appel, rencontre physique ?)</li>
                <li>Quel est le timing ? (Après votre silence radio ? Après vos réussites visibles ?)</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg">
              <h3 className="font-bold text-purple-700 mb-3 text-xl">Étape 3 : Évaluez Votre Propre Evolution</h3>
              <p className="text-gray-700 mb-3">Avant d'accepter ou refuser, examinez votre parcours depuis la rupture. Avez-vous grandi ? Avez-vous pardonné ? Pouvez-vous recommencer sans rancune ?</p>
              <p className="text-gray-700">Si vous ressentez encore de la colère, de l'amertume ou si vous n'avez pas fait votre deuil de la relation, ce n'est pas le bon moment pour une <strong>seconde chance</strong>.</p>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg">
              <h3 className="font-bold text-purple-700 mb-3 text-xl">Étape 4 : Demandez une Discussion Franche</h3>
              <p className="text-gray-700 mb-3">Si vous envisagez d'accepter le retour, exigez une conversation honnête en face à face. Les messages ne suffisent pas pour cette décision importante.</p>
              <p className="text-gray-700 mb-2"><strong>Questions à poser directement :</strong></p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Pourquoi reviens-tu maintenant ?</li>
                <li>Qu'est-ce qui a changé chez toi depuis la rupture ?</li>
                <li>Comment envisages-tu de résoudre les problèmes qui ont causé notre séparation ?</li>
                <li>Qu'attends-tu concrètement de ce retour ?</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg">
              <h3 className="font-bold text-purple-700 mb-3 text-xl">Étape 5 : Observez les Actions, Pas les Paroles</h3>
              <p className="text-gray-700 mb-3">Ne vous fiez pas uniquement aux promesses. Accordez-vous une période d'observation de plusieurs semaines où vous restez en contact sans engagement immédiat.</p>
              <p className="text-gray-700">Les actions révèlent les vraies intentions : votre ex respecte-t-il vos limites ? Fait-il des efforts concrets ? Montre-t-il de la patience ? La cohérence entre paroles et actes est le meilleur indicateur de sincérité.</p>
            </div>
          </div>
        </section>

        {/* ZONE 2: Mid-Content - Recommandations complètes (milieu article) */}
        <VoyantRecommendations
          topic="reconquete"
          title="Voyants Spécialisés Retour de l'Ex"
          subtitle="Ces voyants experts ont accompagné des centaines de personnes dans votre situation. Leur guidance vous aide à prendre la bonne décision et à voir clair dans les intentions de votre ex."
          limit={3}
          showOnlineFirst={true}
          source="ex-qui-revient-mid"
        />

        <section className="bg-white rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-pink-600">6 Questions Essentielles Avant de Décider</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Avant d'accepter le retour de votre ex, posez-vous six questions : les causes sont-elles résolues, a-t-il changé, avez-vous pardonné, agissez-vous par amour, êtes-vous heureux et vos proches soutiennent-ils ce choix ?</p>
          <p className="text-gray-700 mb-6">Ces questions vous aident à prendre une décision éclairée face au <strong>retour de votre ex</strong>. Répondez-y honnêtement.</p>

          <div className="space-y-4">
            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-pink-500">
              <h3 className="font-bold text-pink-700 mb-2 text-lg">1. Les causes de la rupture ont-elles été résolues ?</h3>
              <p className="text-gray-700">Si les problèmes originaux (jalousie, manque de communication, différences de valeurs) persistent, la relation reproduira le même schéma d'échec. Sans résolution concrète, refusez.</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-pink-500">
              <h3 className="font-bold text-pink-700 mb-2 text-lg">2. Votre ex a-t-il vraiment changé ou promet-il de changer ?</h3>
              <p className="text-gray-700">Distinguez les changements réels (thérapie suivie, comportements modifiés visiblement) des simples promesses. Les promesses sans preuves mènent à la déception.</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-pink-500">
              <h3 className="font-bold text-pink-700 mb-2 text-lg">3. Avez-vous réellement pardonné ?</h3>
              <p className="text-gray-700">Le pardon authentique signifie : ne plus ressentir de colère, ne pas vouloir rappeler les erreurs passées, être capable de recommencer à zéro. Si vous n'avez pas pardonné, la relation sera toxique.</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-pink-500">
              <h3 className="font-bold text-pink-700 mb-2 text-lg">4. Reprenez-vous par amour ou par peur de la solitude ?</h3>
              <p className="text-gray-700">Soyez honnête : acceptez-vous ce retour parce que vous aimez vraiment cette personne ou parce que le célibat vous pèse ? La peur de la solitude est une mauvaise raison.</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-pink-500">
              <h3 className="font-bold text-pink-700 mb-2 text-lg">5. Cette personne vous apporte-t-elle du bonheur ou de l'anxiété ?</h3>
              <p className="text-gray-700">Observez votre état émotionnel : depuis que votre ex est revenu, dormez-vous bien ? Êtes-vous serein ou anxieux ? Le bonheur véritable ne génère pas d'anxiété constante.</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-pink-500">
              <h3 className="font-bold text-pink-700 mb-2 text-lg">6. Vos proches soutiennent-ils ce retour ?</h3>
              <p className="text-gray-700">L'avis objectif de vos amis et famille compte. S'ils manifestent des inquiétudes, écoutez-les. Ils voient parfois plus clairement que vous, aveuglé par les émotions.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-pink-600">Red Flags vs Green Flags : Accepter ou Refuser ?</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Refusez le retour si votre ex n'a pas changé, manipule ou culpabilise. Acceptez si les changements sont concrets, la communication est ouverte, le respect est présent et vos proches soutiennent cette décision.</p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
              <h3 className="font-bold text-red-700 mb-4 text-xl flex items-center">
                <span className="text-2xl mr-2"></span> Red Flags : Refusez le Retour
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-red-600 mr-2">✗</span><span>Aucun changement visible de comportement</span></li>
                <li className="flex items-start"><span className="text-red-600 mr-2">✗</span><span>Refuse d'assumer sa responsabilité dans la rupture</span></li>
                <li className="flex items-start"><span className="text-red-600 mr-2">✗</span><span>Vous culpabilise ou vous manipule émotionnellement</span></li>
                <li className="flex items-start"><span className="text-red-600 mr-2">✗</span><span>Retour précipité sans période de réflexion</span></li>
                <li className="flex items-start"><span className="text-red-600 mr-2">✗</span><span>Historique de ruptures et réconciliations multiples</span></li>
                <li className="flex items-start"><span className="text-red-600 mr-2">✗</span><span>Refuse de parler des vraies causes de la séparation</span></li>
                <li className="flex items-start"><span className="text-red-600 mr-2">✗</span><span>Vous fait des promesses mais aucune action concrète</span></li>
                <li className="flex items-start"><span className="text-red-600 mr-2">✗</span><span>Vous sentez de l'anxiété ou de la peur en sa présence</span></li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
              <h3 className="font-bold text-green-700 mb-4 text-xl flex items-center">
                <span className="text-2xl mr-2"></span> Green Flags : Envisagez la Seconde Chance
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Changements concrets et visibles (thérapie, comportement)</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Reconnaissance complète de ses erreurs</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Respect de votre rythme et de vos limites</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Communication ouverte et honnête</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Période de réflexion suffisante (minimum 3 mois)</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Actions cohérentes avec les paroles</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Vous vous sentez respecté et valorisé</span></li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Vos proches soutiennent cette décision</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-lg">
            <p className="text-gray-700 font-semibold text-center">
              Si vous comptez plus de 3 red flags, le retour est probablement voué à l'échec. Protégez votre bien-être émotionnel.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-violet-50 to-pink-50 rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-purple-700">Guidance Tarot : Les Cartes du Retour de l'Ex</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Les cartes favorables au retour sont Les Amoureux, Le Jugement, Le Soleil et le Deux de Coupe. Les cartes d'alerte sont Le Diable, La Tour, La Lune et le Sept d'Epée qui signalent un retour toxique.</p>
          <p className="text-gray-700 mb-6">Le <strong>tarot</strong> révèle les énergies en présence et guide votre décision face au <strong>retour de votre ex</strong>. Voici les cartes clés et leur interprétation.</p>

          <div className="bg-white p-6 rounded-lg mb-6">
            <h3 className="font-bold text-green-700 mb-4 text-xl">Indicateurs Positifs : Cartes de Seconde Chance Réussie</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-green-600 mb-2">Les Amoureux</h4>
                <p className="text-gray-700">Symbole de choix conscient et d'union authentique. Cette carte indique que le retour est basé sur l'amour véritable et un choix mûrement réfléchi. Les deux partenaires sont alignés et prêts à construire ensemble.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-green-600 mb-2">Le Jugement</h4>
                <p className="text-gray-700">Renaissance et nouvelle chance karmique. Cette carte annonce une véritable transformation et une opportunité de repartir sur de nouvelles bases. Les erreurs passées servent de leçons pour construire mieux.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-green-600 mb-2">Le Soleil</h4>
                <p className="text-gray-700">Bonheur authentique et réussite. Le retour apportera joie, clarté et épanouissement. Les obstacles sont levés, la relation peut s'épanouir dans la lumière et la vérité.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-green-600 mb-2">Deux de Coupe</h4>
                <p className="text-gray-700">Équilibre parfait et réciprocité. Les deux partenaires s'investissent également, les sentiments sont partagés. Cette carte garantit une relation harmonieuse basée sur le respect mutuel.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-bold text-red-700 mb-4 text-xl">Indicateurs d'Alerte : Cartes de Mise en Garde</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-bold text-red-600 mb-2">Le Diable</h4>
                <p className="text-gray-700">Attachement toxique et dépendance. Cette carte alerte sur une relation malsaine où manipulation, jalousie ou dépendance dominent. Le retour reproduira les schémas destructeurs. Refusez pour votre bien-être.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-bold text-red-600 mb-2">La Tour</h4>
                <p className="text-gray-700">Effondrement inévitable. Cette relation est bâtie sur des fondations fragiles. Le retour mènera à une nouvelle rupture, possiblement plus douloureuse. Évitez de reconstruire ce qui doit s'effondrer.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-bold text-red-600 mb-2">La Lune</h4>
                <p className="text-gray-700">Illusions et tromperies. Les vraies intentions sont cachées, la situation n'est pas ce qu'elle semble être. Méfiez-vous des apparences et des belles paroles sans substance.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-bold text-red-600 mb-2">Sept d'Épée</h4>
                <p className="text-gray-700">Tromperie et manipulation. Votre ex cache ses vraies intentions, utilise la ruse ou vous ment. Ce retour n'est pas sincère, protégez-vous.</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-100 p-5 rounded-lg mt-6">
            <h3 className="font-bold text-purple-700 mb-3">Comment Interpréter Votre Tirage</h3>
            <p className="text-gray-700 mb-3">Pour une guidance complète sur le <strong>retour de votre ex</strong>, réalisez un tirage en croix :</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Position 1 (Centre) :</strong> La situation actuelle et les énergies présentes</li>
              <li><strong>Position 2 (Gauche) :</strong> Les vraies motivations de votre ex</li>
              <li><strong>Position 3 (Droite) :</strong> Votre état émotionnel et vos besoins</li>
              <li><strong>Position 4 (Haut) :</strong> Les obstacles ou défis à surmonter</li>
              <li><strong>Position 5 (Bas) :</strong> L'issue probable si vous acceptez le retour</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-pink-600">Timeline : Quand Attendre le Retour d'un Ex ?</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Le délai idéal pour un retour sincère est de 3 à 6 mois. Un retour avant 1 mois est trop rapide et souvent motivé par la nostalgie. Un retour après 6 mois est le plus mature et le plus prometteur.</p>
          <p className="text-gray-700 mb-6">Le timing du <strong>retour d'un ex</strong> révèle beaucoup sur la sincérité et les chances de réussite. Voici les périodes clés.</p>

          <div className="space-y-4">
            <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
              <h3 className="font-bold text-red-700 mb-2">Moins d'1 mois : Retour Trop Rapide</h3>
              <p className="text-gray-700"><strong>Signification :</strong> Nostalgie, solitude ou regret impulsif. Aucune véritable évolution n'est possible en si peu de temps. Ce retour est probablement motivé par l'émotion, pas par un changement réel. <strong>Conseil :</strong> Demandez plus de temps avant toute décision.</p>
            </div>

            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-bold text-yellow-700 mb-2">1 à 3 mois : Période de Transition</h3>
              <p className="text-gray-700"><strong>Signification :</strong> Début de prise de recul possible. Votre ex commence à réaliser l'absence mais le changement profond est rare. Souvent lié à l'échec d'une nouvelle relation ou à la fin de la phase de soulagement post-rupture. <strong>Conseil :</strong> Restez prudent, observez les actions concrètes.</p>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-700 mb-2">3 à 6 mois : Période Idéale</h3>
              <p className="text-gray-700"><strong>Signification :</strong> Temps suffisant pour une vraie évolution personnelle. Votre ex a eu l'opportunité de travailler sur lui-même, de suivre une thérapie, ou de comprendre ses erreurs. Les retours dans cette période ont de bonnes chances de réussite. <strong>Conseil :</strong> Évaluez les changements concrets avant d'accepter.</p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-700 mb-2">6 mois à 1 an : Retour Mature</h3>
              <p className="text-gray-700"><strong>Signification :</strong> Période de maturation complète. Votre ex a vécu d'autres expériences, a gagné en maturité et revient avec une vision claire. Ces retours sont souvent les plus sincères. <strong>Conseil :</strong> Vérifiez que vous avez vous aussi évolué pendant ce temps.</p>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-bold text-purple-700 mb-2">Plus d'1 an : Nostalgie ou Nouveau Départ ?</h3>
              <p className="text-gray-700"><strong>Signification :</strong> Deux possibilités : soit une nostalgie ponctuelle (souvent liée à un événement), soit un véritable nouveau départ après avoir construit séparément. <strong>Conseil :</strong> Analysez le contexte : pourquoi maintenant ? Que s'est-il passé dans sa vie récemment ?</p>
            </div>
          </div>
        </section>

      </ContentPage>
  );
}
