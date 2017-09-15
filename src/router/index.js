import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Main from '@/components/Main'
import Cart from '@/components/Cart'
import About from '@/components/About'
import Program from '@/components/Program'
import Scheme from '@/components/Program/Scheme'
import Financial from '@/components/Program/Financial'
import Telecom from '@/components/Program/Telecom'
import Government from '@/components/Program/Government'
import Business from '@/components/Program/Business'
import Made from '@/components/Program/Made'
import Medical from '@/components/Program/Medical'
import Messages from '@/components/Program/Messages'
import Transportation from '@/components/Program/Transportation'
import Palm from '@/components/Cart/Palm'
import System from '@/components/Cart/System'
import Crm from '@/components/Cart/Image'
import His from '@/components/Cart/His'
import Image from '@/components/Cart/Image'
import Pm from '@/components/Cart/Pm'
import Join from '@/components/About/Join'
import News from '@/components/About/News'
import Newtouch from '@/components/About/Newtouch'
import Contact from '@/components/About/Contact'
import Support from '@/components/About/Support'

Vue.use(Router);

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
        },
        {
          path: 'telecom',
          component: Telecom
        },
        {
          path: 'business',
          component: Business
        },
        {
          path: 'government',
          component: Government
        },
        {
          path: 'made',
          component: Made
        },
        {
          path: 'medical',
          component: Medical
        },
        {
          path: 'messages',
          component: Messages
        },
        {
          path: 'transportation',
          component: Transportation
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
      component: About,
      children: [
        {
          path: '/',
          component: Newtouch
        },{
          path: 'newtouch',
          component: Newtouch
        },{
          path: 'join',
          component: Join
        },{
          path: 'news',
          component: News
        },{
          path: 'contact',
          component: Contact
        },{
          path: 'support',
          component: Support
        }]
    }
  ]
})
