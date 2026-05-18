import React from 'react';
import SearchTutors from './SearchTutors';
import CategoryFilter from './CategoryFilter';
import TutorsCard from '@/shared/TutorsCard';

const tutorsData = [
  {
    name: 'Dr. Sarah Chen',
    subject: 'Mathematics',
    university: 'Columbia University',
    rating: 4.9,
    schedule: 'Mon-Fri, 9AM-5PM',
    location: 'New York • Online',
    experience: 8,
    price: 45,
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800',
  },
  {
    name: 'Prof. James Wilson',
    subject: 'Physics',
    university: 'MIT',
    rating: 4.8,
    schedule: 'Tue-Sat, 10AM-6PM',
    location: 'Boston • In-Person',
    experience: 12,
    price: 60,
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800',
  },
  {
    name: 'Emily Rodriguez',
    subject: 'Chemistry',
    university: 'University of Chicago',
    rating: 4.7,
    schedule: 'Mon-Thu, 2PM-8PM',
    location: 'Chicago • Hybrid',
    experience: 5,
    price: 40,
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800',
  },
  {
    name: 'Dr. Michael Park',
    subject: 'Biology',
    university: 'Stanford University',
    rating: 4.9,
    schedule: 'Wed-Sun, 8AM-4PM',
    location: 'Seattle • Online',
    experience: 10,
    price: 55,
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800',
  },
  {
    name: 'Lisa Thompson',
    subject: 'English Literature',
    university: 'UT Austin',
    rating: 4.6,
    schedule: 'Mon-Fri, 11AM-7PM',
    location: 'Austin • Online',
    experience: 7,
    price: 35,
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800',
  },
];

const TutorsAll = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 pt-30 py-8">
      {/* 1. Hero Banner Section */}
      <div
        className="relative w-full rounded-[24px] md:rounded-[32px] overflow-hidden bg-slate-900 bg-cover bg-center min-h-[180px] md:min-h-[240px] flex flex-col justify-center px-6 md:px-12 shadow-sm"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0c1a30]/80 mix-blend-multiply" />

        {/* Banner Content */}
        <div className="relative z-10 text-white">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
            Find Your Tutor
          </h1>
          <p className="text-slate-300 text-sm md:text-base font-normal tracking-wide">
            Browse 6+ expert educators
          </p>
        </div>
      </div>

      {/* 2. Same to Same Search & Filter Bar Container */}
      <div className="mt-6 bg-white p-4 md:p-5 rounded-2xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search Input */}
          <div className="md:col-span-6 w-full">
            <SearchTutors />
          </div>

          {/* Category Filter*/}
          <div className="md:col-span-3 w-full">
            <CategoryFilter options={['All', 'Science', 'Commerce', 'Arts']} />
          </div>

          {/* Second Filter */}
          <div className="md:col-span-3 w-full">
            <CategoryFilter
              options={['All', 'Online', 'In-Person', 'Hybrid']}
            />
          </div>
        </div>

        {/* Cards */}
        <div className=" py-8 max-w-7xl mx-auto grid gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
          {tutorsData.map((tutor, index) => (
            <TutorsCard key={index} tutor={tutor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorsAll;
