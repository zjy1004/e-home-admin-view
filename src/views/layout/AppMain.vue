<template>
  <div class="app-main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "AppMain"
}
</script>

<style scoped lang="scss">
.app-main{
  padding: 30px;
  .el-card {
    min-height: calc( 100vh  -  160px );
  }
}
</style>
