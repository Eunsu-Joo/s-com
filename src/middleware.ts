import { NextRequest, NextResponse } from 'next/server'
import { PATH } from '@/utils/path'
import { auth } from '@/auth'

export async function middleware(request: NextRequest) {
  const session = await auth()

  if (!session) {
    return NextResponse.redirect(new URL(PATH.LOGIN, request.url))
  }

  if (request.nextUrl.pathname === PATH.LOGIN_REDIRECT) {
    return NextResponse.redirect(new URL(PATH.LOGIN, request.url))
  }
}

export const config = {
  matcher: ['/compose/tweet', '/explore', '/messages', '/search', '/login'],
}
