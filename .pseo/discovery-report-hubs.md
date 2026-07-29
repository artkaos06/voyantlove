# pSEO Discovery — Hub-Level Gap Analysis vs Competitors

_Generated 2026-07-29. Scope: whole-site hub taxonomy for voyantlove.fr, benchmarked against the biggest FR psychic/voyance portals. Focus: NEW hubs to create._

## Current hub inventory (10 hubs)

| Hub | Role | Network size |
|---|---|---|
| `/voyance-amour` | Pillar page | 1 |
| `/reconquete` | Situation: win-back / ex | ~15 |
| `/rupture` | Situation: breakup / healing | ~13 |
| `/nouvelle-rencontre` | Situation: new love | ~9 |
| `/sentiments` | Situation: feelings/future | ~11 |
| `/crise-couple` | Situation: couple crisis | ~11 |
| `/methodes-voyance` | **Types de voyance / arts divinatoires** | 12 |
| `/voyance-gratuite-amour` | **Outils / tests gratuits** (interactive tools live here) | 8 |
| `/compatibilite-amoureuse` | Sign-pair compatibility | 78 + hub |
| `/tarot-amour` | Love tarot cards | 22 + hub |

**Key finding:** two of the user's hub ideas already exist in embryo — `/methodes-voyance` **is** the "types de voyance / arts divinatoires" hub, and `/voyance-gratuite-amour` **is** the "outils/techniques" hub. The real gaps are (a) **completing** those two, and (b) **three genuinely absent hubs** competitors all have.

## Competitor hub benchmark

Biggest FR voyance portals (astrocenter, pure-voyance, magie-voyance, kang, temporel, elo-voyance, cabinet-elad, julhia) consistently run these hub types:

| Competitor hub type | VoyantLove has it? |
|---|---|
| Situations amoureuses (reconquête, rupture…) | ✅ 5 hubs (strong) |
| Types de voyance / arts divinatoires | ⚠️ Partial (`methodes-voyance`, missing ~6 arts) |
| Outils / tirages gratuits | ✅ `voyance-gratuite-amour` |
| Tarot | ✅ `tarot-amour` |
| Compatibilité des signes | ✅ `compatibilite-amoureuse` (78 pairs) |
| **Signes astrologiques (profils par signe)** | ❌ **MISSING** |
| **Glossaire / lexique de la voyance** | ❌ **MISSING** |
| **Interprétation des rêves (oniromancie)** | ❌ **MISSING** (only 1 seed page) |
| **Horoscope (par signe, récurrent)** | ⚠️ 1 static page only |
| Rituels / retour d'affection | ❌ (intentionally — see rejected) |

## Proposed NEW hubs (ranked)

### 1. Signes astrologiques en amour — HIGHEST ⭐
- **Pattern**: `/astrologie-amour/[signe]/` — 12 per-sign love profiles (Bélier en amour, Scorpion en amour…). Optionally 24 gendered (homme/femme).
- **Why #1**: the single biggest structural gap. Enormous volume ("scorpion amour", "femme balance en amour", "homme lion amoureux"). Every big competitor has it; VoyantLove has pair-compatibility but **no single-sign profile**.
- **Internal-linking jackpot**: each sign page links to its 11 existing [compatibilite-amoureuse] pairs + its [tarot-amour] resonances + hosts the existing sign-selector tool. Turns 3 isolated networks into one mesh.
- **Data**: `lib/zodiac.ts` already exists (used by SynastryCalculator). Content is authored per sign (traits amoureux, en couple, célibataire, séduction, compatibilités).
- **Feasibility**: Ready. Gated dynamic route like compatibilite/tarot. ~12–24 pages.

### 2. Glossaire de la voyance amoureuse — HIGH
- **Pattern**: `/glossaire/[terme]/` (or a single rich hub page + anchor entries for a lean v1).
- **Why**: competitor-standard (cabinet-elad, elo-voyance, julhia, magie-voyance all run a lexique). VoyantLove has **zero**. Definitional intent VoyantLove's guidance pages don't serve, and it's **LLM-citation gold** (ChatGPT/Perplexity/AI Overviews quote definitions) — directly the `pseo-llm-visibility` play.
- **Scope (love-relevant only)**: flamme jumelle, âme sœur, lien karmique, relation karmique, retour d'affection (defined + scam-warning), dépendance affective, love bombing, ghosting, red flags, attachement anxieux/évitant, clairsentience, clairvoyance, médiumnité, aura, chakra du cœur, énergie, guidance, synchronicité, ex-toxique… (~30–50 entries).
- **Feasibility**: Ready. Overlaps *terminologically* with existing spoke pages (flamme-jumelle exists) but a glossary entry is **definitional**, not guidance — cross-link, don't duplicate. Watch cannibalization with the trigram guard.

### 3. Interprétation des rêves amoureux (oniromancie) — MEDIUM-HIGH
- **Pattern**: `/reves-amour/[reve]/` — dream dictionary. Already seeded by `rupture/rever-de-son-ex`.
- **Entries**: rêver de son ex (migrate/canonicalise), de mariage, de tromperie/infidélité, de son crush, de grossesse, d'un bébé, de faire l'amour, de son ex avec quelqu'un d'autre, de dispute, de se remettre ensemble…
- **Why**: competitor-standard dream hub; strong long-tail; voyance-aligned (oniromancie).
- **Note**: would give `rever-de-son-ex` a proper home; decide canonical (keep in /rupture with a redirect, or move to the new hub). ~10–20 pages.
- **Feasibility**: Ready.

### 4. Horoscope amour par signe — MEDIUM (feasibility-flagged)
- **Pattern**: `/horoscope-amour/[signe]/`.
- **Why**: competitors' top traffic driver.
- **Flag**: true horoscope value is daily/weekly **freshness**, which fights static pSEO (needs a regeneration/ISR pipeline or a data feed). Recommend a **static "tendances amour <année> par signe"** version (like the existing horoscope-amour-2026) rather than daily, unless a content feed is wired. Lower priority until #1–#3 land.

## Hub COMPLETION (not new hubs, but competitor-parity quick wins)

**Complete `/methodes-voyance`** with the arts divinatoires competitors cover and VoyantLove lacks — each a spoke, love-framed:
- `cartomancie-amour` (cartomancy — very high volume, currently absent!)
- `lignes-de-la-main-amour` (chiromancie / palmistry)
- `boule-de-cristal-amour` (cristallomancie)
- `medium-amour` (médiumnité)
- `marc-de-cafe-amour` (cafédomancie)
- `magnetiseur-amour` / `clairvoyance-amour` (optional)

Cartomancie in particular is a glaring absence for a voyance site.

## Rejected candidates

| Candidate | Reason |
|---|---|
| Rituels d'amour / retour d'affection (as a how-to hub) | Scam-adjacent, predatory framing; conflicts with the site's no-guarantee ethical stance. Cover only as a **glossary definition with a scam-warning**, never as a how-to. |
| Generic (non-love) horoscope / full natal astrology | Off-brand — site is love-specialised. |
| Obscure mancies (pyromancie, géomancie…) | No love search intent; thin. |

## YMYL assessment
- Category: none of the core Sept-2025 YMYL buckets. Relationship/voyance = **YMYL-adjacent**, low–medium risk.
- Recommendation: standard pSEO with the site's established guardrails. Glossary entries on sensitive terms (retour d'affection, emprise, dépendance affective) must stay **descriptive + protective**, never prescriptive or manipulative.

## Recommended build order
1. **Signes astrologiques en amour** (`/astrologie-amour/[signe]`) — biggest volume + links the whole site together.
2. **Glossaire de la voyance amoureuse** (`/glossaire/[terme]`) — authority + LLM citation.
3. **Complete `/methodes-voyance`** (cartomancie first) — competitor parity, quick wins.
4. **Interprétation des rêves amoureux** (`/reves-amour/[reve]`) — scale the seeded dream page into a hub.
5. **Horoscope amour par signe** — only if a freshness pipeline is acceptable; else static yearly.

## Next step
Stakeholder confirms which hub(s) to build. New hubs are multi-page commitments — recommend starting with **#1 (signes astrologiques)** as the highest-leverage structural addition, then #2 (glossaire).
