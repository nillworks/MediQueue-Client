import React from 'react';
import HeroSection from './HeroSection';
import HeroSlider from './HeroSlider';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <HeroSlider />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
};

export default HomePage;
