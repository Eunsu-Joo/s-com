'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { CloseIcon } from '@/app/_ui/Icons'

const ModalContainer = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const closeModal = () => router.back()
  return (
    <div className='fixed inset-0 z-20 h-full w-screen bg-modal_background transition-opacity'>
      <div
        className='fixed inset-0 w-screen overflow-y-auto'
        onClick={closeModal}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className='absolute left-1/2 top-[5%] z-20 flex min-h-[450px] min-w-[600px] -translate-x-1/2 transform flex-col rounded-2xl bg-background p-0 pb-6 pt-8'
        >
          <button
            onClick={closeModal}
            className='absolute left-4 top-4 z-10 flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-[17px] border-0 bg-inherit fill-foreground hover:bg-gray_light disabled:opacity-50 dark:hover:bg-[rgba(239,243,244,0.1)]'
          >
            <CloseIcon />
          </button>
          {children}
        </div>
      </div>
    </div>
  )
}
export default ModalContainer
