import SystemList from '@/views/system/index.vue'
import Home from '@/Home/index.vue'
import { RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/list',
    name: 'system',
    component: SystemList,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
]
export default routes
