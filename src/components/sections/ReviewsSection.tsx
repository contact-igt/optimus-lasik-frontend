"use client";

import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FadeIn } from '@/components/ui/FadeIn';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Aditi Sharma',
    rating: 5,
    text: "My LASIK experience was smooth, quick, and professionally handled. I noticed clearer vision very soon after the procedure.",
    highlight: 'Clearer every day',
  },
  {
    name: 'Rohit Verma',
    rating: 5,
    text: "The best part is waking up and seeing clearly without glasses. The whole team was kind and reassuring.",
    highlight: 'No more glasses',
  },
  {
    name: 'Sneha Singh',
    rating: 5,
    text: "I was nervous before LASIK, but the doctors explained everything well and made the procedure feel easy.",
    highlight: 'Comfortable process',
  },
  {
    name: 'Abhishek Tiwari',
    rating: 5,
    text: "From consultation to follow-up, every step felt organised and patient-focused. I felt I was in safe hands.",
    highlight: 'Excellent guidance',
  },
  {
    name: 'Priya Kapoor',
    rating: 5,
    text: "LASIK has made daily life more convenient. The treatment was quick, and the recovery was easier than expected.",
    highlight: 'Worth it for me',
  },
  {
    name: 'Karan Malhotra',
    rating: 5,
    text: "Very professional team, good technology, and a smooth experience overall. I am very happy with the outcome.",
    highlight: 'Highly satisfied',
  },
];

export const ReviewsSection = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#0c5d69] relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#cae2f2]/5 rounded-full blur-[140px] -ml-64 -mt-64 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#cae2f2]/5 rounded-full blur-[120px] -mr-48 -mb-48 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-16 relative z-10 w-full">

        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center gap-3 text-[12px] font-semibold tracking-[0.15em] text-[#cae2f2] uppercase mb-4">
            <span className="w-6 h-0.5 bg-[#13a2b7]"></span> Patient Reviews <span className="w-6 h-0.5 bg-[#13a2b7]"></span>
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Patients <span className="italic text-[#cae2f2]">Say</span>
          </h2>
          <p className="text-white/60 text-lg font-light leading-relaxed">
            Real stories from real patients — hear directly from those who trusted us with their vision.
          </p>

          {/* Google Rating Badge */}
          <div className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map(s => (
                <Star key={s} size={14} fill="#FBBC05" stroke="#FBBC05" />
              ))}
            </div>
            <span className="text-white text-sm font-semibold">5.0</span>
            <span className="text-white/50 text-xs">on Google</span>
          </div>
        </FadeIn>

        {/* Review Slider */}
        <div className="max-w-4xl mx-auto relative">
          {/* Prev */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            aria-label="Previous review"
            className="absolute -left-5 lg:-left-14 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <ChevronLeft size={20} />
          </button>

          <Slider ref={sliderRef} {...settings}>
            {reviews.map((review, i) => (
              <div key={i} className="px-2">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-10 relative">
                  {/* Quote icon */}
                  <Quote size={40} className="text-[#13a2b7]/30 absolute top-6 right-8" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: review.rating }).map((_, s) => (
                      <Star key={s} size={18} fill="#FBBC05" stroke="#FBBC05" />
                    ))}
                  </div>

                  {/* Highlight */}
                  <p className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-semibold text-white italic leading-snug mb-5">
                    &ldquo;{review.highlight}&rdquo;
                  </p>

                  {/* Full Review */}
                  <p className="text-white/65 text-sm sm:text-[15px] leading-relaxed mb-8">
                    {review.text}
                  </p>

                  {/* Reviewer */}
                  <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                    <div className="w-10 h-10 rounded-full bg-[#13a2b7] flex items-center justify-center text-white font-bold text-sm">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{review.name}</p>
                      <p className="text-white/40 text-xs">Google Review</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Next */}
          <button
            onClick={() => sliderRef.current?.slickNext()}
            aria-label="Next review"
            className="absolute -right-5 lg:-right-14 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Slick dot styles */}
      <style>{`
        #reviews .slick-dots li button:before {
          color: rgba(255,255,255,0.3);
          font-size: 10px;
          opacity: 1;
        }
        #reviews .slick-dots li.slick-active button:before {
          color: #13a2b7;
          opacity: 1;
        }
        #reviews .slick-dots {
          bottom: -2rem;
        }
      `}</style>
    </section>
  );
};
