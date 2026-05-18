import TutorsCard from '@/shared/TutorsCard';
import React from 'react';

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

const AvailableTutors = () => {
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
        {tutorsData.map((tutor, index) => (
          <TutorsCard key={index} tutor={tutor} />
        ))}
      </div>
    </div>
  );
};

export default AvailableTutors;
