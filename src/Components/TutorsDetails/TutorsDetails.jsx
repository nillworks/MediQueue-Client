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

const TutorsDetails = () => {
  return (
    <div className=" bg-[#f8fafc] pt-34 pb-12 px-4">
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
              <div className="h-72">
                <Image
                  width={400}
                  height={600}
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>

              <div className="p-8">
                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Mathematics
                  </span>

                  <span className="px-4 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                    Online
                  </span>

                  <span className="flex items-center gap-1 px-4 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">
                    <FaStar className="text-yellow-500" /> 4.9 (128 reviews)
                  </span>
                </div>

                {/* Name */}
                <h1 className="text-3xl font-bold text-gray-900">
                  Dr. Sarah Chen
                </h1>

                <p className="text-blue-600 mb-6">Columbia University</p>

                {/* Info */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                    <FaClock className="text-blue-600" />
                    <div>
                      <p className="text-xs text-gray-500">Availability</p>
                      <p className="text-sm font-semibold">Mon-Fri, 9AM-5PM</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                    <FaMapMarkerAlt className="text-cyan-600" />
                    <div>
                      <p className="text-xs text-gray-500">Location</p>
                      <p className="text-sm font-semibold">New York</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                    <FaUser className="text-purple-600" />
                    <div>
                      <p className="text-xs text-gray-500">Experience</p>
                      <p className="text-sm font-semibold">8 years</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                    <FaDollarSign className="text-green-600" />
                    <div>
                      <p className="text-xs text-gray-500">Hourly Rate</p>
                      <p className="text-sm font-semibold">$45/hour</p>
                    </div>
                  </div>
                </div>

                {/* Days */}
                <h3 className="font-semibold text-lg mb-3">Available Days</h3>

                <div className="flex flex-wrap gap-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
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
                    <span className="font-semibold">$45/hr</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Available Slots</span>
                    <span className="font-semibold">12 remaining</span>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between">
                      <span className="font-semibold">Total (1 hr)</span>
                      <span className="text-blue-600 font-bold text-lg">
                        $45
                      </span>
                    </div>
                  </div>
                </div>

                <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
                  Login to Book
                </button>

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
