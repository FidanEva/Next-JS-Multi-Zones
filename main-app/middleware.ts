// main-app/middleware.ts
import { NextResponse } from 'next/server';

export function middleware(req: Request) {
  const url = new URL(req.url);

//   // Proxy dashboard traffic
//   if (url.pathname.startsWith('/dashboard')) {
//     return NextResponse.redirect(`http://localhost:3002${url.pathname}`);
//   }

//   return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
