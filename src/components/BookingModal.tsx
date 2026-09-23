import React, { useState } from 'react';
import { X, Calendar, Phone, AlertCircle, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cafeData';
import { ReservationFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
}) => {
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

  if (!isOpen) return null;

  const validate = () => {
    const errs: Partial<Record<keyof ReservationFormData, string>> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a valid phone number';
    } else if (!/^[0-9+\s-]{10,14}$/.test(formData.phone.trim())) {
      errs.phone = 'Please provide a valid 10-digit number';
    }
    if (!formData.date) errs.date = 'Select date';
    if (!formData.time) errs.time = 'Select time';
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
    }, 500);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0f0a07]/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg bg-[#1b120c] border border-[#C5A059]/30 rounded-sm p-6 sm:p-8 shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-[#C8B69E] hover:text-[#FAF7F2] hover:bg-[#221811] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#C5A059]/20 border border-[#C5A059] text-[#DFC287] flex items-center justify-center mx-auto">
              <CheckCircle className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-2xl text-[#FAF7F2]">
              Table Request Submitted
            </h3>

            <p className="text-xs text-[#C8B69E] leading-relaxed">
              We have noted your table reservation for <strong className="text-[#FAF7F2]">{formData.guests}</strong> on <strong className="text-[#FAF7F2]">{formData.date} at {formData.time}</strong>.
            </p>

            <div className="p-3 bg-[#221811] border border-[#C5A059]/30 rounded-sm text-left">
              <div className="flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#C8B69E] leading-relaxed">
                  <strong className="text-[#DFC287]">Interactive Demo Notice:</strong> For immediate table confirmation or urgent reservations, please call{' '}
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-[#FAF7F2] underline">
                    {BUSINESS_INFO.phone}
                  </a>.
                </p>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="mt-4 px-6 py-2.5 text-xs font-semibold tracking-wider text-[#0f0a07] uppercase bg-[#C5A059] hover:bg-[#DFC287] rounded-sm transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C5A059]">
                RESERVATION DESK
              </span>
              <h3 className="font-serif text-2xl text-[#FAF7F2] font-normal mt-0.5">
                Reserve Your Table
              </h3>
              <p className="text-xs text-[#C8B69E] mt-0.5">
                The Coffee Cartel · Bajaj Nagar, Jaipur
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#DFC287] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  placeholder="Your Name"
                  className={`w-full bg-[#140d09] border text-xs text-[#FAF7F2] rounded-sm px-3 py-2.5 outline-none transition-colors ${
                    errors.name ? 'border-red-400' : 'border-[#C5A059]/25 focus:border-[#C5A059]'
                  }`}
                />
                {errors.name && <p className="text-[10px] text-red-400 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#DFC287] mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: undefined });
                  }}
                  placeholder="089559 57350"
                  className={`w-full bg-[#140d09] border text-xs text-[#FAF7F2] rounded-sm px-3 py-2.5 outline-none transition-colors ${
                    errors.phone ? 'border-red-400' : 'border-[#C5A059]/25 focus:border-[#C5A059]'
                  }`}
                />
                {errors.phone && <p className="text-[10px] text-red-400 mt-1">{errors.phone}</p>}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#DFC287] mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => {
                      setFormData({ ...formData, date: e.target.value });
                      if (errors.date) setErrors({ ...errors, date: undefined });
                    }}
                    className={`w-full bg-[#140d09] border text-xs text-[#FAF7F2] rounded-sm px-2.5 py-2.5 outline-none transition-colors ${
                      errors.date ? 'border-red-400' : 'border-[#C5A059]/25 focus:border-[#C5A059]'
                    }`}
                  />
                  {errors.date && <p className="text-[10px] text-red-400 mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#DFC287] mb-1">
                    Time *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => {
                      setFormData({ ...formData, time: e.target.value });
                      if (errors.time) setErrors({ ...errors, time: undefined });
                    }}
                    className={`w-full bg-[#140d09] border text-xs text-[#FAF7F2] rounded-sm px-2.5 py-2.5 outline-none transition-colors ${
                      errors.time ? 'border-red-400' : 'border-[#C5A059]/25 focus:border-[#C5A059]'
                    }`}
                  >
                    <option value="">Select Time</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="6:00 PM">6:00 PM</option>
                    <option value="8:00 PM">8:00 PM</option>
                    <option value="10:00 PM">10:00 PM</option>
                    <option value="11:30 PM">11:30 PM</option>
                  </select>
                  {errors.time && <p className="text-[10px] text-red-400 mt-1">{errors.time}</p>}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#DFC287] mb-1">
                  Party Size
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full bg-[#140d09] border border-[#C5A059]/25 focus:border-[#C5A059] text-xs text-[#FAF7F2] rounded-sm px-3 py-2.5 outline-none"
                >
                  <option value="1 Guest">1 Guest</option>
                  <option value="2 Guests">2 Guests</option>
                  <option value="3-4 Guests">3-4 Guests</option>
                  <option value="5-8 Guests">5-8 Guests</option>
                  <option value="8+ Guests">8+ Guests</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#DFC287] mb-1">
                  Special Request (Optional)
                </label>
                <input
                  type="text"
                  value={formData.specialRequest}
                  onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                  placeholder="e.g. Window booth, birthday dessert"
                  className="w-full bg-[#140d09] border border-[#C5A059]/25 focus:border-[#C5A059] text-xs text-[#FAF7F2] rounded-sm px-3 py-2.5 outline-none"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 text-xs font-semibold tracking-widest text-[#0f0a07] uppercase bg-[#C5A059] hover:bg-[#DFC287] rounded-sm transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow-md disabled:opacity-70"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Submitting...' : 'Confirm Table Request'}</span>
              </button>
            </div>

            <div className="text-center pt-1 border-t border-[#C5A059]/15">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center space-x-1.5 text-xs text-[#DFC287] hover:underline"
              >
                <Phone className="w-3 h-3" />
                <span>Prefer instant phone reservation? Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
