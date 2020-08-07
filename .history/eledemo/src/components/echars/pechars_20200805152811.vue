
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
    // drawBarChart() {
    //   // 基于准备好的dom，初始化echarts实例
    //   var myChart = this.$echarts.init(document.getElementById('echartContainer'), 'infographic');
    //   // 绘制基本图表
    //   myChart.setOption(option);

    //   //获取数据
    //   this.$http.get('src/data/asyncBarChart.json').then(res => {
    //       myChart.hideLoading();
    //       myChart.setOption({
    //         series: [{
    //           data: res.data.product  //将异步请求获取到的数据进行装载
    //         }]
    //       })
    //   })
    // },
  },
  mounted() {
    this.getters();
    //调用drawBarChart()
    // this.drawBarChart();
  },
};
</script>

<style>
</style>