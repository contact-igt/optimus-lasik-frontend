import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen lg:h-auto pt-36 pb-10 lg:pt-40 lg:pb-15 bg-[#0c5d69] overflow-hidden flex items-center">

      {/* Exact Grid Pattern Background */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          backgroundPosition: 'center center'
        }}
      ></div>

      {/* Subtle vignette masking for grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_30%,#0c5d69_90%)]"></div>

      <div className="container mx-auto px-6 md:px-16 grid lg:grid-cols-2 gap-12 relative z-10">

        {/* Left Column Content */}
        <div className="flex flex-col justify-center relative">
          <FadeIn delay={100}>
            <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/10 text-[#cae2f2] px-4 py-1.5 rounded-full text-[10px] font-semibold tracking-widest uppercase mb-5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0c5d69] shadow-[0_0_8px_#0c5d69]"></span>
              ADVANCED LASIK VISION CORRECTION CENTRE
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="font-['Cormorant_Garamond',serif] text-5xl lg:text-[3.8rem] xl:text-[4.5rem] font-medium text-white leading-[1.1] mb-4 tracking-tight">
              Freedom from <br />
              Glasses and <br />
              <span className="font-['Cormorant_Garamond',serif] italic font-normal text-[#cae2f2]">
                Blur.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-base text-white/60 max-w-[420px] mb-5 font-light leading-relaxed">
              LASIK is a safe and effective vision correction procedure for people with <strong className="text-white font-medium">Myopia, Hyperopia, and Astigmatism</strong>. We restore visual freedom through precise laser treatment — <strong className="text-white font-medium">Fast, Comfortable, and Long-lasting</strong>.
            </p>
          </FadeIn>

          <FadeIn delay={400} className="flex flex-col sm:flex-row items-center gap-5 mb-6">
            <a href="#book" className="w-full sm:w-auto text-center bg-[#cae2f2]/20 hover:bg-[#cae2f2]/30 border border-[#cae2f2]/40 text-white px-8 py-3.5 rounded-xl text-sm font-medium transition-all shadow-[0_0_20px_rgba(123,172,196,0.1)] backdrop-blur-md">
              Book Consultation
            </a>
            <a href="#about" className="w-full sm:w-auto text-center text-white/60 text-sm font-medium hover:text-white transition-colors flex items-center justify-center gap-1 group">
              Learn about LASIK <ArrowRight size={14} className="ml-1 opacity-70 group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>

          <FadeIn delay={500}>
            <div className="flex flex-wrap sm:flex-nowrap gap-3 md:gap-4">
              {[
                { val: '98', unit: '%', label: 'Success Rate' },
                { val: '20', unit: 'k+', label: 'Eyes Restored' },
                { val: '15', unit: 'min', label: 'Procedure' }
              ].map((stat, i) => (
                <div key={i} className="relative bg-white/[0.06] border border-white/[0.10] rounded-2xl p-5 flex-1 min-w-[110px] backdrop-blur-sm">
                  <div className="font-['Cormorant_Garamond',serif] text-3xl font-bold text-white leading-none mb-1.5 tracking-tight">
                    {stat.val}<span className="font-['Outfit',sans-serif] text-sm font-semibold text-[#cae2f2] ml-0.5">{stat.unit}</span>
                  </div>
                  <div className="text-[11px] text-white/50 tracking-wider font-medium uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Exactly Recreated 3D Eye & Rings */}
        <div className="hidden lg:flex items-center justify-center relative w-full h-[420px] xl:h-[520px]">
          <FadeIn delay={400} className="relative w-full h-full flex items-center justify-center">

            {/* Concentric Rings */}
            <div className="absolute w-[460px] h-[460px] rounded-full border border-white/5 pointer-events-none"></div>
            <div className="absolute w-[340px] h-[340px] rounded-full border border-white/10 pointer-events-none"></div>
            <div className="absolute w-[220px] h-[220px] rounded-full border border-white/10 pointer-events-none"></div>

            {/* Central 3D Eye Globe */}
            <div className="relative z-10 w-44 h-44 rounded-full flex items-center justify-center border border-[#0c5d69]/30 shadow-[0_0_80px_rgba(91,143,168,0.3),inset_0_-20px_50px_rgba(0,0,0,0.6)]"
              style={{ background: 'radial-gradient(circle at 40% 40%, #cae2f2 0%, #0c5d69 40%, #0c5d69 80%, #0c5d69 100%)' }}>

              {/* Pupil */}
              <div className="w-14 h-14 rounded-full relative shadow-[inset_0_0_15px_rgba(0,0,0,0.9)]"
                style={{ background: 'radial-gradient(circle at 35% 35%, #0c5d69 0%, #0c5d69 80%)' }}>
                {/* Specular Highlight */}
                <div className="absolute top-2 left-3 w-[14px] h-[14px] bg-white rounded-full opacity-80 blur-[0.5px]"></div>
              </div>
            </div>

            {/* Floating Info Chips */}
            <div className="absolute top-[18%] left-[8%] z-20 bg-[#0c5d69]/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl flex flex-col items-start min-w-[120px]">
              <span className="text-[9px] text-white/40 uppercase tracking-widest font-semibold mb-0.5">Technology</span>
              <span className="text-[13px] text-white font-medium">Excimer Laser</span>
            </div>

            <div className="absolute top-[22%] right-[2%] z-20 bg-[#0c5d69]/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl flex flex-col items-start min-w-[120px]">
              <span className="text-[9px] text-white/40 uppercase tracking-widest font-semibold mb-0.5">Procedure</span>
              <span className="text-[13px] text-white font-medium">Custom LASIK</span>
            </div>

            <div className="absolute bottom-[25%] left-[6%] z-20 bg-[#0c5d69]/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl flex flex-col items-start min-w-[120px]">
              <span className="text-[9px] text-white/40 uppercase tracking-widest font-semibold mb-0.5">Recovery</span>
              <span className="text-[13px] text-white font-medium">24–48 hrs</span>
            </div>

            <div className="absolute bottom-[28%] right-[8%] z-20 bg-[#0c5d69]/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl flex flex-col items-start min-w-[120px]">
              <span className="text-[9px] text-white/40 uppercase tracking-widest font-semibold mb-0.5">Experience</span>
              <span className="text-[13px] text-white font-medium">Minimal Discomfort</span>
            </div>

          </FadeIn>
        </div>
      </div>
    </section>
  );
};
