<template>
  <div id="app">
    <div id="list">
      <a href="#/ref01">ref01</a>
      <a href="#/ref02">ref02</a>
      <a href="#/ref03">ref03</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#list{
  border: 1px solid red;
}
</style>
