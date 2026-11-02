import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturedResorts } from './components/FeaturedResorts';
import { UniqueFeatures } from './components/UniqueFeatures';
import { ResortShowcaseSection } from './components/ResortShowcaseSection';
import { AllResortsModal } from './components/AllResortsModal';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { ResortItem } from './types/resort';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAllResortsOpen, setIsAllResortsOpen] = useState(false);
  const [selectedResortForBooking, setSelectedResortForBooking] = useState<ResortItem | null>(null);

  const handleOpenBooking = (resort?: ResortItem) => {
    if (resort) {
      setSelectedResortForBooking(resort);
    }
    setIsBookingOpen(true);
  };

  const handleSelectResort = (resort: ResortItem) => {
    setSelectedResortForBooking(resort);
    setIsAllResortsOpen(true);
  };

  const handleExploreStays = () => {
    const el = document.getElementById('resorts');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A222C] font-sans selection:bg-[#C5A059] selection:text-[#0F1B2B] relative overflow-x-hidden">
      {/* Premium Animated Sticky Navbar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenAllResorts={() => setIsAllResortsOpen(true)}
        activeSection="home"
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Full-screen Luxury Resort Hero with 3D Floating Scene */}
        <HeroSection
          onExplore={handleExploreStays}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 2. About The Resort Section with Scroll Clipping Reveal */}
        <AboutSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 3. Featured Resorts Section (3 Cards Matching Reference) */}
        <FeaturedResorts
          onSelectResort={handleSelectResort}
          onSeeAllResorts={() => setIsAllResortsOpen(true)}
        />

        {/* 4. Unique Features Section (Circular Gold Outlined Icons & Damask Pattern) */}
        <UniqueFeatures />

        {/* 5. Interactive 3D Floating Island / Villa Showcase with Ocean Ambience */}
        <ResortShowcaseSection
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* Minimal Footer with Contact Information */}
      <Footer />

      {/* Full Resorts Collection Modal */}
      <AllResortsModal
        isOpen={isAllResortsOpen}
        onClose={() => setIsAllResortsOpen(false)}
        onBookResort={(resort) => handleOpenBooking(resort)}
        initialSelectedResort={selectedResortForBooking}
      />

      {/* Luxury Reservation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedResort={selectedResortForBooking}
      />
    </div>
  );
}
