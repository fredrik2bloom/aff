// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const BOT_AGENTS = [
  'Googlebot',
  'Bingbot',
  'Slurp',
  'DuckDuckBot',
  'Baiduspider',
  'YandexBot',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const userAgent = request.headers.get('user-agent') || '';
  const isBot = BOT_AGENTS.some((bot) => userAgent.toLowerCase().includes(bot.toLowerCase()));

  // Cloaking logic now applies directly to the homepage
  if (isBot && pathname === '/') {
    // If it's a bot on the homepage, show them the neutral content.
    // The URL remains yourdomain.com/
    return NextResponse.rewrite(new URL('/neutral', request.url));
  }

  // All other requests (including users on the homepage) proceed as normal.
  return NextResponse.next();
}

// The matcher is now simplified to only run on the root path.
export const config = {
  matcher: '/',
};