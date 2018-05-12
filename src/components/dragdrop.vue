<template>
  <div class='drag-content'>
    <div class='project-content'>
      <div class='select-item' :key="pjdt.name" :data-a="555" :data-b="666" :data-c="777" draggable='true' @dragstart='drag($event)' v-for='pjdt in projectdatas'>{{pjdt.name}}</div>
    </div>
    <div class='people-content'>
      <div class='drag-div' :key="ppdt.name" v-for='ppdt in peopledata' @drop='drop($event)' @dragover='allowDrop($event)'>
        <div class='select-project-item'>
          <label class='drag-people-label'>{{ppdt.name}}:</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let dom = null
export default {
  name: 'dragdrop',
  data () {
    return {
      projectdatas: [
        {
          id: 1,
          name: '葡萄'
        },
        {
          id: 2,
          name: '芒果'
        },
        {
          id: 3,
          name: '木瓜'
        },
        {
          id: 4,
          name: '榴莲'
        }
      ],
      peopledata: [
        {
          id: 1,
          name: '小颖'
        },
        {
          id: 2,
          name: 'hover'
        },
        {
          id: 3,
          name: '空巢青年三 '
        },
        {
          id: 3,
          name: '一丢丢'
        }
      ]
    }
  },
  methods: {
    drag: function (event) {
      console.log(event)
      console.log(event.target.dataset.a)
      console.log(event.target.dataset.b)
      console.log(event.target.dataset.c)
      dom = event.currentTarget
      console.log('event.target')
      console.log(event.target)
    },
    drop: function (event) {
      console.log(event.target)
      event.preventDefault()
      event.target.appendChild(dom)
    },
    allowDrop: function (event) {
      event.preventDefault()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.select-item {
  background-color: #5bc0de;
  display: inline-block;
  text-align: center;
  border-radius: 3px;
  margin-right: 10px;
  cursor: pointer;
  padding: 6px 20px;
  color: #fff;
}
.cursored {
  cursor: default;
}
.project-content,
.people-content {
  margin: 30px 50px;
}
.people-content {
  margin-top: 30px;
}
.drag-div {
  border: 1px solid #5bc0de;
  padding: 10px;
  margin-bottom: 10px;
  width: 800px;
  cursor: pointer;
}
.select-project-item {
  display: inline-block;
  text-align: center;
  border-radius: 3px;
}
.drag-people-label {
  margin-bottom: 0;
  padding-right: 10px;
}
</style>
