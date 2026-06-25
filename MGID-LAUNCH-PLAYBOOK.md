# MGID Launch Playbook — Native CPL (ra11.me voyance offers)

_Funnel D from `ADS-CONSULTING-PLAN.md`. First paid-native test. Channel: MGID. Offer: ra11.me persona CPL (€2.20/lead, SOI). Geo: France first._

---

## Status — what's verified live (prod)

- ✅ `/api/go/cpl` — mints cid, 302s to ra11.me with `request_id=<cid>`, all 3 personas, 400 on bad input
- ✅ `/api/postback/cpl` — secret **enforced** (401 on missing/wrong), records €2.20, fires Discord 🎯 (confirmed via pre-check `PRECHECK-AM`)
- ✅ `CPL_POSTBACK_SECRET` matches the AM's pixel (`cpl-1404aval0n` → HTTP 200)
- ⏳ End-to-end round-trip — pending the AM's real test (click `/api/go/cpl` link + submit form → expect two pings with a matching auto-generated cid)

**Tracking note:** first test runs on our spine (no BeMob). BeMob is the scaling upgrade — set it up only once a persona converts and you need placement-level conversion data + MGID S2S relay.

## Funnel flow

```
MGID native ad → /api/go/cpl?persona=&source=mgid&v={teaser_id}&click_id={click_id}
   → mints cid, logs 🃏 click-out → 302 → ra11.me/track/lce?data=<hash>&request_id=<cid>
   → 5-field love-compat form (SOI) → billable lead
   → ra11.me postback → /api/postback/cpl?secret=&cid=[request_id]&campaign=[campaign_id]
   → 🎯 NEW LEAD (€2.20) in Discord, keyed on cid
```

---

## MGID campaign config

| Setting | Value |
|---|---|
| Campaign name | `VL_CPL_NOYA_FR_mobile_v1` |
| Format | Native (standard widget) — not Push |
| Pricing model | Manual CPC (switch to SmartCPC after data) |
| Starting bid | low end of MGID's recommended FR range (~€0.06–0.10) |
| **HARD bid ceiling** | **€0.25** — break-even at 20% form-fill is €0.33 EV. Never exceed. |
| Daily budget | €25 |
| Total budget cap | €300 (safety stop) |
| GEO | France only (add BE/CH/CA after a winner) |
| Device | Mobile only first (desktop = test #2: 5-field form may convert better there) |
| OS / Browser / Connection | All |
| Schedule | All hours/days first; concentrate evenings+weekends after data |
| Categories | Broad (lifestyle / news / women's interest / entertainment) |

**Target URL:**
```
https://www.voyantlove.fr/api/go/cpl?persona=noya&source=mgid&v={teaser_id}&click_id={click_id}
```
`{teaser_id}` → logged as `v` → attribute leads to a specific creative by matching cid between the click-out and lead pings. Widget/placement-level *conversion* needs BeMob; on the spine, optimize placements by CTR + spend-without-leads.

## Optimization loop

1. **€0–30:** learning. Confirm 🎯 leads fire; read CTR per creative.
2. **€30–50:** pause creatives below ~50% of best CTR; blacklist MGID widgets with high spend + low/zero CTR.
3. **€150 — THE GATE:** is click→lead **≥15%**? Above → scale winners. Below → swap angle or test desktop.
4. **€250–300:** go/no-go on persona. Winner → desktop campaign + 2nd persona + francophone geos.

## Break-even reference

`EV/click = €2.20 × form-fill`. Break-even at €0.25 CPC needs >11.4% form-fill (>15% with margin). Dead on Google Search at any fill rate — native only.

---

## Angle library (compliance on all: no health/death, no guaranteed outcomes)

| # | Angle | Driver | Headline (≤65 char) | Thumbnail |
|---|---|---|---|---|
| 1 ⭐ | Compatibilité / mécanisme | curiosity + low effort | Entrez vos 2 prénoms : votre compatibilité amoureuse en 1 min | Two names joined by glowing zodiac wheel |
| 2 | Doute relationnel | anxiety / reassurance | Êtes-vous vraiment faits l'un pour l'autre ? Les astres répondent | Couple silhouette at dusk, starfield |
| 3 ⭐ | Témoignage 1ère personne | social proof + curiosity gap | J'ai testé ma compatibilité avec lui. Le résultat m'a surprise. | Woman gazing at phone, warm tones |
| 4 | Retour de l'ex | hope / longing | Votre histoire avec votre ex a-t-elle un avenir ? Vos signes parlent | Empty café table, one chair pulled out |
| 5 | Timing / rencontre | anticipation (singles) | Quand rencontrerez-vous le grand amour ? Votre thème le révèle | Hand reaching toward a constellation |
| 6 | Identité du signe | self-identity + seasonal | Ce que votre signe révèle sur votre vie amoureuse en 2026 | Single bold zodiac glyph, editorial |

⭐ = open with these two.

---

## First batch — launch these 4 ads (2 angles × 2 creatives)

**Image: 1200×800 (1.5:1), min 492×328. Title ≤65 char. Description ≤140 char. Minimal text-on-image.**

### Angle 1 — Compatibilité / mécanisme
**1a** · Title: *Entrez vos 2 prénoms : votre compatibilité amoureuse en 1 min*
Desc: *Ce que les astres disent de votre relation. Prénom, date de naissance, et c'est tout. Résultat immédiat et offert.*
Thumbnail: two first-names joined by a glowing zodiac wheel.

**1b** · Title: *Votre date de naissance révèle votre compatibilité amoureuse*
Desc: *2 prénoms, 2 dates de naissance, une réponse en moins d'une minute. Votre première lecture est offerte.*
Thumbnail: two hands almost touching + subtle astrological symbols.

### Angle 3 — Témoignage 1ère personne
**3a** · Title: *J'ai testé ma compatibilité avec lui. Le résultat m'a surprise.*
Desc: *Je doutais de notre relation. Ce que la lecture a révélé sur nous deux m'a vraiment éclairée. À essayer.*
Thumbnail: woman gazing thoughtfully at her phone, warm tones.

**3b** · Title: *J'hésitais sur mon couple. Une lecture a tout changé pour moi.*
Desc: *En entrant nos prénoms et nos dates de naissance, j'ai enfin vu notre compatibilité clairement. C'est offert.*
Thumbnail: close-up of hands holding a phone showing a soft star/zodiac graphic.

**Rule:** the angle that wins on **form-fill** (not just CTR) becomes the scale angle → spin 3–4 fresh creatives off it and expand. Bring in angles 4/5 only once comfortable with MGID + AM approval patterns (compliance-sensitive).

---

## Launch gates (all must be green before spend)

- [ ] AM's end-to-end test: two pings, matching auto-generated cid
- [ ] MGID account approved
- [ ] €250–300 deposited
- [ ] 4 creatives uploaded, campaign set per config above
- [ ] Bid ≤ €0.25, daily €25, France, mobile

When all green: launch, then run the optimization loop. First decision point at ~€150 (the 15% form-fill gate).
