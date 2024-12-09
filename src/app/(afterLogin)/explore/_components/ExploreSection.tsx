'use client'
import { useQuery } from '@tanstack/react-query'
import getTrends from '@/app/(afterLogin)/_lib/getTrends'
import { SessionType, TrendType } from '@/types'
import TrendItem from '@/app/(afterLogin)/_components/TrendItem'
import React from 'react'
import Spinner from '@/app/_components/Spinner'
import PageLoading from '@/app/_components/PageLoading'

const ExploreSection = ({ session }: SessionType) => {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ['trends'],
    queryFn: getTrends,
    staleTime: 60 * 1000, //fresh->stale로 가는 시간
    gcTime: 300 * 1000,
    enabled: !!session,
  })

  if (isError) {
    return <div>애러발생</div>
  }
  if (isLoading) {
    return <PageLoading />
  }
  return (
    <>
      <h3 className={'c-title'}>나를 위한 트렌드</h3>
      {data.map((item: TrendType, index: number) => (
        <TrendItem item={item} key={index} />
      ))}
    </>
  )
}
export default ExploreSection
