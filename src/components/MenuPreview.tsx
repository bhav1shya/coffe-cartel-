import React from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { MENU_TILES } from '../data/cafeData';

interface MenuPreviewProps {
  onSelectCategory: (categoryId: 'hot-coffee' | 'cold-coffee' | 'natural-brews' | 'shakeys' | 'waffles-pancakes') => void;
  onViewFullMenu: () => void;
}

export const MenuPreview: React.FC<MenuPreviewProps> = ({
  onSelectCategory,
  onViewFullMenu,
}) => {
  return (
    <section id="menu-preview" className="relative bg-[#0f0a07] py-20 lg:py-28 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C5A059]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase">
            THE CARTEL SELECTION
          </span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#FAF7F2] tracking-tight text-balance">
            Crafted for Every Craving.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#C8B69E] font-light max-w-xl mx-auto leading-relaxed">
            From classic coffees to indulgent desserts, there’s something for everyone.
          </p>
        </div>

        {/* 4 Large Editorial Menu Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {MENU_TILES.map((tile) => (
            <div
              key={tile.id}
              onClick={() => onSelectCategory(tile.id as any)}
              className="group relative h-[420px] sm:h-[460px] rounded-sm overflow-hidden bg-[#1b120c] border border-[#C5A059]/20 hover:border-[#C5A059]/60 transition-all duration-500 cursor-pointer flex flex-col justify-end p-6"
            >
              {/* Background Image with Zoom on hover */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 brightness-[0.72] group-hover:brightness-[0.6] contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a07] via-[#0f0a07]/50 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

              {/* Top Tag */}
              <div className="absolute top-5 left-5 z-10">
                <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#E6DDD0] bg-[#0f0a07]/80 backdrop-blur-md px-2.5 py-1 rounded-sm border border-[#C5A059]/25">
                  {tile.tag}
                </span>
              </div>

              {/* Tile Content (Shifts upward on hover) */}
              <div className="relative z-10 transform transition-transform duration-500 ease-out group-hover:-translate-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF7F2] font-medium tracking-wide group-hover:text-[#DFC287] transition-colors">
                    {tile.title}
                  </h3>
                  <div className="w-9 h-9 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#DFC287] group-hover:bg-[#C5A059] group-hover:text-[#0f0a07] transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <p className="mt-2 text-xs sm:text-sm text-[#C8B69E] font-light line-clamp-2">
                  {tile.subtitle}
                </p>

                <div className="mt-4 pt-3 border-t border-[#C5A059]/15 flex items-center text-xs font-semibold tracking-wider uppercase text-[#C5A059] group-hover:text-[#DFC287]">
                  <span>Explore Items</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onViewFullMenu}
            className="inline-flex items-center space-x-3 px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-widest text-[#0f0a07] uppercase bg-[#C5A059] hover:bg-[#DFC287] active:scale-[0.98] transition-all duration-200 rounded-sm shadow-md cursor-pointer"
          >
            <span>View Full Menu</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
