<template>
  <div class="tags">
    <ul class="current">
      <li v-for="(value, index) in tagList"
          @click="toggle(value)"
          :class="{selected: selectedTags.includes(value)}"
          :key="index"
      >
        {{ value.name }}
      </li>
    </ul>
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Tags extends Vue {
  selectedTags: string[] = [];
  get tagList() {
    return this.$store.state.tagList;
  }

  created() {
    this.$store.commit('fetchTags');
  }

  toggle(value: string) {
    const index = this.selectedTags.indexOf(value);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(value);
    }
    this.$emit('update:value', this.selectedTags);
  }

  createTag() {
    const name = window.prompt('请输入标签名');
    if (!name) return window.alert('标签名不能为空！');
    this.$store.commit('createTag', name);
  }
}
</script>

<style lang="scss" scoped>
.tags {
  font-size: 14px;
  background: #fff;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  > ul.current {
    display: flex;
    flex-wrap: wrap;

    > li {
      $bg: #d9d9d9;
      $h: 24px;
      background: $bg;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;

      &.selected {
        background: darken($bg, 20%);
        color: #fff;
      }
    }
  }

  > .new {
    padding-top: 16px;

    > button {
      background: transparent;
      border: none;
      outline: none;
      border-bottom: 1px solid;
      padding: 0 4px;
      color: #999;
    }
  }
}
</style>