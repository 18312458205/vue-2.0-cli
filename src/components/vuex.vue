<template>
  <div>
    <el-button type="primary" @click="increment">增加</el-button>
    <el-button type="primary" @click="decrement">减小</el-button>
    <div>当前数量：{{count}}</div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'vuex',
  data () {
    return {

    }
  },
  // 方式1：通过this.$store.state
  // computed: {
  //   count () {
  //     return this.$store.state.count
  //   }
  // },
  computed: {
    ...mapState([
      'count'
    ])
  },
  methods: {
    ...mapActions([
      'increment',
      'decrement'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
