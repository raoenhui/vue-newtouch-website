import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Main from '@/components/Main'
import Cart from '@/components/Cart'
import About from '@/components/About'
import Program from '@/components/Program'
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
import PrivateCloud from '@/components/Cart/PrivateCloud'
import MixtureCloud from '@/components/Cart/MixtureCloud'
import DisasterCloud from '@/components/Cart/DisasterCloud'
import BigData from '@/components/Cart/BigData'
import Consult from '@/components/Cart/Consult'
import Ops from '@/components/Cart/Ops'
import Pay from '@/components/Cart/Pay'
import Cpoe from '@/components/Cart/Cpoe'
import Cis from '@/components/Cart/Cis'
import Pharmacy from '@/components/Cart/Pharmacy'
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
import NewDetail1 from '@/components/About/NewDetail1'
import NewDetail2 from '@/components/About/NewDetail2'
import NewDetail3 from '@/components/About/NewDetail3'
import NewDetail4 from '@/components/About/NewDetail4'
import NewDetail5 from '@/components/About/NewDetail5'

Vue.use(Router);

export default new Router({
  mode: 'history',
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
          redirect: 'financial'
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
      component: Cart,
      children: [
        {
          path: '/',
          redirect: 'finCloud'
        },
        {
          path: 'finCloud',
          component: FinCloud
        }, {
          path: 'medicalCloud',
          component: MedicalCloud
        }, {
          path: 'enterPriseCloud',
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
          path: 'bigData',
          component: BigData
        },
        {
          path: 'consult',
          component: Consult
        },
        {
          path: 'disasterCloud',
          component: DisasterCloud
        },
        {
          path: 'mixtureCloud',
          component: MixtureCloud
        },
        {
          path: 'ops',
          component: Ops
        },
        {
          path: 'pay',
          component: Pay
        },
        {
          path: 'privateCloud',
          component: PrivateCloud
        },
        {
          path: 'cpoe',
          component: Cpoe
        },
        {
          path: 'cis',
          component: Cis
        }, {
          path: 'pharmacy',
          component: Pharmacy
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
          redirect: 'newtouch'
        }, {
          path: 'newtouch',
          component: Newtouch
        }, {
          path: 'join',
          component: Join
        }, {
          path: 'news',
          component: News
        }, {
          path: 'newDetail1',
          component: NewDetail1
        }, {
          path: 'newDetail2',
          component: NewDetail2
        }, {
          path: 'newDetail3',
          component: NewDetail3
        }, {
          path: 'newDetail4',
          component: NewDetail4
        }, {
          path: 'newDetail5',
          component: NewDetail5
        }, {
          path: 'contact',
          component: Contact
        }, {
          path: 'support',
          component: Support
        }]
    },
    {path: '*', component: Main, name: 'notfound'}
  ]
})
