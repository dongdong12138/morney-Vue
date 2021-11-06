<template>
  <div class="layout-wrapper">
    <div :class="classPrefix && `${classPrefix}-content`" class="content">
      <slot></slot>
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">
export default {
  name: 'Layout',
  props: ['classPrefix']
}
</script>

<style lang="scss" scoped>
.layout-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex-grow: 1;
  overflow: auto;
}
</style>