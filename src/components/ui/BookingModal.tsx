"use client";

import React, { useState, useEffect } from 'react';
import { X, User, Phone, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { useFormik } from 'formik';
import { z } from 'zod';

// Zod Validation Schema equivalent to Yup in the user request
const bookingSchema = z.object({
  name: z.string()
    .min(1, "Name is required")
    .regex(/^[A-Za-z\s']+$/, "Enter valid name"),
  mobile: z.string()
    .min(1, "Mobile is required")
    .regex(/^[0-9]{10}$/, "Mobile must be 10 digits"),
});

// Custom validation function for Formik using Zod
const validateWithZod = (values: any) => {
  const result = bookingSchema.safeParse(values);
  if (result.success) return {};
  
  const errors: Record<string, string> = {};
  result.error.issues.forEach((issue) => {
    if (issue.path[0]) {
      errors[issue.path[0] as string] = issue.message;
    }
  });
  return errors;
};

export const BookingModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  // Listen for clicks on elements with href="#book"
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.getAttribute('href') === '#book' || link && link.getAttribute('href') === '#consultation') {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
    },
    validate: validateWithZod,
    onSubmit: async (value, { resetForm }) => {
      try {
        setisLoading(true);

        // Fetch user IP
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipResponse.json();

        const Formdata = {
          Name: value.name,
          MobileNumber: value.mobile,
          IP_Address: ipData.ip,
          utm_source: typeof window !== 'undefined' ? localStorage.getItem("utm_source") || 'direct' : 'direct',
        };

        const params = new URLSearchParams();
        Object.entries(Formdata).forEach(([key, val]) => {
          params.append(key, val || '');
        });

        // Google Sheets Script Endpoint
        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbzA_WXDX3b4iWocfje_nGNH-eV4eBjvj26FkXivO3fYuHZWgkizo--tKf00-aCYg1OE/exec",
          {
            method: "POST",
            mode: 'no-cors', // Google Apps Script usually requires no-cors if not handling OPTIONS
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: params.toString(),
          }
        );

        // Reset and redirect
        resetForm();
        setIsOpen(false);
        
        if (typeof window !== 'undefined') {
          window.location.href = "/thank-you";
        }
      } catch (err) {
        console.error("Error submitting form:", err);
        setIsOpen(false);
      } finally {
        setisLoading(false);
      }
    },
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0c5d69]/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Modal Box */}
      <div className="relative bg-white rounded-3xl w-full max-w-md shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden border border-[#cae2f2] animate-in fade-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20"
        >
          <X size={20} />
        </button>

        {/* Header Area */}
        <div className="bg-[#0c5d69] px-8 py-8 border-b border-[#0c5d69]">
           <h3 className="font-['Cormorant_Garamond',serif] text-3xl font-semibold text-white mb-2">Book a <span className="text-[#cae2f2]">Consultation</span></h3>
           <p className="text-[#cae2f2] text-[13px] font-medium tracking-wide">Provide your details and we will callback shortly.</p>
        </div>

        {/* Form Area */}
        <div className="p-8">
          <form onSubmit={formik.handleSubmit} className="space-y-6" noValidate>
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-[#0c5d69] text-[13px] font-semibold uppercase tracking-wider w-full block">Full Name</label>
              <div className="relative">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${formik.touched.name && formik.errors.name ? 'text-red-500' : 'text-[#0c5d69]'}`}>
                  <User size={18} />
                </div>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full pl-11 pr-4 py-3.5 bg-white border rounded-xl focus:outline-none focus:ring-1 transition-all ${formik.touched.name && formik.errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500 text-[#0c5d69]' : 'border-[#cae2f2] focus:ring-[#0c5d69] focus:border-[#0c5d69] text-[#0c5d69] hover:border-[#cae2f2]'}`}
                  placeholder="e.g. John Doe"
                />
              </div>
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-[12px] font-medium tracking-wide animate-in slide-in-from-top-1">{formik.errors.name}</p>
              )}
            </div>

            {/* Mobile Field */}
            <div className="space-y-2">
              <label htmlFor="mobile" className="text-[#0c5d69] text-[13px] font-semibold uppercase tracking-wider w-full block">Phone Number</label>
              <div className="relative">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${formik.touched.mobile && formik.errors.mobile ? 'text-red-500' : 'text-[#0c5d69]'}`}>
                  <Phone size={18} />
                </div>
                <input 
                  type="tel" 
                  id="mobile" 
                  name="mobile"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full pl-11 pr-4 py-3.5 bg-white border rounded-xl focus:outline-none focus:ring-1 transition-all ${formik.touched.mobile && formik.errors.mobile ? 'border-red-500 focus:ring-red-500 focus:border-red-500 text-[#0c5d69]' : 'border-[#cae2f2] focus:ring-[#0c5d69] focus:border-[#0c5d69] text-[#0c5d69] hover:border-[#cae2f2]'}`}
                  placeholder="e.g. 98765 43210"
                />
              </div>
              {formik.touched.mobile && formik.errors.mobile && (
                <p className="text-red-500 text-[12px] font-medium tracking-wide animate-in slide-in-from-top-1">{formik.errors.mobile}</p>
              )}
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-[#0c5d69] hover:bg-[#4A7D97] disabled:opacity-70 disabled:cursor-not-allowed text-white px-6 py-4 rounded-xl text-[15px] font-semibold transition-colors duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-[#0c5d69]/20"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Book Consultation <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform"/>
                  </>
                )}
              </button>
            </div>
          </form>

          <p className="text-center text-[11px] font-medium uppercase tracking-widest text-[#0c5d69] mt-8 flex items-center justify-center gap-2">
            <CheckCircle2 size={14} className="text-[#cae2f2]" /> Secure & Private
          </p>
        </div>
      </div>
    </div>
  );
};
