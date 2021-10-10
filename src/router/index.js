import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/index.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  {
    path:'/',
    component:Index,
    redirect: "index"
  },
  {
    path:'/Index',
    component:Index,
  },
  {
    path:'/login',
    component:Login,
  },
  {
    path:'/register',
    component:Register,
  },
  {
    path:'/About',
    component:About,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
