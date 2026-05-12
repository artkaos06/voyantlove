# LovePsychicGuide — Commercial-Intent Campaign Brief (v2 pivot)

**Last updated:** 2026-05-05
**Status:** ready to launch — pending user execution in Google Ads UI
**Lander:** `https://www.lovepsychicguide.com/online-psychic-reading`
**Geo:** US (UK + CA optional in week 2)
**Total budget:** €500-800 over 2-3 weeks
**Payout:** $50 USD per Keen first-purchase
**Pivot rationale:** v1 informational-intent campaign got 6.5% CTA-CTR but 0 conversions on €130 spend. Editorial readers got their answer for free and left. Commercial-intent searchers are pre-qualified buyers already shopping for the service.

---

## 1. Decision math (refresher)

| Scenario | What happens |
|---|---|
| 1 conversion at €500 spend | $50 payout, €450 net loss, but funnel is validated. **Continue with optimizations.** |
| 3 conversions at €800 spend | $150 payout, €650 net loss, but enough signal for Smart Bidding to learn. **Scale to €100/day.** |
| 0 conversions at €500 spend | Funnel is broken at lander or offer level. **Pause + diagnose Microsoft Clarity recordings.** |
| 0 conversions at €800 spend | Commercial-intent paid in this niche isn't viable at our scale. **Pivot to organic / different angle.** |

---

## 2. Keyword themes — commercial intent (US market)

### Theme A — "Best psychic reading" (highest commercial intent)

Phrase match unless noted:

```
"best online psychic"
"best psychic reading"
"best online psychic reading"
"best love psychic"
"best psychic site"
"top rated psychic reading"
"top online psychic"
```

### Theme B — "Online psychic reading" (generic commercial)

```
"online psychic reading"
"online psychic readings"
"online tarot reading"
"online love reading"
"live psychic reading online"
"psychic chat online"
"online psychic chat"
```

### Theme C — "Cheap / intro offer" (price-sensitive buyers)

```
"5 minutes for $1 psychic"
"free psychic reading 5 minutes"
"cheap online psychic reading"
"affordable psychic reading"
"first psychic reading free"
"trial psychic reading"
```

### Theme D — "Try / want a reading" (action-intent)

```
"talk to a psychic online"
"talk to a love psychic"
"chat with a psychic"
"speak to a psychic"
"get a love reading"
"get a psychic reading now"
```

### What we deliberately exclude

- `"keen.com"`, `"keen psychic"` → brand bidding, possible affiliate-ToS violation
- `"kasamba"`, `"psychic source"` → competitor brands
- `"free psychic reading"` (without "5 min" qualifier) → tire-kickers
- `"how to be a psychic"` → wrong audience
- `"psychic medium"` (general) → grief-bereaved audience, different intent

---

## 3. Ad group architecture (4 ad groups)

| Ad group | Theme | Keywords | Max CPC | Daily budget share |
|---|---|---|---|---|
| `Best_Psychic` | Theme A | 7 phrase | $4.00 | 30% ($15/day) |
| `Online_Psychic` | Theme B | 7 phrase | $4.00 | 30% ($15/day) |
| `Cheap_Intro` | Theme C | 6 phrase | $3.50 | 20% ($10/day) |
| `Talk_To_Psychic` | Theme D | 6 phrase | $3.50 | 20% ($10/day) |

**Use shared campaign-level budget** ($50/day total), not per-ad-group splits — lets Google flex spend toward what's working.

**Why these max CPCs (higher than v1's $2.50):**
- Commercial-intent keywords compete with Ingenio (Keen's parent) running first-party brand campaigns
- Realistic auction range: $3-8 CPC
- $4 max gives us 50% chance of winning auctions vs serious advertisers
- We'll pay 60-80% of max in practice = ~$2.40-$3.20 actual

---

## 4. Negative keyword list (additive — keep `LPG_Universal_Negatives` applied)

Add a NEW shared list `LPG_Commercial_Negatives` and apply alongside the universal one:

### Wrong-intent (informational, not commercial)
```
"how to"
"how do"
"why does"
meaning
explained
definition
"what is"
"what does it mean"
quiz
test
yourself
diy
"can i be"
```

### Wrong-vertical
```
medium
ghost
afterlife
dead
deceased
loved one
pet
career
job
money
financial
health
medical
```

### Religious / spiritual non-commercial
```
biblical
christian
catholic
prayer
pastor
god speaking
holy spirit
```

### Already-customer / brand
```
keen account
keen login
keen advisor
keen reviews
keen complaint
kasamba
psychicsource
psychic source
oranum
mysticsense
```

### Already-purchased / support
```
refund
chargeback
dispute
unsubscribe
delete account
cancel subscription
```

---

## 5. RSA copy (16 total — 4 per ad group, 12-15 headlines + 4 descriptions each)

### Ad group: `Best_Psychic`

**Final URL**: `https://www.lovepsychicguide.com/online-psychic-reading`
**Display path**: `/Online-Psychic/5-Min-For-$1`

**RSA 1 — direct offer hook**

Headlines (15):
```
1.  Best Love Psychics — $1 Trial
2.  Top-Rated Online Psychics
3.  5 Minutes for $1
4.  Real Love Psychics, $1 to Try
5.  Top Love Advisors on Keen
6.  Talk to a Real Psychic — $1
7.  Honest Love Reading for $1
8.  Try a Love Psychic Risk-Free
9.  Best Psychic Site (4.4/5)
10. 25 Years of Real Readings
11. Available Now · From $1
12. Real Psychics. Real Answers.
13. Trusted Since 1999 — From $1
14. Live Love Readings From $1
15. Start a Reading for Just $1
```
📌 Pin #1 ("Best Love Psychics — $1 Trial") to Position 1.

Descriptions (4):
```
1. Top-rated love & relationship psychics. 5 minutes for $1 with any new advisor.
2. Real psychics on Keen — 4.4/5 across thousands of recent reviews. Try for $1.
3. No subscription. Pay-per-minute. Set a session cap. Cancel any time.
4. 1,700+ vetted advisors live 24/7. Honest readings. Reader-supported reviews.
```

**RSA 2 — trust + tenure hook**, **RSA 3 — urgency / availability hook**, **RSA 4 — review/comparison hook**:
*Same structure, different angles. Headlines emphasize: 25-year platform / available now / honest reviews. I'll generate these on first launch if you ping me.*

### Ad group: `Online_Psychic`

**Final URL**: same as above
**Display path**: `/Online-Reading/5-Min-For-$1`

Headlines aim at the generic "online psychic reading" search:
```
1.  Online Love Psychic — $1 Trial
2.  Live Online Psychic Reading
3.  Real Online Tarot — $1 to Try
4.  Online Psychic Chat — $1
5.  Talk to a Psychic Online
6.  Live Reading, 5 Min for $1
7.  Online Love Reading 24/7
8.  Trusted Online Psychics
9.  Live Psychics Available Now
10. Honest Online Reading — $1
11. Talk to a Real Psychic
12. Online Tarot & Love Readings
13. 4.4/5 Rated Online Psychics
14. Start in 60 Seconds — $1
15. Top Online Psychic Platform
```

Descriptions same template as RSA 1 above.

### Ad group: `Cheap_Intro`

Headlines emphasize the $1 deal:
```
1.  5 Min for $1 — Real Psychics
2.  $1 First Psychic Reading
3.  Affordable Online Psychic — $1
4.  Try a Psychic for Just $1
5.  Cheap Real Psychic Reading
6.  5 Min Trial — $1
7.  Honest Reading for $1
8.  Talk to a Love Psychic — $1
9.  $1 Trial · No Subscription
10. Real Psychics. $1. No Catch.
11. Start a Reading — Just $1
12. 4.4/5 Rated · From $1
13. First Reading Just $1
14. Try Before You Commit — $1
15. $1 Reading · 24/7 Available
```

### Ad group: `Talk_To_Psychic`

Action-intent headlines:
```
1.  Talk to a Love Psychic Now
2.  Talk to a Real Psychic — $1
3.  Chat With a Psychic Now
4.  Speak to a Love Psychic
5.  Get a Real Love Reading
6.  Talk to a Trusted Psychic
7.  Live Psychic Chat — From $1
8.  Get Your Love Reading Now
9.  Chat or Call a Real Psychic
10. Speak to a Psychic for $1
11. Talk Now — 5 Min for $1
12. Real Psychics Available Now
13. Live Love Reading in 60 Sec
14. Talk to a Psychic 24/7
15. Live Chat With a Love Psychic
```

---

## 6. Geo targeting

| Geo | Status | When to enable |
|---|---|---|
| US | Day 1 (primary) | Highest spending power, Keen is US-based, no language friction |
| UK | Week 2 (optional) | If US is converting at break-even, expand |
| CA | Week 3 (optional) | Smaller volume, similar conversion profile |
| AU | Week 3 (optional) | Different timezones, fills off-hours auction inventory |

**Settings:**
- **Target**: "Presence: People in or regularly in your targeted locations"
- **NOT**: "Presence or interest" (wastes budget on non-US users searching US-related terms)

---

## 7. Device adjustments

- **Mobile**: +20% bid adjustment (commercial-intent psychic searches skew mobile, especially late-night)
- **Desktop**: 0% (baseline)
- **Tablet**: -10% (lower converting)

Adjust after first 100 clicks based on observed device CVR.

---

## 8. Audience signals (Observation, NOT Targeting)

Layer these as **Observation** mode (collect data without restricting reach):

| Audience | Why |
|---|---|
| In-market: Dating Services | Buyer-intent, sees value in relationship guidance |
| In-market: Wedding Planning | Often searching for compatibility / relationship readings |
| Affinity: Spirituality & Alternative Beliefs | Already comfortable with psychic concept |
| Detailed Demographics: Single / Recently divorced | Common life-stage triggers |

After 2 weeks, review which audiences over-perform → bid-up by 10-30% or move to Targeting mode.

---

## 9. Bid strategy phasing

### Phase 1 (week 1) — Manual CPC
- Set max CPC per ad group as in §3
- Goal: get 100+ clicks accumulated, gather Quality Score data
- Watch Vercel Discord for first conversion fire

### Phase 2 (week 2-3) — Maximize Conversions (no target CPA)
- Switch ONLY if Phase 1 produces 1+ conversion
- Google's algorithm starts optimizing for the conversion event
- Still need 30+ conversions for true Smart Bidding optimization

### Phase 3 (week 4+, if scaling) — Maximize Conversion Value (Target ROAS: 100%)
- Requires 30+ conversions in last 30 days
- Lets Google bid up to $50 (the payout) on high-converting clicks
- Profit margin emerges from the 60-80% paid CPC vs $50 conversion value

---

## 10. Day-1 launch checklist

```
☐ 1. PAUSE the existing informational-intent campaign
     (LovePsychicGuide_US_Search_v1) — keep it as historical reference, do
     not delete. Toggle to Paused.

☐ 2. Create new campaign: LovePsychicGuide_Commercial_US_Search_v2
     - Type: Search
     - Goal: Sales
     - Conversion goal: Keen First Purchase (OCI) — same as v1

☐ 3. Apply settings from §6 (geo), §7 (devices), §8 (audience signals)

☐ 4. Set daily budget: $50/day shared at campaign level

☐ 5. Bid strategy: Manual CPC (NO Enhanced)
     - Note: hidden in campaign creation, set post-creation in
       Settings > Bidding > Change bid strategy

☐ 6. Create the 4 ad groups (Best_Psychic, Online_Psychic, Cheap_Intro,
     Talk_To_Psychic) with keywords from §2 and default max CPCs from §3.

☐ 7. Add 1 RSA per ad group from §5 (more variants in week 2 once
     baseline performance is established)

☐ 8. Final URLs for ALL ad groups: /online-psychic-reading

☐ 9. Display paths set per ad group (see §5)

☐ 10. Create + apply new shared negative list: LPG_Commercial_Negatives
      (negatives from §4). Keep LPG_Universal_Negatives also applied.

☐ 11. Add the 4 sitelinks + 4 callouts + structured snippets at campaign
      level (same assets as v1 — re-link them to this new campaign).

☐ 12. Set up automated rule:
      Pause keyword when:
        Cost > $30 in last 7 days AND conversions = 0
      Run hourly.

☐ 13. Set up automated rule:
      Pause ad group when:
        Cost > $100 in last 7 days AND conversions = 0
      Run daily.

☐ 14. Verify Manual CPC is active (NOT Maximize Conversions).
☐ 15. Verify campaign is using the new /online-psychic-reading lander.
☐ 16. Enable campaign.
☐ 17. Watch Discord for first click-out (purple embed). Within 5 min of
      enable, you should see real ad-driven clicks land.
```

---

## 11. Decision rubric (when to scale / sustain / kill)

### Daily check (Discord daily digest)

Look at:
- 🟣 Click-out count (lander → /api/go/keen)
- 🟢 Conversion count
- Cumulative spend
- Cumulative payout

### Decision points

**Day 3 (~$150 spent):**
- If CTA-CTR > 4% AND ≥1 conversion → continue, maybe bump bids
- If CTA-CTR > 4% AND 0 conversions → lander needs work (revisit)
- If CTA-CTR < 2% → message-match issue, revise RSAs

**Day 7 (~$350 spent):**
- If ≥1 conversion → continue to $500 milestone
- If 0 conversions BUT good CTA-CTR (>5%) → check Microsoft Clarity recordings on /online-psychic-reading; check Vercel for OCI errors
- If 0 conversions AND CTA-CTR < 3% → pause, rethink

**Day 14 (~$700 spent):**
- If ≥3 conversions → scale to $100/day, switch to Maximize Conversions
- If 1-2 conversions → continue at current pace another week, dig into what's converting
- If 0 conversions → ⛔ PIVOT. Either commercial-intent doesn't work for us at this scale, or there's a deeper offer/lander issue we haven't identified.

### Scale signals
- ROAS ≥ 1.0× at $500 spend → continue with same budget
- ROAS ≥ 1.5× at $500 spend → bump to $75-100/day
- ROAS ≥ 2.0× at $1000 spend → switch to Maximize Conversion Value with tROAS=1.5

### Kill signals
- 0 conversions at $800 spend = real signal commercial-intent paid isn't viable
- High CTA-CTR + 0 conversions = Keen funnel itself isn't converting from our traffic (could be geo, device, time-of-day)
- Disapprovals on >50% of ads = creative isn't compliant enough; rewrite

---

## 12. What to monitor passively in Discord

Now with the daily digest cron live, your morning check is:

```
🟣 Click-outs:           XX (XX gclid, X gbraid, X no-attr)
🎯 Conversions:           X · est. payout $XX
✅ OCI uploads:           X ok, X failed
🛡️ Unauthorized:          X
👥 Unique IPs:            XX
📈 Attribution rate:      XX%
```

Time to spend: 60 seconds per day.

---

## 13. What this brief assumes you do

1. **Pause v1 campaign before launching v2.** Don't run both simultaneously — they'd compete for the same Keen conversions and you couldn't attribute results.

2. **Don't touch the v2 campaign for 48 hours after enable.** Quality Score needs accumulated clicks. Bid changes mid-learning confuse the algorithm.

3. **Cap your total losses.** Set a hard rule: "If we hit €800 spend with 0 conversions, I pause and re-evaluate, no exceptions."

4. **The Keen-funnel-itself piece.** Once a user clicks through from our lander to Keen, what happens on Keen.com is outside our control. Conversion rate from Keen-landing to first-purchase is industry-standard 8-15%. If we get great affiliate clicks but no conversions, it's likely Keen's own funnel for cold US traffic, not ours.

---

## 14. Per-month reality check

At full performance:
- $500-1000/month in ad spend
- 8-15 first-purchase conversions
- $400-750 in payout
- Marginal loss to small profit

This isn't a high-margin business at our scale. Commercial-intent affiliate at solo-operator budgets is a learning ground, not a meaningful revenue engine. Expect to break even within 2-3 months, profitable scale starts at $3000+/month ad spend with a proven lander.

Plan accordingly.

---

## 15. Quick links

- New lander: https://www.lovepsychicguide.com/online-psychic-reading
- Keen review: https://www.lovepsychicguide.com/love-psychic-services/keen-review
- Conversion Action ID: `7594363358`
- MCC: `763-511-4478`
- Customer ID: `4167166454`
- v1 brief (informational, paused): `CAMPAIGN-BRIEF-LOVEPSYCHICGUIDE.md`
