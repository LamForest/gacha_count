<template>
  <resouce-result/>
  <user-input/>

  <div>
    <collapse-details />
  </div>
</template>

<script lang="ts">
import { defineComponent} from "@vue/runtime-core";

//引入组件
import CollapseDetails from "../components/CollapseDetails.vue";
import ResouceResult from "../components/ResourceResult.vue"
import PurchaseSelection from '../components/PurchaseSelection.vue'
import UserInput from "./UserInput.vue";
// import


export default defineComponent({
  components:{
    CollapseDetails,
    ResouceResult,
    UserInput,
  },
  // setup(){
  // }
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
