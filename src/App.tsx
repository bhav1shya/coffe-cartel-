import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceBar } from './components/ExperienceBar';
import { MenuPreview } from './components/MenuPreview';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { ReservationSection } from './components/ReservationSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { StoryModal } from './components/StoryModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [activeMenuCategory, setActiveMenuCategory] = useState<
    'hot-coffee' | 'cold-coffee' | 'natural-brews' | 'shakeys' | 'waffles-pancakes'
  >('hot-coffee');

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  const handleExploreMenu = () => {
    const menuEl = document.getElementById('menu-preview');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryFromPreview = (
    categoryId: 'hot-coffee' | 'cold-coffee' | 'natural-brews' | 'shakeys' | 'waffles-pancakes'
  ) => {
    setActiveMenuCategory(categoryId);
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewFullMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0a07] text-[#F3EDE4] flex flex-col selection:bg-[#C5A059]/30 selection:text-[#FAF7F2]">
      {/* 1. Transparent to Dark Glass Navigation */}
      <Navbar onReserveClick={handleOpenBooking} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 2. Full-Screen Cinematic Hero */}
        <Hero
          onReserveClick={handleOpenBooking}
          onExploreMenuClick={handleExploreMenu}
          onWatchStoryClick={() => setIsStoryModalOpen(true)}
        />

        {/* 3. Horizontal Experience Bar */}
        <ExperienceBar onReserveClick={handleOpenBooking} />

        {/* 4. Menu Preview: 4 Editorial Tiles */}
        <MenuPreview
          onSelectCategory={handleSelectCategoryFromPreview}
          onViewFullMenu={handleViewFullMenu}
        />

        {/* 5. Dedicated Menu Section with Tabs & Search */}
        <MenuSection
          activeCategory={activeMenuCategory}
          onCategoryChange={setActiveMenuCategory}
          onReserveClick={handleOpenBooking}
        />

        {/* 6. Editorial About Section (Interior + 4 Highlights) */}
        <AboutSection />

        {/* 7. Masonry Gallery with Fullscreen Lightbox */}
        <GallerySection />

        {/* 8. Prominent Reviews Section (4.7 ★★★★★ 798+ Reviews + Carousel) */}
        <ReviewsSection />

        {/* 9. Location, Opening Hours (Live Status) & Map Section */}
        <LocationHoursSection onReserveClick={handleOpenBooking} />

        {/* 10. Table Reservation Section */}
        <ReservationSection />
      </main>

      {/* 11. Sophisticated Dark Footer */}
      <Footer />

      {/* 12. Floating Actions (Mobile call & reserve) */}
      <FloatingActions onReserveClick={handleOpenBooking} />

      {/* 13. Interactive Table Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
      />

      {/* 14. "Watch Our Story" Narrative Modal */}
      <StoryModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
        onReserveClick={handleOpenBooking}
      />
    </div>
  );
}
