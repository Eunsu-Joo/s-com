'use sever'

import { redirect } from 'next/navigation'
import { PATH } from '@/utils/path'
import { signIn } from '@/auth'
import { CredentialsSignin } from 'next-auth'

export default async function onSignup(state: unknown, formData: FormData) {
  const id = formData.get('id') as string,
    nickname = formData.get('nickname') as string,
    password = formData.get('password') as string,
    image = formData.get('image') as File
  let message = ''
  if (!id) {
    message = '아이디를 입력해 주세요.'
    return { fieldData: null, message }
  }
  if (!password) {
    message = '비밀번호를 입력해 주세요.'
    return { fieldData: { id }, message }
  }

  if (!nickname) {
    message = '닉네임을 입력해 주세요.'
    return { fieldData: { id, password }, message }
  }

  if (image.size === 0) {
    message = '이미지는 필수 항목입니다.'
    return {
      fieldData: { id, password, nickname },
      message,
    }
  }
  let isSucceed = false

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method: 'POST',
        body: formData,
        credentials: 'include', //이게 있어야 쿠키가 전달됨.
      }
    )
    if (response.status === 201) {
      isSucceed = true
      await signIn('credentials', {
        redirect: false,
        username: id,
        password,
      })
    }

    if (response.status === 403) {
      message = '존재하는 아이디 입니다.'
      return {
        fieldData: { id, password, nickname, image },
        message,
      }
    } else {
      message = '예상치 못한 애러가 발생했습니다. 관리자에게 문의하세요.'
      return {
        fieldData: { id, password, nickname, image },
        message,
      }
    }
  } catch (error: unknown) {
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
