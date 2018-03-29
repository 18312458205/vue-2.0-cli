<template>
  <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :onSuccess="uploadSuccess" :beforeUpload="beforeAvatarUpload"  :file-list="fileList3" >
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">上传模板只能是 xls、xlsx、doc、docx 格式!且不超过1MB</div>
  </el-upload>
</template>

<script>
export default {
  name: 'upload',
  data () {
    return {
      fileList3: []
    }
  },
  methods: {
    uploadSuccess (response, file, fileList) {
      this.fileList3 = fileList.slice(-1)
      this.$message({
        showClose: true,
        message: '上传成功',
        type: 'success'
      })
    },
    beforeAvatarUpload (file) {
      const extension = file.name.split('.')[1] === 'xls'
      const extension2 = file.name.split('.')[1] === 'xlsx'
      const extension3 = file.name.split('.')[1] === 'doc'
      const extension4 = file.name.split('.')[1] === 'docx'
      const isLt2M = file.size / 1024 / 1024 < 1
      if (!extension && !extension2 && !extension3 && !extension4) {
        this.$message({
          showClose: true,
          message: '上传模板只能是 xls、xlsx、doc、docx 格式!',
          type: 'warning'
        })
      }
      if (!isLt2M) {
        this.$message({
          showClose: true,
          message: '上传模板大小不能超过 1MB!',
          type: 'warning'
        })
      }
      return (extension || extension2 || extension3 || extension4) && isLt2M
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
