import { createRouter, createWebHistory } from 'vue-router'
import home from './home'

const routes = [
  ...home
]

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL)
})

export default router
