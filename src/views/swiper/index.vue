<template>
  <div class="swiper">
    <el-card>
      <div slot="header">
        轮播图列表
      </div>
      <el-table :data="tableData" border>
        <el-table-column label="轮播图">
          <template slot-scope="scope">
            <img :src="scope.row.img" alt="" class="table-item-img">
          </template>
        </el-table-column>
        <el-table-column label="轮播图标题" prop="title"></el-table-column>
        <el-table-column label="新闻标题" prop="newsId.title"></el-table-column>
        <el-table-column label="排序" prop="sort"></el-table-column>
        <el-table-column label="是否显示" prop="status">
          <template slot-scope="scope">
            {{scope.row.status ? '显示' : '不显示'}}
          </template>
        </el-table-column>

        <el-table-column label="操作" width="220">
          <template slot-scope="scope">
            <el-button type="primary" @click="handleSubmit(scope.row._id)" size="mini">编辑</el-button>
            <el-button type="danger" size="mini">删除</el-button>
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
        this.$axios.get('/admin/swiper').then(res => {
          if (res.code == 200) {
            this.tableData = res.data
          }
        })
      },
      handleSubmit(id) {
        this.$router.push(`/layout/editSwiper/?id=${id}`)
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped>

</style>
