<!--  -->
<template>
  <div>
      {{getState()}}
      <br />
      <el-button>点击</el-button>
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