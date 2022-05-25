<template>
  <div>
    <clickable-divider :isExpand="isExpand" :title="title" @click="isExpand = !isExpand"/>
    <!-- <transition> -->
        <el-collapse-transition>
      <!-- <el-row justify="space-evenly" v-show="isExpand"> -->
        <div class='checkboxs-wrapper' v-show="isExpand">
        <el-checkbox
          class="checkbox"
          v-for="(item, index) in purchaseList"
          :key="index"
          @change="(checked) => handleChecked(index, checked)"
          :label="index"
          :model="checkboxVModel[index]"
        >
          {{ item.description }}
        </el-checkbox>
        </div>
      <!-- </el-row> -->
      </el-collapse-transition >
    <!-- </transition> -->
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, ref, inject } from "@vue/runtime-core";
import { useStore } from "../store/store";

import { PurchaseItem, PurchaseList } from "../interface/types";
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
      type: String
    },
    defaultExpand: {
      //默认是否展开
      required: false,
      default: false,
      type: Boolean
    },
  },
  setup(props) {
    //如果要在setup中使用props，那么props要作为参数传入setup
    // const a : string = 5;
    // const store = inject("store");
    const store = useStore();
    const isExpand = ref<boolean>(props.defaultExpand);
    const show = ref<boolean>(true);
    const checkboxVModel = ref<Array<boolean>>(
      new Array<boolean>(props.purchaseList.length).fill(false)
    );
    const handleChecked = (index: number, isChecked: boolean) => {
      // const isChecked = checkedList.value[index];
      const mutation = isChecked ? "check" : "uncheck";
      store.commit(mutation, props.purchaseList[index]);

      // console.log(index, isChecked);
    };
    return { checkboxVModel, handleChecked, isExpand, show };
  },
});
</script>

<style scoped>
.checkbox {
  /* width: 180px; */
  /* checkbox默认margin-right=30px
    但是奇怪的是， 最后一个checkbox的margin-right = 0
    这使得checkbox的宽度不一致
    el-row justify='space-evenly' 的效果并不好
    所以要手动设置margin
    */
  /* margin-left: 10px; */
  margin-right: 0px;
  flex: 0 0 33%;
  box-sizing: border-box;
}

.checkboxs-wrapper {

align-content: flex-start;
display: flex;
flex-flow: row wrap;

}
</style>