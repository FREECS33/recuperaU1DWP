import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Inicio.vue')
    },
    {
      path: '/pagination',
      name: 'pagination',
      component: () => import('../views/Pagination.vue')
    }
  ]
})

export default router
