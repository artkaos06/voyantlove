import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';

export const metadata: Metadata = {
  title: 'M\'aime-t-il/elle Vraiment ? Tarot et Voyance des Sentiments',
  description: 'Découvrez ses vrais sentiments grâce au tarot et à la voyance. M\'aime-t-il/elle vraiment ? Pense-t-il/elle à moi ? Que ressent-il/elle ?',
  keywords: ['m\'aime-t-il', 'ses sentiments', 'vrais sentiments tarot', 'pense-t-il à moi', 'décrypter sentiments'],
  alternates: {
    canonical: 'https://voyantlove.fr/sentiments/maime-t-il-elle',
  },
};

export default function MAimeTilEllePage() {
  const articleSchema = getArticleSchema({
    title: 'M\'aime-t-il/elle Vraiment ? Tarot et Voyance des Sentiments',
    description: 'Découvrez ses vrais sentiments grâce au tarot et à la voyance. M\'aime-t-il/elle vraiment ? Pense-t-il/elle à moi ? Que ressent-il/elle ?',
    url: 'https://voyantlove.fr/sentiments/maime-t-il-elle',
    datePublished: '2026-01-10',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['m\'aime-t-il', 'ses sentiments', 'vrais sentiments tarot', 'pense-t-il à moi', 'décrypter sentiments'],
  });

  const faqSchema = getFAQSchema([
    {
      question: 'Comment la voyance peut-elle savoir ce que quelqu\'un ressent ?',
      answer: 'Un voyant utilise le tarot, la clairvoyance ou la lecture énergétique pour capter les émotions réelles. Le tarot reflète l\'inconscient et révèle ce que les mots et comportements masquent. La clairvoyance permet de ressentir directement l\'état émotionnel de la personne concernée.',
    },
    {
      question: 'Quelle est la différence entre amour et attachement ?',
      answer: 'L\'amour authentique veut le bonheur de l\'autre même sans réciprocité, respecte sa liberté, apporte joie et croissance. L\'attachement est possessif, crée de la souffrance, dépend de la présence de l\'autre. Le tarot distingue ces deux liens qui se ressemblent en surface mais sont fondamentalement différents.',
    },
    {
      question: 'Pourquoi quelqu\'un cache-t-il ses sentiments alors qu\'il m\'aime ?',
      answer: 'Peur de souffrir après blessure passée, peur d\'engagement, situation compliquée, blocage culturel ou familial, fierté. Le tarot révèle ces blocages invisibles et vous aide à comprendre si vous devez être patient(e), l\'aider à s\'ouvrir, ou accepter que malgré l\'amour la relation n\'avancera pas.',
    },
    {
      question: 'Pense-t-il/elle souvent à moi ?',
      answer: 'Le tarot répond à cette question en révélant la fréquence et la nature de ses pensées vous concernant. Le Cavalier de Coupe et La Lune indiquent qu\'il/elle pense souvent à vous. Le type de pensées (nostalgiques, désirantes, conflictuelles) est aussi révélé et vous guide sur ce que vous devez faire.',
    },
  ]);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Sentiments', url: 'https://voyantlove.fr/sentiments' },
    { name: 'M\'aime-t-il/elle', url: 'https://voyantlove.fr/sentiments/maime-t-il-elle' },
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
      <header className="bg-gradient-to-r from-red-500 via-pink-500 to-rose-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Retour</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">💖 M'aime-t-il/elle Vraiment ?</h1>
          <p className="text-xl opacity-95 mb-6">Décryptez ses vrais sentiments grâce au tarot et à la voyance</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#consultation" className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">Décryptage des Sentiments</a>
            <a href="#signes" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition">Voir les Signes d'Amour</a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">⭐</div><div className="text-2xl font-bold text-red-600">4.8/5</div><div className="text-sm text-gray-600">287 avis</div></div>
          <div><div className="text-3xl mb-1">💝</div><div className="text-2xl font-bold text-red-600">89%</div><div className="text-sm text-gray-600">Clarté obtenue</div></div>
          <div><div className="text-3xl mb-1">🎯</div><div className="text-2xl font-bold text-red-600">91%</div><div className="text-sm text-gray-600">Précision</div></div>
          <div><div className="text-3xl mb-1">🔒</div><div className="text-2xl font-bold text-red-600">100%</div><div className="text-sm text-gray-600">Confidentiel</div></div>
        </div>

        <EEATSignal colorScheme="rose" method="Tarot des sentiments et clairvoyance" />

        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-red-500">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-4">
              La question "<strong>m'aime-t-il/elle vraiment</strong>" révèle votre <strong>doute amoureux</strong> légitime. Le <strong>tarot</strong> et la <strong>clairvoyance</strong> peuvent percer le voile des apparences pour révéler les <strong>vrais sentiments</strong> de l'autre personne. Un <strong>voyant</strong> capte les émotions réelles au-delà des mots et comportements parfois contradictoires.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Le <strong>tirage des sentiments</strong> explore plusieurs niveaux : l'attraction physique, l'attachement émotionnel, l'amour profond, et l'engagement futur. Il révèle aussi les peurs et blocages qui empêchent l'autre d'exprimer ses sentiments ouvertement. Parfois, la personne vous aime mais ne peut ou ne veut pas s'engager pour des raisons complexes que le tarot éclaire. Pour en savoir plus sur les <Link href="/sentiments" className="text-red-600 hover:text-red-800 underline font-medium">sentiments amoureux</Link>, découvrez toutes nos guidances spécialisées.
            </p>
            <p className="text-lg leading-relaxed">
              La différence cruciale entre <strong>amour véritable</strong> et simple attachement, entre passion et amitié, entre amour et habitude - le tarot fait cette distinction précise. Un voyant honnête vous dira si cette personne vous aime authentiquement ou si vous vous accrochez à une illusion.
            </p>
          </div>
        </article>

        <VoyantQuickCTA topic="sentiments" source="maime-t-il-elle-early" />

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">💖 Les Signes d'Amour Véritable selon le Tarot</h2>
          <p className="text-gray-700 leading-relaxed mb-6">Le tarot utilise des cartes spécifiques pour révéler la nature authentique des sentiments.</p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-green-700">✅ Cartes d'Amour Authentique</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>L'Amoureux</strong> : Amour vrai et choix conscient</li>
                <li><strong>Deux de Coupe</strong> : Réciprocité et harmonie</li>
                <li><strong>Dix de Coupe</strong> : Bonheur partagé durable</li>
                <li><strong>Le Soleil</strong> : Joie pure d'être ensemble</li>
                <li><strong>As de Coupe</strong> : Nouveau départ amoureux sincère</li>
              </ul>
            </div>
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-red-700">❌ Cartes d'Attachement Problématique</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Le Diable</strong> : Attachement toxique, dépendance</li>
                <li><strong>Cinq de Coupe</strong> : Regrets, insatisfaction</li>
                <li><strong>Huit d'Épée</strong> : Sentiment d'être piégé(e)</li>
                <li><strong>Cavalier de Coupe inversé</strong> : Sentiments superficiels</li>
                <li><strong>Sept d'Épée</strong> : Mensonges, tromperie</li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <p className="text-gray-700"><strong>💡 Interprétation :</strong> Si les cartes positives dominent le tirage, oui il/elle vous aime. Si les cartes négatives prédominent, c'est de l'attachement toxique ou de la manipulation, pas de l'amour.</p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-8 mb-8 border-2 border-rose-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🧠 Différence entre Amour et Attachement</h2>
          <p className="text-gray-700 leading-relaxed mb-6">Le tarot révèle la vraie nature du lien - c'est crucial pour votre bonheur.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="font-bold text-lg mb-3 text-green-700">💚 Amour Véritable</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Vous veut du bien même sans réciprocité</li>
                <li>✓ Respecte votre liberté et autonomie</li>
                <li>✓ Vous valorise et encourage votre épanouissement</li>
                <li>✓ Apporte joie, paix et croissance personnelle</li>
                <li>✓ Accepte vos défauts avec bienveillance</li>
                <li>✓ Communication saine et honnête</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="font-bold text-lg mb-3 text-red-700">💔 Attachement Toxique</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✗ Possessif et jaloux de manière excessive</li>
                <li>✗ Dépendant émotionnellement de vous</li>
                <li>✗ Crée de la souffrance et de l'anxiété</li>
                <li>✗ Contrôle vos actions et fréquentations</li>
                <li>✗ Vous dévalorise ou critique constamment</li>
                <li>✗ Communication manipulatrice ou passive-agressive</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-white p-6 rounded-lg">
            <p className="text-gray-700"><strong>🔮 Le tarot ne ment pas :</strong> Même si vous aimez cette personne, si le tarot montre un attachement toxique plutôt qu'un amour sain, le voyant doit vous prévenir pour votre protection.</p>
          </div>
        </section>

        <VoyantRecommendations topic="sentiments" limit={3} showOnlineFirst={true} source="maime-t-il-elle-mid" />

        <section id="signes" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🎭 Pourquoi il/elle Cache ses Sentiments</h2>
          <p className="text-gray-700 leading-relaxed mb-6">Le tarot révèle les blocages invisibles qui empêchent l'expression des sentiments.</p>
          <div className="space-y-4">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
              <h3 className="font-bold mb-2 text-purple-700">😨 Peur de Souffrir</h3>
              <p className="text-gray-700 text-sm">Blessure passée non guérie. Il/elle a peur de s'ouvrir à nouveau et de revivre la douleur d'une rupture ou trahison antérieure.</p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <h3 className="font-bold mb-2 text-blue-700">🦅 Peur de Perdre sa Liberté</h3>
              <p className="text-gray-700 text-sm">L'engagement fait peur. Il/elle vous aime mais n'est pas prêt(e) à renoncer à son indépendance ou son célibat confortable.</p>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
              <h3 className="font-bold mb-2 text-orange-700">👨‍👩‍👧 Blocage Familial ou Culturel</h3>
              <p className="text-gray-700 text-sm">Pression familiale, différence de religion/culture, ou désapprobation de l'entourage qui empêche l'expression libre des sentiments.</p>
            </div>
            <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded">
              <h3 className="font-bold mb-2 text-pink-700">💔 Situation Compliquée</h3>
              <p className="text-gray-700 text-sm">Déjà en couple, distance géographique, différence d'âge importante, ou contexte professionnel qui complique l'expression des sentiments.</p>
            </div>
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded">
              <h3 className="font-bold mb-2 text-indigo-700">🎭 Fierté ou Ego</h3>
              <p className="text-gray-700 text-sm">Orgueil qui empêche d'avouer ses sentiments, peur du rejet ou de paraître vulnérable, besoin de garder le contrôle de la situation.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">💭 Pense-t-il/elle à Vous ?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">Le tarot répond aussi à cette question intimement liée aux sentiments.</p>
          <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-lg mb-3 text-green-700">✅ Signes qu'il/elle Pense à Vous</h3>
            <p className="text-gray-700 mb-4">Les cartes <strong>Cavalier de Coupe</strong>, <strong>La Lune</strong>, et <strong>Le Hermite</strong> indiquent une présence mentale forte. Voici comment cela se manifeste :</p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Fréquence</strong> : Il/elle pense à vous plusieurs fois par jour</li>
              <li>• <strong>Nature</strong> : Pensées positives, nostalgiques, désirantes</li>
              <li>• <strong>Manifestation</strong> : Rêves vous mettant en scène, synchronicités</li>
              <li>• <strong>Actions</strong> : Consulte vos réseaux sociaux régulièrement</li>
            </ul>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <p className="text-gray-700"><strong>⚠️ Important :</strong> Penser à vous ne signifie pas forcément qu'il/elle agira ou s'engagera. Le tarot distingue entre pensées passives et intentions d'action concrète.</p>
          </div>
        </section>

        <section className="bg-gradient-to-r from-rose-50 to-purple-50 rounded-xl p-8 mb-8 border-2 border-rose-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🚦 Que Faire selon la Réponse ?</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="font-bold text-lg mb-3 text-green-700">💚 S'il/elle vous AIME vraiment</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ <strong>Communiquez</strong> vos sentiments ouvertement et honnêtement</li>
                <li>✓ <strong>Créez des opportunités</strong> de rapprochement et d'intimité</li>
                <li>✓ <strong>Soyez patient(e)</strong> si des blocages l'empêchent de s'exprimer</li>
                <li>✓ <strong>Montrez vos intentions</strong> clairement sans jouer à des jeux</li>
                <li>✓ <strong>Construisez la confiance</strong> progressivement</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500">
              <h3 className="font-bold text-lg mb-3 text-orange-700">🟧 S'il/elle est ATTACHÉ sans amour</h3>
              <ul className="space-y-2 text-gray-700">
                <li>⚠️ <strong>Protégez-vous</strong> émotionnellement de la manipulation</li>
                <li>⚠️ <strong>Ne confondez pas</strong> attachement toxique et amour véritable</li>
                <li>⚠️ <strong>Établissez des limites</strong> claires et fermes</li>
                <li>⚠️ <strong>Questionnez</strong> si cette relation vous apporte du bonheur</li>
                <li>⚠️ <strong>Envisagez</strong> de vous éloigner pour votre bien-être</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="font-bold text-lg mb-3 text-red-700">❌ S'il/elle ne vous AIME PAS</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✗ <strong>Acceptez cette vérité</strong> difficile mais libératrice</li>
                <li>✗ <strong>Ne perdez pas votre temps</strong> à attendre un amour qui n'existe pas</li>
                <li>✗ <strong>Ouvrez-vous</strong> à quelqu'un qui vous aimera vraiment</li>
                <li>✗ <strong>Travaillez sur vous</strong> pour comprendre pourquoi vous vous êtes accroché(e)</li>
                <li>✗ <strong>Libérez-vous</strong> de cette illusion pour avancer</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">❓ Questions Fréquentes</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment la voyance peut-elle savoir ce que quelqu'un ressent ?</h3>
              <p className="text-gray-700 leading-relaxed">Un voyant utilise le tarot, la clairvoyance ou la lecture énergétique pour capter les émotions réelles. Le tarot reflète l'inconscient et révèle ce que les mots et comportements masquent. La clairvoyance permet de ressentir directement l'état émotionnel de la personne concernée.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quelle est la différence entre amour et attachement ?</h3>
              <p className="text-gray-700 leading-relaxed">L'amour authentique veut le bonheur de l'autre même sans réciprocité, respecte sa liberté, apporte joie et croissance. L'attachement est possessif, crée de la souffrance, dépend de la présence de l'autre. Le tarot distingue ces deux liens qui se ressemblent en surface mais sont fondamentalement différents.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pourquoi quelqu'un cache-t-il ses sentiments alors qu'il m'aime ?</h3>
              <p className="text-gray-700 leading-relaxed">Peur de souffrir après blessure passée, peur d'engagement, situation compliquée, blocage culturel ou familial, fierté. Le tarot révèle ces blocages invisibles et vous aide à comprendre si vous devez être patient(e), l'aider à s'ouvrir, ou accepter que malgré l'amour la relation n'avancera pas.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pense-t-il/elle souvent à moi ?</h3>
              <p className="text-gray-700 leading-relaxed">Le tarot répond à cette question en révélant la fréquence et la nature de ses pensées vous concernant. Le Cavalier de Coupe et La Lune indiquent qu'il/elle pense souvent à vous. Le type de pensées (nostalgiques, désirantes, conflictuelles) est aussi révélé et vous guide sur ce que vous devez faire.</p>
            </div>
          </div>
        </section>

        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900">📚 Articles Connexes</h3>
          <div className="space-y-2">
            <Link href="/sentiments" className="block text-red-600 hover:text-red-800 font-medium">→ Sentiments Amoureux : Toutes nos Guidances</Link>
            <Link href="/sentiments/signes-il-elle-maime" className="block text-red-600 hover:text-red-800 font-medium">→ Les Signes qu'il/elle M'aime</Link>
            <Link href="/nouvelle-rencontre/signes-ame-soeur" className="block text-red-600 hover:text-red-800 font-medium">→ Notre Compatibilité Amoureuse</Link>
            <Link href="/sentiments/avenir-amoureux" className="block text-red-600 hover:text-red-800 font-medium">→ Mon Avenir avec lui/elle</Link>
            <Link href="/reconquete/va-t-il-elle-revenir" className="block text-red-600 hover:text-red-800 font-medium">→ S'il s'agit d'un Ex</Link>
          </div>
        </div>

        <VoyantFinalCTA topic="sentiments" source="maime-t-il-elle-final" />
      </div>
    </main>
  );
}
