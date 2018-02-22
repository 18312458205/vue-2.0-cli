<template>
  <div>
      <input type="button" @click="parentCall" value="父调子" />
      <hello ref="chil">hello组件</hello>
  </div>
</template>

<script>
import hello from './Hello'
export default {
  name: 'ref02',
  data () {
    return {
    }
  },
  components: {
    'hello': hello
  },
  methods: {
    parentCall: function () {
      this.$refs.chil.chilFn('我是父元素传过来的')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
