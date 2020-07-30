<!--  -->
<template>
  <div>
    <div class="login-div">
      <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="pass">
          <el-input v-model="ruleForm.name" autocomplete="off" placeholder="admin或user"></el-input>
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
        let dRchild = new Array();
        let childdynamicRouter =JSON.parse(JSON.stringify(dynamicRouter[0].children)) 

        for (let i = 0; i < childdynamicRouter.length; i++) {
          //第一层循环遍历动态路由表的每一个路由
          for (let j = 0; j < childdynamicRouter[i].meta.roles.length; j++) {
            //第二次循环遍历每一个路由里的roles设置的权限并和当前登录账号的权限比较
            if (childdynamicRouter[i].meta.roles[j] == this.ruleForm.name) {
              //这里因为我默认账号名就是当前用户的权限
              //做一个嵌套的判断
              if (childdynamicRouter[i].children) {
                for (let z = 0; z < childdynamicRouter[i].children.length; z++) {
                  for (
                    let y = 0;
                    y < childdynamicRouter[i].children[z].meta.roles.length;
                    y++
                  ) {
                    if (
                      childdynamicRouter[i].children[z].meta.roles[y] ==
                      this.ruleForm.name
                    ) {
                      dRchild.push(childdynamicRouter[i].children[z]);
                    }
                  }
                }
                childdynamicRouter[i].children = dRchild;
              }
             
      
              dR.push(childdynamicRouter[i]); //符合条件的路由信息就放进数组里

            }
          }
        }
        let DR = []
        //  DR[0] = JSON.parse(JSON.stringify(dynamicRouter[0]))
     DR[0] =    dynamicRouter[0]
         console.log(dynamicRouter[0]);
         console.log(DR[0]);
        DR[0].children = dR
        DR.push({
          path: "*",
          redirect: "/404",
          hidden: true,
          //所有不匹配路径(*)都重定向到404，为什么写在这里而不放到静态路由表里可以百度
        });
        this.$router.addRoutes(DR);
        this.$router.options.routes = this.$router.options.routes.concat(DR);

   
        this.$store.commit("getoldtime");
        // 直接把home路由传进去 感觉会有点问题
        this.$store.commit("setnavList", this.$router.options.routes[2].children);
            console.log(this.$router.options.routes[2].children);
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