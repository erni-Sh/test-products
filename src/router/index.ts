import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ProductList from '@/views/ProductList.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Product List',
    component: ProductList
  }, {
    path: '/products/:id',
    name: 'Product',
    component: () => import('@/views/ProductInner.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
