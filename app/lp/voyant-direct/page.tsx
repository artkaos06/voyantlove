import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import SocialProofTicker from '@/components/SocialProofTicker';
import VoyantTrustGrid from '@/components/VoyantTrustGrid';
import CallbackForm from '@/components/CallbackForm';

export const metadata: Metadata = {
  title: 'Consultation Voyance Amoureuse par Téléphone — VoyantLove',
  description: '10 minutes offertes pour votre 1er appel. Voyant spécialisé en questions sentimentales, guidance par tarot et clairvoyance. 7j/7.',
  robots: { index: false, follow: false },
};

const TESTIMONIALS = [
  { text: 'Connectée en moins de 2 minutes. La voyante a compris ma situation sans que je lui donne beaucoup de détails.', name: 'Mélanie T.', detail: '1re consultation', stars: 5 },
  { text: "J'avais des doutes sur mon couple depuis des mois. La consultation m'a apporté plus de clarté qu'attendu.", name: 'Sandra L.', detail: 'Cliente depuis 6 mois', stars: 5 },
  { text: 'Très à l\'écoute, sans jugement. Les conseils m\'ont aidée à avancer sereinement dans ma vie amoureuse.', name: 'Nathalie B.', detail: '4 consultations', stars: 5 },
  { text: "J'étais sceptique au départ. Les ressentis partagés étaient précis et cohérents avec ce que je vivais.", name: 'Julien F.', detail: 'Consultation vérifiée', stars: 5 },
];

const FAQ = [
  {
    q: 'Qu\'est-ce qu\'une consultation de voyance amoureuse ?',
    a: 'Une consultation de voyance amoureuse est un échange avec un praticien spécialisé dans les questions sentimentales. Le voyant utilise des supports divinatoires (tarot, oracle, clairvoyance, astrologie) pour apporter un éclairage sur votre situation : sentiments, dynamiques relationnelles, fenêtres de timing. Il ne s\'agit ni de prédictions absolues, ni de contrôle des événements, mais d\'un accompagnement pour vous aider à décider en conscience.',
  },
  {
    q: 'La voyance est-elle un service fiable ?',
    a: 'La voyance est une pratique de guidance, non une science. Sa pertinence dépend avant tout du praticien. Un voyant expérimenté et éthique peut apporter des éclairages que vous pourrez vérifier dans votre vécu. Nos voyants sont sélectionnés sur la base d\'un minimum de 5 ans d\'expérience et d\'avis clients authentiques. Nous considérons la voyance comme un outil d\'aide à la réflexion, à utiliser avec discernement.',
  },
  {
    q: 'Combien coûte une consultation ?',
    a: 'Les tarifs varient selon le voyant choisi : entre 1,30 € et 2,50 € la minute pour une consultation téléphonique. Certains voyants offrent les premières minutes gratuites aux nouveaux clients — le tarif applicable vous est communiqué avant tout engagement financier par la plateforme partenaire. Vous gardez le contrôle total de la durée et du budget de votre consultation.',
  },
  {
    q: 'Vos voyants peuvent-ils garantir un résultat ?',
    a: 'Non, et méfiez-vous de ceux qui le prétendent. Aucun voyant sérieux ne peut garantir le retour d\'un ex, une rencontre à une date précise, ou la réussite d\'un projet amoureux. Nos voyants s\'engagent à partager leurs ressentis honnêtement, même quand la vérité dérange. Nous refusons la vente de rituels payants ou de promesses irréalistes.',
  },
  {
    q: 'Les consultations sont-elles confidentielles ?',
    a: 'Oui, strictement. Vos échanges avec le voyant ne sont pas enregistrés, et votre identité n\'est pas partagée avec des tiers. Nous respectons le RGPD et les normes européennes de protection des données. Pour plus de détails, consultez notre politique de confidentialité.',
  },
  {
    q: 'Comment sont sélectionnés les voyants ?',
    a: 'Chaque voyant sur notre plateforme partenaire passe un processus de vérification : minimum 5 ans de pratique en voyance sentimentale, note moyenne supérieure à 4,5/5 après au moins 500 consultations, et engagement à respecter notre charte éthique (pas de promesses irréalistes, pas de dépendance créée, respect du libre arbitre du consultant).',
  },
  {
    q: 'Que faire si je ne suis pas satisfait de ma consultation ?',
    a: 'Si votre première consultation ne répond pas à vos attentes, contactez-nous à contact@voyantlove.fr. Nos partenaires proposent généralement une politique "satisfait ou remboursé" sur les premières minutes. Les conditions exactes de remboursement dépendent de la plateforme de consultation et vous sont communiquées lors de l\'appel.',
  },
];

export default function LPVoyantDirect() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Google Ads Call Conversion — direct snippet (not GTM).
          Loads its own gtag/js instance because GTM's internal gtag/js
          doesn't expose google_tag_data.pageload for phone swap detection.
          Scoped to this ad landing page only. */}
      <Script
        id="google-ads-call-conversion-loader"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-18020982081"
      />
      <Script id="google-ads-call-conversion-config" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
        window.gtag('js', new Date());
        window.gtag('config', 'AW-18020982081/Y2TzCKq-oJ4cEMG6iZFD', {
          'phone_conversion_number': '01 75 75 45 82'
        });
      `}</Script>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 via-white to-white pt-10 pb-14 px-4">
        <div className="max-w-3xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 bg-green-500 text-white rounded-full px-4 py-1.5 text-sm font-bold mb-6 shadow-lg">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Voyants disponibles maintenant
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight text-gray-900">
            Consultation de Voyance Amoureuse par Téléphone
          </h1>

          <p className="text-2xl md:text-3xl font-bold mb-2 leading-tight text-gray-900">
            <span className="bg-yellow-200 px-2 rounded">10 minutes offertes</span> pour votre 1er appel
          </p>
          <p className="text-sm text-gray-500 mb-5">
            (Valeur 15 € — entièrement offerte)
          </p>

          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Parlez à un voyant spécialisé en questions sentimentales. Guidance par tarot, astrologie ou clairvoyance, en toute confidentialité.
          </p>

          <div className="mb-4">
            <a
              href="tel:0175754582"
              className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-10 py-5 rounded-xl font-bold text-2xl transition-all hover:scale-105 hover:shadow-2xl shadow-xl"
            >
              📞 01 75 75 45 82
            </a>
            <p className="mt-3 text-gray-600 text-xs font-medium">
              Appel non surtaxé — prix d&apos;un appel local
            </p>
            <p className="mt-2 text-gray-700 text-sm">
              ✓ 10 min offertes • ✓ 7j/7 de 9h à 21h • ✓ Sans engagement
            </p>
            <CallbackForm source="lp-voyant-direct" />
          </div>

          <div className="mb-6">
            <SocialProofTicker />
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-2">Vous préférez consulter par écrit ?</p>
            <Link
              href="/consulter?ref=lp-voyant-direct"
              className="inline-block border-2 border-purple-400 hover:border-purple-600 text-purple-700 hover:bg-purple-50 px-7 py-3 rounded-lg font-semibold transition-all text-sm"
            >
              Choisir mon voyant en ligne →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b border-gray-100 py-4 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 font-medium">
            <span>⭐ 4,8/5 — plus de 2 400 consultations</span>
            <span>🔒 Paiement sécurisé SSL</span>
            <span>🇫🇷 Service en français 7j/7</span>
            <span>✅ Voyants vérifiés</span>
          </div>
        </div>
      </section>

      {/* Voyant trust grid — display-only, real photos from partner network */}
      <VoyantTrustGrid />

      {/* About the service - ORIGINAL CONTENT */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Qu&apos;est-ce que VoyantLove ?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            VoyantLove est un service de consultation de voyance spécialisé dans les <strong>questions sentimentales</strong>. Nous mettons en relation des consultants avec des voyants et tarologues expérimentés, via notre plateforme partenaire de mise en relation téléphonique et par écrit.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Contrairement aux plateformes généralistes, nous nous concentrons exclusivement sur l&apos;accompagnement amoureux : <strong>reconquête</strong>, <strong>sentiments</strong>, <strong>rupture</strong>, <strong>nouvelle rencontre</strong>, <strong>crises de couple</strong>. Cette spécialisation permet à nos voyants d&apos;apporter un éclairage plus précis que des praticiens généralistes.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Nous considérons la voyance comme un <strong>outil de réflexion et de guidance</strong>, jamais comme un substitut à un accompagnement psychologique professionnel. Nos voyants vous partagent honnêtement leurs ressentis, même quand ceux-ci ne correspondent pas à ce que vous espériez entendre. Notre engagement : pas de promesses irréalistes, pas de vente de rituels, pas de dépendance créée.
          </p>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded">
            <p className="text-gray-800 leading-relaxed text-sm">
              <strong>Note importante :</strong> La voyance est une pratique divinatoire à visée d&apos;accompagnement. Elle ne prédit pas un avenir figé et ne remplace en aucun cas un avis médical, psychologique ou juridique. Pour toute situation de détresse émotionnelle grave, nous vous invitons à consulter un professionnel de santé.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Comment fonctionne une consultation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '1', title: 'Vous appelez', desc: 'Composez le 01 75 75 45 82. Un opérateur vous accueille et vous présente les voyants disponibles avec leurs tarifs.' },
              { step: '2', title: 'Vous choisissez', desc: 'Vous sélectionnez le voyant et le support (tarot, oracle, astrologie) qui vous correspondent. Le tarif vous est communiqué avant toute mise en relation.' },
              { step: '3', title: 'Consultation', desc: 'Vous échangez directement avec le voyant. La durée est libre, vous pouvez raccrocher à tout moment. La facturation se fait à la minute.' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing transparency */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Tarifs transparents</h2>
          <p className="text-gray-600 mb-8">Les tarifs varient selon le voyant choisi. Ils vous sont toujours communiqués avant la consultation.</p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Téléphone</p>
              <p className="text-3xl font-bold text-gray-900 mb-1">1,30 – 2,50 €</p>
              <p className="text-gray-600 text-sm">par minute, selon le voyant</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Chat en ligne</p>
              <p className="text-3xl font-bold text-gray-900 mb-1">2,00 €</p>
              <p className="text-gray-600 text-sm">par minute, en moyenne</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Consultation par email</p>
              <p className="text-3xl font-bold text-gray-900 mb-1">10 – 25 €</p>
              <p className="text-gray-600 text-sm">par question détaillée</p>
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-gray-700 leading-relaxed">
            <strong className="text-green-900">Offre nouveaux clients :</strong> Certains voyants proposent quelques minutes offertes lors de la première consultation. Cette offre dépend du voyant choisi et vous est communiquée au moment de la mise en relation. Aucun prélèvement n&apos;est effectué sans votre accord explicite.
          </div>
        </div>
      </section>

      {/* Questions addressed */}
      <section className="py-12 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3 text-gray-900">
            Les questions que nous entendons souvent
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Nos voyants accompagnent chaque jour des consultants qui se posent ces questions.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              'Qu\'est-ce qu\'il/elle ressent réellement ?',
              'Mon ex peut-il/elle revenir ?',
              'Notre relation a-t-elle un avenir ?',
              'Quand vais-je rencontrer quelqu\'un ?',
              'Comment surmonter cette rupture ?',
              'Suis-je sur la bonne voie amoureuse ?',
            ].map((q, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200">
                <span className="text-purple-500 font-bold text-lg flex-shrink-0">?</span>
                <span className="text-gray-800">{q}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="tel:0175754582"
              className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              📞 01 75 75 45 82
            </a>
            <p className="text-sm text-gray-500 mt-3">10 minutes offertes pour votre 1er appel — service en français 7j/7</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">Ils nous ont fait confiance</h2>
          <p className="text-center text-gray-500 text-sm mb-8">Témoignages de clients ayant consulté nos voyants partenaires</p>
          <div className="grid md:grid-cols-2 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <span aria-label={`${t.stars} étoiles sur 5`}>{'⭐'.repeat(t.stars)}</span>
                  <span className="text-xs text-gray-400">{t.detail}</span>
                </div>
                <p className="text-gray-700 italic mb-3 leading-relaxed">&laquo;&nbsp;{t.text}&nbsp;&raquo;</p>
                <p className="text-sm font-semibold text-gray-600">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Voyance-specific concerns */}
      <section className="py-14 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Questions fréquentes</h2>
          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <details key={i} className="bg-white rounded-lg border border-gray-200 group">
                <summary className="p-5 cursor-pointer font-semibold text-gray-900 flex justify-between items-center list-none">
                  <span>{item.q}</span>
                  <span className="text-purple-600 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <div className="px-5 pb-5 text-gray-700 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Our philosophy */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre déontologie</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <strong className="text-gray-900">Honnêteté avant tout.</strong> Nos voyants s&apos;engagent à vous partager ce qu&apos;ils perçoivent réellement, même lorsque cela ne correspond pas à ce que vous souhaitez entendre. Un voyant qui ne vous dit que ce qui vous fait plaisir ne vous rend pas service.
            </p>
            <p>
              <strong className="text-gray-900">Pas de dépendance.</strong> Une bonne consultation vous rend autonome. Nous déconseillons les consultations trop fréquentes qui peuvent créer un besoin émotionnel plutôt que de l&apos;apporter des réponses.
            </p>
            <p>
              <strong className="text-gray-900">Aucun rituel payant.</strong> Nos voyants ne vendent pas de rituels, de bougies, de talismans ou de &laquo;&nbsp;travaux occultes&nbsp;&raquo;. Toute proposition de ce type est une dérive que nous refusons et que nous vous invitons à signaler.
            </p>
            <p>
              <strong className="text-gray-900">Respect du libre arbitre.</strong> La voyance éclaire des tendances et des probabilités. Elle ne détermine pas vos décisions. Chaque choix reste le vôtre, en conscience.
            </p>
            <p className="pt-2">
              Pour en savoir plus sur notre approche et notre équipe éditoriale, consultez la page <Link href="/a-propos" className="text-purple-600 hover:text-purple-800 underline font-medium">À propos de VoyantLove</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Business info - Trust signals */}
      <section className="py-12 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations sur l&apos;éditeur</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="bg-white p-5 rounded-lg border border-gray-200">
              <p className="text-gray-500 uppercase tracking-wide text-xs mb-2 font-semibold">Éditeur</p>
              <p className="text-gray-900 font-semibold mb-1">Cogitor</p>
              <p className="text-gray-600">Pour plus d&apos;informations, consultez les <Link href="/mentions-legales" className="text-purple-600 hover:text-purple-800 underline">mentions légales</Link>.</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-gray-200">
              <p className="text-gray-500 uppercase tracking-wide text-xs mb-2 font-semibold">Contact service client</p>
              <p className="mb-1">
                <a href="mailto:contact@voyantlove.fr" className="text-purple-600 hover:text-purple-800 underline">contact@voyantlove.fr</a>
              </p>
              <p className="text-gray-600">Réponse sous 24 à 48 h ouvrées</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-6 leading-relaxed">
            Les consultations sont proposées via une plateforme de mise en relation partenaire. Elles sont destinées à un public adulte (18 ans et plus). La voyance est une activité de divertissement et de guidance personnelle ; elle ne remplace aucun avis médical, psychologique, juridique ou financier.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 px-4 bg-gradient-to-br from-purple-800 to-indigo-800 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">Prêt à parler à un voyant ?</h2>
          <p className="text-lg opacity-80 mb-8">
            Un voyant est disponible maintenant. Consultation sans engagement, facturée à la minute.
          </p>
          <a
            href="tel:0175754582"
            className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-10 py-5 rounded-xl font-bold text-2xl transition-all hover:scale-105 hover:shadow-2xl mb-4"
          >
            📞 01 75 75 45 82
          </a>
          <p className="text-purple-100 text-sm mb-6">10 min offertes pour votre 1er appel • 7j/7 • Service en français</p>
          <Link
            href="/consulter?ref=lp-voyant-direct-bottom"
            className="text-white/70 hover:text-white text-sm underline underline-offset-2"
          >
            Ou consultez un voyant par écrit →
          </Link>
        </div>
      </section>

      {/* Footer with legal links */}
      <footer className="bg-gray-900 text-gray-300 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="font-bold text-white mb-3">VoyantLove</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Consultation de voyance spécialisée en questions sentimentales. Service proposé par Cogitor.
              </p>
            </div>
            <div>
              <p className="font-bold text-white mb-3">Informations légales</p>
              <ul className="space-y-2 text-sm">
                <li><Link href="/mentions-legales" className="hover:text-white underline underline-offset-2">Mentions légales</Link></li>
                <li><Link href="/confidentialite" className="hover:text-white underline underline-offset-2">Politique de confidentialité</Link></li>
                <li><Link href="/a-propos" className="hover:text-white underline underline-offset-2">À propos</Link></li>
                <li><Link href="/contact" className="hover:text-white underline underline-offset-2">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white mb-3">Nous contacter</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="tel:0175754582" className="hover:text-white">📞 01 75 75 45 82</a>
                </li>
                <li>
                  <a href="mailto:contact@voyantlove.fr" className="hover:text-white underline underline-offset-2">contact@voyantlove.fr</a>
                </li>
                <li className="text-gray-400">7j/7 — Réponse email 24-48h</li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-gray-800 text-xs text-gray-500 leading-relaxed">
            <p className="mb-2">
              © 2026 Cogitor — Tous droits réservés. La voyance est une activité de divertissement et de guidance personnelle. Réservée aux personnes majeures (18+).
            </p>
            <p>
              Les consultations sont facturées à la minute par notre plateforme de mise en relation partenaire. Les tarifs sont communiqués avant toute consultation.
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}
