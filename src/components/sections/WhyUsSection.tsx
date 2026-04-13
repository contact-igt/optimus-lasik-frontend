"use client";

import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { ShieldCheck, Cpu, Microscope, Zap, Users, BadgeCheck, Heart, SmilePlus, ArrowRight, Star } from 'lucide-react';
import { useBookingModal } from '@/components/ui/BookingModalContext';

const differentiators = [
  {
    icon: <ShieldCheck size={28} />,
    title: 'NABH Certified Hospital',
    desc: 'Adhering to high standards of patient safety, hygiene, and medical quality in Lucknow.',
    highlight: true,
  },
  {
    icon: <Users size={28} />,
    title: 'Experienced Refractive Specialist',
    desc: 'Managed by senior surgeons with extensive experience in refractive vision correction.',
    highlight: false,
  },
  {
    icon: <Microscope size={28} />,
    title: 'High-Precision Diagnostic Machines',
    desc: 'Advanced equipment for accurate corneal and eye power evaluation before LASIK.',
    highlight: false,
  },
  {
    icon: <Zap size={28} />,
    title: 'Modern Treatment Technology',
    desc: 'Equipped with current-generation technology for safe and efficient procedures.',
    highlight: false,
  },
  {
    icon: <Cpu size={28} />,
    title: 'Advanced Robotic & 3D Tech',
    desc: 'Utilizing modern advancements for precision in refractive surgery planning.',
    highlight: false,
  },
  {
    icon: <BadgeCheck size={28} />,
    title: 'Personalized Treatment Plans',
    desc: 'Each procedure is customized based on individual eye condition and visual needs.',
    highlight: false,
  },
  {
    icon: <Heart size={28} />,
    title: 'Ethical and Transparent Guidance',
    desc: 'Clear communication about eligibility, procedures, and long-term results.',
    highlight: false,
  },
  {
    icon: <SmilePlus size={28} />,
    title: 'Comfortable & Friendly Environment',
    desc: 'Designed to provide a calming and patient-focused experience during your visit.',
    highlight: false,
  },
];

export const WhyUsSection = () => {
  const { openModal } = useBookingModal();

  return (
    <section id="why-choose" className="py-10 lg:py-12 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-16 max-w-7xl relative z-10 w-full">

        {/* Header */}
        <FadeIn className="text-center max-w-4xl mx-auto mb-8">
          <div className="inline-flex items-center justify-center gap-3 text-[12px] font-semibold tracking-[0.15em] text-[#0c5d69] uppercase mb-3">
            <span className="w-6 h-0.5 bg-[#0c5d69]" /> Proof & Trust <span className="w-6 h-0.5 bg-[#0c5d69]" />
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-bold text-[#0c5d69] leading-snug mb-3">
            Why choose <span className="italic text-[#13a2b7]">Optimus Eye Hospital</span> for LASIK in Lucknow?
          </h2>
          <p className="text-[#0c5d69]/90 text-lg font-normal leading-relaxed max-w-3xl mx-auto">
            Optimus focuses on combining specialist expertise with advanced diagnostics and a patient-first treatment experience, helping patients make informed decisions about refractive surgery.
          </p>
        </FadeIn>

        {/* 8-Point Differentiator Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {differentiators.map((item, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="group p-4 lg:p-5 rounded-3xl border transition-all duration-300 cursor-default h-full relative overflow-hidden bg-white border-[#cae2f2] hover:border-[#0c5d69]/30 hover:shadow-[0_8px_30px_rgba(12,93,105,0.10)] hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-2.5 transition-colors relative z-10 shadow-sm bg-[#f0f8ff] text-[#13a2b7] group-hover:bg-[#0c5d69] group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="font-bold text-base mb-1.5 relative z-10 leading-snug text-[#0c5d69]">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-relaxed relative z-10 text-[#0c5d69]/85">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn className="text-center">
          <p className="text-[#0c5d69]/80 text-base mb-6 max-w-2xl mx-auto">
            Patients looking for safe, informed treatment decisions can consult the specialist team at Optimus for a proper evaluation before choosing the right procedure.
          </p>
          <button
            onClick={openModal}
            className="inline-flex items-center gap-3 bg-[#13a2b7] hover:bg-[#0c5d69] text-white px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 group"
          >
            Book Your Evaluation
            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
          </button>
        </FadeIn>
      </div>
    </section>
  );
};
