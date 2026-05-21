import { NextResponse } from 'next/server';
import { auth } from './lib/auth';
import { headers } from 'next/headers';

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { pathname } = request.nextUrl;
  const isAuthPage = pathname === '/signin' || pathname === '/signup';

  if (isAuthPage) {
    if (session) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return;
  }

  if (!session) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  // if (session) {
  //   return NextResponse.redirect(new URL('/signin', request.url));
  // }
}

export const config = {
  matcher: [
    '/add-tutor',
    '/my-tutors',
    '/my-booked-session',
    '/tutors/:id',
    '/signin',
    '/signup',
  ],
};
