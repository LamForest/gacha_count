<template>
  <div id="result">
      
    <!-- <el-alert title=""/> -->
    <div id='result-wrapper'>
      <h4>
        今天 {{today_date.format('YYYY-MM-DD')}} 至 夏活限定池结束（约为 {{deadline_date.format('YYYY-MM-DD')}}），大约或许至少能获得：
      </h4>
      <el-alert title="在山和泥岩即将进店的情况下，不同玩家获取及消耗黄票的差别较大，暂不将黄票纳入统计" :closable="false" type="warning" />
      <div class="result">
        <el-avatar :src="yu_url"> </el-avatar>
        <span>{{ totalRes.yu }}合成玉</span>
        <!-- </el-row> -->
      </div>
      <div class="result">
        <el-avatar :src="shi_url"> </el-avatar>
        <span>{{ totalRes.shi }}源石</span>
      </div>
      <div class="result">
        <el-avatar :src="chou_url"> </el-avatar
        ><span>{{ totalRes.chou }}寻访凭证</span>
      </div>
      <div class="result">
        <el-avatar :src="chou_10_url"> </el-avatar>
        <span>{{ totalRes.chou_10 }}十连寻访凭证</span>
      </div>
    
    <!-- <el-row align="middle" justify="space-evenly"> -->
      <h4 >
         可以进行<span style="color:red">{{ chous }} </span>次干员寻访. 
         <span v-show="price != 0">需要充值<span style="color:red">{{ price }} </span>RMB. </span>
      </h4>
    
    <!-- </el-row> -->
    </div>
  </div>
</template>

<script lang="ts">
import { ResDetail, Resources } from "@/interface/types";
import { computed, defineComponent, ref, provide } from "@vue/runtime-core";
import { useStore } from "../store/store";
import { today_date, deadline_date} from "../utils/data"

// import

export default defineComponent({
  components: {},
  setup() {
    const store = useStore();
    const chou_10_url =
      "https://pic1.zhimg.com/80/v2-1dcd0415ee2d93b5fc7aced86b0cd26e_720w.jpg?source=1940ef5c";
    const yu_url =
      "https://pica.zhimg.com/80/v2-cc92c54352f3359e6ce94bfbb88c1fa6_720w.jpg?source=1940ef5c";
    const shi_url =
      "https://pic1.zhimg.com/80/v2-38220d9cc7e0964fcdbc35ec12e7bc5f_720w.jpg?source=1940ef5c";
    const chou_url =
      "https://pic1.zhimg.com/80/v2-ccd55a21c8e00d7cbdb6d13ddf25cd21_720w.jpg?source=1940ef5c";

    const chous = computed<number>(() => store.getters["totalChou"].toFixed(2));
    // const resource = computed(() => store.getters['totalResource']); //可获取的总资源
    // const aaa = ref(false)
    const totalRes = computed<Resources>(() => {
      const totalRes = store.getters["totalResources"];
      // const info = `${totalRes.shi}源石，${totalRes.yu}合成玉，${totalRes.chou}单抽，${totalRes.chou_10}十连，`
      return totalRes;
    });

    const price = computed<number>(() => store.getters["totalPrice"]);

    return {
      chous,
      totalRes,
      chou_url,
      chou_10_url,
      yu_url,
      shi_url,
      today_date,
      deadline_date,
      price,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.result {
  text-align: center;
  width: 230px;
  /* flex: 0 0 100%; */
  align-items: center;
  display: flex;

}

#result-wrapper{
  flex-flow: column;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.result span {
  margin-left: 10px;

}

h4 {
  text-align: center;
  
}


</style>
