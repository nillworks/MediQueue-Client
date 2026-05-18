'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ActiveLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`rounded-2xl px-6 py-2 text-[16px] lg:text-sm font-medium transition-all duration-300 ${
        isActive
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
      }`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
