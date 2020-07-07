<template>
  <el-container style="height:100%">
    <el-aside :width="colwidth">
      <Slider :isCollapse="isCollapse" @changetype='changetype'/>
    </el-aside>
    <el-main style="padding:1px">
      <div class="main-head">
        <el-row>
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
          <el-col :span="8">
            <div class="grid-content"></div>
          </el-col>
        </el-row>
      </div>
      <div class="main-nav">
        <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
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
      isCollapse: true,
      editableTabsValue: "2",
      editableTabs: [
        {
          title: "Tab 1",
          name: "1",
          content: "Tab 1 content"
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content"
        }
      ]
    };
  },
  methods: {
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
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
    }
  },
  computed: {
    colwidth() {
      return this.isCollapse == true ? `60px` : `200px`;
    }
  }
};
</script>

<style >
.main-head {
  height: 72px;
  line-height: 72px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 2px 3px -1px;
}
.main-nav {
  height: 34px;
  line-height: 34px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
</style>
