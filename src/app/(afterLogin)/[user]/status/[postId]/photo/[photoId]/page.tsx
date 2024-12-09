import PhotoModal from '@/app/(afterLogin)/@modal/(.)[user]/status/[postId]/photo/[photoId]/_components/PhotoModal'
import { PostPropsType } from '@/app/(afterLogin)/[user]/status/[postId]/page'

type PhotoModalPageProps = {
  params: Promise<PostPropsType>
}
export default async function PhotoDetailPage({ params }: PhotoModalPageProps) {
  const { user, postId } = await params
  return <PhotoModal postId={postId} user={user} />
}
