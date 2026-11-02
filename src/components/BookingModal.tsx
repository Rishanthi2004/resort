import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RESORTS_DATA } from '../data/resortsData';
import { ResortItem, BookingFormState } from '../types/resort';
import { X, Calendar, Users, ShieldCheck, Sparkles, CheckCircle2, ChevronRight, Phone, Mail, User } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedResort?: ResortItem | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedResort = null,
}) => {
  const initialResort = selectedResort || RESORTS_DATA[0];

  const [resortId, setResortId] = useState<string>(initialResort.id);
  const [checkIn, setCheckIn] = useState<string>('2026-11-15');
  const [checkOut, setCheckOut] = useState<string>('2026-11-20');
  const [guests, setGuests] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [privacyScreening, setPrivacyScreening] = useState<boolean>(true);
  const [halalGourmetPackage, setHalalGourmetPackage] = useState<boolean>(true);
  const [vipAirportTransfer, setVipAirportTransfer] = useState<boolean>(true);
  const [contactName, setContactName] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [contactPhone, setContactPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [confirmationCode, setConfirmationCode] = useState<string>('');

  if (!isOpen) return null;

  const currentResort = RESORTS_DATA.find((r) => r.id === resortId) || initialResort;

  // Calculate nights
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const diffTime = Math.max(1, d2.getTime() - d1.getTime());
  const nights = Math.max(1, Math.round(diffTime / (1000 * 60 * 60 * 24)));

  const basePrice = currentResort.pricePerNight * nights;
  const transferPrice = vipAirportTransfer ? 350 : 0;
  const gourmetPrice = halalGourmetPackage ? 140 * nights * guests : 0;
  const totalPrice = basePrice + transferPrice + gourmetPrice;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'NAHD-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmationCode(code);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#FAF7F2] rounded-3xl w-full max-w-4xl max-h-[92vh] shadow-2xl border border-[#C5A059]/30 flex flex-col overflow-hidden relative"
      >
        {/* Modal Top Bar */}
        <div className="p-6 border-b border-[#EAE0D0] flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FAF7F2] flex items-center justify-center border border-[#C5A059]/40 text-[#C5A059]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-serif uppercase tracking-[0.25em] text-[#C5A059] font-bold">
                Bespoke Sanctuary Reservation
              </span>
              <h3 className="font-serif text-2xl text-[#0F1B2B]">
                Reserve Your Stay with Nahd
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full hover:bg-[#F4EFE6] text-[#0F1B2B] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {!isSubmitted ? (
            <form onSubmit={handleBookingSubmit} className="space-y-8">
              {/* Step 1: Select Villa */}
              <div>
                <label className="block text-xs font-serif uppercase tracking-widest text-[#0F1B2B] font-bold mb-3">
                  1. Select Your Sanctuary Villa
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {RESORTS_DATA.map((r) => {
                    const isSelected = r.id === resortId;
                    return (
                      <div
                        key={r.id}
                        onClick={() => setResortId(r.id)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'bg-white border-[#C5A059] shadow-md ring-2 ring-[#C5A059]'
                            : 'bg-white/70 border-[#EAE0D0] hover:border-[#C5A059]/40'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <img
                            src={r.mainImage}
                            alt={r.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <div className="font-serif text-sm font-semibold text-[#0F1B2B]">
                              {r.name}
                            </div>
                            <div className="text-[11px] text-[#0F1B2B]/60">
                              {r.country}
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 pt-2 border-t border-[#F4EFE6] flex justify-between items-center text-xs">
                          <span className="text-[#0F1B2B]/60">From</span>
                          <span className="font-serif font-bold text-[#C5A059]">
                            ${r.pricePerNight}/nt
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Dates & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#0F1B2B] mb-1.5 font-medium">
                    Check-in Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      required
                      className="w-full px-4 py-2.5 bg-white border border-[#EAE0D0] rounded-xl text-sm font-sans focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#0F1B2B] mb-1.5 font-medium">
                    Check-out Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      required
                      className="w-full px-4 py-2.5 bg-white border border-[#EAE0D0] rounded-xl text-sm font-sans focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#0F1B2B] mb-1.5 font-medium">
                    Adults
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full px-4 py-2.5 bg-white border border-[#EAE0D0] rounded-xl text-sm font-sans focus:outline-none focus:border-[#C5A059]"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Adult' : 'Adults'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#0F1B2B] mb-1.5 font-medium">
                    Children
                  </label>
                  <select
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    className="w-full px-4 py-2.5 bg-white border border-[#EAE0D0] rounded-xl text-sm font-sans focus:outline-none focus:border-[#C5A059]"
                  >
                    {[0, 1, 2, 3, 4].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Child' : 'Children'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 3: Bespoke Halal Amenities & Privacy Customization */}
              <div>
                <label className="block text-xs font-serif uppercase tracking-widest text-[#0F1B2B] font-bold mb-3">
                  3. Tailored Privacy & Halal Preferences
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label className="p-3.5 rounded-xl bg-white border border-[#EAE0D0] flex items-start gap-3 cursor-pointer hover:border-[#C5A059] transition-all">
                    <input
                      type="checkbox"
                      checked={privacyScreening}
                      onChange={(e) => setPrivacyScreening(e.target.checked)}
                      className="mt-1 accent-[#C5A059]"
                    />
                    <div>
                      <span className="text-xs font-serif font-bold text-[#0F1B2B] block">
                        100% Privacy Seclusion
                      </span>
                      <span className="text-[11px] text-[#0F1B2B]/60 leading-tight block mt-0.5">
                        Guarantee no drone or neighboring visibility (Complimentary)
                      </span>
                    </div>
                  </label>

                  <label className="p-3.5 rounded-xl bg-white border border-[#EAE0D0] flex items-start gap-3 cursor-pointer hover:border-[#C5A059] transition-all">
                    <input
                      type="checkbox"
                      checked={halalGourmetPackage}
                      onChange={(e) => setHalalGourmetPackage(e.target.checked)}
                      className="mt-1 accent-[#C5A059]"
                    />
                    <div>
                      <span className="text-xs font-serif font-bold text-[#0F1B2B] block">
                        Halal Gourmet All-Inclusive
                      </span>
                      <span className="text-[11px] text-[#0F1B2B]/60 leading-tight block mt-0.5">
                        In-villa floating breakfast & private chef dinners ($140/guest/day)
                      </span>
                    </div>
                  </label>

                  <label className="p-3.5 rounded-xl bg-white border border-[#EAE0D0] flex items-start gap-3 cursor-pointer hover:border-[#C5A059] transition-all">
                    <input
                      type="checkbox"
                      checked={vipAirportTransfer}
                      onChange={(e) => setVipAirportTransfer(e.target.checked)}
                      className="mt-1 accent-[#C5A059]"
                    />
                    <div>
                      <span className="text-xs font-serif font-bold text-[#0F1B2B] block">
                        VIP Seaplane / Speedboat Transfer
                      </span>
                      <span className="text-[11px] text-[#0F1B2B]/60 leading-tight block mt-0.5">
                        Private luxury transfer directly to villa jetty ($350)
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Step 4: Contact Information */}
              <div>
                <label className="block text-xs font-serif uppercase tracking-widest text-[#0F1B2B] font-bold mb-3">
                  4. Lead Guest Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="relative">
                    <User className="w-4 h-4 text-[#0F1B2B]/40 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#EAE0D0] rounded-xl text-sm font-sans focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#0F1B2B]/40 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#EAE0D0] rounded-xl text-sm font-sans focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#0F1B2B]/40 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      placeholder="Phone (with Country Code)"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#EAE0D0] rounded-xl text-sm font-sans focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <textarea
                    rows={2}
                    placeholder="Any specific requests? (e.g. Female butler preference, anniversary flowers, prayer times schedule, special dietary allergies)"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full px-4 py-2 bg-white border border-[#EAE0D0] rounded-xl text-xs font-sans focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              {/* Price Breakdown & Submission */}
              <div className="p-6 rounded-2xl bg-white border border-[#C5A059]/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs text-[#0F1B2B]/60 block font-serif">
                    Estimated Total ({nights} Nights • {guests} Guests)
                  </span>
                  <div className="text-3xl font-serif font-bold text-[#0F1B2B] mt-0.5">
                    ${totalPrice.toLocaleString()}{' '}
                    <span className="text-xs font-normal text-[#0F1B2B]/60 font-sans">
                      All taxes & service included
                    </span>
                  </div>
                  <span className="text-[11px] text-[#C5A059] font-medium block mt-1">
                    Free cancellation up to 14 days before check-in
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#0F1B2B] hover:bg-[#1A2E4B] text-white font-serif text-sm tracking-widest uppercase font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 border border-[#C5A059]/50"
                >
                  <span>Confirm Reservation</span>
                  <ChevronRight className="w-4 h-4 text-[#C5A059]" />
                </button>
              </div>
            </form>
          ) : (
            /* Confirmation View */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center flex flex-col items-center max-w-lg mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border-2 border-[#C5A059] flex items-center justify-center text-[#C5A059] mb-4 shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#C5A059] font-bold">
                Reservation Confirmed
              </span>

              <h3 className="font-serif text-3xl text-[#0F1B2B] mt-2 mb-3">
                We Await Your Arrival
              </h3>

              <p className="text-sm text-[#0F1B2B]/80 font-sans leading-relaxed mb-6">
                Thank you, <span className="font-semibold text-[#0F1B2B]">{contactName || 'Valued Guest'}</span>. Your reservation at{' '}
                <span className="font-semibold text-[#0F1B2B]">{currentResort.name} ({currentResort.country})</span> has been received. Our Private Concierge will contact you within 2 hours.
              </p>

              {/* Reference Card */}
              <div className="w-full p-5 rounded-2xl bg-white border border-[#EAE0D0] text-left space-y-2 mb-6">
                <div className="flex justify-between text-xs pb-2 border-b border-[#F4EFE6]">
                  <span className="text-[#0F1B2B]/60">Booking Reference</span>
                  <span className="font-mono font-bold text-[#C5A059] tracking-wider">{confirmationCode}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#0F1B2B]/60">Dates</span>
                  <span className="font-medium text-[#0F1B2B]">{checkIn} to {checkOut} ({nights} nights)</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#0F1B2B]/60">Guests</span>
                  <span className="font-medium text-[#0F1B2B]">{guests} Adults, {children} Children</span>
                </div>
                <div className="flex justify-between text-xs pt-2 border-t border-[#F4EFE6]">
                  <span className="font-serif font-semibold text-[#0F1B2B]">Total Amount</span>
                  <span className="font-serif font-bold text-base text-[#0F1B2B]">${totalPrice.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-full bg-[#0F1B2B] text-white font-serif text-xs uppercase tracking-widest shadow-md hover:bg-[#1A2E4B]"
              >
                Return to Website
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
