'use server'

import { redirect } from 'next/navigation'
import { PATH } from '@/utils/path'
import { signIn } from '@/auth'
import { CredentialsSignin } from 'next-auth'

export default async function onLogin(state: unknown, formData: FormData) {
  const id = formData.get('id') as string,
    password = formData.get('password') as string
  let message = ''
  if (!id) {
    message = '아이디를 입력해주세요.'
    return { fieldData: null, message }
  }
  if (!password) {
    message = '패스워드를 입력해주세요.'
    return { fieldData: { id }, message }
  }

  let isSucceed = false

  try {
    const response = await signIn('credentials', {
      username: id,
      password,
      redirect: false,
    })
    if (response) isSucceed = true
  } catch (error: any) {
    // 로그인 실패했을 때 (401,404) catch문으로 받음.
    if (error instanceof CredentialsSignin) {
      if (+error.code === 401) {
        message = '비밀번호가 일치하지 않습니다.'
      }
      if (+error.code === 404) {
        message = '존재하지 않는 유저입니다.'
      }
      return {
        fieldData: { id, password },
        message,
      }
    }
  }
  if (isSucceed) return redirect(PATH.HOME)
}
