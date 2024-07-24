import { createRouter, createWebHistory } from 'vue-router'
import PkIndexView from '../views/pk/PkIndexView.vue'
import RanklistIndexView from '../views/ranklist/RanklistIndexView.vue'
import RecordindexView from '../views/record/RecordIndexView.vue'
import UserBotIndexView from '../views/user/bot/UserBotIndexView.vue'
import NotFound from '../views/error/NotFound.vue'
import UserAccountLoginView from '../views/user/account/UserAccountLoginView.vue'
import UserAccountRegisterView from '../views/user/account/UserAccountRegisterView.vue'
import store from '@/store/index'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/pk/',
    meta: {
      requestAuth: true,
    }
  },
  {
    path: '/pk/',
    name: 'pk_index',
    component: PkIndexView, // Ensure the component is imported correctly
    meta: {
      requestAuth: true,
    }
  },
  {
    path: '/record/',
    name: 'record_index',
    component: RecordindexView, // Ensure the component is imported correctly
    meta: {
      requestAuth: true,
    }
  },
  {
    path: '/ranklist/',
    name: 'ranklist_index',
    component: RanklistIndexView, // Ensure the component is imported correctly
    meta: {
      requestAuth: true,
    }
  },
  {
    path: '/user/bot/',
    name: 'user_bot_index',
    component: UserBotIndexView, // Ensure the component is imported correctly
    meta: {
      requestAuth: true,
    }
  },
  {
    path: '/user/account/login/',
    name: 'user_account_login',
    component: UserAccountLoginView, // Ensure the component is imported correctly
    meta: {
      requestAuth: false,
    }
  },
  {
    path: '/user/account/register/',
    name: 'user_account_register',
    component: UserAccountRegisterView, // Ensure the component is imported correctly
    meta: {
      requestAuth: false,
    }
  },
  {
    path: '/404/',
    name: '404',
    component: NotFound, // Ensure the component is imported correctly
    meta: {
      requestAuth: false,
    }
  },
  {
    path: '/:catchALL(.*)',
    redirect: '/404/',
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

//to jump to which page
//from which page
//next do we need next step?
router.beforeEach((to, from, next) =>{
  if(to.meta.requestAuth && !store.state.user.is_login){
    next({name: "user_account_login"});
  }else{
    next();
  }
})

export default router
