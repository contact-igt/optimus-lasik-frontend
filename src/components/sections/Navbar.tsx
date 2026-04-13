"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { PhoneCall, CalendarDays, MapPin, Clock } from 'lucide-react';
import { useBookingModal } from '@/components/ui/BookingModalContext';

export const Navbar = () => {
  const { openModal } = useBookingModal();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md border-b border-[#e0f0f5]' : 'bg-white'
    }`}>
      {/* ── Desktop Top Info Bar ── */}
      <div 
        className={`hidden lg:block w-full bg-[#0c5d69] transition-all duration-300 overflow-hidden ${
          scrolled ? 'h-0 opacity-0' : 'h-[38px] opacity-100'
        }`}
      >
        <div className="container mx-auto px-6 md:px-16 h-full flex justify-between items-center text-white/80 text-[11px] font-semibold tracking-wider uppercase">
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2 text-white/90 cursor-default">
              <MapPin size={13} className="text-[#13a2b7]" /> 
              Nihal Tower, Arjunganj, Lucknow
            </span>
            <span className="flex items-center gap-2 text-white/90 cursor-default">
              <Clock size={13} className="text-[#13a2b7]" /> 
              Mon - Sat | 11:00 AM - 7:30 PM
            </span>
          </div>
          <div className="flex items-center gap-2.5 text-[#cae2f2] bg-white/10 px-3 py-1 rounded-full cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#13a2b7] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#13a2b7]"></span>
            </span>
            NABH Certified Eye Hospital
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <nav 
        className={`w-full border-b transition-all duration-300 ${
          scrolled ? 'border-transparent' : 'border-[#e0f0f5]'
        }`}
      >
        <div className="container mx-auto px-6 md:px-16 flex items-center justify-between w-full">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 cursor-pointer">
            <Link href="/">
              <Image 
                src="/assets/logo_removed_bg.png" 
                alt="Optimus Eye Hospital Logo" 
                width={280} 
                height={90} 
                className={`w-auto transition-all duration-300 origin-left ${
                  scrolled ? 'h-24 md:h-26' : 'h-24 md:h-[6.5rem]'
                }`} 
                priority 
              />
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 lg:gap-8">
            
            {/* Desktop Direct Phone Number */}
            <div className="hidden lg:flex flex-col items-end pr-8 border-r border-[#e0f0f5]">
              <span className="text-[#0c5d69]/50 text-[10px] font-bold uppercase tracking-[0.15em] mb-1">Helpline Support</span>
              <a 
                href="tel:+919919965200" 
                className="text-[#0c5d69] font-bold text-lg hover:text-[#13a2b7] transition-all duration-300 leading-none flex items-center gap-1.5"
              >
                <PhoneCall size={16} className="text-[#13a2b7]" />
                +91 99199 65200
              </a>
            </div>

            {/* Mobile Call Icon Button */}
            <a
              href="tel:+919919965200"
              className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full bg-[#0c5d69] text-white active:scale-95 transition-transform"
            >
              <PhoneCall size={18} />
            </a>

            {/* Book Consultation Button */}
            <button
              onClick={openModal}
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-[#13a2b7] px-5 py-3.5 sm:px-6 sm:py-3 lg:px-8 lg:py-3.5 font-bold text-white transition-all duration-300 hover:bg-[#0c5d69] hover:-translate-y-0.5 active:scale-95 border border-transparent"
            >
              <CalendarDays size={16} className="relative z-10 opacity-90 transition-transform" />
              <span className="relative z-10 text-xs sm:text-[13px] lg:text-sm tracking-wide">
                <span className="sm:hidden">Book Now</span>
                <span className="hidden sm:inline">Book Consultation</span>
              </span>
            </button>

          </div>
        </div>
      </nav>
    </header>
  );
};
