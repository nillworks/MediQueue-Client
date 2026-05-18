'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import ActiveLink from './ActiveLink';
import Image from 'next/image';

const MobileMenu = ({ navLinks, user }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* menu button */}
      <button
        onClick={() => setOpen(true)}
        className="flex h-8 w-8 items-center justify-center rounded-xl border border-gray-200 lg:hidden cursor-pointer"
      >
        <Menu size={18} className="cursor-pointer" />
      </button>

      {/* overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-all duration-300 ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      ></div>

      {/* sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 h-screen w-[280px] bg-white p-5 transition-all duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* top */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Menu</h2>

          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* nav links */}
        <div className="flex flex-col gap-6">
          {navLinks.map(link => (
            <div key={link.href} onClick={() => setOpen(false)}>
              <ActiveLink href={link.href}>{link.name}</ActiveLink>
            </div>
          ))}
        </div>

        {/* auth section */}
        <div className="mt-8 border-t pt-6">
          {user ? (
            <div className="flex items-center gap-3 rounded-2xl bg-blue-100 p-3">
              <Image
                width={10}
                height={10}
                src={user.image}
                alt={user.name}
                className="h-12 w-12 rounded-full object-cover"
              />

              <div>
                <h4 className="font-semibold text-slate-800">{user.name}</h4>

                <p className="text-sm text-slate-500">Logged In</p>
              </div>
            </div>
          ) : (
            <div
              onClick={() => setOpen(false)}
              className="block rounded-2xl bg-blue-600 px-5 py-3 text-center font-semibold text-white"
            >
              <Link href={'/signin'}>Login</Link> /{' '}
              <Link href={'/signup'}>Register</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
