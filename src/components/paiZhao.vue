<template>
  <div>
    <el-dialog title="拍照上传" :visible.sync="dialogVisible" width="50%" :close-on-click-modal="false">
      <el-row>
        <el-col :span="12">
          <div>
            <el-button type="primary" @click='GetDeviceList'>检测摄像头</el-button>
          </div>
          <div>
            <el-select @change='onChangeCamera' v-model="selectedCameraName" placeholder="请选择摄像头">
              <el-option v-for="item in usbCameraNameList" :key="item.value" :label="item.name" :value="item.value">
              </el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="12">
          <object ref="qcapture" CLASSID="CLSID:583A5342-AFE6-4DC7-98B1-F9F5F260ABE0" width="320" height="240">
          </object>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'paiZhao',
  data () {
    return {
      dialogVisible: false,
      usbCameraNameList1: [],
      usbCameraNameList: [],
      selectedCameraName: ''

    }
  },
  methods: {
    GetDeviceList: function () {
      this.$refs.qcapture.MainCall('General.Init', '{}')
      this.usbCameraNameList = []
      console.log('摄像头控件检测成功')
      var ret = this.$refs.qcapture.DirectCall('General.GetDeviceList', '{"deviceType":"video"}')
      console.log(JSON.parse(ret).devices)
      this.usbCameraNameList1 = JSON.parse(ret).devices
      for (var i = 0; i < this.usbCameraNameList1.length; i++) {
        var camera = {}
        camera.name = '摄像头' + (i + 1)
        camera.value = this.usbCameraNameList1[i]
        this.usbCameraNameList.push(camera)
      }
      console.log(this.usbCameraNameList)
      this.selectedCameraName = this.usbCameraNameList[0].value
    },
    // 打开摄像头
    OpenVideo: function (a) {
      console.log('选中摄像头' + a)
      var command = 'Real.OpenVideo'
      var param = '{"videoName":"Integrated Camera","videoType":"MJPG","sizeWidth":640,"sizeHeight":480,"frameRate":25}'
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
* {
  box-sizing: border-box;
}
</style>
