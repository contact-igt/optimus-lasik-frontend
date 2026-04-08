"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const doctorsData = [
  {
    name: "Dr. Arvind Verma",
    role: "Senior Cataract & Refractive Surgeon",
    degrees: "MBBS, MS, FMR (HVDEH, Pune)",
    summary: "Over a decade of clinical excellence in cataract and refractive surgery. LASIK specialisation under Dr. Rupal Shah and Medical Retina Fellowship from HV Desai Eye Hospital, Pune.",
    highlights: ["Premium Cataract Surgery", "FLACS & LASIK", "Glaucoma Care", "Apollo Medics, Lucknow"],
    image: "/assets/Dr. Arvind.png"
  },
  {
    name: "Dr. Neha Singh",
    role: "Dental Specialist",
    degrees: "BDS, MDS",
    summary: "9+ years in restorative dentistry, oral rehabilitation and preventive care. Served as Assistant Professor at Rishiraj College and Reader at Purvanchal Institute of Dental Sciences.",
    highlights: ["Cosmetic Dentistry", "Root Canal", "Prosthodontics", "Oral Rehabilitation"],
    image: "/assets/Dr. Neha.png"
  },
  {
    name: "Dr. Pranav Srivastava",
    role: "Vitreo-Retinal Surgeon",
    degrees: "MBBS, MS, Fellowship in Vitreo-Retina",
    summary: "8+ years in vitreo-retinal surgery with Fellowship from Indira Gandhi Eye Hospital, Lucknow. Expert in diabetic retinopathy, retinal detachment and advanced retinal imaging.",
    highlights: ["Diabetic Retinopathy", "Retinal Detachment", "OCT & FFA Imaging", "ARMD Management"],
    image: "/assets/Dr. Pranav.png"
  },
  {
    name: "Dr. Amit Ghanshyam Gupta",
    role: "Glaucoma & Cataract Surgeon",
    degrees: "MBBS, MS - Gold Medalist",
    summary: "Gold Medalist in MS Ophthalmology from Gandhi Medical College. 60,000+ SICS and 2,000+ phacoemulsification surgeries. Fellowships in Glaucoma Surgery from Sadguru Netra Chikitsalaya.",
    highlights: ["60,000+ SICS Surgeries", "Glaucoma Surgery", "Cataract & Retinal Care", "Best Paper MPSOS 2019"],
    image: "/assets/Dr. Amit.png"
  }
];

export const DoctorSection = () => {
  const [activeDoc, setActiveDoc] = useState(0);
  const [paused, setPaused] = useState(false);
  const doc = doctorsData[activeDoc];

  const next = useCallback(() => {
    setActiveDoc((prev) => (prev + 1) % doctorsData.length);
  }, []);

  const prev = useCallback(() => {
    setActiveDoc((prev) => (prev - 1 + doctorsData.length) % doctorsData.length);
  }, []);

  // Auto-rotate every 4 seconds unless paused
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const handleTabClick = (idx: number) => {
    setActiveDoc(idx);
    setPaused(true);
    // Resume auto-rotate after 8 seconds of inactivity
    setTimeout(() => setPaused(false), 8000);
  };

  return (
    <section id="specialists" className="py-14 lg:py-16 relative overflow-hidden bg-[#0c5d69]">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0c5d69]/20 rounded-full blur-[140px] opacity-40 -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#cae2f2]/10 rounded-full blur-[120px] opacity-30 -ml-48 -mb-48"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10 w-full">

        {/* Doctor Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 relative z-20">
          {doctorsData.map((d, idx) => (
            <button
              key={idx}
              onClick={() => handleTabClick(idx)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm ${activeDoc === idx
                ? 'bg-[#13a2b7] text-white scale-105 shadow-[0_0_20px_rgba(19,162,183,0.3)]'
                : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
            >
              {d.name}
            </button>
          ))}
        </div>

        <div className="w-full">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">

            {/* Image Column */}
            <div className="w-full lg:w-[30%] order-1 flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-[#cae2f2]/20 blur-[60px] rounded-full opacity-60"></div>
                <div className="relative rounded-[2rem] overflow-hidden border-4 border-white/5 shadow-[0_30px_60px_-10px_rgba(0,0,0,0.5)] max-h-[340px]">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="w-full lg:w-[70%] order-2">
              <div className="space-y-4">

                {/* Name & Role */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-[2px] w-8 bg-[#13a2b7]"></div>
                    <span className="text-[#cae2f2] font-bold text-[11px] uppercase tracking-[0.3em]">{doc.role}</span>
                  </div>
                  <h2 className="font-['Cormorant_Garamond',serif] text-4xl lg:text-5xl font-semibold text-white leading-tight">
                    {doc.name.split(' ')[0]}{' '}
                    <span className="italic text-white">{doc.name.split(' ').slice(1).join(' ')}</span>
                  </h2>
                  <p className="text-white/50 text-sm mt-1">{doc.degrees}</p>
                </div>

                {/* Summary */}
                <p className="text-white/75 text-[15px] leading-relaxed border-l-2 border-[#13a2b7] pl-5">
                  {doc.summary}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {doc.highlights.map((h) => (
                    <span key={h} className="bg-white/5 border border-white/10 text-[#cae2f2] text-xs px-3 py-1.5 rounded-full">
                      {h}
                    </span>
                  ))}
                </div>

                {/* CTA + Carousel Controls */}
                <div className="flex items-center justify-between pt-1 flex-wrap gap-4">
                  <a
                    href="#book"
                    className="inline-flex items-center gap-3 bg-[#13a2b7] hover:bg-[#0f8fa1] text-white px-7 py-3.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_20px_-5px_rgba(19,162,183,0.4)]"
                  >
                    Schedule Appointment <ArrowRight size={16} />
                  </a>

                  {/* Prev / Dots / Next */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => { prev(); setPaused(true); setTimeout(() => setPaused(false), 8000); }}
                      className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                      aria-label="Previous doctor"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <div className="flex gap-2">
                      {doctorsData.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleTabClick(idx)}
                          aria-label={`Go to doctor ${idx + 1}`}
                          className={`rounded-full transition-all duration-300 ${activeDoc === idx
                            ? 'w-6 h-2 bg-[#13a2b7]'
                            : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                            }`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={() => { next(); setPaused(true); setTimeout(() => setPaused(false), 8000); }}
                      className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                      aria-label="Next doctor"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};