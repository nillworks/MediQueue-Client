'use client';

import React from 'react';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: 'Master Your Exams',
    subtitle: 'Expert tutors for medical, engineering, and competitive exams.',
    image:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=600&fit=crop',
    cta: 'Find Tutors',
  },

  {
    id: 2,
    title: 'Learn Without Limits',
    subtitle: 'Flexible scheduling that adapts perfectly to your lifestyle.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop',
    cta: 'Book Session',
  },

  {
    id: 3,
    title: 'Verified Excellence',
    subtitle: 'Every tutor is carefully verified for premium quality learning.',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=600&fit=crop',
    cta: 'Explore Now',
  },
];

const HeroSlider = () => {
  return (
    <section className="px-4 py-8 lg:pt-10">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[28px] overflow-hidden shadow-2xl">
          {/* Custom Buttons */}
          <div className="hero-prev absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-all duration-300">
            <FaChevronLeft className="text-sm" />
          </div>

          <div className="hero-next absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-all duration-300">
            <FaChevronRight className="text-sm" />
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            loop={true}
            speed={1000}
            // Auto Slide
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: '.hero-prev',
              nextEl: '.hero-next',
            }}
            className="h-[350px] sm:h-[350px] lg:h-[400px]"
          >
            {slides.map(slide => (
              <SwiperSlide key={slide.id}>
                <div className="relative w-full h-full">
                  {/* Background Image */}
                  <Image
                    fill
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />

                  {/* Content */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="px-6 sm:px-10 lg:px-16 max-w-2xl">
                      {/* Badge */}
                      <span className="inline-block mb-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium">
                        Trusted Learning Platform
                      </span>

                      {/* Title */}
                      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight mb-4">
                        {slide.title}
                      </h1>

                      {/* Subtitle */}
                      <p className="text-sm sm:text-base lg:text-lg text-white/85 leading-7 mb-7 max-w-xl">
                        {slide.subtitle}
                      </p>

                      {/* Buttons */}
                      <div className="flex flex-wrap items-center gap-4">
                        <Link
                          href="/tutors"
                          className="px-6 py-3 rounded-2xl bg-white text-black text-sm sm:text-base font-semibold hover:bg-gray-200 transition-all duration-300"
                        >
                          {slide.cta}
                        </Link>

                        <Link
                          href="/about"
                          className="px-6 py-3 rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md text-white text-sm sm:text-base font-semibold hover:bg-white hover:text-black transition-all duration-300"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
