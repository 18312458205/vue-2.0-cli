<template>
  <div class="all">
    <div class="title">{{title}}</div>
    <div class="list">
      <ul>
        <li class="list-item" v-for="item in items" :key="item.name">
          <slot v-bind="item"></slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aaa',
  data () {
    return {
    }
  },
  props: [ 'title', 'items' ],
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}
.all {
  width: 333px;
  border-radius: 5px;
  overflow: hidden;
}
.title {
  height: 85px;
  background-color: #a93326;
  font-size: 25px;
  line-height: 85px;
  font-weight: bolder;
  color: #fff;
  padding-left: 26px;
}
.list {
  height: 175px;
  background-color: #344a5e;
  padding-left: 26px;
  padding-top: 12px;
}
.list-item {
  font-size: 15px;
  font-weight: bolder;
  color: #fff;
  padding-top: 16px;
  padding-bottom: 16px;
}
</style>
