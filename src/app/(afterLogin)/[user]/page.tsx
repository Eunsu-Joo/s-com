import Title from '@/app/_ui/Title'
import { user } from '@/data'
import UserInfo from '@/app/(afterLogin)/[user]/_components/UserInfo'

export default function UserPage() {
  return (
    <section className={'border-grey_light border'}>
      <Title title={user.id} />
      <article className={'px-3'}>
        <UserInfo user={user} />
      </article>
    </section>
  )
}
