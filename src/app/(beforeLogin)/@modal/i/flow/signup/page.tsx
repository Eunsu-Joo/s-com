'use client'
import ModalContainer from '@/app/_components/ModalContainer'
import onSignup from '@/app/(beforeLogin)/_lib/signup'
import { useActionState } from 'react'
import SignupModal from '@/app/(beforeLogin)/@modal/_components/SignupModal'

export default function SignupModalPage() {
  return <SignupModal />
  // const [data, action, isPending] = useActionState(onSignup, {
  //   fieldData: null,
  //   message: '',
  // })
  //
  // return (
  //   <ModalContainer>
  //     <section className={'px-10 pt-5'}>
  //       <h3 className='pb-5 text-[31px] font-bold'>계정을 생성하세요.</h3>
  //       <form action={action} className='flex flex-1 flex-col'>
  //         <div className='flex-1'>
  //           <div className='c-input-box'>
  //             <label htmlFor='id' className='c-input-label'>
  //               아이디
  //             </label>
  //             <input
  //               defaultValue={data?.fieldData?.id ?? ''}
  //               type='text'
  //               id='id'
  //               name={'id'}
  //               className='c-input-text'
  //               autoComplete={'off'}
  //             />
  //           </div>
  //           <div className='c-input-box'>
  //             <label htmlFor='password' className='c-input-label'>
  //               비밀번호
  //             </label>
  //             <input
  //               defaultValue={data?.fieldData?.password ?? ''}
  //               type='password'
  //               id='password'
  //               name={'password'}
  //               className='c-input-text'
  //             />
  //           </div>
  //           <div className='c-input-box'>
  //             <label htmlFor='nickname' className='c-input-label'>
  //               닉네임
  //             </label>
  //             <input
  //               defaultValue={data?.fieldData?.nickname ?? ''}
  //               type='text'
  //               id='nickname'
  //               name={'nickname'}
  //               className='c-input-text'
  //               autoComplete={'off'}
  //             />
  //           </div>
  //           <div className='c-input-box'>
  //             <label htmlFor='profile' className='c-input-label block'>
  //               프로필
  //             </label>
  //             <div className={'flex items-center'}>
  //               {/*TODO Default Value 설정해야함.*/}
  //               <input
  //                 type='file'
  //                 id={'image'}
  //                 name={'image'}
  //                 accept='image/*'
  //                 className={
  //                   'file:c-btn-foreground text-[12px] file:cursor-pointer file:text-[12px]'
  //                 }
  //               />
  //             </div>
  //           </div>
  //         </div>
  //         <p className='mt-4 text-center font-bold text-red-500'>
  //           {data?.message === 'no_id' && '아이디를 입력해주세요.'}
  //           {data?.message === 'no_password' && '비밀번호를 입력해주세요.'}
  //           {data?.message === 'no_nickname' && '닉네임을 입력해주세요.'}
  //           {data?.message === 'user_exist' && '존재하는 아이디입니다.'}
  //           {data?.message === 'not_found' &&
  //             '애러가 발생했습니다. 관리자에게 문의하세요.'}
  //         </p>
  //         <input
  //           type={'submit'}
  //           value={'가입하기'}
  //           // disabled={isPending}
  //           className='c-btn-foreground mt-6 h-[50px] w-full cursor-pointer text-[17px] text-background'
  //         />
  //       </form>
  //     </section>
  //   </ModalContainer>
}
