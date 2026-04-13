"use client";

import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Star, Quote, ShieldCheck, MapPin, Award, Microscope, ExternalLink } from 'lucide-react';

const review = {
  name: 'AJAY K. SHUKLA',
  location: 'Arjunganj',
  rating: 5,
  highlight: 'Exceptional Lasik Surgery Experience',
  text: 'Dr Arvind Verma is a wonderful doctor. Optimus eye hospital is a wonderful place for treatment of eye related problems.',
};

const proofPoints = [
  { icon: <Star size={15} fill="#f59e0b" stroke="#f59e0b" />, label: 'Rated 4.6 Stars on Google' },
  { icon: <Award size={15} />, label: 'NABH Certified' },
  { icon: <MapPin size={15} />, label: 'LASIK, PRK & refractive surgeries available' },
  { icon: <Microscope size={15} />, label: 'Advanced diagnostic and treatment technology' },
];

export const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-10 lg:py-12 bg-[#0c5d69] relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#13a2b7]/10 rounded-full blur-[140px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#cae2f2]/5 rounded-full blur-[120px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-16 relative z-10 w-full max-w-7xl">

        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center justify-center gap-3 text-[12px] font-semibold tracking-[0.15em] text-[#cae2f2] uppercase mb-3">
            <span className="w-6 h-0.5 bg-[#13a2b7]" />
            Patient Testimonials
            <span className="w-6 h-0.5 bg-[#13a2b7]" />
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-extrabold text-white mb-3 leading-snug">
            Trusted eye care{' '}
            <span className="italic text-[#cae2f2]">for modern vision correction</span>
          </h2>
          <p className="text-white/95 text-lg font-normal leading-relaxed">
            Optimus Eye Hospital combines specialist consultation, advanced diagnostics, modern infrastructure, and patient-focused care, making it a trusted choice for those exploring refractive procedures in Lucknow.
          </p>
        </FadeIn>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-5 lg:gap-8 items-start">

          {/* ── Left: Single Testimonial Card ── */}
          <FadeIn>
            <div className="bg-white rounded-2xl p-5 sm:p-7 relative">
              {/* Decorative quote icon */}
              <div className="absolute top-5 right-6 text-[#13a2b7]/10">
                <Quote size={48} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={20} fill="#f59e0b" stroke="#f59e0b" />
                ))}
              </div>

              {/* Highlight quote */}
              <p className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-bold text-[#0c5d69] italic leading-snug mb-3">
                &ldquo;{review.highlight}&rdquo;
              </p>

              {/* Full review text */}
              <p className="text-[#0c5d69]/90 text-base leading-relaxed mb-5">
                {review.text}
              </p>

              {/* Reviewer info */}
              <div className="flex items-center gap-4 border-t border-[#e0f0f5] pt-4">
                <div className="w-12 h-12 rounded-full bg-[#0c5d69] flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <p className="text-[#0c5d69] font-bold text-base">{review.name}</p>
                  <p className="text-[#0c5d69]/60 text-sm mt-0.5">{review.location} · Google Review</p>
                </div>
                {/* Google logo */}
                <div className="flex items-center gap-2 bg-[#34A853]/10 border border-[#34A853]/25 rounded-xl px-3 py-2">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  <span className="text-[#34A853] text-xs font-semibold">Verified</span>
                </div>
              </div>

              {/* View all link */}
              <div className="mt-6">
                <a
                  href="https://search.google.com/local/reviews?placeid=ChIJn1o5tfn9mzkRAywcdSpCT50"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#13a2b7] hover:text-[#0c5d69] text-sm font-medium transition-colors"
                >
                  View all Google Reviews <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </FadeIn>

          {/* ── Right: Proof / Trust Sidebar ── */}
          <FadeIn delay={150}>
            <div className="space-y-3">

              {/* Google rating card */}
              <div className="bg-white rounded-2xl p-5 relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-36 h-36 bg-[#cae2f2]/40 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10">
                  <p className="text-[#4285F4] text-xs font-semibold uppercase tracking-widest mb-2">Google Rating</p>
                  <div className="flex items-end gap-3 mb-2">
                    <span className="text-5xl font-bold text-[#0c5d69] leading-none">4.6</span>
                    <div className="pb-1">
                      <div className="flex gap-0.5 mb-0.5">
                        {[1, 2, 3, 4].map(s => <Star key={s} size={14} fill="#f59e0b" stroke="#f59e0b" />)}
                        <Star size={14} fill="#f59e0b" stroke="#f59e0b" style={{ opacity: 0.45 }} />
                      </div>
                      <p className="text-[#0c5d69]/45 text-xs">Based on patient reviews</p>
                    </div>
                  </div>
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                </div>
              </div>

              {/* Proof points */}
              <div className="bg-white rounded-2xl p-5">
                <p className="text-[#0c5d69] text-[11px] font-semibold uppercase tracking-widest mb-4">Why patients choose us</p>
                <div className="space-y-3">
                  {proofPoints.map((pt, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#f0f8ff] text-[#13a2b7] flex items-center justify-center flex-shrink-0">
                        {pt.icon}
                      </div>
                      <p className="text-[#0c5d69]/75 text-sm leading-snug">{pt.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* NABH badge */}
              <div className="bg-white rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f0f8ff] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={22} className="text-[#0c5d69]" />
                </div>
                <div>
                  <p className="text-[#0c5d69] font-semibold text-sm">Safety & Quality Standards</p>
                  <p className="text-[#0c5d69]/55 text-xs leading-snug mt-0.5">Patients looking for safe, informed treatment decisions can consult the specialist team at Optimus for a proper evaluation before choosing the right procedure.</p>
                </div>
              </div>

            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};
