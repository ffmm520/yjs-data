<template>
  <el-menu
    router
    :default-active="defaultActivepath"
    active-text-color="#FF6700"
    style="background-color: #f1f1f1"
  >
    <el-menu-item index="/sync">
      <i class="el-icon-guide"></i>
      <span slot="title">接口订单</span>
    </el-menu-item>
    <el-menu-item index="/manual">
      <i class="el-icon-lollipop"></i>
      <span slot="title">手工订单</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      defaultActivepath: ''
    }
  },
  created() {
    this.getCurrentPath()
  },
  methods: {
    // 获取当前路径，让menu color和路由一致
    getCurrentPath() {
      const currentPath = window.location.href
      const route = currentPath.substring(currentPath.indexOf('#') + 1)
      this.defaultActivepath = route
    }
  }
}
</script>

<style>
.el-menu {
  border-right: none;
}
</style>
