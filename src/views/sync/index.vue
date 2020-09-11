<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="数据查询" name="first">
        <QueryData />
      </el-tab-pane>
      <el-tab-pane label="新增数据" name="second">
        <AddData />
      </el-tab-pane>
      <el-tab-pane label="入库关联发票数据" name="third">
        <InstorageInvoice />
      </el-tab-pane>
      <el-tab-pane label="出库数据" name="ahb">
        <Outstorage />
      </el-tab-pane>
      <el-tab-pane label="出库关联发票数据" name="asda">
        <OutstorageInvoice />
      </el-tab-pane>
      <el-tab-pane label="发票图片数据" name="ada">
        <Invoice />
      </el-tab-pane>
      <el-tab-pane label="随货单图片数据" name="sadaaa">
        <SellList />
      </el-tab-pane>
      <el-tab-pane label="发票与随货单关联数据" name="cc">
        <InvoiceSellList />
      </el-tab-pane>
      <el-tab-pane label="供应商数据" name="thiccrd">
        <Supplier />
      </el-tab-pane>
      <el-tab-pane label="重传全部数据" name="fourth">
        <ResendAllData />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import AddData from './addData'
import QueryData from './queryData'
import InstorageInvoice from './instorageInvoice'
import Outstorage from './outstorage'
import OutstorageInvoice from './outstorageInvoice'
import Invoice from './invoice'
import SellList from './sellList'
import InvoiceSellList from './invoiceSellList'
import Supplier from './supplier'
import ResendAllData from './resendAllData'

export default {
  data() {
    return {
      activeName: 'first'
    }
  },
  components: {
    AddData,
    QueryData,
    InstorageInvoice,
    Outstorage,
    OutstorageInvoice,
    Invoice,
    SellList,
    InvoiceSellList,
    Supplier,
    ResendAllData
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
      console.log(event.target.innerText)
    }
  }
}
</script>

<style scoped>

</style>
