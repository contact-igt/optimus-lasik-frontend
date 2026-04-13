"use client";

import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';         // Div 01 — Hook + CTAs
import { AboutSection } from '@/components/sections/AboutSection';       // Div 02 — Symptoms / Pain Points
import { ReviewsSection } from '@/components/sections/ReviewsSection';   // Div 03 — Testimonials
import { DoctorSection } from '@/components/sections/DoctorSection';     // Div 04 — About Doctors
import { TreatmentSection } from '@/components/sections/TreatmentSection'; // Div 05 — Treatment Explained
import { WhyUsSection } from '@/components/sections/WhyUsSection';       // Div 06 — Equipment / Why Optimus
import { IolSection } from '@/components/sections/IolSection';           // Div 07 — IOL / Lens Options
import { FaqSection } from '@/components/sections/FaqSection';           // Div 07+ — FAQs
import { CtaSection } from '@/components/sections/CtaSection';           // Div 08 — Final CTA + Sticky Bar
import { Footer } from '@/components/sections/Footer';
import { BookingModal } from '@/components/ui/BookingModal';
import { BookingModalProvider } from '@/components/ui/BookingModalContext';
import useUTMSource from '@/hooks/useUTMSource';

export default function OptimusEyeCare() {
  useUTMSource();


  return (
    <BookingModalProvider>
      {/* pb-16 compensates for the sticky mobile bar on mobile */}
      <div className="font-['Outfit',sans-serif] bg-white text-[#0c5d69] overflow-x-hidden pb-16 lg:pb-0">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ReviewsSection />
        <DoctorSection />
        <TreatmentSection />
        <WhyUsSection />
        <IolSection />
        <FaqSection />
        <CtaSection />
        <Footer />
        <BookingModal />
      </div>
    </BookingModalProvider>
  );
}