import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/sync'
  },
  {
    path: '/manual',
    name: 'manual',
    component: () => import(/* webpackChunkName: "about" */ '../views/manual')
  },
  {
    path: '/sync',
    name: 'sync',
    component: () => import(/* webpackChunkName: "about" */ '../views/sync')
  }
]

const router = new VueRouter({
  routes
})

export default router
