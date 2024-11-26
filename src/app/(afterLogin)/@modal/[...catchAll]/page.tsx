'use client'
import { redirect, usePathname, useRouter } from 'next/navigation'
import { PATH } from '@/utils/path'

export default function CatchAll() {
  const pathname = usePathname()
  if (pathname === PATH.TWEET) return redirect('/home')
  return null
}
