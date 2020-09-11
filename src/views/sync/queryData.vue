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
      <el-table :data="tableData" style="width: 100%">
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
            <el-button
              v-if="scope.row.flag"
              type="primary"
              size="small"
              class="resend"
              @click="resend(scope.row.messageId)"
              >重传</el-button
            >
            <el-button v-else type="primary" size="small" class="edit"
              >添加</el-button
            >
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
      tableData: [
        {
          messageId: 200,
          type: 10,
          flag: true
        },
        {
          messageId: 200,
          type: 11,
          flag: true
        },
        {
          messageId: '',
          type: 13,
          flag: true
        },
        {
          messageId: '',
          type: 14,
          flag: true
        },
        {
          messageId: '',
          type: 17,
          flag: false
        },
        {
          messageId: '',
          type: 18,
          flag: false
        },
        {
          messageId: '',
          type: 19,
          flag: false
        },
        {
          messageId: '',
          type: 20,
          flag: true
        }
      ]
    }
  },
  created() {
    this.handleType()
  },
  methods: {
    handleType() {
      for (const item of this.tableData) {
        switch (item.type) {
          case 10:
            item.name = '入库信息'
            break
          case 11:
            item.name = '入库关联发票'
            break
          case 13:
            item.name = '出库信息'
            break
          case 14:
            item.name = '出库关联发票'
            break
          case 17:
            item.name = '发票图片'
            break
          case 18:
            item.name = '随货单图片'
            break
          case 19:
            item.name = '发票随货单关联'
            break
          case 20:
            item.name = '供应商信息'
            break
          /* case 21:
            item.name = '入库关联发票'
            break */
        }
      }
    },
    resend(messageId) {
      console.log(messageId)
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
.el-icon-success {
  font-size: 180%;
  /* padding-left: 30%; */
  color: #67c23a;
}
.el-icon-error {
  font-size: 180%;
  /* padding-left: 30%; */
  color: #ff4800cc;
}
.resend {
  background-color: #5bb3ed;
  border: #5bb3ed;
}
.edit {
  background-color: #7183ed;
  border: #7183ed;
}
</style>
