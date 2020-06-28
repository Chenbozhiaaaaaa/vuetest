<template>
  <el-container style="height:100%">
    <el-aside width="200px">
      <Slider :isCollapse="isCollapse" />
    </el-aside>
    <el-main>
      <div class="main-head">

      </div>
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style >
.main-head{
  height: 72px;
  border-top: 1px solid;
}
</style>
