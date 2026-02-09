'use client';

import React from 'react';
import voyants from '@/data/voyants.json';
import { Voyant } from '@/lib/voyants';

interface TestimonialSectionProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  showVoyantName?: boolean;
}

/**
 * Client testimonials section using real reviews from voyant data
 */
export default function TestimonialSection({
  title = "Ce Que Disent Nos Clients",
  subtitle = "Des milliers de personnes ont déjà fait confiance à nos voyants experts",
  limit = 6,
  showVoyantName = true
}: TestimonialSectionProps) {
  const typedVoyants = voyants as Voyant[];

  // Filter voyants with testimonials and sort by rating
  const testimonials = typedVoyants
    .filter(v => v.LASTEVAL && v.LASTEVAL.length > 20)
    .sort((a, b) => parseFloat(b.STAR) - parseFloat(a.STAR))
    .slice(0, limit);

  if (testimonials.length === 0) return null;

  // Get initials for avatar
  const getInitials = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  // Star rating component
  const StarRating = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <span key={i} className="text-yellow-400">★</span>;
          } else if (i === fullStars && hasHalfStar) {
            return <span key={i} className="text-yellow-400">★</span>;
          } else {
            return <span key={i} className="text-gray-300">★</span>;
          }
        })}
      </div>
    );
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((voyant) => {
            const rating = parseFloat(voyant.STAR);

            return (
              <div
                key={voyant.ID}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100"
              >
                {/* Rating */}
                <div className="flex items-center justify-between mb-4">
                  <StarRating rating={rating} />
                  <span className="text-sm font-semibold text-gray-700">
                    {rating.toFixed(1)}/5
                  </span>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 mb-4 italic">
                  "{voyant.LASTEVAL}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    {getInitials(voyant.VOYANT)}
                  </div>
                  <div>
                    {showVoyantName && (
                      <div className="font-semibold text-gray-900 text-sm capitalize">
                        Client de {voyant.VOYANT}
                      </div>
                    )}
                    <div className="text-xs text-gray-500">
                      ✓ Consultation vérifiée
                    </div>
                  </div>
                </div>

                {/* Trust indicators */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span>{voyant.EVAL} avis</span>
                    <span>{voyant.CONSULT} consultations</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Rejoignez des milliers de personnes qui ont trouvé leurs réponses
          </p>
          <div className="flex justify-center gap-3 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <span className="text-green-600">✓</span>
              Paiement sécurisé
            </span>
            <span className="flex items-center gap-1">
              <span className="text-green-600">✓</span>
              Confidentialité garantie
            </span>
            <span className="flex items-center gap-1">
              <span className="text-green-600">✓</span>
              Satisfait ou remboursé
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
