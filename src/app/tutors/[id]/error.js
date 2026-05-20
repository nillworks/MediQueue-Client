'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Error = ({ error, reset }) => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        Something went wrong
      </h1>

      <p className="text-gray-600 mb-6 max-w-md">
        Sorry, an unexpected error occurred. Please try again or go back to home
        page.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Try Again
        </button>

        <button
          onClick={() => router.push('/')}
          className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
        >
          Go to Home Page
        </button>
      </div>
    </div>
  );
};

export default Error;
