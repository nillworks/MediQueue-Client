'use client';

const DateFilter = ({
  resetDates,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 lg:gap-8">
      <input
        type="date"
        value={startDate}
        onChange={e => setStartDate(e.target.value)}
        className="border border-slate-200 dark:border-slate-700 p-3 rounded w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white outline-none transition-colors duration-300"
      />

      <input
        type="date"
        value={endDate}
        onChange={e => setEndDate(e.target.value)}
        className="border border-slate-200 dark:border-slate-700 p-3 rounded w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white outline-none transition-colors duration-300"
      />
      <button
        onClick={resetDates}
        className=" w-full  flex  flex-col items-center justify-center mx-auto px-4 py-3 rounded 
              bg-gray-200 text-lg text-gray-800 font-medium 
              hover:bg-gray-300 hover:text-black 
               transition-all duration-200 shadow-sm hover:shadow cursor-pointer"
      >
        Reset Dates
      </button>
    </div>
  );
};

export default DateFilter;
