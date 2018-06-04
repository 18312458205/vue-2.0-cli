<template>
  <div>
    <el-aside width=" 200px ">
      <el-menu  :default-active="$route.path" :router="true" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="/home/page1">
          <i class="el-icon-setting"></i>
          <span slot="title">设置</span>
        </el-menu-item>
        <el-submenu index="">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>导航2</span>
          </template>
          <el-menu-item index="/home/page2/page201">导航201</el-menu-item>
          <el-menu-item index="/home/page2/page202">导航202</el-menu-item>
        </el-submenu>
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
