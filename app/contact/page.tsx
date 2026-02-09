import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact | VoyantLove.fr',
  description: 'Contactez VoyantLove.fr pour toute question sur nos services de voyance amoureuse.',
  alternates: { canonical: 'https://voyantlove.fr/contact' },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Retour à l'accueil</Link>
          <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-lg opacity-90">Nous sommes là pour répondre à vos questions</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Informations de Contact</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Email</p>
                  <a href="mailto:contact@voyantlove.fr" className="text-purple-600 hover:underline">
                    contact@voyantlove.fr
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Réponse sous 24-48h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Téléphone</p>
                  <p className="text-gray-700">[Numéro à compléter]</p>
                  <p className="text-sm text-gray-600 mt-1">Lundi - Vendredi : 9h - 19h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏢</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Adresse</p>
                  <p className="text-gray-700">[Adresse à compléter]</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-purple-900">
                <strong>🔒 Confidentialité :</strong> Toutes vos communications sont strictement confidentielles et protégées conformément au RGPD.
              </p>
            </div>
          </div>

          {/* Contact Reasons */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Pourquoi nous contacter ?</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Réserver une consultation</p>
                  <p className="text-sm text-gray-600">Consultation personnalisée de voyance amoureuse</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Poser une question</p>
                  <p className="text-sm text-gray-600">Questions sur nos services ou méthodes</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Demande d'information</p>
                  <p className="text-sm text-gray-600">Tarifs, disponibilités, modalités</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Suivi de consultation</p>
                  <p className="text-sm text-gray-600">Questions après une séance de voyance</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Problème technique</p>
                  <p className="text-sm text-gray-600">Difficulté d'accès au site ou réservation</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Partenariats</p>
                  <p className="text-sm text-gray-600">Collaborations professionnelles</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Quick Access */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 mb-12 border-2 border-purple-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Questions Fréquentes</h2>
          <p className="text-gray-700 mb-6">
            Avant de nous contacter, consultez nos pages spécialisées qui répondent peut-être déjà à vos questions :
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/reconquete/reconquerir-son-ex" className="bg-white p-4 rounded-lg hover:shadow-md transition">
              <p className="font-semibold text-purple-600 mb-1">💜 Reconquérir son Ex</p>
              <p className="text-sm text-gray-600">Timing, étapes, signes de retour</p>
            </Link>
            <Link href="/sentiments/maime-t-il-elle" className="bg-white p-4 rounded-lg hover:shadow-md transition">
              <p className="font-semibold text-red-600 mb-1">💖 M'aime-t-il/elle ?</p>
              <p className="text-sm text-gray-600">Décrypter les vrais sentiments</p>
            </Link>
            <Link href="/rupture/oublier-son-ex" className="bg-white p-4 rounded-lg hover:shadow-md transition">
              <p className="font-semibold text-gray-700 mb-1">💔 Oublier son Ex</p>
              <p className="text-sm text-gray-600">Surmonter le chagrin d'amour</p>
            </Link>
            <Link href="/nouvelle-rencontre" className="bg-white p-4 rounded-lg hover:shadow-md transition">
              <p className="font-semibold text-cyan-600 mb-1">✨ Nouvelle Rencontre</p>
              <p className="text-sm text-gray-600">Trouver l'amour, timing idéal</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <div className="text-4xl mb-4">🔮</div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Prêt pour une Consultation ?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Obtenez une guidance personnalisée sur votre situation amoureuse avec nos voyants spécialisés.
            Première consultation disponible rapidement.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:contact@voyantlove.fr" className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
              Réserver par Email
            </a>
            <Link href="/" className="inline-block bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
              Retour à l'accueil
            </Link>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            ✓ Réponse rapide • ✓ 100% confidentiel • ✓ Sans engagement
          </p>
        </div>

      </div>
    </main>
  );
}
