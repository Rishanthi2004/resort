import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Sparkles, X, CheckCircle2, BellRing, Award, Compass } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const [showLearnMoreModal, setShowLearnMoreModal] = useState(false);

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-[#FAF7F2] overflow-hidden">
      {/* Decorative Subtle Background Flourishes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Prominently Featuring the Reception Image */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C5A059]/40 bg-[#0F1B2B]"
            >
              {/* Main Image: The Reception Desk Image */}
              <div className="relative h-[440px] sm:h-[520px] w-full overflow-hidden">
                <img
                  src="/assets/aistudio/image_4def3460.png"
                  alt="Nahd Resorts Luxury Reception & Concierge"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />

                {/* Subtle Gradient for Bottom Readability */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0F1B2B]/90 via-[#0F1B2B]/40 to-transparent pointer-events-none" />

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-[#0F1B2B]/80 backdrop-blur-md border border-[#C5A059]/50 flex items-center gap-2">
                  <BellRing className="w-3.5 h-3.5 text-[#DFCA9B]" />
                  <span className="text-[11px] font-serif uppercase tracking-widest text-[#DFCA9B] font-bold">
                    Private Concierge & Reception Desk
                  </span>
                </div>

                {/* Floating Bottom Info Card */}
                <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#C5A059]/30 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FAF7F2] flex items-center justify-center border border-[#C5A059]/40 text-[#C5A059] shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-serif font-semibold text-[#0F1B2B]">
                        24/7 Discrete Hospitality
                      </h4>
                      <p className="text-xs text-[#0F1B2B]/70 font-sans">
                        Warm arrival, private check-in & personalized care
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-serif font-bold text-[#C5A059] uppercase tracking-wider hidden sm:inline-block">
                    Verified
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Decorative Inset Frame */}
            <div className="absolute -bottom-3 -right-3 w-48 h-48 border-2 border-[#C5A059]/25 rounded-3xl -z-10 hidden sm:block" />
          </div>

          {/* Right Column: Typography & Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Section Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#C5A059]" />
              <span className="text-xs font-serif tracking-[0.25em] text-[#C5A059] uppercase font-semibold">
                Our Philosophy
              </span>
            </div>

            {/* Heading with Gold Accent on "Us" */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0F1B2B] font-light leading-tight">
              About <span className="font-normal text-[#C5A059]">Us</span>
            </h2>

            {/* Description matching reference copy */}
            <p className="mt-5 text-lg sm:text-xl font-serif text-[#0F1B2B]/85 font-light leading-relaxed">
              A Shariah-compliant platform offering private, peaceful, and premium resort experiences for families worldwide.
            </p>

            <p className="mt-3 text-sm sm:text-base font-sans text-[#1A222C]/75 leading-relaxed font-light">
              From the warm wood and granite craftsmanship of our reception desk to every secluded private pool terrace, Nahd Resorts & Holidays curates an atmosphere of absolute dignity and calm. We combine five-star international concierge service with guaranteed visual privacy, halal culinary excellence, and alcohol-free environments.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-2 gap-4 mt-7 w-full">
              <div className="p-4 rounded-2xl bg-white border border-[#EAE0D0] shadow-xs">
                <span className="block text-2xl font-serif text-[#C5A059] font-medium">100%</span>
                <span className="text-xs font-serif text-[#0F1B2B]/75 uppercase tracking-wider block mt-0.5">
                  Halal Gourmet & Alcohol-Free
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#EAE0D0] shadow-xs">
                <span className="block text-2xl font-serif text-[#C5A059] font-medium">Zero</span>
                <span className="text-xs font-serif text-[#0F1B2B]/75 uppercase tracking-wider block mt-0.5">
                  Outside Sightlines
                </span>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="mt-9 flex items-center gap-4">
              <button
                onClick={() => setShowLearnMoreModal(true)}
                className="px-8 py-3.5 rounded-full bg-[#0F1B2B] hover:bg-[#1A2E4B] text-white text-sm font-serif tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer border border-[#C5A059]/30"
              >
                Learn More
              </button>

              <button
                onClick={onOpenBooking}
                className="text-sm font-serif tracking-wider text-[#C5A059] hover:text-[#0F1B2B] transition-colors flex items-center gap-1.5 font-medium cursor-pointer"
              >
                <span>Plan Your Stay</span>
                <span>→</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Learn More Philosophy Modal */}
      <AnimatePresence>
        {showLearnMoreModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#FAF7F2] rounded-3xl max-w-2xl w-full p-8 shadow-2xl border border-[#C5A059]/30 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setShowLearnMoreModal(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#EAE0D0] text-[#0F1B2B] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <span className="text-xs font-serif uppercase tracking-[0.2em] text-[#C5A059] font-bold">
                  The Nahd Difference
                </span>
              </div>

              <h3 className="font-serif text-3xl text-[#0F1B2B] mb-4">
                Redefining Luxury with Uncompromised Values
              </h3>

              {/* Prominent Reception Image in Modal */}
              <div className="w-full h-56 rounded-2xl overflow-hidden mb-6 border border-[#C5A059]/30 shadow-md">
                <img
                  src="/assets/aistudio/image_4def3460.png"
                  alt="Nahd Reception Desk"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 text-sm font-sans text-[#1A222C]/80 leading-relaxed">
                <p>
                  Nahd Resorts & Holidays was founded with a singular purpose: to allow discerning travelers and their families to experience the world's most breathtaking tropical destinations without ever compromising on their peace of mind, modest lifestyle, or values.
                </p>

                <div className="bg-white p-5 rounded-2xl border border-[#EAE0D0] space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-serif font-semibold text-[#0F1B2B]">
                        Warm Reception & Discrete Check-in
                      </h5>
                      <p className="text-xs text-[#0F1B2B]/70 mt-0.5">
                        Our private reception teams greet you with customary herbal beverages and ensure seamless, unhurried villa registration with complete privacy.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-serif font-semibold text-[#0F1B2B]">
                        Zero-Sightline Privacy Architecture
                      </h5>
                      <p className="text-xs text-[#0F1B2B]/70 mt-0.5">
                        Pools, gardens, and terraces are physically shielded from adjoining properties, drones, and pedestrian access.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-serif font-semibold text-[#0F1B2B]">
                        100% Certified Halal Dining
                      </h5>
                      <p className="text-xs text-[#0F1B2B]/70 mt-0.5">
                        All in-villa dining, barbecue banquets, and breakfast spreads are prepared in certified alcohol-free kitchens with farm-to-table organic halal ingredients.
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  Whether you are planning a serene honeymoon, a multi-generational family reunion, or a peaceful restorative retreat, our private concierge ensures every moment is tailored to perfection.
                </p>
              </div>

              <div className="mt-8 flex justify-end gap-3">
                <button
                  onClick={() => {
                    setShowLearnMoreModal(false);
                    onOpenBooking();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#0F1B2B] text-white text-xs font-serif uppercase tracking-widest shadow-md hover:bg-[#1A2E4B]"
                >
                  Explore Booking
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
