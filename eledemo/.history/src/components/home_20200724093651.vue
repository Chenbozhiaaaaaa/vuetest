<template>
  <el-container style="height:100%">
    <el-aside :width="colwidth">
      <Slider :isCollapse="isCollapse" @adda="adda($event)" @addtab="addtab($event)" />
    </el-aside>
    <el-main style="padding:1px">
      <div class="main-head">
        <el-row :gutter="20">
          <el-col :span="2">
            <div class="grid-content">
              <el-button
                size="mini"
                @click="checktrue"
                icon="el-icon-menu"
                style="margin-left:10px"
              ></el-button>
            </div>
          </el-col>
          <el-col :span="19">
            <div class="grid-content">
              <el-breadcrumb separator="/" style="line-height: inherit;">
                <el-breadcrumb-item
                  :to="{ path: item.path }"
                  v-for="item in levelList"
                  :key="item.path"
                >{{item.name}}</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content">
              <div class="main-head-img">
                <img style="width:50px;height:50px" src="../assets/img/33.png" alt />
              </div>
              <div style="height:15px;line-height:15px;text-align:left">
                <span>admin</span>
              </div>
              <div class="triangle"></div>
              <div class="dialog">
                <el-menu
                  class="el-menu-vertical-demo"
                >
                  <el-menu-item index="1" class="el-munu-diy">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                  </el-menu-item>
                  <el-menu-item index="2"  class="el-munu-diy">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                  </el-menu-item>
                  <el-menu-item index="3"  class="el-munu-diy">
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                  </el-menu-item>
                </el-menu>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="main-nav">
        <el-tabs
          class="eltabsdiv"
          @tab-click="toggtab"
          v-model="editableTabsValue"
          type="card"
          closable
          @tab-remove="removeTab"
        >
          <el-tab-pane
            v-for="(item, index) in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
          >{{item.content}}</el-tab-pane>
        </el-tabs>
      </div>
      <div class="main-view">
        <router-view />
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      levelList: null,
      isCollapse: false,
      editableTabsValue: "2",
      editableTabs: [
        {
          title: "首页",
          name: "/home",
        },
      ],
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },

  methods: {
    getBreadcrumb() {
      //$route.matched一个数组 包含当前路由的所有嵌套路径片段的路由记录
      let matched = this.$route.matched.filter((item) => item.name);
      this.levelList = matched;
      console.log(this.levelList);
    },

    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    checktrue() {
      this.isCollapse = !this.isCollapse;
      console.log(this.isCollapse);
    },
    adda($event) {
      console.log($event);
    },
    addtab($event) {
      // 做一个重复性判定
      let rundata = JSON.parse(JSON.stringify(this.editableTabs));
      console.log($event);

      var flag;
      rundata.map((item) => {
        if (item.name == $event.url) {
          return (flag = 1);
        }
      });
      if (flag == 1) {
        return;
      }
      console.log($event);
      let obj = {};
      obj.title = $event.title;
      obj.name = $event.url;
      this.editableTabs.push(obj);
    },
    toggtab(item) {
      console.log(item);
      this.$router.push(item.name);
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
    },
  },
  computed: {
    colwidth() {
      return this.isCollapse == true ? `54px` : `200px`;
    },
  },
};
</script>

<style>
.main-head {
  height: 72px;
  line-height: 72px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 2px 3px -1px;
}

.main-nav {
  height: 42px;
  line-height: 42px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.main-head-img {
  height: 50px;
  width: 50px;
  background-color: pink;
  border-radius: 25px;
}
.grid-content {
  height: 72px;
}
.triangle {
  margin-left: 43px;
  width: 0;
  height: 0;
  border: 8px solid;
  border-color: lightgreen transparent transparent transparent;
}
.el-munu-diy{
height:28px;
line-height:28px
}
</style>
