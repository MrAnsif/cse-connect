import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const dashboardMatcher = createRouteMatcher(['/dashboard(.*)']);
const rootMatcher = createRouteMatcher(['/']);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  const { nextUrl: url } = req;

  if (rootMatcher(req) && userId) {
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  if (dashboardMatcher(req) && !userId) {
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/', '/dashboard/:path*'],
};
