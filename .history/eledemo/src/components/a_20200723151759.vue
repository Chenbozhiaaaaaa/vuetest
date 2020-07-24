<!--  -->
<template>
  <div>
      <p>我是测试一号</p>
      <CompA></CompA> 
      <CompB></CompB> 
  
  
<el-row :gutter="20">
  <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
</el-row>
  </div>
</template>

<script>
import CompA from '../comp/compA'
import CompB from '../comp/compB'
export default {
  components:{
    CompA,
    CompB,
  },
  data () {
    return {
    };
  },


  methods: {}
}

</script>
<style  scoped>
</style>