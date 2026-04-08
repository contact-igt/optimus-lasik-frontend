"use client";

import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FadeIn } from '@/components/ui/FadeIn';

import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const types = [
  { num: '01', name: 'Standard LASIK', desc: 'A proven laser procedure for correcting common refractive errors with quick recovery and reliable results.' },
  { num: '02', name: 'Blade-Free LASIK', desc: 'A flap-free blade approach using femtosecond laser precision for improved safety and comfort.' },
  { num: '03', name: 'Contoura Vision', desc: 'A topography-guided LASIK treatment designed for sharper, more personalized visual correction.' },
  { num: '04', name: 'Wavefront LASIK', desc: 'Custom treatment that addresses subtle optical imperfections for enhanced clarity, especially in low light.' },
  { num: '05', name: 'Topography-Guided LASIK', desc: 'An advanced option for irregular corneal surfaces and more individualized correction planning.' },
  { num: '06', name: 'PRK Alternative', desc: 'A suitable option for patients who may not qualify for LASIK but still want freedom from glasses.' },
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
            <span className="w-6 h-0.5 bg-[#0c5d69]"></span> ADVANCED LASIK SOLUTIONS <span className="w-6 h-0.5 bg-[#0c5d69]"></span>
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-bold text-[#0c5d69] mb-6">
            Choose the Right LASIK for Your Eyes
          </h2>
          <p className="text-[#0c5d69] text-lg font-light leading-relaxed">
            Every eye is unique, and the best LASIK treatment depends on your vision power, corneal thickness, eye health, and lifestyle needs. Our specialists evaluate each detail carefully to guide you toward the most suitable and safest correction option.
          </p>
        </FadeIn>

        {/* Slider */}
        <div className="relative pb-14">
          {/* Prev Arrow */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            aria-label="Previous"
            className="absolute -left-5 top-[45%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-[#cae2f2] shadow-md flex items-center justify-center text-[#0c5d69] hover:bg-[#0c5d69] hover:text-white hover:border-[#0c5d69] transition-all"
          >
            <ChevronLeft size={20} />
          </button>

          <Slider ref={sliderRef} {...settings}>
            {types.map((type, i) => (
              <div key={i} className="px-3 h-full">
                <div className="bg-white rounded-2xl p-8 border border-[#cae2f2] hover:border-[#0c5d69] hover:shadow-[0_10px_40px_rgba(32,58,71,0.08)] transition-all transform hover:-translate-y-2 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#cae2f2]/10 rounded-full blur-2xl group-hover:bg-[#0c5d69]/10 transition-colors"></div>
                  <div className="font-['Cormorant_Garamond',serif] text-6xl font-bold text-[#cae2f2]/40 leading-none mb-4 group-hover:text-[#0c5d69]/40 transition-colors relative z-10">
                    {type.num}
                  </div>
                  <h3 className="text-xl font-semibold text-[#0c5d69] mb-3 relative z-10">{type.name}</h3>
                  <p className="text-sm text-[#0c5d69] leading-relaxed relative z-10">{type.desc}</p>
                </div>
              </div>
            ))}
          </Slider>

          {/* Next Arrow */}
          <button
            onClick={() => sliderRef.current?.slickNext()}
            aria-label="Next"
            className="absolute -right-5 top-[45%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-[#cae2f2] shadow-md flex items-center justify-center text-[#0c5d69] hover:bg-[#0c5d69] hover:text-white hover:border-[#0c5d69] transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* CTA */}
        <FadeIn className="text-center mt-6">
          <a href="#treatment" className="inline-flex items-center justify-center gap-2 bg-[#13a2b7] hover:bg-[#0f8fa1] text-white px-8 py-3.5 rounded-xl text-sm font-medium transition-all shadow-[0_4px_20px_rgba(19,162,183,0.3)] transform hover:-translate-y-1 group">
            Explore Treatment Options <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
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