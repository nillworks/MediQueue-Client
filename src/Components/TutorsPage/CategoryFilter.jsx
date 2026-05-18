import { FiChevronDown } from 'react-icons/fi';

const CategoryFilter = ({ value, onChange, options = ['All'] }) => {
  return (
    <div className="relative w-full">
      {/* Native Select */}
      <select
        value={value}
        onChange={onChange}
        className="w-full bg-white text-slate-700 py-3 pl-4 pr-10 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all text-sm md:text-base shadow-sm appearance-none cursor-pointer"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Custom Right Arrow Chevron */}
      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
        <FiChevronDown className="w-4 h-4" />
      </div>
    </div>
  );
};

export default CategoryFilter;
