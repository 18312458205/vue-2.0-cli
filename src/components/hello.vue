<template>
  <div class="hello"></div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      d: '6'
    }
  },
  methods: {
    chilFn: function (msg) {
      alert(msg)
    },
    mounted: function () {
      function runAsync () {
        var p = new Promise(function (resolve, reject) {
          setTimeout(function () {
            console.log('执行完成')
            resolve('随便什么数据')
          }, 500)
        })
        return p
      }
      runAsync()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
