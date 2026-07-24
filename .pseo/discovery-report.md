# pSEO Discovery Report — voyantlove.fr (2026-07-24)

## Data Assets Found

| Entity | Records | Key Fields | Source |
|---|---|---|---|
| Zodiac signs + element compatibility | 12 signs, 10 pair-reads | name, emoji, element, dates, aspect, headline, desc | `lib/zodiac.ts` |
| Numerology meanings | 9 life paths + 9 expression + 9 intime + 3 masters | num, title, desc | `lib/numerology.ts` |
| Tarot cards (love readings) | 24 | name, emoji, meaning (~30 words) | `lib/tarotDeck.ts` |
| Oracle cards | 16 | name, emoji, message | `lib/oracleDeck.ts` |
| 2026 sign horoscopes | 12 | sign, headline, prediction, periodKey, compatibleWith | `lib/horoscope2026.ts` |
| Voyants | 8 (stale seed; live feed external via `/api/voyants`) | name, rating, prices, review | `data/voyants.json` |
| Semantic planning layer | 120 entities | entities, relationships, intents (1 file has JSON syntax error) | `data/entities/`, `data/intents/` (not imported by app) |

Current site: 100 `page.tsx` files (~91 content pages, 7 hubs), all hand-authored.

## Proposed Page Types (ranked)

### 1. Sign-pair love compatibility — FLAGSHIP
- **Pattern**: `/compatibilite-amoureuse/[signe1]-[signe2]/` → 78 unique pairs
- **Intent**: commercial investigation ("compatibilité amoureuse lion scorpion")
- **SERP check (2026-07-24)**: ranked by mid-authority niche sites incl. direct competitor cabinet-kld-voyance.fr running this exact pattern; evozen.fr, mon-horoscope-du-jour.com, astroline.today, esteban-frederic.fr. Winnable.
- **Data source**: `lib/zodiac.ts` — but current compatibility data is element-level only (10 texts across 78 pairs)
- **Content uniqueness**: currently LOW → **fails differentiation test as-is**. Requires enrichment: 78 per-pair records (dynamics, forces, frictions, sexualité/intimité angle, conseil, 3-4 FAQ each)
- **Feasibility**: Needs data enrichment (the main implementation work)
- **Synergy**: SynastryCalculator (already live) can deep-link each result to its pair page — built-in internal linking + engagement loop
- **⚠ Cannibalization risk**: existing `/sentiments/compatibilite-amoureuse` targets the head term — must be resolved in linking design (hub/spoke roles, not competing)

### 2. Tarot card love meanings
- **Pattern**: `/tarot-amour/[carte]/` → 24 pages (expandable to 78-card deck later)
- **Intent**: informational ("l'étoile tarot amour signification")
- **Data source**: `lib/tarotDeck.ts`; needs enrichment from ~30-word meanings to full records (amour endroit/renversé, combinaisons, FAQ)
- **Synergy**: TarotSpread / TarotOuiNon draw results link each drawn card to its page
- **Feasibility**: Needs data enrichment
- **⚠** must not collide with `/methodes-voyance/tirage-tarot-amour` (methodology page — different intent, OK if linked as hub)

### 3. Life-path pair compatibility (numerology)
- **Pattern**: `/numerologie-couple/[n1]-et-[n2]/` → 45 pairs
- **Intent**: informational, lower volume than zodiac pairs
- **Feasibility**: Needs enrichment; NumerologyCalculator links results → pair pages
- Priority: after #1/#2 prove out

## Rejected Candidates

| Candidate | Reason |
|---|---|
| Voyant profile pages | 8 records — far below 50-record minimum |
| Prénom-based pages ("compatibilité prénom X") | pure variable-swap → thin/scaled-content risk |
| Oracle card pages | 16 records, marginal volume — fold into tarot hub later if #2 works |
| Per-month horoscope pages | freshness burden; dated content decays; current single 2026 page suffices |

## YMYL Assessment
- Category: **None** (astrology/love guidance is not health/finance/legal/civic per Sept-2025 QRG)
- Risk: **Low**, with a caveat — keep entertainment/guidance framing; no medical, financial, or legal claims in generated content; site already carries E-E-A-T signals per page.

## Scale
Max total ≈ 150 new pages → far below 10K threshold → **Phase 1.5 (pseo-scale) skipped**.

## Data Enrichment Needed (blocking #1-#3)
- 78 sign-pair records: `signA, signB, score/aspect, dynamique, forces, frictions, conseil, faq[3-4]` — extend `lib/zodiac.ts` or new `data/compatibilite-pairs.ts`
- 24 tarot card records: extended love meanings (endroit/renversé, combinations, faq)
- 45 numerology pair records (phase 2)
- Fix JSON syntax error in `data/intents/voyance-amoureuse-intent-taxonomy.json` (planning layer hygiene)

## Next Steps
1. Confirm page types with user (Phase 0→1 decision point)
2. pseo-audit (Phase 1)
3. pseo-data: build enriched pair/card data layer
4. pseo-templates → linking → metadata/schema → quality-guard
