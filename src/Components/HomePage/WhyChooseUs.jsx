'use client';

import React from 'react';
import { FiShield, FiCalendar, FiBookOpen, FiLock } from 'react-icons/fi';

export default function WhyChooseUs() {
  const features = [
    {
      icon: (
        <FiShield className="w-6 h-6 text-blue-600 group-hover:scale-110 transition duration-500" />
      ),
      title: 'Verified Tutors',
      desc: 'Rigorous background checks and credential verification for every educator on our platform.',
      cardClass:
        'bg-[#f4f7ff] border border-transparent hover:border-blue-500/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(37,99,235,0.18)] hover:bg-white',
      iconBg: 'bg-blue-100 group-hover:bg-blue-600 group-hover:text-white',
    },

    {
      icon: (
        <FiCalendar className="w-6 h-6 text-teal-500 group-hover:scale-110 transition duration-500" />
      ),
      title: 'Smart Booking',
      desc: 'AI-powered scheduling system finds the perfect time slots based on your availability.',
      cardClass:
        'bg-[#effbfa] border border-transparent hover:border-teal-500/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(20,184,166,0.18)] hover:bg-white',
      iconBg: 'bg-teal-100 group-hover:bg-teal-500 group-hover:text-white',
    },

    {
      icon: (
        <FiBookOpen className="w-6 h-6 text-purple-500 group-hover:scale-110 transition duration-500" />
      ),
      title: 'Flexible Learning',
      desc: 'Choose between online, in-person, or hybrid sessions that fit your learning style.',
      cardClass:
        'bg-[#fbf3fc] border border-transparent hover:border-purple-500/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(168,85,247,0.18)] hover:bg-white',
      iconBg: 'bg-purple-100 group-hover:bg-purple-500 group-hover:text-white',
    },

    {
      icon: (
        <FiLock className="w-6 h-6 text-emerald-500 group-hover:scale-110 transition duration-500" />
      ),
      title: 'Secure Sessions',
      desc: 'End-to-end encrypted video calls and secure payment processing for peace of mind.',
      cardClass:
        'bg-[#edfbf2] border border-transparent hover:border-emerald-500/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(16,185,129,0.18)] hover:bg-white',
      iconBg:
        'bg-emerald-100 group-hover:bg-emerald-500 group-hover:text-white',
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className=" lg:container 2xl:max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-blue-600 text-xs md:text-sm font-bold uppercase tracking-widest block mb-3">
            Our Advantages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#091833]">
            Why Choose MediQueue
          </h2>
        </div>

        {/* Feature Cards Grid (Responsive across all devices) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`rounded-[24px] p-8 transition-all duration-300 hover:-translate-y-1 ${feature.cardClass}`}
            >
              {/* Icon Container */}
              <div className="mb-6 flex items-center">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#091833] mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
