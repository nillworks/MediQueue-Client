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
        className="border border-slate-200 dark:border-slate-700 p-3 w-full rounded-l-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white outline-none transition-colors duration-300"
        placeholder="Search..."
      />

      <button className="bg-blue-600 text-white px-4 rounded-r-lg">
        Search
      </button>
    </form>
  );
};

export default SearchTutors;
