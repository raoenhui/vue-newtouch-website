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
import FinCloud from '@/components/Cart/FinCloud'
import MedicalCloud from '@/components/Cart/MedicalCloud'
import EnterPriseCloud from '@/components/Cart/EnterpriseCloud'
import System from '@/components/Cart/System'
import Crm from '@/components/Cart/Crm'
import Image from '@/components/Cart/Image'
import His from '@/components/Cart/His'
import Cpoe from '@/components/Cart/Cpoe'
import Cis from '@/components/Cart/Cis'
import Erm from '@/components/Cart/Erm'
import Pm from '@/components/Cart/Pm'
import BigSystem from '@/components/Cart/BigSystem'
import ClientSystem from '@/components/Cart/ClientSystem'
import ECommerce from '@/components/Cart/ECommerce'
import ExchangeSystem from '@/components/Cart/ExchangeSystem'
import InventSystem from '@/components/Cart/InventSystem'
import UserSystem from '@/components/Cart/UserSystem'
import Join from '@/components/About/Join'
import News from '@/components/About/News'
import Newtouch from '@/components/About/Newtouch'
import Contact from '@/components/About/Contact'
import Support from '@/components/About/Support'
import NewDetail from '@/components/About/NewDetail'

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

        /*行业解决方案delete start*/
        {
          path: 'telecom',
          component: Financial
        },
        {
          path: 'business',
          component: Financial
        },
        {
          path: 'government',
          component: Financial
        },
        {
          path: 'made',
          component: Financial
        },
        {
          path: 'medical',
          component: Financial
        },
        {
          path: 'messages',
          component: Financial
        },
        {
          path: 'transportation',
          component: Financial
        },
        /*行业解决方案delete end*/
        /*行业解决方案 start*/
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
        /*行业解决方案 end*/
      ]
    },
    {
      path: '/help',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/cart',
      component: Cart,
      children: [
        {
          path: '/',
          component: FinCloud
        },
        {
          path:'finCloud',
          component: FinCloud
        },{
          path:'medicalCloud',
          component: MedicalCloud
        },{
          path:'enterPriseCloud',
          component: EnterPriseCloud
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
          path: 'image',
          component: Image
        },
        {
          path: 'his',
          component: His
        },
        {
          path: 'cpoe',
          component: Cpoe
        },
        {
          path: 'cis',
          component: Cis
        },
        {
          path: 'erm',
          component: Erm
        },
        {
          path: 'pm',
          component: Pm
        },
        {
          path: 'bigSystem',
          component: BigSystem
        },
        {
          path: 'clientSystem',
          component: ClientSystem
        },
        {
          path: 'eCommerce',
          component: ECommerce
        },
        {
          path: 'exchangeSystem',
          component: ExchangeSystem
        },
        {
          path: 'inventSystem',
          component: InventSystem
        },
        {
          path: 'userSystem',
          component: UserSystem
        }
      ]
    },
    {
      path: '/about',
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
          path: 'news/:id',
          name:'newDetail',
          component: NewDetail
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
