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
  border: 1px solid green;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  border: 1px solid blue;
  flex-grow: 1;
  overflow: auto;
}
</style>