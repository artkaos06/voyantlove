# pSEO Discovery Report — voyantlove.fr (refreshed 2026-08-11)

**Supersedes for orchestration purposes:** `.pseo/discovery-report.md` (2026-07-24), `-hubs.md`, `-ex.md` (2026-07-29). Those reports' recommendations have since been largely implemented — see "Prior Proposals: Implementation Status" below. This report re-baselines against current repo state as of commit `f6f4a41`.

## Method note
This run is codebase-only analysis (data assets, route structure, git history). Per orchestration instructions for this run, no GSC data was pulled and no external/parent-supplied GSC report was used — recent commits (`b66d8c9 Optimize existing pages from GSC evidence`, `f6f4a41 Launch Phase B search intent validation batch`) confirm GSC-informed work is already an established, separate workflow on this project; it is referenced here only as context, not re-derived.

## Data Assets Found

| Entity | Record Count | Key Fields | Source | Powers |
|---|---|---|---|---|
| Sign-pair compatibility | 81 | pair, label, desc, scores | `lib/compatibilitePairs.ts` | `/compatibilite-amoureuse/[pair]` (built, flagship) |
| Tarot love cards | 24 | slug, meaning, upright/reversed, love context | `lib/tarotLoveCards.ts` | `/tarot-amour/[carte]` (built) |
| Glossaire terms | 55 | slug, definition, related terms | `lib/glossaire.ts` | `/glossaire/[terme]` (built) |
| Rêves amoureux (dream symbols) | 13 | slug, symbol, interpretation | `lib/revesAmour.ts` | `/reves-amour/[reve]` (built, thin vs. category norm) |
| Signes astrologiques amour | 14 | slug, sign profile | `lib/signesAmour.ts` | `/astrologie-amour/[signe]` (built) |
| Numerology life-path pairs | **8 curated** (of ~45 possible 1-9/11/22/33 combinations) | pair, label, desc | `lib/numerology.ts` (`COMPATIBILITY_PAIRS`) | Only surfaced via `NumerologyCompatibilityCalculator` tool inside one page — **not yet a page-per-pair hub** |
| Voyant advisor profiles | 8 | name, specialty, bio | `data/voyants.json` | Advisor cards/CTAs, not pSEO content pages |
| Entity taxonomy | large (43KB across 2 files) | coreEntities (primary/related terms, synonyms, search volume tags), situationModifiers (comment/pourquoi/quand/est-ce-que prefixes + intent) | `data/entities/voyance-amoureuse-*.json` | **Unused — zero references found in app/lib/scripts** |
| Intent taxonomy + content templates | large (93KB across 3 files) | intent taxonomy, per-intent answer-capsule templates, global variables | `data/intents/voyance-amoureuse-*.json` | **Unused — zero references found in app/lib/scripts** |
| Horoscope 2026 data | — | daily/period horoscope content | `lib/horoscope2026.ts` | **Unused — no importing page found** |
| Hand-authored topic clusters | 13+19+15+12+10+20+10 = 99 individual `page.tsx` files | one-off, no shared data model | `app/crise-couple`, `app/reconquete`, `app/rupture`, `app/sentiments`, `app/nouvelle-rencontre`, `app/methodes-voyance`, `app/voyance-gratuite-amour` | Built directly, not templated — functions as topic cluster but isn't a scalable pSEO pattern (each page is bespoke code, not data + template) |

**Data-quality note:** `data/entities/voyance-amoureuse-relationships.json` fails to parse as valid JSON (malformed object around line 344). Low priority since it's currently unused, but flag before any future use.

## Prior Proposals: Implementation Status

| Prior proposal | Report | Status |
|---|---|---|
| Sign-pair love compatibility | discovery-report.md (07-24) | ✅ Built — `/compatibilite-amoureuse/[pair]`, 81 pages |
| Tarot card love meanings | discovery-report.md (07-24) | ✅ Built — `/tarot-amour/[carte]` |
| Life-path pair compatibility (numerology) | discovery-report.md (07-24) | ⚠️ Partial — data + calculator exist, no dedicated page network (see Proposal #1 below) |
| Signes astrologiques hub | discovery-report-hubs.md (07-29) | ✅ Built — `/astrologie-amour` |
| Glossaire hub | discovery-report-hubs.md (07-29) | ✅ Built — `/glossaire`, 55 terms |
| Rêves amoureux hub | discovery-report-hubs.md (07-29) | ✅ Built but data set is thin (13 symbols) relative to category norm (100+) — matches the direction of commit `5fe637b feat: expand love dream dictionary`, i.e. already recognized and in progress |
| Horoscope amour par signe | discovery-report-hubs.md (07-29) | ❌ Not built — flagged then as "feasibility-flagged" (freshness pipeline needed); `lib/horoscope2026.ts` exists but is unwired |
| Ex-cluster pages (rêver de son ex, etc.) | discovery-report-ex.md (07-29) | ✅ Largely built across `crise-couple`/`rupture`/`reconquete` |

## Proposed Page Types (ranked by opportunity)

### 1. Numerologie amoureuse — pair compatibility hub
- **Pattern**: `/numerologie-amoureuse/[pair]` (e.g. `/numerologie-amoureuse/1-et-5`)
- **Record count**: up to ~45 life-path combinations (1-9 plus master numbers 11/22/33); only 8 currently authored
- **Search intent**: commercial investigation / informational ("compatibilité numérologie amoureuse chiffre X et Y")
- **Data source**: `lib/numerology.ts` — reuses existing `lifePathNumber`, `composeCompatibilityReading` logic already built for the calculator
- **Content uniqueness**: Medium — each pair reading needs a distinct interpretive paragraph, not just score interpolation, to avoid the same trap that made compatibility pairs work (81 unique write-ups) succeed while thinner data sets don't
- **Data gaps**: 37 additional pair write-ups needed
- **Feasibility**: Ready to start, needs content authoring effort proportional to the sign-pair hub that's already proven the pattern works

### 2. Rêves amoureux — dictionary expansion (continuation, not new)
- **Pattern**: existing `/reves-amour/[reve]`
- **Current**: 13 symbols vs. 55 (glossaire) / 81 (compat) for comparable hubs
- **Recommendation**: continue the expansion already underway (`5fe637b`) toward parity (80-100+ symbols) before treating this hub as complete
- **Feasibility**: Ready — pattern and template proven, just needs more records

### 3. Horoscope amour (daily/weekly by sign)
- **Pattern**: `/horoscope-amour/[signe]` or `/horoscope-amour/[signe]/[periode]`
- **Data source**: `lib/horoscope2026.ts` (exists, unwired)
- **Search intent**: informational, high-frequency repeat-visit intent
- **Content uniqueness**: High if genuinely period-specific; **risk**: requires a content-freshness/regeneration pipeline (daily or weekly) that this static-export site does not currently have — this is a **performance/data-freshness architecture question**, not just a template question. Carry into `pseo-performance` phase rather than treating as a simple new-page build.
- **Feasibility**: Needs a freshness pipeline decision before build (same "feasibility-flagged" status as the prior report — unchanged)

### Rejected / Not Recommended
| Candidate | Reason |
|---|---|
| Combinatorial expansion of `data/intents` templates (situation × comment/pourquoi/quand/est-ce-que prefixes) | The 99 hand-authored pages in `crise-couple`/`rupture`/`reconquete`/`sentiments` already cover most of this exact intent space. Mechanically generating more combinations risks cannibalizing existing ranked pages and producing near-duplicate content — the core anti-pattern this skill is designed to reject. If pursued, it must first be reconciled against actual GSC query data (separate, already-established workflow on this project) to find genuine gaps, not run as a blind combinatorial expansion. |
| Reviving `data/entities`/`data/intents` as a general template engine | The site's actual successful pattern (compatibilitePairs, tarotLoveCards, glossaire, signesAmour, revesAmour) is small hand-curated arrays with bespoke per-record prose, not templated variable-substitution — which is exactly what these dormant JSON files would produce. Reusing them as-is would regress content quality below the site's current standard. |
| Advisor profile pages from `data/voyants.json` | Only 8 records — below the 50+ pSEO threshold; these are appropriately used as CTA/trust components, not standalone pages |

## Recommended URL Structure
No change to existing hierarchy. New numerology hub should follow the established `/{hub}/[slug]` convention already used by all 5 existing dynamic hubs.

## YMYL Assessment
- **YMYL category**: None of the core categories (health/finance/legal/civic/safety) apply. Voyance/astrology content is entertainment/spiritual-guidance content, which Google's guidelines treat with lighter scrutiny than YMYL, though emotionally vulnerable users (breakup/relationship crisis content in `crise-couple`, `rupture`, `reconquete`) warrants care.
- **Risk level**: Low
- **Recommendation**: Standard pSEO OK. No change from prior assessments.

## Data Enrichment Needed
1. 37 additional numerology pair write-ups (blocks Proposal #1)
2. Continued rêves amoureux symbol authoring toward 80-100 (Proposal #2, already in motion)
3. Freshness pipeline decision for horoscope content before Proposal #3 can start
4. Fix malformed JSON in `data/entities/voyance-amoureuse-relationships.json` if that data is ever revived

## Next Steps
1. Confirm with stakeholder: pursue Proposal #1 (numerology hub), continue Proposal #2 (dream dictionary), defer Proposal #3 (horoscope) pending freshness-pipeline decision
2. Proceed to `pseo-audit` to check codebase readiness for whichever of these are confirmed, plus general audit of the 99 hand-authored pages' consistency/scalability
3. No new data source acquisition required — all proposed work extends data models that already exist in the codebase
