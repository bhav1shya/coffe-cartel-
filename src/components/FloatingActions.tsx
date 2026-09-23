import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cafeData';

interface FloatingActionsProps {
  onReserveClick: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onReserveClick }) => {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center space-x-2 sm:hidden">
      {/* Click to Call */}
      <a
        href={`tel:${BUSINESS_INFO.phoneRaw}`}
        className="w-11 h-11 rounded-full bg-[#1b120c] border border-[#C5A059]/40 text-[#DFC287] shadow-xl flex items-center justify-center active:scale-95 transition-transform"
        aria-label="Call The Coffee Cartel"
      >
        <Phone className="w-4 h-4" />
      </a>

      {/* Quick Reserve CTA */}
      <button
        onClick={onReserveClick}
        className="px-4 py-2.5 rounded-full bg-[#C5A059] text-[#0f0a07] font-semibold text-xs tracking-wider uppercase shadow-xl flex items-center space-x-1.5 active:scale-95 transition-transform cursor-pointer"
        aria-label="Reserve a Table"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Reserve</span>
      </button>
    </div>
  );
};
