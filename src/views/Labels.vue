<template>
  <Layout>
    <div class="tags">
      <router-link class="tag" v-for="value in tagList" :to="`/labels/edit/${value.id}`" :key="value.id">
        <span>{{ value.name }}</span>
        <Icon name="arrowRight"/>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <button @click="createTag" class="createTag">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import tagListModel from '@/models/tagListModel';
import {Component} from 'vue-property-decorator';

tagListModel.fetch();

@Component
export default class Labels extends Vue {
  tagList = tagListModel.data;

  createTag() {
    const name = window.prompt('请输入标签名');
    if (!name) return;
    const state = tagListModel.create(name);
    if (state === 'duplicate') window.alert('已存在该标签！');
    if (state === 'success') window.alert('创建成功');
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: #fff;
  font-size: 16px;
  padding-left: 16px;

  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;

    > svg {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 16px;
    }
  }
}

.createTag {
  background: #767676;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 4px 12px;

  &-wrapper {
    text-align: center;
    margin-top: 44px;
  }
}
</style>