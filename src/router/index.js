import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Main from '@/components/Main'
import Cart from '@/components/Cart'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
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
