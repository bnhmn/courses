import NextAuth from 'next-auth';

import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

// The advantage of employing Proxy for authentication is that the protected routes will not even start rendering
// until the Proxy verifies the authentication, enhancing both the security and performance of your application.

export const config = {
  // Only run the auth proxy on specific paths
  // https://nextjs.org/docs/app/api-reference/file-conventions/proxy#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
