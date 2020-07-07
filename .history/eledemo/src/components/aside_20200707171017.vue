<!--  -->
<template>
  <div style="height:100%;display:flex;flex-direction: column;">
    <div class="aside-head">
      <span v-show="!isCollapse">Deno而已</span>
      <span v-show="isCollapse">NB</span>
    </div>
    <el-menu
      :router="true"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      style="height:100%"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
     
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">首页</span>
        </template>
      </el-submenu>
      <el-menu-item index="/a" @click="adda('index,title')">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: {
    isCollapse: {
      type: Boolean
    }
  },
  methods: {
    adda(a,title){
      this.$emit('adda',{a,title})
    }
    
  },
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