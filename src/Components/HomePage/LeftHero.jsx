import Link from 'next/link';

const LeftHero = () => {
  return (
    <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 px-4 py-2 rounded-full shadow-sm">
        <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>

        <span className="text-xs sm:text-sm font-semibold text-blue-600">
          Trusted by 10,000+ Students
        </span>
      </div>

      {/* Heading */}
      <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black leading-[1.05] tracking-[-1px] sm:tracking-[-2px] text-slate-900 dark:text-white transition-colors">
        Learn From The
        <br />
        <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
          Best Tutors
        </span>
        <br />
        Today
      </h1>

      {/* Description */}
      <p className="mt-5 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-7 sm:leading-8 max-w-xl mx-auto lg:mx-0">
        Connect with verified expert tutors for personalized learning. Book
        sessions, manage schedules, and achieve your academic goals with
        confidence.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row sm:justify-center items-center lg:justify-start lg:items-start gap-4">
        <Link href={'/tutors'}>
          <button className="group w-full cursor-pointer sm:w-auto px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-xl shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1">
            <span className="flex items-center justify-center gap-2">
              Find Tutors
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </button>
        </Link>

        <Link href={'/tutors'}>
          <button className="w-full cursor-pointer sm:w-auto px-7 py-4 rounded-2xl bg-white dark:bg-white border border-slate-200 dark:border-transparent hover:border-slate-300 hover:bg-slate-50 dark:hover:bg-slate-200 text-slate-800 dark:text-black font-semibold shadow-sm dark:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:-translate-y-1">
            Book Session
          </button>
        </Link>
      </div>

      {/* Ratings */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
        {/* Avatar Stack */}
        <div className="flex -space-x-3">
          {['A', 'B', 'C', 'D'].map((item, i) => (
            <div
              key={i}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white dark:border-[#0B0F19] bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-md"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Reviews */}
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}

            <span className="ml-1 text-sm font-bold text-slate-900 dark:text-white">4.9</span>
          </div>

          <p className="text-sm text-slate-500 mt-1">From 2,000+ reviews</p>
        </div>
      </div>
    </div>
  );
};

export default LeftHero;
