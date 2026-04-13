"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useBookingModal } from '@/components/ui/BookingModalContext';

export const Footer = () => {
  const { openModal } = useBookingModal();
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image src="/assets/logo.png" alt="Optimus Eye Hospital" width={160} height={60} className="" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              A specialist centre for LASIK, refractive care and comprehensive eye health — guided by precision, driven by compassion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-[#cae2f2]"></span> Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/#about' },
                { label: 'Services', href: '/#treatment' },
                { label: 'Our Doctors', href: '/#our-doctor' },
              ].map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-[#cae2f2] text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
              <li>
                <button onClick={openModal} className="text-white/70 hover:text-[#cae2f2] text-sm transition-colors text-left">Contact</button>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-[#cae2f2]"></span> Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#cae2f2] mt-0.5 flex-shrink-0" />
                <p className="text-white/70 text-sm leading-relaxed">Nihal Tower (Near SAS Hyundai Showroom), Arjunganj, Lucknow, Uttar Pradesh 226002</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#cae2f2] flex-shrink-0" />
                <div className="text-sm">
                  <a href="tel:+919919965200" className="text-white/70 hover:text-[#cae2f2] transition-colors">+91 9919965200</a>
                  <span className="text-white/40 mx-1">,</span>
                  <a href="tel:7518588355" className="text-white/70 hover:text-[#cae2f2] transition-colors">7518588355</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#cae2f2] flex-shrink-0" />
                <a href="mailto:optimuseyehospital@gmail.com" className="text-white/70 hover:text-[#cae2f2] text-sm transition-colors">optimuseyehospital@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Timing */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-[#cae2f2]"></span> Timing
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-[#cae2f2] flex-shrink-0" />
                <p className="text-white/70 text-sm">Mon to Sat: 11:00am to 07:30pm</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-[#cae2f2] flex-shrink-0" />
                <p className="text-white/70 text-sm">Sunday: Closed</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/50 text-sm">
            Copyright © {new Date().getFullYear()} All rights reserved | Powered by{' '}
            <a href="https://www.invictusglobaltech.com/" target="_blank" rel="noopener noreferrer" className="text-[#2ab081] hover:text-[#2ab081] transition-colors">Invictus Global Tech</a>
          </div>
          <a href="#" className="text-white/50 hover:text-[#cae2f2] text-sm transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};
