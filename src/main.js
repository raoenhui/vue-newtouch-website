// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'bootstrap/css/bootstrap.min.css'
import "font-awesome/css/font-awesome.css";
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/js/bootstrap.min.js'

import $ from 'jquery'

Vue.config.productionTip = false

/* eslint-disable no-new */
var vm =new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
