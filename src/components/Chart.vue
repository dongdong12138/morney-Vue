<template>
  <div id="chart">
    Chart
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import * as echarts from 'echarts';
import {EChartsCoreOption} from 'echarts';

@Component
export default class Chart extends Vue {
  @Prop() options?: EChartsCoreOption;

  mounted() {
    if (!this.options) {
      console.log('options not exit!');
      return;
    }
    let chart = document.getElementById('chart') as HTMLElement;
    let myChart = echarts.init(chart);
    myChart.setOption(this.options);
  }
}
</script>

<style lang="scss" scoped>
#chart {
  width: 80vw;
  height: 80vw;
  border: 1px solid red;
  margin: 0 auto;
}
</style>