<!--
 * @Author: your name
 * @Date: 2024-07-16 21:30:33
 * @LastEditTime: 2024-07-16 21:45:09
 * @LastEditors: momo.local
 * @Description: In User Settings Edit
 * @FilePath: /KOB/web/src/components/PlayGround.vue
-->
<template>
    <div class="playground">
        <GameMap />
    </div>
</template>

<script>
import GameMap from './GameMap.vue'

export default {
    components: {
        GameMap,
    }
}
</script>

<style scoped>
div.playground {
    width: 60vw;
    height: 80vh;
    /*background: lightblue;*/
    margin: 40px auto;
}
</style>