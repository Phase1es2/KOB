<!--
 * @Author: your name
 * @Date: 2024-07-16 21:38:58
 * @LastEditTime: 2024-07-17 19:51:15
 * @LastEditors: momo.local
 * @Description: In User Settings Edit
 * @FilePath: /KOB/web/src/components/GameMap.vue
-->
<template>
    <div ref="parent" class="gamemap">
        <canvas ref="canvas" tabindex="0"></canvas>
    </div>
</template>

<script>
import { GameMap } from "@/assets/scripts/GameMap.js";
import { ref, onMounted } from 'vue';

export default {
    setup() {
        let parent = ref(null);
        let canvas = ref(null);

        onMounted(() => {
            new GameMap(canvas.value.getContext('2d'), parent.value)
        });
        
        return {
            parent,
            canvas,
        }
    }
}


</script>

<style scoped>
div.gamemap {
    width: 100%;
    height: 100%;
    display: flex;
    /*水平数值居中 */
    justify-content: center;
    align-items: center;
}
</style>