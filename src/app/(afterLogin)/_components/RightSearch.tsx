'use client'
import { PATH } from '@/utils/path'
import Searchbar from '@/app/(afterLogin)/_components/Searchbar'
import React, { useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { CheckedIcon } from '@/app/_ui/Icons'

const RightSearch = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()
  const newSearchParams = new URLSearchParams(searchParams)
  const onChangeFollow = () => {
    newSearchParams.set('pf', 'on')
    router.replace(`${PATH.SEARCH}?${newSearchParams.toString()}`)
  }
  const onChangeAll = () => {
    newSearchParams.delete('pf')
    router.replace(`${PATH.SEARCH}?${newSearchParams.toString()}`)
  }
  if (pathname === PATH.EXPLORE) return null
  if (pathname === PATH.SEARCH) {
    return (
      <>
        <h4
          className={
            'border-grey_hover mt-3 rounded-[16px] border px-4 py-3 text-[20px] font-bold'
          }
        >
          검색 필터
        </h4>
        <div className='my-3 rounded-[16px] border px-4 py-3'>
          <h5 className={'mb-2 text-[15px] font-bold'}>사용자</h5>
          <div className={'relative flex items-center'}>
            <label htmlFor='all'>모든 사용자</label>
            <input
              id={'all'}
              type='radio'
              onChange={onChangeAll}
              name='pf'
              defaultChecked={true}
              className={'peer appearance-none'}
            />
            <label
              htmlFor={'all'}
              className={
                'border-gray-200 absolute right-0 top-1/2 h-[19.44px] w-[19.44px] -translate-y-1/2 rounded-full border peer-checked:hidden'
              }
            />
            <label
              htmlFor={'all'}
              className={
                'absolute right-[-4px] top-1/2 hidden h-7 w-7 -translate-y-1/2 peer-checked:block'
              }
            >
              <CheckedIcon />
            </label>
          </div>
          <div className={'relative flex items-center justify-between'}>
            <label htmlFor='follow'>내가 팔로우하는 사람들</label>
            <input
              id={'follow'}
              type='radio'
              onChange={onChangeFollow}
              name='pf'
              value={'on'}
              className={'peer appearance-none'}
            />
            <label
              htmlFor={'follow'}
              className={
                'border-gray-200 absolute right-0 top-1/2 h-[19.44px] w-[19.44px] -translate-y-1/2 rounded-full border peer-checked:hidden'
              }
            />
            <label
              htmlFor={'follow'}
              className={
                'absolute right-[-4px] top-1/2 hidden h-7 w-7 -translate-y-1/2 peer-checked:block'
              }
            >
              <CheckedIcon />
            </label>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className={'fixed top-0 z-10 w-[inherit]'}>
      <Searchbar />
    </div>
  )
}
export default RightSearch
