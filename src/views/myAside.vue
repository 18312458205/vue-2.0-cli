<template>
  <div>
    <el-aside width=" 200px ">
      <el-menu :default-active="$route.path" :router="true" class="el-menu-vertical-demo" @select="handleSelect" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu index="">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航1</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组1</template>
            <el-menu-item index="/home/page101">选项1</el-menu-item>
            <el-menu-item index="/home/page102">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/home/page2">
          <i class="el-icon-setting"></i>
          <span slot="title">导航2</span>
        </el-menu-item>
        <el-menu-item index="/home/page3">
          <i class="el-icon-setting"></i>
          <span slot="title">导航3</span>
        </el-menu-item>
        <el-menu-item index="/home/page4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航4</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  name: 'myAside',
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect (key, keyPath) {
      console.log(key)
      console.log(key, keyPath)
      switch (key) {
        case '1':
          this.$router.push('/home/page101')
          // this.breadcrumbItems = ['导航一']
          break
        case '2':
          this.$router.push('/home/page102')
          // this.breadcrumbItems = ['导航一']
          break
        case '3':
          this.$router.push('/home/page2')
          // this.breadcrumbItems = ['导航二']
          break
        case '4':
          this.$router.push('/home/page3')
          // this.breadcrumbItems = ['导航三']
          break
        case '5':
          this.$router.push('/home/page4')
          // this.breadcrumbItems = ['导航三']
          break
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}
</style>
