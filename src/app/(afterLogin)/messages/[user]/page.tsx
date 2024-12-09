import UserMeta from '@/app/(afterLogin)/messages/_components/UserMeta'

import Title from '@/app/_ui/Title'
import { auth } from '@/auth'

export default async function SendMessagePage() {
  const session = await auth()
  if (!session?.user) return null
  return (
    <section className={'border-grey_light border'}>
      <Title title={session.user.email ?? ''} />
      <UserMeta user={session.user} />
      <article>채팅창</article>
    </section>
  )
}
