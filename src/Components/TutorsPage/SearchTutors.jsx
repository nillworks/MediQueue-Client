'use client';

import { useState, useEffect } from 'react';

const SearchTutors = ({ defaultValue = '', onSearch }) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full">
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        className="border p-3 w-full rounded-l-lg"
        placeholder="Search..."
      />

      <button className="bg-blue-600 text-white px-4 rounded-r-lg">
        Search
      </button>
    </form>
  );
};

export default SearchTutors;
