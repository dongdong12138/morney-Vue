const localStorageKeyName = 'tagList';

type TagListModel = {
  data: string[],
  fetch: () => string[],
  create: (name: string) => 'success' | 'empty' | 'duplicate',    // 联合类型（字符串的子类型）
  save: () => void
}

const tagListModel: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data;
  },
  create(name: string) {
    if (!name) return 'empty';
    if (this.data.includes(name)) return 'duplicate';
    this.data.push(name);
    this.save();
    return 'success';
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export default tagListModel;