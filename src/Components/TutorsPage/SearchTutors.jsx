import { FiSearch } from 'react-icons/fi';

const SearchTutors = ({ value, onChange }) => {
  return (
    <div className="relative w-full">
      {/* Search Icon */}
      <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
        <FiSearch className="w-5 h-5" />
      </span>
      {/* Input Field */}
      <input
        type="text"
        placeholder="Search tutors or subjects..."
        value={value}
        onChange={onChange}
        className="w-full bg-white text-slate-700 placeholder-slate-400 pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all text-sm md:text-base shadow-sm"
      />
    </div>
  );
};

export default SearchTutors;
