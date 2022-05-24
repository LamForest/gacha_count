<template>
    <div>

    </div>
</template>


<script lang="ts">
import { ActivityItem } from '@/interface/types';
import { useStore } from '@/store/store'
import { activityShopList, newActivityList, otherList, regularList, summerList } from '@/utils/data';
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const store = useStore();

        for(const ind in newActivityList){
            store.commit('check', newActivityList[ind])
        }

        for(const ind in activityShopList){
            store.commit('check', activityShopList[ind])
        }

        regularList.forEach((item)=>{
            store.commit('check', item);
        })

        summerList.forEach((item) =>{
            store.commit('check', item);
        })

        otherList.forEach((item) =>{
            store.commit('check', item);
        })
    },
})
</script>
