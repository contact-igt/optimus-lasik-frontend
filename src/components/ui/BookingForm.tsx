"use client";

import React, { useState } from 'react';
import { User, ArrowRight, Loader2 } from 'lucide-react';
import { useFormik } from 'formik';
import { z } from 'zod';

const bookingSchema = z.object({
  name: z.string()
    .min(1, "Name is required")
    .regex(/^[A-Za-z\s']+$/, "Enter valid name"),
  mobile: z.string()
    .min(1, "Mobile is required")
    .regex(/^[0-9]{10}$/, "Mobile must be 10 digits"),
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

interface BookingFormProps {
  onSuccess?: () => void;
  buttonText?: string;
  className?: string;
  buttonColor?: string;
}

export const BookingForm = ({ onSuccess, buttonText = "Book Consultation", className = "", buttonColor="#0c5d69" }: BookingFormProps) => {
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
          'https://script.google.com/macros/s/AKfycbyYpCzMyNh0kkRllc06ctF3uBl5a8wRFsEe6u-GO78GgJtd-igdu87nca7SxWMQPFQp/exec',
          {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: params.toString(),
          }
        );

        resetForm();
        if (onSuccess) onSuccess();
        if (typeof window !== 'undefined') window.location.href = '/thank-you';
      } catch (err) {
        console.error('Error submitting form:', err);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={`space-y-6 ${className}`} noValidate>
      {/* Name */}
      <div className="space-y-2 group/input">
        <label htmlFor="modal-name" className="text-[#0c5d69] text-[12px] font-bold uppercase tracking-widest block text-left">
          Full Name
        </label>
        <div className="relative rounded-xl transition-shadow group-focus-within/input:shadow-md group-focus-within/input:shadow-[#cae2f2]/30">
          <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${formik.touched.name && formik.errors.name ? 'text-red-500' : 'text-[#0c5d69]/50 group-focus-within/input:text-[#13a2b7]'}`}>
            <User size={18} />
          </div>
          <input
            type="text"
            id="modal-name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="e.g. Ramesh Sharma"
            className={`w-full pl-11 pr-4 py-3.5 bg-white border rounded-xl focus:outline-none transition-all text-left ${formik.touched.name && formik.errors.name
                ? 'border-red-500 ring-2 ring-red-500/20 text-[#0c5d69]'
                : 'border-[#cae2f2] focus:border-[#13a2b7] focus:ring-4 focus:ring-[#13a2b7]/10 text-[#0c5d69] hover:border-[#13a2b7]/40'
              }`}
          />
        </div>
        {formik.touched.name && formik.errors.name && (
          <p className="text-red-500 text-[12px] font-medium tracking-wide text-left">{formik.errors.name}</p>
        )}
      </div>

      {/* Mobile (Enhanced) */}
      <div className="space-y-2 group/input">
        <label htmlFor="modal-mobile" className="text-[#0c5d69] text-[12px] font-bold uppercase tracking-widest block text-left">
          Phone Number
        </label>
        <div className="relative rounded-xl transition-shadow group-focus-within/input:shadow-md group-focus-within/input:shadow-[#cae2f2]/30">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <span className="text-base">🇮🇳</span>
            <span className="text-[#0c5d69]/60 text-sm font-semibold">+91</span>
            <span className="w-[1.5px] h-4 bg-[#cae2f2] mx-1 rounded-full" />
          </div>
          <input
            type="tel"
            id="modal-mobile"
            name="mobile"
            maxLength={10}
            value={formik.values.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="10-digit number"
            className={`w-full pl-[5.5rem] pr-4 py-3.5 bg-white border rounded-xl focus:outline-none transition-all text-left ${formik.touched.mobile && formik.errors.mobile
                ? 'border-red-500 ring-2 ring-red-500/20 text-[#0c5d69]'
                : 'border-[#cae2f2] focus:border-[#13a2b7] focus:ring-4 focus:ring-[#13a2b7]/10 text-[#0c5d69] hover:border-[#13a2b7]/40'
              }`}
          />
        </div>
        {formik.touched.mobile && formik.errors.mobile && (
          <p className="text-red-500 text-[12px] font-medium tracking-wide text-left">{formik.errors.mobile}</p>
        )}
      </div>

      <div className="pt-3">
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-[${buttonColor}] hover:bg-[${buttonColor}] disabled:opacity-70 disabled:cursor-not-allowed text-white px-6 py-4 rounded-xl text-[15px] font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[${buttonColor}]/20 flex items-center justify-center gap-2.5 group hover:-translate-y-0.5`}
        >
          {isLoading ? (
            <><Loader2 size={18} className="animate-spin" /> Processing...</>
          ) : (
            <>{buttonText} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
          )}
        </button>
      </div>
    </form>
  );
};
