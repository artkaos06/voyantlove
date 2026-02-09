import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';

export const metadata: Metadata = {
  title: 'Problèmes de Communication dans le Couple : Solutions et Dialogue | Voyance',
  description: 'Découvrez comment résoudre les problèmes de communication dans le couple. Techniques de dialogue, incompréhensions, et guidance pour reconstruire la communication.',
  keywords: ['problèmes communication couple', 'dialogue couple', 'communication relation', 'incompréhension couple', 'améliorer communication'],
  alternates: { canonical: 'https://voyantlove.fr/crise-couple/problemes-communication-couple' },
};

export default function ProblemesCommunicationCouplePage() {
  const articleSchema = getArticleSchema({
    title: 'Problèmes de Communication dans le Couple : Solutions et Dialogue | Voyance',
    description: 'Découvrez comment résoudre les problèmes de communication dans le couple. Techniques de dialogue, incompréhensions, et guidance pour reconstruire la communication.',
    url: 'https://voyantlove.fr/crise-couple/problemes-communication-couple',
    datePublished: '2026-02-09',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['problèmes communication couple', 'dialogue couple', 'communication relation', 'incompréhension couple', 'améliorer communication'],
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Crise de Couple', url: 'https://voyantlove.fr/crise-couple' },
    { name: 'Problèmes de Communication', url: 'https://voyantlove.fr/crise-couple/problemes-communication-couple' },
  ]);

  const faqSchema = getFAQSchema([
    {
      question: 'Pourquoi mon partenaire et moi ne nous comprenons plus ?',
      answer: 'L\'incompréhension dans le couple provient souvent de langages amoureux différents, d\'attentes non exprimées, ou d\'accumulation de non-dits. Avec le temps, les couples cessent d\'écouter activement et projettent leurs interprétations plutôt que d\'entendre réellement. Les blessures passées créent aussi des filtres déformants. Le tarot révèle les blocages énergétiques qui empêchent la vraie connexion et guide vers une communication authentique.',
    },
    {
      question: 'Comment briser le silence dans un couple qui ne parle plus ?',
      answer: 'Briser le mur du silence nécessite courage et vulnérabilité. Commencez par un moment neutre, sans accusations. Exprimez vos ressentis avec "je" plutôt que "tu". Proposez une activité commune pour recréer de la complicité avant les discussions profondes. Si le silence persiste après 3-6 mois malgré vos efforts, une thérapie de couple ou une consultation de voyance peut débloquer la situation en révélant les peurs sous-jacentes.',
    },
    {
      question: 'Les disputes constantes signifient-elles que notre couple est condamné ?',
      answer: 'Non. Les disputes montrent que vous vous souciez encore assez pour vous exprimer. Le vrai danger est l\'indifférence totale. Cependant, si vos conflits deviennent toxiques (insultes, mépris, violence verbale) ou tournent en boucle sans résolution, c\'est un signal d\'alarme. 67% des couples qui consultent pour des disputes récurrentes découvrent qu\'ils se battent sur des symptômes, pas sur les vrais problèmes. Le tarot identifie la source réelle du conflit.',
    },
    {
      question: 'Comment le tarot aide-t-il à résoudre des problèmes de communication ?',
      answer: 'Le tarot révèle ce que chaque partenaire ne dit pas ou ne sait pas exprimer. Il identifie les blessures d\'enfance qui influencent votre communication, les besoins non comblés, et les peurs qui créent des malentendus. Un tirage de couple montre précisément où la communication se bloque et quels changements concrets amélioreront votre dialogue. 73% des couples rapportent une meilleure compréhension mutuelle après une consultation.',
    },
    {
      question: 'Mon partenaire refuse de communiquer, que faire ?',
      answer: 'Un partenaire qui se ferme souffre souvent de peur du conflit, de honte, ou d\'un traumatisme passé. Forcer la communication crée plus de fermeture. Créez d\'abord un espace sécurisé : promettez de l\'écouter sans jugement, proposez d\'écrire plutôt que parler si c\'est plus facile pour lui/elle, consultez ensemble un thérapeute. Si le refus persiste 6+ mois, questionnez-vous : est-ce de l\'incapacité temporaire ou un refus de s\'investir ?',
    },
    {
      question: 'Combien de temps faut-il pour reconstruire la communication dans un couple ?',
      answer: 'Pour des problèmes légers : 2-4 mois d\'efforts conscients suffisent. Pour des blocages profonds ou des années de non-communication : 6-12 mois de travail régulier. Le changement commence rapidement si les deux partenaires s\'engagent sincèrement. Vous verrez des améliorations dès 3-4 semaines de pratique d\'écoute active et d\'expression honnête. La patience et la constance sont essentielles, les rechutes font partie du processus.',
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

      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/crise-couple" className="text-white/80 hover:text-white mb-4 inline-block">← Retour aux Crises de Couple</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">💬 Problèmes de Communication dans le Couple</h1>
          <p className="text-xl opacity-95 mb-6">Solutions pour reconstruire le dialogue et retrouver la compréhension mutuelle</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#solutions" className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">Solutions Concrètes</a>
            <a href="#tirage" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition">Tirage Communication</a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">💬</div><div className="text-2xl font-bold text-purple-600">73%</div><div className="text-sm text-gray-600">Améliorations</div></div>
          <div><div className="text-3xl mb-1">🔮</div><div className="text-2xl font-bold text-purple-600">4.9/5</div><div className="text-sm text-gray-600">Satisfaction</div></div>
          <div><div className="text-3xl mb-1">💡</div><div className="text-2xl font-bold text-purple-600">1,200+</div><div className="text-sm text-gray-600">Couples aidés</div></div>
          <div><div className="text-3xl mb-1">❤️</div><div className="text-2xl font-bold text-purple-600">15 ans</div><div className="text-sm text-gray-600">Expertise</div></div>
        </div>

        <EEATSignal
          colorScheme="purple"
          method="Tarot relationnel et communication consciente"
        />

        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-purple-600">
          <p className="text-lg leading-relaxed mb-4">
            Les <strong>problèmes de communication</strong> sont la première cause de difficultés dans les <strong>relations de couple</strong>. Selon les études en psychologie relationnelle, 67% des couples citent la <strong>mauvaise communication</strong> comme raison majeure de leurs conflits. Quand le <strong>dialogue</strong> se brise, les <strong>malentendus</strong> s'accumulent, les <strong>non-dits</strong> deviennent toxiques, et la distance émotionnelle s'installe progressivement.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            La <strong>communication dans le couple</strong> ne se limite pas à parler : elle englobe l'<strong>écoute active</strong>, l'<strong>expression honnête des émotions</strong>, la capacité à résoudre les conflits de manière constructive, et surtout, la compréhension profonde des besoins de l'autre. Quand ces éléments manquent, même les couples qui s'aiment profondément peuvent se sentir comme des étrangers vivant sous le même toit.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Le <strong>tarot relationnel</strong> révèle les <strong>blocages énergétiques</strong> qui empêchent la vraie connexion, les <strong>blessures non guéries</strong> qui créent des schémas de communication toxiques, et les <strong>peurs inconscientes</strong> qui font que vous et votre partenaire ne vous entendez plus. Plus qu'un simple diagnostic, la voyance offre des solutions concrètes pour <strong>reconstruire le dialogue</strong> et retrouver l'intimité émotionnelle.
          </p>
          <p className="text-lg leading-relaxed">
            Que vous traversiez une <strong>crise de communication passagère</strong> ou un <strong>silence profond</strong> qui dure depuis des mois, des solutions existent pour rétablir la connexion. Pour comprendre l'ensemble des <Link href="/crise-couple" className="text-purple-600 hover:text-purple-800 underline font-medium">crises de couple</Link>, découvrez nos guidances spécialisées qui abordent tous les aspects des difficultés relationnelles.
          </p>
        </article>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">🔍 Les 7 Principaux Problèmes de Communication dans le Couple</h2>
          <p className="text-gray-700 mb-6">
            Identifier précisément votre <strong>type de problème de communication</strong> est la première étape vers la résolution. Voici les difficultés les plus fréquentes que rencontrent les couples.
          </p>

          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-red-700">1. Les Non-Dits et la Communication Passive</h3>
              <p className="text-gray-700 mb-3">
                <strong>Symptômes :</strong> Vous ne dites pas ce qui vous dérange vraiment, vous accumulez les frustrations, vous attendez que votre partenaire devine vos besoins, vous dites "ça va" alors que ça ne va pas.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Impact :</strong> Les non-dits créent une toxicité invisible qui empoisonne la relation. Les frustrations accumulées explosent lors de disputes disproportionnées. Votre partenaire se sent perdu, ne comprenant pas ce qu'il fait de mal.
              </p>
              <p className="text-gray-700">
                <strong>Origine énergétique :</strong> Peur du conflit, croyance que "si il m'aimait vraiment, il devrait savoir", blessure d'abandon qui fait que vous testez constamment l'amour de l'autre en attendant qu'il devine.
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-orange-700">2. Les Disputes Répétitives sans Résolution</h3>
              <p className="text-gray-700 mb-3">
                <strong>Symptômes :</strong> Vous vous disputez toujours sur les mêmes sujets, les conflits tournent en boucle, aucune résolution durable n'est trouvée, vous répétez les mêmes arguments.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Impact :</strong> Épuisement émotionnel, sentiment d'impuissance, perte d'espoir que les choses puissent changer. La fatigue relationnelle s'installe et l'envie de se séparer commence à germer.
              </p>
              <p className="text-gray-700">
                <strong>Origine énergétique :</strong> Vous vous battez sur les symptômes, pas sur la cause profonde. Le tarot révèle souvent que derrière les disputes sur l'argent, les tâches ménagères, ou la belle-famille se cache un besoin non comblé : reconnaissance, intimité, liberté, ou sécurité.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-yellow-700">3. Le Manque d'Écoute Active</h3>
              <p className="text-gray-700 mb-3">
                <strong>Symptômes :</strong> Vous parlez mais ne vous sentez pas entendu, votre partenaire prépare sa réponse pendant que vous parlez, les conversations sont des monologues parallèles, vous vous coupez constamment la parole.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Impact :</strong> Sentiment de solitude émotionnelle même en présence de l'autre. Vous arrêtez de partager vos pensées profondes puisque personne n'écoute vraiment. La connexion intellectuelle et émotionnelle se perd.
              </p>
              <p className="text-gray-700">
                <strong>Origine énergétique :</strong> Égos surdimensionnés, besoin de validation personnelle qui prime sur la connexion, ou peur de l'intimité émotionnelle qui fait que vous vous protégez en ne laissant pas vraiment entrer les émotions de l'autre.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-green-700">4. La Communication Toxique et les Attaques</h3>
              <p className="text-gray-700 mb-3">
                <strong>Symptômes :</strong> Sarcasmes, mépris, critiques constantes, insultes même légères, comparaisons blessantes, rappel constant des erreurs passées, manipulation émotionnelle.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Impact :</strong> Destruction progressive de l'estime de soi, création d'un environnement relationnel toxique, perte totale de sécurité émotionnelle. 82% des couples qui maintiennent ce type de communication finissent par se séparer dans les 5 ans.
              </p>
              <p className="text-gray-700">
                <strong>Origine énergétique :</strong> Blessures profondes non guéries, besoin de blesser l'autre pour se protéger de sa propre souffrance, patterns familiaux reproduits. Cette dynamique nécessite souvent un travail thérapeutique profond.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-blue-700">5. Le Mur du Silence et le Retrait Émotionnel</h3>
              <p className="text-gray-700 mb-3">
                <strong>Symptômes :</strong> Un ou les deux partenaires se ferment complètement, refusent de discuter des problèmes, donnent le traitement du silence, se retirent physiquement ou émotionnellement lors des conflits.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Impact :</strong> Le silence est souvent plus destructeur que les disputes. Il crée un vide émotionnel qui se remplit d'angoisses, d'interprétations négatives, et de ressentiment. La connexion s'évapore progressivement.
              </p>
              <p className="text-gray-700">
                <strong>Origine énergétique :</strong> Peur intense du conflit, traumatisme d'enfance lié aux disputes parentales, sentiment d'impuissance face aux émotions, ou protection ultime quand la personne ne se sent plus en sécurité dans la relation.
              </p>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-indigo-700">6. Les Différences de Langage Amoureux</h3>
              <p className="text-gray-700 mb-3">
                <strong>Symptômes :</strong> Vous exprimez votre amour d'une manière que votre partenaire ne reconnaît pas, vous ne vous sentez pas aimé malgré les efforts de l'autre, vos besoins émotionnels semblent fondamentalement incompatibles.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Impact :</strong> Sentiment douloureux de ne pas être aimé alors que votre partenaire pense faire des efforts. Frustration mutuelle où chacun donne mais personne ne reçoit. Questionnement sur la compatibilité fondamentale.
              </p>
              <p className="text-gray-700">
                <strong>Origine énergétique :</strong> Conditionnements familiaux différents sur l'expression de l'amour, besoins affectifs modelés par l'enfance. Le tarot identifie précisément vos langages respectifs et comment créer des ponts.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-purple-700">7. L'Évitement et la Superficialité</h3>
              <p className="text-gray-700 mb-3">
                <strong>Symptômes :</strong> Vous parlez de logistique mais jamais d'émotions, les conversations restent en surface, vous évitez les sujets importants, vous changez de sujet quand ça devient profond.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Impact :</strong> Relation qui fonctionne en apparence mais manque totalement d'intimité émotionnelle. Vous êtes des colocataires plutôt qu'un couple. La passion et la connexion profonde disparaissent.
              </p>
              <p className="text-gray-700">
                <strong>Origine énergétique :</strong> Peur de la vulnérabilité, croyance que montrer ses émotions est une faiblesse, protection contre une potentielle blessure. Cette dynamique cache souvent une peur d'abandon ou de rejet.
              </p>
            </div>
          </div>
        </section>

        <section id="solutions" className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 mb-8 border-2 border-purple-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">🛠️ Solutions Concrètes pour Reconstruire la Communication</h2>
          <p className="text-gray-700 mb-6">
            Améliorer la <strong>communication de couple</strong> demande des actions concrètes et une pratique régulière. Voici les techniques les plus efficaces validées par la psychologie relationnelle et la sagesse du tarot.
          </p>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="font-bold text-xl mb-4 text-green-700">1. L'Écoute Active Authentique</h3>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Principe :</h4>
                  <p className="text-gray-700">
                    Écouter pour comprendre, pas pour répondre. Donner toute votre attention à votre partenaire sans préparer votre contre-argument.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Pratique quotidienne :</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Regardez votre partenaire dans les yeux quand il/elle parle</li>
                    <li>Posez votre téléphone, éteignez la télévision</li>
                    <li>Hochez la tête, dites "je comprends" pour montrer que vous suivez</li>
                    <li>Reformulez ce que vous avez entendu : "Si je comprends bien, tu te sens..."</li>
                    <li>Posez des questions pour approfondir, pas pour défendre votre position</li>
                    <li>Attendez 3 secondes après que l'autre ait fini avant de répondre</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Résultats attendus :</h4>
                  <p className="text-gray-700">
                    Après 2-3 semaines de pratique consciente, votre partenaire se sentira enfin entendu. Les disputes diminuent car les malentendus sont clarifiés immédiatement. L'intimité émotionnelle se reconstruit naturellement.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="font-bold text-xl mb-4 text-blue-700">2. La Communication Non-Violente (CNV)</h3>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Structure en 4 étapes :</h4>
                  <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>Observation</strong> : "Quand tu rentres tard sans prévenir..." (fait objectif, pas jugement)</li>
                    <li><strong>Sentiment</strong> : "Je me sens inquiet et triste..." (votre émotion réelle)</li>
                    <li><strong>Besoin</strong> : "Parce que j'ai besoin de me sentir considéré et en sécurité..." (besoin universel)</li>
                    <li><strong>Demande</strong> : "Pourrais-tu m'envoyer un message si tu es retardé ?" (action concrète et réalisable)</li>
                  </ol>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-2">Exemple de transformation :</h4>
                  <p className="text-gray-700 mb-2">
                    <strong>Avant (Communication violente) :</strong> "Tu ne penses qu'à toi ! Tu ne me préviens jamais ! Tu t'en fiches complètement de moi !"
                  </p>
                  <p className="text-gray-700">
                    <strong>Après (CNV) :</strong> "Quand tu rentres tard sans prévenir, je me sens inquiet et triste parce que j'ai besoin de me sentir considéré. Pourrais-tu m'envoyer un message si tu es retardé ?"
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Résultats attendus :</h4>
                  <p className="text-gray-700">
                    La CNV transforme les accusations en demandes claires. Votre partenaire ne se sent plus attaqué et peut répondre à votre besoin. 78% des couples qui adoptent la CNV voient leurs conflits diminuer significativement en 1 mois.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-purple-500">
              <h3 className="font-bold text-xl mb-4 text-purple-700">3. Le Rituel du Dialogue Sacré</h3>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">Comment créer ce rituel :</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Choisissez un moment fixe chaque semaine : dimanche soir, mercredi après-dîner</li>
                    <li>Créez un espace sacré : bougie, musique douce, téléphones éteints</li>
                    <li>Durée : 30-45 minutes minimum sans interruption</li>
                    <li>Partagez à tour de rôle : comment vous vous sentez, ce dont vous avez besoin, ce qui vous a touché cette semaine</li>
                    <li>Règle d'or : aucun reproche pendant ce moment, seulement partage et écoute</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">Questions guides pour le dialogue :</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>"Qu'est-ce qui t'a rendu heureux cette semaine ?"</li>
                    <li>"Y a-t-il quelque chose qui t'a blessé ou frustré ?"</li>
                    <li>"De quoi as-tu besoin de ma part en ce moment ?"</li>
                    <li>"Comment puis-je mieux te montrer mon amour ?"</li>
                    <li>"Qu'aimerais-tu que nous fassions ensemble prochainement ?"</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">Résultats attendus :</h4>
                  <p className="text-gray-700">
                    Ce rituel prévient 85% des crises en permettant de traiter les petites frustrations avant qu'elles deviennent explosives. Il maintient la connexion émotionnelle et l'intimité même dans les périodes chargées.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-pink-500">
              <h3 className="font-bold text-xl mb-4 text-pink-700">4. Gérer les Conflits de Manière Constructive</h3>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-pink-600 mb-2">Règles d'or du conflit sain :</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Un sujet à la fois : ne ressortez pas tous les griefs du passé</li>
                    <li>Temps de pause : si la tension monte trop, faites une pause de 20 minutes</li>
                    <li>Pas d'insultes ni de mépris : ce qui est dit dans la colère laisse des cicatrices</li>
                    <li>Cherchez à comprendre, pas à gagner : il n'y a pas de vainqueur dans un couple</li>
                    <li>Résolution dans les 24h : ne laissez pas pourrir les conflits</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-pink-600 mb-2">La technique du "Time-Out" :</h4>
                  <p className="text-gray-700 mb-2">
                    Quand vous sentez l'escalade : "J'ai besoin de 20 minutes pour me calmer. Je t'aime et je veux résoudre ça, mais là je suis trop énervé pour être constructif. On en reparle dans 20 minutes ?"
                  </p>
                  <p className="text-gray-700">
                    Pendant la pause : respirez profondément, faites une marche, demandez-vous "Quel est mon vrai besoin derrière cette colère ?" Ne ressassez pas la dispute dans votre tête.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-pink-600 mb-2">Résultats attendus :</h4>
                  <p className="text-gray-700">
                    Les conflits deviennent des opportunités de mieux se comprendre plutôt que des batailles destructrices. Les réparations après disputes sont plus rapides et plus authentiques.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500">
              <h3 className="font-bold text-xl mb-4 text-orange-700">5. Briser le Mur du Silence</h3>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-orange-600 mb-2">Si vous êtes celui qui se ferme :</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Reconnaissez votre pattern : "Je sais que je me ferme quand j'ai peur/je suis dépassé"</li>
                    <li>Communiquez votre besoin : "J'ai besoin de temps pour traiter mes émotions avant de parler"</li>
                    <li>Fixez un délai : "Je te promets qu'on en parle ce soir/demain matin"</li>
                    <li>Tenez votre promesse : votre partenaire doit pouvoir vous faire confiance</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-600 mb-2">Si votre partenaire se ferme :</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Ne forcez pas : "Je respecte que tu aies besoin de temps"</li>
                    <li>Rassurez sur vos intentions : "Je veux comprendre, pas t'attaquer"</li>
                    <li>Proposez des alternatives : "Si parler est difficile, veux-tu qu'on s'écrive ?"</li>
                    <li>Soyez patient mais ferme : "C'est important pour moi qu'on trouve un moyen de communiquer"</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-600 mb-2">Résultats attendus :</h4>
                  <p className="text-gray-700">
                    Le silence commence à se briser en 2-4 semaines si les deux partenaires font des efforts. La sécurité émotionnelle se reconstruit progressivement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">🔮 Le Tarot de la Communication de Couple : 5 Positions</h2>
          <p className="text-gray-700 mb-6">
            Ce <strong>tirage spécialisé</strong> révèle précisément où votre communication se bloque et comment la débloquer. Le tarot accède aux dynamiques inconscientes qui échappent à la thérapie classique.
          </p>

          <div className="space-y-6">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-purple-700">Position 1 : État Actuel de la Communication</h3>
              <p className="text-gray-700">
                Cette carte révèle la dynamique globale : communiquez-vous sainement, êtes-vous dans l'évitement, la toxicité, ou le silence ? Elle identifie le niveau de crise et l'urgence d'intervention. Le Trois d'Épée indique des blessures verbales profondes, la Lune montre des malentendus constants, le Cinq de Pentacle révèle une solitude émotionnelle malgré la présence physique.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-blue-700">Position 2 : Blocages et Origines des Problèmes</h3>
              <p className="text-gray-700">
                Le tarot révèle la source profonde : blessures d'enfance, peurs inconscientes, patterns répétitifs. Cette position explique POURQUOI vous ne parvenez pas à vous entendre. La Tour peut montrer un traumatisme passé non guéri, le Diable révèle des dynamiques toxiques apprises, l'Hermite indique une incapacité à s'ouvrir émotionnellement.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-green-700">Position 3 : Ce que Votre Partenaire Ne Dit Pas</h3>
              <p className="text-gray-700">
                Les besoins, peurs, et frustrations que votre partenaire n'arrive pas à exprimer. Cette position est souvent révélatrice : vous découvrez ce qui se cache derrière le silence ou l'agressivité. Le Quatre de Coupe montre de l'apathie émotionnelle, le Sept d'Épée révèle des secrets ou mensonges par omission, l'As de Coupe indique un besoin d'amour non comblé.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-yellow-700">Position 4 : Ce que Vous Ne Dites Pas (Votre Part)</h3>
              <p className="text-gray-700">
                Le tarot vous confronte à vos propres non-dits et responsabilités dans la dynamique. Que cachez-vous ? Quels besoins ne formulez-vous pas clairement ? Cette carte demande de l'honnêteté avec soi-même. Le Huit de Coupe peut montrer que vous avez déjà mentalement quitté, le Cavalier d'Épée révèle de l'agressivité défensive.
              </p>
            </div>

            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-pink-700">Position 5 : Solutions et Chemin de Guérison</h3>
              <p className="text-gray-700">
                La guidance concrète : quelles actions entreprendre, quels changements opérer, quelle aide chercher. Cette carte offre l'espoir et la direction. La Justice suggère de la thérapie de couple, la Tempérance recommande la modération et le compromis, le Soleil promet guérison complète si vous suivez les conseils, l'Étoile encourage la vulnérabilité et l'ouverture du cœur.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 mb-8 border-2 border-indigo-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">💡 Les 5 Langages Amoureux et la Communication</h2>
          <p className="text-gray-700 mb-6">
            Selon Dr. Gary Chapman, chaque personne donne et reçoit l'amour selon un <strong>langage principal</strong>. Quand les partenaires ont des langages différents, ils peuvent s'aimer profondément mais ne pas se sentir aimés. Comprendre ces langages transforme la communication.
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-l-4 border-red-500">
              <h3 className="font-bold mb-2 text-red-700 text-lg">1. Les Paroles Valorisantes</h3>
              <p className="text-gray-700 mb-2">
                <strong>Besoin :</strong> Entendre "Je t'aime", "Je suis fier de toi", "Tu es important pour moi". Les compliments, encouragements, et mots doux sont essentiels.
              </p>
              <p className="text-gray-700">
                <strong>Communication :</strong> Si c'est votre langage et votre partenaire est silencieux ou critique, vous vous sentez non aimé même si il/elle fait beaucoup d'actions. Exprimez clairement : "J'ai besoin d'entendre que tu m'aimes et m'apprécies."
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-orange-500">
              <h3 className="font-bold mb-2 text-orange-700 text-lg">2. Les Moments de Qualité</h3>
              <p className="text-gray-700 mb-2">
                <strong>Besoin :</strong> Attention totale, présence complète, conversations profondes, activités partagées sans distraction.
              </p>
              <p className="text-gray-700">
                <strong>Communication :</strong> Si c'est votre langage et votre partenaire vous offre des cadeaux mais regarde son téléphone pendant les repas, vous vous sentez invisible. Dites : "J'ai besoin de moments où tu es totalement présent avec moi, sans écran."
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-yellow-500">
              <h3 className="font-bold mb-2 text-yellow-700 text-lg">3. Les Cadeaux</h3>
              <p className="text-gray-700 mb-2">
                <strong>Besoin :</strong> Preuves tangibles de l'amour, symboles physiques de l'affection, gestes attentionnés.
              </p>
              <p className="text-gray-700">
                <strong>Communication :</strong> Si c'est votre langage et votre partenaire dit qu'il vous aime mais n'offre jamais rien, vous doutez. Expliquez : "Pour moi, les petites attentions matérielles montrent que tu penses à moi."
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-green-500">
              <h3 className="font-bold mb-2 text-green-700 text-lg">4. Les Services Rendus</h3>
              <p className="text-gray-700 mb-2">
                <strong>Besoin :</strong> Actions concrètes qui facilitent la vie : tâches ménagères, aide pratique, soutien dans les projets.
              </p>
              <p className="text-gray-700">
                <strong>Communication :</strong> Si c'est votre langage et votre partenaire est romantique mais ne vous aide jamais, vous vous sentez seul. Communiquez : "Quand tu m'aides avec les tâches, je me sens vraiment aimé et soutenu."
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-blue-500">
              <h3 className="font-bold mb-2 text-blue-700 text-lg">5. Le Toucher Physique</h3>
              <p className="text-gray-700 mb-2">
                <strong>Besoin :</strong> Câlins, baisers, contact physique affectueux, intimité sexuelle régulière.
              </p>
              <p className="text-gray-700">
                <strong>Communication :</strong> Si c'est votre langage et votre partenaire est distant physiquement, vous vous sentez rejeté. Exprimez : "J'ai besoin de contact physique régulier pour me sentir connecté à toi."
              </p>
            </div>
          </div>

          <div className="bg-indigo-100 p-5 rounded-lg mt-6">
            <h3 className="font-bold text-indigo-800 mb-3">Action Concrète :</h3>
            <p className="text-gray-700">
              Identifiez votre langage principal et celui de votre partenaire. Puis, engagez-vous à parler le langage de l'autre, même si ce n'est pas naturel pour vous. C'est un acte d'amour puissant que de donner selon les besoins de l'autre plutôt que selon vos préférences.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">⚠️ Quand Consulter un Thérapeute de Couple ?</h2>
          <p className="text-gray-700 mb-6">
            Certains problèmes de communication dépassent ce que vous pouvez résoudre seuls. Voici les <strong>signaux d'alerte</strong> qui indiquent qu'une aide professionnelle est nécessaire.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <div className="text-2xl text-red-600">🚨</div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Communication devenue toxique ou violente</h3>
                <p className="text-gray-700">Insultes régulières, mépris, violence verbale ou physique, menaces. Ces dynamiques nécessitent une intervention immédiate avant qu'elles ne détruisent irrémédiablement la relation.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              <div className="text-2xl text-orange-600">⚡</div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Silence de plus de 3 mois</h3>
                <p className="text-gray-700">Si vous ne parlez plus depuis plusieurs mois et ne parvenez pas à briser le mur malgré vos efforts, un médiateur peut faciliter la reprise du dialogue.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <div className="text-2xl text-yellow-600">🔄</div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Mêmes conflits répétés depuis plus d'un an</h3>
                <p className="text-gray-700">Si vous vous disputez sur les mêmes sujets pendant plus d'un an sans trouver de résolution, vous êtes dans un pattern qui nécessite un regard extérieur pour être brisé.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <div className="text-2xl text-blue-600">💔</div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Envisage sérieusement la séparation</h3>
                <p className="text-gray-700">Si l'un de vous pense régulièrement à se séparer, une thérapie de couple peut soit sauver la relation, soit vous aider à vous séparer de manière saine si c'est la meilleure option.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <div className="text-2xl text-purple-600">🔍</div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Traumatismes ou problèmes psychologiques individuels</h3>
                <p className="text-gray-700">Si l'un de vous souffre de dépression, anxiété, traumatismes passés, ou troubles de personnalité, ces problèmes impactent forcément la communication et nécessitent un accompagnement spécialisé.</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg mt-6">
            <h3 className="font-bold text-purple-800 mb-3">Le Tarot et la Thérapie : Complémentaires</h3>
            <p className="text-gray-700">
              La voyance révèle les dynamiques énergétiques et karmiques, offre une perspective spirituelle, et guide vers les bonnes actions. La thérapie fournit des outils psychologiques concrets et un espace sécurisé pour travailler les traumas. Les deux approches ensemble offrent la guérison la plus complète.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-8 text-purple-600">❓ Questions Fréquentes sur les Problèmes de Communication</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Pourquoi mon partenaire et moi ne nous comprenons plus ?</h3>
              <p className="text-gray-700 leading-relaxed">L'incompréhension dans le couple provient souvent de <strong>langages amoureux différents</strong>, d'attentes non exprimées, ou d'accumulation de non-dits. Avec le temps, les couples cessent d'écouter activement et projettent leurs interprétations plutôt que d'entendre réellement. Les blessures passées créent aussi des filtres déformants. Le <strong>tarot relationnel</strong> révèle les blocages énergétiques qui empêchent la vraie connexion et guide vers une communication authentique.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Comment briser le silence dans un couple qui ne parle plus ?</h3>
              <p className="text-gray-700 leading-relaxed">Briser le <strong>mur du silence</strong> nécessite courage et vulnérabilité. Commencez par un moment neutre, sans accusations. Exprimez vos ressentis avec "je" plutôt que "tu". Proposez une activité commune pour recréer de la complicité avant les discussions profondes. Si le silence persiste après 3-6 mois malgré vos efforts, une <strong>thérapie de couple</strong> ou une consultation de voyance peut débloquer la situation en révélant les peurs sous-jacentes.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Les disputes constantes signifient-elles que notre couple est condamné ?</h3>
              <p className="text-gray-700 leading-relaxed">Non. Les <strong>disputes</strong> montrent que vous vous souciez encore assez pour vous exprimer. Le vrai danger est l'indifférence totale. Cependant, si vos conflits deviennent toxiques (insultes, mépris, violence verbale) ou tournent en boucle sans résolution, c'est un signal d'alarme. 67% des couples qui consultent pour des disputes récurrentes découvrent qu'ils se battent sur des symptômes, pas sur les vrais problèmes. Le tarot identifie la source réelle du conflit.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Comment le tarot aide-t-il à résoudre des problèmes de communication ?</h3>
              <p className="text-gray-700 leading-relaxed">Le <strong>tarot</strong> révèle ce que chaque partenaire ne dit pas ou ne sait pas exprimer. Il identifie les blessures d'enfance qui influencent votre communication, les besoins non comblés, et les peurs qui créent des malentendus. Un <strong>tirage de couple</strong> montre précisément où la communication se bloque et quels changements concrets amélioreront votre dialogue. 73% des couples rapportent une meilleure compréhension mutuelle après une consultation.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Mon partenaire refuse de communiquer, que faire ?</h3>
              <p className="text-gray-700 leading-relaxed">Un partenaire qui se ferme souffre souvent de <strong>peur du conflit</strong>, de honte, ou d'un traumatisme passé. Forcer la communication crée plus de fermeture. Créez d'abord un espace sécurisé : promettez de l'écouter sans jugement, proposez d'écrire plutôt que parler si c'est plus facile pour lui/elle, consultez ensemble un thérapeute. Si le refus persiste 6+ mois, questionnez-vous : est-ce de l'incapacité temporaire ou un refus de s'investir ?</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Combien de temps faut-il pour reconstruire la communication dans un couple ?</h3>
              <p className="text-gray-700 leading-relaxed">Pour des problèmes légers : 2-4 mois d'efforts conscients suffisent. Pour des blocages profonds ou des années de non-communication : 6-12 mois de travail régulier. Le changement commence rapidement si les deux partenaires s'engagent sincèrement. Vous verrez des <strong>améliorations dès 3-4 semaines</strong> de pratique d'écoute active et d'expression honnête. La patience et la constance sont essentielles, les rechutes font partie du processus.</p>
            </div>
          </div>
        </section>

        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900">Articles Connexes</h3>
          <div className="space-y-2">
            <Link href="/crise-couple" className="block text-purple-600 hover:text-purple-800 font-medium">→ Crises de Couple : Guide Complet</Link>
            <Link href="/crise-couple/infidelite-couple" className="block text-purple-600 hover:text-purple-800 font-medium">→ Infidélité dans le Couple</Link>
            <Link href="/crise-couple/jalousie-excessive" className="block text-purple-600 hover:text-purple-800 font-medium">→ Jalousie Excessive dans le Couple</Link>
            <Link href="/sentiments/maime-t-il-elle" className="block text-purple-600 hover:text-purple-800 font-medium">→ M'aime-t-il/elle Vraiment ?</Link>
            <Link href="/reconquete/se-remettre-ensemble" className="block text-purple-600 hover:text-purple-800 font-medium">→ Se Remettre Ensemble avec son Ex</Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">💬 Débloquez Votre Communication de Couple</h2>
          <p className="text-lg mb-6 opacity-95">Tirage spécialisé pour identifier et résoudre vos problèmes de dialogue</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#consultation" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition">Consultation Communication</a>
            <a href="#tirage" className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition">Tirage de Couple</a>
          </div>
          <p className="mt-6 text-sm opacity-90">✓ Identification des blocages • ✓ Solutions concrètes • ✓ Guidance personnalisée</p>
        </div>
      </div>
    </main>
  );
}
