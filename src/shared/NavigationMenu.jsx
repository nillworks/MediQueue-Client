'use client';

import Link from 'next/link';
import { Moon } from 'lucide-react';
import ActiveLink from './ActiveLink';
import MobileMenu from './MobileMenu';
import Image from 'next/image';
import { signOut, useSession } from '@/lib/auth-client';
import { useState, useRef, useEffect } from 'react';

const NavigationMenu = () => {
  const { data } = useSession();
  const user = data?.user;

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

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
    { name: 'My Tutors', href: '/my-tutors' },
    { name: 'My Booked Session', href: '/my-booked-session' },
  ];

  const navLinks = user ? privateNavLinks : publicNavLinks;

  return (
    <header className="w-full fixed top-3 z-50 px-4 pt-4">
      <nav className="container mx-auto rounded-[24px] border border-gray-200 bg-white px-2 py-2 shadow-sm">
        <div className="flex items-center justify-between gap-5">
          {/* left */}
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-end gap-[3px]">
                <div className="h-5 w-3 rounded bg-blue-200"></div>
                <div className="flex h-7 w-4 items-center justify-center rounded bg-blue-600">
                  <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                </div>
              </div>
              <h2 className="text-[20px] font-bold text-slate-900">
                MediQueue
              </h2>
            </Link>
          </div>

          {/* center */}
          <div className="hidden items-center gap-5 lg:flex">
            {navLinks.map(link => (
              <ActiveLink key={link.href} href={link.href}>
                {link.name}
              </ActiveLink>
            ))}
          </div>

          {/* right */}
          <div className="flex items-center gap-3">
            {/* theme */}
            <button className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100">
              <Moon size={20} />
            </button>

            {/* desktop auth */}
            <div className="hidden lg:block">
              {user ? (
                <div className="relative cursor-pointer" ref={dropdownRef}>
                  {/* profile button */}
                  <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-3 rounded-full bg-blue-100 px-2 py-1 hover:bg-blue-200 transition"
                  >
                    <Image
                      width={32}
                      height={32}
                      src={user?.image}
                      alt={user?.name || 'user'}
                      className="h-8 w-8 rounded-full border-2 border-white object-cover"
                    />

                    <span className="font-medium text-slate-700">
                      {user?.name}
                    </span>
                  </button>

                  {/* dropdown */}
                  {open && (
                    <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-lg border border-gray-200 py-2 z-50">
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Profile
                      </Link>

                      <Link
                        href="/my-tutors"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        My Tutors
                      </Link>

                      <Link
                        href="/my-sessions"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        My Sessions
                      </Link>

                      <button
                        onClick={() => signOut()}
                        className="w-full cursor-pointer text-left px-4 py-2 text-sm hover:bg-red-100 text-red-500"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="rounded-2xl bg-blue-600 px-7 py-2.5 font-semibold text-white hover:bg-blue-700">
                  <Link href="/signin">Login</Link> /{' '}
                  <Link href="/signup">Register</Link>
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
