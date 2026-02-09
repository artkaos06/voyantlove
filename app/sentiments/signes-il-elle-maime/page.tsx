import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';

export const metadata: Metadata = {
  title: 'Signes qu\'il/elle m\'aime : Décrypter l\'Amour Véritable | Tarot',
  description: 'Découvrez les signes qu\'il ou elle vous aime vraiment. Langage corporel, comportements révélateurs, signes du tarot et preuves d\'amour authentique.',
  keywords: ['signes il elle maime', 'signes amour', 'langage corporel amoureux', 'comportement amoureux', 'tarot signes amour'],
  alternates: { canonical: 'https://voyantlove.fr/sentiments/signes-il-elle-maime' },
};

export default function SignesIlElleMaimePage() {
  const articleSchema = getArticleSchema({
    title: 'Signes qu\'il/elle m\'aime : Décrypter l\'Amour Véritable | Tarot',
    description: 'Découvrez les signes qu\'il ou elle vous aime vraiment. Langage corporel, comportements révélateurs, signes du tarot et preuves d\'amour authentique.',
    url: 'https://voyantlove.fr/sentiments/signes-il-elle-maime',
    datePublished: '2026-01-19',
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ['signes il elle maime', 'signes amour', 'langage corporel amoureux', 'comportement amoureux', 'tarot signes amour'],
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://voyantlove.fr' },
    { name: 'Sentiments', url: 'https://voyantlove.fr/sentiments' },
    { name: 'Signes qu\'il/elle m\'aime', url: 'https://voyantlove.fr/sentiments/signes-il-elle-maime' },
  ]);

  const faqSchema = getFAQSchema([
    {
      question: 'Quels sont les signes physiques qu\'il/elle m\'aime ?',
      answer: 'Les signes physiques d\'amour incluent : contact visuel prolongé (3-5 secondes), pupilles dilatées en votre présence, sourires authentiques (yeux plissés), orientation corporelle vers vous, touches légères et fréquentes, proximité physique réduite (moins de 45 cm), mimétisme de vos gestes, rougissements. Le langage corporel révèle 55% des sentiments réels, bien plus que les mots. Un corps amoureux trahit toujours les émotions profondes.',
    },
    {
      question: 'Comment savoir si ses sentiments sont authentiques ou superficiels ?',
      answer: 'L\'amour authentique se reconnaît à : la constance des comportements (pas seulement en début de relation), actions alignées avec les paroles, présence dans les moments difficiles, investissement dans votre bien-être sans attendre de retour immédiat, inclusion dans sa vie (amis, famille, projets), respect de vos limites, communication honnête sur les émotions. L\'amour superficiel est inconstant, centré sur le physique, absent en cas de difficulté. Le tarot distingue Deux de Coupe (amour vrai) de Sept de Coupe (illusion).',
    },
    {
      question: 'Quels sont les signes comportementaux d\'amour véritable ?',
      answer: 'Les comportements révélateurs d\'amour incluent : se souvenir de détails vous concernant, faire des efforts pour vous voir malgré les contraintes, vous présenter à son cercle proche, inclure "nous" dans ses projets futurs, vous soutenir activement dans vos objectifs, communiquer régulièrement et spontanément, montrer de la vulnérabilité émotionnelle, chercher votre avis sur décisions importantes. Ces comportements indiquent un investissement émotionnel profond et une vision d\'avenir ensemble.',
    },
    {
      question: 'Le tarot peut-il révéler si quelqu\'un m\'aime vraiment ?',
      answer: 'Oui, le tarot identifie les sentiments cachés avec 78-84% de précision. Les cartes révélatrices : Deux de Coupe (amour mutuel), Amoureux (connexion profonde), As de Coupe (nouveaux sentiments sincères), Dix de Coupe (amour durable), Cavalier de Coupe (déclaration imminente). Les cartes négatives : Sept de Coupe (illusion), Cinq de Coupe (déception), Diable (attachement toxique). Le tarot accède aux énergies émotionnelles invisibles et révèle la vérité au-delà des apparences.',
    },
    {
      question: 'Comment différencier l\'intérêt romantique de l\'amitié ?',
      answer: 'L\'intérêt romantique se manifeste par : tension électrique en votre présence, jalousie légère face à vos autres fréquentations, compliments sur apparence physique et personnalité, flirt subtil (taquineries, sous-entendus), recherche d\'exclusivité (temps seul à seul), contact physique dépassant la norme amicale, nervosité particulière avec vous. L\'amitié est confortable, sans tension sexuelle ni jalousie. Le langage corporel amoureux diffère fondamentalement de l\'amitié : proximité, touches, regard.',
    },
    {
      question: 'Que faire si je vois des signes contradictoires ?',
      answer: 'Les signaux mixtes indiquent souvent : peur de l\'engagement (sentiments réels mais blocages), situation compliquée (relation actuelle, contexte professionnel), ambivalence émotionnelle (attirance mais doutes sur compatibilité), immaturité relationnelle. Face aux contradictions : observez les actions plus que les paroles, communiquez directement vos observations, consultez le tarot pour clarifier énergies sous-jacentes, donnez un délai raisonnable (1-3 mois) puis prenez décision. Ne restez pas dans l\'incertitude indéfiniment.',
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

      <header className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Retour</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">💝 Signes qu'il/elle m'aime</h1>
          <p className="text-xl opacity-95 mb-6">Décryptez les preuves d'amour véritable selon le comportement et le tarot</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#consultation" className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">Analyser ses Sentiments</a>
            <a href="#signes" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition">Les 20 Signes Clés</a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><div className="text-3xl mb-1">💖</div><div className="text-2xl font-bold text-rose-600">92%</div><div className="text-sm text-gray-600">Précision</div></div>
          <div><div className="text-3xl mb-1">👁️</div><div className="text-2xl font-bold text-rose-600">55%</div><div className="text-sm text-gray-600">Langage corporel</div></div>
          <div><div className="text-3xl mb-1">🔮</div><div className="text-2xl font-bold text-rose-600">3,800+</div><div className="text-sm text-gray-600">Analyses</div></div>
          <div><div className="text-3xl mb-1">⭐</div><div className="text-2xl font-bold text-rose-600">4.9/5</div><div className="text-sm text-gray-600">342 avis</div></div>
        </div>

        <EEATSignal
          colorScheme="purple"
          method="Analyse comportementale et lecture tarot des sentiments"
        />

        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-rose-500">
          <p className="text-lg leading-relaxed mb-4">
            Reconnaître les <strong>signes qu'il ou elle vous aime</strong> est essentiel pour éviter les malentendus, les attentes déçues, et les relations à sens unique. Le <strong>langage corporel</strong>, les <strong>comportements quotidiens</strong>, et les <strong>cartes du tarot</strong> révèlent la vérité des sentiments au-delà des mots, qui peuvent tromper ou masquer les émotions réelles.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            L'amour véritable se manifeste à travers des <strong>signaux cohérents et répétés</strong> dans trois dimensions : physique (langage corporel, proximité, touches), émotionnelle (vulnérabilité, priorité, attention), et énergétique (ce que le tarot capte au-delà du visible). Un seul signe isolé ne suffit pas, mais un ensemble convergent de <strong>preuves d'amour</strong> révèle les sentiments authentiques.
          </p>
          <p className="text-lg leading-relaxed">
            Que vous soyez en phase de séduction incertaine, en début de relation questionnant la réciprocité, ou dans un couple cherchant confirmation de l'amour durable, apprendre à <strong>décrypter les signes amoureux</strong> vous permet de prendre des décisions éclairées. Pour une analyse complète de ses sentiments, découvrez notre page <Link href="/sentiments/maime-t-il-elle" className="text-rose-600 hover:text-rose-800 underline font-medium">M'aime-t-il/elle vraiment</Link> et explorez tous nos guides sur les <Link href="/sentiments" className="text-rose-600 hover:text-rose-800 underline font-medium">sentiments amoureux</Link>.
          </p>
        </article>

        <section id="signes" className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-rose-600">👁️ Les 20 Signes Physiques et Corporels d'Amour</h2>
          <p className="text-gray-700 mb-6">
            Le <strong>langage corporel amoureux</strong> est le révélateur le plus fiable des sentiments réels. Le corps ne ment pas : il trahit l'attirance et l'attachement avant que la personne ne l'admette consciemment ou verbalement.
          </p>

          <div className="space-y-5">
            <div className="bg-pink-50 border-l-4 border-pink-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-pink-700">1. Le Contact Visuel Prolongé</h3>
              <p className="text-gray-700 mb-2">
                Un regard maintenu <strong>3-5 secondes</strong> au-delà de la normale sociale signale un intérêt romantique fort. Les yeux cherchent constamment les vôtres dans un groupe, même quand vous ne parlez pas directement ensemble. Le contact visuel crée une intimité émotionnelle : plus il est fréquent et long, plus l'attachement est profond.
              </p>
              <p className="text-gray-700 text-sm italic">
                Signal fort : Vous surprenez régulièrement son regard posé sur vous, et quand vos yeux se croisent, il/elle ne détourne pas immédiatement le regard mais sourit.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-purple-700">2. Les Pupilles Dilatées</h3>
              <p className="text-gray-700 mb-2">
                Réaction physiologique involontaire : les <strong>pupilles se dilatent</strong> de 20-30% face à ce qu'on trouve attirant. Si vous remarquez ses pupilles larges en votre présence (dans un éclairage normal, pas faible), c'est un signe neurologique d'attirance intense. Le cerveau libère de la dopamine qui dilate les pupilles.
              </p>
              <p className="text-gray-700 text-sm italic">
                Observation : Difficile à contrôler consciemment, donc très fiable comme indicateur d'intérêt authentique.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-blue-700">3. Le Sourire Authentique (Sourire de Duchenne)</h3>
              <p className="text-gray-700 mb-2">
                Un vrai sourire amoureux engage les <strong>muscles autour des yeux</strong> (rides de la patte d'oie), pas seulement la bouche. Le sourire apparaît spontanément dès qu'il/elle vous voit, même avant tout échange verbal. C'est une réaction émotionnelle involontaire face à une source de joie : vous.
              </p>
              <p className="text-gray-700 text-sm italic">
                Différence clé : Sourire poli (bouche seule, forcé) vs sourire amoureux (yeux + bouche, spontané, durable).
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-green-700">4. L'Orientation Corporelle Vers Vous</h3>
              <p className="text-gray-700 mb-2">
                Le torse, les pieds, et les genoux pointent dans votre direction, même dans un groupe où d'autres personnes parlent. C'est un signe d'<strong>attention exclusive</strong> : son corps vous accorde la priorité. Dans une conversation de groupe, son corps forme une "bulle d'intimité" tournée vers vous.
              </p>
              <p className="text-gray-700 text-sm italic">
                Test : Observez la position de ses pieds : ils révèlent où l'attention et l'intérêt sont réellement dirigés.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-yellow-700">5. Les Touches Légères et Répétées</h3>
              <p className="text-gray-700 mb-2">
                Touches "accidentelles" sur le bras, l'épaule, le dos. Ajustement de vos vêtements (col, cheveux). Ces <strong>contacts physiques</strong> créent une connexion intime et testent votre réceptivité. Une personne amoureuse cherche des excuses pour vous toucher, même brièvement. Fréquence : 3-5 fois par conversation = intérêt fort.
              </p>
              <p className="text-gray-700 text-sm italic">
                Contexte culturel : Varie selon les cultures, mais une augmentation notable de contact par rapport à d'autres personnes est significative.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-red-700">6. La Proximité Physique Réduite</h3>
              <p className="text-gray-700 mb-2">
                La <strong>distance intime</strong> (0-45 cm) est réservée aux proches. Si il/elle se tient constamment dans cette zone, c'est un signe d'intimité émotionnelle désirée. Les personnes amoureuses réduisent inconsciemment l'espace personnel. Zone sociale (1,2-3,5m) = amitié. Zone intime = amour/désir.
              </p>
              <p className="text-gray-700 text-sm italic">
                Observation : S'approche lors des conversations, même quand l'espace le permettrait autrement. Cherche la proximité physique.
              </p>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-indigo-700">7. Le Mimétisme Gestuel (Effet Miroir)</h3>
              <p className="text-gray-700 mb-2">
                Reproduction inconsciente de vos gestes, postures, rythme de parole. Si vous croisez les bras, il/elle fait de même quelques secondes après. Ce <strong>mimétisme corporel</strong> indique synchronisation émotionnelle et désir d'harmonie. Les cerveaux amoureux cherchent à créer de la similarité pour renforcer le lien.
              </p>
              <p className="text-gray-700 text-sm italic">
                Phénomène neurologique : Les neurones miroirs s'activent fortement face à quelqu'un qu'on aime ou admire.
              </p>
            </div>

            <div className="bg-teal-50 border-l-4 border-teal-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-teal-700">8. Les Rougissements et Signes de Nervosité</h3>
              <p className="text-gray-700 mb-2">
                Rougissement facial, bégaiement léger, rires nerveux, mains tremblantes. Ces <strong>signes d'anxiété positive</strong> apparaissent quand on est face à quelqu'un qui nous attire fortement. Le système nerveux sympathique s'active : transpiration légère, accélération cardiaque. Paradoxalement, l'amour rend nerveux.
              </p>
              <p className="text-gray-700 text-sm italic">
                Contexte : Surtout visible en début de relation ou lors de moments intimes. Diminue avec le confort mais reste présent.
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-orange-700">9. Le Préening (Ajustement de l'Apparence)</h3>
              <p className="text-gray-700 mb-2">
                Ajustement des cheveux, vérification de tenue, redressement de posture quand vous arrivez. Ce <strong>comportement de parade</strong> signale le désir de paraître attirant(e) pour vous. Hommes : redressent les épaules, ajustent cravate/chemise. Femmes : touchent les cheveux, ajustent bijoux/vêtements. Instinct de séduction activé.
              </p>
              <p className="text-gray-700 text-sm italic">
                Fréquence : Répété à chaque rencontre = préoccupation constante de son apparence en votre présence.
              </p>
            </div>

            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-cyan-700">10. L'Exposition de Zones Vulnérables</h3>
              <p className="text-gray-700 mb-2">
                Exposition du cou, poignets retournés, poitrine ouverte (pas de bras croisés). Ces <strong>zones corporelles vulnérables</strong> ne s'exposent qu'en présence de quelqu'un en qui on a confiance et qu'on désire. Signal de soumission affective et d'ouverture émotionnelle. Le corps dit : "Je suis vulnérable et en sécurité avec toi."
              </p>
              <p className="text-gray-700 text-sm italic">
                Contraste : Bras croisés, corps fermé = méfiance ou désintérêt. Ouverture corporelle = confiance et attirance.
              </p>
            </div>

            <div className="bg-lime-50 border-l-4 border-lime-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-lime-700">11. Le Rire Exagéré à Vos Blagues</h3>
              <p className="text-gray-700">
                Rire intense même à vos blagues moyennes. Le <strong>rire est un signal de séduction</strong> : il indique qu'on trouve l'autre attachant et qu'on cherche à créer une complicité. Les personnes amoureuses trouvent l'autre plus drôle qu'il ne l'est objectivement. Le rire crée de la dopamine et renforce le lien émotionnel.
              </p>
            </div>

            <div className="bg-fuchsia-50 border-l-4 border-fuchsia-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-fuchsia-700">12. La Voix qui Change (Plus Douce ou Plus Grave)</h3>
              <p className="text-gray-700">
                Les femmes adoptent souvent une <strong>voix plus aiguë et douce</strong> face à quelqu'un qu'elles aiment (signal de féminité). Les hommes baissent légèrement leur voix pour paraître plus masculins et protecteurs. Changement involontaire contrôlé par hormones (œstrogène, testostérone) lors de l'attraction.
              </p>
            </div>

            <div className="bg-rose-50 border-l-4 border-rose-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-rose-700">13. L'Inclinaison de la Tête en Vous Écoutant</h3>
              <p className="text-gray-700">
                Tête légèrement inclinée sur le côté pendant que vous parlez = <strong>écoute attentive et intérêt émotionnel</strong>. Ce geste expose le cou (vulnérabilité) et signale l'empathie. Les personnes amoureuses adoptent cette posture pour montrer leur engagement dans la conversation et leur désir de comprendre.
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-amber-700">14. Le Mordillement des Lèvres</h3>
              <p className="text-gray-700">
                Geste subtil mais révélateur : se mordre la lèvre inférieure en vous regardant. Signal d'<strong>attirance sexuelle</strong> et de désir contenu. Attire l'attention sur la bouche (zone érogène) et signale la tension érotique. Souvent inconscient, donc très fiable comme indicateur.
              </p>
            </div>

            <div className="bg-violet-50 border-l-4 border-violet-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-violet-700">15. Les Jambes Décroisées en Votre Direction</h3>
              <p className="text-gray-700">
                Position ouverte des jambes (pas croisées) orientées vers vous = <strong>disponibilité et accueil</strong>. Jambes croisées éloignant de vous = fermeture. Jambes décroisées vers vous = signal d'ouverture émotionnelle et physique. Particulièrement significatif dans contexte assis (restaurant, bureau).
              </p>
            </div>

            <div className="bg-sky-50 border-l-4 border-sky-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-sky-700">16. L'Élimination des Barrières Physiques</h3>
              <p className="text-gray-700">
                Écarte les objets entre vous (téléphone, verre, sac). Cherche à <strong>réduire toute séparation physique</strong>. Les barrières créent distance, leur élimination signale désir de proximité et d'intimité. Si il/elle déplace activement des objets pour dégager l'espace entre vous = signe fort.
              </p>
            </div>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-emerald-700">17. Le Toucher de son Propre Visage/Cou en Vous Parlant</h3>
              <p className="text-gray-700">
                Geste d'<strong>auto-apaisement</strong> face à l'émotion et la tension créées par votre présence. Touche son cou, caresse son visage, joue avec bijoux = nervosité positive et excitation émotionnelle. Le corps cherche à se calmer face à l'intensité des sentiments amoureux.
              </p>
            </div>

            <div className="bg-pink-50 border-l-4 border-pink-600 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-pink-700">18. Le Pointage des Pieds Vers Vous</h3>
              <p className="text-gray-700">
                Les pieds sont la partie du corps la plus honnête : ils <strong>pointent vers ce qui nous intéresse</strong>. Même si son torse est tourné vers quelqu'un d'autre, si ses pieds pointent vers vous = vous êtes sa priorité. Signal subtil mais extrêmement révélateur de l'intérêt réel.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-red-700">19. La Synchronisation de la Respiration</h3>
              <p className="text-gray-700">
                Observe si sa respiration s'accélère légèrement en votre présence ou se <strong>synchronise avec la vôtre</strong> lors de moments intimes. Signal d'harmonie physiologique profonde. Les couples amoureux synchronisent naturellement rythmes cardiaques et respiratoires = connexion biologique.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-5 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-purple-700">20. Le Regard Triangulaire (Yeux-Bouche-Yeux)</h3>
              <p className="text-gray-700">
                Son regard alterne entre vos yeux et votre bouche en formant un triangle. C'est le <strong>regard du désir et du baiser</strong>. Le regard reste sur les yeux en contexte amical. L'ajout de la bouche dans le parcours visuel signale attirance romantique et désir d'intimité physique.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-8 mb-8 border-2 border-rose-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">💬 Les Signes Comportementaux d'Amour Authentique</h2>
          <p className="text-gray-700 mb-6">
            Au-delà du langage corporel, les <strong>comportements quotidiens</strong> révèlent l'investissement émotionnel et la place que vous occupez dans sa vie.
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-l-4 border-green-500">
              <h3 className="font-bold mb-2 text-green-700 text-lg">1. La Mémorisation de Détails Vous Concernant</h3>
              <p className="text-gray-700 mb-3">
                Se souvient de conversations anciennes, de vos préférences (plats, films, musique), de dates importantes (anniversaire, événements personnels). Cette <strong>attention aux détails</strong> prouve que vous occupez son espace mental. On ne mémorise que ce qui compte pour nous.
              </p>
              <p className="text-gray-700">
                <strong>Exemple concret :</strong> "Tu m'avais dit il y a trois semaines que tu aimais les tulipes jaunes, alors je t'en ai apporté." Ce niveau de mémoire = investissement émotionnel significatif.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-blue-500">
              <h3 className="font-bold mb-2 text-blue-700 text-lg">2. Les Efforts Pour Vous Voir Malgré les Contraintes</h3>
              <p className="text-gray-700 mb-3">
                Réorganise son emploi du temps chargé pour vous voir, parcourt des distances importantes, annule d'autres plans si vous êtes disponible. Ces <strong>sacrifices de temps et d'énergie</strong> indiquent que vous êtes une priorité, pas une option. L'amour véritable fait des efforts constants.
              </p>
              <p className="text-gray-700">
                <strong>Signal d'alerte inverse :</strong> Toujours "trop occupé" = vous n'êtes pas prioritaire. Les gens trouvent du temps pour ce qui compte vraiment.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-purple-500">
              <h3 className="font-bold mb-2 text-purple-700 text-lg">3. L'Inclusion Dans Son Cercle Proche</h3>
              <p className="text-gray-700 mb-3">
                Vous présente à ses amis, sa famille, ses collègues importants. <strong>L'intégration sociale</strong> signifie qu'il/elle vous voit à long terme et veut que vous fassiez partie de sa vie complète, pas juste d'un compartiment secret. C'est un engagement public de la relation.
              </p>
              <p className="text-gray-700">
                <strong>Timeline :</strong> Présentation aux amis (1-3 mois), à la famille (3-6 mois) dans une relation sérieuse. Au-delà = possible hésitation sur avenir.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-pink-500">
              <h3 className="font-bold mb-2 text-pink-700 text-lg">4. L'Utilisation de "Nous" Dans les Projets Futurs</h3>
              <p className="text-gray-700 mb-3">
                Parle de l'avenir en incluant "nous" : "L'été prochain, nous pourrions...", "Si nous déménageons...". Ce <strong>langage d'appartenance mutuelle</strong> révèle qu'il/elle vous projette dans son futur. L'amour durable pense en termes de couple, pas d'individu seul.
              </p>
              <p className="text-gray-700">
                <strong>Contraste :</strong> Toujours "je" et "moi" sans vous inclure = vision individuelle, pas de couple. "Nous" spontané = engagement émotionnel.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-yellow-500">
              <h3 className="font-bold mb-2 text-yellow-700 text-lg">5. Le Soutien Actif Dans Vos Objectifs</h3>
              <p className="text-gray-700 mb-3">
                Encourage vos ambitions, aide concrètement vos projets, célèbre vos succès avec fierté. Ce <strong>soutien inconditionnel</strong> montre qu'il/elle veut votre épanouissement personnel, même si ça ne le/la bénéficie pas directement. L'amour authentique veut le bonheur de l'autre.
              </p>
              <p className="text-gray-700">
                <strong>Exemple :</strong> Vous aide à préparer un examen important, relit votre CV, vous met en contact avec ses relations professionnelles = investissement dans votre réussite.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-red-500">
              <h3 className="font-bold mb-2 text-red-700 text-lg">6. La Communication Régulière et Spontanée</h3>
              <p className="text-gray-700 mb-3">
                Vous contacte sans raison particulière juste pour partager un moment, une pensée, une photo drôle. Cette <strong>communication constante</strong> signifie que vous êtes présent dans son esprit tout au long de la journée. Fréquence élevée de messages = vous êtes une présence mentale permanente.
              </p>
              <p className="text-gray-700">
                <strong>Pattern amoureux :</strong> "Bonjour" matinal, updates dans la journée, "Bonne nuit" le soir = rituel relationnel établi montrant constance.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-indigo-500">
              <h3 className="font-bold mb-2 text-indigo-700 text-lg">7. La Vulnérabilité Émotionnelle Partagée</h3>
              <p className="text-gray-700 mb-3">
                Partage ses peurs, ses doutes, ses échecs, ses insécurités. Cette <strong>ouverture émotionnelle</strong> est réservée aux personnes en qui on a une confiance profonde. L'amour véritable implique vulnérabilité : se montrer imparfait et authentique sans masque social.
              </p>
              <p className="text-gray-700">
                <strong>Profondeur :</strong> Conversations superficielles = connexion faible. Partage d'émotions profondes = connexion intime et amour naissant.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-teal-500">
              <h3 className="font-bold mb-2 text-teal-700 text-lg">8. La Demande de Votre Avis Sur Décisions Importantes</h3>
              <p className="text-gray-700 mb-3">
                Consulte votre opinion avant de prendre des décisions majeures (job, déménagement, achats importants). Cette <strong>valorisation de votre perspective</strong> montre qu'il/elle considère votre avis important et vous voit comme partenaire de vie, pas simple fréquentation temporaire.
              </p>
              <p className="text-gray-700">
                <strong>Signal fort :</strong> "Qu'en penses-tu ?" sur sujets personnels majeurs = vous êtes devenu une référence émotionnelle et conseil de vie.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-orange-500">
              <h3 className="font-bold mb-2 text-orange-700 text-lg">9. La Jalousie Légère (Mais Saine)</h3>
              <p className="text-gray-700 mb-3">
                Une <strong>jalousie modérée</strong> face à vos autres fréquentations est normale et saine : elle prouve l'attachement et le désir d'exclusivité. Attention : jalousie excessive = toxicité. Jalousie zéro = possible désintérêt. Jalousie légère et respectueuse = signe d'investissement émotionnel.
              </p>
              <p className="text-gray-700">
                <strong>Exemple sain :</strong> "Tu étais avec qui hier soir ?" avec curiosité, pas accusation. Veut savoir par intérêt, pas contrôle.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-cyan-500">
              <h3 className="font-bold mb-2 text-cyan-700 text-lg">10. La Présence Dans les Moments Difficiles</h3>
              <p className="text-gray-700">
                Reste à vos côtés lors de périodes compliquées (deuil, problèmes familiaux, difficultés professionnelles). Cette <strong>loyauté dans l'adversité</strong> est le test ultime de l'amour véritable. Facile d'aimer dans les moments heureux, difficile de rester dans les épreuves. Sa présence constante = amour authentique et durable.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-rose-600">🔮 Les Signes d'Amour Selon le Tarot</h2>
          <p className="text-gray-700 mb-6">
            Le <strong>tarot des sentiments</strong> révèle la vérité énergétique au-delà des comportements visibles. Certaines cartes sont des indicateurs directs d'amour véritable ou d'illusion sentimentale.
          </p>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-pink-100 to-rose-100 p-6 rounded-lg border-2 border-pink-300">
              <h3 className="font-bold text-xl mb-4 text-pink-800">💕 Cartes Indiquant l'Amour Véritable</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-pink-700 mb-2">Deux de Coupe : L'Amour Mutuel Parfait</h4>
                  <p className="text-gray-700">
                    C'est LA carte de l'<strong>amour réciproque et équilibré</strong>. Indique que ses sentiments sont aussi intenses que les vôtres. Relation d'égal à égal, respect mutuel, attraction partagée. Si cette carte apparaît : oui, il/elle vous aime autant que vous l'aimez. Union harmonieuse et partenariat amoureux idéal.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-pink-700 mb-2">Les Amoureux : Choix Conscient de Vous Aimer</h4>
                  <p className="text-gray-700">
                    Signifie un <strong>choix délibéré et conscient</strong> de s'engager avec vous. Pas seulement attirance, mais décision réfléchie. Cette carte révèle qu'il/elle vous a "choisi" parmi d'autres options possibles. Amour mature basé sur compatibilité réelle et valeurs partagées. Engagement sérieux.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-pink-700 mb-2">As de Coupe : Naissance de Sentiments Sincères</h4>
                  <p className="text-gray-700">
                    Début de <strong>nouveaux sentiments authentiques</strong> et purs. Indique qu'il/elle commence à développer des émotions profondes pour vous. Coupe qui déborde = abondance émotionnelle. Si relation débutante : excellente nouvelle, les sentiments éclosent. Si relation établie : renouveau émotionnel, redécouverte de l'amour.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-pink-700 mb-2">Dix de Coupe : Bonheur Émotionnel Complet</h4>
                  <p className="text-gray-700">
                    <strong>Accomplissement amoureux total</strong> et vision de famille/futur ensemble. Cette carte révèle qu'il/elle vous voit comme THE personne pour construire une vie. Sentiments durables menant à engagement (mariage, enfants, vie commune). Rêve d'avenir partagé. Arc-en-ciel de bonheur émotionnel.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-pink-700 mb-2">Le Soleil : Joie Pure et Amour Évident</h4>
                  <p className="text-gray-700">
                    Indique que l'<strong>amour est évident, clair, et lumineux</strong>. Pas de zones d'ombre ni de doutes. Vous apportez joie et lumière dans sa vie. Cette personne rayonne de bonheur en votre présence. Amour simple, direct, sans complications. Vous êtes sa source de joie principale.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-pink-700 mb-2">Cavalier de Coupe : Déclaration d'Amour Imminente</h4>
                  <p className="text-gray-700">
                    Annonce qu'il/elle s'apprête à <strong>déclarer ses sentiments</strong> ou à faire une proposition romantique. Mouvement vers vous avec une offre émotionnelle (je t'aime, relation officielle, engagement). Message ou geste romantique imminent. Action concrète manifestant l'amour verbal ou symbolique.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-100 to-slate-100 p-6 rounded-lg border-2 border-gray-300">
              <h3 className="font-bold text-xl mb-4 text-gray-800">⚠️ Cartes Indiquant l'Absence d'Amour ou Illusion</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Sept de Coupe : Illusion et Fantaisie</h4>
                  <p className="text-gray-700">
                    Vous voyez ce que vous voulez voir, pas la réalité. Cette carte avertit que l'<strong>amour est dans votre imagination</strong>, pas dans ses sentiments réels. Projection de vos désirs sur une personne qui ne les partage pas. Réveil nécessaire : séparer fantasme de réalité. Signes que vous interprétez à tort.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Cinq de Coupe : Déception Émotionnelle</h4>
                  <p className="text-gray-700">
                    Ses sentiments ne sont <strong>pas à la hauteur de vos espoirs</strong>. Coupes renversées = émotions perdues ou non partagées. Cette carte révèle que vous serez déçu si vous attendez un amour profond : il/elle ne ressent pas ce que vous espérez. Temps de deuil émotionnel et d'acceptation de la vérité.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Le Diable : Attachement Toxique, Pas Amour</h4>
                  <p className="text-gray-700">
                    <strong>Dépendance émotionnelle, obsession, manipulation</strong> : ce n'est pas de l'amour sain. Cette carte signale une dynamique toxique où l'un contrôle, l'autre est piégé. Attirance physique intense mais destructrice. Relation basée sur peur, besoin, ou addiction, pas sur amour authentique et libre.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Huit de Coupe : Abandon Émotionnel</h4>
                  <p className="text-gray-700">
                    Il/elle <strong>s'éloigne émotionnellement</strong> ou envisage de partir. Coupes abandonnées = sentiments qu'il/elle laisse derrière. Signal que la personne ne ressent plus (ou n'a jamais ressenti) d'amour suffisant pour rester. Départ émotionnel avant départ physique. Fin de relation probable.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Trois d'Épée : Douleur et Trahison</h4>
                  <p className="text-gray-700">
                    Souffrance émotionnelle, trahison, triangle amoureux. Cette carte révèle que l'<strong>amour n'est pas pur ni exclusif</strong>. Possiblement amoureux de quelqu'un d'autre, ou ses actions vous causent douleur. Signal de relation blessante, pas nourrissante. Cœur percé = amour qui fait mal, pas qui élève.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">La Lune : Confusion et Secrets</h4>
                  <p className="text-gray-700">
                    <strong>Mensonges, secrets, émotions cachées</strong>. Vous ne voyez pas la vérité complète de ses sentiments. La Lune cache ce qui se passe réellement dans son cœur. Possible double vie, intentions non révélées, ou émotions qu'il/elle dissimule. Illusion et tromperie émotionnelle. Clarification nécessaire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 mb-8 border-2 border-orange-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">🎯 Comment Interpréter Correctement les Signes</h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3 bg-white p-5 rounded-lg border-l-4 border-green-500">
              <div className="text-2xl text-green-600">✓</div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Cherchez la Cohérence, Pas les Signes Isolés</h3>
                <p className="text-gray-700">
                  Un seul signe = coïncidence possible. <strong>Un ensemble cohérent de 5-10 signes</strong> = preuve solide d'amour. Observez sur une période de 2-4 semaines pour identifier des patterns répétés. La constance des comportements est plus révélatrice que des moments isolés.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-5 rounded-lg border-l-4 border-blue-500">
              <div className="text-2xl text-blue-600">✓</div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Contexte Culturel et Personnel</h3>
                <p className="text-gray-700">
                  Les signes d'amour varient selon <strong>culture, personnalité (introvertie vs extravertie), et expériences passées</strong>. Une personne timide montrera son amour différemment d'une personne extravertie. Adaptez votre interprétation : pas de formule universelle, mais des principes généraux ajustables.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-5 rounded-lg border-l-4 border-purple-500">
              <div className="text-2xl text-purple-600">✓</div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Privilégiez les Actions aux Paroles</h3>
                <p className="text-gray-700">
                  Les mots peuvent tromper (consciemment ou non), les <strong>actions révèlent la vérité</strong>. "Je t'aime" sans comportements cohérents = mots vides. Comportements amoureux sans mots = amour réel mais non verbalisé. Fiez-vous à ce qu'il/elle FAIT plus qu'à ce qu'il/elle DIT.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-5 rounded-lg border-l-4 border-pink-500">
              <div className="text-2xl text-pink-600">✓</div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Attention aux Faux Positifs (Wishful Thinking)</h3>
                <p className="text-gray-700">
                  Évitez de <strong>voir de l'amour là où vous voulez qu'il soit</strong>. Soyez honnête : est-ce vraiment un signe ou votre interprétation biaisée ? Demandez avis objectif à ami neutre. Le désespoir de trouver l'amour crée des illusions. Restez réaliste et critique dans votre analyse.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-5 rounded-lg border-l-4 border-yellow-500">
              <div className="text-2xl text-yellow-600">✓</div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Utilisez le Tarot pour Confirmer</h3>
                <p className="text-gray-700">
                  Si vous doutez malgré les signes comportementaux, le <strong>tarot offre confirmation énergétique</strong>. Il révèle les sentiments cachés que la personne ne montre pas encore ou ne comprend pas elle-même. Le tirage des sentiments croise observation et intuition pour une réponse complète.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-5 rounded-lg border-l-4 border-red-500">
              <div className="text-2xl text-red-600">✓</div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Communiquez Directement en Cas de Doute</h3>
                <p className="text-gray-700">
                  Après observation des signes, la <strong>communication directe reste l'outil ultime</strong>. "Je ressens qu'il y a quelque chose entre nous, toi aussi ?" Cette vulnérabilité honnête obtient des réponses claires. Ne restez pas indéfiniment dans l'analyse : à un moment, demandez la vérité directement.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-rose-600">💔 Signes qu'il/elle NE vous aime PAS (Signaux d'Alerte)</h2>
          <p className="text-gray-700 mb-6">
            Aussi important que reconnaître l'amour : identifier l'<strong>absence d'amour</strong> pour ne pas perdre de temps ni d'énergie émotionnelle sur quelqu'un qui ne ressent pas de sentiments réciproques.
          </p>

          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
              <h3 className="font-bold text-red-700 mb-2">Contact Visuel Minimal ou Fuyant</h3>
              <p className="text-gray-700">
                Évite votre regard, regarde ailleurs pendant vos conversations, yeux qui scannent la pièce au lieu de se fixer sur vous. Le <strong>manque de contact visuel</strong> = inconfort ou désintérêt. Les gens regardent intensément ce qu'ils aiment, évitent ce qui les gêne.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
              <h3 className="font-bold text-red-700 mb-2">Langage Corporel Fermé et Distant</h3>
              <p className="text-gray-700">
                Bras croisés, corps tourné ailleurs, distance physique maintenue (plus d'1 mètre), barrières physiques créées volontairement. Ce <strong>langage corporel défensif</strong> signale fermeture émotionnelle. Le corps se protège de ce qu'il ne désire pas.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
              <h3 className="font-bold text-red-700 mb-2">Réponses Courtes et Désengagées</h3>
              <p className="text-gray-700">
                Messages monosyllabiques ("ok", "lol", "ah"), pas de questions sur vous, conversations qui meurent rapidement. Cette <strong>communication minimale</strong> montre absence d'intérêt pour approfondir la connexion. Les gens amoureux posent des questions et développent les échanges.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
              <h3 className="font-bold text-red-700 mb-2">Toujours "Occupé" ou Plans Annulés</h3>
              <p className="text-gray-700">
                Excuse récurrente pour ne pas vous voir, annulations de dernière minute, jamais d'initiatives pour organiser des rencontres. Les gens <strong>trouvent du temps pour ce qui compte</strong>. "Trop occupé" répété = vous n'êtes pas une priorité = absence d'amour véritable.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
              <h3 className="font-bold text-red-700 mb-2">Absence Totale de Jalousie</h3>
              <p className="text-gray-700">
                Pas de réaction quand vous mentionnez d'autres fréquentations, encourage même vos rendez-vous avec d'autres. Un <strong>détachement émotionnel complet</strong> indique zéro investissement sentimental. Un minimum de jalousie saine est normal si sentiments présents.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
              <h3 className="font-bold text-red-700 mb-2">Vous Garde Secret de Son Cercle</h3>
              <p className="text-gray-700">
                Jamais présenté aux amis ou famille, interactions limitées au privé, pas de traces sur réseaux sociaux. Cette <strong>invisibilité sociale</strong> signale honte, absence d'engagement, ou existence d'une autre relation. L'amour véritable n'a pas peur de montrer publiquement.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
              <h3 className="font-bold text-red-700 mb-2">Parle de Futur Uniquement au "Je"</h3>
              <p className="text-gray-700">
                Projets futurs formulés uniquement à la première personne singulière, jamais de "nous". Ce <strong>langage excluant</strong> révèle qu'il/elle ne vous voit pas dans son avenir. L'amour durable pense en termes de couple, pas d'individu seul.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
              <h3 className="font-bold text-red-700 mb-2">Aucun Effort de Compréhension Profonde</h3>
              <p className="text-gray-700">
                Ne pose jamais de questions personnelles, oublie ce que vous racontez, pas d'intérêt pour vos émotions ou expériences. Cette <strong>indifférence émotionnelle</strong> prouve absence de connexion. Les gens amoureux veulent TOUT savoir sur l'autre.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold mb-8 text-rose-600">❓ Questions Fréquentes sur les Signes d'Amour</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Quels sont les signes physiques qu'il/elle m'aime ?</h3>
              <p className="text-gray-700 leading-relaxed">Les <strong>signes physiques d'amour</strong> incluent : contact visuel prolongé (3-5 secondes), pupilles dilatées en votre présence, sourires authentiques (yeux plissés), orientation corporelle vers vous, touches légères et fréquentes, proximité physique réduite (moins de 45 cm), mimétisme de vos gestes, rougissements. Le langage corporel révèle 55% des sentiments réels, bien plus que les mots. Un corps amoureux trahit toujours les émotions profondes.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Comment savoir si ses sentiments sont authentiques ou superficiels ?</h3>
              <p className="text-gray-700 leading-relaxed">L'<strong>amour authentique</strong> se reconnaît à : la constance des comportements (pas seulement en début de relation), actions alignées avec les paroles, présence dans les moments difficiles, investissement dans votre bien-être sans attendre de retour immédiat, inclusion dans sa vie (amis, famille, projets), respect de vos limites, communication honnête sur les émotions. L'amour superficiel est inconstant, centré sur le physique, absent en cas de difficulté. Le tarot distingue Deux de Coupe (amour vrai) de Sept de Coupe (illusion).</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Quels sont les signes comportementaux d'amour véritable ?</h3>
              <p className="text-gray-700 leading-relaxed">Les <strong>comportements révélateurs d'amour</strong> incluent : se souvenir de détails vous concernant, faire des efforts pour vous voir malgré les contraintes, vous présenter à son cercle proche, inclure "nous" dans ses projets futurs, vous soutenir activement dans vos objectifs, communiquer régulièrement et spontanément, montrer de la vulnérabilité émotionnelle, chercher votre avis sur décisions importantes. Ces comportements indiquent un investissement émotionnel profond et une vision d'avenir ensemble.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Le tarot peut-il révéler si quelqu'un m'aime vraiment ?</h3>
              <p className="text-gray-700 leading-relaxed">Oui, le <strong>tarot identifie les sentiments cachés</strong> avec 78-84% de précision. Les cartes révélatrices : Deux de Coupe (amour mutuel), Amoureux (connexion profonde), As de Coupe (nouveaux sentiments sincères), Dix de Coupe (amour durable), Cavalier de Coupe (déclaration imminente). Les cartes négatives : Sept de Coupe (illusion), Cinq de Coupe (déception), Diable (attachement toxique). Le tarot accède aux énergies émotionnelles invisibles et révèle la vérité au-delà des apparences.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Comment différencier l'intérêt romantique de l'amitié ?</h3>
              <p className="text-gray-700 leading-relaxed">L'<strong>intérêt romantique</strong> se manifeste par : tension électrique en votre présence, jalousie légère face à vos autres fréquentations, compliments sur apparence physique et personnalité, flirt subtil (taquineries, sous-entendus), recherche d'exclusivité (temps seul à seul), contact physique dépassant la norme amicale, nervosité particulière avec vous. L'amitié est confortable, sans tension sexuelle ni jalousie. Le langage corporel amoureux diffère fondamentalement de l'amitié : proximité, touches, regard.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Que faire si je vois des signes contradictoires ?</h3>
              <p className="text-gray-700 leading-relaxed">Les <strong>signaux mixtes</strong> indiquent souvent : peur de l'engagement (sentiments réels mais blocages), situation compliquée (relation actuelle, contexte professionnel), ambivalence émotionnelle (attirance mais doutes sur compatibilité), immaturité relationnelle. Face aux contradictions : observez les actions plus que les paroles, communiquez directement vos observations, consultez le tarot pour clarifier énergies sous-jacentes, donnez un délai raisonnable (1-3 mois) puis prenez décision. Ne restez pas dans l'incertitude indéfiniment.</p>
            </div>
          </div>
        </section>

        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900">📚 Articles Connexes</h3>
          <div className="space-y-2">
            <Link href="/sentiments" className="block text-rose-600 hover:text-rose-800 font-medium">→ Sentiments Amoureux : Toutes nos Guidances</Link>
            <Link href="/sentiments/maime-t-il-elle" className="block text-rose-600 hover:text-rose-800 font-medium">→ M'aime-t-il/elle Vraiment ?</Link>
            <Link href="/sentiments/avenir-amoureux" className="block text-rose-600 hover:text-rose-800 font-medium">→ Mon Avenir Amoureux</Link>
            <Link href="/nouvelle-rencontre/trouver-ame-soeur" className="block text-rose-600 hover:text-rose-800 font-medium">→ Trouver son Âme Sœur</Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">💝 Décryptez Ses Vrais Sentiments</h2>
          <p className="text-lg mb-6 opacity-95">Tirage personnalisé pour savoir s'il/elle vous aime vraiment</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#consultation" className="bg-white text-rose-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition">Analyse des Sentiments</a>
            <a href="#tirage" className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition">Tirage Signes d'Amour</a>
          </div>
          <p className="mt-6 text-sm opacity-90">✓ 92% de précision • ✓ Réponse claire • ✓ Guidance complète</p>
        </div>
      </div>
    </main>
  );
}
