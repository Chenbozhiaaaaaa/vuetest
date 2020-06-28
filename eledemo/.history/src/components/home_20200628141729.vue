<template>
  <el-container style="height:100%">
    <el-aside :width="colwidth">
      <Slider :isCollapse="isCollapse" />
    </el-aside>
    <el-main>
      <div class="main-head">

      </div>
      <el-button @click="checktrue">点</el-button>
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
      this.checktrue =  !this.checktrue
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
