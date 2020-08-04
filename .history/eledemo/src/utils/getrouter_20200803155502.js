
// import Layout from '../views/layout/Layout'
import Pubdemo from '@/components/mapd'

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
            component: (resolve) => require(['../components/mapd.vue'], resolve),
            // component: Pubdemo,
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
            path: '/mapd',
            name: 'Mapd',
            icon: "el-icon-dish",
            title: "百度地图",
            meta: {  
              roles:['admin','user']  
            },
            component: (resolve) => require(['../components/mapd.vue'], resolve),

            // component: Pubdemo,  
            children:[
              {
                path: '/map',
                name: 'Map',
                title: "普通地图",
                meta: {  
                  roles:['admin','user']  
                },
              component: (resolve) => require(['../components/map.vue'], resolve),  
               
              },   {
                path: '/busmap',
                name: 'Busmap',
                title: "驾车地图",
                meta: {  
                  roles:['admin','user']  
                },
              component: (resolve) => require(['../components/busmap.vue'], resolve),  
               
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
            // component: (resolve) => require(['../components/b.vue'], resolve),
            component: (resolve) => require(['../components/mapd.vue'], resolve),

            children:[
              {
                path: '/d',
                name: 'd',
                title: "d",
                meta: {  
                  roles:['admin','user']  
                },
              component: (resolve) => require(['../components/d.vue'], resolve),  
               
              },
            ]  
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
    
        ]
      },)

    
   
}