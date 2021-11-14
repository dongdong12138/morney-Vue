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
  tagList: Tag[],
  findTag: (id: string) => Tag | undefined,
  createTag: (name: string) => void,
  removeTag: (id: string) => boolean,
  updateTag: (id: string, name: string) => 'success' | 'not found' | 'duplicate'
}