import Link from 'next/link';
import { Moon } from 'lucide-react';

import ActiveLink from './ActiveLink';
import MobileMenu from './MobileMenu';
import Image from 'next/image';

const NavigationMenu = async () => {
  const user = false;

  const publicNavLinks = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Tutors',
      href: '/tutors',
    },
  ];
  const privateNavLinks = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Tutors',
      href: '/tutors',
    },
    {
      name: 'Add Tutor',
      href: '/add-tutor',
    },
    {
      name: 'My Tutors',
      href: '/my-tutors',
    },
    {
      name: 'My Sessions',
      href: '/my-sessions',
    },
  ];
  const navLinks = user ? privateNavLinks : publicNavLinks;

  return (
    <header className="w-full fixed top-3 z-50 px-4 pt-4">
      <nav className="container mx-auto rounded-[24px] border border-gray-200 bg-white px-2 py-2 shadow-sm">
        <div className="flex items-center justify-between gap-5">
          {/* left */}
          <div className="flex items-center gap-10">
            {/* logo */}
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
          {/* desktop nav */}
          <div className="hidden items-center gap-5 lg:gap-3 lg:flex">
            {navLinks.map(link => (
              <ActiveLink key={link.href} href={link.href}>
                {link.name}
              </ActiveLink>
            ))}
          </div>

          {/* right */}
          <div className="flex items-center gap-3">
            {/* theme button */}
            <button className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-all hover:bg-slate-100">
              <Moon size={20} />
            </button>

            {/* desktop auth */}
            <div className="hidden lg:block">
              {user ? (
                <div className="flex items-center gap-3 rounded-full bg-blue-100 px-2 py-1">
                  <Image
                    width={8}
                    height={8}
                    src={user.image}
                    alt={user.name}
                    className="h-8 w-8 rounded-full border-2 border-white object-cover"
                  />

                  <span className="font-medium text-slate-700">
                    {user.name}
                  </span>
                </div>
              ) : (
                <div className="rounded-2xl bg-blue-600 px-7 py-2.5 font-semibold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700">
                  <Link href={'/signin'}>Login</Link> /{' '}
                  <Link href={'/signup'}>Register</Link>
                </div>
              )}
            </div>

            {/* mobile menu */}
            <MobileMenu navLinks={navLinks} user={user} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavigationMenu;
