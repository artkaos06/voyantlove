import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | VoyantLove.fr',
  description: 'Politique de confidentialité et protection des données personnelles sur VoyantLove.fr.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://voyantlove.fr/confidentialite' },
};

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Retour à l'accueil</Link>
          <h1 className="text-4xl font-bold mb-4">Politique de Confidentialité</h1>
          <p className="text-lg opacity-90">Protection de vos données personnelles - Conformité RGPD</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-md p-8 space-y-8">

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p className="text-purple-900">
              <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Responsable du Traitement</h2>
            <p className="text-gray-700 mb-2"><strong>Responsable :</strong> Cogitor</p>
            <p className="text-gray-700 mb-2"><strong>Site web :</strong> VoyantLove.fr</p>
            <p className="text-gray-700 mb-2"><strong>Email :</strong> contact@voyantlove.fr</p>
            <p className="text-gray-700 mb-4"><strong>Adresse :</strong> Kungla, Tallinn, 10430 Estonia</p>
            <p className="text-gray-700">
              Cogitor s'engage à protéger la confidentialité de vos données personnelles conformément au Règlement Général
              sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Données Collectées</h2>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">2.1 Données de Navigation</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Adresse IP</li>
              <li>Type de navigateur</li>
              <li>Pages visitées</li>
              <li>Durée de visite</li>
              <li>Données de géolocalisation approximative (pays, ville)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">2.2 Données de Contact (si formulaire)</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone (optionnel)</li>
              <li>Message ou demande</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">2.3 Données de Consultation (si applicable)</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Informations sur votre situation amoureuse (strictement confidentielles)</li>
              <li>Historique des consultations</li>
              <li>Notes de séance (accessibles uniquement par le voyant et vous-même)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Finalités du Traitement</h2>
            <p className="text-gray-700 mb-4">Nous collectons vos données uniquement pour les finalités suivantes :</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Amélioration du site :</strong> Analyser la navigation pour améliorer l'expérience utilisateur</li>
              <li><strong>Réponse aux demandes :</strong> Traiter vos demandes de contact ou d'information</li>
              <li><strong>Prestations de voyance :</strong> Réaliser les consultations demandées</li>
              <li><strong>Suivi client :</strong> Assurer le suivi de votre dossier et historique de consultations</li>
              <li><strong>Communication :</strong> Vous envoyer des informations relatives à nos services (avec votre consentement)</li>
              <li><strong>Obligations légales :</strong> Respecter nos obligations comptables et fiscales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Durée de Conservation</h2>
            <div className="space-y-3">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-1">Données de navigation</p>
                <p className="text-gray-700">Conservées pendant 13 mois maximum (cookies analytiques)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-1">Données de contact</p>
                <p className="text-gray-700">Conservées pendant 3 ans à compter du dernier contact</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-1">Données de consultation</p>
                <p className="text-gray-700">Conservées pendant 5 ans après la dernière consultation (obligations professionnelles)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-1">Données comptables</p>
                <p className="text-gray-700">Conservées pendant 10 ans (obligations légales)</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Destinataires des Données</h2>
            <p className="text-gray-700 mb-4">Vos données personnelles sont accessibles uniquement par :</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Personnel autorisé :</strong> Voyants et personnel administratif habilité (accès strictement limité)</li>
              <li><strong>Prestataires techniques :</strong> Hébergeur (Vercel), processeur de paiement (si applicable)</li>
              <li><strong>Autorités légales :</strong> Sur demande légale uniquement (réquisition judiciaire)</li>
            </ul>
            <p className="text-gray-700 mt-4">
              <strong>⚠️ Confidentialité absolue :</strong> Aucune donnée relative aux consultations n'est partagée avec des tiers à des fins commerciales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Vos Droits (RGPD)</h2>
            <p className="text-gray-700 mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">→</span>
                <div>
                  <p className="font-semibold text-gray-900">Droit d'accès</p>
                  <p className="text-gray-700 text-sm">Obtenir une copie de toutes vos données personnelles</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">→</span>
                <div>
                  <p className="font-semibold text-gray-900">Droit de rectification</p>
                  <p className="text-gray-700 text-sm">Corriger des données inexactes ou incomplètes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">→</span>
                <div>
                  <p className="font-semibold text-gray-900">Droit à l'effacement</p>
                  <p className="text-gray-700 text-sm">Supprimer vos données (sous réserve d'obligations légales)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">→</span>
                <div>
                  <p className="font-semibold text-gray-900">Droit d'opposition</p>
                  <p className="text-gray-700 text-sm">Vous opposer au traitement de vos données</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">→</span>
                <div>
                  <p className="font-semibold text-gray-900">Droit à la limitation</p>
                  <p className="text-gray-700 text-sm">Limiter le traitement de vos données dans certaines situations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">→</span>
                <div>
                  <p className="font-semibold text-gray-900">Droit à la portabilité</p>
                  <p className="text-gray-700 text-sm">Récupérer vos données dans un format structuré</p>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              <strong>Exercer vos droits :</strong> Envoyez un email à <a href="mailto:contact@voyantlove.fr" className="text-purple-600 hover:underline">contact@voyantlove.fr</a> avec une pièce d'identité.
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Réclamation :</strong> Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" className="text-purple-600 hover:underline" target="_blank" rel="noopener">www.cnil.fr</a>).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Sécurité des Données</h2>
            <p className="text-gray-700 mb-4">Nous mettons en œuvre les mesures techniques et organisationnelles suivantes :</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Chiffrement HTTPS :</strong> Toutes les communications sont chiffrées</li>
              <li><strong>Hébergement sécurisé :</strong> Serveurs sécurisés avec sauvegardes régulières</li>
              <li><strong>Accès restreint :</strong> Accès aux données limité au personnel autorisé uniquement</li>
              <li><strong>Sauvegardes régulières :</strong> Protection contre la perte de données</li>
              <li><strong>Surveillance :</strong> Détection des accès non autorisés</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Cookies</h2>
            <p className="text-gray-700 mb-4">Ce site utilise les cookies suivants :</p>
            <div className="space-y-3">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-900 mb-1">Cookies techniques (obligatoires)</p>
                <p className="text-gray-700 text-sm">Nécessaires au fonctionnement du site. Pas besoin de consentement.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-900 mb-1">Cookies analytiques (optionnels)</p>
                <p className="text-gray-700 text-sm">Analyse anonyme du trafic. Nécessitent votre consentement.</p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              Vous pouvez refuser les cookies analytiques via les paramètres de votre navigateur ou notre bandeau cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Transferts Internationaux</h2>
            <p className="text-gray-700">
              Nos prestataires (hébergement, paiement) peuvent être situés hors de l'Union Européenne. Dans ce cas, nous nous assurons
              que vos données bénéficient d'un niveau de protection adéquat via des clauses contractuelles types approuvées par la Commission Européenne.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Modifications de la Politique</h2>
            <p className="text-gray-700">
              Cette politique de confidentialité peut être modifiée pour refléter les évolutions réglementaires ou de nos pratiques.
              La date de dernière mise à jour est indiquée en haut de cette page. Nous vous encourageons à consulter régulièrement cette page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">11. Contact</h2>
            <p className="text-gray-700 mb-4">Pour toute question concernant la protection de vos données personnelles :</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Email :</strong> <a href="mailto:contact@voyantlove.fr" className="text-purple-600 hover:underline">contact@voyantlove.fr</a></li>
              <li><strong>Courrier :</strong> Cogitor, Kungla, Tallinn, 10430 Estonia</li>
            </ul>
          </section>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mt-8">
            <p className="text-sm text-purple-900">
              <strong>🔒 Engagement :</strong> VoyantLove.fr s'engage à traiter vos données personnelles avec le plus grand soin et dans
              le respect de la réglementation en vigueur. La confidentialité de vos consultations de voyance est notre priorité absolue.
            </p>
          </div>

        </div>

        <div className="text-center mt-8">
          <Link href="/" className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
