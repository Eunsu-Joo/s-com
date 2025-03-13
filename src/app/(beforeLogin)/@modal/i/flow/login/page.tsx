'use client'
import LoginModal from '@/app/(beforeLogin)/@modal/_components/LoginModal'
import ModalContainer from '@/app/_components/ModalContainer'
import onSignup from '@/app/(beforeLogin)/_lib/signup'
import onLogin from '@/app/(beforeLogin)/_lib/login'
import { useActionState } from 'react'

export default function LoginModalPage() {
  return <LoginModal />
}
