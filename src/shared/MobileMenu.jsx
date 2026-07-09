'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, User } from 'lucide-react';
import ActiveLink from './ActiveLink';
import Image from 'next/image';
import { signOut } from '@/lib/auth-client';
import { toast } from '@heroui/react';
import { useRouter } from 'next/navigation';

const MobileMenu = ({ navLinks, user }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const isValidUrl = (urlString) => {
    try {
      if (!urlString) return false;
      new URL(urlString);
      return true;
    } catch (e) {
      return false;
    }
  };
  const hasValidImage = isValidUrl(user?.image);
  const handleSignOut = () => {
    signOut();
    toast.success('Signed out successfully', {
      description: 'You have been logged out of your account.',
      variant: 'success',
    });
    router.push('/signin');
    setOpen(false);
  };

  return (
    <>
      {/* menu button */}
      <button
        onClick={() => setOpen(true)}
        className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 dark:border-gray-800 text-slate-700 dark:text-slate-300 lg:hidden"
      >
        <Menu className="cursor-pointer" size={18} />
      </button>

      {/* overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[9998] transition-all duration-300 ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      />

      {/* TOP CENTER MENU */}
      <div
        className={`fixed top-5 left-1/2 z-[9999] w-[90%] max-w-sm -translate-x-1/2 transform rounded-2xl bg-white dark:bg-slate-950 shadow-2xl border border-gray-200 dark:border-gray-800 p-5 transition-all duration-300 ${
          open
            ? 'translate-y-0 opacity-100 scale-100'
            : '-translate-y-10 opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {/* header */}
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Menu
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 transition-colors"
          >
            <X className="cursor-pointer" size={20} />
          </button>
        </div>

        {/* user */}
        {user && (
          <div className="mb-5 flex items-center gap-3 rounded-xl bg-blue-100 dark:bg-slate-800/50 p-3">
            {hasValidImage ? (
              <Image
                width={40}
                height={40}
                src={user?.image}
                alt={user?.name || 'user'}
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <User size={20} className="text-gray-500 dark:text-gray-400" />
              </div>
            )}
            <div>
              <h4 className="font-semibold text-slate-800 dark:text-slate-100">
                {user?.name}
              </h4>
              <p className="text-sm text-slate-500">Logged In</p>
            </div>
          </div>
        )}

        {/* nav links */}
        <div className="flex flex-row items-center flex-wrap justify-center gap-8">
          {navLinks.map(link => (
            <div key={link.href} onClick={() => setOpen(false)}>
              <ActiveLink href={link.href}>{link.name}</ActiveLink>
            </div>
          ))}
        </div>

        {/* auth */}
        <div className="mt-5 border-t border-gray-200 dark:border-gray-800 pt-4">
          {user ? (
            <button
              onClick={handleSignOut}
              className="w-full cursor-pointer rounded-xl bg-red-100 dark:bg-red-900/30 py-2 text-red-500 dark:text-red-400 font-medium hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
            >
              Logout
            </button>
          ) : (
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center gap-3">
                <Link
                  href="/signin"
                  className="rounded-full bg-blue-200 px-7 py-2.5 font-semibold text-blue-900 shadow-sm hover:bg-blue-300 hover:shadow-md transition-all duration-200"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="rounded-full bg-gray-900 px-7 py-2.5 font-semibold text-white shadow-sm hover:bg-black hover:shadow-md transition-all duration-200"
                >
                  Register
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
