"use client";

import React, { useState } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useBookingModal } from '@/components/ui/BookingModalContext';

const faqs = [
  {
    q: 'Do you offer LASIK or vision correction surgeries?',
    a: 'Yes. Optimus states that it provides LASIK, PRK, and other refractive surgeries by certified refractive surgeons.'
  },
  {
    q: 'Which doctor can I consult for LASIK?',
    a: 'You can consult Dr. Arvind Verma, listed on the website as Senior Cataract and Refractive Surgeon.'
  },
  {
    q: 'How can I book an appointment?',
    a: 'You can call the hospital, visit the clinic in Arjunganj, or use the appointment and WhatsApp options available on the website.'
  },
];

export const FaqSection = () => {
  const { openModal } = useBookingModal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#ffffff]">
      <div className="container mx-auto px-6 md:px-16 grid lg:grid-cols-[1fr_1.3fr] gap-16 items-start w-full">

        {/* Left */}
        <FadeIn>
          <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.15em] text-[#0c5d69] uppercase mb-6">
            <span className="w-8 h-0.5 bg-[#0c5d69]" /> LASIK & Refractive FAQs
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-bold text-[#0c5d69] mb-6">
            Questions <span className="italic text-[#13a2b7]">Patients Ask</span>
          </h2>
          <p className="text-[#0c5d69]/65 text-base font-light leading-relaxed mb-8">
            We know surgery can feel daunting. These are the most common questions our patients ask — answered honestly and clearly.
          </p>
          <button
            onClick={openModal}
            className="inline-flex items-center justify-center gap-2 bg-[#13a2b7] hover:bg-[#0f8fa1] text-white px-8 py-3.5 rounded-xl text-sm font-medium transition-all transform hover:-translate-y-1 group"
          >
            Ask Us Anything <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Trust note */}
          <div className="mt-8 p-5 bg-[#f0f8ff] rounded-2xl border border-[#cae2f2]">
            <p className="text-[#0c5d69] text-sm font-medium mb-1">Pre-LASIK Consultation</p>
            <p className="text-[#0c5d69]/65 text-xs leading-relaxed">
              Still unsure? Call us at <a href="tel:+919919965200" className="text-[#13a2b7] font-semibold hover:underline">+91 99199 65200</a> — our team is happy to walk you through every step before you make any decision.
            </p>
          </div>
        </FadeIn>

        {/* Right: Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div className={`border rounded-xl overflow-hidden transition-all duration-300 ${openFaq === i
                  ? 'bg-white border-[#cae2f2]'
                  : 'bg-white border-[#cae2f2] hover:border-[#0c5d69]/30'
                }`}>
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                >
                  <span className="font-bold text-[#0c5d69] pr-4 text-base leading-snug">{faq.q}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openFaq === i ? 'bg-[#13a2b7] text-white rotate-180' : 'bg-[#f0f8ff] text-[#0c5d69]'
                    }`}>
                    <ChevronDown size={16} />
                  </div>
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-56 pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0'
                  }`}>
                  <p className="text-[#0c5d69]/90 text-base leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
