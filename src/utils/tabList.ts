export type TabType = {
  name: string
  value: string
}[]

export const mainTabList: TabType = [
  { name: '추천', value: 'recommend' },
  { name: '팔로우중', value: 'follow' },
]
export const searchTabList = [
  { name: '인기', value: 'popular' },
  { name: '최신', value: 'latest' },
]
