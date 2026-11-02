import React from 'react';
import { motion } from 'motion/react';
import { HeroFloatingScene } from './3d/HeroFloatingScene';
import { Compass, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onExplore: () => void;
  onOpenBooking: () => void;
}

// 4th Resort Image Selected by User: Luxury Private Pool Villa Resort
const HERO_BACKGROUND_IMAGE = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2560&q=92';

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore, onOpenBooking }) => {

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-start overflow-hidden bg-[#0A131F]"
    >
      {/* Background Image Container with Slow Floating Zoom */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: [1.05, 1.0, 1.05] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${HERO_BACKGROUND_IMAGE}')`,
        }}
      >
        {/* Rich Cinematic Gradient Shading */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A131F]/80 via-[#0A131F]/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0A131F]/85 via-[#0A131F]/30 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0A131F]/60 to-transparent" />
      </motion.div>

      {/* 3D Atmospheric Golden Fireflies & Twilight Mist (Permanent Luxury Glow) */}
      <HeroFloatingScene className="z-10" intensity="subtle" />

      {/* Hero Typography & Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full pt-28 pb-20 sm:pt-36 sm:pb-32">
        <div className="max-w-2xl">
          {/* Subtle Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[#C5A059]/40 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#DFCA9B]" />
            <span className="text-xs font-serif tracking-[0.2em] text-[#DFCA9B] uppercase font-semibold">
              Shariah-Compliant Luxury
            </span>
          </motion.div>

          {/* Main Title Matching Reference Image */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.08] tracking-tight drop-shadow-md"
          >
            Welcome to <br />
            <span className="font-normal text-[#DFCA9B] drop-shadow-sm">
              Nahd Resorts
            </span>{' '}
            <br />
            <span className="font-normal text-[#DFCA9B]">& Holidays</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 text-lg sm:text-xl font-serif text-white/95 tracking-wide font-light max-w-lg drop-shadow-sm"
          >
            Thoughtful Spaces. Timeless Stays.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={onExplore}
              className="px-8 py-3.5 rounded-full bg-[#C5A059] hover:bg-[#B38E46] text-[#0F1B2B] font-serif text-sm tracking-widest uppercase font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2.5 border border-[#DFCA9B]"
            >
              <Compass className="w-4 h-4 text-[#0F1B2B]" />
              <span>Explore Halal Stays</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-serif text-sm tracking-widest uppercase font-medium border border-white/30 transition-all duration-300 cursor-pointer shadow-md"
            >
              Reserve Villa
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
