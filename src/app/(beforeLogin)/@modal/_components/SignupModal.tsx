'use client'
import ModalContainer from '@/app/_components/ModalContainer'
import { ChangeEvent, FormEvent, useActionState, useRef, useState } from 'react'
import onSignup from '@/app/(beforeLogin)/_lib/signup'

const SignupModal = () => {
  const [data, action, isPending] = useActionState(onSignup, {
    fieldData: null,
    message: '',
  })

  return (
    <ModalContainer>
      <section className={'px-10 pt-5'}>
        <h3 className='pb-5 text-[31px] font-bold'>계정을 생성하세요.</h3>
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
                type='password'
                id='password'
                name={'password'}
                className='c-input-text'
              />
            </div>
            <div className='c-input-box'>
              <label htmlFor='nickname' className='c-input-label'>
                닉네임
              </label>
              <input
                defaultValue={data?.fieldData?.nickname ?? ''}
                type='text'
                id='nickname'
                name={'nickname'}
                className='c-input-text'
                autoComplete={'off'}
              />
            </div>
            <div className='c-input-box'>
              <label htmlFor='profile' className='c-input-label block'>
                프로필
              </label>
              <div className={'flex items-center'}>
                {/*TODO Default Value 설정해야함.*/}
                <input
                  type='file'
                  id={'image'}
                  name={'image'}
                  accept='image/*'
                  className={
                    'file:c-btn-foreground text-[12px] file:cursor-pointer file:text-[12px]'
                  }
                />
              </div>
            </div>
          </div>
          <p className='mt-4 text-center font-bold text-red-500'>
            {data?.message ?? ''}
          </p>
          <input
            type={'submit'}
            value={'가입하기'}
            disabled={isPending}
            className='c-btn-foreground mt-6 h-[50px] w-full cursor-pointer text-[17px] text-background'
          />
        </form>
      </section>
    </ModalContainer>
  )
}
export default SignupModal
