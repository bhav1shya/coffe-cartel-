import React from 'react';
import { Coffee, ShoppingBag, Bike, CalendarCheck } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/cafeData';

interface ExperienceBarProps {
  onReserveClick: () => void;
}

export const ExperienceBar: React.FC<ExperienceBarProps> = ({ onReserveClick }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-[#C5A059]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-[#C5A059]" />;
      case 'Bike':
        return <Bike className="w-5 h-5 text-[#C5A059]" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-5 h-5 text-[#C5A059]" />;
      default:
        return <Coffee className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  return (
    <section id="experience" className="relative z-20 bg-[#150d09] border-y border-[#C5A059]/20 py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {EXPERIENCE_ITEMS.map((item, index) => {
            const isTableAction = item.id === 'find-table';
            return (
              <div
                key={item.id}
                onClick={isTableAction ? onReserveClick : undefined}
                className={`group flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 p-3 rounded-sm transition-all duration-300 ${
                  isTableAction ? 'cursor-pointer hover:bg-[#221811]/60' : ''
                }`}
              >
                <div className="w-11 h-11 rounded-sm bg-[#221811] border border-[#C5A059]/25 flex items-center justify-center shrink-0 group-hover:border-[#C5A059] group-hover:scale-105 transition-all duration-300">
                  {getIcon(item.iconName)}
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-medium text-[#FAF7F2] tracking-wider uppercase group-hover:text-[#DFC287] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#C8B69E] mt-0.5 line-clamp-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
