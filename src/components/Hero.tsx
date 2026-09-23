import React, { useEffect, useState } from 'react';
import { Star, Play, ChevronDown, Calendar, UtensilsCrossed, MapPin } from 'lucide-react';
import { BUSINESS_INFO, IMAGES } from '../data/cafeData';

interface HeroProps {
  onReserveClick: () => void;
  onExploreMenuClick: () => void;
  onWatchStoryClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onReserveClick,
  onExploreMenuClick,
  onWatchStoryClick,
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger sequence
    const timer = setTimeout(() => setIsLoaded(true), 50);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Subtle parallax transform
  const bgTransform = `translate3d(0, ${Math.min(scrollY * 0.18, 120)}px, 0) scale(${1 + Math.min(scrollY * 0.0003, 0.08)})`;

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0f0a07]"
    >
      {/* 1. Cinematic Background Image with slow fade-in & parallax */}
      <div
        className={`absolute inset-0 w-full h-[115%] -top-[5%] transition-opacity duration-1000 ease-out will-change-transform ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transform: bgTransform }}
      >
        <img
          src={IMAGES.heroNight}
          alt="The Coffee Cartel night ambience in Jaipur"
          className="w-full h-full object-cover object-center brightness-[0.78] contrast-[1.08]"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* 2. Measured Multi-Layer Dark Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-[#0f0a07] via-[#0f0a07]/60 to-[#0f0a07]/40 transition-opacity duration-1000 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div className="absolute inset-0 bg-cafe-noise pointer-events-none opacity-40" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex flex-col justify-between min-h-screen">
        <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-8 xl:col-span-8 flex flex-col items-start text-left">
            {/* 3. Small Label fades upward */}
            <div
              className={`transition-all duration-700 delay-200 ease-out ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase py-1">
                <span>GOOD COFFEE</span>
                <span className="text-[#C5A059]/60">·</span>
                <span>BETTER PEOPLE</span>
              </div>
            </div>

            {/* 4. Main Heading reveals line by line */}
            <h1 className="mt-4 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight text-[#FAF7F2] text-balance">
              <span
                className={`block transition-all duration-700 delay-300 ease-out ${
                  isLoaded
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
              >
                More Than Just
              </span>
              <span
                className={`block italic text-[#DFC287] transition-all duration-700 delay-500 ease-out ${
                  isLoaded
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
              >
                Coffee.
              </span>
            </h1>

            {/* 5. Supporting Text */}
            <p
              className={`mt-6 text-base sm:text-lg md:text-xl text-[#E6DDD0] font-light max-w-xl leading-relaxed transition-all duration-700 delay-700 ease-out ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              Great coffee, delicious food and good vibes in the heart of Jaipur.
            </p>

            {/* 6. Staggered CTA Buttons */}
            <div
              className={`mt-9 flex flex-wrap items-center gap-4 sm:gap-5 transition-all duration-700 delay-900 ease-out ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <button
                onClick={onReserveClick}
                className="px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-widest text-[#0f0a07] uppercase bg-[#C5A059] hover:bg-[#DFC287] active:scale-[0.98] transition-all duration-200 rounded-sm shadow-lg shadow-[#0f0a07]/50 flex items-center space-x-2.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table</span>
              </button>

              <button
                onClick={onExploreMenuClick}
                className="px-7 py-3.5 text-xs sm:text-sm font-medium tracking-widest text-[#FAF7F2] hover:text-[#DFC287] uppercase bg-[#221811]/70 hover:bg-[#291e16] border border-[#C5A059]/30 hover:border-[#C5A059]/60 active:scale-[0.98] transition-all duration-200 rounded-sm backdrop-blur-sm flex items-center space-x-2.5 cursor-pointer"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#C5A059]" />
                <span>Explore Menu</span>
              </button>
            </div>

            {/* 7. Rating Display & Location Marker (Appears last) */}
            <div
              className={`mt-10 sm:mt-12 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-[#E6DDD0] transition-all duration-700 delay-1000 ease-out ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-3'
              }`}
            >
              <div className="flex items-center space-x-2 bg-[#221811]/60 px-3.5 py-1.5 rounded-sm border border-[#C5A059]/20 backdrop-blur-sm">
                <div className="flex text-[#C5A059]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-[#FAF7F2] tabular-nums">4.7</span>
                <span className="text-[#C8B69E]">(798+ Reviews)</span>
              </div>

              <div className="flex items-center space-x-1.5 text-[#C8B69E]">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="tracking-wide">Jaipur, Rajasthan</span>
              </div>
            </div>
          </div>

          {/* Right Column: Circular "Watch Our Story" button */}
          <div className="lg:col-span-4 xl:col-span-4 flex justify-start lg:justify-end items-center">
            <button
              onClick={onWatchStoryClick}
              className={`group relative flex items-center justify-center cursor-pointer transition-all duration-1000 delay-1100 ease-out ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              aria-label="Watch Our Story"
            >
              {/* Outer rotating decorative ring */}
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border border-[#C5A059]/30 flex items-center justify-center p-2 group-hover:border-[#C5A059] transition-colors duration-500">
                <svg
                  className="w-full h-full animate-[spin_24s_linear_infinite]"
                  viewBox="0 0 100 100"
                >
                  <path
                    id="textPath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[8.5px] uppercase tracking-[0.24em] fill-[#C8B69E] font-medium group-hover:fill-[#DFC287] transition-colors">
                    <textPath href="#textPath" startOffset="0%">
                      · WATCH OUR STORY · THE COFFEE CARTEL
                    </textPath>
                  </text>
                </svg>

                {/* Inner Play Circle */}
                <div className="absolute inset-0 m-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#221811]/90 border border-[#C5A059]/40 flex items-center justify-center text-[#DFC287] group-hover:bg-[#C5A059] group-hover:text-[#0f0a07] group-hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl backdrop-blur-md">
                  <Play className="w-5 h-5 ml-0.5 fill-current" />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="pt-8 flex justify-center items-center">
          <a
            href="#experience"
            className="flex flex-col items-center text-[#C8B69E] hover:text-[#FAF7F2] transition-colors group cursor-pointer"
            aria-label="Scroll down to explore"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase font-medium mb-1 text-[#C8B69E]/80 group-hover:text-[#C5A059] transition-colors">
              DISCOVER
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#C5A059]" />
          </a>
        </div>
      </div>
    </section>
  );
};
