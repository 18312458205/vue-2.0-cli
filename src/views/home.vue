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
import myHeader from './myHeader.vue'
import myAside from './myAside.vue'
import myBreadcrumb from './myBreadcrumb.vue'
import page201 from './page201.vue'
import page202 from './page202.vue'
import page1 from './page1.vue'
import page3 from './page3.vue'
import page4 from './page4.vue'
export default {
  components: {
    myHeader,
    myAside,
    myBreadcrumb,
    page201,
    page202,
    page1,
    page3,
    page4
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
  /* display: flex; */
  height: 100%;
}
.left {
  /* flex: 0 0 200px; */
  float: left;
  width: 200px;
  height: 100%;
  background-color: rgb(84, 92, 100);
}
.right {
  /* flex: 1 1 auto; */
  margin-left: 200px;
  height: 100%;
}
</style>
