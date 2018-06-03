<template>
  <div>
    <el-breadcrumb class="bread" separator="/">
      <el-breadcrumb-item :to="{ path: '/home/page1' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for='(item,index) in levelList' :key='index'>
        {{item}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'myBreadcrumb',
  data () {
    return {
      levelList: null
    }
  },
  computed: {
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb () {
      let matched = this.$route.path
      let n = matched.lastIndexOf('/')
      let m = matched.substr(n + 1)
      switch (m) {
        case 'page1':
          this.levelList = ['设置']
          break
        case 'page201':
          this.levelList = ['导航2', '导航201']
          break
        case 'page202':
          this.levelList = ['导航2', '导航202']
          break
        case 'page3':
          this.levelList = ['导航3']
          break
        case 'page4':
          this.levelList = ['导航4']
          break
      }
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}
.bread {
  height: 50px;
  line-height: 50px;
  padding-left: 20px;
  border-bottom: 1px solid #ddd;
}
</style>
