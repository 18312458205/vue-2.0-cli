<template>
  <div>
    <input type="text" ref="input1" />
    <button @click="add">添加</button>
  </div>
</template>

<script>
export default {
  name: 'ref01',
  data () {
    return {

    }
  },
  methods: {
    add: function () {
      this.$refs.input1.value = '22'
      console.log(this.$refs)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
