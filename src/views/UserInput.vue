<template>
  <div class="hello">
    <!-- <el-icon><InfoFilled /></el-icon><p> </p> -->
    <el-alert title="请在下方勾选尚未获得源石，并会在夏活前通关的关卡" :closable="false" type="info" />
    <div>
      <!-- 活动复刻 -->
      <purchase-selection
        :purchaseList="reviewActivityList"
        title="近期活动复刻"
        :defaultExpand="true"
      />
    </div>
    <div>
      <!-- 主线 -->
      <purchase-selection
        :purchaseList="mainList"
        title="主题曲、突袭和绝境作战"
      />
    </div>
    <div>
      <!-- 活动复刻 -->
      <purchase-selection
        :purchaseList="documentedSSList"
        title="已收录的别传、插曲"
      />
    </div>
    <el-alert title="请在下方勾选要购买的项目" :closable="false" type="info" />
    <div>
      <!-- 大月卡 & 月卡 -->
      <purchase-selection
        :purchaseList="monthCardPurchaseList"
        title="月卡 & 大月卡（每月寻访组合包）"
        :defaultExpand="true"
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
  documentedSSList,
  mainList,
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
      documentedSSList,
      mainList,
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
