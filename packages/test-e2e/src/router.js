import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Defaults from './views/Defaults.vue'
import Responsive from './views/Responsive.vue'

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
  {
    path: '/responsive',
    component: Responsive,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
