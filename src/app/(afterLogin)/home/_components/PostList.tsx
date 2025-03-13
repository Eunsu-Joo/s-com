'use client'
import { useContext } from 'react'
import { TabProvider } from '@/app/(afterLogin)/home/_components/TabContext'
import RecommendPostList from '@/app/(afterLogin)/home/_components/RecommendPostList'
import FollowingPostList from '@/app/(afterLogin)/home/_components/FollowingPostList'

const PostList = () => {
  const { tab } = useContext(TabProvider)
  return <FollowingPostList />
  // return tab === 'recommend' ? <RecommendPostList /> : <FollowingPostList />
}
export default PostList
