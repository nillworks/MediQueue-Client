'use client';
import React from 'react';
import Link from 'next/link';
import {
  FaStar,
  FaClock,
  FaMapMarkerAlt,
  FaUser,
  FaDollarSign,
  FaChevronLeft,
} from 'react-icons/fa';
import Image from 'next/image';
import BookingSession from './BookingSession';

const TutorsDetails = ({ singleData }) => {
  if (!singleData) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  const {
    name,
    subject,
    university,
    rating,
    reviews,
    schedule,
    days,
    location,
    experience,
    price,
    slots,
    mode,
    bio,
    image,
    sessionStartDate,
  } = singleData;

  const fromMinutes = min => {
    if (min === undefined || min === null) return '';
    const h = Math.floor(min / 60);
    const m = min % 60;
    const ampm = h >= 12 ? 'PM' : 'AM';
    const hour12 = h % 12 || 12;
    return `${hour12}:${m.toString().padStart(2, '0')} ${ampm}`;
  };

  const formatDays = days => {
    if (!days) return '';
    if (typeof days === 'string') return days;
    if (Array.isArray(days)) {
      if (days.length === 0) return '';
      if (days.length === 1) return days[0];
      return `${days[0]} – ${days[days.length - 1]}`;
    }
    return '';
  };

  const formatDate = date => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="bg-[#f8fafc] dark:bg-[#0B0F19] pt-34 pb-12 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Back */}
        <Link
          href="/tutors"
          className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-6 transition-colors"
        >
          <FaChevronLeft /> Back to Tutors
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-[#111827] border border-transparent dark:border-white/10 rounded-3xl shadow-md overflow-hidden transition-colors duration-300">
              {/* Image */}
              <div className="relative w-full h-[450px] overflow-hidden rounded-t-3xl group">
                <Image
                  src={
                    image && image.startsWith('http')
                      ? image
                      : 'https://cdn-icons-png.flaticon.com/512/13434/13434972.png'
                  }
                  alt={name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-8">
                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    {subject}
                  </span>

                  <span className="px-4 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                    {mode}
                  </span>

                  <span className="flex items-center gap-1 px-4 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">
                    <FaStar className="text-yellow-500" />
                    {rating} ({reviews} reviews)
                  </span>
                </div>

                {/* Name */}
                <div className="space-y-2 flex flex-col gap-1">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors">{name}</h1>
                  </div>

                  <div className="flex items-center gap-2">
                    <p className=" text-gray-500 dark:text-gray-400">University : </p>
                    <p className="text-blue-600 dark:text-blue-400">{university}</p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-600 dark:text-gray-300 mb-6">{bio}</p>

                {/* INFO GRID (KEY : VALUE STYLE) */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {/* Availability */}
                  <div className="flex items-start gap-3 bg-gray-50 dark:bg-slate-800/30 border border-transparent dark:border-white/5 p-4 rounded-xl transition-colors">
                    <FaClock className="text-blue-600 mt-1" />
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Availability</p>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        {formatDays(days)}
                        {schedule?.startTime && schedule?.endTime && (
                          <>
                            , {fromMinutes(schedule.startTime)} –{' '}
                            {fromMinutes(schedule.endTime)}
                          </>
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3 bg-gray-50 dark:bg-slate-800/30 border border-transparent dark:border-white/5 p-4 rounded-xl transition-colors">
                    <FaMapMarkerAlt className="text-cyan-600 mt-1" />
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        {location}
                      </p>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="flex items-start gap-3 bg-gray-50 dark:bg-slate-800/30 border border-transparent dark:border-white/5 p-4 rounded-xl transition-colors">
                    <FaUser className="text-purple-600 mt-1" />
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Experience</p>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        {experience} years
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-start gap-3 bg-gray-50 dark:bg-slate-800/30 border border-transparent dark:border-white/5 p-4 rounded-xl transition-colors">
                    <FaDollarSign className="text-green-600 mt-1" />
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Hourly Rate</p>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        ${price}/hour
                      </p>
                    </div>
                  </div>

                  {/* Start date session */}
                  <div className="flex items-start gap-3 bg-gray-50 dark:bg-slate-800/30 border border-transparent dark:border-white/5 p-4 rounded-xl transition-colors">
                    <FaClock className="text-blue-600 mt-1" />

                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Session Start Date
                      </p>

                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        {singleData?.sessionStartDate
                          ? formatDate(singleData.sessionStartDate)
                          : 'Not set'}
                      </p>
                    </div>
                  </div>

                  {/* End date session */}
                  <div className="flex items-start gap-3 bg-gray-50 dark:bg-slate-800/30 border border-transparent dark:border-white/5 p-4 rounded-xl transition-colors">
                    <FaClock className="text-blue-600 mt-1" />

                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Session End Date</p>

                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        {singleData?.sessionEndDate
                          ? formatDate(singleData.sessionEndDate)
                          : 'Not set'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Days */}
                <h3 className="font-semibold text-lg mb-3 dark:text-white transition-colors">Available Days</h3>
                <div className="flex flex-wrap gap-2">
                  {days?.map(day => (
                    <span
                      key={day}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl text-sm transition-colors"
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="sticky top-28">
              <div className="bg-white dark:bg-[#111827] border border-transparent dark:border-white/10 rounded-3xl shadow-md p-6 transition-colors duration-300">
                <h3 className="text-xl font-bold mb-6 dark:text-white transition-colors">Booking Summary</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Session Fee</span>
                    <span className="font-semibold">${price}/hr</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Available Slots</span>
                    <span className="font-semibold">{slots}</span>
                  </div>

                  <div className="border-t pt-4 flex justify-between">
                    <span className="font-semibold">Total (1 hr)</span>
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                      ${price}
                    </span>
                  </div>
                </div>

                <BookingSession singleData={singleData} />

                <p className="text-xs text-center text-gray-400 dark:text-gray-500 mt-3">
                  Free cancellation up to 24 hours before session
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorsDetails;
