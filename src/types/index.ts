import { Session } from '@auth/core/types'

export type SessionType = {
  session: Session | null
}
export type ImageType = {
  url: string
  name: string
  imageId: string
  width: number
  height: number
}
export type UserType = {
  nickname: string
  id: string
  image: string
  followerNumber: number
  followNumber: number
  isFollowing: boolean
}

export type PostType = {
  user: UserType
  contents: string
  images: ImageType[]
  comments: number
  retweets: {
    retweetCount: number
    retweeted: boolean
  }
  likes: {
    likeCount: number
    liked: boolean
  }
  postId: number
  createdAt: Date
}
export type TrendType = {
  tagId: number
  title: string
  count: number
}
