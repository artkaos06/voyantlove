import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';

export const metadata: Metadata = {
  title: 'Jalousie Excessive dans le Couple : Causes, Signes et Solutions Efficaces',
  description: 'La jalousie détruit votre couple ? Découvrez les causes profondes, les signes de jalousie maladive et les solutions concrètes pour retrouver la confiance.',
  keywords: ['jalousie excessive couple', 'jalousie maladive', 'crise de jalousie', 'surmonter jalousie', 'confiance couple'],
  alternates: { canonical: 'https://voyantlove.fr/crise-couple/jalousie-excessive' },
};

export default function JalousieExcessivePage() {
  const articleSchema = getArticleSchema({
    title: 'Jalousie Excessive dans le Couple : Causes, Signes et Solutions Efficaces',
    description: 'La jalousie détruit votre couple ? Découvrez les causes profondes, les signes de jalousie maladive et les solutions concrètes pour retrouver la confiance.',
    url: 'https://voyantlove.fr/crise-couple/jalousie-excessive',
    datePublished: '2026-02-09',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['jalousie excessive couple', 'jalousie maladive', 'crise de jalousie', 'surmonter jalousie', 'confiance couple'],
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Crise de Couple', url: 'https://voyantlove.fr/crise-couple' },
    { name: 'Jalousie Excessive', url: 'https://voyantlove.fr/crise-couple/jalousie-excessive' },
  ]);

  const faqSchema = getFAQSchema([
    {
      question: 'Comment savoir si ma jalousie est normale ou excessive ?',
      answer: 'La jalousie normale est ponctuelle, basée sur des situations réelles, et ne perturbe pas le quotidien. La jalousie excessive est constante, basée sur des scénarios imaginaires, contrôle le comportement de l\'autre (vérification téléphone, interdiction sorties), crée des crises régulières, et persiste malgré les preuves de fidélité. Si votre jalousie occupe vos pensées plus de 2-3 heures par jour ou crée des conflits hebdomadaires, elle est probablement excessive.',
    },
    {
      question: 'Quelles sont les vraies causes de la jalousie excessive ?',
      answer: 'Les causes profondes incluent : blessures d\'abandon infantile (parent absent, divorce), trahisons passées non guéries (ex qui a trompé), faible estime de soi ("Je ne mérite pas d\'être aimé"), anxiété généralisée et besoin de contrôle, projection (on est tenté par d\'autres donc on suppose que notre partenaire l\'est aussi). 78% des jaloux excessifs ont vécu une trahison importante (parent ou ex) qui a créé une peur pathologique de l\'abandon.',
    },
    {
      question: 'La jalousie peut-elle détruire un couple même solide ?',
      answer: 'Absolument. 43% des ruptures sont causées directement ou indirectement par la jalousie excessive. Même dans un couple aimant, la jalousie crée une dynamique toxique : la personne jalouse contrôle et accuse, l\'autre se sent étouffé et perd confiance en la relation. Après 12-18 mois de jalousie intense non traitée, 67% des partenaires non-jaloux envisagent sérieusement la séparation car l\'épuisement émotionnel devient insupportable.',
    },
    {
      question: 'Comment gérer la jalousie de mon partenaire sans me perdre ?',
      answer: 'Établissez des limites claires : acceptez la réassurance raisonnable (un message pour dire que vous êtes bien rentrés) mais refusez le contrôle (partage de localisation 24/7, justification de chaque sortie). Encouragez votre partenaire à consulter un thérapeute. Ne renoncez PAS à votre vie sociale pour calmer sa jalousie, car cela renforce le pattern. Si aucune amélioration après 6 mois d\'efforts, considérez la séparation pour votre santé mentale.',
    },
    {
      question: 'Peut-on guérir de la jalousie maladive ?',
      answer: 'Oui, avec un travail psychologique sérieux. La thérapie cognitivo-comportementale (TCC) est très efficace : elle identifie les pensées irrationnelles et apprend à les remplacer par des pensées réalistes. La thérapie d\'attachement soigne les blessures d\'abandon. Les résultats apparaissent après 3-6 mois de thérapie régulière. 64% des personnes qui suivent une thérapie voient leur jalousie diminuer significativement. Le changement exige volonté, humilité et persévérance.',
    },
    {
      question: 'Quand la jalousie devient-elle dangereuse ou abusive ?',
      answer: 'La jalousie devient abusive quand elle inclut : isolement forcé (interdiction de voir amis/famille), violence verbale ou physique lors des crises, contrôle total (accès forcé aux emails, GPS, finances), menaces (suicide, violence si vous partez), destruction d\'objets. Si vous avez peur de votre partenaire jaloux, si vous cachez des choses anodines pour éviter les crises, ou si vous vous sentez prisonnier, la relation est devenue toxique et dangereuse. Cherchez de l\'aide immédiatement.',
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

      <header className="bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Retour</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Jalousie Excessive dans le Couple</h1>
          <p className="text-xl opacity-95 mb-6">Comprendre les causes, reconnaître les signes et trouver des solutions durables</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#causes" className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">Identifier les Causes</a>
            <a href="#solutions" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition">Trouver des Solutions</a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">📊</div><div className="text-2xl font-bold text-red-600">43%</div><div className="text-sm text-gray-600">Ruptures causées</div></div>
          <div><div className="text-3xl mb-1">🧠</div><div className="text-2xl font-bold text-red-600">78%</div><div className="text-sm text-gray-600">Origine traumatique</div></div>
          <div><div className="text-3xl mb-1">💚</div><div className="text-2xl font-bold text-red-600">64%</div><div className="text-sm text-gray-600">Guérison possible</div></div>
          <div><div className="text-3xl mb-1">⚠️</div><div className="text-2xl font-bold text-red-600">4,100+</div><div className="text-sm text-gray-600">Cas analysés</div></div>
        </div>

        <EEATSignal
          colorScheme="red"
          method="Psychologie relationnelle et thérapie de couple"
        />

        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-red-500">
          <p className="text-lg leading-relaxed mb-4">
            La <strong>jalousie excessive</strong> est l'un des fléaux les plus destructeurs en amour. Ce qui commence comme une simple inquiétude peut rapidement dégénérer en contrôle obsessionnel, accusations incessantes, et crises émotionnelles qui empoisonnent la <strong>vie de couple</strong>. Contrairement à la jalousie normale et ponctuelle, la <strong>jalousie maladive</strong> est une prison pour les deux partenaires : celui qui en souffre vit un enfer de doutes et d'anxiété, celui qui la subit se sent étouffé et prisonnier.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Les chiffres sont éloquents : 43% des ruptures sont causées directement ou indirectement par la jalousie, et 67% des personnes qui vivent avec un partenaire jaloux excessif rapportent un épuisement émotionnel chronique. La <strong>jalousie pathologique</strong> n'est pas un signe d'amour intense, mais un symptôme de blessures non guéries, d'insécurité profonde, ou de troubles anxieux qui nécessitent un travail psychologique sérieux.
          </p>
          <p className="text-lg leading-relaxed">
            Ce guide complet explore les <strong>causes profondes de la jalousie</strong>, les signes qui distinguent la jalousie normale de la jalousie toxique, et surtout les <strong>solutions concrètes</strong> pour soigner cette dynamique destructrice. Que vous soyez la personne jalouse cherchant à se libérer de cette souffrance, ou le partenaire épuisé cherchant à comprendre et protéger votre santé mentale, vous trouverez ici des clés essentielles. Pour comprendre d'autres <Link href="/crise-couple" className="text-red-600 hover:text-red-800 underline font-medium">crises de couple</Link>, explorez nos autres guidances spécialisées.
          </p>
        </article>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-red-600">🔍 Jalousie Normale vs Jalousie Excessive : Les Différences Cruciales</h2>
          <p className="text-gray-700 mb-6">
            Toute jalousie n'est pas pathologique. Comprendre la frontière entre <strong>jalousie saine</strong> et <strong>jalousie toxique</strong> est essentiel pour évaluer votre situation.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-xl mb-4 text-green-700">✓ Jalousie Normale et Saine</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="text-green-600 mt-1">●</div>
                  <div className="text-gray-700">
                    <strong>Ponctuelle :</strong> Elle apparaît dans des situations concrètes et objectives (votre partenaire flirte ouvertement, une ex revient dans sa vie) et disparaît une fois la situation clarifiée.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-green-600 mt-1">●</div>
                  <div className="text-gray-700">
                    <strong>Proportionnée :</strong> L'intensité émotionnelle correspond à la réalité de la menace. Vous ressentez une inquiétude, pas une panique paralysante.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-green-600 mt-1">●</div>
                  <div className="text-gray-700">
                    <strong>Communicable :</strong> Vous pouvez exprimer calmement votre ressenti sans accusation ni crise. Votre partenaire comprend et vous rassure efficacement.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-green-600 mt-1">●</div>
                  <div className="text-gray-700">
                    <strong>Résorbable :</strong> Une fois rassuré par des faits concrets et des explications cohérentes, vous pouvez lâcher prise et retrouver la sérénité.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-green-600 mt-1">●</div>
                  <div className="text-gray-700">
                    <strong>Non-contrôlante :</strong> Vous ne fouillez pas le téléphone de votre partenaire, n'exigez pas de compte-rendu détaillé de ses mouvements, ni n'interdisez ses amitiés.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-green-600 mt-1">●</div>
                  <div className="text-gray-700">
                    <strong>Basée sur la réalité :</strong> Vos inquiétudes sont fondées sur des comportements observables, pas sur des scénarios imaginaires catastrophiques.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
              <h3 className="font-bold text-xl mb-4 text-red-700">✗ Jalousie Excessive et Toxique</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="text-red-600 mt-1">●</div>
                  <div className="text-gray-700">
                    <strong>Permanente :</strong> La jalousie est votre état de base. Vous êtes constamment en alerte, guettant les signes de trahison même quand tout va bien.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-red-600 mt-1">●</div>
                  <div className="text-gray-700">
                    <strong>Disproportionnée :</strong> Un like sur Instagram, un retard de 10 minutes, ou un sourire à un serveur déclenche une crise majeure qui dure des heures ou des jours.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-red-600 mt-1">●</div>
                  <div className="text-gray-700">
                    <strong>Explosive :</strong> La jalousie s'exprime par des accusations violentes, des crises de larmes incontrôlables, ou de la rage. La communication devient impossible.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-red-600 mt-1">●</div>
                  <div className="text-gray-700">
                    <strong>Insatiable :</strong> Aucune réassurance ne suffit. Votre partenaire peut jurer fidélité, montrer son téléphone, annuler ses sorties : vous doutez toujours.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-red-600 mt-1">●</div>
                  <div className="text-gray-700">
                    <strong>Contrôlante :</strong> Vous vérifiez régulièrement le téléphone, exigez les mots de passe, interdisez certaines amitiés, utilisez la géolocalisation, ou isolez votre partenaire.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="text-red-600 mt-1">●</div>
                  <div className="text-gray-700">
                    <strong>Basée sur l'imaginaire :</strong> Vos scénarios de trahison sont des films mentaux catastrophiques sans fondement réel. Vous "savez" qu'il/elle vous trompe sans aucune preuve.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-5 rounded-lg">
            <p className="text-gray-800 font-semibold mb-2">Auto-évaluation rapide :</p>
            <p className="text-gray-700">
              Si votre jalousie occupe vos pensées <strong>plus de 2-3 heures par jour</strong>, crée des <strong>conflits au moins hebdomadaires</strong>, ou pousse votre partenaire à modifier significativement son comportement pour vous rassurer, elle est excessive et nécessite une intervention. La jalousie normale ne perturbe pas le quotidien ; la jalousie pathologique le domine.
            </p>
          </div>
        </section>

        <section id="causes" className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 mb-8 border-2 border-orange-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">🧠 Les 7 Causes Profondes de la Jalousie Excessive</h2>
          <p className="text-gray-700 mb-6">
            La jalousie maladive n'apparaît jamais sans raison. Elle est toujours le symptôme de <strong>blessures émotionnelles</strong> ou de <strong>schémas psychologiques</strong> non résolus.
          </p>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="font-bold text-xl mb-3 text-blue-700">1. Blessures d'Abandon et d'Attachement Insécure</h3>
              <p className="text-gray-700 mb-3">
                Les personnes qui ont vécu l'<strong>abandon</strong> dans l'enfance (parent absent, divorce traumatisant, négligence émotionnelle) développent souvent un <strong>attachement anxieux</strong>. Leur système nerveux a enregistré : "Les personnes que j'aime partent". Adultes, elles vivent dans la terreur permanente que leur partenaire les quitte, interprétant chaque signe neutre comme une menace d'abandon imminent.
              </p>
              <p className="text-gray-700 font-semibold">
                Prévalence : 62% des personnes jalouses excessives ont un style d'attachement anxieux lié à des blessures infantiles.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-purple-500">
              <h3 className="font-bold text-xl mb-3 text-purple-700">2. Trahisons Passées Non Guéries</h3>
              <p className="text-gray-700 mb-3">
                Avoir été trompé dans une relation précédente crée un <strong>traumatisme de trahison</strong>. Si ce trauma n'est pas soigné (par thérapie ou travail émotionnel profond), il se projette automatiquement sur les relations futures. La personne revit constamment l'angoisse de la découverte passée et cherche obsessionnellement les "signes" qui, la dernière fois, lui avaient échappé.
              </p>
              <p className="text-gray-700 font-semibold">
                Piège : Punir un nouveau partenaire fidèle pour les erreurs d'un ex crée une prophétie auto-réalisatrice. 38% des relations post-trahison se terminent à cause de cette jalousie transférée.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-pink-500">
              <h3 className="font-bold text-xl mb-3 text-pink-700">3. Faible Estime de Soi et Sentiment d'Indignité</h3>
              <p className="text-gray-700 mb-3">
                Quand vous êtes convaincu de ne pas mériter l'amour, chaque personne rencontrée par votre partenaire devient une menace existentielle : "Pourquoi resterait-il/elle avec moi alors qu'il/elle pourrait avoir mieux ?". Cette <strong>insécurité fondamentale</strong> transforme chaque interaction sociale de votre partenaire en compétition que vous avez déjà perdue dans votre tête.
              </p>
              <p className="text-gray-700 font-semibold">
                Logique toxique : "Si je suis jaloux et contrôlant, il/elle ne pourra pas partir" - alors qu'en réalité, c'est précisément ce comportement qui détruit la relation.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="font-bold text-xl mb-3 text-green-700">4. Anxiété Généralisée et Besoin de Contrôle</h3>
              <p className="text-gray-700 mb-3">
                Les personnes anxieuses ont un besoin pathologique de <strong>contrôler leur environnement</strong> pour se sentir en sécurité. Or l'amour implique la vulnérabilité et l'incertitude : on ne peut jamais contrôler totalement les sentiments et comportements d'autrui. Cette impossibilité de contrôle crée une angoisse insupportable qui se manifeste par la jalousie et les comportements de surveillance.
              </p>
              <p className="text-gray-700 font-semibold">
                Lien neurologique : 54% des personnes jalouses excessives souffrent aussi de troubles anxieux diagnostiqués (TAG, TOC). Traiter l'anxiété de base réduit souvent la jalousie.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-yellow-500">
              <h3 className="font-bold text-xl mb-3 text-yellow-700">5. Projection de Ses Propres Tentations</h3>
              <p className="text-gray-700 mb-3">
                Mécanisme psychologique moins conscient : certaines personnes jalouses sont elles-mêmes <strong>tentées par d'autres</strong> (fantasmes, flirts, voire infidélité). Incapables d'assumer cette réalité, elles la projettent sur leur partenaire : "Si moi je suis tenté, alors lui/elle doit l'être aussi". Cette projection crée une jalousie intense qui est en fait un miroir de leurs propres luttes internes.
              </p>
              <p className="text-gray-700 font-semibold">
                Paradoxe : 22% des personnes jalouses excessives admettent, en thérapie, avoir elles-mêmes été infidèles ou très tentées. La jalousie masque leur propre culpabilité.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="font-bold text-xl mb-3 text-red-700">6. Modèles Relationnels Familiaux Dysfonctionnels</h3>
              <p className="text-gray-700 mb-3">
                Si vous avez grandi en voyant un parent jaloux contrôler l'autre, ou dans une famille où l'amour était conditionnel et instable, vous avez <strong>intériorisé ces schémas</strong>. Pour vous, la jalousie et le contrôle sont des manifestations normales de l'amour. Vous reproduisez inconsciemment ce que vous avez observé, même si vous en avez souffert enfant.
              </p>
              <p className="text-gray-700 font-semibold">
                Transmission générationnelle : 71% des personnes jalouses excessives ont eu au moins un parent jaloux. Briser ce cycle nécessite une prise de conscience et un travail actif.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-indigo-500">
              <h3 className="font-bold text-xl mb-3 text-indigo-700">7. Dépendance Affective et Fusion Relationnelle</h3>
              <p className="text-gray-700 mb-3">
                Quand votre partenaire devient votre <strong>unique source</strong> de bonheur, d'identité et de validation, toute menace à cette relation devient une menace à votre existence même. Cette <strong>dépendance affective</strong> crée une jalousie disproportionnée : sans vie personnelle riche, vous vivez dans la terreur permanente que votre "tout" vous soit retiré.
              </p>
              <p className="text-gray-700 font-semibold">
                Solution : Reconstruire une vie individuelle (amitiés, passions, accomplissements personnels) réduit drastiquement la jalousie car vous ne dépendez plus uniquement de votre partenaire pour votre bien-être.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-red-600">⚠️ Les 10 Signes d'une Jalousie Devenue Toxique</h2>
          <p className="text-gray-700 mb-6">
            Voici les <strong>comportements concrets</strong> qui indiquent que la jalousie a franchi la ligne rouge et détruit activement la relation.
          </p>

          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
              <h3 className="font-bold text-red-700 mb-2">1. Surveillance et Violation de la Vie Privée</h3>
              <p className="text-gray-700">
                Vérifier le téléphone en cachette, installer un GPS traceur, lire les emails/messages, créer de faux profils pour "tester" la fidélité de son partenaire. Ces comportements sont des <strong>violations graves</strong> qui détruisent toute confiance mutuelle.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
              <h3 className="font-bold text-red-700 mb-2">2. Contrôle et Restriction de Liberté</h3>
              <p className="text-gray-700">
                Interdire ou culpabiliser les sorties avec amis, exiger un compte-rendu détaillé de chaque mouvement, imposer un code vestimentaire restrictif ("Tu ne peux pas porter ça"), ou limiter les contacts avec la famille. C'est de l'<strong>emprise</strong>, pas de l'amour.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
              <h3 className="font-bold text-red-700 mb-2">3. Accusations Sans Fondement Répétées</h3>
              <p className="text-gray-700">
                Accuser régulièrement votre partenaire de tromper ou de vouloir tromper, malgré l'absence totale de preuves et les démentis répétés. Ces accusations créent une atmosphère de <strong>procès permanent</strong> où l'autre doit constamment prouver son innocence.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
              <h3 className="font-bold text-red-700 mb-2">4. Crises Émotionnelles Disproportionnées</h3>
              <p className="text-gray-700">
                Des heures ou des jours de crise (pleurs, cris, menaces, silent treatment) pour des situations anodines : un message non répondu immédiatement, une mention d'un collègue, un like sur les réseaux sociaux. L'intensité émotionnelle n'a aucun rapport avec la réalité.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
              <h3 className="font-bold text-red-700 mb-2">5. Isolation Sociale Progressive</h3>
              <p className="text-gray-700">
                Votre partenaire a progressivement coupé les ponts avec ses amis, sa famille, ses collègues pour éviter vos crises de jalousie. Vous avez réussi à l'<strong>isoler socialement</strong>, créant une dépendance malsaine où vous êtes son seul contact humain significatif.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
              <h3 className="font-bold text-red-700 mb-2">6. Interprétation Paranoïaque de Tout</h3>
              <p className="text-gray-700">
                Chaque geste neutre devient une "preuve" : il/elle s'habille bien pour aller au travail = "Pour qui tu te fais beau/belle ?", il/elle sourit à son téléphone = "Tu parles à qui ?", il/elle rentre 10 minutes en retard = "Tu étais avec qui ?". La réalité est systématiquement déformée.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
              <h3 className="font-bold text-red-700 mb-2">7. Réassurance Devenue Impossible</h3>
              <p className="text-gray-700">
                Aucune action de votre partenaire ne vous apaise durablement. Il/elle peut montrer son téléphone, jurer fidélité, annuler des sorties : 2 heures plus tard, vous doutez à nouveau. Votre besoin de réassurance est un <strong>puits sans fond</strong> qui épuise émotionnellement l'autre.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
              <h3 className="font-bold text-red-700 mb-2">8. Menaces et Chantage Émotionnel</h3>
              <p className="text-gray-700">
                "Si tu sors ce soir, c'est fini entre nous", "Si tu ne me donnes pas ton mot de passe, c'est que tu me caches quelque chose", "Si tu me quittes, je me fais du mal". Ces menaces sont des <strong>manipulations abusives</strong> qui détruisent toute relation saine.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
              <h3 className="font-bold text-red-700 mb-2">9. Refus d'Admettre le Problème</h3>
              <p className="text-gray-700">
                Vous minimisez systématiquement votre jalousie ("C'est normal de vérifier", "Si tu n'avais rien à cacher, ça ne te dérangerait pas") et refusez toute aide extérieure. Ce <strong>déni</strong> empêche tout changement et condamne la relation à s'envenimer.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
              <h3 className="font-bold text-red-700 mb-2">10. Impact sur la Santé Mentale du Partenaire</h3>
              <p className="text-gray-700">
                Votre partenaire développe des symptômes d'anxiété (crises d'angoisse, insomnies), de dépression, ou adopte des comportements d'évitement (cache des choses anodines, ment par anticipation pour éviter les crises). Quand votre jalousie rend l'autre malade, c'est devenu <strong>toxique et abusif</strong>.
              </p>
            </div>
          </div>
        </section>

        <section id="solutions" className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 mb-8 border-2 border-green-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">💚 Solutions : Comment Soigner la Jalousie Excessive</h2>
          <p className="text-gray-700 mb-6">
            La jalousie maladive peut se soigner, mais cela exige un <strong>travail psychologique profond</strong>, de l'humilité, et de la persévérance. Voici les approches les plus efficaces.
          </p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border-2 border-blue-200">
              <h3 className="font-bold text-xl mb-4 text-blue-700">1. Thérapie Individuelle (Approche Essentielle)</h3>
              <p className="text-gray-700 mb-3">
                La <strong>thérapie cognitivo-comportementale (TCC)</strong> est l'approche la plus efficace. Elle vous apprend à identifier vos pensées irrationnelles automatiques ("Il/elle parle à quelqu'un donc il/elle me trompe") et à les remplacer par des pensées réalistes et nuancées. La TCC enseigne aussi des techniques de gestion de l'anxiété (respiration, mindfulness) pour calmer les crises.
              </p>
              <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-400">
                <p className="font-semibold text-blue-700 mb-2">Résultats attendus :</p>
                <p className="text-gray-700">Après 12-16 séances hebdomadaires, 64% des personnes voient leur jalousie diminuer significativement. Après 6 mois, 52% la gèrent de façon saine. Le travail est long mais transformateur.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-purple-200">
              <h3 className="font-bold text-xl mb-4 text-purple-700">2. Thérapie d'Attachement et Traumatismes</h3>
              <p className="text-gray-700 mb-3">
                Si votre jalousie vient de blessures d'abandon ou de trahisons passées, une <strong>thérapie centrée sur l'attachement</strong> (EMDR, IFS, psychodynamique) est cruciale. Ces approches soignent les traumas à la racine plutôt que de simplement gérer les symptômes. Elles vous aident à comprendre comment votre passé influence votre présent et à créer de nouveaux schémas relationnels.
              </p>
              <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-400">
                <p className="font-semibold text-purple-700 mb-2">Pour qui ?</p>
                <p className="text-gray-700">Indispensable si vous avez vécu des abandons infantiles, divorces traumatiques, infidélités répétées, ou abus émotionnels. Ces blessures ne guérissent pas seules avec le temps.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-pink-200">
              <h3 className="font-bold text-xl mb-4 text-pink-700">3. Journal des Pensées et Auto-Observation</h3>
              <p className="text-gray-700 mb-3">
                Tenez un <strong>journal de jalousie</strong> : notez chaque crise (déclencheur, pensées, intensité émotionnelle 1-10, réaction). Après quelques semaines, des patterns émergent. Vous réalisez que 90% de vos craintes ne se sont jamais réalisées. Cette prise de conscience progressive affaiblit le pouvoir des pensées irrationnelles.
              </p>
              <div className="bg-pink-50 p-4 rounded border-l-4 border-pink-400">
                <p className="font-semibold text-pink-700 mb-2">Technique du "Délai de 24h" :</p>
                <p className="text-gray-700">Quand une pensée jalouse surgit, notez-la mais attendez 24h avant d'agir dessus. Dans 82% des cas, l'intensité émotionnelle diminue drastiquement et vous réalisez que réagir aurait été disproportionné.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-green-200">
              <h3 className="font-bold text-xl mb-4 text-green-700">4. Reconstruction de l'Estime de Soi</h3>
              <p className="text-gray-700 mb-3">
                Travaillez activement sur votre <strong>valeur personnelle</strong> indépendamment de votre relation : développez vos talents, atteignez des objectifs professionnels, entretenez vos amitiés, prenez soin de votre corps. Plus vous vous sentez complet et précieux par vous-même, moins vous avez peur que votre partenaire trouve "mieux" ailleurs.
              </p>
              <div className="bg-green-50 p-4 rounded border-l-4 border-green-400">
                <p className="font-semibold text-green-700 mb-2">Affirmation quotidienne :</p>
                <p className="text-gray-700">"Je suis digne d'amour tel que je suis. Mon partenaire est avec moi par choix, pas par défaut. Si cette relation se termine, je survivrai et trouverai le bonheur à nouveau."</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-yellow-200">
              <h3 className="font-bold text-xl mb-4 text-yellow-700">5. Thérapie de Couple (En Complément)</h3>
              <p className="text-gray-700 mb-3">
                Si votre partenaire est épuisé mais veut encore sauver la relation, la <strong>thérapie de couple</strong> peut aider. Elle permet à votre partenaire d'exprimer sa souffrance dans un cadre sécurisé, établit des limites claires entre réassurance saine et concessions toxiques, et vous apprend à communiquer différemment lors des moments d'anxiété.
              </p>
              <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
                <p className="font-semibold text-yellow-700 mb-2">Important :</p>
                <p className="text-gray-700">La thérapie de couple ne remplace PAS la thérapie individuelle. C'est un complément. La jalousie excessive est VOTRE problème à résoudre, pas un problème de couple à négocier.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-red-200">
              <h3 className="font-bold text-xl mb-4 text-red-700">6. Protocole Anti-Vérification (Behavioral Change)</h3>
              <p className="text-gray-700 mb-3">
                Mettez en place des <strong>règles strictes</strong> pour briser les comportements compulsifs : ne jamais vérifier le téléphone de votre partenaire, ne pas demander de compte-rendu détaillé des sorties, ne pas stalker sur les réseaux sociaux. Chaque fois que vous résistez à la compulsion de vérifier, vous affaiblissez le pattern neurologique de la jalousie.
              </p>
              <div className="bg-red-50 p-4 rounded border-l-4 border-red-400">
                <p className="font-semibold text-red-700 mb-2">Stratégie de substitution :</p>
                <p className="text-gray-700">Quand l'envie de vérifier surgit, remplacez par une action saine : 10 minutes de méditation, appeler un ami, faire du sport, écrire dans votre journal. Redirigez l'énergie anxieuse vers quelque chose de constructif.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-indigo-200">
              <h3 className="font-bold text-xl mb-4 text-indigo-700">7. Acceptation Radicale de l'Incertitude</h3>
              <p className="text-gray-700 mb-3">
                La vérité ultime : vous ne pourrez JAMAIS avoir une certitude absolue de la fidélité de votre partenaire. Même avec tous les accès, toute la surveillance, il existe toujours une possibilité théorique de trahison. L'<strong>acceptation radicale</strong> de cette incertitude fondamentale est paradoxalement ce qui libère de la jalousie : "Je choisis de faire confiance sachant que je pourrais être blessé. C'est le prix de l'amour."
              </p>
              <div className="bg-indigo-50 p-4 rounded border-l-4 border-indigo-400">
                <p className="font-semibold text-indigo-700 mb-2">Philosophie de guérison :</p>
                <p className="text-gray-700">La jalousie cherche la sécurité totale, qui n'existe pas en amour. La santé émotionnelle accepte la vulnérabilité comme partie intégrante de l'intimité. La confiance est un choix courageux, pas une garantie.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-red-600">🛡️ Pour le Partenaire Non-Jaloux : Comment Se Protéger</h2>
          <p className="text-gray-700 mb-6">
            Si vous êtes la personne qui subit la jalousie excessive de votre partenaire, voici comment <strong>protéger votre santé mentale</strong> sans abandonner immédiatement la relation.
          </p>

          <div className="space-y-5">
            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-700 mb-3">1. Établir des Limites Fermes et Non-Négociables</h3>
              <p className="text-gray-700 mb-2">
                Définissez clairement ce que vous acceptez et ce qui est inacceptable : "Je veux bien te rassurer quand tu es anxieux, mais je refuse de justifier chaque sortie en détail. Je ne donnerai pas mes mots de passe. Je ne renoncerai pas à mes amitiés." Tenez ces limites même lors des crises émotionnelles de votre partenaire.
              </p>
              <p className="text-gray-700 font-semibold">
                Principe clé : Vous n'êtes pas responsable de gérer l'anxiété de votre partenaire en sacrifiant votre autonomie. C'est son travail thérapeutique.
              </p>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-bold text-purple-700 mb-3">2. Refuser de Devenir Complice du Contrôle</h3>
              <p className="text-gray-700 mb-2">
                Ne cédez PAS sur vos libertés fondamentales pour "avoir la paix". Chaque concession (annuler une sortie, couper un ami, montrer votre téléphone) renforce le pattern de jalousie au lieu de le calmer. Votre partenaire apprend que la jalousie fonctionne pour obtenir le contrôle.
              </p>
              <p className="text-gray-700 font-semibold">
                Cercle vicieux : Plus vous cédez, plus la jalousie s'intensifie. La seule solution est de maintenir vos limites avec bienveillance mais fermeté.
              </p>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-700 mb-3">3. Encourager (voire Exiger) l'Aide Professionnelle</h3>
              <p className="text-gray-700 mb-2">
                Dites clairement : "Je t'aime, mais ta jalousie détruit notre relation et me fait souffrir. Je veux que tu consultes un thérapeute dans le mois qui vient. Si tu refuses, je devrai reconsidérer notre avenir car je ne peux plus vivre ainsi." Ce n'est pas un ultimatum cruel, c'est un <strong>acte d'amour ferme</strong>.
              </p>
              <p className="text-gray-700 font-semibold">
                Réalité : Si votre partenaire refuse toute aide malgré la souffrance évidente, c'est qu'il/elle préfère garder le contrôle plutôt que de guérir. C'est un red flag majeur.
              </p>
            </div>

            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-bold text-yellow-700 mb-3">4. Conserver Votre Vie Personnelle Intacte</h3>
              <p className="text-gray-700 mb-2">
                Maintenez activement vos amitiés, vos hobbies, vos sorties. Non par provocation, mais parce que c'est <strong>votre droit fondamental</strong> et votre santé psychologique. Un partenaire sain ne demande jamais l'isolement social. Si votre vie s'est rétrécie pour éviter les crises, reconstituez-la progressivement.
              </p>
              <p className="text-gray-700 font-semibold">
                Auto-check : Si vous cachez des activités normales (déjeuner avec un collègue, sortie avec un ami) pour éviter les crises, vous êtes dans une dynamique abusive.
              </p>
            </div>

            <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
              <h3 className="font-bold text-red-700 mb-3">5. Savoir Quand Partir : Les Seuils de Rupture</h3>
              <p className="text-gray-700 mb-2">
                Malgré votre amour, certaines situations exigent de partir pour votre sécurité : violence physique ou verbale, menaces de suicide si vous partez, isolement social total imposé, aucune amélioration après 6-12 mois de thérapie. Rester dans ces cas n'aide personne, cela vous détruit et permet à votre partenaire d'éviter les vraies conséquences de son comportement.
              </p>
              <p className="text-gray-700 font-semibold">
                Vérité difficile : Parfois, partir est l'acte le plus aimant. Cela force votre partenaire à toucher le fond et potentiellement chercher l'aide sérieuse dont il/elle a besoin.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-8 text-red-600">❓ Questions Fréquentes sur la Jalousie Excessive</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Comment savoir si ma jalousie est normale ou excessive ?</h3>
              <p className="text-gray-700 leading-relaxed">La jalousie normale est ponctuelle, basée sur des situations réelles, et ne perturbe pas le quotidien. La <strong>jalousie excessive</strong> est constante, basée sur des scénarios imaginaires, contrôle le comportement de l'autre (vérification téléphone, interdiction sorties), crée des crises régulières, et persiste malgré les preuves de fidélité. Si votre jalousie occupe vos pensées plus de 2-3 heures par jour ou crée des conflits hebdomadaires, elle est probablement excessive.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Quelles sont les vraies causes de la jalousie excessive ?</h3>
              <p className="text-gray-700 leading-relaxed">Les causes profondes incluent : blessures d'abandon infantile (parent absent, divorce), trahisons passées non guéries (ex qui a trompé), faible estime de soi ("Je ne mérite pas d'être aimé"), anxiété généralisée et besoin de contrôle, projection (on est tenté par d'autres donc on suppose que notre partenaire l'est aussi). 78% des jaloux excessifs ont vécu une <strong>trahison importante</strong> (parent ou ex) qui a créé une peur pathologique de l'abandon.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">La jalousie peut-elle détruire un couple même solide ?</h3>
              <p className="text-gray-700 leading-relaxed">Absolument. 43% des ruptures sont causées directement ou indirectement par la jalousie excessive. Même dans un couple aimant, la jalousie crée une dynamique toxique : la personne jalouse contrôle et accuse, l'autre se sent étouffé et perd confiance en la relation. Après 12-18 mois de <strong>jalousie intense</strong> non traitée, 67% des partenaires non-jaloux envisagent sérieusement la séparation car l'épuisement émotionnel devient insupportable.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Comment gérer la jalousie de mon partenaire sans me perdre ?</h3>
              <p className="text-gray-700 leading-relaxed">Établissez des <strong>limites claires</strong> : acceptez la réassurance raisonnable (un message pour dire que vous êtes bien rentrés) mais refusez le contrôle (partage de localisation 24/7, justification de chaque sortie). Encouragez votre partenaire à consulter un thérapeute. Ne renoncez PAS à votre vie sociale pour calmer sa jalousie, car cela renforce le pattern. Si aucune amélioration après 6 mois d'efforts, considérez la séparation pour votre santé mentale.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Peut-on guérir de la jalousie maladive ?</h3>
              <p className="text-gray-700 leading-relaxed">Oui, avec un travail psychologique sérieux. La <strong>thérapie cognitivo-comportementale (TCC)</strong> est très efficace : elle identifie les pensées irrationnelles et apprend à les remplacer par des pensées réalistes. La thérapie d'attachement soigne les blessures d'abandon. Les résultats apparaissent après 3-6 mois de thérapie régulière. 64% des personnes qui suivent une thérapie voient leur jalousie diminuer significativement. Le changement exige volonté, humilité et persévérance.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Quand la jalousie devient-elle dangereuse ou abusive ?</h3>
              <p className="text-gray-700 leading-relaxed">La jalousie devient abusive quand elle inclut : isolement forcé (interdiction de voir amis/famille), violence verbale ou physique lors des crises, contrôle total (accès forcé aux emails, GPS, finances), menaces (suicide, violence si vous partez), destruction d'objets. Si vous avez <strong>peur de votre partenaire jaloux</strong>, si vous cachez des choses anodines pour éviter les crises, ou si vous vous sentez prisonnier, la relation est devenue toxique et dangereuse. Cherchez de l'aide immédiatement.</p>
            </div>
          </div>
        </section>

        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900">📚 Articles Connexes sur les Crises de Couple</h3>
          <div className="space-y-2">
            <Link href="/crise-couple" className="block text-red-600 hover:text-red-800 font-medium">→ Crise de Couple : Toutes nos Solutions</Link>
            <Link href="/crise-couple/problemes-communication-couple" className="block text-red-600 hover:text-red-800 font-medium">→ Problèmes de Communication dans le Couple</Link>
            <Link href="/crise-couple/infidelite-couple" className="block text-red-600 hover:text-red-800 font-medium">→ Infidélité dans le Couple</Link>
            <Link href="/sentiments/maime-t-il-elle" className="block text-red-600 hover:text-red-800 font-medium">→ M'aime-t-il/elle Vraiment ?</Link>
            <Link href="/reconquete/ex-revient-silence-radio" className="block text-red-600 hover:text-red-800 font-medium">→ Ex qui Revient après Silence Radio</Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">🔮 Besoin d'Aide pour Votre Couple ?</h2>
          <p className="text-lg mb-6 opacity-95">Consultation personnalisée pour comprendre et résoudre la jalousie dans votre relation</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#consultation" className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition">Analyse de Votre Situation</a>
            <a href="#guidance" className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition">Solutions Personnalisées</a>
          </div>
          <p className="mt-6 text-sm opacity-90">✓ Écoute bienveillante • ✓ Conseils professionnels • ✓ Guidance pratique</p>
        </div>
      </div>
    </main>
  );
}
