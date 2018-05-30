<template>
  <div class="login">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
      <h4 class="title">系统登陆</h4>
      <el-form-item label="用户名" prop="username" label-width="65px">
        <el-input v-model="ruleForm2.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="userpwd" label-width="65px">
        <el-input type="password" v-model="ruleForm2.userpwd"></el-input>
      </el-form-item>
      <el-form-item class="button">
        <el-button type="primary" @click="submitForm('ruleForm2')">登陆</el-button>
        <el-button type="primary" @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from '../apis/index.js'
import { mapActions } from 'vuex'
import qs from 'qs'
export default {
  data () {
    var validateusername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      } else {
        callback()
      }
    }
    var validateuserpwd = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不能为空'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        username: '',
        userpwd: ''
      },
      rules2: {
        username: [
          { validator: validateusername, trigger: 'blur' }
        ],
        userpwd: [
          { validator: validateuserpwd, trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
  },
  methods: {
    ...mapActions([
      'setUserInfo'
    ]),
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login(qs.stringify(this.ruleForm2)).then((res) => {
            // 如果用户名和密码在数据库中可以找到,后台返回字符串'00000'
            if (res.data.code === '0000') {
              console.log('登陆成功')
              if (res.data.token) {
                // 储存 token
                localStorage.setItem('photo', res.data.data.photo)
                localStorage.setItem('username', res.data.data.username)
                localStorage.setItem('token', res.data.token)
                this.$store.dispatch('setUserInfo', res.data)
                this.$router.push('/home')
              }
              this.$message({
                message: '登陆成功',
                type: 'success'
              })
            } else {
              // 反之后台返回字符串'0001'
              this.$message({
                message: '用户名或密码错误',
                type: 'warning'
              })
            }
          }).catch(err => {
            console.warn(err)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}
.login {
  width: 400px;
  height: 300px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 0px 10px 5px #888888;
}
.title {
  text-align: center;
  padding-top: 15px;
  padding-bottom: 35px;
}
.button {
  text-align: center;
}
</style>
