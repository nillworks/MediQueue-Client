'use client';

const DateFilter = ({ startDate, endDate, setStartDate, setEndDate }) => {
  return (
    <div className="flex gap-2">
      <input
        type="date"
        value={startDate}
        onChange={e => setStartDate(e.target.value)}
        className="border p-2 rounded w-full"
      />

      <input
        type="date"
        value={endDate}
        onChange={e => setEndDate(e.target.value)}
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

export default DateFilter;
