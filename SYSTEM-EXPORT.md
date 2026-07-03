# pSEO Website System Export

> Drop this file + CLAUDE.md into a new project to replicate the VoyantLove architecture for any niche.

---

## 1. ARCHITECTURE OVERVIEW

**Pattern**: Hub-and-Spoke Programmatic SEO
**Stack**: Next.js 15 (App Router) + TypeScript + Tailwind CSS
**Output**: Static export (`output: 'export'`) for maximum SEO crawlability
**Deployment**: Vercel (auto-deploy on push)

### Site Structure
```
Homepage (/)
  |
  +-- Hub 1 (/category-a/)           <- CollectionPage schema
  |     +-- /category-a/topic-1/     <- Article schema
  |     +-- /category-a/topic-2/
  |     +-- /category-a/topic-3/
  |     +-- /category-a/topic-4/
  |     +-- /category-a/topic-5/
  |
  +-- Hub 2 (/category-b/)
  |     +-- /category-b/topic-1/
  |     +-- ...
  |
  +-- Hub 3-5 (same pattern)
  |
  +-- /mentions-legales/
  +-- /confidentialite/
  +-- /contact/
```

**Target**: 5 hubs x 5 spokes each = 25 content pages minimum, scalable to 100+

---

## 2. DATA LAYER (Create These First)

### 2.1 Entity Database (`data/entities/{niche}-entities.json`)

Define 80-120 entities organized into categories. Each entity needs:

```json
{
  "meta": {
    "version": "1.0",
    "language": "fr-FR",
    "domain": "your-niche",
    "totalEntities": 120
  },
  "categories": {
    "core": [
      {
        "id": "main-topic",
        "term": "Main Topic Term",
        "definition": "Detailed definition for knowledge graph",
        "synonyms": ["synonym1", "synonym2"],
        "relatedTerms": ["broader1", "broader2"],
        "searchVolume": "very-high|high|medium|low",
        "importance": "critical|high|medium|low"
      }
    ],
    "situationCategories": [],
    "emotionalStates": [],
    "stages": [],
    "concepts": [],
    "methods": [],
    "specificQuestions": [],
    "obstacles": [],
    "solutions": [],
    "timing": []
  }
}
```

**Category Types** (adapt to your niche):
1. **Core** (3-5 entities): Your main topic + primary service terms
2. **Situation Categories** (8-12): Major user scenarios
3. **Emotional States** (5-8): How users feel when searching
4. **Stages** (4-6): Timeline/progression stages
5. **Concepts** (4-6): Abstract concepts in your domain
6. **Methods** (3-5): How your service works
7. **Specific Questions** (6-10): Exact user queries
8. **Obstacles** (4-6): Problems users face
9. **Solutions** (4-6): What you help with
10. **Timing/Trust** (4-6): When + credibility signals

### 2.2 Relationships Database (`data/entities/{niche}-relationships.json`)

Define 40-50 semantic relationships:

```json
{
  "hierarchy": {
    "level1": "core-concept",
    "level2": ["category-a", "category-b", "category-c"],
    "level3": ["specific-a1", "specific-a2", "specific-b1"],
    "level4": ["emotional-state-1", "emotional-state-2"],
    "level5": ["solution-1", "solution-2"]
  },
  "relationships": [
    {
      "source": "entity-a",
      "target": "entity-b",
      "type": "causes|solution|enables|requires|related_concept",
      "strength": 0.9,
      "context": "When A happens, B follows"
    }
  ],
  "semanticClusters": [
    {
      "name": "Cluster Name",
      "intensity": "very-high|high|medium",
      "coreEntities": ["entity-a", "entity-b", "entity-c"],
      "linkingStrategy": "Description of how pages in this cluster should link"
    }
  ],
  "coOccurrencePatterns": [
    { "terms": ["term1", "term2", "term3"], "strength": "very-high" }
  ]
}
```

**Relationship Types**:
- `causes` (A causes B)
- `solution` (A solves B)
- `enables` (A makes B possible)
- `requires` (A needs B)
- `can_lead_to` (A might lead to B)
- `related_concept` (A is conceptually linked to B)
- `answers_question` (A answers query B)
- `symptom_of` (A indicates B)
- `essential_for` (A is needed for B)

### 2.3 Intent Taxonomy (`data/intents/{niche}-intent-taxonomy.json`)

Define 6-10 primary user intents:

```json
{
  "intents": [
    {
      "id": "intent-slug",
      "name": "Intent Display Name",
      "priority": "critical|high|medium",
      "searchVolume": "very-high|high|medium",
      "emotionalIntensity": "very-high|high|medium|low",
      "userGoals": [
        "What the user wants to achieve",
        "What answer they're looking for",
        "What action they want to take"
      ],
      "queryPatterns": [
        "exact search query 1",
        "exact search query 2",
        "exact search query 3"
      ],
      "contentRequirements": {
        "wordCount": "400-600",
        "mustInclude": ["Topic A", "Topic B", "Statistics"],
        "conversionGoal": "What CTA to show",
        "emotionalTone": "empowering|compassionate|analytical"
      }
    }
  ],
  "intentCombinations": [
    {
      "name": "User Journey Name",
      "path": ["intent-1", "intent-2", "intent-3"],
      "description": "When users follow this emotional path"
    }
  ]
}
```

### 2.4 Content Templates (`data/intents/{niche}-templates-complete.json`)

One template per intent:

```json
{
  "templates": [
    {
      "intentId": "intent-slug",
      "heading": "H1 Title for Page",
      "metaTitle": "SEO Title (60 chars max)",
      "metaDescription": "Meta description (155 chars max)",
      "emotionalTone": "empowering",
      "answerCapsule": {
        "wordCount": "150-170",
        "entityCount": 7,
        "structure": "3 paragraphs: hook + statistic + guidance",
        "text": "Full answer capsule text with **bolded entities**..."
      },
      "sections": [
        {
          "h3": "Section Title",
          "wordCount": "75-100",
          "content": "Section content with **entity mentions**..."
        }
      ],
      "faqs": [
        {
          "question": "Question text?",
          "answer": "80-120 word answer with entities..."
        }
      ],
      "internalLinks": [
        {
          "anchor": "Anchor text",
          "targetIntent": "related-intent-id",
          "context": "Where in content to place"
        }
      ],
      "ctas": {
        "primary": "Main CTA text",
        "secondary": "Secondary CTA text"
      }
    }
  ]
}
```

---

## 3. KOREY TURKBERG SEMANTIC SEO RULES

These rules govern ALL content generation:

### 3.1 Answer Capsule (Position 0 / Featured Snippet Optimization)
- **Exactly 150-170 words** (not shorter, not longer)
- **7+ bolded entities** using `<strong>` tags in HTML
- **3-paragraph structure**:
  1. Problem acknowledgment + solution introduction (with 2-3 entities)
  2. Key statistic or data point (with 2-3 entities)
  3. Action-oriented guidance (with 2-3 entities)
- Place immediately after the intro paragraph
- Wrap in a visually distinct container (light background + left border)

### 3.2 Entity Density
- **Target**: 5-7 entities per 200 words throughout the page
- **Bold ALL entity mentions** with `<strong>` tags
- **Vary phrasing** — don't repeat the same entity term identically; use synonyms from the entity database
- **Never keyword-stuff** — entities must flow naturally in sentences

### 3.3 Internal Linking
- **Max density**: 1 link per 150 words (never more)
- **Anchor text**: Use varied, descriptive phrases (never "click here" or bare URLs)
- **Placement**: Mid-paragraph, integrated into sentences naturally
- **3 semantic links per content page** based on relationship graph
- **Hub pages link to all spokes**, spokes link to 2-3 siblings + back to hub

### 3.4 FAQ Section
- **4-5 questions per page** minimum
- **80-150 words per answer** (not shorter)
- **3-4 entities per answer**
- **Always implement FAQPage schema** (JSON-LD)
- Questions should match real search queries (use query patterns from intent taxonomy)

### 3.5 Content Depth
- **Content pages**: 1,500-2,500 words minimum
- **Hub pages**: 500-800 words (mostly navigation)
- **Every H2 section**: 200-400 words
- **Every H3 section**: 75-150 words

### 3.6 E-E-A-T Signals
- **EEATSignal component** on every page (source, date, method)
- **Statistics and percentages** in content (cite-worthy data)
- **Professional tone** — authoritative but accessible
- **Author/organization schema** on all pages

---

## 4. PAGE TEMPLATES (Code Patterns)

### 4.1 Content Page Template

```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';

export const metadata: Metadata = {
  title: 'SEO Title (60 chars) | Brand',
  description: 'Meta description 155 chars max...',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  alternates: { canonical: 'https://yourdomain.com/hub/page-slug' },
};

export default function PageName() {
  const articleSchema = getArticleSchema({
    title: metadata.title as string,
    description: metadata.description as string,
    url: 'https://yourdomain.com/hub/page-slug',
    datePublished: '2025-02-01',
    dateModified: '2025-02-08',
    keywords: metadata.keywords as string[],
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://yourdomain.com' },
    { name: 'Hub Name', url: 'https://yourdomain.com/hub' },
    { name: 'Page Title', url: 'https://yourdomain.com/hub/page-slug' },
  ]);

  const faqSchema = getFAQSchema([
    { question: 'Question 1?', answer: 'Answer with entities...' },
    { question: 'Question 2?', answer: 'Answer with entities...' },
    { question: 'Question 3?', answer: 'Answer with entities...' },
    { question: 'Question 4?', answer: 'Answer with entities...' },
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Schema injection - invisible */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header with gradient */}
      <header className="bg-gradient-to-r from-{color1} via-{color2} to-{color3} text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/hub" className="text-white/80 hover:text-white mb-4 inline-block">
            ← Hub Name
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Emoji Page Title</h1>
          <p className="text-xl opacity-95 mb-6">Subtitle description</p>
        </div>
      </header>

      {/* Content area */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 text-center shadow">
            <div className="text-2xl font-bold text-{color}">85%</div>
            <div className="text-sm text-gray-600">Stat Label</div>
          </div>
          {/* ... 3 more stats */}
        </div>

        <EEATSignal colorScheme="{color}" method="Method description" />

        {/* Main article */}
        <article className="bg-white rounded-xl shadow-md p-8 mb-8">
          {/* Intro paragraph */}
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Emotional hook paragraph with <strong>entity mentions</strong>...
          </p>

          {/* Answer Capsule (150-170 words, 7 entities) */}
          <div className="bg-{color}-50 border-l-4 border-{color}-500 p-6 rounded-r-lg mb-8">
            <p className="text-gray-800 leading-relaxed">
              Answer capsule paragraph 1 with <strong>entity</strong>...
            </p>
            <p className="text-gray-800 leading-relaxed mt-3">
              Paragraph 2 with statistic and <strong>entity</strong>...
            </p>
            <p className="text-gray-800 leading-relaxed mt-3">
              Paragraph 3 with guidance and <strong>entity</strong>...
            </p>
          </div>

          {/* H2 Sections (5 sections, each 200-400 words) */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Section Title</h2>
          <p>Section content with entities and internal links...</p>

          {/* Internal link example (mid-paragraph) */}
          <p>
            Content text that naturally mentions a related topic. Pour approfondir,
            consultez notre guide sur <Link href="/hub/related-page"
            className="text-{color}-600 hover:underline font-medium">
            related topic anchor text</Link> qui explore this further.
          </p>
        </article>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions Frequentes
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Question?</h3>
              <p className="text-gray-700 leading-relaxed">
                Answer with <strong>entities</strong>...
              </p>
            </div>
            {/* ... more FAQs */}
          </div>
        </section>

        {/* Related articles */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Articles Connexes</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/hub/related-1" className="bg-white rounded-lg p-4 shadow hover:shadow-md transition">
              <h3 className="font-semibold">Related Article 1</h3>
              <p className="text-sm text-gray-600">Brief description</p>
            </Link>
            {/* ... more related */}
          </div>
        </section>

        {/* CTA Footer */}
        <div className="bg-gradient-to-r from-{color1} to-{color2} text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">CTA Heading</h2>
          <p className="text-lg mb-6">CTA description</p>
          <a href="#action" className="bg-white text-{color} px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition inline-block">
            Button Text
          </a>
        </div>
      </div>
    </main>
  );
}
```

### 4.2 Hub Page Template

```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { getWebPageSchema, getBreadcrumbSchema, getOrganizationSchema, getFAQSchema } from '@/lib/schema';
import EEATSignal from '@/components/EEATSignal';

export const metadata: Metadata = {
  title: 'Hub Title | Brand',
  description: 'Hub description...',
  alternates: { canonical: 'https://yourdomain.com/hub' },
};

export default function HubPage() {
  // getWebPageSchema (NOT getArticleSchema) for hubs
  const webPageSchema = getWebPageSchema({
    title: '...',
    description: '...',
    url: 'https://yourdomain.com/hub',
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://yourdomain.com' },
    { name: 'Hub Name', url: 'https://yourdomain.com/hub' },
  ]);

  const organizationSchema = getOrganizationSchema();
  const faqSchema = getFAQSchema([/* 4 FAQs about the category */]);

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="bg-gradient-to-r from-{color1} via-{color2} to-{color3} text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Accueil</Link>
          <h1 className="text-5xl font-bold mb-6">Emoji Hub Title</h1>
          <p className="text-2xl opacity-95 mb-8">Hub Subtitle</p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Hub description paragraph.</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <EEATSignal colorScheme="{color}" method="Method description" />

        {/* Card grid linking to spoke pages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Section Title</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/hub/spoke-1" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-{color}">
              <div className="text-4xl mb-4">Emoji</div>
              <h3 className="text-2xl font-bold mb-3">Spoke Title</h3>
              <p className="text-gray-600 mb-4">Brief description.</p>
              <span className="text-{color}-600 font-semibold">Decouvrir -></span>
            </Link>
            {/* ... more cards (3-6 per hub) */}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions Frequentes</h2>
          {/* ... FAQ items */}
        </section>

        {/* CTA Footer */}
        <div className="bg-gradient-to-r from-{color1} to-{color2} text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">CTA Title</h2>
          <p className="text-lg mb-6">CTA description</p>
          <a href="#action" className="bg-white text-{color} px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition inline-block">
            Button Text
          </a>
        </div>
      </div>
    </main>
  );
}
```

---

## 5. SHARED COMPONENTS

### 5.1 EEATSignal Component (`components/EEATSignal.tsx`)

```tsx
'use client';

interface EEATSignalProps {
  source?: string;
  lastUpdated?: string;
  method?: string;
  colorScheme?: 'purple' | 'red' | 'green' | 'blue' | 'rose' | 'teal' | 'cyan' | 'orange' | 'pink';
}

export default function EEATSignal({
  source = 'YourBrand',
  lastUpdated,
  method = 'Your default method',
  colorScheme = 'purple'
}: EEATSignalProps) {
  const now = new Date();
  const dateStr = lastUpdated || `${now.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}`;

  const colorMap: Record<string, { bg: string; border: string; text: string }> = {
    purple: { bg: 'bg-purple-50', border: 'border-purple-500', text: 'text-purple-800' },
    red:    { bg: 'bg-red-50',    border: 'border-red-500',    text: 'text-red-800'    },
    green:  { bg: 'bg-green-50',  border: 'border-green-500',  text: 'text-green-800'  },
    blue:   { bg: 'bg-blue-50',   border: 'border-blue-500',   text: 'text-blue-800'   },
    rose:   { bg: 'bg-rose-50',   border: 'border-rose-500',   text: 'text-rose-800'   },
    teal:   { bg: 'bg-teal-50',   border: 'border-teal-500',   text: 'text-teal-800'   },
    cyan:   { bg: 'bg-cyan-50',   border: 'border-cyan-500',   text: 'text-cyan-800'   },
    orange: { bg: 'bg-orange-50', border: 'border-orange-500', text: 'text-orange-800' },
    pink:   { bg: 'bg-pink-50',   border: 'border-pink-500',   text: 'text-pink-800'   },
  };

  const colors = colorMap[colorScheme] || colorMap.purple;

  return (
    <div className={`${colors.bg} border-l-4 ${colors.border} p-4 rounded-r-lg mb-8`}>
      <p className={`text-sm ${colors.text}`}>
        <strong>Source :</strong> {source} | <strong>Mis a jour :</strong> {dateStr} | <strong>Methode :</strong> {method}
      </p>
    </div>
  );
}
```

### 5.2 Schema Utilities (`lib/schema.ts`)

```tsx
import type { WithContext, Article, FAQPage, BreadcrumbList, Organization, WebSite } from 'schema-dts';

const SITE_URL = 'https://yourdomain.com';
const SITE_NAME = 'YourBrand';

export function getOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: 'Your site description',
    sameAs: [],
  };
}

export function getWebSiteSchema(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: 'Your site description',
    inLanguage: 'fr-FR',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
    },
  };
}

export function getArticleSchema(props: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  imageUrl?: string;
  authorName?: string;
  keywords?: string[];
}): WithContext<Article> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: props.title,
    description: props.description,
    image: props.imageUrl || `${SITE_URL}/og-image.png`,
    datePublished: props.datePublished,
    dateModified: props.dateModified,
    author: {
      '@type': 'Organization',
      name: props.authorName || SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': props.url },
    keywords: props.keywords?.join(', '),
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question' as const,
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer' as const,
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem' as const,
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getWebPageSchema(props: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: props.title,
    description: props.description,
    url: props.url,
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
  };
}
```

---

## 6. CONTENT CREATION WORKFLOW

### Step-by-Step for Each New Page:

1. **Pick intent + entity gap** from taxonomy and entity database
2. **Determine hub placement** — which hub does this spoke belong to?
3. **Write metadata**: title (60 chars), description (155 chars), keywords, canonical URL
4. **Write answer capsule**: 150-170 words, 7 bolded entities, 3-paragraph structure
5. **Write 5 H2/H3 sections**: 200-400 words each, 5-7 entities per 200 words
6. **Write 4-5 FAQs**: 80-150 words each, matching real search queries
7. **Add 3 internal links**: mid-paragraph, varied anchors, based on relationship graph
8. **Add schemas**: Article + Breadcrumb + FAQ (all JSON-LD)
9. **Add EEATSignal**: with appropriate color + method
10. **Update hub page**: add navigation card to the new spoke
11. **Update sitemap.xml**: add the new URL
12. **Build + verify**: `npm run build` must pass with 0 errors

### Quality Checklist Per Page:
- [ ] 1,500+ words total
- [ ] Answer capsule: 150-170 words with 7 entities
- [ ] 5+ entities per 200 words throughout
- [ ] All entities bolded with `<strong>`
- [ ] 4+ FAQs with FAQPage schema
- [ ] 3 internal semantic links (max 1 per 150 words)
- [ ] ArticleSchema JSON-LD
- [ ] BreadcrumbSchema JSON-LD
- [ ] EEATSignal component present
- [ ] Stats bar with 4 metrics
- [ ] Hub page updated with card
- [ ] Sitemap.xml updated
- [ ] Build passes cleanly

---

## 7. SCALING STRATEGY

### Phase 1: Foundation (5 hubs + 25 pages)
- Create 5 hub pages
- 5 content pages per hub
- Full data layer (entities + relationships + intents + templates)
- All schemas + E-E-A-T signals

### Phase 2: Growth (25 -> 50 pages)
- Add 5 more spokes per hub
- Cross-link between clusters
- Expand entity database to 150+
- Add new intent variations

### Phase 3: Scale (50 -> 100+ pages)
- Add sub-topics and long-tail variations
- Create comparison pages
- Add location-based variants (if applicable)
- Expand FAQ coverage

### Sitemap Management
- Static `public/sitemap.xml` — update manually with each new page
- Keep priority values: hubs 0.9, content 0.7-0.8, legal 0.3

---

## 8. NEXT.JS CONFIGURATION

### next.config.mjs
```javascript
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  env: {
    SITE_NAME: 'YourBrand',
    SITE_URL: 'https://yourdomain.com',
    SITE_DESCRIPTION: 'Your site description',
  },
  async redirects() {
    return [
      { source: '/index', destination: '/', permanent: true },
    ]
  },
}
export default nextConfig
```

### package.json dependencies
```json
{
  "dependencies": {
    "next": "^15.1.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "schema-dts": "^1.1.5"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "typescript": "^5"
  }
}
```

### tailwind.config.ts (extend with brand colors)
```typescript
theme: {
  extend: {
    colors: {
      brand: {
        primary: { light: '#color', DEFAULT: '#color', dark: '#color' },
        secondary: { light: '#color', DEFAULT: '#color', dark: '#color' },
      }
    }
  }
}
```

---

## 9. DESIGN SYSTEM QUICK REFERENCE

| Element | Class Pattern |
|---------|--------------|
| Content container | `max-w-4xl mx-auto px-4` |
| Hub container | `max-w-6xl mx-auto px-4` |
| Card | `bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-{color}` |
| Article body | `bg-white rounded-xl shadow-md p-8` |
| Answer capsule | `bg-{color}-50 border-l-4 border-{color}-500 p-6 rounded-r-lg` |
| H1 | `text-4xl md:text-5xl font-bold` |
| H2 | `text-2xl md:text-3xl font-bold text-gray-900` |
| H3 | `text-xl font-bold text-gray-900` |
| Body text | `text-gray-700 leading-relaxed` |
| CTA button | `bg-white text-{color} px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition` |
| Gradient header | `bg-gradient-to-r from-{color1} via-{color2} to-{color3} text-white py-16 px-4` |
| Stats grid | `grid grid-cols-2 md:grid-cols-4 gap-4` |

---

*This export captures the complete pSEO system. To use it: create the data layer for your niche, then follow the content creation workflow for each page.*
