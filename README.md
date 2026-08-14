# VoyantLove.fr - Voyance Amoureuse Spécialisée

## 🎯 Project Overview

**Domain**: voyantlove.fr  
**Tech Stack**: Next.js 15, TypeScript, Tailwind CSS  
**Content**: 106 semantic pages on love/romantic psychic consultations  
**Niche**: Highly specialized love situation guidance (breakups, reconciliation, new love, compatibility)

---

## 📊 Project Stats

- **Total Pages**: 106 love situation pages
- **Word Count per Page**: ~2,400-2,600 words
- **Entities**: 120 love-related entities
- **Intents**: 8 primary user intents
- **Content Templates**: 8 complete templates
- **Semantic Relationships**: 45+ mapped connections

---

## 🏗️ Architecture

### Directory Structure

```
voyantlove/
├── app/                    # Next.js 15 App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── compatibilite-amoureuse/[pair]/   # Dynamic hub (typed-array driven)
│   ├── tarot-amour/[carte]/              # Dynamic hub (typed-array driven)
│   ├── astrologie-amour/[signe]/         # Dynamic hub (typed-array driven)
│   ├── reves-amour/[reve]/               # Dynamic hub (typed-array driven)
│   ├── glossaire/[terme]/                # Dynamic hub (typed-array driven)
│   └── crise-couple/, reconquete/, rupture/, sentiments/,
│       nouvelle-rencontre/, methodes-voyance/,
│       voyance-gratuite-amour/           # Hand-authored pages on the shared
│                                          # ContentPage shell (see below)
├── components/             # Reusable React components
│   ├── ContentPage.tsx    # Shared shell (metadata/H1/schema/FAQ/CTA) driven
│   │                      # by a typed ContentPageConfig, used by ~85 pages
│   └── ...
├── data/                  # Small static datasets (e.g. data/voyants.json)
├── lib/                   # Typed per-network data arrays + business logic
│   ├── compatibilitePairs.ts, tarotLoveCards.ts, signesAmour.ts,
│   │   revesAmour.ts, glossaire.ts   # each exports validate<X>Record()
│   └── numerology.ts, voyants.ts, schema.ts, ...
├── scripts/
│   └── validate-pseo.ts   # Repository-native pSEO quality gate (npm run validate)
└── public/                # Static assets
```

---

## 🔑 Key Features

### 1. Semantic SEO Architecture
- **Entity-rich content**: 5+ entities per 200 words
- **Intent-matched sections**: 8 intents × 106 pages
- **LLM-optimized**: 150-170 word answer capsules
- **Schema markup**: Article, FAQPage, HowTo

### 2. Love Situation Categories

**Breakup & Reconciliation** (Very High Volume):
- Reconquérir son Ex
- Oublier son Ex
- Va-t-il/elle Revenir?
- Rupture Amoureuse

**New Love** (Very High Volume):
- Quand Vais-je Rencontrer Quelqu'un?
- Rencontrer l'Âme Sœur
- Nouvelle Rencontre Amoureuse

**Relationship Issues** (High Volume):
- M'aime-t-il/elle?
- Crise de Couple
- Infidélité
- Jalousie

**Future & Compatibility** (High Volume):
- Avenir Amoureux
- Compatibilité de Couple
- Âme Sœur vs Flamme Jumelle

### 3. Entity Database

**120 entities organized in**:
- Core entities (voyance amoureuse, tarot, ex, rupture)
- Love situations (10 major categories)
- Emotional states (chagrin, doute, jalousie, espoir)
- Divinatory methods (tarot, astrologie, oracle)
- Specific questions (va-t-il revenir, m'aime-t-il, quand rencontre)
- Solutions (reconquérir, oublier, pardon, communication)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
cd voyantlove
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

### Static Export (for SEO)

```bash
npm run build
# Outputs to /out directory
```

---

## 📝 Content Generation

### Using Templates

Each love situation page uses one of 8 intent templates:

1. **get-ex-back** - Reconquérir son Ex
2. **move-on** - Oublier son Ex / Surmonter Rupture
3. **will-they-return** - Va-t-il/elle Revenir?
4. **do-they-love-me** - M'aime-t-il/elle?
5. **when-will-i-meet** - Quand Rencontre?
6. **relationship-crisis** - Crise de Couple
7. **compatibility-soulmate** - Compatibilité
8. **love-future** - Avenir Amoureux

### Template Structure

```typescript
{
  answerCapsule: "150-170 words, 7 entities",
  sections: [5 H3 sections, 75-100 words each],
  faqs: [4 questions with schema markup],
  internalLinks: [3 semantic connections],
  cta: {primary, secondary, tertiary}
}
```

---

## 🎨 Brand Guidelines

### Colors
- **Primary Purple**: #667eea
- **Dark Purple**: #764ba2
- **Pink Accent**: #ed64a6

### Typography
- **Font**: System font stack (Apple, Segoe UI, Roboto)
- **Headings**: Bold, 2rem-2.5rem
- **Body**: 1.125rem, line-height 1.8

### Voice & Tone
- **Empathetic**: Understand emotional pain
- **Honest**: Don't give false hope
- **Empowering**: Focus on growth and action
- **Professional**: Serious but accessible

---

## 📊 Quality Metrics

### Per Page Requirements
✅ 2,400+ words unique content  
✅ 150-170 word answer capsule  
✅ 7 entities in capsule  
✅ 5+ entities per 200 words overall  
✅ 4 FAQs with schema  
✅ 3 internal semantic links  
✅ Schema markup (Article + FAQPage)  
✅ Emotional tone matching intensity  

### SEO Targets
- Top 10 for "[situation] voyance" queries
- 20%+ featured snippet capture
- AI citation in ChatGPT/Perplexity
- +50% organic traffic in 3 months

---

## 🔗 Internal Linking Strategy

### Hub-Spoke Model

```
Homepage (Hub)
├─ Breakup & Reconciliation Hub
│  ├─ Reconquérir son Ex (spoke)
│  ├─ Oublier son Ex (spoke)
│  └─ Va-t-il Revenir? (spoke)
├─ New Love Hub
│  ├─ Quand Rencontre? (spoke)
│  └─ Âme Sœur (spoke)
└─ Relationship Hub
   ├─ M'aime-t-il? (spoke)
   └─ Crise Couple (spoke)
```

### Semantic Link Rules

```typescript
"get-ex-back" → ["will-they-return", "do-they-love-me", "move-on"]
"move-on" → ["when-will-i-meet", "love-future", "get-ex-back"]
"will-they-return" → ["get-ex-back", "move-on", "do-they-love-me"]
```

---

## 🧪 Validation

### pSEO Quality Gate

```bash
npm run validate
```

`scripts/validate-pseo.ts` is the repository-native validator (it replaces an
older `scripts/validate-semantic-quality.js` that targeted a since-removed
`data/entities/` + `data/intents/` + `lib/semantic/` pipeline). Against the
architecture that actually ships today, it checks:
- Each typed network's own `validate<X>Record()` publication gate, re-run as a CI failure
- Slug uniqueness and `generateStaticParams()`/`app/sitemap.ts` drift
- Per-page metadata/canonical/H1/schema presence (aware of both literal
  page source and the shared `ContentPage`/`contentMeta` shell)
- Orphan-page and broken-internal-link detection
- Cross-page keyword-cannibalization and within-network near-duplicate content

---

## 📦 Data Files

Content data lives in typed TypeScript arrays under `lib/*.ts`, not JSON —
each per-network file (`lib/compatibilitePairs.ts`, `lib/tarotLoveCards.ts`,
`lib/signesAmour.ts`, `lib/revesAmour.ts`, `lib/glossaire.ts`) exports its
records plus a `validate<X>Record()` gate, rendered through the matching
`app/**/[param]/page.tsx` dynamic route and filtered into `app/sitemap.ts`.

The hand-authored pages under `crise-couple/`, `reconquete/`, `rupture/`,
`sentiments/`, `nouvelle-rencontre/`, `methodes-voyance/`, and
`voyance-gratuite-amour/` are driven by a per-page `ContentPageConfig` object
consumed by the shared `components/ContentPage.tsx` shell instead of a
separate data file.

---

## 🚢 Deployment

### Recommended: Vercel

```bash
vercel deploy
```

Domain: voyantlove.fr

### DNS Configuration

```
A Record: @ → Vercel IP
CNAME: www → cname.vercel-dns.com
```

---

## 📈 Roadmap

### Phase 1: Foundation (Week 1) ✅
- [x] Project setup
- [x] Entity database (120 entities)
- [x] Intent templates (8 templates)
- [x] Prototype page (Reconquérir son Ex)

### Phase 2: Core Pages (Week 2)
- [ ] Generate 30 high-priority pages
- [ ] Implement dynamic routing
- [ ] Add schema markup
- [ ] Internal linking

### Phase 3: Scale (Week 3-4)
- [ ] Generate remaining 76 pages
- [ ] Quality validation
- [ ] Performance optimization
- [ ] SEO audit

### Phase 4: Launch (Week 5)
- [ ] Deploy to voyantlove.fr
- [ ] Submit sitemap
- [ ] Monitor rankings
- [ ] Iterate based on data

---

## 👥 Team

**Project**: VoyantLove.fr  
**Type**: Programmatic SEO + Semantic Content  
**Framework**: Next.js 15  
**Focus**: Love/Romantic Psychic Consultations

---

## 📄 License

Private project - All rights reserved

---

## 🙏 Acknowledgments

Built with:
- Next.js 15
- TypeScript
- Tailwind CSS
- Semantic SEO Framework
- PSEO Orchestrator

---

**Last Updated**: February 8, 2025
