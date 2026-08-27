import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema, getAuthorSchema } from '@/lib/schema';
import { SIGNES_AMOUR, findSign, validateSignRecord } from '@/lib/signesAmour';
import { ZODIAC_SIGNS } from '@/lib/zodiac';
import { COMPATIBILITY_PAIRS, validatePairRecord, pairSlug } from '@/lib/compatibilitePairs';
import { renderWithEntities } from '@/lib/entityBold';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantFinalCTA from '@/components/VoyantFinalCTA';
import AskAI from '@/components/AskAI';
import VoyantRailSection from '@/components/VoyantRailSection';

const LIVE_SIGNS = SIGNES_AMOUR.filter((s) => validateSignRecord(s).length === 0);
const LIVE_PAIR_SLUGS = new Set(
  COMPATIBILITY_PAIRS.filter((p) => validatePairRecord(p).length === 0).map((p) => p.slug),
);

export function generateStaticParams() {
  return LIVE_SIGNS.map((s) => ({ signe: s.slug }));
}

export const dynamicParams = false;

interface Props {
  params: Promise<{ signe: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { signe } = await params;
  const s = findSign(signe);
  if (!s) return {};
  return {
    title: `${s.name} en Amour : Caractère, Séduction et Compatibilités`,
    description: `Le ${s.name} en amour : caractère amoureux, l'homme et la femme ${s.name}, comment le séduire, en couple, ses défauts et ses compatibilités. Signe de ${s.element}, gouverné par ${s.planet}.`,
    alternates: { canonical: `https://www.voyantlove.fr/astrologie-amour/${s.slug}/` },
  };
}

export default async function SignPage({ params }: Props) {
  const { signe } = await params;
  const s = findSign(signe);
  if (!s || validateSignRecord(s).length > 0) notFound();

  const url = `https://www.voyantlove.fr/astrologie-amour/${s.slug}/`;
  const title = `${s.name} en Amour : Caractère, Séduction et Compatibilités`;
  const siblings = LIVE_SIGNS.filter((x) => x.slug !== s.slug);

  // Compatibility mesh: link this sign to its live pairs (with the 11 others).
  const compatLinks = ZODIAC_SIGNS
    .filter((z) => z.name !== s.name)
    .map((z) => ({ other: z.name, slug: pairSlug(s.name, z.name) }))
    .filter((c) => LIVE_PAIR_SLUGS.has(c.slug));

  const articleSchema = getArticleSchema({
    title,
    description: `Le ${s.name} en amour : caractère amoureux, séduction, en couple, défauts et compatibilités.`,
    url,
    datePublished: '2026-07-29',
    dateModified: '2026-07-29',
    keywords: [`${s.name.toLowerCase()} amour`, `${s.name.toLowerCase()} en amour`, `homme ${s.name.toLowerCase()} amour`, `femme ${s.name.toLowerCase()} amour`, `comment séduire un ${s.name.toLowerCase()}`, `compatibilité ${s.name.toLowerCase()}`],
  });
  const faqSchema = getFAQSchema(s.faq.map((f) => ({ question: f.q, answer: f.a })));
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.voyantlove.fr' },
    { name: 'Astrologie Amour', url: 'https://www.voyantlove.fr/astrologie-amour/' },
    { name: `${s.name} en amour`, url },
  ]);
  const authorSchema = getAuthorSchema();

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />

      <header className="bg-gradient-to-r from-fuchsia-700 via-purple-700 to-indigo-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/astrologie-amour/" className="text-white/80 hover:text-white mb-4 inline-block">&larr; Tous les signes en amour</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{s.emoji} {s.name} en Amour</h1>
          <p className="text-lg opacity-90 mb-4">Signe de {s.element} · gouverné par {s.planet} · {s.dates}</p>
          <div className="flex gap-2 flex-wrap">
            {s.mots.map((m) => (
              <span key={m} className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-white/15 border border-white/30">{m}</span>
            ))}
          </div>
        </div>
      </header>

        {/* Bloc voyants commercial : mêmes rails que la home. */}
        <VoyantRailSection source="astrologie-amour-signe-rail" bare />

      <div className="max-w-4xl mx-auto px-4 py-8">

        {/* Answer capsule, extractive snippet target */}
        <section className="bg-purple-50 border-l-4 border-purple-500 rounded-r-xl p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Comment aime le {s.name}&nbsp;?</h2>
          <p className="text-lg leading-relaxed text-gray-800">{renderWithEntities(s.answerCapsule)}</p>
          <div className="mt-5">
            <AskAI title={title} url={url} context={s.answerCapsule} />
          </div>
        </section>

        {/* Funnel to the free-reading hub. The sign profile answers "comment
            aime le {s.name}" in general; the hub answers "et moi, maintenant ?"
            — same intent, one step further down the funnel. */}
        <p className="text-gray-600 mb-8">
          Le signe éclaire une tendance, pas votre histoire&nbsp;: pour une lecture de votre situation, la{' '}
          <Link href="/voyance-gratuite-amour/" className="text-fuchsia-700 hover:text-fuchsia-900 underline font-medium">voyance gratuite amour</Link>{' '}
          réunit tirages, oracle et horoscope amoureux, sans engagement.
        </p>

        <article className="bg-white rounded-xl shadow-md p-8 mb-8 border-t-4 border-fuchsia-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Le {s.name} en amour</h2>
          <p className="text-lg leading-relaxed text-gray-700">{renderWithEntities(s.enAmour)}</p>
        </article>

        <VoyantQuickCTA topic="methodes-voyance" source={`signe-${s.slug}-early`} />

        {/* Homme / Femme */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <section className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
            <h2 className="text-xl font-bold text-blue-700 mb-3">L&apos;homme {s.name} en amour</h2>
            <p className="text-gray-700">{renderWithEntities(s.homme)}</p>
          </section>
          <section className="bg-white rounded-xl shadow-md p-6 border-l-4 border-rose-500">
            <h2 className="text-xl font-bold text-rose-700 mb-3">La femme {s.name} en amour</h2>
            <p className="text-gray-700">{renderWithEntities(s.femme)}</p>
          </section>
        </div>

        {/* Célibataire / Couple */}
        <section className="bg-gradient-to-br from-fuchsia-50 to-indigo-50 rounded-xl p-6 md:p-8 mb-8 border-2 border-fuchsia-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Le {s.name} célibataire et en couple</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-bold text-fuchsia-800 mb-1">Le {s.name} célibataire</h3>
              <p className="text-gray-700">{renderWithEntities(s.celibataire)}</p>
            </div>
            <div>
              <h3 className="font-bold text-fuchsia-800 mb-1">Le {s.name} en couple</h3>
              <p className="text-gray-700">{renderWithEntities(s.couple)}</p>
            </div>
          </div>
        </section>

        {/* Séduction / Défauts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <section className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
            <h2 className="text-xl font-bold text-green-700 mb-3">Comment séduire un {s.name}&nbsp;?</h2>
            <p className="text-gray-700">{renderWithEntities(s.seduction)}</p>
          </section>
          <section className="bg-white rounded-xl shadow-md p-6 border-l-4 border-amber-500">
            <h2 className="text-xl font-bold text-amber-700 mb-3">Les défauts du {s.name} en amour</h2>
            <p className="text-gray-700">{renderWithEntities(s.defauts)}</p>
          </section>
        </div>

        {/* Compatibility mesh */}
        {compatLinks.length > 0 && (
          <section className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Les compatibilités amoureuses du {s.name}</h2>
            <p className="text-gray-700 mb-5">
              Découvrez en détail l&apos;entente du <strong>{s.name}</strong> avec chacun des autres signes du zodiaque&nbsp;: forces, défis et conseils pour chaque duo.
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              {compatLinks.map((c) => (
                <Link key={c.slug} href={`/compatibilite-amoureuse/${c.slug}/`} className="block text-fuchsia-700 hover:text-fuchsia-900 font-medium py-1">
                  &rarr; {s.name} et {c.other}
                </Link>
              ))}
            </div>
            <div className="mt-5">
              <Link href="/methodes-voyance/synastrie-amoureuse/" className="inline-block bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-semibold px-6 py-3 rounded-lg transition">
                Tester votre compatibilité avec le {s.name}
              </Link>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions fréquentes sur le {s.name} en amour</h2>
          <div className="space-y-6">
            {s.faq.map((f, i) => (
              <div key={i} className={i < s.faq.length - 1 ? 'border-b border-gray-200 pb-6' : ''}>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-gray-700 leading-relaxed">{renderWithEntities(f.a)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Other signs */}
        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <h2 className="font-bold text-lg mb-4 text-gray-900">Les autres signes en amour</h2>
          <div className="grid sm:grid-cols-2 gap-2">
            {siblings.map((x) => (
              <Link key={x.slug} href={`/astrologie-amour/${x.slug}/`} className="block text-fuchsia-700 hover:text-fuchsia-900 font-medium">
                &rarr; {x.emoji} {x.name} en amour
              </Link>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
            <Link href="/tarot-amour/" className="block text-fuchsia-700 hover:text-fuchsia-900 font-medium">&rarr; Tarot amour : signification des cartes</Link>
            <Link href="/compatibilite-amoureuse/" className="block text-fuchsia-700 hover:text-fuchsia-900 font-medium">&rarr; Toutes les compatibilités amoureuses</Link>
          </div>
        </div>

        <VoyantFinalCTA topic="methodes-voyance" source={`signe-${s.slug}-final`} />
      </div>
    </main>
  );
}
