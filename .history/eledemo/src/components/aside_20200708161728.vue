<!--  -->
<template>
  <div style="height:100%;display:flex;flex-direction: column;">
    <div class="aside-head">
      <span v-show="!isCollapse">Deno而已</span>
      <span v-show="isCollapse">NB</span>
    </div>
    <el-menu
      v-for="(item,index) in leftMenu.navList"
      :key="index"
      unique-opened
      router
      :default-active="$route.path"
    >
      <component
        class="menu-item"
        :is="(item.children&&item.children.length>0)?'el-submenu':'el-menu-item'"
        :index="item.url"
        @click="addtab(item.title,item.url,item)"
      >
        <template slot="title" >
          <i :class="[item.icon]"></i>
          <span>{{item.title}}</span>
        </template>
        <template v-if="item.children&&item.children.length>0">
          <el-menu-item
            class="menu-item"
            v-for="(v,i) in item.children"
            :key="v.url+i"
            :index="v.url"
          >
            <i :class="[v.icon]"></i>
            <span slot="title">{{v.title}}</span>
          </el-menu-item>
        </template>
      </component>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftMenu: {
        isCollapse: false,
        navList: [
          {
            icon: "el-icon-document",
            title: "首页",
            url: "/home"
          },
          {
            icon: "el-icon-document",
            title: "订单管理",
            url: "/home/a"
          },
          {
            icon: "el-icon-dish",
            title: "菜单管理",
            url: "/b"
          },
          {
            icon: "el-icon-suitcase",
            title: "店铺管理",
            url: "suibianxie",
            children: [
              {
                icon: "el-icon-tickets",
                title: "店铺资料",
                url: "/StoreProfile"
              },
              {
                icon: "el-icon-picture-outline",
                title: "轮播图管理",
                url: "/BannerPicture"
              },
              {
                icon: "el-icon-s-grid",
                title: "桌台管理",
                url: "/TableManage"
              }
            ]
          },
          {
            icon: "el-icon-setting",
            title: "账号管理",
            url: "/AccountManage"
          },
          {
            icon: "el-icon-user",
            title: "个人资料",
            url: "/PersonProfile"
          }
        ]
      }
    };
  },
  name: "Slider",
  props: {
    isCollapse: {
      type: Boolean
    }
  },
  methods: {
    // adda(index, title) {
    //   this.$emit("adda", { index, title });
    //   console.log(1); 
    // },
    addtab(title,url,item){
      this.$emit("addtab",{title,url,item});

    }
  }
};
</script>
<style >
.aside-head {
  height: 70px;
  line-height: 70px;
  background-color: #7538c7;
  color: #ffffff;
}
</style>