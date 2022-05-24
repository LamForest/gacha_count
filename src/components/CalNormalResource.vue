<template>
    <div>

    </div>
</template>


<script lang="ts">
import { ActivityItem } from '@/interface/types';
import { useStore } from '@/store/store'
import { activityShop, newActivityList } from '@/utils/data';
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const store = useStore();

        for(const ind in newActivityList){
            store.commit('check', newActivityList[ind])
        }

        for(const ind in activityShop){
            store.commit('check', activityShop[ind])
        }
    },
})
</script>
