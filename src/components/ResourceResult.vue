<template>
  <div id='result'>
    <el-row align='middle' justify='space-evenly'>
  <el-avatar :src='yu_url'> </el-avatar> <span>{{totalRes.yu}}合成玉，</span>
  <el-avatar :src='shi_url'> </el-avatar> <span>{{totalRes.shi}}源石，</span>
   <el-avatar :src='chou_url'> </el-avatar><span>{{totalRes.chou}}寻访凭证，</span>
  <el-avatar :src='chou_10_url'> </el-avatar> <span>{{totalRes.chou_10}}十连寻访凭证;</span> 
    <span>可以寻访<font color='red'>{{chous}} </font>次.</span>
    </el-row>
  </div>


</template>

<script lang="ts">
import { computed, defineComponent, ref, provide } from "@vue/runtime-core";
import {useStore} from "../store/store"


// import


export default defineComponent({
  components:{
  },
  setup(){
    const store = useStore();
    const chou_10_url = 'https://pic1.zhimg.com/80/v2-1dcd0415ee2d93b5fc7aced86b0cd26e_720w.jpg?source=1940ef5c'
    const yu_url = 'https://pica.zhimg.com/80/v2-cc92c54352f3359e6ce94bfbb88c1fa6_720w.jpg?source=1940ef5c'
    const shi_url = 'https://pic1.zhimg.com/80/v2-38220d9cc7e0964fcdbc35ec12e7bc5f_720w.jpg?source=1940ef5c'
    const chou_url = 'https://pic1.zhimg.com/80/v2-ccd55a21c8e00d7cbdb6d13ddf25cd21_720w.jpg?source=1940ef5c'

    const chous = computed(() => store.getters['totalChou']);
    // const resource = computed(() => store.getters['totalResource']); //可获取的总资源
    // const aaa = ref(false)
    const totalRes = computed(() => {
      const totalRes = store.getters['totalResources'];
      // const info = `${totalRes.shi}源石，${totalRes.yu}合成玉，${totalRes.chou}单抽，${totalRes.chou_10}十连，`
      return totalRes;
    });

    return {
      chous,
      totalRes,
      chou_url,
      chou_10_url,
      yu_url,
      shi_url,
      }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#result{
  text-align: center;
}
</style>
