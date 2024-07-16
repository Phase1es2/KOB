<template>
  <div>
    <div>Bot Name: {{ bot_name }}</div>
    <div>Bot Strength: {{ bot_ranking }}</div>
  </div>
  <router-view/>
</template>

<script>
import $ from 'jquery';
import { ref } from 'vue';



export default{
  name: "App",
  setup: () => {
    let bot_name = ref("");
    let bot_ranking = ref("");
    
    $.ajax({
      url: "http://127.0.0.1:3000/pk/getbotinfo/",
      type: "get",
      success: resp => {
        bot_name.value = resp.name;
        bot_ranking.value = resp.ranking
      }
    });

    return{
      bot_name,
      bot_ranking
    }
  }

}
</script>

<style>
body{
  background-image: url("@/assets/background.png");
  background-size: cover;
}
</style>
