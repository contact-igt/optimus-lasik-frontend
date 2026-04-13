"use client";

import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Eye, Sun, Droplets, ArrowRight, ShieldAlert, BookOpen, Lightbulb, Glasses } from 'lucide-react';
import { useBookingModal } from '@/components/ui/BookingModalContext';

const painPoints = [
  { icon: <Glasses size={20} />, title: "Want more freedom from glasses", desc: "Regain your natural vision and reduce reliance on cumbersome spectacles for everyday life." },
  { icon: <Droplets size={20} />, title: "Tired of daily lens dependency", desc: "End the daily routine of applying, removing, and maintaining contact lenses." },
  { icon: <Eye size={20} />, title: "Looking for long-term vision correction option", desc: "Explore permanent solutions for clearer distance and near vision without aids." },
  { icon: <ShieldAlert size={20} />, title: "Want expert advice on LASIK or PRK eligibility", desc: "Get a comprehensive evaluation to see if LASIK, PRK, or IPCL is the right fit for you." },
];

export const AboutSection = () => {
  const { openModal } = useBookingModal();
  return (
    <section id="about" className="relative py-10 lg:py-12 bg-[#ffffff] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-gradient-to-br from-[#cae2f2]/20 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-[#cae2f2]/15 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-16 max-w-6xl relative z-10 w-full">
        <FadeIn>
          <div className="space-y-6">

            {/* Header — centred */}
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#0c5d69]/30 bg-[#0c5d69]/5 text-[#0c5d69] text-[11px] font-semibold tracking-widest uppercase mb-3">
                <Eye size={12} /> Vision Freedom
              </div>
              <h2 className="font-['Cormorant_Garamond',serif] text-3xl lg:text-4xl font-semibold text-[#0c5d69] leading-tight mb-3">
                Want to reduce your <span className="text-[#13a2b7] italic font-medium">dependence on glasses or contact lenses?</span>
              </h2>
              <p className="text-[#0c5d69]/75 text-[15px] leading-relaxed font-light">
                If you are tired of relying on glasses or lenses for everyday activities, a proper refractive evaluation can help you understand whether LASIK or another vision correction procedure may be suitable for you.
              </p>
            </div>

            {/* Pain Point Cards — Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {painPoints.map((sym, i) => (
                <div key={i} className="group bg-white p-5 rounded-2xl border border-[#cae2f2] hover:border-[#0c5d69]/40 hover:shadow-lg transition-all duration-300 cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-[#f0f8ff] text-[#0c5d69] group-hover:bg-[#0c5d69] group-hover:text-white flex items-center justify-center mb-3 transition-colors">
                    {sym.icon}
                  </div>
                  <h4 className="text-[#0c5d69] font-semibold text-sm mb-1.5">{sym.title}</h4>
                  <p className="text-[#0c5d69]/65 text-xs leading-relaxed">{sym.desc}</p>
                </div>
              ))}
            </div>

            {/* Reassurance + CTA row */}
            <div className="flex flex-col sm:flex-row items-center gap-4 bg-[#f0f8ff] border border-[#cae2f2] rounded-2xl p-5">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-xl bg-[#0c5d69]/10 text-[#0c5d69]">
                  <ShieldAlert size={18} />
                </div>
                <p className="text-[#0c5d69]/80 text-sm leading-relaxed">
                  The right vision correction procedure depends on your eye condition, and the first step is always a specialist evaluation.
                </p>
              </div>
              <button
                onClick={openModal}
                className="flex-shrink-0 inline-flex items-center gap-3 bg-[#13a2b7] hover:bg-[#0f8fa1] text-white px-7 py-3.5 rounded-xl text-sm font-medium transition-all shadow-md hover:shadow-xl transform hover:-translate-y-1 group whitespace-nowrap"
              >
                Book Your Consultation<ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
};
