import Link from 'next/link';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';

const COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: 'Amour & Couple',
    links: [
      { href: '/reconquete/', label: 'Reconquête amoureuse' },
      { href: '/rupture/', label: 'Rupture & guérison' },
      { href: '/nouvelle-rencontre/', label: 'Nouvelle rencontre' },
      { href: '/sentiments/', label: 'Sentiments & avenir' },
      { href: '/crise-couple/', label: 'Crise de couple' },
    ],
  },
  {
    title: 'Voyance & Tarot',
    links: [
      { href: '/voyance-amour/', label: 'Voyance amour' },
      { href: '/methodes-voyance/', label: 'Méthodes de voyance' },
      { href: '/tarot-amour/', label: 'Tarot amour' },
      { href: '/reves-amour/', label: 'Rêves amoureux' },
      { href: '/voyance-gratuite-amour/', label: 'Voyance gratuite' },
      { href: '/glossaire/', label: 'Glossaire de la voyance' },
    ],
  },
  {
    title: 'Outils',
    links: [
      { href: '/compatibilite-amoureuse/', label: 'Compatibilité des signes' },
      { href: '/astrologie-amour/', label: 'Signes en amour' },
      { href: '/methodes-voyance/numerologie-amoureuse/', label: 'Numérologie amoureuse' },
      { href: '/methodes-voyance/synastrie-amoureuse/', label: 'Synastrie' },
      { href: '/voyance-gratuite-amour/horoscope-amour-2026/', label: 'Horoscope amour 2026' },
    ],
  },
  {
    title: 'VoyantLove',
    links: [
      { href: '/consulter/', label: 'Consulter un voyant' },
      { href: '/a-propos/', label: 'À propos' },
      { href: '/contact/', label: 'Contact' },
      { href: '/mentions-legales/', label: 'Mentions légales' },
      { href: '/confidentialite/', label: 'Confidentialité' },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h2 className="text-sm font-bold text-white uppercase tracking-wide mb-3">{col.title}</h2>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-gray-400 hover:text-white transition">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-1.5 font-bold text-white">
            <span>💜</span><span>VoyantLove</span>
          </Link>
          <AffiliateDisclosure variant="inline" className="text-center md:text-right md:max-w-lg" />
        </div>
      </div>
    </footer>
  );
}
