'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';

import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Jessica Adams',
    role: 'Medical Student',
    text: 'MediQueue transformed my MCAT preparation. The verified tutors and flexible scheduling helped me score in the 99th percentile.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop',
  },

  {
    id: 2,
    name: 'David Chen',
    role: 'Engineering Student',
    text: 'The booking system is incredibly smooth. I found an amazing physics tutor within minutes and improved my GPA significantly.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop',
  },

  {
    id: 3,
    name: 'Maria Garcia',
    role: 'High School Senior',
    text: "Secure payments and professional tutors gave me peace of mind. Best platform for academic support I've ever used.",
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop',
  },

  {
    id: 4,
    name: 'Sarah Jenkins',
    role: 'Biomedical Graduate',
    text: 'The interface is beautiful and the tutor match quality is outstanding. I passed my board exams with flying colors thanks to them.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-[#fcfdff] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold tracking-wide mb-5">
            Testimonials
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#091833] leading-tight">
            Student Success Stories
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-slate-500 leading-7">
            Discover how MediQueue helps students achieve academic excellence
            with trusted tutors and flexible learning.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass:
              'swiper-pagination-bullet !w-3 !h-3 !bg-slate-300 !opacity-100 transition-all duration-300',
            bulletActiveClass: '!w-8 !rounded-full !bg-blue-600',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            640: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-14"
        >
          {testimonials.map(item => (
            <SwiperSlide key={item.id}>
              <div className="group bg-white border border-slate-100 rounded-[30px] p-8 h-full transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_-15px_rgba(37,99,235,0.12)] hover:border-blue-100">
                {/* Quote Icon */}
                <div className="w-8 h-8 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 transition duration-500 group-hover:bg-blue-600">
                  <FaQuoteLeft className="text-blue-600 text-lg group-hover:text-white transition duration-500" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400 w-4 h-4" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-slate-600 leading-8 text-sm mb-8">
                  {item.text}
                </p>

                {/* User */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-blue-50">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-bold text-[#091833] text-base">
                      {item.name}
                    </h4>

                    <p className="text-sm text-slate-400">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
