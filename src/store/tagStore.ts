import tagListModel from '@/models/tagListModel';

export default {
  // tag store
  tagList: tagListModel.fetch(),
  findTag(id: string) {
    return this.tagList.filter(tag => tag.id === id)[0];
  },
  createTag: (name: string) => {
    const state = tagListModel.create(name);
    if (state === 'duplicate') window.alert('已存在该标签！');
    if (state === 'success') window.alert('创建成功');
  },
  removeTag: (id: string) => {
    return tagListModel.remove(id);
  },
  updateTag: (id: string, name: string) => {
    return tagListModel.update(id, name);
  }
};