'use client';

import Link from 'next/link';
import { ArrowLeft, Home, SearchX } from 'lucide-react';

const NotFound = () => {
  return (
    <section className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-[650px] flex-col items-center rounded-[40px] border border-gray-200 bg-white p-8 text-center shadow-xl md:p-14">
          {/* icon */}
          <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-blue-50">
            <SearchX size={60} className="text-blue-600" />
          </div>

          {/* 404 */}
          <h1 className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-7xl font-black text-transparent md:text-9xl">
            404
          </h1>

          {/* title */}
          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
            Page Not Found
          </h2>

          {/* description */}
          <p className="mt-4 max-w-[500px] text-base leading-7 text-slate-500 md:text-lg">
            Sorry, the page you are looking for does not exist or has been moved
            to another location.
          </p>

          {/* buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:bg-blue-700"
            >
              <Home size={20} />
              Back To Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-7 py-4 font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-100"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>

          {/* bottom text */}
          <p className="mt-10 text-sm text-slate-400">ZenoTutor © 2026</p>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
