'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ActiveLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`rounded-2xl px-3 py-2 text-[16px] lg:text-sm font-medium transition-all duration-300 ${
        isActive
          ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-lg shadow-blue-200 dark:shadow-none'
          : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
