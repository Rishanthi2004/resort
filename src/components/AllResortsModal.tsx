import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RESORTS_DATA } from '../data/resortsData';
import { ResortItem } from '../types/resort';
import { X, Star, MapPin, Users, Maximize2, ShieldCheck, Check, Sparkles } from 'lucide-react';

interface AllResortsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookResort: (resort: ResortItem) => void;
  initialSelectedResort?: ResortItem | null;
}

export const AllResortsModal: React.FC<AllResortsModalProps> = ({
  isOpen,
  onClose,
  onBookResort,
  initialSelectedResort = null,
}) => {
  const [selectedResort, setSelectedResort] = useState<ResortItem | null>(initialSelectedResort);
  const [filterCountry, setFilterCountry] = useState<string>('all');
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);

  if (!isOpen) return null;

  const currentDetail = selectedResort || (RESORTS_DATA[0]);

  const filteredResorts = filterCountry === 'all'
    ? RESORTS_DATA
    : RESORTS_DATA.filter(r => r.country.toLowerCase().includes(filterCountry.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="bg-[#FAF7F2] rounded-3xl w-full max-w-6xl max-h-[92vh] shadow-2xl border border-[#C5A059]/30 flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="p-6 border-b border-[#EAE0D0] flex items-center justify-between bg-white">
          <div>
            <span className="text-[11px] font-serif uppercase tracking-[0.25em] text-[#C5A059] font-bold">
              Exclusive Portfolio
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#0F1B2B]">
              Discover Halal-Friendly Stays
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full hover:bg-[#F4EFE6] text-[#0F1B2B] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body: Two columns on desktop */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12">
          {/* Left List of Resorts (lg:col-span-5) */}
          <div className="lg:col-span-5 border-r border-[#EAE0D0] p-6 space-y-4 bg-[#FAF7F2]">
            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {['all', 'Maldives', 'Antalya', 'Bali', 'Dubai', 'Malaysia'].map((c) => (
                <button
                  key={c}
                  onClick={() => setFilterCountry(c)}
                  className={`px-3 py-1.5 rounded-full text-xs font-serif capitalize cursor-pointer transition-all ${
                    filterCountry === c
                      ? 'bg-[#0F1B2B] text-white'
                      : 'bg-white text-[#0F1B2B]/75 border border-[#EAE0D0] hover:border-[#C5A059]'
                  }`}
                >
                  {c === 'all' ? 'All Stays' : c}
                </button>
              ))}
            </div>

            {/* List */}
            <div className="space-y-3">
              {filteredResorts.map((r) => {
                const isSelected = currentDetail.id === r.id;
                return (
                  <div
                    key={r.id}
                    onClick={() => {
                      setSelectedResort(r);
                      setActivePhotoIdx(0);
                    }}
                    className={`p-3.5 rounded-2xl cursor-pointer transition-all border flex gap-3.5 items-center ${
                      isSelected
                        ? 'bg-white border-[#C5A059] shadow-md ring-1 ring-[#C5A059]'
                        : 'bg-white/70 border-[#EAE0D0] hover:bg-white hover:border-[#C5A059]/40'
                    }`}
                  >
                    <img
                      src={r.mainImage}
                      alt={r.name}
                      className="w-20 h-20 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-serif text-base font-semibold text-[#0F1B2B] truncate">
                          {r.name}
                        </h4>
                        <span className="text-xs font-serif font-bold text-[#C5A059]">
                          ${r.pricePerNight}
                        </span>
                      </div>
                      <p className="text-xs text-[#0F1B2B]/60 truncate font-serif mt-0.5">
                        {r.location}, {r.country}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-[10px] bg-[#C5A059]/15 text-[#0F1B2B] font-serif px-2 py-0.5 rounded font-medium">
                          {r.privacyLevel}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Detail Pane (lg:col-span-7) */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-white flex flex-col justify-between">
            <div>
              {/* Photo Gallery Showcase */}
              <div className="relative rounded-2xl overflow-hidden h-72 sm:h-80 shadow-md">
                <img
                  src={currentDetail.gallery[activePhotoIdx] || currentDetail.mainImage}
                  alt={currentDetail.name}
                  className="w-full h-full object-cover transition-all duration-500"
                />

                <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-white text-xs font-serif flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#DFCA9B]" />
                  <span>{currentDetail.badge}</span>
                </div>

                {/* Thumbnails Bar */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 overflow-x-auto p-1.5 bg-black/40 backdrop-blur-md rounded-xl">
                  {currentDetail.gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActivePhotoIdx(i)}
                      className={`relative w-14 h-10 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                        activePhotoIdx === i ? 'border-[#C5A059] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumb" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Title & Stats */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-3xl font-normal text-[#0F1B2B]">
                    {currentDetail.name}
                  </h3>
                  <p className="text-sm font-serif text-[#C5A059] mt-0.5">
                    {currentDetail.subTitle}
                  </p>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-serif font-bold text-[#0F1B2B]">
                    ${currentDetail.pricePerNight}{' '}
                    <span className="text-xs font-normal text-[#0F1B2B]/60">/ night</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[#0F1B2B] justify-end mt-0.5">
                    <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                    <span className="font-bold">{currentDetail.rating}</span>
                    <span className="text-[#0F1B2B]/60">({currentDetail.reviewsCount} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-3 gap-3 my-5 py-3 border-y border-[#EAE0D0] text-center">
                <div>
                  <span className="text-xs text-[#0F1B2B]/50 block">Dimensions</span>
                  <span className="text-xs sm:text-sm font-serif font-medium text-[#0F1B2B]">
                    {currentDetail.dimensions}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-[#0F1B2B]/50 block">Bedrooms</span>
                  <span className="text-xs sm:text-sm font-serif font-medium text-[#0F1B2B]">
                    {currentDetail.bedrooms} Suites ({currentDetail.maxGuests} Guests)
                  </span>
                </div>
                <div>
                  <span className="text-xs text-[#0F1B2B]/50 block">Pool Privacy</span>
                  <span className="text-xs sm:text-sm font-serif font-medium text-[#C5A059]">
                    {currentDetail.privacyLevel}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm font-sans text-[#1A222C]/75 leading-relaxed font-light">
                {currentDetail.description}
              </p>

              {/* Highlights */}
              <div className="mt-5 space-y-2">
                <h5 className="text-xs font-serif uppercase tracking-widest text-[#0F1B2B] font-bold">
                  Sanctuary Highlights:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentDetail.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#0F1B2B]/80 font-sans">
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-5 border-t border-[#EAE0D0] flex items-center justify-between">
              <span className="text-xs text-[#0F1B2B]/60">
                100% Halal Verified & Guaranteed Seclusion
              </span>

              <button
                onClick={() => {
                  onClose();
                  onBookResort(currentDetail);
                }}
                className="px-8 py-3 rounded-full bg-[#0F1B2B] hover:bg-[#1A2E4B] text-white font-serif text-xs tracking-widest uppercase font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center gap-2 border border-[#C5A059]/40"
              >
                <span>Book This Stay</span>
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
