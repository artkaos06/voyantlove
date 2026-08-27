// Mirror-hour pages for the flamme-jumelle cluster, e.g.
// /nouvelle-rencontre/flamme-jumelle/12h12/.
//
// Nested under the hub on purpose: the target query is "<heure> signification
// flamme jumelle", a qualifier on the hub's own entity, so the URL says so and
// the hub becomes the cluster parent (see the "heures miroirs" section it
// renders from getHeureMiroirHubCards()).
//
// Built on the shared ContentPage shell rather than a bespoke template: the
// shell owns the current design language (white banner, border-gray-200, one
// purple accent, no emoji) plus the four JSON-LD blocks, the single-sourced
// FAQ/FAQPage schema, AskAI and the final CTA. Everything unique to an hour
// lives in lib/heuresMiroirsFlammeJumelle.ts.

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ContentPage, { contentMeta, type ContentPageConfig } from '@/components/ContentPage';
import VoyantQuickCTA from '@/components/VoyantQuickCTA';
import {
  findHeureMiroir,
  getLiveHeuresMiroirs,
  reductionNumerologique,
  validateHeureMiroirRecord,
  type HeureMiroirEntry,
} from '@/lib/heuresMiroirsFlammeJumelle';

const HUB = '/nouvelle-rencontre/flamme-jumelle/';
const SITE = 'https://www.voyantlove.fr';

function buildConfig(h: HeureMiroirEntry): ContentPageConfig {
  return {
    title: `${h.primaryQuery} : ${h.titleSuffix}`,
    description: h.description,
    url: `${SITE}${HUB}${h.slug}/`,
    keywords: [
      h.primaryQuery,
      `${h.slug} flamme jumelle`,
      `heure miroir ${h.slug}`,
      `${h.slug} signification amour`,
      'heures miroirs flamme jumelle',
    ],
    datePublished: '2026-08-27',
    dateModified: '2026-08-27',
    breadcrumb: [
      { name: 'Accueil', url: SITE },
      { name: 'Nouvelle rencontre', url: `${SITE}/nouvelle-rencontre/` },
      { name: 'Flamme jumelle', url: `${SITE}${HUB}` },
      { name: h.slug, url: `${SITE}${HUB}${h.slug}/` },
    ],
    header: {
      emoji: '',
      h1: `${h.primaryQuery} : ${h.titleSuffix}`,
      subtitle: `${h.theme}, selon la tradition des heures miroirs appliquée au lien de flamme jumelle.`,
      gradient: '',
      backLink: { href: HUB, label: 'Retour au guide flamme jumelle' },
      anchors: [
        { href: '#signification', label: `Ce que dit ${h.slug}`, primary: true },
        { href: '#que-faire', label: 'Que faire' },
      ],
    },
    accentText: 'text-purple-700',
    stats: [
      { icon: '', value: h.motCle, label: 'Message dominant' },
      { icon: '', value: h.arcane.nom.replace(/\s*\(.*\)$/, ''), label: 'Arcane correspondant' },
      { icon: '', value: String(reductionNumerologique(h.slug)), label: 'Réduction numérologique' },
    ],
    cta: { topic: 'nouvelle-rencontre', slug: `heure-miroir-${h.slug}` },
    faq: h.faq,
    related: [
      { href: HUB, label: 'Flamme jumelle : reconnaître et vivre cette connexion' },
      { href: `/tarot-amour/${h.arcane.slug}/`, label: `${h.arcane.nom} en amour` },
      { href: '/nouvelle-rencontre/signes-ame-soeur/', label: 'Les signes de l’âme sœur' },
      { href: '/reconquete/va-t-il-elle-revenir/', label: 'Va-t-il ou va-t-elle revenir ?' },
      { href: '/voyance-gratuite-amour/', label: 'Voyance gratuite en amour : tirages immédiats' },
    ],
  };
}

export function generateStaticParams() {
  return getLiveHeuresMiroirs().map((h) => ({ heure: h.slug }));
}

export const dynamicParams = false;

interface Props {
  params: Promise<{ heure: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { heure } = await params;
  const h = findHeureMiroir(heure);
  if (!h) return {};
  return contentMeta(buildConfig(h));
}

export default async function HeureMiroirFlammeJumellePage({ params }: Props) {
  const { heure } = await params;
  const h = findHeureMiroir(heure);
  if (!h || validateHeureMiroirRecord(h).length > 0) notFound();

  const config = buildConfig(h);
  const autres = getLiveHeuresMiroirs().filter((x) => x.slug !== h.slug);

  return (
    <ContentPage config={config}>
      {/* Answer capsule, extractive snippet target */}
      <section className="mb-8 rounded-xl border border-gray-200 border-l-4 border-l-purple-700 bg-white p-6 md:p-8">
        <h2 className="mb-3 text-xl font-bold text-gray-900">
          Que signifie {h.slug} pour une flamme jumelle&nbsp;?
        </h2>
        <p className="text-lg leading-relaxed text-gray-800">{h.answerCapsule}</p>
      </section>

      {/* Funnel: back up to the hub entity, then across to the priority page */}
      <p className="mb-8 text-gray-600">
        Cette heure se lit toujours dans le contexte plus large de la{' '}
        <Link href={HUB} className="font-medium text-purple-700 underline hover:text-purple-900">
          connexion de flamme jumelle
        </Link>
        , ses phases et ses signes. {h.funnel.lead}{' '}
        <Link href="/voyance-gratuite-amour/" className="font-medium text-purple-700 underline hover:text-purple-900">
          {h.funnel.anchor}
        </Link>{' '}
        {h.funnel.tail}
      </p>

      <section id="signification" className="mb-8 rounded-xl border border-gray-200 bg-white p-6 md:p-8">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Ce que {h.slug} dit de votre lien de flamme jumelle
        </h2>
        <p className="leading-relaxed text-gray-700">{h.signification}</p>

        <h3 className="mb-2 mt-6 text-lg font-bold text-gray-900">Le nombre derrière {h.slug}</h3>
        <p className="leading-relaxed text-gray-700">{h.numerologie}</p>

        <h3 className="mb-2 mt-6 text-lg font-bold text-gray-900">L’arcane qui répond à cette heure</h3>
        <p className="leading-relaxed text-gray-700">{h.arcane.lecture}</p>
        <p className="mt-3 text-gray-700">
          <Link
            href={`/tarot-amour/${h.arcane.slug}/`}
            className="font-medium text-purple-700 underline hover:text-purple-900"
          >
            {h.arcane.nom} en amour
          </Link>{' '}
          détaille la carte, ses positions et sa lecture en tirage.
        </p>
      </section>

      <VoyantQuickCTA topic="nouvelle-rencontre" source={`heure-miroir-${h.slug}-early`} />

      <section id="que-faire" className="mb-8 rounded-xl border border-gray-200 bg-white p-6 md:p-8">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Que faire quand vous voyez {h.slug}</h2>
        <p className="leading-relaxed text-gray-700">{h.queFaire}</p>
        <ul className="mt-5 space-y-3">
          {h.actions.map((a, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 font-bold text-purple-700">→</span>
              <span className="leading-relaxed text-gray-700">{a}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8 rounded-xl border border-gray-200 bg-white p-6 md:p-8">
        <h2 className="mb-5 text-2xl font-bold text-gray-900">{h.slug} selon où vous en êtes</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-gray-200 pl-5">
            <h3 className="mb-2 text-lg font-bold text-gray-900">En séparation ou en silence radio</h3>
            <p className="leading-relaxed text-gray-700">{h.enSeparation}</p>
          </div>
          <div className="border-l-4 border-purple-700 pl-5">
            <h3 className="mb-2 text-lg font-bold text-gray-900">En reprise de contact ou en retrouvailles</h3>
            <p className="leading-relaxed text-gray-700">{h.enRetrouvailles}</p>
          </div>
        </div>
      </section>

      <section className="mb-8 rounded-xl border border-gray-200 bg-white p-6 md:p-8">
        <h2 className="mb-3 text-xl font-bold text-gray-900">Ce que {h.slug} ne prouve pas</h2>
        <p className="leading-relaxed text-gray-700">{h.neProuvePas}</p>
      </section>

      <section className="mb-8 rounded-xl border border-gray-200 bg-white p-6 md:p-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Les autres heures miroirs de flamme jumelle</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {autres.map((x) => (
            <Link
              key={x.slug}
              href={`${HUB}${x.slug}/`}
              className="block font-medium text-purple-700 hover:text-purple-900"
            >
              → {x.primaryQuery}
            </Link>
          ))}
        </div>
        <Link href={HUB} className="mt-4 inline-block text-sm font-semibold text-purple-700 hover:text-purple-900">
          Voir le guide complet de la flamme jumelle →
        </Link>
      </section>
    </ContentPage>
  );
}
