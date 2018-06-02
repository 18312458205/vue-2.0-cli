<template>
  <div>
    <my-header></my-header>
    <div class="all">
      <div class="left">
        <my-aside></my-aside>
      </div>
      <div class="right">
        <my-section></my-section>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from './myHeader.vue'
import myAside from './myAside.vue'
import mySection from './mySection.vue'
export default {
  components: {
    myHeader,
    myAside,
    mySection
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
}
.left {
  float: left;
  width: 200px;
  height: 100%;
  background-color: rgb(84, 92, 100);
}
.right {
  margin-left: 200px;
  height: 100%;
}
</style>
