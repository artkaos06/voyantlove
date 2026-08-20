import Link from 'next/link';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import ContentPage, { contentMeta, type ContentPageConfig } from '@/components/ContentPage';

const config: ContentPageConfig = {
  railsTop: 'marc-de-cafe-amour-cards-top',
  title: 'Marc de café amour : tasséographie et signes sentimentaux',
  description: 'Découvrez la lecture du marc de café appliquée à l\'amour : symboles du cœur, de l\'anneau, de l\'oiseau, méthode de tirage et guide pratique. La tasséographie au service de vos questions de cœur.',
  url: 'https://www.voyantlove.fr/methodes-voyance/marc-de-cafe-amour/',
  keywords: ['marc de café amour', 'tasséographie amour', 'lecture marc de café sentimental', 'symboles marc de café amour'],
  datePublished: '2026-08-06',
  dateModified: '2026-08-06',
  breadcrumb: [
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Méthodes de Voyance', url: 'https://www.voyantlove.fr/methodes-voyance/' },
    { name: 'Marc de Café Amour', url: 'https://www.voyantlove.fr/methodes-voyance/marc-de-cafe-amour/' },
  ],
  header: {
    emoji: '☕',
    h1: 'Marc de café amour',
    subtitle: 'La tasséographie au service de vos questions sentimentales',
    gradient: 'from-amber-900 via-orange-800 to-stone-800',
    backLink: { href: '/methodes-voyance/', label: 'Retour aux méthodes de voyance' },
    anchors: [
      { href: '#symboles', label: 'Les symboles amoureux', primary: true },
      { href: '#pratique', label: 'Faire sa propre lecture' },
    ],
  },
  accentText: 'text-amber-800',
  stats: [
    { icon: '☕', value: 'Tasséographie', label: 'Nom de l\'art' },
    { icon: '🌍', value: 'Turc & Grec', label: 'Traditions vivantes' },
    { icon: '💞', value: 'Conviviale', label: 'Pratique partagée' },
    { icon: '🔍', value: 'Symbolique', label: 'Formes à interpréter' },
  ],
  eeat: { colorScheme: 'orange', method: 'Tasséographie amoureuse, lecture du marc de café' },
  cta: { topic: 'methodes-voyance', slug: 'marc-de-cafe-amour' },
  faq: [
    {
      q: 'Quels symboles du marc de café sont favorables en amour ?',
      a: 'Le cœur bien dessiné est le symbole le plus recherché, annonçant un amour sincère ou une déclaration à venir. L\'anneau évoque un engagement ou des fiançailles proches. L\'oiseau symbolise de bonnes nouvelles sentimentales. Une étoile nette indique généralement la chance et l\'épanouissement en amour. Ces significations s\'interprètent toujours dans le contexte global de la tasse, pas isolément.',
    },
    {
      q: 'Comment se déroule une lecture de marc de café pour une question d\'amour ?',
      a: 'Vous buvez un café non filtré en pensant à votre question sentimentale, puis retournez la tasse sur sa soucoupe et la faites tourner trois fois. Le praticien observe ensuite les formes dessinées par le marc, en tenant compte de leur position dans la tasse, le bord représentant le futur proche, le fond des événements plus lointains, pour construire une lecture d\'ensemble de votre situation.',
    },
    {
      q: 'Peut-on pratiquer la lecture du marc de café soi-même ?',
      a: 'C\'est une pratique traditionnellement transmise en famille ou entre amis, mais reconnaître et interpréter finement les formes demande de l\'entraînement : les premières lectures autodidactes distinguent souvent difficilement les figures pertinentes du hasard des résidus. Un praticien expérimenté apporte une lecture plus nuancée pour les questions amoureuses importantes.',
    },
    {
      q: 'Faut-il du café turc spécifiquement pour la tasséographie amoureuse ?',
      a: 'Le café turc, non filtré et laissant une quantité généreuse de marc au fond de la tasse, est traditionnellement privilégié car il produit des figures plus nettes et plus faciles à interpréter. Un café classique très infusé peut également convenir, à condition de laisser suffisamment de résidus visibles au fond de la tasse.',
    },
  ],
  related: [
    { href: '/methodes-voyance/', label: 'Toutes les méthodes de voyance amoureuse' },
    { href: '/methodes-voyance/cartomancie-amour/', label: 'Cartomancie amour' },
    { href: '/methodes-voyance/voyance-sentimentale/', label: 'Voyance sentimentale' },
    { href: '/methodes-voyance/oracle-amour/', label: 'Oracle de l\'amour' },
    { href: '/glossaire/tasseographie/', label: 'Glossaire : tasséographie' },
    { href: '/glossaire/signe-du-destin/', label: 'Glossaire : signe du destin' },
  ],
};

export const metadata = contentMeta(config);

export default function MarcDeCafeAmourPage() {
  return (
    <ContentPage config={config}>
        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-amber-800">
          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-lg">
            <p className="text-lg leading-relaxed">
              Le <strong>marc de café amour</strong> désigne l&apos;art de lire les formes laissées par le café au fond d&apos;une tasse, une pratique appelée <strong>tasséographie</strong> (ou caféomancie), pour éclairer vos questions sentimentales. Contrairement au <Link href="/methodes-voyance/tirage-tarot-amour/" className="text-amber-800 hover:text-amber-900 underline font-medium">tarot</Link> ou à l&apos;<Link href="/methodes-voyance/oracle-amour/" className="text-amber-800 hover:text-amber-900 underline font-medium">oracle</Link>, cette méthode se pratique traditionnellement entre proches, autour d&apos;un café partagé, ce qui lui donne une dimension chaleureuse et accessible. Chaque forme perçue, un cœur, un anneau, un oiseau, porte une signification symbolique précise, interprétée selon sa position dans la tasse. Cette guidance complète explore les symboles amoureux les plus fréquents, la méthode de lecture, et comment vous initier vous-même à cette pratique ancestrale.
            </p>
          </div>
        </article>


        {/* Section 1: Qu'est-ce que la tasséographie */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">📖 Qu&apos;est-ce que la Lecture du Marc de Café en Amour ?</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">La tasséographie interprète les formes dessinées par le marc de café au fond de la tasse, une tradition particulièrement vivante dans les cultures turque, grecque et d&apos;Europe de l&apos;Est.</p>
          <p className="text-gray-700 mb-6">
            La <strong>tasséographie</strong>, parfois appelée caféomancie, hérite d&apos;une tradition plus ancienne, la <strong>lécanomancie</strong>, art antique consistant à lire des présages dans un bassin d&apos;eau ou d&apos;huile. L&apos;arrivée du café au Moyen-Orient puis en Europe a donné naissance à cette variante spécifique, transmise de génération en génération au sein des familles plutôt que par des professionnels.
          </p>
          <div className="space-y-5">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-amber-800">Une Pratique Sociale et Chaleureuse</h3>
              <p className="text-gray-700 text-sm">Contrairement à d&apos;autres méthodes de voyance plus solennelles, la lecture du marc de café se pratique volontiers entre amies, autour d&apos;un café partagé. Cette convivialité en fait une porte d&apos;entrée douce vers les questions de <strong>cœur</strong>.</p>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-orange-800">Une Lecture par Position</h3>
              <p className="text-gray-700 text-sm">La forme d&apos;ensemble compte autant que les symboles isolés. La disposition dans la tasse, proche du bord ou du fond, proche de l&apos;anse ou à l&apos;opposé, module la signification et la <strong>temporalité</strong> de chaque symbole perçu : le bord représente le futur proche, le fond des événements plus lointains.</p>
            </div>
          </div>
        </section>

        {/* Section 2: Symboles amoureux */}
        <section id="symboles" className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 mb-8 border-2 border-amber-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">💕 Les Symboles Amoureux les Plus Fréquents</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Cœur, anneau, oiseau ou étoile : chaque forme dessinée par le marc porte une signification amoureuse précise, à nuancer selon son contexte dans la tasse.</p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-lg p-5 border-l-4 border-rose-500">
              <h3 className="font-bold text-lg mb-2 text-rose-700">💗 Le Cœur</h3>
              <p className="text-gray-700 text-sm">Le symbole le plus recherché en tasséographie amoureuse. Un cœur bien formé annonce un amour sincère ou une déclaration proche ; un cœur fragmenté peut indiquer une période de doute à traverser.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-amber-500">
              <h3 className="font-bold text-lg mb-2 text-amber-700">💍 L&apos;Anneau</h3>
              <p className="text-gray-700 text-sm">Évoque un engagement ou des fiançailles proches. Sa netteté et sa proximité avec le bord de la tasse renforceraient l&apos;imminence de l&apos;événement annoncé.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-sky-500">
              <h3 className="font-bold text-lg mb-2 text-sky-700">🕊️ L&apos;Oiseau</h3>
              <p className="text-gray-700 text-sm">Symbolise de bonnes nouvelles sentimentales ou l&apos;arrivée d&apos;un message important, une déclaration attendue, des nouvelles d&apos;une personne qui compte.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-yellow-500">
              <h3 className="font-bold text-lg mb-2 text-yellow-700">⭐ L&apos;Étoile</h3>
              <p className="text-gray-700 text-sm">Indique généralement la chance et l&apos;épanouissement en amour, particulièrement favorable lorsqu&apos;elle apparaît nette et bien dessinée près du cœur de la tasse.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-slate-500">
              <h3 className="font-bold text-lg mb-2 text-slate-700">🛤️ Le Chemin ou la Ligne</h3>
              <p className="text-gray-700 text-sm">Une ligne droite et continue évoque une relation qui avance clairement ; une ligne brisée ou sinueuse suggère des obstacles ou des hésitations à surmonter ensemble.</p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-gray-500">
              <h3 className="font-bold text-lg mb-2 text-gray-700">☁️ Le Nuage</h3>
              <p className="text-gray-700 text-sm">Signale une période de confusion ou de doute sentimental. Un nuage isolé invite à la patience avant de tirer des conclusions hâtives sur une situation ambiguë.</p>
            </div>
          </div>
        </section>

        <VoyantQuickCTA topic="methodes-voyance" source="marc-de-cafe-amour-banner-mid" />

        {/* Section 3: Guide pratique */}
        <section id="pratique" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🔍 Comment Faire une Lecture de Marc de Café Soi-Même</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Quatre étapes simples permettent de s&apos;initier à la tasséographie amoureuse, même si une lecture fiable demande de l&apos;entraînement et un œil exercé.</p>
          <div className="space-y-4">
            <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-400">
              <h3 className="font-bold text-amber-800 mb-1">1. Préparez un café non filtré</h3>
              <p className="text-gray-700 text-sm">Un café turc ou très infusé, sans filtre, laisse suffisamment de marc au fond de la tasse pour dessiner des formes nettes une fois la boisson terminée.</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-400">
              <h3 className="font-bold text-orange-800 mb-1">2. Concentrez-vous sur votre question</h3>
              <p className="text-gray-700 text-sm">En buvant votre café, formulez clairement votre question sentimentale dans votre esprit, sans la partager à voix haute pour préserver la concentration.</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
              <h3 className="font-bold text-yellow-800 mb-1">3. Retournez la tasse</h3>
              <p className="text-gray-700 text-sm">Une fois le café terminé, retournez la tasse sur sa soucoupe et faites-la tourner trois fois dans le sens des aiguilles d&apos;une montre avant de la laisser reposer quelques minutes.</p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border-l-4 border-stone-400">
              <h3 className="font-bold text-stone-800 mb-1">4. Observez les formes et leur position</h3>
              <p className="text-gray-700 text-sm">Identifiez les symboles dessinés par le marc, en tenant compte de leur emplacement : le bord de la tasse pour le futur proche, le fond pour les événements plus lointains ou déjà accomplis.</p>
            </div>
          </div>
          <div className="bg-amber-100 border-l-4 border-amber-600 p-5 rounded-lg mt-6">
            <p className="text-gray-700"><strong>Pourquoi consulter un professionnel :</strong> reconnaître et interpréter finement les formes demande de l&apos;entraînement. Un <strong>praticien expérimenté</strong> apporte une lecture plus nuancée, en particulier pour des questions amoureuses complexes ou chargées émotionnellement.</p>
          </div>
        </section>

        {/* Section 4: Comparaison */}
        <section className="bg-gradient-to-br from-orange-50 to-stone-50 rounded-xl p-8 mb-8 border-2 border-orange-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">⚖️ Marc de Café, Cartomancie ou Tarot : Quelle Différence ?</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Le marc de café offre une lecture spontanée et symbolique à partir de formes naturelles, là où la cartomancie et le tarot s&apos;appuient sur des cartes aux significations codifiées.</p>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-white rounded-lg p-5 border-2 border-amber-300">
              <h3 className="font-bold text-lg mb-3 text-amber-800">☕ Marc de Café</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p>&bull; Formes naturelles et spontanées</p>
                <p>&bull; Pratique conviviale et accessible</p>
                <p>&bull; Idéal pour un aperçu rapide et chaleureux</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 border-2 border-teal-300">
              <h3 className="font-bold text-lg mb-3 text-teal-700">🎴 Cartomancie</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p>&bull; Symboles codifiés et combinatoires</p>
                <p>&bull; Réponses concrètes et précises</p>
              </div>
              <p className="text-sm text-teal-600 mt-3">
                <Link href="/methodes-voyance/cartomancie-amour/" className="underline hover:text-teal-800 font-medium">Découvrir la cartomancie &rarr;</Link>
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 border-2 border-indigo-300">
              <h3 className="font-bold text-lg mb-3 text-indigo-700">🃏 Tarot</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p>&bull; Symbolique riche et narrative</p>
                <p>&bull; Idéal pour une analyse en profondeur</p>
              </div>
              <p className="text-sm text-indigo-600 mt-3">
                <Link href="/methodes-voyance/tirage-tarot-amour/" className="underline hover:text-indigo-800 font-medium">Découvrir le tarot &rarr;</Link>
              </p>
            </div>
          </div>
          <div className="bg-white border-l-4 border-amber-600 p-5 rounded-lg mt-6">
            <p className="text-gray-700"><strong>Le conseil VoyantLove :</strong> le marc de café convient parfaitement à une question sentimentale ponctuelle abordée sur le ton de la confidence. Pour une analyse plus approfondie de votre relation, la <Link href="/methodes-voyance/voyance-sentimentale/" className="text-amber-800 hover:text-amber-900 underline font-medium">voyance sentimentale</Link> complète offre une lecture plus structurée.</p>
          </div>
        </section>

        {/* Section 5: Consultation */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🧙 Consulter un Praticien Spécialisé en Marc de Café</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Un praticien expérimenté combine la connaissance des symboles traditionnels à une intuition affinée pour une lecture nuancée de votre situation amoureuse.</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Si la tasséographie se prête bien à une pratique entre proches, une consultation avec un <strong>voyant</strong> spécialisé apporte une profondeur supplémentaire, en particulier lorsque votre question sentimentale est complexe ou chargée émotionnellement.
          </p>
          <div className="text-center">
            <Link href="/consulter/?ref=marc-de-cafe-amour" className="inline-block bg-amber-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-900 transition">Consulter un Praticien Vérifié →</Link>
          </div>
        </section>
    </ContentPage>
  );
}
