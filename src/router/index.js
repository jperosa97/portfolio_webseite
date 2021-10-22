import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Werdegang from '../views/Werdegang.vue'
import Projekt from '../views/Projekt.vue'
import Kontakt from '../views/Kontakt.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/werdegang',
    name: 'Werdegang',
    component: Werdegang
  },
  {
    path: '/projekt',
    name: 'Projekt',
    component: Projekt
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: Kontakt
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
