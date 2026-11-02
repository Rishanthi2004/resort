import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HeroFloatingScene } from './3d/HeroFloatingScene';
import { oceanAmbience } from '../utils/ambientAudio';
import { Sparkles, Compass, Volume2, VolumeX, Eye, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

interface ResortShowcaseSectionProps {
  onOpenBooking: () => void;
}

interface ShowcaseVilla {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  location: string;
  description: string;
  image: string;
  features: string[];
}

const SHOWCASE_VILLAS: ShowcaseVilla[] = [
  {
    id: 'infinity-pool-villas',
    category: 'Private Pool Villas',
    title: 'The Azure Horizon Pool Pavilion',
    subtitle: 'Zero-Overlook Seclusion with Turquoise Infinity Waters',
    location: 'Baa Atoll, Maldives',
    description: 'Designed exclusively for absolute visual privacy, this master estate features a 16-meter private plunge pool, wooden sundeck shielded by lush coconut palms, and direct access to pristine coral waters.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2400&q=90',
    features: ['100% Unoverlooked Pool', 'In-Villa Floating Breakfast', 'Private Sunset Terrace', 'Personal Butler'],
  },
  {
    id: 'lagoon-water-villas',
    category: 'Overwater Sanctuaries',
    title: 'The Royal Stilt Lagoon Estate',
    subtitle: 'Glass-Bottom Living Salon & Suspended Ocean Net',
    location: 'Datai Bay, Malaysia',
    description: 'Perched above turquoise calm waters, offering total privacy screens, private infinity pool spilling into the sea, and pure peace under open tropical skies in a certified alcohol-free sanctuary.',
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=2400&q=90',
    features: ['Direct Sea Stairway', 'Private Hammock Net', 'Glass Viewing Floor', 'Non-Alcoholic Bar'],
  },
  {
    id: 'tropical-gardens',
    category: 'Rainforest & Gardens',
    title: 'The Ubud Waterfall Valley Villa',
    subtitle: 'Handcrafted Teak Architecture & Private Jungle Spring',
    location: 'Highlands, Bali',
    description: 'Immersed in emerald rainforest hills, surrounded by private cascading waterways, private infinity-edge spring pool, and serene shaded yoga and prayer pavilions.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2400&q=90',
    features: ['Private Springwater Pool', 'Secret Waterfall Garden', 'Teak & Volcanic Stone', 'Organic Halal Cuisine'],
  },
  {
    id: 'luxury-interiors',
    category: 'Presidential Interiors',
    title: 'The Grand Mediterranean Salon',
    subtitle: 'Floor-to-Ceiling Panoramic Glass & Marble Baths',
    location: 'Kalkan, Antalya',
    description: 'Expansive master suites with hand-carved stone fireplaces, freestanding soaking tubs overlooking the sea, private Turkish hammam, and custom modesty partition options.',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=2400&q=90',
    features: ['Private Hammam & Sauna', 'Panoramic Ocean Glass', 'Bespoke Modesty Layout', '24/7 Room Service'],
  },
];

export const ResortShowcaseSection: React.FC<ResortShowcaseSectionProps> = ({ onOpenBooking }) => {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [isAudioActive, setIsAudioActive] = useState(false);

  const currentVilla = SHOWCASE_VILLAS[activeTabIdx];

  const toggleSound = () => {
    const active = oceanAmbience.toggle();
    setIsAudioActive(active);
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          {/* Subtle Decorative Golden Emblem Divider */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]" />
            <div className="w-2.5 h-2.5 rotate-45 border border-[#C5A059] bg-[#C5A059]/20" />
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-xs font-serif tracking-[0.2em] text-[#0F1B2B] uppercase font-semibold">
              Photorealistic Resort Showcase
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0F1B2B] font-light">
            The Private <span className="font-normal text-[#C5A059]">Sanctuary</span> Collection
          </h2>

          <p className="mt-4 text-base sm:text-lg font-serif text-[#0F1B2B]/70">
            Explore large, realistic resort views of our private pool villas, lush tropical gardens, and serene interiors.
          </p>

          {/* Category Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {SHOWCASE_VILLAS.map((villa, idx) => (
              <button
                key={villa.id}
                onClick={() => setActiveTabIdx(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-serif tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeTabIdx === idx
                    ? 'bg-[#0F1B2B] text-white shadow-md border border-[#C5A059]/50 scale-105'
                    : 'bg-white text-[#0F1B2B]/75 border border-[#EAE0D0] hover:border-[#C5A059] hover:bg-white'
                }`}
              >
                {villa.category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Full-Width Luxury Resort Image Showcase with 3D Floating Elements */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#C5A059]/30 h-[520px] sm:h-[620px] group bg-[#0F1B2B]">
          {/* Active Resort Background Image with Smooth Crossfade */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentVilla.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1.0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.0, ease: 'easeInOut' }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${currentVilla.image}')` }}
            >
              {/* Soft Gradient Shading for Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B2B]/90 via-[#0F1B2B]/35 to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F1B2B]/70 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Floating 3D Elements (Palm leaves, plumeria flowers, golden stars) */}
          <HeroFloatingScene className="z-10" />

          {/* Top Control Bar */}
          <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between pointer-events-auto">
            <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#DFCA9B]" />
              <span className="text-xs font-serif tracking-wider">{currentVilla.location}</span>
            </div>

            {/* Ocean Sound Audio Toggle */}
            <button
              onClick={toggleSound}
              className={`px-4 py-2 rounded-full text-xs font-serif tracking-wider uppercase backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer border ${
                isAudioActive
                  ? 'bg-[#C5A059] text-[#0F1B2B] border-[#DFCA9B] font-semibold shadow-lg'
                  : 'bg-black/40 text-white border-white/20 hover:bg-black/60'
              }`}
            >
              {isAudioActive ? <Volume2 className="w-4 h-4 text-[#0F1B2B]" /> : <VolumeX className="w-4 h-4 text-white/70" />}
              <span>{isAudioActive ? 'Ocean Surf: On' : 'Wave Sound'}</span>
            </button>
          </div>

          {/* Bottom Content Card Overlay */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 z-20 flex flex-col md:flex-row items-end justify-between gap-6 pointer-events-auto">
            <div className="max-w-xl text-left bg-black/40 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/20 text-white">
              <span className="text-[11px] font-serif uppercase tracking-[0.25em] text-[#DFCA9B] font-bold">
                {currentVilla.category}
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal mt-1 leading-snug">
                {currentVilla.title}
              </h3>

              <p className="mt-2 text-xs sm:text-sm font-sans text-white/80 font-light leading-relaxed">
                {currentVilla.description}
              </p>

              {/* Villa Amenities Badges */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {currentVilla.features.map((feat, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-serif px-2.5 py-1 rounded-md bg-white/15 text-white/95 border border-white/20"
                  >
                    ✓ {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="shrink-0 flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="px-8 py-3.5 rounded-full bg-[#C5A059] hover:bg-[#DFCA9B] text-[#0F1B2B] font-serif text-sm tracking-widest uppercase font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2 border border-[#DFCA9B]"
              >
                <span>Reserve This Villa</span>
                <ArrowRight className="w-4 h-4 text-[#0F1B2B]" />
              </button>
            </div>
          </div>
        </div>

        {/* Full-width Luxury Quote Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0F1B2B] via-[#16273B] to-[#0F1B2B] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl border border-[#C5A059]/30"
        >
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-serif tracking-[0.25em] text-[#DFCA9B] uppercase font-bold">
              Unmatched Hospitality
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white mt-1 leading-snug">
              "A tranquil oasis where you can unwind and embrace paradise in total privacy."
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-white/70 font-sans">
              Every villa reservation includes personalized pre-arrival concierge, dedicated private chef options, and guaranteed visual seclusion.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-full bg-[#C5A059] hover:bg-[#DFCA9B] text-[#0F1B2B] font-serif text-sm tracking-widest uppercase font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2 border border-[#DFCA9B]"
            >
              <span>Explore Halal Stays</span>
              <Compass className="w-4 h-4 text-[#0F1B2B]" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
