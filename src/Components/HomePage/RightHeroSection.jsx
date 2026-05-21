// RightHeroSection.jsx
import Image from 'next/image';
import React from 'react';

const RightHeroSection = () => {
  return (
    <div className="relative w-full flex justify-center items-center">
      {/* Glow */}
      <div className="absolute w-[250px] sm:w-[350px] lg:w-[420px] h-[250px] sm:h-[350px] lg:h-[420px] bg-cyan-200/40 dark:bg-cyan-600/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Booking Card */}
      <div className="absolute z-50 left-0 sm:left-4 lg:-left-10 top-[18%] sm:top-[28%] lg:top-[35%]  animate-bounce duration-1000">
        <div className="bg-white/90 dark:bg-[#111827]/70 backdrop-blur-xl border border-slate-100 dark:border-white/10 shadow-2xl rounded-2xl px-3 sm:px-5 py-3 sm:py-4 flex items-center gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>

          <div className="z-50">
            <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100">
              Booking Confirmed
            </h4>

            <p className="text-[11px] sm:text-xs text-slate-500">
              Dr. Sarah Chen
            </p>
          </div>
        </div>
      </div>

      {/* Main Card */}
      <div className="relative z-20 cursor-pointer bg-white/90 dark:bg-[#111827]/70 backdrop-blur-xl p-3 sm:p-4 rounded-[28px] sm:rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white/60 dark:border-white/10 w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[470px] hover:-translate-y-2 transition-all duration-500">
        {/* Image */}
        <div className="overflow-hidden rounded-[22px] sm:rounded-3xl relative">
          <Image
            width={300}
            height={300}
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80"
            alt="Live Session"
            className="w-full h-[220px] sm:h-[300px] lg:h-[320px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Footer */}
        <div className="mt-4 sm:mt-5 flex items-center justify-between gap-3">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Live Session
            </h3>

            <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
              Interactive AI-powered whiteboard experience
            </p>
          </div>

          {/* Live Indicator */}
          <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-50 shrink-0">
            <span className="absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-red-400 animate-ping"></span>

            <span className="relative w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-red-500"></span>
          </div>
        </div>
      </div>

      {/* Decorative Layer */}
      <div className="absolute right-2 sm:right-0 bottom-[-10px] sm:bottom-[-20px] w-[85%] h-[85%] rounded-[28px] sm:rounded-[32px] bg-white/40 dark:bg-[#111827]/40 border border-white/50 dark:border-white/10 backdrop-blur-md z-10"></div>
    </div>
  );
};

export default RightHeroSection;
