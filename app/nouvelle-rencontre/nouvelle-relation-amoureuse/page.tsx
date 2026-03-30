import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema, getAuthorSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';

export const metadata: Metadata = {
  title: 'Nouvelle Relation Amoureuse : Guide des Premiers Mois | Construire les Bases',
  description: 'Tout savoir sur les premiers mois d\'une nouvelle relation amoureuse. Étapes clés, erreurs à éviter, construire des fondations solides et signes d\'une relation saine.',
  keywords: ['nouvelle relation amoureuse', 'début relation', 'premiers mois couple', 'construire relation', 'nouvelle histoire amour'],
  alternates: { canonical: 'https://www.voyantlove.fr/nouvelle-rencontre/nouvelle-relation-amoureuse/' },
};

export default function NouvelleRelationAmourseusePage() {
  const articleSchema = getArticleSchema({
    title: 'Nouvelle Relation Amoureuse : Guide des Premiers Mois | Construire les Bases',
    description: 'Tout savoir sur les premiers mois d\'une nouvelle relation amoureuse. Étapes clés, erreurs à éviter, construire des fondations solides et signes d\'une relation saine.',
    url: 'https://www.voyantlove.fr/nouvelle-rencontre/nouvelle-relation-amoureuse/',
    datePublished: '2026-02-09',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['nouvelle relation amoureuse', 'début relation', 'premiers mois couple', 'construire relation', 'nouvelle histoire amour'],
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Nouvelle Rencontre', url: 'https://www.voyantlove.fr/nouvelle-rencontre/' },
    { name: 'Nouvelle Relation Amoureuse', url: 'https://www.voyantlove.fr/nouvelle-rencontre/nouvelle-relation-amoureuse/' },
  ]);

  const authorSchema = getAuthorSchema();

  const faqSchema = getFAQSchema([
    {
      question: 'Combien de temps dure la phase de nouvelle relation ?',
      answer: 'La phase de nouvelle relation dure généralement 3 à 6 mois, parfois jusqu\'à 12 mois. Cette période correspond à la phase de passion et de découverte où les hormones (dopamine, ocytocine) sont à leur pic. Après 6-12 mois, le cerveau s\'adapte et la relation entre dans une phase plus stable et profonde. Les tarologues considèrent les 3 premiers mois comme cruciaux pour établir des bases saines.',
    },
    {
      question: 'Combien de fois se voir par semaine en début de relation ?',
      answer: 'En début de relation saine, se voir 2-3 fois par semaine est idéal pour les 2-3 premiers mois. Cela permet de créer des liens tout en maintenant son individualité. Après 3 mois, 3-4 fois par semaine devient naturel. Se voir tous les jours dès le début peut créer une fusion rapide malsaine et empêcher de conserver son indépendance. La majorité des couples durables ont maintenu cet équilibre dans les premiers mois.',
    },
    {
      question: 'Quand dire je t\'aime dans un nouveau couple ?',
      answer: 'Il n\'y a pas de timing parfait universel, mais généralement après 2-4 mois de relation, quand le sentiment est profond et réciproque. Dire "je t\'aime" trop tôt (moins d\'un mois) peut effrayer ou sembler superficiel. Trop tard (plus de 6 mois) peut créer de l\'insécurité. L\'important est l\'authenticité : dites-le quand vous le ressentez vraiment, pas par obligation sociale. Le tarot peut révéler si vos sentiments sont alignés.',
    },
    {
      question: 'Quels sont les red flags en debut de relation ?',
      answer: 'Les signaux d\'alarme incluent : love bombing (attention excessive puis retrait), jalousie possessive, critique constante, incohérence entre paroles et actes, refus de définir la relation après 3 mois, évitement des discussions profondes, manque de respect des limites, isolation de vos proches, comportements contrôlants. Si 3+ red flags apparaissent dans les premiers mois, reconsidérez la relation. Une relation saine se construit sur le respect, la communication et la cohérence.',
    },
    {
      question: 'Comment gérer son ex dans une nouvelle relation ?',
      answer: 'Communication transparente est clé : informez votre nouveau partenaire de tout contact avec un ex. Les limites saines incluent : pas de conversations intimes, pas de rencontres seul à seul sans raison valable, pas de secrets. Si votre partenaire reste obsédé par son ex ou les compare constamment à vous, c\'est un red flag. La plupart des nouvelles relations échouent quand un partenaire n\'a pas fait le deuil de l\'ex.',
    },
    {
      question: 'Quand présenter son nouveau partenaire à sa famille ?',
      answer: 'Attendez minimum 2-3 mois pour être sûr que la relation a un potentiel durable. Présentez d\'abord aux amis proches (plus flexible), puis à la famille (plus officiel) après 4-6 mois si tout va bien. Trop tôt crée une pression sociale et des attentes. Les présentations officielles signalent que vous voyez un avenir ensemble. Le tarot peut confirmer le timing idéal selon l\'évolution énergétique de votre couple.',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />

      <header className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/nouvelle-rencontre" className="text-white/80 hover:text-white mb-4 inline-block">← Retour aux Nouvelles Rencontres</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">💕 Nouvelle Relation Amoureuse</h1>
          <p className="text-xl opacity-95 mb-6">Réussir les premiers mois et construire des fondations solides</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#etapes" className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">Les Étapes Clés</a>
            <a href="#erreurs" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition">Éviter les Erreurs</a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">💖</div><div className="text-2xl font-bold text-rose-600">3-6 Mois</div><div className="text-sm text-gray-600">Phase cruciale</div></div>
          <div><div className="text-3xl mb-1">📊</div><div className="text-2xl font-bold text-rose-600">Forte</div><div className="text-sm text-gray-600">Réussite</div></div>
          <div><div className="text-3xl mb-1">⚠️</div><div className="text-2xl font-bold text-rose-600">8 Erreurs</div><div className="text-sm text-gray-600">À éviter</div></div>
          <div><div className="text-3xl mb-1">✨</div><div className="text-2xl font-bold text-rose-600">4,100+</div><div className="text-sm text-gray-600">Couples guidés</div></div>
        </div>

        <EEATSignal
          colorScheme="purple"
          method="Guidance relationnelle et tarot de couple"
        />

        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-rose-500">
          <p className="text-lg leading-relaxed mb-4">
            Les <strong>premiers mois d'une nouvelle relation amoureuse</strong> sont à la fois magiques et délicats. C'est la période où vous découvrez l'autre, où la passion est à son pic, mais aussi où se construisent les <strong>fondations</strong> qui détermineront la durabilité de votre couple. Une phase mal gérée peut compromettre une histoire qui aurait pu être belle.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Cette période se caractérise par un cocktail hormonal puissant (dopamine, ocytocine, sérotonine) qui vous fait voir la vie en rose. C'est la fameuse <strong>phase de lune de miel</strong> où tout semble parfait. Mais attention : ces hormones peuvent masquer des incompatibilités ou des red flags. D'où l'importance de rester conscient tout en profitant de cette magie.
          </p>
          <p className="text-lg leading-relaxed">
            Ce guide complet vous révèle les <strong>étapes naturelles d'une nouvelle relation</strong>, les erreurs fatales à éviter, comment construire des bases saines, et les signes qu'une relation a un potentiel de durabilité. Que vous ayez longtemps cherché <Link href="/nouvelle-rencontre/quand-rencontre-amour" className="text-rose-600 hover:text-rose-800 underline font-medium">quand rencontrer l'amour</Link> ou que le destin vous ait surpris, le <strong>tarot de couple</strong> peut éclairer les énergies en jeu et l'avenir probable de votre union naissante. Pour découvrir d'autres aspects de votre <Link href="/nouvelle-rencontre" className="text-rose-600 hover:text-rose-800 underline font-medium">nouvelle rencontre amoureuse</Link>, explorez toutes nos guidances spécialisées.
          </p>
        </article>

        <VoyantQuickCTA topic="nouvelle-rencontre" source="nouvelle-relation-amoureuse-early" />

        <section id="etapes" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-rose-600">📅 Les 6 Étapes d'une Nouvelle Relation Amoureuse</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Une nouvelle relation traverse six phases naturelles : attraction initiale, decouverte, construction de l'intimite, premier plateau, decision d'engagement et transition vers le couple etabli.</p>
          <p className="text-gray-700 mb-6">
            Toute <strong>nouvelle relation</strong> traverse des phases naturelles et prévisibles. Comprendre ces étapes vous aide à naviguer sereinement et à reconnaître si votre relation évolue sainement.
          </p>

          <div className="space-y-6">
            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-pink-700">Mois 1 : L'Attraction et l'Enthousiasme Initial</h3>
              <p className="text-gray-700 mb-3">
                <strong>Phase chimique pure :</strong> Votre cerveau est inondé de dopamine et de noradrénaline. Vous pensez constamment à l'autre, vous idéalisez ses qualités, vous minimisez ses défauts. C'est le fameux "coup de foudre" ou l'engouement passionné. Vous voulez passer tout votre temps ensemble.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Ce qui est normal :</strong> Papillons dans le ventre, difficulté à dormir, manque d'appétit, obsession mentale, énergie décuplée, impression de ne faire qu'un, communication intense (textos constants, appels longs).
              </p>
              <p className="text-gray-700">
                <strong>À faire :</strong> Profitez de cette magie tout en gardant une part de lucidité. Maintenez vos activités personnelles et vos amitiés. Observez comment votre partenaire se comporte : respecte-t-il vos limites ? Ses paroles correspondent-elles à ses actes ?
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-purple-700">Mois 2-3 : La Découverte Approfondie</h3>
              <p className="text-gray-700 mb-3">
                <strong>Phase de révélation :</strong> L'intensité initiale se stabilise légèrement. Vous commencez à voir l'autre plus réalistement. Les premières zones de friction peuvent apparaître : différences de rythme, d'habitudes, de valeurs. C'est normal et sain.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Ce qui est normal :</strong> Premiers désaccords mineurs, découverte de traits moins séduisants, besoin occasionnel d'espace personnel, questionnements légers ("sommes-nous vraiment compatibles ?"), définition progressive de la relation.
              </p>
              <p className="text-gray-700">
                <strong>À faire :</strong> Communiquez ouvertement sur vos attentes, vos limites, vos besoins. Observez comment vous gérez les conflits ensemble. Définissez votre relation : êtes-vous exclusifs ? Où va cette histoire ? La plupart des couples durables ont cette conversation entre le 2e et 3e mois.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-blue-700">Mois 4-6 : La Construction de l'Intimité Émotionnelle</h3>
              <p className="text-gray-700 mb-3">
                <strong>Phase de profondeur :</strong> Vous passez de la passion superficielle à une <strong>connexion émotionnelle authentique</strong>. Vous partagez vos vulnérabilités, vos peurs, vos rêves profonds. Vous vous montrez sans masque. L'ocytocine (hormone de l'attachement) prend le relais de la dopamine.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Ce qui est normal :</strong> Sentiment de sécurité grandissant, confort dans le silence, discussions sur l'avenir (projets, valeurs, vision de vie), intégration dans les cercles sociaux respectifs, premiers "je t'aime".
              </p>
              <p className="text-gray-700">
                <strong>À faire :</strong> Continuez à cultiver votre individualité tout en construisant votre "nous". Introduisez votre partenaire à vos proches. Évaluez honnêtement : cette personne correspond-elle vraiment à ce que vous cherchez ? Les valeurs sont-elles alignées ?
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-green-700">Mois 7-9 : Le Premier Plateau ou "Réalité Check"</h3>
              <p className="text-gray-700 mb-3">
                <strong>Phase de test :</strong> La chimie initiale s'est calmée. Vous voyez l'autre dans sa réalité complète, y compris ses défauts. Certains couples paniquent ("ai-je perdu mes sentiments ?"). En réalité, c'est juste le passage de la passion à l'amour mature.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Ce qui est normal :</strong> Baisse de l'intensité émotionnelle, questionnements sur la relation, besoin de renouveau ou d'efforts conscients, premiers vrais conflits, irritations par les habitudes de l'autre.
              </p>
              <p className="text-gray-700">
                <strong>À faire :</strong> Ne confondez pas "calme" avec "ennui". Une relation saine n'est pas constamment passionnée. Investissez consciemment : planifiez des dates, surprises, nouvelles expériences ensemble. Communiquez sur vos besoins évolutifs.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-yellow-700">Mois 10-12 : La Décision et l'Engagement</h3>
              <p className="text-gray-700 mb-3">
                <strong>Phase de choix conscient :</strong> Après un an, vous savez vraiment qui est votre partenaire. Les hormones ne brouillent plus votre jugement. C'est le moment où vous décidez consciemment : cette relation a-t-elle un avenir long terme ? Voulez-vous approfondir l'engagement ?
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Ce qui est normal :</strong> Réflexions sur l'avenir (emménagement, mariage, projets communs), évaluation de la compatibilité long terme, discussions sérieuses sur les attentes, sentiment de certitude ou au contraire de doutes persistants.
              </p>
              <p className="text-gray-700">
                <strong>À faire :</strong> Soyez honnête avec vous-même : cette personne vous rend-elle meilleur ? Respecte-t-elle vos valeurs fondamentales ? Pouvez-vous vous projeter avec elle dans 5, 10 ans ? Si oui, engagez-vous plus profondément. Si non, ayez le courage de partir.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-red-700">Après 12 Mois : La Transition vers le Couple Établi</h3>
              <p className="text-gray-700 mb-3">
                <strong>Phase de maturation :</strong> Vous n'êtes plus une "nouvelle relation". Vous êtes un couple établi qui construit sur des bases solides. L'amour est plus calme mais plus profond. Vous avez traversé des saisons ensemble, géré des conflits, construit des souvenirs.
              </p>
              <p className="text-gray-700">
                <strong>À faire :</strong> Continuez à nourrir la relation consciemment. L'amour durable nécessite des efforts constants : communication, surprise, intimité, projets communs, respect de l'individualité. Les couples qui durent investissent activement dans leur relation année après année.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-8 mb-8 border-2 border-rose-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">🏗️ Construire des Fondations Solides : Les 7 Piliers</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Les sept piliers d'une relation durable sont : communication honnete, respect des limites, gestion saine des conflits, alignement des valeurs, intimite equilibree, confiance et investissement reciproque.</p>
          <p className="text-gray-700 mb-6">
            Une <strong>relation durable</strong> ne se construit pas sur la passion seule, mais sur des fondations conscientes et solides établies dès les premiers mois.
          </p>

          <div className="space-y-5">
            <div className="bg-white rounded-lg p-5 border-l-4 border-pink-500">
              <h3 className="font-bold text-pink-700 mb-2 text-lg">1. Communication Honnête et Régulière</h3>
              <p className="text-gray-700">
                Établissez dès le début une <strong>communication ouverte</strong> : exprimez vos besoins, partagez vos émotions, écoutez activement. Ne supposez jamais que l'autre "devrait savoir". Les couples qui communiquent bien dès le début ont 4x plus de chances de durer. Créez un espace où les deux peuvent être vulnérables sans jugement.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-purple-500">
              <h3 className="font-bold text-purple-700 mb-2 text-lg">2. Respect Mutuel des Limites et de l'Individualité</h3>
              <p className="text-gray-700">
                Maintenez votre <strong>identité individuelle</strong> : vos hobbies, vos amis, votre temps personnel. Une relation saine n'est pas fusionnelle mais interdépendante. Respectez les limites de l'autre : temps, espace, passé, relations extérieures. Le respect des limites crée la sécurité émotionnelle essentielle à l'intimité profonde.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-700 mb-2 text-lg">3. Gestion Saine des Conflits</h3>
              <p className="text-gray-700">
                Les désaccords sont inévitables et sains. Ce qui compte : <strong>comment vous les gérez</strong>. Évitez les 4 cavaliers de l'apocalypse relationnelle selon Gottman : critique, mépris, défensivité, retrait. Privilégiez : écoute, validation des émotions, recherche de solutions gagnant-gagnant, réparation après conflit. Les premiers conflits révèlent beaucoup.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-green-500">
              <h3 className="font-bold text-green-700 mb-2 text-lg">4. Alignement des Valeurs et Vision de Vie</h3>
              <p className="text-gray-700">
                Discutez tôt des <strong>sujets fondamentaux</strong> : désir d'enfants, vision du mariage, carrière vs famille, finances, spiritualité, localisation géographique. Vous n'avez pas besoin d'être identiques, mais vos visions doivent être compatibles. La majorité des ruptures après 1 an sont dues à des incompatibilités de valeurs non adressées dès le début.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-yellow-500">
              <h3 className="font-bold text-yellow-700 mb-2 text-lg">5. Intimité Physique et Émotionnelle Équilibrées</h3>
              <p className="text-gray-700">
                Cultivez les <strong>deux formes d'intimité</strong> : physique (affection, sexualité) et émotionnelle (vulnérabilité, partage profond). L'une sans l'autre crée un déséquilibre. Communiquez sur vos besoins sexuels et affectifs sans honte. L'intimité se construit progressivement, respectez le rythme de chacun.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-orange-500">
              <h3 className="font-bold text-orange-700 mb-2 text-lg">6. Confiance et Transparence</h3>
              <p className="text-gray-700">
                La <strong>confiance se construit</strong> par la cohérence entre paroles et actes. Soyez fiable : tenez vos promesses, soyez présent quand vous le dites, répondez aux besoins exprimés. La transparence (pas tous les détails, mais honnêteté sur l'important) crée la sécurité. Sans confiance, pas de relation durable possible.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-red-500">
              <h3 className="font-bold text-red-700 mb-2 text-lg">7. Investissement Réciproque et Équilibré</h3>
              <p className="text-gray-700">
                Une relation saine est <strong>équilibrée</strong> : les deux investissent temps, énergie, attention. Si l'un donne beaucoup et l'autre très peu, ça ne durera pas. Évaluez dès les premiers mois : l'autre fait-il des efforts ? Initie-t-il des plans ? S'intéresse-t-il vraiment à vous ? L'amour se montre par les actes, pas juste les mots.
              </p>
            </div>
          </div>
        </section>

        <section id="erreurs" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-rose-600">⚠️ Les 8 Erreurs Fatales des Premiers Mois</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Les erreurs les plus frequentes sont aller trop vite, ignorer les red flags, se perdre dans la relation, eviter les conversations difficiles et comparer constamment avec un ex.</p>
          <p className="text-gray-700 mb-6">
            Certaines erreurs classiques peuvent compromettre une <strong>nouvelle relation prometteuse</strong>. Voici les pièges les plus fréquents à éviter absolument.
          </p>

          <div className="space-y-4">
            <div className="bg-red-50 p-5 rounded-lg border-2 border-red-200">
              <h3 className="font-bold text-red-700 mb-2 flex items-center gap-2">
                <span className="text-2xl">1️⃣</span> Aller Trop Vite (Love Bombing ou Fusion Rapide)
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Symptômes :</strong> Dire "je t'aime" après 2 semaines, emménager après 2 mois, se voir tous les jours dès le début, couper tous vos amis et activités pour être avec l'autre 24/7, parler mariage après un mois.
              </p>
              <p className="text-gray-700">
                <strong>Pourquoi c'est fatal :</strong> Vous sautez les étapes naturelles de construction d'une relation. Vous créez une fusion basée sur l'intensité, pas sur la connaissance réelle. Quand les hormones retombent (inévitable), vous réalisez que vous ne vous connaissez pas vraiment. La plupart des relations qui vont trop vite se terminent avant 1 an.
              </p>
            </div>

            <div className="bg-orange-50 p-5 rounded-lg border-2 border-orange-200">
              <h3 className="font-bold text-orange-700 mb-2 flex items-center gap-2">
                <span className="text-2xl">2️⃣</span> Ignorer les Red Flags par Peur de Perdre la Relation
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Symptômes :</strong> Vous remarquez des comportements problématiques (jalousie excessive, mensonges, incohérences, manque de respect) mais vous les minimisez ou les excusez. "Ce n'est rien", "ça va s'arranger", "je peux le changer".
              </p>
              <p className="text-gray-700">
                <strong>Pourquoi c'est fatal :</strong> Les red flags des premiers mois sont des prédicteurs fiables de problèmes futurs. Ils s'aggravent rarement avec le temps, ils s'amplifient. Vous investissez dans une relation toxique par espoir ou peur de la solitude. Résultat : mois ou années perdus dans une relation malsaine.
              </p>
            </div>

            <div className="bg-yellow-50 p-5 rounded-lg border-2 border-yellow-200">
              <h3 className="font-bold text-yellow-700 mb-2 flex items-center gap-2">
                <span className="text-2xl">3️⃣</span> Se Perdre Soi-Même dans la Relation
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Symptômes :</strong> Vous abandonnez vos hobbies, vos amis, vos projets personnels. Votre vie tourne uniquement autour de votre partenaire. Vous adoptez ses goûts, ses opinions, vous vous effacez pour lui plaire.
              </p>
              <p className="text-gray-700">
                <strong>Pourquoi c'est fatal :</strong> Vous créez une codépendance malsaine. Votre partenaire finira par perdre intérêt (il est tombé amoureux de QUI vous étiez). Vous perdez votre identité et votre estime de vous. Si la relation se termine, vous êtes détruit car vous n'avez plus rien en dehors d'elle.
              </p>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border-2 border-green-200">
              <h3 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                <span className="text-2xl">4️⃣</span> Éviter les Conversations Difficiles
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Symptômes :</strong> Vous évitez de parler d'exclusivité, d'ex, de besoins non satisfaits, de limites franchies. "Je ne veux pas créer de tension", "c'est trop tôt pour en parler", "je ne veux pas le faire fuir".
              </p>
              <p className="text-gray-700">
                <strong>Pourquoi c'est fatal :</strong> Les non-dits créent des ressentiments qui s'accumulent. Vous construisez sur des bases floues et des malentendus. Au bout de quelques mois, l'explosion est inévitable. Les couples durables ont des conversations difficiles tôt, établissant clarté et respect mutuel.
              </p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-2 border-blue-200">
              <h3 className="font-bold text-blue-700 mb-2 flex items-center gap-2">
                <span className="text-2xl">5️⃣</span> Comparer Constamment avec l'Ex ou des Idéaux
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Symptômes :</strong> "Mon ex faisait ça mieux", "dans mon imagination mon partenaire idéal serait...", mention constante d'anciens partenaires, nostalgie du passé, critiques basées sur des comparaisons.
              </p>
              <p className="text-gray-700">
                <strong>Pourquoi c'est fatal :</strong> Votre nouveau partenaire sent qu'il ne sera jamais à la hauteur. Vous n'êtes pas vraiment disponible car mentalement et émotionnellement bloqué dans le passé. Vous sabotez quelque chose de potentiellement bon par incapacité à être présent. Toute <Link href="/reconquete/seconde-chance-amour" className="text-rose-600 hover:text-rose-800 underline font-medium">seconde chance en amour</Link> exige d'avoir fait le deuil de l'ex.
              </p>
            </div>

            <div className="bg-indigo-50 p-5 rounded-lg border-2 border-indigo-200">
              <h3 className="font-bold text-indigo-700 mb-2 flex items-center gap-2">
                <span className="text-2xl">6️⃣</span> Jouer à des Jeux Psychologiques
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Symptômes :</strong> Attendre X jours avant de répondre pour ne pas paraître désespéré, jouer dur à conquérir, créer de la jalousie intentionnellement, tester l'autre, manipuler émotionnellement.
              </p>
              <p className="text-gray-700">
                <strong>Pourquoi c'est fatal :</strong> Vous créez une dynamique toxique de pouvoir au lieu d'authenticité. Les jeux empêchent la vraie connexion. Si ça "marche", vous attirez quelqu'un qui aime les jeux toxiques. Les relations saines se construisent sur l'honnêteté, pas la manipulation.
              </p>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-2 border-purple-200">
              <h3 className="font-bold text-purple-700 mb-2 flex items-center gap-2">
                <span className="text-2xl">7️⃣</span> Négliger les Incompatibilités Majeures
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Symptômes :</strong> "L'amour suffit", "on verra plus tard", ignorer les différences fondamentales (désir d'enfants, vision du mariage, valeurs religieuses, objectifs de vie, localisation géographique).
              </p>
              <p className="text-gray-700">
                <strong>Pourquoi c'est fatal :</strong> L'amour ne suffit PAS si vos vies vont dans des directions opposées. Vous investissez émotionnellement dans une relation vouée à l'échec. Plus vous attendez pour adresser ces incompatibilités, plus la rupture sera douloureuse. Mieux vaut une conversation difficile tôt qu'une séparation déchirante après 2 ans.
              </p>
            </div>

            <div className="bg-pink-50 p-5 rounded-lg border-2 border-pink-200">
              <h3 className="font-bold text-pink-700 mb-2 flex items-center gap-2">
                <span className="text-2xl">8️⃣</span> Précipiter l'Intimité Sexuelle Sans Connexion Émotionnelle
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Symptômes :</strong> Sexualité intense dès le premier rendez-vous, utiliser le sexe pour créer un lien artificiel, confondre chimie physique avec compatibilité émotionnelle, sexe comme seul mode de connexion.
              </p>
              <p className="text-gray-700">
                <strong>Pourquoi c'est fatal :</strong> Le sexe crée de l'ocytocine qui vous attache à quelqu'un que vous ne connaissez pas vraiment. Vous restez dans une relation médiocre émotionnellement à cause de la bonne chimie physique. Ou inversement, l'absence d'autres formes d'intimité fait que la relation s'éteint une fois la nouveauté sexuelle partie.
              </p>
            </div>
          </div>
        </section>

        <VoyantRecommendations topic="nouvelle-rencontre" limit={3} showOnlineFirst={true} source="nouvelle-relation-amoureuse-mid" />

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-rose-600">✅ Les 10 Signes d'une Nouvelle Relation Saine et Prometteuse</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Une relation saine se reconnait par une communication facile, la coherence entre paroles et actes, le respect mutuel, l'equilibre donner-recevoir et un sentiment de securite emotionnelle.</p>
          <p className="text-gray-700 mb-6">
            Comment savoir si votre <strong>nouvelle relation</strong> a un potentiel de durabilité ? Voici les indicateurs fiables d'une relation partie sur de bonnes bases.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                <span>✓</span> Communication Facile et Naturelle
              </h3>
              <p className="text-gray-700 text-sm">Vous pouvez parler de tout sans filtre excessif. Les conversations coulent naturellement du léger au profond. Vous vous sentez écouté et compris.</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                <span>✓</span> Cohérence entre Paroles et Actes
              </h3>
              <p className="text-gray-700 text-sm">Votre partenaire fait ce qu'il dit. S'il dit qu'il appellera, il appelle. S'il promet quelque chose, il le fait. Fiabilité = fondation de confiance.</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                <span>✓</span> Respect Mutuel Constant
              </h3>
              <p className="text-gray-700 text-sm">Même en désaccord, le respect reste. Pas de cris, insultes, mépris. Vos limites et besoins sont entendus et honorés.</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                <span>✓</span> Équilibre Donner/Recevoir
              </h3>
              <p className="text-gray-700 text-sm">Les deux investissent équitablement : temps, efforts, attention, compromis. Personne ne sent qu'il donne tout et reçoit peu.</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                <span>✓</span> Acceptation Authentique
              </h3>
              <p className="text-gray-700 text-sm">Votre partenaire vous aime pour qui vous êtes, pas pour qui il veut que vous deveniez. Il ne cherche pas à vous changer fondamentalement.</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                <span>✓</span> Soutien des Projets Individuels
              </h3>
              <p className="text-gray-700 text-sm">Chacun encourage les rêves et objectifs de l'autre. Vous célébrez mutuellement vos succès sans jalousie ni compétition.</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                <span>✓</span> Gestion Constructive des Conflits
              </h3>
              <p className="text-gray-700 text-sm">Les désaccords se résolvent par dialogue, pas cris ou silence radio. Vous cherchez des solutions ensemble, pas à "gagner" l'argument.</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                <span>✓</span> Intégration Progressive dans Vos Vies
              </h3>
              <p className="text-gray-700 text-sm">Votre partenaire s'intéresse à vos amis, famille, activités. Il veut connaître votre monde, pas vous isoler. Intégration saine = signe de sérieux.</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                <span>✓</span> Progression Naturelle de l'Intimité
              </h3>
              <p className="text-gray-700 text-sm">L'intimité physique ET émotionnelle s'approfondit graduellement. Pas de précipitation ni de stagnation. Rythme qui respecte les deux.</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                <span>✓</span> Sentiment de Sécurité Émotionnelle
              </h3>
              <p className="text-gray-700 text-sm">Vous pouvez être vulnérable sans peur d'être jugé ou abandonné. Vous vous sentez en sécurité pour être pleinement vous-même.</p>
            </div>
          </div>

          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 mt-6">
            <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
              <span>🔮</span> Confirmation Tarot
            </h4>
            <p className="text-gray-700">
              Le <strong>tarot de couple</strong> peut confirmer si votre nouvelle relation a un potentiel de durabilité. Cartes positives : Deux de Coupe (partenariat harmonieux), Dix de Coupe (accomplissement), Les Amoureux (choix conscient), L'Étoile (espoir et guidance). Si 3+ signes positifs ci-dessus PLUS cartes favorables au tarot = relation très prometteuse.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 mb-8 border-2 border-purple-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">🗓️ Timeline Pratique : Que Faire et Quand ?</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Le premier mois est dedie a la decouverte, les mois 2-3 a la definition de la relation, les mois 4-6 au premier « je t'aime » et les mois 7-12 a la presentation a la famille et la decision d'engagement.</p>
          <p className="text-gray-700 mb-6">
            Un guide pratique des <strong>milestones naturels</strong> d'une nouvelle relation saine. Ces timings ne sont pas rigides mais représentent des moyennes statistiques.
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-l-4 border-rose-500">
              <h3 className="font-bold text-rose-700 mb-2">Semaines 1-4 : Phase de Découverte</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Rendez-vous réguliers (1-2 fois par semaine)</li>
                <li>Communication quotidienne légère (textos, appels courts)</li>
                <li>Premier baiser (généralement rendez-vous 1-3)</li>
                <li>Partage d'informations de base (travail, famille, passions)</li>
                <li>Pas encore d'attentes ou d'engagement définit</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-pink-500">
              <h3 className="font-bold text-pink-700 mb-2">Mois 2-3 : Définition de la Relation</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Conversation sur l'exclusivité ("sommes-nous en couple officiel ?")</li>
                <li>Augmentation de la fréquence des rendez-vous (2-3 fois par semaine)</li>
                <li>Intimité sexuelle (si alignée avec vos valeurs, timing varie)</li>
                <li>Partage de vulnérabilités et histoires personnelles</li>
                <li>Suppression des apps de rencontre si exclusifs</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-purple-500">
              <h3 className="font-bold text-purple-700 mb-2">Mois 4-6 : Approfondissement</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Premier "je t'aime" (quand authentiquement ressenti)</li>
                <li>Introduction aux amis proches</li>
                <li>Discussions sur valeurs et vision de vie</li>
                <li>Premier voyage ou week-end ensemble</li>
                <li>Gestion des premiers vrais conflits</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-700 mb-2">Mois 7-12 : Consolidation</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Introduction à la famille</li>
                <li>Discussions sur l'avenir long terme (mariage, enfants, localisation)</li>
                <li>Intégration dans les routines de vie</li>
                <li>Éventuellement emménagement (généralement après 12+ mois)</li>
                <li>Décision consciente d'engagement plus profond ou séparation</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg mt-6">
            <h4 className="font-bold text-yellow-800 mb-2">⚠️ Note Importante</h4>
            <p className="text-gray-700">
              Ces timelines sont des <strong>moyennes</strong>, pas des règles absolues. Certains couples vont plus vite, d'autres plus lentement -- notamment ceux qui vivent l'<Link href="/nouvelle-rencontre/amour-apres-40-ans" className="text-rose-600 hover:text-rose-800 underline font-medium">amour après 40 ans</Link>, où la maturité émotionnelle accélère souvent la connexion. L'important est que VOUS vous sentiez confortable avec le rythme et que les deux partenaires soient alignés. Méfiez-vous cependant des extrêmes : trop rapide (risque de fusion) ou trop lent après 6+ mois (peur d'engagement ?).
            </p>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-8 text-rose-600">❓ Questions Fréquentes sur les Nouvelles Relations Amoureuses</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Retrouvez les reponses aux questions les plus posees sur le rythme, les etapes cles et les pieges a eviter dans les premiers mois d'une nouvelle relation amoureuse.</p>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Combien de temps dure la phase de nouvelle relation ?</h3>
              <p className="text-gray-700 leading-relaxed">La phase de <strong>nouvelle relation</strong> dure généralement 3 à 6 mois, parfois jusqu'à 12 mois. Cette période correspond à la phase de passion et de découverte où les hormones (dopamine, ocytocine) sont à leur pic. Après 6-12 mois, le cerveau s'adapte et la relation entre dans une phase plus stable et profonde. Les tarologues considèrent les 3 premiers mois comme cruciaux pour établir des bases saines.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Combien de fois se voir par semaine en début de relation ?</h3>
              <p className="text-gray-700 leading-relaxed">En début de relation saine, se voir 2-3 fois par semaine est idéal pour les 2-3 premiers mois. Cela permet de créer des liens tout en maintenant son individualité. Après 3 mois, 3-4 fois par semaine devient naturel. Se voir tous les jours dès le début peut créer une fusion rapide malsaine et empêcher de conserver son indépendance. La majorité des couples durables ont maintenu cet équilibre dans les premiers mois.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Quand dire je t'aime dans un nouveau couple ?</h3>
              <p className="text-gray-700 leading-relaxed">Il n'y a pas de timing parfait universel, mais généralement après 2-4 mois de relation, quand le sentiment est profond et réciproque. Dire "je t'aime" trop tôt (moins d'un mois) peut effrayer ou sembler superficiel. Trop tard (plus de 6 mois) peut créer de l'insécurité. L'important est l'authenticité : dites-le quand vous le ressentez vraiment, pas par obligation sociale. Le tarot peut révéler si vos sentiments sont alignés.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Quels sont les red flags en debut de relation ?</h3>
              <p className="text-gray-700 leading-relaxed">Les signaux d'alarme incluent : <strong>love bombing</strong> (attention excessive puis retrait), jalousie possessive, critique constante, incohérence entre paroles et actes, refus de définir la relation après 3 mois, évitement des discussions profondes, manque de respect des limites, isolation de vos proches, comportements contrôlants. Si 3+ red flags apparaissent dans les premiers mois, reconsidérez la relation. Une relation saine se construit sur le respect, la communication et la cohérence.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Comment gérer son ex dans une nouvelle relation ?</h3>
              <p className="text-gray-700 leading-relaxed">Communication transparente est clé : informez votre nouveau partenaire de tout contact avec un ex. Les limites saines incluent : pas de conversations intimes, pas de rencontres seul à seul sans raison valable, pas de secrets. Si votre partenaire reste obsédé par son ex ou les compare constamment à vous, c'est un red flag. La plupart des nouvelles relations échouent quand un partenaire n'a pas fait le deuil de l'ex.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Quand présenter son nouveau partenaire à sa famille ?</h3>
              <p className="text-gray-700 leading-relaxed">Attendez minimum 2-3 mois pour être sûr que la relation a un potentiel durable. Présentez d'abord aux amis proches (plus flexible), puis à la famille (plus officiel) après 4-6 mois si tout va bien. Trop tôt crée une pression sociale et des attentes. Les présentations officielles signalent que vous voyez un avenir ensemble. Le tarot peut confirmer le timing idéal selon l'évolution énergétique de votre couple.</p>
            </div>
          </div>
        </section>

        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900">📚 Articles Connexes</h3>
          <div className="space-y-2">
            <Link href="/nouvelle-rencontre" className="block text-rose-600 hover:text-rose-800 font-medium">→ Nouvelle Rencontre : Toutes nos Guidances</Link>
            <Link href="/nouvelle-rencontre/signes-ame-soeur" className="block text-rose-600 hover:text-rose-800 font-medium">→ Signes de l'Âme Sœur</Link>
            <Link href="/nouvelle-rencontre/quand-rencontre-amour" className="block text-rose-600 hover:text-rose-800 font-medium">→ Quand Vais-je Rencontrer l'Amour ?</Link>
            <Link href="/sentiments/avenir-amoureux" className="block text-rose-600 hover:text-rose-800 font-medium">→ Mon Avenir Amoureux</Link>
          </div>
        </div>

        <VoyantFinalCTA topic="nouvelle-rencontre" source="nouvelle-relation-amoureuse-final" />
      </div>
    </main>
  );
}
