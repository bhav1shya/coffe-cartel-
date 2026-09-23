import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/cafeData';

export const GallerySection: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const showNext = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) =>
        prev === null ? 0 : (prev + 1) % GALLERY_ITEMS.length
      );
    }
  }, [activeLightboxIndex]);

  const showPrev = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) =>
        prev === null
          ? 0
          : (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
      );
    }
  }, [activeLightboxIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, showNext, showPrev]);

  return (
    <section id="gallery" className="relative bg-[#0f0a07] py-20 lg:py-28 border-t border-[#C5A059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase">
            VISUAL CHRONICLES
          </span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#FAF7F2] tracking-tight text-balance">
            Moments at The Coffee Cartel
          </h2>
          <p className="mt-4 text-sm text-[#C8B69E] font-light">
            A curated snapshot of our craft, evening conversations, and cozy spaces in Bajaj Nagar.
          </p>
        </div>

        {/* Masonry / Editorial Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY_ITEMS.map((item, index) => {
            // Apply varied heights for an editorial feel
            const isTall = index === 0 || index === 3;
            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-sm overflow-hidden bg-[#1b120c] border border-[#C5A059]/20 hover:border-[#C5A059]/60 cursor-pointer transition-all duration-500 ${
                  isTall ? 'sm:col-span-2 h-[340px] sm:h-[400px]' : 'col-span-1 h-[280px] sm:h-[400px]'
                }`}
              >
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 brightness-[0.8] group-hover:brightness-[0.65]"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a07] via-[#0f0a07]/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Corner Expand Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0f0a07]/70 border border-[#C5A059]/40 flex items-center justify-center text-[#DFC287] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Title & Category Info */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#C5A059]">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-[#FAF7F2] font-medium mt-0.5 line-clamp-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#0f0a07]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-[#221811] text-[#E6DDD0] hover:text-[#FAF7F2] border border-[#C5A059]/30 hover:border-[#C5A059] transition-colors z-20 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={showPrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#221811]/90 text-[#DFC287] hover:bg-[#C5A059] hover:text-[#0f0a07] border border-[#C5A059]/30 transition-all z-20 cursor-pointer shadow-xl"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Main Display Image & Caption */}
          <div className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center">
            <div className="relative overflow-hidden rounded-sm border border-[#C5A059]/30 bg-[#1b120c] shadow-2xl max-h-[75vh]">
              <img
                src={GALLERY_ITEMS[activeLightboxIndex].src}
                alt={GALLERY_ITEMS[activeLightboxIndex].title}
                className="w-auto h-auto max-h-[75vh] max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="mt-4 text-center">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium">
                {GALLERY_ITEMS[activeLightboxIndex].category}
              </span>
              <h4 className="font-serif text-2xl text-[#FAF7F2] mt-1 font-normal">
                {GALLERY_ITEMS[activeLightboxIndex].title}
              </h4>
              <p className="text-xs text-[#C8B69E] mt-1">
                Image {activeLightboxIndex + 1} of {GALLERY_ITEMS.length}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={showNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#221811]/90 text-[#DFC287] hover:bg-[#C5A059] hover:text-[#0f0a07] border border-[#C5A059]/30 transition-all z-20 cursor-pointer shadow-xl"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
