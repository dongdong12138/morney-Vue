<template>
  <label class="notes">
    <span class="name">{{ fieldName }}</span>
    <template v-if="type === 'date'">
      <input
          @input="onValueChanged($event.target.value)"
          :value="x(value)"
          :type="type || 'text'"
          :placeholder="placeholder"
      >
    </template>
    <template v-else>
      <input
          @input="onValueChanged($event.target.value)"
          :value="value"
          :type="type || 'text'"
          :placeholder="placeholder"
      >
    </template>

  </label>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';
import dayjs from 'dayjs';

@Component
export default class FormItem extends Vue {
  @Prop({default: ''}) readonly value!: string;

  @Prop({required: true}) fieldName!: string;
  @Prop() placeholder?: string;
  @Prop() type?: string;

  onValueChanged(value: string) {
    this.$emit('update:value', value);
  }

  x(isoString: string) {
    return dayjs(isoString).format('YYYY-MM-DD')
  }
}
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  padding: 0 16px;
  display: flex;
  align-items: center;

  > .name {
    padding-right: 16px;
  }

  > input {
    height: 40px;
    background: transparent;
    border: none;
    flex-grow: 1;
  }
}
</style>