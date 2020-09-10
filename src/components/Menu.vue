<template>
  <el-menu router default-active="/sync" active-text-color="#FF6700">
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
export default {}
</script>

<style>
.el-menu {
  border-right: none;
}
</style>
