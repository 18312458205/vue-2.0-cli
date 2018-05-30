<template>
  <el-container>
    <el-header class="header">
      <div class="photo" :style="{background:backgroundUrl }"></div>
      <div class="user">
        <el-dropdown>
          <span class="el-dropdown-link">
            {{username}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link to="/about">关于我</router-link>
              </el-dropdown-item>
            <el-dropdown-item>
              <a href="https://github.com/18312458205">项目仓库</a>
            </el-dropdown-item>
            <el-dropdown-item>退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-container>
      <el-aside width=" 200px ">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import photo1 from '../img/www.jpg'
import photo2 from '../img/eee.jpg'
export default {
  data () {
    return {
      photo: '',
      photo1: photo1,
      photo2: photo2,
      backgroundUrl: '',
      username: ''
    }
  },
  created () {
    this.username = localStorage.getItem('username')
    switch (this.username) {
      case 'admin':
        this.backgroundUrl = 'url(' + this.photo1 + ')'
        break
      case 'visitor':
        this.backgroundUrl = 'url(' + this.photo2 + ')'
        break
    }
  },
  methods: {
    submitForm (formName) {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}
.header {
  background-color: #242f42;
  position: relative;
}
.photo {
  position: absolute;
  width: 50px;
  height: 50px;
  top: 5px;
  right: 100px;
  border-radius: 25px;
  overflow: hidden;
}
.user {
  display: inline-block;
  position: absolute;
  top: 20px;
  right: 10px;
}
.el-dropdown-link {
  color: #fff;
}
</style>
