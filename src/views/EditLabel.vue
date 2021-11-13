<template>
  <Layout>
    <div class="navBar">
      <Icon @click="goBack" class="arrowLeft" name="arrowLeft"/>
      <span class="title">编辑标签</span>
    </div>
    <div class="form-wrapper">
      <FormItem :value="tag.name" @update:value="updateTag" field-name="标签名" placeholder="请输入标签名"/>
    </div>
    <div class="button-wrapper">
      <Button @click="removeTag">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';
import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {Button, FormItem}
})
export default class EditLabel extends Vue {
  tag?: { id: string, name: string } = undefined;

  created() {
    const {id} = this.$route.params;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter(tag => tag.id === id)[0];
    if (!tag) {
      this.$router.replace('/404');
      return;
    }
    this.tag = tag;
  }

  updateTag(name: string) {
    if (this.tag) {
      tagListModel.update(this.tag.id, name);
    }
  }

  removeTag() {
    if (this.tag) {
      tagListModel.remove(this.tag.id);
    }
  }

  goBack() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 0;
  background: #fff;
  position: relative;

  > .arrowLeft {
    width: 22px;
    height: 22px;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
}

.form-wrapper {
  background: #fff;
  margin-top: 8px;
}

.button-wrapper {
  text-align: center;
  margin-top: 44px;
}
</style>