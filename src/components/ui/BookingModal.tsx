"use client";

import React, { useState, useEffect } from 'react';
import { X, CalendarDays, CheckCircle2 } from 'lucide-react';
import { useBookingModal } from './BookingModalContext';
import { BookingForm } from './BookingForm';

export const BookingModal = () => {
  const { isOpen, closeModal } = useBookingModal();

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Book a Consultation"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#0c5d69]/80 backdrop-blur-sm"
        onClick={closeModal}
        aria-hidden="true"
      />

      {/* Modal Box */}
      <div className="relative bg-white rounded-[2rem] w-full max-w-md overflow-hidden shadow-2xl shadow-[#0c5d69]/20 border border-[#cae2f2]/50 animate-in fade-in zoom-in-95 duration-400">

        {/* Close Button */}
        <button
          onClick={closeModal}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white/80 hover:text-white rounded-full transition-all z-20 hover:scale-105 hover:rotate-90 backdrop-blur-sm"
        >
          <X size={18} />
        </button>

        {/* Premium Solid Header */}
        <div className="relative bg-[#0c5d69] px-8 py-10 overflow-hidden">
          {/* Subtle Grid Pattern for texture */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs><pattern id="modal-solid-grid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M 24 0 L 0 0 0 24" fill="none" stroke="white" strokeWidth="1" /></pattern></defs><rect width="100%" height="100%" fill="url(#modal-solid-grid)" />
            </svg>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex flex-shrink-0 items-center justify-center">
                <CalendarDays size={22} className="text-white" />
              </div>
              <h3 className="font-['Cormorant_Garamond',serif] text-[2.1rem] leading-tight font-bold text-white tracking-tight">
                Book a <span className="italic text-[#cae2f2] font-semibold">Consultation</span>
              </h3>
            </div>
            <p className="text-white/80 text-[14px] font-medium tracking-wide mt-1">
              Leave your details and our care team will contact you shortly.
            </p>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-8 bg-white">
          <BookingForm onSuccess={closeModal} />

          {/* Footer Assurances */}
          <div className="mt-7 flex items-center justify-center gap-2">
            <div className="h-px w-full bg-[#cae2f2]/60" />
            <p className="flex-shrink-0 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0c5d69]/50 flex items-center gap-1.5 px-3">
              <CheckCircle2 size={13} className="text-[#13a2b7]" /> Secure &amp; Private
            </p>
            <div className="h-px w-full bg-[#cae2f2]/60" />
          </div>
        </div>
      </div>
    </div>
  );
};
