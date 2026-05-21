import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
    days,
    sessionStartDate,
  } = tutor || {};

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

    const d = new Date(date);

    return d.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="group bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden w-full hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-[190px] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Subject badge */}
        <span className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-blue-600 dark:text-blue-400 text-xs px-3 py-1 rounded-full shadow-sm">
          {subject}
        </span>

        {/* Rating badge */}
        <span className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-gray-800 dark:text-slate-200 text-xs px-2 py-1 rounded-full shadow-sm flex items-center gap-1">
          <Star size={12} className="text-yellow-500 fill-yellow-500" />
          {rating}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="font-semibold text-lg text-gray-900 dark:text-white leading-tight transition-colors">
          {name}
        </h2>

        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{university}</p>

        {/* Info */}
        <div className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
          {/* start Date */}

          <p className="flex items-center flex-wrap gap-2">
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Session Start Date:
            </span>

            <span className="text-gray-600 dark:text-gray-400">
              {formatDate(sessionStartDate) || 'Not set'}
            </span>
          </p>

          <p className="flex items-center flex-wrap gap-2">
            <span className="font-medium text-gray-700 dark:text-gray-300">Available Time:</span>

            <span className="text-gray-600 dark:text-gray-400">
              {schedule?.startTime && schedule?.endTime
                ? `${fromMinutes(schedule.startTime)} – ${fromMinutes(schedule.endTime)}`
                : 'Not set'}
            </span>
          </p>

          <p className="text-gray-500 dark:text-gray-400 space-x-2">
            <span className="font-medium text-gray-700 dark:text-gray-300">Location:</span>
            <span>{location}</span>
          </p>

          <p className="text-gray-500 dark:text-gray-400">{experience} yrs experience</p>
        </div>

        {/* Divider */}
        <div className="my-4 border-t border-gray-100 dark:border-slate-700" />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <p className="text-blue-600 dark:text-blue-400 font-bold text-lg">
            ${price}
            <span className="text-xs text-gray-500 dark:text-gray-400">/hr</span>
          </p>

          <Link href={`/tutors/${_id}`}>
            <button className="px-4 py-2 cursor-pointer text-sm rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition shadow-sm">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorsCard;
