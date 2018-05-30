<template>
  <div>
    <input type="button" @click="aaa" value="跨域请求" />
    <aaa :items="shapes" title="Shapes">
      <template slot-scope="shape">
        <div>
          {{shape.name}}
          <small>({{shape.sides}} sides)</small>
        </div>
      </template>
    </aaa>
    <br>
    <br>
    <br>
    <br>
    <aaa :items="colors" title="Colors">
      <template slot-scope="color">
        <div>
          <div class="yanse" :style="{background:color.hex}"></div>
          {{color.name}}
        </div>
      </template>
    </aaa>
  </div>
</template>

<script>
// import qs from 'qs'
import aaa from './slot'
export default {
  name: 'axios',
  components: {
    aaa
  },
  data () {
    return {
      shapes: [
        { name: 'Square', sides: 4 },
        { name: 'Hexagon', sides: 6 },
        { name: 'Triangle', sides: 3 }
      ],
      colors: [
        { name: 'Yellow', hex: '#F4D03F' },
        { name: 'Green', hex: '#229954' },
        { name: 'Purple', hex: '#9B59B6' }
      ]
    }
  },
  created () {
    this.$axios.get('http://wwtliu.com/sxtstu/blueberrypai/getChengpinDetails.php')
      .then(res => {
        console.log(res.data)
      }).catch(res => {
        console.log(res)
      })
    let url = this.HOST + '/movie/top250'
    this.$axios.get(url, {
      params: {
        count: 10,
        start: 0
      }
    })
      .then(res => {
        console.log(res)
      }).catch(res => {
        console.log(res)
      })
  },
  methods: {
    aaa: function () {
      //   axios.get('/api/movie/in_theaters'
      //   )
      //     .then(function (response) {
      //       console.log(response)
      //     })
      //     .catch(function (error) {
      //       console.log(error)
      //     })
      // }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.yanse {
  display: inline-block;
  width: 20px;
  height: 13px;
  margin-right: 16px;
}
</style>
