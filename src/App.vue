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
      <div>footer</div>
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

<style></style>
