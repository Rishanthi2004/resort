import React from 'react';
import { motion } from 'motion/react';
import { UNIQUE_FEATURES } from '../data/resortsData';

export const UniqueFeatures: React.FC = () => {
  return (
    <section id="features" className="relative py-28 sm:py-36 bg-[#FAF7F2] overflow-hidden">
      {/* Subtle Botanical/Arabesque Damask Motif Background */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-repeat bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Section Heading with Ornamental Divider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-20"
        >
          {/* Subtle Golden Emblem Divider */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]" />
            <div className="w-2.5 h-2.5 rotate-45 border border-[#C5A059] bg-[#C5A059]/20" />
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0F1B2B] font-light">
            Our <span className="font-normal text-[#C5A059]">Unique</span> Features
          </h2>

          <p className="mt-4 text-base sm:text-lg font-serif text-[#0F1B2B]/70 tracking-wide max-w-xl">
            Thoughtfully crafted amenities designed for comfort, dignity, and absolute serenity.
          </p>
        </motion.div>

        {/* 4 Circular Outlined Gold Feature Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {UNIQUE_FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white/60 hover:bg-white border border-[#EAE0D0] hover:border-[#C5A059]/50 shadow-xs hover:shadow-xl transition-all duration-500"
            >
              {/* Circular Gold Filigree Badge */}
              <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border border-[#C5A059]/40 group-hover:border-[#C5A059] transition-colors duration-500" />
                {/* Secondary Inset Ring */}
                <div className="absolute inset-1.5 rounded-full border border-[#C5A059]/25 group-hover:scale-105 transition-transform duration-500" />
                {/* Inner Glow Circle */}
                <div className="w-16 h-16 rounded-full bg-[#FAF7F2] group-hover:bg-[#DFCA9B]/20 flex items-center justify-center transition-colors duration-500">
                  {/* Feature Specific Custom Gold Line Icon */}
                  {feature.iconType === 'pool' && (
                    <svg className="w-8 h-8 text-[#C5A059]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      {/* Lounger & Pool Waters */}
                      <path d="M2 18c1.5 0 2.5-1 4-1s2.5 1 4 1 2.5-1 4-1 2.5 1 4 1 2.5-1 4-1" />
                      <path d="M2 21c1.5 0 2.5-1 4-1s2.5 1 4 1 2.5-1 4-1 2.5 1 4 1 2.5-1 4-1" />
                      <path d="M4 14l5-6 6 2 4 4" />
                      <path d="M9 8V4h6v4" />
                    </svg>
                  )}

                  {feature.iconType === 'dining' && (
                    <svg className="w-8 h-8 text-[#C5A059]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      {/* Alcohol-Free Sparkling Flutes & Fresh Citrus */}
                      <path d="M6 3v6a3 3 0 0 0 6 0V3H6z" />
                      <path d="M9 12v7" />
                      <path d="M6 19h6" />
                      <path d="M15 8v4a3 3 0 0 0 6 0V8h-6z" />
                      <path d="M18 15v4" />
                      <path d="M16 19h4" />
                      <circle cx="9" cy="6" r="1" fill="#C5A059" />
                    </svg>
                  )}

                  {feature.iconType === 'family' && (
                    <svg className="w-8 h-8 text-[#C5A059]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      {/* Modest Family & Protection Shield */}
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <circle cx="12" cy="10" r="2.5" />
                      <path d="M8.5 16c.8-1.5 2-2 3.5-2s2.7.5 3.5 2" />
                    </svg>
                  )}

                  {feature.iconType === 'prayer' && (
                    <svg className="w-8 h-8 text-[#C5A059]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      {/* Mihrab Arch / Qibla Compass & Serenity Bowl */}
                      <path d="M12 3a7 7 0 0 0-7 7v9h14v-9a7 7 0 0 0-7-7z" />
                      <path d="M12 7v6" />
                      <path d="M9 10l3-3 3 3" />
                      <path d="M8 19v-4a4 4 0 0 1 8 0v4" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Tag */}
              <span className="text-[11px] font-serif uppercase tracking-widest text-[#C5A059] font-bold mb-2">
                {feature.tag}
              </span>

              {/* Title */}
              <h3 className="font-serif text-lg font-semibold text-[#0F1B2B] mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm font-sans text-[#1A222C]/70 leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
