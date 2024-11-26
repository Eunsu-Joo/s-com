import PhotoModal from '@/app/(afterLogin)/@modal/(.)[user]/status/[postId]/photo/[photoId]/_components/PhotoModal'
import { post } from '@/data'

export default function PhotoDetailPage() {
  return <PhotoModal post={post} />
}
