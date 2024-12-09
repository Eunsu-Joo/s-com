'use client'
import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from 'next/navigation'
import { useState } from 'react'
import { SearchParamsType } from '@/app/(afterLogin)/search/page'

const SearchTab = () => {
  const [current, setCurrent] = useState('hot')
  const router = useRouter()
  const searchParams = useSearchParams()
  const onClickHot = () => {
    setCurrent('hot')
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.delete('f')
    router.replace(`/search?${newSearchParams.toString()}`)
  }
  const onClickNew = () => {
    setCurrent('new')
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.set('f', 'live')
    router.replace(`/search?${newSearchParams.toString()}`)
  }

  return (
    <div className={'flex h-[53px]'}>
      <button
        className={
          'relative flex flex-1 cursor-pointer items-center justify-center text-[15px]'
        }
        onClick={onClickHot}
      >
        인기
        <span
          className={
            'absolute bottom-0 h-[4px] w-[56px] self-center rounded-[9999px] bg-primary'
          }
          hidden={current === 'new'}
        />
      </button>
      <button
        className={
          'relative flex flex-1 cursor-pointer items-center justify-center text-[15px]'
        }
        onClick={onClickNew}
      >
        최신
        <span
          hidden={current === 'hot'}
          className={
            'absolute bottom-0 h-[4px] w-[56px] self-center rounded-[9999px] bg-primary'
          }
        />
      </button>
    </div>
  )
}
export default SearchTab
