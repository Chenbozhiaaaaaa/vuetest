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
          return this.$store
      }
  }
}

</script>
<style  scoped>
</style>