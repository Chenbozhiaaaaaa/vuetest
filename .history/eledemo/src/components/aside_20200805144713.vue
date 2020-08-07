<!--  -->
<template>
  <div style="height:100%;display:flex;flex-direction: column;">
    <div class="aside-head">
      <span v-show="!isCollapse">Deno而已</span>
      <span v-show="isCollapse">NB</span>  
    </div> 
    <el-menu
      v-for="(item,index) in navList"
      :key="index"
      unique-opened
      router
      :default-active="$route.path"
        @select="addtab(item.name,item.path,item)"

    >
      <component
        class="menu-item"
        v-if="!item.hidden"
        :is="(item.children&&item.children.length>0)?'el-submenu':'el-menu-item'"
        :index="item.path"
      
      >     
        <template slot="title" >
          <i :class="[item.icon]"></i>
          <span>{{item.title}}</span>
        </template>
        <template v-if="item.children&&item.children.length>0">
          <el-menu-item
            class="menu-item"
            v-for="(v,i) in item.children"
            :key="v.path+i"
            :index="v.path"
          >
            <i :class="[v.icon]"></i>
            <span slot="title">{{v.title}}</span>
          </el-menu-item>
        </template>
      </component>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  name: "Slider",
  props: {
    isCollapse: {
      type: Boolean,
    },
    navList: {
      type: Array,
    },
  },
  methods: {
    addtab(title, url, item) {
      this.$emit("addtab", { title, url, item,indexPath });
    },
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