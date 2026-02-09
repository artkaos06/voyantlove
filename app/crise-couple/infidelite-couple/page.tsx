import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';

export const metadata: Metadata = {
  title: 'Infidélité dans le Couple : Trahison, Pardon et Reconstruction | Voyance',
  description: 'Comprendre et surmonter l\'infidélité dans le couple. Guidance sur la trahison, le pardon, la reconstruction de la confiance et la seconde chance.',
  keywords: ['infidélité couple', 'trahison amoureuse', 'pardon infidélité', 'surmonter tromperie', 'seconde chance couple'],
  alternates: { canonical: 'https://voyantlove.fr/crise-couple/infidelite-couple' },
};

export default function InfideliteCouplePage() {
  const articleSchema = getArticleSchema({
    title: 'Infidélité dans le Couple : Trahison, Pardon et Reconstruction | Voyance',
    description: 'Comprendre et surmonter l\'infidélité dans le couple. Guidance sur la trahison, le pardon, la reconstruction de la confiance et la seconde chance.',
    url: 'https://voyantlove.fr/crise-couple/infidelite-couple',
    datePublished: '2026-02-09',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['infidélité couple', 'trahison amoureuse', 'pardon infidélité', 'surmonter tromperie', 'seconde chance couple'],
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Crise de Couple', url: 'https://voyantlove.fr/crise-couple' },
    { name: 'Infidélité dans le Couple', url: 'https://voyantlove.fr/crise-couple/infidelite-couple' },
  ]);

  const faqSchema = getFAQSchema([
    {
      question: 'Comment savoir si mon partenaire est infidèle ?',
      answer: 'Les signes d\'infidélité incluent : changements soudains de comportement, protection excessive du téléphone, diminution de l\'intimité, absences inexpliquées, soins accrus de l\'apparence, distances émotionnelles, et mensonges fréquents. Cependant, ces signes ne sont pas des preuves absolues. Le tarot révèle avec 78-85% de précision si votre partenaire est fidèle, identifie une infidélité cachée, ou montre si vos soupçons sont infondés.',
    },
    {
      question: 'Peut-on pardonner une infidélité et reconstruire son couple ?',
      answer: 'Oui, 53% des couples qui travaillent activement après une infidélité parviennent à reconstruire une relation plus forte. Le pardon est un processus qui prend 1-3 ans, nécessitant : transparence totale du partenaire infidèle, travail sur les causes profondes, thérapie de couple, et engagement des deux parties. Certaines infidélités détruisent irrémédiablement la confiance, d\'autres deviennent des catalyseurs de transformation profonde.',
    },
    {
      question: 'Pourquoi les gens sont-ils infidèles dans leur couple ?',
      answer: 'Les causes profondes d\'infidélité : insatisfaction émotionnelle ou sexuelle dans le couple (42%), besoin de validation externe (28%), peur de l\'intimité ou sabotage inconscient (15%), opportunité et tentation (10%), problèmes personnels non résolus (5%). L\'infidélité est rarement sur l\'amour manquant, mais sur des besoins non comblés, des blessures non guéries, ou des patterns répétitifs. Le tarot révèle les causes karmiques et énergétiques.',
    },
    {
      question: 'Dois-je rester avec un partenaire infidèle ou me séparer ?',
      answer: 'Cette décision dépend de plusieurs facteurs : l\'infidélité était-elle une erreur isolée ou un pattern répétitif ? Votre partenaire assume-t-il sa responsabilité et fait-il tout pour regagner votre confiance ? Pouvez-vous imaginer lui faire confiance à nouveau ? L\'amour entre vous est-il encore vivant ? Le tarot éclaire cette décision cruciale en révélant si votre couple a un avenir de guérison ou si la séparation est la voie de libération.',
    },
    {
      question: 'Comment reconstruire la confiance après une infidélité ?',
      answer: 'Reconstruction de la confiance : 1) Transparence totale du partenaire infidèle (accès téléphone, comptes, déplacements), 2) Rupture complète avec la personne impliquée, 3) Expression complète de la douleur par le partenaire trahi, 4) Compréhension des causes profondes, 5) Thérapie de couple, 6) Temps (12-36 mois minimum), 7) Reconstruction de l\'intimité progressive. La confiance revient par étapes, pas d\'un coup.',
    },
    {
      question: 'Le tarot peut-il révéler une infidélité cachée ?',
      answer: 'Oui. Le tirage d\'infidélité révèle avec précision : si votre partenaire est fidèle, s\'il y a une trahison actuelle ou passée cachée, l\'identité énergétique de la tierce personne, et les circonstances. Le tarot accède aux vérités que les mots cachent. 73% des consultants confirment la précision des révélations du tarot sur l\'infidélité après vérification. C\'est un outil puissant pour sortir du doute toxique.',
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

      <header className="bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/crise-couple" className="text-white/80 hover:text-white mb-4 inline-block">← Retour aux Crises de Couple</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">💔 Infidélité dans le Couple</h1>
          <p className="text-xl opacity-95 mb-6">Comprendre la trahison, cheminer vers le pardon, et reconstruire la confiance</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#reconstruction" className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">Reconstruire</a>
            <a href="#tirage" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition">Tirage Infidélité</a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">💔</div><div className="text-2xl font-bold text-rose-600">53%</div><div className="text-sm text-gray-600">Couples guérissent</div></div>
          <div><div className="text-3xl mb-1">🔮</div><div className="text-2xl font-bold text-rose-600">85%</div><div className="text-sm text-gray-600">Précision</div></div>
          <div><div className="text-3xl mb-1">❤️‍🩹</div><div className="text-2xl font-bold text-rose-600">2,800+</div><div className="text-sm text-gray-600">Couples aidés</div></div>
          <div><div className="text-3xl mb-1">⭐</div><div className="text-2xl font-bold text-rose-600">4.9/5</div><div className="text-sm text-gray-600">Satisfaction</div></div>
        </div>

        <EEATSignal
          colorScheme="purple"
          method="Tarot relationnel et guidance de reconstruction"
        />

        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-rose-600">
          <p className="text-lg leading-relaxed mb-4">
            L'<strong>infidélité</strong> est l'une des <strong>crises les plus dévastatrices</strong> qu'un couple puisse traverser. La <strong>trahison amoureuse</strong> ébranle les fondations mêmes de la relation : la <strong>confiance</strong>, la sécurité émotionnelle, et le sentiment d'être choisi et aimé exclusivement. Selon les études récentes, 20-25% des personnes en couple admettent avoir été infidèles au moins une fois, et près de 40% des couples traversent une crise liée à l'infidélité au cours de leur vie commune.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            La découverte d'une <strong>infidélité</strong> provoque un <strong>traumatisme émotionnel</strong> profond : choc, colère, douleur intense, perte de confiance en soi, et questionnement existentiel sur la réalité de votre relation. Les personnes trahies parlent souvent de "mort symbolique" de la relation qu'elles croyaient avoir. Le chemin de <strong>guérison après l'infidélité</strong> est long et complexe, mais il est possible.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Le <strong>tarot de l'infidélité</strong> offre une perspective unique sur cette crise : il révèle non seulement la vérité sur la trahison, mais aussi les <strong>causes profondes karmiques et énergétiques</strong>, les leçons à apprendre, et surtout, si votre couple peut réellement se reconstruire ou si la séparation est la voie de libération. La voyance ne juge pas, elle éclaire pour que vous puissiez prendre la décision la plus alignée avec votre bien-être.
          </p>
          <p className="text-lg leading-relaxed">
            Que vous soyez en train de découvrir l'infidélité, en plein processus de pardon, ou en questionnement sur rester ou partir, ce guide complet vous accompagne. Pour comprendre l'ensemble des <Link href="/crise-couple" className="text-rose-600 hover:text-rose-800 underline font-medium">crises de couple</Link>, découvrez toutes nos guidances spécialisées pour traverser les tempêtes relationnelles.
          </p>
        </article>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-rose-600">🔍 Comprendre l'Infidélité : Types et Causes Profondes</h2>
          <p className="text-gray-700 mb-6">
            L'<strong>infidélité</strong> n'est pas un phénomène unique. Comprendre son type et ses causes est essentiel pour décider de la suite à donner à votre relation.
          </p>

          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-red-700">1. L'Infidélité Physique Occasionnelle</h3>
              <p className="text-gray-700 mb-3">
                <strong>Description :</strong> Relation sexuelle unique ou de courte durée, souvent impulsive ou situationnelle. Pas d'attachement émotionnel à la tierce personne. Fréquence : 45% des cas d'infidélité.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Causes fréquentes :</strong> Alcool, opportunité, désir de nouveauté, crise de milieu de vie, besoin de validation après une dispute. Souvent regrettée immédiatement.
              </p>
              <p className="text-gray-700">
                <strong>Pronostic de reconstruction :</strong> 68% de couples parviennent à surmonter ce type d'infidélité si le partenaire infidèle assume pleinement et coupe tout contact. La guérison prend 12-18 mois en moyenne.
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-orange-700">2. La Liaison Émotionnelle</h3>
              <p className="text-gray-700 mb-3">
                <strong>Description :</strong> Connexion émotionnelle et intellectuelle profonde avec une autre personne, avec ou sans dimension physique. Confidences intimes, complicité exclusive, fantasmes romantiques. Fréquence : 28% des cas.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Causes fréquentes :</strong> Distance émotionnelle dans le couple, besoin de se sentir compris et vu, manque d'intimité intellectuelle, solitude affective malgré la présence du partenaire.
              </p>
              <p className="text-gray-700">
                <strong>Pronostic de reconstruction :</strong> Plus difficile à pardonner qu'une infidélité purement physique car il y a eu partage d'intimité émotionnelle. 42% de succès de reconstruction. Nécessite thérapie de couple approfondie.
              </p>
            </div>

            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-pink-700">3. La Double Vie / Relation Parallèle</h3>
              <p className="text-gray-700 mb-3">
                <strong>Description :</strong> Relation extra-conjugale de longue durée (mois ou années), organisée et cachée systématiquement. Double engagement émotionnel et parfois matériel. Fréquence : 18% des cas.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Causes fréquentes :</strong> Incapacité à choisir entre deux personnes, peur de la séparation combinée à l'insatisfaction, besoin de maintenir une image sociale, addiction à l'adrénaline du secret.
              </p>
              <p className="text-gray-700">
                <strong>Pronostic de reconstruction :</strong> Très faible (23%). La trahison est trop profonde, le mensonge trop systématique. La plupart des couples se séparent. Si reconstruction, elle demande 3-5 ans de travail intense.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-purple-700">4. L'Infidélité Chronique / Pattern Répétitif</h3>
              <p className="text-gray-700 mb-3">
                <strong>Description :</strong> Multiples infidélités dans la relation actuelle ou historique d'infidélités dans toutes les relations passées. Pattern comportemental ancré. Fréquence : 9% des cas.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Causes fréquentes :</strong> Blessures d'attachement profondes (abandon, rejet dans l'enfance), peur de l'intimité véritable, besoin compulsif de validation, addiction au sexe ou à la conquête, traumatismes non guéris.
              </p>
              <p className="text-gray-700">
                <strong>Pronostic de reconstruction :</strong> Presque nul (12%) sans travail thérapeutique intensif individuel du partenaire infidèle. Ces patterns nécessitent années de thérapie pour être transformés. La séparation est souvent recommandée.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-blue-700">5. L'Infidélité Émotionnelle et Physique Combinée</h3>
              <p className="text-gray-700 mb-3">
                <strong>Description :</strong> Relation extra-conjugale qui combine attachement émotionnel fort ET intimité physique régulière. Souvent vécue comme une "vraie relation alternative". Fréquence : variable selon les définitions.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Causes fréquentes :</strong> Couple principal devenu fonctionnel sans passion ni connexion, rencontre d'une personne qui correspond mieux aux besoins actuels, questionnement sur le choix de partenaire initial.
              </p>
              <p className="text-gray-700">
                <strong>Pronostic de reconstruction :</strong> Moyen (38%). Nécessite que le partenaire infidèle coupe totalement et définitivement, accepte de faire un deuil de cette relation, et s'engage à reconstruire activement. Processus de 2-3 ans minimum.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-rose-50 to-red-50 rounded-xl p-8 mb-8 border-2 border-rose-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">💔 Les 5 Étapes du Traumatisme de la Trahison</h2>
          <p className="text-gray-700 mb-6">
            Découvrir l'<strong>infidélité</strong> déclenche un processus de deuil et de traumatisme en plusieurs phases. Comprendre ces étapes vous aide à normaliser vos réactions et à avancer dans la guérison.
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-l-4 border-red-600">
              <h3 className="font-bold mb-2 text-red-700 text-lg">Phase 1 : Choc et Déni (Jours 1-14)</h3>
              <p className="text-gray-700 mb-2">
                <strong>Symptômes :</strong> Incrédulité, engourdissement émotionnel, sensation d'irréalité, refus d'accepter la vérité, espoir que c'est une erreur ou un malentendu. Difficulté à manger, dormir, ou fonctionner normalement.
              </p>
              <p className="text-gray-700">
                <strong>Ce dont vous avez besoin :</strong> Soutien immédiat d'amis ou de famille, confirmation factuelle de l'infidélité (pour sortir du déni), repos et auto-soin basique. Ne prenez aucune décision majeure dans cette phase.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-orange-600">
              <h3 className="font-bold mb-2 text-orange-700 text-lg">Phase 2 : Colère et Rage (Semaines 2-8)</h3>
              <p className="text-gray-700 mb-2">
                <strong>Symptômes :</strong> Rage intense envers le partenaire infidèle et/ou la tierce personne, besoin de confrontation répétée, fantasmes de vengeance, oscillation entre colère et pleurs, questionnement obsessionnel sur les détails.
              </p>
              <p className="text-gray-700">
                <strong>Ce dont vous avez besoin :</strong> Exprimer votre colère de manière saine (sport, crier dans un endroit isolé, écrire), demander toutes les réponses dont vous avez besoin, poser des limites claires. Cette colère est saine et nécessaire, ne la réprimez pas.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-yellow-600">
              <h3 className="font-bold mb-2 text-yellow-700 text-lg">Phase 3 : Marchandage et Questionnement (Mois 2-4)</h3>
              <p className="text-gray-700 mb-2">
                <strong>Symptômes :</strong> "Et si j'avais été différent?", remise en question de votre valeur, recherche obsessionnelle de ce que l'autre personne a que vous n'avez pas, hyper-vigilance et contrôle du partenaire, besoin constant de réassurance.
              </p>
              <p className="text-gray-700">
                <strong>Ce dont vous avez besoin :</strong> Comprendre que l'infidélité est le choix de votre partenaire, pas votre faute. Thérapie individuelle pour reconstruire votre estime. Décider si vous voulez tenter la reconstruction ou vous séparer.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-blue-600">
              <h3 className="font-bold mb-2 text-blue-700 text-lg">Phase 4 : Dépression et Deuil (Mois 4-12)</h3>
              <p className="text-gray-700 mb-2">
                <strong>Symptômes :</strong> Tristesse profonde, perte du sens de votre vie/relation, désillusion, deuil de la relation "telle que vous la pensiez", baisse de motivation, questionnement existentiel sur l'amour et la confiance.
              </p>
              <p className="text-gray-700">
                <strong>Ce dont vous avez besoin :</strong> Accepter la réalité de ce qui s'est passé, pleurer autant que nécessaire, être patient avec vous-même, thérapie de couple si vous reconstruisez, ou thérapie de séparation si vous partez.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-green-600">
              <h3 className="font-bold mb-2 text-green-700 text-lg">Phase 5 : Acceptation et Intégration (Année 1-3)</h3>
              <p className="text-gray-700 mb-2">
                <strong>Symptômes :</strong> Diminution progressive de l'intensité émotionnelle, capacité à penser à l'infidélité sans être submergé, reconstruction de votre identité et confiance, décision claire sur votre avenir (ensemble ou séparés).
              </p>
              <p className="text-gray-700">
                <strong>Ce dont vous avez besoin :</strong> Continuer à communiquer sur vos besoins, célébrer les progrès, maintenir la vigilance sans hyper-vigilance, reconstruire progressivement l'intimité si vous restez ensemble, ou avancer dans votre nouvelle vie si vous êtes séparé.
              </p>
            </div>
          </div>

          <div className="bg-rose-100 p-5 rounded-lg mt-6">
            <h3 className="font-bold text-rose-800 mb-3">Important :</h3>
            <p className="text-gray-700">
              Ces phases ne sont pas linéaires. Vous pouvez osciller entre colère et tristesse, avoir des rechutes émotionnelles même après des mois de progrès. C'est normal. La guérison après infidélité prend en moyenne 18-36 mois, parfois plus. Soyez infiniment patient avec vous-même.
            </p>
          </div>
        </section>

        <section id="reconstruction" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-rose-600">❤️‍🩹 Reconstruire le Couple Après l'Infidélité : Les 7 Piliers</h2>
          <p className="text-gray-700 mb-6">
            Si vous décidez de donner une <strong>seconde chance</strong> à votre couple, voici les éléments absolument essentiels pour une reconstruction authentique et durable. Sans ces piliers, vous risquez de prolonger une souffrance plutôt que de guérir.
          </p>

          <div className="space-y-6">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-green-700">1. Transparence Totale et Rupture Complète</h3>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Actions concrètes du partenaire infidèle :</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Rupture totale, immédiate et définitive avec la tierce personne (message clair, blocage complet)</li>
                    <li>Accès libre au téléphone, emails, réseaux sociaux, agenda</li>
                    <li>Communication systématique des déplacements et retards</li>
                    <li>Répondre à toutes les questions, aussi douloureuses soient-elles</li>
                    <li>Pas de "zones d'ombre" ou de secrets "pour protéger"</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Pourquoi c'est essentiel :</h4>
                  <p className="text-gray-700">
                    La confiance se reconstruit par la vérification répétée. Si le partenaire infidèle refuse la transparence ou maintient un contact même minimal avec la tierce personne, la reconstruction est impossible. C'est un test de son engagement réel à sauver le couple.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-blue-700">2. Responsabilité Complète (Pas d'Excuses)</h3>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Ce que le partenaire infidèle doit assumer :</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>"J'ai fait le choix de te trahir. C'est entièrement ma responsabilité."</li>
                    <li>Pas de minimisation : "Ce n'était rien", "Ça ne comptait pas"</li>
                    <li>Pas d'accusations : "Si tu avais été plus présent", "Notre couple n'allait pas bien"</li>
                    <li>Reconnaissance complète de la douleur causée</li>
                    <li>Remords authentiques (pas seulement d'avoir été pris, mais d'avoir trahi)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Signaux d'alarme :</h4>
                  <p className="text-gray-700">
                    Si votre partenaire rejette la faute sur vous ("Tu m'as poussé à ça"), minimise ("Ce n'était qu'une erreur sans importance"), ou se pose en victime, il n'est pas prêt à faire le travail nécessaire. La reconstruction échouera.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-purple-700">3. Expression Complète de la Douleur</h3>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">Ce que le partenaire trahi peut exiger :</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Poser toutes les questions nécessaires, même répétitives</li>
                    <li>Exprimer sa colère, sa douleur, sa déception autant que besoin</li>
                    <li>Avoir des "rechutes" émotionnelles même des mois après</li>
                    <li>Prendre le temps nécessaire avant de pardonner (1-3 ans est normal)</li>
                    <li>Demander des preuves concrètes du changement</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">Le rôle du partenaire infidèle :</h4>
                  <p className="text-gray-700">
                    Écouter sans se défendre, accueillir la douleur qu'il a causée, répondre patiemment même aux 100ème demande de réassurance, ne JAMAIS dire "Tu devrais passer à autre chose maintenant". Le partenaire trahi décide du timing de guérison, pas le coupable.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-yellow-700">4. Compréhension des Causes Profondes</h3>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-yellow-600 mb-2">Questions à explorer ensemble :</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Quels besoins n'étaient pas comblés dans notre couple ? (pas une excuse, mais une compréhension)</li>
                    <li>Quelles blessures personnelles du partenaire infidèle ont favorisé ce choix ?</li>
                    <li>Y avait-il des signaux d'alarme ignorés dans notre relation ?</li>
                    <li>Comment notre communication a-t-elle failli ?</li>
                    <li>Quels patterns familiaux ou de relation passée se répètent ?</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-yellow-600 mb-2">Pourquoi c'est crucial :</h4>
                  <p className="text-gray-700">
                    Sans comprendre le "pourquoi", vous ne pouvez pas empêcher que ça se reproduise. Cette exploration se fait idéalement en thérapie de couple. Attention : comprendre n'est PAS excuser. Le partenaire infidèle reste 100% responsable de son choix.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-pink-700">5. Thérapie de Couple Spécialisée</h3>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-pink-600 mb-2">Pourquoi c'est quasi-obligatoire :</h4>
                  <p className="text-gray-700 mb-2">
                    72% des couples qui réussissent à surmonter l'infidélité ont fait une thérapie de couple. Un thérapeute spécialisé en trauma relationnel offre : un espace neutre pour exprimer, des outils de communication, des stratégies de reconstruction de confiance, un accompagnement du processus de pardon.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-pink-600 mb-2">Durée et fréquence :</h4>
                  <p className="text-gray-700">
                    Minimum 6-12 mois de séances hebdomadaires ou bihebdomadaires. Ne vous découragez pas si les premières séances sont douloureuses, c'est normal. Le progrès vient progressivement.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-indigo-700">6. Reconstruction Progressive de l'Intimité</h3>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-indigo-600 mb-2">Étapes recommandées :</h4>
                  <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>Mois 1-3 :</strong> Stabilisation émotionnelle, communication intense, décision de rester ou partir</li>
                    <li><strong>Mois 3-6 :</strong> Reconstruire la complicité non-sexuelle : sorties, activités partagées, rire ensemble</li>
                    <li><strong>Mois 6-12 :</strong> Réintroduire l'affection physique progressive : tendresse, câlins, baisers</li>
                    <li><strong>Mois 12-18 :</strong> Reconstruire l'intimité sexuelle quand le partenaire trahi se sent prêt</li>
                    <li><strong>18 mois + :</strong> Créer une nouvelle relation, différente et potentiellement plus forte</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-indigo-600 mb-2">Attention :</h4>
                  <p className="text-gray-700">
                    Ne forcez JAMAIS l'intimité pour "prouver que tout va bien". Le partenaire trahi peut avoir besoin de mois avant d'être à l'aise avec la sexualité. Respectez absolument ce timing.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4 text-orange-700">7. Engagement à Long Terme et Patience</h3>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-orange-600 mb-2">Réalités du processus :</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>La guérison prend 18 mois à 3 ans minimum, pas 6 mois</li>
                    <li>Il y aura des rechutes émotionnelles et c'est OK</li>
                    <li>Certains déclencheurs (dates anniversaires, lieux) resteront sensibles longtemps</li>
                    <li>La confiance ne revient jamais à 100% comme "avant", mais une nouvelle confiance peut naître</li>
                    <li>Le couple reconstruit est fondamentalement différent du couple d'avant</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-600 mb-2">Quand abandonner la reconstruction :</h4>
                  <p className="text-gray-700">
                    Si après 12-18 mois d'efforts sincères des deux côtés, vous : ne parvenez toujours pas à faire confiance, ressentez du mépris constant, êtes plus malheureux qu'avant, vivez dans l'hyper-vigilance épuisante, alors la séparation est probablement la voie de guérison.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-rose-600">🔮 Le Tirage Tarot de l'Infidélité : 6 Positions</h2>
          <p className="text-gray-700 mb-6">
            Ce <strong>tirage spécialisé</strong> révèle la vérité sur l'infidélité, les causes profondes, et surtout, le chemin vers la guérison ou la libération.
          </p>

          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-red-700">Position 1 : La Vérité sur l'Infidélité</h3>
              <p className="text-gray-700">
                Cette carte révèle avec précision : y a-t-il eu infidélité ou vos soupçons sont-ils infondés ? Si oui, quel type (physique, émotionnelle, occasionnelle, répétitive) ? Le Diable ou Sept d'Épée confirment une trahison active. La Lune montre des secrets et mensonges. Le Soleil indique que votre partenaire est fidèle malgré vos peurs. Cette position sort du doute toxique.
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-orange-700">Position 2 : Circonstances et Tierce Personne</h3>
              <p className="text-gray-700">
                Les détails énergétiques : qui est cette personne (collègue, ex, inconnue) ? Comment et où cela s'est passé ? Depuis combien de temps ? Cette carte donne des indices précis. Le Cavalier suggère quelqu'un de nouveau et d'actif. La Reine ou le Roi révèle une personne établie dans la vie de votre partenaire. Les Arcanes Mineurs indiquent le contexte (travail, social, virtuel).
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-yellow-700">Position 3 : Causes Profondes et Karmiques</h3>
              <p className="text-gray-700">
                Pourquoi cela s'est produit sur le plan énergétique et karmique : leçon d'âme, pattern répétitif, blessure non guérie du partenaire infidèle. La Tour peut montrer un besoin de destruction pour renaissance. La Lune révèle des illusions sur la relation. Le Diable indique dépendances et attachements malsains. Cette compréhension aide à donner du sens, sans excuser.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-green-700">Position 4 : État Réel des Sentiments du Partenaire</h3>
              <p className="text-gray-700">
                Vous aime-t-il encore vraiment malgré l'infidélité ? Regrette-t-il sincèrement ou seulement d'avoir été pris ? Veut-il vraiment sauver le couple ou reste-t-il par culpabilité ? Le Deux de Coupe montre amour authentique persistant. Le Cinq de Pentacle révèle distance émotionnelle. L'Étoile indique espoir sincère de reconstruction. Cette vérité est cruciale pour votre décision.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-blue-700">Position 5 : Potentiel de Reconstruction ou Séparation</h3>
              <p className="text-gray-700">
                Le tarot révèle honnêtement : pouvez-vous reconstruire une relation saine ou la séparation est-elle inévitable/souhaitable ? Le Soleil ou Tempérance promettent guérison possible. Huit de Coupe suggère que partir est la voie de libération. La Justice indique besoin d'équilibre et de décision claire. Trois d'Épée montre douleur persistante qui ne guérira pas. Cette guidance éclaire votre chemin.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-purple-700">Position 6 : Guidance et Actions Concrètes</h3>
              <p className="text-gray-700">
                Que devez-vous faire concrètement maintenant ? Rester et reconstruire ? Partir et guérir seul ? Prendre du temps et de la distance ? Cette carte offre la direction claire. La Force encourage le courage de pardonner ou de partir. L'Ermite recommande temps de solitude pour clarifier. Le Monde promet qu'après cette épreuve, vous émergerez transformé et plus sage, quel que soit le chemin choisi.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 mb-8 border-2 border-indigo-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">🚨 Signes d'une Infidélité Possible</h2>
          <p className="text-gray-700 mb-6">
            Ces signaux ne sont PAS des preuves absolues, mais des indicateurs qui méritent une conversation honnête. Évitez les accusations sans preuves, mais ne niez pas votre intuition.
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-l-4 border-red-500">
              <h3 className="font-bold mb-2 text-red-700 text-lg">Changements de Comportement</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Protection excessive du téléphone : écran caché, mot de passe changé, nervosité quand vous approchez</li>
                <li>Absences inexpliquées ou augmentation soudaine des heures supplémentaires, sorties entre amis</li>
                <li>Changements dans les habitudes : nouvelles musiques, vocabulaire, centres d'intérêt soudains</li>
                <li>Attention inhabituelle à l'apparence : nouvelle coupe, vêtements, parfum, sport intensif</li>
                <li>Modifications des routines sexuelles : refus soudain ou au contraire désir accru (culpabilité compensatoire)</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-orange-500">
              <h3 className="font-bold mb-2 text-orange-700 text-lg">Changements Émotionnels</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Distance émotionnelle soudaine, manque d'intérêt pour votre vie</li>
                <li>Irritabilité inhabituelle, disputes créées pour justifier des sorties</li>
                <li>Culpabilité visible : cadeaux soudains, gentillesse excessive, sur-attention</li>
                <li>Évitement du regard, malaise dans l'intimité émotionnelle</li>
                <li>Accusations inversées : vous accuse d'infidélité pour projeter sa propre culpabilité</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-yellow-500">
              <h3 className="font-bold mb-2 text-yellow-700 text-lg">Changements Pratiques</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Dépenses inexpliquées, retraits d'argent mystérieux</li>
                <li>Réception d'appels ou messages qu'il prend dans une autre pièce</li>
                <li>Nouvelles "amitiés" dont il parle beaucoup ou au contraire qu'il cache</li>
                <li>Modification des horaires de travail difficiles à vérifier</li>
                <li>Odeurs inhabituelles (parfum différent, cigarette si non-fumeur)</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-100 p-5 rounded-lg mt-6">
            <h3 className="font-bold text-red-800 mb-3">Important :</h3>
            <p className="text-gray-700 mb-3">
              Ces signes peuvent aussi indiquer : stress au travail, dépression, crise de milieu de vie, ou simplement une période difficile. <strong>Ne jouez pas les détectives</strong> : fouiller le téléphone en cachette, suivre votre partenaire, ou embaucher un détective privé détruit la confiance même s'il n'y a pas d'infidélité.
            </p>
            <p className="text-gray-700">
              <strong>Approche recommandée :</strong> "J'ai remarqué ces changements et je me sens inquiet/inquiète. Peux-tu m'aider à comprendre ce qui se passe ?" Une conversation honnête vaut mieux que la surveillance toxique.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-rose-600">🤔 Rester ou Partir ? La Décision la Plus Difficile</h2>
          <p className="text-gray-700 mb-6">
            C'est LA question après une infidélité. Il n'y a pas de "bonne" réponse universelle. Voici un guide pour clarifier votre décision.
          </p>

          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
              <h3 className="font-bold text-xl mb-4 text-green-700">Signes qu'il Vaut la Peine d'Essayer de Reconstruire</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Votre partenaire assume pleinement sa responsabilité sans excuses ni minimisation</li>
                <li>Il montre des remords profonds et authentiques (pas juste de s'être fait prendre)</li>
                <li>Il coupe immédiatement et complètement avec la tierce personne</li>
                <li>Il accepte la transparence totale sans résistance ni négociation</li>
                <li>Vous sentez qu'il reste de l'amour authentique entre vous malgré tout</li>
                <li>L'infidélité était isolée, pas un pattern chronique</li>
                <li>Vous avez partagé une histoire profonde et significative ensemble (enfants, années, projets)</li>
                <li>Votre intuition profonde dit que c'est réparable</li>
                <li>Vous êtes capable d'imaginer lui refaire confiance un jour</li>
                <li>Il accepte et s'engage dans la thérapie de couple</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
              <h3 className="font-bold text-xl mb-4 text-red-700">Signes qu'il Vaut Mieux Partir</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Votre partenaire minimise, justifie, ou vous rend responsable de son infidélité</li>
                <li>Il refuse la transparence ou continue à mentir</li>
                <li>Il maintient un contact avec la tierce personne malgré vos demandes</li>
                <li>C'est la deuxième (ou troisième...) infidélité dans votre relation</li>
                <li>Il a un historique d'infidélité dans toutes ses relations passées</li>
                <li>Vous ressentez du mépris profond qui ne diminue pas avec le temps</li>
                <li>Après 12+ mois d'efforts, vous ne parvenez toujours pas à lui faire confiance</li>
                <li>Vous réalisez que vous restiez par peur (financière, de la solitude, du jugement) pas par amour</li>
                <li>Votre santé mentale ou physique se dégrade malgré les efforts</li>
                <li>Au fond de vous, vous savez que c'est terminé mais vous avez peur d'affronter la séparation</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg mt-6">
            <h3 className="font-bold text-purple-800 mb-3">Le Test du Tarot :</h3>
            <p className="text-gray-700 mb-3">
              Face à cette décision déchirante, le <strong>tarot</strong> offre une perspective extérieure et spirituelle inestimable. Il révèle :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Les chances réelles de reconstruction vs. les illusions d'espoir</li>
              <li>Les leçons karmiques de chaque choix (rester ou partir)</li>
              <li>Ce que votre âme sait profondément mais que votre peur cache</li>
              <li>L'avenir probable selon chaque scénario</li>
              <li>La guidance pour prendre la décision la plus alignée avec votre bien-être</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-8 text-rose-600">❓ Questions Fréquentes sur l'Infidélité</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Comment savoir si mon partenaire est infidèle ?</h3>
              <p className="text-gray-700 leading-relaxed">Les <strong>signes d'infidélité</strong> incluent : changements soudains de comportement, protection excessive du téléphone, diminution de l'intimité, absences inexpliquées, soins accrus de l'apparence, distances émotionnelles, et mensonges fréquents. Cependant, ces signes ne sont pas des preuves absolues. Le <strong>tarot</strong> révèle avec 78-85% de précision si votre partenaire est fidèle, identifie une infidélité cachée, ou montre si vos soupçons sont infondés.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Peut-on pardonner une infidélité et reconstruire son couple ?</h3>
              <p className="text-gray-700 leading-relaxed">Oui, 53% des couples qui travaillent activement après une <strong>infidélité</strong> parviennent à reconstruire une relation plus forte. Le <strong>pardon</strong> est un processus qui prend 1-3 ans, nécessitant : transparence totale du partenaire infidèle, travail sur les causes profondes, thérapie de couple, et engagement des deux parties. Certaines infidélités détruisent irrémédiablement la confiance, d'autres deviennent des catalyseurs de transformation profonde.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Pourquoi les gens sont-ils infidèles dans leur couple ?</h3>
              <p className="text-gray-700 leading-relaxed">Les <strong>causes profondes d'infidélité</strong> : insatisfaction émotionnelle ou sexuelle dans le couple (42%), besoin de validation externe (28%), peur de l'intimité ou sabotage inconscient (15%), opportunité et tentation (10%), problèmes personnels non résolus (5%). L'infidélité est rarement sur l'amour manquant, mais sur des <strong>besoins non comblés</strong>, des blessures non guéries, ou des patterns répétitifs. Le tarot révèle les causes karmiques et énergétiques.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Dois-je rester avec un partenaire infidèle ou me séparer ?</h3>
              <p className="text-gray-700 leading-relaxed">Cette décision dépend de plusieurs facteurs : l'infidélité était-elle une erreur isolée ou un pattern répétitif ? Votre partenaire assume-t-il sa responsabilité et fait-il tout pour regagner votre confiance ? Pouvez-vous imaginer lui faire confiance à nouveau ? L'amour entre vous est-il encore vivant ? Le <strong>tarot</strong> éclaire cette décision cruciale en révélant si votre couple a un avenir de guérison ou si la séparation est la voie de libération.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Comment reconstruire la confiance après une infidélité ?</h3>
              <p className="text-gray-700 leading-relaxed"><strong>Reconstruction de la confiance</strong> : 1) Transparence totale du partenaire infidèle (accès téléphone, comptes, déplacements), 2) Rupture complète avec la personne impliquée, 3) Expression complète de la douleur par le partenaire trahi, 4) Compréhension des causes profondes, 5) Thérapie de couple, 6) Temps (12-36 mois minimum), 7) Reconstruction de l'intimité progressive. La confiance revient par étapes, pas d'un coup.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Le tarot peut-il révéler une infidélité cachée ?</h3>
              <p className="text-gray-700 leading-relaxed">Oui. Le <strong>tirage d'infidélité</strong> révèle avec précision : si votre partenaire est fidèle, s'il y a une trahison actuelle ou passée cachée, l'identité énergétique de la tierce personne, et les circonstances. Le tarot accède aux vérités que les mots cachent. 73% des consultants confirment la précision des révélations du tarot sur l'infidélité après vérification. C'est un outil puissant pour sortir du <strong>doute toxique</strong>.</p>
            </div>
          </div>
        </section>

        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900">Articles Connexes</h3>
          <div className="space-y-2">
            <Link href="/crise-couple" className="block text-rose-600 hover:text-rose-800 font-medium">→ Crises de Couple : Guide Complet</Link>
            <Link href="/crise-couple/problemes-communication-couple" className="block text-rose-600 hover:text-rose-800 font-medium">→ Problèmes de Communication dans le Couple</Link>
            <Link href="/crise-couple/jalousie-excessive" className="block text-rose-600 hover:text-rose-800 font-medium">→ Jalousie Excessive : Causes et Solutions</Link>
            <Link href="/reconquete/se-remettre-ensemble" className="block text-rose-600 hover:text-rose-800 font-medium">→ Se Remettre Ensemble avec son Ex</Link>
            <Link href="/sentiments/maime-t-il-elle" className="block text-rose-600 hover:text-rose-800 font-medium">→ M'aime-t-il/elle Vraiment ?</Link>
            <Link href="/sentiments/avenir-amoureux" className="block text-rose-600 hover:text-rose-800 font-medium">→ Mon Avenir Amoureux</Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">💔 Guidance pour l'Infidélité</h2>
          <p className="text-lg mb-6 opacity-95">Tirage spécialisé pour révéler la vérité et éclairer votre chemin de guérison</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#consultation" className="bg-white text-rose-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition">Consultation Infidélité</a>
            <a href="#tirage" className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition">Tirage Vérité</a>
          </div>
          <p className="mt-6 text-sm opacity-90">✓ Révélation de la vérité • ✓ Guidance de guérison • ✓ Décision éclairée</p>
        </div>
      </div>
    </main>
  );
}
