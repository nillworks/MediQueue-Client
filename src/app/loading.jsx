'use client';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] bg-white/80 dark:bg-[#0B0F19]/90 backdrop-blur-md flex flex-col items-center justify-center transition-colors duration-300">
      <div className="relative flex flex-col items-center justify-center">
        {/* Outer pulsing rings */}
        <div className="absolute w-24 h-24 border-4 border-blue-500/20 dark:border-blue-400/20 rounded-full animate-ping"></div>
        <div className="absolute w-16 h-16 border-4 border-blue-500/40 dark:border-blue-400/40 rounded-full animate-pulse"></div>
        
        {/* Core spinner */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-blue-100 dark:border-slate-800"></div>
          <div className="absolute inset-0 rounded-full border-4 border-blue-600 dark:border-blue-500 border-t-transparent animate-spin"></div>
        </div>

        {/* Text */}
        <div className="mt-8 flex flex-col items-center gap-1">
          <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent animate-pulse">
            MediQueue
          </h3>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 tracking-widest uppercase">
            Loading
          </p>
        </div>
      </div>
    </div>
  );
}
