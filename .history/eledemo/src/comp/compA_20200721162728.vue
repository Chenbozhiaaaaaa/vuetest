<!--  -->
<template>
  <div>
      {{getState()}}
      <el-bitton>点击</el-bitton>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },



  methods: {
      getState(){
          return this.$store.state.count
      }
  }
}

</script>
<style  scoped>
</style>