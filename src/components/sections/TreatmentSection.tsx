import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { ArrowRight } from 'lucide-react';

export const TreatmentSection = () => {
  return (
    <section id="treatment" className="py-20 lg:py-28 relative overflow-hidden bg-white">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#cae2f2] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#0c5d69] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-6 md:px-16 w-full">
        <FadeIn className="text-center max-w-2xl mx-auto mb-20 relative z-10">
          <div className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.15em] text-[#0c5d69] uppercase mb-4">
            <span className="w-8 h-0.5 bg-[#0c5d69]"></span> Treatment Journey <span className="w-8 h-0.5 bg-[#0c5d69]"></span>
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-bold text-[#0c5d69] mb-6">
            Your Journey to Clearer Vision
          </h2>
          <p className="text-[#0c5d69] text-lg font-light leading-relaxed">
            From consultation to recovery, every step of the LASIK process is designed for precision, comfort, and faster visual freedom.
          </p>
        </FadeIn>

        <div className="relative">
          <div className="hidden md:block absolute top-[3rem] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-[#cae2f2] to-transparent z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 relative z-10">
            {[
              { step: 1, title: 'Eye Assessment', desc: 'Comprehensive evaluation to determine your LASIK candidacy and eye health.' },
              { step: 2, title: 'Treatment Planning', desc: 'Personalised planning based on your unique vision profile and lifestyle needs.' },
              { step: 3, title: 'LASIK Procedure', desc: 'Laser vision correction that is quick, painless, and highly precise.' },
              { step: 4, title: 'Clearer Vision', desc: 'Rapid recovery allowing you to experience visual freedom within 24 hours.' }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 150} className="text-center group">
                <div className="w-24 h-24 mx-auto bg-white rounded-full border-[3px] border-[#cae2f2] group-hover:border-[#0c5d69] flex items-center justify-center font-['Cormorant_Garamond',serif] text-4xl font-bold text-[#0c5d69] shadow-lg group-hover:shadow-[0_0_25px_rgba(91,143,168,0.3)] transition-all group-hover:scale-110 mb-6 group-hover:bg-[#0c5d69] group-hover:text-white relative">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-[#0c5d69] mb-3">{item.title}</h3>
                <p className="text-sm text-[#0c5d69] leading-relaxed px-4">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn className="text-center mt-16 relative z-10">
          <a href="#book" className="inline-flex items-center justify-center gap-2 bg-[#13a2b7] hover:bg-[#0f8fa1] text-white px-8 py-3.5 rounded-xl text-sm font-medium transition-all shadow-[0_4px_20px_rgba(19,162,183,0.3)] transform hover:-translate-y-1 group">
            Start Your Journey <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
};
