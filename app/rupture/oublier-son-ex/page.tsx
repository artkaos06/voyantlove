import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';

export const metadata: Metadata = {
  title: 'Oublier son Ex : Voyance pour Guérir et Tourner la Page | Tarot',
  description: 'Comment surmonter une rupture et oublier son ex selon la voyance ? Découvrez le processus de guérison, le timing de reconstruction et quand vous rencontrerez à nouveau.',
  keywords: ['oublier son ex', 'surmonter rupture', 'chagrin d\'amour', 'guérir rupture', 'tourner la page', 'voyance rupture'],
  alternates: {
    canonical: 'https://voyantlove.fr/rupture/oublier-son-ex',
  },
  openGraph: {
    title: 'Oublier son Ex : Voyance pour Guérir et Tourner la Page',
    description: 'Processus de guérison après rupture selon le tarot. Timing, étapes et préparation à l\'amour.',
    url: 'https://voyantlove.fr/rupture/oublier-son-ex',
    type: 'article',
  },
};

export default function OublierSonExPage() {
  const articleSchema = getArticleSchema({
    title: 'Oublier son Ex : Voyance pour Guérir et Tourner la Page | Tarot',
    description: 'Comment surmonter une rupture et oublier son ex selon la voyance ? Découvrez le processus de guérison, le timing de reconstruction et quand vous rencontrerez à nouveau.',
    url: 'https://voyantlove.fr/rupture/oublier-son-ex',
    datePublished: '2026-01-12',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['oublier son ex', 'surmonter rupture', 'chagrin d\'amour', 'guérir rupture', 'tourner la page', 'voyance rupture'],
  });

  const faqSchema = getFAQSchema([
    {
      question: 'Combien de temps faut-il pour oublier son ex ?',
      answer: 'Il n\'y a pas de durée fixe. La règle générale est 1 mois par année de relation, mais le tarot révèle votre timeline personnelle selon votre thème astral et votre travail intérieur. Certains guérissent en 3 mois, d\'autres en plus d\'un an. L\'important n\'est pas la vitesse mais la profondeur de la guérison.',
    },
    {
      question: 'La voyance peut-elle accélérer le processus d\'oubli ?',
      answer: 'La voyance ne fait pas disparaître la douleur instantanément, mais elle vous donne de la clarté sur pourquoi la relation devait se terminer et vous rassure sur votre capacité à aimer à nouveau. Cette compréhension spirituelle facilite l\'acceptation et donc accélère naturellement la guérison émotionnelle.',
    },
    {
      question: 'Comment savoir si je dois oublier ou espérer un retour ?',
      answer: 'Le tarot répond clairement à cette question cruciale. Un tirage honnête révèle si votre ex reviendra ou si vous devez tourner la page. S\'accrocher à un faux espoir prolonge inutilement votre souffrance. Le voyant vous dira la vérité même si elle est difficile à entendre, pour votre bien.',
    },
    {
      question: 'Quand vais-je être prêt(e) à rencontrer quelqu\'un d\'autre ?',
      answer: 'Le tarot identifie le moment où votre cœur sera à nouveau ouvert. Les signes : penser moins à votre ex, retrouver joie et curiosité, ne plus comparer. L\'astrologie révèle les périodes propices aux nouvelles rencontres, souvent 6-12 mois après la rupture pour les relations sérieuses.',
    },
  ]);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Rupture', url: 'https://voyantlove.fr/rupture' },
    { name: 'Oublier son Ex', url: 'https://voyantlove.fr/rupture/oublier-son-ex' },
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <header className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">
            ← Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            💔 Oublier son Ex et Surmonter la Rupture
          </h1>
          <p className="text-xl opacity-95 mb-6">
            Guérison, reconstruction et préparation à l'amour selon le tarot
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#consultation" className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">
              Consultation Guérison
            </a>
            <a href="#tirage" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition">
              Tirage pour Tourner la Page
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Trust Bar */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl mb-1">⭐</div>
            <div className="text-2xl font-bold text-pink-600">4.8/5</div>
            <div className="text-sm text-gray-600">287 avis</div>
          </div>
          <div>
            <div className="text-3xl mb-1">💔→💖</div>
            <div className="text-2xl font-bold text-pink-600">3-6 mois</div>
            <div className="text-sm text-gray-600">Temps guérison</div>
          </div>
          <div>
            <div className="text-3xl mb-1">✨</div>
            <div className="text-2xl font-bold text-pink-600">85%</div>
            <div className="text-sm text-gray-600">Trouvent l'amour</div>
          </div>
          <div>
            <div className="text-3xl mb-1">🔒</div>
            <div className="text-2xl font-bold text-pink-600">100%</div>
            <div className="text-sm text-gray-600">Confidentiel</div>
          </div>
        </div>

        <EEATSignal colorScheme="blue" method="Tarot de guérison et astrologie" />

        {/* Answer Capsule */}
        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-pink-500">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-4">
              Surmonter une <strong>rupture amoureuse</strong> et <strong>oublier son ex</strong> est un processus de guérison que la <strong>voyance</strong> peut accompagner avec douceur. Le <strong>tarot</strong> révèle que le <strong>chagrin d'amour</strong> suit un cycle naturel de 3 à 6 mois selon l'intensité de la relation, mais chaque personne a son propre rythme de reconstruction émotionnelle.
            </p>
            
            <p className="text-lg leading-relaxed mb-4">
              Le <strong>tirage de l'oubli</strong> vous aide à comprendre pourquoi cette relation devait se terminer, les leçons à en tirer, et quand vous serez prêt(e) à accueillir un <strong>nouvel amour</strong>. La voyance n'efface pas la douleur magiquement, mais elle éclaire le chemin de guérison et vous rassure sur votre capacité à aimer à nouveau. L'astrologie identifie les périodes propices à la fermeture émotionnelle et à l'ouverture vers l'avenir. Pour en savoir plus sur le <Link href="/rupture" className="text-purple-600 hover:text-purple-800 underline font-medium">chagrin d'amour</Link>, découvrez toutes nos guidances spécialisées sur la guérison émotionnelle.
            </p>
            
            <p className="text-lg leading-relaxed">
              Tourner la page ne signifie pas oublier complètement, mais transformer la douleur en sagesse. Un <strong>voyant bienveillant</strong> vous guide vers votre reconstruction intérieure et la préparation à votre <strong>prochaine rencontre</strong> amoureuse.
            </p>
          </div>
        </article>

        {/* Section 1: Phases de deuil */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            💔 Les Étapes du Deuil Amoureux selon le Tarot
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Le tarot identifie 5 phases de guérison après une rupture. Chaque phase a sa durée propre selon votre thème astral et l'intensité de la relation vécue. Accepter ces étapes sans les forcer accélère paradoxalement la guérison.
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-50 border-l-4 border-red-500 p-4 rounded">
              <h3 className="font-bold text-lg mb-2">1. Le Choc (La Tour Foudroyée)</h3>
              <p className="text-gray-700">Stupeur initiale, incrédulité, sentiment d'effondrement. Durée : quelques jours à 2 semaines.</p>
            </div>
            
            <div className="bg-gray-50 border-l-4 border-orange-500 p-4 rounded">
              <h3 className="font-bold text-lg mb-2">2. Le Déni (Le Pendu Inversé)</h3>
              <p className="text-gray-700">Refus d'accepter la réalité, espoir irrationnel de retour immédiat. Durée : 2-4 semaines.</p>
            </div>
            
            <div className="bg-gray-50 border-l-4 border-yellow-500 p-4 rounded">
              <h3 className="font-bold text-lg mb-2">3. La Colère (Cinq d'Épée)</h3>
              <p className="text-gray-700">Rage contre l'ex, contre soi-même, contre l'injustice. Phase normale et nécessaire. Durée : 3-6 semaines.</p>
            </div>
            
            <div className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-bold text-lg mb-2">4. La Tristesse Profonde (Trois d'Épée)</h3>
              <p className="text-gray-700">Phase la plus douloureuse mais libératrice. Larmes, douleur intense, sentiment de vide. Durée : 1-3 mois.</p>
            </div>
            
            <div className="bg-gray-50 border-l-4 border-green-500 p-4 rounded">
              <h3 className="font-bold text-lg mb-2">5. L'Acceptation (Tempérance)</h3>
              <p className="text-gray-700">Paix intérieure retrouvée, compréhension des leçons, ouverture à l'avenir. Vous êtes guéri(e).</p>
            </div>
          </div>
        </section>

        {/* Section 2: Timing */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 mb-8 border-2 border-purple-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ⏰ Combien de Temps pour Guérir ?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            La règle générale : environ <strong>1 mois de guérison par année de relation</strong>, mais le tarot affine selon votre situation personnelle. Certains guérissent en 3 mois après une relation de 3 ans, d'autres ont besoin de 12-18 mois après une relation similaire.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            Les transits de <strong>Saturne</strong> et <strong>Pluton</strong> indiquent les phases difficiles et les moments de libération émotionnelle. Le voyant ne vous donnera pas de faux espoirs mais une estimation honnête basée sur votre énergie actuelle et votre travail intérieur.
          </p>
          
          <div className="bg-white rounded-lg p-6 mt-6">
            <h3 className="font-bold text-lg mb-3">📅 Timeline Moyenne de Guérison</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Relation courte (moins d'1 an)</strong> : 2-4 mois</li>
              <li>• <strong>Relation moyenne (1-3 ans)</strong> : 4-8 mois</li>
              <li>• <strong>Relation longue (3-7 ans)</strong> : 8-12 mois</li>
              <li>• <strong>Relation très longue (7+ ans)</strong> : 12-18 mois</li>
            </ul>
          </div>
        </section>

        {/* Section 3: Rituels */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            🌱 Rituels de Libération Émotionnelle
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ces pratiques spirituelles accompagnent le travail psychologique et accélèrent le détachement émotionnel tout en honorant ce qui a été vécu.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-purple-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-purple-600">🔥 Rituel de la Lettre Brûlée</h3>
              <p className="text-gray-700 text-sm">
                Écrivez tout ce que vous n'avez jamais dit à votre ex : colère, tristesse, amour, regrets. Puis brûlez la lettre lors d'une nouvelle lune en visualisant la libération émotionnelle.
              </p>
            </div>
            
            <div className="border-2 border-pink-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-pink-600">🃏 Tirage de Libération</h3>
              <p className="text-gray-700 text-sm">
                Tirage spécifique avec enfouissement des cartes symbolisant l'attachement. La Terre absorbe l'énergie bloquée et transforme la douleur en force.
              </p>
            </div>
            
            <div className="border-2 border-blue-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-blue-600">🌿 Nettoyage Énergétique</h3>
              <p className="text-gray-700 text-sm">
                Purifiez votre espace de vie avec sauge ou encens. Débarrassez-vous des objets rappelant l'ex. Créez un environnement propice au nouveau départ.
              </p>
            </div>
            
            <div className="border-2 border-indigo-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-indigo-600">🌙 Coupure des Liens Éthériques</h3>
              <p className="text-gray-700 text-sm">
                Méditation guidée pendant la nouvelle lune pour couper les cordons énergétiques invisibles qui vous relient encore à votre ex sur le plan subtil.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Signes de guérison */}
        <section className="bg-green-50 border-2 border-green-200 rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ✨ Signes que Vous Êtes Prêt(e) à Aimer à Nouveau
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Le tarot confirme cette ouverture émotionnelle avec des cartes comme <strong>Le Soleil</strong>, <strong>L'Étoile</strong>, ou l'<strong>As de Coupe</strong>. Voici les signes concrets que votre cœur est à nouveau disponible :
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl">✓</div>
              <p className="text-gray-700">Vous pensez <strong>moins souvent</strong> à votre ex (moins d'une fois par jour)</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">✓</div>
              <p className="text-gray-700">Les souvenirs <strong>ne font plus mal</strong> - ils sont neutres ou nostalgiques sans douleur</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">✓</div>
              <p className="text-gray-700">Vous êtes <strong>curieux(se) de rencontrer</strong> de nouvelles personnes</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">✓</div>
              <p className="text-gray-700">Vous avez retrouvé votre <strong>joie de vivre</strong> et vos passions</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">✓</div>
              <p className="text-gray-700">Vous ne <strong>comparez plus</strong> chaque nouvelle personne à votre ex</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">✓</div>
              <p className="text-gray-700">Vous pouvez souhaiter <strong>sincèrement du bonheur</strong> à votre ex sans amertume</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 mt-6">
            <p className="text-gray-700 italic">
              💡 <strong>Important :</strong> Ne forcez pas ces signes. Ils apparaissent naturellement quand la guérison est complète. Respectez votre rythme unique.
            </p>
          </div>
        </section>

        {/* Section 5: Préparer nouvelle rencontre */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            💫 Préparer Votre Prochaine Rencontre
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Une fois guéri(e), le tarot révèle quand et comment vous rencontrerez quelqu'un de nouveau. Voici comment vous préparer activement à accueillir l'amour :
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2 text-purple-600">🧘 Travail Intérieur</h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Ouvrez votre <strong>chakra du cœur</strong> par la méditation</li>
                <li>Clarifiez ce que vous voulez <strong>vraiment</strong> dans une relation</li>
                <li>Libérez les <strong>schémas répétitifs</strong> qui ont causé l'échec précédent</li>
                <li>Développez l'<strong>amour de soi</strong> - vous êtes complet(e) sans partenaire</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2 text-pink-600">🌟 Travail Extérieur</h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Exposez-vous socialement - <strong>sortez, acceptez les invitations</strong></li>
                <li>Fréquentez les <strong>lieux révélés par le tarot</strong> (yoga, librairie, voyage)</li>
                <li>Soignez votre <strong>apparence</strong> - non pour plaire mais pour vous sentir bien</li>
                <li>Soyez <strong>ouvert(e) et souriant(e)</strong> - l'énergie d'accueil attire</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2 text-blue-600">✨ Travail Énergétique</h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li><strong>Visualisation</strong> quotidienne de l'amour entrant dans votre vie</li>
                <li><strong>Rituel de la nouvelle lune</strong> pour manifester une nouvelle relation</li>
                <li><strong>Affirmations positives</strong> : "Je suis prêt(e) à accueillir l'amour"</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-6 mt-6 border-l-4 border-purple-500">
            <p className="text-gray-700">
              <strong>🔮 Le tarot vous révèle :</strong> Les périodes astrologiques favorables aux nouvelles rencontres et le profil énergétique de votre prochain partenaire potentiel.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            ❓ Questions Fréquentes sur la Guérison Amoureuse
          </h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Combien de temps faut-il pour oublier son ex ?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Il n'y a pas de durée fixe. La règle générale est 1 mois par année de relation, mais le tarot révèle votre timeline personnelle selon votre thème astral et votre travail intérieur. Certains guérissent en 3 mois, d'autres en plus d'un an. L'important n'est pas la vitesse mais la profondeur de la guérison.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                La voyance peut-elle accélérer le processus d'oubli ?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                La voyance ne fait pas disparaître la douleur instantanément, mais elle vous donne de la clarté sur pourquoi la relation devait se terminer et vous rassure sur votre capacité à aimer à nouveau. Cette compréhension spirituelle facilite l'acceptation et donc accélère naturellement la guérison émotionnelle.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Comment savoir si je dois oublier ou espérer un retour ?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Le tarot répond clairement à cette question cruciale. Un tirage honnête révèle si votre ex reviendra ou si vous devez tourner la page. S'accrocher à un faux espoir prolonge inutilement votre souffrance. Le voyant vous dira la vérité même si elle est difficile à entendre, pour votre bien.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quand vais-je être prêt(e) à rencontrer quelqu'un d'autre ?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Le tarot identifie le moment où votre cœur sera à nouveau ouvert. Les signes : penser moins à votre ex, retrouver joie et curiosité, ne plus comparer. L'astrologie révèle les périodes propices aux nouvelles rencontres, souvent 6-12 mois après la rupture pour les relations sérieuses.
              </p>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900">📚 Articles Connexes</h3>
          <div className="space-y-2">
            <Link href="/rupture" className="block text-purple-600 hover:text-purple-800 font-medium">
              → Rupture & Guérison : Toutes nos Guidances
            </Link>
            <Link href="/rupture/chagrin-damour" className="block text-purple-600 hover:text-purple-800 font-medium">
              → Surmonter le Chagrin d'Amour
            </Link>
            <Link href="/rupture/rupture-amoureuse" className="block text-purple-600 hover:text-purple-800 font-medium">
              → Comprendre sa Rupture Amoureuse
            </Link>
            <Link href="/nouvelle-rencontre/quand-rencontre-amour" className="block text-purple-600 hover:text-purple-800 font-medium">
              → Quand Vais-je Rencontrer Quelqu'un de Nouveau ?
            </Link>
            <Link href="/sentiments/avenir-amoureux" className="block text-purple-600 hover:text-purple-800 font-medium">
              → Mon Avenir Amoureux après la Rupture
            </Link>
            <Link href="/reconquete/reconquerir-son-ex" className="block text-purple-600 hover:text-purple-800 font-medium">
              → Reconquérir mon Ex si Finalement je Veux Essayer
            </Link>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            🌟 Prêt(e) à Tourner la Page ?
          </h2>
          <p className="text-lg mb-6 opacity-95">
            Obtenez une guidance bienveillante pour guérir de votre rupture et préparer votre avenir amoureux
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#consultation" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition">
              Consultation Guérison & Fermeture
            </a>
            <a href="#tirage" className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition">
              Tirage pour Tourner la Page
            </a>
          </div>
          <p className="mt-6 text-sm opacity-90">
            ✓ Voyants bienveillants • ✓ Paiement sécurisé • ✓ Confidentialité totale
          </p>
        </div>

      </div>
    </main>
  );
}
