import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReactivityView from '../views/ReactivityView.vue'
import PiniaView from '../views/PiniaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/reactivity',
      name: 'reactivity',
      component: ReactivityView,
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: PiniaView,
    },
  ],
})

export default router
