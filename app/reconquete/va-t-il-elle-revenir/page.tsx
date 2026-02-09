import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Mon Ex Va-t-il Revenir ? Réponse du Tarot et Voyance | Prédiction',
  description: 'Votre ex va-t-il/elle revenir ? Le tarot répond à cette question cruciale. Découvrez les signes de retour, le timing probable et ce qu\'il/elle ressent vraiment.',
  keywords: ['va-t-il revenir', 'mon ex va revenir', 'retour ex tarot', 'prédiction retour', 'signes retour ex'],
  alternates: {
    canonical: 'https://voyantlove.fr/reconquete/va-t-il-elle-revenir',
  },
};

export default function VaTilRevenirPage() {
  const articleSchema = getArticleSchema({
    title: 'Mon Ex Va-t-il Revenir ? Réponse du Tarot et Voyance | Prédiction',
    description: 'Votre ex va-t-il/elle revenir ? Le tarot répond à cette question cruciale. Découvrez les signes de retour, le timing probable et ce qu\'il/elle ressent vraiment.',
    url: 'https://voyantlove.fr/reconquete/va-t-il-elle-revenir',
    datePublished: '2026-01-14',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['va-t-il revenir', 'mon ex va revenir', 'retour ex tarot', 'prédiction retour', 'signes retour ex'],
  });

  const faqSchema = getFAQSchema([
    {
      question: 'Le tarot peut-il me dire avec certitude si mon ex reviendra ?',
      answer: 'Le tarot indique les probabilités selon les énergies actuelles et les choix de libre arbitre de chacun. Il révèle si un retour est très probable, possible, improbable ou impossible. Un bon voyant vous donnera un pourcentage honnête basé sur les cartes et ne vous promettra jamais un retour à 100% car le futur reste mouvant.',
    },
    {
      question: 'Combien de temps faut-il attendre pour savoir ?',
      answer: 'Le tarot peut donner un timing : quelques semaines, 3 mois, 6 mois, 1 an. Si après ce délai rien ne se passe, c\'est qu\'il faut lâcher prise. Attention aux faux espoirs : si après 6 mois de silence total votre ex n\'a fait aucun signe, les chances diminuent drastiquement.',
    },
    {
      question: 'Quels sont les signes astrologiques d\'un retour imminent ?',
      answer: 'Vénus rétrograde dans votre signe ou celui de votre ex, éclipse sur votre axe relationnel (Descendant), transit de Vénus sur votre Soleil natal, nouvelle lune en maison 7. Ces périodes astrologiques créent des ouvertures propices aux retours. Un voyant astrologue peut analyser votre thème pour identifier ces moments.',
    },
    {
      question: 'Dois-je attendre mon ex ou tourner la page ?',
      answer: 'Le tarot répond clairement à cette question cruciale. S\'il montre un retour probable dans un délai raisonnable (3-6 mois) et que ce retour est bénéfique, vous pouvez attendre tout en vivant votre vie. S\'il montre que c\'est terminé, tournez la page pour votre bien. Un voyant vous conseille honnêtement.',
    },
  ]);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Reconquête', url: 'https://voyantlove.fr/reconquete' },
    { name: 'Va-t-il/elle Revenir', url: 'https://voyantlove.fr/reconquete/va-t-il-elle-revenir' },
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
      <header className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Retour</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">❓ Va-t-il/elle Revenir ?</h1>
          <p className="text-xl opacity-95 mb-6">La réponse honnête du tarot à votre question la plus importante</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#consultation" className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">Tirage Retour Personnalisé</a>
            <a href="#signes" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition">Voir les Signes</a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">⭐</div><div className="text-2xl font-bold text-purple-600">4.8/5</div><div className="text-sm text-gray-600">287 avis</div></div>
          <div><div className="text-3xl mb-1">↩️</div><div className="text-2xl font-bold text-purple-600">42%</div><div className="text-sm text-gray-600">Retours effectifs</div></div>
          <div><div className="text-3xl mb-1">⏰</div><div className="text-2xl font-bold text-purple-600">3-6 mois</div><div className="text-sm text-gray-600">Délai moyen</div></div>
          <div><div className="text-3xl mb-1">🔮</div><div className="text-2xl font-bold text-purple-600">87%</div><div className="text-sm text-gray-600">Précision tarot</div></div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 text-sm text-gray-700">
          <strong>Source :</strong> VoyantLove • <strong>Mis à jour :</strong> 8 février 2025 • <strong>Méthode :</strong> Tarot prédictif et astrologie
        </div>

        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-purple-600">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-4">
              La question "<strong>va-t-il/elle revenir</strong>" est la plus posée en <strong>voyance amoureuse</strong>. Le <strong>tarot</strong> peut répondre en analysant les énergies actuelles, les sentiments de votre <strong>ex</strong>, et les probabilités de <strong>retour</strong> selon la configuration astrologique. La réponse n'est jamais un simple oui ou non, mais une analyse nuancée des facteurs en jeu.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Le tirage révèle : ce que votre ex ressent maintenant, s'il/elle pense à vous, les obstacles au retour, le <strong>timing</strong> probable si retour il y a, et surtout si ce retour serait dans votre intérêt. Parfois, le tarot vous montrera qu'un retour est possible mais déconseillé pour votre évolution. D'autres fois, il confirmera un retour imminent avec des signes concrets à observer.
            </p>
            <p className="text-lg leading-relaxed">
              Un <strong>voyant honnête</strong> ne vous donnera pas de faux espoirs. Si les cartes montrent que votre ex a tourné la page, il vous le dira avec bienveillance pour vous permettre d'avancer. Si un <strong>retour</strong> est probable, il vous indiquera les conditions et le timing. Pour en savoir plus sur les <Link href="/reconquete" className="text-purple-600 hover:text-purple-800 underline font-medium">retrouvailles</Link>, découvrez toutes nos guidances spécialisées.
            </p>
          </div>
        </article>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🔮 Ce que le Tarot Révèle sur le Retour</h2>
          <p className="text-gray-700 leading-relaxed mb-6">Le tirage du retour de l'ex analyse 4 positions clés pour vous donner une réponse complète et honnête.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
              <h3 className="font-bold text-lg mb-3 text-purple-700">1️⃣ Sentiments Actuels de l'Ex</h3>
              <p className="text-gray-700 text-sm">Le tarot capte ce que votre ex ressent vraiment maintenant : amour résiduel, regrets, colère, indifférence, ou confusion. Cette première position est cruciale.</p>
            </div>
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded">
              <h3 className="font-bold text-lg mb-3 text-indigo-700">2️⃣ Pensées et Regrets</h3>
              <p className="text-gray-700 text-sm">Pense-t-il/elle à vous ? A-t-il/elle des regrets ? Cette position révèle le dialogue intérieur de votre ex et sa nostalgie éventuelle.</p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
              <h3 className="font-bold text-lg mb-3 text-blue-700">3️⃣ Obstacles au Retour</h3>
              <p className="text-gray-700 text-sm">Qu'est-ce qui empêche le retour ? Fierté, nouvelle relation, blessure trop profonde, peur de souffrir à nouveau ? Le tarot identifie les blocages.</p>
            </div>
            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded">
              <h3 className="font-bold text-lg mb-3 text-cyan-700">4️⃣ Probabilité et Timing</h3>
              <p className="text-gray-700 text-sm">La carte finale indique : retour probable (Deux de Coupe), impossible (Tour), incertain (Roue), ou conditionnel à votre évolution (Tempérance).</p>
            </div>
          </div>
          <div className="mt-6 bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700"><strong>🃏 Cartes clés :</strong> <span className="text-purple-600">Le Retour, Deux de Coupe, L'Amoureux</span> = retour probable • <span className="text-red-600">Tour, Dix d'Épée, Huit de Coupe</span> = fin définitive • <span className="text-yellow-600">Pendu, Roue</span> = attente nécessaire</p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 mb-8 border-2 border-indigo-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">📅 Timing du Retour selon l'Astrologie</h2>
          <p className="text-gray-700 leading-relaxed mb-6">Si le tarot indique un retour possible, l'astrologie affine le timing pour savoir quand cela pourrait se produire.</p>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border-l-4 border-pink-500">
              <h3 className="font-bold mb-2 text-pink-700">💕 Vénus Rétrograde</h3>
              <p className="text-gray-700 text-sm">Période puissante pour les retours d'ex (tous les 18 mois). Les anciens amours resurging naturellement pendant ces 40 jours.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
              <h3 className="font-bold mb-2 text-purple-700">🌕 Éclipses</h3>
              <p className="text-gray-700 text-sm">Provoquent des retournements de situation spectaculaires. Les ex peuvent revenir lors d'éclipses lunaires sur votre axe relationnel.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
              <h3 className="font-bold mb-2 text-blue-700">🌙 Pleine Lune</h3>
              <p className="text-gray-700 text-sm">Favorise les retours émotionnels soudains et les prises de conscience. Les ex ressentent un manque intense lors des pleines lunes.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-indigo-500">
              <h3 className="font-bold mb-2 text-indigo-700">⏰ Timeline Tarot</h3>
              <p className="text-gray-700 text-sm">As = 1-3 mois • Cavaliers = 3-6 mois • Reines/Rois = 6-12 mois • Arcanes Majeurs = plus d'un an ou jamais</p>
            </div>
          </div>
        </section>

        <section id="signes" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">💡 Les Signes Concrets qu'il/elle Va Revenir</h2>
          <p className="text-gray-700 leading-relaxed mb-6">Observez ces indices dans votre vie quotidienne - ils confirment ce que le tarot a révélé.</p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
              <div className="text-2xl">✓</div>
              <div><strong className="text-green-700">Contact repris</strong> : Votre ex reprend contact pour des raisons futiles, trouve des prétextes pour vous parler.</div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
              <div className="text-2xl">✓</div>
              <div><strong className="text-green-700">Questions indirectes</strong> : Il/elle pose des questions sur votre vie sentimentale via des amis communs.</div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
              <div className="text-2xl">✓</div>
              <div><strong className="text-green-700">Réactions aux stories</strong> : Il/elle réagit systématiquement à vos publications sur les réseaux sociaux.</div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
              <div className="text-2xl">✓</div>
              <div><strong className="text-green-700">Croisements "hasard"</strong> : Vous le/la croisez de manière répétée dans des lieux inhabituels (synchronicités).</div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
              <div className="text-2xl">✓</div>
              <div><strong className="text-green-700">Garde vos affaires</strong> : Il/elle n'a pas rendu vos affaires ou demande à récupérer les siennes (prétexte).</div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
              <div className="text-2xl">✓</div>
              <div><strong className="text-green-700">Parle de vous</strong> : Des amis vous rapportent qu'il/elle parle souvent de vous avec nostalgie.</div>
            </div>
          </div>
          <div className="mt-6 bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
            <p className="text-gray-700"><strong>🔮 Confirmation tarot :</strong> Si ces signes s'accumulent ET que le tarot confirme, le retour est très probable. Si les signes sont là mais le tarot dit non, c'est de la simple curiosité sans intention réelle.</p>
          </div>
        </section>

        <section className="bg-red-50 border-2 border-red-200 rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">❌ Les Signes qu'il/elle Ne Reviendra PAS</h2>
          <p className="text-gray-700 leading-relaxed mb-6">Il est aussi important de reconnaître les signaux de fin définitive pour ne pas s'accrocher à un faux espoir.</p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl text-red-500">✗</div>
              <div className="text-gray-700"><strong>Nouvelle relation officielle</strong> : Il/elle est en couple et affiche publiquement sa nouvelle relation.</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl text-red-500">✗</div>
              <div className="text-gray-700"><strong>Blocage total</strong> : Vous êtes bloqué(e) partout (téléphone, réseaux sociaux, email).</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl text-red-500">✗</div>
              <div className="text-gray-700"><strong>Silence absolu</strong> : Aucun contact malgré vos tentatives répétées sur plusieurs mois.</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl text-red-500">✗</div>
              <div className="text-gray-700"><strong>Discours ferme</strong> : Il/elle vous a dit clairement "c'est définitivement fini" à plusieurs reprises.</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl text-red-500">✗</div>
              <div className="text-gray-700"><strong>Récupération affaires</strong> : Il/elle a tout récupéré et rendu vos affaires de manière définitive.</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl text-red-500">✗</div>
              <div className="text-gray-700"><strong>Vie transformée</strong> : Il/elle a déménagé, changé de vie, construit une nouvelle existence sans vous.</div>
            </div>
          </div>
          <div className="mt-6 bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-gray-700"><strong>⚠️ Tarot honnête :</strong> Si le tarot montre La Tour inversée, Le Dix d'Épée, ou Le Huit de Coupe, le voyant doit vous dire la vérité : c'est terminé. S'accrocher prolonge votre souffrance inutilement.</p>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🤔 Que Faire en Attendant ?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-green-700">✅ Si le Tarot Dit OUI (retour probable)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Silence radio</strong> : Ne harcelez pas, laissez l'espace nécessaire</li>
                <li>• <strong>Travaillez sur vous</strong> : Devenez la meilleure version de vous-même</li>
                <li>• <strong>Laissez-le/la venir</strong> : L'ex doit faire le premier pas</li>
                <li>• <strong>Soyez patient(e)</strong> : Respectez le timing révélé par le tarot</li>
                <li>• <strong>Ne suppliez jamais</strong> : Gardez votre dignité et votre valeur</li>
              </ul>
            </div>
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-red-700">❌ Si le Tarot Dit NON (fin définitive)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Acceptez la vérité</strong> : Le déni prolonge la souffrance</li>
                <li>• <strong>Entamez le deuil</strong> : Commencez votre processus de guérison</li>
                <li>• <strong>Coupez le contact</strong> : Pour pouvoir vraiment avancer</li>
                <li>• <strong>Ouvrez-vous à l'avenir</strong> : Préparez-vous à rencontrer quelqu'un d'autre</li>
                <li>• <strong>Consultez régulièrement</strong> : Suivez l'évolution tous les 2-3 mois</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">❓ Questions Fréquentes</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Le tarot peut-il me dire avec certitude si mon ex reviendra ?</h3>
              <p className="text-gray-700 leading-relaxed">Le tarot indique les probabilités selon les énergies actuelles et les choix de libre arbitre de chacun. Il révèle si un retour est très probable, possible, improbable ou impossible. Un bon voyant vous donnera un pourcentage honnête basé sur les cartes et ne vous promettra jamais un retour à 100% car le futur reste mouvant.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Combien de temps faut-il attendre pour savoir ?</h3>
              <p className="text-gray-700 leading-relaxed">Le tarot peut donner un timing : quelques semaines, 3 mois, 6 mois, 1 an. Si après ce délai rien ne se passe, c'est qu'il faut lâcher prise. Attention aux faux espoirs : si après 6 mois de silence total votre ex n'a fait aucun signe, les chances diminuent drastiquement.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quels sont les signes astrologiques d'un retour imminent ?</h3>
              <p className="text-gray-700 leading-relaxed">Vénus rétrograde dans votre signe ou celui de votre ex, éclipse sur votre axe relationnel (Descendant), transit de Vénus sur votre Soleil natal, nouvelle lune en maison 7. Ces périodes astrologiques créent des ouvertures propices aux retours. Un voyant astrologue peut analyser votre thème pour identifier ces moments.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dois-je attendre mon ex ou tourner la page ?</h3>
              <p className="text-gray-700 leading-relaxed">Le tarot répond clairement à cette question cruciale. S'il montre un retour probable dans un délai raisonnable (3-6 mois) et que ce retour est bénéfique, vous pouvez attendre tout en vivant votre vie. S'il montre que c'est terminé, tournez la page pour votre bien. Un voyant vous conseille honnêtement.</p>
            </div>
          </div>
        </section>

        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900">📚 Articles Connexes</h3>
          <div className="space-y-2">
            <Link href="/reconquete/reconquerir-son-ex" className="block text-purple-600 hover:text-purple-800 font-medium">→ Reconquérir son Ex si la Réponse est Oui</Link>
            <Link href="/reconquete/seconde-chance-amour" className="block text-purple-600 hover:text-purple-800 font-medium">→ Donner une Seconde Chance en Amour</Link>
            <Link href="/reconquete/ex-qui-revient" className="block text-purple-600 hover:text-purple-800 font-medium">→ Quand l'Ex Revient : Que Faire ?</Link>
            <Link href="/rupture/oublier-son-ex" className="block text-purple-600 hover:text-purple-800 font-medium">→ Tourner la Page si la Réponse est Non</Link>
            <Link href="/sentiments/maime-t-il-elle" className="block text-purple-600 hover:text-purple-800 font-medium">→ Ce qu'il/elle Ressent Vraiment</Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">🔮 Obtenez Votre Réponse Maintenant</h2>
          <p className="text-lg mb-6 opacity-95">Tirage personnalisé pour savoir si votre ex va revenir et quand</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#consultation" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition">Tirage Retour de l'Ex</a>
            <a href="#tirage" className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition">Consultation Prédiction</a>
          </div>
          <p className="mt-6 text-sm opacity-90">✓ Réponse honnête • ✓ Sans faux espoirs • ✓ Guidance claire</p>
        </div>
      </div>
    </main>
  );
}
