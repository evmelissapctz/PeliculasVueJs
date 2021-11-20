import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Peliculas',
    component: Home
  },
  {
    path: '/:id',
    name: 'Pelicula',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
