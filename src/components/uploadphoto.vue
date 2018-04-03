<template>
  <div>
    <div id="photo">
      <img id="photo1" ref="photo1">
    </div>
    <input id="upload" ref="upload" type="file" @change="readfile" accept="image/jpeg">
    <el-button type="primary" @click="upload">本地上传</el-button>
    <el-button type="primary" @click="open">拍照上传</el-button>
    <pai-zhao ref="paizhao"></pai-zhao>
  </div>
</template>

<script>
import paiZhao from './paiZhao'
export default {
  name: 'uploadphoto',
  components: { paiZhao },
  data () {
    return {

    }
  },
  methods: {
    upload () {
      this.$refs.upload.click()
    },
    readfile () {
      var file = this.$refs.upload.files[0]
      var photo1 = this.$refs.photo1
      console.log(file)
      var reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function (e) {
        photo1.src = this.result
      }
    },
    open () {
      this.$refs.paizhao.dialogVisible = true
    }
  },
  mounted: function () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}
#photo {
  width: 208px;
  height: 208px;
  border: 1px solid #ddd;
  position: relative;
}
#photo1 {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
#upload {
  display: none;
}
</style>
