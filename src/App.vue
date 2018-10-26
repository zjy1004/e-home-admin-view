<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
.fll {
  float: left;
}
.flr {
  float: right;
}
.clearfix {
  &::after {
    content: '';
    clear: both;
    display: block;
  }
}
a{
  text-decoration: none;
  color: #fff;
}
  .table-item-img {
    width: 80px;
    height: 80px;
  }
.el-menu{
  border-right: none;
}
  .el-submenu .el-menu-item{
    min-width: 0;
  }
</style>
