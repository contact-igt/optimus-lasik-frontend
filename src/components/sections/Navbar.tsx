"use client";

import Image from 'next/image';
import React from 'react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 bg-black/95 backdrop-blur-md border-b border-[#222222] shadow-sm transition-all">
      <div className="flex items-center gap-3">
        <div>
          <Image src="/assets/logo.png" alt="Logo" width={170} height={75} style={{ height: '75px', width: 'auto' }} priority />
        </div>
      </div>
      <div className="hidden md:flex gap-4 items-center">
        <a href="tel:+919919965200" className="hidden md:inline-flex bg-transparent border border-[#13a2b7] hover:bg-[#13a2b7]/10 text-[#13a2b7] px-6 py-2.5 rounded-full text-sm font-semibold transition-all">
          Call Now
        </a>
        <a href="#book" className="hidden md:inline-flex bg-[#13a2b7] hover:bg-[#0f8fa1] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md transform hover:-translate-y-0.5">
          Book Appointment
        </a>
      </div>
    </nav>
  );
};
