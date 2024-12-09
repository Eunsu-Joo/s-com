import Searchbar from '@/app/(afterLogin)/_components/Searchbar'
import { auth } from '@/auth'
import ExploreSection from '@/app/(afterLogin)/explore/_components/ExploreSection'
import React from 'react'

export default async function ExplorePage() {
  const session = await auth()
  return (
    <section className={'border'}>
      <div
        className={
          'bg-[hsla(0, 0%, 100%, .85)] fixed top-0 z-10 w-[598px] px-4 backdrop-blur-lg'
        }
      >
        <Searchbar />
      </div>
      <article className={'mt-[60px] border-t'}>
        <ExploreSection session={session} />
      </article>
    </section>
  )
}
