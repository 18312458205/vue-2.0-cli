<template>
  <div class="header">
    <div class="sign"></div>
    <div class="title">管理系统</div>
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
          <el-dropdown-item>
            <span @click="out">退出登陆</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import photo1 from '../img/www.jpg'
import photo2 from '../img/eee.jpg'
import { mapState } from 'vuex'
export default {
  name: 'myHeader',
  data () {
    return {
      photo: '',
      photo1: photo1,
      photo2: photo2,
      backgroundUrl: '',
      username: ''
    }
  },
  computed: {
    ...mapState([
      'userinfo'
    ])
  },
  created () {
    this.username = JSON.parse(localStorage.getItem('userInfo')).username
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
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    out: function () {
      this.$confirm('您确定要退出登录吗?', '提示！', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        localStorage.clear()
        let userInfo = null
        let token = ''
        let isLogin = false
        this.$router.push({ path: '/login' })
        this.$store.dispatch('out', { userInfo, token, isLogin })
        this.$message({
          message: '退出登陆',
          type: 'success'
        })
      }).catch(err => {
        console.warn(err)
      })
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
  height: 60px;
  background-color: #242f42;
  position: relative;
}
.sign{
  float: left;
  width: 60px;
  height: 60px;
  background:url('../img/logo.png');
  background-size:100% 100%;
}
.title{
  float: left;
  height: 60px;
  line-height: 60px;
  color: #fff;
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
  position: absolute;
  top: 20px;
  right: 10px;
}
.el-dropdown-link {
  color: #fff;
}
</style>
