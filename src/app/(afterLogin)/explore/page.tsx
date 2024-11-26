import Searchbar from '@/app/(afterLogin)/_components/Searchbar'
import Title from '@/app/_ui/Title'
import { postList } from '@/data'
import PostItem from '@/app/(afterLogin)/_components/PostItem'

export default function ExplorePage() {
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
        <Title title={'나를 위한 트렌드'} backButton={false} />
        {postList.map((post, index) => (
          <PostItem post={post} key={index} />
        ))}
      </article>
    </section>
  )
}
