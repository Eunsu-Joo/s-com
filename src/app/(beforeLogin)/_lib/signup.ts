'use sever'

import { redirect } from 'next/navigation'
import { PATH } from '@/utils/path'
import { signIn } from '@/auth'
import { CredentialsSignin } from 'next-auth'

export default async function onSignup(state: unknown, formData: FormData) {
  const id = formData.get('id') as string,
    nickname = formData.get('nickname') as string,
    password = formData.get('password') as string
  if (!id) return { fieldData: null, message: 'no_id' }
  if (!password) return { fieldData: { id }, message: 'no_password' }
  if (!nickname) return { fieldData: { id, password }, message: 'no_nickname' }

  let isSucceed = false

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/signup`,
    {
      method: 'POST',

      body: formData,
      credentials: 'include', //이게 있어야 쿠키가 전달됨.
    }
  )

  if (response.status === 200) {
    try {
      await signIn('credentials', {
        username: id,
        password,
        redirect: false,
      }).then(() => (isSucceed = true))
    } catch (error) {
      if (error instanceof CredentialsSignin) {
        console.error({
          status: error.code,
          message: error.message,
        })
        return {
          fieldData: { id, password, nickname },
          message: error.message,
        }
      }
    }
  }
  if (response.status === 400) {
    return {
      fieldData: { id, password, nickname },
      message: 'not_found',
    }
  }
  if (response.status === 403) {
    return {
      fieldData: { id, password, nickname },
      message: 'user_exist',
    }
  }

  if (isSucceed) return redirect(PATH.HOME)
}
