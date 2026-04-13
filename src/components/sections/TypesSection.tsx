"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FadeIn } from '@/components/ui/FadeIn';

import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const types = [
  { num: '01', name: 'Nuclear Cataract', desc: 'Forms at the centre of the lens. Most common age-related type. Causes progressive blurring and a yellow tint.' },
  { num: '02', name: 'Cortical Cataract', desc: 'Begins at the outer edge and moves inward like spokes. Causes significant glare, especially driving at night.' },
  { num: '03', name: 'Posterior Subcapsular', desc: 'Starts at the back of the lens. Progresses faster and causes halos, glare, and near-vision difficulties.' },
  { num: '04', name: 'Congenital Cataract', desc: 'Present at birth or early childhood. Requires prompt treatment to prevent lazy eye (amblyopia).' },
  { num: '05', name: 'Traumatic Cataract', desc: 'Develops after an eye injury. Blunt trauma or injuries can trigger lens clouding immediately or years later.' },
  { num: '06', name: 'Secondary Cataract', desc: 'Caused by conditions like diabetes or steroid use. Can also refer to opacification after primary surgery.' },
];

export const TypesSection = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="types" className="py-20 lg:py-28 bg-[#ffffff] relative">
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
      <div className="container mx-auto px-6 md:px-16 relative z-10 w-full">

        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center gap-3 text-[12px] font-semibold tracking-[0.15em] text-[#0c5d69] uppercase mb-4">
            <span className="w-6 h-0.5 bg-[#0c5d69]"></span> Types of Cataracts <span className="w-6 h-0.5 bg-[#0c5d69]"></span>
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-5xl md:text-6xl font-extrabold text-[#0c5d69] mb-6">
            Identifying Your Cataract
          </h2>
          <p className="text-[#0c5d69]/90 text-xl font-normal leading-relaxed">
            Different cataracts affect different parts of the lens. Understanding your type helps us personalise your treatment plan for optimal visual outcomes.
          </p>
        </FadeIn>

        {/* Slider */}
        <div className="relative pb-14">
          {/* Prev Arrow */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            aria-label="Previous"
            className="absolute -left-5 top-[45%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-[#cae2f2] flex items-center justify-center text-[#0c5d69] hover:bg-[#0c5d69] hover:text-white hover:border-[#0c5d69] transition-all"
          >
            <ChevronLeft size={20} />
          </button>

          <Slider ref={sliderRef} {...settings}>
            {types.map((type, i) => (
              <div key={i} className="px-3 h-full">
                <div className="bg-white rounded-2xl p-8 border border-[#cae2f2] hover:border-[#0c5d69] transition-all transform hover:-translate-y-2 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#cae2f2]/10 rounded-full blur-2xl group-hover:bg-[#0c5d69]/10 transition-colors"></div>
                  <div className="font-['Cormorant_Garamond',serif] text-6xl font-bold text-[#cae2f2]/40 leading-none mb-4 group-hover:text-[#0c5d69]/40 transition-colors relative z-10">
                    {type.num}
                  </div>
                  <h3 className="text-2xl font-bold text-[#0c5d69] mb-3 relative z-10">{type.name}</h3>
                  <p className="text-base text-[#0c5d69]/85 leading-relaxed relative z-10">{type.desc}</p>
                </div>
              </div>
            ))}
          </Slider>

          {/* Next Arrow */}
          <button
            onClick={() => sliderRef.current?.slickNext()}
            aria-label="Next"
            className="absolute -right-5 top-[45%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-[#cae2f2] flex items-center justify-center text-[#0c5d69] hover:bg-[#0c5d69] hover:text-white hover:border-[#0c5d69] transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* CTA */}
        <FadeIn className="text-center mt-6">
          <Link href="/#treatment" className="inline-flex items-center justify-center gap-2 bg-[#13a2b7] hover:bg-[#0f8fa1] text-white px-8 py-3.5 rounded-xl text-sm font-medium transition-all transform hover:-translate-y-1 group">
            Explore Treatment Options <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeIn>

      </div>

      {/* Slick dot styles */}
      <style>{`
        #types .slick-dots li button:before {
          color: #cae2f2;
          font-size: 10px;
          opacity: 1;
        }
        #types .slick-dots li.slick-active button:before {
          color: #13a2b7;
          opacity: 1;
        }
        #types .slick-dots {
          // bottom: -8px;
          margin-top: 2.5rem;
        }
      `}</style>
    </section>
  );
};