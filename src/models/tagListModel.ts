const localStorageKeyName = 'tagList';

type Tag = {
  id: string,
  name: string
}

type TagListModel = {
  data: Tag[],
  fetch: () => Tag[],
  create: (name: string) => 'success' | 'empty' | 'duplicate',    // 联合类型（字符串的子类型）
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicate',
  remove: (id: string) => boolean,
  save: () => void
}

const tagListModel: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data;
  },
  create(name: string) {
    const names = this.data.map(item => item.name);
    if (names.includes(name)) return 'duplicate';
    this.data.push({id: name, name: name});
    this.save();
    return 'success';
  },
  update(id, name) {
    const idList = this.data.map(item => item.id);
    if (!idList.includes(id)) return 'not found';
    const names = this.data.map(item => item.name);
    if (names.includes(name)) return 'duplicate';
    const tag = this.data.filter(item => item.id === id)[0];
    tag.name = name;
    this.save();
    return 'success';
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
  remove(id: string) {
    let index = -1;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) {
        index = i;
        break;
      }
    }
    this.data.splice(index, 1);
    console.log('this.data:', this.data);
    this.save();
    return true;
  }
};

export default tagListModel;