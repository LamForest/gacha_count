<template>
<div>
    <el-alert title="下面的数据为基于近期活动的估算，仅供参考" :closable="false"  type='warning'>  </el-alert>
    <clickable-divider :isExpand="isExpand" title="资源详细计算过程" @click="isExpand = !isExpand"/>
    <el-collapse-transition>
    <div v-show="isExpand">
        <el-card class="box-card" shadow="hover" v-for="(value, key) in collapseList" :title="key"  :key='key'>
            <!-- <div class="el-card__header"> -->
            <div class="card-header">
                <span>{{key }} </span>
                <!-- <el-button class="button" text>Operation button</el-button> -->
            </div>
            <!-- </div> -->
            <div v-if="value.length == 0" class="text"> 无 </div>
            <div v-for="(item, index) in value" :key="index" class="text">{{ (index + 1) + ". " +item }}</div>
        
        </el-card>
    </div>
    </el-collapse-transition>

</div>
    
</template>

<script lang="ts">
import { ResObtainType } from '@/interface/const';
import { ResDetail } from '@/interface/types';
import { useStore } from '@/store/store'
import { computed, defineComponent, ref } from 'vue'
import ClickableDivider from "./ClickableDivider.vue";
const placeHolder = "无";

// type CollapseItem = {
//     title: string,
//     body: string,
// };

export default defineComponent({
    components: { ClickableDivider },
    props:{

    },
    setup() {
        const store = useStore();

        const activeName = ref([]);

        const concat = (a: Array<string>) =>{
            if(a.length == 0){
                return placeHolder;
            }
            return a.join("\n")
        }

        const isExpand = ref<boolean>(false);
        
        const collapseList = computed(() =>{
            /**
             {
                 '日常': ["", ""],
                 '活动': ["", ""],
             }
             */
            const ret: Record<string, Array<string>> = {};
            for(const k in ResObtainType){
                const type = ResObtainType[k];
                ret[type] = [];
            };
            const allDetails: Array<ResDetail> = store.getters['allDetails'];
            for(const item of allDetails){
                ret[item.type].push(item.detail);
            }
            // console.log(collapseList)
            return ret;
        })

        return {activeName, collapseList, concat, isExpand}
        
    },
})
</script>
<style scoped>
.card-header {
  display: flex;
  justify-content: space-evenly;
  margin-top: -10px;
  margin-bottom: 10px;
  font-size: 15px;
  /* align-items: center; */
}
.text {
  text-align: start;
  font-size: 13px;
  line-height: 140%;
}

</style>