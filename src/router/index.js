import Vue from 'vue'
import VueRouter from 'vue-router'
import meuInicio from '../views/meuInicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'meuInicio',
    component: meuInicio
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
