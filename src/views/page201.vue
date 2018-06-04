<template>
  <div>
    <div class="btns">
      <el-button type="primary" @click="openDialog">新增</el-button>
      <el-button type="danger">批量删除</el-button>
    </div>
    <div>
      <el-table border ref="multipleTable" :data="tableData4" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="id" label="编号" width="120">
        </el-table-column>
        <el-table-column label="日期" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="place" label="地址">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="primary" size="small">编辑</el-button>
            <el-button @click="handleClick(scope.row)" type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[4, 5]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="totalRecord">
        </el-pagination>
      </div>
    </div>
    <pop ref="dialog"></pop>
  </div>
</template>

<script>
import { search, qdelete } from '../apis/index.js'
import pop from './pop.vue'
import qs from 'qs'
export default {
  name: 'page201',
  components: {
    pop
  },
  data () {
    return {
      tableData4: [],
      multipleSelection: [],
      currentPage: 1,
      pageSize: 4,
      totalRecord: 0,
      id: null
    }
  },
  computed: {
  },
  created () {
    this.search()
  },
  methods: {
    handleClick (row) {
      console.log(row)
      this.id = row.id
      console.log(this.id)
      qdelete(qs.stringify({ id: this.id }))
        .then((res) => {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          this.search()
        })
        .catch(err => {
          console.warn(err)
        })
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pageSize = val
      this.search()
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
      this.search()
    },
    // toggleSelection (rows) {
    //   if (rows) {
    //     rows.forEach(row => {
    //       this.$refs.multipleTable.toggleRowSelection(row)
    //     })
    //   } else {
    //     this.$refs.multipleTable.clearSelection()
    //   }
    // },
    handleSelectionChange (val) {
      console.log(val)
      this.multipleSelection = val
    },
    openDialog () {
      this.$refs.dialog.dialogVisible = true
    },
    search () {
      search({ pageNum: this.currentPage, pageSize: this.pageSize })
        .then((res) => {
          this.tableData4 = res.data.data
          this.totalRecord = res.data.totalRecord
        })
        .catch(err => {
          console.warn(err)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}
.btns {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
