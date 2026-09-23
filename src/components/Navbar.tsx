import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cafeData';

interface NavbarProps {
  onReserveClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReserveClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'MENU', href: '#menu' },
    { label: 'ABOUT', href: '#about' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'REVIEWS', href: '#reviews' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-cafe-header py-3.5 shadow-2xl'
            : 'bg-transparent py-5 lg:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Logo Wordmark (Single text element in editorial serif) */}
          <a
            href="#home"
            className="flex items-center group focus:outline-none"
            aria-label="The Coffee Cartel - Home"
          >
            <span className="font-serif text-xl sm:text-2xl tracking-[0.2em] font-medium text-[#FAF7F2] transition-colors group-hover:text-[#DFC287]">
              THE COFFEE CARTEL
            </span>
          </a>

          {/* Zone 2: Navigation Links (Clean text links with hover underline) */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-medium tracking-[0.18em] text-[#E6DDD0]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="relative py-1 transition-colors hover:text-[#FAF7F2] group cursor-pointer"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A059] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Phone number + Reserve a Table button) */}
          <div className="hidden sm:flex items-center space-x-5">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center space-x-2 text-xs font-medium tracking-wide text-[#E6DDD0] hover:text-[#FAF7F2] transition-colors py-2 px-1 focus:outline-none"
              title="Call The Coffee Cartel"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="tabular-nums font-sans">{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={onReserveClick}
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wider text-[#0f0a07] uppercase bg-[#C5A059] hover:bg-[#DFC287] active:scale-[0.98] transition-all duration-150 rounded-sm cursor-pointer whitespace-nowrap shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 mr-1.5" />
              RESERVE A TABLE
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center space-x-3 sm:hidden">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="p-2 text-[#C5A059] hover:text-[#FAF7F2] transition-colors"
              aria-label="Call cafe"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#FAF7F2] hover:text-[#C5A059] focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#0f0a07]/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 sm:hidden animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col space-y-5 pt-4">
            <div className="pb-3 border-b border-[#C5A059]/20">
              <span className="font-serif text-lg tracking-[0.2em] text-[#FAF7F2]">
                THE COFFEE CARTEL
              </span>
              <p className="text-xs text-[#C8B69E] mt-1">Bajaj Nagar, Jaipur</p>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="font-serif text-2xl tracking-wider text-[#FAF7F2] hover:text-[#C5A059] transition-colors flex items-center justify-between py-1"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C5A059]/60" />
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#C5A059]/20">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center justify-center space-x-2 w-full py-3 text-sm text-[#FAF7F2] bg-[#221811] border border-[#C5A059]/30 rounded-sm"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span className="tabular-nums font-medium">{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onReserveClick();
              }}
              className="w-full py-3.5 text-xs font-semibold tracking-widest text-[#0f0a07] uppercase bg-[#C5A059] rounded-sm flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>RESERVE A TABLE</span>
            </button>

            <p className="text-center text-[11px] text-[#C8B69E]/80">
              Open Daily · 10:00 AM – 1:00 AM · Bajaj Nagar
            </p>
          </div>
        </div>
      )}
    </>
  );
};
