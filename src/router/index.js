import { createRouter, createWebHistory } from 'vue-router';
import home from './home';
import chart from './chartReport';

const routes = [
  ...home,
  ...chart
]

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL)
})

export default router
