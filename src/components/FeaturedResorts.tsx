import React from 'react';
import { motion } from 'motion/react';
import { RESORTS_DATA } from '../data/resortsData';
import { ResortItem } from '../types/resort';
import { Star, MapPin, Sparkles, ArrowRight } from 'lucide-react';

interface FeaturedResortsProps {
  onSelectResort: (resort: ResortItem) => void;
  onSeeAllResorts: () => void;
}

export const FeaturedResorts: React.FC<FeaturedResortsProps> = ({
  onSelectResort,
  onSeeAllResorts,
}) => {
  // Show precisely the 3 featured resorts from the reference image
  const featuredThree = RESORTS_DATA.slice(0, 3);

  return (
    <section id="resorts" className="relative py-28 sm:py-36 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header with Golden Ornamental Divider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-16 sm:mb-20"
        >
          {/* Subtle Decorative Golden Emblem Divider */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]" />
            <div className="w-2.5 h-2.5 rotate-45 border border-[#C5A059] bg-[#C5A059]/20" />
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0F1B2B] font-light">
            Featured <span className="font-normal text-[#C5A059]">Resorts</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg font-serif text-[#0F1B2B]/70 tracking-wide">
            Discover Our Halal-Friendly Resorts
          </p>
        </motion.div>

        {/* 3 Premium Resort Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {featuredThree.map((resort, idx) => (
            <motion.div
              key={resort.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.9,
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -10,
                rotateZ: idx % 2 === 0 ? 0.6 : -0.6,
                transition: { duration: 0.4, ease: 'easeOut' },
              }}
              onClick={() => onSelectResort(resort)}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#EAE0D0] cursor-pointer flex flex-col"
            >
              {/* Image Container with Zoom & Badge */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#FAF7F2]">
                <img
                  src={resort.mainImage}
                  alt={resort.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* 100% Halal Friendly Gold Badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-md bg-[#DFCA9B]/90 backdrop-blur-md border border-white/40 shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#0F1B2B]" />
                  <span className="text-[11px] font-serif font-bold text-[#0F1B2B] tracking-wider uppercase">
                    {resort.badge}
                  </span>
                </div>

                {/* Subtle bottom gradient for contrast */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Card Meta & Info */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-2xl font-normal text-[#0F1B2B] group-hover:text-[#C5A059] transition-colors">
                      {resort.name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-[#0F1B2B]">
                      <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                      <span className="font-semibold">{resort.rating}</span>
                    </div>
                  </div>

                  <p className="text-sm font-serif text-[#0F1B2B]/60 tracking-wide">
                    {resort.country}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F4EFE6] flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#0F1B2B]/50 block">From</span>
                    <span className="text-base font-serif font-semibold text-[#0F1B2B]">
                      ${resort.pricePerNight}{' '}
                      <span className="text-xs font-normal text-[#0F1B2B]/60">/ night</span>
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-[#FAF7F2] group-hover:bg-[#0F1B2B] group-hover:text-white flex items-center justify-center transition-colors border border-[#EAE0D0]">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* "See All Resorts" Navy Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 sm:mt-16 flex justify-center"
        >
          <button
            onClick={onSeeAllResorts}
            className="px-9 py-3.5 rounded-full bg-[#0F1B2B] hover:bg-[#1A2E4B] text-white font-serif text-sm tracking-widest uppercase font-medium shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer border border-[#C5A059]/30 flex items-center gap-2"
          >
            <span>See All Resorts</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
