import React, { useState } from 'react';
import { Mail, Phone, MapPin, Sparkles, Send, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <footer id="footer" className="relative bg-[#0F1B2B] text-white pt-20 pb-12 overflow-hidden border-t border-[#C5A059]/20">
      {/* Decorative Gold Stars Backdrop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Philosophy (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3.5 mb-5">
              {/* 8-pointed gold star emblem */}
              <div className="w-9 h-9 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="w-9 h-9 text-[#DFCA9B]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                >
                  <polygon
                    points="50,5 62,38 95,50 62,62 50,95 38,62 5,50 38,38"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                  />
                  <circle cx="50" cy="50" r="14" stroke="currentColor" strokeWidth="2.5" />
                  <circle cx="50" cy="50" r="4" fill="#DFCA9B" />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-2xl font-semibold tracking-wide text-white leading-none">
                  Nahd
                </span>
                <span className="text-[9px] font-sans tracking-[0.28em] text-[#DFCA9B] uppercase font-bold mt-1">
                  Resorts & Holidays
                </span>
              </div>
            </div>

            <p className="text-sm font-serif text-white/75 font-light leading-relaxed max-w-sm">
              Thoughtful Spaces. Timeless Stays. An international collection of private pool villas and secluded sanctuaries dedicated to halal-friendly family tranquility.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs text-[#DFCA9B] font-serif">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Certified Shariah-Compliant Hospitality</span>
            </div>
          </div>

          {/* Col 2: Destinations (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-serif uppercase tracking-[0.25em] text-[#DFCA9B] font-bold mb-4">
              Sanctuaries
            </h4>
            <ul className="space-y-2.5 text-sm font-serif text-white/70">
              <li>
                <a href="#resorts" className="hover:text-[#DFCA9B] transition-colors">
                  Maldives • Baa Atoll Lagoon
                </a>
              </li>
              <li>
                <a href="#resorts" className="hover:text-[#DFCA9B] transition-colors">
                  Antalya • Mediterranean Cliffs
                </a>
              </li>
              <li>
                <a href="#resorts" className="hover:text-[#DFCA9B] transition-colors">
                  Bali • Ubud Rainforest Sanctuary
                </a>
              </li>
              <li>
                <a href="#resorts" className="hover:text-[#DFCA9B] transition-colors">
                  Dubai • Royal Desert Dunes
                </a>
              </li>
              <li>
                <a href="#resorts" className="hover:text-[#DFCA9B] transition-colors">
                  Malaysia • Langkawi Overwater Villa
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Concierge & Contact (lg:col-span-5) */}
          <div className="lg:col-span-5">
            <h4 className="text-xs font-serif uppercase tracking-[0.25em] text-[#DFCA9B] font-bold mb-4">
              Private Concierge & Inquiries
            </h4>

            <div className="space-y-3 text-sm font-sans text-white/80">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#DFCA9B] shrink-0" />
                <span>+971 4 800 6243 (24/7 International Desk)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#DFCA9B] shrink-0" />
                <span>concierge@nahdresorts.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#DFCA9B] shrink-0" />
                <span>One Central, Dubai World Trade Centre, UAE</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <span className="text-xs font-serif text-white/60 block mb-2">
                Receive confidential private villa release invitations:
              </span>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#DFCA9B]"
                />
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#C5A059] hover:bg-[#DFCA9B] text-[#0F1B2B] text-xs font-serif uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  {isSubscribed ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
                  <span>{isSubscribed ? 'Joined' : 'Join'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 font-serif gap-4">
          <p>© {new Date().getFullYear()} Nahd Resorts & Holidays. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Charter
            </span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Halal Standards
            </span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
