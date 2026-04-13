"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Award, GraduationCap, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useBookingModal } from '@/components/ui/BookingModalContext';
import { FadeIn } from '@/components/ui/FadeIn';

const doctors = [
  {
    name: "Dr. Arvind Verma",
    degrees: "MBBS, MS, FMR (HVDEH, Pune)",
    role: "Senior Cataract and Refractive Surgeon",
    badge: "Senior Cataract and Refractive Surgeon",
    summary:
      "Dr. Arvind Verma is the primary doctor anchor for the LASIK page, as the website identifies him as a Senior Cataract and Refractive Surgeon. Patients considering LASIK or other refractive procedures can consult him for detailed guidance, proper assessment, and treatment planning.",
    highlights: ["Senior Refractive Surgeon", "LASIK & PRK Specialist", "FLACS Specialist"],
    image: "/assets/Dr. Arvind.png",
    accent: "#0c5d69",
    imageRight: false,
  },
];

export const DoctorSection = () => {
  const { openModal } = useBookingModal();

  return (
    <section id="our-doctor" className="py-16 lg:py-24 relative overflow-hidden bg-white">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTSAwIDQwIEwgNDAgMCIgc3Ryb2tlPSIjY2FlMmYyMjAiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#cae2f2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-16 max-w-6xl relative z-10 w-full">

        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 text-[12px] font-semibold tracking-[0.15em] text-[#13a2b7] uppercase mb-4">
            <span className="w-6 h-0.5 bg-[#13a2b7]" /> Our Specialists <span className="w-6 h-0.5 bg-[#13a2b7]" />
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-bold text-[#0c5d69] mb-4">
            Meet Our{' '}
            <span className="italic text-[#13a2b7]">Refractive Specialist</span>
          </h2>
          <p className="text-[#0c5d69]/60 text-base font-light max-w-2xl mx-auto">
            Patients choose doctors, not hospitals. Our specialists bring decades of expertise, warmth, and a patient-first approach to every consultation.
          </p>
        </FadeIn>

        {/* Doctor Cards — alternating layout */}
        <div className="space-y-8 lg:space-y-10">
          {doctors.map((doc, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div className={`group relative bg-gradient-to-br from-[#ffffff] to-[#f0f8ff] rounded-3xl border border-[#cae2f2]/60 hover:border-[#13a2b7]/40 transition-all duration-500 overflow-hidden flex flex-col ${doc.imageRight ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

                {/* Accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 lg:hidden"
                  style={{ background: `linear-gradient(90deg, ${doc.accent}, #13a2b7)` }}
                />
                <div
                  className={`absolute top-0 bottom-0 w-1 hidden lg:block ${doc.imageRight ? 'right-0' : 'left-0'}`}
                  style={{ background: `linear-gradient(180deg, ${doc.accent}, #13a2b7)` }}
                />

                {/* ── Image Column ── */}
                <div className="relative w-full md:w-[300px] xl:w-[340px] flex-shrink-0 lg:flex lg:flex-col">
                  {/* Colored bg behind image */}
                  <div
                    className="absolute inset-0 bg-white"
                  />

                  {/* Large watermark initial */}
                  <div
                    className="absolute bottom-0 right-0 font-['Cormorant_Garamond',serif] text-[10rem] font-bold leading-none select-none pointer-events-none"
                    style={{ color: `${doc.accent}10` }}
                  >
                    {doc.name.split(' ')[1][0]}
                  </div>

                  <div className="relative h-[350px] sm:h-[400px] md:h-full lg:flex-1 min-h-[340px] overflow-hidden">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      className={`object-cover object-top group-hover:scale-[1.04] h-auto transition-transform duration-700 ${idx === 0 ? 'top-0' : '!top-10'}`}
                    />
                    {/* Bottom gradient for mobile name overlap */}
                    <div className="absolute inset-0 via-transparent to-transparent lg:hidden" />
                  </div>
                </div>

                {/* ── Content Column ── */}
                <div className="flex-1 p-7 sm:p-9 lg:p-10 flex flex-col justify-center">

                  {/* Role badge */}
                  <div
                    className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-4"
                    style={{
                      background: `${doc.accent}12`,
                      color: doc.accent,
                      border: `1px solid ${doc.accent}30`,
                    }}
                  >
                    <Award size={11} />
                    {doc.badge}
                  </div>

                  {/* Name */}
                  <h3 className="font-['Cormorant_Garamond',serif] text-4xl lg:text-5xl font-semibold text-[#0c5d69] leading-tight mb-1">
                    {doc.name.split(' ')[0]}{' '}
                    <span className="italic">{doc.name.split(' ').slice(1).join(' ')}</span>
                  </h3>

                  {/* Credentials */}
                  <div className="flex items-center gap-2 mb-5">
                    <GraduationCap size={14} className="text-[#13a2b7] flex-shrink-0" />
                    <p className="text-[#0c5d69]/50 text-sm">{doc.degrees}</p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-[#cae2f2]/60 mb-5" />

                  {/* Summary */}
                  <p className="text-[#0c5d69]/70 text-[15px] leading-relaxed mb-6">
                    {doc.summary}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-7">
                    {doc.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-1.5 bg-[#f0f8ff] border border-[#cae2f2] text-[#0c5d69] text-xs px-3 py-1.5 rounded-full">
                        <CheckCircle2 size={11} className="text-[#13a2b7]" />
                        {h}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={openModal}
                      className="inline-flex items-center gap-2.5 bg-[#13a2b7] hover:bg-[#0c5d69] text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 group/btn"
                    >
                      Book Consultation
                      <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Trust line */}
        <FadeIn delay={250}>
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-[#0c5d69] border border-[#cae2f2] rounded-2xl px-6 py-5">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={20} className="text-[#0c5d69]" />
            </div>
            <p className="text-white text-sm leading-relaxed">
              Optimus also has a broader specialist eye team covering cataract, retina, and glaucoma care, offering complete eye support under one roof.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};