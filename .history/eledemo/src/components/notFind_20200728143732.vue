<!--  -->
<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content">
          <img src="../assets/img/404.png" alt />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">
            <p >
                <span>ERROR</span>
                这是一个错误的界面
            </p>
            <el-button type='primary' size="small">go Home</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style  scoped>
</style>