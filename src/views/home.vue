<template>
    <div class="common-layout">
    <el-container>
      <el-header id='header'>
        <my-header />
      </el-header>
      <el-main>
          
          <hello-world/>
      </el-main>
      <el-footer>
        <my-footer/>  
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import HelloWorld from "./HelloWorld.vue"
import MyFooter from './MyFooter.vue'

export default {
    components: {
        HelloWorld,
        MyHeader,
        MyFooter,
        // Home,
    },
}
</script>

<style scoped>

 .el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: var(--el-color-primary-light-7); */
  padding: 0;
  color: var(--el-text-color-primary);
}
.el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
 .el-menu {
  border-right: none;
}
 .el-main {
  padding: 0;
}
</style>