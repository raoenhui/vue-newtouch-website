import 'bootstrap/css/bootstrap.min.css'
import "font-awesome/css/font-awesome.css";
import "babel-polyfill";
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/js/bootstrap.min.js'
import $ from 'jquery'
import store from './store/'

Vue.config.productionTip = false


window.VUE = new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
