import Vue from 'vue'
import VueRouter from 'vue-router'
// import goods from '../components/goods/goods.vue'
// import ratings from '../components/ratings/ratings.vue'
// import seller from '../components/seller/seller.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'goods',
    component: () => import('../components/goods/goods.vue')
  },
  {
    path: '/goods',
    name: 'goods',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:  () => import('../components/goods/goods.vue')
  },
  {
    path: '/ratings',
    name: 'ratings',
    component: () => import('../components/ratings/ratings.vue')
  },
  {
    path: '/seller',
    name: 'seller',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:  () => import('../components/seller/seller.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active'
})

export default router
