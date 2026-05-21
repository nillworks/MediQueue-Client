'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import SearchTutors from './SearchTutors';
import DateFilter from './DateFilter';
import TutorsCard from '@/shared/TutorsCard';

const TutorsAll = ({ tutorsData }) => {
  const router = useRouter();
  const params = useSearchParams();

  const updateQuery = (key, value) => {
    const current = new URLSearchParams(params.toString());

    // 👉 DATE দিলে search remove
    if (key === 'startDate' || key === 'endDate') {
      current.delete('search');
    }

    // 👉 SEARCH দিলে date remove
    if (key === 'search') {
      current.delete('startDate');
      current.delete('endDate');
    }

    // set / delete
    if (value) {
      current.set(key, value);
    } else {
      current.delete(key);
    }

    router.push(`/tutors?${current.toString()}`);
  };

  const resetDates = () => {
    const current = new URLSearchParams(params.toString());
    current.delete('startDate');
    current.delete('endDate');
    router.push(`/tutors?${current.toString()}`);
  };

  const searchValue = params.get('search') || '';
  const startDate = params.get('startDate') || '';
  const endDate = params.get('endDate') || '';

  return (
    <section className="w-full container mx-auto px-4 pt-30 py-8">
      <div className="mt-6 bg-white dark:bg-[#111827] border border-transparent dark:border-white/10 p-4 rounded-2xl transition-colors duration-300 shadow-sm">
        <div className="grid md:grid-cols-12 gap-4">
          {/* SEARCH */}
          <div className="md:col-span-6">
            <SearchTutors
              defaultValue={searchValue}
              onSearch={value => updateQuery('search', value)}
            />
          </div>

          {/* DATE */}
          <div className="md:col-span-6">
            <DateFilter
              startDate={startDate}
              endDate={endDate}
              setStartDate={val => updateQuery('startDate', val)}
              setEndDate={val => updateQuery('endDate', val)}
            />

            <button
              onClick={resetDates}
              className="mt-2 text-xs bg-gray-600 text-white px-3 py-1 rounded"
            >
              Reset Dates
            </button>
          </div>
        </div>

        {/* CARDS */}
        <div className="py-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {tutorsData?.length === 0 ? (
            <p className="col-span-full text-center text-gray-500 dark:text-gray-400 py-10">
              No tutors match your search
            </p>
          ) : (
            tutorsData.map((tutor, index) => (
              <TutorsCard key={index} tutor={tutor} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default TutorsAll;
