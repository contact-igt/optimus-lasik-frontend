"use client";

import React, { useState } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Phone, CheckCircle2, User, ArrowRight, Loader2, Shield, Star, Clock } from 'lucide-react';
import { useFormik } from 'formik';
import { z } from 'zod';

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
  const [submitted, setSubmitted] = useState(false);
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
          'https://script.google.com/macros/s/AKfycbzA_WXDX3b4iWocfje_nGNH-eV4eBjvj26FkXivO3fYuHZWgkizo--tKf00-aCYg1OE/exec',
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
    <section id="book" className="relative py-20 lg:py-28 bg-[#0c5d69] overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#cae2f2] opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#cae2f2] opacity-10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 md:px-16 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left — Content */}
          <FadeIn>
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-[#cae2f2] text-xs font-semibold tracking-widest uppercase mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#13a2b7]"></span>
                   Consultation
                </div>
                <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                  Ready to See the<br />
                  <span className="italic font-medium text-[#cae2f2]">World Clearly?</span>
                </h2>
                <p className="text-white/70 text-lg font-light leading-relaxed">
                  Book your LASIK consultation today. Get expert guidance, a detailed eye assessment, and a personalised recommendation based on your vision goals and eye health.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: <CheckCircle2 size={18} />, text: 'Comprehensive LASIK eligibility screening' },
                  { icon: <Clock size={18} />, text: 'Detailed eye assessment and consultation' },
                  { icon: <Shield size={18} />, text: 'Quick procedure with minimal downtime' },
                  { icon: <Star size={18} />, text: 'Advanced laser vision correction technology' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/80">
                    <span className="text-[#13a2b7] flex-shrink-0">{item.icon}</span>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a href="tel:+919999999999" className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-xl text-sm font-medium transition-all">
                  <Phone size={16} /> Call Us Now
                </a>
                <p className="text-white/40 text-xs">Mon – Sat · 9am – 6pm</p>
              </div>
            </div>
          </FadeIn>

          {/* Right — Booking Form */}
          <FadeIn delay={200}>
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.3)]">
              <div className="mb-8">
                <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold text-[#0c5d69] mb-2">
                  Book Your Screening
                </h3>
                <p className="text-[#0c5d69]/60 text-sm">Fill in your details and our team will call you within 2 hours.</p>
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
                      className={`w-full pl-11 pr-4 py-3.5 rounded-xl border text-[#0c5d69] text-sm placeholder:text-[#0c5d69]/30 focus:outline-none focus:ring-2 focus:ring-[#13a2b7]/40 transition-all ${
                        formik.touched.name && formik.errors.name
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
                      <span className="w-px h-4 bg-[#cae2f2] mx-1"></span>
                    </div>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="10-digit number"
                      maxLength={10}
                      value={formik.values.mobile}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full pl-24 pr-4 py-3.5 rounded-xl border text-[#0c5d69] text-sm placeholder:text-[#0c5d69]/30 focus:outline-none focus:ring-2 focus:ring-[#13a2b7]/40 transition-all ${
                        formik.touched.mobile && formik.errors.mobile
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
                  className="w-full flex items-center justify-center gap-2 bg-[#13a2b7] hover:bg-[#0f8fa1] disabled:opacity-70 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold text-sm transition-all shadow-[0_4px_20px_rgba(19,162,183,0.35)] hover:-translate-y-0.5 mt-2"
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
  );
};
