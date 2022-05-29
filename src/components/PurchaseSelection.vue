<template>
  <div>
    <clickable-divider
      :isExpand="isExpand"
      :title="title"
      @click="isExpand = !isExpand"
    />
    <!-- <transition> -->
    <el-collapse-transition>
      <!-- <el-row justify="space-evenly" v-show="isExpand"> -->
      <div class="checkboxs-wrapper" v-show="isExpand">
        <!-- 必须将el-checkbox用一个div包起来，否则 checkboxs-wrapper的justify-content属性不起作用-->
        <div class='checkbox-div' v-for="(item, index) in purchaseList" :key="index">
        <el-checkbox
          class="checkbox"
          
          
          @change="(checked) => handleChecked(index, checked)"
          :label="index"
          :model="checkboxVModel[index]"
        >
          {{ item.description }}
        </el-checkbox>
        </div>
        <!-- <el-input-number v-model="inputNumberVModel[0]" :min="1" :max="10" /> -->
        <div
          v-for="(item, index) in shallowedCopiedAmountList"
          :key="index"
          class="amountWrapper"
        >
          <div class="inputNumberTitle">
            {{ item.description }}
          </div>
          <!-- <div class=> -->
          <el-input-number
            @change="
              (newValue, oldValue) => handleAmountChanged(index, newValue)
            "
            v-model="inputNumberVModel[index]"
            :min="0"
            :step="1"
            step-strictly
            size="small"
          >
          </el-input-number>

          <!-- </div> -->
        </div>
      </div>
      <!-- </el-row> -->
    </el-collapse-transition>
    <!-- </transition> -->
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, ref, inject } from "@vue/runtime-core";
import { useStore } from "../store/store";

import {
  PurchaseItem,
  PurchaseList,
  PurchaseAmountItem,
} from "../interface/types";
import { deepclone } from "../utils/deepclone";
import ClickableDivider from "./ClickableDivider.vue";
export default defineComponent({
  components: { ClickableDivider },
  props: {
    purchaseList: {
      required: true,
      type: Array as PropType<PurchaseList>,
    },
    title: {
      required: true,
      // type: string as PropType<string> //?
      type: String,
    },
    defaultExpand: {
      //默认是否展开
      required: false,
      default: false,
      type: Boolean,
    },
    purchaseAmountList: {
      //不是用checkbox接受用户输入，而是用el-input-number接受输入
      required: false,
      //error    Type of the default value for 'purchaseAmountList' prop must be a function  vue/require-valid-default-prop
      default: () => [],
      type: Array as PropType<PurchaseAmountItem[]>,
    },
  },
  setup(props) {
    //如果要在setup中使用props，那么props要作为参数传入setup
    // const a : string = 5;
    // const store = inject("store");
    const store = useStore();
    const isExpand = ref<boolean>(props.defaultExpand);
    //无法修改prop，所以将purchaseAmountList变为了一个内部data；不过不用响应式
    // const shallowedCopiedAmountList = deepclone(props.purchaseAmountList)
    const shallowedCopiedAmountList = props.purchaseAmountList.slice();
    const show = ref<boolean>(true);
    const checkboxVModel = ref<Array<boolean>>(
      new Array<boolean>(props.purchaseList.length).fill(false)
    );
    const inputNumberVModel = ref<Array<number>>(
      new Array<number>(props.purchaseAmountList.length).fill(0)
    );
    const handleChecked = (index: number, isChecked: boolean) => {
      // const isChecked = checkedList.value[index];
      const mutation = isChecked ? "check" : "uncheck";
      store.commit(mutation, props.purchaseList[index]);

      // console.log(index, isChecked);
    };

    const handleAmountChanged = (index: number, new_amount: number) => {
      // const isChecked = checkedList.value[index];

      store.commit("uncheck", shallowedCopiedAmountList[index]);
      shallowedCopiedAmountList[index].amount = new_amount;
      if (new_amount != 0)
        store.commit("check", shallowedCopiedAmountList[index]);

      // console.log(index, new_amount);
    };
    return {
      checkboxVModel,
      inputNumberVModel,
      handleChecked,
      isExpand,
      show,
      handleAmountChanged,
      shallowedCopiedAmountList,
    };
  },
});
</script>

<style scoped>
.checkbox-div{
    flex: 1 0 30%;
    display: flex;
    justify-content: start;
}
.checkbox {
  /* width: 180px; */
  /* checkbox默认margin-right=30px
    但是奇怪的是， 最后一个checkbox的margin-right = 0
    这使得checkbox的宽度不一致
    el-row justify='space-evenly' 的效果并不好
    所以要手动设置margin
    */
  /* margin-left: 10px; */
  /* margin-right: 0px; */

  /* flex-basis: 40%; */
  /* flex-grow: 1; */
  
  box-sizing: border-box;
  text-align: start;
}

.checkboxs-wrapper {
  /* align-content: flex-start; */
  /* justify-content: center; */
  display: flex;
  /* flex-flow: row wrap; */
  flex-wrap: wrap;
  justify-content: space-between;
}

.inputNumberTitle {
  color: var(--el-text-color-regular);
  font-size: 12px;

  font-weight: var(--el-font-weight-primary);
  margin-left: 5px;
}

.amountWrapper {
  /* display: flex; */
  /* flex: 0 0 50%; */
  /* margin-left: 0; */
  /* justify-items: left; */
}
</style>