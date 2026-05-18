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
  } = singleData;

  return (
    <div className="bg-[#f8fafc] pt-34 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back */}
        <Link
          href="/tutors"
          className="flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-6"
        >
          <FaChevronLeft /> Back to Tutors
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-md overflow-hidden">
              {/* Image */}

              <div className="relative w-full h-[450px] overflow-hidden rounded-t-3xl group">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover  object-center group-hover:scale-110 transition duration-500"
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
                <h1 className="text-3xl font-bold text-gray-900">{name}</h1>

                <p className="text-blue-600 mb-2">{university}</p>

                {/* Bio */}
                <p className="text-gray-600 mb-6">{bio}</p>

                {/* Info */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                    <FaClock className="text-blue-600" />
                    <div>
                      <p className="text-xs text-gray-500">Availability</p>
                      <p className="text-sm font-semibold">{schedule}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                    <FaMapMarkerAlt className="text-cyan-600" />
                    <div>
                      <p className="text-xs text-gray-500">Location</p>
                      <p className="text-sm font-semibold">{location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                    <FaUser className="text-purple-600" />
                    <div>
                      <p className="text-xs text-gray-500">Experience</p>
                      <p className="text-sm font-semibold">
                        {experience} years
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                    <FaDollarSign className="text-green-600" />
                    <div>
                      <p className="text-xs text-gray-500">Hourly Rate</p>
                      <p className="text-sm font-semibold">${price}/hour</p>
                    </div>
                  </div>
                </div>

                {/* Days */}
                <h3 className="font-semibold text-lg mb-3">Available Days</h3>

                <div className="flex flex-wrap gap-2">
                  {days?.map(day => (
                    <span
                      key={day}
                      className="px-4 py-2 bg-blue-100 text-blue-600 rounded-xl text-sm"
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
              <div className="bg-white rounded-3xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-6">Book Session</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Session Fee</span>
                    <span className="font-semibold">${price}/hr</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Available Slots</span>
                    <span className="font-semibold">{slots} remaining</span>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between">
                      <span className="font-semibold">Total (1 hr)</span>
                      <span className="text-blue-600 font-bold text-lg">
                        ${price}
                      </span>
                    </div>
                  </div>
                </div>

                <BookingSession />

                {/* <button className="w-full cursor-pointer py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
                  Login to Book
                </button> */}

                <p className="text-xs text-center text-gray-400 mt-3">
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
