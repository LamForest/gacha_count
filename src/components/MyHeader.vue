<template>
  <!-- <el-row justify="space-between" > -->
    <!-- <div class="busuanzi" id='header-container'> -->
      
      <el-tag class="ml-2" type="info" size='large' >
      <span id="my_busuanzi_container" >
        累计访问人数：
        <span id="busuanzi_value_site_pv"></span>
      </span>
      </el-tag>
      <div id='img-container'>
      <el-image 
      src='https://pic1.zhimg.com/80/v2-477fdfbbbd398fc966cf14e6cc04fbc0_720w.jpg?source=1940ef5c'
      fit='contain'

      />
      </div>
        

      <div id='myAvatar' v-if='false'>
        <!-- <el-col> -->
        <a href='https://lamforest.github.io/'>
        <el-avatar
          src='https://avatars.githubusercontent.com/u/17798738'
          />
        </a>
        <span>
        by GeT Left
        </span>
        <!-- </el-col> -->
      </div>

    <!-- </div> -->




  <!-- </el-row> -->



</template>

<script>
import { computed, defineComponent, ref } from "vue";

let script;
export default defineComponent({
  setup() {
    script = require("busuanzi.pure.js");
    //不是js的fetch，是不蒜子的fetch，向服务器请求数据
    //得到数据后将busuanzi_value_site_uv/pv.innerHTML设为访问数
    script.fetch();

    return {};
  },
});
</script>

<style scoped>
/* .el-tag{
  margin: 0;

} */
#my_busuanzi_container {
  /* font-size: ; */
  font-weight: 700;
  font-size: 13px;
}

#myAvatar {
  /* flex: 1; */
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 0;
}

#img-container {
  width: 20%;
  margin-right: 0;
}
</style>