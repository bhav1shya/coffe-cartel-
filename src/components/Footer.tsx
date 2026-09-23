import React from 'react';
import { Phone, MapPin, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cafeData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#0a0705] border-t border-[#C5A059]/20 pt-16 pb-12 text-[#E6DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#C5A059]/15">
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.2em] font-medium text-[#FAF7F2] block">
              THE COFFEE CARTEL
            </span>
            <p className="font-serif text-lg italic text-[#DFC287]">
              “Coffee Connects People.”
            </p>
            <p className="text-xs text-[#C8B69E] max-w-sm leading-relaxed font-light">
              A modern artisanal café in Bajaj Nagar, Jaipur. Serving precision espresso extractions, slow manual brews, golden Belgian waffles, and good vibes daily until 1 AM.
            </p>

            {/* Social Links (Editable) */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-[#1b120c] border border-[#C5A059]/30 hover:border-[#C5A059] flex items-center justify-center text-[#DFC287] hover:text-[#FAF7F2] transition-colors"
                aria-label="The Coffee Cartel on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-[#1b120c] border border-[#C5A059]/30 hover:border-[#C5A059] flex items-center justify-center text-[#DFC287] hover:text-[#FAF7F2] transition-colors"
                aria-label="The Coffee Cartel on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#C8B69E] hover:text-[#FAF7F2] transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
              VISIT & CONNECT
            </h4>

            <div className="space-y-2.5 text-xs text-[#C8B69E]">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Shop NO.-G, Plot No 146-147, Ground Floor, 102,
                  <br />
                  Vivek Vihar Rd, Bajaj Nagar,
                  <br />
                  Jaipur, Rajasthan 302015
                </p>
              </div>

              <div className="flex items-center space-x-2 pt-1">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-[#FAF7F2] hover:text-[#DFC287] transition-colors tabular-nums font-medium"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="pt-2 text-[11px] text-[#C8B69E]/80">
                <p>Monday – Sunday: 10:00 AM – 1:00 AM</p>
                <p className="mt-0.5">Plus Code: {BUSINESS_INFO.plusCode}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#C8B69E]/70 gap-4">
          <p>© {new Date().getFullYear()} The Coffee Cartel. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-[#DFC287] hover:text-[#FAF7F2] transition-colors cursor-pointer py-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
