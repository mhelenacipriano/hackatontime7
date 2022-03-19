import Vue from 'vue'
import VueRouter from 'vue-router'
import meuInicio from '../views/meuInicio.vue'
import paginaDenuncias from '../views/paginaDenuncias.vue'
import paginaNoticias from '../views/paginaNoticias.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'meuInicio',
    component: meuInicio
  },
  {
    path: '/paginaDenuncias',
    name: 'paginaDenuncias',
    component: paginaDenuncias
  },
  {
    path: '/paginaNoticias',
    name: 'paginaNoticias',
    component: paginaNoticias
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
