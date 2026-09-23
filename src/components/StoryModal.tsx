import React from 'react';
import { X, Coffee, Clock, Heart, Sparkles, MapPin } from 'lucide-react';
import { IMAGES, BUSINESS_INFO } from '../data/cafeData';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReserveClick: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({
  isOpen,
  onClose,
  onReserveClick,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0f0a07]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-3xl bg-[#1b120c] border border-[#C5A059]/30 rounded-sm overflow-hidden shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#0f0a07]/80 text-[#E6DDD0] hover:text-[#FAF7F2] border border-[#C5A059]/30 hover:border-[#C5A059] transition-colors z-20 cursor-pointer"
          aria-label="Close story"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Cinematic Image Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={IMAGES.aboutInterior}
            alt="The Coffee Cartel Craft Story"
            className="w-full h-full object-cover object-center brightness-[0.75]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b120c] via-transparent to-black/40" />

          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase">
              OUR JOURNEY & PHILOSOPHY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF7F2] font-normal mt-1">
              More Than Just Coffee.
            </h2>
            <p className="text-xs text-[#C8B69E] mt-1 flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Bajaj Nagar, Jaipur, Rajasthan</span>
            </p>
          </div>
        </div>

        {/* Story Body */}
        <div className="p-6 sm:p-10 space-y-6">
          <div className="prose prose-invert max-w-none text-[#E6DDD0] text-sm sm:text-base font-light leading-relaxed space-y-4">
            <p>
              In the historic and culturally vibrant city of Jaipur, <strong className="text-[#FAF7F2] font-medium">The Coffee Cartel</strong> was born from a singular passion: creating a sanctuary where specialty coffee craftsmanship meets authentic human warmth.
            </p>
            <p>
              We believe a cafe is neither just a beverage counter nor a transactional desk. It is Jaipur's communal living room — a space where thinkers, creators, lovers, and night owls gather under ambient amber lighting to share conversations that matter.
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#C5A059]/15">
            <div className="p-4 bg-[#221811] rounded-sm border border-[#C5A059]/20">
              <Coffee className="w-5 h-5 text-[#C5A059] mb-2" />
              <h4 className="font-serif text-base text-[#FAF7F2] font-medium">Estate Beans</h4>
              <p className="text-xs text-[#C8B69E] mt-1">
                Hand-selected shade-grown Arabicas roasted to unlock delicate origin notes.
              </p>
            </div>

            <div className="p-4 bg-[#221811] rounded-sm border border-[#C5A059]/20">
              <Clock className="w-5 h-5 text-[#C5A059] mb-2" />
              <h4 className="font-serif text-base text-[#FAF7F2] font-medium">Open Till 1 AM</h4>
              <p className="text-xs text-[#C8B69E] mt-1">
                A haven for Jaipur’s evening coffee culture, late sweet tooth cravings, and calm night reads.
              </p>
            </div>

            <div className="p-4 bg-[#221811] rounded-sm border border-[#C5A059]/20">
              <Heart className="w-5 h-5 text-[#C5A059] mb-2" />
              <h4 className="font-serif text-base text-[#FAF7F2] font-medium">Good People</h4>
              <p className="text-xs text-[#C8B69E] mt-1">
                Hospitality that remembers your usual brew, served with genuine smiles and care.
              </p>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-[#C5A059]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#C8B69E]">
              <span>Experience it yourself at </span>
              <strong className="text-[#FAF7F2]">Vivek Vihar Rd, Bajaj Nagar</strong>
            </div>

            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onReserveClick();
                }}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold tracking-wider text-[#0f0a07] uppercase bg-[#C5A059] hover:bg-[#DFC287] rounded-sm transition-colors cursor-pointer"
              >
                Reserve a Table
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
