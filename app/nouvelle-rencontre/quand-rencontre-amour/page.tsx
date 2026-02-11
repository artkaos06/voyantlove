import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';

export const metadata: Metadata = {
  title: 'Quand Vais-je Rencontrer Quelqu\'un ? Prédiction Tarot et Voyance',
  description: 'Quand allez-vous rencontrer l\'amour ou votre âme sœur ? Le tarot prédit le timing, le lieu, et le profil de votre prochaine rencontre amoureuse.',
  keywords: ['quand rencontre', 'rencontrer quelqu\'un', 'âme sœur timing', 'nouvelle rencontre tarot', 'prédiction rencontre'],
  alternates: { canonical: 'https://voyantlove.fr/nouvelle-rencontre/quand-rencontre-amour' },
};

export default function QuandRencontrePage() {
  const articleSchema = getArticleSchema({
    title: 'Quand Vais-je Rencontrer Quelqu\'un ? Prédiction Tarot et Voyance',
    description: 'Quand allez-vous rencontrer l\'amour ou votre âme sœur ? Le tarot prédit le timing, le lieu, et le profil de votre prochaine rencontre amoureuse.',
    url: 'https://voyantlove.fr/nouvelle-rencontre/quand-rencontre-amour',
    datePublished: '2026-01-20',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['quand rencontre', 'rencontrer quelqu\'un', 'âme sœur timing', 'nouvelle rencontre tarot', 'prédiction rencontre'],
  });

  const faqSchema = getFAQSchema([
    {
      question: 'Le tarot peut-il prédire exactement quand je vais rencontrer quelqu\'un ?',
      answer: 'Le tarot donne un timing probable : dans quelques mois, cette année, l\'année prochaine. Il n\'est pas précis au jour près mais indique des périodes favorables selon votre évolution personnelle et les transits astrologiques. La rencontre dépend aussi de votre ouverture et de vos actions pour vous exposer socialement. Les Arcanes Majeurs comme Le Monde ou L\'Étoile signalent des fenêtres d\'opportunité puissantes, tandis que les cartes de Coupe précisent l\'intensité émotionnelle de la période. Un voyant expérimenté croise ces informations avec votre thème natal pour affiner la prédiction à une saison ou un trimestre précis.',
    },
    {
      question: 'Où vais-je rencontrer ma prochaine relation ?',
      answer: 'Le tarot révèle le contexte probable : par amis, au travail, en voyage, en ligne, lieu culturel, activité sportive. Connaître ces circonstances vous permet de vous positionner dans ces situations sans forcer. Si le tarot dit "voyage", planifiez un voyage. Si "amis", acceptez les invitations sociales. Chaque suite du tarot correspond à un environnement spécifique : les Coupes évoquent des lieux émotionnels (concerts, fêtes), les Deniers des contextes professionnels, les Bâtons des activités dynamiques, et les Épées des milieux intellectuels. Le voyant analyse la combinaison des cartes tirées pour dresser un portrait précis du lieu et des circonstances de votre future rencontre amoureuse.',
    },
    {
      question: 'Qu\'est-ce qui empêche actuellement ma rencontre amoureuse ?',
      answer: 'Les blocages fréquents : blessure passée non guérie, peur de souffrir, fermeture du cœur, standards irréalistes, fixation sur un ex, indisponibilité émotionnelle. Le voyant identifie votre blocage spécifique et vous guide pour le lever. Lever ce blocage accélère souvent la rencontre de manière spectaculaire. Certaines cartes comme le Cinq de Coupe ou la Lune révèlent des schémas inconscients hérités de relations passées. Un tirage dédié aux blocages permet de mettre des mots sur ce qui freine votre énergie amoureuse et propose des actions concrètes : rituels de libération, travail sur l\'estime de soi, ou encore méditation guidée pour rouvrir le chakra du cœur.',
    },
    {
      question: 'À quoi ressemblera la personne que je vais rencontrer ?',
      answer: 'Le tarot décrit le profil général : apparence physique (brun/blond, grand/petit), personnalité (sensible/pragmatique, introverti/extraverti), situation de vie, âge approximatif, signes astrologiques compatibles. Ces indications vous aident à reconnaître la personne quand elle apparaît dans votre vie. Les cartes de Cour (Valets, Cavaliers, Reines, Rois) sont particulièrement parlantes : elles décrivent un archétype précis avec ses qualités et ses défauts. Le voyant interprète également les associations de cartes pour révéler la dynamique relationnelle future : attraction immédiate, amitié qui évolue, ou connexion spirituelle profonde dès le premier regard.',
    },
  ]);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Nouvelle Rencontre', url: 'https://voyantlove.fr/nouvelle-rencontre' },
    { name: 'Quand Rencontrer l\'Amour', url: 'https://voyantlove.fr/nouvelle-rencontre/quand-rencontre-amour' },
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
      <header className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Retour</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">✨ Quand Vais-je Rencontrer l'Amour ?</h1>
          <p className="text-xl opacity-95 mb-6">Le tarot révèle le timing, le lieu et le profil de votre prochaine rencontre</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#consultation" className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">Prédiction Timing</a>
            <a href="#profil" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition">Profil de la Personne</a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">⭐</div><div className="text-2xl font-bold text-cyan-600">4.8/5</div><div className="text-sm text-gray-600">287 avis</div></div>
          <div><div className="text-3xl mb-1">⏰</div><div className="text-2xl font-bold text-cyan-600">6-9 mois</div><div className="text-sm text-gray-600">Délai moyen</div></div>
          <div><div className="text-3xl mb-1">💫</div><div className="text-2xl font-bold text-cyan-600">78%</div><div className="text-sm text-gray-600">Rencontres prédites</div></div>
          <div><div className="text-3xl mb-1">🔮</div><div className="text-2xl font-bold text-cyan-600">84%</div><div className="text-sm text-gray-600">Précision profil</div></div>
        </div>

        <EEATSignal
          colorScheme="cyan"
          method="Tarot des nouvelles rencontres"
        />

        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-cyan-500">
          <p className="text-lg leading-relaxed mb-4">"<strong>Quand vais-je rencontrer quelqu'un</strong>" est une question d'<strong>avenir amoureux</strong> que le <strong>tarot</strong> peut éclairer avec précision. Le <strong>tirage de la rencontre</strong> révèle non seulement le <strong>timing</strong> probable, mais aussi les circonstances, le profil de la personne, et ce qui bloque actuellement votre ouverture à l'amour. Chaque carte tirée apporte une couche d'information supplémentaire, qu'il s'agisse d'un <strong>Arcane Majeur</strong> indiquant un tournant de vie ou d'un <strong>Arcane Mineur</strong> précisant les détails pratiques de cette future rencontre.</p>
          <p className="text-lg leading-relaxed mb-4">L'<strong>astrologie amoureuse</strong> identifie les périodes favorables : transits de Vénus, nouvelle lune en maison 7, Jupiter en aspect harmonieux. Ces configurations créent des opportunités de <strong>rencontre de l'âme sœur</strong> ou d'un partenaire compatible. Le tarot affine : dans 3 mois, 6 mois, cette année, ou après un travail de guérison spécifique. Une consultation approfondie sur votre <Link href="/sentiments/avenir-amoureux" className="text-cyan-600 hover:text-cyan-800 underline font-medium">avenir amoureux global</Link> permet de croiser ces données astrologiques avec l'interprétation des cartes pour obtenir une vision complète de votre trajectoire sentimentale.</p>
          <p className="text-lg leading-relaxed">La <strong>voyance</strong> ne fait pas apparaître quelqu'un magiquement, mais vous prépare énergétiquement, vous guide vers les lieux et situations propices, et vous aide à reconnaître la bonne personne quand elle arrive. Certaines personnes cherchent à <Link href="/nouvelle-rencontre/trouver-ame-soeur" className="text-cyan-600 hover:text-cyan-800 underline font-medium">trouver leur âme sœur</Link> sans avoir conscience des blocages invisibles qui les en empêchent. Pour approfondir votre compréhension des <Link href="/nouvelle-rencontre" className="text-cyan-600 hover:text-cyan-800 underline font-medium">nouvelles rencontres</Link> et découvrir toutes nos guidances spécialisées sur ce sujet, n'hésitez pas à explorer notre espace dédié.</p>
        </article>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">📅 Le Timing de votre Prochaine Rencontre</h2>
          <div className="space-y-4">
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded"><h3 className="font-bold text-green-700 mb-2">🌱 1-3 Mois (As de Coupe)</h3><p className="text-gray-700 text-sm">Rencontre imminente si vous êtes émotionnellement disponible et sortez régulièrement. Période très favorable actuellement. L'<strong>As de Coupe</strong> symbolise un nouveau départ sentimental puissant, souvent accompagné d'une connexion instantanée. Acceptez chaque invitation sociale et restez attentif aux <Link href="/nouvelle-rencontre/signes-ame-soeur" className="text-cyan-600 hover:text-cyan-800 underline font-medium">signes annonciateurs de l'âme sœur</Link> dans votre quotidien.</p></div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded"><h3 className="font-bold text-blue-700 mb-2">🌊 3-6 Mois (Cavaliers)</h3><p className="text-gray-700 text-sm">Rencontre dans le trimestre à venir. L'univers prépare la situation. Travaillez votre ouverture du cœur dès maintenant. Les <strong>Cavaliers</strong> indiquent un mouvement, un message ou une personne qui entre dans votre vie de manière dynamique. Cette période est idéale pour élargir votre cercle social, vous inscrire à de nouvelles activités, ou explorer des applications de rencontre avec intention.</p></div>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded"><h3 className="font-bold text-purple-700 mb-2">🔮 6-12 Mois (Reines/Rois)</h3><p className="text-gray-700 text-sm">Rencontre plus longue à venir mais relation sérieuse et stable. Patience nécessaire mais résultat durable. Les <strong>figures de Cour matures</strong> annoncent une personne qui sait ce qu'elle veut et qui est prête pour un engagement profond. Profitez de cette période d'attente pour travailler sur vous-même et clarifier vos attentes relationnelles.</p></div>
            <div className="bg-gray-100 border-l-4 border-gray-500 p-4 rounded"><h3 className="font-bold text-gray-700 mb-2">⏳ Plus d'un An (Arcanes Majeurs)</h3><p className="text-gray-700 text-sm">Vous devez d'abord accomplir un travail intérieur important. La rencontre viendra après une transformation personnelle profonde. Des cartes comme <strong>L'Ermite</strong> ou <strong>La Maison Dieu</strong> indiquent qu'un cycle doit se clôturer avant d'en ouvrir un nouveau. Si une rupture récente vous pèse encore, il peut être essentiel de d'abord <Link href="/rupture/oublier-son-ex" className="text-cyan-600 hover:text-cyan-800 underline font-medium">tourner la page de votre ex</Link> avant d'accueillir un nouvel amour.</p></div>
          </div>
        </section>

        <section id="profil" className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 mb-8 border-2 border-cyan-200">
          <h2 className="text-3xl font-bold mb-6">🎯 Profil de la Personne que Vous Allez Rencontrer</h2>
          <p className="text-gray-700 mb-6">Le tarot décrit les caractéristiques principales pour vous aider à reconnaître cette personne.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-pink-500"><h3 className="font-bold mb-3 text-pink-700">👤 Apparence Physique</h3><ul className="text-gray-700 text-sm space-y-1"><li>• <strong>Reine de Coupe</strong> : Blonde/châtain clair, douce</li><li>• <strong>Roi de Bâton</strong> : Brun énergique, sportif</li><li>• <strong>Reine d'Épée</strong> : Look élégant, intellectuel</li><li>• <strong>Roi de Deniers</strong> : Apparence soignée, mature</li></ul></div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500"><h3 className="font-bold mb-3 text-blue-700">💫 Personnalité</h3><ul className="text-gray-700 text-sm space-y-1"><li>• <strong>Coupes</strong> : Sensible, émotionnel, romantique</li><li>• <strong>Bâtons</strong> : Énergique, passionné, actif</li><li>• <strong>Épées</strong> : Intellectuel, communicatif, direct</li><li>• <strong>Deniers</strong> : Pragmatique, stable, terre-à-terre</li></ul></div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-purple-500"><h3 className="font-bold mb-3 text-purple-700">🏠 Situation de Vie</h3><p className="text-gray-700 text-sm">Célibataire depuis un moment, divorcé(e) avec enfants, jamais été en couple long, ou sortant d'une relation récente. Le tarot précise selon les cartes.</p></div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-indigo-500"><h3 className="font-bold mb-3 text-indigo-700">⭐ Signes Astrologiques</h3><p className="text-gray-700 text-sm">Le tarot indique souvent l'élément dominant (Feu, Terre, Air, Eau) qui correspond à certains signes. Utile pour reconnaissance initiale.</p></div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">🏡 Où et Comment Aurez-vous cette Rencontre ?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded border-l-4 border-green-500"><h3 className="font-bold text-green-700 mb-2">👥 Par Amis (Trois de Coupe)</h3><p className="text-gray-700 text-sm">Soirée, dîner, événement social organisé par des connaissances communes.</p></div>
            <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500"><h3 className="font-bold text-blue-700 mb-2">💼 Au Travail (Huit de Deniers)</h3><p className="text-gray-700 text-sm">Nouveau collègue, client, ou rencontre professionnelle qui devient personnelle.</p></div>
            <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500"><h3 className="font-bold text-purple-700 mb-2">✈️ En Voyage (Huit de Bâton)</h3><p className="text-gray-700 text-sm">Vacances, déplacement professionnel, week-end ailleurs qu'à la maison.</p></div>
            <div className="bg-pink-50 p-4 rounded border-l-4 border-pink-500"><h3 className="font-bold text-pink-700 mb-2">📱 En Ligne (Le Chariot)</h3><p className="text-gray-700 text-sm">Application de rencontre, réseau social, forum, communauté en ligne.</p></div>
            <div className="bg-indigo-50 p-4 rounded border-l-4 border-indigo-500"><h3 className="font-bold text-indigo-700 mb-2">📚 Lieu Culturel (La Papesse)</h3><p className="text-gray-700 text-sm">Bibliothèque, musée, conférence, librairie, cours, atelier créatif.</p></div>
            <div className="bg-cyan-50 p-4 rounded border-l-4 border-cyan-500"><h3 className="font-bold text-cyan-700 mb-2">🏃 Activité Sportive (Cavalier)</h3><p className="text-gray-700 text-sm">Salle de sport, cours de yoga, randonnée, club sportif, événement actif.</p></div>
          </div>
        </section>

        <section className="bg-red-50 border-2 border-red-200 rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">🚧 Ce Qui Bloque Actuellement Votre Rencontre</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3"><div className="text-2xl">💔</div><p className="text-gray-700"><strong>Blessures non guéries</strong> : Vous n'avez pas tourné la page de votre dernière relation. Le <strong>Cinq de Coupe</strong> apparaît souvent dans les tirages de personnes qui portent encore le deuil d'un ancien amour, ce qui crée une barrière invisible autour de leur énergie amoureuse.</p></div>
            <div className="flex items-start gap-3"><div className="text-2xl">😨</div><p className="text-gray-700"><strong>Peur de souffrir</strong> : Votre cœur est fermé par protection contre la douleur. Cette peur inconsciente vous pousse à saboter les opportunités naissantes ou à fuir dès que l'intimité émotionnelle s'installe avec une nouvelle personne.</p></div>
            <div className="flex items-start gap-3"><div className="text-2xl">🚫</div><p className="text-gray-700"><strong>Indisponibilité émotionnelle</strong> : Trop focalisé(e) sur un ex ou quelqu'un d'inaccessible. Tant que votre esprit reste accroché à une personne du passé, votre <strong>vibration amoureuse</strong> ne peut pas attirer de nouvelle connexion authentique.</p></div>
            <div className="flex items-start gap-3"><div className="text-2xl">👑</div><p className="text-gray-700"><strong>Standards irréalistes</strong> : Votre liste de critères empêche toute rencontre réelle. La perfection n'existe pas et le tarot vous invite à distinguer les besoins essentiels des préférences superficielles pour ouvrir le champ des possibles.</p></div>
            <div className="flex items-start gap-3"><div className="text-2xl">🔒</div><p className="text-gray-700"><strong>Chakra du cœur fermé</strong> : Blocage énergétique qui repousse les opportunités. Un travail de <strong>méditation</strong> et de <strong>guérison énergétique</strong> ciblé peut libérer ce centre et rétablir votre capacité à donner et recevoir de l'amour.</p></div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 mb-8 border-2 border-indigo-200">
          <h2 className="text-3xl font-bold mb-4">🃏 Tirage Tarot de la Rencontre : 5 Positions</h2>
          <p className="text-gray-700 mb-6">Ce <strong>tirage en 5 cartes</strong> est spécialement conçu pour répondre à la question "<strong>quand et comment vais-je rencontrer l'amour</strong>". Chaque position éclaire un aspect essentiel de votre prochaine <strong>rencontre amoureuse</strong>, offrant une guidance complète depuis votre état intérieur actuel jusqu'au potentiel de la relation à venir.</p>
          <div className="grid md:grid-cols-5 gap-4">
            <div className="bg-white rounded-lg p-4 text-center shadow-sm"><div className="text-3xl mb-2">1️⃣</div><h3 className="font-bold text-indigo-700 mb-2">Votre Énergie Actuelle</h3><p className="text-gray-600 text-sm">Révèle votre <strong>disponibilité émotionnelle</strong> et votre ouverture à l'amour en ce moment précis.</p></div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm"><div className="text-3xl mb-2">2️⃣</div><h3 className="font-bold text-indigo-700 mb-2">Le Blocage à Lever</h3><p className="text-gray-600 text-sm">Identifie l'obstacle principal qui retarde votre rencontre et les actions pour le dissoudre.</p></div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm"><div className="text-3xl mb-2">3️⃣</div><h3 className="font-bold text-indigo-700 mb-2">Le Timing</h3><p className="text-gray-600 text-sm">Indique la <strong>période favorable</strong> pour votre prochaine rencontre significative.</p></div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm"><div className="text-3xl mb-2">4️⃣</div><h3 className="font-bold text-indigo-700 mb-2">Le Contexte</h3><p className="text-gray-600 text-sm">Décrit le lieu, les circonstances et le contexte dans lequel la <strong>rencontre</strong> se produira.</p></div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm"><div className="text-3xl mb-2">5️⃣</div><h3 className="font-bold text-indigo-700 mb-2">Le Potentiel</h3><p className="text-gray-600 text-sm">Révèle le potentiel de la relation : passagère, durable, ou <strong>connexion d'âme sœur</strong>.</p></div>
          </div>
          <p className="text-gray-700 mt-6 text-sm">Ce tirage est particulièrement puissant lorsqu'il est combiné avec une analyse de votre <strong>thème astral</strong>. Les consultants qui souhaitent savoir si cette personne sera véritablement compatible peuvent ensuite approfondir avec une lecture dédiée pour <Link href="/sentiments/maime-t-il-elle" className="text-cyan-600 hover:text-cyan-800 underline font-medium">savoir si cette personne les aimera</Link> une fois la rencontre réalisée.</p>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-8">❓ Questions Fréquentes</h2>
          <div className="space-y-6">
            <div className="border-b pb-6"><h3 className="text-xl font-bold mb-3">Le tarot peut-il prédire exactement quand je vais rencontrer quelqu'un ?</h3><p className="text-gray-700 leading-relaxed">Le tarot donne un <strong>timing probable</strong> : dans quelques mois, cette année, l'année prochaine. Il n'est pas précis au jour près mais indique des <strong>périodes favorables</strong> selon votre évolution personnelle et les transits astrologiques. La rencontre dépend aussi de votre ouverture et de vos actions pour vous exposer socialement. Les <strong>Arcanes Majeurs</strong> comme Le Monde ou L'Étoile signalent des fenêtres d'opportunité puissantes, tandis que les cartes de Coupe précisent l'intensité émotionnelle de la période. Un voyant expérimenté croise ces informations avec votre <strong>thème natal</strong> pour affiner la prédiction à une saison ou un trimestre précis.</p></div>
            <div className="border-b pb-6"><h3 className="text-xl font-bold mb-3">Où vais-je rencontrer ma prochaine relation ?</h3><p className="text-gray-700 leading-relaxed">Le tarot révèle le contexte probable : par amis, au travail, en voyage, en ligne, lieu culturel, activité sportive. Connaître ces circonstances vous permet de vous positionner dans ces situations sans forcer. Si le tarot dit "voyage", planifiez un voyage. Si "amis", acceptez les invitations sociales. Chaque <strong>suite du tarot</strong> correspond à un environnement spécifique : les Coupes évoquent des lieux émotionnels (concerts, fêtes), les Deniers des contextes professionnels, les Bâtons des activités dynamiques, et les Épées des milieux intellectuels. Le voyant analyse la combinaison des cartes tirées pour dresser un portrait précis du lieu et des circonstances de votre future <strong>rencontre amoureuse</strong>.</p></div>
            <div className="border-b pb-6"><h3 className="text-xl font-bold mb-3">Qu'est-ce qui empêche actuellement ma rencontre amoureuse ?</h3><p className="text-gray-700 leading-relaxed">Les blocages fréquents : <strong>blessure passée</strong> non guérie, peur de souffrir, fermeture du cœur, standards irréalistes, fixation sur un ex, indisponibilité émotionnelle. Le voyant identifie votre blocage spécifique et vous guide pour le lever. Lever ce blocage accélère souvent la rencontre de manière spectaculaire. Certaines cartes comme le <strong>Cinq de Coupe</strong> ou <strong>la Lune</strong> révèlent des schémas inconscients hérités de relations passées. Un tirage dédié aux blocages permet de mettre des mots sur ce qui freine votre énergie amoureuse et propose des actions concrètes : rituels de libération, travail sur l'estime de soi, ou encore méditation guidée pour rouvrir le <strong>chakra du cœur</strong>.</p></div>
            <div><h3 className="text-xl font-bold mb-3">À quoi ressemblera la personne que je vais rencontrer ?</h3><p className="text-gray-700 leading-relaxed">Le tarot décrit le profil général : apparence physique (brun/blond, grand/petit), personnalité (sensible/pragmatique, introverti/extraverti), situation de vie, âge approximatif, <strong>signes astrologiques</strong> compatibles. Ces indications vous aident à reconnaître la personne quand elle apparaît dans votre vie. Les <strong>cartes de Cour</strong> (Valets, Cavaliers, Reines, Rois) sont particulièrement parlantes : elles décrivent un archétype précis avec ses qualités et ses défauts. Le voyant interprète également les associations de cartes pour révéler la <strong>dynamique relationnelle</strong> future : attraction immédiate, amitié qui évolue, ou connexion spirituelle profonde dès le premier regard.</p></div>
          </div>
        </section>

        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4">📚 Articles Connexes</h3>
          <div className="space-y-2">
            <Link href="/sentiments/avenir-amoureux" className="block text-cyan-600 hover:text-cyan-800 font-medium">→ Mon Avenir Amoureux Global</Link>
            <Link href="/nouvelle-rencontre/trouver-ame-soeur" className="block text-cyan-600 hover:text-cyan-800 font-medium">→ Compatibilité avec ma Future Rencontre</Link>
            <Link href="/nouvelle-rencontre/signes-ame-soeur" className="block text-cyan-600 hover:text-cyan-800 font-medium">→ Reconnaître les Signes de l'Âme Sœur</Link>
            <Link href="/rupture/oublier-son-ex" className="block text-cyan-600 hover:text-cyan-800 font-medium">→ Si je Dois d'Abord Oublier mon Ex</Link>
            <Link href="/sentiments/maime-t-il-elle" className="block text-cyan-600 hover:text-cyan-800 font-medium">→ Savoir si cette Personne m'Aime</Link>
            <Link href="/reconquete/reconquerir-son-ex" className="block text-cyan-600 hover:text-cyan-800 font-medium">→ Reconquérir son Ex avant une Nouvelle Rencontre</Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">✨ Découvrez Quand Vous Allez Rencontrer</h2>
          <p className="text-lg mb-6 opacity-95">Prédiction personnalisée : timing, lieu, profil et préparation</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#consultation" className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition">Prédiction Timing de Rencontre</a>
            <a href="#tirage" className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition">Tirage "Quand et Comment"</a>
          </div>
          <p className="mt-6 text-sm opacity-90">✓ Timing précis • ✓ Profil détaillé • ✓ Lieux propices</p>
        </div>
      </div>
    </main>
  );
}
