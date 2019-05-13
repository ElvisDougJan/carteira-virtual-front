import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Grafico',
      component: () => import('@/pages/Grafico.vue')
    },
    {
      path: '/movimentacao',
      name: 'Movimentacao',
      component: () => import('@/pages/Movimentacao.vue')
    },
    {
      path: '/lista-movimentacoes',
      name: 'ListaMovimentacoes',
      component: () => import('@/pages/Listas.vue')
    }
  ]
})

export default router
