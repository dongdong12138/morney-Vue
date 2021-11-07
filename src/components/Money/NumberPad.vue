<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button>+</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button>-</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button>*</button>
      <button @click="ok" class="ok">OK</button>
      <button @click="inputContent">0</button>
      <button @click="inputContent">.</button>
      <button>%</button>
      <button>/</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue {
  output = '0';

  /*
  * 输入数字、小数点
  * */
  inputContent(event: MouseEvent) {
    const button = event.target as HTMLButtonElement;
    const value = button.textContent as string;

    if (this.output.length >= 16) return;
    if (this.output === '0') {
      if ('0123456789'.indexOf(value) >= 0) this.output = value;
      if (value === '.') this.output += value;
      return;
    }
    if (this.output.indexOf('.') >= 0 && value === '.') return;

    this.output += value;
  }

  /*
  * 删除
  * */
  remove() {
    if (this.output.length <= 1) {
      this.output = '0';
      return;
    }
    this.output = this.output.slice(0, -1);
  }

  /*
  * 清空
  * */
  clear() {
    this.output = '0';
  }

  ok() {
    this.$emit('update:value', this.output)
    this.$emit('submit', this.output)
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.numberPad {
  > .output {
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
  }

  > .buttons {
    @extend %clearFix;

    > button {
      width: 20%;
      height: 64px;
      float: left;
      background: none;
      border: none;

      &.ok {
        height: 64*2px;
        float: right;
      }

      $bg: #f2f2f2;

      &:nth-child(1) {
        background: $bg;
      }

      &:nth-child(2), &:nth-child(6) {
        background: darken($bg, 4%)
      }

      &:nth-child(3), &:nth-child(7), &:nth-child(11) {
        background: darken($bg, 8%)
      }

      &:nth-child(4), &:nth-child(8), &:nth-child(12), &:nth-child(16) {
        background: darken($bg, 12%)
      }

      &:nth-child(5), &:nth-child(9), &:nth-child(13), &:nth-child(17) {
        background: darken($bg, 16%)
      }

      &:nth-child(10), &:nth-child(14), &:nth-child(18) {
        background: darken($bg, 20%)
      }

      &:nth-child(19) {
        background: darken($bg, 24%)
      }

      &:nth-child(15) {
        background: darken($bg, 28%)
      }
    }
  }
}
</style>