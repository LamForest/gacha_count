<template>
  <div>
    {{resourceInfo}} 抽
  </div>
  <div>
    {{chous}} 抽
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

    const chous = computed(() => store.getters['totalChou']);
    // const resource = computed(() => store.getters['totalResource']); //可获取的总资源
    // const aaa = ref(false)
    const resourceInfo = computed(() => {
      const totalRes = store.getters['totalResources'];
      const info = `${totalRes.shi}源石，${totalRes.yu}合成玉，${totalRes.chou}单抽，${totalRes.chou_10}十连，`
      return info;
    });

    return {
      chous,
      resourceInfo,
      }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
