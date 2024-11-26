import NextAuth, { CredentialsSignin } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { PATH } from '@/utils/path'
import { NextResponse } from 'next/server'

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: PATH.LOGIN,
    newUser: PATH.SIGNUP,
  },
  providers: [
    Credentials({
      credentials: {
        username: { label: 'username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, request) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/login`,
          {
            method: 'POST',
            // headers: {
            //   'Content-Type': 'application/json',
            //   // 'Content-Type': 'application/x-www-form-urlencoded',
            // },
            body: JSON.stringify({
              id: credentials.username,
              password: credentials.password,
            }),
            credentials: 'include',
            //이게 있어야 쿠키가 전달됨.
          }
        )
        if (!response.ok) {
          const AuthError = new CredentialsSignin()
          if (response.status === 400) AuthError.message = 'not_found'
          if (response.status === 401) AuthError.message = 'wrong_userInfo'
          if (response.status === 404) AuthError.message = 'no_user'
          AuthError.code = response.status.toString()
          throw AuthError
        }
        const result = await response.json()
        return {
          email: result.id,
          name: result.nickname,
          image: result.image,
          ...result,
        }
      },
    }),
  ],
})
