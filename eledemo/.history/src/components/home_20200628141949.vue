<template>
  <el-container style="height:100%">
    <el-aside :width="colwidth">
      <Slider :isCollapse="isCollapse" />
    </el-aside>
    <el-main>
      <div class="main-head">
        <el-button @click="checktrue">点</el-button>
      </div>
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
    },
    checktrue() {
      this.isCollapse = !this.isCollapse;
      console.log(this.isCollapse);
    }
  },
  computed: {
    colwidth() {
      console.log();

      return this.isCollapse == true ? `60px` : `200px`;
    }
  }
};
</script>

<style >
.main-head {
  height: 72px;
  border-top: 1px solid;
  border-bottom: 1px solid #000;
}
</style>
