// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Crumbs from './components/Common/Crumbs'
// import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"

Vue.config.productionTip = false
// Vue.component('Crumbs', {
//   // props: ['data'],
//   template: '<Crumbs/>'
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
