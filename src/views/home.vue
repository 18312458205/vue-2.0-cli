<template>
  <div>
    <my-header></my-header>
    <div class="all">
      <div class="left">
        <my-aside></my-aside>
      </div>
      <div class="right">
        <my-breadcrumb></my-breadcrumb>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// import myHeader from './myHeader.vue'
// import myAside from './myAside.vue'
// import myBreadcrumb from './myBreadcrumb.vue'
export default {
  components: {
    myHeader: resolve => { require(['./myHeader.vue'], resolve) },
    myAside: resolve => { require(['./myAside.vue'], resolve) },
    myBreadcrumb: resolve => { require(['./myBreadcrumb.vue'], resolve) }
    // myHeader,
    // myAside,
    // myBreadcrumb
  },
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
.all {
  position: absolute;
  left: 0;
  right: 0;
  top: 60px;
  bottom: 0;
  height: 100%;
}
.left {
  float: left;
  width: 199px;
  height: 100%;
  background-color: rgb(84, 92, 100);
}
.right {
  margin-left: 199px;
  height: 100%;
}
</style>
