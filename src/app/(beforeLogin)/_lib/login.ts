'use server'

import { redirect } from 'next/navigation'
import { PATH } from '@/utils/path'
import { signIn } from '@/auth'
import { CredentialsSignin } from 'next-auth'

export default async function onLogin(state: unknown, formData: FormData) {
  const id = formData.get('id') as string,
    password = formData.get('password') as string
  if (!id) return { fieldData: { id, password }, message: 'no_id' }
  if (!password) return { fieldData: { id, password }, message: 'no_password' }
  let isSucceed = false

  try {
    const response = await signIn('credentials', {
      username: id,
      password,
      redirect: false,
    })
    if (response) isSucceed = true
  } catch (error) {
    if (error instanceof CredentialsSignin) {
      console.error({
        status: error.code,
        message: error.message,
      })
      return {
        fieldData: { id, password },
        message: error.message,
      }
    }
  }
  // isSucceed = true
  //
  if (isSucceed) return redirect(PATH.HOME)
}
