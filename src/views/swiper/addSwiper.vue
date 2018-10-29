<template>
  <div>
    <el-card>
      <div slot="header">
        添加轮播图
      </div>
      <el-form :model="formData" label-width="100px" label-position="left">
        <el-form-item required label="轮播图" prop="img">
          <UploadImg v-model="formData.img"></UploadImg>
        </el-form-item>
        <el-form-item required label="标题" prop="title">
          <el-input v-model="formData.title" />
        </el-form-item>
        <el-form-item required label="新闻" prop="newsId">
          <el-select v-model="formData.newsId" value="">
            <el-option
              :label="item.title"
              :value="item._id"
              :key="index"
              v-for="(item, index) in news">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="排序" prop="sort">
          <el-input-number
            v-model="formData.sort"
            :min="1"
            :step="1"></el-input-number>
        </el-form-item>
        <el-form-item label="是否显示" prop="status">
          <el-switch
            v-model="formData.status"
            :active-value="1"
            :inactive-value="0"
            active-text="显示"
            inactive-text="不显示"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-if="!isEdit" @click="handleSubmit">
            提交
          </el-button>
          <el-button type="danger" v-else @click="handleSave">
            保存更改
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import UploadImg from '@/components/UploadImg'
  export default {
    name: "addSwiper",
    components: {
      UploadImg
    },
    data() {
      return {
        formData: {
          img: '',
          title: '',
          newsId: '',
          sort: '', //控制排序
          status: 1 //控制是否显示
        },
        news: [],
        isEdit: false
      }
    },
    methods: {
      getNews() {
        this.$axios.get('/admin/news').then(res => {
          if (res.code == 200) {
            this.news = res.data
          }
        })
      },
      handleSubmit() {
        this.$axios.post('/admin/swiper', this.formData).then(res => {
          if (res.code == 200) {
            this.$message.success(res.msg)
            this.$router.push('/layout/swiper')
          } else {
            this.$message.info(res.msg)
            this.$router.push('/')
          }
        })
      },
      getEditData() {
        const id = this.$route.query.id
        this.$axios.get(`/admin/swiper/${id}`).then(res => {
          if (res.code == 200) {
            this.formData = res.data
          }
        })
      },
      handleSave() {
        const id = this.$route.query.id
        this.$axios.patch(`/admin/swiper/${id}`, this.formData).then(res => {
          if (res.code == 200) {
            this.$message.success(res.msg)
            this.$router.push('/layout/swiper')
          }
        })
      }
    },
    created() {
      if (this.$route.name == 'editSwiper') {
        this.isEdit = true
      } else {
        this.isEdit = false
      }
      this.getNews();
      if (this.isEdit) {
        this.getEditData()
      }
    },
    watch: {
      $route(to, from) {
        if (to.name == 'editSwiper') {
          this.isEdit = true
        } else {
          this.isEdit = false
          this.formData = {
            img: '',
            title: '',
            newsId: '',
            sort: '', //控制排序
            status: 1 //控制是否显示
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
