import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  const { pathname } = request.nextUrl;

  // If no admin password is set, allow access
  if (!adminPassword) {
    return NextResponse.next();
  }

  // Allow access to the login page itself
  if (pathname.startsWith('/admin/login')) {
    return NextResponse.next();
  }

  // Check for the auth cookie on any other /admin page
  if (pathname.startsWith('/admin')) {
    const isAuthenticated = request.cookies.get('admin-auth')?.value === 'true';
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
