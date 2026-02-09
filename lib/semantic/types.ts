/**
 * Semantic SEO Types for Connexion Voyance
 * Based on: voyance-entities.json and entity-relationships.json
 */

// ============================================================================
// INTENT TYPES
// ============================================================================

export type IntentType =
  | 'find-voyant'
  | 'immediate-consultation'
  | 'pricing'
  | 'reviews'
  | 'specialties'
  | 'mode-comparison'
  | 'how-to-choose'
  | 'first-consultation';

export interface IntentContentBlock {
  intent: IntentType;
  heading: string;
  content: string;
  wordCount: number;
  entities: string[];
  internalLinks: InternalLink[];
  faqs: FAQ[];
}

// ============================================================================
// ENTITY TYPES
// ============================================================================

export interface VoyanceEntities {
  voyanceTypes: string[];      // ['tarot', 'astrologie', 'cartomancie']
  specialties: string[];        // ['amour', 'travail', 'finance']
  consultationModes: string[];  // ['téléphone', 'chat', 'email', 'visio']
  qualities: string[];          // ['sérieux', 'compétent', 'disponible']
  tools?: string[];             // ['cartes de tarot', 'thème astral']
}

export interface EntityReference {
  id: string;
  term: string;
  definition?: string;
  synonyms?: string[];
  relatedTerms?: string[];
}

// ============================================================================
// SEMANTIC RELATIONSHIP TYPES
// ============================================================================

export interface SemanticRelationship {
  from: string;
  to: string;
  type: RelationshipType;
  strength: number; // 0.0 to 1.0
  description: string;
}

export type RelationshipType =
  | 'practitioner_of'
  | 'service_type'
  | 'is_type_of'
  | 'uses'
  | 'related_to'
  | 'available_via'
  | 'specialty_of'
  | 'used_for'
  | 'quality_of'
  | 'trust_signal_for'
  | 'characteristic_of'
  | 'attribute_of';

// ============================================================================
// LINKING TYPES
// ============================================================================

export interface InternalLink {
  anchor: string;
  href: string;
  context: string; // Where in the content to place this link
  semantic?: boolean; // Is this a semantic/entity-based link?
}

export interface SemanticLink extends InternalLink {
  sourceEntity: string;
  targetEntity: string;
  relationshipType: RelationshipType;
}

// ============================================================================
// CONTENT TYPES
// ============================================================================

export interface FAQ {
  question: string;
  answer: string;
  entities?: string[]; // Entities mentioned in the answer
}

export interface AnswerCapsule {
  content: string;
  wordCount: number; // Target: 134-167 words
  entityDensity: number; // Target: 5+ entities per 200 words
  entities: string[];
  isLLMOptimized: boolean;
}

// ============================================================================
// E-E-A-T SIGNALS
// ============================================================================

export interface EEATSignals {
  expertise: {
    yearsExperience?: number;
    certifications?: string[];
    specializations: string[];
  };
  experience: {
    consultationCount?: number;
    clientTestimonials?: number;
  };
  authoritativeness: {
    dataSource: string;
    methodology: string;
    verificationProcess?: string;
  };
  trustworthiness: {
    reviewCount: number;
    averageRating: number;
    lastUpdated: string;
    securePayment: boolean;
  };
}

// ============================================================================
// GEOGRAPHIC DATA
// ============================================================================

export interface GeographicData {
  city: string;
  slug: string;
  department: string;
  region: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  population?: number;
  postalCodes?: string[];
}

// ============================================================================
// PRICING DATA
// ============================================================================

export interface PricingData {
  telephone: {
    perMinute: number;
    typical30min: number;
  };
  chat: {
    perMinute: number;
    typical30min: number;
  };
  email: {
    perConsultation: number;
  };
  visio: {
    per30min: number;
    per60min: number;
  };
  cabinet: {
    per60min: number;
  };
  firstConsultationOffer?: {
    freeMinutes?: number;
    discountPercent?: number;
    description: string;
  };
}

// ============================================================================
// REVIEWS DATA
// ============================================================================

export interface ReviewData {
  averageRating: number; // 0-5
  totalReviews: number;
  ratingBreakdown: {
    precision: number; // 0-100
    empathy: number;
    availability: number;
    value: number;
  };
  recentTestimonials: Testimonial[];
}

export interface Testimonial {
  id: string;
  rating: number;
  text: string;
  author: string; // First name or pseudonym
  date: string;
  verified: boolean;
  consultationType?: string; // 'tarot', 'astrologie', etc.
}

// ============================================================================
// MAIN SEMANTIC CITY PAGE TYPE
// ============================================================================

export interface SemanticCityPage {
  // Geographic
  geographic: GeographicData;
  
  // SEO Basics
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  canonicalPath: string;
  
  // Semantic Layer
  primaryIntent: IntentType;
  secondaryIntents: IntentType[];
  entities: VoyanceEntities;
  
  // Content Blocks (8 intents)
  intentContent: IntentContentBlock[];
  
  // Topical Authority
  relatedTopics: string[];
  parentTopics: string[];
  childTopics: string[];
  
  // Semantic Relationships
  semanticLinks: SemanticLink[];
  
  // Trust Signals
  eeat: EEATSignals;
  
  // Data
  pricing: PricingData;
  reviews: ReviewData;
  
  // Metadata
  publishedDate: string;
  lastModified: string;
  status: 'draft' | 'published';
  
  // Quality Metrics
  qualityScore?: {
    intentFulfillment: number; // 0-1
    entityCoverage: number; // 0-1
    semanticUniqueness: number; // 0-1
    llmReadiness: number; // 0-1
  };
}

// ============================================================================
// SCHEMA MARKUP TYPES
// ============================================================================

export interface LocalBusinessSchema {
  '@context': 'https://schema.org';
  '@type': 'LocalBusiness';
  '@id': string;
  name: string;
  description: string;
  address: {
    '@type': 'PostalAddress';
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  serviceType: string[];
  areaServed: {
    '@type': 'City';
    name: string;
  };
  aggregateRating?: {
    '@type': 'AggregateRating';
    ratingValue: number;
    reviewCount: number;
  };
}

export interface FAQPageSchema {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: Array<{
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
      mentions?: Array<{
        '@type': 'Thing';
        name: string;
      }>;
    };
  }>;
}

export interface BreadcrumbSchema {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }>;
}

// ============================================================================
// VALIDATION TYPES
// ============================================================================

export interface ValidationResult {
  valid: boolean;
  score: number; // 0-100
  errors: ValidationIssue[];
  warnings: ValidationIssue[];
  passed: ValidationCheck[];
  failed: ValidationCheck[];
}

export interface ValidationIssue {
  type: 'intent-fulfillment' | 'entity-coverage' | 'semantic-duplicate' | 'llm-readiness' | 'metadata' | 'schema';
  severity: 'critical' | 'warning' | 'info';
  message: string;
  field?: string;
  expected?: any;
  actual?: any;
}

export interface ValidationCheck {
  name: string;
  passed: boolean;
  score?: number;
  details?: string;
}

// ============================================================================
// CONTENT GENERATION TYPES
// ============================================================================

export interface ContentGenerationOptions {
  city: string;
  intent: IntentType;
  entities: VoyanceEntities;
  pricing: PricingData;
  reviews?: ReviewData;
  templateVariables?: Record<string, any>;
}

export interface GeneratedContent {
  heading: string;
  answerCapsule: AnswerCapsule;
  extendedSections: Array<{
    h3: string;
    content: string;
    wordCount: number;
    format?: 'text' | 'table' | 'list' | 'checklist' | 'timeline';
  }>;
  faqs: FAQ[];
  internalLinks: InternalLink[];
  entities: string[];
}
