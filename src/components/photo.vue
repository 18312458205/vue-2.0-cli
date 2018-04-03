<template>
  <div>
    <el-button type="primary" @click='GetDeviceList'>检测摄像头</el-button>
    <el-select @change='onChangeCamera' v-model="selectedCameraName" placeholder="请选择摄像头">
      <el-option v-for="item in usbCameraNameList" :key="item.value" :label="item.name" :value="item.value">
      </el-option>
    </el-select>
    <object ref="qcapture" CLASSID="CLSID:583A5342-AFE6-4DC7-98B1-F9F5F260ABE0" width="320" height="240">
    </object>
    <img>
  </div>
</template>

<script>
export default {
  name: 'photo',
  data () {
    return {
      usbCameraName: [],
      usbCameraNameList: [],
      selectedCameraName: ''
    }
  },
  methods: {
    initOcx: function () {
      if (this.checkOcx('General.Init', '{}')) {
        console.log('摄像头ocx已安装')
      }
    },
    GetDeviceList: function () {
      this.initOcx()
      console.log('摄像头控件检测成功')
      var ret = this.$refs.qcapture.DirectCall('General.GetDeviceList', '{"deviceType":"video"}')
      console.log(JSON.parse(ret).devices)
      this.usbCameraName = JSON.parse(ret).devices
      console.log(this.usbCameraList1)
      for (var i = 0; i < this.usbCameraName.length; i++) {
        var camera = {}
        camera.name = '摄像头' + (i + 1)
        camera.value = this.usbCameraName[i]
        this.usbCameraNameList.push(camera)
      }
      this.selectedCameraName = this.usbCameraName[0]
    },
    checkOcx: function (command, param) {
      try {
        this.$refs.qcapture.MainCall(command, param)
        return true
      } catch (err) {
        return false
      }
    },
    // 打开摄像头
    OpenVideo: function (a) {
      console.log('选中摄像头' + a)
      var command = 'Real.OpenVideo'
      var param = '{"videoName":"USB2.0 PC CAMERA","videoType":"MJPG","sizeWidth":640,"sizeHeight":480,"frameRate":25}'
      this.$refs.qcapture.DirectCall(command, param)
    },
    // 关闭摄像头
    StopVideo: function () {
      var command = 'Real.CloseVideo'
      var param = '{}'
      this.$refs.qcapture.DirectCall(command, param)
      console.log('摄像头停止工作了')
    },
    // 切换摄像头
    onChangeCamera: function () {
      this.StopVideo()
      this.OpenVideo(this.selectedCameraName)
    }
  },
  mounted: function () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
