<template>
  <div ref="chartBox" class="chart-box">
    <div id="chart">
    </div>
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
    (this.$refs.chartBox as HTMLDivElement).scrollLeft = 9999;
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