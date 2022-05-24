<template>
  <!-- <el-row justify="space-between" > -->
    <!-- <div class="busuanzi" id='header-container'> -->
      <el-tag class="ml-2" type="success" size='large' >
      <span id="my_busuanzi_container" >
        总计查询次数：
        <span id="busuanzi_value_site_pv"></span>
      </span>
      </el-tag>

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

let script;
export default {
  mounted() {
    script = require("busuanzi.pure.js");
    //不是js的fetch，是不蒜子的fetch，向服务器请求数据
    //得到数据后将busuanzi_value_site_uv/pv.innerHTML设为访问数
    script.fetch() 
    
  },
  // 监听,当路由发生变化的时候执行

}
</script>

<style scoped>
.el-tag{
  margin: 0;

}

#myAvatar{
    /* flex: 1; */
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-grow: 0;
}

</style>