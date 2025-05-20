import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;
    const pathname = request.nextUrl.pathname;

    // Unauthenticated users trying to access / → redirect to login
    if (!token && pathname === '/') {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // If logged in and accessing /login → redirect to /
    if (token && pathname === '/login') {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
};

export const config = {
    matcher: ['/', '/login'],
};
