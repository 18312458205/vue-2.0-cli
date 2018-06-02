<template>
  <div>
    <div>
      <my-breadcrumb></my-breadcrumb>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import myBreadcrumb from './myBreadcrumb.vue'
import page101 from './page101.vue'
import page102 from './page102.vue'
import page2 from './page2.vue'
import page3 from './page3.vue'
import page4 from './page4.vue'
export default {
  name: 'mySection',
  components: {
    myBreadcrumb,
    page2,
    page3,
    page4,
    page101,
    page102
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}
</style>
