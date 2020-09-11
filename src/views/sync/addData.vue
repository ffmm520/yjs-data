<template>
  <el-card>
    <div v-for="o in 4" :key="o" class="text item">
      {{ '新增单条数据 ' + o }}
    </div>
  </el-card>
</template>

<script>
export default {}
</script>

<style scoped></style>
