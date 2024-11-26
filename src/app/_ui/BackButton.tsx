'use client'
import { useRouter } from 'next/navigation'
import { BackIcon } from '@/app/_ui/Icons'

const BackButton = () => {
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className={
        'hover:bg-gray_light flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-all'
      }
    >
      <BackIcon />
    </button>
  )
}
export default BackButton
