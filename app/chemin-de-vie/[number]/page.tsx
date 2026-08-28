import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ContentPage, { contentMeta, type ContentPageConfig } from '@/components/ContentPage';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import VoyantRecommendations from '@/components/VoyantRecommendations';
import {
  findCheminDeVie,
  getLiveCheminDeVie,
  validateCheminDeVieRecord,
  type CheminDeVieEntry,
} from '@/lib/cheminDeVie';

const HUB = '/chemin-de-vie/';
const SITE = 'https://www.voyantlove.fr';

function buildConfig(e: CheminDeVieEntry): ContentPageConfig {
  return {
    title: `Chemin de vie ${e.number} en amour : ${e.titleSuffix}`,
    description: `Chemin de vie ${e.number} en amour : portrait amoureux, forces, d&eacute;fis et compatibilit&eacute;. D&eacute;couvrez ce que votre num&eacute;rologie r&eacute;v&egrave;le sur votre vie sentimentale.`,
    url: `${SITE}${HUB}${e.slug}/`,
    keywords: [
      `chemin de vie ${e.number}`,
      `chemin de vie ${e.number} amour`,
      `chemin de vie ${e.number} compatibilité`,
      `chemin de vie ${e.number} couple`,
      'numérologie amoureuse',
    ],
    datePublished: '2026-08-28',
    dateModified: '2026-08-28',
    breadcrumb: [
      { name: 'Accueil', url: SITE },
      { name: 'Chemin de vie', url: `${SITE}${HUB}` },
      { name: `Chemin de vie ${e.number}`, url: `${SITE}${HUB}${e.slug}/` },
    ],
    header: {
      emoji: '',
      h1: `Chemin de vie ${e.number} en amour`,
      subtitle: e.titleSuffix.charAt(0).toUpperCase() + e.titleSuffix.slice(1),
      gradient: 'from-indigo-700 via-purple-700 to-violet-700',
      backLink: { href: HUB, label: 'Tous les chemins de vie' },
      anchors: [
        { href: '#portrait', label: 'Portrait amoureux', primary: true },
        { href: '#compatibilite', label: 'Compatibilité' },
      ],
    },
    accentText: 'text-indigo-700',
    stats: [
      { icon: '', value: `Chemin ${e.number}`, label: 'Votre nombre' },
      { icon: '', value: `${e.compatibilite.best.length} nombres`, label: 'Forte compatibilité' },
      { icon: '', value: `${e.forces.length} forces`, label: 'En amour' },
    ],
    cta: { topic: 'sentiments', slug: `chemin-de-vie-${e.number}` },
    faq: e.faq,
    related: [
      { href: HUB, label: 'Chemin de vie et amour : le guide complet' },
      { href: '/methodes-voyance/numerologie-amoureuse/', label: 'Numérologie amoureuse' },
      { href: '/voyance-gratuite-amour/', label: 'Voyance gratuite en amour' },
      { href: '/sentiments/compatibilite-amoureuse/', label: 'Compatibilité amoureuse' },
    ],
  };
}

export function generateStaticParams() {
  return getLiveCheminDeVie().map((e) => ({ number: e.slug }));
}

export const dynamicParams = false;

interface Props {
  params: Promise<{ number: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { number } = await params;
  const e = findCheminDeVie(number);
  if (!e) return {};
  return contentMeta(buildConfig(e));
}

export default async function CheminDeViePage({ params }: Props) {
  const { number } = await params;
  const e = findCheminDeVie(number);
  if (!e || validateCheminDeVieRecord(e).length > 0) notFound();

  const config = buildConfig(e);
  const autres = getLiveCheminDeVie().filter((x) => x.slug !== e.slug);

  return (
    <ContentPage config={config}>
      <section className="mb-8 rounded-xl border border-gray-200 border-l-4 border-l-indigo-700 bg-white p-6 md:p-8">
        <h2 className="mb-3 text-xl font-bold text-gray-900">
          Chemin de vie {e.number} : que dit la num&eacute;rologie sur votre vie amoureuse&nbsp;?
        </h2>
        <p className="text-lg leading-relaxed text-gray-800">{e.answerCapsule}</p>
      </section>

      <section id="portrait" className="mb-8 rounded-xl border border-gray-200 bg-white p-6 md:p-8">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Portrait amoureux du chemin de vie {e.number}</h2>
        <p className="leading-relaxed text-gray-700 mb-6">{e.portrait}</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3 text-green-800">Forces en amour</h3>
            <ul className="space-y-2">
              {e.forces.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 text-green-600 font-bold">&#10003;</span>
                  <span className="text-gray-700">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3 text-amber-800">D&eacute;fis en amour</h3>
            <ul className="space-y-2">
              {e.defis.map((d, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 text-amber-600 font-bold">&#9888;</span>
                  <span className="text-gray-700">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <VoyantQuickCTA topic="sentiments" source={`chemin-de-vie-${e.number}-mid`} />

      <section id="compatibilite" className="mb-8 rounded-xl border border-gray-200 bg-white p-6 md:p-8">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Compatibilit&eacute; du chemin de vie {e.number}</h2>

        <div className="space-y-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-lg">
            <h3 className="font-bold text-green-800 mb-2">Forte compatibilit&eacute;</h3>
            <p className="text-gray-700">
              Chemins de vie{' '}
              {e.compatibilite.best.map((n, i) => (
                <span key={n}>
                  <Link href={`${HUB}chemin-de-vie-${n}/`} className="text-indigo-700 font-medium hover:underline">
                    {n}
                  </Link>
                  {i < e.compatibilite.best.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-2">Bonne compatibilit&eacute;</h3>
            <p className="text-gray-700">
              Chemins de vie{' '}
              {e.compatibilite.good.map((n, i) => (
                <span key={n}>
                  <Link href={`${HUB}chemin-de-vie-${n}/`} className="text-indigo-700 font-medium hover:underline">
                    {n}
                  </Link>
                  {i < e.compatibilite.good.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-lg">
            <h3 className="font-bold text-amber-800 mb-2">Compatibilit&eacute; plus exigeante</h3>
            <p className="text-gray-700">
              Chemins de vie{' '}
              {e.compatibilite.challenging.map((n, i) => (
                <span key={n}>
                  <Link href={`${HUB}chemin-de-vie-${n}/`} className="text-indigo-700 font-medium hover:underline">
                    {n}
                  </Link>
                  {i < e.compatibilite.challenging.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-600">
          Ces indications refl&egrave;tent les tendances g&eacute;n&eacute;rales de la num&eacute;rologie pythagoricienne.
          Chaque relation est unique et d&eacute;pend de bien d&rsquo;autres facteurs.
        </p>
      </section>

      <VoyantRecommendations topic="sentiments" limit={3} showOnlineFirst={true} source={`chemin-de-vie-${e.number}-reco`} />

      <section className="mb-8 rounded-xl border border-gray-200 bg-white p-6 md:p-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Liens internes</h2>
        <ul className="space-y-2">
          {e.liensSite.map((l, i) => (
            <li key={i}>
              <Link href={l.href} className="text-indigo-700 font-medium hover:underline">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8 rounded-xl border border-gray-200 bg-white p-6 md:p-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Les autres chemins de vie en amour</h2>
        <div className="grid gap-2 sm:grid-cols-3">
          {autres.map((x) => (
            <Link
              key={x.slug}
              href={`${HUB}${x.slug}/`}
              className="block rounded-lg border border-gray-200 p-3 hover:shadow-md transition"
            >
              <span className="font-bold text-indigo-700">{x.titre}</span>
              <span className="block text-sm text-gray-600">{x.titleSuffix}</span>
            </Link>
          ))}
        </div>
        <Link href={HUB} className="mt-4 inline-block text-sm font-semibold text-indigo-700 hover:text-indigo-900">
          Calculez votre chemin de vie &rarr;
        </Link>
      </section>
    </ContentPage>
  );
}
