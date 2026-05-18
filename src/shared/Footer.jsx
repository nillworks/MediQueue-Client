import React from 'react';
import Link from 'next/link';

import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#07142F] text-white pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Footer */}
        <div className="grid items-center justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <svg
                width="34"
                height="34"
                viewBox="0 0 32 32"
                fill="none"
                className="shrink-0"
              >
                <rect
                  x="2"
                  y="8"
                  width="12"
                  height="20"
                  rx="3"
                  fill="white"
                  opacity="0.35"
                />
                <rect x="18" y="4" width="12" height="24" rx="3" fill="white" />
                <circle cx="24" cy="14" r="3" fill="#07142F" />
              </svg>

              <h2 className="text-2xl font-bold tracking-tight">MediQueue</h2>
            </div>

            <p className="text-gray-400 text-sm leading-7 mb-7 max-w-sm">
              Premium tutor booking platform connecting students with verified
              expert educators for personalized learning experiences.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                <FaTwitter className="text-sm" />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                <FaLinkedinIn className="text-sm" />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                <FaGithub className="text-sm" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Learning Services</h3>

            <ul className="space-y-4 text-sm text-gray-400">
              {[
                'Online Tutoring',
                'In-Person Sessions',
                'Group Classes',
                'Exam Preparation',
                'Homework Help',
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>

            <ul className="space-y-4 text-sm text-gray-400">
              {['About Us', 'Become a Tutor', 'Pricing', 'Blog', 'Support'].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>

            <ul className="space-y-5 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <div className="mt-1">
                  <FaEnvelope />
                </div>

                <span className="break-all">support@mediqueue.com</span>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-1">
                  <FaPhoneAlt />
                </div>

                <span>+1 (555) 123-4567</span>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-1">
                  <FaMapMarkerAlt />
                </div>

                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © 2026 MediQueue. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <Link
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>

            <Link
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
