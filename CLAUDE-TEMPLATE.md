# CLAUDE.md — pSEO Website Project Instructions

> Copy this file as `CLAUDE.md` into the root of any new project. Replace all `{PLACEHOLDERS}` with your niche-specific values.

---

## Project Overview

- **Site**: {DOMAIN} — {NICHE_DESCRIPTION}
- **Stack**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **Output**: Static export (`output: 'export'`) deployed on Vercel
- **Language**: {LANGUAGE_CODE} (e.g., fr-FR)
- **Architecture**: Hub-and-spoke pSEO with semantic entity graph

## pSEO Framework — 11 Skills

When building or expanding this site, follow these skills in order:

### Skill 1: pseo-discovery
**Purpose**: Identify high-value pages to create based on entity gaps and intent coverage.
**Process**:
1. Read `data/entities/{niche}-entities.json` — check which entities have no dedicated page
2. Read `data/intents/{niche}-intent-taxonomy.json` — check which intents are underserved
3. Read `data/entities/{niche}-relationships.json` — find semantic clusters with gaps
4. Analyze hub balance — each hub should have 5+ spoke pages
5. Prioritize by: search volume (critical first) > emotional intensity > hub balance

### Skill 2: pseo-templates
**Purpose**: Use content templates from the data layer to structure pages.
**Process**:
1. Read `data/intents/{niche}-templates-complete.json`
2. Match the page's intent to a template
3. Use the template's answer capsule structure, section headings, FAQ patterns
4. Adapt (don't copy) — each page must have unique content
5. Follow Korey Turkberg entity density rules (see below)

### Skill 3: pseo-metadata
**Purpose**: Generate SEO-optimized metadata for each page.
**Rules**:
- Title: max 60 characters, primary keyword first, brand last
- Description: max 155 characters, include CTA language
- Keywords: 5-8 terms from entity database
- Canonical URL: always set, always absolute
- No duplicate titles or descriptions across the site

### Skill 4: pseo-schema
**Purpose**: Implement structured data on every page.
**Rules**:
- Content pages: `ArticleSchema` + `BreadcrumbSchema` + `FAQSchema`
- Hub pages: `WebPageSchema` (CollectionPage) + `BreadcrumbSchema` + `OrganizationSchema` + `FAQSchema`
- Homepage: `OrganizationSchema` + `WebSiteSchema` + `FAQSchema`
- All schemas as JSON-LD in `<script>` tags
- Use `lib/schema.ts` helper functions

### Skill 5: pseo-quality-guard
**Purpose**: Enforce content quality standards on every page.
**Checklist**:
- [ ] 1,500+ words (content pages) or 500+ words (hub pages)
- [ ] Answer capsule: exactly 150-170 words with 7+ bolded entities
- [ ] Entity density: 5-7 entities per 200 words
- [ ] All entities wrapped in `<strong>` tags
- [ ] 4+ FAQ questions with 80-150 word answers
- [ ] 3 semantic internal links (max 1 per 150 words)
- [ ] EEATSignal component present
- [ ] No duplicate content across pages
- [ ] Build passes with 0 errors

### Skill 6: pseo-linking
**Purpose**: Build internal link architecture based on semantic relationships.
**Rules**:
1. Read `data/entities/{niche}-relationships.json` for link targets
2. Each content page: 3 internal links to related pages
3. Anchor text: descriptive, varied, never "click here"
4. Placement: mid-paragraph, natural flow
5. Density: max 1 link per 150 words
6. Hub pages link to ALL spoke pages via card grid
7. Spoke pages link back to hub + 2-3 sibling spokes
8. Cross-cluster links for topical authority

### Skill 7: pseo-llm-visibility
**Purpose**: Optimize content for AI citation (ChatGPT, Perplexity, Google AI).
**Rules**:
- Answer capsule (150-170 words) = featured snippet + AI citation target
- 3-paragraph structure: problem + data + guidance
- 7+ bolded entities for knowledge graph extraction
- Clear, authoritative language (no hedging)
- FAQ answers as self-contained knowledge units (80-150 words each)

### Skill 8: pseo-scale
**Purpose**: Systematic approach to scaling from 25 to 100+ pages.
**Process**:
1. Phase 1: 5 hubs x 5 spokes = 25 pages (foundation)
2. Phase 2: Add 5 more spokes per hub = 50 pages
3. Phase 3: Long-tail variations + comparisons = 100+ pages
4. Each batch: create data layer entries first, then pages, then links
5. Always update sitemap.xml after adding pages

### Skill 9: pseo-performance
**Purpose**: Maintain fast load times and Core Web Vitals.
**Rules**:
- Static export only (no SSR runtime)
- No unoptimized images (use next/image or skip)
- Tailwind CSS (no external stylesheets)
- Minimal JavaScript (no unnecessary client components)
- Build must complete under 60 seconds
- Each page < 200KB total

### Skill 10: pseo-audit
**Purpose**: Regular quality audits across all pages.
**Process**:
1. Run `npm run build` — must produce 0 errors
2. Count total pages in build output — must match sitemap entries
3. Verify all sitemap URLs resolve
4. Check entity coverage vs entity database
5. Verify all hub pages link to all their spokes

### Skill 11: pseo-orchestrate
**Purpose**: Coordinate multi-page creation sessions.
**Process**:
1. Run pseo-discovery to identify next pages
2. Present plan to user for approval
3. Create pages in parallel (up to 5 at once)
4. Update hub pages with new navigation cards
5. Update sitemap.xml
6. Run build to verify
7. Commit and push

---

## Korey Turkberg Semantic SEO Method

### Answer Capsule Pattern
Every content page MUST have an answer capsule immediately after the intro:
- **150-170 words** (strict range)
- **7+ entities bolded** with `<strong>` tags
- **3 paragraphs**: hook with entities → statistic/data → actionable guidance
- **Visual styling**: colored left border + light background (`bg-{color}-50 border-l-4 border-{color}-500`)

### Entity Density Rules
- **5-7 entities per 200 words** across the entire page
- **Bold all entity mentions** — `<strong>entity term</strong>`
- **Use synonyms** — don't repeat the exact same term; pull from entity `synonyms` array
- **Natural integration** — entities must flow in sentences, never feel forced

### Internal Linking Rules
- **Maximum**: 1 link per 150 words
- **Minimum**: 3 links per content page
- **Anchor text**: 3-6 word descriptive phrases, varied across pages
- **Position**: mid-paragraph, never in lists or as standalone lines
- **Source**: relationship graph determines link targets

### FAQ Rules
- **4-5 questions per page** minimum
- **80-150 words per answer**
- **3-4 entities per answer** (bolded)
- **Match real search queries** from intent taxonomy `queryPatterns`
- **Always implement FAQPage schema**

---

## Content Creation Prompt

When creating a new content page, follow this exact sequence:

1. **Determine**: intent, hub, slug, entities to cover
2. **Metadata**: title (60 chars), description (155 chars), keywords, canonical
3. **Schemas**: ArticleSchema + BreadcrumbSchema + FAQSchema
4. **Header**: gradient colors, H1 with emoji, subtitle, breadcrumb link
5. **Stats bar**: 4 metrics (percentage, count, rating, claim)
6. **EEATSignal**: appropriate color + method
7. **Intro paragraph**: emotional hook, 2-3 entities
8. **Answer capsule**: 150-170 words, 7 entities, 3 paragraphs
9. **5 H2 sections**: 200-400 words each, 5-7 entities per 200 words
10. **3 internal links**: mid-paragraph, varied anchors
11. **FAQ section**: 4-5 questions, 80-150 word answers, with schema
12. **Related articles**: 3 cards linking to sibling pages
13. **CTA footer**: gradient banner with button
14. **Post-creation**: update hub page card grid + sitemap.xml

---

## File Structure

```
app/
  layout.tsx              # Root layout + global metadata
  page.tsx                # Homepage
  {hub-1}/
    page.tsx              # Hub page (CollectionPage)
    {spoke-1}/page.tsx    # Content page (Article)
    {spoke-2}/page.tsx
    ...
  {hub-2}/
    page.tsx
    ...
components/
  EEATSignal.tsx          # E-E-A-T signal banner
lib/
  schema.ts               # JSON-LD schema generators
data/
  entities/
    {niche}-entities.json
    {niche}-relationships.json
  intents/
    {niche}-intent-taxonomy.json
    {niche}-templates-complete.json
public/
  sitemap.xml             # Manual sitemap (update with each new page)
```

---

## Quick Commands

```bash
npm run dev          # Local development
npm run build        # Build static export (verify 0 errors)
npm run lint         # TypeScript + ESLint checks
```

---

## Key Principles

1. **Data-first**: Always create/update entity + intent data BEFORE writing pages
2. **Hub balance**: Keep all hubs at roughly equal spoke count
3. **Entity coverage**: Every entity should eventually have a page or be covered in multiple pages
4. **No thin content**: Minimum 1,500 words per content page
5. **Schema everywhere**: Every page gets JSON-LD structured data
6. **Static only**: No client-side data fetching, no API routes, pure static export
7. **French SEO**: All content in proper French, no anglicisms unless industry standard
