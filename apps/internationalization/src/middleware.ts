import { NextRequest, NextResponse } from 'next/server';

const locales = (process.env.APP_LOCALES as string).split(',');

const checkIfPathnameHasLocale = (pathname: string) => {
  return locales.some((locale) => pathname.startsWith(`/${locale}`));
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (checkIfPathnameHasLocale(pathname)) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL(`/${locales[0]}${pathname}`, request.nextUrl));
}

export const config = {
  matcher: ['/((?!_next).*)'],
};
