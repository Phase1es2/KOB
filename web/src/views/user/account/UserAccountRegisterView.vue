<!--
 * @Author: your name
 * @Date: 2024-07-22 23:43:56
 * @LastEditTime: 2024-07-23 20:13:05
 * @LastEditors: momo.local
 * @Description: In User Settings Edit
 * @FilePath: /web/src/views/user/account/UserAccountRegisterView.vue
-->
<template>
    <ContentField>
        <div class="row justify-content-md-center">
            <div class="col-3">
                <form @submit.prevent="register">
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input v-model="username" type="text" class="form-control" id="username"
                            placeholder="please type username">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input v-model="password" type="password" class="form-control" id="password"
                            placeholder="please type password">
                    </div>
                    <div class="mb-3">
                        <label for="confirmedPassword" class="form-label">Confirmed Password</label>
                        <input v-model="confirmedPassword" type="password" class="form-control" id="confirmedPassword"
                            placeholder="please type password again">
                    </div>
                    <div class="error-message">{{ error_message }}</div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </ContentField>
</template>

<script>
import ContentField from '@/components/ContentField.vue'
import { ref } from 'vue';
//import { useStore } from 'vuex';
import router from '@/router/index'
import $ from 'jquery'

export default {
    components: {
        ContentField
    },
    setup() {
       // const store = useStore();
        let username = ref('');
        let password = ref('');
        let confirmedPassword = ref('');
        let error_message = ref('');

        //QUERY BACKEND API
        const register = () => {
            $.ajax({
                url: "http://localhost:3000/user/account/register/",
                type: 'post',
                data: {
                    username: username.value,
                    password: password.value,
                    confirmPassword: confirmedPassword.value,
                },
                success(resp) {
                    //console.log(resp);
                    if(resp.error_message === "success"){
                        router.push({name: "user_account_login"});
                    }else{
                        error_message.value = resp.error_message;
                    }
                },
                //error(resp){
                //    console.log(resp);
                //}
            });
        }

        return {
            username,
            password,
            confirmedPassword,
            error_message,
            register
        }
    }
}
</script>

<style scoped>
button{
    width: 100%;
}
div.error-message{
    color: red;
}
</style>