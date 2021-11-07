<template>
  <ul class="types">
    <li @click="selectType('-')" :class="value === '-' && 'selected'">支出</li>
    <li @click="selectType('+')" :class="value === '+' && 'selected'">收入</li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  // @Prop 告诉 Vue，xxx 不是 data，而是 Prop
  // Number 告诉 Vue，运行时检测 xxx 是否是 Number 类型
  // xxx 是属性名
  // number | undefined 告诉 TS，编译时检测 xxx 的类型
  @Prop(String) readonly value!: string;

  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.$emit('update:value', type)
  }
}
</script>

<style lang="scss" scoped>
.types {
  background: #c4c4c4;
  display: flex;
  font-size: 24px;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: "";
      width: 100%;
      height: 4px;
      background: #333;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
}
</style>