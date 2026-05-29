'use client';

export default function LoadingScreen() {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center 
    bg-white/70 dark:bg-[#0B0F19]/80 backdrop-blur-xl transition-all duration-300"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Gradient Spinner */}
        <div className="relative w-14 h-14">
          <div
            className="absolute inset-0 rounded-full border-4 border-transparent 
          border-t-blue-500 border-r-cyan-400 animate-spin"
          ></div>

          <div className="absolute inset-2 rounded-full bg-white dark:bg-[#0B0F19]"></div>
        </div>

        {/* Text */}
        <div className="text-center space-y-1">
          <h2
            className="text-xl font-semibold 
          bg-gradient-to-r from-blue-500 to-cyan-400 
          bg-clip-text text-transparent"
          >
            ZenoTutor
          </h2>

          <p className="text-xs tracking-[0.3em] text-gray-500 dark:text-gray-400 animate-pulse">
            LOADING...
          </p>
        </div>
      </div>
    </div>
  );
}
