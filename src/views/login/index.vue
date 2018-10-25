<template>
  <div class="login">
    <div class="login-box">
      <h2>党建E家后台管理系统</h2>
      <el-form>
        <el-form-item label="用户名">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formData.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click="handleLogin">
            登陆
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        formData: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      handleLogin() {
        this.$axios.post('/admin/adminUser/login', this.formData).then(res => {
          if (res.code == 200) {
            this.$message.success(res.msg);
            this.$router.push('/layout')
          } else {
            this.$message.info(res.msg)
          }
        }).catch(err => {
          reject(err)
        })
      },
    },
  }
</script>

<style scoped lang="scss">
.login{
  height: 100vh;
  background: #2d3a4b;
  overflow: hidden;

  h2{
    font-weight: 400;
    color: #fff;
    text-align: center;
  }
  .login-box{
    padding: 35px;
    box-sizing: border-box;
    width: 500px;
    height: 400px;
    border-radius: 6px;
    border: 1px solid #f1f1f1;
    margin: 150px auto;
  }
  /deep/ .el-input{
    background: #2d3a4b;
    border: none;
  }
  /deep/ .el-form-item__label{
    color: #fff;
    font-size: 16px;
  }
  .login-btn{
    display: block;
    width: 100%;
    box-sizing: border-box;
  }
}
</style>
