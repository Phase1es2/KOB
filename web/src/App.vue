<template>
  <NavBar />
  <router-view></router-view>
</template>

<script>
  import NavBar from "./components/NavBar.vue"
  import "bootstrap/dist/css/bootstrap.min.css"
  import "bootstrap/dist/js/bootstrap"
  //import $ from 'jquery'

  export default {
    components: {
      NavBar
    },
    
    setup () {

      
      /*
      $.ajax({
        url: "http://localhost:3000/user/account/token/",
        type: 'post', 
        data: {
          username: 'yh', 
          password: 'pyh', 
        }, 
        success (resp) {
          console.log(resp)
        },
        error (resp) {
          console.log(resp)
        }
      }) */
/*
      
      $.ajax({
        url: "http://localhost:3000/user/account/info/", 
        type: 'get', 
        // header协议参见 com/kob/backend/configs/filter/JwtAuthenticationTokenFilter.java
        headers: {
          Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJmMWRjNzAyZTAyNzA0YWFjYjJkYzg0NTA2YTFhY2Q1ZiIsInN1YiI6IjEiLCJpc3MiOiJzZyIsImlhdCI6MTcyMTcxNTMxMSwiZXhwIjoxNzIyOTI0OTExfQ.dVutG8V1vUSu0jfkD21ee9Kn5uIb1VS-FYJx7u5uCGs",
        }, 
        success (resp) {
          console.log(resp)
        },
        error (resp) {
          console.log(resp)
        }
      })
      
      
      $.ajax({
        url: "http://localhost:3000/user/account/register/", 
        type: 'post', 
        data: {
          username: 'lyl', 
          password: 'plyl', 
          confirmPassword: 'plyl'
        }, 
        success (resp) {
          console.log(resp)
        }, 
        error (resp) {
          console.log(resp)
        }
      })*/

    }
  }
</script>

<style>
body{
  background-image: url("@/assets/images/background.png");
  background-size: cover;
}
</style>
