<template>
  <div class="nav">
    <router-link to="/money">
      记账
      <svg>
        <use xlink:href="#money"/>
      </svg>
    </router-link>
    <router-link to="/labels">
      标签
      <svg>
        <use xlink:href="#labels"/>
      </svg>
    </router-link>
    <router-link to="/statistics">
      统计
      <svg>
        <use xlink:href="#charts"></use>
      </svg>
    </router-link>
  </div>
</template>

<script lang="ts">
import x from '@/assets/icons/money.svg';
import y from '@/assets/icons/labels.svg';
import z from '@/assets/icons/charts.svg';

console.log(x);
console.log(y);
console.log(z);

export default {
  name: 'Nav'
};
</script>

<style lang="scss" scoped>
.nav {
  border: 1px solid red;
}
</style>