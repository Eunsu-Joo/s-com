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
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: credentials.username,
              password: credentials.password,
            }),
            credentials: 'include',
            //이게 있어야 쿠키가 전달됨.
          }
        )

        if (!response.ok) {
          // 로그인 애러났을 때 서버에 알려주는 코드.

          const AuthError = new CredentialsSignin()
          AuthError.code = response.status.toString()
          throw AuthError
        }
        // 성공했을 때 유저정보 담음.
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
