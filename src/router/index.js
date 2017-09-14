import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Main from '@/components/Main'
import Cart from '@/components/Cart'
import About from '@/components/About'
import Program from '@/components/Program'
import Scheme from '@/components/Program/Scheme'
import Financial from '@/components/Program/Financial'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/program',
      name: 'Program',
      component: Program,
      children: [
        {
          path: 'scheme',
          component: Scheme
        },
        {
          path: 'financial',
          component: Financial
        }
      ]
    },
    {
      path: '/help',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
