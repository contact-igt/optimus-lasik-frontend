"use client";

import React, { createContext, useContext, useState, useCallback } from 'react';

interface BookingModalContextType {
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
}

const BookingModalContext = createContext<BookingModalContextType>({
  openModal: () => {},
  closeModal: () => {},
  isOpen: false,
});

export const useBookingModal = () => useContext(BookingModalContext);

export const BookingModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <BookingModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
    </BookingModalContext.Provider>
  );
};
