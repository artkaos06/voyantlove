# Psychic Affiliation — Consulting Plan: Economics, Architecture, Benchmark, Experiments

_Mandate: build a company generating recurring revenue from psychic affiliation via **Google Ads or native** (Meta and Bing excluded). Solo operator. Existing assets: voyantlove.fr (FR), lovepsychicguide.com (EN), Next.js/Vercel infra with Discord observability, Goracash + monsitevoyance + BargesTech accounts._

_Inputs: €354 of real campaign data (the most valuable asset we have), the post-mortem (`ADS-POST-MORTEM.md`), the tracking audit (`AFFILIATE-TRACKING-REVIEW.md`), and offer-landscape research._

---

# 0 · Executive summary

1. **Google Search FR at commercial-keyword prices is structurally unprofitable** — our own data proves it (€2.86 CPC vs ~€1.30–1.80 expected value per click). It stays in the plan only as a **low-budget lander laboratory** on cheap inventory, never as the growth engine.
2. **Native advertising (Taboola/MGID/Outbrain) is the scale channel.** Clicks at €0.20–0.35, advertorial funnels are the proven model in this exact vertical, and FR inventory is effectively unlimited for our size. Wider variance, bigger optimization surface, and it's where a company — not a side income — can be built.
3. **The offer must change before any spend**: Goracash **web** offer (€80, self-serve conversion, postback-capable) instead of the phone offer (€67, agent-gated, attribution-blind). Goracash = Wengo, France's largest platform.
4. **No postback, no spend.** The tracking audit showed we ran blind. The new architecture (one click-ID spine, N networks) must be live and test-verified before the first euro.
5. **Budget governance**: €600 month 1, €2,100 quarter cap, every test cell carries a pre-computed max CPC and a kill rule derived from the economic model. Honest odds: ~35–45% that a cell reaches sustainable ROAS ≥ 130% within 90 days. Max downside is capped and known.

---

# 1 · Workstream 1 — Economic structure & P&L

## 1.1 The governing equation

```
EV(click) = Payout × P(payout-event | click)
Spread    = EV(click) − CPC          ← must be > 0 with margin
Max CPC   = EV(click) × 0.75         ← 25% safety margin, our bidding ceiling
```

Every campaign decision reduces to this. The May campaign bought €2.86 clicks with an EV of ~€1.30. The loss was decided at the bid, not at the lander.

## 1.2 Offer selection (the payout side)

| Offer | Payout | Trigger | Attribution | Verdict |
|---|---|---|---|---|
| **Goracash WEB (= Wengo)** | **€80** CPA | Client exceeds €1/10-min welcome offer and pays | `datas` tracker → dashboard ✅; **API per-click blocked** (see below) | **Primary / validation engine.** Self-serve conversion, biggest FR platform |
| Goracash PHONE | €67 CPA | Same, via call | None (no click ID through a phone call) | Retired. Agent-gated + attribution-blind. May data: 2 inscr → **0 transactions** (API-confirmed) |
| **Télémaque** (affiliation.voyance.fr / Cosmospace group) | **35–45% RevShare, recurring** + 5% sub-affiliate · biweekly payout | Share of all client spend, for the client's lifetime | platform-side (durability TBD) | **Scale engine, Phase 3.** Higher total return, but back-loaded cash + months to model |
| **CPL — ra11.me personas** (NOYA/ROSY/JADE) | **€2.20 CPL** | Form submit (SOI, 5 fields, love-compat) | ✅ full `request_id` S2S postback — **LIVE** (`/api/go/cpl`, `/api/postback/cpl`) | **Fastest path to first revenue.** Native-only, responsive AM, pays on the reliable lead event. Funnel D |
| monsitevoyance (p. 936) | unknown | unknown | `ref` only today; sub-id TBD | Clarify terms — already integrated |
| EN: Mysticsense / Oranum | $75 / up to $175 CPA | first deposit | standard | Phase 3 (EN native) |

⚠️ **Goracash payout discrepancy** to resolve with the AM: public page says €67/€80 CPA; an older Wengo listing says €20/new customer. Get insertion-order terms **in writing** before modeling is final.

🔴 **Goracash web API blocker (found 2026-06-12)**: `/v1/web/cbStats` (the per-tracker attribution endpoint, confirmed in their PHP client) returns **HTTP 500 "Erreur interne du serveur"** for our account — all ranges, with/without `thematic`. Phone `cbStats` works; web does not → web stats service almost certainly **not provisioned on our account**. AM action required. Until resolved, web-offer attribution runs on the **v0 dashboard model** (cid in `datas` → conversion shows tracker in dashboard); the automated per-click → OCI poller is deferred.

### 1.2.1 CPA vs RevShare — the sequencing decision

Two genuinely different economic models, not interchangeable offers:

| | Goracash CPA (€80) | Télémaque RevShare (40%) |
|---|---|---|
| Cash timing | once, ~net-30 | dribbled over client lifetime, biweekly |
| Captures LTV | ❌ | ✅ ("highest basket", recurring) |
| Modelable now | ✅ `CPC < €80 × P(conv)` | ❌ needs months of LTV data |
| Working capital | low | **high — you front CAC, revenue lags months** |

**Total-return crossover, with Télémaque's real number** (their tiers page: average basket = **€130**; tiers Silver 35% / Gold 40% [≥€3k/mo] / Platinium 45% [≥€6k/mo]):

| Tier | RevShare €/client (× €130) | vs €80 CPA | Beats €80 CPA only if lifetime CA/client > |
|---|---|---|---|
| Silver 35% (entry) | **€45.50** | −€34.50 | €228 |
| Gold 40% | €52.00 | −€28.00 | €200 |
| Platinium 45% | €58.50 | −€21.50 | €178 |

By Télémaque's **own advertised basket (€130)**, CPA €80 beats RevShare at every tier. RevShare only wins if true *lifetime* CA/client (repeat consumption) clears ~€200 — **the one unknown that decides it is the repeat rate**, i.e. whether €130 is per-consultation (recurring stacks → can exceed €228) or per-lifetime (RevShare structurally loses). Also note the tier ladder is chicken-and-egg: Gold needs ~66 clients/mo *at the Silver rate first*, so you're at 35% (€45.50) for a long ramp. Their example also assumes **0.1% visitor→client** conversion — a sobering floor benchmark.

**But for a capital-constrained solo operator, cash velocity beats total return anyway**: €80 recycled monthly compounds faster than a back-loaded RevShare stream, and RevShare-first would put us €1.5–2k underwater on an *unvalidated* funnel. The €130 figure removes the earlier "RevShare likely wins on total return" assumption — at entry tier it does **not**.

**Decision (confirmed): CPA-first, RevShare-at-scale.** Validate + build a cash buffer on Goracash web €80 (clean math, fast feedback). Keep Télémaque warm in parallel (apply now, gather data — zero spend). Phase-3 trigger: converting funnel + cash buffer → flip a traffic slice to Télémaque, compare 90-day RevShare-per-click vs €80 CPA, shift weight to the winner. Running both also kills single-offer dependency (which bit us when Goracash phone showed "program closed"); the `/api/go/[offer]` spine is offer-agnostic.

**Télémaque pre-commitment questions (RevShare value lives/dies on these):**
1. **€130 — per consultation or per client lifetime?** THE decision-flipping question. Per-consultation + repeat → can beat €80 CPA; per-lifetime → RevShare structurally loses to CPA. Get the **average consultations per client / true lifetime CA**.
2. **Attribution durability** — client tied to us for life, or a cookie window? (Lifetime/account-based is what justifies the cash-flow pain; a 30-day cookie guts it.)
3. **Tracking tech** — postback/API + subid (our cid), or dashboard-only?
4. **Traffic rules** — Google search + native (Taboola/MGID/Outbrain) allowed? (We can't use Meta/Bing.)

## 1.3 Funnel models — pessimistic / base / optimistic

### Funnel A — Google Search FR → lander → Goracash web (€80)

Chain: click → lander→platform click-out → signup (€1 offer w/ CC) → exceeds offer & pays.

| Scenario | Out-click | Signup | Pays | P(payout) | EV/click | vs €2.86 CPC | vs €1.20 CPC |
|---|---|---|---|---|---|---|---|
| Pessimistic | 20% | 10% | 30% | 0.60% | €0.48 | −€2.38 | −€0.72 |
| **Base** | 28% | 18% | 45% | **2.27%** | **€1.81** | **−€1.05** | **+€0.61** |
| Optimistic | 35% | 25% | 60% | 5.25% | €4.20 | +€1.34 | +€3.00 |

**Reading**: at commercial-keyword CPCs (€2.50–4.50) the base case **loses**. At ≤€1.35 CPC (max CPC = €1.81 × 0.75) the base case wins. Conclusion: **only buy FR search clicks under ~€1.35** — long-tail, free-intent ("voyance gratuite 10 minutes"-type matches the €1 welcome offer well), and **francophone geo expansion (Belgium, Switzerland, Luxembourg)** where auctions are thinner. Commercial head terms are permanently out (consistent with the post-mortem).

**Volume ceiling (why search can't be the company)**: our data showed ~150 impressions/day available at sane bids on the commercial set; even a working search funnel caps around €500–1,500/month profit. It is a **laboratory** for landers and a cash-flow seed — not the business.

### Funnel B — Native FR (MGID/Taboola) → advertorial → Goracash web (€80)

Chain: native click → advertorial read-through → CTA click → signup → pays. Industry data: advertorial middles convert 5–10% vs 2–4% direct; direct-linking native traffic is the classic way to lose money.

| Scenario | Advert→CTA | Signup | Pays | P(payout) | EV/click | vs €0.25 CPC |
|---|---|---|---|---|---|---|
| Pessimistic | 8% | 8% | 30% | 0.19% | €0.15 | −€0.10 |
| **Base** | 13% | 14% | 45% | **0.82%** | **€0.65** | **+€0.40 (ROAS 262%)** |
| Optimistic | 18% | 20% | 60% | 2.16% | €1.73 | +€1.48 |

**Reading**: base case is solidly profitable **and the channel scales** (tens of millions of FR native impressions/month). The risk profile is different: success depends on advertorial craft and aggressive placement (whitelist/blacklist) optimization, and you need ~€500–1,000 of test spend to even *see* signal at 0.8% conversion. This is the channel where the company gets built — with the widest variance.

### Funnel C — EN native → advertorial/quiz → Oranum ($175) / Mysticsense ($75)

2–5× FR payouts, 5–10× inventory, $0.30–0.60 CPCs, more competition. Phase 3 (month 2–3), only after the FR native playbook is validated — same architecture, same lander system, different language/offer.

### Funnel D — FR native → ra11.me CPL persona landing (€2.20/lead) ⭐ fastest path to first revenue

Chain: native ad → `/api/go/cpl` (mints cid) → network's hosted persona landing (NOYA/ROSY/JADE) → 5-field love-compat form → **billable lead (SOI)**. No lander to build; network landing is hosted. Confirmed terms (network replied <24h — responsive, unlike Goracash): **€2.20 CPL, SOI** (prénom, prénom du partenaire, email, date de naissance, pays), geo FR→francophone (BE/CH/CA/LU), **all traffic allowed except health/death angles**, and a **full `request_id` S2S postback** (per-click attribution — better instrumented than Goracash web).

`EV/click = €2.20 × P(lead | click)`. Break-even at €0.25 native CPC needs **>11.4% click→lead (>15% with margin)**:

| Form-fill (lead/click) | EV/click | vs €0.25 native CPC |
|---|---|---|
| 15% | €0.33 | +32% |
| **20%** | **€0.44** | **+76%** |
| 30% | €0.66 | +164% |

**Reading**: the 5 SOI fields *are* the product (couple-astrology reading), so on a "compatibilité amoureuse" curiosity angle they read as value, not friction — astro-compat SOI funnels realistically pull 15–30% form-fill. **Dead on Google Search** (max CPC ≤€0.66 at 40% fill vs €2.50+ auctions) — native only. Strategic value: **pays on the lead — the step that worked in May — not the payment step that produced 0.** Use it both as the cheapest way to learn native mechanics *and* as an A/B against Goracash CPA on the same traffic (some campaigns → CPL €2.20, some → CPA €80; measure real EV/click; CPA wins if the back-end pays, CPL wins if it doesn't).

**Build status: LIVE** (commit 34fae12). `/api/go/cpl?persona=&source=&v=&click_id={macro}` + `/api/postback/cpl?secret=&cid=[request_id]&campaign=[campaign_id]`. We do NOT ingest the network's `[email]` placeholder (GDPR — cid suffices). Deferred to v1 (needs KV click store): relaying conversions back to MGID/Taboola S2S so the native algorithm self-optimizes.

**Setup checklist:**
1. Set `CPL_POSTBACK_SECRET` in Vercel (before sharing the postback URL — blocks spoofed leads).
2. Give the network: `https://www.voyantlove.fr/api/postback/cpl?secret=<SECRET>&cid=[request_id]&campaign=[campaign_id]`
3. Native ad destination: `https://www.voyantlove.fr/api/go/cpl?persona=noya&source=mgid&v=A&click_id={click_id}` (native macro: MGID/Taboola `{click_id}`, Outbrain `{ob_click_id}`).

## 1.4 Portfolio & budget allocation

70/20/10 by phase, all spend behind verified tracking:

| Phase | Window | Budget cap | Allocation | Gate to next phase |
|---|---|---|---|---|
| 0 — Plumbing | Week 1 | €0 | Build + offer/AM confirmation | Test postback received E2E |
| 1 — Search lab | Weeks 1–4 | €300 | 100% Google FR/BE/CH cheap-intent | M1: lander out-click ≥ 25%; cost/signup ≤ €30 on any cell |
| 2 — Native pilot | Weeks 3–8 | €1,000 | 80% native FR · 20% search continuation | Any cell: cost/signup ≤ €25 over ≥10 signups |
| 3 — Scale + EN | Months 2–3 | €3,000+ | 70% winners · 20% EN pilot · 10% new tests | ROAS ≥ 130% sustained 2 weeks |

**Quarter hard cap: €2,100 through Phase 2.** If no cell passes its gate, we stop and the total program cost (including the €354 already spent) is bounded.

## 1.5 Cash flow & risk register

- **Payment cycle**: affiliate networks typically pay net-30 after month-end → at Phase-3 scale (€100/day) expect up to **€5–6k working-capital float**. Plan it; don't discover it.
- **Account risk**: psychic/astrology is allowed on Google FR but "guaranteed outcome" claims are not; native advertorials must avoid fake-celebrity/fake-news patterns. One account ban kills a channel → keep Google and native accounts hygienically separate, never cross-cloak, maintain an Outbrain account as cold spare.
- **Offer risk**: AM-gated programs can close (we lived it — "program closed"). Mitigation: monsitevoyance terms clarified as fallback, Cosmospace RevShare as second fallback. Never single-offer again.
- **Probability-weighted view**: ~35–45% chance a cell reaches durable ROAS ≥130% by day 90. EV of the program is positive because downside is capped (€2.1k) and upside is an ongoing cash-flow engine plus a reusable funnel machine (landers, spine, playbooks) that carries zero marginal cost to point at the next offer.

---

# 2 · Workstream 2 — Technical architecture (build BEFORE deploy)

## 2.1 Principle

> **No postback, no spend.** Every euro flows only through funnels whose conversion loop has been verified with a test postback end-to-end.

## 2.2 The click-ID spine (the central upgrade)

One architecture serves N traffic sources and N offers. We mint **our own first-party click ID (`cid`)** and make it the join key for everything:

```
 TRAFFIC                LANDERS                 REDIRECT SPINE                 OFFER             FEEDBACK
 Google Ads ─┐   /lp/[slug]  (search, DR)  ┐
             ├─>                           ├─> /api/go/[offer]?cid=UUID ──> platform url
 Taboola ────┤   /a/[slug] (advertorial)   ┘        │                        + subid=cid
 MGID ───────┘                                      ▼                             │
                                            KV store (Upstash):                   ▼  S2S postback
                                            cid → { gclid | gbraid |      /api/postback/[network]
                                              taboola_cid | mgid_cid,            │ (secret-auth)
                                              keyword, geo, lander,              ├─> resolve cid in KV
                                              variant, device, ts }              ├─> Google Ads OCI (gclid)
                                                                                 ├─> Taboola/MGID S2S ping
                                                                                 ├─> Discord + daily digest
                                                                                 └─> P&L ledger (per cell)
```

Why `cid` instead of passing gclid straight through (current design):
- **Network-agnostic**: Taboola/MGID have their own click IDs; the spine doesn't care which network a conversion came from — resolve `cid`, fan out to the right conversion API.
- **Consent-resilient**: `cid` is first-party and server-side; it works when `ad_storage` is denied (we also enable gtag `url_passthrough: true` so Google's own modeling improves).
- **Short & clean** as a subid (some platforms truncate long gclids).
- **A/B native**: lander variant is written into the cid record at click time → experiment readout is server-side and ad-blocker-immune.

## 2.3 Build list (effort-sized)

| # | Component | Status | Effort |
|---|---|---|---|
| 1 | KV click store + `cid` minting on lander load | new | 0.5 d |
| 2 | `/api/go/[offer]` generalized: `goracash-web`, `msv`, keep `keen/kasamba`; stamps `subid=cid` | 80% exists | 0.5 d |
| 3 | `/api/postback/goracash` (+ generic `/api/postback/[network]` with per-network secret) | new | 0.5 d |
| 4 | Conversion fan-out: existing Google OCI + native S2S pinger | OCI exists | 0.5 d |
| 5 | Consent: `url_passthrough: true`; verify Consent Mode v2 signals; keep CMP as-is (legal) | fix | 0.25 d |
| 6 | Advertorial template `/a/[slug]` (story layout, 3 inline CTAs, sticky mobile bar, `?v=` variants) | new | 1 d |
| 7 | Search lander v3 `/lp/voyance-web` (grid-choice hero — see WS3) | new | 1 d |
| 8 | Daily P&L digest: per-cell spend (manual CSV first), signups, EV, ROAS vs kill thresholds → Discord | digest exists | 0.5 d |
| 9 | E2E test harness: synthetic click → cid → fake postback → assert OCI payload + Discord | new | 0.5 d |

**Total ≈ 5 focused days.** Items 1–5 + 9 are the Phase-0 gate; 6–7 land during Phase 1.

## 2.4 Carry-over fixes from the tracking audit
- Canonicalize internal tracking URLs (trailing-slash/`sendBeacon` risk — F5).
- Rotate the webangelis key to env (F7).
- Audit GTM for duplicate AW conversion tag (F8).

---

# 3 · Workstream 3 — Competitor lander benchmark & gap analysis

## 3.1 What the established FR players run (Wengo, Cosmospace, Spiriteo, Idylive)

Recurring elements across their paid landers — this is the conversion-tested template the market has already paid to validate:

1. **Hero = clickable psychic grid**: photos, name, specialty, star rating, price/min, **live availability dot** — the product IS the people. Selection is the engagement mechanic.
2. **Offer banner above the fold**: "10 minutes pour 1 €" / "X minutes offertes" — specific, numeric, risk-reversed.
3. **Dual CTA**: call number AND "consulter en ligne" web path, mobile sticky bottom bar.
4. **Trust strip**: consultation counts, verified-review badges, founding year ("depuis 1987"), press logos.
5. **Urgency that's real**: "23 voyants en ligne maintenant", per-psychic queue status.
6. **Stripped navigation**: ad landers are noindex, no menu, zero leak paths.
7. **Native funnels use a story middle**: first-person advertorial ("Ce qu'elle m'a dit sur mon ex m'a bouleversée…"), 600–900 words, 3 inline CTAs, ends on the offer.

## 3.2 Gap analysis vs our current assets

| Element | Competitors | Us today | Gap action |
|---|---|---|---|
| Clickable psychic grid hero | ✅ core | ❌ `VoyantTrustGrid` is **display-only** — and Clarity showed visitors trying to click it | **Highest-priority fix.** Make grid clickable → `/api/go` with cid. Our users already told us they want this |
| Live availability | ✅ | ✅ we have `ETAT=1` in the API but barely surface it | Surface online status + count in hero |
| Offer-matched hero | "10 min pour 1€" | "10 minutes offertes" phone-framed | Rewrite hero around the actual Wengo web offer once AM confirms terms |
| Sticky mobile CTA | ✅ | ❌ | Add (mobile = most of traffic) |
| Web-signup CTA path | ✅ primary | ❌ phone-only primary | New lander `/lp/voyance-web` for the web offer |
| Advertorial pre-lander | ✅ for native | ❌ none | Build `/a/[slug]` template (WS2 #6) |
| Noindex/no-leak ad landers | ✅ | ✅ partial (`robots: noindex` on lp) — keep | — |

**Convergence worth underlining**: our own Clarity data (users clicking non-clickable portraits, triple-clicking the free-trial card) independently reproduces the competitors' core design: *people choose a person, then convert*. The market's lander pattern and our behavioral data agree. We build that.

## 3.3 Benchmark maintenance
Monthly: pull 3–5 competitor landers via Google Ads Transparency Center (FR, "voyance" advertisers) + save native ad screenshots from FR news placements. Track: offers (€/min, free minutes), hero patterns, new angles. 30 minutes/month, kept in `competitors/` notes.

---

# 4 · Workstream 4 — Experiment plan, validated against the economic model

## 4.1 Statistical honesty at our budget

Detecting a 2%→4% signup-rate difference needs ~1,200 clicks/arm — €3,400/arm at Google CPCs. **Not feasible.** So we tier the metrics and test where events are dense:

| Tier | Metric | Where measured | Detectable at our budget? |
|---|---|---|---|
| M0 | Ad CTR | network | ✅ days |
| M1 | Lander → out-click rate | cid spine | ✅ ~250 clicks/arm detects 25%→35% |
| M2 | Cost per signup | postback | ◐ pooled, weekly granularity |
| M3 | Cost per paid client / ROAS | postback | gate-checked, not significance-tested |

**Search tests run at M1. Native tests run at M1 + pooled M2. M3 is governed by stage gates and kill rules, not p-values.** Big-swing variants only (different archetypes, not button colors) — at this volume, subtle tests are noise generators.

## 4.2 Phase 1 — Google search lab (€300 cap)

*Purpose: validate landers cheaply and confirm the chain's upper links — not to scale.*

- **Geo**: FR + BE + CH (francophone). **Keywords**: free-intent & long-tail only ("voyance gratuite par téléphone", "voyance 10 minutes offertes", "voyante en ligne gratuit"…). **Max CPC: €1.35** (model-derived; if inventory won't clear at that bid, we don't buy it — that *is* the model working).
- **A/B (M1)**: Lander **A "Grid-choice"** (competitor-pattern hero, clickable grid) vs **B "Story-single"** (one featured psychic, narrative, single CTA). 50/50 by `?v=` written into cid.
- **Decision rule**: after ≥250 clicks/arm — winner on out-click rate; both arms must clear 25% floor or both are rebuilt.
- **Cell sheet (pre-registered)**: expected cost/signup at base = €1.20/0.0227 ≈ **€53 → target ≤ €30 with the cheap clicks**; kill any cell at 3× expected cost with zero signups (= €90 spend, no signup → stop).

## 4.3 Phase 2 — Native pilot (€1,000 cap)

- **Network**: start MGID (cheap, permissive, fast approval) **or** Taboola (volume, stricter) — one, not both; second network only after a winner exists.
- **Matrix**: 3 advertorial angles × 2 thumbnails → 6 cells, all feeding the Phase-1 winning lander:
  1. *Story/curiosity*: "J'ai appelé une voyante au sujet de mon ex. Ce qu'elle m'a dit…"
  2. *Problem-direct*: "Il/elle vous manque ? Ce que révèle une consultation de voyance amoureuse"
  3. *Offer-led*: "Voyance amoureuse : 10 minutes pour 1 € avec une voyante notée 4,8/5"
- **Budget pacing**: €30/day total, €5/day/cell to start; placements: after ~50k impressions, blacklist placements with CTR < 50% of mean or zero out-clicks; whitelist the top decile and shift budget.
- **Kill/scale rules (pre-registered)**: kill cell at €150 spend with 0 signups; scale cell +50%/day budget after 2 consecutive days ≤ €25/signup. Phase gate: any cell with ≥10 signups at ≤ €25 average.
- **Economic check built-in**: €25/signup × (1/0.45 pays) = €55.5 per paid client vs €80 payout → **44% margin at base-case close rate**. If Goracash's actual signup→paid lands at 30% (pessimistic), breakeven is €24/signup — which is why the gate is set at €25, not €40.

## 4.4 Phase 3 — Scale + EN pilot (gated)

Only if Phase 2 passes: 70% of budget on winning FR cells (raise caps, second network with proven creatives), 20% EN pilot (same advertorial archetypes translated, Oranum/Mysticsense offer, US/UK geo on the same spine), 10% new angle tests. Weekly ROAS review; sustained <110% for 2 weeks on any scaled cell → demote.

## 4.5 Pre-launch gate (every phase, non-negotiable)

- [ ] Offer terms in writing (payout, trigger, geo, traffic rules — incl. "is native allowed?")
- [ ] Test postback received and resolved through cid → OCI/S2S verified
- [ ] Lander QA: mobile, consent flow, `url_passthrough`, out-click pings
- [ ] Cell sheet filed: assumed chain, max CPC, daily cap, kill rule, scale rule
- [ ] Discord digest shows the new cell

---

# 5 · 90-day operating rhythm & immediate actions

**Cadence**: daily 5-min Discord digest check · weekly 30-min cell review against kill/scale rules (decisions logged in `experiments/LOG.md`) · monthly P&L + competitor refresh.

**This week (in order):**
1. **AM email to Goracash** (I draft, you send): web-offer activation for our account, payout terms in writing (€80? €20? trigger?), postback URL capability, native-traffic permission, signup→paid benchmark.
2. **monsitevoyance**: ask terms + sub-id parameter (fallback offer).
3. **Pause all remaining Google spend** until Phase-0 plumbing is live (we are currently paying for unattributable clicks).
4. I build the **cid spine + goracash postback + E2E test** (items 1–5, 9).
5. Then lander A/B builds (items 6–7) while AM answers arrive.

**Decision needed from you**: confirm the budget envelope (€300 P1 / €1,000 P2 / €2,100 quarterly hard cap) and pick the native network to open an account with (my default: **MGID first**, Taboola second).

---

*Companion docs: `ADS-POST-MORTEM.md` (why the last €354 was lost) · `AFFILIATE-TRACKING-REVIEW.md` (why we couldn't see it happening). This plan exists so neither happens again: the model sets the bid, the spine sees the conversion, the gates cap the downside.*
