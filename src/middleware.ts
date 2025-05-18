import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  const publicRoutes = ['/', '/login', '/signup'];

  const isPublic = publicRoutes.includes(request.nextUrl.pathname);

  if (!token && !isPublic) {
    // Redirect unauthenticated user trying to access a protected route
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next(); // Proceed normally
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|api).*)'], // Match all routes except static/API
};
