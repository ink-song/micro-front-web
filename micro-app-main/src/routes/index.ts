import Home from '@/views/Home.vue'
import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
]

export const router = new VueRouter({
  mode: 'history',
  routes,
})
