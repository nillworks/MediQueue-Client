'use client';

const DateFilter = ({ startDate, endDate, setStartDate, setEndDate }) => {
  return (
    <div className="flex gap-2">
      <input
        type="date"
        value={startDate}
        onChange={e => setStartDate(e.target.value)}
        className="border border-slate-200 dark:border-slate-700 p-2 rounded w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white outline-none transition-colors duration-300"
      />

      <input
        type="date"
        value={endDate}
        onChange={e => setEndDate(e.target.value)}
        className="border border-slate-200 dark:border-slate-700 p-2 rounded w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white outline-none transition-colors duration-300"
      />
    </div>
  );
};

export default DateFilter;
