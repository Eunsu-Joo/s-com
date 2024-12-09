import BackButton from '@/app/_ui/BackButton'
import Searchbar from '@/app/(afterLogin)/_components/Searchbar'
import SearchTab from '@/app/(afterLogin)/search/_components/SearchTab'
import SearchResult from '@/app/(afterLogin)/search/_components/SearchResult'

export type ParamsType = {
  q: string
  pf?: string
  f?: string
}

export type SearchParamsType = {
  searchParams: Promise<ParamsType>
}

export default async function SearchPage({ searchParams }: SearchParamsType) {
  const params = await searchParams
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
            <Searchbar defaultValue={params.q || undefined} />
          </div>
        </div>
        <SearchTab />
      </div>
      <SearchResult searchParams={params} />
    </section>
  )
}
