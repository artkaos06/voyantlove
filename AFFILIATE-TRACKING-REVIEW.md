# Affiliate Tracking Code Review — Full Audit

_Scope: every file in the affiliate attribution chain — landers, API routes, lib helpers, consent, GTM/gtag. Question driving the review: "did a technical issue prevent affiliate tracking from being communicated clearly, and did it affect results?"_

## Verdict up front

**Yes — the results were measured through a partially-blind pipeline, but the dominant problems are architectural, not one silent bug.** The conversion-attribution backend was built end-to-end for the EN/TUNE (BargesTech) model and was *never wired* for the FR offers (Goracash, monsitevoyance). On top of that, consent defaults + single-number telephony mean a large share of real FR conversions could never have been seen by your stack or by Google Ads.

**Important caveat:** fixing tracking would have made the *apparent* zero less stark, but it does **not** overturn the unit-economics verdict. Even with perfect attribution, the phone-CPA spread was negative. Both are true: the pipeline was leaky **and** the offer math was bad. Don't let "we had tracking bugs" become "the funnel actually worked." Fix both.

---

## Findings, classified

Severity: 🔴 critical (causes lost/invisible attribution) · 🟠 major · 🟡 minor

### 🔴 F1 — No inbound conversion path for FR offers
**File: `app/api/postback/route.ts`**

`/api/postback` validates a `BARGESTECH_POSTBACK_SECRET` and parses TUNE/HasOffers macros (`transaction_id`, `aff_sub2/3/4`, etc.). It is **exclusively** a BargesTech (Keen/Kasamba) receiver. There is **no** route that ingests a conversion from Goracash or monsitevoyance.

Consequences:
- FR conversions never enter your digest, Discord, or logs.
- FR conversions never reach **Google Ads OCI** (`lib/googleAds.ts` is only called from the BargesTech postback). So Google Ads' Conversions column and any automated bidding are blind to every FR affiliate event.
- The only Google-native FR signal is the on-lander phone-call conversion (see F2), which is itself consent-gated.

**This is the single biggest tracking gap.** The backend you built is for a network you've stopped using; the network you're using has no backend.

### 🔴 F2 — Call conversion + gclid are consent-gated, and consent defaults to denied
**Files: `app/layout.tsx`, `components/CookieConsent.tsx`, `app/lp/voyant-direct/page.tsx`**

- `layout.tsx` sets Consent Mode defaults to **denied** (`ad_storage`, `ad_user_data`, `ad_personalization`, `analytics_storage`).
- `CookieConsent.tsx` only flips these to `granted` if the visitor clicks **"Tout accepter"** (or enables marketing). The modal gives **"Tout refuser" equal visual weight** — GDPR-correct, but it means a large fraction of FR visitors stay in the denied state.
- While `ad_storage` is denied: the `_gcl_*` cookies aren't written, Google's **dynamic number insertion** (`phone_conversion_number` on the lander) may not swap the number, and the **call conversion doesn't fire**.

Consequence: at your low volume (no Consent Mode modeling threshold), denied-consent callers are simply **invisible** to Google Ads. Google's "Conversions: 0" overstates the true miss — some of those 2 Goracash calls almost certainly came from consent-denied sessions that Google never counted.

### 🔴 F3 — gclid is captured then thrown away at the monsitevoyance boundary
**Files: `lib/voyants.ts` (`getAffiliateLink`), `app/api/go/voyant/route.ts`**

`/api/go/voyant` receives `gclid/gbraid/wbraid`, **logs them and pings Discord**, then redirects to:
`monsitevoyance.com/zoom_voyant.php?id=<ID>&partner=936&ref=<source>`

The gclid is **not** forwarded to monsitevoyance. The only sub-identifier monsitevoyance receives is `ref`, which is a coarse **source label** (`consulter`, `lp-voyant-direct`), not a per-click/per-user ID. So:
- monsitevoyance cannot postback a click-level identifier even if it wanted to.
- You cannot reconcile a monsitevoyance conversion to a gclid/keyword.
- Combined with F1 (no postback receiver), monsitevoyance conversions are **only** visible in monsitevoyance's own dashboard, aggregated by `ref`.

**Action:** check whether `zoom_voyant.php` accepts a sub-id passthrough (commonly `subid`, `sub`, `s1`, `aff_sub`). If it does, pass the gclid there so it can round-trip.

### 🟠 F4 — Phone calls carry no identifier, and one shared number kills keyword attribution
**Files: lander tel: links, `app/api/track/tel-click/route.ts`, `app/api/callback/route.ts`**

- A tel: tap dials `0175754582`. You cannot pass a URL parameter through a phone call, so Goracash only sees the **caller's number** — no gclid, no source.
- `CallbackForm` → `/api/callback` → `lib/goracash.ts` **does** pass a `tracker` (gclid or `src:<source>`) to Goracash — but only on **form submissions**, which were ~0. The calls that actually happened came via tel: tap / call asset, which carry nothing.
- Because **every** source uses the **same** number, even Goracash's dashboard can't tell you which keyword/ad drove a call.

This isn't a bug — it's the inherent ceiling of single-number call tracking. The fix is **dynamic call tracking** (a pool of numbers, or Google's forwarding numbers fully working via F2) if call attribution matters.

### 🟠 F5 — `trailingSlash: true` + `sendBeacon` to a non-slashed API path (verify)
**Files: `next.config.mjs`, `app/layout.tsx` (tel-click beacon)**

`next.config` sets `trailingSlash: true`. The tel-click tracker calls `navigator.sendBeacon('/api/track/tel-click', …)` with **no** trailing slash. If Next 308-redirects `/api/track/tel-click` → `/api/track/tel-click/`, **`sendBeacon` does not follow redirects** and the beacon is silently dropped — you'd lose tel-tap visibility.

Empirically, tel-click pings *did* fire during testing, so either App Router doesn't redirect `/api` handlers here or it tolerates it. **Low confidence, but verify**: standardize all internal tracking calls (`/api/track/tel-click`, `/api/go/voyant`, `/api/callback`) to use the exact final path (with trailing slash if that's what the server canonicalizes to) to remove any redirect hop. fetch() follows redirects; sendBeacon does not — that asymmetry is the risk.

### 🟡 F6 — Glyphex affiliate tracking is fire-only, client-side, never reconciled
**File: `lib/glyphex.ts`**

`trackAffiliateClick` pushes an `affiliate_click` event to `window.analytics` (Glyphex) only if it's loaded. It's a third, parallel analytics surface (alongside GTM dataLayer and our server logs) with no link to attribution or conversions. Not harmful, but it's tracking sprawl — three systems, none of which closes the loop to revenue.

### 🟡 F7 — webangelis API key committed in `next.config`
**File: `next.config.mjs`**

The `/api/voyants` rewrites embed the webangelis `key=` in source (committed). It's used server-side only (not exposed to the browser), but it's a plaintext secret in git history. Rotate it into an env var.

### 🟡 F8 — Two gtag/AW load paths (GTM + direct) risk double-count
**Files: `app/layout.tsx` (GTM), `app/lp/voyant-direct/page.tsx` (direct gtag/js for AW-18020982081)**

The lander loads its own `gtag/js` for the Ads account in addition to global GTM. The code comments explain why (phone-swap needs the direct instance). Verify the AW conversion isn't *also* configured inside the GTM container, or the same call could be counted twice when consent is granted.

---

## Direct answer to "what prevented tracking from being communicated"

In priority order:
1. **No FR conversion ingestion (F1)** — the attribution backend doesn't listen for Goracash/monsitevoyance at all.
2. **Consent-denied sessions are invisible (F2)** — at low volume, no modeling recovers them.
3. **gclid discarded at the affiliate hop (F3)** and **un-passable through phone calls (F4)** — so even the clicks you did see can't be tied to the conversions that may have happened downstream.

Net: you were flying with most of the FR attribution instruments disconnected. Real conversions (especially monsitevoyance web consultations) may have occurred that you never recorded. But — see the verdict — this explains a *blurrier* zero, not a hidden profit.

---

## Recommended fixes, ordered by leverage

| # | Fix | Effort | Why it matters |
|---|---|---|---|
| 1 | **Wire an FR conversion receiver** — switch to the Goracash **web** offer (€80) and ask the AM for a **postback/S2S URL** to a new `/api/postback/goracash` route; forward to Google Ads OCI. | M | Closes F1. The whole reason FR shows 0 in your stack. |
| 2 | **Pass gclid as a sub-id to monsitevoyance** (after confirming the param name with them) and add a postback route for it. | S–M | Closes F3; recovers monsitevoyance attribution you're currently discarding. |
| 3 | **Make the consent banner Ads-aware** — keep it GDPR-legal, but confirm Consent Mode v2 is correctly signalling and consider enabling conversion modeling once volume allows. | S | Mitigates F2; recovers part of the denied-consent blind spot. |
| 4 | **Standardize internal tracking URLs** to the canonical (slashed) path so no redirect hop can drop a `sendBeacon`. | S | Removes F5 risk entirely. |
| 5 | **Rotate the webangelis key** into env. | S | Closes F7. |
| 6 | **Audit GTM** for a duplicate AW conversion tag. | S | Closes F8. |

The first two are the ones that would actually change what you can *see* — and they line up exactly with the strategic move you already chose (switch to the Goracash web offer). Building the funnel on an offer that *supports a postback* is what makes the whole tracking stack work for the first time.
