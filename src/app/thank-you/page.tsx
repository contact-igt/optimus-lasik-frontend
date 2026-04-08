"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowLeft, Calendar, Phone, Play } from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';

export default function ThankYouPage() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => { if (document.head.contains(link)) document.head.removeChild(link); };
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F8FAFB] relative overflow-hidden pt-24">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#0c5d69]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#cae2f2]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 py-16 lg:py-24 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Top: Success Card */}
          <div className="bg-white rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(32,58,71,0.1)] border border-[#cae2f2] overflow-hidden p-8 sm:p-12 text-center mb-12">

            {/* Success Icon */}
            <div className="w-20 h-20 bg-[#0c5d69] rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-[0_8px_30px_rgba(12,93,105,0.3)]">
              <CheckCircle2 size={40} strokeWidth={1.5} />
            </div>

            <h1 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-semibold text-[#0c5d69] mb-4">
              Thank You for <span className="italic text-[#13a2b7]">Choosing Us</span>
            </h1>

            <p className="text-[#0c5d69]/70 text-lg leading-relaxed mb-8 max-w-lg mx-auto">
              Your consultation request has been received. Our patient care coordinator will call you within the next <strong className="text-[#0c5d69]">30 minutes</strong> to confirm your appointment.
            </p>

            {/* Info Cards */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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

            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#13a2b7] hover:bg-[#0f8fa1] text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Homepage
            </Link>
          </div>

          {/* Bottom: Video Section */}
          <div className="bg-[#0c5d69] rounded-[2.5rem] shadow-[0_30px_60px_rgba(12,93,105,0.2)] border border-white/5 overflow-hidden p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 items-center">

              {/* Left: Text */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-[#cae2f2] text-[10px] font-semibold tracking-widest uppercase mb-5">
                  <Play size={12} fill="currentColor" /> Watch & Learn
                </div>
                <h2 className="font-['Cormorant_Garamond',serif] text-3xl lg:text-4xl font-semibold text-white leading-tight mb-4">
                  Understanding Your <span className="italic text-[#cae2f2]">Cataract Surgery</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  While you wait for our call, watch this short video to learn how modern cataract surgery works — the procedure, recovery, and what to expect on the day.
                </p>
              </div>

              {/* Right: YouTube Embed */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] border-2 border-white/10 aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/4Z9WVZddH9w?rel=0"
                  title="Cataract Surgery Explained"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full absolute inset-0"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
      </main>
      <Footer />
    </>
  );
}
