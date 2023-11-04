import { createRouter, createWebHistory } from 'vue-router';
import home from './home';
import chart from './chartReport';
import progress from './progressReport';
import overView from './overViewReport';
import notFoundComponent from '@/components/Controls/notFound.vue';

const routes = [
  { path: '/:pathMatch(.*)*', redirect: { name: 'notFound' } },
  { path: '/404', name: 'notFound', component: notFoundComponent },
  {
    path: '/qrCodeScan',
    name: 'qrCodeScan',
    component: () => import('@/pages/qrCodeScan/index.vue')
  },

  ...home,
  ...chart,
  ...progress,
  ...overView,

]

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL)
})

export default router
