import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles, Compass } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenAllResorts: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenAllResorts,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Halal Resorts', href: '#resorts', action: onOpenAllResorts },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#features' },
    { name: 'Contact Us', href: '#footer' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FAF7F2]/90 backdrop-blur-md shadow-sm border-b border-[#C5A059]/25 py-3'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo with 8-pointed geometric emblem */}
          <a
            href="#home"
            className="flex items-center gap-3.5 group cursor-pointer"
          >
            {/* Custom SVG Geometric Star Emblem */}
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-10 h-10 text-[#C5A059] transition-transform duration-700 group-hover:rotate-45"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              >
                {/* 8-pointed star geometry matching reference */}
                <polygon
                  points="50,5 62,38 95,50 62,62 50,95 38,62 5,50 38,38"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                />
                <circle cx="50" cy="50" r="14" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="50" cy="50" r="4" fill="#C5A059" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wide text-[#0F1B2B] leading-none">
                Nahd
              </span>
              <span className="text-[9px] font-sans tracking-[0.28em] text-[#C5A059] uppercase font-bold mt-1">
                Resorts & Holidays
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.action) {
                    e.preventDefault();
                    link.action();
                  }
                }}
                className="text-sm font-serif tracking-wider text-[#1A222C] hover:text-[#C5A059] transition-colors relative py-1 group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions: "Book Now" Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-7 py-2.5 rounded-full bg-[#0F1B2B] hover:bg-[#1A2E4B] text-white text-sm font-serif tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2 border border-[#C5A059]/30"
            >
              <span>Book Now</span>
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-4 py-1.5 rounded-full bg-[#0F1B2B] text-white text-xs font-serif tracking-wider uppercase"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0F1B2B] rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-18 z-40 bg-[#FAF7F2] border-b border-[#C5A059]/30 shadow-xl px-6 py-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (link.action) {
                      e.preventDefault();
                      link.action();
                    }
                  }}
                  className="text-lg font-serif text-[#0F1B2B] hover:text-[#C5A059] py-2 border-b border-[#EAE0D0]/50"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="mt-2 w-full py-3 rounded-full bg-[#0F1B2B] text-white text-center font-serif tracking-wider uppercase text-sm shadow-md"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
