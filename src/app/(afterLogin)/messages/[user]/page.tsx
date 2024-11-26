import UserMeta from '@/app/(afterLogin)/messages/_components/UserMeta'
import { user } from '@/data'
import Title from '@/app/_ui/Title'

export default function SendMessagePage() {
  return (
    <section className={'border-grey_light border'}>
      <Title title={user.id} />
      <UserMeta user={user} />
      <article>채팅창</article>
    </section>
  )
}
