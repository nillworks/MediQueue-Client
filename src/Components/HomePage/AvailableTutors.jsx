import getTopTutorsData from '@/lib/getTopTutorsData';
import TutorsCard from '@/shared/TutorsCard';
import React from 'react';

const AvailableTutors = async () => {
  const data = await getTopTutorsData();
  const tutorsData = data?.tutors;

  return (
    <div className="py-10 container mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-blue-600 text-sm font-semibold">EXPERT EDUCATORS</p>
        <h1 className="text-3xl font-bold">Available Tutors</h1>
        <p className="text-gray-500 mt-2">
          Browse our curated list of professional tutors
        </p>
      </div>

      {/* Cards */}
      <div className=" max-w-7xl mx-auto grid gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
        {tutorsData.map(tutor => (
          <TutorsCard key={tutor?._id} tutor={tutor} />
        ))}
      </div>
    </div>
  );
};

export default AvailableTutors;
