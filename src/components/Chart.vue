<template>
  <div ref="chartBox" class="chart-box">
    <div id="chart">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';
import * as echarts from 'echarts';
import {ECharts, EChartsCoreOption} from 'echarts';

@Component
export default class Chart extends Vue {
  @Prop() options?: EChartsCoreOption;
  myChart?: ECharts;

  mounted() {
    if (!this.options) {
      console.log('options not exit!');
      return;
    }
    let chart = document.getElementById('chart') as HTMLElement;
    this.myChart = echarts.init(chart);
    this.myChart.setOption(this.options);
    const div = (this.$refs.chartBox as HTMLDivElement);
    div.scrollLeft = div.scrollWidth;
  }

  @Watch('options')
  onOptionsChange(newValue: EChartsCoreOption) {
    this.myChart!.setOption(newValue);
  }
}
</script>

<style lang="scss" scoped>
.chart-box {
  width: 100vw;
  height: 80vw;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  > #chart {
    width: 430%;
    height: 100%;
    border: 1px solid red;
  }
}

</style>