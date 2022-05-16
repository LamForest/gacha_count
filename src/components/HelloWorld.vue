<template>
  <div class="hello">

    <p>
    今天 [{{format_date(today_date)}}] - {{pool_name}} 限定池结束 [{{format_date(pool_date)}}]
    </p>

    <p>
      历时 {{months}}月 {{weeks}}周 {{days}}天
    </p>

    <h3> </h3>

    <div>
      <el-checkbox v-model="is_fuchao_new" label="去年没有参与覆潮之下活动" size="default" @change='compute()'/>
      <el-checkbox v-model="is_duosuo_new" label="去年没有参与多索雷斯活动" size="default" @change='compute()' />
    </div>

    <!-- Element+ -->
    <div>
      <el-checkbox v-model="is_monthly_card" label="月卡玩家" size="default" @change='compute()' />
      <el-checkbox v-model="is_big_monthly_card" label="大月卡玩家" size="default" @change='compute()' />

    </div>

    <!-- 礼包，按每抽价格从低到高 参考：https://ngabbs.com/read.php?tid=31618594 -->
    <div> 
      <el-checkbox-group v-model="checked" @change="handleChecked">
        <el-checkbox v-for="(item, index) in purchase_items" :label="index" :key="index">{{item.label}}</el-checkbox>
      </el-checkbox-group> 
       <!-- 其余礼包性价比急剧降低，不推荐 -->
    </div>


    <p>
      {{ cmsg }}
    </p>
    <div id='result' style="width: 600px; margin: auto">
    <Details :details="[['title 1', details], ['title 2', 'content 2']]" />
    </div>
  </div>  
</template>

<script lang="ts">
// import { Options, Vue } from "vue-class-component";
import { Component, Vue } from 'vue-property-decorator'

// @Options({
//   props: {
//     msg: String,
//   },
// })
@Component
export default class HelloWorld extends Vue {
  
}
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
