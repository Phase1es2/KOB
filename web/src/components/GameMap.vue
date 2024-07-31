<!--
 * @Author: your name
 * @Date: 2024-07-16 21:38:58
 * @LastEditTime: 2024-07-31 00:27:33
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
import { GameMap } from "@/assets/scripts/GameMap";
import { ref, onMounted } from 'vue'
import { useStore } from "vuex";

export default {
    setup() {
        const store = useStore();
        let parent = ref(null);
        let canvas = ref(null);

        onMounted(() => {
            new GameMap(canvas.value.getContext('2d'), parent.value, store)
        });

        return {
            parent,
            canvas
        }
    }
}
</script>

<style scoped>
div.gamemap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
