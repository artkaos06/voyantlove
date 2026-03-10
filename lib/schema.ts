import { WithContext, Article, FAQPage, BreadcrumbList, Organization, WebSite, Person } from 'schema-dts';

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
  };
}

/**
 * Generate expert author schema for E-E-A-T signals
 */
export function getAuthorSchema() {
  return {
    '@context': 'https://schema.org' as const,
    '@type': 'Person' as const,
    name: 'Équipe VoyantLove',
    url: 'https://voyantlove.fr/',
    jobTitle: 'Experts en voyance amoureuse',
    worksFor: {
      '@type': 'Organization' as const,
      name: 'VoyantLove.fr',
      url: 'https://voyantlove.fr',
    },
    description: 'Équipe de voyants et tarologues spécialisés en guidance amoureuse avec plus de 15 ans d\'expérience collective en voyance sentimentale.',
    knowsAbout: [
      'Tarot amoureux',
      'Voyance sentimentale',
      'Reconquête amoureuse',
      'Compatibilité astrologique',
      'Oracle de l\'amour',
      'Guidance relationnelle',
    ],
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
      '@type': 'Person',
      name: authorName,
      url: 'https://voyantlove.fr/',
      jobTitle: 'Expert en voyance amoureuse',
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
  const pageUrl = items[items.length - 1].url;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  } as WithContext<BreadcrumbList>;
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

