'use client'
import ModalContainer from '@/app/_components/ModalContainer'
import { ChangeEvent, useRef, useState } from 'react'

const SignupModal = () => {
  const [inputs, setInputs] = useState({
    id: '',
    password: '',
    nickname: '',
  })
  const [message, setMessage] = useState('')
  const [profile, setProfile] = useState<File | null>(null)
  const profileRef = useRef<HTMLInputElement | null>(null)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const onUploadProfile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    setProfile(e.target.files[0])
  }

  return (
    <ModalContainer>
      <section className={'px-10 pt-5'}>
        <h3 className='pb-5 text-[31px] font-bold'>계정을 생성하세요.</h3>
        <form
          onSubmit={(e) => e.preventDefault()}
          className='flex flex-1 flex-col'
        >
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
                type='password'
                id='password'
                name={'password'}
                onChange={onChange}
                value={inputs.password}
                className='c-input-text'
              />
            </div>
            <div className='c-input-box'>
              <label htmlFor='nickname' className='c-input-label'>
                닉네임
              </label>
              <input
                type='text'
                id='nickname'
                name={'nickname'}
                onChange={onChange}
                value={inputs.nickname}
                className='c-input-text'
                autoComplete={'off'}
              />
            </div>
            <div className='c-input-box'>
              <label htmlFor='profile' className='c-input-label'>
                프로필
              </label>
              <input
                type='file'
                onChange={onUploadProfile}
                accept='image/*'
                hidden
                ref={profileRef}
              />
              <div className='flex items-stretch'>
                <button
                  onClick={() =>
                    profileRef.current && profileRef.current?.click()
                  }
                  className='c-btn-foreground w-1/5 text-[12px]'
                >
                  파일선택
                </button>
                <p className='pl-2 text-[14px]'>
                  {profile ? profile.name : ''}
                </p>
              </div>
            </div>
          </div>
          <p className='mt-10 text-center font-bold text-red-500'>{message}</p>
          <button
            className='c-btn-foreground mt-6 h-[50px] w-full text-[17px] text-background'
            disabled={!inputs.id || !inputs.password || !inputs.nickname}
          >
            가입하기
          </button>
        </form>
      </section>
    </ModalContainer>
  )
}
export default SignupModal
