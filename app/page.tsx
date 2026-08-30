import type { Metadata } from 'next';
import Link from 'next/link';
import { getOrganizationSchema, getWebSiteSchema, getFAQSchema, getAuthorSchema } from '@/lib/schema';
import VoyantRail from '@/components/VoyantRail';
import TestimonialSection from '@/components/TestimonialSection';
import TrustBadges from '@/components/TrustBadges';
import DynamicCTAButton from '@/components/DynamicCTAButton';
import Icon, { type IconName } from '@/components/Icon';

export const metadata: Metadata = {
  title: {
    absolute: 'Voyant ou Voyante Amour en Ligne | VoyantLove',
  },
  description: 'Voyant amour en ligne : consultez un voyant ou une voyante spécialisé en amour. Reconquête, sentiments, rencontre, rupture. Tarot et clairvoyance, 10 min offertes.',
  alternates: { canonical: 'https://www.voyantlove.fr/' },
};

// One accent colour, not seven. The grid used to carry a different border
// colour per card — purple, charcoal, cyan, red, orange, indigo, green — which
// gave the eye no way to tell what mattered. Differentiation comes from the
// icon and the label now.
const SITUATIONS: { href: string; icon: IconName; title: string; desc: string }[] = [
  { href: '/reconquete/', icon: 'heart', title: 'Reconquête amoureuse', desc: 'Reconquérir votre ex, timing idéal, signes de retour.' },
  { href: '/rupture/', icon: 'heartbreak', title: 'Rupture et guérison', desc: 'Comprendre, surmonter le chagrin, oublier son ex.' },
  { href: '/nouvelle-rencontre/', icon: 'sparkle', title: 'Nouvelle rencontre', desc: 'Trouver l’amour, quand, reconnaître votre âme sœur.' },
  { href: '/sentiments/', icon: 'chat', title: 'Sentiments et avenir', desc: 'Décrypter ses sentiments, signes d’amour, prédictions.' },
  { href: '/crise-couple/', icon: 'alert', title: 'Crise de couple', desc: 'Infidélité, jalousie, communication : que faire.' },
  { href: '/methodes-voyance/', icon: 'moon', title: 'Méthodes de voyance', desc: 'Tarot, oracle, astrologie et leurs spécificités.' },
  { href: '/voyance-gratuite-amour/', icon: 'gift', title: 'Voyance gratuite amour', desc: 'Tirages et guidance sentimentale sans engagement.' },
];


const FAQ_ITEMS = [
  {
    q: 'Comment fonctionne VoyantLove ?',
    a: 'VoyantLove est une plateforme de consultation avec des voyants spécialisés en questions sentimentales. Vous choisissez votre situation (reconquête, sentiments, rupture, rencontre, crise de couple), explorez nos guidances gratuites, puis réservez une consultation privée avec un voyant expert si vous souhaitez une analyse personnalisée. Chaque voyant utilise le tarot, la clairvoyance ou l’astrologie selon votre question.',
  },
  {
    q: 'Comment sont sélectionnés les voyants VoyantLove ?',
    a: 'Chaque voyant de notre équipe passe un processus de sélection rigoureux. Nous vérifions un minimum de 5 ans d’expérience en guidance sentimentale, la qualité des avis clients, et l’engagement à respecter notre charte éthique : pas de promesses irréalistes, pas de vente de rituels, et une posture bienveillante qui rend le consultant autonome plutôt que dépendant.',
  },
  {
    q: 'Combien coûte une consultation sur VoyantLove ?',
    a: 'Les tarifs varient selon le voyant choisi et la durée de la consultation. Le tarif à la minute est affiché sur la fiche de chaque voyant, avant tout engagement. Nous offrons 10 minutes gratuites pour découvrir le service. Nos guidances en ligne (reconquête, sentiments, rupture, etc.) sont entièrement gratuites et accessibles sans inscription.',
  },
  {
    q: 'Mes consultations sont-elles confidentielles ?',
    a: 'Oui, totalement. Vos consultations restent strictement privées. Aucune donnée personnelle n’est partagée avec des tiers, et votre historique de consultation n’est accessible qu’à vous. Nous respectons le RGPD et les normes européennes de protection des données.',
  },
  {
    q: 'Quelle différence entre les guidances gratuites et une consultation privée ?',
    a: 'Nos guidances gratuites sont des analyses générales par situation (reconquête, rupture, sentiments...) qui vous donnent des repères et des conseils basés sur le tarot. Une consultation privée est un échange individuel avec un voyant qui analyse VOTRE situation spécifique : les sentiments en jeu, les blocages, le timing. C’est la différence entre lire un guide et avoir un GPS personnalisé.',
  },
  {
    q: 'Peut-on consulter un voyant VoyantLove par téléphone ou par chat ?',
    a: 'Oui, nos voyants sont disponibles par téléphone et par chat en ligne. Choisissez le mode qui vous met le plus à l’aise. La qualité de la lecture est identique quel que soit le canal, ce qui compte, c’est la connexion énergétique entre vous et le voyant, pas le support technique.',
  },
];

const STEPS = [
  { n: '1', title: 'Choisissez votre situation', desc: 'Reconquête, rencontre, doute, crise : la problématique qui correspond à votre vécu.' },
  { n: '2', title: 'Découvrez la guidance tarot', desc: 'Timing, étapes à suivre, erreurs à éviter, selon les cartes. Gratuit et sans inscription.' },
  { n: '3', title: 'Consultez un voyant si besoin', desc: 'Pour une analyse 100 % personnalisée, au tarif affiché sur sa fiche.' },
];

export default function HomePage() {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();
  const authorSchema = getAuthorSchema();
  const faqSchema = getFAQSchema(FAQ_ITEMS.map(({ q, a }) => ({ question: q, answer: a })));

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />

      {/* ---------------------------------------------------------------
          HERO — flat and editorial.

          Was a full-bleed purple gradient slab with three centred white text
          sizes stacked on it. The gradient carried no information, centred
          body copy is harder to read, and the slab pushed the voyants down.
          Now: white ground, left-aligned type, one accent, one action.
          --------------------------------------------------------------- */}
      <section className="border-b border-gray-200 bg-white px-4 pb-7 pt-8 sm:pt-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-[1.75rem] font-bold leading-[1.15] tracking-tight text-gray-900 sm:text-4xl">
            Voyance amoureuse par téléphone et par chat
          </h1>
          {/* "voyante" carries its own search demand alongside "voyant", so the
              hero has to cover both. */}
          <p className="mt-2 text-base font-medium text-purple-700 sm:text-lg">
            Nos voyants et voyantes spécialisés en amour
          </p>
          <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-gray-600">
            Reconquête, sentiments, rupture, rencontre : consultez un voyant qui se consacre
            exclusivement aux questions du cœur. Tarif à la minute affiché, sans inscription.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
            <DynamicCTAButton
              label="Consulter un voyant"
              source="homepage-hero-primary"
              className="inline-block rounded-lg bg-purple-700 px-6 py-3.5 font-semibold text-white transition hover:bg-purple-800"
            />
            <span className="text-sm text-gray-500">10 minutes offertes pour découvrir le service</span>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          ZONE VOYANTS — tous les rails, avant tout contenu éditorial.

          Le premier rail n'est pas paresseux : il est au-dessus de la ligne
          de flottaison et le différer coûterait exactement ce que cette
          refonte achète, un visage de voyant sur le premier écran. Le
          deuxième non plus, il tombe dans les deux premiers écrans. Les deux
          derniers le restent, avec l'échéance de repli de VoyantRail.

          Chaque rail trie sur un champ que le flux partenaire renvoie
          vraiment. Il n'y a volontairement PAS de rail « nouveaux voyants » :
          le flux ne porte aucune date d'inscription et il n'existe aucun
          moyen honnête d'en déduire une.
          --------------------------------------------------------------- */}
      <section className="bg-white px-4 py-6">
        <div className="mx-auto max-w-6xl space-y-8">
          <VoyantRail
            title="Voyants disponibles maintenant"
            fallbackTitle="Nos voyants amour"
            onlineOnly
            subtitle="Tarif à la minute affiché sur chaque fiche."
            limit={16}
            source="homepage-rail-online"
            lazy={false}
          />
          <VoyantRail
            title="Les mieux notés"
            subtitle="Classés par note moyenne, puis par nombre d’avis."
            limit={16}
            source="homepage-rail-top-rated"
            sortBy="rating"
          />
          <VoyantRail
            title="Les plus consultés"
            subtitle="Ceux que nos visiteurs appellent le plus."
            limit={16}
            source="homepage-rail-most-consulted"
            sortBy="consultations"
            lazy
          />
          <VoyantRail
            title="Disponibles par téléphone"
            subtitle="Ligne ouverte en ce moment."
            limit={16}
            source="homepage-rail-phone"
            telOnly
            lazy
          />
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-gray-200 bg-gray-50 px-4 py-4">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-4">
          {[
            { icon: 'heart' as IconName, t: 'Spécialistes amour', d: 'Questions sentimentales uniquement' },
            { icon: 'check' as IconName, t: 'Tarif affiché', d: 'En euros, à la minute, avant l’appel' },
            { icon: 'sparkle' as IconName, t: 'Sans inscription', d: 'Guidances gratuites en accès libre' },
            { icon: 'lock' as IconName, t: 'Confidentiel', d: 'Consultations 100 % privées' },
          ].map((x) => (
            <div key={x.t} className="flex items-start gap-2">
              <Icon name={x.icon} size={17} className="mt-0.5 text-purple-700" />
              <div className="min-w-0">
                <div className="text-sm font-semibold text-gray-900">{x.t}</div>
                <div className="text-xs leading-snug text-gray-600">{x.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works — 3 stacked rows (≈420px) collapsed into a 3-col row. */}
      <section id="about" className="bg-white px-4 py-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-center text-2xl font-bold sm:text-3xl">
            Comment fonctionne VoyantLove ?
          </h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {STEPS.map((step) => (
              <div key={step.n} className="flex gap-3 sm:flex-col sm:gap-2 sm:text-center">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-purple font-bold text-white sm:mx-auto">
                  {step.n}
                </div>
                <div>
                  <h3 className="font-bold">{step.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Situations — the site's real IA. Compacted from p-6/gap-8 cards. */}
      <section id="situations" className="bg-gray-50 px-4 py-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-2 text-center text-2xl font-bold sm:text-3xl">
            Nos consultations spécialisées
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-center text-sm text-gray-600">
            Chaque situation amoureuse est unique. Découvrez la guidance adaptée à la vôtre.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SITUATIONS.map((item) => (
              <Link key={item.href} href={item.href} className="group">
                <div className="h-full rounded-lg border border-gray-200 bg-white p-4 transition hover:border-purple-300 hover:shadow-sm">
                  <Icon name={item.icon} size={22} className="mb-2 text-purple-700" />
                  <h3 className="mb-1 font-semibold text-gray-900 transition group-hover:text-purple-700">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-4">
      </div>

      {/* Why VoyantLove — 4 cards kept, padding halved. */}
      <section className="bg-white px-4 py-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-3 text-center text-2xl font-bold sm:text-3xl">
            Pourquoi choisir VoyantLove ?
          </h2>
          <p className="mx-auto mb-6 max-w-3xl text-center text-gray-700">
            VoyantLove n’est pas une plateforme de voyance généraliste. Chaque voyant de notre
            équipe est spécialisé en questions sentimentales, c’est notre seul métier.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <h3 className="mb-1 flex items-center gap-2 font-semibold text-gray-900"><Icon name="check" size={18} className="text-purple-700" />100 % spécialisés amour</h3>
              <p className="text-sm text-gray-600">Nos praticiens ne traitent que les problématiques du cœur : reconquête, sentiments, rupture, rencontre, crise de couple.</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <h3 className="mb-1 flex items-center gap-2 font-semibold text-gray-900"><Icon name="shield" size={18} className="text-purple-700" />Voyants sélectionnés</h3>
              <p className="text-sm text-gray-600">Minimum 5 ans d’expérience, avis clients authentiques et engagement éthique.</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <h3 className="mb-1 flex items-center gap-2 font-semibold text-gray-900"><Icon name="chat" size={18} className="text-purple-700" />Réponses franches</h3>
              <p className="text-sm text-gray-600">Nos voyants vous disent ce qu’ils voient, même quand c’est difficile à entendre. Zéro promesse irréaliste, zéro vente de rituels.</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <h3 className="mb-1 flex items-center gap-2 font-semibold text-gray-900"><Icon name="lock" size={18} className="text-purple-700" />Confidentialité totale</h3>
              <p className="text-sm text-gray-600">Vos consultations restent strictement privées. Aucune donnée partagée, aucun historique accessible à des tiers.</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link href="/voyance-amour/" className="font-semibold text-purple-700 underline hover:text-purple-900">
              Découvrir notre approche de la voyance amoureuse →
            </Link>
          </div>
          <div className="mt-8">
            <TrustBadges />
          </div>
        </div>
      </section>

      {/* Testimonials — 6 → 3. At 476px each, the other three cost a full
          screen and a half for no additional persuasion. */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50">
        <TestimonialSection
          title="Ce que disent nos clients"
          subtitle="Des retours de personnes venues avec une question sentimentale précise"
          limit={3}
          showVoyantName={true}
        />
      </section>

      {/* FAQ — same six answers, same FAQPage schema (built from the same
          array above), but collapsed. The text stays in the DOM for crawlers;
          only its rendered height goes away. */}
      <section className="bg-white px-4 py-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-2xl font-bold sm:text-3xl">
            Questions fréquentes sur VoyantLove
          </h2>
          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {FAQ_ITEMS.map((item) => (
              <details key={item.q} className="group py-3">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-gray-900">
                  <h3 className="text-base">{item.q}</h3>
                  <span className="shrink-0 text-purple-700 transition-transform group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-gray-900 px-4 py-10 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
            Besoin d’une guidance personnalisée ?
          </h2>
          <p className="mb-6 opacity-90">
            Consultez un voyant spécialisé en amour pour une analyse adaptée à votre situation.
          </p>
          <DynamicCTAButton
            label="Consulter un voyant maintenant"
            source="homepage-cta-primary"
            className="inline-block rounded-lg bg-purple-600 px-8 py-4 font-semibold text-white transition hover:bg-purple-500"
            voyantIndex={0}
          />
          <div className="mt-6">
            <TrustBadges variant="compact" />
          </div>
        </div>
      </section>
      {/* The page-local <footer> that used to sit here duplicated SiteFooter
          from app/layout.tsx — two footers, two copyright lines, two sets of
          legal links. Removed. */}
    </main>
  );
}
