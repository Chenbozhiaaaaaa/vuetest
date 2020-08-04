<!--  -->
<template>

    <div id="container"></div>
  
</template>
<script type="text/javascript" src="https://api.map.baidu.com/api?v=1.0&type=webgl&ak=RsfpQl3VcvP6H6Mb5polcSls2dFSBYxU">
</script>
<script>

export default {
  data() {
    return {};
  },

  methods: {
    baiduMap() {
      var map = new BMapGL.Map("container"); // 创建Map实例
      map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      var navi3DCtrl = new BMapGL.NavigationControl3D(); // 添加3D控件
      map.addControl(navi3DCtrl);
    },
  },
  mounted() {
    this.baiduMap();
  },
};
</script>
<style  scoped>
#container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  font-family: "微软雅黑";
}
</style>