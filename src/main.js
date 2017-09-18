// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Crumbs from './components/Common/Crumbs'
import $ from 'jquery'
import 'bootstrap/js/bootstrap.min.js'
import 'bootstrap/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.min.js'

Vue.config.productionTip = false
// Vue.component('Crumbs', {
//   // props: ['data'],
//   template: '<Crumbs/>'
// })
/* eslint-disable no-new */
var vm =new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
