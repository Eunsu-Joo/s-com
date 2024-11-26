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
  images: {
    url: string
    name: string
    imageId: number
    width: number
    height: number
  }[]
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
export type TrendItemType = {
  keyword: string
  length: number
  title: string
  id: number
}

const fakerImageArray = [
  'https://plus.unsplash.com/premium_photo-1664104722498-7fa26de2144d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1725994390784-1ab5232a387d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1720048171080-78849cff8b19?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1730727384555-35318cb80600?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1725892604041-fe689d020149?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1731243769111-90fec6f9c7f3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1731085798307-8c58cd101b98?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]
export const post = {
  user: {
    nickname: 'nickname',
    id: 'thisIsId',
    image: fakerImageArray[1],
    followerNumber: 10,
    followNumber: 110,
    isFollowing: false,
  },
  contents: '내용',
  images: Array.from({ length: 4 }).map((_, index) => ({
    url: fakerImageArray[index + 1],
    name: '1234' + index,
    imageId: index + 1,
    width: 510,
    height: 320,
  })),
  comments: 34,
  retweets: {
    retweeted: true,
    retweetCount: 44,
  },
  likes: {
    likeCount: 123,
    liked: true,
  },
  postId: 1,
  createdAt: new Date(),
}

export const postList = Array.from({ length: 10 }).map((_, index) => {
  return { ...post, postId: index + 1 }
})
export const user = {
  nickname: '유저네임',
  id: 'userId',
  image:
    'https://plus.unsplash.com/premium_photo-1664104722498-7fa26de2144d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  followerNumber: 10,
  followNumber: 110,
  isFollowing: true,
}
export const followRecommendList = Array.from({ length: 5 }).map(
  (_, index) => ({
    nickname: `nickname${index + 1}`,
    id: `id${index + 1}`,
    image: fakerImageArray[index],
    followerNumber: 10,
    followNumber: 110,
  })
)

export const trendList = Array.from({ length: 20 }).map((_, index) => ({
  keyword: 'keyword',
  length: index + 10,
  title: '키워드',
  id: index,
}))
