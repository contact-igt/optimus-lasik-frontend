import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Eye, Sun, Droplets, Activity, ArrowRight, ShieldAlert } from 'lucide-react';
import Image from 'next/image';

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-14 lg:py-16 bg-[#ffffff] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-gradient-to-br from-[#ffffff] to-transparent rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-[#cae2f2] to-transparent rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left Side: Typography and Symptoms */}
          <FadeIn className="order-2 lg:order-1">
            <div className="space-y-4">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0c5d69]/30 bg-[#0c5d69]/5 text-[#0c5d69] text-xs font-semibold tracking-widest uppercase mb-3">
                  <Eye size={14} /> UNDERSTANDING LASIK
                </div>
                <h2 className="font-['Cormorant_Garamond',serif] text-4xl lg:text-5xl font-semibold text-[#0c5d69] leading-tight mb-3">
                  What exactly is <br /><span className="text-[#0c5d69] italic font-medium">LASIK?</span>
                </h2>
                <p className="text-[#0c5d69] text-base leading-relaxed font-light">
                  LASIK is a laser vision correction procedure that reshapes the cornea to improve how light focuses on the retina. It is commonly used to treat myopia, hyperopia, and astigmatism, helping patients achieve clearer vision with reduced dependence on glasses or contact lenses.
                </p>
              </div>

              {/* Symptoms Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {[
                  { icon: <Eye size={20} />, title: "Precise Correction", desc: "Reshapes the cornea with laser accuracy." },
                  { icon: <Sun size={20} />, title: "Quick Procedure", desc: "Usually completed in minutes per eye." },
                  { icon: <Droplets size={20} />, title: "Fast Recovery", desc: "Most patients recover quickly within 24–48 hours." },
                  { icon: <Activity size={20} />, title: "Reduced Dependence", desc: "Helps minimize the need for glasses or contacts." }
                ].map((sym, i) => (
                  <div key={i} className="group bg-white p-4 rounded-2xl border border-[#cae2f2] hover:border-[#0c5d69]/30 hover:shadow-lg transition-all duration-300">
                    <div className="w-8 h-8 rounded-xl bg-[#f0f8ff] text-[#0c5d69] group-hover:bg-[#0c5d69] group-hover:text-white flex items-center justify-center mb-2 transition-colors">
                      {sym.icon}
                    </div>
                    <h4 className="text-[#0c5d69] font-semibold text-sm mb-1">{sym.title}</h4>
                    <p className="text-[#0c5d69] text-xs leading-relaxed">{sym.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a href="#book" className="inline-flex items-center gap-3 bg-[#13a2b7] hover:bg-[#0f8fa1] text-white px-6 py-3 rounded-xl text-sm font-medium transition-all shadow-md hover:shadow-xl transform hover:-translate-y-1 group">
                  Book Consultation <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </div>
          </FadeIn>


          {/* Right Side: Visual widgets */}
          <FadeIn delay={200} className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Dark Card */}
              <div className="bg-[#0c5d69] z-[99] rounded-[2rem] p-6 sm:p-8 shadow-[0_20px_50px_rgba(32,58,71,0.2)] relative overflow-hidden backdrop-blur-lg border border-white/5">

                {/* Decorative Elements inside card */}
                <div className="absolute -top-32 -right-32 w-72 h-72 bg-[#0c5d69] opacity-20 rounded-full blur-[80px]"></div>
                <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-[#cae2f2] opacity-10 rounded-full blur-[80px]"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-[#0c5d69] flex items-center justify-center border border-white/10">
                      <ShieldAlert className="text-[#cae2f2]" size={18} />
                    </div>
                    <h3 className="text-white text-xl font-['Cormorant_Garamond',serif] font-medium tracking-wide">How LASIK Works</h3>
                  </div>

                  {/* Lens Visual Presentation */}
                  <div className="bg-white rounded-[1.5rem] p-3 mb-5 shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-[#0c5d69]/30 relative group w-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-[#ffffff] rounded-[2rem]"></div>
                    <div className="relative z-10 w-full flex items-center justify-center rounded-[1rem] overflow-hidden bg-white shadow-inner max-h-[250px]">
                      <Image
                        src="/assets/Lasik_image.png"
                        alt="Cataract Eye Structure"
                        width={500}
                        height={500}
                        className="w-full h-auto object-cover object-center transform transition-transform duration-700 group-hover:scale-[1.03] mix-blend-multiply max-h-[250px]"
                      />
                    </div>
                  </div>

                  {/* Risk Factors */}
                  <div>
                    <h4 className="text-[#cae2f2] text-[11px] font-medium mb-5 uppercase tracking-[0.15em]">COMMONLY TREATS</h4>
                    <div className="flex flex-wrap gap-2.5">
                      {['Myopia', 'Hyperopia', 'Astigmatism', 'Blurred Vision', 'Glasses Dependence', 'Contact Lens Intolerance'].map((factor) => (
                        <div key={factor} className="bg-[#0c5d69]/50 hover:bg-[#0c5d69]/30 border border-white/5 text-[#ffffff] text-xs px-4 py-2.5 rounded-full transition-all duration-300 cursor-default flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#cae2f2]"></div>
                          {factor}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating element behind text */}
              <div className="hidden lg:block absolute -bottom-10 -left-10 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiM1QjhGQTgiIG9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==')] pointer-events-none"></div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};
