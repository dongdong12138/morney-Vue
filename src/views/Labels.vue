<template>
  <Layout>
    <div class="tags">
      <router-link class="tag" v-for="value in tagList" :to="`/labels/edit/${value.id}`" :key="value.id">
        <span>{{ value.name }}</span>
        <Icon name="arrowRight"/>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button @click.native="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import tagListModel from '@/models/tagListModel';
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';

@Component({
  components: {Button}
})
export default class Labels extends Vue {
  tagList = window.tagList;

  createTag() {
    const name = window.prompt('请输入标签名');
    if (!name) return;
    window.createTag(name)
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

.createTag-wrapper {
  margin-top: 44px;
  text-align: center;
}
</style>