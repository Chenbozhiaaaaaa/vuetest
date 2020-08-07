<!--  -->
<template>
  <div>
    <div>
      <div id="main" style="width:500px; height:500px"></div>
      <!--创建一个echarts的容器-->
    </div>
  </div>
</template>

<script>
var echarts = require("echarts");
export default {
  data() {
    return {};
  },

  methods: {
    getters() {
      var myChart = echarts.init(document.getElementById("main"));
      // 绘制图表
      myChart.setOption(
        (option = {
          title: {
            text: "某站点用户访问来源",
            subtext: "纯属虚构",
            left: "center",
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)",
          },
          legend: {
            orient: "vertical",
            left: "left",
            data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
          },
          series: [
            {
              name: "访问来源",
              type: "pie",
              radius: "55%",
              center: ["50%", "60%"],
              data: [
                { value: 335, name: "直接访问" },
                { value: 310, name: "邮件营销" },
                { value: 234, name: "联盟广告" },
                { value: 135, name: "视频广告" },
                { value: 1548, name: "搜索引擎" },
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
            },
          ],
        })
      );
    },
  },
  mounted() {
    this.getters();
  },
};
</script>
<style  scoped>
</style>