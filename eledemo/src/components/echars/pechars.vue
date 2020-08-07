
<template>
  <div>
    <div id="main" style="width:500px; height:500px"></div>
    <!--创建一个echarts的容器-->
  </div>
</template>

<script>
import { option } from "../../utils/asyncechars"; //从aysnc-barChart-option.js中引入option
var echarts = require("echarts");

export default {
  name: "bar-chart",
  data() {
    return {};
  },
  methods: {
    getters() {
      var myChart = echarts.init(document.getElementById("main"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    },
  },
  mounted() {
    this.getters();
  },
};
</script>

<style>
</style>