'use client'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { PATH } from '@/utils/path'

type SearchbarProps = {
  defaultValue?: string
}
const Searchbar = ({ defaultValue = '' }: SearchbarProps) => {
  const [search, setSearch] = useState(defaultValue)
  const router = useRouter()
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`${PATH.SEARCH}?q=${search}`)
  }
  return (
    <div className={'w-full'}>
      <form
        className={
          'mb-3 mt-[6px] flex h-[42px] w-full items-center rounded-[24px] bg-gray_glow'
        }
        onSubmit={onSubmit}
      >
        <svg
          className={'ml-5'}
          width='20'
          viewBox='0 0 24 24'
          aria-hidden='true'
          fill={'#536471'}
        >
          <g>
            <path d='M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z'></path>
          </g>
        </svg>
        <input
          type='search'
          name={'search'}
          className={
            'ml-[5px] w-full border-0 bg-transparent p-3 text-[15px] outline-0'
          }
          value={search}
          autoFocus={true}
          autoComplete={'off'}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  )
}
export default Searchbar
