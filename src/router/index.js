import { createRouter, createWebHistory } from 'vue-router';
import home from './home';
import chart from './chartReport';
import progress from './progressReport';
import overView from './overViewReport'

const routes = [
  ...home,
  ...chart,
  ...progress,
  ...overView,
  {
    path: '/qrCodeScan',
    name: 'qrCodeScan',
    component: () => import('@/pages/qrCodeScan/index.vue')
  }

]

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL)
})

export default router
