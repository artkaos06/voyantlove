import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Consulter un Voyant Amour — Disponible Maintenant',
  description: 'Parlez maintenant à un voyant spécialisé en amour. 10 premières minutes offertes. Réponses précises sur vos questions sentimentales.',
  robots: { index: false, follow: false },
};

const TESTIMONIALS = [
  { text: 'Une voyante d\'une précision incroyable. Elle a vu des choses que personne ne pouvait savoir.', name: 'Mélanie T.', stars: 5 },
  { text: 'J\'avais des doutes sur mon couple. La consultation m\'a apporté une clarté immédiate.', name: 'Julien F.', stars: 5 },
  { text: 'Très à l\'écoute, sans jugement. Les conseils m\'ont vraiment aidée à avancer.', name: 'Nathalie B.', stars: 5 },
  { text: 'J\'aurais dû appeler plus tôt. En 15 minutes j\'avais plus de réponses qu\'en 2 ans.', name: 'Sandra L.', stars: 5 },
];

export default function LPVoyantDirect() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-800 via-purple-700 to-indigo-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-500 rounded-full px-4 py-1.5 text-sm font-bold mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Voyants disponibles maintenant
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Parlez à un Voyant Amour<br />
            <span className="text-yellow-300">10 Minutes Offertes</span>
          </h1>
          <p className="text-xl opacity-95 mb-8 max-w-2xl mx-auto">
            Obtenez des réponses claires et précises sur votre vie sentimentale — sans attente, en toute confidentialité.
          </p>

          {/* Primary CTA: phone */}
          <div className="mb-4">
            <a
              href="tel:0175754582"
              className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-10 py-5 rounded-xl font-bold text-2xl transition-all hover:scale-105 hover:shadow-2xl shadow-xl"
            >
              📞 01 75 75 45 82
            </a>
            <p className="mt-3 text-green-200 font-semibold">10 min gratuites • Disponible 7j/7</p>
          </div>

          {/* Secondary CTA: online */}
          <p className="text-sm opacity-70 mb-2">Vous préférez consulter en ligne ?</p>
          <Link
            href="/consulter?ref=lp-voyant-direct"
            className="inline-block border-2 border-white/60 hover:border-white text-white px-7 py-3 rounded-lg font-semibold transition-all hover:bg-white/10"
          >
            Choisir un voyant en ligne →
          </Link>
        </div>
      </section>

      {/* Questions section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Vos questions méritent de vraies réponses
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'M\'aime-t-il vraiment ?',
              'Mon ex va-t-il revenir ?',
              'Est-il fidèle ?',
              'Quand vais-je rencontrer l\'amour ?',
              'Mon couple peut-il être sauvé ?',
              'Quel est mon avenir amoureux ?',
            ].map((q, i) => (
              <div key={i} className="flex items-center gap-3 bg-purple-50 p-4 rounded-lg">
                <span className="text-purple-600 font-bold text-lg">?</span>
                <span className="text-gray-800 font-medium">{q}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="tel:0175754582"
              className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-bold text-xl transition-all hover:scale-105 hover:shadow-xl"
            >
              📞 Obtenir mes réponses maintenant
            </a>
            <p className="text-sm text-gray-500 mt-2">01 75 75 45 82 — Appel confidentiel</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Comment ça fonctionne</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '1', title: 'Appelez ou connectez-vous', desc: 'Choisissez votre mode de consultation — téléphone ou chat en ligne.' },
              { step: '2', title: 'Exposez votre situation', desc: 'Le voyant vous écoute et analyse votre cas en profondeur.' },
              { step: '3', title: 'Recevez vos réponses', desc: 'Des réponses précises et des conseils pour agir avec clarté.' },
            ].map((item, i) => (
              <div key={i} className="text-center p-5 bg-white rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Ils ont trouvé leurs réponses</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-gray-50 p-5 rounded-lg">
                <div className="mb-2">{'⭐'.repeat(t.stars)}</div>
                <p className="text-gray-700 italic mb-3">&quot;{t.text}&quot;</p>
                <p className="text-sm font-semibold text-gray-500">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 px-4 bg-gradient-to-br from-purple-700 to-indigo-700 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Prêt à obtenir vos réponses ?</h2>
          <p className="text-lg opacity-90 mb-6">Nos voyants sont disponibles maintenant. La première consultation est gratuite.</p>
          <a
            href="tel:0175754582"
            className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-10 py-5 rounded-xl font-bold text-2xl transition-all hover:scale-105 hover:shadow-2xl"
          >
            📞 01 75 75 45 82
          </a>
          <p className="mt-4 text-green-200 font-semibold text-sm">10 minutes gratuites • 7j/7 • Confidentiel</p>
          <div className="mt-4">
            <Link
              href="/consulter?ref=lp-voyant-direct-bottom"
              className="text-white/70 hover:text-white text-sm underline underline-offset-2"
            >
              Ou consultez en ligne →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
