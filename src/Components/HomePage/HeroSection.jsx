// HeroSection.jsx
import React from 'react';
import LeftHero from './LeftHero';
import RightHeroSection from './RightHeroSection';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] dark:bg-[#0B0F19] flex items-center lg:py-25 transition-colors duration-300">
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-[-100px] w-[260px] sm:w-[320px] h-[260px] sm:h-[320px] bg-blue-200/40 dark:bg-blue-600/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-0 right-[-120px] w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] bg-cyan-200/40 dark:bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>

      {/* Container */}
      <div className="container mx-auto px-4  pt-25 pb-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <LeftHero />
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <RightHeroSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
