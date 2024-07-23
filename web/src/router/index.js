import { createRouter, createWebHistory } from 'vue-router'
import PkIndexView from '../views/pk/PkIndexView.vue'
import RanklistIndexView from '../views/ranklist/RanklistIndexView.vue'
import RecordindexView from '../views/record/RecordIndexView.vue'
import UserBotIndexView from '../views/user/bot/UserBotIndexView.vue'
import NotFound from '../views/error/NotFound.vue'
import UserAccountLoginView from '../views/user/account/UserAccountLoginView.vue'
import UserAccountRegisterView from '../views/user/account/UserAccountRegisterView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/pk/',
  },
  {
    path: '/pk/',
    name: 'pk_index',
    component: PkIndexView, // Ensure the component is imported correctly
  },
  {
    path: '/record/',
    name: 'record_index',
    component: RecordindexView, // Ensure the component is imported correctly
  },
  {
    path: '/ranklist/',
    name: 'ranklist_index',
    component: RanklistIndexView, // Ensure the component is imported correctly
  },
  {
    path: '/user/bot/',
    name: 'user_bot_index',
    component: UserBotIndexView, // Ensure the component is imported correctly
  },
  {
    path: '/user/account/login/',
    name: 'user_account_login',
    component: UserAccountLoginView, // Ensure the component is imported correctly
  },
  {
    path: '/user/account/register/',
    name: 'user_account_register',
    component: UserAccountRegisterView, // Ensure the component is imported correctly
  },
  {
    path: '/404/',
    name: '404',
    component: NotFound, // Ensure the component is imported correctly
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

export default router
