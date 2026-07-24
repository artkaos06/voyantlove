# pSEO Audit Report — voyantlove.fr (2026-07-24)

### Framework & Rendering
Next.js App Router, static prerender (all routes marked ○ in build), Vercel deploy on push to `main`. Build is clean at current 100-page scale.

### Data Architecture — Readiness: **Needs Work**
- Typed data libs exist and are runtime-imported: `lib/zodiac.ts`, `lib/numerology.ts`, `lib/tarotDeck.ts`, `lib/oracleDeck.ts`, `lib/horoscope2026.ts` — good foundation, but pair/card records are too thin to power unique pages (see discovery).
- Older planning JSON (`data/entities/*`, `data/intents/*`) is unused by the app; one file has a JSON syntax error.
- No slug-generation layer (never needed — no dynamic routes yet). Pair slugs need a canonical-ordering rule (`belier-taureau`, never `taureau-belier`) to avoid duplicate URLs.

### Routing & Templates — Readiness: **Missing (for pSEO)**
- **Zero dynamic route segments** in `app/` — all 100 pages are hand-authored folders. The proposed page types require the site's first `[slug]/page.tsx` + `generateStaticParams`.
- No `app/not-found.tsx`; invalid slugs on a future dynamic route need `notFound()` handling.

### SEO Foundations — Readiness: **Needs Work**
- Per-page metadata + canonicals: present everywhere (title template collision on ~20 legacy pages still open — known issue).
- JSON-LD: Article/FAQ/Breadcrumb/Author on all content pages via `lib/schema.ts` helpers — strong.
- `app/sitemap.ts` is a **hand-maintained hardcoded list** — already drifted once (fixed Jul 22). Generated pages must append programmatically from the data layer.
- `public/robots.txt` and `public/llms.txt` both exist.
- OG tags: site-wide default in `app/layout.tsx` only; no per-page overrides (minor).

### Internal Linking — Readiness: **Ready (pattern exists)**
- Hub-spoke with card grids + breadcrumb schema is an established, consistent pattern; new page types must plug into it (hub page + calculator deep-links).
- ⚠ Cannibalization risk to resolve by design: `/sentiments/compatibilite-amoureuse` (existing article) vs new pair hub; `/methodes-voyance/tirage-tarot-amour` vs new card pages.

### Performance at Scale — Readiness: **Ready**
- ~150 added static pages is trivial for this build (current build < 60s, pages ~112 kB first-load). No ISR needed.

### Content Quality Safeguards — Readiness: **Missing**
- No automated checks for content length, duplicate text, or title uniqueness. Hand-authoring made this tolerable; generated pages need quality-guard thresholds enforced at the data layer (each pair record validated before a page is emitted).

### Priority Actions
1. Build enriched pair/card data layer with per-record validation (pseo-data) — the actual bottleneck
2. First dynamic route + template for sign pairs, with canonical slug ordering + `notFound()` (pseo-templates)
3. Wire sitemap generation from data layer; add hub page + calculator deep-links (pseo-linking)
4. Per-page metadata/schema for generated pages (pseo-metadata + pseo-schema — template-level, one-time)
5. Quality-guard pass over generated output before ship (pseo-quality-guard)

### Recommended Skill Sequence
pseo-data → pseo-templates → pseo-linking → pseo-metadata + pseo-schema (parallel, in-template) → pseo-quality-guard. Skip pseo-scale (<10K). pseo-performance: no action needed. pseo-llm-visibility: llms.txt exists; extend it with new hub when shipped.

### Feasibility verdict on discovery proposals
- Sign-pair pages: **feasible** — blocked only on data enrichment (78 records)
- Tarot card pages: **feasible** — blocked on enrichment (24 records)
- Numerology pairs: feasible, defer to wave 2
