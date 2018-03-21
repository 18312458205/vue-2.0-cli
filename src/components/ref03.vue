<template>
  <div>
    11
  </div>
</template>

<script>
export default {
  name: 'ref03',
  data () {
    return {
      a: 0
    }
  },
  methods: {
    aaa () {
      this.a = 444
    }
  },
  mounted: function () {
    debugger
    this.aaa()
    console.log(this.a)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
