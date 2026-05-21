'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const SearchTutors = ({ defaultValue = '' }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleSubmit = e => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }

    router.push(`/tutors?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full flex">
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Search tutors..."
        className="w-full border p-3 rounded-l-lg outline-blue-600 "
      />

      <button
        type="submit"
        className="px-4 py-2 cursor-pointer bg-blue-600 rounded-r-lg text-white"
      >
        Search
      </button>
    </form>
  );
};

export default SearchTutors;
