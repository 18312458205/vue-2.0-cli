<template>
  <div>
             <el-button @click="handleChange">增加</el-button>
    <div>{{num1}}</div>
  </div>
</template>

<script>
export default {
  name: 'localstorage',
  data () {
    return {
      num1: 0
    }
  },
  mounted () {
    this.num1 = sessionStorage.getItem('testKey')
  },
  methods: {
    handleChange () {
      sessionStorage.setItem('testKey', ++this.num1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
