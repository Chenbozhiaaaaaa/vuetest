<!--  -->
<template>
  <div>
      <div id="container"></div> 
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  methods: {
      baiduMap(){
          var map = new BMapGL.Map("container");    // 创建Map实例
	map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    var navi3DCtrl = new BMapGL.NavigationControl3D();  // 添加3D控件
    map.addControl(navi3DCtrl);
      }
  },
  mounted() {
       this.baiduMap()
  },
}

</script>
<style  scoped>
</style>