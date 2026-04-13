"use client";

import { FadeIn } from '@/components/ui/FadeIn';
import { ArrowRight, Eye, Sparkles, UserCheck } from 'lucide-react';
import { useBookingModal } from '@/components/ui/BookingModalContext';

const options = [
  {
    icon: <Eye size={32} />,
    title: 'LASIK',
    desc: 'A widely known vision correction option for suitable candidates.',
    tag: 'Popular',
  },
  {
    icon: <Sparkles size={32} />,
    title: 'PRK',
    desc: 'Another refractive surgery option offered by Optimus for patients based on eligibility.',
    tag: 'Advanced',
    highlight: true,
  },
  {
    icon: <UserCheck size={32} />,
    title: 'Personalized Recommendation',
    desc: 'Your doctor will recommend the right option only after a detailed eye assessment.',
    tag: 'Consultation',
  },
];

export const IolSection = () => {
  const { openModal } = useBookingModal();

  return (
    <section id="lens-options" className="py-10 lg:py-12 bg-[#0c5d69] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-16 w-full relative z-10">

        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center justify-center gap-3 text-[12px] font-semibold tracking-[0.15em] text-[#cae2f2] uppercase mb-3">
            <span className="w-6 h-0.5 bg-[#13a2b7]" /> Treatment Options <span className="w-6 h-0.5 bg-[#13a2b7]" />
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-extrabold text-white leading-snug mb-3">
            LASIK, PRK or another <span className="italic text-[#cae2f2]">vision correction option?</span>
          </h2>
          <p className="text-white/95 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            Not every patient needs the same procedure. At Optimus Eye Hospital, the specialist team evaluates your eyes carefully before recommending the most suitable refractive treatment path.
          </p>
        </FadeIn>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-8">
          {options.map((opt, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="h-full relative overflow-hidden rounded-2xl p-5 lg:p-6 transition-all duration-300 border bg-[#13a2b7]/30 border-[#13a2b7]/50 backdrop-blur-sm hover:bg-[#13a2b7]/45 hover:border-[#13a2b7]/70 hover:-translate-y-1">
                {/* Tag */}
                <div className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 bg-white/15 text-[#cae2f2]">
                  {opt.tag}
                </div>

                {/* Icon */}
                <div className="mb-3 flex items-center justify-center w-12 h-12 rounded-2xl bg-white/15 text-white">
                  {opt.icon}
                </div>

                {/* Content */}
                <h3 className="font-['Cormorant_Garamond',serif] text-3xl font-bold mb-2 text-white">
                  {opt.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-white/80">
                  {opt.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        <button
          onClick={openModal}
          className="flex justify-center mx-auto items-center gap-2 bg-white text-[#0c5d69] hover:bg-[#cae2f2] px-8 py-3.5 rounded-xl text-sm font-bold transition-all group"
        >
          Book an Appointment <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};
