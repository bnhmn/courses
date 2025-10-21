import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import z from 'zod';

import { findUserByEmail } from '@/app/lib/data';

import { authConfig } from './auth.config';

// I don't know why we need to have two separate files auth.config.ts and auth.ts

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    // https://authjs.dev/getting-started/providers/credentials
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await findUserByEmail(email);
          if (!user) {
            return null;
          }
          if (password === user.password) {
            return user;
          }
        }
        return null;
      },
    }),
  ],
});
