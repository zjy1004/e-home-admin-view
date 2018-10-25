<template>
  <div class="user">
    <el-card>
      <div slot="header">
        管理员列表
      </div>
      <el-table :data="tableData" border>
        <el-table-column label="头像" prop="avatar">
          <template slot-scope="scope">
            <img :src="scope.row.avatar" alt="" class="table-item-img">
          </template>
        </el-table-column>
        <el-table-column label="姓名" prop="nickname"></el-table-column>
        <el-table-column label="性别" prop="sex"></el-table-column>
        <el-table-column label="个性签名" prop="desc"></el-table-column>
        <el-table-column label="手机号" prop="phone"></el-table-column>
        <el-table-column label="操作" width="220">
          <template slot-scope="scope">
            <el-button type="primary" size="mini">查看详细</el-button>
            <el-button type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "adminUser",
    data() {
      return {
        tableData: []
      }
    },
    methods: {
      getData() {
        this.$axios.get('/admin/adminUser').then(res => {
          if (res.code == 200) {
            this.tableData = res.data
          }
        })
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped>

</style>
