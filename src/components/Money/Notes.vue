<template>
  <label class="notes">
    {{value}}
    <span class="name">备注</span>
    <input @input="onInput" :value="value" type="text" placeholder="在这里添加备注">
  </label>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Notes extends Vue {
  value = ''

  onInput(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement
    this.value = input.value
  }
}
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  background: #f5f5f5;
  padding: 0 16px;
  display: flex;
  align-items: center;

  > .name {
    padding-right: 16px;
  }

  > input {
    height: 64px;
    background: transparent;
    border: none;
    flex-grow: 1;
  }
}
</style>