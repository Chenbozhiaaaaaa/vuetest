<!--  -->
<template>
  <div>
    <div class="login-div">
      <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="pass">
          <el-input v-model="ruleForm.name" autocomplete="off" placeholder="admin"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="111111"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {getToken,setToken} from '@/utils/auth'

export default {
  data() {
    return {
      ruleForm: {
        pass: "",
        name: ""
      }
    };
  },

  methods: { 
    submitForm() {
      if(this.ruleForm.name=='admin'&&this.ruleForm.pass=='111111'){
        setToken(this.ruleForm)
       
       
        this.$store.commit('getoldtime')
        this.$router.push('/home')      
      }else{
      this.$message.error('告诉你了都，还错！！！')  
      }
   
      
    } 
    }
};
</script>
<style>
.login-div {
  height: 600px;
  width: 600px;
  margin: 100px auto;
}
</style>