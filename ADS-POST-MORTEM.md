# Paid Advertising Post-Mortem — Psychic Affiliate Experiments

_Period: ~April–May 2026 · Two markets (EN/Keen, FR/Goracash) · Author: campaign retrospective_

---

## Headline numbers

| Experiment | Site | Network | Spend | Revenue | Net |
|---|---|---|---|---|---|
| EN / Keen | lovepsychicguide.com | BargesTech (TUNE) | ~€262 | €0 | **−€262** |
| FR / Goracash | voyantlove.fr | Goracash callback | ~€92 | €0 | **−€92** |
| **Total** | | | **~€354** | **€0** | **−€354** |

Zero revenue across both. The money bought information, not income. This document is about extracting maximum value from that information.

---

## The single sentence that explains everything

> **In both experiments, the conversion rate required to break even was several times higher than any real funnel achieves.**

This is the unifying diagnostic. Everything below is detail on top of this one fact.

| Experiment | Break-even conversion rate needed | Realistic achievable rate | Gap |
|---|---|---|---|
| EN / Keen | **72%** affiliate-click → purchase | ~1–5% | ~15–70× off |
| FR / Goracash | **67%** inscription → paid call | ~20–40% | ~2–3× off |

We were not unlucky. We were playing a game whose math was negative before the first euro was spent. The EN path was *impossible*; the FR path was *marginal-to-negative*.

---

## Part 1 — Timeline of what was tried

1. **EN/Keen launch.** Paid Google search → lovepsychicguide.com → affiliate redirect to Keen via TUNE. CPCs on EN psychic keywords were brutal: effective cost to produce one affiliate click ≈ €33, against a €46 payout. Ran to ~€262, 0 conversions.
2. **Unit-economics realization.** Ran the math properly (late). To profit at €33/click and €46 payout, the click→purchase rate had to be ~72%. Real affiliate funnels convert at low single digits. Structurally impossible. Killed.
3. **FR/Goracash pivot.** Better-looking economics: ~€2.50 FR CPC, €68 payout per paid call, lower-friction conversion (phone call vs registration+purchase). Built a commercial-intent lander, Google call asset, and full Discord/log observability.
4. **Goracash API broken** ("program closed") — form path degraded to a tappable tel: fallback. Call path via Google call asset still worked.
5. **Campaign reconfiguration** (mid-May): paused the `/consulter` sitelink, removed dead keywords, raised bids on commercial-intent keywords ("appeler un voyant", "voyance par tel", "voyante par téléphone").
6. **Result after ~6 days / €92:** 32 clicks → 2 calls → 2 inscriptions → **0 paid calls** → €0.

---

## Part 2 — Classification of failures

Severity: 🔴 fatal (kills the model) · 🟠 major (heavy drag) · 🟡 minor (fixable friction)

### Class A — Structural / unit-economics 🔴 FATAL
**The affiliate spread was negative or razor-thin after the auction took its cut.**

- Google's search auction is efficient: when you bid on commercial-intent keywords, the CPC rises until it consumes most of the expected value of the click. You are trying to arbitrage Google against an affiliate payout, and Google is *designed* to capture that surplus.
- Psychic/voyance is one of the oldest, most competitive paid verticals. Your auction rivals are the actual psychic networks, who have full customer LTV economics. As an affiliate earning a one-time payout, you cannot outbid someone who monetizes the same customer for months.
- **Root cause of the loss.** No amount of creative, bidding, or landing-page work fixes a negative spread. This was true on day zero of both experiments.

### Class B — Channel–market fit 🔴 FATAL
**Paid search is the worst possible channel for a thin-margin affiliate offer.**

- Search = highest intent, highest competition, highest CPC. It's where margins are thinnest because everyone bids there.
- A low-payout affiliate offer needs either (a) near-zero traffic cost (SEO/owned) or (b) cheap high-volume channels where thin margin × big volume works. Paid search is neither.
- You were buying the most expensive traffic in the market to resell at a fixed, modest payout.

### Class C — Conversion-layer dependency 🔴 FATAL (FR specifically)
**The step that triggers your payout is the one step you cannot see, touch, or optimize.**

- FR payout fires on **"appel payant"** — the prospect, during their free 10–15 minutes, decides to keep paying. That decision is made by the *psychic on the phone*, not by you.
- Your funnel performed *excellently* up to that wall: Click→Call 6.25% (above benchmark), Call→Inscription 100% (well above benchmark). Then 0% at the only step that pays.
- You can build the best lander on earth and still earn €0 if Goracash's agents don't close. **You optimized everything you controlled and lost at the step you didn't.** That is a structurally bad position for any affiliate.

### Class D — Measurement & observability 🟠 MAJOR
**The funnel was partly blind during spend, and instrumentation was built *after* money was flowing.**

- Goracash dashboard has a ~30-min lag (caused a false "lost call" panic).
- Tel: clicks bypassed the server entirely until the `/api/track/tel-click` beacon was added — mid-experiment.
- The `/consulter` → monsitevoyance path was a black box (no server visibility) until `/api/go/voyant` was built — mid-experiment.
- Net effect: decisions were made on partial data, and at least one major course-correction (see Class E) was triggered by an incomplete daily snapshot that corrected itself the next day.

### Class E — Process & decision-making 🟠 MAJOR
**Reactive tuning on tiny samples, conflicting guidance, and too many variables changed at once.**

- **Unit economics were run too late.** The single most important calculation — break-even conversion rate vs achievable rate — should have been the *first* thing done, before any spend. It would have stopped the EN experiment on paper.
- **Conflicting checkpoints (my error).** I gave spend-checkpoint advice ("continue to €350") before running the unit-economics math, then reversed. That inconsistency cost you confidence and possibly euros. Owned.
- **Over-reaction to incomplete data (my error).** On the 18–19 May partial snapshot I called the lander "broken" based on 5 clicks; the next day's complete data showed it was fine and the real bottleneck was the close rate. Panic-driven reads on n=5 are noise, not signal.
- **Multiple simultaneous changes.** Pausing the sitelink + removing keywords + raising bids all at once made it impossible to attribute which lever moved which metric. Clean experiments change one variable at a time.
- **Sample sizes far too small for the conclusions being drawn.** 1–2 calls cannot tell you a conversion rate. We repeatedly tried to read tea leaves from single-digit events.

### Class F — Operational friction 🟡 MINOR
- Goracash API returned "program closed" the entire time; relied on a degraded fallback. Slow AM responses.
- Stale `partner=383` affiliate ID lingered in code/docs (fixed). Had real clicks gone through those URLs, they'd have been unattributed.

---

## Part 3 — Why you lost money (the honest paragraph)

You lost money because you bought the most expensive traffic in the market (Google search, mature psychic vertical) to monetize a fixed, modest affiliate payout — and the auction price of that traffic, after realistic funnel and close-rate losses, exceeded the payout. In the EN case this was mathematically impossible from the start (72% break-even vs ~3% reality). In the FR case it was marginal-to-negative (67% break-even close rate vs ~20–40% reality) **and** the deciding step was controlled by a third party (the psychic's ability to upsell on a free call) that you cannot influence. The infrastructure work was good. The market positioning was the problem.

---

## Part 4 — Solutions, tiered by conviction

### Tier 1 — Stop the bleeding (do now)
- **Kill paid-search affiliate arbitrage for this vertical.** Both experiments confirm the spread isn't there. Do not add budget to "prove" a negative-EV model. Cap FR at the next round-number checkpoint and stop.
- **Get the one number that would change the verdict:** email the Goracash AM and ask point-blank: *"What is the typical inscription → appel-payant conversion rate for affiliate-sourced calls on partner 936?"* If they say ~70%+, the FR model is alive and it's a volume game. If they say 20–40% (likely), the model is dead at current CPI and you stop.

### Tier 2 — Salvage the FR path *only if* one of these is true
The FR model becomes viable only by attacking the break-even equation directly:
- **Drive cost-per-inscription far below €46.** Not via Google search (auction floor too high). Via cheaper channels: SEO/content (near-zero marginal cost), social/native, or off-peak/long-tail. If CPI drops to ~€20, even a 35% close rate breaks even.
- **Raise the payout / change the deal.** Ask Goracash for a hybrid (CPL on the qualified call *plus* CPA on the paid call), or a higher per-paid-call rate given your above-benchmark call quality (your 100% call→inscription is a real selling point to the AM).
- **Verify agent quality.** If affiliate-sourced calls are routed to weaker closers, no acquisition fix helps — escalate to the AM.

### Tier 3 — The real strategic pivot (where the actual money is)
- **Stop renting traffic; own it.** The pSEO site (8 pages live, expansion planned to 20→106) is the genuine asset. SEO traffic costs ~€0 at the margin, which collapses the break-even conversion rate to something achievable. The *same* Goracash/affiliate offer that loses money on €2.86 paid clicks can profit on free organic clicks.
- **Re-frame paid's role.** If paid is used at all, use it to (a) test which keywords/intents convert *before* committing SEO effort to them, or (b) retarget warm organic visitors — never as the primary cold-acquisition engine for a thin-margin offer.
- **The economics flip entirely on owned traffic.** At €0 traffic cost and even a 25% close rate, every inscription is pure margin. That's the business; paid search was never going to be.

---

## Part 5 — Decision required from you

Pick one:

- **A. Full stop on paid, all-in on SEO.** Bank the €354 lesson, redirect all energy to the pSEO asset where the unit economics actually work. _(Recommended.)_
- **B. One last FR test, conditional.** Only if the Goracash AM confirms a ≥60% inscription→paid rate OR agrees to a better payout structure. Otherwise it folds into A.
- **C. Find a cheaper paid channel for FR.** Test native/social CPI before deciding — but treat it as a new experiment with a pre-computed break-even, not a continuation.

The thing we should *not* do again: spend before computing the break-even conversion rate and comparing it to a realistic achievable rate. That one check, done first, would have saved most of the €354.
