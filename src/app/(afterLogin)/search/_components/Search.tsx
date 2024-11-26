'use client'
import BackButton from '@/app/_ui/BackButton'
import Searchbar from '@/app/(afterLogin)/_components/Searchbar'
import Tab from '@/app/(afterLogin)/_components/Tab'
import { searchTabList } from '@/utils/tabList'
import { postList } from '@/data'
import PostItem from '@/app/(afterLogin)/_components/PostItem'
import { useSearchParams } from 'next/navigation'

const Search = () => {
  const searchParams = useSearchParams()
  return (
    <section className={'border-grey_light border'}>
      <div
        className={
          'bg-[hsla(0, 0%, 100%, .85)] border-b-grey_hover fixed top-0 z-10 w-[598px] border-b backdrop-blur-lg'
        }
      >
        <div className={'flex items-center p-2'}>
          <BackButton />
          <div className={'ml-2 flex-1'}>
            <Searchbar defaultValue={searchParams.get('q') || undefined} />
          </div>
        </div>
        <Tab tabList={searchTabList} />
      </div>
      <article className={'mt-[128px]'}>
        {postList.map((post, index) => (
          <PostItem post={post} key={index} />
        ))}
      </article>
    </section>
  )
}
export default Search
