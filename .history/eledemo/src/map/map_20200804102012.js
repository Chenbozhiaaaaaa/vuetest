// export function MP(ak) {
//     return new Promise(function(resolve, reject) {
//       window.init = function() {
//         resolve(BMap)
//       }
//       var script = document.createElement('script')
//       script.type = 'text/javascript'
//       script.src = `https://api.map.baidu.com/api?v=1.0&type=webgl&ak=RsfpQl3VcvP6H6Mb5polcSls2dFSBYxU&callback=init`
//     //   script.src = `http://api.map.baidu.com/api?v=2.0&ak=${RsfpQl3VcvP6H6Mb5polcSls2dFSBYxU}&callback=init`
//     //   https://api.map.baidu.com/api?v=1.0&type=webgl&ak=RsfpQl3VcvP6H6Mb5polcSls2dFSBYxU
//       script.onerror = reject
//       document.head.appendChild(script)
//     })
//   }
  export default {
    init: function (){
      //console.log("初始化百度地图脚本...");
      const AK = "RsfpQl3VcvP6H6Mb5polcSls2dFSBYxU";
      const BMap_URL = "https://api.map.baidu.com/api?v=2.0&amp;ak="+ AK +"&amp;s=1&amp;callback=onBMapCallback";
      return new Promise((resolve, reject) => {
        // 如果已加载直接返回
        if(typeof BMap !== "undefined") {
          resolve(BMap);
          return true;
        }
        // 百度地图异步加载回调处理
        window.onBMapCallback = function () {
          console.log("百度地图脚本初始化成功...");
          resolve(BMap);
        };
  
        // 插入script脚本
        let scriptNode = document.createElement("script");
        scriptNode.setAttribute("type", "text/javascript");
        scriptNode.setAttribute("src", BMap_URL);
        document.body.appendChild(scriptNode);
      });
    }
  } 