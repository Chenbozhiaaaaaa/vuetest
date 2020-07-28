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
import { getToken, setToken } from "@/utils/auth";
import { router, dynamicRouter } from "../router/index";
export default {
  data() {
    return {
      ruleForm: {
        pass: "",
        name: "",
      },
    };
  },

  methods: {
    submitForm() {
      if (
        (this.ruleForm.name == "admin" || this.ruleForm.name == "user") &&
        this.ruleForm.pass == "111111"
      ) {
        setToken(this.ruleForm);
        let dR = new Array(); //创建一个数组用来存储符合权限的路由
        for (let i = 0; i < dynamicRouter.length; i++) {
          //第一层循环遍历动态路由表的每一个路由
          for (let j = 0; j < dynamicRouter[i].meta.roles.length; j++) {
            //第二次循环遍历每一个路由里的roles设置的权限并和当前登录账号的权限比较
            if (dynamicRouter[i].meta.roles[j] == this.ruleForm.name) {
              //这里因为我默认账号名就是当前用户的权限
              //做一个嵌套的判断
              if (dynamicRouter[i].children) {
                let childrendata = JSON.parse(JSON.stringify(dynamicRouter[i].children))
                 dynamicRouter[i].children= []
               for (let z = 0; z < childrendata.length; z++) {
                  for (let y = 0;y < childrendata[z].meta.roles.length;y++ ) {
                    if(childrendata[z].meta.roles[y] ==this.ruleForm.name){
                      dynamicRouter[i].children.concat(childrendata[z])
                    }

                  }
                }
              }
              dR.push(dynamicRouter[i]); //符合条件的路由信息就放进数组里
            }
          }
        }
        this.$router.addRoutes(
          dR.concat([
            {
              //这里调用addRoutes方法，动态添加符合条件的路由
              path: "*",
              redirect: "/404", //所有不匹配路径(*)都重定向到404，为什么写在这里而不放到静态路由表里可以查看“前端路上”的文章
            },
          ])
        );
        // this.$router.push("/"); //登录验证后跳转到主页"/"

        this.$store.commit("getoldtime");
        this.$router.push("/home");
      } else {
        this.$message.error("告诉你了都，还错！！！");
      }
    },
  },
};
</script>
<style>
.login-div {
  height: 600px;
  width: 600px;
  margin: 100px auto;
}
</style>