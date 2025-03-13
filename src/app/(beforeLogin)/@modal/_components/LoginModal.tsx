'use client'
import ModalContainer from '@/app/_components/ModalContainer'
import { ChangeEvent, FormEvent, useActionState, useState } from 'react'
import onLogin from '@/app/(beforeLogin)/_lib/login'

const LoginModal = () => {
  const [data, action, isPending] = useActionState(onLogin, {
    fieldData: null,
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
            {data?.message ?? ''}
          </p>
          <button
            type='submit'
            disabled={isPending}
            className='c-btn-foreground mt-6 h-[50px] w-full text-[17px] text-background'
          >
            로그인하기
          </button>
        </form>
      </div>
    </ModalContainer>
  )
}
export default LoginModal
