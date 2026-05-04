import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ja', 'en', 'ko'],
  defaultLocale: 'ja'
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
