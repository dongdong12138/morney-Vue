type RecordItem = {
  tags: string[]
  notes: string
  type: string
  amount: number | string
  createTime?: Date
}

type Tag = {
  id: string,
  name: string
}

interface Window {
  tagList: Tag[]
}