import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, Calendar, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cafeData';

interface LocationHoursSectionProps {
  onReserveClick: () => void;
}

export const LocationHoursSection: React.FC<LocationHoursSectionProps> = ({ onReserveClick }) => {
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [currentTimeStr, setCurrentTimeStr] = useState('');

  // Real-time calculation based on actual operating hours (10:00 AM to 1:00 AM next morning)
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const currentHour = now.getHours();
      // Open from 10:00 AM (10) until 1:00 AM (00:59)
      const open = currentHour >= 10 || currentHour < 1;
      setIsOpenNow(open);

      setCurrentTimeStr(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
      );
    };

    checkStatus();
    const interval = setInterval(checkStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="relative bg-[#0f0a07] py-20 lg:py-28 border-t border-[#C5A059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase">
            FIND YOUR WAY
          </span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#FAF7F2] tracking-tight">
            Visit The Coffee Cartel
          </h2>
          <p className="mt-4 text-sm text-[#C8B69E] font-light">
            Conveniently located in Bajaj Nagar, welcoming coffee lovers from morning brew until 1 AM.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Business Address, Plus Code & Hours */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="bg-[#1b120c] border border-[#C5A059]/25 rounded-sm p-8 shadow-xl">
              <div className="flex items-center justify-between pb-6 border-b border-[#C5A059]/15">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF7F2] font-medium tracking-wide">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-xs text-[#C5A059] mt-0.5 uppercase tracking-widest font-semibold">
                    {BUSINESS_INFO.category} · Bajaj Nagar, Jaipur
                  </p>
                </div>

                {/* Live Real-time Status Badge */}
                <div className="flex items-center space-x-2 bg-[#221811] px-3 py-1.5 rounded-sm border border-[#C5A059]/30">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-amber-500'
                    }`}
                  />
                  <span className="text-xs font-medium text-[#FAF7F2]">
                    {isOpenNow ? 'OPEN NOW' : 'OPENS AT 10:00 AM'}
                  </span>
                </div>
              </div>

              {/* Address Details */}
              <div className="mt-6 space-y-5">
                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#DFC287]">
                      Full Address
                    </h4>
                    <p className="text-sm text-[#E6DDD0] font-light mt-1 leading-relaxed">
                      Shop NO.-G, Plot No 146-147, Ground Floor, 102,
                      <br />
                      Vivek Vihar Rd, Bajaj Nagar,
                      <br />
                      Jaipur, Rajasthan 302015
                    </p>
                  </div>
                </div>

                {/* Plus Code */}
                <div className="flex items-start space-x-3.5">
                  <Compass className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#DFC287]">
                      Plus Code
                    </h4>
                    <p className="text-sm font-mono text-[#FAF7F2] mt-0.5">
                      {BUSINESS_INFO.plusCode}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3.5">
                  <Phone className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#DFC287]">
                      Direct Telephone
                    </h4>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-sm font-sans font-medium text-[#FAF7F2] hover:text-[#DFC287] transition-colors mt-0.5 inline-block tabular-nums"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start space-x-3.5 pt-2">
                  <Clock className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#DFC287]">
                      Operating Hours
                    </h4>
                    <p className="text-sm text-[#E6DDD0] mt-0.5">
                      <span className="text-[#FAF7F2] font-medium">{BUSINESS_INFO.timing.days}:</span>{' '}
                      {BUSINESS_INFO.timing.hours}
                    </p>
                    <p className="text-xs text-[#C8B69E] mt-1">
                      {BUSINESS_INFO.timing.note}
                    </p>
                  </div>
                </div>
              </div>

              {/* 3 Explicit Action Buttons: GET DIRECTIONS, CALL NOW, RESERVE A TABLE */}
              <div className="mt-8 pt-6 border-t border-[#C5A059]/15 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-xs font-semibold tracking-wider text-[#0f0a07] uppercase bg-[#C5A059] hover:bg-[#DFC287] rounded-sm flex items-center justify-center space-x-1.5 transition-colors cursor-pointer text-center"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="px-4 py-3 text-xs font-medium tracking-wider text-[#FAF7F2] uppercase bg-[#221811] hover:bg-[#2c1f17] border border-[#C5A059]/30 rounded-sm flex items-center justify-center space-x-1.5 transition-colors text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Call Now</span>
                </a>

                <button
                  onClick={onReserveClick}
                  className="px-4 py-3 text-xs font-semibold tracking-wider text-[#DFC287] uppercase bg-[#221811] hover:bg-[#2c1f17] border border-[#C5A059]/50 rounded-sm flex items-center justify-center space-x-1.5 transition-colors cursor-pointer text-center"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Reserve Table</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Stylish Map Card */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="h-full min-h-[380px] bg-[#1b120c] border border-[#C5A059]/25 rounded-sm overflow-hidden flex flex-col justify-between relative shadow-xl">
              {/* Interactive Stylized Map Interface */}
              <div className="relative w-full flex-1 min-h-[300px] bg-[#140d09] overflow-hidden">
                <iframe
                  title="The Coffee Cartel Location Map"
                  src="https://maps.google.com/maps?q=The%20Coffee%20Cartel%20Plot%20146%20Vivek%20Vihar%20Bajaj%20Nagar%20Jaipur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-[120%] opacity-85 hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                />

                {/* Map Overlay Badge */}
                <div className="absolute top-4 left-4 bg-[#0f0a07]/90 backdrop-blur-md px-3.5 py-2 rounded-sm border border-[#C5A059]/30 pointer-events-none">
                  <p className="font-serif text-sm text-[#FAF7F2] font-medium">
                    The Coffee Cartel
                  </p>
                  <p className="text-[11px] text-[#C8B69E]">
                    Vivek Vihar Rd, Bajaj Nagar
                  </p>
                </div>
              </div>

              {/* Map Footer Bar with "View on Google Maps" button */}
              <div className="p-5 bg-[#1b120c] border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#C8B69E] text-center sm:text-left">
                  <span className="font-semibold text-[#FAF7F2]">Plus Code:</span> {BUSINESS_INFO.plusCode}
                </div>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-[#DFC287] hover:text-[#FAF7F2] transition-colors uppercase"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
