"use client";

import React from 'react';
import Link from 'next/link';
import { Cormorant_Garamond, Outfit } from 'next/font/google';
import { CheckCircle2, ArrowLeft, Calendar, Clock3, MessageCircle, Phone } from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';

const headingFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const bodyFont = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

export default function ThankYouPage() {
  return (
    <div className={bodyFont.className}>
      <Navbar />
      <main className="min-h-screen bg-[#F8FAFB] relative overflow-hidden pt-24">
        {/* Decorative Blur Orbs */}
        <div className="absolute top-[-10%] right-[-10%] h-125 w-125 bg-[#0c5d69]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] h-125 w-125 bg-[#cae2f2]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 py-16 lg:py-24 relative z-10">
          <div className="max-w-5xl mx-auto">

            {/* Top: Success Card */}
            <div className="bg-white rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(32,58,71,0.1)] border border-[#cae2f2] overflow-hidden p-8 sm:p-12 text-center mb-12">

              {/* Success Icon */}
              <div className="w-20 h-20 bg-[#0c5d69] rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-[0_8px_30px_rgba(12,93,105,0.3)]">
                <CheckCircle2 size={40} strokeWidth={1.5} />
              </div>

              <h1 className={`${headingFont.className} text-4xl md:text-5xl font-semibold text-[#0c5d69] mb-4`}>
                Thank You for <span className="italic text-[#13a2b7]">Choosing Us</span>
              </h1>

              <p className="text-[#0c5d69]/70 text-lg leading-relaxed mb-8 max-w-lg mx-auto">
                Your <strong className="text-[#0c5d69]">LASIK consultation request</strong> has been received. Our patient care coordinator will call you within the next <strong className="text-[#0c5d69]">30 minutes</strong> to confirm your appointment.
              </p>

              <div className="grid gap-4 md:grid-cols-3 mb-8 text-left">
                <div className="rounded-[1.75rem] border border-[#cae2f2] bg-[#F8FAFB] p-5 shadow-[0_12px_35px_-30px_rgba(12,93,105,0.55)]">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#0c5d69] shadow-sm">
                    <Clock3 size={20} />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0c5d69]/45">Preparation Tip</p>
                  <p className="mt-2 text-base font-semibold text-[#0c5d69]">Stop Contact Lens Wear</p>
                  <p className="mt-2 text-sm leading-6 text-[#0c5d69]/70">For an accurate cornea measurement, please stop wearing soft contact lenses at least 3 days before your visit.</p>
                </div>
                <div className="rounded-[1.75rem] border border-[#cae2f2] bg-[#F8FAFB] p-5 shadow-[0_12px_35px_-30px_rgba(12,93,105,0.55)]">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#0c5d69] shadow-sm">
                    <Calendar size={20} />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0c5d69]/45">Evaluation Timing</p>
                  <p className="mt-2 text-base font-semibold text-[#0c5d69]">Plan for 60-90 Minutes</p>
                  <p className="mt-2 text-sm leading-6 text-[#0c5d69]/70">Your LASIK screening involves detailed diagnostic scans of your cornea and vision power evaluation.</p>
                </div>
                <div className="rounded-[1.75rem] border border-[#cae2f2] bg-[#F8FAFB] p-5 shadow-[0_12px_35px_-30px_rgba(12,93,105,0.55)]">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#0c5d69] shadow-sm">
                    <MessageCircle size={20} />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0c5d69]/45">Day of Visit</p>
                  <p className="mt-2 text-base font-semibold text-[#0c5d69]">Avoid Eye Makeup</p>
                  <p className="mt-2 text-sm leading-6 text-[#0c5d69]/70">Please avoid applying eye makeup or lotions around the eyes on the day of your consultation for better imaging.</p>
                </div>
              </div>

              {/* Info Cards */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#F8FAFB] border border-[#cae2f2]">
                  <div className="w-9 h-9 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0c5d69]">
                    <Calendar size={18} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#0c5d69]/50">Response Time</p>
                    <p className="text-[#0c5d69] font-semibold text-sm">Under 30 Mins</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#F8FAFB] border border-[#cae2f2]">
                  <div className="w-9 h-9 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0c5d69]">
                    <Phone size={18} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#0c5d69]/50">Support Call</p>
                    <p className="text-[#0c5d69] font-semibold text-sm">+91 9919965200</p>
                  </div>
                </div>
              </div>

              <div className="mb-8 rounded-4xl border border-[#cae2f2] bg-[linear-gradient(135deg,rgba(12,93,105,0.06),rgba(19,162,183,0.12))] p-6 text-left">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0c5d69]/50">Direct support</p>
                    <h2 className={`${headingFont.className} mt-2 text-3xl font-semibold text-[#0c5d69]`}>Speak to our care team right away</h2>
                    <p className="mt-2 text-sm leading-6 text-[#0c5d69]/75">Use the buttons below if you want immediate help with consultation timing, directions, or pre-visit questions.</p>
                  </div>
                  <div className="flex flex-col items-start sm:flex-row sm:items-center gap-3">
                    <a
                      href="tel:+919919965200"
                      className="inline-flex items-center justify-center gap-2 self-start whitespace-nowrap rounded-xl bg-[#0c5d69] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <Phone size={17} />
                      Call Now
                    </a>
                    <a
                      href="https://wa.me/919919965200"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 self-start whitespace-nowrap rounded-xl border border-[#25D366] bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1ebe5a] hover:border-[#1ebe5a] hover:shadow-lg"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                      </svg>
                      WhatsApp Now
                    </a>
                  </div>
                </div>
              </div>

              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-[#13a2b7] hover:bg-[#0f8fa1] text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to Homepage
              </Link>
            </div>



          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
