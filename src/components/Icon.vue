<template>
  <svg @click="$emit('click', $event)" class="icon">
    <use v-bind:xlink:href="'#'+name"/>
  </svg>
</template>

<script lang="ts">
// 单独引入文件
// import x from '@/assets/icons/money.svg';
// import y from '@/assets/icons/labels.svg';
// import z from '@/assets/icons/charts.svg';
// console.log(x);
// console.log(y);
// console.log(z);

// 将一个目录里面任意后缀的文件全部引入到当前文件
// eslint-disable-next-line no-undef
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('../assets/icons', true, /\.svg$/));
} catch (error) {
  console.log(error);
}

export default {
  name: 'Icon',
  props: ['name']
}
</script>

<style lang="scss" scoped>
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>