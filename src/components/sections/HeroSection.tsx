"use client";

import React from 'react';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';
import { Phone, CalendarDays, ShieldCheck, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useBookingModal } from '@/components/ui/BookingModalContext';
import { BookingForm } from '@/components/ui/BookingForm';

export const HeroSection = () => {
  const { openModal } = useBookingModal();

  return (
    <section className="relative w-full pt-[7.5rem] xl:pt-[8.5rem] pb-0 bg-[#0c5d69] h-auto lg:overflow-hidden">

      {/* Decorative Background Glows & Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#1fcfeb]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#13a2b7] rounded-full blur-[100px] opacity-30" />
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="full-premium-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#full-premium-grid)" />
        </svg>
      </div>

      {/* ── MAIN LAYOUT ──
          Mobile: stacked flex-col — Content → Stats → Contact → Form → Doctor Image
          Desktop (@1200px): 3-col grid — [Content+Stats+Contact | Doctor | Form Card]
      */}
      <div className="container mx-auto px-6 md:px-8 xl:max-w-[1380px] 2xl:max-w-[1520px] relative z-10
        flex flex-col
        xl:grid xl:grid-cols-[minmax(0,1fr)_350px_340px] xl:items-center xl:gap-5
        2xl:grid-cols-[minmax(0,1fr)_380px_360px]">

        {/* ══════════════════════════════════
            COL 1: LEFT CONTENT
            Includes: badge, headline, CTA, stats, contact, mobile-only inline form
        ══════════════════════════════════ */}
        <div className="pt-4 md:pt-10 lg:pt-6 xl:pt-8 xl:pb-8 xl:pr-2 w-full min-w-0 xl:col-start-1 xl:row-start-1">
          <FadeIn>
            {/* NABH Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/10 border border-[#cae2f2]/20 text-[#cae2f2] px-5 py-2 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase mb-6 backdrop-blur-md">
              <ShieldCheck size={16} className="text-[#1fcfeb]" />
              <span>NABH Certified Eye Hospital</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-['Cormorant_Garamond',serif] text-5xl sm:text-[3.5rem] xl:text-[3.4rem] 2xl:text-[3.8rem] font-extrabold text-white leading-[1.08] mb-5 tracking-tight">
              Advanced LASIK Treatment in Lucknow{' '}
              <span className="italic font-medium text-[#cae2f2] block sm:inline">for Clearer Vision</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-white/90 text-base sm:text-[15px] xl:text-base font-normal leading-relaxed mb-7 max-w-[480px]">
              At Optimus Eye Hospital, patients can consult experienced refractive specialists for LASIK, PRK, and other vision correction procedures in a modern, patient-friendly setting. Optimus explicitly lists LASIK, PRK, and other refractive surgeries among its services.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center justify-start gap-3 sm:gap-4 mb-8">
              <a
                href="tel:+919919965200"
                className="group relative bg-white text-[#0c5d69] px-6 py-3.5 rounded-full text-[13px] font-bold transition-all hover:-translate-y-1 flex items-center gap-2 overflow-hidden"
              >
                <Phone size={15} className="text-[#13a2b7]" /> Call Now
              </a>

              <a
                href="https://wa.me/919919965200?text=Hi%2C%20I%20would%20like%20to%20book%20a%20LASIK%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#25D366] text-white px-6 py-3.5 rounded-full text-[13px] font-bold transition-all hover:-translate-y-1 hover:bg-[#1ebe5a] flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="group-hover:scale-110 transition-transform">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg> WhatsApp Now
              </a>

              {/* Book Appointment button — desktop only (form is col 3 on xl) */}
              <button
                onClick={openModal}
                className="hidden xl:flex bg-[#13a2b7] hover:bg-[#0f8fa1] cursor-pointer border border-white/20 text-white px-6 py-3.5 rounded-full text-[13px] font-bold transition-all backdrop-blur-md items-center gap-2 hover:-translate-y-1"
              >
                <CalendarDays size={15} className="opacity-80" /> Book LASIK Consultation
                <ArrowRight size={14} className="ml-0.5" />
              </button>
            </div>

            {/* ── Trust Metrics (Stats) ── */}
            <div className="flex flex-wrap justify-start gap-x-10 gap-y-6 pt-5 pb-4 border-t border-white/10">
              {[
                { value: "100+", label: "LASIK / IPCL Procedures" },
                { value: "19+", label: "Years of Experience" },
                { value: "4.6", label: "Stars on Google", icon: <Star size={18} className="text-yellow-400 fill-yellow-400 inline ml-1.5 -mt-1" /> },
                { value: <Image src="/assets/NABH_logo.png" alt="NABH Certified" width={70} height={60} priority />, label: "NABH Certified Eye Hospital" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center">
                  <div className="text-white font-['Cormorant_Garamond',serif] text-3xl sm:text-[2.2rem] leading-none font-bold mb-2 flex items-center">
                    {stat.value}
                    {stat.icon}
                  </div>
                  <div className="text-[#cae2f2] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* ── Contact / Address Info ── */}
            <div className="text-white/60 text-[11px] text-left pt-4 mt-2 border-t border-[#1fcfeb]/10 max-w-[650px] font-light mb-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-5">
                <span className="font-medium tracking-wide">+91 99199 65200 / +91 75185 88355</span>
                <span className="hidden md:inline px-1 opacity-40">|</span>
                {/* <span className="md:hidden w-100 !h-px bg-white/20 my-1" /> */}
                <span className="font-medium tracking-wide">Nihal Tower, Near SAS Hyundai Showroom, Arjunganj, Lucknow – 226002</span>
                <span className="hidden md:inline px-1 opacity-40">|</span>
                {/* <span className="md:hidden w-100 h-px bg-white/20 my-1" /> */}
                <span className="font-medium tracking-wide">Mon to Sat | 11:00 AM to 7:30 PM</span>
              </div>
            </div>

            {/* ── Inline Form — mobile/tablet only (below stats & contact) ── */}
            <div className="xl:hidden bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl mb-8 w-full max-w-md mx-auto">
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-white mb-1">
                Book LASIK <span className="italic text-white">Consultation</span>
              </h3>
              <p className="text-white/80 text-[12px] mb-5">
                Leave your details and our care team will contact you shortly.
              </p>
              <div className="bg-white p-5 rounded-xl">
                <BookingForm buttonText="Book Now" />
              </div>
            </div>

          </FadeIn>
        </div>

        {/* ══════════════════════════════════
            MOBILE DOCTOR IMAGE
            Shown only on mobile/tablet (below the form), hidden on xl (desktop taking over)
        ══════════════════════════════════ */}
        <div className="xl:hidden flex justify-center pb-0 w-full relative z-20">
          <div className="relative w-[280px] sm:w-[340px] aspect-[3/4] pointer-events-none">
            <div className="absolute bottom-0 left-0 right-0 h-full w-full rounded-t-[3.5rem] overflow-hidden border-t-4 border-x-4 border-white/20 z-10 bg-[#e7f4fa]">
              <Image
                src="/assets/Dr. Arvind.png"
                alt="Dr. Arvind Verma - LASIK Specialist"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[90%] bg-[#1fcfeb] opacity-30 blur-[100px] mix-blend-screen -z-10" />
          </div>
        </div>

        {/* ══════════════════════════════════
            COL 2: DOCTOR IMAGE — Desktop only
        ══════════════════════════════════ */}
        <div className="relative hidden xl:flex justify-end xl:col-start-2 xl:row-start-1">
          <FadeIn delay={200} className="relative w-full max-h-[580px] aspect-[1/1.3] pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-full w-full rounded-3xl overflow-hidden border-4 border-white/20 z-10 bg-[#e7f4fa]">
              <Image
                src="/assets/Dr. Arvind.png"
                alt="Dr. Arvind Verma - LASIK Specialist"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[90%] bg-[#1fcfeb] opacity-30 blur-[100px] mix-blend-screen -z-10" />
          </FadeIn>
        </div>

        {/* ══════════════════════════════════
            COL 3: BOOKING FORM CARD — Desktop only
        ══════════════════════════════════ */}
        <div className="hidden xl:flex flex-col justify-center xl:col-start-3 xl:row-start-1">
          <FadeIn delay={350}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-[#0c5d69]/30">

              {/* Form Header */}
              <div className="bg-[#13a2b7] relative px-6 py-7 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="form-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                        <path d="M 24 0 L 0 0 0 24" fill="none" stroke="white" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#form-grid)" />
                  </svg>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CalendarDays size={20} className="text-white" />
                    </div>
                    <h3 className="font-['Cormorant_Garamond',serif] text-[1.75rem] leading-tight font-bold text-white">
                      Book LASIK <span className="italic text-[#cae2f2]">Consultation</span>
                    </h3>
                  </div>
                  <p className="text-white/75 text-[13px]">Our team will call you within 30 minutes.</p>
                </div>
              </div>

              {/* Form Body */}
              <div className="px-6 py-6">
                <BookingForm buttonColor="#13a2b7" buttonText="Book Consultation" />
                <div className="mt-5 flex items-center justify-center gap-2">
                  <div className="h-px flex-1 bg-[#cae2f2]/60" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0c5d69]/50 flex items-center gap-1.5 px-2 flex-shrink-0">
                    <CheckCircle2 size={12} className="text-[#13a2b7]" /> Secure & Private
                  </p>
                  <div className="h-px flex-1 bg-[#cae2f2]/60" />
                </div>
              </div>

            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};
