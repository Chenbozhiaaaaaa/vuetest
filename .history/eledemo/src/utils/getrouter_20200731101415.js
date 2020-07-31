export function getRouter() {
 
    // 模拟后台来的数据  
     return new Array(     {  
        path: '/home',
        icon: "el-icon-document",
        title: "首页",
        name: 'home',
        meta: {  
          roles:['admin','user']  
        },
        component: (resolve) => require(['../components/home.vue'], resolve), 
        children: [
          {
            icon: "el-icon-document",
            title: "订单管理",
            path: '/a',
            name: 'A',
            meta: {  
              roles:['admin']  
            },
          
            children:[
              {
                path: '/text',
                name: 'Text',
                title: "订单列表",
                meta: {  
                  roles:['admin','user']  
                },
                component: (resolve) => require(['../components/text.vue'], resolve),  
              },
            ]
          },
          {
            path: '/b',
            name: 'B',
            icon: "el-icon-dish",
            title: "菜单管理",
            meta: {  
              roles:['admin','user']  
            },
            component: (resolve) => require(['../components/b.vue'], resolve)
          },    
            
          {
            path: '/c',
            name: 'C',
            icon: "el-icon-dish",
            title: "项目说明",
            meta: {  
              roles:['admin','user']  
            },
            component: (resolve) => require(['../components/c.vue'], resolve)
          },  
          {
            path: '/map',
            name: 'Map',
            icon: "el-icon-dish",
            title: "百度地图",
            meta: {  
              roles:['admin','user']  
            },
            component: (resolve) => require(['../components/map.vue'], resolve),  
            // children:[
            //   {
            //     path: '/mapa',
            //     name: 'Mapa',
            //     title: "普通地图",
            //     meta: {  
            //       roles:['admin','user']  
            //     },
               
            //   },
            // ]
            
          },
        ]
      },)

    
   
}