<template>
  <div class="hello">
    <!-- <el-checkbox v-model="aaa" label="jjj"> 123</el-checkbox> -->
    <div>
      <!-- 源石交易所 -->
      <purchase-selection :purchaseList="shiPurchaseList" title="源石交易所"/>
    </div>
  </div> 
</template>

<script lang="ts">
import { computed, defineComponent, ref, provide } from "@vue/runtime-core";
import { PurchaseItem, PurchaseList } from "../interface/types"

import { ResObtainType } from "@/interface/const";
//引入组件
import PurchaseSelection from '../components/PurchaseSelection.vue'
// import


export default defineComponent({
  components:{
    PurchaseSelection,
  },
  setup(){
    // const store = useStore();
    // provide('store', store)
    const shiPurchaseList = ref<PurchaseList>([
      new PurchaseItem(6, 3, 0, 0, 0, "6元首充（￥6，3源石)", 'shi_6', ResObtainType.purchase),
      new PurchaseItem(30, 12, 0, 0, 0, "30元首充（￥30，12源石）", 'shi_30', ResObtainType.purchase),
      new PurchaseItem(98, 40, 0, 0, 0, "98元首充（￥98，40源石）", 'shi_98', ResObtainType.purchase),
      new PurchaseItem(198, 80, 0, 0, 0, "198元首充（￥98，80源石）", 'shi_198', ResObtainType.purchase),
      new PurchaseItem(328, 132, 0, 0, 0, "328元首充（￥328，132源石）", 'shi_328', ResObtainType.purchase),
      new PurchaseItem(648, 260, 0, 0, 0, "648元首充（￥648，260源石）", 'shi_648', ResObtainType.purchase),
    ]); 
    return {
      shiPurchaseList, 
      }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
