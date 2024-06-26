import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ProductList from '@/views/ProductsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Product List',
    component: ProductList
  }, {
    path: '/:q',
    name: 'Search',
    component: ProductList,
  }, {
    path: '/products/:id',
    name: 'Product',
    component: () => import('@/views/ProductInnerPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
