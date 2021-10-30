<template>
  <div class="nav">
    <router-link to="/money">
      记账
      <Icon name="money"/>
    </router-link>
    <router-link to="/labels">
      标签
      <Icon name="labels"/>
    </router-link>
    <router-link to="/statistics">
      统计
      <Icon name="charts"/>
    </router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Nav'
};
</script>

<style lang="scss" scoped>
.nav {
  border: 1px solid red;
}
</style>