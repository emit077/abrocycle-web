import React from 'react';
import SEO from '@/components/SEO';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroBanner from '@/components/HeroBanner';
// import AboutSection from '@/components/sections/AboutSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CatalogSection from '@/components/sections/CatalogSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <SEO
        title="ABRO Cycles - India's First Cruiser Cycle Manufacturer"
        description="ABRO Cycles is the pioneering Indian manufacturer of cruiser cycles—crafted with precision engineering, state-of-the-art design, and a mission to introduce the world's most comfortable and stylish ride to Indian cycling enthusiasts."
        keywords="ABRO Cycles, cruiser cycle, India, bicycle manufacturer, engineering, cycling, bicycle, cruiser bike, Indian cycling, bicycle company"
        canonical="/"
      />

      <Header />

      <main>
        <HeroBanner />
        <CatalogSection />

        {/* <AboutSection /> */}
        <FeaturesSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}