
// 模拟后台来的数据  
export function getRouter() {

  return new Array({
    path: '/home',
    icon: "el-icon-document",
    title: "首页",
    name: 'home',
    meta: {
      roles: ['admin', 'user']
    },
    component: (resolve) => require(['../components/home.vue'], resolve),
    children: [
      {
        icon: "el-icon-document",
        title: "订单管理",
        path: '/a',
        name: 'A',
        meta: {
          roles: ['admin']
        },
        component: (resolve) => require(['../components/routerview.vue'], resolve),
        // component: Pubdemo,
        children: [
          {
            path: '/text',
            name: 'Text',
            title: "订单列表",
            meta: {
              roles: ['admin', 'user']
            },
            component: (resolve) => require(['../components/text.vue'], resolve),
          },
        ]
      },
      {
        path: '/routerview',
        name: 'Mapd',
        icon: "el-icon-dish",
        title: "百度地图",
        meta: {
          roles: ['admin', 'user']
        },
        component: (resolve) => require(['../components/routerview.vue'], resolve),

        // component: Pubdemo,  
        children: [
          {
            path: '/map',
            name: 'Map',
            title: "普通地图",
            meta: {
              roles: ['admin', 'user']
            },
            component: (resolve) => require(['../components/map/map.vue'], resolve),

          },
          {
            path: '/busmap',
            name: 'Busmap',
            title: "驾车地图",
            meta: {
              roles: ['admin', 'user']
            },
            component: (resolve) => require(['../components/map/busmap.vue'], resolve),

          },
          {
            path: '/iconmap',
            name: 'iconmap',
            title: "地图图标",
            meta: {
              roles: ['admin', 'user']
            },
            component: (resolve) => require(['../components/map/iconmap.vue'], resolve),

          },
        ]
      },
      {
        path: '/b',
        name: 'B',
        icon: "el-icon-dish",
        title: "菜单管理",
        meta: {
          roles: ['admin', 'user']
        },
        // component: (resolve) => require(['../components/b.vue'], resolve),
        component: (resolve) => require(['../components/routerview.vue'], resolve),

        children: [
          {
            path: '/d',
            name: 'd',
            title: "d",
            meta: {
              roles: ['admin', 'user']
            },
            component: (resolve) => require(['../components/d.vue'], resolve),

          },
        ]
      },
      {
        icon: "el-icon-document",
        title: "Echars",
        path: '/echars',
        name: 'Echars',
        meta: {
          roles: ['admin','user']
        },
        component: (resolve) => require(['../components/routerview.vue'], resolve),
        // component: Pubdemo,
        children: [
          {
            path: '/pechars',
            name: 'pEchars',
            title: "图标",
            meta: {
              roles: ['admin', 'user']
            },
            component: (resolve) => require(['../components/echars/pechars.vue'], resolve),
          },
        ]
      },
      {
        path: '/c',
        name: 'C',
        icon: "el-icon-dish",
        title: "项目说明",
        meta: {
          roles: ['admin', 'user']
        },
        component: (resolve) => require(['../components/c.vue'], resolve)
      },

    ]
  })



}