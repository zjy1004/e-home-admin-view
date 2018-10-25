<template>
  <div class="side-bar">
    <el-menu
      :router="true"
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#409eff">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>管理员用户</span>
        </template>
        <el-menu-item index="/layout/home">
          首页
        </el-menu-item>
        <el-menu-item index="/layout/adminUser">
          管理员列表
        </el-menu-item>
        <el-menu-item index="/layout/addAdmin">
          添加管理员
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>新闻管理</span>
        </template>
        <el-menu-item index="/layout/news">
          新闻列表
        </el-menu-item>
        <el-menu-item index="/layout/addNews">
          添加新闻
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>轮播图管理</span>
        </template>
        <el-menu-item index="/layout/swiper">
          轮播图列表
        </el-menu-item>
        <el-menu-item index="/layout/addSwiper">
          添加轮播图
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "SideBar"
}
</script>

<style scoped lang="scss">
.side-bar{
  height: 100vh;
  background: #304156;
  border-right: 1px solid #f1f1f1;
  box-sizing: border-box;
}
</style>
