import React from 'react';
import SearchTutors from './SearchTutors';
import CategoryFilter from './CategoryFilter';
import TutorsCard from '@/shared/TutorsCard';
import getAllTutorsData from '@/lib/getAllTutorsData';

const TutorsAll = async () => {
  const data = await getAllTutorsData();
  const tutorsData = data?.tutors;

  return (
    <section className="w-full container mx-auto px-4 pt-30 py-8">
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
