'use client';

import React from 'react';
import Icon from '@/components/Icon';
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

  // Star rating component
  const StarRating = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <Icon key={i} name="star" filled size={15} className="text-amber-400" />;
          } else if (i === fullStars && hasHalfStar) {
            return <Icon key={i} name="star" filled size={15} className="text-amber-400" />;
          } else {
            return <Icon key={i} name="star" filled size={15} className="text-gray-300" />;
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
                {/* Attribution.
                    This used to read "Client de Kalinda" over a purple-pink
                    gradient initial — an author invented from the voyant's own
                    name, with "de" wrongly capitalised by `capitalize`. It read
                    as a fabricated persona and undercut a review that is in
                    fact real (LASTEVAL comes straight from the partner feed).
                    The honest framing is to credit the reading, not a person we
                    cannot name. */}
                <div className="flex items-center gap-2 pt-4 border-t border-gray-100 text-xs text-gray-500">
                  <Icon name="check" size={14} className="text-gray-400" />
                  {showVoyantName ? (
                    <span>
                      Avis vérifié, consultation avec{' '}
                      <span className="font-semibold capitalize text-gray-700">{voyant.VOYANT}</span>
                    </span>
                  ) : (
                    <span>Avis vérifié</span>
                  )}
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
              <Icon name="check" size={14} className="text-gray-400" />
              Paiement sécurisé
            </span>
            <span className="flex items-center gap-1">
              <Icon name="check" size={14} className="text-gray-400" />
              Tarif affiché avant l’appel
            </span>

          </div>
        </div>
      </div>
    </section>
  );
}
