<template>
  <button @click="$emit('click', $event)" class="button">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default class Button extends Vue {

}
</script>

<style lang="scss" scoped>
.button {
  background: #767676;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 8px 12px;
}
</style>