import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TutorsCard = ({ tutor }) => {
  const {
    _id,
    name,
    subject,
    university,
    rating,
    schedule,
    location,
    experience,
    price,
    image,
  } = tutor || {};

  return (
    <div className="bg-white rounded-2xl transition duration-300 cursor-pointer hover:-translate-y-1 border border-[#dddd] hover:shadow-md overflow-hidden w-full">
      {/* Image Section */}
      <div className="relative h-[180px]">
        <Image src={image} alt={name} fill className="object-cover" />

        {/* Subject */}
        <span className="absolute top-3 left-3 bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
          {subject}
        </span>

        {/* Rating */}
        <span className="absolute top-3 right-3 bg-white text-gray-800 text-xs px-2 py-1 rounded-full shadow">
          <span className="flex items-center gap-1">
            <Star size={13} className="text-yellow-500 fill-yellow-500" />
            {rating}
          </span>
        </span>
      </div>

      {/* Bottom Section */}
      <div className=" p-5">
        <h2 className="font-semibold text-lg text-gray-900">{name}</h2>

        <p className="text-gray-500 text-sm mt-1 ">{university}</p>

        {/* Info */}
        <div className="mt-4 text-sm text-gray-600 space-y-1">
          <p>{schedule}</p>
          <p>{location}</p>
          <p className="text-gray-500">{experience} years experience</p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-4"></div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <p className="text-blue-600 font-bold text-lg">
            ${price}
            <span className="text-sm text-gray-500">/hr</span>
          </p>

          <Link href={`/tutors/${_id}`}>
            <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-lg transition">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorsCard;
