import Title from '@/app/_ui/Title'
import Tab from '@/app/(afterLogin)/_components/Tab'
import { mainTabList } from '@/utils/tabList'
import PostForm from '@/app/(afterLogin)/_components/PostForm'
import { postList } from '@/data'
import PostItem from '@/app/(afterLogin)/_components/PostItem'
import { auth } from '@/auth'

export default async function MainPage() {
  return (
    <section className={'border-grey_light border'}>
      <div
        className={
          'bg-[hsla(0, 0%, 100%, .85)] h-auth fixed top-0 z-10 w-[598px] backdrop-blur-lg'
        }
      >
        <Title title={'홈'} backButton={false} />
        <Tab tabList={mainTabList} />
      </div>
      <article className={'mt-[105px] border-t'}>
        <PostForm />
        {postList.map((post, index) => (
          <PostItem post={post} key={index} />
        ))}
      </article>
    </section>
  )
}
