<template>
  <div>
    <!-- <el-alert
      title="警告提示的文案"
      type="warning"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon
    >
    </el-alert> -->
    <el-card>
      <div>
        <el-input
          v-model="inputValue"
          placeholder="请输入内容"
          size="medium"
        ></el-input>
        <el-input
          v-model="inputValue"
          placeholder="请输入内容"
          size="medium"
        ></el-input>
        <el-input
          v-model="inputValue"
          placeholder="请输入内容"
          size="medium"
        ></el-input>
        <el-input
          v-model="inputValue"
          placeholder="请输入内容"
          size="medium"
        ></el-input>
      </div>
      <div class="text item" v-for="(type, index) in dataType" :key="index">
        {{ type }}<i class="el-icon-check"></i>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
      dataType: ['10', '11', '13', '14', '17', '18', '19', '20', '21']
    }
  }
}
</script>

<style scoped>
.el-input {
  width: 20%;
}
</style>
