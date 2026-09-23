import React, { useState } from 'react';
import { Calendar, Phone, Clock, Users, MessageSquare, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cafeData';
import { ReservationFormData } from '../types';

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2 Guests',
    specialRequest: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ReservationFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Partial<Record<keyof ReservationFormData, string>> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name';
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a valid phone number';
    } else if (!/^[0-9+\s-]{10,14}$/.test(formData.phone.trim())) {
      errs.phone = 'Please provide a valid 10-digit number';
    }
    if (!formData.date) errs.date = 'Please select a date';
    if (!formData.time) errs.time = 'Please select a time slot';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '',
      guests: '2 Guests',
      specialRequest: '',
    });
  };

  return (
    <section id="reserve" className="relative bg-[#140d09] py-20 lg:py-28 border-t border-[#C5A059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Call Action */}
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase">
              TABLE RESERVATIONS
            </span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#FAF7F2] tracking-tight text-balance">
              Your Table Is <br />
              <span className="italic text-[#DFC287]">Waiting.</span>
            </h2>

            <p className="mt-6 text-sm sm:text-base text-[#E6DDD0] font-light leading-relaxed">
              Whether you are planning an intimate coffee date, catching up with friends, or enjoying late-night waffles after dinner, we are ready to welcome you.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3 text-xs text-[#C8B69E]">
                <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Open until 1:00 AM every night in Bajaj Nagar</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-[#C8B69E]">
                <Users className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Individual, couple and group tables accommodated</span>
              </div>
            </div>

            {/* Direct Call Option */}
            <div className="mt-10 p-6 rounded-sm bg-[#1b120c] border border-[#C5A059]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-[#C8B69E] uppercase tracking-wider font-semibold">
                  Prefer instant phone confirmation?
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="font-serif text-2xl text-[#DFC287] font-medium tracking-wide hover:text-[#FAF7F2] transition-colors block mt-0.5 tabular-nums"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-5 py-2.5 text-xs font-semibold tracking-wider text-[#0f0a07] uppercase bg-[#C5A059] hover:bg-[#DFC287] rounded-sm transition-colors flex items-center space-x-2 shrink-0 cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Reservation Form with Real Validation & Demo Notice */}
          <div className="lg:col-span-7">
            <div className="bg-[#1b120c] border border-[#C5A059]/25 rounded-sm p-6 sm:p-10 shadow-2xl">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#C5A059]/20 border border-[#C5A059] text-[#DFC287] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="font-serif text-3xl text-[#FAF7F2] font-normal">
                      Table Request Received
                    </h3>
                    <p className="text-xs sm:text-sm text-[#C8B69E] mt-2 max-w-md mx-auto">
                      Thank you, <strong className="text-[#FAF7F2]">{formData.name}</strong>. We have logged your request for <strong className="text-[#FAF7F2]">{formData.guests}</strong> on <strong className="text-[#FAF7F2]">{formData.date} at {formData.time}</strong>.
                    </p>
                  </div>

                  {/* Explicit Demo Notification */}
                  <div className="p-4 rounded-sm bg-[#221811] border border-[#C5A059]/30 text-left max-w-md mx-auto">
                    <div className="flex items-start space-x-2.5">
                      <AlertCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <div className="text-xs text-[#E6DDD0]">
                        <p className="font-semibold text-[#DFC287]">
                          Notice: Demo Reservation Mode
                        </p>
                        <p className="mt-1 text-[#C8B69E] leading-relaxed">
                          This form operates as an interactive demo. To ensure immediate real-time table availability or special party seating, please call the cafe directly at{' '}
                          <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-[#FAF7F2] underline font-medium">
                            {BUSINESS_INFO.phone}
                          </a>.
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="mt-4 px-6 py-2.5 text-xs font-semibold tracking-wider text-[#0f0a07] uppercase bg-[#C5A059] hover:bg-[#DFC287] rounded-sm transition-colors cursor-pointer"
                  >
                    Make Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-[#C5A059]/15 pb-4 mb-6">
                    <h3 className="font-serif text-2xl text-[#FAF7F2] font-normal">
                      Reserve a Table
                    </h3>
                    <p className="text-xs text-[#C8B69E] mt-1">
                      Fill out your details below. No advance fee required.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#DFC287] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="e.g. Gaurav Sharma"
                        className={`w-full bg-[#140d09] border text-xs text-[#FAF7F2] rounded-sm px-3.5 py-3 outline-none transition-colors ${
                          errors.name
                            ? 'border-red-400 focus:border-red-400'
                            : 'border-[#C5A059]/25 focus:border-[#C5A059]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#DFC287] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="e.g. 089559 57350"
                        className={`w-full bg-[#140d09] border text-xs text-[#FAF7F2] rounded-sm px-3.5 py-3 outline-none transition-colors ${
                          errors.phone
                            ? 'border-red-400 focus:border-red-400'
                            : 'border-[#C5A059]/25 focus:border-[#C5A059]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {/* Date */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#DFC287] mb-1.5">
                        Date *
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => {
                            setFormData({ ...formData, date: e.target.value });
                            if (errors.date) setErrors({ ...errors, date: undefined });
                          }}
                          className={`w-full bg-[#140d09] border text-xs text-[#FAF7F2] rounded-sm px-3 py-3 outline-none transition-colors ${
                            errors.date
                              ? 'border-red-400 focus:border-red-400'
                              : 'border-[#C5A059]/25 focus:border-[#C5A059]'
                          }`}
                        />
                      </div>
                      {errors.date && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.date}</p>
                      )}
                    </div>

                    {/* Time */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#DFC287] mb-1.5">
                        Time Slot *
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => {
                          setFormData({ ...formData, time: e.target.value });
                          if (errors.time) setErrors({ ...errors, time: undefined });
                        }}
                        className={`w-full bg-[#140d09] border text-xs text-[#FAF7F2] rounded-sm px-3 py-3 outline-none transition-colors ${
                          errors.time
                            ? 'border-red-400 focus:border-red-400'
                            : 'border-[#C5A059]/25 focus:border-[#C5A059]'
                        }`}
                      >
                        <option value="">Select Time</option>
                        <option value="11:00 AM">11:00 AM (Morning Brew)</option>
                        <option value="1:00 PM">1:00 PM (Lunch)</option>
                        <option value="3:30 PM">3:30 PM (Afternoon Coffee)</option>
                        <option value="5:30 PM">5:30 PM (Evening Sunset)</option>
                        <option value="7:30 PM">7:30 PM (Dinner & Coffee)</option>
                        <option value="9:30 PM">9:30 PM (Late Night Vibe)</option>
                        <option value="11:00 PM">11:00 PM (Midnight Craving)</option>
                        <option value="12:00 AM">12:00 AM (Late Night Special)</option>
                      </select>
                      {errors.time && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.time}</p>
                      )}
                    </div>

                    {/* Guests */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#DFC287] mb-1.5">
                        Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-[#140d09] border border-[#C5A059]/25 focus:border-[#C5A059] text-xs text-[#FAF7F2] rounded-sm px-3 py-3 outline-none transition-colors"
                      >
                        <option value="1 Guest">1 Guest (Solo Study/Read)</option>
                        <option value="2 Guests">2 Guests (Couple / Date)</option>
                        <option value="3-4 Guests">3-4 Guests (Small Group)</option>
                        <option value="5-8 Guests">5-8 Guests (Celebration)</option>
                        <option value="8+ Guests">8+ Guests (Party Table)</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Request */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#DFC287] mb-1.5">
                      Special Request (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.specialRequest}
                      onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                      placeholder="e.g. Quiet corner table, anniversary arrangement, vegan oat milk preference..."
                      className="w-full bg-[#140d09] border border-[#C5A059]/25 focus:border-[#C5A059] text-xs text-[#FAF7F2] rounded-sm px-3.5 py-2.5 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 text-xs font-semibold tracking-widest text-[#0f0a07] uppercase bg-[#C5A059] hover:bg-[#DFC287] active:scale-[0.99] transition-all rounded-sm flex items-center justify-center space-x-2 cursor-pointer shadow-lg disabled:opacity-70"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{isSubmitting ? 'PROCESSING REQUEST...' : 'CONFIRM RESERVATION REQUEST'}</span>
                    </button>
                    <p className="text-center text-[11px] text-[#C8B69E] mt-2">
                      Demo booking mode · Instant confirmation available via phone call
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
