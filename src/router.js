import Vue from 'vue'
import Router from 'vue-router'

// import Grafico from '@/pages/Grafico.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Grafico',
      component: () => import('@/pages/Grafico.vue')
    }
  ]
})

export default router
