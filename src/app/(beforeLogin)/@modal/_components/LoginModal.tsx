'use client'
import ModalContainer from '@/app/_components/ModalContainer'
import { ChangeEvent, FormEvent, useState } from 'react'

const LoginModal = () => {
  const [inputs, setInputs] = useState({
    id: '',
    password: '',
  })
  const [message, setMessage] = useState('')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })
  }
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <ModalContainer>
      <div className={'px-10 pt-10'}>
        <h3 className='pb-5 text-[31px] font-bold'>로그인하세요.</h3>
        <form onSubmit={onSubmit} className='flex flex-1 flex-col'>
          <div className='flex-1'>
            <div className='c-input-box'>
              <label htmlFor='id' className='c-input-label'>
                아이디
              </label>
              <input
                type='text'
                id='id'
                name={'id'}
                onChange={onChange}
                value={inputs.id}
                className='c-input-text'
                autoComplete={'off'}
              />
            </div>
            <div className='c-input-box'>
              <label htmlFor='password' className='c-input-label'>
                비밀번호
              </label>
              <input
                id={'password'}
                name={'password'}
                onChange={onChange}
                value={inputs.password}
                type='password'
                className='c-input-text'
              />
            </div>
          </div>
          <p className='text-center font-bold text-red-500'>{message}</p>
          <button
            className='c-btn-foreground mt-6 h-[50px] w-full text-[17px] text-background'
            disabled={!inputs.id || !inputs.password}
          >
            로그인하기
          </button>
        </form>
      </div>
    </ModalContainer>
  )
}
export default LoginModal
