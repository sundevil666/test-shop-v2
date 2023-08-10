import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: () => import('../views/AboutPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
