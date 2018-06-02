<template>
  <div>
    <el-breadcrumb class="bread" separator="/">
      <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
      <!-- <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'myBreadcrumb',
  data () {
    return {
      breadcrumbItems: []
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}
.bread {
  height: 50px;
  line-height: 50px;
  padding-left: 20px;
  border-bottom: 1px solid #ddd;
}
</style>
