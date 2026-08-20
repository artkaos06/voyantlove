'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon';

interface NavLink {
  href: string;
  label: string;
}
interface NavGroup {
  label: string;
  links: NavLink[];
}

const NAV: NavGroup[] = [
  {
    label: 'Situations',
    links: [
      { href: '/reconquete/', label: 'Reconquête amoureuse' },
      { href: '/rupture/', label: 'Rupture & guérison' },
      { href: '/nouvelle-rencontre/', label: 'Nouvelle rencontre' },
      { href: '/sentiments/', label: 'Sentiments & avenir' },
      { href: '/crise-couple/', label: 'Crise de couple' },
    ],
  },
  {
    label: 'Voyance & Tarot',
    links: [
      { href: '/methodes-voyance/', label: 'Méthodes de voyance' },
      { href: '/tarot-amour/', label: 'Tarot amour' },
      { href: '/reves-amour/', label: 'Rêves amoureux' },
      { href: '/astrologie-amour/', label: 'Signes en amour' },
      { href: '/compatibilite-amoureuse/', label: 'Compatibilité des signes' },
      { href: '/methodes-voyance/numerologie-amoureuse/', label: 'Numérologie amoureuse' },
      { href: '/methodes-voyance/synastrie-amoureuse/', label: 'Synastrie' },
      { href: '/voyance-gratuite-amour/', label: 'Voyance gratuite' },
    ],
  },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-1.5 font-bold text-lg text-purple-700 shrink-0" onClick={() => setMobileOpen(false)}>
          {/* Was a 💜 emoji, i.e. an OS-rendered glyph as the brand mark. */}
          <Icon name="heart" size={19} className="text-purple-700" />
          <span>VoyantLove</span>
        </Link>

        {/* Desktop nav, CSS hover/focus dropdowns, no JS state */}
        <div className="hidden md:flex items-center gap-1">
          {NAV.map((group) => (
            <div key={group.label} className="relative group">
              <button
                type="button"
                className="px-3 py-2 text-sm font-medium text-gray-700 group-hover:text-purple-700 rounded-lg group-hover:bg-purple-50 transition flex items-center gap-1"
              >
                {group.label}
                <span className="text-xs transition-transform group-hover:rotate-180">▾</span>
              </button>
              {/* pt-1 keeps the panel touching the button so hover doesn't drop */}
              <div className="absolute left-0 top-full pt-1 w-60 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-150">
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2">
                  {group.links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <Link href="/voyance-amour/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-700 rounded-lg hover:bg-purple-50 transition">
            Voyance Amour
          </Link>
          <Link href="/consulter/" className="ml-2 bg-purple-700 hover:bg-purple-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition">
            🔮 Consulter
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <Link href="/consulter/" className="bg-purple-700 hover:bg-purple-800 text-white text-sm font-semibold px-3 py-1.5 rounded-lg transition">
            Consulter
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 text-gray-700 hover:text-purple-700 text-lg leading-none"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor"
                 strokeWidth={1.75} strokeLinecap="round" aria-hidden="true">
              {mobileOpen
                ? <path d="M5 5l14 14M19 5L5 19" />
                : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white max-h-[70vh] overflow-y-auto">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-4">
            {NAV.map((group) => (
              <div key={group.label}>
                <div className="text-xs font-bold uppercase tracking-wide text-purple-600 mb-1">{group.label}</div>
                <div className="flex flex-col">
                  {group.links.map((l) => (
                    <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="py-2 text-gray-700 hover:text-purple-700">
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link href="/voyance-amour/" onClick={() => setMobileOpen(false)} className="block py-2 font-medium text-gray-800 hover:text-purple-700">
              Voyance Amour
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
