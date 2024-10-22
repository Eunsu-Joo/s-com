import Image from 'next/image'
import logo from '../../public/logo.png'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='bg-background_end flex h-dvh w-dvw flex-row p-0'>
      <div className='flex flex-1 items-center justify-center'>
        <Image src={logo} alt={'로고이미지'} width={450} height={550} />
      </div>
      <div className='flex flex-1 flex-col justify-center'>
        <h1 className='my-12 text-[64px] font-bold'>지금 일어나고 있는 일</h1>
        <h2 className='mb-8 text-[31px] font-bold'>지금 가입하세요.</h2>
        <Link
          href={'/i/flow/signup'}
          className='btn-primary h-[40px] w-[300px]'
        >
          계정 만들기
        </Link>
        <h3 className='mb-[20px] mt-[40px] text-[17px] font-bold'>
          이미 트위터에 가입하셨나요?
        </h3>
        <Link
          href={'/i/flow/login'}
          className='btn-secondary h-[40px] w-[300px]'
        >
          로그인
        </Link>
      </div>
    </main>
  )
}
