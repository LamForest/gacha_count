<template>
    <el-divider content-position="center" >
      <el-button type="" text>
        {{ title + (isExpand ? "（点击收起）" : "（点击展开）") }}
      </el-button>
    </el-divider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'



export default defineComponent({
    props:{
        isExpand: {
            required: true,
            type: Boolean,
        },
        title: {
            required: true,
            type: String,
        }
    },
    setup() {
        // const isExpand = ref<Boolean>(false);
        // return {isExpand}
    },

})
</script>

<style scoped>

</style>
