"use client";

import React, { useState, useEffect } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Phone, CheckCircle2, User, ArrowRight, Loader2, Shield, Star, Clock, ExternalLink, MapPin, CalendarDays } from 'lucide-react';
import { useFormik } from 'formik';
import { z } from 'zod';
import { useBookingModal } from '@/components/ui/BookingModalContext';

const bookingSchema = z.object({
  name: z.string().min(1, "Name is required").regex(/^[A-Za-z\s']+$/, "Enter a valid name"),
  mobile: z.string().min(1, "Mobile is required").regex(/^[0-9]{10}$/, "Enter a valid 10-digit number"),
});

const validateWithZod = (values: { name: string; mobile: string }) => {
  const result = bookingSchema.safeParse(values);
  if (result.success) return {};
  const errors: Record<string, string> = {};
  result.error.issues.forEach((issue) => {
    if (issue.path[0]) errors[issue.path[0] as string] = issue.message;
  });
  return errors;
};

export const CtaSection = () => {
  const { openModal } = useBookingModal();
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: { name: '', mobile: '' },
    validate: validateWithZod,
    onSubmit: async (values, { resetForm }) => {
      try {
        setIsLoading(true);
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();

        const formData = {
          Name: values.name,
          MobileNumber: values.mobile,
          IP_Address: ipData.ip,
          utm_source: typeof window !== 'undefined' ? localStorage.getItem('utm_source') || 'direct' : 'direct',
        };

        const params = new URLSearchParams();
        Object.entries(formData).forEach(([key, val]) => params.append(key, val || ''));

        await fetch(
          'https://script.google.com/macros/s/AKfycbyUhRQTTgrc7FmlWBzgAfpVWotsVrhgf8zNSl7x2lWyANKXs3mL2GNfVonk9RJKYde4/exec',
          { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: params.toString() }
        );

        resetForm();
        if (typeof window !== 'undefined') window.location.href = '/thank-you';
      } catch (err) {
        console.error('Error submitting form:', err);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <>
      {/* ── MAIN CTA SECTION (Div 08) ── */}
      <section id="book" className="relative py-12 md:py-20 lg:py-28 bg-[#0c5d69] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#cae2f2] opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#cae2f2] opacity-10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-4 sm:px-6 md:px-16 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* Left — Content */}
            <FadeIn>
              <div className="space-y-8">
                <div>
                  <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                    Book Your Cataract <br />
                    <span className="italic font-medium text-[#cae2f2]">Consultation Today</span>
                  </h2>
                  <p className="text-white/70 text-lg font-light leading-relaxed max-w-lg">
                   If cataract symptoms are affecting your daily life, visit Optimus Eye Hospital for a proper eye evaluation and expert treatment guidance from a trusted specialist team.

                  </p>
                </div>

                {/* Quick action buttons */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:+919919965200"
                    className="inline-flex items-center gap-2 bg-white text-[#0c5d69] hover:bg-[#cae2f2] px-6 py-3.5 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5"
                  >
                    <Phone size={16} /> Call Now
                  </a>
                  <a
                    href="https://wa.me/919919965200?text=Hi%2C%20I%20would%20like%20to%20book%20a%20CATARACT%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#1ebe5a] px-6 py-3.5 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="group-hover:scale-110 transition-transform">
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg> WhatsApp Now
                  </a>
                  <button
                    onClick={openModal}
                    className="inline-flex items-center gap-2 bg-[#13a2b7] text-white hover:bg-[#0f8fa1] px-6 py-3.5 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5"
                  >
                    <ArrowRight size={16} /> Book Cataract  Consultation
                  </button>
                </div>

                {/* Closing Trust Line */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 mt-6">
                  <h3 className="text-white font-semibold text-lg mb-5">Optimus Eye Hospital & Dental Clinic</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 text-white/70 text-sm">
                      <MapPin size={18} className="text-[#1fcfeb] flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">Nihal Tower, Near SAS Hyundai Showroom, Arjunganj, Lucknow</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/70 text-sm">
                      <Clock size={16} className="text-[#1fcfeb] flex-shrink-0" />
                      <span>Mon to Sat | 11:00 AM to 7:30 PM</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/70 text-sm w-full">
                      <Phone size={16} className="text-[#1fcfeb] flex-shrink-0" />
                      <div className="flex flex-wrap gap-x-2 gap-y-1">
                        <a href="tel:+919919965200" className="hover:text-white transition-colors">+91 9919965200</a>
                        <span className="hidden sm:inline">|</span>
                        <a href="tel:+917518588355" className="hover:text-white transition-colors">+91 7518588355</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right — Booking Form */}
            <FadeIn delay={200}>
              <div className="bg-white rounded-3xl p-8 sm:p-10">
                <div className="mb-7">
                  <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#0c5d69] mb-1.5">
                    Book Your Consultation
                  </h3>
                  <p className="text-[#0c5d69]/55 text-sm">Fill in your details — our team will call you within 2 hours.</p>
                </div>

                <form onSubmit={formik.handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#0c5d69] uppercase tracking-widest mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0c5d69]/40" />
                      <input
                        type="text"
                        name="name"
                        placeholder="e.g. Ramesh Sharma"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full pl-11 pr-4 py-3.5 rounded-xl border text-[#0c5d69] text-sm placeholder:text-[#0c5d69]/30 focus:outline-none focus:ring-2 focus:ring-[#13a2b7]/40 transition-all ${formik.touched.name && formik.errors.name
                            ? 'border-red-400 bg-red-50'
                            : 'border-[#cae2f2] bg-[#f8fcfe] hover:border-[#13a2b7]/50'
                          }`}
                      />
                    </div>
                    {formik.touched.name && formik.errors.name && (
                      <p className="text-red-500 text-xs mt-1.5">{formik.errors.name}</p>
                    )}
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="block text-xs font-semibold text-[#0c5d69] uppercase tracking-widest mb-2">
                      Mobile Number
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                        <span className="text-sm">🇮🇳</span>
                        <span className="text-[#0c5d69]/40 text-sm font-medium">+91</span>
                        <span className="w-px h-4 bg-[#cae2f2] mx-1" />
                      </div>
                      <input
                        type="tel"
                        name="mobile"
                        placeholder="10-digit number"
                        maxLength={10}
                        value={formik.values.mobile}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full pl-24 pr-4 py-3.5 rounded-xl border text-[#0c5d69] text-sm placeholder:text-[#0c5d69]/30 focus:outline-none focus:ring-2 focus:ring-[#13a2b7]/40 transition-all ${formik.touched.mobile && formik.errors.mobile
                            ? 'border-red-400 bg-red-50'
                            : 'border-[#cae2f2] bg-[#f8fcfe] hover:border-[#13a2b7]/50'
                          }`}
                      />
                    </div>
                    {formik.touched.mobile && formik.errors.mobile && (
                      <p className="text-red-500 text-xs mt-1.5">{formik.errors.mobile}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 bg-[#13a2b7] hover:bg-[#0f8fa1] disabled:opacity-70 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 mt-2"
                  >
                    {isLoading ? (
                      <><Loader2 size={18} className="animate-spin" /> Submitting…</>
                    ) : (
                      <>Book Consultation <ArrowRight size={16} /></>
                    )}
                  </button>

                  <p className="text-center text-[#0c5d69]/40 text-xs pt-1">
                    <CheckCircle2 size={12} className="inline mr-1 text-[#13a2b7]" />
                    Your information is 100% confidential & secure.
                  </p>
                </form>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── STICKY MOBILE BAR (blueprint Div 08 requirement) ── */}
      <StickyMobileBar onBook={openModal} />
    </>
  );
};

function StickyMobileBar({ onBook }: { onBook: () => void }) {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-300 'translate-y-0'`}
    >
      <div className="bg-white border-t border-[#cae2f2] shadow-[0_-8px_30px_rgba(0,0,0,0.12)] px-4 py-3 flex gap-3 safe-area-pb">
        <a
          href="tel:+919919965200"
          id="sticky-call"
          className="flex-1 flex items-center justify-center gap-2 bg-[#0c5d69] text-white py-3 rounded-xl text-sm font-bold hover:bg-[#0a4e59] transition-all"
        >
          <Phone size={16} /> Call
        </a>
        <a
          href="https://wa.me/919919965200?text=Hi%2C%20I%20would%20like%20to%20book%20a%20Cataract%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          id="sticky-whatsapp"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl text-sm font-bold hover:bg-[#1ebe5a] transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
          WhatsApp
        </a>
        <button
          onClick={onBook}
          id="sticky-book"
          className="flex-1 flex items-center justify-center gap-2 bg-[#13a2b7] text-white py-3 rounded-xl text-sm font-bold hover:bg-[#0f8fa1] transition-all"
        >
          <CalendarDays size={16} />
          Book
        </button>
      </div>
    </div>
  );
}
