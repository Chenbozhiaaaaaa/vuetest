<template>
  <el-container style="height:100%">
    <el-aside :width="colwidth">
      <Slider :isCollapse="isCollapse" />
    </el-aside>
    <el-main>
      <div class="main-head">

      </div>
      <el-button @click="checktrue">点</el-button>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    checktrue(){
      this.isCollapse =!this.isCollapse
      console.log(this.isCollapse);
      
    }
  },
  computed:{
    colwidth(isCollapse){
      console.log(isCollapse);
      
      return isCollapse==true?`200px`:`60px`
    }
  }
};
</script>

<style >
.main-head{
  height: 72px;
  border-top: 1px solid;
  border-bottom: 1px solid #000;
}
</style>
