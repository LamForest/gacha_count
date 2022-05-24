<template>
  <div class="hello">
    <div>
      <!-- 活动复刻 -->
      <purchase-selection :purchaseList="reviewActivityList" title="活动复刻" />
    </div>
    <div>
      <!-- 大月卡 & 月卡 -->
      <purchase-selection
        :purchaseList="monthCardPurchaseList"
        title="月卡 & 大月卡（每月寻访组合包）"
      />
    </div>

    <!-- <el-checkbox v-model="aaa" label="jjj"> 123</el-checkbox> -->
    <div>
      <!-- 源石交易所 -->
      <purchase-selection :purchaseList="shiPurchaseList" title="源石交易所" />
    </div>
    <div>
      <!-- 礼包 -->
      <purchase-selection :purchaseList="zuhebaoPurchaseList" title="组合包" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, provide } from "@vue/runtime-core";
import { PurchaseItem, PurchaseList } from "../interface/types";

import { ResObtainType } from "@/interface/const";
//引入组件
import PurchaseSelection from "../components/PurchaseSelection.vue";
import {
  shiList,
  zuhebaoList,
  monthCardList,
  reviewActivityList,
} from "../utils/data";
// import

export default defineComponent({
  components: {
    PurchaseSelection,
  },
  setup() {
    // const store = useStore();
    // provide('store', store)

    const shiPurchaseList = ref<PurchaseList>(shiList);
    const zuhebaoPurchaseList = ref<PurchaseList>(zuhebaoList);
    const monthCardPurchaseList = ref<PurchaseList>(monthCardList);

    return {
      shiPurchaseList,
      zuhebaoPurchaseList,
      monthCardPurchaseList,
      reviewActivityList,
    };
  },
});
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
