<!--  -->
<template>
    <div id="allmap"></div>
</template>

<script>
import  MP  from '../../map/map.js'

export default {
  data() {
    return {};
  },

  mounted() {
         var _this = this
      MP.init()
      .then((BMap)=>{
        _this.getmap()
      })
    
  },

  methods: {
    getmap() {
      var map = new BMap.Map("allmap");
      var point = new BMap.Point(116.404, 39.915);
      map.centerAndZoom(point, 15);

      //创建小狐狸
      var pt = new BMap.Point(116.417, 39.909);
      var myIcon = new BMap.Icon(
        "/jsdemo/img/fox.gif",
        new BMap.Size(300, 157)
      );
      var marker2 = new BMap.Marker(pt, { icon: myIcon }); // 创建标注
      map.addOverlay(marker2);
    },
  },
};
</script>
<style scoped>
body, html,#allmap {width: 100%;height: 100%;overflow: hidden;margin:0;font-family:"微软雅黑";}
</style>