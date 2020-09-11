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
      <div class="condition">
        <el-input
          v-model="inputValue"
          placeholder="请输入药交所订单号"
          size="medium"
          prefix-icon="el-icon-s-order"
        ></el-input>
        <el-input
          v-model="inputValue"
          placeholder="请输入内容"
          size="medium"
        ></el-input>
        <el-button size="medium" type="primary" icon="el-icon-search"
          >查询</el-button
        >
      </div>
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column prop="name" label="票据类型" width="260">
        </el-table-column>
        <el-table-column prop="send" label="是否上传" width="150">
          <template slot-scope="scope">
            <i v-if="scope.row.send" class="el-icon-success"></i>
            <i v-else class="el-icon-error"></i>
          </template>
        </el-table-column>
        <el-table-column prop="edit" label="操作">
          <template slot-scope="scope">
            <el-button v-if="scope.row.send" type="text" size="small">重传</el-button>
            <el-button v-else type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
      dataType: ['10', '11', '13', '14', '17', '18', '19', '20', '21'],
      tableData: [
        {
          name: '入库信息',
          send: true,
          edit: true
        },
        {
          name: '入库关联发票',
          send: true,
          edit: true
        },
        {
          name: '出库信息',
          send: true,
          edit: true
        },
        {
          name: '出库关联发票',
          send: true,
          edit: true
        },
        {
          name: '发票图片',
          send: false,
          edit: true
        },
        {
          name: '随货单图片',
          send: false,
          edit: true
        },
        {
          name: '发票随货单关联',
          send: false,
          edit: true
        },
        {
          name: '供应商信息',
          send: true,
          edit: true
        }
      ]
    }
  }
}
</script>

<style scoped>
.condition {
  margin-bottom: 30px;
}
.el-input {
  width: 30%;
}
.el-icon-success{
  font-size: 180%;
  padding-left: 30%;
  color: green;
}
.el-icon-error{
  font-size: 180%;
  padding-left: 30%;
  color: red;
}

</style>
