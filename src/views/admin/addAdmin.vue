<template>
  <div>
    <el-card>
      <div slot="header">
        添加管理员
      </div>
      <el-form :model="formData" label-position="left" label-width="80px">
        <el-form-item label="用户头像">
          <UploadAvatar v-model="formData.avatar"></UploadAvatar>
        </el-form-item>
        <el-form-item label="用户名" required>
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" required>
          <el-input v-model="formData.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="formData.nickname"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="formData.sex">
            <el-option value="1" label="男"></el-option>
            <el-option value="0" label="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="个性签名">
          <el-input v-model="formData.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import UploadAvatar from '@/components/UploadImg'
  export default {
    name: "addAdmin",
    components: {UploadAvatar},
    data() {
      return {
        formData: {
          username: "",
          nickname: "",
          avatar: "",
          password: "",
          desc: "",
          phone: "",
          job: "",
          sex: ""
        }
      }
    },
    methods: {
      handleSubmit() {
        this.$axios.post('/admin/adminUser', this.formData).then(res => {
          if (res.code == 200) {
            this.$message.success(res.msg)
            this.$router.push('/layout/adminUser')
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  /deep/ .el-input{
    width: 500px;
  }
</style>
