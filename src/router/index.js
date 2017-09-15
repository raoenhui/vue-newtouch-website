import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Main from '@/components/Main'
import Cart from '@/components/Cart'
import About from '@/components/About'
import Program from '@/components/Program'
import Scheme from '@/components/Program/Scheme'
import Financial from '@/components/Program/Financial'
import Palm from '@/components/Cart/Palm'
import System from '@/components/Cart/System'
import Crm from '@/components/Cart/Image'
import His from '@/components/Cart/His'
import Image from '@/components/Cart/Image'
import Pm from '@/components/Cart/Pm'

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
          path: '/',
          component: Scheme
        },
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
      component: Cart,
      children: [
        {
          path: '/',
          component: Palm
        },
        {
          path: 'palm',
          component: Palm
        },
        {
          path: 'system',
          component: System
        },
        {
          path: 'crm',
          component: Crm
        },
        {
          path: 'his',
          component: His
        },
        {
          path: 'image',
          component: Image
        },
        {
          path: 'pm',
          component: Pm
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
