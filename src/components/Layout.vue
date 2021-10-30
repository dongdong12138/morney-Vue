<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot></slot>
    </div>
    <Nav />
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex-grow: 1;
  overflow: auto;
}
</style>