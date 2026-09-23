import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, REVIEWS_DATA } from '../data/cafeData';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);
  };

  // Auto-slide effect with pause on hover
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        nextReview();
      }, 5500);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPaused]);

  return (
    <section id="reviews" className="relative bg-[#140d09] py-20 lg:py-28 border-t border-[#C5A059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Prominent Score Header */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-12 border-b border-[#C5A059]/20 gap-8">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase">
              COMMUNITY VOICES
            </span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#FAF7F2] tracking-tight">
              Loved by Jaipur’s Coffee Community
            </h2>
            <p className="mt-3 text-sm text-[#C8B69E] font-light max-w-xl">
              Authentic feedback from daily regulars and night owls enjoying our brews in Bajaj Nagar.
            </p>
          </div>

          {/* Prominent Rating Card */}
          <div className="bg-[#221811] border border-[#C5A059]/30 rounded-sm p-6 sm:p-7 flex items-center space-x-6 shrink-0 shadow-xl">
            <div className="text-center">
              <span className="font-serif text-5xl sm:text-6xl font-normal text-[#DFC287] tabular-nums block leading-none">
                4.7
              </span>
              <span className="text-[11px] text-[#C8B69E] tracking-wider uppercase block mt-1">
                OUT OF 5
              </span>
            </div>

            <div className="h-12 w-[1px] bg-[#C5A059]/25" />

            <div>
              <div className="flex text-[#C5A059] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm font-semibold text-[#FAF7F2] tabular-nums">
                798+ Reviews
              </p>
              <div className="flex items-center space-x-1 text-[11px] text-[#C5A059] mt-0.5">
                <CheckCircle2 className="w-3 h-3" />
                <span>Verified Google Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="mt-12 relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Quote Glyph Watermark */}
          <Quote className="w-16 h-16 text-[#C5A059]/10 absolute -top-8 -left-4 pointer-events-none" />

          {/* Active Review Card */}
          <div className="bg-[#1b120c] border border-[#C5A059]/25 rounded-sm p-8 sm:p-12 shadow-2xl relative">
            <div className="flex items-center justify-between mb-6">
              <div className="flex text-[#C5A059]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(REVIEWS_DATA[currentIndex].rating)
                        ? 'fill-current'
                        : 'text-[#C5A059]/40'
                    }`}
                  />
                ))}
              </div>

              <span className="text-xs text-[#C8B69E] bg-[#221811] px-2.5 py-1 rounded-sm border border-[#C5A059]/20">
                {REVIEWS_DATA[currentIndex].tag}
              </span>
            </div>

            {/* Review text */}
            <p className="font-serif text-xl sm:text-2xl text-[#FAF7F2] font-normal leading-relaxed italic">
              "{REVIEWS_DATA[currentIndex].text}"
            </p>

            <div className="mt-8 pt-6 border-t border-[#C5A059]/15 flex items-center justify-between">
              <div>
                <h4 className="font-serif text-lg font-medium text-[#DFC287]">
                  {REVIEWS_DATA[currentIndex].author}
                </h4>
                <p className="text-xs text-[#C8B69E] mt-0.5">
                  {REVIEWS_DATA[currentIndex].date}
                </p>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevReview}
                  className="w-10 h-10 rounded-sm bg-[#221811] border border-[#C5A059]/30 text-[#DFC287] hover:bg-[#C5A059] hover:text-[#0f0a07] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextReview}
                  className="w-10 h-10 rounded-sm bg-[#221811] border border-[#C5A059]/30 text-[#DFC287] hover:bg-[#C5A059] hover:text-[#0f0a07] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="mt-6 flex justify-center space-x-2">
            {REVIEWS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-[#C5A059]' : 'w-2 bg-[#291e16] hover:bg-[#C8B69E]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
