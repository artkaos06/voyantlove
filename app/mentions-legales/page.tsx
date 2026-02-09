import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentions Légales | VoyantLove.fr',
  description: 'Mentions légales du site VoyantLove.fr - Voyance amoureuse spécialisée.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://voyantlove.fr/mentions-legales' },
};

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Retour à l'accueil</Link>
          <h1 className="text-4xl font-bold mb-4">Mentions Légales</h1>
          <p className="text-lg opacity-90">Informations légales du site VoyantLove.fr</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-md p-8 space-y-8">

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Éditeur du Site</h2>
            <p className="text-gray-700 mb-2"><strong>Nom du site :</strong> VoyantLove.fr</p>
            <p className="text-gray-700 mb-2"><strong>Raison sociale :</strong> [À compléter]</p>
            <p className="text-gray-700 mb-2"><strong>SIRET :</strong> [À compléter]</p>
            <p className="text-gray-700 mb-2"><strong>Adresse :</strong> [À compléter]</p>
            <p className="text-gray-700 mb-2"><strong>Email :</strong> contact@voyantlove.fr</p>
            <p className="text-gray-700 mb-2"><strong>Téléphone :</strong> [À compléter]</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Directeur de Publication</h2>
            <p className="text-gray-700">[Nom du directeur de publication - À compléter]</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Hébergement</h2>
            <p className="text-gray-700 mb-2"><strong>Hébergeur :</strong> Vercel Inc.</p>
            <p className="text-gray-700 mb-2"><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, USA</p>
            <p className="text-gray-700"><strong>Site web :</strong> <a href="https://vercel.com" className="text-purple-600 hover:underline" target="_blank" rel="noopener">vercel.com</a></p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Propriété Intellectuelle</h2>
            <p className="text-gray-700 mb-4">
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes) est la propriété exclusive de VoyantLove.fr,
              sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces
              différents éléments est strictement interdite sans l'accord exprès par écrit de VoyantLove.fr.
            </p>
            <p className="text-gray-700">
              Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Responsabilité</h2>
            <p className="text-gray-700 mb-4">
              Les informations fournies sur ce site le sont à titre indicatif. VoyantLove.fr s'efforce d'assurer l'exactitude et la mise
              à jour des informations diffusées sur ce site, mais ne peut garantir l'exactitude, la précision ou l'exhaustivité des
              informations mises à disposition.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Nature des services :</strong> Les consultations de voyance et de tarot proposées sont des services de guidance
              et de conseil dans le domaine sentimental. Elles ne constituent en aucun cas des prédictions certaines ou des engagements
              de résultat.
            </p>
            <p className="text-gray-700">
              VoyantLove.fr ne pourra être tenu responsable des dommages directs ou indirects résultant de l'accès au site ou de
              l'utilisation de ce site et/ou des informations qui y sont contenues.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Liens Hypertextes</h2>
            <p className="text-gray-700 mb-4">
              Le site VoyantLove.fr peut contenir des liens hypertextes vers d'autres sites. Nous n'exerçons aucun contrôle sur ces
              sites et déclinons toute responsabilité quant à leur contenu.
            </p>
            <p className="text-gray-700">
              L'existence d'un lien depuis notre site vers un autre site ne constitue pas une validation de ce site ou de son contenu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Protection des Données Personnelles</h2>
            <p className="text-gray-700 mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés,
              vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
            </p>
            <p className="text-gray-700">
              Pour plus d'informations, consultez notre <Link href="/confidentialite" className="text-purple-600 hover:underline">Politique de Confidentialité</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Cookies</h2>
            <p className="text-gray-700">
              Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie de tracking ou publicitaire
              n'est utilisé sans votre consentement préalable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Droit Applicable et Juridiction</h2>
            <p className="text-gray-700">
              Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut d'accord amiable,
              les tribunaux français seront seuls compétents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Contact</h2>
            <p className="text-gray-700 mb-4">
              Pour toute question concernant les mentions légales, vous pouvez nous contacter :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Par email : contact@voyantlove.fr</li>
              <li>Par téléphone : [À compléter]</li>
            </ul>
          </section>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-8">
            <p className="text-sm text-yellow-800">
              <strong>⚠️ Note :</strong> Certaines informations marquées [À compléter] doivent être renseignées avant la mise en ligne publique du site.
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
