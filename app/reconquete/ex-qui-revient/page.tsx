import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getBreadcrumbSchema, getFAQSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';

export const metadata: Metadata = {
  title: 'Ex qui Revient : Que Faire ? Conseils Voyance',
  description: 'Votre ex est revenu ? Découvrez que faire selon le tarot. Faut-il donner une seconde chance ?',
  keywords: ['ex qui revient', 'seconde chance', 'retrouvailles'],
  alternates: { canonical: 'https://voyantlove.fr/reconquete/ex-qui-revient' },
};

export default function ExQuiRevientPage() {
  const articleSchema = getArticleSchema({
    title: 'Ex qui Revient : Que Faire ? Conseils Voyance',
    description: 'Votre ex est revenu ? Découvrez que faire selon le tarot. Faut-il donner une seconde chance ?',
    url: 'https://voyantlove.fr/reconquete/ex-qui-revient',
    datePublished: '2026-01-17',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['ex qui revient', 'seconde chance', 'retrouvailles'],
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Reconquête', url: 'https://voyantlove.fr/reconquete' },
    { name: 'Ex qui Revient', url: 'https://voyantlove.fr/reconquete/ex-qui-revient' },
  ]);

  const faqSchema = getFAQSchema([
    {
      question: 'Mon ex qui revient après un silence radio, est-ce bon signe ?',
      answer: 'Le retour après un silence radio peut être positif s\'il s\'accompagne de changements concrets. Observez si votre ex prend ses responsabilités, reconnaît ses erreurs et propose des solutions. Le tarot révèle si ce retour est sincère ou motivé par la solitude. Un vrai retour se manifeste par des actions, pas seulement des paroles.',
    },
    {
      question: 'Quels sont les signes qu\'un ex revient pour de bon ?',
      answer: 'Les signes d\'un retour sincère incluent : reconnaissance des erreurs passées, changements visibles de comportement, patience et respect de votre rythme, communication ouverte sur les problèmes, engagement concret pour l\'avenir. Le tarot avec Les Amoureux et Le Jugement confirme un retour authentique basé sur une véritable évolution.',
    },
    {
      question: 'Comment réagir quand mon ex revient ?',
      answer: 'Prenez du recul avant de répondre. Posez-vous les bonnes questions : pourquoi revient-il maintenant ? A-t-il changé ? Ai-je pardonné ? Demandez une discussion honnête sur les causes de la rupture. Observez ses actions sur plusieurs semaines. Le tarot guide votre décision en révélant ses vraies motivations et vos chances de réussite.',
    },
    {
      question: 'Faut-il toujours accepter le retour de son ex ?',
      answer: 'Non, refuser peut être la meilleure décision si : votre ex n\'a pas changé, les causes de rupture persistent, vous n\'avez pas pardonné, il revient par manipulation ou ego. Accepter sans conditions garantit l\'échec. Le tarot avec La Tour ou Le Diable révèle les situations toxiques où refuser protège votre bien-être.',
    },
    {
      question: 'Combien de temps faut-il avant qu\'un ex revienne ?',
      answer: 'La durée varie selon les situations : 3 à 6 mois en moyenne pour une vraie évolution. Un retour trop rapide (moins d\'un mois) est souvent motivé par la nostalgie ou la solitude, pas par un changement profond. Le tarot révèle le timing idéal et si ce retour mènera à une relation durable.',
    },
    {
      question: 'Comment différencier un retour sincère d\'une manipulation ?',
      answer: 'Un retour sincère montre : cohérence entre paroles et actes, reconnaissance des torts, patience, respect de vos limites. Une manipulation révèle : promesses sans actions, urgence pour revenir, culpabilisation, refus d\'assumer ses erreurs. Le tarot avec Le Bateleur inversé ou La Lune alerte sur les intentions douteuses.',
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
      <header className="bg-gradient-to-r from-violet-500 via-pink-500 to-rose-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Retour</Link>
          <h1 className="text-4xl font-bold mb-4">💕 Ex qui Revient</h1>
          <p className="text-xl opacity-95 mb-6">Que faire selon le tarot ?</p>
          <a href="#consultation" className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition inline-block">Consultation</a>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl p-6 mb-8 grid grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl">⭐</div><div className="text-2xl font-bold text-pink-600">4.8/5</div></div>
          <div><div className="text-3xl">💕</div><div className="text-2xl font-bold text-pink-600">72%</div></div>
          <div><div className="text-3xl">⏰</div><div className="text-2xl font-bold text-pink-600">3-6m</div></div>
          <div><div className="text-3xl">🔮</div><div className="text-2xl font-bold text-pink-600">89%</div></div>
        </div>

        <EEATSignal
          colorScheme="purple"
          method="Tarot de la reconquête amoureuse"
        />

        <article className="bg-white rounded-xl p-8 mb-8 border-t-4 border-pink-500">
          <p className="text-lg mb-4">Votre <strong>ex qui revient</strong> pose la question cruciale : <strong>que faire</strong> ? Selon les statistiques, 72% des personnes confrontées au <strong>retour de l'ex</strong> hésitent entre donner une <strong>seconde chance</strong> ou refuser définitivement. Le <strong>tarot</strong> guide votre décision en révélant les vraies motivations de ce retour et vos chances réelles de réussite. Cette situation délicate nécessite une analyse approfondie avant toute décision.</p>
          <p className="text-lg mb-4">Le <strong>retour d'un ex</strong> peut signifier plusieurs choses : des regrets sincères accompagnés d'une véritable évolution personnelle, une simple nostalgie passagère, une peur de la solitude, ou dans les cas les plus problématiques, une tentative de manipulation. Le <strong>tarot de Marseille</strong> et les oracles amoureux permettent de distinguer ces motivations pour éviter de répéter les mêmes erreurs qui ont mené à la première rupture.</p>
          <p className="text-lg">Comprendre pourquoi votre <strong>ex revenu</strong> frappe à votre porte est essentiel pour prendre la bonne décision. Cette guidance tarot vous aide à analyser la situation objectivement, au-delà des émotions du moment, pour construire un avenir sentimental épanouissant.</p>
        </article>

        {/* ZONE 1: Early CTA - Bandeau compact après introduction */}
        <VoyantQuickCTA topic="reconquete" source="ex-qui-revient-early" />

        <section className="bg-white rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-pink-600">Les 5 Types de Retour d'Ex : Identifier les Vraies Motivations</h2>
          <p className="text-gray-700 mb-6">Tous les <strong>retours d'ex</strong> ne se ressemblent pas. Comprendre le type de retour vous aide à réagir de manière appropriée et à protéger votre cœur.</p>

          <div className="space-y-4">
            <div className="bg-green-50 border-l-4 border-green-500 p-5">
              <h3 className="font-bold text-green-700 mb-3 text-xl">1. Le Retour Sincère (Le Plus Rare)</h3>
              <p className="text-gray-700 mb-3">Votre ex a réellement changé et évolué. Il ou elle reconnaît ses erreurs, a travaillé sur les causes de la rupture et revient avec des solutions concrètes. Ce type de retour se manifeste par de la patience, du respect de votre rythme, et une communication ouverte.</p>
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
          title="💕 Voyants Spécialisés Retour de l'Ex"
          subtitle="Ces voyants experts ont accompagné des centaines de personnes dans votre situation. Leur guidance vous aide à prendre la bonne décision et à voir clair dans les intentions de votre ex."
          limit={3}
          showOnlineFirst={true}
          source="ex-qui-revient-mid"
        />

        <section className="bg-white rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-pink-600">6 Questions Essentielles Avant de Décider</h2>
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

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
              <h3 className="font-bold text-red-700 mb-4 text-xl flex items-center">
                <span className="text-2xl mr-2">🚩</span> Red Flags : Refusez le Retour
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
                <span className="text-2xl mr-2">✅</span> Green Flags : Envisagez la Seconde Chance
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
          <h2 className="text-3xl font-bold mb-6 text-purple-700">🔮 Guidance Tarot : Les Cartes du Retour de l'Ex</h2>
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
              <p className="text-gray-700"><strong>Signification :</strong> Temps suffisant pour une vraie évolution personnelle. Votre ex a eu l'opportunité de travailler sur lui-même, de suivre une thérapie, ou de comprendre ses erreurs. Les retours dans cette période ont 68% de chances de réussite. <strong>Conseil :</strong> Évaluez les changements concrets avant d'accepter.</p>
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

        <section className="bg-white rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-pink-600">Questions Fréquentes sur le Retour de l'Ex</h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg text-gray-800 mb-3">Mon ex qui revient après un silence radio, est-ce bon signe ?</h3>
              <p className="text-gray-700">Le retour après un <strong>silence radio</strong> peut être positif s'il s'accompagne de changements concrets. Observez si votre ex prend ses responsabilités, reconnaît ses erreurs et propose des solutions. Le tarot révèle si ce retour est sincère ou motivé par la solitude. Un vrai retour se manifeste par des actions, pas seulement des paroles. Attendez plusieurs semaines pour évaluer la cohérence entre ses dires et ses actes.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg text-gray-800 mb-3">Quels sont les signes qu'un ex revient pour de bon ?</h3>
              <p className="text-gray-700">Les <strong>signes d'un retour sincère</strong> incluent : reconnaissance des erreurs passées, changements visibles de comportement, patience et respect de votre rythme, communication ouverte sur les problèmes, engagement concret pour l'avenir. Le tarot avec Les Amoureux et Le Jugement confirme un retour authentique basé sur une véritable évolution. Méfiez-vous des belles promesses sans preuves tangibles.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg text-gray-800 mb-3">Comment réagir quand mon ex revient ?</h3>
              <p className="text-gray-700">Prenez du recul avant de répondre. Posez-vous les bonnes questions : pourquoi revient-il maintenant ? A-t-il changé ? Ai-je pardonné ? Demandez une discussion honnête sur les causes de la rupture. Observez ses actions sur plusieurs semaines. Le <strong>tarot</strong> guide votre décision en révélant ses vraies motivations et vos chances de réussite. Ne cédez pas à la précipitation émotionnelle.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg text-gray-800 mb-3">Faut-il toujours accepter le retour de son ex ?</h3>
              <p className="text-gray-700">Non, refuser peut être la meilleure décision si : votre ex n'a pas changé, les causes de rupture persistent, vous n'avez pas pardonné, il revient par manipulation ou ego. Accepter sans conditions garantit l'échec. Le tarot avec La Tour ou Le Diable révèle les situations toxiques où refuser protège votre bien-être. Votre santé émotionnelle prime sur la nostalgie.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg text-gray-800 mb-3">Combien de temps faut-il avant qu'un ex revienne ?</h3>
              <p className="text-gray-700">La durée varie selon les situations : <strong>3 à 6 mois en moyenne</strong> pour une vraie évolution. Un retour trop rapide (moins d'un mois) est souvent motivé par la nostalgie ou la solitude, pas par un changement profond. Le tarot révèle le timing idéal et si ce retour mènera à une relation durable. La patience est une vertu dans ces situations.</p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-3">Comment différencier un retour sincère d'une manipulation ?</h3>
              <p className="text-gray-700">Un <strong>retour sincère</strong> montre : cohérence entre paroles et actes, reconnaissance des torts, patience, respect de vos limites. Une <strong>manipulation</strong> révèle : promesses sans actions, urgence pour revenir, culpabilisation, victimisation, refus d'assumer ses erreurs. Le tarot avec Le Bateleur inversé ou La Lune alerte sur les intentions douteuses. Faites confiance à votre intuition.</p>
            </div>
          </div>
        </section>

        {/* ZONE 3: Final CTA - Dernière opportunité de conversion */}
        <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white rounded-xl p-10 mb-8 text-center shadow-2xl">
          <div className="mb-6">
            <h2 className="text-4xl font-bold mb-4">🔮 Ne Restez Pas Dans le Doute</h2>
            <p className="text-xl opacity-95 max-w-2xl mx-auto mb-2">
              Obtenez une guidance claire et honnête sur le retour de votre ex
            </p>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Nos voyants spécialisés révèlent les vraies motivations et vos chances réelles de réussite
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8 text-sm">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-semibold">Réponse Immédiate</div>
              <div className="opacity-90 text-xs mt-1">Voyants disponibles maintenant</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl mb-2">🎯</div>
              <div className="font-semibold">Guidance Précise</div>
              <div className="opacity-90 text-xs mt-1">Adaptée à votre situation</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl mb-2">💯</div>
              <div className="font-semibold">Sans Jugement</div>
              <div className="opacity-90 text-xs mt-1">Écoute bienveillante garantie</div>
            </div>
          </div>

          <a
            href="https://www.monsitevoyance.com/zoom_voyant.php?id=8864&partner=383&ref=ex-qui-revient-final"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-white text-pink-600 px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"
          >
            🔮 Consulter un Voyant Maintenant
          </a>
          <p className="mt-4 text-sm opacity-90">
            ✓ 2,000+ avis positifs • ✓ Paiement sécurisé • ✓ Confidentialité garantie
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold mb-4 text-xl text-gray-800">📚 Articles Connexes</h3>
          <div className="space-y-3">
            <Link href="/reconquete" className="block text-pink-600 hover:text-pink-800 font-medium">→ Reconquête Amoureuse : Toutes nos Guidances</Link>
            <Link href="/reconquete/seconde-chance-amour" className="block text-pink-600 hover:text-pink-800 font-medium">→ Seconde Chance en Amour : Conditions de Réussite</Link>
            <Link href="/reconquete/se-remettre-ensemble" className="block text-pink-600 hover:text-pink-800 font-medium">→ Se Remettre Ensemble : Les 5 Étapes</Link>
            <Link href="/reconquete/ex-revient-silence-radio" className="block text-pink-600 hover:text-pink-800 font-medium">→ Ex qui Revient après Silence Radio</Link>
            <Link href="/reconquete/retour-de-lex" className="block text-pink-600 hover:text-pink-800 font-medium">→ Retour de l'Ex : Signes et Timing</Link>
            <Link href="/reconquete/va-t-il-elle-revenir" className="block text-pink-600 hover:text-pink-800 font-medium">→ Va-t-il/elle Revenir ? Prédiction Tarot</Link>
            <Link href="/reconquete/reconquerir-son-ex" className="block text-pink-600 hover:text-pink-800 font-medium">→ Reconquérir son Ex : Stratégies Efficaces</Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-violet-500 via-pink-500 to-rose-500 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">💕 Guidance Retour</h2>
          <p className="mb-6">Découvrez que faire</p>
          <a href="#consultation" className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition inline-block">Consultation</a>
        </div>
      </div>
    </main>
  );
}
