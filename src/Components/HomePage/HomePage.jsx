import React from 'react';
import HeroSection from './HeroSection';
import HeroSlider from './HeroSlider';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import AvailableTutors from './AvailableTutors';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <HeroSlider />
      <AvailableTutors />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
};

export default HomePage;
