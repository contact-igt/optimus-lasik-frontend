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

            {/* WhatsApp Button (mobile) / Book Consultation Button (desktop) */}
            <a
              href="https://wa.me/919919965200?text=Hi%2C%20I%20would%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white active:scale-95 transition-transform"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            </a>
            <button
              onClick={openModal}
              className="hidden lg:inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#13a2b7] px-8 py-3.5 font-bold text-white transition-all duration-300 hover:bg-[#0c5d69] hover:-translate-y-0.5 active:scale-95"
            >
              <CalendarDays size={16} />
              <span className="text-sm tracking-wide">Book Consultation</span>
            </button>

          </div>
        </div>
      </nav>
    </header>
  );
};
