import React, { useState } from 'react';
import { Search, Sparkles, Calendar, Coffee } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, BUSINESS_INFO } from '../data/cafeData';

interface MenuSectionProps {
  activeCategory: string;
  onCategoryChange: (categoryId: any) => void;
  onReserveClick: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  activeCategory,
  onCategoryChange,
  onReserveClick,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'signature'>('all');

  // Filter items based on activeCategory, search, and signature filter
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = item.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || item.isSignature;
    return matchesCategory && matchesSearch && matchesFilter;
  });

  const activeCategoryObj = MENU_CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <section id="menu" className="relative bg-[#140d09] py-20 lg:py-28 border-t border-[#C5A059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase">
              ARTISANAL ROASTERY & KITCHEN
            </span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#FAF7F2] tracking-tight">
              The Café Menu
            </h2>
            <p className="mt-3 text-sm text-[#C8B69E] font-light max-w-xl">
              Freshly pulled shots, slow manual extractions and gourmet griddled specials crafted daily in Bajaj Nagar.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center space-x-3">
            <span className="text-xs text-[#C8B69E] hidden sm:inline">Price Range:</span>
            <span className="text-xs font-medium px-3 py-1.5 bg-[#221811] text-[#DFC287] border border-[#C5A059]/30 rounded-sm">
              {BUSINESS_INFO.priceRange}
            </span>
          </div>
        </div>

        {/* Animated Tabs Header */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6 border-b border-[#C5A059]/15">
          {/* Category Tabs */}
          <div className="flex items-center overflow-x-auto no-scrollbar space-x-2 py-1">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onCategoryChange(cat.id)}
                  className={`relative px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all duration-200 rounded-sm cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#C5A059] text-[#0f0a07] font-semibold shadow-md'
                      : 'bg-[#221811] text-[#E6DDD0] hover:text-[#FAF7F2] hover:bg-[#2c1f17] border border-[#C5A059]/20'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-[#C8B69E] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search coffee or treats..."
              className="w-full bg-[#1b120c] border border-[#C5A059]/25 focus:border-[#C5A059] text-xs text-[#FAF7F2] placeholder-[#C8B69E]/60 rounded-sm pl-9 pr-4 py-2.5 outline-none transition-colors"
            />
          </div>
        </div>

        {/* Category Description Tagline */}
        {activeCategoryObj && (
          <div className="py-5 flex items-center justify-between">
            <p className="text-xs sm:text-sm text-[#C8B69E] italic">
              {activeCategoryObj.tagline}
            </p>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setFilterType(filterType === 'all' ? 'signature' : 'all')}
                className={`text-xs px-2.5 py-1 rounded-sm border transition-colors flex items-center space-x-1 cursor-pointer ${
                  filterType === 'signature'
                    ? 'bg-[#C5A059]/20 border-[#C5A059] text-[#DFC287]'
                    : 'bg-[#221811] border-[#C5A059]/20 text-[#C8B69E] hover:text-[#FAF7F2]'
                }`}
              >
                <Sparkles className="w-3 h-3 text-[#C5A059]" />
                <span>{filterType === 'signature' ? 'Showing Signatures' : 'Only Signatures'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 pt-2">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group p-5 rounded-sm bg-[#1b120c]/80 hover:bg-[#221811] border border-[#C5A059]/15 hover:border-[#C5A059]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#FAF7F2] font-medium group-hover:text-[#DFC287] transition-colors">
                      {item.name}
                    </h3>
                    {item.badge && (
                      <span className="text-[10px] tracking-wider uppercase font-semibold text-[#DFC287] bg-[#C5A059]/15 border border-[#C5A059]/30 px-2 py-0.5 rounded-sm">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <span className="font-mono text-lg font-medium text-[#DFC287] tabular-nums shrink-0">
                    ₹{item.price}
                  </span>
                </div>

                <p className="mt-2 text-xs sm:text-sm text-[#C8B69E] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#C5A059]/10 flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#C8B69E]/70 flex items-center space-x-1">
                  <Coffee className="w-3 h-3 text-[#C5A059]" />
                  <span>Freshly Prepared</span>
                </span>

                <button
                  onClick={onReserveClick}
                  className="text-[11px] font-medium tracking-wider uppercase text-[#C5A059] hover:text-[#DFC287] transition-colors flex items-center space-x-1 cursor-pointer"
                >
                  <span>Reserve Table</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#1b120c] rounded-sm border border-[#C5A059]/20">
            <p className="text-sm text-[#C8B69E]">No items match your search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setFilterType('all');
              }}
              className="mt-3 text-xs text-[#C5A059] underline underline-offset-4 cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Menu Bottom Notice & Reservation Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-sm bg-[#221811] border border-[#C5A059]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-serif text-xl sm:text-2xl text-[#FAF7F2] font-medium">
              Join us for an artisanal coffee experience.
            </h4>
            <p className="text-xs sm:text-sm text-[#C8B69E] mt-1">
              Custom dietary preparations & decaf options available upon barista request.
            </p>
          </div>

          <button
            onClick={onReserveClick}
            className="px-6 py-3 text-xs font-semibold tracking-widest text-[#0f0a07] uppercase bg-[#C5A059] hover:bg-[#DFC287] transition-all rounded-sm shrink-0 flex items-center space-x-2 cursor-pointer shadow-md"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Reserve a Table</span>
          </button>
        </div>
      </div>
    </section>
  );
};
