<template>
  <el-container style="height: 100vh;">
    <el-aside width="180px">
      <h2>data sync</h2>
      <Menu />
    </el-aside>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from './components/Header'
import Menu from './components/Menu'

export default {
  data() {
    return {}
  },
  components: {
    Header,
    Menu
  }
}
</script>

<style>
html,
body {
  margin: 0;
  /* background-color: #fff; */
  padding: 0;
}

.el-aside {
  color: #333;
  border-right: 1px solid #ccc;
  background-color: #fff;
}
.el-aside h2 {
  margin-left: 20px;
}

.el-menu-item {
  text-align: center;
}
/* 隐藏关闭公告按钮 */
.el-icon-close::before {
  display: none;
}
#app {
  margin: 0;
  padding: 0;
}
</style>
