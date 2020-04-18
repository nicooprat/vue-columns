import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Defaults from './views/Defaults.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/defaults',
    component: Defaults,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
