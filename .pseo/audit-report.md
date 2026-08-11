# pSEO Audit Report — voyantlove.fr (refreshed 2026-08-11)

**Supersedes** `.pseo/audit-report.md` (2026-07-29, scored 82/100 in `PSEO-STATUS-FINAL.md`). Re-run fresh against current repo state (`npm run validate`, `npm run build`, and full test suite were actually executed this run, not assumed).

## Framework & Rendering
- Next.js 15 App Router, React 19. Rendering is SSG throughout: dynamic hubs use `generateStaticParams` + `dynamicParams = false` (confirmed in `app/compatibilite-amoureuse/[pair]/page.tsx` and mirrored across all 5 dynamic hubs).
- `next.config.mjs`: `images.unoptimized: true`, `trailingSlash: true`, `skipTrailingSlashRedirect: true` with a documented reason (avoids a redirect hop on the affiliate click-out path and 404s on `/api/*`).
- `middleware.ts` implements multi-domain routing (voyantlove.fr FR content + lovepsychicguide.com EN content from one Next project), explicitly blocking `/en/*` from being served/indexed under the `.fr` TLD.
- `npm run build` completes successfully, exit 0, all routes prerender (○ static / ● SSG), no failures.
- **Readiness: Ready**

## Data Architecture
- No CMS/DB. Data lives in typed TS arrays: `lib/compatibilitePairs.ts` (81), `lib/tarotLoveCards.ts` (24), `lib/glossaire.ts` (55), `lib/revesAmour.ts` (13), `lib/signesAmour.ts` (14). Each exports a `validate<X>Record()` gate.
- Every dynamic route filters its data through its validator before generating params — thin/invalid records structurally cannot ship a page (`LIVE_PAIRS = COMPATIBILITY_PAIRS.filter(p => validatePairRecord(p).length === 0)` pattern, repeated per network). This is a stronger data-integrity pattern than most pSEO codebases have by default.
- `app/sitemap.ts` re-derives from the same filtered arrays, so sitemap can't drift from what actually builds.
- Two large dormant JSON asset sets (`data/entities/`, `data/intents/`, ~136KB combined) are **not imported anywhere** in `app/`, `lib/`, or `scripts/` (confirmed via repo-wide grep) — dead weight from earlier planning, not a current architecture gap. One file, `data/entities/voyance-amoureuse-relationships.json`, is malformed JSON (fails `JSON.parse`).
- `lib/horoscope2026.ts` exists but has no importing page — dormant data.
- The 99 hand-authored `page.tsx` files under `crise-couple`/`reconquete`/`rupture`/`sentiments`/`nouvelle-rencontre`/`methodes-voyance`/`voyance-gratuite-amour` have **no shared data model or validator** — each is bespoke code. This is the one real architectural inconsistency: two coexisting patterns (typed-array-driven hubs vs. hand-coded pages) with no automated integrity check on the second group beyond the page-audit warnings.
- **Readiness: Ready** for the typed-array hub pattern; **Needs Work** on unifying/validating the 99 hand-authored pages if that cluster continues to scale.

## Routing & Templates
- Dynamic segments (`[pair]`, `[carte]`, `[terme]`, `[reve]`, `[signe]`) each produce genuinely differentiated content — confirmed by reading `app/compatibilite-amoureuse/[pair]/page.tsx`: per-record title/description/schema/related-pairs (`siblings`), not variable-swapped boilerplate.
- `dynamicParams = false` on all checked hubs means invalid slugs 404 cleanly rather than soft-404ing or dynamically rendering garbage.
- No catch-all routes found; no orphan dynamic-route risk.
- **Readiness: Ready**

## SEO Foundations
- `generateMetadata` present per-record on dynamic hubs with self-referencing canonical (`alternates: { canonical: ... }`).
- `lib/schema.ts` provides Article, FAQPage, BreadcrumbList, Organization, WebSite, Person(author) schema helpers, used across templates.
- `app/sitemap.ts` is comprehensive and validation-gated (see Data Architecture).
- `public/robots.txt` explicitly allows major AI/LLM crawlers (GPTBot, ChatGPT-User, CCBot, anthropic-ai, PerplexityBot, etc.) alongside standard rules; blocks `/api/`, `/admin/`, `/lp/`. `public/llms.txt` exists (6.7KB per prior status report).
- `npm run validate` (the repo's own quality gate, see Content Quality Safeguards) currently reports **0 errors, 14 warnings**:
  - `/consulter/` and `/contact/` missing metadata export / structured data
  - Homepage title uses an `absolute` override bypassing the site-wide title-suffix template (likely intentional for the homepage, but worth a one-line confirmation)
  - 10 keyword-cannibalization warnings (75% title-word overlap), e.g. `/rupture/rever-de-son-ex/` vs. several `/reves-amour/rever-de-*` pages, and `/glossaire/amour-karmique/` vs `/glossaire/corde-karmique/`
- **Readiness: Ready**, with a short warning backlog (see Priority Actions)

## Internal Linking
- Breadcrumb usage found across templates (`getBreadcrumbSchema` + breadcrumb JSX in `rupture`, `reconquete`, `voyance-gratuite-amour` pages and others).
- Hub-spoke linking confirmed in the pair-compatibility template (`siblings` — related pairs sharing a sign, capped at 4).
- The validator's own orphan-detection explicitly scopes out dynamic `[param]` pages ("structurally linked via their hub's `.map()`, not a grep-able literal href") and instead checks literal-href orphaning + broken internal links for the static pages — this ran clean (no orphan/broken-link errors in the 0-error result).
- **Readiness: Ready**

## Performance at Scale
- Static export/SSG at ~135 total routes; build completes without OOM or timeout concerns at this scale (well under the range where Next.js SSG needs special handling).
- `images.unoptimized: true` disables Next's built-in image optimization sitewide. Only 3 files use `next/image`; 5 use raw `<img>`. At current scale (~135 pages, mostly text-first) this is a minor concern, not a blocker, but is the one performance line item worth a deliberate look rather than default-on.
- No ISR/ on-demand revalidation configured — appropriate given fully static content; a `vercel.json` cron exists for an unrelated daily-digest API job, not page revalidation.
- **Readiness: Ready** for current scale; would need reassessment only if page count grows an order of magnitude (not currently planned per discovery)

## Content Quality Safeguards
- The project has its own bespoke quality-guard equivalent: `scripts/validate-pseo.ts` + `scripts/pseo-validate/{page-audit,text-similarity}.ts`, covering: per-network validator re-run as CI-blocking, slug uniqueness, `generateStaticParams`/sitemap drift, static-source metadata/canonical/schema audit (warnings), orphan/broken-link detection, cross-page title-cannibalization detection, within-network answer-capsule near-duplicate detection, and glossary referential integrity (`termesLies` must resolve to a live entry).
- `npm run validate`: 0 errors, 14 warnings (details above).
- 74 automated tests pass (`tests/*.test.ts`), including two tests specifically asserting the validator itself is correct and deterministic (`runValidation reports zero blocking errors against the live repository`, `runValidation is deterministic across two runs`).
- **Readiness: Ready** — this section is unusually mature for a codebase of this size; a generic `pseo-quality-guard` pass would be largely duplicating checks this repo already runs on every `npm run validate`.

## Priority Actions (ordered)
1. Resolve the 2 missing-metadata pages (`/consulter/`, `/contact/`) — cheap, direct fix, no dependency on anything else.
2. Review the 10 title-cannibalization warnings — likely acceptable (different symbols/terms under a shared naming pattern) but worth a human pass to confirm none are true duplicates before any further content is added to `reves-amour` or `glossaire`.
3. Confirm the homepage's `absolute` title override is intentional (1-line check).
4. If Proposal #1 from discovery (numerology pair hub) is confirmed: author the missing 37 pair write-ups following the existing `COMPATIBILITY_PAIRS` pattern before building the route — data gap, not a code gap.
5. Decide on a freshness-pipeline approach before starting the horoscope hub (Proposal #3) — this is an architecture decision, not a quick fix.
6. Optional/low-priority: delete or clearly mark `data/entities/`, `data/intents/`, `lib/horoscope2026.ts` as unused-pending-decision so future contributors don't assume they're wired in; fix the malformed `relationships.json` if it's ever revived.

## Recommended Skill Sequence
Given this is a mature, already-implemented site rather than a greenfield build, the standard full pipeline is mostly already satisfied:
- **pseo-data**: only needed narrowly, to extend `lib/numerology.ts` with the missing pair records if Proposal #1 is confirmed. Not a general data-layer build.
- **pseo-templates**: only needed if Proposal #1 (numerology hub) or #2 (continued rêves-amour expansion) is confirmed — would reuse the existing `[pair]`/`[reve]` template pattern almost as-is.
- **pseo-linking**: no gap found; skip.
- **pseo-metadata**: narrow fix for `/consulter/` and `/contact/`; skip broad implementation.
- **pseo-schema**: narrow fix for `/consulter/` and `/contact/`; skip broad implementation.
- **pseo-performance**: optional — review `images.unoptimized` decision and raw `<img>` usage; not urgent at current scale.
- **pseo-llm-visibility**: largely already implemented (robots.txt AI-crawler allowlist, llms.txt present) — worth a light verification pass only.
- **pseo-quality-guard**: the repo already has an equivalent; recommend running it as a final confirmation pass rather than introducing a parallel/duplicate system.
- **pseo-scale**: not applicable — page count (~135) is far below the 10K threshold.

This audit found no blocking gaps. Everything below "Priority Actions" is either a scoped enhancement contingent on which discovery proposals get confirmed, or a small warning-cleanup item — not a foundational rebuild.
