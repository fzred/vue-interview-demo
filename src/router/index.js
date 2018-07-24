import Vue from 'vue'
import Router from 'vue-router'

// Container
import Container from '@/views/_layout/Container'

// Modules
import Address from '@/views/address/Index'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/address',
      name: 'Home',
      component: Container,
      children: [
        {
          path: '/address',
          name: 'Address',
          component: Address
        }
      ]
    }
  ]
})

export default router
