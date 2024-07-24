<!--
 * @Author: your name
 * @Date: 2024-07-16 19:52:27
 * @LastEditTime: 2024-07-23 22:39:05
 * @LastEditors: momo.local
 * @Description: In User Settings Edit
 * @FilePath: /KOB/web/src/views/user/bots/UserBotsIndexView.vue
-->
<template>
    <ContentField>
        My Bots
    </ContentField>
</template>

<script>
import ContentField from '../../../components/ContentField.vue'
import $ from 'jquery'
import { useStore } from 'vuex';
export default{
    components: {
        ContentField
    },
    setup(){
        const store = useStore();
        // $.ajax({
        //     url: "http://localhost:3000/user/bot/add/",
        //     type: "post",
        //     data: {
        //         title: "My Bots' title",
        //         description: "MY Bots' description",
        //         content: "My Bots' code",
        //     },
        //     headers: {
        //         Authorization: "Bearer " + store.state.user.token,
        //     },
        //     success(resp){
        //         console.log(resp);
        //     },
        //     error(resp){
        //         console.log(resp);
        //     }
        // })
       /* $.ajax({
            url: "http://localhost:3000/user/bot/remove/",
            type: "post",
            data: {
                bot_id: 1,
            },
            headers: {
                Authorization: "Bearer " + store.state.user.token,
            },
            success(resp){
                console.log(resp);
            },
            error(resp){
                console.log(resp);
            }
        })*/
        // $.ajax({
        //     url: "http://localhost:3000/user/bot/update/",
        //     type: "post",
        //     data: {
        //         bot_id: 5,
        //         title: "update bots",
        //         description: "555555",
        //         content: "Hello World",
        //     },
        //     headers: {
        //         Authorization: "Bearer " + store.state.user.token,
        //     },
        //     success(resp){
        //         console.log(resp);
        //     },
        //     error(resp){
        //         console.log(resp);
        //     }
        // })
        $.ajax({
            url: "http://localhost:3000/user/bot/getlist/",
            type: "get",
            headers: {
                Authorization: "Bearer " + store.state.user.token,
            },
            success(resp){
                console.log(resp);
            },
            error(resp){
                console.log(resp);
            }
        })
    }
}
</script>

<style scoped>

</style>