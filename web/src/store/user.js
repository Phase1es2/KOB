/*
 * @Author: your name
 * @Date: 2024-07-23 00:05:55
 * @LastEditTime: 2024-07-23 01:06:34
 * @LastEditors: momo.local
 * @Description: In User Settings Edit
 * @FilePath: /web/src/store/user.js
 */

//user.js use to store user's information;
import $ from 'jquery'
export default{
    state: {
        id: "",
        username: "",
        photo: "",
        token: "",
        is_login: false,
    },
    getters: {
    },
    mutations: {
        // use to modifity data
        updateUser(state, user){
            state.id = user.id;
            state.username = user.username;
            state.photo = user.photo;
            state.is_login = user.is_login;
        },
        updateToken(state, token){
            state.token = token;
        },
        logout(state){
            state.id = '';
            state.username = '';
            state.photo = '';
            state.token = '';
            state.is_login = false;
        }
    },
    //in action call the function from mutation need to use commit;
    actions: {
        login(context, data){
            $.ajax({
                url: "http://localhost:3000/user/account/token/",
                type: 'post', 
                data: {
                  username: data.username, 
                  password: data.password, 
                }, 
                success (resp) {
                    if(resp.error_message === "success"){
                        context.commit("updateToken", resp.token);
                        data.success(resp);
                    } else{
                        data.error(resp);
                    }
                },
                error (resp) {
                  data.error(resp);
                }
              });
        },
        getinfo(context, data){
            $.ajax({
                url: "http://localhost:3000/user/account/info/", 
                type: 'get', 
                // header协议参见 com/kob/backend/configs/filter/JwtAuthenticationTokenFilter.java
                headers: {
                  Authorization: "Bearer " + context.state.token,
                }, 
                success (resp) {
                    if(resp.error_message === "success"){
                        context.commit("updateUser", {
                            ...resp,
                            is_login: true,
                        });
                        data.success(resp);
                    }else data.error_message(resp);
                },
                error (resp) {
                  data.error_message(resp);
                }
              });
        },
        logout(context){
            context.commit("logout");
        }

    },
    modules: {
    }
}