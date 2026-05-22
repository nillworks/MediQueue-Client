'use client';

import Link from 'next/link';
import ActiveLink from './ActiveLink';
import MobileMenu from './MobileMenu';
import Image from 'next/image';
import { signOut, useSession } from '@/lib/auth-client';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from '@heroui/react';
import { ThemeSwitch } from '@/Components/Provider/ThemeSwitch';

const NavigationMenu = () => {
  const { data } = useSession();
  const user = data?.user;
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSignOut = () => {
    signOut();
    toast.success('Signed out successfully', {
      description: 'You have been logged out of your account.',
      variant: 'success',
    });
    router.push('/signin');
    router.refresh();
  };

  // outside click close
  useEffect(() => {
    const handleClickOutside = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const publicNavLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tutors', href: '/tutors' },
  ];

  const privateNavLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tutors', href: '/tutors' },
    { name: 'Add Tutor', href: '/add-tutor' },
    { name: 'My Tutors List ', href: '/my-tutors' },
    { name: 'My Booked Session', href: '/my-booked-session' },
  ];

  const navLinks = user ? privateNavLinks : publicNavLinks;

  return (
    <header className="w-full fixed top-3 z-50 px-4 pt-4">
      <nav className="container mx-auto rounded-[24px] border border-gray-200 dark:border-white/10 bg-white/90 dark:bg-[#111827]/70 backdrop-blur-xl px-2 py-2 shadow-sm transition-colors duration-300">
        <div className="flex items-center justify-between gap-5">
          {/* left */}
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-end gap-[3px]">
                <div className="h-5 w-3 rounded bg-blue-200 dark:bg-blue-900/60"></div>
                <div className="flex h-7 w-4 items-center justify-center rounded bg-blue-600 dark:bg-blue-500">
                  <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                </div>
              </div>
              <h2 className="text-[20px] font-bold text-slate-900 dark:text-white transition-colors duration-300">
                MediQueue
              </h2>
            </Link>
          </div>

          {/* center */}
          <div className="hidden items-center gap-3 lg:flex">
            {navLinks.map(link => (
              <ActiveLink key={link.href} href={link.href}>
                {link.name}
              </ActiveLink>
            ))}
          </div>

          {/* right */}
          <div className="flex items-center gap-3">
            {/* theme */}
            {/* <button className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100">
              <Moon size={20} />
            </button> */}
            <ThemeSwitch />

            {/* desktop auth */}
            <div className="hidden lg:block">
              {user ? (
                <div className="relative cursor-pointer" ref={dropdownRef}>
                  {/* profile button */}
                  <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-3 rounded-full bg-blue-100 dark:bg-slate-800 px-2 py-1 hover:bg-blue-200 dark:hover:bg-slate-700 transition"
                  >
                    <Image
                      width={32}
                      height={32}
                      src={user?.image}
                      alt={user?.name || 'user'}
                      className="h-8 w-8 rounded-full border-2 border-white dark:border-slate-700 object-cover"
                    />

                    <span className="font-medium text-slate-700 dark:text-slate-200">
                      {user?.name}
                    </span>
                  </button>

                  {/* dropdown */}
                  {open && (
                    <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white dark:bg-[#111827] shadow-xl border border-gray-200 dark:border-white/10 py-2 z-50 transition-colors duration-300">
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800"
                      >
                        Profile
                      </Link>

                      <Link
                        href="/my-tutors"
                        className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800"
                      >
                        My Tutors
                      </Link>

                      <Link
                        href="/my-booked-session"
                        className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800"
                      >
                        My Sessions
                      </Link>

                      <button
                        onClick={handleSignOut}
                        className="w-full cursor-pointer text-left px-4 py-2 text-sm hover:bg-red-100 dark:hover:bg-red-900/30 text-red-500 dark:text-red-400"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex gap-3">
                  <div className="flex items-center gap-3">
                    <Link
                      href="/signin"
                      className="rounded-full bg-blue-200 px-7 py-2.5 font-semibold text-blue-900 shadow-sm
                    hover:bg-blue-300 hover:shadow-md transition-all duration-200"
                    >
                      Login
                    </Link>

                    <Link
                      href="/signup"
                      className="rounded-full bg-gray-900 px-7 py-2.5 font-semibold text-white shadow-sm
                    hover:bg-black hover:shadow-md transition-all duration-200"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* mobile */}
            <MobileMenu navLinks={navLinks} user={user} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavigationMenu;
