<template>
  <Layout>
    <ol class="tags">
      <li>
        <span>衣</span>
        <Icon name="arrowRight"/>
      </li>
      <li>
        <span>食</span>
        <Icon name="arrowRight"/>
      </li>
      <li>
        <span>住</span>
        <Icon name="arrowRight"/>
      </li>
      <li>
        <span>行</span>
        <Icon name="arrowRight"/>
      </li>
    </ol>
    <div class="createTag-wrapper">
      <button class="createTag">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';

export default class Labels extends Vue {

}
</script>

<style lang="scss" scoped>
.tags {
  background: #fff;
  font-size: 16px;
  padding-left: 16px;

  > li {
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
    border: 1px solid red;
    text-align: center;
    margin-top: 44px;
  }
}
</style>