'use client'
import LoginModal from '@/app/(beforeLogin)/@modal/_components/LoginModal'
import ModalContainer from '@/app/_components/ModalContainer'
import onSignup from '@/app/(beforeLogin)/_lib/signup'
import onLogin from '@/app/(beforeLogin)/_lib/login'
import { useActionState } from 'react'

export default function LoginModalPage() {
  const [data, action, isPending] = useActionState(onLogin, {
    fieldData: {
      id: '',
      password: '',
    },
    message: '',
  })

  return (
    <ModalContainer>
      <div className={'px-10 pt-10'}>
        <h3 className='pb-5 text-[31px] font-bold'>로그인하세요.</h3>
        <form action={action} className='flex flex-1 flex-col'>
          <div className='flex-1'>
            <div className='c-input-box'>
              <label htmlFor='id' className='c-input-label'>
                아이디
              </label>
              <input
                defaultValue={data?.fieldData?.id ?? ''}
                type='text'
                id='id'
                name={'id'}
                className='c-input-text'
                autoComplete={'off'}
              />
            </div>
            <div className='c-input-box'>
              <label htmlFor='password' className='c-input-label'>
                비밀번호
              </label>
              <input
                defaultValue={data?.fieldData?.password ?? ''}
                id={'password'}
                name={'password'}
                type='password'
                className='c-input-text'
              />
            </div>
          </div>
          <p className='text-center font-bold text-red-500'>
            {data?.message === 'no_id' && '아이디를 입력해 주세요.'}
            {data?.message === 'no_password' && '비밀번호를 입력해 주세요.'}
            {data?.message === 'wrong_userInfo' &&
              '아이디와 비밀번호가 일치하지 않습니다.'}
            {data?.message === 'no_user' && '존재하지 않는 사용자 입니다.'}
            {data?.message === 'not_found' && '애러가 발생했습니다.'}
          </p>
          <button
            type='submit'
            disabled={isPending}
            className='c-btn-foreground mt-6 h-[50px] w-full text-[17px] text-background'
          >
            가입하기
          </button>
        </form>
      </div>
    </ModalContainer>
  )
}
