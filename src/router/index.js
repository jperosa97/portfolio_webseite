import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Zeugnis from '../views/Zeugnis.vue'
import Werdegang from '../views/Werdegang.vue'
import Projekt from '../views/Projekt.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/zeugnis',
    name: 'Zeugnis',
    component: Zeugnis
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
