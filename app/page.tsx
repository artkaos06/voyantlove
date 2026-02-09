'use client';

import Link from 'next/link';
import { getOrganizationSchema, getWebSiteSchema } from '@/lib/schema';
import { trackAffiliateClick } from '@/lib/glyphex';
import VoyantRecommendations from '@/components/VoyantRecommendations';

export default function HomePage() {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();

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
              onClick={() => trackAffiliateClick('8864', 'homepage-hero-primary', 'Sibylle')}
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
              <div className="text-2xl font-bold text-brand-purple">4.8/5</div>
              <div className="text-sm text-gray-600">287 avis clients</div>
            </div>
            <div>
              <div className="text-4xl mb-2">✓</div>
              <div className="text-2xl font-bold text-brand-purple">65%</div>
              <div className="text-sm text-gray-600">Taux de retour</div>
            </div>
            <div>
              <div className="text-4xl mb-2">🔮</div>
              <div className="text-2xl font-bold text-brand-purple">15 ans</div>
              <div className="text-sm text-gray-600">D'expérience</div>
            </div>
            <div>
              <div className="text-4xl mb-2">🔒</div>
              <div className="text-2xl font-bold text-brand-purple">100%</div>
              <div className="text-sm text-gray-600">Confidentialité</div>
            </div>
          </div>
        </div>
      </section>

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

            {/* Call to Action / All Situations */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200 flex flex-col justify-center items-center text-center">
              <div className="text-4xl mb-3">🔮</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Plus de 20 Situations</h3>
              <p className="text-gray-600 text-sm mb-4">
                Découvrez toutes nos guidances spécialisées
              </p>
              <Link href="#situations" className="text-purple-600 font-semibold hover:text-purple-800">
                Parcourir →
              </Link>
            </div>
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
              onClick={() => trackAffiliateClick('8864', 'homepage-cta-primary', 'Sibylle')}
              className="bg-white text-brand-purple px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition"
            >
              Consulter un Voyant Maintenant
            </a>
            <a
              href="https://www.monsitevoyance.com/zoom_voyant.php?id=8062&partner=383&ref=homepage-cta-secondary"
              target="_blank"
              rel="noopener noreferrer sponsored"
              onClick={() => trackAffiliateClick('8062', 'homepage-cta-secondary', 'Kalinda')}
              className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-purple transition"
            >
              Tirage Tarot Personnalisé
            </a>
          </div>
          <p className="mt-6 text-sm opacity-80">
            ✓ Voyants vérifiés • ✓ Paiement sécurisé • ✓ Confidentialité garantie
          </p>
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
