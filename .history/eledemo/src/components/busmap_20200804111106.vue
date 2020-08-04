<!--  -->
<template>
  <div>
    <div id="allmap"></div>
    <div id="driving_way">
 
    
    </div>
    <div id="r-result"></div>
  </div>
</template>
 
<script>
import  MP  from '../map/map.js'
export default {
  data() {
    return {};
  },
  methods: {
    busmap() {
      var map = new BMap.Map("allmap");
      var start = "天安门";
      var end = "百度大厦";
      map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
      //三种驾车策略：最少时间，最短距离，避开高速
      var routePolicy = [
        BMAP_DRIVING_POLICY_LEAST_TIME,
        BMAP_DRIVING_POLICY_LEAST_DISTANCE,
        BMAP_DRIVING_POLICY_AVOID_HIGHWAYS,
      ];
      $("#result").click(function () {
        map.clearOverlays();
        var i = $("#driving_way select").val();
        search(start, end, routePolicy[i]);
        function search(start, end, route) {
          var driving = new BMap.DrivingRoute(map, {
            renderOptions: { map: map, autoViewport: true },
            policy: route,
          });
          driving.search(start, end);
        }
      });
    },
  },
  mounted() {
    var _this = this
      MP.init()
      .then((BMap)=>{
        _this.busmap()
      })
  },
};
</script>
<style  scoped>
		body, html {width: 100%;height: 100%; margin:0;font-family:"微软雅黑";}
		#allmap{height:500px;width:100%;}
		#r-result,#r-result table{width:100%;}
</style>