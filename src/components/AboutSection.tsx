import React from 'react';
import { Coffee, Utensils, Sparkles, HeartHandshake, Check } from 'lucide-react';
import { IMAGES, HIGHLIGHTS, BUSINESS_INFO } from '../data/cafeData';

export const AboutSection: React.FC = () => {
  const getHighlightIcon = (title: string) => {
    switch (title) {
      case 'Great Coffee':
        return <Coffee className="w-5 h-5 text-[#C5A059]" />;
      case 'Delicious Food':
        return <Utensils className="w-5 h-5 text-[#C5A059]" />;
      case 'Cozy Ambience':
        return <Sparkles className="w-5 h-5 text-[#C5A059]" />;
      case 'Good Vibes':
        return <HeartHandshake className="w-5 h-5 text-[#C5A059]" />;
      default:
        return <Coffee className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  return (
    <section id="about" className="relative bg-[#0f0a07] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Large Café Interior Image with Decorative Border */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#C5A059]/30 shadow-2xl">
              <img
                src={IMAGES.aboutInterior}
                alt="The Coffee Cartel interior ambience in Bajaj Nagar, Jaipur"
                className="w-full h-[450px] sm:h-[540px] object-cover object-center brightness-[0.88] hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a07]/80 via-transparent to-transparent" />

              {/* Verified Trust Stamp */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#140d09]/90 backdrop-blur-md rounded-sm border border-[#C5A059]/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#C5A059]">
                    BAJAJ NAGAR · JAIPUR
                  </span>
                  <p className="font-serif text-lg text-[#FAF7F2] font-medium mt-0.5">
                    Open Daily 10 AM – 1 AM
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-sm text-[#DFC287] font-semibold">
                    4.7 ★
                  </span>
                  <p className="text-[11px] text-[#C8B69E]">798+ Reviews</p>
                </div>
              </div>
            </div>

            {/* Subtle decorative gold corner frame */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#C5A059]/40 pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#C5A059]/40 pointer-events-none" />
          </div>

          {/* Right: Editorial Story & 4 Highlights */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase">
              ABOUT OUR COFFEE HOUSE
            </span>

            <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#FAF7F2] tracking-tight leading-[1.1] text-balance">
              A Place for <br />
              <span className="italic text-[#DFC287]">Coffee Lovers.</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[#E6DDD0] font-light leading-relaxed">
              The Coffee Cartel is a cozy café in Jaipur, known for its coffee, food and warm atmosphere.
            </p>

            <p className="mt-3 text-sm text-[#C8B69E] font-light leading-relaxed">
              Nestled on Vivek Vihar Road in Bajaj Nagar, we blend intentional specialty brewing with a relaxed, late-night hospitality culture. Whether you are craving a quiet corner with a Chemex pour-over, a fresh stack of Belgian waffles, or evening conversations over iced Spanish lattes, our doors remain warmly open until 1 AM.
            </p>

            {/* 4 Highlights with Elegant Line Icons */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#C5A059]/20">
              {HIGHLIGHTS.map((item) => (
                <div key={item.title} className="flex flex-col space-y-2 group">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-sm bg-[#221811] border border-[#C5A059]/30 flex items-center justify-center shrink-0 group-hover:border-[#C5A059] transition-colors">
                      {getHighlightIcon(item.title)}
                    </div>
                    <h3 className="font-serif text-lg font-medium text-[#FAF7F2] tracking-wide group-hover:text-[#DFC287] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#C8B69E] font-light leading-relaxed pl-12">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick business verification pill */}
            <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#C8B69E]">
              {BUSINESS_INFO.options.map((opt) => (
                <div key={opt} className="flex items-center space-x-1.5">
                  <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{opt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
