<template>
  <div class="update">
    <!-- <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
      <h4 class="title">修改密码</h4>
      <el-form-item label="用户名" prop="username" label-width="85px">
        <el-input v-model="ruleForm2.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="userpwd" label-width="85px">
        <el-input type="password" v-model="ruleForm2.userpwd"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="userpwd" label-width="85px">
        <el-input type="password" v-model="ruleForm2.userpwd"></el-input>
      </el-form-item>
      <el-form-item class="button">
        <el-button type="primary" @click="submitForm('ruleForm2')">修改</el-button>
        <el-button type="primary" @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form> -->
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
      'setUserInfo',
      'setToken',
      'setIslogin'
    ]),
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login(qs.stringify(this.ruleForm2)).then((res) => {
            if (res.data.code === '0000') {
              this.$message({
                message: '登陆成功',
                type: 'success'
              })
              if (res.data.token) {
                let userInfo = res.data.data
                let token = res.data.token
                let isLogin = true
                localStorage.setItem('userInfo', JSON.stringify(userInfo))
                localStorage.setItem('token', token)
                localStorage.setItem('isLogin', isLogin)
                this.$router.push('/home')
              }
            } else {
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
.update {
  height: 350px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
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
