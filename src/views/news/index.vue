<template>
  <div>
    <el-card>
      <div slot="header">
        新闻列表
      </div>
      <el-table :data="tableData" border>
        <el-table-column label="新闻头图">
          <template slot-scope="scope">
            <img :src="scope.row.img" alt="" class="table-item-img">
          </template>
        </el-table-column>
        <el-table-column label="新闻标题" prop="title"></el-table-column>
        <el-table-column label="作者" prop="author.nickname"></el-table-column>
        <el-table-column label="分类" prop="type.title"></el-table-column>
        <el-table-column label="操作" width="220">
          <template slot-scope="scope">
            <el-button type="primary" @click="handleDetail(scope.row._id)" size="mini">查看详细</el-button>
            <el-button type="danger" @click="handleDel(scope.row._id)" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        tableData: []
      }
    },
    methods: {
      getData() {
        this.$axios.get('/admin/news').then(res => {
          if (res.code == 200) {
            this.tableData = res.data
          }
        })
      },
      handleDel(id) {
        this.$axios.delete(`/admin/news/${id}`).then(res => {
          if (res.code == 200) {
            this.$message.success(res.msg);
            this.getData()
          }
        })
      },
      handleDetail(id) {

      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped>

</style>
