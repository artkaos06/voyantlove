import { WithContext, Article, FAQPage, BreadcrumbList, Organization, WebSite } from 'schema-dts';

/**
 * Generate Organization schema for the site
 */
export function getOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VoyantLove.fr',
    url: 'https://voyantlove.fr',
    logo: 'https://voyantlove.fr/logo.png',
    description: 'Guidance amoureuse et voyance sentimentale professionnelle',
    sameAs: [
      // Add social media profiles when available
    ],
  };
}

/**
 * Generate WebSite schema for homepage
 */
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org' as const,
    '@type': 'WebSite' as const,
    name: 'VoyantLove.fr',
    url: 'https://voyantlove.fr',
    description: 'Guidance amoureuse et voyance sentimentale professionnelle',
    inLanguage: 'fr-FR',
    potentialAction: {
      '@type': 'SearchAction' as const,
      target: {
        '@type': 'EntryPoint' as const,
        urlTemplate: 'https://voyantlove.fr/?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  imageUrl?: string;
  authorName?: string;
  keywords?: string[];
}

/**
 * Generate Article schema for content pages
 */
export function getArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  imageUrl = 'https://voyantlove.fr/og-image.png',
  authorName = 'VoyantLove.fr',
  keywords = [],
}: ArticleSchemaProps): WithContext<Article> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: imageUrl,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      '@type': 'Organization',
      name: authorName,
      url: 'https://voyantlove.fr',
    },
    publisher: {
      '@type': 'Organization',
      name: 'VoyantLove.fr',
      url: 'https://voyantlove.fr',
      logo: {
        '@type': 'ImageObject',
        url: 'https://voyantlove.fr/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    keywords: keywords.join(', '),
    inLanguage: 'fr-FR',
  };
}

interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Generate FAQPage schema for pages with FAQs
 */
export function getFAQSchema(faqs: FAQItem[]): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Generate BreadcrumbList schema for navigation
 */
export function getBreadcrumbSchema(items: BreadcrumbItem[]): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
}

/**
 * Generate WebPage/CollectionPage schema for hub/category pages
 */
export function getWebPageSchema({
  title,
  description,
  url,
  imageUrl = 'https://voyantlove.fr/og-image.png',
}: WebPageSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description: description,
    url: url,
    image: imageUrl,
    inLanguage: 'fr-FR',
    isPartOf: {
      '@type': 'WebSite',
      name: 'VoyantLove.fr',
      url: 'https://voyantlove.fr',
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
    },
  };
}

