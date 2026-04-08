"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export const Navbar = () => {
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'specialists', 'treatment', 'reviews', 'faq'];
      let currentSection = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is currently somewhat visible in viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = `#${section}`;
          }
        }
      }
      
      setActiveHash(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Doctors', href: '#specialists' },
    { name: 'Treatment', href: '#treatment' },
    { name: 'Why Us', href: '#reviews' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 bg-white/95 backdrop-blur-md border-b border-[#cae2f2] shadow-sm transition-all">
      <div className="flex items-center gap-3">
        <div>
          <Image src="/assets/logo.png" alt="Logo" width={170} height={75} style={{ height: '75px', width: 'auto' }} priority />
        </div>
      </div>
      <ul className="hidden md:flex gap-8 list-none items-center">
        {navLinks.map((item) => {
          const isActive = activeHash === item.href;
          return (
            <li key={item.name} className="relative group py-2">
              <a 
                href={item.href} 
                className={`text-sm font-semibold transition-colors ${isActive ? 'text-[#13a2b7]' : 'text-[#0c5d69] hover:text-[#13a2b7]'}`}
              >
                {item.name}
              </a>
              {/* Highlight line */}
              <div 
                className={`absolute bottom-0 left-0 h-0.5 bg-[#13a2b7] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
              />
            </li>
          );
        })}
      </ul>
      <a href="#book" className="hidden md:inline-flex bg-[#13a2b7] hover:bg-[#0f8fa1] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md transform hover:-translate-y-0.5">
        Book Consultation
      </a>
    </nav>
  );
};
