import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema, getAuthorSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';

export const metadata: Metadata = {
  title: 'Numérologie Amoureuse : Compatibilité par Date de Naissance | VoyantLove',
  description: 'Découvrez la numérologie amoureuse : calculez votre chemin de vie, votre compatibilité numérique et ce que vos chiffres révèlent sur votre vie sentimentale.',
  keywords: ['numérologie amoureuse', 'numérologie couple', 'chemin de vie amour', 'compatibilité numérologie', 'calcul date de naissance amour'],
  alternates: { canonical: 'https://www.voyantlove.fr/methodes-voyance/numerologie-amoureuse/' },
};

export default function NumerologieAmourPage() {
  const articleSchema = getArticleSchema({
    title: 'Numérologie Amoureuse : Compatibilité par Date de Naissance | VoyantLove',
    description: 'Découvrez la numérologie amoureuse : calculez votre chemin de vie, votre compatibilité numérique et ce que vos chiffres révèlent sur votre vie sentimentale.',
    url: 'https://www.voyantlove.fr/methodes-voyance/numerologie-amoureuse/',
    datePublished: '2026-03-27',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['numérologie amoureuse', 'numérologie couple', 'chemin de vie amour', 'compatibilité numérologie', 'calcul date de naissance amour'],
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Méthodes de Voyance', url: 'https://www.voyantlove.fr/methodes-voyance/' },
    { name: 'Numérologie Amoureuse', url: 'https://www.voyantlove.fr/methodes-voyance/numerologie-amoureuse/' },
  ]);

  const authorSchema = getAuthorSchema();

  const faqSchema = getFAQSchema([
    {
      question: 'Comment calculer son chemin de vie en numérologie ?',
      answer: 'Le chemin de vie se calcule en additionnant tous les chiffres de votre date de naissance jusqu\'à obtenir un chiffre unique (sauf 11, 22 et 33, les nombres maîtres). Exemple : pour le 15/07/1988, additionnez 1+5+0+7+1+9+8+8 = 39, puis 3+9 = 12, puis 1+2 = 3. Votre chemin de vie est donc le 3. Ce chiffre révèle votre mission de vie, vos forces naturelles et vos défis karmiques en amour comme dans tous les domaines. Il est le fondement de toute analyse numérologique personnalisée.',
    },
    {
      question: 'Quels chemins de vie sont les plus compatibles en amour ?',
      answer: 'Les associations les plus harmonieuses en numérologie amoureuse sont : les chemins 2 et 6 (tous deux orientés vers l\'amour et la famille), les chemins 1 et 5 (dynamisme et liberté partagés), les chemins 3 et 9 (créativité et idéalisme), et les chemins 4 et 8 (construction matérielle commune). Les chemins maîtres 11 et 22 sont compatibles entre eux mais demandent une grande maturité émotionnelle. La compatibilité numérique est un indicateur précieux, mais l\'analyse complète intègre aussi le prénom et la date de naissance du partenaire.',
    },
    {
      question: 'La numérologie peut-elle prédire une rencontre amoureuse ?',
      answer: 'Oui, via le calcul des années personnelles. Une année personnelle 2 (cycle d\'amour et de partenariat) ou 6 (cycle des engagements et de la famille) sont les plus favorables aux rencontres amoureuses significatives. L\'année personnelle se calcule en additionnant votre jour et mois de naissance à l\'année civile en cours. Par exemple, pour une personne née le 15 juillet : 1+5+0+7+2+0+2+6 = 23, puis 2+3 = 5. Cette personne est en année personnelle 5 en 2026, favorable aux changements et nouvelles aventures.',
    },
    {
      question: 'Que signifie le nombre 11 en amour selon la numérologie ?',
      answer: 'Le nombre 11, premier des nombres maîtres, est le chiffre de l\'intuition supérieure et de la connexion spirituelle en amour. Les personnes avec un chemin de vie 11 vivent l\'amour avec une intensité et une sensibilité hors du commun. Elles cherchent une union qui transcende le matériel pour toucher l\'âme. Leur plus grand défi est de ne pas idéaliser leur partenaire au point d\'en être déçu. En amour, le 11 attire des âmes évoluées et des connexions profondes, parfois des flammes jumelles ou des liens karmiques forts qui transforment profondément les deux partenaires.',
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

      {/* Header */}
      <header className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/methodes-voyance" className="text-white/80 hover:text-white mb-4 inline-block">&larr; Retour aux Méthodes de Voyance</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">&#x1F522; Numérologie Amoureuse</h1>
          <p className="text-xl opacity-95 mb-6">Compatibilité et Destin par les Chiffres</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#calcul" className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">Calculer mon Chemin de Vie</a>
            <a href="#compatibilite" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition">Compatibilité Numérique</a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Stats Bar */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">&#x1F522;</div><div className="text-2xl font-bold text-orange-600">15 ans</div><div className="text-sm text-gray-600">Expertise numérologie</div></div>
          <div><div className="text-3xl mb-1">&#x1F49B;</div><div className="text-2xl font-bold text-orange-600">2&nbsp;800+</div><div className="text-sm text-gray-600">Consultations réalisées</div></div>
          <div><div className="text-3xl mb-1">&#x2728;</div><div className="text-2xl font-bold text-orange-600">9 Chemins</div><div className="text-sm text-gray-600">Profils amoureux</div></div>
          <div><div className="text-3xl mb-1">&#x2B50;</div><div className="text-2xl font-bold text-orange-600">4.8/5</div><div className="text-sm text-gray-600">Satisfaction clients</div></div>
        </div>

        {/* E-E-A-T Signal */}
        <EEATSignal
          colorScheme="orange"
          method="Numérologie &amp; Amour — Chemin de vie, compatibilité et timing par les chiffres"
        />

        {/* Answer Capsule */}
        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-orange-500">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ce que la numérologie révèle sur votre vie amoureuse</h2>
          <p className="text-lg leading-relaxed mb-4">
            La numérologie amoureuse est l&rsquo;art de décoder les messages cachés dans votre <strong>chemin de vie</strong> et votre <strong>nombre personnel</strong> pour révéler votre destin sentimental. Fondée sur les travaux du philosophe grec <strong>Pythagore</strong>, cette discipline millénaire postule que chaque <strong>date de naissance</strong> encode une <strong>vibration</strong> unique qui influence profondément les types de relations que vous attirez, les défis amoureux que vous rencontrez, et le timing de vos grandes rencontres.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            La <strong>compatibilité numérique</strong> entre deux partenaires va bien au-delà d&rsquo;un simple horoscope : elle analyse la résonance vibratoire entre deux chemins de vie, révèle les zones d&rsquo;harmonie naturelle et les points de friction potentiels, et identifie le <strong>karma amoureux</strong> que le couple est destiné à traverser ensemble. Cette analyse offre une feuille de route précieuse pour naviguer la relation avec conscience et profondeur.
          </p>
          <p className="text-lg leading-relaxed">
            Que vous soyez célibataire cherchant à comprendre votre destin amoureux, ou en couple désirant approfondir votre lien, ce guide complet vous livre les clés de la numérologie amoureuse. Complétez cette exploration avec notre guide sur <Link href="/methodes-voyance/astrologie-amoureuse" className="text-orange-600 hover:text-orange-800 underline font-medium">l&rsquo;astrologie amoureuse</Link> pour une vision encore plus complète de votre destinée sentimentale.
          </p>
        </article>

        <VoyantQuickCTA topic="methodes-voyance" source="numerologie-amoureuse-early" />

        {/* Section 1: Qu'est-ce que la numérologie amoureuse */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 mb-8 border-2 border-amber-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">&#x1F4D6; Qu&rsquo;est-ce que la Numérologie Amoureuse ?</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">La numérologie amoureuse est une science symbolique fondée par Pythagore qui utilise les vibrations numériques de votre date de naissance pour révéler votre profil sentimental et vos affinités naturelles.</p>
          <p className="text-gray-700 mb-6">
            La numérologie est l&rsquo;une des plus anciennes sciences divinatoires de l&rsquo;humanité. Ses origines remontent à l&rsquo;Antiquité, avec des traces en Égypte, en Chine et en Inde, mais c&rsquo;est <strong>Pythagore</strong> au VI&egrave; siècle avant J.-C. qui en a formalisé les principes en Occident. Selon sa vision du monde, les nombres ne sont pas de simples outils mathématiques : ils sont les briques fondamentales de la réalité, chacun portant une <strong>vibration</strong> spécifique qui influence tous les aspects de l&rsquo;existence humaine.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-5">
              <h3 className="font-bold text-amber-700 text-lg mb-3">&#x1F9EE; Le Principe des Vibrations</h3>
              <p className="text-gray-700">
                Selon la numérologie, chaque nombre vibre à une fréquence particulière. Le 1 vibre à la fréquence de l&rsquo;indépendance et du leadership, le 2 à celle de l&rsquo;amour et du partenariat, le 6 à celle de la famille et du foyer. En amour, ces vibrations déterminent non seulement le type de partenaire que vous attirez naturellement, mais aussi les qualités que vous cherchez inconsciemment dans une relation. La numérologie rend ces dynamiques visibles et conscientes.
              </p>
            </div>
            <div className="bg-white rounded-lg p-5">
              <h3 className="font-bold text-orange-700 text-lg mb-3">&#x1F4C5; Pourquoi la Date de Naissance ?</h3>
              <p className="text-gray-700">
                Votre <strong>date de naissance</strong> est l&rsquo;empreinte numérique de votre âme : elle encode le chemin que vous avez choisi de parcourir avant de vous incarner. Ce n&rsquo;est pas un hasard si vous êtes né(e) ce jour précis. La numérologie décode cette empreinte pour révéler votre mission de vie, vos forces, vos faiblesses, et — en amour — le type de relation qui vous permettra de vous épanouir pleinement et d&rsquo;accomplir votre destinée.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Calculer son chemin de vie */}
        <section id="calcul" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-orange-600">&#x1F9EE; Calculez Votre Chemin de Vie</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Le chemin de vie se calcule en réduisant votre date de naissance complète à un seul chiffre directeur, sauf pour les nombres maîtres 11, 22 et 33 qui ne sont pas réduits.</p>

          <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-amber-800 text-lg mb-4">&#x1F4CA; Formule de Calcul</h3>
            <p className="text-gray-700 mb-3">Additionnez tous les chiffres de votre date de naissance (jour + mois + année) et réduisez jusqu&rsquo;à un seul chiffre.</p>
            <div className="bg-white rounded p-4 font-mono text-sm">
              <p><strong>Exemple :</strong> né(e) le 23/04/1991</p>
              <p>2+3+0+4+1+9+9+1 = <strong>29</strong></p>
              <p>2+9 = <strong>11</strong> (nombre maître, ne pas réduire)</p>
              <p>Chemin de vie : <strong>11</strong></p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-xl">Signification des Chemins de Vie en Amour</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { num: '1', title: 'Le Pionnier', desc: 'Cherche un partenaire admiratif de son leadership. En amour, peut manquer de compromis. Compatible avec 3, 5, 6.' },
                { num: '2', title: 'Le Diplomate', desc: 'Né pour le partenariat, ressent profondément les émotions. Cherche l\'harmonie absolue. Compatible avec 2, 6, 8.' },
                { num: '3', title: 'L\'Artiste', desc: 'Amoureux joyeux et expressif, craint l\'ennui. Cherche la créativité partagée. Compatible avec 1, 5, 9.' },
                { num: '4', title: 'Le Bâtisseur', desc: 'Amour stable, fidèle et durable. Cherche la sécurité avant tout. Compatible avec 2, 4, 8.' },
                { num: '5', title: 'L\'Aventurier', desc: 'Passionné mais craint l\'enfermement. Cherche la liberté dans la relation. Compatible avec 1, 3, 7.' },
                { num: '6', title: 'Le Nourricier', desc: 'Le plus orienté vers la famille et l\'amour. Cherche engagement et foyer. Compatible avec 2, 4, 9.' },
                { num: '7', title: 'Le Mystique', desc: 'Cherche une connexion intellectuelle et spirituelle. Peut sembler distant. Compatible avec 5, 7.' },
                { num: '8', title: 'Le Bâtisseur d\'Empire', desc: 'Amour lié au partage de réussite et d\'ambition. Compatible avec 2, 4, 6.' },
                { num: '9', title: 'Le Sage', desc: 'Amour universel et idéaliste. Cherche une mission commune. Compatible avec 3, 6, 9.' },
              ].map(({ num, title, desc }) => (
                <div key={num} className="bg-orange-50 rounded-lg p-4 border border-orange-100">
                  <div className="text-2xl font-bold text-orange-600 mb-1">Chemin {num}</div>
                  <div className="font-bold text-gray-800 mb-1">{title}</div>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Compatibilité */}
        <section id="compatibilite" className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 mb-8 border-2 border-red-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">&#x2764;&#xFE0F; Compatibilité Numérologique entre Partenaires</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">La compatibilité numérique analyse la résonance entre deux chemins de vie pour identifier les affinités naturelles et les zones de friction potentielles dans la relation amoureuse.</p>
          <p className="text-gray-700 mb-6">
            La <strong>compatibilité numérique</strong> ne prédit pas le succès ou l&rsquo;échec d&rsquo;une relation — elle révèle les dynamiques naturelles qui s&rsquo;installeront entre deux personnes. Certains couples numériquement &ldquo;difficiles&rdquo; bâtissent des relations extraordinaires grâce à la conscience de leurs différences. Pour approfondir votre analyse, consultez notre guide sur la <Link href="/sentiments/compatibilite-amoureuse" className="text-orange-600 hover:text-orange-800 underline font-medium">compatibilité amoureuse</Link>.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-green-700 text-lg mb-4">&#x2705; Chemins Naturellement Complémentaires</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <span className="text-green-500 font-bold text-xl">2+6</span>
                  <p><strong>Alliance parfaite :</strong> le 2 apporte l&rsquo;empathie émotionnelle, le 6 la stabilité du foyer. Union idéale pour fonder une famille.</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <span className="text-green-500 font-bold text-xl">1+5</span>
                  <p><strong>Feu et liberté :</strong> deux indépendants qui se stimulent mutuellement sans s&rsquo;étouffer. Passion durable si chacun respecte l&rsquo;espace de l&rsquo;autre.</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <span className="text-green-500 font-bold text-xl">3+9</span>
                  <p><strong>Créativité et idéalisme :</strong> le 3 apporte la joie, le 9 la profondeur. Couple épanoui dans un projet créatif ou humaniste commun.</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <span className="text-green-500 font-bold text-xl">4+8</span>
                  <p><strong>Construction commune :</strong> les deux bâtisseurs par excellence. Union solide, orientée vers les objectifs matériels et la sécurité durable.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-red-700 text-lg mb-4">&#x26A0;&#xFE0F; Associations Nécessitant de la Conscience</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                  <span className="text-red-500 font-bold text-xl">1+1</span>
                  <p><strong>Guerre des égos :</strong> deux leaders qui peinent à céder le contrôle. Peut fonctionner si chacun a son domaine d&rsquo;excellence clairement défini.</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                  <span className="text-red-500 font-bold text-xl">5+4</span>
                  <p><strong>Liberté vs sécurité :</strong> le 5 veut s&rsquo;envoler, le 4 veut s&rsquo;enraciner. Tension chronique mais complémentarité possible avec maturité.</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                  <span className="text-red-500 font-bold text-xl">7+2</span>
                  <p><strong>Distance vs fusion :</strong> le 7 a besoin de solitude, le 2 de communion. Le 2 peut vivre le retrait du 7 comme un rejet douloureux.</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                  <span className="text-red-500 font-bold text-xl">8+6</span>
                  <p><strong>Ambition vs foyer :</strong> le 8 priorise la carrière, le 6 la famille. Risque d&rsquo;incompréhension si les priorités ne sont pas alignées dès le départ.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Nombres maîtres */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-orange-600">&#x1F4AB; Les Nombres Maîtres en Amour</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Les nombres maîtres 11, 22 et 33 portent une intensité vibratoire extraordinaire qui se traduit en amour par des connexions profondes, des défis spirituels et une quête d&rsquo;union transcendante.</p>
          <p className="text-gray-700 mb-6">
            Les nombres maîtres sont les plus élevés de la numérologie : ils ne sont pas réduits car leur double vibration démultiplie leur puissance. En amour, ils indiquent des âmes évoluées qui ne peuvent se contenter d&rsquo;une relation ordinaire.
          </p>

          <div className="space-y-5">
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-lg">
              <h3 className="font-bold text-xl text-indigo-700 mb-3">&#x1F52E; Le 11 — L&rsquo;Amour Intuitif et Spirituel</h3>
              <p className="text-gray-700 mb-2">
                Le <strong>chemin de vie 11</strong> est celui de l&rsquo;intuition supérieure et de la sensibilité extrême. En amour, ces natifs ressentent les émotions à une profondeur que la plupart des gens n&rsquo;imaginent pas. Ils cherchent une âme complémentaire capables de les comprendre sans mots, une connexion qui touche l&rsquo;âme et pas seulement le corps. Leur plus grand défi : la tendance à idéaliser le partenaire au point d&rsquo;en être cruellement déçu quand la réalité reprend ses droits.
              </p>
              <p className="text-gray-700">
                <strong>Don en amour :</strong> capacité à créer une intimité émotionnelle et spirituelle d&rsquo;une rare profondeur, souvent des connexions de type âme sœur ou flamme jumelle. <strong>Défi :</strong> ancrer l&rsquo;amour dans le quotidien sans perdre la magie.
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
              <h3 className="font-bold text-xl text-amber-700 mb-3">&#x1F3D7;&#xFE0F; Le 22 — L&rsquo;Amour Bâtisseur</h3>
              <p className="text-gray-700 mb-2">
                Le <strong>chemin de vie 22</strong> est celui du maître bâtisseur. En amour, ces personnes veulent construire quelque chose de grand et durable avec leur partenaire : une famille, une entreprise, une mission commune. Ils cherchent un complice de vie autant qu&rsquo;un amoureux. Leur relation doit avoir un sens qui dépasse leur couple pour toucher le collectif ou laisser une trace dans le monde.
              </p>
              <p className="text-gray-700">
                <strong>Don en amour :</strong> capacité à créer une union solide, protectrice et structurante. <strong>Défi :</strong> ne pas sacrifier l&rsquo;intimité émotionnelle sur l&rsquo;autel de la grande mission.
              </p>
            </div>

            <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-lg">
              <h3 className="font-bold text-xl text-rose-700 mb-3">&#x1F496; Le 33 — L&rsquo;Amour Universel</h3>
              <p className="text-gray-700 mb-2">
                Le <strong>chemin de vie 33</strong>, le plus rare, est celui du maître enseignant et de l&rsquo;amour universel. Ces personnes aiment avec une générosité et une compassion qui dépassent souvent le cadre du couple pour embrasser tous les êtres. Leur défi en amour est d&rsquo;apprendre à recevoir autant qu&rsquo;ils donnent, et à établir des limites saines sans perdre leur générosité naturelle.
              </p>
              <p className="text-gray-700">
                <strong>Don en amour :</strong> amour inconditionnel, guérison par la présence, relation transformatrice. <strong>Défi :</strong> ne pas se sacrifier totalement pour l&rsquo;autre au détriment de ses propres besoins.
              </p>
            </div>
          </div>
        </section>

        <VoyantRecommendations topic="methodes-voyance" limit={3} showOnlineFirst={true} source="numerologie-amoureuse-mid" />

        {/* Section 5: Timing numérologique */}
        <section className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-8 mb-8 border-2 border-orange-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">&#x23F3; Numérologie et Timing Amoureux</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">Les années personnelles 2, 6 et 9 sont les plus favorables aux rencontres et aux engagements amoureux, tandis que les années 1 et 5 favorisent les nouvelles aventures et les changements de situation sentimentale.</p>
          <p className="text-gray-700 mb-6">
            La numérologie ne se contente pas d&rsquo;analyser votre profil : elle prédit aussi les <strong>cycles temporels</strong> favorables à l&rsquo;amour. Chaque personne traverse des années personnelles de 1 à 9 qui cyclent indéfiniment, chacune avec son énergie particulière en amour.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-pink-100 border-2 border-pink-400 rounded-lg p-5 text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">Année 2</div>
              <div className="font-bold text-pink-700 mb-2">L&rsquo;Amour</div>
              <p className="text-gray-700 text-sm">La meilleure année pour rencontrer son partenaire de vie ou approfondir une relation existante. Sensibilité et réceptivité maximales.</p>
            </div>
            <div className="bg-red-100 border-2 border-red-400 rounded-lg p-5 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">Année 6</div>
              <div className="font-bold text-red-700 mb-2">L&rsquo;Engagement</div>
              <p className="text-gray-700 text-sm">L&rsquo;année idéale pour officialiser une relation, se fiancer, se marier ou agrandir la famille. Énergie de responsabilité amoureuse.</p>
            </div>
            <div className="bg-orange-100 border-2 border-orange-400 rounded-lg p-5 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">Année 9</div>
              <div className="font-bold text-orange-700 mb-2">La Clôture</div>
              <p className="text-gray-700 text-sm">Fin de cycle amoureux, lâcher-prise, guérison et préparation à une nouvelle ère sentimentale. Bilan et transformation nécessaires.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h3 className="font-bold text-orange-700 text-lg mb-4">&#x1F4CB; Comment Calculer Votre Année Personnelle</h3>
            <p className="text-gray-700 mb-3">Additionnez votre jour de naissance, votre mois de naissance et l&rsquo;année civile en cours, puis réduisez au chiffre unique.</p>
            <div className="bg-orange-50 rounded-lg p-4 font-mono text-sm mb-4">
              <p><strong>Exemple :</strong> né(e) le 08 octobre</p>
              <p>0+8+1+0+2+0+2+6 = <strong>19</strong></p>
              <p>1+9 = <strong>10</strong></p>
              <p>1+0 = <strong>1</strong></p>
              <p>Vous êtes en <strong>Année Personnelle 1</strong> en 2026 : nouveau départ, initiative amoureuse.</p>
            </div>
            <p className="text-gray-700">
              Pour compléter cette analyse avec d&rsquo;autres outils divinatoires, découvrez notre guide sur le <Link href="/methodes-voyance/tirage-tarot-amour" className="text-orange-600 hover:text-orange-800 underline font-medium">tirage tarot amour</Link> qui confirme et enrichit les révélations numériques.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">&#x2753; Questions Fréquentes sur la Numérologie Amoureuse</h2>
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="font-bold text-lg text-orange-700 mb-3">Comment calculer son chemin de vie en numérologie ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Le <strong>chemin de vie</strong> se calcule en additionnant tous les chiffres de votre date de naissance jusqu&rsquo;à obtenir un chiffre unique (sauf 11, 22 et 33, les nombres maîtres). Exemple : pour le 15/07/1988, additionnez 1+5+0+7+1+9+8+8 = 39, puis 3+9 = 12, puis 1+2 = 3. Votre chemin de vie est donc le 3. Ce chiffre révèle votre mission de vie, vos forces naturelles et vos défis karmiques en amour comme dans tous les domaines. Il est le fondement de toute analyse numérologique personnalisée.
              </p>
            </div>
            <div className="border-b pb-6">
              <h3 className="font-bold text-lg text-orange-700 mb-3">Quels chemins de vie sont les plus compatibles en amour ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Les associations les plus harmonieuses sont : les chemins <strong>2 et 6</strong> (tous deux orientés vers l&rsquo;amour et la famille), les chemins <strong>1 et 5</strong> (dynamisme et liberté partagés), les chemins <strong>3 et 9</strong> (créativité et idéalisme), et les chemins <strong>4 et 8</strong> (construction matérielle commune). Les chemins maîtres 11 et 22 sont compatibles entre eux mais demandent une grande maturité émotionnelle. La <strong>compatibilité numérique</strong> est un indicateur précieux, mais l&rsquo;analyse complète intègre aussi le prénom et la date de naissance complète du partenaire.
              </p>
            </div>
            <div className="border-b pb-6">
              <h3 className="font-bold text-lg text-orange-700 mb-3">La numérologie peut-elle prédire une rencontre amoureuse ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Oui, via le calcul des <strong>années personnelles</strong>. Une année personnelle 2 (cycle d&rsquo;amour et de partenariat) ou 6 (cycle des engagements et de la famille) sont les plus favorables aux rencontres amoureuses significatives. L&rsquo;année personnelle se calcule en additionnant votre jour et mois de naissance à l&rsquo;année civile en cours. Par exemple, pour une personne née le 15 juillet : 1+5+0+7+2+0+2+6 = 23, puis 2+3 = 5. Cette personne est en <strong>année personnelle 5</strong> en 2026, favorable aux changements et nouvelles aventures amoureuses.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-orange-700 mb-3">Que signifie le nombre 11 en amour selon la numérologie ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Le <strong>nombre 11</strong>, premier des nombres maîtres, est le chiffre de l&rsquo;intuition supérieure et de la connexion spirituelle en amour. Les personnes avec un chemin de vie 11 vivent l&rsquo;amour avec une intensité et une sensibilité hors du commun. Elles cherchent une union qui transcende le matériel pour toucher l&rsquo;âme. Leur plus grand défi est de ne pas idéaliser leur partenaire au point d&rsquo;en être déçu. En amour, le 11 attire des âmes évoluées et des connexions profondes, parfois des flammes jumelles ou des liens karmiques forts qui transforment profondément les deux partenaires.
              </p>
            </div>
          </div>
        </section>

        <VoyantFinalCTA topic="methodes-voyance" source="numerologie-amoureuse-final" />
      </div>
    </main>
  );
}
