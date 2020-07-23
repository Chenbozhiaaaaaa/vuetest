<!--  -->
<template>
  <div>
      {{getState()}}
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
          return this.$store.state
      }
  }
}

</script>
<style  scoped>
</style>