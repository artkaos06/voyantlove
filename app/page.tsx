import type { Metadata } from 'next';
import Link from 'next/link';
import { getOrganizationSchema, getWebSiteSchema, getFAQSchema, getAuthorSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import TestimonialSection from '@/components/TestimonialSection';
import TrustBadges from '@/components/TrustBadges';

export const metadata: Metadata = {
  title: {
    absolute: 'VoyantLove — Voyant Amour & Voyance Amoureuse Spécialisée',
  },
  description: 'Voyance amoureuse spécialisée : reconquérir son ex, rencontrer l\'amour, décrypter les sentiments, surmonter une rupture. Tarot, clairvoyance et guidance personnalisée.',
  alternates: { canonical: 'https://voyantlove.fr/' },
};

export default function HomePage() {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();
  const authorSchema = getAuthorSchema();
  const faqSchema = getFAQSchema([
    {
      question: 'Qu\'est-ce que la voyance amoureuse et comment fonctionne-t-elle ?',
      answer: 'La voyance amoureuse est une forme de guidance spirituelle spécialisée dans les questions sentimentales. Le voyant utilise le tarot, la clairvoyance ou l\'astrologie pour analyser votre situation amoureuse : sentiments de l\'autre, compatibilité, timing des événements, et évolution de la relation. Contrairement aux idées reçues, la voyance ne prédit pas un futur figé mais révèle les énergies en jeu et les probabilités selon vos choix actuels. Un bon voyant vous donne des clés de compréhension pour prendre les meilleures décisions dans votre vie sentimentale.',
    },
    {
      question: 'La voyance amoureuse par tarot est-elle fiable ?',
      answer: 'La fiabilité du tarot amoureux dépend de l\'expérience et du don du voyant qui l\'interprète. Un tarologue expérimenté capte les énergies émotionnelles avec une grande sensibilité grâce à sa maîtrise des arcanes. Les 22 arcanes majeurs et 56 arcanes mineurs offrent une palette nuancée pour analyser les sentiments, les blocages et les évolutions possibles. L\'important est de consulter un voyant honnête qui vous donnera une réponse sincère, même difficile à entendre, plutôt que de faux espoirs.',
    },
    {
      question: 'Comment choisir un bon voyant spécialisé en amour ?',
      answer: 'Un bon voyant amoureux se reconnaît à plusieurs critères : il pose peu de questions et capte votre situation rapidement, il donne des détails précis plutôt que des généralités, il est honnête même quand la réponse est difficile, et il ne crée jamais de dépendance. Vérifiez les avis clients, l\'expérience (minimum 5 ans), et la spécialisation en questions sentimentales. Méfiez-vous des voyants qui promettent des retours garantis ou qui proposent des rituels payants supplémentaires. Un vrai professionnel vous guide avec bienveillance et respect de votre libre arbitre.',
    },
    {
      question: 'Quelles questions peut-on poser en voyance amoureuse ?',
      answer: 'En voyance amoureuse, vous pouvez poser toutes les questions liées à votre vie sentimentale : m\'aime-t-il/elle vraiment, va-t-il/elle revenir, quand vais-je rencontrer quelqu\'un, mon couple va-t-il surmonter cette crise, est-il/elle fidèle, quels sont ses vrais sentiments. Le tarot répond aussi aux questions de timing (quand), de lieu (où rencontrer), et de compatibilité. Les questions les plus précises donnent les meilleures réponses. Évitez les questions fermées comme « oui ou non » et préférez « que ressent-il/elle pour moi » pour obtenir une analyse complète et nuancée.',
    },
  ]);

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-purple to-brand-purple-dark text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            💜 VoyantLove
          </h1>
          <p className="text-2xl mb-4 opacity-95">
            Voyance Amoureuse Spécialisée
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Guidance et Tarot pour toutes vos questions sentimentales : reconquête, rencontre, compatibilité, avenir amoureux
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://www.monsitevoyance.com/zoom_voyant.php?id=8864&partner=383&ref=homepage-hero-primary"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="bg-white text-brand-purple px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition"
            >
              🔮 Consultation Voyance
            </a>
            <Link
              href="#situations"
              className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-purple transition"
            >
              Découvrir nos Guidances
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl mb-2">⭐</div>
              <div className="text-2xl font-bold text-brand-purple">Voyants Certifiés</div>
              <div className="text-sm text-gray-600">Sélectionnés pour leur expertise</div>
            </div>
            <div>
              <div className="text-4xl mb-2">💜</div>
              <div className="text-2xl font-bold text-brand-purple">Spécialistes Amour</div>
              <div className="text-sm text-gray-600">Dédiés aux questions sentimentales</div>
            </div>
            <div>
              <div className="text-4xl mb-2">🔮</div>
              <div className="text-2xl font-bold text-brand-purple">Expérimentés</div>
              <div className="text-sm text-gray-600">Des années de pratique</div>
            </div>
            <div>
              <div className="text-4xl mb-2">🔒</div>
              <div className="text-2xl font-bold text-brand-purple">Confidentiel</div>
              <div className="text-sm text-gray-600">Consultations 100% privées</div>
            </div>
          </div>
        </div>
      </section>

      {/* E-E-A-T Signal */}
      <div className="max-w-6xl mx-auto px-4 pt-8">
        <EEATSignal colorScheme="purple" method="Tarot, clairvoyance et astrologie amoureuse" />
      </div>

      {/* Main Situations */}
      <section id="situations" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Nos Consultations Spécialisées
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Chaque situation amoureuse est unique. Découvrez nos guidances spécialisées adaptées à votre problématique.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Network 1: Reconquête */}
            <Link href="/reconquete" className="group">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-purple-600">
                <div className="text-4xl mb-4">💜</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition">
                  Reconquête Amoureuse
                </h3>
                <p className="text-gray-600 mb-4">
                  Reconquérir votre ex, timing idéal, étapes de reconquête, signes de retour selon le tarot.
                </p>
                <div className="text-purple-600 font-semibold">
                  Découvrir →
                </div>
              </div>
            </Link>

            {/* Network 2: Rupture */}
            <Link href="/rupture" className="group">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-gray-700">
                <div className="text-4xl mb-4">💔</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gray-700 transition">
                  Rupture & Guérison
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprendre les raisons, surmonter le chagrin et oublier son ex selon le tarot.
                </p>
                <div className="text-gray-700 font-semibold">
                  Explorer →
                </div>
              </div>
            </Link>

            {/* Network 3: Nouvelle Rencontre */}
            <Link href="/nouvelle-rencontre" className="group">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-cyan-500">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-500 transition">
                  Nouvelle Rencontre
                </h3>
                <p className="text-gray-600 mb-4">
                  Trouver l'amour, quand rencontrer, reconnaître votre âme sœur selon le tarot.
                </p>
                <div className="text-cyan-500 font-semibold">
                  Découvrir →
                </div>
              </div>
            </Link>

            {/* Network 4: Sentiments */}
            <Link href="/sentiments" className="group">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-red-500">
                <div className="text-4xl mb-4">💖</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition">
                  Sentiments & Avenir
                </h3>
                <p className="text-gray-600 mb-4">
                  Décrypter sentiments, signes d'amour, prédictions avenir amoureux selon le tarot.
                </p>
                <div className="text-red-500 font-semibold">
                  Analyser →
                </div>
              </div>
            </Link>

            {/* Network 5: Crise de Couple */}
            <Link href="/crise-couple" className="group">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-orange-500">
                <div className="text-4xl mb-4">⚠️</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition">
                  Crise de Couple
                </h3>
                <p className="text-gray-600 mb-4">
                  Infidélité, jalousie, communication : solutions pour surmonter les crises selon le tarot.
                </p>
                <div className="text-orange-500 font-semibold">
                  Solutions →
                </div>
              </div>
            </Link>

            {/* Network 6: Méthodes de Voyance */}
            <Link href="/methodes-voyance" className="group">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-indigo-500">
                <div className="text-4xl mb-4">🔮</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-500 transition">
                  Méthodes de Voyance
                </h3>
                <p className="text-gray-600 mb-4">
                  Tarot, oracle, astrologie : découvrez les méthodes de voyance amoureuse et leurs spécificités.
                </p>
                <div className="text-indigo-500 font-semibold">
                  Explorer →
                </div>
              </div>
            </Link>

            {/* Network 7: Voyance Gratuite Amour */}
            <Link href="/voyance-gratuite-amour" className="group">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-green-500">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-green-500 transition">
                  Voyance Gratuite Amour
                </h3>
                <p className="text-gray-600 mb-4">
                  Tarot gratuit, oracle et horoscope amour : tirages et guidance sentimentale sans engagement.
                </p>
                <div className="text-green-500 font-semibold">
                  Découvrir →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="about" className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Comment fonctionne VoyantLove ?
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-purple text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Choisissez votre situation</h3>
                <p className="text-gray-600">
                  Sélectionnez la problématique amoureuse qui correspond à votre vécu : reconquête, rencontre, doute, crise...
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-purple text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Découvrez la guidance tarot</h3>
                <p className="text-gray-600">
                  Chaque page contient une analyse complète : timing idéal, étapes à suivre, erreurs à éviter, selon les cartes.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-purple text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Consultez un voyant si besoin</h3>
                <p className="text-gray-600">
                  Pour une guidance 100% personnalisée, réservez une consultation privée avec nos voyants spécialisés en amour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50">
        <TestimonialSection
          title="Ce Que Disent Nos Clients"
          subtitle="Des milliers de personnes ont déjà trouvé leurs réponses grâce à nos voyants experts"
          limit={6}
          showVoyantName={true}
        />
      </section>

      {/* Featured Voyants Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <VoyantRecommendations
            topic="sentiments"
            title="🔮 Nos Voyants Experts en Amour"
            subtitle="Voyants spécialisés en guidance amoureuse avec des milliers de consultations réussies. Disponibles maintenant pour vous accompagner."
            limit={3}
            showOnlineFirst={true}
            source="homepage-featured"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Questions Fréquentes sur la Voyance Amoureuse</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Qu'est-ce que la voyance amoureuse et comment fonctionne-t-elle ?</h3>
              <p className="text-gray-700 leading-relaxed">La <strong>voyance amoureuse</strong> est une forme de guidance spirituelle spécialisée dans les questions sentimentales. Le voyant utilise le <strong>tarot</strong>, la <strong>clairvoyance</strong> ou l'<strong>astrologie</strong> pour analyser votre situation amoureuse : sentiments de l'autre, compatibilité, timing des événements, et évolution de la relation. Contrairement aux idées reçues, la voyance ne prédit pas un futur figé mais révèle les <strong>énergies en jeu</strong> et les probabilités selon vos choix actuels. Un bon voyant vous donne des clés de compréhension pour prendre les meilleures décisions dans votre <strong>vie sentimentale</strong>.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">La voyance amoureuse par tarot est-elle fiable ?</h3>
              <p className="text-gray-700 leading-relaxed">La fiabilité du <strong>tarot amoureux</strong> dépend de l'expérience et du don du voyant qui l'interprète. Un <strong>tarologue expérimenté</strong> capte les <strong>énergies émotionnelles</strong> avec une grande sensibilité grâce à sa maîtrise des arcanes. Les 22 arcanes majeurs et 56 arcanes mineurs offrent une palette nuancée pour analyser les sentiments, les blocages et les évolutions possibles. L'important est de consulter un <strong>voyant honnête</strong> qui vous donnera une réponse sincère, même difficile à entendre, plutôt que de faux espoirs.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comment choisir un bon voyant spécialisé en amour ?</h3>
              <p className="text-gray-700 leading-relaxed">Un bon <strong>voyant amoureux</strong> se reconnaît à plusieurs critères : il pose peu de questions et capte votre situation rapidement, il donne des détails précis plutôt que des généralités, il est honnête même quand la réponse est difficile, et il ne crée jamais de dépendance. Vérifiez les <strong>avis clients</strong>, l'expérience (minimum 5 ans), et la <strong>spécialisation en questions sentimentales</strong>. Méfiez-vous des voyants qui promettent des retours garantis ou qui proposent des rituels payants supplémentaires. Un vrai professionnel vous guide avec <strong>bienveillance</strong> et respect de votre libre arbitre.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quelles questions peut-on poser en voyance amoureuse ?</h3>
              <p className="text-gray-700 leading-relaxed">En <strong>voyance amoureuse</strong>, vous pouvez poser toutes les questions liées à votre vie sentimentale : <strong>m'aime-t-il/elle</strong> vraiment, <strong>va-t-il/elle revenir</strong>, quand vais-je <strong>rencontrer</strong> quelqu'un, mon couple va-t-il surmonter cette crise, est-il/elle fidèle, quels sont ses vrais sentiments. Le tarot répond aussi aux questions de timing (quand), de lieu (où rencontrer), et de <strong>compatibilité</strong>. Les questions les plus précises donnent les meilleures réponses. Évitez les questions fermées et préférez « que ressent-il/elle pour moi » pour obtenir une <strong>analyse complète</strong> et nuancée.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-gradient-to-r from-brand-purple to-brand-purple-dark text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Besoin d'une Guidance Personnalisée ?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Consultez un voyant spécialisé en amour pour une analyse 100% adaptée à votre situation unique
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://www.monsitevoyance.com/zoom_voyant.php?id=8864&partner=383&ref=homepage-cta-primary"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="bg-white text-brand-purple px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition"
            >
              Consulter un Voyant Maintenant
            </a>
            <a
              href="https://www.monsitevoyance.com/zoom_voyant.php?id=8062&partner=383&ref=homepage-cta-secondary"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-purple transition"
            >
              Tirage Tarot Personnalisé
            </a>
          </div>
          <div className="mt-6">
            <TrustBadges variant="compact" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">© 2026 VoyantLove.fr - Voyance Amoureuse Spécialisée</p>
          <div className="flex gap-6 justify-center text-sm text-gray-400">
            <Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-white">Confidentialité</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
