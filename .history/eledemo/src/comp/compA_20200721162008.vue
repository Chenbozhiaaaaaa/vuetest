<!--  -->
<template>
  <div>
      {{}}
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